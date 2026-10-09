<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponCollisionUtility

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Variables

| | | |
|---|---|---|
| `Dictionary` | [weapon_collision_templates](#var-weapon-collision-templates) | `{}` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_collision_template_names](#method-get-collision-template-names)() *static* |
| `Shape3D` | [get_collision_shape_template](#method-get-collision-shape-template)( `template_name: String` ) *static* |
| `bool` | [collision_template_exists](#method-collision-template-exists)( `template_name: String` ) *static* |
| `Array[Dictionary]` | [get_all_collision_template_info](#method-get-all-collision-template-info)() *static* |

## Variable descriptions

### Dictionary weapon_collision_templates =  {#var-weapon-collision-templates}

*No description yet.*

## Method descriptions

### Array[String] get_collision_template_names() {#method-get-collision-template-names}

Get all available collision template names

### Shape3D get_collision_shape_template( template_name: String ) {#method-get-collision-shape-template}

Get collision shape by template name

### bool collision_template_exists( template_name: String ) {#method-collision-template-exists}

Check if collision template exists

### Array[Dictionary] get_all_collision_template_info() {#method-get-all-collision-template-info}

Get all collision template info for editor dropdowns

