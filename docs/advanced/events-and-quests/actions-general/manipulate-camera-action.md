<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ManipulateCameraAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to manipulate the game camera through the CameraController. Allows changing camera targets, position, and movement modes.

## Properties

| | | |
|---|---|---|
| `Vector3` | [target_position](#prop-target-position) |  |
| `MovementType` | [movement_type](#prop-movement-type) | `MovementType.INSTANT` |

## Variables

| | | |
|---|---|---|
| `CameraController` | [camera_controller](#var-camera-controller) |  |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `CameraController` | [find_camera_controller](#method-find-camera-controller)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum MovementType {#enum-movementtype}

- **INSTANT** = `0`
- **PAN** = `1`

## Property descriptions

### Vector3 target_position {#prop-target-position}

Position to move camera to (for SET_POSITION)

### MovementType movement_type = MovementType.INSTANT {#prop-movement-type}

How the camera should move to the position (for SET_POSITION)

## Variable descriptions

### CameraController camera_controller {#var-camera-controller}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### CameraController find_camera_controller() {#method-find-camera-controller}

Find and return the camera manager from the game

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary

