<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatAction

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ActivateQuestCombatAction](/advanced/behaviors/combat-actions/activate-quest-combat-action), [CallForHelpAction](/advanced/behaviors/combat-actions/call-for-help-action), [ClearTargetAction](/advanced/behaviors/combat-actions/clear-target-action), [ComboAction](/advanced/behaviors/combat-actions/combo-action), [DelayAction](/advanced/behaviors/combat-actions/delay-action), [FaceTargetAction](/advanced/behaviors/combat-actions/face-target-action), [KeepDistanceAction](/advanced/behaviors/combat-actions/keep-distance-action), [MoveToAllyPositionAction](/advanced/behaviors/combat-actions/move-to-ally-position-action), [MoveToPointAction](/advanced/behaviors/combat-actions/move-to-point-action), [RetreatAction](/advanced/behaviors/combat-actions/retreat-action), [SpawnInteractableCombatAction](/advanced/behaviors/combat-actions/spawn-interactable-combat-action), [SpawnNPCCombatAction](/advanced/behaviors/combat-actions/spawn-npc-combat-action), [SpawnWorldEffectCombatAction](/advanced/behaviors/combat-actions/spawn-world-effect-combat-action), [StrafeAction](/advanced/behaviors/combat-actions/strafe-action), [SwitchToAllyAction](/advanced/behaviors/combat-actions/switch-to-ally-action), [SwitchToEnemyAction](/advanced/behaviors/combat-actions/switch-to-enemy-action), [SwitchToHighestThreatAction](/advanced/behaviors/combat-actions/switch-to-highest-threat-action), [TriggerEventCombatAction](/advanced/behaviors/combat-actions/trigger-event-combat-action), [UseAbilityAction](/advanced/behaviors/combat-actions/use-ability-action), [UseAbilityAtPointAction](/advanced/behaviors/combat-actions/use-ability-at-point-action), [WaitForConditionAction](/advanced/behaviors/combat-actions/wait-for-condition-action)

CombatAction is the base class for all combat actions. Actions represent things an entity can do during combat.

## Properties

| | | |
|---|---|---|
| `int` | [priority](#prop-priority) | `0` |
| `Array[EntityCondition]` | [conditions](#prop-conditions) | `[]` |
| `float` | [action_cooldown](#prop-action-cooldown) | `0.0` |
| `bool` | [interrupt_casting](#prop-interrupt-casting) | `false` |

## Variables

| | | |
|---|---|---|
| `Timer` | [cooldown_timer](#var-cooldown-timer) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [set_system_refs](#method-set-system-refs)( `p_system_hub: GameHost.SystemHub` ) |
| `bool` | [can_execute](#method-can-execute)( `entity: Entity` ) |
| `void` | [process](#method-process)( `_delta: float` ) |
| `bool` | [execute](#method-execute)( `entity: Entity` ) |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### int priority = 0 {#prop-priority}

Priority of this action (higher = checked first in priority lists)

### Array[EntityCondition] conditions = [] {#prop-conditions}

Conditions that must be met for this action to execute

### float action_cooldown = 0.0 {#prop-action-cooldown}

Cooldown for this specific action (independent of ability cooldown)

### bool interrupt_casting = false {#prop-interrupt-casting}

Whether this action should interrupt current casting

## Variable descriptions

### Timer cooldown_timer {#var-cooldown-timer}

Internal cooldown timer

### GameHost.SystemHub system_hub {#var-system-hub}

SystemRefs

## Method descriptions

### void set_system_refs( p_system_hub: GameHost.SystemHub ) {#method-set-system-refs}

*No description yet.*

### bool can_execute( entity: Entity ) {#method-can-execute}

Check if this action can be executed

### void process( _delta: float ) {#method-process}

Called every combat tick by the logic that owns the action (cooldowns count on timers: nothing to do here, subclasses may)

### bool execute( entity: Entity ) {#method-execute}

Execute this action

### void cleanup() {#method-cleanup}

Cleanup any resources

