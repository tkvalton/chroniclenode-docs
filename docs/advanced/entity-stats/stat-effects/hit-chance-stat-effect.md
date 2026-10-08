<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HitChanceStatEffect

**Inherits:** [StatEffect](/advanced/entity-stats/stat-effects/stat-effect) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Changes the chance to hit. **Accuracy** raises the chance of the attacks of the entity that has the stat; **Evasion** lowers the chance of the attacks that are aimed at it. The value (from the formula slots, like any per-point effect) is a number of **points of hit chance**: 0.1 per point of the stat is a tenth of a percent. Both only matter when the project uses the hit system and the ability can miss (see HitRules). The effect can be limited with the hit filters (melee or ranged, a school, some abilities) and with conditions, like any stat effect. See docs/systems/entity-stats.md, section 32.

## Properties

| | | |
|---|---|---|
| `HitSide` | [side](#prop-side) | `HitSide.ACCURACY` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `String` | [get_short_description](#method-get-short-description)() |
| `Dictionary` | [get_preview_info](#method-get-preview-info)( `stat_points: float` ) |
| `String` | [get_tooltip_text](#method-get-tooltip-text)( `stat_points: float` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum HitSide {#enum-hitside}

- **ACCURACY** = `0` - Raises the chance of the attacks of the owner
- **EVASION** = `1` - Lowers the chance of the attacks against the owner

## Property descriptions

*Hit Chance*

### HitSide side = HitSide.ACCURACY {#prop-side}

Accuracy raises the chance to hit of the owner's own attacks. Evasion lowers the chance to hit of the attacks against the owner

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

Override in child classes to return effect type name *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_effect_category() {#method-get-effect-category}

Override in child classes to return category *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_short_description() {#method-get-short-description}

Override in child classes for a one-line summary of what this effect does *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

*No description yet.*

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate this effect's configuration - override in child classes *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

