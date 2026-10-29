<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UniqueObjectInspector

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Dynamic inspector for unique object data (NPC, Encounter, InteractableObject) Displays in the bottom dock when one of these nodes is selected Similar to EffectDynamicPropertyPanel but for UniqueData resources

## Variables

| | | |
|---|---|---|
| `Node3D` | [current_node](#var-current-node) |  |
| `Object` | [current_unique_data](#var-current-unique-data) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `EditorPlugin` | [plugin](#var-plugin) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Dictionary` | [property_sections](#var-property-sections) | `{}` |
| `ScrollContainer` | [scroll_container](#var-scroll-container) |  |
| `VBoxContainer` | [properties_container](#var-properties-container) |  |
| `Dictionary` | [group_sections](#var-group-sections) | `{}` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_dialog_manager: DialogManager, p_plugin: EditorPlugin` ) |
| `bool` | [load_node](#method-load-node)( `node: Node3D, others: Array = []` ) |
| `bool` | [is_node_backed](#method-is-node-backed)( `node: Object` ) *static* |
| `void` | [clear_inspector](#method-clear-inspector)() |
| `void` | [load_encounter_record](#method-load-encounter-record)( `record: UniqueEncounterData` ) |

## Signals

### unique_data_changed() {#signal-unique-data-changed}

## Constants

- `Dictionary` **SETTING_DESCRIPTIONS** = `{` - Dictionary of setting descriptions for tooltips and help text
- `Array[String]` **EXCLUDED_PROPERTIES** = `[` - Properties that should be excluded from the inspector
- `Dictionary` **KEY_FIELDS** = `{` - The fields of the strip along the top, by kind of object, with the short name each has there (the same fields, not repeated in the pages)
- `Array[String]` **INLINE_SUBGROUPS** = `["Basic Properties", "Targeting"]` - Sub-groups of a script are pages of their own (the panel has no boxes); these ones are not: they are the fields of the page of their group, one after the other
- `Array[String]` **NODE_EXCLUDED** = `["preset", "preset_name", "placement_id", "unique_data"]` - Properties of a node that the panel never shows (the preset has a menu of its own, the placement id is how the game remembers a placed item was taken)
- `Dictionary` **NODE_ARRAY_DATABASES** = `{"effects_inside": "effect"}` - The databases an array of ids is chosen from, for the nodes whose property name says nothing
- `Array[String]` **NPC_SETTINGS** = `["is_active", "spawn_delay", "respawn_timer", "is_unique_encounter", "despawn...` - Settings of a placed NPC that are not overrides of its definition (they are never marked, and "Reset overrides" leaves them)
- `Dictionary` **DEFINITION_PROPERTY** = `{` - The property of the definition that an override replaces, to show what the definition says
- `Color` **OVERRIDE_COLOR** = `Color(0.82, 0.6, 0.23, 1.0)`
- `float` **NARROW_WIDTH** = `760.0` - Narrower than this (in editor units) the list of sections moves from the side to the top
- `float` **ROW_WIDTH** = `640.0` - Populate properties based on the unique_data type The rows of the panel are a fixed width (the name, then its input right next to it), not the width of the whole panel

## Variable descriptions

### Node3D current_node {#var-current-node}

The selected node (NPC or InteractableObject)

### Object current_unique_data {#var-current-unique-data}

The record being edited (a UniqueData resource), or the node itself for a volume or a dropped item

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

### Dictionary group_sections =  {#var-group-sections}

group_name -&gt; the page (VBoxContainer) of the group

## Method descriptions

### void setup( p_dialog_manager: DialogManager, p_plugin: EditorPlugin ) {#method-setup}

Setup references needed for operation

### bool load_node( node: Node3D, others: Array = [] ) {#method-load-node}

Load a node's unique_data for editing. `others` are more selected nodes of the same kind: the panel then edits them all at once (a field where they differ says "mixed").

### bool is_node_backed( node: Object ) {#method-is-node-backed}

Is this a node whose settings the panel edits on the node itself (it has no record of its own)?

### void clear_inspector() {#method-clear-inspector}

Clear the inspector

### void load_encounter_record( record: UniqueEncounterData ) {#method-load-encounter-record}

Shows the settings of an encounter (it has no node of its own: it is reached from one of its NPCs). A button goes back to the NPC.

