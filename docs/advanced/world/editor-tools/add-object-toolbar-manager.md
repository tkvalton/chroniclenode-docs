<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AddObjectToolbarManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Scene-watching toolbar manager for adding objects to WorldScene Watches for new/deleted objects and handles database sync automatically

## Variables

| | | |
|---|---|---|
| `EditorPlugin` | [plugin_reference](#var-plugin-reference) |  |
| `MenuButton` | [add_object_menu_button](#var-add-object-menu-button) |  |
| `PopupMenu` | [popup_menu](#var-popup-menu) |  |
| `ListCatalog` | [list_catalog_dialog](#var-list-catalog-dialog) |  |
| `Node` | [current_world_scene](#var-current-world-scene) |  |
| `bool` | [is_active](#var-is-active) | `false` |
| `String` | [current_main_screen](#var-current-main-screen) | `""` |
| `String` | [current_selection_mode](#var-current-selection-mode) | `""` |
| `String` | [button_text](#var-button-text) | `"Add Object"` |
| `String` | [button_tooltip](#var-button-tooltip) | `"Add objects to the current map scene"` |

## Methods

| | |
|---|---|
| `void` | [activate](#method-activate)() |
| `void` | [deactivate](#method-deactivate)() |
| `void` | [set_button_configuration](#method-set-button-configuration)( `text: String, tooltip: String` ) |

## Signals

### entity_added( entity_node: Node, unique_data: UniqueEntityData ) {#signal-entity-added}

### interactable_added( interactable_node: InteractableObject, unique_data: UniqueInteractableData ) {#signal-interactable-added}

### region_added( region_node: Region ) {#signal-region-added}

## Enumerations

### enum MenuItems {#enum-menuitems}

- **ADD_ENTITY** = `0`
- **ADD_INTERACTABLE** = `1`
- **ADD_REGION** = `2`
- **ADD_ENCOUNTER** = `3`

## Variable descriptions

### EditorPlugin plugin_reference {#var-plugin-reference}

*No description yet.*

### MenuButton add_object_menu_button {#var-add-object-menu-button}

*No description yet.*

### PopupMenu popup_menu {#var-popup-menu}

*No description yet.*

### ListCatalog list_catalog_dialog {#var-list-catalog-dialog}

*No description yet.*

### Node current_world_scene {#var-current-world-scene}

*No description yet.*

### bool is_active = false {#var-is-active}

*No description yet.*

### String current_main_screen = "" {#var-current-main-screen}

*No description yet.*

### String current_selection_mode = "" {#var-current-selection-mode}

*No description yet.*

### String button_text = "Add Object" {#var-button-text}

*No description yet.*

### String button_tooltip = "Add objects to the current map scene" {#var-button-tooltip}

*No description yet.*

## Method descriptions

### void activate() {#method-activate}

*No description yet.*

### void deactivate() {#method-deactivate}

*No description yet.*

### void set_button_configuration( text: String, tooltip: String ) {#method-set-button-configuration}

*No description yet.*

