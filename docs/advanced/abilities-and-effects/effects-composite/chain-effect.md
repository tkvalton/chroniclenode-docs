<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChainEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ChainEffect applies child effects in a chain between multiple targets

## Properties

| | | |
|---|---|---|
| `float` | [chain_range](#prop-chain-range) | `5.0` |
| `int` | [max_chains](#prop-max-chains) | `3` |
| `bool` | [chain_previous_target](#prop-chain-previous-target) | `true` |
| `ChainTargetType` | [chain_target_type](#prop-chain-target-type) | `ChainTargetType.ENAMY` |

## Methods

| | |
|---|---|
| `void` | [apply_effect_vfx](#method-apply-effect-vfx)( `instance: EffectInstance` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Enumerations

### enum ChainTargetType {#enum-chaintargettype}

- **ENAMY** = `0`
- **ALLY** = `1`
- **ALL** = `2`

## Property descriptions

### float chain_range = 5.0 {#prop-chain-range}

*No description yet.*

### int max_chains = 3 {#prop-max-chains}

*No description yet.*

### bool chain_previous_target = true {#prop-chain-previous-target}

*No description yet.*

### ChainTargetType chain_target_type = ChainTargetType.ENAMY {#prop-chain-target-type}

*No description yet.*

## Method descriptions

### void apply_effect_vfx( instance: EffectInstance ) {#method-apply-effect-vfx}

Override VFX application to handle chain beams

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Override to implement chaining logic

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Clean up beam VFX when effect ends

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

