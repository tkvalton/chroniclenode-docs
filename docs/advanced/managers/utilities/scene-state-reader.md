<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SceneStateReader

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Reads the nodes of a PackedScene from its saved state, without making the nodes. It is safe in the editor (the scripts of the nodes are not run) and tells what class the root of a scene has, which panels a scene holds and which options they set.

## Description

One entry for each node of the scene, parents first: "name", "path" ("." for the root), "parent" ("" for the root), "type" (the engine type), "script" (the Script or null), "classes" (the class names of the script and its bases, nearest first) and "properties" (what the scene sets on the node, the root of an instanced scene included)

## Methods

| | |
|---|---|
| `Array[Dictionary]` | [read](#method-read)( `scene: PackedScene` ) *static* |
| `Array[String]` | [class_names_of](#method-class-names-of)( `script: Script` ) *static* |
| `Variant` | [value_of](#method-value-of)( `node: Dictionary, property_name: String, fallback: Variant = null` ) *static* |
| `Array[Dictionary]` | [children_of](#method-children-of)( `nodes: Array[Dictionary], path: String` ) *static* |
| `Array[String]` | [root_classes](#method-root-classes)( `scene: PackedScene` ) *static* |

## Method descriptions

### Array[Dictionary] read( scene: PackedScene ) {#method-read}

The nodes of a scene (name, type, script, properties) read without making them.

### Array[String] class_names_of( script: Script ) {#method-class-names-of}

The class names of a script and of the scripts it extends, nearest first

### Variant value_of( node: Dictionary, property_name: String, fallback: Variant = null ) {#method-value-of}

The value an option has on a node: what the scene sets, else what the script declares as its default, else `fallback`

### Array[Dictionary] children_of( nodes: Array[Dictionary], path: String ) {#method-children-of}

The children of a node (by its path), in order

### Array[String] root_classes( scene: PackedScene ) {#method-root-classes}

The class of the root of a scene

