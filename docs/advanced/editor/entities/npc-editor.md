<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NpcEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Entity Editor for managing NPCDefinitions resources

## Variables

| | | |
|---|---|---|
| `NPCDefinition:` | [current_entity_data](#var-current-entity-data) |  |
| `bool` | [is_editing_template](#var-is-editing-template) | `false` |
| `Array[String]` | [available_collision_shapes](#var-available-collision-shapes) | `[]` |
| `Array[String]` | [available_voice_types](#var-available-voice-types) | `[]` |
| `Array[String]` | [available_voice_variants](#var-available-voice-variants) | `[]` |
| `Array[String]` | [available_motion_entities](#var-available-motion-entities) | `[]` |
| `EditorResourcePicker` | [footprint_picker](#var-footprint-picker) |  |
| `Array[String]` | [available_animation_types](#var-available-animation-types) | `[]` |
| `Array[String]` | [available_attack_tags](#var-available-attack-tags) | `[]` |
| `Array[String]` | [available_stance_tags](#var-available-stance-tags) | `[]` |
| `Array[String]` | [available_aim_tags](#var-available-aim-tags) | `[]` |
| `Array[String]` | [available_reload_tags](#var-available-reload-tags) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `EntityDefinition` | [get_current_entity_data](#method-get-current-entity-data)() |
| `void` | [set_current_entity](#method-set-current-entity)( `entity_data: EntityDefinition` ) |
| `void` | [refresh_database_references](#method-refresh-database-references)() |

## Variable descriptions

### NPCDefinition: current_entity_data {#var-current-entity-data}

*No description yet.*

### bool is_editing_template = false {#var-is-editing-template}

*No description yet.*

### Array[String] available_collision_shapes = [] {#var-available-collision-shapes}

*No description yet.*

### Array[String] available_voice_types = [] {#var-available-voice-types}

*No description yet.*

### Array[String] available_voice_variants = [] {#var-available-voice-variants}

*No description yet.*

### Array[String] available_motion_entities = [] {#var-available-motion-entities}

*No description yet.*

### EditorResourcePicker footprint_picker {#var-footprint-picker}

*No description yet.*

### Array[String] available_animation_types = [] {#var-available-animation-types}

*No description yet.*

### Array[String] available_attack_tags = [] {#var-available-attack-tags}

*No description yet.*

### Array[String] available_stance_tags = [] {#var-available-stance-tags}

*No description yet.*

### Array[String] available_aim_tags = [] {#var-available-aim-tags}

*No description yet.*

### Array[String] available_reload_tags = [] {#var-available-reload-tags}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### EntityDefinition get_current_entity_data() {#method-get-current-entity-data}

*No description yet.*

### void set_current_entity( entity_data: EntityDefinition ) {#method-set-current-entity}

*No description yet.*

### void refresh_database_references() {#method-refresh-database-references}

*No description yet.*

