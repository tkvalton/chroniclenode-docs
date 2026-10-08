<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DashEffect

**Inherits:** [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

DashEffect: Distance-based movement (instant or smooth)

## Properties

| | | |
|---|---|---|
| `float` | [target_distance](#prop-target-distance) | `5.0` |
| `bool` | [instant](#prop-instant) | `false` |
| `float` | [movement_duration](#prop-movement-duration) | `0.15` |
| `bool` | [check_for_collisions](#prop-check-for-collisions) | `true` |
| `float` | [collision_safety_offset](#prop-collision-safety-offset) | `0.5` |
| `float` | [distance_tolerance](#prop-distance-tolerance) | `0.1` |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `effect_instance: EffectInstance` ) |
| `void` | [apply_movement](#method-apply-movement)( `effect_instance: EffectInstance, entity: Entity, direction: Vector3` ) |
| `void` | [handle_movement_collision](#method-handle-movement-collision)( `effect_instance: EffectInstance, collision: KinematicCollision3D` ) |
| `void` | [on_movement_timer_finished](#method-on-movement-timer-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Teleport Settings*

### float target_distance = 5.0 {#prop-target-distance}

Exact distance to move in chosen direction

### bool instant = false {#prop-instant}

If true: instant teleport, if false: smooth dash movement

### float movement_duration = 0.15 {#prop-movement-duration}

How long smooth movement takes (ignored if instant is true)

*Collision Detection*

### bool check_for_collisions = true {#prop-check-for-collisions}

Whether to check for obstacles along movement path

### float collision_safety_offset = 0.5 {#prop-collision-safety-offset}

Distance to stop before collision point (prevents getting stuck in walls)

*Precision Settings*

### float distance_tolerance = 0.1 {#prop-distance-tolerance}

How close to target distance before snapping to exact position (smooth mode only)

## Method descriptions

### void process_before_start( effect_instance: EffectInstance ) {#method-process-before-start}

Instant dash uses immediate (-1.0) so start_effect() applies once and finishes. Smooth dash uses parent's permanent (0.0) — movement timer controls lifecycle.

### void apply_movement( effect_instance: EffectInstance, entity: Entity, direction: Vector3 ) {#method-apply-movement}

Virtual method for child classes to implement their movement logic *(from [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect))*

### void handle_movement_collision( effect_instance: EffectInstance, collision: KinematicCollision3D ) {#method-handle-movement-collision}

Virtual method for child classes to handle movement-specific collision logic *(from [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect))*

### void on_movement_timer_finished( effect_instance: EffectInstance ) {#method-on-movement-timer-finished}

Timer callback from EffectInstance - child classes can override *(from [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect))*

### String get_effect_description() {#method-get-effect-description}

*Overrides this function of [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect).*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect).*

