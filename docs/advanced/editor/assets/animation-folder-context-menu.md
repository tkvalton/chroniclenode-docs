<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AnimationFolderContextMenu

**Inherits:** `PopupMenu`

Context menu scene for animation folder operations

## Variables

| | | |
|---|---|---|
| `String` | [folder_path](#var-folder-path) | `""` |
| `String` | [package](#var-package) | `""` |
| `String` | [entity](#var-entity) | `""` |
| `String` | [full_folder_path](#var-full-folder-path) | `""` |

## Methods

| | |
|---|---|
| `void` | [show_for_folder](#method-show-for-folder)( `p_folder_path: String, p_package: String, p_entity: String, position: Vector2i` ) |

## Signals

### animation_created( folder_path: String, package: String ) {#signal-animation-created}

### folder_renamed( folder_path: String, package: String ) {#signal-folder-renamed}

### folder_deleted( folder_path: String, package: String ) {#signal-folder-deleted}

## Variable descriptions

### String folder_path = "" {#var-folder-path}

*No description yet.*

### String package = "" {#var-package}

*No description yet.*

### String entity = "" {#var-entity}

*No description yet.*

### String full_folder_path = "" {#var-full-folder-path}

*No description yet.*

## Method descriptions

### void show_for_folder( p_folder_path: String, p_package: String, p_entity: String, position: Vector2i ) {#method-show-for-folder}

Show context menu for a specific folder

