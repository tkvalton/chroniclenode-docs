<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemOnUseEditor

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Item On-Use Editor - handles ItemDefinitionOnUse specific properties For items that function like abilities with charge-based consumption

## Variables

| | | |
|---|---|---|
| `ItemDefinitionOnUse` | [current_item](#var-current-item) |  |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_on_use_properties](#method-load-on-use-properties)( `on_use_item: ItemDefinitionOnUse` ) |
| `void` | [copy_on_use_properties](#method-copy-on-use-properties)( `original: ItemDefinitionOnUse, duplicate: ItemDefinitionOnUse` ) |
| `Array[Dictionary]` | [validate_on_use_properties](#method-validate-on-use-properties)() |
| `ItemDefinitionOnUse` | [get_current_on_use_item](#method-get-current-on-use-item)() |
| `void` | [set_on_use_item](#method-set-on-use-item)( `on_use_item: ItemDefinitionOnUse` ) |
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [get_validation_errors](#method-get-validation-errors)() |

## Signals

### property_changed() {#signal-property-changed}

## Variable descriptions

### ItemDefinitionOnUse current_item {#var-current-item}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_on_use_properties( on_use_item: ItemDefinitionOnUse ) {#method-load-on-use-properties}

*No description yet.*

### void copy_on_use_properties( original: ItemDefinitionOnUse, duplicate: ItemDefinitionOnUse ) {#method-copy-on-use-properties}

*No description yet.*

### Array[Dictionary] validate_on_use_properties() {#method-validate-on-use-properties}

*No description yet.*

### ItemDefinitionOnUse get_current_on_use_item() {#method-get-current-on-use-item}

*No description yet.*

### void set_on_use_item( on_use_item: ItemDefinitionOnUse ) {#method-set-on-use-item}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] get_validation_errors() {#method-get-validation-errors}

*No description yet.*

