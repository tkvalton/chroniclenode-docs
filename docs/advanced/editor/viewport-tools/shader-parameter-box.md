<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ShaderParameterBox

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

An input for every parameter of the shader of a material: a number (with its range when the shader gives one), a switch, a vector, a colour, a texture. Under the look material of a volume in the Unique Object panel, so that water and lava are tuned without opening the material. The words above a `uniform` in the shader (`// ...`) are its tooltip, and `hint_range` gives a number its limits. A change is one step of Undo (a run of changes of one parameter, such as dragging a number, is one step).

## Variables

| | | |
|---|---|---|
| `Array[String]` | [skipped](#var-skipped) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `material: ShaderMaterial, history: EditorUndoRedoManager, context: Object, hide: Array[String] = []` ) |
| `Array[Dictionary]` | [parameter_list](#method-parameter-list)( `material: ShaderMaterial` ) *static* |
| `Dictionary` | [parameter_notes](#method-parameter-notes)( `code: String` ) *static* |

## Variable descriptions

### Array[String] skipped = [] {#var-skipped}

The parameters that are not shown: the volume sets them itself (the flow of a river)

## Method descriptions

### void setup( material: ShaderMaterial, history: EditorUndoRedoManager, context: Object, hide: Array[String] = [] ) {#method-setup}

Builds the inputs for the shader of `material`. `history` is the undo history of the editor (null: the change is made without undo), `context` the object the undo action belongs to

### Array[Dictionary] parameter_list( material: ShaderMaterial ) {#method-parameter-list}

The parameters of the shader of a material that can be edited: [&#123;"name", "type", "hint", "hint_string"&#125;] in the order of the shader (the texture hints of the screen and the depth are not listed)

### Dictionary parameter_notes( code: String ) {#method-parameter-notes}

The comment above each uniform of a shader: &#123;name: text&#125;. The lines of `//` right above the line of the uniform, joined.

