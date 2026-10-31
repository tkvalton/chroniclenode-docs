<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ResourceField

**Inherits:** [ConfigField](/advanced/editor/factory/config-field) < [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

A property that holds a resource (a gradient, a curve, a texture, a sky driver) in a resource picker: pick one from the project, make a new one or clear it. The picker is the one of the Godot editor, so it only exists in the editor; outside the editor the field shows the name of the resource. Set the **Base type** (`Gradient`, `Curve`, `Texture2D`, `SkyDriver`) in the inspector.

## Properties

| | | |
|---|---|---|
| `String` | [base_type](#prop-base-type) | `"Resource"` |

## Variables

| | | |
|---|---|---|
| `EditorResourcePicker` | [picker](#var-picker) |  |

## Property descriptions

### String base_type = "Resource" {#prop-base-type}

The class of resource the picker offers (a built-in class or a script class)

## Variable descriptions

### EditorResourcePicker picker {#var-picker}

*No description yet.*

