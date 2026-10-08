<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SwitchStateCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Check if a switch is in the desired state

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `SwitchInteraction.SwitchState` | [desired_state](#prop-desired-state) | `SwitchInteraction.SwitchState.ON` |
| `bool` | [must_be_accessible](#prop-must-be-accessible) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

*Target*

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

The unique ID of the switch to check

*State Checks*

### SwitchInteraction.SwitchState desired_state = SwitchInteraction.SwitchState.ON {#prop-desired-state}

Desired switch state (true = ON, false = OFF)

### bool must_be_accessible = true {#prop-must-be-accessible}

Whether the switch must be accessible (not locked)

## Method descriptions

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Final evaluate method that handles entity targeting and calls evaluate_entity Don't override this - override evaluate_entity instead *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_description() {#method-get-description}

Get description including entity targeting info *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_function_description() {#method-get-function-description}

Main function description method - includes targeting as part of inline template *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

