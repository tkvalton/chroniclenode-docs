<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InputManager

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

InputManager is the single owner of raw gameplay input. It replaces the old split where GameHost._input fed the PlayerController (before the GUI) while CameraController had its own _unhandled_input (after the GUI).

## Description

Two-phase rule (this is what keeps gestures from getting stuck and the world from stealing UI clicks):

- _input (BEFORE the GUI): handles only RELEASES (mouse buttons, keys) and focus loss. A release is

never swallowed by UI, so a look gesture can always end.

- _unhandled_input (AFTER the GUI): handles presses, motion and everything else. UI gets first

refusal on clicks, so Control.mouse_filter now decides whether a click reaches the world.

Mouse look: logics declare the buttons they want (get_look_bindings), the LookGestureTracker turns raw events into start / delta / end / click, and this node converts motion into radians with ONE sensitivity (SettingsConfig) and tells both the controller and the camera logic. It is also the only place that touches Input.mouse_mode.

Everything else (keys, InputMap actions, mouse clicks) is still delivered as raw events to PlayerController.unhandled_input -&gt; ControllerLogic.handle_input_event, exactly as before. Camera logics that have not been migrated (uses_input_manager() == false) still receive raw events through CameraController.legacy_input.

Not gated on SystemHub.ui_menu_open: that flag means "a window panel is open", and the player must still be able to walk with the inventory open. Panels block clicks via mouse_filter.

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Signals

### look_started( kind: LookBinding.Kind ) {#signal-look-started}

### look_delta( kind: LookBinding.Kind, delta_rad: Vector2 ) {#signal-look-delta}

delta_rad is screen-space radians with the player's invert settings applied: x &gt; 0 = mouse right, y &gt; 0 = mouse down

### look_ended( kind: LookBinding.Kind ) {#signal-look-ended}

### click_completed( button_index: int, position: Vector2 ) {#signal-click-completed}

A drag-required gesture was released before it became a drag

### zoom_steps( steps: int ) {#signal-zoom-steps}

Mouse wheel notches (press events only). &gt; 0 = zoom in, &lt; 0 = zoom out

## Constants

- `float` **DEFAULT_DRAG_THRESHOLD** = `10.0`
- `float` **FALLBACK_SENSITIVITY** = `0.22`

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

