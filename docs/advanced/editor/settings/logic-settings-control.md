<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LogicSettingsControl

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The settings of the player controller or of the camera, as they appear in the Controller and Camera tabs of the Gameplay Config: a **Type** dropdown (the logic classes the toolkit has) and the settings of that type below it, in sections like the rest of the Gameplay Config. The logic is a resource kept in the config itself, so what you see is what the game uses: there is no preset to choose and nothing else to save. A logic that older versions kept as a preset file is copied into the config the first time the tab opens.

## Variables

| | | |
|---|---|---|
| `Resource` | [holder](#var-holder) |  |
| `String` | [property](#var-property) | `""` |
| `String` | [base_name](#var-base-name) | `""` |
| `Array[Script]` | [classes](#var-classes) | `[]` |
| `OptionButton` | [type_option](#var-type-option) |  |
| `VBoxContainer` | [rows_holder](#var-rows-holder) |  |
| `Dictionary` | [doc_comments](#var-doc-comments) | `{}` |
| `bool` | [migrated](#var-migrated) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `config: Resource, property_name: String` ) |
| `Array[Script]` | [discover_classes](#method-discover-classes)( `folder: String, base: String` ) *static* |
| `bool` | [extends_base](#method-extends-base)( `script: Script, base: String` ) *static* |
| `String` | [type_name_of](#method-type-name-of)( `script: Script` ) *static* |
| `Resource` | [get_logic](#method-get-logic)() |
| `void` | [refresh](#method-refresh)() |
| `Dictionary` | [read_doc_comments](#method-read-doc-comments)( `script: GDScript` ) *static* |

## Signals

### changed() {#signal-changed}

Something was changed (the type or a setting): the editor saves the config.

## Constants

- `String` **CAMERA_LOGIC_PATH** = `"res://addons/chroniclenode/data_classes/controller_logic/camera/"` - The folders of the logic classes (every script there that extends the base class is a type).
- `String` **PLAYER_LOGIC_PATH** = `"res://addons/chroniclenode/data_classes/controller_logic/player/"`
- `PackedStringArray` **HIDDEN** = `["preset_name", "description"]` - The settings every logic has that this control does not show (a name and a description of the old presets).

## Variable descriptions

### Resource holder {#var-holder}

*No description yet.*

### String property = "" {#var-property}

*No description yet.*

### String base_name = "" {#var-base-name}

*No description yet.*

### Array[Script] classes = [] {#var-classes}

*No description yet.*

### OptionButton type_option {#var-type-option}

*No description yet.*

### VBoxContainer rows_holder {#var-rows-holder}

*No description yet.*

### Dictionary doc_comments =  {#var-doc-comments}

*No description yet.*

### bool migrated = false {#var-migrated}

A logic that was a preset file was copied into the config when the control opened.

## Method descriptions

### void setup( config: Resource, property_name: String ) {#method-setup}

`holder` is the config, `property` the name of its logic resource ("player_controller_logic" or "camera_logic"). The classes are found in the folder of the kind.

### Array[Script] discover_classes( folder: String, base: String ) {#method-discover-classes}

The scripts of a folder that extend the base class, by display name.

### bool extends_base( script: Script, base: String ) {#method-extends-base}

*No description yet.*

### String type_name_of( script: Script ) {#method-type-name-of}

The name the Type dropdown shows for a logic script.

### Resource get_logic() {#method-get-logic}

The logic the config holds now (null when it holds none).

### void refresh() {#method-refresh}

Shows the type and the settings of the logic the config holds.

### Dictionary read_doc_comments( script: GDScript ) {#method-read-doc-comments}

The ## comments above the @export lines of a script and its base scripts: name -&gt; text (the tooltips).

