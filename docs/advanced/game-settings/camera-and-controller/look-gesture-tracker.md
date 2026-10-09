<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LookGestureTracker

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Pure state machine behind the InputManager's mouse-look gestures. No nodes, no Input singleton, no scene access, so it is unit-tested headless (res://tests/run_tests.gd).

## Description

Feed it presses, motion and releases; it returns a list of events (dictionaries): &#123; type: EventType, kind: LookBinding.Kind, button: int, position: Vector2, delta: Vector2 &#125; STARTED - a look gesture began        (position = where the button was pressed) DELTA   - look movement               (delta = raw relative mouse motion, pixels) ENDED   - a look gesture ended        (position = where the button was pressed) CLICK   - a drag-required gesture was released before it became a drag

Rules:

- A button with a binding starts PENDING on press. If the binding does not require a drag it

becomes ACTIVE immediately, otherwise once the pointer moves past the drag threshold.

- Only the highest-priority ACTIVE gesture receives DELTA events (LookBinding.priority), so

holding both buttons never applies the same motion twice.

- Releasing a button only ends that button's gesture; other gestures carry on.

## Methods

| | |
|---|---|
| `void` | [set_bindings](#method-set-bindings)( `bindings: Array` ) |
| `Array` | [press](#method-press)( `button_index: int, position: Vector2` ) |
| `Array` | [motion](#method-motion)( `relative: Vector2, position: Vector2, drag_threshold: float` ) |
| `Array` | [release](#method-release)( `button_index: int` ) |
| `Array` | [cancel_all](#method-cancel-all)() |
| `bool` | [has_active](#method-has-active)() |
| `bool` | [has_any](#method-has-any)() |
| `bool` | [is_button_tracked](#method-is-button-tracked)( `button_index: int` ) |
| `Array` | [get_tracked_buttons](#method-get-tracked-buttons)() |
| `bool` | [is_kind_active](#method-is-kind-active)( `kind: LookBinding.Kind` ) |
| `Dictionary` | [merge_bindings](#method-merge-bindings)( `controller_bindings: Array, camera_bindings: Array, controller_exclusive_buttons: Array` ) *static* |

## Enumerations

### enum EventType {#enum-eventtype}

- **STARTED** = `0`
- **DELTA** = `1`
- **ENDED** = `2`
- **CLICK** = `3`

### enum Phase {#enum-phase}

- **PENDING** = `0`
- **ACTIVE** = `1`

## Method descriptions

### void set_bindings( bindings: Array ) {#method-set-bindings}

Replaces the binding table. Gestures that are already tracked keep running until released.

### Array press( button_index: int, position: Vector2 ) {#method-press}

*No description yet.*

### Array motion( relative: Vector2, position: Vector2, drag_threshold: float ) {#method-motion}

`position` is the pointer position (used for the drag threshold); `relative` the raw motion

### Array release( button_index: int ) {#method-release}

*No description yet.*

### Array cancel_all() {#method-cancel-all}

Ends everything (focus loss, pause, leaving the game state). Pending gestures are dropped silently.

### bool has_active() {#method-has-active}

*No description yet.*

### bool has_any() {#method-has-any}

Any gesture pending or active

### bool is_button_tracked( button_index: int ) {#method-is-button-tracked}

*No description yet.*

### Array get_tracked_buttons() {#method-get-tracked-buttons}

*No description yet.*

### bool is_kind_active( kind: LookBinding.Kind ) {#method-is-kind-active}

*No description yet.*

### Dictionary merge_bindings( controller_bindings: Array, camera_bindings: Array, controller_exclusive_buttons: Array ) {#method-merge-bindings}

Merges the controller's and the camera's claims into one binding table. Result: &#123; bindings: Array[LookBinding]  - one per button, to give to set_bindings() controller_kinds: Array       - LookBinding.Kind values the controller should be told about camera_kinds: Array           - LookBinding.Kind values the camera should be told about conflicts: Array[String]      - human-readable problems (dropped claims), for a warning &#125;

- Both sides claiming the SAME button with the SAME kind is the normal shared case (e.g. RMB

CHARACTER_LOOK: the controller turns the body, the camera applies pitch). If either side requires a drag, the shared binding requires it.

- A button the controller lists in `controller_exclusive_buttons` is the controller's own

(e.g. LMB drag-box select): the camera's claim on it is dropped.

- Two different kinds on one button is a conflict: the controller's claim wins.

