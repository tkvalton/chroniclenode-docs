<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractionEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Editor for a single Interaction instance Combines category/type selection with dynamic property editing

## Variables

| | | |
|---|---|---|
| `InteractionContext` | [current_context](#var-current-context) | `InteractionContext.BOTH` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `Interaction` | [current_interaction](#var-current-interaction) |  |
| `Resource` | [parent_resource](#var-parent-resource) |  |
| `Dictionary` | [interaction_categories](#var-interaction-categories) | `{ ... }` |
| `Array[String]` | [available_categories](#var-available-categories) | `[]` |
| `HBoxContainer` | [selection_container](#var-selection-container) |  |
| `OptionButton` | [category_option](#var-category-option) |  |
| `OptionButton` | [type_option](#var-type-option) |  |
| `Button` | [change_button](#var-change-button) |  |
| `ScrollContainer` | [properties_scroll](#var-properties-scroll) |  |
| `VBoxContainer` | [properties_container](#var-properties-container) |  |
| `Label` | [no_interaction_label](#var-no-interaction-label) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `context: InteractionContext, manager: DialogManager, p_parent_resource: Resource = null` ) |
| `void` | [set_interaction](#method-set-interaction)( `interaction: Interaction` ) |
| `Interaction` | [get_interaction](#method-get-interaction)() |
| `void` | [clear_interaction](#method-clear-interaction)() |

## Signals

### interaction_changed() {#signal-interaction-changed}

## Enumerations

### enum InteractionContext {#enum-interactioncontext}

========== ENUMS ==========

- **ENTITY** = `0` - For Entity-based interactions
- **INTERACTABLE** = `1` - For InteractableObject interactions
- **BOTH** = `2` - Show all interactions

## Constants

- `const` **BASE_PATH** = `"res://addons/chroniclenode/data_classes/interactions/"` - Directory paths
- `const` **COMMON_PATH** = `BASE_PATH + "common_interactions/"`
- `const` **ENTITY_PATH** = `BASE_PATH + "entity_interaction/"`
- `const` **INTERACTABLE_PATH** = `BASE_PATH + "interactable_objects/"`

## Variable descriptions

### InteractionContext current_context = InteractionContext.BOTH {#var-current-context}

========== PROPERTIES ==========

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### Interaction current_interaction {#var-current-interaction}

*No description yet.*

### Resource parent_resource {#var-parent-resource}

Reference to parent resource (e.g., InteractableDefinition)

### Dictionary interaction_categories {#var-interaction-categories}

Interaction categories from directory scan

### Array[String] available_categories = [] {#var-available-categories}

Available categories based on context

### HBoxContainer selection_container {#var-selection-container}

UI Components - Selection Section

### OptionButton category_option {#var-category-option}

*No description yet.*

### OptionButton type_option {#var-type-option}

*No description yet.*

### Button change_button {#var-change-button}

*No description yet.*

### ScrollContainer properties_scroll {#var-properties-scroll}

UI Components - Properties Section

### VBoxContainer properties_container {#var-properties-container}

*No description yet.*

### Label no_interaction_label {#var-no-interaction-label}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

## Method descriptions

### void setup( context: InteractionContext, manager: DialogManager, p_parent_resource: Resource = null ) {#method-setup}

Setup the editor with a specific context and dialog manager

### void set_interaction( interaction: Interaction ) {#method-set-interaction}

========== PUBLIC API ========== Load an existing interaction into the editor

### Interaction get_interaction() {#method-get-interaction}

Get the current interaction

### void clear_interaction() {#method-clear-interaction}

Clear the current interaction

