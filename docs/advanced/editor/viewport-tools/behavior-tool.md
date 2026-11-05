<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorTool

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The click tool of the Behaviour tab: while one of its buttons is on (Add patrol points, Add a place, Add a wander area) a left click on the ground of the 3D viewport adds there what the button adds, through BehaviorPanel.add_point_at (one step of Undo). Escape turns the tool off. A click is used up, so it does not select what is under it.

## Variables

| | | |
|---|---|---|
| `EditorPlugin` | [plugin](#var-plugin) |  |
| `BehaviorPanel` | [panel](#var-panel) | `null` |

## Methods

| | |
|---|---|
| `int` | [forward_input](#method-forward-input)( `camera: Camera3D, event: InputEvent` ) |

## Variable descriptions

### EditorPlugin plugin {#var-plugin}

*No description yet.*

### BehaviorPanel panel = null {#var-panel}

*No description yet.*

## Method descriptions

### int forward_input( camera: Camera3D, event: InputEvent ) {#method-forward-input}

An event of a 3D viewport (AFTER_GUI_INPUT_STOP when it was used)

