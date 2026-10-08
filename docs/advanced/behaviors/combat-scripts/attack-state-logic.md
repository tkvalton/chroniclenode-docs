<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AttackStateLogic

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [CompanionAttackLogic](/advanced/behaviors/combat-scripts/companion-attack-logic), [PriorityAttackLogic](/advanced/behaviors/combat-scripts/priority-attack-logic), [SimpleAttackLogic](/advanced/behaviors/combat-scripts/simple-attack-logic), [TacticalAttackLogic](/advanced/behaviors/combat-scripts/tactical-attack-logic), [TimelineAttackLogic](/advanced/behaviors/combat-scripts/timeline-attack-logic)

AttackStateLogic is the base class for defining what an entity does in the ATTACKING state. It handles the decision-making process for ability usage and actions during combat.

## Description

Subclasses implement different combat behaviors:

- SimpleAttackLogic: Just uses basic attacks (Scenario 1 - melee)
- PriorityAttackLogic: Checks conditions and uses abilities by priority (Scenario 1 - caster)
- TimelineAttackLogic: Follows scripted sequence (Scenario 2 - boss)
- TacticalAttackLogic: Complex positioning and decisions (Scenario 3 - action RPG)

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `ModularCombatScript` | [combat_script](#var-combat-script) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript` ) |
| `bool` | [execute](#method-execute)( `delta: float` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Variable descriptions

### Entity entity {#var-entity}

Reference to the entity using this logic

### ModularCombatScript combat_script {#var-combat-script}

Reference to the combat script that owns this logic

### GameHost.SystemHub system_hub {#var-system-hub}

The system hub (the actions and conditions it builds need it)

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript ) {#method-setup}

Initialize the attack logic with entity and combat script references

### bool execute( delta: float ) {#method-execute}

Called every frame when in ATTACKING state to decide what action to take Returns true if an action was executed, false if nothing was done If this returns false, the combat script will attempt a basic attack (if auto_basic_attack enabled)

### Dictionary to_save_data() {#method-to-save-data}

Save runtime state for persistence Override in subclasses to save specific state

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Restore runtime state from saved data Override in subclasses to restore specific state

### void cleanup() {#method-cleanup}

Cleanup any resources when this logic is no longer needed

