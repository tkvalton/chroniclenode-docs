<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PhaseTransition

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Defines transition conditions for a boss phase using existing EntityCondition system

## Properties

| | | |
|---|---|---|
| `Array[EntityCondition]` | [conditions](#prop-conditions) | `[]` |
| `LogicOperator` | [logic_operator](#prop-logic-operator) | `LogicOperator.OR` |

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `ModularCombatScript` | [combat_script](#var-combat-script) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript` ) |
| `bool` | [should_transition](#method-should-transition)() |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum LogicOperator {#enum-logicoperator}

- **AND** = `0` - All conditions must be met
- **OR** = `1` - Any condition can trigger transition

## Property descriptions

*Transition Settings*

### Array[EntityCondition] conditions = [] {#prop-conditions}

All conditions that must be evaluated for this transition

### LogicOperator logic_operator = LogicOperator.OR {#prop-logic-operator}

How multiple conditions are combined (AND = all must be true, OR = any can be true)

## Variable descriptions

### Entity entity {#var-entity}

Reference to the entity

### ModularCombatScript combat_script {#var-combat-script}

Reference to the combat script

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript ) {#method-setup}

Setup the transition

### bool should_transition() {#method-should-transition}

Evaluate if this transition should trigger

### void cleanup() {#method-cleanup}

Cleanup

