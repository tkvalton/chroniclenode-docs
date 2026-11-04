<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConfigEditorBase

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

**Inherited by:** [EnvironmentConfigEditor](/advanced/editor/world/environment-config-editor), [SkyConfigEditor](/advanced/editor/world/sky-config-editor), [SoundAlbumEditor](/advanced/editor/world/sound-album-editor), [SunConfigEditor](/advanced/editor/world/sun-config-editor), [TimeConfigEditor](/advanced/editor/world/time-config-editor), [WeatherEditor](/advanced/editor/world/weather-editor), [WeatherTableEditor](/advanced/editor/world/weather-table-editor)

The base of the editors of the world configs (Time, Sun, Sky, Environment, Weather), built like the other editors of the toolkit: a scene with the list of the configs on the left (the shared EditorFileList with its New button) and the settings on the right in a container for each group. The scene is hand built; the fields in it are the field components (ConfigField: number, toggle, option, colour, vector) placed in the containers, each with the name of the property it shows. This script opens a config in all of them, saves every change, and does what the lists of all the editors do (new, duplicate, delete).

## Description

The default config of a kind is always there and cannot be deleted. An editor script extends this class, says its resource type and default id (_configure_for_resource_type), and overrides _update_visibility for the groups and fields that only apply sometimes (a sun with a day night cycle has no Static Sun container).

## Variables

| | | |
|---|---|---|
| `int` | [default_id](#var-default-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `Array[ConfigField]` | [get_fields](#method-get-fields)() |
| `ConfigField` | [get_field](#method-get-field)( `property: StringName` ) |
| `void` | [select_default](#method-select-default)() |
| `void` | [set_fields_visible](#method-set-fields-visible)( `properties: Array, shown: bool` ) |
| `void` | [set_group_visible](#method-set-group-visible)( `node_name: String, shown: bool` ) |
| `bool` | [is_default](#method-is-default)( `resource: Resource` ) |
| `Resource` | [duplicate_config](#method-duplicate-config)( `resource: Resource` ) |
| `bool` | [delete_config](#method-delete-config)( `resource: Resource` ) |

## Signals

### config_changed( config: Resource ) {#signal-config-changed}

A setting of the open config changed (the config has it already and is saved)

## Variable descriptions

### int default_id = 0 {#var-default-id}

The id of the default config of this kind (it cannot be deleted); 0 = none

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### Array[ConfigField] get_fields() {#method-get-fields}

All the field components in the scene

### ConfigField get_field( property: StringName ) {#method-get-field}

The field of a property (null when the scene has none)

### void select_default() {#method-select-default}

Opens the default config of this kind

### void set_fields_visible( properties: Array, shown: bool ) {#method-set-fields-visible}

Shows or hides the fields of some properties (a field that does not apply is hidden)

### void set_group_visible( node_name: String, shown: bool ) {#method-set-group-visible}

Shows or hides a group container by the name of its node in the scene (the unique name, "StaticSunGroup")

### bool is_default( resource: Resource ) {#method-is-default}

Is this the default config (it stays)?

### Resource duplicate_config( resource: Resource ) {#method-duplicate-config}

Makes a copy of a config under a new id and opens it

### bool delete_config( resource: Resource ) {#method-delete-config}

Deletes a config (never the default) and opens the default

