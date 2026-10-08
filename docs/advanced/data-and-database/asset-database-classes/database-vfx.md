<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseVFX

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The visual effects library of the project, read from the folders under `res://src/data/vfx/`.

## Description

The visual effects library of the project, read from the folders under `res://src/data/vfx/`.

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

## Constants

- `String` **VFX_RESOURCES_PATH** = `"res://src/data/vfx/"`
- `const` **VFX_TYPES** = `{`
- `const` **VFX_CLASS_MAPPING** = `{`
- `Dictionary` **VFX_SCRIPT_MAP** = `{`

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

