<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CompositeEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect), [ChainEffect](/advanced/abilities-and-effects/effects-composite/chain-effect), [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect), [ConditionalEffect](/advanced/abilities-and-effects/effects-base/conditional-effect), [ConsumeEffect](/advanced/abilities-and-effects/effects-composite/consume-effect), [DelayedEffect](/advanced/abilities-and-effects/effects-composite/delayed-effect), [HitscanEffect](/advanced/abilities-and-effects/effects-projectiles-and-shots/hitscan-effect), [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect), [MoveToPointEffect](/advanced/abilities-and-effects/effects-base/move-to-point-effect), [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect)

CompositeEffect applies multiple child effects when triggered.

## Description

CompositeEffect applies multiple child effects when triggered. The effects handle their own registration with EffectsComponent via EffectInstance.start_effect()

Key features:

- Applies multiple child effects to targets
- Supports both standard targeting and custom targeting (for AreaEffect, etc.)
- Child effects handle their own stacking rules and registration
- Clean separation of concerns - CompositeEffect just creates and starts effects

## Properties

| | | |
|---|---|---|
| `bool` | [remove_child_effects_on_finish](#prop-remove-child-effects-on-finish) | `false` |
| `Array[int]` | [child_effects](#prop-child-effects) | `[]` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [apply_child_effects](#method-apply-child-effects)( `effect_instance: EffectInstance` ) |
| `void` | [apply_child_effects_to_target](#method-apply-child-effects-to-target)( `effect_instance: EffectInstance, target: Variant` ) |
| `void` | [apply_effect_list_to_target](#method-apply-effect-list-to-target)( `effect_instance: EffectInstance, effect_ids: Array[int], target: Variant` ) |
| `void` | [apply_child_effect](#method-apply-child-effect)( `parent_instance: EffectInstance, child_effect: Effect, target: Variant` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `void` | [cleanup_child_effects](#method-cleanup-child-effects)( `effect_instance: EffectInstance` ) |
| `Array[EffectInstance]` | [get_active_child_instances](#method-get-active-child-instances)( `effect_instance: EffectInstance` ) |
| `int` | [get_active_child_count](#method-get-active-child-count)( `effect_instance: EffectInstance` ) |
| `Array[Effect]` | [get_child_effect_definitions](#method-get-child-effect-definitions)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

### bool remove_child_effects_on_finish = false {#prop-remove-child-effects-on-finish}

Whether to remove child effects when this effect ends

### Array[int] child_effects = [] {#prop-child-effects}

Array of child effects to apply

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Apply all child effects using the simplified system

### void apply_child_effects( effect_instance: EffectInstance ) {#method-apply-child-effects}

Apply child effects to the standard target (can be overridden by specialized effects)

### void apply_child_effects_to_target( effect_instance: EffectInstance, target: Variant ) {#method-apply-child-effects-to-target}

Apply child effects to a specific target (used by AreaEffect and other specialized effects)

### void apply_effect_list_to_target( effect_instance: EffectInstance, effect_ids: Array[int], target: Variant ) {#method-apply-effect-list-to-target}

Apply a list of effects (ids) to a specific target, each as its own running effect

### void apply_child_effect( parent_instance: EffectInstance, child_effect: Effect, target: Variant ) {#method-apply-child-effect}

Apply a single child effect to a specific target

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handle effect completion

### void cleanup_child_effects( effect_instance: EffectInstance ) {#method-cleanup-child-effects}

Clean up all child effects

### Array[EffectInstance] get_active_child_instances( effect_instance: EffectInstance ) {#method-get-active-child-instances}

Get all currently active child effect instances

### int get_active_child_count( effect_instance: EffectInstance ) {#method-get-active-child-count}

Get count of active child effects

### Array[Effect] get_child_effect_definitions() {#method-get-child-effect-definitions}

The child effects, and theirs, depth first (what the placeholders of the Description of this effect count)

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

