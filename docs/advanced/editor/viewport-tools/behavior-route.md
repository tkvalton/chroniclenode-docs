<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorRoute

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The map of a behaviour script, without any editor object: what each task is on the ground (a route, a point, an area, a link to a person or an object), the lines to draw for it, and the texts the Behaviour tab shows (a title and a summary of a task, the kind and the time of a schedule, who uses a script). BehaviorGizmoPlugin draws the lines in the 3D viewport and BehaviorPanel shows the texts; this class only answers, so it can be tested without an editor.

## Description

A task is described by a Dictionary: kind     "route" (points, one after the other), "point" (one place), "area" (a centre and a radius), "link" (a line to the thing with a unique id) or "none" (nothing on the ground) points   the places (route, point) closed   a route that goes round (the loop pattern) center, radius   the area target_id        the unique id of a link facing           a direction the NPC faces on arrival (point) label    what the shape is ("Patrol", "Move to", "Wander" ...)

## Methods

| | |
|---|---|
| `Color` | [color_of](#method-color-of)( `schedule_index: int` ) *static* |
| `String` | [schedule_kind](#method-schedule-kind)( `schedule: TaskSchedule` ) *static* |
| `String` | [task_title](#method-task-title)( `task: BehaviorTask` ) *static* |
| `String` | [task_summary](#method-task-summary)( `task: BehaviorTask` ) *static* |
| `Dictionary` | [time_band](#method-time-band)( `schedule: TaskSchedule` ) *static* |
| `String` | [time_text](#method-time-text)( `schedule: TaskSchedule` ) *static* |
| `String` | [schedule_summary](#method-schedule-summary)( `schedule: TaskSchedule` ) *static* |
| `String` | [fallback_text](#method-fallback-text)( `script: ModularBehaviorScript` ) *static* |
| `Dictionary` | [script_users](#method-script-users)( `script_id: int` ) *static* |
| `Vector3` | [place_shift](#method-place-shift)( `task: BehaviorTask, origin: Vector3` ) *static* |
| `Dictionary` | [task_shape](#method-task-shape)( `task: BehaviorTask, origin: Vector3` ) *static* |
| `Array[Dictionary]` | [schedule_shapes](#method-schedule-shapes)( `schedule: TaskSchedule, origin: Vector3` ) *static* |
| `Dictionary` | [build_lines](#method-build-lines)( `script: ModularBehaviorScript, origin: Vector3, to_local: Callable, find_target: Callable, focus_schedule: int = -1, focus_task: int = -1, only_focus: bool = false` ) *static* |
| `Variant` | [find_unique_position](#method-find-unique-position)( `scene_root: Node, unique_id: int` ) *static* |

## Constants

- `Array[Color]` **SCHEDULE_COLORS** = `[` - One colour per schedule (the first schedule is the first colour); more schedules than colours use them again
- `float` **MARK** = `0.3` - The size of the mark of a point, in metres
- `float` **LIFT** = `0.15` - How high over the point the lines are drawn (so they are not inside the ground)
- `int` **CIRCLE_SEGMENTS** = `40` - The number of segments of the circle of an area

## Method descriptions

### Color color_of( schedule_index: int ) {#method-color-of}

*No description yet.*

### String schedule_kind( schedule: TaskSchedule ) {#method-schedule-kind}

The kind of a schedule, as a word

### String task_title( task: BehaviorTask ) {#method-task-title}

The name of a task: the one it gives itself, else its class without "Task" ("PatrolTask" -&gt; "Patrol")

### String task_summary( task: BehaviorTask ) {#method-task-summary}

One line about a task: what it does and where (the numbers the user would otherwise read in the tree)

### Dictionary time_band( schedule: TaskSchedule ) {#method-time-band}

The time of day a schedule is for: &#123;"start": hour, "end": hour&#125; from its Time of Day condition, &#123;&#125; when it has none (it is for any time)

### String time_text( schedule: TaskSchedule ) {#method-time-text}

The time of a schedule as text: "08:00 to 18:00", "all day" (a Time of Day of a whole day) or "any time" (no Time of Day)

### String schedule_summary( schedule: TaskSchedule ) {#method-schedule-summary}

One line about a schedule

### String fallback_text( script: ModularBehaviorScript ) {#method-fallback-text}

The fallback of a script, as text

### Dictionary script_users( script_id: int ) {#method-script-users}

Who uses a script: &#123;"definitions": [names of the NPC definitions that have it], "uniques": the number of placed NPCs that have it as their own&#125;

### Vector3 place_shift( task: BehaviorTask, origin: Vector3 ) {#method-place-shift}

What is added to the places a task stores to get places of the world: where the NPC is placed for a task with relative places, nothing for any other

### Dictionary task_shape( task: BehaviorTask, origin: Vector3 ) {#method-task-shape}

What a task is on the ground (see the top of the file). `origin` is where the NPC is placed: what "where it stands" means

### Array[Dictionary] schedule_shapes( schedule: TaskSchedule, origin: Vector3 ) {#method-schedule-shapes}

The shapes of the tasks of a schedule, in order (a wander schedule with no task shows the circle of its radius)

### Dictionary build_lines( script: ModularBehaviorScript, origin: Vector3, to_local: Callable, find_target: Callable, focus_schedule: int = -1, focus_task: int = -1, only_focus: bool = false ) {#method-build-lines}

The lines to draw for a script, by the name of the material they are drawn with ("s0" ... "s7" the bright colour of a schedule, "d0" ... "d7" its dim one, "focus" the task being looked at, "link" the lines to people and objects). `origin` is where the NPC is placed. `to_local` turns a world point into the space of the drawing; `find_target` answers with the world position of a unique id (a Vector3, or null when the thing is not in the scene). `focus_schedule` / `focus_task` are the ones the tab has chosen (-1 = none: every schedule is bright); `only_focus` leaves out the other schedules

### Variant find_unique_position( scene_root: Node, unique_id: int ) {#method-find-unique-position}

The world position of a placed NPC or object by its unique id, looked for in a scene (null when none has it)

