<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXMaterial

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

A MATERIAL EFFECT on an entity: a material put on the meshes its selection targets (the body, the weapons, a hand, or the hand of the enchanted item) for as long as it lasts — barkskin, ironskin, burning, a glowing blade. It is a layer of MaterialLayers on each mesh (2026-11-14), so it comes off by itself and takes nothing else with it: when its timer ends, when the entity dies, or when the effect that put it on ends (Effect.cleanup_effect_vfx). A layer on an enchanted item's weapon is bound to that weapon's mesh: a weapon swapped in starts clean. It FADES in and out (2026-11-14; the selection's fade_in, fade_out and fade_style): each mesh gets its own copy of the material (MaterialLayers.own_copy) whose layer_fade is set as it fades; a skin is drawn over the body while it comes on and replaces it after, and is drawn over it again while it goes.

## Variables

| | | |
|---|---|---|
| `Entity  # The entity this material effect is applied to` | [target_entity](#var-target-entity) |  |
| `VFXSelectionMaterial` | [material_selection](#var-material-selection) |  |
| `Timer` | [effect_timer](#var-effect-timer) |  |
| `Object` | [item](#var-item) | `null` |
| `Array[MeshInstance3D]` | [layered_meshes](#var-layered-meshes) | `[]` |
| `Array[Material]` | [layered_copies](#var-layered-copies) | `[]` |
| `float` | [fade_amount](#var-fade-amount) | `1.0` |
| `int` | [fade_style](#var-fade-style) | `VFXFade.Style.DISSOLVE` |
| `bool` | [is_fading_out](#var-is-fading-out) | `false` |
| `bool` | [is_active](#var-is-active) | `false` |
| `bool` | [is_finished](#var-is-finished) | `false` |
| `VFXSelectionMaterial.MaterialBlendMode` | [blend_mode](#var-blend-mode) | `VFXSelectionMaterial.MaterialBlendMode.OVERLAY` |

## Methods

| | |
|---|---|
| `String` | [layer_key](#method-layer-key)() |
| `void` | [apply_to_entity](#method-apply-to-entity)( `entity: Entity, selection: VFXSelectionMaterial, timer: Timer = null, for_item: Object = null` ) |
| `void` | [set_fade](#method-set-fade)( `amount: float` ) |
| `void` | [restore_materials](#method-restore-materials)( `immediate: bool = false` ) |
| `void` | [extend_duration](#method-extend-duration)( `additional_time: float` ) |
| `float` | [get_remaining_time](#method-get-remaining-time)() |
| `bool` | [is_effect_active](#method-is-effect-active)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [conflicts_with](#method-conflicts-with)( `other: VFXMaterial` ) |
| `Dictionary` | [get_debug_info](#method-get-debug-info)() |

## Variable descriptions

### Entity  # The entity this material effect is applied to target_entity {#var-target-entity}

========== CORE PROPERTIES ==========

### VFXSelectionMaterial material_selection {#var-material-selection}

The selection config that created this

### Timer effect_timer {#var-effect-timer}

Timer controlling the effect duration

### Object item = null {#var-item}

The enchanted item (the owner of the effect) when the target is the item's own hand.

### Array[MeshInstance3D] layered_meshes = [] {#var-layered-meshes}

The meshes the layer was put on.

### Array[Material] layered_copies = [] {#var-layered-copies}

The copies of the material on them (one per mesh), how much of it is on, the style of its fade, and the fade running

### float fade_amount = 1.0 {#var-fade-amount}

*No description yet.*

### int fade_style = VFXFade.Style.DISSOLVE {#var-fade-style}

*No description yet.*

### bool is_fading_out = false {#var-is-fading-out}

True while it fades out (it is taken off after)

### bool is_active = false {#var-is-active}

========== STATE TRACKING ==========

### bool is_finished = false {#var-is-finished}

True when the material effect is done.

### VFXSelectionMaterial.MaterialBlendMode blend_mode = VFXSelectionMaterial.MaterialBlendMode.OVERLAY {#var-blend-mode}

How the material is combined with the material of the entity.

## Method descriptions

### String layer_key() {#method-layer-key}

The key of this effect's layer on the meshes (each material effect its own, so two of the same stack and come off one by one)

### void apply_to_entity( entity: Entity, selection: VFXSelectionMaterial, timer: Timer = null, for_item: Object = null ) {#method-apply-to-entity}

Apply material effect to an entity (`for_item`: the enchanted item, for the ITEM target)

### void set_fade( amount: float ) {#method-set-fade}

How much of the material is on (0 to 1), on every mesh it is on

### void restore_materials( immediate: bool = false ) {#method-restore-materials}

Takes the layer off again (only this effect's layer): it fades out first (the selection's fade_out), unless `immediate`

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

