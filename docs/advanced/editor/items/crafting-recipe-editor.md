<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftingRecipeEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

CraftingRecipe Editor - handles crafting recipe definitions using the unified ResourceEditor base

## Variables

| | | |
|---|---|---|
| `PopupMenu` | [context_menu](#var-context-menu) |  |
| `PopupMenu` | [requirements_context_menu](#var-requirements-context-menu) |  |
| `int` | [selected_material_index](#var-selected-material-index) | `-1` |
| `int` | [selected_requirement_index](#var-selected-requirement-index) | `-1` |
| `ItemDefinition` | [adding_material_item_def](#var-adding-material-item-def) |  |
| `int` | [editing_material_index](#var-editing-material-index) | `-1` |
| `AcceptDialog` | [material_quantity_dialog](#var-material-quantity-dialog) |  |
| `SpinBox` | [material_quantity_spin_box](#var-material-quantity-spin-box) |  |
| `Array[String]` | [school_categories](#var-school-categories) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [refresh_craft_schools_dropdown](#method-refresh-craft-schools-dropdown)() |

## Variable descriptions

### PopupMenu context_menu {#var-context-menu}

*No description yet.*

### PopupMenu requirements_context_menu {#var-requirements-context-menu}

*No description yet.*

### int selected_material_index = -1 {#var-selected-material-index}

*No description yet.*

### int selected_requirement_index = -1 {#var-selected-requirement-index}

*No description yet.*

### ItemDefinition adding_material_item_def {#var-adding-material-item-def}

*No description yet.*

### int editing_material_index = -1 {#var-editing-material-index}

*No description yet.*

### AcceptDialog material_quantity_dialog {#var-material-quantity-dialog}

*No description yet.*

### SpinBox material_quantity_spin_box {#var-material-quantity-spin-box}

*No description yet.*

### Array[String] school_categories = [] {#var-school-categories}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### void refresh_craft_schools_dropdown() {#method-refresh-craft-schools-dropdown}

Manually refresh the craft schools dropdown (useful for external calls)

