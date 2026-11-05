<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorEditing

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What the Behaviour tab does to a behaviour script, apart from the editor: the handles on the points of the tasks (a patrol point, the place of a move, the centre and the radius of a wander), dragging one, adding a point or a task with a click on the ground, a copy of a script for one NPC, and keeping what a change did as one step of Undo (a script is captured before and restored by Undo). The gizmo, the click tool and the panel use these, so the tests can too.

## Methods

| | |
|---|---|
| `int` | [handle_id](#method-handle-id)( `schedule: int, task: int, point: int, kind: Handle` ) *static* |
| `int` | [handle_schedule](#method-handle-schedule)( `id: int` ) *static* |
| `int` | [handle_task](#method-handle-task)( `id: int` ) *static* |
| `int` | [handle_point](#method-handle-point)( `id: int` ) *static* |
| `Handle` | [handle_kind](#method-handle-kind)( `id: int` ) *static* |
| `PackedVector3Array` | [task_points](#method-task-points)( `task: BehaviorTask, origin: Vector3` ) *static* |
| `Array[Dictionary]` | [handles_of](#method-handles-of)( `schedule: TaskSchedule, schedule_index: int, origin: Vector3` ) *static* |
| `void` | [set_task_point](#method-set-task-point)( `task: BehaviorTask, index: int, world_place: Vector3, origin: Vector3 = Vector3.ZERO` ) *static* |
| `void` | [set_wander_radius](#method-set-wander-radius)( `wander: WanderTask, origin: Vector3, world: Vector3` ) *static* |
| `void` | [set_relative](#method-set-relative)( `task: BehaviorTask, relative: bool, origin: Vector3` ) *static* |
| `bool` | [remove_last_point](#method-remove-last-point)( `task: BehaviorTask` ) *static* |
| `Dictionary` | [add_by_click](#method-add-by-click)( `script: ModularBehaviorScript, mode: Mode, world: Vector3, focus_schedule: int, focus_task: int, origin: Vector3 = Vector3.ZERO` ) *static* |
| `String` | [unique_schedule_name](#method-unique-schedule-name)( `script: ModularBehaviorScript, base: String` ) *static* |
| `ModularBehaviorScript` | [make_copy](#method-make-copy)( `source: ModularBehaviorScript, script_name: String` ) *static* |
| `Dictionary` | [capture](#method-capture)( `script: ModularBehaviorScript` ) *static* |
| `void` | [restore](#method-restore)( `script: ModularBehaviorScript, state: Dictionary` ) *static* |

## Enumerations

### enum Handle {#enum-handle}

The kinds of handle on a task: a point (patrol point, place, centre) and the radius of a wander

- **POINT** = `0`
- **RADIUS** = `1`

### enum Mode {#enum-mode}

What a click on the ground adds: nothing, a patrol point, a place to walk to, a wander area

- **NONE** = `0`
- **PATROL** = `1`
- **MOVE** = `2`
- **WANDER** = `3`

## Constants

- `float` **DEFAULT_RADIUS** = `5.0` - The radius a wander area starts with, in metres

## Method descriptions

### int handle_id( schedule: int, task: int, point: int, kind: Handle ) {#method-handle-id}

*No description yet.*

### int handle_schedule( id: int ) {#method-handle-schedule}

*No description yet.*

### int handle_task( id: int ) {#method-handle-task}

*No description yet.*

### int handle_point( id: int ) {#method-handle-point}

*No description yet.*

### Handle handle_kind( id: int ) {#method-handle-kind}

*No description yet.*

### PackedVector3Array task_points( task: BehaviorTask, origin: Vector3 ) {#method-task-points}

The places of a task that have a handle, in the world ("where it stands" is `origin`)

### Array[Dictionary] handles_of( schedule: TaskSchedule, schedule_index: int, origin: Vector3 ) {#method-handles-of}

The handles of one schedule: [&#123;"id", "position" (world), "kind"&#125;] (the point handles of each task, and the radius handle of a wander)

### void set_task_point( task: BehaviorTask, index: int, world_place: Vector3, origin: Vector3 = Vector3.ZERO ) {#method-set-task-point}

Moves a point of a task to a place in the world (a task with relative places keeps it as the distance from `origin`, where the NPC is placed)

### void set_wander_radius( wander: WanderTask, origin: Vector3, world: Vector3 ) {#method-set-wander-radius}

The radius of a wander, from a point of the ground the user dragged to (the distance from its centre, to half a metre; at least half a metre)

### void set_relative( task: BehaviorTask, relative: bool, origin: Vector3 ) {#method-set-relative}

Makes the places of a task relative to where the NPC is placed (`origin`), or absolute again: the places are converted so the task stays where it is. A wander with no centre and an idle with no place (they mean "where the NPC is placed") keep meaning it. Does nothing for a task with no places

### bool remove_last_point( task: BehaviorTask ) {#method-remove-last-point}

Removes the last point of a patrol (false when the task is not a patrol or has no point)

### Dictionary add_by_click( script: ModularBehaviorScript, mode: Mode, world: Vector3, focus_schedule: int, focus_task: int, origin: Vector3 = Vector3.ZERO ) {#method-add-by-click}

What a click on the ground adds, as a mode: a patrol point goes on the patrol that is chosen (or starts a patrol in the chosen schedule, or in a new schedule); a place to walk to or a wander area is a new task of the chosen schedule (or of a new schedule). Returns &#123;"schedule": index, "task": index&#125; of what was added or changed

### String unique_schedule_name( script: ModularBehaviorScript, base: String ) {#method-unique-schedule-name}

A schedule name that no schedule of the script has: "Patrol", then "Patrol 2" ...

### ModularBehaviorScript make_copy( source: ModularBehaviorScript, script_name: String ) {#method-make-copy}

A new record of the Behavior Scripts database with the contents of `source` (a deep copy: the schedules, tasks and reactions are its own). With no source the script is empty (the fallback is a wander). The record is a script like any other: it stays in the database when the NPC that uses it is deleted, until it is deleted in the Behavior Scripts editor. Null when it could not be saved

### Dictionary capture( script: ModularBehaviorScript ) {#method-capture}

What a script is now, to put it back later: its schedules, the tasks of each, and the places of each task

### void restore( script: ModularBehaviorScript, state: Dictionary ) {#method-restore}

Puts a script back as `capture` found it

