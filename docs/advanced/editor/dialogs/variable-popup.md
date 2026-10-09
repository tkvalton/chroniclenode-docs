<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VariablePopup

**Inherits:** [Window](https://docs.godotengine.org/en/stable/classes/class_window.html)

## Variables

| | | |
|---|---|---|
| `bool` | [is_editing](#var-is-editing) | `false` |
| `String` | [original_key](#var-original-key) | `""` |
| `int` | [current_type](#var-current-type) | `TYPE_STRING` |
| `String` | [validation_context](#var-validation-context) | `"global"  # "global" or "local"` |
| `Dictionary` | [existing_variables](#var-existing-variables) | `{}     # Current variables for duplicate checking` |
| `LocalVariables` | [local_variables_instance](#var-local-variables-instance) | `null  # For local variable validation` |
| `Variant` | [type_options](#var-type-options) | `[ ... ]` |

## Methods

| | |
|---|---|
| `void` | [setup_ui](#method-setup-ui)() |
| `void` | [setup_for_global_variables](#method-setup-for-global-variables)() |
| `void` | [setup_for_local_variables](#method-setup-for-local-variables)( `event: Event` ) |
| `void` | [show_for_new_variable](#method-show-for-new-variable)( `default_key: String = "", default_value: Variant = ""` ) |
| `void` | [show_for_edit_variable](#method-show-for-edit-variable)( `key: String, value: Variant` ) |

## Signals

### selection_made( key: String, value: Variant ) {#signal-selection-made}

### variable_updated( key: String, value: Variant ) {#signal-variable-updated}

## Variable descriptions

### bool is_editing = false {#var-is-editing}

*No description yet.*

### String original_key = "" {#var-original-key}

*No description yet.*

### int current_type = TYPE_STRING {#var-current-type}

*No description yet.*

### String validation_context = "global"  # "global" or "local" {#var-validation-context}

*No description yet.*

### Dictionary existing_variables =      # Current variables for duplicate checking {#var-existing-variables}

*No description yet.*

### LocalVariables local_variables_instance = null  # For local variable validation {#var-local-variables-instance}

*No description yet.*

### type_options {#var-type-options}

*No description yet.*

## Method descriptions

### void setup_ui() {#method-setup-ui}

*No description yet.*

### void setup_for_global_variables() {#method-setup-for-global-variables}

Setup for global variables editing

### void setup_for_local_variables( event: Event ) {#method-setup-for-local-variables}

Setup for local variables editing

### void show_for_new_variable( default_key: String = "", default_value: Variant = "" ) {#method-show-for-new-variable}

*No description yet.*

### void show_for_edit_variable( key: String, value: Variant ) {#method-show-for-edit-variable}

*No description yet.*

