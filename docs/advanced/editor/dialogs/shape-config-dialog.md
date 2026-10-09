<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ShapeConfigDialog

**Inherits:** `AcceptDialog`

## Variables

| | | |
|---|---|---|
| `ShapeType` | [current_shape_type](#var-current-shape-type) | `ShapeType.WEDGE` |

## Methods

| | |
|---|---|
| `void` | [edit_projectile_shape](#method-edit-projectile-shape)( `current_shape: Shape3D, dialog_title: String = "Configure Shape", context: String = ""` ) |

## Signals

### selection_made( shape: Shape3D ) {#signal-selection-made}

## Enumerations

### enum ShapeType {#enum-shapetype}

- **WEDGE** = `1`
- **ARC** = `2`
- **DIRECTIONAL_LINE** = `3`
- **CONE** = `4`
- **TRUNCATED_CONE** = `5`
- **SPHERE** = `8`
- **DOME** = `9`
- **BOX** = `10`
- **CYLINDER** = `11`
- **LINE** = `12`
- **DONUT** = `13`
- **CROSS** = `14`
- **DIAMOND** = `15`
- **CAPSULE** = `16`

## Variable descriptions

### ShapeType current_shape_type = ShapeType.WEDGE {#var-current-shape-type}

*No description yet.*

## Method descriptions

### void edit_projectile_shape( current_shape: Shape3D, dialog_title: String = "Configure Shape", context: String = "" ) {#method-edit-projectile-shape}

Initialize dialog for editing a projectile shape

