<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FlightClasses

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Finds the flight logics that can be chosen in the Flight effect: every script in data_classes/effects/status_and_control/flight_logic/ that extends FlightLogic. Add a script to the folder and it shows up in the editor list, with its exported variables as fields (the base class, FlightLogic, is the floating flight and is always the first choice)

## Methods

| | |
|---|---|
| `Array[Script]` | [get_classes](#method-get-classes)() *static* |
| `String` | [type_name](#method-type-name)( `script: Script` ) *static* |
| `String` | [type_description](#method-type-description)( `script: Script` ) *static* |

## Constants

- `String` **FOLDER** = `"res://addons/chroniclenode/data_classes/effects/status_and_control/flight_lo...`

## Method descriptions

### Array[Script] get_classes() {#method-get-classes}

The flight logic classes (the base class is not in the list)

### String type_name( script: Script ) {#method-type-name}

The name of a class in the editor list

### String type_description( script: Script ) {#method-type-description}

The sentence about a class, for the editor

