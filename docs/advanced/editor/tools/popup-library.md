<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PopupLibrary

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The popups of the game as the editor needs them: the list, making a new one from the template and taking one out of the list. A popup is a scene whose root is a PopupUI, with its options set on the root node; the PopupData of a popup (its id) is kept in the database when the scene is saved. The UI Settings editor shows the list and has the button that makes a new popup.

## Methods

| | |
|---|---|
| `Array[PopupData]` | [list](#method-list)() *static* |
| `String` | [problem_of](#method-problem-of)( `popup: PopupData` ) *static* |
| `String` | [scene_path_for](#method-scene-path-for)( `popup_name: String` ) *static* |
| `PopupData` | [create](#method-create)( `popup_name: String, error: Array[String] = []` ) *static* |
| `void` | [remove](#method-remove)( `popup: PopupData` ) *static* |
| `void` | [open_scene](#method-open-scene)( `popup: PopupData` ) *static* |
| `String` | [describe](#method-describe)( `popup: PopupData` ) *static* |

## Constants

- `String` **POPUPS_FOLDER** = `"res://src/data/popups/"` - Where the scenes of new popups are saved

## Method descriptions

### Array[PopupData] list() {#method-list}

The popups of the database, by name

### String problem_of( popup: PopupData ) {#method-problem-of}

What is wrong with the scene of a popup ("" = nothing): no scene, a scene that does not exist, a root that is not a PopupUI

### String scene_path_for( popup_name: String ) {#method-scene-path-for}

The path the scene of a popup of this name would have (the next free one)

### PopupData create( popup_name: String, error: Array[String] = [] ) {#method-create}

Makes a popup: a copy of the message popup of the toolkit with the name, saved in the folder of the popups, and its data in the database. The scene is the developer's from then on. Returns the popup, or null with the reason in `error`

### void remove( popup: PopupData ) {#method-remove}

Takes a popup out of the list (its data). The scene stays: it is the developer's, and saving it puts the popup back

### void open_scene( popup: PopupData ) {#method-open-scene}

Opens the scene of the popup in the editor

### String describe( popup: PopupData ) {#method-describe}

One line about the behaviour of a popup, from its options

