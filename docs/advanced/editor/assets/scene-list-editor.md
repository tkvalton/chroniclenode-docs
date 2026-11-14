<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SceneListEditor

**Inherits:** `HSplitContainer`

**Inherited by:** [InteractableScenesEditor](/advanced/editor/assets/interactable-scenes-editor), [SkeletonsEditor](/advanced/editor/assets/skeletons-editor)

THE LIST SIDE of the scene tabs of Entity Assets (2026-11-14: Model Scenes split in two, Skeletons and Interactable Scenes): the scenes as a list with a picture of each and a search, a Create button, Refresh, and on the right what the tab shows of the selected scene, under a line with its name, its file and Open in Editor. A tab extends it: _load_entries (the scenes), _create (the Create button), _show_entry (the selected one), and puts its own controls in `content`.

## Variables

| | | |
|---|---|---|
| `LineEdit` | [search_bar](#var-search-bar) | `null` |
| `ItemList` | [item_list](#var-item-list) | `null` |
| `Label` | [stats_label](#var-stats-label) | `null` |
| `Button` | [create_button](#var-create-button) | `null` |
| `Button` | [refresh_button](#var-refresh-button) | `null` |
| `Label` | [title_label](#var-title-label) | `null` |
| `Label` | [path_label](#var-path-label) | `null` |
| `Button` | [open_button](#var-open-button) | `null` |
| `VBoxContainer` | [content](#var-content) | `null` |
| `Array[Dictionary]` | [entries](#var-entries) | `[]` |
| `Array[Dictionary]` | [shown](#var-shown) | `[]` |
| `Dictionary` | [selected](#var-selected) | `{}` |
| `AssetThumbnails` | [pictures](#var-pictures) | `AssetThumbnails.new(PICTURES_FOLDER)` |

## Methods

| | |
|---|---|
| `void` | [reload](#method-reload)() |
| `void` | [select_entry](#method-select-entry)( `entry: Dictionary` ) |
| `void` | [select_path](#method-select-path)( `path: String` ) |

## Constants

- `String` **PICTURES_FOLDER** = `"res://src/data/model_scenes/.thumbnails/"` - The pictures of the scenes (drawn by the editor, kept in this folder)

## Variable descriptions

### LineEdit search_bar = null {#var-search-bar}

*No description yet.*

### ItemList item_list = null {#var-item-list}

*No description yet.*

### Label stats_label = null {#var-stats-label}

*No description yet.*

### Button create_button = null {#var-create-button}

*No description yet.*

### Button refresh_button = null {#var-refresh-button}

*No description yet.*

### Label title_label = null {#var-title-label}

The line over the right side: the name and file of the selected scene, Open in Editor

### Label path_label = null {#var-path-label}

*No description yet.*

### Button open_button = null {#var-open-button}

*No description yet.*

### VBoxContainer content = null {#var-content}

Where a tab puts what it shows of the selected scene

### Array[Dictionary] entries = [] {#var-entries}

Every scene: [&#123;name, display_name, path, file_name&#125;], those the search shows, the one selected

### Array[Dictionary] shown = [] {#var-shown}

*No description yet.*

### Dictionary selected =  {#var-selected}

*No description yet.*

### AssetThumbnails pictures = AssetThumbnails.new(PICTURES_FOLDER) {#var-pictures}

*No description yet.*

## Method descriptions

### void reload() {#method-reload}

Looks for the scenes again (keeps the selected one)

### void select_entry( entry: Dictionary ) {#method-select-entry}

Selects a scene (&#123;&#125; none)

### void select_path( path: String ) {#method-select-path}

Selects a scene by its file

