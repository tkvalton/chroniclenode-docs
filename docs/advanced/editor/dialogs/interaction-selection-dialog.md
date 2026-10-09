<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractionSelectionDialog

**Inherits:** `AcceptDialog`

Dialog for selecting and configuring an interaction Used when other parts of the editor need a single interaction selection

## Variables

| | | |
|---|---|---|
| `OptionButton` | [category_option](#var-category-option) |  |
| `OptionButton` | [type_option](#var-type-option) |  |
| `Label` | [interaction_info_label](#var-interaction-info-label) |  |
| `ScrollContainer` | [properties_scroll](#var-properties-scroll) |  |
| `VBoxContainer` | [properties_container](#var-properties-container) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `Interaction` | [current_interaction](#var-current-interaction) |  |
| `InteractionEditor.InteractionContext` | [interaction_context](#var-interaction-context) |  |
| `Resource` | [parent_resource](#var-parent-resource) |  |
| `Dictionary` | [interaction_categories](#var-interaction-categories) | `{ ... }` |
| `Array[String]` | [available_categories](#var-available-categories) | `[]` |
| `bool` | [is_loading](#var-is-loading) | `false` |

## Methods

| | |
|---|---|
| `void` | [open_for_interactable](#method-open-for-interactable)( `manager: DialogManager, p_parent_resource: Resource = null` ) |
| `void` | [open_for_entity](#method-open-for-entity)( `manager: DialogManager, p_parent_resource: Resource = null` ) |
| `void` | [edit_interaction](#method-edit-interaction)( `interaction: Interaction, manager: DialogManager, p_parent_resource: Resource = null` ) |

## Signals

### selection_made( interaction: Interaction ) {#signal-selection-made}

## Constants

- `const` **BASE_PATH** = `"res://addons/chroniclenode/data_classes/interactions/"` - Directory paths
- `const` **COMMON_PATH** = `BASE_PATH + "common_interactions/"`
- `const` **ENTITY_PATH** = `BASE_PATH + "entity_interaction/"`
- `const` **INTERACTABLE_PATH** = `BASE_PATH + "interactable_objects/"`

## Variable descriptions

### OptionButton category_option {#var-category-option}

*No description yet.*

### OptionButton type_option {#var-type-option}

*No description yet.*

### Label interaction_info_label {#var-interaction-info-label}

*No description yet.*

### ScrollContainer properties_scroll {#var-properties-scroll}

*No description yet.*

### VBoxContainer properties_container {#var-properties-container}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### Interaction current_interaction {#var-current-interaction}

*No description yet.*

### InteractionEditor.InteractionContext interaction_context {#var-interaction-context}

*No description yet.*

### Resource parent_resource {#var-parent-resource}

Optional parent resource for context

### Dictionary interaction_categories {#var-interaction-categories}

Interaction categories from directory scan

### Array[String] available_categories = [] {#var-available-categories}

Available categories based on context

### bool is_loading = false {#var-is-loading}

*No description yet.*

## Method descriptions

### void open_for_interactable( manager: DialogManager, p_parent_resource: Resource = null ) {#method-open-for-interactable}

Open dialog for InteractableObject context

### void open_for_entity( manager: DialogManager, p_parent_resource: Resource = null ) {#method-open-for-entity}

Open dialog for Entity context (NPC/Encounter)

### void edit_interaction( interaction: Interaction, manager: DialogManager, p_parent_resource: Resource = null ) {#method-edit-interaction}

Open dialog for editing an existing interaction

