<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# OrbitEffect

**Inherits:** [MoveToPointEffect](/advanced/abilities-and-effects/effects-base/move-to-point-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

OrbitEffect: Entity orbits around a target entity or position

## Description

OrbitEffect: Entity orbits around a target entity or position Uses velocity-based movement updated each frame to trace a circular path around the target. Supports configurable radius, speed, and direction.

Perfect for whirlwind attacks circling an enemy, satellite guard abilities, spirit wolves closing in, or channeled abilities with orbital movement.

## Properties

| | | |
|---|---|---|
| `float` | [orbit_radius](#prop-orbit-radius) | `3.0` |
| `float` | [orbit_speed](#prop-orbit-speed) | `180.0` |
| `OrbitDirection` | [orbit_direction](#prop-orbit-direction) | `OrbitDirection.CLOCKWISE` |
| `float` | [orbit_duration](#prop-orbit-duration) | `3.0` |
| `OrbitEndBehavior` | [end_behavior](#prop-end-behavior) | `OrbitEndBehavior.STOP_IN_PLACE` |
| `bool` | [smooth_entry](#prop-smooth-entry) | `true` |
| `float` | [entry_duration](#prop-entry-duration) | `0.3` |
| `bool` | [spiral_inward](#prop-spiral-inward) | `false` |
| `float` | [spiral_end_radius](#prop-spiral-end-radius) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `effect_instance: EffectInstance` ) |
| `void` | [apply_movement_to_point](#method-apply-movement-to-point)( `effect_instance: EffectInstance, entity: Entity, _target_position: Vector3` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum OrbitDirection {#enum-orbitdirection}

- **CLOCKWISE** = `0`
- **COUNTER_CLOCKWISE** = `1`

### enum OrbitEndBehavior {#enum-orbitendbehavior}

- **STOP_IN_PLACE** = `0` - Entity stops wherever it is when orbit ends
- **RETURN_TO_START** = `1` - Entity teleports back to starting position
- **MOVE_TO_TARGET** = `2` - Entity moves to the orbit center (the target)

## Property descriptions

*Orbit Settings*

### float orbit_radius = 3.0 {#prop-orbit-radius}

Radius of the orbit in units

### float orbit_speed = 180.0 {#prop-orbit-speed}

Rotational speed in degrees per second

### OrbitDirection orbit_direction = OrbitDirection.CLOCKWISE {#prop-orbit-direction}

Rotation direction

### float orbit_duration = 3.0 {#prop-orbit-duration}

How long the orbit lasts (0 = permanent until cancelled)

*Orbit Behavior*

### OrbitEndBehavior end_behavior = OrbitEndBehavior.STOP_IN_PLACE {#prop-end-behavior}

What happens when the orbit ends

### bool smooth_entry = true {#prop-smooth-entry}

Whether to smoothly move to orbit radius on start (vs instant snap)

### float entry_duration = 0.3 {#prop-entry-duration}

Time to reach orbit radius from current position

### bool spiral_inward = false {#prop-spiral-inward}

Whether the orbit radius shrinks over time (spiral inward)

### float spiral_end_radius = 0.0 {#prop-spiral-end-radius}

Final radius when spiraling inward (0 = reach the center)

## Method descriptions

### void process_before_start( effect_instance: EffectInstance ) {#method-process-before-start}

*No description yet.*

### void apply_movement_to_point( effect_instance: EffectInstance, entity: Entity, _target_position: Vector3 ) {#method-apply-movement-to-point}

*No description yet.*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

