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

- **HOSTILE** = `0`
- **NEUTRAL** = `1`
- **FRIENDLY** = `2`

## Property descriptions

### String level_name = "" {#prop-level-name}

*No description yet.*

### int min_reputation = 0 {#prop-min-reputation}

*No description yet.*

### String description = "" {#prop-description}

*No description yet.*

### Color level_color = Color.WHITE {#prop-level-color}

*No description yet.*

### CompressedTexture2D level_icon {#prop-level-icon}

*No description yet.*

### FactionRelationship relationship = FactionRelationship.NEUTRAL {#prop-relationship}

*No description yet.*

## Method descriptions

### Array[ReputationLevel] create_standard_reputation_levels() {#method-create-standard-reputation-levels}

Create simple hostile/neutral/friendly system

### Array[ReputationLevel] create_neutral_only_system() {#method-create-neutral-only-system}

Create neutral-only system for environmental/non-factional entities

### String get_display_string() {#method-get-display-string}

Get display string for UI

