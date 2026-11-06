<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalEventTool

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The clicks of the Local Events tab: while a row waits for its target (Pick target, or a row just added that is about something) a left click in the 3D viewport picks the object, NPC, trigger area, spawner or rule nearest to it (within a few pixels) that the row can be about, or the ground for a row about a place (LocalEventPanel.pick_target / pick_place). Escape stops. A click is used up, so it does not select what is under it.

## Variables

| | | |
|---|---|---|
| `EditorPlugin` | [plugin](#var-plugin) |  |
| `LocalEventPanel` | [panel](#var-panel) | `null` |

## Methods

| | |
|---|---|
| `int` | [forward_input](#method-forward-input)( `camera: Camera3D, event: InputEvent` ) |

## Variable descriptions

### EditorPlugin plugin {#var-plugin}

*No description yet.*

### LocalEventPanel panel = null {#var-panel}

*No description yet.*

## Method descriptions

### int forward_input( camera: Camera3D, event: InputEvent ) {#method-forward-input}

An event of a 3D viewport (AFTER_GUI_INPUT_STOP when it was used)

