<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UniqueObjectInspector

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Dynamic inspector for unique object data (NPC, Encounter, InteractableObject) Displays in the bottom dock when one of these nodes is selected Similar to EffectDynamicPropertyPanel but for UniqueData resources

## Variables

| | | |
|---|---|---|
| `Node3D` | [current_node](#var-current-node) |  |
| `Resource` | [current_unique_data](#var-current-unique-data) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `EditorPlugin` | [plugin](#var-plugin) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Dictionary` | [property_sections](#var-property-sections) | `{}` |
| `ScrollContainer` | [scroll_container](#var-scroll-container) |  |
| `VBoxContainer` | [properties_container](#var-properties-container) |  |
| `Dictionary` | [group_buttons](#var-group-buttons) | `{}` |
| `Dictionary` | [group_sections](#var-group-sections) | `{}` |
| `String` | [current_group](#var-current-group) | `""` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_dialog_manager: DialogManager, p_plugin: EditorPlugin` ) |
| `bool` | [load_node](#method-load-node)( `node: Node3D` ) |
| `void` | [clear_inspector](#method-clear-inspector)() |

## Signals

### unique_data_changed() {#signal-unique-data-changed}

## Constants

- `Dictionary` **SETTING_DESCRIPTIONS** = `{` - Dictionary of setting descriptions for tooltips and help text
- `Array[String]` **EXCLUDED_PROPERTIES** = `[` - Properties that should be excluded from the inspector

## Variable descriptions

### Node3D current_node {#var-current-node}

The selected node (NPC, Encounter, or InteractableObject)

### Resource current_unique_data {#var-current-unique-data}

The UniqueData resource being edited

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### EditorPlugin plugin {#var-plugin}

Reference to the main plugin

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Dictionary property_sections =  {#var-property-sections}

Property sections organized by category

### ScrollContainer scroll_container {#var-scroll-container}

Main container

### VBoxContainer properties_container {#var-properties-container}

*No description yet.*

### Dictionary group_buttons =  {#var-group-buttons}

group_name -&gt; Button

### Dictionary group_sections =  {#var-group-sections}

group_name -&gt; VBoxContainer

### String current_group = "" {#var-current-group}

*No description yet.*

## Method descriptions

### void setup( p_dialog_manager: DialogManager, p_plugin: EditorPlugin ) {#method-setup}

Setup references needed for operation

### bool load_node( node: Node3D ) {#method-load-node}

Load a node's unique_data for editing

### void clear_inspector() {#method-clear-inspector}

Clear the inspector

