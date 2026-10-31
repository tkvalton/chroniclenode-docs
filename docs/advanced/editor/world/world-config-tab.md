<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldConfigTab

**Inherits:** `MarginContainer`

One tab of the World group for one kind of config: Time, Sun, Sky or Environment (the Weather tab is the WeatherEditor). The editor of the config is in a scroll area: a container titled with the kind of config ("Sun Configuration") that holds the selector of the config and a container for each group of its settings ("Day Night Timing", "Sun Direction"). See docs: World &gt; Time, Sun, Sky, Environment.

## Variables

| | | |
|---|---|---|
| `String` | [kind](#var-kind) | `""` |
| `BaseConfigEditor` | [editor](#var-editor) |  |

## Methods

| | |
|---|---|
| `BaseConfigEditor` | [make_editor](#method-make-editor)( `config_kind: String` ) *static* |
| `void` | [set_resource_manager](#method-set-resource-manager)( `manager: ResourceManager` ) |

## Signals

### config_changed( config_type: String, config: Resource ) {#signal-config-changed}

## Constants

- `Array[String]` **KINDS** = `["time", "sun", "sky", "environment"]` - The kinds that have a tab made of this class

## Variable descriptions

### String kind = "" {#var-kind}

*No description yet.*

### BaseConfigEditor editor {#var-editor}

*No description yet.*

## Method descriptions

### BaseConfigEditor make_editor( config_kind: String ) {#method-make-editor}

The editor of a kind of config (null for a kind that is not one of KINDS)

### void set_resource_manager( manager: ResourceManager ) {#method-set-resource-manager}

*No description yet.*

