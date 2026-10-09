<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EventAction

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AbandonQuestAction](/advanced/events-and-quests/actions-quest/abandon-quest-action), [ActivateQuestAction](/advanced/events-and-quests/actions-quest/activate-quest-action), [ActivateQuestLineAction](/advanced/events-and-quests/actions-quest/activate-quest-line-action), [AddItemsToInteractableAction](/advanced/events-and-quests/actions-interactable-objects/add-items-to-interactable-action), [AddPlayerToPartyAction](/advanced/events-and-quests/actions-party/add-player-to-party-action), [AdvanceTimeAction](/advanced/events-and-quests/actions-time/advance-time-action), [AwaitAction](/advanced/events-and-quests/actions-general/await-action), [ChangeEncounterBehaviorAction](/advanced/events-and-quests/actions-encounter/change-encounter-behavior-action), [ChangePartySizeAction](/advanced/events-and-quests/actions-party/change-party-size-action), [ChangeWorldAction](/advanced/events-and-quests/actions-general/change-world-action), [CinematicAction](/advanced/events-and-quests/actions-general/cinematic-action), [ClearContainerAction](/advanced/events-and-quests/actions-interactable-objects/clear-container-action), [CompleteQuestAction](/advanced/events-and-quests/actions-quest/complete-quest-action), [CompleteQuestObjectiveAction](/advanced/events-and-quests/actions-quest/complete-quest-objective-action), [ControlDoorAction](/advanced/events-and-quests/actions-interactable-objects/control-door-action), [CreateVFXAction](/advanced/events-and-quests/actions-environment/create-vfx-action), [CutsceneAction](/advanced/events-and-quests/actions-general/cutscene-action), [DamageInteractableAction](/advanced/events-and-quests/actions-interactable-objects/damage-interactable-action), [DestroyInteractableAction](/advanced/events-and-quests/actions-interactable-objects/destroy-interactable-action), [FailQuestAction](/advanced/events-and-quests/actions-quest/fail-quest-action), [FailQuestObjectiveAction](/advanced/events-and-quests/actions-quest/fail-quest-objective-action), [ForceEncounterCombatAction](/advanced/events-and-quests/actions-encounter/force-encounter-combat-action), [ForceGameOverAction](/advanced/events-and-quests/actions-general/force-game-over-action), [ForceTeleportEntityAction](/advanced/events-and-quests/actions-interactable-objects/force-teleport-entity-action), [GrantEffectToEntityAction](/advanced/events-and-quests/actions-entity/grant-effect-to-entity-action), [GrantEffectToInteractableAction](/advanced/events-and-quests/actions-interactable-objects/grant-effect-to-interactable-action), [GrantRewardAction](/advanced/events-and-quests/actions-general/grant-reward-action), [IfAction](/advanced/events-and-quests/actions-general/if-action), [KillAllEncounterEntitiesAction](/advanced/events-and-quests/actions-encounter/kill-all-encounter-entities-action), [KillEntityAction](/advanced/events-and-quests/actions-entity/kill-entity-action), [LockObjectAction](/advanced/events-and-quests/actions-interactable-objects/lock-object-action), [ManipulateCameraAction](/advanced/events-and-quests/actions-general/manipulate-camera-action), [ManipulateLocalFloatVariableAction](/advanced/events-and-quests/actions-variable/manipulate-local-float-variable-action), [ManipulateLocalIntVariableAction](/advanced/events-and-quests/actions-variable/manipulate-local-int-variable-action), [ManipulateLocalStringVariableAction](/advanced/events-and-quests/actions-variable/manipulate-local-string-variable-action), [ModifyGlobalVariableAction](/advanced/events-and-quests/actions-variable/modify-global-variable-action), [PlaySFXAtPositionAction](/advanced/events-and-quests/actions-audio/play-sfx-at-position-action), [PlaySFXGlobalAction](/advanced/events-and-quests/actions-audio/play-sfx-global-action), [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action), [PopupAction](/advanced/events-and-quests/actions-user-interface/popup-action), [RemoveAllEffectsFromEntityAction](/advanced/events-and-quests/actions-entity/remove-all-effects-from-entity-action), [RemoveAllEffectsFromInteractableAction](/advanced/events-and-quests/actions-interactable-objects/remove-all-effects-from-interactable-action), [RemoveEffectFromEntityAction](/advanced/events-and-quests/actions-entity/remove-effect-from-entity-action), [RemoveEffectFromInteractableAction](/advanced/events-and-quests/actions-interactable-objects/remove-effect-from-interactable-action), [RemoveItemsFromContainerAction](/advanced/events-and-quests/actions-interactable-objects/remove-items-from-container-action), [RemovePlayerFromPartyAction](/advanced/events-and-quests/actions-party/remove-player-from-party-action), [RepairInteractableAction](/advanced/events-and-quests/actions-interactable-objects/repair-interactable-action), [SetAmbientTrackAction](/advanced/events-and-quests/actions-audio/set-ambient-track-action), [SetConversationResponseStateAction](/advanced/events-and-quests/actions-interactions/set-conversation-response-state-action), [SetConversationStartingChatAction](/advanced/events-and-quests/actions-interactions/set-conversation-starting-chat-action), [SetEntityActiveStateAction](/advanced/events-and-quests/actions-entity/set-entity-active-state-action), [SetEntityBehaviorScriptAction](/advanced/events-and-quests/actions-entity/set-entity-behavior-script-action), [SetEntityCombatScriptAction](/advanced/events-and-quests/actions-entity/set-entity-combat-script-action), [SetEntityFactionAction](/advanced/events-and-quests/actions-entity/set-entity-faction-action), [SetEntityPositionAction](/advanced/events-and-quests/actions-entity/set-entity-position-action), [SetEnvironmentConfigAction](/advanced/events-and-quests/actions-environment/set-environment-config-action), [SetGlobalVariableAction](/advanced/events-and-quests/actions-variable/set-global-variable-action), [SetInteractablePositionAction](/advanced/events-and-quests/actions-interactable-objects/set-interactable-position-action), [SetLocalBoolVariableAction](/advanced/events-and-quests/actions-variable/set-local-bool-variable-action), [SetLocalFloatVariableAction](/advanced/events-and-quests/actions-variable/set-local-float-variable-action), [SetLocalIntVariableAction](/advanced/events-and-quests/actions-variable/set-local-int-variable-action), [SetLocalStringVariableAction](/advanced/events-and-quests/actions-variable/set-local-string-variable-action), [SetMusicTrackAction](/advanced/events-and-quests/actions-audio/set-music-track-action), [SetPackActiveStateAction](/advanced/events-and-quests/actions-encounter/set-pack-active-state-action), [SetPrimaryInteractionAction](/advanced/events-and-quests/actions-interactions/set-primary-interaction-action), [SetRabbitHoleDestinationAction](/advanced/events-and-quests/actions-interactable-objects/set-rabbit-hole-destination-action), [SetRabbitHoleStateAction](/advanced/events-and-quests/actions-interactable-objects/set-rabbit-hole-state-action), [SetResponsesByTagAction](/advanced/events-and-quests/actions-interactions/set-responses-by-tag-action), [SetSkyConfigAction](/advanced/events-and-quests/actions-environment/set-sky-config-action), [SetSunConfigAction](/advanced/events-and-quests/actions-environment/set-sun-config-action), [SetSwitchStateAction](/advanced/events-and-quests/actions-interactable-objects/set-switch-state-action), [SetTimeConfigAction](/advanced/events-and-quests/actions-environment/set-time-config-action), [SetTimeOfDayAction](/advanced/events-and-quests/actions-time/set-time-of-day-action), [SetTrapStateAction](/advanced/events-and-quests/actions-interactable-objects/set-trap-state-action), [SetWeatherAction](/advanced/events-and-quests/actions-environment/set-weather-action), [SpawnEntityAction](/advanced/events-and-quests/actions-entity/spawn-entity-action), [SpawnInteractableAction](/advanced/events-and-quests/actions-interactable-objects/spawn-interactable-action), [SpawnWorldEffectAction](/advanced/events-and-quests/actions-environment/spawn-world-effect-action), [SwitchAction](/advanced/events-and-quests/actions-general/switch-action), [ToggleLocalVariableAction](/advanced/events-and-quests/actions-variable/toggle-local-variable-action), [ToggleSwitchAction](/advanced/events-and-quests/actions-interactable-objects/toggle-switch-action)

