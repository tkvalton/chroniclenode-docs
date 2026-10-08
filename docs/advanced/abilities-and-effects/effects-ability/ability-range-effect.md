<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityRangeEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modifies the targeting range of a specific ability.

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) | `0` |
| `float` | [max_range_mod](#prop-max-range-mod) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_stack_reapply](#method-on-stack-reapply)( `effect_instance: EffectInstance, old_stack_count: int, new_stack_count: int` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Target Ability*

### int ability_id = 0 {#prop-ability-id}

The ability to modify

*Range Modification*

### float max_range_mod = 0.0 {#prop-max-range-mod}

Modify max range in units (+/- value)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### void on_stack_reapply( effect_instance: EffectInstance, old_stack_count: int, new_stack_count: int ) {#method-on-stack-reapply}

*No description yet.*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

