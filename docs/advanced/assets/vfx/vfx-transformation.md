<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXTransformation

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

VFX Transformation - Handles temporary visual transformations for entities Supports scaling, polymorph, and weapon swapping effects

## Variables

| | | |
|---|---|---|
| `Entity  # The entity this transformation is applied to` | [target_entity](#var-target-entity) |  |
| `VFXSelectionTransformation  # The selection config that created this` | [transformation_selection](#var-transformation-selection) |  |
| `Timer  # Timer controlling the effect duration` | [effect_timer](#var-effect-timer) |  |
| `bool` | [is_active](#var-is-active) | `false` |
| `bool` | [is_finished](#var-is-finished) | `false` |
| `TransformationType` | [transformation_type](#var-transformation-type) | `TransformationType.SCALE` |
| `Vector3` | [original_scale](#var-original-scale) |  |
| `PackedScene` | [original_skeleton_scene](#var-original-skeleton-scene) |  |
| `Dictionary` | [original_weapon_meshes](#var-original-weapon-meshes) | `{}  # slot_name -> original_mesh` |
| `Tween` | [blend_tween](#var-blend-tween) |  |

## Methods

| | |
|---|---|
| `void` | [apply_to_entity](#method-apply-to-entity)( `entity: Entity, selection: VFXSelectionTransformation, timer: Timer = null` ) |
| `void` | [restore_transformations](#method-restore-transformations)() |
| `void` | [extend_duration](#method-extend-duration)( `additional_time: float` ) |
| `float` | [get_remaining_time](#method-get-remaining-time)() |
| `bool` | [is_effect_active](#method-is-effect-active)() |
| `void` | [cleanup](#method-cleanup)() |
| `Dictionary` | [get_effect_info](#method-get-effect-info)() |
| `bool` | [conflicts_with](#method-conflicts-with)( `other: VFXTransformation` ) |

## Enumerations

### enum TransformationType {#enum-transformationtype}

- **SCALE** = `0`
- **POLYMORPH** = `1`

## Variable descriptions

### Entity  # The entity this transformation is applied to target_entity {#var-target-entity}

*No description yet.*

### VFXSelectionTransformation  # The selection config that created this transformation_selection {#var-transformation-selection}

*No description yet.*

### Timer  # Timer controlling the effect duration effect_timer {#var-effect-timer}

*No description yet.*

### bool is_active = false {#var-is-active}

*No description yet.*

### bool is_finished = false {#var-is-finished}

*No description yet.*

### TransformationType transformation_type = TransformationType.SCALE {#var-transformation-type}

*No description yet.*

### Vector3 original_scale {#var-original-scale}

*No description yet.*

### PackedScene original_skeleton_scene {#var-original-skeleton-scene}

*No description yet.*

### Dictionary original_weapon_meshes =   # slot_name -&gt; original_mesh {#var-original-weapon-meshes}

*No description yet.*

### Tween blend_tween {#var-blend-tween}

*No description yet.*

## Method descriptions

### void apply_to_entity( entity: Entity, selection: VFXSelectionTransformation, timer: Timer = null ) {#method-apply-to-entity}

Apply transformation effect to an entity

### void restore_transformations() {#method-restore-transformations}

Restore all transformations to original state

### void extend_duration( additional_time: float ) {#method-extend-duration}

Extend the effect duration

### float get_remaining_time() {#method-get-remaining-time}

Get remaining effect time

### bool is_effect_active() {#method-is-effect-active}

Check if effect is still active

### void cleanup() {#method-cleanup}

Manual cleanup (called when effect should end early)

### Dictionary get_effect_info() {#method-get-effect-info}

Get effect info for debugging

### bool conflicts_with( other: VFXTransformation ) {#method-conflicts-with}

Check if this effect conflicts with another transformation

