# Events & Quests: how it is built

The [Events & Quests chapter](/basic/events-and-quests/) explains the editors. This page is the map of the code: what the parts are, who holds the state, what happens when a trigger fires, how the state is saved, and how to add your own triggers and actions. See [Definitions and instances](/advanced/definitions-and-instances) first if those words are new.

## The parts

| Class | What it is |
|---|---|
| [`Event`](/advanced/events-and-quests/events/event) | A database resource (type `event`): `triggers`, `conditions`, `actions`, `local_variables`, `enabled`. It also runs itself |
| [`EventTrigger`](/advanced/events-and-quests/bases/event-trigger) and its 78 kinds | The "when". A resource that listens to the game and emits `triggered` |
| [`Condition`](/advanced/shared-systems/condition-bases/condition) and its kinds | The "if": `evaluate()` |
| [`EventAction`](/advanced/events-and-quests/bases/event-action) and its kinds | The "do": a small state machine that finishes with `complete()` or `fail()` |
| [`Quest`](/advanced/events-and-quests/events/quest), [`QuestObjective`](/advanced/events-and-quests/events/quest-objective), [`QuestLine`](/advanced/events-and-quests/events/quest-line) | Database resources (types `quest`, `questline`) that also run themselves |
| [`GlobalVariable`](/advanced/events-and-quests/events/global-variable), `LocalVariables` | The named values |
| [`PopupData`](/advanced/events-and-quests/popups/popup-data), [`PopupManager`](/advanced/events-and-quests/popups/popup-manager), `PopupUI` | Popups |
| [`EventManager`](/advanced/events-and-quests/runtime/event-manager) | One node. Holds the **copies** of every event, quest and quest line, the lists of what is active or done, the global variables; saves and loads them |

## Definitions and copies

`EventManager.initialize(system_hub)` **duplicates** every `Event`, `Quest` and `QuestLine` of the database into dictionaries (`events`, `quests`, `quest_lines`). The copies carry the state and run themselves; the resources of the database are never changed. A node that holds a quest (a conversation, a reward) must ask the manager for the **running copy** (`get_quest(id)`), not the resource from `Database`: asking the resource always says "inactive" and completing it completes nothing.

The lists are ids: `active_events`, `completed_events`, `failed_events`, `active_quests`, `completed_quests`, `active_quest_lines`, `completed_quest_lines`, `tracked_quests`, and `popups_seen` (the popups with *Show once* that were shown). Ids are `int`; a loaded save converts the floats JSON gives back.

## What happens when a trigger fires

1. **Setup.** `setup_all_events()` calls `Event.setup_triggers()` for every enabled event: each trigger gets the `system_hub`, connects to the signals it needs in `setup()`, and the event listens to its `triggered`. The `TransitionManager` takes the signals off (`cleanup_event_triggers`) before a change of world and puts them back after, so a trigger is **set up again after every swap** and must not lose its progress (`reset()` and `set_progress()` on the counting triggers).
2. **Fire.** A trigger calls `emit_triggered(event_data)`. `Event._on_trigger_activated` emits `trigger_activated` (the manager listens, for the objectives), then checks `can_trigger()` (`enabled`, and not `IN_PROGRESS`) and the conditions (all must pass: `conditions_failed` otherwise).
3. **Run.** `start()` resets every action, then runs them one at a time: `_start_next_action` connects to the action's `event_action_completed` / `event_action_failed`, starts it, and goes on when it completes. A failing action fails the event (`FAILED`); the last action completing completes it (`COMPLETED`). The next trigger fires the event again, from the first action.
4. **Actions.** An action is a state machine: `NOT_STARTED`, `IN_PROGRESS`, `COMPLETED`, `FAILED`. `start()` calls `_on_start()` and `_execute_action()`; the action calls `complete()` or `fail()` when it is done (immediately, or later: a timer, a signal, a popup closing). `reset()` puts it back, and `_on_reset()` is where it lets go of what it held.

### Save and load of events

`Event.save()` / `load_data()` and `EventAction.save()` / `load_data()` write the state, the index of the running action and the local variables. A load restores the state only; `resume()` then runs again, from its start, the action that was `IN_PROGRESS`, after the event is listening to it. Only events that were touched are in the save.

## Quests

A quest is `INACTIVE`, `ACTIVE`, `READY_TO_HAND_IN`, `COMPLETED`, `FAILED` or `ON_COOLDOWN`.

- **`can_start()`** is the one question "can this be taken now": it must be waiting (not running, not handed in, not on a cooldown); a quest done once only again if repeatable with repeats left; a failed one only if failing is not final. `activate()` returns whether it started. `EventManager.activate_quest` and the conversation both use it.
- **Objectives** are numbered by position (`id`, 0 = position). Each objective owns an `EventTrigger` and connects to it on `activate`; `connect_objectives` is called again when a save is loaded, so a loaded quest still hears the world. An objective is `INACTIVE`, `ACTIVE`, `COMPLETED` or `FAILED`; `optional` ones do not count for completion or failure. When the quest ends its objectives stop listening (`_stop_listening`).
- **Completing.** `complete()` grants the rewards through `player.grant_reward`. A reward that needs room waits (`_get_reward_block_reason`), the player is warned, and the quest finishes when the bag changes. `requires_hand_in` stops at `READY_TO_HAND_IN` until a conversation hands it in.
- **Failing.** `get_failure_behavior()`: the quest's `on_fail` or `GameplayConfig.default_quest_failure`. `FINAL` is over, `RETRY` returns the quest to waiting, `GAME_OVER` ends the game (`PartyManager.force_game_over`).
- **Giving up.** `abandon()` resets the quest, runs `on_abandon_actions`, and emits `quest_abandoned` (never `quest_failed`).
- **Cooldowns** count on `ChronoManager.total_game_hours`, which never wraps: `cooldown_end_time` is saved; a clock cooldown (reset at an hour) computes the hours to the next time the clock reads that hour.
- **Texts.** `get_display_title(player)` and `get_display_description(player)` fill the words in angle brackets through [`TextTokens`](/advanced/shared-systems/text-tokens/text-tokens) and add the level.

