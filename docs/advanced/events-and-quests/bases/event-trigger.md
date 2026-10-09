<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EventTrigger

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [EncounterCombatStateChangeTrigger](/advanced/events-and-quests/triggers-encounter/encounter-combat-state-change-trigger), [EntityAbilityCastTrigger](/advanced/events-and-quests/triggers-entity/entity-ability-cast-trigger), [EntityBasicAttackCastTrigger](/advanced/events-and-quests/triggers-entity/entity-basic-attack-cast-trigger), [EntityCastingTrigger](/advanced/events-and-quests/triggers-entity/entity-casting-trigger), [EntityCombatStateChangeTrigger](/advanced/events-and-quests/triggers-entity/entity-combat-state-change-trigger), [EntityDamageDealtTrigger](/advanced/events-and-quests/triggers-entity/entity-damage-dealt-trigger), [EntityDamageIncomingTrigger](/advanced/events-and-quests/triggers-entity/entity-damage-incoming-trigger), [EntityDamageMitigatedTrigger](/advanced/events-and-quests/triggers-entity/entity-damage-mitigated-trigger), [EntityDamageTakenTrigger](/advanced/events-and-quests/triggers-entity/entity-damage-taken-trigger), [EntityDeathGroupTrigger](/advanced/events-and-quests/triggers-entity/entity-death-group-trigger), [EntityDeathTypeTrigger](/advanced/events-and-quests/triggers-entity/entity-death-type-trigger), [EntityDeathUniqueTrigger](/advanced/events-and-quests/triggers-entity/entity-death-unique-trigger), [EntityEffectTrigger](/advanced/events-and-quests/triggers-entity/entity-effect-trigger), [EntityHealCastTrigger](/advanced/events-and-quests/triggers-entity/entity-heal-cast-trigger), [EntityHealingReceivedTrigger](/advanced/events-and-quests/triggers-entity/entity-healing-received-trigger), [EntityHealthChangedTrigger](/advanced/events-and-quests/triggers-entity/entity-health-changed-trigger), [EntityInteractTrigger](/advanced/events-and-quests/triggers-entity/entity-interact-trigger), [EntityInterruptedTrigger](/advanced/events-and-quests/triggers-entity/entity-interrupted-trigger), [EntityPetGainedTrigger](/advanced/events-and-quests/triggers-entity/entity-pet-gained-trigger), [EntityResourceChangedTrigger](/advanced/events-and-quests/triggers-entity/entity-resource-changed-trigger), [EntitySpecialDefensiveEffectTrigger](/advanced/events-and-quests/triggers-entity/entity-special-defensive-effect-trigger), [EntitySpecialHealingReceivedTrigger](/advanced/events-and-quests/triggers-entity/entity-special-healing-received-trigger), [EntitySpecialOffensiveEffectTrigger](/advanced/events-and-quests/triggers-entity/entity-special-offensive-effect-trigger), [EntitySpecificAbilityCastTrigger](/advanced/events-and-quests/triggers-entity/entity-specific-ability-cast-trigger), [EntityStatChangedTrigger](/advanced/events-and-quests/triggers-entity/entity-stat-changed-trigger), [EntityTargetChangedTrigger](/advanced/events-and-quests/triggers-entity/entity-target-changed-trigger), [FactionStandingChangedTrigger](/advanced/events-and-quests/triggers-faction/faction-standing-changed-trigger), [GameStartTrigger](/advanced/events-and-quests/triggers-time/game-start-trigger), [GameTimeTrigger](/advanced/events-and-quests/triggers-time/game-time-trigger), [GlobalVariableTrigger](/advanced/events-and-quests/triggers-variable/global-variable-trigger), [LocalVariableChangeTrigger](/advanced/events-and-quests/triggers-variable/local-variable-change-trigger), [LocalVariableReachTrigger](/advanced/events-and-quests/triggers-variable/local-variable-reach-trigger), [ObjectContainerStateChangeTrigger](/advanced/events-and-quests/triggers-interactable-object/object-container-state-change-trigger), [ObjectDestructibleDamagedTrigger](/advanced/events-and-quests/triggers-interactable-object/object-destructible-damaged-trigger), [ObjectDestructibleDestroyedTrigger](/advanced/events-and-quests/triggers-interactable-object/object-destructible-destroyed-trigger), [ObjectDoorStateChangeTrigger](/advanced/events-and-quests/triggers-interactable-object/object-door-state-change-trigger), [ObjectInteractTrigger](/advanced/events-and-quests/triggers-interactable-object/object-interact-trigger), [ObjectLadderClimbTrigger](/advanced/events-and-quests/triggers-interactable-object/object-ladder-climb-trigger), [ObjectLockedStateChangeTrigger](/advanced/events-and-quests/triggers-interactable-object/object-locked-state-change-trigger), [ObjectSwitchStateChangeTrigger](/advanced/events-and-quests/triggers-interactable-object/object-switch-state-change-trigger), [ObjectTeleportationTrigger](/advanced/events-and-quests/triggers-interactable-object/object-teleportation-trigger), [ObjectTrapTrigger](/advanced/events-and-quests/triggers-interactable-object/object-trap-trigger), [PackActiveStateChangeTrigger](/advanced/events-and-quests/triggers-encounter/pack-active-state-change-trigger), [PlayerAddedToPartyTrigger](/advanced/events-and-quests/triggers-party/player-added-to-party-trigger), [PlayerEquipmentChangeTrigger](/advanced/events-and-quests/triggers-item/player-equipment-change-trigger), [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger), [PlayerExperienceGainedTrigger](/advanced/events-and-quests/triggers-player/player-experience-gained-trigger), [PlayerInputTrigger](/advanced/events-and-quests/triggers-input/player-input-trigger), [PlayerLevelUpTrigger](/advanced/events-and-quests/triggers-player/player-level-up-trigger), [PlayerRemovedFromPartyTrigger](/advanced/events-and-quests/triggers-party/player-removed-from-party-trigger), [PlayerStandingChangedTrigger](/advanced/events-and-quests/triggers-faction/player-standing-changed-trigger), [PopupClosedTrigger](/advanced/events-and-quests/triggers-user-interface/popup-closed-trigger), [QuestStateChangeTrigger](/advanced/events-and-quests/triggers-quest/quest-state-change-trigger), [RegionDetectionAnyEntityTrigger](/advanced/events-and-quests/triggers-region/region-detection-any-entity-trigger), [RegionDetectionFactionTrigger](/advanced/events-and-quests/triggers-region/region-detection-faction-trigger), [RegionDetectionPlayerTrigger](/advanced/events-and-quests/triggers-region/region-detection-player-trigger), [RegionDetectionUniqueEntityTrigger](/advanced/events-and-quests/triggers-region/region-detection-unique-entity-trigger), [TimerTrigger](/advanced/events-and-quests/triggers-time/timer-trigger)

Base class for all "When" conditions that trigger events These represent the entry points for event triggering

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `bool` | [is_triggered](#method-is-triggered)( `_event_data: Dictionary` ) |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [emit_triggered](#method-emit-triggered)( `event_data: Dictionary = {}` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Signals

### triggered( event_data: Dictionary ) {#signal-triggered}

Signal emitted when this trigger is activated

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

GameHost access for trigger flexability

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Trigger

### String get_function_description() {#method-get-function-description}

Return a description of this trigger with parameter placeholders

### bool is_triggered( _event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### void emit_triggered( event_data: Dictionary = {} ) {#method-emit-triggered}

Emit the triggered signal with event data

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description

