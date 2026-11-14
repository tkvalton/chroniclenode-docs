<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionMaterialProperties

**Inherits:** [VFXSelectionPropertyPanel](/advanced/editor/dialogs/vfx-selection-property-panel) < [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Property panel for Material VFX selections

## Variables

| | | |
|---|---|---|
| `Label` | [material_target_label](#var-material-target-label) |  |
| `OptionButton` | [material_target_option](#var-material-target-option) |  |
| `Label` | [blend_mode_label](#var-blend-mode-label) |  |
| `OptionButton` | [blend_mode_option](#var-blend-mode-option) |  |
| `CheckBox` | [auto_cleanup_check](#var-auto-cleanup-check) |  |
| `CheckBox` | [stacking_check](#var-stacking-check) |  |
| `Label` | [priority_label](#var-priority-label) |  |
| `SpinBox` | [priority_spin](#var-priority-spin) |  |
| `Label` | [info_label](#var-info-label) |  |
| `SpinBox` | [fade_in_spin](#var-fade-in-spin) |  |
| `SpinBox` | [fade_out_spin](#var-fade-out-spin) |  |
| `OptionButton` | [fade_style_option](#var-fade-style-option) |  |

## Methods

| | |
|---|---|
| `void` | [on_vfx_name_picked](#method-on-vfx-name-picked)( `vfx_name: String` ) |

## Variable descriptions

### Label material_target_label {#var-material-target-label}

*No description yet.*

### OptionButton material_target_option {#var-material-target-option}

*No description yet.*

### Label blend_mode_label {#var-blend-mode-label}

*No description yet.*

### OptionButton blend_mode_option {#var-blend-mode-option}

*No description yet.*

### CheckBox auto_cleanup_check {#var-auto-cleanup-check}

*No description yet.*

### CheckBox stacking_check {#var-stacking-check}

*No description yet.*

### Label priority_label {#var-priority-label}

*No description yet.*

### SpinBox priority_spin {#var-priority-spin}

*No description yet.*

### Label info_label {#var-info-label}

*No description yet.*

### SpinBox fade_in_spin {#var-fade-in-spin}

The fade of the material: in and out (seconds) and how (fade or dissolve)

### SpinBox fade_out_spin {#var-fade-out-spin}

*No description yet.*

### OptionButton fade_style_option {#var-fade-style-option}

*No description yet.*

## Method descriptions

### void on_vfx_name_picked( vfx_name: String ) {#method-on-vfx-name-picked}

A material was picked in the window: a theme material says how it is meant to be put on (metadata vfx_material_blend "replace" / "overlay", vfx_material_target "body" / "item"; see tools/vfx/gen_theme_materials.gd), so the blend mode and the target follow it (they can still be changed after)

