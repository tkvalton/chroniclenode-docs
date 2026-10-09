<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# KeybindSettingsManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Methods

| | |
|---|---|
| `void` | [apply_settings](#method-apply-settings)( `settings: SettingsConfig` ) |
| `void` | [restore_defaults](#method-restore-defaults)( `settings: SettingsConfig` ) |
| `void` | [set_key_binding](#method-set-key-binding)( `settings: SettingsConfig, action_name: String, events: Array[InputEvent]` ) |
| `Array[InputEvent]` | [get_action_binding](#method-get-action-binding)( `action_name: String` ) |

## Signals

### action_key_changed( action_name: String, new_events: Array[InputEvent] ) {#signal-action-key-changed}

Signal, emitted when an action binding has changed

## Method descriptions

### void apply_settings( settings: SettingsConfig ) {#method-apply-settings}

Applies settings to the input system

### void restore_defaults( settings: SettingsConfig ) {#method-restore-defaults}

Restore default action bindings

### void set_key_binding( settings: SettingsConfig, action_name: String, events: Array[InputEvent] ) {#method-set-key-binding}

Changes an action binding

### Array[InputEvent] get_action_binding( action_name: String ) {#method-get-action-binding}

Gets the events associated with an action

