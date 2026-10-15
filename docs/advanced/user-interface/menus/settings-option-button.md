<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SettingsOptionButton

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Modern option button component that works with any enum setting property

## Variables

| | | |
|---|---|---|
| `String` | [property_name](#var-property-name) | `""` |
| `SettingsManager` | [settings_manager](#var-settings-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `p_settings_manager: SettingsManager` ) |

## Signals

### mouse_focus_changed( has_focus: bool, property_name: String, description: String ) {#signal-mouse-focus-changed}

Emitted when the mouse enters or leaves the setting: whether it has the focus, the name of the setting and its text.

## Variable descriptions

### String property_name = "" {#var-property-name}

The property name in Settings (e.g. "window_mode", "vsync_mode")

### SettingsManager settings_manager {#var-settings-manager}

SettingsManagerRef

## Method descriptions

### void initialize( p_settings_manager: SettingsManager ) {#method-initialize}

Call this after instantiation to set up the control

