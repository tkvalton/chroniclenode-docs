<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SettingsFile

**Inherits:** `ConfigFile`

Dynamic settings file that saves/loads ANY property from SettingsConfig resource No hardcoded properties - works entirely from reflection

## Methods

| | |
|---|---|
| `void` | [write_settings_delta](#method-write-settings-delta)( `settings: SettingsConfig, defaults: SettingsConfig` ) |
| `SettingsConfig` | [read_settings](#method-read-settings)( `defaults: SettingsConfig` ) |
| `bool` | [has_changes_from_defaults](#method-has-changes-from-defaults)( `settings: SettingsConfig, defaults: SettingsConfig` ) |

## Constants

- `String` **SECTION_GENERAL** = `"General"`
- `String` **SECTION_KEYBINDS** = `"Keybinds"`

## Method descriptions

### void write_settings_delta( settings: SettingsConfig, defaults: SettingsConfig ) {#method-write-settings-delta}

Writes settings to ConfigFile dynamically Only saves properties that differ from defaults

### SettingsConfig read_settings( defaults: SettingsConfig ) {#method-read-settings}

Reads settings from ConfigFile dynamically Returns a new SettingsConfig object with values from file, falling back to defaults

### bool has_changes_from_defaults( settings: SettingsConfig, defaults: SettingsConfig ) {#method-has-changes-from-defaults}

Helper: Check if any values differ from defaults (for "has unsaved changes" detection)

