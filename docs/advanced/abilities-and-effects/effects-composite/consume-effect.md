<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConsumeEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ConsumeEffect consumes another effect and applies child effects based on consumed stacks.

## Properties

| | | |
|---|---|---|
| `int` | [effect_id](#prop-effect-id) |  |
| `bool` | [only_consume_effects_owned_by_user](#prop-only-consume-effects-owned-by-user) | `true` |
| `bool` | [consume_all_stacks](#prop-consume-all-stacks) | `true` |
| `int` | [stacks_to_consume](#prop-stacks-to-consume) | `1` |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `effect_instance: EffectInstance` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `int` | [consume_target_effect](#method-consume-target-effect)( `effect_instance: EffectInstance` ) |
| `bool` | [can_consume_effect](#method-can-consume-effect)( `target_entity: Entity, originator: Entity` ) |
| `int` | [get_consumable_stack_count](#method-get-consumable-stack-count)( `target_entity: Entity, originator: Entity` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

### int effect_id {#prop-effect-id}

*No description yet.*

### bool only_consume_effects_owned_by_user = true {#prop-only-consume-effects-owned-by-user}

*No description yet.*

### bool consume_all_stacks = true {#prop-consume-all-stacks}

*No description yet.*

### int stacks_to_consume = 1 {#prop-stacks-to-consume}

*No description yet.*

## Method descriptions

### void process_before_start( effect_instance: EffectInstance ) {#method-process-before-start}

Check if consumption is possible and disable VFX/SFX if not

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Override to implement consume logic

### int consume_target_effect( effect_instance: EffectInstance ) {#method-consume-target-effect}

Find and consume the target effect, returning the number of stacks consumed

### bool can_consume_effect( target_entity: Entity, originator: Entity ) {#method-can-consume-effect}

*No description yet.*

### int get_consumable_stack_count( target_entity: Entity, originator: Entity ) {#method-get-consumable-stack-count}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

