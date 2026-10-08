<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CreateItemEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Creates items and adds them to target entity's inventory or drops them in the world

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [quantity](#prop-quantity) | `1` |
| `bool` | [validate_item_exists](#prop-validate-item-exists) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [create_item](#method-create-item)( `effect_instance: EffectInstance` ) |
| `void` | [on_stack_reapply](#method-on-stack-reapply)( `effect_instance: EffectInstance, old_stack_count: int, new_stack_count: int` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `bool` | [is_item_valid](#method-is-item-valid)() |
| `void` | [set_item](#method-set-item)( `new_item_id: int, new_quantity: int = 1` ) |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

*Item Configuration*

### int item_id = 0 {#prop-item-id}

Item ID to create (0 = no item)

### int quantity = 1 {#prop-quantity}

Quantity to create (must be positive)

*Target*

### bool validate_item_exists = true {#prop-validate-item-exists}

Whether to validate that the item ID exists in the database

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### void create_item( effect_instance: EffectInstance ) {#method-create-item}

*No description yet.*

### void on_stack_reapply( effect_instance: EffectInstance, old_stack_count: int, new_stack_count: int ) {#method-on-stack-reapply}

Handle effect-specific stacking logic

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### bool is_item_valid() {#method-is-item-valid}

Check if the configured item ID exists in the database

### void set_item( new_item_id: int, new_quantity: int = 1 ) {#method-set-item}

Set the item and quantity

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

