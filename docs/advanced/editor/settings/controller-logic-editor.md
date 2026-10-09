<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ControllerLogicEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Editor for creating, loading, and editing controller logic resources (Camera &amp; Player) Allows switching between different logic types and editing their properties Resources are saved to disk for reuse across projects

## Variables

| | | |
|---|---|---|
| `LogicType` | [current_logic_type](#var-current-logic-type) | `LogicType.CAMERA` |
| `Resource` | [current_resource](#var-current-resource) | `null` |

## Methods

| | |
|---|---|
| `Array[CameraLogic]` | [get_all_camera_logic_resources](#method-get-all-camera-logic-resources)() *static* |
| `Array[ControllerLogic]` | [get_all_player_logic_resources](#method-get-all-player-logic-resources)() *static* |

## Signals

### logic_resource_changed( resource: Resource ) {#signal-logic-resource-changed}

## Enumerations

### enum LogicType {#enum-logictype}

- **CAMERA** = `0`
- **PLAYER** = `1`

## Constants

- `const` **CAMERA_LOGIC_PATH** = `"res://addons/chroniclenode/data_classes/controller_logic/camera/"` - Logic directories to scan
- `const` **PLAYER_LOGIC_PATH** = `"res://addons/chroniclenode/data_classes/controller_logic/player/"`
- `String` **CAMERA_SAVE_DIR** = `"res://src/data/controller_logic/camera/"` - Resource save directories
- `String` **PLAYER_SAVE_DIR** = `"res://src/data/controller_logic/player/"`

## Variable descriptions

### LogicType current_logic_type = LogicType.CAMERA {#var-current-logic-type}

Logic type being edited

### Resource current_resource = null {#var-current-resource}

Currently loaded resource

## Method descriptions

### Array[CameraLogic] get_all_camera_logic_resources() {#method-get-all-camera-logic-resources}

Get all saved camera logic resources for populating dropdowns in GameplayConfig

### Array[ControllerLogic] get_all_player_logic_resources() {#method-get-all-player-logic-resources}

Get all player logic resources for GameplayConfig dropdown

