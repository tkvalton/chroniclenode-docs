<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FollowingState

**Inherits:** [ActionState](/advanced/behaviors/states/action-state) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

FollowingState represents when an entity is following another entity or position. Typically used for companion NPCs or pets following the player.

## Description

Key features:

- Follows target entity or specific position
- Configurable follow distance and walk/run mode
- Supports pet formation system
- Transitions to combat when attacked

## Variables

| | | |
|---|---|---|
| `float` | [min_follow_distance](#var-min-follow-distance) | `2.0` |
| `bool` | [use_running](#var-use-running) | `false` |
| `bool` | [force_walking](#var-force-walking) | `true` |

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |
| `void` | [update](#method-update)( `_delta: float` ) |
| `void` | [set_follow_target](#method-set-follow-target)( `target: Node3D, distance: float = 2.0, walk: bool = true` ) |
| `void` | [set_follow_position](#method-set-follow-position)( `position: Vector3, distance: float = 0.5, walk: bool = true` ) |

## Constants

- `float` **COMPANION_TELEPORT_DISTANCE** = `40.0` - A companion this far from its leader (a loading, a teleport, a fall) is put next to it

## Variable descriptions

### float min_follow_distance = 2.0 {#var-min-follow-distance}

Min follow distance

### bool use_running = false {#var-use-running}

Whether to run

### bool force_walking = true {#var-force-walking}

Whether to force walking

## Method descriptions

### void enter() {#method-enter}

Called when entering the following state

### void exit() {#method-exit}

Called when exiting the following state

### void update( _delta: float ) {#method-update}

Called every frame to update following behavior

### void set_follow_target( target: Node3D, distance: float = 2.0, walk: bool = true ) {#method-set-follow-target}

Set the target to follow

### void set_follow_position( position: Vector3, distance: float = 0.5, walk: bool = true ) {#method-set-follow-position}

Set a position to follow

