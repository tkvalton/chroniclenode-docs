<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MeshSource

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Loads the mesh of a mesh file of the mesh database, whatever the format. The database places a Mesh, not a scene, so:

## Description

- a mesh resource (.tres, .res) or an imported mesh (.obj) is a Mesh already and is loaded as it is;
- a model that Godot imports as a scene (.glb, .gltf, .fbx, .blend) must hold **one mesh node** (a MeshInstance3D): the mesh of that node is the mesh. A file with more than one is a mistake of the

file (the first mesh is used, and the mesh editor and the validation say so); split the model into one file for each part, or export each part on its own. The settings of the mesh (offsets, points, skeleton types, materials, skin) are put on the mesh as metadata when it is loaded: the metadata of a resource file is already there, the settings of the other formats come from `MeshSettings`. A mesh with no skin works: the skeleton classes use a skin only when the mesh has one.

## Methods

| | |
|---|---|
| `bool` | [is_mesh_file](#method-is-mesh-file)( `path: String` ) *static* |
| `bool` | [is_scene_format](#method-is-scene-format)( `path: String` ) *static* |
| `Mesh` | [load_mesh](#method-load-mesh)( `path: String` ) *static* |
| `Skin` | [load_skin](#method-load-skin)( `path: String` ) *static* |
| `int` | [mesh_node_count](#method-mesh-node-count)( `path: String` ) *static* |
| `void` | [clear_cache](#method-clear-cache)() *static* |

## Constants

- `PackedStringArray` **EXTENSIONS** = `["tres", "res", "obj", "glb", "gltf", "fbx", "blend"]` - The file types the mesh database accepts.
- `PackedStringArray` **SCENE_FORMATS** = `["glb", "gltf", "fbx", "blend"]` - The file types Godot imports as a scene.

## Method descriptions

### bool is_mesh_file( path: String ) {#method-is-mesh-file}

Is this a file type the mesh database accepts?

### bool is_scene_format( path: String ) {#method-is-scene-format}

Does Godot import this file as a scene?

### Mesh load_mesh( path: String ) {#method-load-mesh}

The mesh of a mesh file, with its settings on it as metadata; null when the file is not found or has no mesh.

### Skin load_skin( path: String ) {#method-load-skin}

The skin of a mesh file: the one in its settings (or metadata), else the skin of the node of a model. Null when it has none, which is fine: the mesh is used without one.

### int mesh_node_count( path: String ) {#method-mesh-node-count}

How many mesh nodes a model file holds (1 for a mesh resource or an .obj, which hold one mesh). 0 when the file cannot be read.

### void clear_cache() {#method-clear-cache}

Forgets the loaded meshes (after a file or a setting changed outside the editor).

