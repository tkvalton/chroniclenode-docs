<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CalculationTriggerStatEffect

**Inherits:** [StatEffect](/advanced/entity-stats/stat-effects/stat-effect) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Effect that rolls a percentage chance to set trigger tags in calculations Examples: Critical Strike, Dodge, Parry, Block Always rolls when the calculation runs - no separate trigger type needed

## Properties

| | | |
|---|---|---|
| `Array[CalculationBase.CalculationType]` | [target_calculations](#prop-target-calculations) | `[]` |
| `TriggerTagDefinition` | [tag_definition](#prop-tag-definition) |  |
| `String` | [trigger_tag](#prop-trigger-tag) | `""` |
| `bool` | [inverted](#prop-inverted) | `false` |
| `SpecialEffectAnimation` | [special_effect_animation](#prop-special-effect-animation) | `SpecialEffectAnimation.NONE` |
| `String` | [special_effect_message](#prop-special-effect-message) | `""` |
| `TriggerRecord.Kind` | [kind](#prop-kind) | `TriggerRecord.Kind.NONE` |
| `String` | [log_phrase](#prop-log-phrase) | `""` |
| `Array[int]` | [affects_damage_types](#prop-affects-damage-types) | `[]` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `String` | [get_tag](#method-get-tag)() |
| `TriggerRecord.Kind` | [get_kind](#method-get-kind)() |
| `float` | [get_base_magnitude](#method-get-base-magnitude)() |
| `bool` | [applies_to_context](#method-applies-to-context)( `context: Dictionary` ) |
| `bool` | [affects_calculation](#method-affects-calculation)( `calc_type: CalculationBase.CalculationType` ) |
| `float` | [get_effective_trigger_chance](#method-get-effective-trigger-chance)( `stat_points: float, formula_context: FormulaContext = null` ) |
| `Dictionary` | [roll_trigger](#method-roll-trigger)( `stat_points: float, formula_context: FormulaContext = null, chance_bonus: float = 0.0, always: bool = false` ) |
| `Dictionary` | [apply_to_calculation](#method-apply-to-calculation)( `current_value: float, stat_points: float, context: Dictionary = {}, formula_context: FormulaContext = null, rules: TriggerRuleSet = null` ) |
| `TriggerRecord` | [create_record](#method-create-record)( `stat_id: int, stat_name: String, magnitude: float = 0.0` ) |
| `Dictionary` | [get_preview_info](#method-get-preview-info)( `stat_points: float` ) |
| `String` | [get_short_description](#method-get-short-description)() |
| `String` | [get_tooltip_text](#method-get-tooltip-text)( `stat_points: float` ) |
| `bool` | [has_special_effect](#method-has-special-effect)() |
| `bool` | [is_visual_mitigation_trigger](#method-is-visual-mitigation-trigger)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum SpecialEffectAnimation {#enum-specialeffectanimation}

- **NONE** = `0`
- **HIT** = `1`
- **DODGE** = `2`

## Constants

- `float` **PREVIEW_POINTS** = `1000.0` - Stat points the validation checks the chance at

## Property descriptions

*Trigger Settings*

### Array[CalculationBase.CalculationType] target_calculations = [] {#prop-target-calculations}

Which calculations this affects (empty = all)

### TriggerTagDefinition tag_definition {#prop-tag-definition}

Optional: the tag this trigger rolls, as a definition (kind, animation, message, log phrase, base magnitude come from it). Without one the inline tag, kind and presentation below are used (older resources)

### String trigger_tag = "" {#prop-trigger-tag}

Tag to set in context (e.g., "critical_strike_triggered")

### bool inverted = false {#prop-inverted}

The value is the chance that the tag does NOT fire (a hit chance: 95 points = 5 % to miss). The chance of the tag is 100 minus the value

*Special Effect*

### SpecialEffectAnimation special_effect_animation = SpecialEffectAnimation.NONE {#prop-special-effect-animation}

The animation played when the trigger fires

### String special_effect_message = "" {#prop-special-effect-message}

The floating text shown when the trigger fires

*Outcome*

### TriggerRecord.Kind kind = TriggerRecord.Kind.NONE {#prop-kind}

What this trigger IS. AVOID (dodge, parry): when it fires the hit does nothing at all, no modifier is needed. MITIGATE (block): sets the tag; modifiers that require it reduce the hit. BOOST (critical strike): sets the tag; modifiers that require it increase the hit. NONE: only sets the tag. AVOID only acts on damage taken.

### String log_phrase = "" {#prop-log-phrase}

Combat log phrase when this trigger fires. Placeholders: {attacker} {target} {ability} {damage}. Example for Dodge: "{target} dodged {attacker}'s {ability}". Empty = the default for the kind

*Damage Type Restrictions*

### Array[int] affects_damage_types = [] {#prop-affects-damage-types}

Empty = affects all damage types

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

Override in child classes to return effect type name *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_effect_category() {#method-get-effect-category}

Override in child classes to return category *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_tag() {#method-get-tag}

The word modifiers and procs match on: the definition's, else the inline trigger tag

### TriggerRecord.Kind get_kind() {#method-get-kind}

What the trigger is (avoid, mitigate, boost, none): the definition's, else the inline kind

### float get_base_magnitude() {#method-get-base-magnitude}

The magnitude the tag carries before rules and stats add to it

### bool applies_to_context( context: Dictionary ) {#method-applies-to-context}

Check if this effect applies to the given context *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### bool affects_calculation( calc_type: CalculationBase.CalculationType ) {#method-affects-calculation}

*No description yet.*

### float get_effective_trigger_chance( stat_points: float, formula_context: FormulaContext = null ) {#method-get-effective-trigger-chance}

*No description yet.*

### Dictionary roll_trigger( stat_points: float, formula_context: FormulaContext = null, chance_bonus: float = 0.0, always: bool = false ) {#method-roll-trigger}

*No description yet.*

### Dictionary apply_to_calculation( current_value: float, stat_points: float, context: Dictionary = {}, formula_context: FormulaContext = null, rules: TriggerRuleSet = null ) {#method-apply-to-calculation}

*No description yet.*

### TriggerRecord create_record( stat_id: int, stat_name: String, magnitude: float = 0.0 ) {#method-create-record}

The record a DamageResult / HealingResult keeps when this trigger fires

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

*No description yet.*

### String get_short_description() {#method-get-short-description}

Override in child classes for a one-line summary of what this effect does *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

*No description yet.*

### bool has_special_effect() {#method-has-special-effect}

*No description yet.*

### bool is_visual_mitigation_trigger() {#method-is-visual-mitigation-trigger}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate this effect's configuration - override in child classes *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

