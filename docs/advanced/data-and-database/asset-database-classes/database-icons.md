<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseIcons

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The icon library of the project, read from the folders under `res://src/data/icons/`.

## Description

The icon library of the project, read from the folders under `res://src/data/icons/`.

A folder is a CATEGORY, and an icon is an image file named by its number (`12.png`): the number is its id. get_icon_by_id finds the file in any category, and import_icons_to_category moves a folder of images in and numbers them from the first free id.

## Methods

| | |
|---|---|
| `void` | [ensure_directories](#method-ensure-directories)() *static* |
| `void` | [ensure_initialized](#method-ensure-initialized)() *static* |
| `PackedStringArray` | [get_all_categories](#method-get-all-categories)() *static* |
| `Array[String]` | [get_icons_by_category](#method-get-icons-by-category)( `category: String` ) *static* |
| `Array[String]` | [get_all_icons](#method-get-all-icons)() *static* |
| `String` | [get_icon_by_id](#method-get-icon-by-id)( `icon_id: int` ) *static* |
| `String` | [get_icon_category](#method-get-icon-category)( `icon_id: int` ) *static* |
| `bool` | [icon_exists](#method-icon-exists)( `icon_id: int` ) *static* |
| `int` | [get_next_icon_id](#method-get-next-icon-id)() *static* |
| `int` | [get_category_icon_count](#method-get-category-icon-count)( `category: String` ) *static* |
| `bool` | [ensure_category_exists](#method-ensure-category-exists)( `category: String` ) *static* |
| `Array[Dictionary]` | [get_icons_for_list](#method-get-icons-for-list)( `category: String = ""` ) *static* |
| `String` | [get_icon_category_from_path](#method-get-icon-category-from-path)( `icon_path: String` ) *static* |
| `Dictionary` | [import_icons_to_category](#method-import-icons-to-category)( `import_folder: String, target_category: String` ) *static* |

## Constants

- `String` **ICONS_BASE_PATH** = `"res://src/data/icons/"`

## Method descriptions

### void ensure_directories() {#method-ensure-directories}

Ensure all required directories exist

### void ensure_initialized() {#method-ensure-initialized}

Makes the icons folder when missing.

### PackedStringArray get_all_categories() {#method-get-all-categories}

Get all categories (folder names in icons directory)

### Array[String] get_icons_by_category( category: String ) {#method-get-icons-by-category}

Get all icons from a specific category (folder)

### Array[String] get_all_icons() {#method-get-all-icons}

Get all icons from all categories

### String get_icon_by_id( icon_id: int ) {#method-get-icon-by-id}

Get icon by ID (finds the file named {id}.png/jpg/etc in any category)

### String get_icon_category( icon_id: int ) {#method-get-icon-category}

Get category of an icon by its ID

### bool icon_exists( icon_id: int ) {#method-icon-exists}

Check if icon exists

### int get_next_icon_id() {#method-get-next-icon-id}

Get next available ID by scanning all existing icons

### int get_category_icon_count( category: String ) {#method-get-category-icon-count}

Get icon count for a category

### bool ensure_category_exists( category: String ) {#method-ensure-category-exists}

Ensure category folder exists

### Array[Dictionary] get_icons_for_list( category: String = "" ) {#method-get-icons-for-list}

Get icons for list display

### String get_icon_category_from_path( icon_path: String ) {#method-get-icon-category-from-path}

Extract category from icon path

### Dictionary import_icons_to_category( import_folder: String, target_category: String ) {#method-import-icons-to-category}

Import icons from import folder to specific category

