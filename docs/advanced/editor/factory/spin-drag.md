<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpinDrag

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Lets the mouse set a SpinBox: press on its field and drag sideways (2026-11-14, the user: the weapon fields of Equipment Meshes could use dragging). Each pixel adds `per_pixel` (Shift: a tenth of it, for fine work). A click without a drag still edits the text as before.

## Variables

| | | |
|---|---|---|
| `SpinBox` | [spinbox](#var-spinbox) |  |
| `float` | [per_pixel](#var-per-pixel) |  |

## Methods

| | |
|---|---|
| `SpinDrag` | [enable](#method-enable)( `target: SpinBox, pixel_step: float` ) *static* |

## Constants

- `float` **DRAG_START** = `4.0` - How far the mouse moves before a press becomes a drag

## Variable descriptions

### SpinBox spinbox {#var-spinbox}

*No description yet.*

### float per_pixel {#var-per-pixel}

*No description yet.*

## Method descriptions

### SpinDrag enable( target: SpinBox, pixel_step: float ) {#method-enable}

Makes the spinbox draggable; the helper lives on the spinbox (as meta) as long as it does

