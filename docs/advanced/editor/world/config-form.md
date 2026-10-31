<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConfigForm

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

**Inherited by:** [WeatherEffectEntryForm](/advanced/editor/world/weather-effect-entry-form)

A small form made of field components (ConfigField) for a resource that is part of another one: an item of a list (an exposed effect of a weather). The scene is built by hand with the fields in it, each with the property it shows. `load_config(resource)` opens the resource in all of them; every change is written to it and sent as `config_changed`, so the owner saves what it belongs to.

## Variables

| | | |
|---|---|---|
| `Resource` | [config](#var-config) |  |

## Methods

| | |
|---|---|
| `void` | [load_config](#method-load-config)( `p_config: Resource` ) |
| `Array[ConfigField]` | [get_fields](#method-get-fields)() |
| `ConfigField` | [get_field](#method-get-field)( `property: StringName` ) |

## Signals

### config_changed( config: Resource ) {#signal-config-changed}

## Variable descriptions

### Resource config {#var-config}

*No description yet.*

## Method descriptions

### void load_config( p_config: Resource ) {#method-load-config}

Opens a resource in the form

### Array[ConfigField] get_fields() {#method-get-fields}

*No description yet.*

### ConfigField get_field( property: StringName ) {#method-get-field}

*No description yet.*

