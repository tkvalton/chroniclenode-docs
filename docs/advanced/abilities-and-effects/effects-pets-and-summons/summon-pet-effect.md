<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SummonPetEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Summons a pet or companion entity for the user

## Properties

| | | |
|---|---|---|
| `int` | [entity_id](#prop-entity-id) | `0` |
| `bool` | [random_offset_spawn](#prop-random-offset-spawn) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `void` | [create_summoned_entity](#method-create-summoned-entity)( `effect_instance: EffectInstance` ) |
| `void` | [handle_stack_logic](#method-handle-stack-logic)( `effect_instance: EffectInstance, amount_to_add: int` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

### int entity_id = 0 {#prop-entity-id}

The entity ID to summon

### bool random_offset_spawn = true {#prop-random-offset-spawn}

Spawn with random offset around user

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

*No description yet.*

### void create_summoned_entity( effect_instance: EffectInstance ) {#method-create-summoned-entity}

*No description yet.*

### void handle_stack_logic( effect_instance: EffectInstance, amount_to_add: int ) {#method-handle-stack-logic}

Handle effect-specific stacking logic (called by EffectInstance)

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

