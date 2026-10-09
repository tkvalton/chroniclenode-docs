<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXOneShot

**Inherits:** [VFX](/advanced/assets/vfx/vfx) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

OneShot VFX - Fire-and-forget effects like explosions, impacts, hits Can be positioned at a location or attached to entities Automatically finishes when animation/particles complete Base VFX class handles the autonomous behavior for OneShot types

## Properties

| | | |
|---|---|---|
| `float` | [delay_start](#prop-delay-start) | `0.0  # Optional delay before starting VFX` |
| `bool` | [follow_target_on_death](#prop-follow-target-on-death) | `false  # Continue following even if target dies` |

## Variables

| | | |
|---|---|---|
| `Timer` | [delay_timer](#var-delay-timer) |  |

## Methods

| | |
|---|---|
| `void` | [activate_vfx](#method-activate-vfx)( `selection: VFXSelection = null` ) |
| `void` | [deactivate_vfx](#method-deactivate-vfx)() |
| `void` | [attach_to_entity](#method-attach-to-entity)( `target: Variant, location: VFXSelection.VfxLocation, offset: Vector3 = Vector3.ZERO` ) |
| `void` | [spawn_at_position](#method-spawn-at-position)( `pos: Vector3, new_rotation: Vector3 = Vector3.ZERO` ) |
| `void` | [spawn_attached_to_entity](#method-spawn-attached-to-entity)( `entity: Entity, location: VFXSelection.VfxLocation, offset: Vector3 = Vector3.ZERO` ) |
| `void` | [force_start](#method-force-start)() |
| `bool` | [is_in_delay_phase](#method-is-in-delay-phase)() |

## Property descriptions

*OneShot Settings*

### float delay_start = 0.0  # Optional delay before starting VFX {#prop-delay-start}

*No description yet.*

### bool follow_target_on_death = false  # Continue following even if target dies {#prop-follow-target-on-death}

*No description yet.*

## Variable descriptions

### Timer delay_timer {#var-delay-timer}

*No description yet.*

## Method descriptions

### void activate_vfx( selection: VFXSelection = null ) {#method-activate-vfx}

OneShot VFX should always auto-cleanup when finished

### void deactivate_vfx() {#method-deactivate-vfx}

Override to handle delay timer cleanup

### void attach_to_entity( target: Variant, location: VFXSelection.VfxLocation, offset: Vector3 = Vector3.ZERO ) {#method-attach-to-entity}

Enhanced entity attachment for OneShot VFX

### void spawn_at_position( pos: Vector3, new_rotation: Vector3 = Vector3.ZERO ) {#method-spawn-at-position}

Spawn OneShot VFX at a world position

### void spawn_attached_to_entity( entity: Entity, location: VFXSelection.VfxLocation, offset: Vector3 = Vector3.ZERO ) {#method-spawn-attached-to-entity}

Spawn OneShot VFX attached to an entity

### void force_start() {#method-force-start}

Force start (skip delay)

### bool is_in_delay_phase() {#method-is-in-delay-phase}

Check if VFX is in delay phase

