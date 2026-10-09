<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Base Item Data Editor for managing basic item properties with sub-editors

## Variables

| | | |
|---|---|---|
| `ItemDefinition:` | [current_item](#var-current-item) |  |
| `Mesh` | [item_model_mesh](#var-item-model-mesh) |  |
| `int` | [current_surface_index](#var-current-surface-index) | `0` |
| `Dictionary` | [surface_material_overrides](#var-surface-material-overrides) | `{}  # surface_index -> Material` |
| `Dictionary` | [item_editor_map](#var-item-editor-map) | `{}` |
| `bool` | [is_creating_new_item](#var-is-creating-new-item) | `false` |
| `PopupMenu` | [requirements_context_menu](#var-requirements-context-menu) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |

## Variable descriptions

### ItemDefinition: current_item {#var-current-item}

*No description yet.*

### Mesh item_model_mesh {#var-item-model-mesh}

*No description yet.*

### int current_surface_index = 0 {#var-current-surface-index}

*No description yet.*

### Dictionary surface_material_overrides =   # surface_index -&gt; Material {#var-surface-material-overrides}

*No description yet.*

### Dictionary item_editor_map =  {#var-item-editor-map}

*No description yet.*

### bool is_creating_new_item = false {#var-is-creating-new-item}

*No description yet.*

### PopupMenu requirements_context_menu {#var-requirements-context-menu}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

