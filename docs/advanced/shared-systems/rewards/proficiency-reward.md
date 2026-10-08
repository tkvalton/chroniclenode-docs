<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProficiencyReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Trains the player in a proficiency: experience towards the next level, or whole levels.

## Properties

| | | |
|---|---|---|
| `int` | [proficiency_id](#prop-proficiency-id) | `0` |
| `Mode` | [mode](#prop-mode) | `Mode.EXPERIENCE` |
| `float` | [amount](#prop-amount) | `10.0` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Mode {#enum-mode}

- **EXPERIENCE** = `0` - The amount is experience; levels follow when it is enough
- **LEVELS** = `1` - The amount is whole levels

## Property descriptions

### int proficiency_id = 0 {#prop-proficiency-id}

The proficiency

### Mode mode = Mode.EXPERIENCE {#prop-mode}

Experience, or levels

### float amount = 10.0 {#prop-amount}

How much

## Method descriptions

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Apply this reward to a player - override in child classes Returns a Dictionary with:

- "success": bool - whether the application succeeded
- Additional tracking data needed for unapply (e.g., instance IDs, amounts)

Example: {"success": true, "ability_instance_id": 12345, "ability_definition_id": 42} *(from [Reward](/advanced/shared-systems/rewards/reward))*

### String get_summary() {#method-get-summary}

Get a user-facing summary of what this reward grants Override in child classes to provide meaningful descriptions Example: "Ability: Fireball (Active)" or "Skill Points: +5 Combat" *(from [Reward](/advanced/shared-systems/rewards/reward))*

### Array[Dictionary] validate() {#method-validate}

Validate reward configuration - override in child classes *(from [Reward](/advanced/shared-systems/rewards/reward))*

