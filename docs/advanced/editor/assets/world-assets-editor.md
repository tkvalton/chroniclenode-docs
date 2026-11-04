<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldAssetsEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The World Assets tab (Assets &gt; World Assets): the scenes of `res://src/data/world_assets/` that the Assets button of the placement tool puts in the world (houses, trees, props) as a list with a picture of each, a category list (a category is a folder; New category makes one), Import (copies scenes and models into a category) and a 3D preview of the selected scene you can turn around. The scenes of the Foliage tab (the foliage and the ground scatter the terrain paints) are listed too, in categories of their own: you can look at them here, and they are made and changed in the Foliage tab. See docs: Assets &gt; World Assets.

## Variables

| | | |
|---|---|---|
| `Array[Dictionary]` | [entries](#var-entries) | `[]` |
| `Array[Dictionary]` | [shown](#var-shown) | `[]` |
| `String` | [current_category](#var-current-category) | `ALL_CATEGORIES` |
| `String` | [selected_path](#var-selected-path) | `""` |

## Methods

| | |
|---|---|
| `void` | [refresh](#method-refresh)() |
| `Array[String]` | [get_categories](#method-get-categories)() |
| `void` | [select_path](#method-select-path)( `path: String` ) |
| `String` | [category_folder](#method-category-folder)( `category: String` ) |
| `String` | [folder_name_of](#method-folder-name-of)( `text: String` ) *static* |
| `String` | [make_category](#method-make-category)( `text: String` ) |
| `int` | [import_files](#method-import-files)( `paths: PackedStringArray, category: String` ) |

## Constants

- `String` **FOLIAGE_FOLDER** = `"res://src/data/worlds/foliage/foliage/"` - The folders of the foliage library: what the terrain tool scatters (shown here, not changed here)
- `String` **SCATTER_FOLDER** = `"res://src/data/worlds/foliage/ground_scatter/"`
- `String` **FOLIAGE_CATEGORY** = `"Foliage (Foliage tab)"` - The names of the categories that show the foliage library
- `String` **SCATTER_CATEGORY** = `"Ground scatter (Foliage tab)"`
- `String` **ALL_CATEGORIES** = `"All categories"` - The category that shows everything
- `PackedStringArray` **SCATTER_EXTENSIONS** = `["glb", "gltf", "fbx", "obj", "blend", "res", "tres"]`
- `PackedStringArray` **SCENE_EXTENSIONS** = `["tscn", "scn", "glb", "gltf", "fbx", "blend"]`

## Variable descriptions

### Array[Dictionary] entries = [] {#var-entries}

Every scene listed: [&#123;path, category, name, kind&#125;] (kind: "asset", "foliage" or "scatter")

### Array[Dictionary] shown = [] {#var-shown}

The entries the search and the category show

### String current_category = ALL_CATEGORIES {#var-current-category}

The category that is chosen (ALL_CATEGORIES for all)

### String selected_path = "" {#var-selected-path}

*No description yet.*

## Method descriptions

### void refresh() {#method-refresh}

Reads the folders again: the scenes, the categories, the pictures

### Array[String] get_categories() {#method-get-categories}

All the categories (the folders of the asset folder, empty ones too) and the two of the foliage library, in the list

### void select_path( path: String ) {#method-select-path}

Shows a scene: the preview, its name, category and file, and the buttons

### String category_folder( category: String ) {#method-category-folder}

The folder of a category of the asset folder ("trees" -&gt; .../world_assets/trees/; "Uncategorised" or all -&gt; the folder itself)

### String folder_name_of( text: String ) {#method-folder-name-of}

A name for a folder: lower case, words joined by underscores, a slash for a category in a category ("Buildings/Ruins" -&gt; "buildings/ruins")

### String make_category( text: String ) {#method-make-category}

Makes a category (a folder of the asset folder). Gives its name in the list, or "" when the name is empty or the folder cannot be made

### int import_files( paths: PackedStringArray, category: String ) {#method-import-files}

Copies scenes and models into a category (a file with the name of one that is there gets a number). Gives how many it copied

