<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationDiceRoll

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Dice roll / skill check node for conversation branching Supports multiple dice types and stat modifier calculations

## Properties

| | | |
|---|---|---|
| `int` | [id](#prop-id) | `0` |
| `RollType` | [roll_type](#prop-roll-type) | `RollType.D20` |
| `int` | [dc](#prop-dc) | `10` |
| `ModifierType` | [modifier_type](#prop-modifier-type) | `ModifierType.ADDITIVE` |
| `int` | [modifier_stat](#prop-modifier-stat) | `0` |
| `bool` | [accepts_critical_success_fail](#prop-accepts-critical-success-fail) | `false` |
| `int` | [pass_chat_id](#prop-pass-chat-id) | `0` |
| `int` | [fail_chat_id](#prop-fail-chat-id) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_dice_notation](#method-get-dice-notation)() |
| `Vector2i` | [get_dice_range](#method-get-dice-range)() |
| `int` | [roll_dice](#method-roll-dice)() |
| `Dictionary` | [evaluate_roll](#method-evaluate-roll)( `stat_value: float` ) |
| `String` | [get_modifier_type_name](#method-get-modifier-type-name)() |

## Enumerations

### enum RollType {#enum-rolltype}

- **D4** = `0`
- **D6** = `1`
- **D8** = `2`
- **D10** = `3`
- **D12** = `4`
- **D20** = `5`
- **D100** = `6`
- **TWO_D6** = `7`
- **THREE_D6** = `8`
- **FOUR_D6** = `9`

### enum ModifierType {#enum-modifiertype}

- **NONE** = `0`
- **ADDITIVE** = `1`
- **PERCENTAGE** = `2`
- **DND_STYLE** = `3`

## Property descriptions

### int id = 0 {#prop-id}

*No description yet.*

### RollType roll_type = RollType.D20 {#prop-roll-type}

Type of dice to roll

### int dc = 10 {#prop-dc}

Difficulty Class / Target Number

### ModifierType modifier_type = ModifierType.ADDITIVE {#prop-modifier-type}

How stat modifiers are calculated

### int modifier_stat = 0 {#prop-modifier-stat}

Which stat to use as modifier (empty = no modifier)

### bool accepts_critical_success_fail = false {#prop-accepts-critical-success-fail}

Whether rolling min (1) is automatic failure, max is automatic success

### int pass_chat_id = 0 {#prop-pass-chat-id}

Chat ID to proceed to on success

### int fail_chat_id = 0 {#prop-fail-chat-id}

Chat ID to proceed to on failure

## Method descriptions

### String get_dice_notation() {#method-get-dice-notation}

Returns human-readable dice notation (e.g., '1d20', '2d6')

### Vector2i get_dice_range() {#method-get-dice-range}

Returns min and max possible roll values

### int roll_dice() {#method-roll-dice}

Execute the dice roll and return raw result (no modifiers)

### Dictionary evaluate_roll( stat_value: float ) {#method-evaluate-roll}

Perform the complete roll with modifiers and return results.

### String get_modifier_type_name() {#method-get-modifier-type-name}

Returns human-readable modifier type name

