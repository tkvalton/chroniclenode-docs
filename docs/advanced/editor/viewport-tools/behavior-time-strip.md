<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorTimeStrip

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The day of an NPC in one picture: 24 hours across, one bar per schedule in the colour the viewport draws it, from the hour its Time of Day condition starts to the hour it ends (a schedule with no time is for any time: a faint bar all along). The schedules are in the order the NPC checks them: the first whose time and conditions hold runs. The bar of the chosen schedule is bright. When it is `editable` the bars can be changed with the mouse: drag a bar to move its time, drag its left or right edge to stretch it, drag over an empty stretch of a row to make a time there (to the quarter hour), right click a row to make it any time. The strip only says what the user did (the signals); BehaviorPanel changes the script, saves it and makes it one step of Undo.

## Variables

| | | |
|---|---|---|
| `bool` | [editable](#var-editable) | `false` |
| `ModularBehaviorScript` | [behavior](#var-behavior) | `null` |
| `int` | [focus_schedule](#var-focus-schedule) | `-1` |

## Methods

| | |
|---|---|
| `void` | [set_script_data](#method-set-script-data)( `new_script: ModularBehaviorScript, new_focus: int` ) |
| `int` | [row_at](#method-row-at)( `y: float` ) |
| `float` | [hour_at](#method-hour-at)( `x: float` ) |
| `void` | [begin_drag](#method-begin-drag)( `point: Vector2` ) |
| `void` | [drag_to](#method-drag-to)( `x: float` ) |
| `void` | [end_drag](#method-end-drag)() |

## Signals

### drag_started( schedule_index: int ) {#signal-drag-started}

A drag started on the row of a schedule

### time_dragged( schedule_index: int, start: float, end: float ) {#signal-time-dragged}

The time of the schedule being dragged is now from `start` to `end` (hours of the game day)

### drag_finished( schedule_index: int ) {#signal-drag-finished}

The drag ended

### time_cleared( schedule_index: int ) {#signal-time-cleared}

A right click: the schedule is for any time

## Enumerations

### enum DragKind {#enum-dragkind}

- **NONE** = `0`
- **START** = `1`
- **END** = `2`
- **MOVE** = `3`
- **CREATE** = `4`

## Constants

- `float` **EDGE_HOURS** = `0.75` - How close to an edge (in hours) a press is a drag of the edge
- `float` **QUARTER** = `0.25`
- `float` **ROW_HEIGHT** = `16.0`
- `float` **LABEL_WIDTH** = `0.0`
- `int` **HOURS** = `24`

## Variable descriptions

### bool editable = false {#var-editable}

Can the bars be changed with the mouse?

### ModularBehaviorScript behavior = null {#var-behavior}

*No description yet.*

### int focus_schedule = -1 {#var-focus-schedule}

*No description yet.*

## Method descriptions

### void set_script_data( new_script: ModularBehaviorScript, new_focus: int ) {#method-set-script-data}

*No description yet.*

### int row_at( y: float ) {#method-row-at}

The row of the schedule at a height of the strip (-1 when none)

### float hour_at( x: float ) {#method-hour-at}

The hour at a place across the strip, to the quarter hour

### void begin_drag( point: Vector2 ) {#method-begin-drag}

A press at a place of the strip: what is dragged depends on where (an edge, the bar, or an empty stretch)

### void drag_to( x: float ) {#method-drag-to}

The mouse is at a place across the strip while dragging

### void end_drag() {#method-end-drag}

*No description yet.*

