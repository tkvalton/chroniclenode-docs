<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FacingMath

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Pure math helpers for entity facing (yaw) and mouse-look turning. No scene or node access, so everything here can be unit-tested headless (see res://tests/run_tests.gd).

## Description

Yaw convention: radians about +Y, Godot's -Z is "forward". Turning right (mouse moves right, +relative.x) DEcreases yaw.

## Methods

| | |
|---|---|
| `float` | [frame_scale](#method-frame-scale)( `delta: float` ) *static* |
| `float` | [smoothing_weight](#method-smoothing-weight)( `per_frame_weight: float, delta: float` ) *static* |
| `float` | [decay_factor](#method-decay-factor)( `per_frame_factor: float, delta: float` ) *static* |
| `float` | [wrap_angle](#method-wrap-angle)( `angle: float` ) *static* |
| `float` | [angle_diff](#method-angle-diff)( `from: float, to: float` ) *static* |
| `float` | [clamped_step](#method-clamped-step)( `diff: float, max_step: float` ) *static* |
| `float` | [look_radians_per_pixel](#method-look-radians-per-pixel)( `sensitivity_setting: float` ) *static* |
| `Vector2` | [look_delta_radians](#method-look-delta-radians)( `relative: Vector2, sensitivity: float, scale_x: float, scale_y: float, invert_x: bool, invert_y: bool` ) *static* |
| `Vector3` | [forward_from_yaw](#method-forward-from-yaw)( `yaw: float` ) *static* |
| `float` | [yaw_from_direction](#method-yaw-from-direction)( `direction: Vector3` ) *static* |
| `float` | [pitch_from_offset](#method-pitch-from-offset)( `height_difference: float, flat_distance: float` ) *static* |
| `Vector3` | [camera_relative_direction](#method-camera-relative-direction)( `input: Vector2, view_yaw: float` ) *static* |
| `Vector2` | [local_input_for_facing](#method-local-input-for-facing)( `world_direction: Vector3, body_yaw: float` ) *static* |
| `float` | [yaw_from_look](#method-yaw-from-look)( `look_delta_x: float` ) *static* |
| `float` | [turn_animation_from_look](#method-turn-animation-from-look)( `look_delta_x: float` ) *static* |
| `bool` | [is_recent](#method-is-recent)( `now_msec: int, last_msec: int, hold_msec: int` ) *static* |
| `bool` | [auto_face_allowed](#method-auto-face-allowed)( `lease_active: bool, lease_blocks_auto: bool` ) *static* |
| `bool` | [mouse_turn_allowed](#method-mouse-turn-allowed)( `lease_active: bool, lease_blocks_auto: bool, auto_turn_in_progress: bool` ) *static* |
| `bool` | [turn_animation_needs_refresh](#method-turn-animation-needs-refresh)( `current: float, new_value: float` ) *static* |

## Constants

- `float` **TURN_SNAP_EPSILON** = `0.01` - Angular distance below which a smooth turn snaps to its target and finishes
- `float` **TURN_ANIMATION_GAIN** = `100.0` - Scale from (mouse pixels * sensitivity) to the -1..1 turn-animation blend position
- `int` **DIRECT_TURN_HOLD_MSEC** = `150` - How long (ms) after the last mouse-look turn Entity.is_turning() stays true. Bridges the gaps between mouse events / physics ticks so the turn-in-place state does not flap.
- `float` **TURN_ANIMATION_REFRESH_STEP** = `0.3` - Minimum change in the turn-animation blend position that is worth re-sending to the animation tree
- `float` **REFERENCE_FPS** = `60.0` - Frame rate the per-frame camera constants (smoothing weights, speeds, damping) were tuned at
- `float` **MAX_FRAME_SCALE** = `4.0` - Cap on frame_scale so a long hitch does not make the camera lurch
- `float` **LOOK_DEGREES_PER_PIXEL_AT_MAX** = `0.9` - Degrees of look rotation per mouse pixel when the sensitivity setting is at its maximum (1.0). The default setting (SettingsConfig.mouse_*_axis_sensitivity = 0.22) therefore gives ~0.2 deg/px.

## Method descriptions

### float frame_scale( delta: float ) {#method-frame-scale}

How many reference frames (1/60 s) this frame is worth. Multiply a per-frame step by it to make the step frame-rate independent: identical to the old behaviour at 60 FPS.

### float smoothing_weight( per_frame_weight: float, delta: float ) {#method-smoothing-weight}

A per-frame lerp weight (tuned at 60 FPS) converted for this frame's delta, so smoothing takes the same real time at any frame rate: applying it N times at 60 FPS equals applying the converted weight M times at any other rate over the same elapsed time.

### float decay_factor( per_frame_factor: float, delta: float ) {#method-decay-factor}

A per-frame multiplicative decay factor (tuned at 60 FPS) converted for this frame's delta

### float wrap_angle( angle: float ) {#method-wrap-angle}

Wraps an angle into [-PI, PI)

### float angle_diff( from: float, to: float ) {#method-angle-diff}

Shortest signed angle from `from` to `to`, in [-PI, PI]

### float clamped_step( diff: float, max_step: float ) {#method-clamped-step}

Signed step toward a target: moves along `diff` by at most `max_step`, never overshooting

### float look_radians_per_pixel( sensitivity_setting: float ) {#method-look-radians-per-pixel}

Radians of look rotation per mouse pixel for a sensitivity setting (0..1)

### Vector2 look_delta_radians( relative: Vector2, sensitivity: float, scale_x: float, scale_y: float, invert_x: bool, invert_y: bool ) {#method-look-delta-radians}

Converts raw mouse motion (pixels) to look radians using the player's sensitivity and invert settings. Screen space: +x = mouse right, +y = mouse down. Inversion flips the sign, so with no inversion consumers apply it as: yaw = yaw_from_look(delta.x); pitch down = +delta.y. `sensitivity` is the master setting (0..1, SettingsConfig.mouse_sensitivity); the per-axis scales are relative to it (1.0 = same as the master), so an axis runs at master x scale.

### Vector3 forward_from_yaw( yaw: float ) {#method-forward-from-yaw}

Flat forward direction (-Z rotated by yaw): yaw 0 faces -Z, +90 deg faces -X (yaw + = turning left)

### float yaw_from_direction( direction: Vector3 ) {#method-yaw-from-direction}

Yaw whose forward direction points along `direction` (the inverse of forward_from_yaw; Y is ignored)

### float pitch_from_offset( height_difference: float, flat_distance: float ) {#method-pitch-from-offset}

Pitch (radians, + = looking up) from a height difference and the flat distance to a point

### Vector3 camera_relative_direction( input: Vector2, view_yaw: float ) {#method-camera-relative-direction}

World direction for a movement input (x = right, y = forward) relative to a view yaw. The right vector uses the same rule as NavigationController.set_direct_movement_input.

### Vector2 local_input_for_facing( world_direction: Vector3, body_yaw: float ) {#method-local-input-for-facing}

A world movement direction expressed as (right, forward) relative to a body that faces `body_yaw`. Used to drive the locomotion animation blend when the body does not face the way it moves.

### float yaw_from_look( look_delta_x: float ) {#method-yaw-from-look}

Yaw change for a horizontal look delta (screen right =&gt; negative yaw, since yaw + = turning left)

### float turn_animation_from_look( look_delta_x: float ) {#method-turn-animation-from-look}

Turn-animation blend position (-1..1) for a horizontal look delta. Matches the TurnBlendSpace layout: negative = turn-left clips, positive = turn-right clips, so mouse right (a right turn) is positive - the opposite sign of yaw_from_look.

### bool is_recent( now_msec: int, last_msec: int, hold_msec: int ) {#method-is-recent}

True if `last_msec` happened within `hold_msec` before `now_msec`. A negative `last_msec` means "never".

### bool auto_face_allowed( lease_active: bool, lease_blocks_auto: bool ) {#method-auto-face-allowed}

Whether an automatic facing request (navigation, ability, script) may change the body's yaw. `lease_blocks_auto` is only meaningful while a mouse-look lease is active.

### bool mouse_turn_allowed( lease_active: bool, lease_blocks_auto: bool, auto_turn_in_progress: bool ) {#method-mouse-turn-allowed}

Whether mouse-look may turn the body right now. When the lease lets auto-face win (`lease_blocks_auto == false`), mouse yaw yields until the in-progress auto-face turn completes.

### bool turn_animation_needs_refresh( current: float, new_value: float ) {#method-turn-animation-needs-refresh}

Whether the turn animation's blend position changed enough (or flipped side) to be re-sent

