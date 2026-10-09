<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ArrayParameterPopup

**Inherits:** [ParameterPopupBase](/advanced/editor/dialogs/parameter-popup-base) < `ConfirmationDialog`

Popup for editing array parameters with type support

## Variables

| | | |
|---|---|---|
| `VBoxContainer` | [container](#var-container) |  |
| `Button` | [add_button](#var-add-button) |  |
| `Button` | [clear_button](#var-clear-button) |  |
| `Array` | [element_containers](#var-element-containers) | `[]` |
| `String` | [array_element_type](#var-array-element-type) | `"string"  # Default type` |
| `bool` | [is_content_created](#var-is-content-created) | `false` |
| `Dictionary` | [available_types](#var-available-types) | `{ ... }` |

## Methods

| | |
|---|---|
| `void` | [setup_window](#method-setup-window)() |
| `void` | [set_array_element_type](#method-set-array-element-type)( `element_type: String` ) |
| `void` | [create_content](#method-create-content)( `parent` ) |
| `Array` | [get_children_recursive](#method-get-children-recursive)( `node_type: Variant` ) |
| `void` | [get_value](#method-get-value)() |

## Variable descriptions

### VBoxContainer container {#var-container}

*No description yet.*

### Button add_button {#var-add-button}

*No description yet.*

### Button clear_button {#var-clear-button}

*No description yet.*

### Array element_containers = [] {#var-element-containers}

*No description yet.*

### String array_element_type = "string"  # Default type {#var-array-element-type}

*No description yet.*

### bool is_content_created = false {#var-is-content-created}

*No description yet.*

### Dictionary available_types {#var-available-types}

*No description yet.*

## Method descriptions

### void setup_window() {#method-setup-window}

*Overrides this function of [ParameterPopupBase](/advanced/editor/dialogs/parameter-popup-base).*

### void set_array_element_type( element_type: String ) {#method-set-array-element-type}

*No description yet.*

### void create_content( parent ) {#method-create-content}

*Overrides this function of [ParameterPopupBase](/advanced/editor/dialogs/parameter-popup-base).*

### Array get_children_recursive( node_type: Variant ) {#method-get-children-recursive}

*No description yet.*

### void get_value() {#method-get-value}

*Overrides this function of [ParameterPopupBase](/advanced/editor/dialogs/parameter-popup-base).*

