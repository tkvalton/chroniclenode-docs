<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IdleState

**Inherits:** [MovementState](/advanced/behaviors/states/movement-state) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Simplified IdleState - detects stance changes and uses blending system

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |
| `void` | [force_stance_update](#method-force-stance-update)() |

## Method descriptions

### void enter() {#method-enter}

*Overrides this function of [MovementState](/advanced/behaviors/states/movement-state).*

### void exit() {#method-exit}

*Overrides this function of [MovementState](/advanced/behaviors/states/movement-state).*

### void force_stance_update() {#method-force-stance-update}

Force immediate idle update (called by external systems like WASD controller)

