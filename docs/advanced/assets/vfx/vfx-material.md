<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXMaterial

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

VFX Material - Handles temporary material overrides for entities Perfect for buffs, debuffs, status effects, and temporary visual changes

## Variables

| | | |
|---|---|---|
| `Entity  # The entity this material effect is applied to` | [target_entity](#var-target-entity) |  |
| `VFXSelectionMaterial  # The selection config that created this` | [material_selection](#var-material-selection) |  |
| `Dictionary` | [applied_materials](#var-applied-materials) | `{}  # mesh_instance -> original_material backup` |
| `Timer  # Timer controlling the effect duration` | [effect_timer](#var-effect-timer) |  |
| `bool` | [is_active](#var-is-active) | `false` |
| `bool` | [is_finished](#var-is-finished) | `false` |
| `VFXSelectionMaterial.MaterialBlendMode` | [blend_mode](#var-blend-mode) | `VFXSelectionMaterial.MaterialBlendMode.OVERLAY` |

## Methods

| | |
|---|---|
| `void` | [apply_to_entity](#method-apply-to-entity)( `entity: Entity, selection: VFXSelectionMaterial, timer: Timer = null` ) |
| `void` | [restore_materials](#method-restore-materials)() |
| `void` | [extend_duration](#method-extend-duration)( `additional_time: float` ) |
| `float` | [get_remaining_time](#method-get-remaining-time)() |
| `bool` | [is_effect_active](#method-is-effect-active)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [conflicts_with](#method-conflicts-with)( `other: VFXMaterial` ) |
| `Dictionary` | [get_debug_info](#method-get-debug-info)() |

## Variable descriptions

### Entity  # The entity this material effect is applied to target_entity {#var-target-entity}

*No description yet.*

### VFXSelectionMaterial  # The selection config that created this material_selection {#var-material-selection}

*No description yet.*

### Dictionary applied_materials =   # mesh_instance -&gt; original_material backup {#var-applied-materials}

*No description yet.*

### Timer  # Timer controlling the effect duration effect_timer {#var-effect-timer}

*No description yet.*

### bool is_active = false {#var-is-active}

*No description yet.*

### bool is_finished = false {#var-is-finished}

*No description yet.*

### VFXSelectionMaterial.MaterialBlendMode blend_mode = VFXSelectionMaterial.MaterialBlendMode.OVERLAY {#var-blend-mode}

*No description yet.*

## Method descriptions

### void apply_to_entity( entity: Entity, selection: VFXSelectionMaterial, timer: Timer = null ) {#method-apply-to-entity}

Apply material effect to an entity

### void restore_materials() {#method-restore-materials}

Restore all original materials

### void extend_duration( additional_time: float ) {#method-extend-duration}

Extend the effect duration

### float get_remaining_time() {#method-get-remaining-time}

Get remaining effect time

### bool is_effect_active() {#method-is-effect-active}

Check if effect is still active

### void cleanup() {#method-cleanup}

Manual cleanup (called when effect should end early)

### bool conflicts_with( other: VFXMaterial ) {#method-conflicts-with}

Check if this effect conflicts with another material effect

### Dictionary get_debug_info() {#method-get-debug-info}

Get debug info about applied materials

