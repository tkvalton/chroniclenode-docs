<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectScalingRule

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One rule that scales the damage or healing of an effect by something about the target (or the originator): more damage to a target that is nearly dead

## Properties

| | | |
|---|---|---|
| `Source` | [source](#prop-source) | `Source.TARGET_HEALTH_PERCENT` |
| `int` | [pool_id](#prop-pool-id) | `0` |
| `int` | [effect_id](#prop-effect-id) | `0` |
| `bool` | [only_own_stacks](#prop-only-own-stacks) | `true` |
| `int` | [tag_id](#prop-tag-id) | `0` |
| `Applies` | [applies_when](#prop-applies-when) | `Applies.ALWAYS` |
| `float` | [threshold](#prop-threshold) | `0.0` |
| `float` | [bonus_percent](#prop-bonus-percent) | `100.0` |
| `bool` | [per_unit](#prop-per-unit) | `false` |

## Methods

| | |
|---|---|
| `float` | [measure](#method-measure)( `effect_instance: EffectInstance` ) |
| `float` | [get_bonus_percent](#method-get-bonus-percent)( `effect_instance: EffectInstance` ) |
| `String` | [get_summary](#method-get-summary)() |

## Enumerations

### enum Source {#enum-source}

- **TARGET_HEALTH_PERCENT** = `0` - the target's health as a percentage (0 to 100)
- **TARGET_MISSING_HEALTH_PERCENT** = `1` - 100 minus that
- **TARGET_POOL_VALUE** = `2` - the current value of one of the target's pools
- **TARGET_POOL_PERCENT** = `3` - the fill of one of the target's pools, as a percentage
- **TARGET_HAS_PROTECTIVE_POOL** = `4` - 1 when a shield (a protective pool with something left) protects the target, else 0
- **TARGET_EFFECT_STACKS** = `5` - the stacks of an effect on the target (combo points as a stacking aura)
- **TARGET_HAS_TAG** = `6` - 1 when the target has an entity tag (Undead ...), else 0
- **ORIGINATOR_HEALTH_PERCENT** = `7` - the originator's health as a percentage
- **ORIGINATOR_POOL_PERCENT** = `8` - the fill of one of the originator's pools, as a percentage

### enum Applies {#enum-applies}

- **ALWAYS** = `0` - the rule always applies
- **BELOW** = `1` - only while the measured value is below the threshold
- **ABOVE** = `2` - only while it is above the threshold

## Property descriptions

### Source source = Source.TARGET_HEALTH_PERCENT {#prop-source}

*No description yet.*

### int pool_id = 0 {#prop-pool-id}

The pool measured (pool sources)

### int effect_id = 0 {#prop-effect-id}

The effect whose stacks are counted (stack source)

### bool only_own_stacks = true {#prop-only-own-stacks}

Count only the stacks the originator put there (stack source)

### int tag_id = 0 {#prop-tag-id}

The entity tag looked for (tag source)

### Applies applies_when = Applies.ALWAYS {#prop-applies-when}

*No description yet.*

### float threshold = 0.0 {#prop-threshold}

The value the condition compares with (20 for "below 20 % health")

### float bonus_percent = 100.0 {#prop-bonus-percent}

The bonus in percent: +100 doubles the damage

### bool per_unit = false {#prop-per-unit}

Multiply the bonus by the measured value (+2 % per 1 % of missing health, +25 % per stack) instead of adding it once when the condition holds

## Method descriptions

### float measure( effect_instance: EffectInstance ) {#method-measure}

The measured value for this rule (see Source)

### float get_bonus_percent( effect_instance: EffectInstance ) {#method-get-bonus-percent}

The bonus percent this rule gives for the effect instance (0 when its condition does not hold)

### String get_summary() {#method-get-summary}

*No description yet.*

