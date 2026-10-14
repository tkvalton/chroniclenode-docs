<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SettingsSection

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

A section of a settings editor, built like the sections of the scene editors: a FoldableContainer (its title is the name of the section), a Panel behind it, a MarginContainer and a VBoxContainer for the rows. The generated settings editors (Gameplay Config, Settings, UI Settings, Character Creation) put one for each category, group and list in a single column.

## Methods

| | |
|---|---|
| `VBoxContainer` | [add](#method-add)( `parent: Node, title: String, nested: bool = false, folded: bool = false` ) *static* |
| `FoldableContainer` | [section_of](#method-section-of)( `rows: Control` ) *static* |

## Constants

- `Color` **PANEL_COLOR** = `Color(0.1517, 0.1517, 0.1517, 1.0)`
- `Color` **NESTED_PANEL_COLOR** = `Color(0.185, 0.185, 0.185, 1.0)`

## Method descriptions

### VBoxContainer add( parent: Node, title: String, nested: bool = false, folded: bool = false ) {#method-add}

Adds a section to `parent` and returns the VBoxContainer its rows go in. `nested`: a section inside a section (a little lighter, smaller title)

### FoldableContainer section_of( rows: Control ) {#method-section-of}

The FoldableContainer a VBoxContainer made by `add` is in (to change its title, or to hide it)

