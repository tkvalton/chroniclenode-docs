<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SettingsMenuUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Dynamically builds and manages the runtime settings menu from Settings resource

## Properties

| | | |
|---|---|---|
| `PackedScene` | [checkbox_scene](#prop-checkbox-scene) |  |
| `PackedScene` | [option_button_scene](#prop-option-button-scene) |  |
| `PackedScene` | [drag_bar_scene](#prop-drag-bar-scene) |  |
| `PackedScene` | [color_picker_scene](#prop-color-picker-scene) |  |
| `PackedScene` | [section_label_scene](#prop-section-label-scene) |  |
| `PackedScene` | [hotkey_rebind_button_scene](#prop-hotkey-rebind-button-scene) |  |
| `PackedScene` | [button_sub_menu_scene](#prop-button-sub-menu-scene) |  |

## Variables

| | | |
|---|---|---|
| `SettingsManager` | [settings_manager](#var-settings-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `system_hub: GameHost.SystemHub` ) |
| `bool` | [is_accessible](#method-is-accessible)( `accessible: Dictionary, prop_name: String` ) *static* |
| `void` | [hide_setting_description](#method-hide-setting-description)() |
| `void` | [restore_default_settings](#method-restore-default-settings)() |
| `void` | [on_exit_pressed](#method-on-exit-pressed)() |

## Signals

### restored_default_settings() {#signal-restored-default-settings}

Emitted when the default settings were put back.

### settings_exit_button_pressed() {#signal-settings-exit-button-pressed}

Emitted when the player leaves the settings menu.

## Property descriptions

### PackedScene checkbox_scene {#prop-checkbox-scene}

Scene references - assign these in the editor

### PackedScene option_button_scene {#prop-option-button-scene}

The scene of a setting with a list of options.

### PackedScene drag_bar_scene {#prop-drag-bar-scene}

The scene of a setting with a slider.

### PackedScene color_picker_scene {#prop-color-picker-scene}

The scene of a setting with a color.

### PackedScene section_label_scene {#prop-section-label-scene}

The scene of the title of a section.

### PackedScene hotkey_rebind_button_scene {#prop-hotkey-rebind-button-scene}

The scene of a keybind.

### PackedScene button_sub_menu_scene {#prop-button-sub-menu-scene}

The scene of a button that opens a sub menu.

## Variable descriptions

### SettingsManager settings_manager {#var-settings-manager}

SystemRefs

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### bool is_accessible( accessible: Dictionary, prop_name: String ) {#method-is-accessible}

Does the player see this setting? A setting the game has not decided about (it is not in the list yet: it was added after the Game Settings were saved) is shown, as the Game Settings editor shows it ticked; the developer hides it by unticking it.

### void hide_setting_description() {#method-hide-setting-description}

Hides the text about the setting under the mouse.

### void restore_default_settings() {#method-restore-default-settings}

Puts the default settings back.

### void on_exit_pressed() {#method-on-exit-pressed}

Saves the settings and leaves the menu.

