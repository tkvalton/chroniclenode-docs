<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorCheck

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Phase 4 of the Behaviour tab: what the NPC would really do with a schedule. It asks the navigation the terrain baked (the map of the NPC's size and domain, TerrainNavigationRuntime) for the way between the places of the schedule, and answers with a **plan**: the walks and waits in order (a timeline), the real paths, the places that cannot be reached, how long one round takes, and the problems found. BehaviorGizmoPlugin draws the plan (paths, red places) and the walker (ghost) at a time of the timeline; BehaviorPanel shows the texts. Nothing here needs an editor object, so it is tested headless with a navigation region made by hand.

## Description

A plan is a Dictionary: entries   the timeline, in order: &#123;"kind": "walk" (path, length, ok), "wait" (position) or "jump" (position: a task of a priority schedule starts from where the NPC is placed), "task": index (-1 = the closing walk back to the start), "start": seconds, "seconds": how long&#125; paths     the walks, to draw: &#123;"path", "ok", "task"&#125; bad       the places that cannot be walked to problems  what is wrong: &#123;"task": index (-1 = the schedule), "level": "error" or "note", "text"&#125; seconds   the length of one round; open  true when some task takes as long as things take (talking, following, wandering), so the real round is longer known     is there baked navigation (without it the walks are straight lines and nothing can be called unreachable)

## Methods

| | |
|---|---|
| `NPCDefinition` | [definition_of](#method-definition-of)( `npc: Node` ) *static* |
| `RID` | [map_of](#method-map-of)( `npc: Node3D` ) *static* |
| `float` | [run_speed_of](#method-run-speed-of)( `definition: NPCDefinition` ) *static* |
| `bool` | [has_navigation](#method-has-navigation)( `map: RID` ) *static* |
| `Dictionary` | [leg](#method-leg)( `map: RID, from: Vector3, to: Vector3, near: float = NEAR_GROUND` ) *static* |
| `float` | [path_length](#method-path-length)( `path: PackedVector3Array` ) *static* |
| `Dictionary` | [point_along](#method-point-along)( `path: PackedVector3Array, distance: float` ) *static* |
| `Dictionary` | [plan](#method-plan)( `schedule: TaskSchedule, origin: Vector3, map: RID, run_speed: float, find_target: Callable` ) *static* |
| `Dictionary` | [ghost_at](#method-ghost-at)( `plan_data: Dictionary, seconds: float` ) *static* |
| `String` | [seconds_text](#method-seconds-text)( `seconds: float, open: bool = false` ) *static* |
| `Dictionary` | [build_lines](#method-build-lines)( `plan_data: Dictionary, to_local: Callable, ghost: Dictionary = {}` ) *static* |
| `Dictionary` | [check_script](#method-check-script)( `script: ModularBehaviorScript, origin: Vector3, map: RID, run_speed: float, find_target: Callable` ) *static* |
| `Array[Dictionary]` | [uncovered_hours](#method-uncovered-hours)( `script: ModularBehaviorScript` ) *static* |

## Constants

- `float` **NEAR_GROUND** = `1.5` - How far from the walkable ground a place may be, in metres, to count as on it
- `float` **NEAR_LINK** = `3.0` - The same for the place of a person or an object (it stands beside the furniture, not on the path)
- `float` **MEET** = `0.75` - How near the end of a path must come to the place it was asked for
- `float` **WALK_FRACTION** = `0.33` - The walking speed, as a fraction of the running speed (NavigationController)
- `float` **WANDER_SECONDS** = `6.0` - The seconds a wander with no time is shown to last
- `float` **HOUR_STEP** = `0.25` - The step of the day the checks of the hours go in, in hours

## Method descriptions

### NPCDefinition definition_of( npc: Node ) {#method-definition-of}

The definition of a placed NPC (null when it cannot be found)

### RID map_of( npc: Node3D ) {#method-map-of}

The navigation map the NPC walks on: the terrain's map for its size and domain, else the world's own

### float run_speed_of( definition: NPCDefinition ) {#method-run-speed-of}

The running speed of an NPC (its definition's Movement Speed, else the default of the core stat), in metres a second. The real speed also follows effects and gear, so the times are "about"

### bool has_navigation( map: RID ) {#method-has-navigation}

Is there baked navigation in the map, and has the map taken it in (a query before the map's first synchronization is an error of the server and answers nothing)

### Dictionary leg( map: RID, from: Vector3, to: Vector3, near: float = NEAR_GROUND ) {#method-leg}

The walk from one place to another: &#123;"path", "reachable", "known", "length", "off_ground"&#125;. Without navigation it is the straight line and "known" is false. `near` is how far from the walkable ground the end may be

### float path_length( path: PackedVector3Array ) {#method-path-length}

*No description yet.*

### Dictionary point_along( path: PackedVector3Array, distance: float ) {#method-point-along}

The place a distance along a path, and the direction it goes there: &#123;"position", "direction"&#125;

### Dictionary plan( schedule: TaskSchedule, origin: Vector3, map: RID, run_speed: float, find_target: Callable ) {#method-plan}

The plan of a schedule for an NPC placed at `origin`. `map` is the navigation map (RID() = none), `run_speed` the running speed, `find_target` answers with the world position of a unique id (a Vector3, or null when the thing is not in the scene)

### Dictionary ghost_at( plan_data: Dictionary, seconds: float ) {#method-ghost-at}

Where the walker is at a time of the plan (it goes round again when the time is past the end): &#123;"position", "direction", "task", "kind"&#125;, or &#123;&#125; when the plan has nothing in it

### String seconds_text( seconds: float, open: bool = false ) {#method-seconds-text}

The length of one round as text ("40 s", "2 min 5 s"), with "and more" when part of it takes as long as things take

### Dictionary build_lines( plan_data: Dictionary, to_local: Callable, ghost: Dictionary = &#123;&#125; ) {#method-build-lines}

The lines of a plan: "walk" (the real paths), "bad" (the places that cannot be reached, and a straight line to each from where the walk came), "ghost" (the walker at `ghost`, a result of ghost_at or &#123;&#125;). `to_local` turns a world point into the space of the drawing

### Dictionary check_script( script: ModularBehaviorScript, origin: Vector3, map: RID, run_speed: float, find_target: Callable ) {#method-check-script}

What is found about a whole script: &#123;"navigation": is there baked navigation, "schedules": [&#123;"seconds", "open", "problems": [&#123;"task", "level", "text"&#125;]&#125;] (one for each schedule), "notes": [texts about the script]&#125;

### Array[Dictionary] uncovered_hours( script: ModularBehaviorScript ) {#method-uncovered-hours}

The stretches of the day no schedule is for (the NPC then does its fallback): [&#123;"start", "end"&#125;] in hours. Schedules with other conditions count as being there in their hours

