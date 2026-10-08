<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestActiveEntityCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if a specific quest is currently active

## Properties

| | | |
|---|---|---|
| `int` | [quest_id](#prop-quest-id) | `0` |
| `bool` | [invert_check](#prop-invert-check) | `false` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### int quest_id = 0 {#prop-quest-id}

The quest ID to check

### bool invert_check = false {#prop-invert-check}

Check if quest is NOT active

## Method descriptions

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Final evaluate method that handles entity targeting and calls evaluate_entity Don't override this - override evaluate_entity instead *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_description() {#method-get-description}

Get description including entity targeting info *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_function_description() {#method-get-function-description}

Main function description method - includes targeting as part of inline template *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

