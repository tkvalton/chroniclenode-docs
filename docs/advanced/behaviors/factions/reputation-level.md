<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ReputationLevel

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Individual reputation level within a faction's reputation system

## Properties

| | | |
|---|---|---|
| `String` | [level_name](#prop-level-name) | `""` |
| `int` | [min_reputation](#prop-min-reputation) | `0` |
| `String` | [description](#prop-description) | `""` |
| `Color` | [level_color](#prop-level-color) | `Color.WHITE` |
| `CompressedTexture2D` | [level_icon](#prop-level-icon) |  |
| `FactionRelationship` | [relationship](#prop-relationship) | `FactionRelationship.NEUTRAL` |

## Methods

| | |
|---|---|
| `Array[ReputationLevel]` | [create_standard_reputation_levels](#method-create-standard-reputation-levels)() *static* |
| `Array[ReputationLevel]` | [create_neutral_only_system](#method-create-neutral-only-system)() *static* |
| `String` | [get_display_string](#method-get-display-string)() |

## Enumerations

### enum FactionRelationship {#enum-factionrelationship}

Enum for relationship types (used in faction relationships)

- **HOSTILE** = `0`
- **NEUTRAL** = `1`
- **FRIENDLY** = `2`

## Property descriptions

### String level_name = "" {#prop-level-name}

========== CORE PROPERTIES ==========

### int min_reputation = 0 {#prop-min-reputation}

The reputation where this level starts.

### String description = "" {#prop-description}

The text of the level.

### Color level_color = Color.WHITE {#prop-level-color}

The color of the level.

### CompressedTexture2D level_icon {#prop-level-icon}

The icon of the level.

### FactionRelationship relationship = FactionRelationship.NEUTRAL {#prop-relationship}

How the faction treats the player at this level (hostile, neutral, friendly).

## Method descriptions

### Array[ReputationLevel] create_standard_reputation_levels() {#method-create-standard-reputation-levels}

Create simple hostile/neutral/friendly system

### Array[ReputationLevel] create_neutral_only_system() {#method-create-neutral-only-system}

Create neutral-only system for environmental/non-factional entities

### String get_display_string() {#method-get-display-string}

Get display string for UI

