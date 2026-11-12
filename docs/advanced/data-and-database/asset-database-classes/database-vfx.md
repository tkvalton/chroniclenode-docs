<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseVFX

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The visual effects library of the project, read from the folders under `res://src/data/vfx/`.

## Description

Each folder is a VFX TYPE (oneshot, loop, beam, path, weather, telegraph, material) and VFX_TYPES says which file types it takes. A type maps to a VFX class (VFXOneShot, VFXLoop ...). Subfolders are scanned too. The folders are scanned once on first use; call refresh_database after adding files.

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)() *static* |
| `void` | [ensure_initialized](#method-ensure-initialized)() *static* |
| `void` | [ensure_directories](#method-ensure-directories)() *static* |
| `void` | [refresh_database](#method-refresh-database)() *static* |
| `String` | [get_vfx_class_name](#method-get-vfx-class-name)( `vfx_type: String` ) *static* |
| `String` | [get_vfx_script_path](#method-get-vfx-script-path)( `vfx_type: String` ) *static* |
| `Array[String]` | [get_scene_based_vfx_types](#method-get-scene-based-vfx-types)() *static* |
| `Array[String]` | [get_vfx_types](#method-get-vfx-types)() *static* |
| `Array[String]` | [get_available_vfx](#method-get-available-vfx)( `vfx_type: String` ) *static* |
| `String` | [get_vfx_path](#method-get-vfx-path)( `vfx_type: String, vfx_name: String` ) *static* |
| `PackedScene` | [get_vfx_scene](#method-get-vfx-scene)( `vfx_type: String, vfx_name: String` ) *static* |
| `Material` | [get_vfx_material](#method-get-vfx-material)( `vfx_type: String, vfx_name: String` ) *static* |
| `Resource` | [get_vfx_resource](#method-get-vfx-resource)( `vfx_type: String, vfx_name: String` ) *static* |
| `Resource` | [get_random_vfx](#method-get-random-vfx)( `vfx_type: String` ) *static* |
| `bool` | [has_vfx](#method-has-vfx)( `vfx_type: String, vfx_name: String` ) *static* |
| `Dictionary` | [get_vfx_type_info](#method-get-vfx-type-info)( `vfx_type: String` ) *static* |
| `String` | [get_vfx_type_display_name](#method-get-vfx-type-display-name)( `vfx_type: String` ) *static* |
| `bool` | [is_scene_type](#method-is-scene-type)( `vfx_type: String` ) *static* |
| `bool` | [is_material_type](#method-is-material-type)( `vfx_type: String` ) *static* |
| `Dictionary` | [get_database_stats](#method-get-database-stats)() *static* |
| `Dictionary` | [parse_name](#method-parse-name)( `vfx_name: String` ) *static* |
| `bool` | [is_valid_name](#method-is-valid-name)( `vfx_name: String` ) *static* |
| `String` | [get_theme](#method-get-theme)( `vfx_name: String` ) *static* |
| `String` | [get_category](#method-get-category)( `vfx_name: String` ) *static* |
| `String` | [get_display_name](#method-get-display-name)( `vfx_name: String` ) *static* |
| `Array[String]` | [get_themes](#method-get-themes)( `vfx_type: String = ""` ) *static* |
| `Array[String]` | [get_categories](#method-get-categories)( `vfx_type: String = "", theme: String = ""` ) *static* |
| `Array[String]` | [get_available_vfx_filtered](#method-get-available-vfx-filtered)( `vfx_type: String, theme: String = "", category: String = ""` ) *static* |

## Constants

- `String` **VFX_RESOURCES_PATH** = `"res://src/data/vfx/"` - The folder the visual effects are read from.
- `const` **VFX_TYPES** = `{` - VFX type definitions - maps directly to VFX classes
- `const` **VFX_CLASS_MAPPING** = `{` - ========== VFX SCRIPT MAPPING ==========
- `Dictionary` **VFX_SCRIPT_MAP** = `{` - Which script each folder of visual effects (oneshot, loop, beam ...) uses.
- `String` **NAME_PREFIX** = `"vfx"` - The word every effect name starts with.
- `String` **UNSORTED** = `"unsorted"` - What the editor shows for an effect whose name does not follow the rule.
- `String` **NAME_RULE_TEXT** = `"vfx_<theme>_<category>_<name>_<nn>   e.g. vfx_fire_projectile_fireball_01"` - A short text for the hover of the name rule.

## Method descriptions

### void initialize() {#method-initialize}

Initialize the VFX database by scanning all types

### void ensure_initialized() {#method-ensure-initialized}

Ensure database is initialized

### void ensure_directories() {#method-ensure-directories}

Ensure all VFX type directories exist

### void refresh_database() {#method-refresh-database}

Force refresh of the entire database (useful for development)

### String get_vfx_class_name( vfx_type: String ) {#method-get-vfx-class-name}

Get VFX class name for a VFX type

### String get_vfx_script_path( vfx_type: String ) {#method-get-vfx-script-path}

Get script path for VFX type

### Array[String] get_scene_based_vfx_types() {#method-get-scene-based-vfx-types}

Get only scene-based VFX types (excludes telegraph and material)

### Array[String] get_vfx_types() {#method-get-vfx-types}

Get all available VFX types

### Array[String] get_available_vfx( vfx_type: String ) {#method-get-available-vfx}

Get all VFX names of a specific type

### String get_vfx_path( vfx_type: String, vfx_name: String ) {#method-get-vfx-path}

Get VFX file path by type and name

### PackedScene get_vfx_scene( vfx_type: String, vfx_name: String ) {#method-get-vfx-scene}

Get VFX PackedScene by type and name (for scene-based VFX)

### Material get_vfx_material( vfx_type: String, vfx_name: String ) {#method-get-vfx-material}

Get VFX Material by type and name (for material-based VFX)

### Resource get_vfx_resource( vfx_type: String, vfx_name: String ) {#method-get-vfx-resource}

Get VFX Resource by type and name (generic loader)

### Resource get_random_vfx( vfx_type: String ) {#method-get-random-vfx}

Get random VFX from a type

### bool has_vfx( vfx_type: String, vfx_name: String ) {#method-has-vfx}

Check if a specific VFX exists

### Dictionary get_vfx_type_info( vfx_type: String ) {#method-get-vfx-type-info}

Get VFX type info

### String get_vfx_type_display_name( vfx_type: String ) {#method-get-vfx-type-display-name}

Get human-readable VFX type name

### bool is_scene_type( vfx_type: String ) {#method-is-scene-type}

Check if VFX type supports scenes

### bool is_material_type( vfx_type: String ) {#method-is-material-type}

Check if VFX type supports materials

### Dictionary get_database_stats() {#method-get-database-stats}

Get database statistics

### Dictionary parse_name( vfx_name: String ) {#method-parse-name}

Reads a name by the rule. Gives &#123;valid, theme, category, name, variant&#125;; for a name that breaks the rule `valid` is false and the other fields are empty.

### bool is_valid_name( vfx_name: String ) {#method-is-valid-name}

True when the name follows the rule.

### String get_theme( vfx_name: String ) {#method-get-theme}

The theme of an effect (UNSORTED when the name breaks the rule).

### String get_category( vfx_name: String ) {#method-get-category}

The category of an effect (UNSORTED when the name breaks the rule).

### String get_display_name( vfx_name: String ) {#method-get-display-name}

The name for people: "Fireball 01" for vfx_fire_projectile_fireball_01. A name that breaks the rule is shown as it is, in words.

### Array[String] get_themes( vfx_type: String = "" ) {#method-get-themes}

The themes in use, sorted, for one kind of effect (all kinds when `vfx_type` is empty).

### Array[String] get_categories( vfx_type: String = "", theme: String = "" ) {#method-get-categories}

The categories in use, sorted, for one kind of effect (all when empty) and, when `theme` is not empty, only those of that theme.

### Array[String] get_available_vfx_filtered( vfx_type: String, theme: String = "", category: String = "" ) {#method-get-available-vfx-filtered}

The names of one kind of effect that have the theme and the category (an empty text means any).

