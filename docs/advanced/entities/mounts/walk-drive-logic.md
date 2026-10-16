<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WalkDriveLogic

**Inherits:** [DriveLogic](/advanced/entities/mounts/drive-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The way a horse is steered: the keys move the mount relative to the camera (W goes away from the camera) and the mount turns to face where it goes. When the mount swims or flies W goes where the camera looks, up and down included, and jump and crouch go up and down.

## Properties

| | | |
|---|---|---|
| `float` | [turn_speed](#prop-turn-speed) | `10.0` |

## Methods

| | |
|---|---|
| `Dictionary` | [get_field_descriptions](#method-get-field-descriptions)() |
| `String` | [get_drive_type_name](#method-get-drive-type-name)() |
| `String` | [get_drive_type_description](#method-get-drive-type-description)() |
| `void` | [drive](#method-drive)( `input: Vector2, delta: float` ) |

## Property descriptions

### float turn_speed = 10.0 {#prop-turn-speed}

How fast (radians per second) the mount turns to face where it goes

## Method descriptions

### Dictionary get_field_descriptions() {#method-get-field-descriptions}

The sentences the editor shows as tooltips: &#123;name of an exported variable: text&#125;. A logic of your own adds its variables (call super and merge) *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### String get_drive_type_name() {#method-get-drive-type-name}

What this logic is called in the editor list *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### String get_drive_type_description() {#method-get-drive-type-description}

A sentence about how this logic steers, for the editor *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### void drive( input: Vector2, delta: float ) {#method-drive}

Every physics frame while the rider is on. `input` is the move keys (x right, y forward, each -1 to 1), zero when the player does not steer this rider. Override this *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

