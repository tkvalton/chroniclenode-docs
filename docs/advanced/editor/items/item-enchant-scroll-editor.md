<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemEnchantScrollEditor

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Item Enchant Scroll Editor - handles ItemDefinitionEnchantScroll specific properties Single enchant system with duration control and equipment targeting

## Variables

| | | |
|---|---|---|
| `ItemDefinitionEnchantScroll` | [current_item](#var-current-item) |  |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Array[Dictionary]` | [equipment_type_controls](#var-equipment-type-controls) | `[]` |
| `Array[String]` | [enchant_category_suggestions](#var-enchant-category-suggestions) | `[ ... ]` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_enchant_scroll_properties](#method-load-enchant-scroll-properties)( `enchant_scroll: ItemDefinitionEnchantScroll` ) |
| `void` | [copy_enchant_scroll_properties](#method-copy-enchant-scroll-properties)( `original: ItemDefinitionEnchantScroll, duplicate: ItemDefinitionEnchantScroll` ) |
| `Array[Dictionary]` | [validate_enchant_scroll_properties](#method-validate-enchant-scroll-properties)() |
| `ItemDefinitionEnchantScroll` | [get_current_enchant_scroll](#method-get-current-enchant-scroll)() |
| `void` | [set_enchant_scroll](#method-set-enchant-scroll)( `enchant_scroll: ItemDefinitionEnchantScroll` ) |
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [get_validation_errors](#method-get-validation-errors)() |
| `void` | [refresh_available_equipment_types](#method-refresh-available-equipment-types)() |

## Signals

### property_changed() {#signal-property-changed}

## Variable descriptions

### ItemDefinitionEnchantScroll current_item {#var-current-item}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Array[Dictionary] equipment_type_controls = [] {#var-equipment-type-controls}

*No description yet.*

### Array[String] enchant_category_suggestions {#var-enchant-category-suggestions}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_enchant_scroll_properties( enchant_scroll: ItemDefinitionEnchantScroll ) {#method-load-enchant-scroll-properties}

*No description yet.*

### void copy_enchant_scroll_properties( original: ItemDefinitionEnchantScroll, duplicate: ItemDefinitionEnchantScroll ) {#method-copy-enchant-scroll-properties}

*No description yet.*

### Array[Dictionary] validate_enchant_scroll_properties() {#method-validate-enchant-scroll-properties}

*No description yet.*

### ItemDefinitionEnchantScroll get_current_enchant_scroll() {#method-get-current-enchant-scroll}

*No description yet.*

### void set_enchant_scroll( enchant_scroll: ItemDefinitionEnchantScroll ) {#method-set-enchant-scroll}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] get_validation_errors() {#method-get-validation-errors}

*No description yet.*

### void refresh_available_equipment_types() {#method-refresh-available-equipment-types}

*No description yet.*

