<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RiverEditBar

**Inherits:** [PanelContainer](https://docs.godotengine.org/en/stable/classes/class_panelcontainer.html)

The bar over the 3D viewport while a river that winds is selected: the point being edited (click the handle on a point), its width and how its curve leaves it (Auto, Mirrored, Free), a button to take the point away, how high the water goes above the ground when you place or move a point, the state of each end (free, or joined to another water, with a button to free it), and what is wrong with the course (a bend too tight, a slope too steep). Every change is one step of Undo.

## Variables

| | | |
|---|---|---|
| `RiverVolume` | [river](#var-river) | `null` |
| `EditorUndoRedoManager` | [undo_redo](#var-undo-redo) | `null` |
| `Label` | [title_label](#var-title-label) |  |
| `Label` | [point_label](#var-point-label) |  |
| `SpinBox` | [width_spin](#var-width-spin) |  |
| `OptionButton` | [mode_option](#var-mode-option) |  |
| `Button` | [remove_button](#var-remove-button) |  |
| `SpinBox` | [lift_spin](#var-lift-spin) |  |
| `Label` | [start_label](#var-start-label) |  |
| `Label` | [end_label](#var-end-label) |  |
| `Button` | [start_button](#var-start-button) |  |
| `Button` | [end_button](#var-end-button) |  |
| `Button` | [rejoin_button](#var-rejoin-button) |  |
| `Label` | [problem_label](#var-problem-label) |  |

## Methods

| | |
|---|---|
| `void` | [bind](#method-bind)( `new_river: RiverVolume` ) |
| `void` | [refresh](#method-refresh)() |
| `void` | [apply_width](#method-apply-width)( `value: float` ) |
| `void` | [apply_mode](#method-apply-mode)( `mode: RiverVolume.TangentMode` ) |
| `void` | [remove_selected](#method-remove-selected)() |
| `void` | [unjoin](#method-unjoin)( `at_end: bool` ) |
| `void` | [rejoin](#method-rejoin)() |

## Variable descriptions

### RiverVolume river = null {#var-river}

*No description yet.*

### EditorUndoRedoManager undo_redo = null {#var-undo-redo}

*No description yet.*

### Label title_label {#var-title-label}

*No description yet.*

### Label point_label {#var-point-label}

*No description yet.*

### SpinBox width_spin {#var-width-spin}

*No description yet.*

### OptionButton mode_option {#var-mode-option}

*No description yet.*

### Button remove_button {#var-remove-button}

*No description yet.*

### SpinBox lift_spin {#var-lift-spin}

*No description yet.*

### Label start_label {#var-start-label}

*No description yet.*

### Label end_label {#var-end-label}

*No description yet.*

### Button start_button {#var-start-button}

*No description yet.*

### Button end_button {#var-end-button}

*No description yet.*

### Button rejoin_button {#var-rejoin-button}

*No description yet.*

### Label problem_label {#var-problem-label}

*No description yet.*

## Method descriptions

### void bind( new_river: RiverVolume ) {#method-bind}

Shows this river (null: nothing). The bar follows the river when its points or the point being edited change

### void refresh() {#method-refresh}

Shows the state of the river again

### void apply_width( value: float ) {#method-apply-width}

The width of the point being edited

### void apply_mode( mode: RiverVolume.TangentMode ) {#method-apply-mode}

How the curve leaves the point being edited

### void remove_selected() {#method-remove-selected}

Takes the point being edited away

### void unjoin( at_end: bool ) {#method-unjoin}

Lets go of the water an end is joined to

### void rejoin() {#method-rejoin}

Looks again for water under each end

