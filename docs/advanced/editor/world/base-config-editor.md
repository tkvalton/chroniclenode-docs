<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BaseConfigEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

**Inherited by:** [EnvironmentConfigEditor](/advanced/editor/world/environment-config-editor), [SkyConfigEditor](/advanced/editor/world/sky-config-editor), [SunConfigEditor](/advanced/editor/world/sun-config-editor), [TimeConfigEditor](/advanced/editor/world/time-config-editor)

Base class for config editors that dynamically generate UI from exports

## Methods

| | |
|---|---|
| `void` | [set_resource_manager](#method-set-resource-manager)( `manager: ResourceManager` ) |
| `void` | [load_config](#method-load-config)( `config: Resource` ) |
| `Resource` | [get_config](#method-get-config)() |
| `Resource` | [create_new_config](#method-create-new-config)() |

## Signals

### config_changed( config: Resource ) {#signal-config-changed}

### config_selected( config: Resource ) {#signal-config-selected}

## Method descriptions

### void set_resource_manager( manager: ResourceManager ) {#method-set-resource-manager}

*No description yet.*

### void load_config( config: Resource ) {#method-load-config}

Load a config into the editor

### Resource get_config() {#method-get-config}

Get the current config values from UI

### Resource create_new_config() {#method-create-new-config}

Create a new config of the appropriate type (override in subclasses)

