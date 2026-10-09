<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SettingsManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Global settings manager with two-tier architecture:

## Description

1. settings.tres (developer defaults + player_accessible_settings config)

2. user://settings.cfg (player modifications only)

## Variables

| | | |
|---|---|---|
| `SettingsConfig` | [settings](#var-settings) |  |
| `SettingsConfig` | [default_settings](#var-default-settings) |  |
| `KeybindSettingsManager` | [keybind_manager](#var-keybind-manager) |  |
| `AudioSettingsManager` | [audio_manager](#var-audio-manager) |  |
| `DisplaySettingsManager` | [display_manager](#var-display-manager) |  |
| `Environment` | [world_enviroment](#var-world-enviroment) |  |

## Methods

| | |
|---|---|
| `void` | [load_settings](#method-load-settings)() |
| `void` | [save_settings](#method-save-settings)() |
| `void` | [restore_default_settings](#method-restore-default-settings)() |
| `bool` | [has_unsaved_changes](#method-has-unsaved-changes)() |
| `void` | [reload_default_settings](#method-reload-default-settings)() |

## Signals

### settings_loaded( settings: SettingsConfig ) {#signal-settings-loaded}

Signals

## Constants

- `String` **USER_SETTINGS_PATH** = `"user://settings.cfg"` - Path to user's settings file (player modifications)

## Variable descriptions

### SettingsConfig settings {#var-settings}

Current active settings (combination of defaults + user modifications)

### SettingsConfig default_settings {#var-default-settings}

Default settings loaded from settings.tres

### KeybindSettingsManager keybind_manager {#var-keybind-manager}

Specialized managers for different subsystems

### AudioSettingsManager audio_manager {#var-audio-manager}

*No description yet.*

### DisplaySettingsManager display_manager {#var-display-manager}

*No description yet.*

### Environment world_enviroment {#var-world-enviroment}

*No description yet.*

## Method descriptions

### void load_settings() {#method-load-settings}

Loads settings using two-tier system:

1. Load defaults from settings.tres

2. Apply user modifications from settings.cfg

### void save_settings() {#method-save-settings}

Saves current settings to user://settings.cfg Only saves values that differ from defaults

### void restore_default_settings() {#method-restore-default-settings}

Restores all settings to their default values (from settings.tres)

### bool has_unsaved_changes() {#method-has-unsaved-changes}

Check if there are unsaved changes

### void reload_default_settings() {#method-reload-default-settings}

Reloads defaults from settings.tres (useful after editing in Game Settings editor)

