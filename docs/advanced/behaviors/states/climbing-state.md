<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ClimbingState

**Inherits:** [MovementState](/advanced/behaviors/states/movement-state) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

MovementState for when entity is climbing ladders or similar traversal objects Handles path-based movement and climbing animations

## Variables

| | | |
|---|---|---|
| `float` | [climbing_progress](#var-climbing-progress) | `0.0` |
| `int` | [climb_direction](#var-climb-direction) | `1  # 1 = up, -1 = down` |
| `InteractableObject` | [current_ladder](#var-current-ladder) | `null` |

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |
| `void` | [set_ladder](#method-set-ladder)( `ladder: InteractableObject` ) |
| `void` | [set_progress](#method-set-progress)( `progress: float` ) |
| `void` | [set_direction](#method-set-direction)( `direction: int` ) |

## Variable descriptions

### float climbing_progress = 0.0 {#var-climbing-progress}

*No description yet.*

### int climb_direction = 1  # 1 = up, -1 = down {#var-climb-direction}

*No description yet.*

### InteractableObject current_ladder = null {#var-current-ladder}

*No description yet.*

## Method descriptions

### void enter() {#method-enter}

*Overrides this function of [MovementState](/advanced/behaviors/states/movement-state).*

### void exit() {#method-exit}

*Overrides this function of [MovementState](/advanced/behaviors/states/movement-state).*

### void set_ladder( ladder: InteractableObject ) {#method-set-ladder}

Set the ladder this state is associated with

### void set_progress( progress: float ) {#method-set-progress}

Set climb progress (0.0 = start, 1.0 = end)

### void set_direction( direction: int ) {#method-set-direction}

Set climb direction (1 = up, -1 = down)

