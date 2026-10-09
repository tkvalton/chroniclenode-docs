<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AnimationSelectionDialog

**Inherits:** `ConfirmationDialog`

Enhanced animation selection dialog with per-library animation mappings for non-weapon categories

## Variables

| | | |
|---|---|---|
| `VBoxContainer` | [library_animations_container](#var-library-animations-container) |  |
| `Dictionary` | [library_animation_rows](#var-library-animation-rows) | `{}  # library_name -> {container, dropdown}` |
| `Button` | [remove_animation_button](#var-remove-animation-button) |  |
| `String` | [selection_class_type](#var-selection-class-type) | `"AnimationSelectionAbility"` |
| `AnimationSelection` | [current_selection](#var-current-selection) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `Array[Dictionary]` | [available_weapon_tags](#var-available-weapon-tags) | `[]  # [{display_name, attack_tag, weapon_class}]` |

## Methods

| | |
|---|---|
| `void` | [set_resource_manager](#method-set-resource-manager)( `p_resource_manager: ResourceManager` ) |
| `void` | [edit_animation_selection](#method-edit-animation-selection)( `selection: AnimationSelection, class_type: String = "", preview_entity_ref: Entity = null` ) |
| `void` | [create_new_animation_selection](#method-create-new-animation-selection)( `class_type: String, preview_entity_ref: Entity = null` ) |
| `String` | [get_current_selection_description](#method-get-current-selection-description)() |

## Signals

### selection_made( selection: AnimationSelection ) {#signal-selection-made}

## Variable descriptions

### VBoxContainer library_animations_container {#var-library-animations-container}

*No description yet.*

### Dictionary library_animation_rows =   # library_name -&gt; container, dropdown {#var-library-animation-rows}

*No description yet.*

### Button remove_animation_button {#var-remove-animation-button}

*No description yet.*

### String selection_class_type = "AnimationSelectionAbility" {#var-selection-class-type}

*No description yet.*

### AnimationSelection current_selection {#var-current-selection}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### Array[Dictionary] available_weapon_tags = []  # [display_name, attack_tag, weapon_class] {#var-available-weapon-tags}

*No description yet.*

## Method descriptions

### void set_resource_manager( p_resource_manager: ResourceManager ) {#method-set-resource-manager}

Set the resource manager for loading WeaponClassDefinitions

### void edit_animation_selection( selection: AnimationSelection, class_type: String = "", preview_entity_ref: Entity = null ) {#method-edit-animation-selection}

*No description yet.*

### void create_new_animation_selection( class_type: String, preview_entity_ref: Entity = null ) {#method-create-new-animation-selection}

*No description yet.*

### String get_current_selection_description() {#method-get-current-selection-description}

*No description yet.*

