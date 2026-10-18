<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SummonInteractableEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Summons an interactable object for the user

## Properties

| | | |
|---|---|---|
| `int` | [interactable_id](#prop-interactable-id) | `0` |
| `String` | [display_name_override](#prop-display-name-override) | `"":` |
| `bool` | [spawn_at_target](#prop-spawn-at-target) | `false` |
| `float` | [position_variance](#prop-position-variance) | `2.0` |
| `Vector3` | [position_offset](#prop-position-offset) | `Vector3.ZERO` |
| `bool` | [random_rotation](#prop-random-rotation) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `void` | [create_summoned_interactable](#method-create-summoned-interactable)( `effect_instance: EffectInstance` ) |
| `String` | [get_category](#method-get-category)() |
| `String` | [get_simple_description](#method-get-simple-description)() |
| `String` | [get_detailed_description](#method-get-detailed-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

*Interactable*

### int interactable_id = 0 {#prop-interactable-id}

ID of the interactable to spawn

### String display_name_override = "": {#prop-display-name-override}

Optional display name override for the spawned interactable

*Positioning*

### bool spawn_at_target = false {#prop-spawn-at-target}

Spawn at target position instead of originator

### float position_variance = 2.0 {#prop-position-variance}

Random variance radius (meters) around spawn position

### Vector3 position_offset = Vector3.ZERO {#prop-position-offset}

Fixed offset from spawn position

*Rotation*

### bool random_rotation = true {#prop-random-rotation}

Apply random Y rotation

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

What the effect does to its target when it is applied.

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: takes back what it did.

### void create_summoned_interactable( effect_instance: EffectInstance ) {#method-create-summoned-interactable}

Makes the object in the world for the user.

### String get_category() {#method-get-category}

The group of the effect in the editor.

### String get_simple_description() {#method-get-simple-description}

A short text about what the effect does.

### String get_detailed_description() {#method-get-detailed-description}

A longer text about what the effect does, with the name of the object.

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

