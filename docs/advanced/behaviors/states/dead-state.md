<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DeadState

**Inherits:** [ActionState](/advanced/behaviors/states/action-state) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

DeadState represents when an entity has been defeated. It handles all death visuals and physics locking. Revival should be handled explicitly by resetting entity.is_dead and changing states.

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [update](#method-update)( `_delta: float` ) |
| `void` | [exit](#method-exit)() |

## Method descriptions

### void enter() {#method-enter}

Called when entering the dead state

### void update( _delta: float ) {#method-update}

Called every frame to check for revival

### void exit() {#method-exit}

Called when exiting the dead state