Base class for all event actions. Actions define behaviors that can be triggered as part of an event. This is an abstract class that should be extended by specific action types.

## Variables

| | | |
|---|---|---|
| `EventActionState` | [state](#var-state) | `EventActionState.NOT_STARTED` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [set_system_hub](#method-set-system-hub)( `p_system_hub: GameHost.SystemHub` ) |
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [start](#method-start)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [complete](#method-complete)() |
| `void` | [force_complete](#method-force-complete)() |
| `void` | [fail](#method-fail)() |
| `void` | [reset](#method-reset)() |
| `bool` | [is_completed](#method-is-completed)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |
| `void` | [resume](#method-resume)() |

## Signals

### event_action_completed( action: EventAction ) {#signal-event-action-completed}

Signal emitted when the action completes

### event_action_failed( action: EventAction ) {#signal-event-action-failed}

Signal emitted when the action fails

### event_action_state_changed( action: EventAction, new_state: int ) {#signal-event-action-state-changed}

Signal emitted when the action state changes

## Enumerations

### enum EventActionState {#enum-eventactionstate}

Possible states for an action

- **NOT_STARTED** = `0` - Action hasn't been triggered yet
- **IN_PROGRESS** = `1` - Action is currently running
- **COMPLETED** = `2` - Action has successfully completed
- **FAILED** = `3` - Action has failed to complete

## Variable descriptions

### EventActionState state = EventActionState.NOT_STARTED {#var-state}

Current state of the action

### GameHost.SystemHub system_hub {#var-system-hub}

GameHost access for action flexability

## Method descriptions

### void set_system_hub( p_system_hub: GameHost.SystemHub ) {#method-set-system-hub}

*No description yet.*

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### void start() {#method-start}

Start the action

### void cleanup() {#method-cleanup}

Clean up resources

### void complete() {#method-complete}

Complete the action

### void force_complete() {#method-force-complete}

Force-complete the action

### void fail() {#method-fail}

Fail the action

### void reset() {#method-reset}

Reset the action to its initial state

### bool is_completed() {#method-is-completed}

Check if the action is completed

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary

### void resume() {#method-resume}

Run an action that was in progress when the game was saved again from its start (the Event does this after it has loaded all its actions)

