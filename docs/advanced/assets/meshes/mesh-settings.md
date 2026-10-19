<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MeshSettings

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The settings of the meshes of the mesh database that cannot be kept in the mesh file itself: the offsets and points of a weapon, the skeleton types a mesh fits, the materials it accepts, its skin. A mesh made as a Godot resource (.tres or .res) keeps these as metadata inside its own file. A mesh that Godot imports from another format (.obj, .glb, .gltf, .fbx, .blend) cannot be saved (the engine rewrites the import and has no way to write into the source), so its settings are kept here, in `res://src/data/meshes/mesh_settings.tres`, under the **UID** of the mesh file. Godot gives every imported file a UID in its .import file, and the UID follows the file when it is moved or renamed in the editor. `MeshSource.load_mesh` puts the settings back on the mesh when it loads it, so the rest of the toolkit reads them as metadata, whichever way they are kept.

## Properties

| | | |
|---|---|---|
| `Dictionary` | [entries](#prop-entries) | `{}` |

## Methods

| | |
|---|---|
| `MeshSettings` | [get_instance](#method-get-instance)() *static* |
| `void` | [reset](#method-reset)() *static* |
| `bool` | [is_resource_format](#method-is-resource-format)( `path: String` ) *static* |
| `String` | [key_of](#method-key-of)( `path: String` ) *static* |
| `Dictionary` | [get_settings](#method-get-settings)( `path: String` ) |
| `void` | [set_settings](#method-set-settings)( `path: String, settings: Dictionary, save: bool = true` ) |
| `void` | [apply_to](#method-apply-to)( `mesh: Mesh, path: String` ) |
| `Error` | [save_mesh](#method-save-mesh)( `mesh: Mesh, path: String` ) *static* |
| `Dictionary` | [orphans](#method-orphans)() |

## Constants

- `String` **PATH** = `"res://src/data/meshes/mesh_settings.tres"` - The file that holds the settings.
- `PackedStringArray` **RESOURCE_FORMATS** = `["tres", "res"]` - The file types that can hold their own metadata.

## Property descriptions

### Dictionary entries =  {#prop-entries}

The settings of each mesh file: UID (or "path:&lt;path&gt;" for a file with no UID) -&gt; &#123; "path": the last known path, setting name -&gt; value &#125;

## Method descriptions

### MeshSettings get_instance() {#method-get-instance}

The settings of the project (empty when it has none yet).

### void reset() {#method-reset}

Forgets what was read (the tests, and the editor after the file changed).

### bool is_resource_format( path: String ) {#method-is-resource-format}

Is this mesh file a Godot resource that keeps its own metadata?

### String key_of( path: String ) {#method-key-of}

The key of a mesh file: its UID as text, or "path:&lt;path&gt;" when the file has none.

### Dictionary get_settings( path: String ) {#method-get-settings}

The settings kept for a mesh file (a copy; empty when it has none).

### void set_settings( path: String, settings: Dictionary, save: bool = true ) {#method-set-settings}

Replaces the settings of a mesh file and writes the settings file. An empty dictionary removes the entry.

### void apply_to( mesh: Mesh, path: String ) {#method-apply-to}

Puts the stored settings on a mesh as metadata (what MeshSource does when it loads the mesh). Settings the mesh has already are kept.

### Error save_mesh( mesh: Mesh, path: String ) {#method-save-mesh}

Saves the metadata a mesh has now: into the mesh file for a resource format, into the settings file for any other. This is the one call the mesh editor makes after it changes a setting. Returns OK or the error.

### Dictionary orphans() {#method-orphans}

The entries whose mesh file is gone (for the validation of the mesh database): UID or path -&gt; last known path.

