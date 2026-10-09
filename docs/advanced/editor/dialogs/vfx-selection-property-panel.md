<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionPropertyPanel

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

**Inherited by:** [VFXSelectionBeamProperties](/advanced/editor/dialogs/vfx-selection-beam-properties), [VFXSelectionLoopProperties](/advanced/editor/dialogs/vfx-selection-loop-properties), [VFXSelectionMaterialProperties](/advanced/editor/dialogs/vfx-selection-material-properties), [VFXSelectionOneShotProperties](/advanced/editor/dialogs/vfx-selection-one-shot-properties), [VFXSelectionPathProperties](/advanced/editor/dialogs/vfx-selection-path-properties), [VFXSelectionTelegraphProperties](/advanced/editor/dialogs/vfx-selection-telegraph-properties), [VFXSelectionTransformationProperties](/advanced/editor/dialogs/vfx-selection-transformation-properties)

Base class for VFX selection property panels Each VFX selection type gets its own specialized panel

## Variables

| | | |
|---|---|---|
| `VFXSelection` | [current_selection](#var-current-selection) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `HSeparator` | [duration_separator](#var-duration-separator) |  |
| `Label` | [duration_label](#var-duration-label) |  |
| `CheckBox` | [duration_override_check](#var-duration-override-check) |  |
| `SpinBox` | [duration_spin](#var-duration-spin) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_panel](#method-initialize-panel)() |
| `void` | [setup_for_selection](#method-setup-for-selection)( `selection: VFXSelection` ) |
| `VFXSelection` | [get_configured_selection](#method-get-configured-selection)() |
| `Dictionary` | [validate_configuration](#method-validate-configuration)() |
| `void` | [reset_to_defaults](#method-reset-to-defaults)() |

## Signals

### properties_changed() {#signal-properties-changed}

### validation_changed( is_valid: bool, warnings: Array[String] ) {#signal-validation-changed}

## Variable descriptions

### VFXSelection current_selection {#var-current-selection}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### HSeparator duration_separator {#var-duration-separator}

*No description yet.*

### Label duration_label {#var-duration-label}

*No description yet.*

### CheckBox duration_override_check {#var-duration-override-check}

*No description yet.*

### SpinBox duration_spin {#var-duration-spin}

*No description yet.*

## Method descriptions

### void initialize_panel() {#method-initialize-panel}

Initialize the panel (called once on creation)

### void setup_for_selection( selection: VFXSelection ) {#method-setup-for-selection}

Setup panel for a specific selection

### VFXSelection get_configured_selection() {#method-get-configured-selection}

Get the configured selection object

### Dictionary validate_configuration() {#method-validate-configuration}

Validate current configuration

### void reset_to_defaults() {#method-reset-to-defaults}

Reset to default values

