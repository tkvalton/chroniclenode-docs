<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GainModifierStatEffect

**Inherits:** [StatEffect](/advanced/entity-stats/stat-effects/stat-effect) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Changes what the entity GAINS on a channel: experience, currency (gold find), loot quantity, loot rarity (magic find), threat, resource gain, the duration of statuses put on it. The code that gives something asks the receiver's stats (`StatsComponent.modify_gain(channel, amount)`), so no system needs to know a "gold find" or "experience" stat; a temporary buff on the stat works like any other stat. A dev can add a channel by calling `modify_gain` from their own code. See docs/systems/entity-stats.md, section 24.2.

## Description

Stacking of several effects on one channel: flat additions first, then all percentages together (added, not multiplied), then the multiplies.

## Properties

| | | |
|---|---|---|
| `String` | [channel](#prop-channel) | `GainChannels.EXPERIENCE` |
| `CalculationType` | [calculation_type](#prop-calculation-type) | `CalculationType.PERCENTAGE_INCREASE` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `Dictionary` | [get_contribution](#method-get-contribution)( `stat_points: float, formula_context: FormulaContext = null` ) |
| `String` | [get_short_description](#method-get-short-description)() |
| `Dictionary` | [get_preview_info](#method-get-preview-info)( `stat_points: float` ) |
| `String` | [get_tooltip_text](#method-get-tooltip-text)( `stat_points: float` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Constants

- `PackedStringArray` **CHANNELS** = `[` - The channels the toolkit itself asks about (a dev can use any other name)

## Property descriptions

*Gain Settings*

### String channel = GainChannels.EXPERIENCE {#prop-channel}

Which channel this changes (see GainChannels). Any name works; the toolkit asks about the ones in GainChannels

### CalculationType calculation_type = CalculationType.PERCENTAGE_INCREASE {#prop-calculation-type}

ADD / MINUS: flat. PERCENTAGE_INCREASE / PERCENTAGE_DECREASE: a percentage. MULTIPLY: a factor

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

Override in child classes to return effect type name *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_effect_category() {#method-get-effect-category}

Override in child classes to return category *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### Dictionary get_contribution( stat_points: float, formula_context: FormulaContext = null ) {#method-get-contribution}

What this effect contributes for `stat_points`: (flat addition, percentage points, factor)

### String get_short_description() {#method-get-short-description}

Override in child classes for a one-line summary of what this effect does *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

*No description yet.*

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate this effect's configuration - override in child classes *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

