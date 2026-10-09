<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

CharacterEditor for managing CharacterDefinition resources CharacterDefinition inherits EntityDefinition for visual/audio and links to PlayerClassDefinition

## Variables

| | | |
|---|---|---|
| `StarterEquipmentEditor` | [starter_equipment_editor](#var-starter-equipment-editor) |  |
| `CharacterDefinition:` | [current_character](#var-current-character) |  |
| `Array[PlayerClassDefinition]` | [available_player_classes](#var-available-player-classes) | `[]` |
| `Array[EquipmentSlotDefinition]` | [all_equipment_slots](#var-all-equipment-slots) | `[]` |
| `Array[String]` | [available_collision_shapes](#var-available-collision-shapes) | `[]` |
| `Array[String]` | [available_animation_types](#var-available-animation-types) | `[]` |
| `Array[String]` | [available_voice_types](#var-available-voice-types) | `[]` |
| `Array[String]` | [available_voice_variants](#var-available-voice-variants) | `[]` |
| `Array[String]` | [available_motion_entities](#var-available-motion-entities) | `[]` |
| `bool` | [item_selection_mode](#var-item-selection-mode) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |

## Constants

- `const` **CONTEXT_ADD_ITEM** = `400`
- `const` **CONTEXT_ADD_CURRENCY** = `401`
- `const` **CONTEXT_EDIT_ITEM** = `402`
- `const` **CONTEXT_REMOVE** = `403`

## Variable descriptions

### StarterEquipmentEditor starter_equipment_editor {#var-starter-equipment-editor}

*No description yet.*

### CharacterDefinition: current_character {#var-current-character}

*No description yet.*

### Array[PlayerClassDefinition] available_player_classes = [] {#var-available-player-classes}

*No description yet.*

### Array[EquipmentSlotDefinition] all_equipment_slots = [] {#var-all-equipment-slots}

*No description yet.*

### Array[String] available_collision_shapes = [] {#var-available-collision-shapes}

*No description yet.*

### Array[String] available_animation_types = [] {#var-available-animation-types}

*No description yet.*

### Array[String] available_voice_types = [] {#var-available-voice-types}

*No description yet.*

### Array[String] available_voice_variants = [] {#var-available-voice-variants}

*No description yet.*

### Array[String] available_motion_entities = [] {#var-available-motion-entities}

*No description yet.*

### bool item_selection_mode = false {#var-item-selection-mode}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

