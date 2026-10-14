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
| `void` | [hide_setting_description](#method-hide-setting-description)() |
| `void` | [restore_default_settings](#method-restore-default-settings)() |
| `void` | [on_exit_pressed](#method-on-exit-pressed)() |

## Signals

### restored_default_settings() {#signal-restored-default-settings}

### settings_exit_button_pressed() {#signal-settings-exit-button-pressed}

## Property descriptions

### PackedScene checkbox_scene {#prop-checkbox-scene}

*No description yet.*

### PackedScene option_button_scene {#prop-option-button-scene}

*No description yet.*

### PackedScene drag_bar_scene {#prop-drag-bar-scene}

*No description yet.*

### PackedScene color_picker_scene {#prop-color-picker-scene}

*No description yet.*

### PackedScene section_label_scene {#prop-section-label-scene}

*No description yet.*

### PackedScene hotkey_rebind_button_scene {#prop-hotkey-rebind-button-scene}

*No description yet.*

### PackedScene button_sub_menu_scene {#prop-button-sub-menu-scene}

*No description yet.*

## Variable descriptions

### SettingsManager settings_manager {#var-settings-manager}

SystemRefs

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*Overrides this function of [PanelUI](/advanced/user-interface/panels/panel-ui).*

### void hide_setting_description() {#method-hide-setting-description}

*No description yet.*

### void restore_default_settings() {#method-restore-default-settings}

*No description yet.*

### void on_exit_pressed() {#method-on-exit-pressed}

*No description yet.*

