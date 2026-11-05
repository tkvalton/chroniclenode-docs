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
| `TaskSchedule` | [new_schedule](#method-new-schedule)( `type_class: String, schedule_name: String` ) *static* |
| `int` | [add_schedule](#method-add-schedule)( `script: ModularBehaviorScript, schedule: TaskSchedule` ) *static* |
| `bool` | [remove_schedule](#method-remove-schedule)( `script: ModularBehaviorScript, index: int` ) *static* |
| `int` | [move_schedule](#method-move-schedule)( `script: ModularBehaviorScript, index: int, delta: int` ) *static* |
| `int` | [add_task](#method-add-task)( `schedule: TaskSchedule, task: BehaviorTask` ) *static* |
| `bool` | [remove_task](#method-remove-task)( `schedule: TaskSchedule, index: int` ) *static* |
| `int` | [move_task](#method-move-task)( `schedule: TaskSchedule, index: int, delta: int` ) *static* |
| `Array` | [conditions_of](#method-conditions-of)( `owner: Resource` ) *static* |
| `Resource` | [condition_owner](#method-condition-owner)( `schedule: TaskSchedule, task_index: int` ) *static* |
| `bool` | [add_condition](#method-add-condition)( `owner: Resource, condition: EntityCondition` ) *static* |
| `bool` | [remove_condition](#method-remove-condition)( `owner: Resource, index: int` ) *static* |
| `EntityCondition` | [condition_from_data](#method-condition-from-data)( `type_data: Dictionary, param_values: Dictionary` ) *static* |
| `TimeOfDayCondition` | [time_condition_of](#method-time-condition-of)( `schedule: TaskSchedule` ) *static* |
| `void` | [set_schedule_time](#method-set-schedule-time)( `schedule: TaskSchedule, start: float, end: float` ) *static* |
| `void` | [clear_schedule_time](#method-clear-schedule-time)( `schedule: TaskSchedule` ) *static* |
| `bool` | [is_link_task](#method-is-link-task)( `task: BehaviorTask` ) *static* |
| `int` | [target_of](#method-target-of)( `task: BehaviorTask` ) *static* |
| `void` | [set_target](#method-set-target)( `task: BehaviorTask, unique_id: int` ) *static* |
| `Dictionary` | [nearest_target](#method-nearest-target)( `camera: Camera3D, candidates: Array[Dictionary], screen_point: Vector2, max_pixels: float = 48.0` ) *static* |
| `Array[Dictionary]` | [targets_in](#method-targets-in)( `scene_root: Node` ) *static* |
| `Dictionary` | [capture](#method-capture)( `script: ModularBehaviorScript` ) *static* |
| `bool` | [same](#method-same)( `a: Dictionary, b: Dictionary` ) *static* |
| `void` | [restore](#method-restore)( `script: ModularBehaviorScript, state: Dictionary` ) *static* |

## Enumerations

### enum Handle {#enum-handle}

The kinds of handle on a task: a point (patrol point, place, centre) and the radius of a wander

- **POINT** = `0`
- **RADIUS** = `1`

### enum Mode {#enum-mode}

What a click in the viewport does: nothing, adds a patrol point, adds a place to walk to, adds a wander area, or picks the target of a task (an NPC or an object)

- **NONE** = `0`
- **PATROL** = `1`
- **MOVE** = `2`
- **WANDER** = `3`
- **TARGET** = `4`

## Constants

- `float` **DEFAULT_RADIUS** = `5.0` - The radius a wander area starts with, in metres
- `Array[Dictionary]` **SCHEDULE_TYPES** = `[` - The kinds of schedule that can be made, for the New Schedule window

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

### TaskSchedule new_schedule( type_class: String, schedule_name: String ) {#method-new-schedule}

A new schedule of a kind (the "class" of SCHEDULE_TYPES) with a name. Null for a kind that is not known

### int add_schedule( script: ModularBehaviorScript, schedule: TaskSchedule ) {#method-add-schedule}

Puts a schedule at the end of the script (the lowest priority). Returns its index

### bool remove_schedule( script: ModularBehaviorScript, index: int ) {#method-remove-schedule}

Takes a schedule off the script

### int move_schedule( script: ModularBehaviorScript, index: int, delta: int ) {#method-move-schedule}

Moves a schedule up (delta -1: it is checked earlier) or down (+1). Returns its new index, or -1 when it cannot move

### int add_task( schedule: TaskSchedule, task: BehaviorTask ) {#method-add-task}

Puts a task at the end of a schedule. Returns its index

### bool remove_task( schedule: TaskSchedule, index: int ) {#method-remove-task}

Takes a task off a schedule

### int move_task( schedule: TaskSchedule, index: int, delta: int ) {#method-move-task}

Moves a task up or down in its schedule. Returns its new index, or -1 when it cannot move

### Array conditions_of( owner: Resource ) {#method-conditions-of}

The conditions a schedule has to be chosen (activation) or a task to start (execution); an empty array for anything else. The array itself, so it can be changed

### Resource condition_owner( schedule: TaskSchedule, task_index: int ) {#method-condition-owner}

What a condition of a row belongs to: the schedule (task_index -1) or one of its tasks (null when there is none)

### bool add_condition( owner: Resource, condition: EntityCondition ) {#method-add-condition}

Gives a schedule or a task a condition

### bool remove_condition( owner: Resource, index: int ) {#method-remove-condition}

Takes a condition off a schedule or a task

### EntityCondition condition_from_data( type_data: Dictionary, param_values: Dictionary ) {#method-condition-from-data}

A condition made from what the Condition window gave (&#123;"path": the script, ...&#125; and the values of its settings). Null when it is not an entity condition

### TimeOfDayCondition time_condition_of( schedule: TaskSchedule ) {#method-time-condition-of}

The Time of Day condition of a schedule (null when it has none)

### void set_schedule_time( schedule: TaskSchedule, start: float, end: float ) {#method-set-schedule-time}

Sets the time of a schedule: from `start` to `end` (hours of the game day, to the quarter hour). The schedule gets a Time of Day condition if it has none

### void clear_schedule_time( schedule: TaskSchedule ) {#method-clear-schedule-time}

Makes a schedule for any time (takes its Time of Day conditions off)

### bool is_link_task( task: BehaviorTask ) {#method-is-link-task}

Is this a task that is about someone or something with a unique id (the ones the viewport draws a line to)?

### int target_of( task: BehaviorTask ) {#method-target-of}

The unique id a link task points at (0 = none)

### void set_target( task: BehaviorTask, unique_id: int ) {#method-set-target}

Points a link task at a unique id

### Dictionary nearest_target( camera: Camera3D, candidates: Array[Dictionary], screen_point: Vector2, max_pixels: float = 48.0 ) {#method-nearest-target}

The placed NPC or object of a list that is nearest to a point of the screen, within `max_pixels` (null when none): [&#123;"node", "id"&#125;] -&gt; the entry. `camera` looks at the world they are in

### Array[Dictionary] targets_in( scene_root: Node ) {#method-targets-in}

The NPCs and objects of a scene that have a record (so a unique id): [&#123;"node", "id", "name"&#125;]

### Dictionary capture( script: ModularBehaviorScript ) {#method-capture}

What a script is now, to put it back later: a deep copy of its schedules (with their tasks, conditions and settings) and reactions and its own settings, and a text that says whether two states are the same. A state never changes once it is made: putting it back uses a copy of it (`restore`)

### bool same( a: Dictionary, b: Dictionary ) {#method-same}

Are two states of `capture` the same?

### void restore( script: ModularBehaviorScript, state: Dictionary ) {#method-restore}

Puts a script back as `capture` found it (with copies of what the state holds: the state stays as it was)

