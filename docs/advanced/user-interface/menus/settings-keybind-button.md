<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SettingsKeybindButton

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Modern keybind button that works with any InputMap action dynamically

## Variables

| | | |
|---|---|---|
| `String` | [action_name](#var-action-name) | `""` |
| `SettingsManager` | [settings_manager](#var-settings-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `p_settings_manager: SettingsManager` ) |
| `void` | [set_label](#method-set-label)() |
| `void` | [set_text_for_key](#method-set-text-for-key)() |
| `void` | [on_button_toggled](#method-on-button-toggled)( `button_pressed: bool` ) |
| `void` | [set_others_enabled](#method-set-others-enabled)( `enabled: bool` ) |
| `void` | [set_enabled](#method-set-enabled)( `enabled: bool` ) |
| `void` | [rebind_action_key](#method-rebind-action-key)( `events: Array[InputEvent]` ) |
| `void` | [set_action_name](#method-set-action-name)( `new_action_name: String` ) |

## Signals

### mouse_focus_changed( has_focus: bool, action_name: String, description: String ) {#signal-mouse-focus-changed}

## Variable descriptions

### String action_name = "" {#var-action-name}

The InputMap action name (e.g. "move_up", "jump")

### SettingsManager settings_manager {#var-settings-manager}

SettingsManagerRef

## Method descriptions

### void initialize( p_settings_manager: SettingsManager ) {#method-initialize}

Call this after instantiation to set up the control

### void set_label() {#method-set-label}

Format the action name to be human-readable

### void set_text_for_key() {#method-set-text-for-key}

Update the button text to show the currently assigned key

### void on_button_toggled( button_pressed: bool ) {#method-on-button-toggled}

Handle button toggle state changes

### void set_others_enabled( enabled: bool ) {#method-set-others-enabled}

Enable or disable all other hotkey buttons

### void set_enabled( enabled: bool ) {#method-set-enabled}

Enable or disable this button

### void rebind_action_key( events: Array[InputEvent] ) {#method-rebind-action-key}

Rebind the action to the new key/button

### void set_action_name( new_action_name: String ) {#method-set-action-name}

Convenience method for dynamic creation

