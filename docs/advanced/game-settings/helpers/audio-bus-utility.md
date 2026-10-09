<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioBusUtility

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The audio buses the toolkit plays on (music, sound effects, voices, ambiance, UI) and a way to make sure they exist.

## Description

The buses of a project live in its bus layout file. A project that has never had them (a new project the addon was just added to) would stop at the first volume setting, so the game makes sure they exist when it starts and the editor setup saves them into the layout.

## Methods

| | |
|---|---|
| `int` | [ensure_buses](#method-ensure-buses)() *static* |
| `String` | [get_layout_path](#method-get-layout-path)() *static* |
| `bool` | [save_layout](#method-save-layout)() *static* |

## Constants

- `Array[String]` **REQUIRED_BUSES** = `["Music", "SFX", "Voice", "Ambiance", "UI"]`

## Method descriptions

### int ensure_buses() {#method-ensure-buses}

Creates the buses that are missing (routed to Master). Returns how many were created

### String get_layout_path() {#method-get-layout-path}

Where the project keeps its bus layout (the project setting, or Godot's default file name)

### bool save_layout() {#method-save-layout}

Writes the buses that exist now into the project's bus layout and points the project at that file (editor only: the layout is a project file)

