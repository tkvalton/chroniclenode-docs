<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PopupEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Popup Editor for the popups of the game: the scenes built on PopupUI (a tutorial, a message, a toast, an achievement) and how each one behaves when it is shown. The look of a popup is its scene (open it with "Open Scene"); this editor holds the settings of the popup and the scene it uses.

## Variables

| | | |
|---|---|---|
| `PopupData:` | [current_popup](#var-current-popup) |  |
| `EditorFileDialog` | [scene_dialog](#var-scene-dialog) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |

## Constants

- `String` **POPUPS_FOLDER** = `"res://src/data/popups/"`

## Variable descriptions

### PopupData: current_popup {#var-current-popup}

*No description yet.*

### EditorFileDialog scene_dialog {#var-scene-dialog}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

