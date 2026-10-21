<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConditionalEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ConditionConditionalEffect](/advanced/abilities-and-effects/effects-conditional/condition-conditional-effect), [DistanceConditionalEffect](/advanced/abilities-and-effects/effects-conditional/distance-conditional-effect), [EffectConditionalEffect](/advanced/abilities-and-effects/effects-conditional/effect-conditional-effect), [HealthConditionalEffect](/advanced/abilities-and-effects/effects-conditional/health-conditional-effect), [RandomChanceConditionalEffect](/advanced/abilities-and-effects/effects-conditional/random-chance-conditional-effect)

Base class for all conditional effects. Subclasses implement _evaluate_condition() and call _check_and_apply_condition() from their specific_effect_logic().

## Description

The condition is checked once, when the effect is applied. When it is met the child effects are applied; when it is not met the else effects are applied instead (if there are any).

## Properties

| | | |
|---|---|---|
| `Array[int]` | [else_effects](#prop-else-effects) | `[]` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [apply_else_effects](#method-apply-else-effects)( `effect_instance: EffectInstance` ) |
| `Array[int]` | [get_direct_child_effect_ids](#method-get-direct-child-effect-ids)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

### Array[int] else_effects = [] {#prop-else-effects}

Effects applied when the condition is NOT met ("if undead apply A, else apply B"). Empty = nothing happens.

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

What the effect does to its target when it is applied.

### void apply_else_effects( effect_instance: EffectInstance ) {#method-apply-else-effects}

Apply the else effects to the standard target

### Array[int] get_direct_child_effect_ids() {#method-get-direct-child-effect-ids}

The child effects, then the else effects (the flattened list the placeholders of the Description count comes from this)

### String get_effect_description() {#method-get-effect-description}

What the effect does, for the tooltip: the condition, then the child effects, then the else effects

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

