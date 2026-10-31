<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConfigField

**Inherits:** [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

**Inherited by:** [ColorField](/advanced/editor/factory/color-field), [DatabaseIdField](/advanced/editor/factory/database-id-field), [NumberField](/advanced/editor/factory/number-field), [OptionField](/advanced/editor/factory/option-field), [ResourceField](/advanced/editor/factory/resource-field), [ToggleField](/advanced/editor/factory/toggle-field), [Vector3Field](/advanced/editor/factory/vector3-field), [VfxNameField](/advanced/editor/factory/vfx-name-field)

The base of the field components of the config editors: a label and a control for ONE property of the resource that is open. Place a field scene (number_field.tscn, toggle_field.tscn, option_field.tscn, color_field.tscn, vector3_field.tscn) in an editor scene, set its **Property** (the name of the export, `sun_rise_hour`) and its **Label text** in the inspector, and the editor shows and changes that property: the editor calls `bind(resource)` when a resource is opened, and every change the person makes is written to the resource and sent as `value_changed`. The layout is yours: fields go in the containers of the scene.

## Description

A field that does not match a property of the resource stays as it is (and says so in the output), so a renamed export shows up at once.

## Properties

| | | |
|---|---|---|
| `StringName` | [property](#prop-property) | `&""` |
| `String` | [label_text](#prop-label-text) | `"":` |
| `String` | [help](#prop-help) | `"":` |
| `float` | [label_width](#prop-label-width) | `180.0:` |

## Variables

| | | |
|---|---|---|
| `Resource` | [resource](#var-resource) |  |

## Methods

| | |
|---|---|
| `void` | [bind](#method-bind)( `p_resource: Resource` ) |
| `void` | [refresh](#method-refresh)() |
| `void` | [set_applies](#method-set-applies)( `applies: bool` ) |
| `Variant` | [get_value](#method-get-value)() |

## Signals

### value_changed( property: StringName, value: Variant ) {#signal-value-changed}

The person changed the value (the resource already has it)

## Property descriptions

### StringName property = &amp;"" {#prop-property}

The name of the property of the resource this field shows and changes

### String label_text = "": {#prop-label-text}

The text of the label

### String help = "": {#prop-help}

What the field is for: the tooltip of the label and of the control

### float label_width = 180.0: {#prop-label-width}

The width of the label, so the controls of a column line up

## Variable descriptions

### Resource resource {#var-resource}

The resource that is open (null before bind)

## Method descriptions

### void bind( p_resource: Resource ) {#method-bind}

Opens a resource in the field: it shows the value of its property

### void refresh() {#method-refresh}

Shows the value of the property again

### void set_applies( applies: bool ) {#method-set-applies}

The control of the field is shown or hidden with the field (a field that does not apply is hidden)

### Variant get_value() {#method-get-value}

The value that is in the resource now (null when there is none)

