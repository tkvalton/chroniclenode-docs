<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AnimationPropertyMapper

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Maps AnimationCoreMap properties to their filesystem folders Used by editors to populate dropdowns and validate animations

## Methods

| | |
|---|---|
| `String` | [get_folder_for_property](#method-get-folder-for-property)( `property_name: String` ) *static* |
| `Array[Dictionary]` | [get_animations_in_folder](#method-get-animations-in-folder)( `entity_type: String, property_name: String, include_parent: bool = true` ) *static* |
| `Error` | [create_entity_folder_structure](#method-create-entity-folder-structure)( `entity_name: String` ) *static* |
| `bool` | [animation_exists](#method-animation-exists)( `entity_type: String, property_name: String, animation_name: String` ) *static* |

## Constants

- `const` **PROPERTY_FOLDERS** = `{`
- `const` **FOLDER_STRUCTURE** = `[` - Complete folder structure to create for new entities

## Method descriptions

### String get_folder_for_property( property_name: String ) {#method-get-folder-for-property}

Get the folder path for a given property name

### Array[Dictionary] get_animations_in_folder( entity_type: String, property_name: String, include_parent: bool = true ) {#method-get-animations-in-folder}

Get all animation files in a property's folder for a specific entity

### Error create_entity_folder_structure( entity_name: String ) {#method-create-entity-folder-structure}

Create the complete folder structure for a new entity

### bool animation_exists( entity_type: String, property_name: String, animation_name: String ) {#method-animation-exists}

Check if an animation file exists

