<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SettingsDragBar

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Modern slider component that works with any numeric setting property

## Properties

| | | |
|---|---|---|
| `String` | [property_name](#prop-property-name) | `""` |
| `float` | [override_min](#prop-override-min) | `-1.0` |
| `float` | [override_max](#prop-override-max) | `-1.0` |
| `float` | [override_step](#prop-override-step) | `-1.0` |

## Variables

| | | |
|---|---|---|
| `SettingsManager` | [settings_manager](#var-settings-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `p_settings_manager: SettingsManager` ) |

## Signals

### mouse_focus_changed( has_focus: bool, property_name: String, description: String ) {#signal-mouse-focus-changed}

Emitted when the mouse enters or leaves the setting: whether it has the focus, the name of the setting and its text.

## Property descriptions

### String property_name = "" {#prop-property-name}

The property name in Settings (e.g. "master_volume", "brightness")

### float override_min = -1.0 {#prop-override-min}

Optional: Override min value (otherwise reads from @export_range in Settings)

### float override_max = -1.0 {#prop-override-max}

Optional: Override max value

### float override_step = -1.0 {#prop-override-step}

Optional: Override step value

## Variable descriptions

### SettingsManager settings_manager {#var-settings-manager}

SettingsManagerRef

## Method descriptions

### void initialize( p_settings_manager: SettingsManager ) {#method-initialize}

Call this after instantiation to set up the control

