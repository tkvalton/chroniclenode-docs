<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MoveDirectionalEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AcceleratedMoveEffect](/advanced/abilities-and-effects/effects-movement/accelerated-move-effect), [ConstantMoveEffect](/advanced/abilities-and-effects/effects-movement/constant-move-effect), [DashEffect](/advanced/abilities-and-effects/effects-movement/dash-effect), [ImpulseEffect](/advanced/abilities-and-effects/effects-movement/impulse-effect), [PullEffect](/advanced/abilities-and-effects/effects-movement/pull-effect), [PushEffect](/advanced/abilities-and-effects/effects-movement/push-effect)

MoveDirectionalEffect - Base class for all directional movement effects Inherits from CompositeEffect to support child effects on collision and normal application

## Properties

| | | |
|---|---|---|
| `DirectionType` | [direction_type](#prop-direction-type) | `DirectionType.FORWARD` |
| `bool` | [gravity_affected](#prop-gravity-affected) | `true` |
| `ChildEffectTiming` | [child_effects_timing](#prop-child-effects-timing) | `ChildEffectTiming.ON_COLLISION` |
| `bool` | [stop_on_collision](#prop-stop-on-collision) | `true` |
| `float` | [bounce_factor](#prop-bounce-factor) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `effect_instance: EffectInstance` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [apply_movement](#method-apply-movement)( `_effect_instance: EffectInstance, _entity: Entity, _direction: Vector3` ) |
| `void` | [on_movement_collision](#method-on-movement-collision)( `effect_instance: EffectInstance, collision: KinematicCollision3D` ) |
| `void` | [handle_movement_collision](#method-handle-movement-collision)( `effect_instance: EffectInstance, collision: KinematicCollision3D` ) |
| `void` | [on_movement_timer_finished](#method-on-movement-timer-finished)( `effect_instance: EffectInstance` ) |
| `void` | [start_movement_timer](#method-start-movement-timer)( `effect_instance: EffectInstance, duration_time: float, timer_name: String = "Movement_Timer"` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Enumerations

### enum DirectionType {#enum-directiontype}

- **FORWARD** = `0`
- **BACKWARD** = `1`
- **LEFT** = `2`
- **RIGHT** = `3`
- **UP** = `4`
- **DOWN** = `5`
- **MOMENTUM** = `6` - Uses entity's current movement velocity direction (falls back to forward if stationary)

### enum ChildEffectTiming {#enum-childeffecttiming}

- **NONE** = `0`
- **ON_COLLISION** = `1`
- **ON_END** = `2`

## Property descriptions

*Direction Settings*

### DirectionType direction_type = DirectionType.FORWARD {#prop-direction-type}

Direction relative to entity's facing direction

### bool gravity_affected = true {#prop-gravity-affected}

Whether movement should be affected by gravity (ignored for instant strategies)

*Child Effects*

### ChildEffectTiming child_effects_timing = ChildEffectTiming.ON_COLLISION {#prop-child-effects-timing}

When to apply child effects during movement

*Collision Settings*

### bool stop_on_collision = true {#prop-stop-on-collision}

Whether to stop movement when hitting obstacles

### float bounce_factor = 0.0 {#prop-bounce-factor}

Bounce strength on collision (0.0 = no bounce, 1.0 = full bounce)

## Method descriptions

### void process_before_start( effect_instance: EffectInstance ) {#method-process-before-start}

Override the duration setup — movement effects own their lifecycle via movement timers. Set duration to permanent (0.0) so start_effect() won't create competing duration timers. Child classes that need immediate mode (instant dash, etc.) override this themselves.

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Override CompositeEffect to handle movement + child effects

### void apply_movement( _effect_instance: EffectInstance, _entity: Entity, _direction: Vector3 ) {#method-apply-movement}

Virtual method for child classes to implement their movement logic

### void on_movement_collision( effect_instance: EffectInstance, collision: KinematicCollision3D ) {#method-on-movement-collision}

Handle collision during movement (called by MovementStateComponent)

### void handle_movement_collision( effect_instance: EffectInstance, collision: KinematicCollision3D ) {#method-handle-movement-collision}

Virtual method for child classes to handle movement-specific collision logic

### void on_movement_timer_finished( effect_instance: EffectInstance ) {#method-on-movement-timer-finished}

Timer callback from EffectInstance - child classes can override

### void start_movement_timer( effect_instance: EffectInstance, duration_time: float, timer_name: String = "Movement_Timer" ) {#method-start-movement-timer}

*No description yet.*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handle effect completion *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect).*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

