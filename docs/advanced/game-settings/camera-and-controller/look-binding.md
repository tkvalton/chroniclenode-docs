<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LookBinding

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

A mouse gesture that a ControllerLogic or CameraLogic wants from the InputManager: "when this button is held (and optionally dragged), I want look input of this kind". Returned from ControllerLogic.get_look_bindings() / CameraLogic.get_look_bindings().

## Variables

| | | |
|---|---|---|
| `int` | [button_index](#var-button-index) | `0` |
| `Kind` | [kind](#var-kind) | `Kind.NONE` |
| `bool` | [requires_drag](#var-requires-drag) | `false` |

## Methods

| | |
|---|---|
| `String` | [kind_name](#method-kind-name)( `look_kind: Kind` ) *static* |
| `String` | [button_name](#method-button-name)( `button_index: int` ) *static* |
| `int` | [priority](#method-priority)( `look_kind: Kind` ) *static* |

## Enumerations

### enum Kind {#enum-kind}

- **NONE** = `0`
- **CHARACTER_LOOK** = `1`
- **FREE_LOOK** = `2`
- **VIEW_ROTATE** = `3`
- **CLICK_ONLY** = `4`

## Variable descriptions

### int button_index = 0 {#var-button-index}

Mouse button this gesture is bound to (MOUSE_BUTTON_*)

### Kind kind = Kind.NONE {#var-kind}

*No description yet.*

### bool requires_drag = false {#var-requires-drag}

false: the look starts on press. true: it starts only after the pointer is dragged past the drag threshold; a release before that is reported as a click instead.

## Method descriptions

### String kind_name( look_kind: Kind ) {#method-kind-name}

Human-readable name for messages

### String button_name( button_index: int ) {#method-button-name}

Human-readable name of a mouse button for messages

### int priority( look_kind: Kind ) {#method-priority}

Higher wins when several gestures are active at once (only the winner receives look deltas)

