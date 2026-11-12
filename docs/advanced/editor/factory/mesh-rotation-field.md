<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MeshRotationField

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

A field for a mesh and the way it is turned: a title, a button with the name of the mesh (it opens the mesh catalog), a button that empties it, and three numbers (the turn in degrees on x, y and z). Used by the item editor (the projectile model of an item) and the weapon editor (the ammo model of a ranged weapon): a model that does not have its tip along +Y is turned by the rotation so that it does. Set it up with `configure`, show a resource's values with `set_values` (it does not send `changed`), and read `mesh` and `rotation_degrees_value`.

## Variables

| | | |
|---|---|---|
| `Mesh` | [mesh](#var-mesh) | `null` |
| `Vector3` | [rotation_degrees_value](#var-rotation-degrees-value) | `Vector3.ZERO` |

## Methods

| | |
|---|---|
| `void` | [configure](#method-configure)( `title: String, tooltip: String, dialog_manager: DialogManager` ) |
| `void` | [set_values](#method-set-values)( `new_mesh: Mesh, new_rotation: Vector3` ) |

## Signals

### changed() {#signal-changed}

Sent when the mesh or the turn is changed by the user

## Variable descriptions

### Mesh mesh = null {#var-mesh}

The mesh in the field (null: none)

### Vector3 rotation_degrees_value = Vector3.ZERO {#var-rotation-degrees-value}

The turn of the mesh, degrees on x, y and z

## Method descriptions

### void configure( title: String, tooltip: String, dialog_manager: DialogManager ) {#method-configure}

Gives the field its title, a tooltip, and the dialog manager that opens the mesh catalog

### void set_values( new_mesh: Mesh, new_rotation: Vector3 ) {#method-set-values}

Shows a mesh and a turn (without sending `changed`)

