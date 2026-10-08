<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TriggerRuleStatEffect

**Inherits:** [StatEffect](/advanced/entity-stats/stat-effects/stat-effect) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A stat effect that changes how a trigger tag behaves for everything the entity does, from the stat's points: "+1 % crit damage per point of Critical Damage", "+0.1 % chance to every trigger per point of Luck", "cannot crit while this stat has points". The same thing an effect's TriggerRule does for one effect, but for the entity.

## Description

One effect does one thing (`bonus_kind`); the number comes from the formula slots like any per-point effect. See docs/systems/entity-stats.md, section 24.1.

## Properties

| | | |
|---|---|---|
| `TriggerTagDefinition` | [tag](#prop-tag) |  |
| `BonusKind` | [bonus_kind](#prop-bonus-kind) | `BonusKind.MAGNITUDE_BONUS` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `void` | [add_to_rules](#method-add-to-rules)( `rules: TriggerRuleSet, stat_points: float, formula_context: FormulaContext = null` ) |
| `String` | [get_short_description](#method-get-short-description)() |
| `Dictionary` | [get_preview_info](#method-get-preview-info)( `stat_points: float` ) |
| `String` | [get_tooltip_text](#method-get-tooltip-text)( `stat_points: float` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum BonusKind {#enum-bonuskind}

- **CHANCE_BONUS** = `0` - Adds percentage points to the chance of the tag
- **MAGNITUDE_BONUS** = `1` - Adds to the magnitude of the tag (crit: +1 per point = +1 % crit damage)
- **MAGNITUDE_MORE** = `2` - Multiplies the magnitude: the value is a percentage (25 = 25 % more)
- **FORCE_ALWAYS** = `3` - While the stat has points the tag always fires (no number needed)
- **FORCE_NEVER** = `4` - While the stat has points the tag never fires (no number needed)

## Property descriptions

*Trigger Rule*

### TriggerTagDefinition tag {#prop-tag}

The tag the rule is about. Empty = every tag (not allowed with FORCE_ALWAYS)

### BonusKind bonus_kind = BonusKind.MAGNITUDE_BONUS {#prop-bonus-kind}

What the stat gives the tag: a chance bonus, a magnitude bonus, a magnitude multiplier, or forcing it always or never

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

Override in child classes to return effect type name *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_effect_category() {#method-get-effect-category}

Override in child classes to return category *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### void add_to_rules( rules: TriggerRuleSet, stat_points: float, formula_context: FormulaContext = null ) {#method-add-to-rules}

Adds what this effect gives for `stat_points` to the rule set of a phase

### String get_short_description() {#method-get-short-description}

Override in child classes for a one-line summary of what this effect does *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

*No description yet.*

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate this effect's configuration - override in child classes *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

