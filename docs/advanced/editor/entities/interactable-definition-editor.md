<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractableDefinitionEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Editor for InteractableDefinition resources

## Variables

| | | |
|---|---|---|
| `InteractableDefinition:` | [current_interactable](#var-current-interactable) |  |
| `Array[String]` | [available_collision_shapes](#var-available-collision-shapes) | `[]` |
| `AssetViewport3D` | [model_preview](#var-model-preview) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `InteractableDefinition` | [get_current_interactable](#method-get-current-interactable)() |
| `void` | [set_current_interactable](#method-set-current-interactable)( `interactable_data: InteractableDefinition` ) |

## Variable descriptions

### InteractableDefinition: current_interactable {#var-current-interactable}

*No description yet.*

### Array[String] available_collision_shapes = [] {#var-available-collision-shapes}

*No description yet.*

### AssetViewport3D model_preview {#var-model-preview}

The 3D preview of the model scene under the button that chooses it (made the first time it is needed)

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### InteractableDefinition get_current_interactable() {#method-get-current-interactable}

*No description yet.*

### void set_current_interactable( interactable_data: InteractableDefinition ) {#method-set-current-interactable}

*No description yet.*

