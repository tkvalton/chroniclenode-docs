<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UsedAssets

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Which files does the project use? Starting from the files that are always loaded (everything in the data folders, the scenes and scripts of the addon, the main scene, the icon and the autoloads of the project) it follows every reference (`ResourceLoader.get_dependencies`, through scenes, resources, materials, meshes and imported models) and every `"res://..."` path written in a script. What is left in the folders that hold the raw assets (the asset packs) is not used by anything: it is in the project, in the editor, and in every export that exports all resources, and nothing ever loads it. Used by the build size report and, later, by the export plugin.

## Description

What it cannot see: a path made in code ("res://assets/sounds/" + name + ".wav"). Name such a folder in the *always include* list (project setting chronicle_node/build_size/always_include).

## Variables

| | | |
|---|---|---|
| `Dictionary` | [used](#var-used) | `{}` |
| `Array[String]` | [used_folders](#var-used-folders) | `[]` |
| `int` | [walked](#var-walked) | `0` |

## Methods

| | |
|---|---|
| `UsedAssets` | [collect](#method-collect)( `roots: Array[String] = DEFAULT_ROOTS, always_include: Array[String] = []` ) *static* |
| `bool` | [is_used](#method-is-used)( `path: String` ) |
| `String` | [used_by](#method-used-by)( `path: String` ) |
| `Array[String]` | [project_files](#method-project-files)() *static* |
| `Array[String]` | [list_files](#method-list-files)( `folder: String` ) *static* |

## Constants

- `String` **ALWAYS_INCLUDE_SETTING** = `"chronicle_node/build_size/always_include"` - The project setting that names the folders (and files) that are used even if nothing seems to reference them
- `Array[String]` **DEFAULT_ROOTS** = `["res://src/", "res://addons/chroniclenode/"]` - Folders whose files are the roots: they are loaded by the game itself (the libraries of the toolkit read their folders)
- `Array[String]` **SKIP_FOLDERS** = `[".godot", ".git", ".import", "tests", "docs", "build", "builds", "export", "...` - Folders that are never looked into
- `Array[String]` **REFERENCE_EXTENSIONS** = `["tres", "res", "tscn", "scn", "material", "gdshader", "gdshaderinc", "gd", "...` - Extensions of the files that hold references and are walked

## Variable descriptions

### Dictionary used =  {#var-used}

Every file that is used, with the first thing that uses it (a path, or "project", or "script")

### Array[String] used_folders = [] {#var-used-folders}

Folders that are used as a whole (the always include list, a folder written in a script)

### int walked = 0 {#var-walked}

How many files were walked

## Method descriptions

### UsedAssets collect( roots: Array[String] = DEFAULT_ROOTS, always_include: Array[String] = [] ) {#method-collect}

Collects the used files. `roots` are the folders whose files are always loaded; `always_include` the folders and files that are used whatever references say

### bool is_used( path: String ) {#method-is-used}

Is a file used? (a companion of a used file (.import, .uid) is used with it)

### String used_by( path: String ) {#method-used-by}

What uses a file ("" when nothing does)

### Array[String] project_files() {#method-project-files}

The files of the project that are named in the project settings: the main scene, the icon, the splash, the autoloads, the cursor

### Array[String] list_files( folder: String ) {#method-list-files}

The files under a folder (recursive), without the folders that are never looked into and without the companions (.import, .uid)

