<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountClasses

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Finds the classes that can be chosen in the Mounts editor: every script in data_classes/mount/seats/ that extends Seat, and every script in data_classes/mount/drive_logic/ that extends DriveLogic. Add a script to a folder and it shows up in the editor list, with its exported variables as fields: this is how a game adds a TurretSeat or a HoverDrive.

## Methods

| | |
|---|---|
| `Array[Script]` | [get_seat_classes](#method-get-seat-classes)() *static* |
| `Array[Script]` | [get_drive_classes](#method-get-drive-classes)() *static* |
| `Resource` | [make](#method-make)( `script: Script` ) *static* |
| `String` | [type_name](#method-type-name)( `script: Script` ) *static* |
| `String` | [type_description](#method-type-description)( `script: Script` ) *static* |
| `Script` | [script_of](#method-script-of)( `object: Object` ) *static* |

## Constants

- `String` **SEAT_FOLDER** = `"res://addons/chroniclenode/data_classes/mount/seats/"`
- `String` **DRIVE_FOLDER** = `"res://addons/chroniclenode/data_classes/mount/drive_logic/"`

## Method descriptions

### Array[Script] get_seat_classes() {#method-get-seat-classes}

The seat classes (the base class is not in the list)

### Array[Script] get_drive_classes() {#method-get-drive-classes}

The drive logic classes (the base class is not in the list)

### Resource make( script: Script ) {#method-make}

A new object of a class found in a folder

### String type_name( script: Script ) {#method-type-name}

The name of a class in the editor list: what the class says it is, or its file name made readable

### String type_description( script: Script ) {#method-type-description}

The sentence about a class, for the editor

### Script script_of( object: Object ) {#method-script-of}

The class (its script) of an object that was made from one of the classes

