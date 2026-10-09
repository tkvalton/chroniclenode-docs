<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldSceneValidator

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Utility class for validating WorldScene context in editor Used by NPC, InteractableObject, and Region to ensure they're in a valid map

## Methods

| | |
|---|---|
| `bool` | [is_in_valid_world_scene](#method-is-in-valid-world-scene)( `node: Node` ) *static* |
| `WorldScene` | [get_world_scene](#method-get-world-scene)( `node: Node` ) *static* |
| `int` | [get_world_id](#method-get-world-id)( `node: Node` ) *static* |

## Method descriptions

### bool is_in_valid_world_scene( node: Node ) {#method-is-in-valid-world-scene}

Check if a node is within a valid WorldScene context

### WorldScene get_world_scene( node: Node ) {#method-get-world-scene}

Get the WorldScene node that contains this node

### int get_world_id( node: Node ) {#method-get-world-id}

Get the map_id from the WorldScene containing this node

