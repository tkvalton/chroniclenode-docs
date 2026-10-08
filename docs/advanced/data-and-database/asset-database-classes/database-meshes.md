<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseMeshes

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The mesh and material library of the project, read from the folders under `res://src/data/meshes/`.

## Description

The mesh and material library of the project, read from the folders under `res://src/data/meshes/`.

It holds weapons (`equipment/weapons/<category>/`), the parts of modular characters (`equipment/body_parts/<tag>/<part>/`), attachments (`equipment/attachments/<tag>/<slot>/`), facial features (`facial/<skeleton tag>/<feature>/`) and materials (`materials/<category>/`). A mesh file may have a skin file next to it with the same name (`_mesh` replaced by `_skin`). The folders are scanned once on first use; call refresh_database after adding files.

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)() *static* |
| `void` | [refresh_database](#method-refresh-database)() *static* |
| `void` | [ensure_initialized](#method-ensure-initialized)() *static* |
| `Array[String]` | [get_weapon_categories](#method-get-weapon-categories)() *static* |
| `Array[String]` | [get_weapon_names](#method-get-weapon-names)( `category: String` ) *static* |
| `Mesh` | [get_weapon_mesh](#method-get-weapon-mesh)( `category: String, name: String` ) *static* |
| `Dictionary` | [get_weapon_data](#method-get-weapon-data)( `category: String, name: String` ) *static* |
| `Mesh` | [get_random_weapon_mesh](#method-get-random-weapon-mesh)( `category: String` ) *static* |
| `Array[String]` | [get_modular_equipment_tags](#method-get-modular-equipment-tags)() *static* |
| `Array[String]` | [get_body_part_types](#method-get-body-part-types)() *static* |
| `Array[String]` | [get_body_part_names](#method-get-body-part-names)( `body_part_type: String, tag: String = ""` ) *static* |
| `Dictionary` | [get_body_part_mesh_and_skin](#method-get-body-part-mesh-and-skin)( `body_part_type: String, name: String, tag: String = ""` ) *static* |
| `Mesh` | [get_body_part_mesh](#method-get-body-part-mesh)( `body_part_type: String, name: String, tag: String = ""` ) *static* |
| `Dictionary` | [get_body_part_data](#method-get-body-part-data)( `body_part_type: String, name: String, tag: String = ""` ) *static* |
| `Mesh` | [get_random_body_part_mesh](#method-get-random-body-part-mesh)( `body_part_type: String, tag: String = ""` ) *static* |
| `Array[String]` | [get_attachment_types](#method-get-attachment-types)() *static* |
| `Array[String]` | [get_attachment_names](#method-get-attachment-names)( `attachment_type: String, tag: String = ""` ) *static* |
| `Mesh` | [get_attachment_mesh](#method-get-attachment-mesh)( `attachment_type: String, name: String, tag: String = ""` ) *static* |
| `Dictionary` | [get_attachment_mesh_and_skin](#method-get-attachment-mesh-and-skin)( `attachment_type: String, name: String, tag: String = ""` ) *static* |
| `Dictionary` | [get_attachment_data](#method-get-attachment-data)( `attachment_type: String, name: String, tag: String = ""` ) *static* |
| `Mesh` | [get_random_attachment_mesh](#method-get-random-attachment-mesh)( `attachment_type: String, tag: String = ""` ) *static* |
| `Array[String]` | [get_facial_skeleton_tags](#method-get-facial-skeleton-tags)() *static* |
| `Array[String]` | [get_facial_categories](#method-get-facial-categories)( `tag: String = ""` ) *static* |
| `Array[String]` | [get_facial_mesh_names](#method-get-facial-mesh-names)( `category: String, tag: String = ""` ) *static* |
| `Mesh` | [get_facial_mesh](#method-get-facial-mesh)( `category: String, name: String, tag: String = ""` ) *static* |
| `Dictionary` | [get_facial_data](#method-get-facial-data)( `category: String, name: String, tag: String = ""` ) *static* |
| `Dictionary` | [get_facial_mesh_and_skin](#method-get-facial-mesh-and-skin)( `tag: String, feature: GeneralSkeleton.FacialFeature, name: String` ) *static* |
| `Array[String]` | [get_options_for_skeleton](#method-get-options-for-skeleton)( `tag: String, feature: GeneralSkeleton.FacialFeature` ) *static* |
| `Array[Dictionary]` | [get_all_facial_features_for_list](#method-get-all-facial-features-for-list)() *static* |
| `Array[String]` | [get_material_categories](#method-get-material-categories)() *static* |
| `Array[String]` | [get_material_names](#method-get-material-names)( `category: String` ) *static* |
| `Array[String]` | [get_all_material_names](#method-get-all-material-names)() *static* |
| `Material` | [get_material](#method-get-material)( `category: String, name: String` ) *static* |
| `Material` | [get_material_by_name](#method-get-material-by-name)( `name: String` ) *static* |
| `Dictionary` | [get_material_data_by_name](#method-get-material-data-by-name)( `name: String` ) *static* |
| `Dictionary` | [get_material_data](#method-get-material-data)( `category: String, name: String` ) *static* |
| `bool` | [create_material_category](#method-create-material-category)( `category_name: String` ) *static* |
| `bool` | [add_material_to_category](#method-add-material-to-category)( `material_file_path: String, category: String` ) *static* |
| `bool` | [extract_and_save_material](#method-extract-and-save-material)( `material: Material, material_name: String, category: String` ) *static* |
| `Array[Dictionary]` | [get_all_equipment_for_list](#method-get-all-equipment-for-list)() *static* |
| `Dictionary` | [get_database_stats](#method-get-database-stats)() *static* |
| `Array[Dictionary]` | [validate_database](#method-validate-database)() *static* |
| `bool` | [is_database_empty](#method-is-database-empty)() *static* |
| `Texture2D` | [get_mesh_thumbnail](#method-get-mesh-thumbnail)( `mesh_path: String` ) *static* |
| `int` | [generate_thumbnails_batch](#method-generate-thumbnails-batch)( `mesh_paths: Array[String], force_regenerate: bool = false` ) *static* |
| `int` | [regenerate_all_thumbnails](#method-regenerate-all-thumbnails)() *static* |
| `void` | [clear_thumbnail_cache](#method-clear-thumbnail-cache)( `clear_disk: bool = false` ) *static* |
| `Array[Dictionary]` | [get_meshes_for_category](#method-get-meshes-for-category)( `mesh_type: int, category: String` ) *static* |

## Enumerations

### enum MeshType {#enum-meshtype}

- **SKELETON** = `0`
- **WEAPON** = `1`
- **BODY_PART** = `2`
- **ATTACHMENT** = `3`
- **FACIAL** = `4`
- **MATERIAL** = `5`

## Constants

- `String` **EQUIPMENT_PATH** = `"res://src/data/meshes/equipment/"`
- `String` **WEAPONS_PATH** = `"res://src/data/meshes/equipment/weapons/"`
- `String` **BODY_PARTS_PATH** = `"res://src/data/meshes/equipment/body_parts/"`
- `String` **ATTACHMENTS_PATH** = `"res://src/data/meshes/equipment/attachments/"`
- `String` **FACIAL_PATH** = `"res://src/data/meshes/facial/"`
- `String` **MATERIALS_PATH** = `"res://src/data/meshes/materials/"`
- `Array[String]` **MESH_EXTENSIONS** = `[".tres", ".res", ".obj"]`
- `Array[String]` **MATERIAL_EXTENSIONS** = `[".tres", ".res"]`
- `String` **METADATA_ALLOWED_MATERIALS** = `"allowed_materials"`
- `String` **METADATA_PREFERRED_MATERIAL** = `"preferred_material"`
- `String` **METADATA_MATERIAL_CATEGORIES** = `"material_categories"`
- `Array[String]` **BODY_PART_TYPES** = `[`
- `Array[String]` **ATTACHMENT_TYPES** = `[`
- `String` **THUMBNAILS_PATH** = `"res://src/data/meshes/.thumbnails/"`
- `int` **THUMBNAIL_SIZE** = `64`
- `String` **THUMBNAIL_EXTENSION** = `".png"`

## Method descriptions

### void initialize() {#method-initialize}

Makes the folders (when missing) and scans all the mesh folders. Runs once.

### void refresh_database() {#method-refresh-database}

Scans all the mesh folders again (after files were added or removed).

### void ensure_initialized() {#method-ensure-initialized}

Scans the mesh folders if that has not been done yet.

### Array[String] get_weapon_categories() {#method-get-weapon-categories}

The weapon categories (the folders under `equipment/weapons/`), sorted.

### Array[String] get_weapon_names( category: String ) {#method-get-weapon-names}

The names of the weapons of a category, sorted.

### Mesh get_weapon_mesh( category: String, name: String ) {#method-get-weapon-mesh}

The mesh of a weapon, or null when there is none with this category and name.

### Dictionary get_weapon_data( category: String, name: String ) {#method-get-weapon-data}

A copy of what the database knows about a weapon: name, category, mesh path, display name. Empty when it does not exist.

### Mesh get_random_weapon_mesh( category: String ) {#method-get-random-weapon-mesh}

The mesh of a random weapon of a category, or null when the category is empty.

### Array[String] get_modular_equipment_tags() {#method-get-modular-equipment-tags}

The tags of the modular equipment (the folders under `body_parts/` and `attachments/`), sorted. A tag groups the parts that belong together.

### Array[String] get_body_part_types() {#method-get-body-part-types}

The body part types the database knows (head, torso, arms, hands, legs, feet and the face parts).

### Array[String] get_body_part_names( body_part_type: String, tag: String = "" ) {#method-get-body-part-names}

The names of the parts of a body part type, for one tag or (with an empty tag) for all of them, sorted.

### Dictionary get_body_part_mesh_and_skin( body_part_type: String, name: String, tag: String = "" ) {#method-get-body-part-mesh-and-skin}

The mesh and the skin of a body part as {mesh, skin}. The skin is the file with the same name and `_skin` instead of `_mesh`; either is null when missing.

### Mesh get_body_part_mesh( body_part_type: String, name: String, tag: String = "" ) {#method-get-body-part-mesh}

The mesh of a body part, or null.

### Dictionary get_body_part_data( body_part_type: String, name: String, tag: String = "" ) {#method-get-body-part-data}

A copy of what the database knows about a body part, or an empty dictionary.

### Mesh get_random_body_part_mesh( body_part_type: String, tag: String = "" ) {#method-get-random-body-part-mesh}

The mesh of a random body part of a type (and tag), or null.

### Array[String] get_attachment_types() {#method-get-attachment-types}

The attachment slots the database knows (head, face, chest, back, hips, hands, shoulders, knees, elbows, cloak).

### Array[String] get_attachment_names( attachment_type: String, tag: String = "" ) {#method-get-attachment-names}

The names of the attachments of a slot, for one tag or all of them, sorted.

### Mesh get_attachment_mesh( attachment_type: String, name: String, tag: String = "" ) {#method-get-attachment-mesh}

The mesh of an attachment, or null.

### Dictionary get_attachment_mesh_and_skin( attachment_type: String, name: String, tag: String = "" ) {#method-get-attachment-mesh-and-skin}

The mesh and the skin of an attachment as {mesh, skin}.

### Dictionary get_attachment_data( attachment_type: String, name: String, tag: String = "" ) {#method-get-attachment-data}

A copy of what the database knows about an attachment, or an empty dictionary.

### Mesh get_random_attachment_mesh( attachment_type: String, tag: String = "" ) {#method-get-random-attachment-mesh}

The mesh of a random attachment of a slot (and tag), or null.

### Array[String] get_facial_skeleton_tags() {#method-get-facial-skeleton-tags}

The skeleton tags that have facial features (the folders under `facial/`), sorted.

### Array[String] get_facial_categories( tag: String = "" ) {#method-get-facial-categories}

The facial feature categories (eyes, nose ...) for one skeleton tag, or for all of them.

### Array[String] get_facial_mesh_names( category: String, tag: String = "" ) {#method-get-facial-mesh-names}

The names of the facial meshes of a category, for one tag or all of them, sorted.

### Mesh get_facial_mesh( category: String, name: String, tag: String = "" ) {#method-get-facial-mesh}

The mesh of a facial feature, or null.

### Dictionary get_facial_data( category: String, name: String, tag: String = "" ) {#method-get-facial-data}

A copy of what the database knows about a facial mesh, or an empty dictionary.

### Dictionary get_facial_mesh_and_skin( tag: String, feature: GeneralSkeleton.FacialFeature, name: String ) {#method-get-facial-mesh-and-skin}

The mesh and the skin of a facial feature of a skeleton tag as {mesh, skin, materials}.

### Array[String] get_options_for_skeleton( tag: String, feature: GeneralSkeleton.FacialFeature ) {#method-get-options-for-skeleton}

The names of the meshes a skeleton tag offers for a facial feature, sorted.

### Array[Dictionary] get_all_facial_features_for_list() {#method-get-all-facial-features-for-list}

Every facial mesh as a list of dictionaries, for the editor.

### Array[String] get_material_categories() {#method-get-material-categories}

The material categories (the folders under `materials/`), sorted.

### Array[String] get_material_names( category: String ) {#method-get-material-names}

The names of the materials of a category, sorted.

### Array[String] get_all_material_names() {#method-get-all-material-names}

The names of all the materials of all the categories.

### Material get_material( category: String, name: String ) {#method-get-material}

The material with this category and name, or null.

### Material get_material_by_name( name: String ) {#method-get-material-by-name}

The first material with this name in any category, or null.

### Dictionary get_material_data_by_name( name: String ) {#method-get-material-data-by-name}

A copy of what the database knows about the first material with this name, or an empty dictionary.

### Dictionary get_material_data( category: String, name: String ) {#method-get-material-data}

A copy of what the database knows about a material, or an empty dictionary.

### bool create_material_category( category_name: String ) {#method-create-material-category}

Makes a new material category folder. False when the name is empty or the category exists.

### bool add_material_to_category( material_file_path: String, category: String ) {#method-add-material-to-category}

Copies a material file into a category folder and adds it to the database.

### bool extract_and_save_material( material: Material, material_name: String, category: String ) {#method-extract-and-save-material}

Saves a material (for example one taken from a mesh) as `<name>.tres` in a category and adds it to the database.

### Array[Dictionary] get_all_equipment_for_list() {#method-get-all-equipment-for-list}

Every weapon, body part and attachment as a list of dictionaries, for the editor.

### Dictionary get_database_stats() {#method-get-database-stats}

How many of everything the database found: weapons, body parts, attachments, facial meshes, materials and their categories.

### Array[Dictionary] validate_database() {#method-validate-database}

Checks that the files the database found still exist. Returns a list of {type, message, category, item_name, severity}; empty when everything is fine.

### bool is_database_empty() {#method-is-database-empty}

True when no weapon, body part, attachment, facial mesh or material was found.

### Texture2D get_mesh_thumbnail( mesh_path: String ) {#method-get-mesh-thumbnail}

Get mesh thumbnail (cached or generated)

### int generate_thumbnails_batch( mesh_paths: Array[String], force_regenerate: bool = false ) {#method-generate-thumbnails-batch}

Generate thumbnails for multiple meshes Uses async thumbnail generation with proper callbacks

### int regenerate_all_thumbnails() {#method-regenerate-all-thumbnails}

Force regenerate all thumbnails

### void clear_thumbnail_cache( clear_disk: bool = false ) {#method-clear-thumbnail-cache}

Clear thumbnail cache

### Array[Dictionary] get_meshes_for_category( mesh_type: int, category: String ) {#method-get-meshes-for-category}

Get all meshes for a category (for catalog display with thumbnails)