`QuestLine` keeps `quest_steps: Dictionary` (`step -> [quest ids]`). `activate_step` emits `quest_activation_requested` for each quest (the manager starts it and hands the line the running copy through `_provide_quest_reference`); `update_current_step` advances when every quest of the step `is_completed()`, and completes the line after the last step.

## Global variables

`EventManager.variables` holds `key -> value`, filled from the `GlobalVariable` resources; `get_variable`, `set_variable` (emits `variable_changed`) and `has_variable` are the API. The save writes each value **with its type** so an int comes back as an int (a condition compares by the type of the value).

## Saving

`EventManager.to_save_data()` writes the id lists, the touched events (through `Event.save`), the touched quests (`Quest.save_quest_data`: state, objective numbers and progress, completions, cooldown end), the quest lines, the variables with their types, `popups_seen` and `game_start_done`. `from_save_data()` starts by resetting everything to a new game (`reset_to_initial_state()` on each event, quest and line), then puts the save on top; it does not announce what had happened again. `reset_for_new_game()` does the first half alone.

## Extending

| You want | Do |
|---|---|
| **A new trigger** | A script in `data_classes/events/event_triggers/<category>/` that `extends EventTrigger`, with `@export` fields. Override `get_display_name()`, `get_function_description()` (a sentence with the fields as placeholders), `setup()` (connect, and keep the bound handler so you can disconnect it), `cleanup()` and `is_triggered(event_data)`. Call `emit_triggered(data)` when it happens. Override `generate_objective_description()` if it can be a quest objective. The editor scans the folder, so it appears in **Add Trigger** |
| **A new action** | A script in `data_classes/events/event_actions/<category>/` that `extends EventAction`. Override `_execute_action()` (the name matters: not `execute_action`) and call `complete()` or `fail()` when it is done; `get_display_name()` and `get_function_description()` for the editor. Hold nothing in the action that `_on_reset()` does not clear: the same resource runs again |
| **A new condition** | A script in `data_classes/conditions/<category>/` that `extends Condition` and overrides `evaluate()`. See [Conditions](/advanced/shared-systems/) |
| **A new word for texts** | `TextTokens.register(name, resolver, description)` |
| **Your own popup** | A scene whose root is a `PopupUI`. Override `setup(data)` and `on_shown()`; call `close()` |

Rules for triggers: connect with a handler you keep (a bound `Callable` made once), and check `is_connected` with the *same* callable before disconnecting; a trigger is set up again at every swap, so `setup()` must be safe to call twice and `cleanup()` must undo everything. Prefer a trigger that finds its target through `system_hub.world_container.object_registry` and reconnects when the target arrives later.

## The classes

### Events, quests and variables

<!-- classes:events-and-quests/events -->
| Class | What it is |
|---|---|
| [Event](/advanced/events-and-quests/events/event) | Self-managing event that handles its own trigger evaluation and condition checking |
| [GlobalVariable](/advanced/events-and-quests/events/global-variable) | Individual global variable resource Stores a single named variable with type safety and metadata |
| [LocalVariables](/advanced/events-and-quests/events/local-variables) | Resource for storing local variables dictionary for Events Provides methods for managing event-specific variables |
| [Quest](/advanced/events-and-quests/events/quest) | Main quest resource that handles objectives, rewards, and quest state |
| [QuestLine](/advanced/events-and-quests/events/quest-line) | A sequence of quests organized into steps that form a complete storyline or mission chain |
| [QuestObjective](/advanced/events-and-quests/events/quest-objective) | Base class for all quest objectives that can be extended for different objective types |
<!-- /classes -->

### Trigger and action base classes

<!-- classes:events-and-quests/bases -->
| Class | What it is |
|---|---|
| [EventAction](/advanced/events-and-quests/bases/event-action) | Base class for all event actions. |
| [EventTrigger](/advanced/events-and-quests/bases/event-trigger) | Base class for all "When" conditions that trigger events These represent the entry points for event triggering |
| [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action) | Base class for actions that target player(s). |
| [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger) | Base class for triggers that monitor player(s). |
<!-- /classes -->

### Popups

<!-- classes:events-and-quests/popups -->
| Class | What it is |
|---|---|
| [PopupData](/advanced/events-and-quests/popups/popup-data) | A popup of the game: a scene (a tutorial, a message, a toast, an achievement) and how it behaves when it is shown. |
| [PopupManager](/advanced/events-and-quests/popups/popup-manager) | Shows the popups of the game (scenes built on PopupUI, kept as PopupData in the database): a tutorial, a message, a toast, an achievement. |
<!-- /classes -->

### Runtime

<!-- classes:events-and-quests/runtime -->
| Class | What it is |
|---|---|
| [EventManager](/advanced/events-and-quests/runtime/event-manager) | Central coordinator for events, quests, and quest lines. |
<!-- /classes -->

The triggers and actions have one group each in the menu on the left (*Triggers: entity*, *Actions: quest*...), and the [trigger](/basic/events-and-quests/event-triggers) and [action](/basic/events-and-quests/event-actions) lists of the Basic section link to their pages.
