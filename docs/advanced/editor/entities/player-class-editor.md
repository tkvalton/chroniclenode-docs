<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerClassEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

PlayerClassEditor for managing PlayerClassDefinition resources

## Variables

| | | |
|---|---|---|
| `StarterEquipmentEditor` | [starter_equipment_editor](#var-starter-equipment-editor) |  |
| `PlayerClassDefinition:` | [current_player_class](#var-current-player-class) |  |
| `Array[String]` | [available_collision_shapes](#var-available-collision-shapes) | `[]` |
| `Array[String]` | [available_voice_types](#var-available-voice-types) | `[]` |
| `Array[String]` | [available_voice_variants](#var-available-voice-variants) | `[]` |
| `Array[String]` | [available_motion_entities](#var-available-motion-entities) | `[]` |
| `Array[String]` | [available_animation_types](#var-available-animation-types) | `[]` |
| `int` | [current_page](#var-current-page) | `1` |
| `bool` | [is_editing_template](#var-is-editing-template) | `false` |
| `bool` | [item_selection_mode](#var-item-selection-mode) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [build_template_menu](#method-build-template-menu)() |

## Constants

- `const` **TEMPLATE_NEW** = `300`
- `const` **TEMPLATE_BROWSE** = `301`
- `const` **CONTEXT_ADD_ITEM** = `400`
- `const` **CONTEXT_ADD_CURRENCY** = `401`
- `const` **CONTEXT_EDIT_ITEM** = `402`
- `const` **CONTEXT_REMOVE** = `403`
- `const` **SKILL_TREE_REMOVE** = `500`

## Variable descriptions

### StarterEquipmentEditor starter_equipment_editor {#var-starter-equipment-editor}

*No description yet.*

### PlayerClassDefinition: current_player_class {#var-current-player-class}

*No description yet.*

### Array[String] available_collision_shapes = [] {#var-available-collision-shapes}

*No description yet.*

### Array[String] available_voice_types = [] {#var-available-voice-types}

*No description yet.*

### Array[String] available_voice_variants = [] {#var-available-voice-variants}

*No description yet.*

### Array[String] available_motion_entities = [] {#var-available-motion-entities}

*No description yet.*

### Array[String] available_animation_types = [] {#var-available-animation-types}

*No description yet.*

### int current_page = 1 {#var-current-page}

*No description yet.*

### bool is_editing_template = false {#var-is-editing-template}

*No description yet.*

### bool item_selection_mode = false {#var-item-selection-mode}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### void build_template_menu() {#method-build-template-menu}

*No description yet.*

