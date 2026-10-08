<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityResourceEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modifies the resource cost and/or gain amounts on a specific ability.

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) | `0` |
| `float` | [cost_amount_mod](#prop-cost-amount-mod) | `0.0` |
| `float` | [gain_amount_mod](#prop-gain-amount-mod) | `0.0` |

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

*Resource Modification*

### float cost_amount_mod = 0.0 {#prop-cost-amount-mod}

Modify the ability's resource cost (+/- amount, negative = reduce cost)

### float gain_amount_mod = 0.0 {#prop-gain-amount-mod}

Modify the ability's resource gain (+/- amount, positive = more gain)

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

