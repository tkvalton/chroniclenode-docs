<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EventManager

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Central coordinator for events, quests, and quest lines. Manages lifecycle, state tracking, and signal-based communication between game systems.

## Description

RESPONSIBILITIES:

- Loads runtime duplicates of events, quests, and quest lines from database
- Coordinates quest line progression through signal-based communication
- Tracks active/completed/failed states for all managed resources
- Manages quest objective signal connections for level transitions
- Handles quest activation, completion, and rewards
- Stores global variables for branching narratives and world state
- Provides save/load functionality for all quest progress

INITIALIZATION: Call initialize(system_hub) once during game setup. This loads all resources as runtime duplicates, sets up signal connections, and initializes global variables.

SIGNAL-BASED COORDINATION: QuestLines emit signals when they need quests activated. EventManager responds by activating quests and providing references back. This loose coupling allows components to be self-managing while EventManager coordinates cross-system communication.

USAGE:

- activate_quest_line(id) / activate_quest(id) to start quests
- EventManager coordinates progression through signal responses
- track_quest(id) / untrack_quest(id) for UI tracking
- get_active_quests() / get_completed_quests() for queries
- to_save_data() / from_save_data() for persistence

## Variables

| | | |
|---|---|---|
| `Dictionary` | [events](#var-events) | `{}  # int -> Event` |
| `Array` | [active_events](#var-active-events) | `[]` |
| `Array` | [completed_events](#var-completed-events) | `[]` |
| `Array` | [failed_events](#var-failed-events) | `[]` |
| `Dictionary` | [quest_lines](#var-quest-lines) | `{}  # int -> QuestLine` |
| `Dictionary` | [quests](#var-quests) | `{}       # int -> Quest` |
| `Array` | [popups_seen](#var-popups-seen) | `[]` |
| `bool` | [game_start_done](#var-game-start-done) | `false` |
| `Array` | [active_quest_lines](#var-active-quest-lines) | `[]` |
| `Array` | [active_quests](#var-active-quests) | `[]` |
| `Array` | [completed_quests](#var-completed-quests) | `[]` |
| `Array` | [completed_quest_lines](#var-completed-quest-lines) | `[]` |
| `Array` | [tracked_quests](#var-tracked-quests) | `[]` |
| `Dictionary` | [variables](#var-variables) | `{}` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `system_hub: GameHost.SystemHub` ) |
| `void` | [setup_all_events](#method-setup-all-events)() |
| `void` | [reset_for_new_game](#method-reset-for-new-game)() |
| `bool` | [activate_quest_line](#method-activate-quest-line)( `quest_line_id: int` ) |
| `bool` | [activate_quest](#method-activate-quest)( `quest_id: int` ) |
| `bool` | [track_quest](#method-track-quest)( `quest_id: int` ) |
| `bool` | [untrack_quest](#method-untrack-quest)( `quest_id: int` ) |
| `bool` | [is_quest_tracked](#method-is-quest-tracked)( `quest_id: int` ) |
| `Array[Quest]` | [get_tracked_quests](#method-get-tracked-quests)() |
| `bool` | [force_trigger_event](#method-force-trigger-event)( `event_id: int` ) |
| `bool` | [try_trigger_event](#method-try-trigger-event)( `event_id: int, event_data: Dictionary = {}` ) |
| `Event` | [get_event](#method-get-event)( `event_id: int` ) |
| `bool` | [is_event_completed](#method-is-event-completed)( `event_id: int` ) |
| `bool` | [is_event_active](#method-is-event-active)( `event_id: int` ) |
| `bool` | [is_event_failed](#method-is-event-failed)( `event_id: int` ) |
| `bool` | [can_accept_quest](#method-can-accept-quest)( `quest_id: int` ) |
| `Array[String]` | [get_quest_requirement_failures](#method-get-quest-requirement-failures)( `quest_id: int` ) |
| `bool` | [abandon_quest](#method-abandon-quest)( `quest_id: int` ) |
| `bool` | [complete_quest_objective](#method-complete-quest-objective)( `quest_id: int, objective_id: int` ) |
| `Array[QuestLine]` | [get_active_quest_lines](#method-get-active-quest-lines)() |
| `Array[Quest]` | [get_active_quests](#method-get-active-quests)() |
| `Array[Quest]` | [get_completed_quests](#method-get-completed-quests)() |
| `Array[QuestLine]` | [get_completed_quest_lines](#method-get-completed-quest-lines)() |
| `bool` | [has_seen_popup](#method-has-seen-popup)( `popup_id: int` ) |
| `void` | [mark_popup_seen](#method-mark-popup-seen)( `popup_id: int` ) |
| `bool` | [has_quest](#method-has-quest)( `quest_id: int` ) |
| `Quest` | [get_quest](#method-get-quest)( `quest_id: int` ) |
| `QuestLine` | [get_quest_line](#method-get-quest-line)( `quest_line_id: int` ) |
| `QuestLine` | [get_quest_line_for_quest](#method-get-quest-line-for-quest)( `quest_id: int` ) |
| `Variant` | [get_variable](#method-get-variable)( `key: String, default_value: Variant = null` ) |
| `void` | [set_variable](#method-set-variable)( `key: String, value: Variant` ) |
| `bool` | [has_variable](#method-has-variable)( `key: String` ) |
| `void` | [update_objective_signals](#method-update-objective-signals)() |
| `void` | [disconnect_objective_signals](#method-disconnect-objective-signals)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [cleanup_event_triggers](#method-cleanup-event-triggers)() |

## Signals

### variable_changed( key: String, old_value: Variant, new_value: Variant ) {#signal-variable-changed}

Emitted when a variable is set or changed

### variable_removed( key: String, old_value: Variant ) {#signal-variable-removed}

Emitted when a variable is removed

### variables_cleared() {#signal-variables-cleared}

Emitted when all variables are cleared

### quest_line_activated( quest_line: QuestLine ) {#signal-quest-line-activated}

Emitted when a quest line is activated

### quest_line_completed( quest_line: QuestLine ) {#signal-quest-line-completed}

Emitted when a quest line is completed

### quest_line_failed( quest_line: QuestLine ) {#signal-quest-line-failed}

Emitted when a quest line has failed

### quest_activated( quest: Quest ) {#signal-quest-activated}

Emitted when a quest is activated

### quest_completed( quest: Quest ) {#signal-quest-completed}

Emitted when a quest is completed

### quest_failed( quest: Quest ) {#signal-quest-failed}

Emitted when a quest has failed

### quest_abandoned( quest: Quest ) {#signal-quest-abandoned}

Emitted when the player gives a quest up (not a failure: nothing that waits for a quest to fail is told)

### objective_completed( quest: Quest, objective: QuestObjective ) {#signal-objective-completed}

Emitted when an objective within a quest is completed

### quest_tracking_changed( quest: Quest, is_tracked: bool ) {#signal-quest-tracking-changed}

Emitted when a quest's tracking status changes

## Variable descriptions

### Dictionary events =   # int -&gt; Event {#var-events}

*No description yet.*

### Array active_events = [] {#var-active-events}

*No description yet.*

### Array completed_events = [] {#var-completed-events}

*No description yet.*

### Array failed_events = [] {#var-failed-events}

*No description yet.*

### Dictionary quest_lines =   # int -&gt; QuestLine {#var-quest-lines}

Dictionary to store all registered quest lines by their ID

### Dictionary quests =        # int -&gt; Quest {#var-quests}

Dictionary to store all registered quests by their ID

### Array popups_seen = [] {#var-popups-seen}

The popups that were shown and are shown once only (PopupData.show_once)

### bool game_start_done = false {#var-game-start-done}

Has the game start been announced in this game? (the game start triggers fire once per game: not when a save is loaded or the world changes)

### Array active_quest_lines = [] {#var-active-quest-lines}

Array of IDs for currently active quest lines

### Array active_quests = [] {#var-active-quests}

Array of IDs for currently active quests

### Array completed_quests = [] {#var-completed-quests}

Array of IDs for completed quests

### Array completed_quest_lines = [] {#var-completed-quest-lines}

Array of IDs for completed quest lines

### Array tracked_quests = [] {#var-tracked-quests}

Stores IDs of quests that are currently being tracked in the UI

### Dictionary variables =  {#var-variables}

Dictionary storing all global variables

## Method descriptions

### void initialize( system_hub: GameHost.SystemHub ) {#method-initialize}

Initialize EventManager with DUPLICATED resources from database This is the primary initialization method - call once at game system setup

### void setup_all_events() {#method-setup-all-events}

Setup all event triggers (called after loading events)

### void reset_for_new_game() {#method-reset-for-new-game}

Reset all state for new game (keeps resource instances, resets their state)

### bool activate_quest_line( quest_line_id: int ) {#method-activate-quest-line}

Activates a quest line by ID, returns true if successful Note: Quest requirements are checked when activating individual quests

### bool activate_quest( quest_id: int ) {#method-activate-quest}

Activates an individual quest by ID, returns true if successful Checks player requirements before activation Automatically activates parent quest line if quest belongs to one

### bool track_quest( quest_id: int ) {#method-track-quest}

Tracks a quest in the UI

### bool untrack_quest( quest_id: int ) {#method-untrack-quest}

Stops tracking a quest in the UI

### bool is_quest_tracked( quest_id: int ) {#method-is-quest-tracked}

Returns whether a quest is currently being tracked

### Array[Quest] get_tracked_quests() {#method-get-tracked-quests}

Returns an array of all tracked quests

### bool force_trigger_event( event_id: int ) {#method-force-trigger-event}

Manually trigger an event (bypasses conditions)

### bool try_trigger_event( event_id: int, event_data: Dictionary = {} ) {#method-try-trigger-event}

Manually trigger an event with condition checking

### Event get_event( event_id: int ) {#method-get-event}

*No description yet.*

### bool is_event_completed( event_id: int ) {#method-is-event-completed}

*No description yet.*

### bool is_event_active( event_id: int ) {#method-is-event-active}

*No description yet.*

### bool is_event_failed( event_id: int ) {#method-is-event-failed}

*No description yet.*

### bool can_accept_quest( quest_id: int ) {#method-can-accept-quest}

Check if a quest can be accepted by the current player

### Array[String] get_quest_requirement_failures( quest_id: int ) {#method-get-quest-requirement-failures}

Get failure messages for why a quest cannot be accepted

### bool abandon_quest( quest_id: int ) {#method-abandon-quest}

The player gives a quest up (when the quest and the settings allow it): it goes back to the start and can be taken again. False when it cannot be given up

### bool complete_quest_objective( quest_id: int, objective_id: int ) {#method-complete-quest-objective}

Marks a specific objective as completed for a quest

### Array[QuestLine] get_active_quest_lines() {#method-get-active-quest-lines}

Returns an array of all active quest lines

### Array[Quest] get_active_quests() {#method-get-active-quests}

Returns an array of all active quests

### Array[Quest] get_completed_quests() {#method-get-completed-quests}

Returns an array of all completed quests

### Array[QuestLine] get_completed_quest_lines() {#method-get-completed-quest-lines}

Returns an array of all completed quest lines

### bool has_seen_popup( popup_id: int ) {#method-has-seen-popup}

Was this popup shown in this game? (only popups that are shown once are remembered)

### void mark_popup_seen( popup_id: int ) {#method-mark-popup-seen}

*No description yet.*

### bool has_quest( quest_id: int ) {#method-has-quest}

Is there a quest with this id?

### Quest get_quest( quest_id: int ) {#method-get-quest}

Get a quest by ID, returns null if not found

### QuestLine get_quest_line( quest_line_id: int ) {#method-get-quest-line}

Get a quest line by ID, returns null if not found

### QuestLine get_quest_line_for_quest( quest_id: int ) {#method-get-quest-line-for-quest}

Find the quest line that contains a specific quest, returns null if not in any quest line

### Variant get_variable( key: String, default_value: Variant = null ) {#method-get-variable}

Get a variable value with optional default

### void set_variable( key: String, value: Variant ) {#method-set-variable}

Set a variable (runtime only - doesn't save to database)

### bool has_variable( key: String ) {#method-has-variable}

Check if variable exists

### void update_objective_signals() {#method-update-objective-signals}

Updates signal connections for all active objectives Should be called after level loading is complete

### void disconnect_objective_signals() {#method-disconnect-objective-signals}

Disconnects all signal connections for all active objectives Should be called before level unloading

### Dictionary to_save_data() {#method-to-save-data}

Save complete event manager state (events, quests, questlines, variables)

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Load complete event manager state (events, quests, questlines, variables). Everything the save does not mention starts over: the game that is loaded may be one that went further than the save

### void cleanup_event_triggers() {#method-cleanup-event-triggers}

*No description yet.*

