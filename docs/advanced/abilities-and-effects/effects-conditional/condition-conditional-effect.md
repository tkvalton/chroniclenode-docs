<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConditionConditionalEffect

**Inherits:** [ConditionalEffect](/advanced/abilities-and-effects/effects-base/conditional-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Applies child effects when a list of Conditions is met, for the target or for the originator.

## Description

Applies child effects when a list of Conditions is met, for the target or for the originator. Every check of the Conditions system can decide here (has a tag, is a class, is at a level, carries an item, a variable ...) without a dedicated effect type for it.

The Conditions see the checked entity as their "argument entity", so a condition set to "Argument Entity" checks the target (or the originator, see check_on) and "Target of Argument" checks what that entity is aiming at.

## Properties

| | | |
|---|---|---|
| `CheckOn` | [check_on](#prop-check-on) | `CheckOn.TARGET` |
| `Logic` | [logic](#prop-logic) | `Logic.ALL` |
| `Array[Condition]` | [conditions](#prop-conditions) | `[]` |

## Methods

| | |
|---|---|
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum CheckOn {#enum-checkon}

- **TARGET** = `0`
- **ORIGINATOR** = `1`

### enum Logic {#enum-logic}

- **ALL** = `0`
- **ANY** = `1`

## Property descriptions

*Condition Settings*

### CheckOn check_on = CheckOn.TARGET {#prop-check-on}

Whose state the Conditions are asked about

### Logic logic = Logic.ALL {#prop-logic}

All: every Condition must be met. Any: one is enough

### Array[Condition] conditions = [] {#prop-conditions}

The Conditions to check. Empty = always met

## Method descriptions

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect).*

