<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModelSceneDatabase

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The library of model scenes, read from `res://src/data/meshes/skeletons/` (the scenes of characters and creatures) and `res://src/data/meshes/interactable_models/` (the scenes of interactable objects).

## Description

The library of model scenes, read from `res://src/data/meshes/skeletons/` (the scenes of characters and creatures) and `res://src/data/meshes/interactable_models/` (the scenes of interactable objects).

Every `.tscn` file in those folders is an entry, named by its file name. For a skeleton scene the database instantiates it once to find out what kind of skeleton it holds (GeneralSkeleton or ModularSkeleton). The folders are scanned once on first use; call refresh_database after adding scenes.

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)() *static* |
| `void` | [refresh_database](#method-refresh-database)() *static* |
| `void` | [ensure_initialized](#method-ensure-initialized)() *static* |
| `Array[String]` | [get_all_skeleton_names](#method-get-all-skeleton-names)() *static* |
| `Dictionary` | [get_skeleton_data](#method-get-skeleton-data)( `scene_name: String` ) *static* |
| `PackedScene` | [get_skeleton_scene](#method-get-skeleton-scene)( `scene_name: String` ) *static* |
| `String` | [get_skeleton_path](#method-get-skeleton-path)( `scene_name: String` ) *static* |
| `String` | [get_skeleton_display_name](#method-get-skeleton-display-name)( `scene_name: String` ) *static* |
| `bool` | [has_skeleton](#method-has-skeleton)( `scene_name: String` ) *static* |
| `Array[Dictionary]` | [get_skeletons_for_list](#method-get-skeletons-for-list)() *static* |
| `Array[String]` | [search_skeletons](#method-search-skeletons)( `search_text: String` ) *static* |
| `int` | [get_skeleton_count](#method-get-skeleton-count)() *static* |
| `Node` | [instantiate_skeleton](#method-instantiate-skeleton)( `scene_name: String` ) *static* |
| `Array[String]` | [get_all_interactable_model_names](#method-get-all-interactable-model-names)() *static* |
| `Dictionary` | [get_interactable_model_data](#method-get-interactable-model-data)( `scene_name: String` ) *static* |
| `Array[Dictionary]` | [get_interactable_models_for_list](#method-get-interactable-models-for-list)() *static* |
| `PackedScene` | [get_interactable_model_scene](#method-get-interactable-model-scene)( `scene_name: String` ) *static* |
| `String` | [get_interactable_model_path](#method-get-interactable-model-path)( `scene_name: String` ) *static* |
| `String` | [get_interactable_model_display_name](#method-get-interactable-model-display-name)( `scene_name: String` ) *static* |
| `bool` | [has_interactable_model](#method-has-interactable-model)( `scene_name: String` ) *static* |
| `Array[String]` | [search_interactable_models](#method-search-interactable-models)( `search_text: String` ) *static* |
| `int` | [get_interactable_model_count](#method-get-interactable-model-count)() *static* |
| `Node` | [instantiate_interactable_model](#method-instantiate-interactable-model)( `scene_name: String` ) *static* |
| `Array[String]` | [get_mesh_skeleton_types](#method-get-mesh-skeleton-types)( `mesh_path: String` ) *static* |
| `bool` | [set_mesh_skeleton_types](#method-set-mesh-skeleton-types)( `mesh_path: String, skeleton_types: Array[String]` ) *static* |
| `bool` | [does_mesh_support_skeleton_type](#method-does-mesh-support-skeleton-type)( `mesh_path: String, skeleton_type: String` ) *static* |
| `Array[Dictionary]` | [get_meshes_for_skeleton_type](#method-get-meshes-for-skeleton-type)( `skeleton_type: String` ) *static* |
| `Dictionary` | [get_database_stats](#method-get-database-stats)() *static* |
| `Array[Dictionary]` | [validate_database](#method-validate-database)() *static* |
| `bool` | [is_database_empty](#method-is-database-empty)() *static* |
| `Dictionary` | [get_skeleton_health_check](#method-get-skeleton-health-check)() *static* |

## Constants

- `String` **SKELETONS_PATH** = `"res://src/data/meshes/skeletons/"`
- `String` **INTERACTABLE_MODELS_PATH** = `"res://src/data/meshes/interactable_models/"`
- `Array[String]` **SKELETON_EXTENSIONS** = `[".tscn"]`
- `Array[String]` **INTERACTABLE_MODEL_EXTENSIONS** = `[".tscn"]`
- `Dictionary` **SKELETON_TYPE_MAPPING** = `{`

## Method descriptions

### void initialize() {#method-initialize}

Initialize the model scene database by scanning all files

### void refresh_database() {#method-refresh-database}

Force refresh of the entire database (useful for development)

### void ensure_initialized() {#method-ensure-initialized}

Ensure database is initialized before any operation (private)

### Array[String] get_all_skeleton_names() {#method-get-all-skeleton-names}

Get all available skeleton scene names (not skeleton types)

### Dictionary get_skeleton_data( scene_name: String ) {#method-get-skeleton-data}

Get skeleton data by scene name

### PackedScene get_skeleton_scene( scene_name: String ) {#method-get-skeleton-scene}

Get skeleton scene by scene name

### String get_skeleton_path( scene_name: String ) {#method-get-skeleton-path}

Get skeleton file path by scene name

### String get_skeleton_display_name( scene_name: String ) {#method-get-skeleton-display-name}

Get skeleton display name by scene name

### bool has_skeleton( scene_name: String ) {#method-has-skeleton}

Check if skeleton scene exists

### Array[Dictionary] get_skeletons_for_list() {#method-get-skeletons-for-list}

Get all skeleton scenes data for list display

### Array[String] search_skeletons( search_text: String ) {#method-search-skeletons}

Search skeleton scenes by name pattern

### int get_skeleton_count() {#method-get-skeleton-count}

Get skeleton count

### Node instantiate_skeleton( scene_name: String ) {#method-instantiate-skeleton}

Instantiate a skeleton scene by scene name

### Array[String] get_all_interactable_model_names() {#method-get-all-interactable-model-names}

Get all available interactable model scene names

### Dictionary get_interactable_model_data( scene_name: String ) {#method-get-interactable-model-data}

Get interactable model data by scene name

### Array[Dictionary] get_interactable_models_for_list() {#method-get-interactable-models-for-list}

Get all interactable model scenes data for list display

### PackedScene get_interactable_model_scene( scene_name: String ) {#method-get-interactable-model-scene}

Get interactable model scene by scene name

### String get_interactable_model_path( scene_name: String ) {#method-get-interactable-model-path}

Get interactable model file path by scene name

### String get_interactable_model_display_name( scene_name: String ) {#method-get-interactable-model-display-name}

Get interactable model display name by scene name

### bool has_interactable_model( scene_name: String ) {#method-has-interactable-model}

Check if interactable model scene exists

### Array[String] search_interactable_models( search_text: String ) {#method-search-interactable-models}

Search interactable model scenes by name pattern

### int get_interactable_model_count() {#method-get-interactable-model-count}

Get interactable model count

### Node instantiate_interactable_model( scene_name: String ) {#method-instantiate-interactable-model}

Instantiate an interactable model scene by scene name

### Array[String] get_mesh_skeleton_types( mesh_path: String ) {#method-get-mesh-skeleton-types}

Get skeleton types that support a specific mesh

### bool set_mesh_skeleton_types( mesh_path: String, skeleton_types: Array[String] ) {#method-set-mesh-skeleton-types}

Set which skeleton types support a specific mesh

### bool does_mesh_support_skeleton_type( mesh_path: String, skeleton_type: String ) {#method-does-mesh-support-skeleton-type}

Check if a mesh supports a specific skeleton type

### Array[Dictionary] get_meshes_for_skeleton_type( skeleton_type: String ) {#method-get-meshes-for-skeleton-type}

Get meshes compatible with a specific skeleton type

### Dictionary get_database_stats() {#method-get-database-stats}

Get database statistics

### Array[Dictionary] validate_database() {#method-validate-database}

Validate database (check for issues)

### bool is_database_empty() {#method-is-database-empty}

Check if database is empty

### Dictionary get_skeleton_health_check() {#method-get-skeleton-health-check}

Get all skeletons with their instantiation status

