<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionLoop

**Inherits:** [VFXSelection](/advanced/assets/selections-vfx/vfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Loop VFX selection - continuous effects like auras, channeling

## Properties

| | | |
|---|---|---|
| `VFXSelection.VfxLocation` | [location](#prop-location) | `VFXSelection.VfxLocation.BASE` |
| `bool` | [auto_stop_on_entity_death](#prop-auto-stop-on-entity-death) | `true` |
| `ProjectileMeshSource` | [projectile_mesh_source](#prop-projectile-mesh-source) | `ProjectileMeshSource.EFFECT` |
| `int` | [projectile_mesh_item_id](#prop-projectile-mesh-item-id) | `0` |
| `bool` | [projectile_mesh_fit_length](#prop-projectile-mesh-fit-length) | `true` |
| `bool` | [projectile_mesh_keep_materials](#prop-projectile-mesh-keep-materials) | `true` |

## Methods

| | |
|---|---|
| `Variant` | [prepare_target_for_vfx_type](#method-prepare-target-for-vfx-type)( `target: Variant, originator: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_vfx_type](#method-get-vfx-type)() |
| `String` | [get_vfx_name](#method-get-vfx-name)() |

## Enumerations

### enum ProjectileMeshSource {#enum-projectilemeshsource}

Where the mesh of the PROJECTILE of the effect comes from (for an effect that has a projectile mesh: the arrows, the spears, the thrown axes and knives).

- **EFFECT** = `0` - The mesh the effect was made with.
- **ITEM** = `1` - The mesh of one item (picked below).
- **EQUIPPED_WEAPON** = `2` - The weapon the user holds (its projectile model, or its item model).
- **AMMO** = `3` - The ammo the ability spends (an arrow for a bow); the equipped ammo, then the ammo model of the weapon, when none was spent.

## Property descriptions

### VFXSelection.VfxLocation location = VFXSelection.VfxLocation.BASE {#prop-location}

Where on the target the effect is placed.

### bool auto_stop_on_entity_death = true {#prop-auto-stop-on-entity-death}

Stop loop VFX when attached entity dies

*Projectile Mesh*

### ProjectileMeshSource projectile_mesh_source = ProjectileMeshSource.EFFECT {#prop-projectile-mesh-source}

Where the mesh of the projectile comes from. The effect keeps its own mesh when the source has none to give.

### int projectile_mesh_item_id = 0 {#prop-projectile-mesh-item-id}

The item whose mesh is the projectile, when the source is Item.

### bool projectile_mesh_fit_length = true {#prop-projectile-mesh-fit-length}

True: the mesh is scaled to the length of the mesh the effect was made with (a spear that is a bit longer than a spear). False: it keeps its own size.

### bool projectile_mesh_keep_materials = true {#prop-projectile-mesh-keep-materials}

True: the mesh keeps its own materials. False: it gets the material of the effect (a glowing weapon).

## Method descriptions

### Variant prepare_target_for_vfx_type( target: Variant, originator: Variant = null ) {#method-prepare-target-for-vfx-type}

Loop VFX uses target as-is (no special preparation needed)

### String get_description() {#method-get-description}

A short text about the visual effect, for the editor.

### String get_vfx_type() {#method-get-vfx-type}

The kind of visual effect (beam, loop, one shot ...).

### String get_vfx_name() {#method-get-vfx-name}

The name of the visual effect that is picked.

