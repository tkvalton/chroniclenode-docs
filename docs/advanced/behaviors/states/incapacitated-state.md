<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IncapacitatedState

**Inherits:** [ActionState](/advanced/behaviors/states/action-state) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

IncapacitatedState represents when an entity is completely stunned/incapacitated. The entity cannot move or take any actions while in this state.

## Description

Key features:

- Stops all movement and prevents actions
- Tracks the entity that applied the incapacitation
- Automatically exits when incapacitation effect expires (handled by EffectsComponent)

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [update](#method-update)( `_delta: float` ) |
| `void` | [exit](#method-exit)() |
| `void` | [set_state_data](#method-set-state-data)( `data: Dictionary` ) |

## Method descriptions

### void enter() {#method-enter}

Called when entering the incapacitated state

### void update( _delta: float ) {#method-update}

Called every frame - incapacitation duration handled by EffectsComponent

### void exit() {#method-exit}

Called when exiting the incapacitated state

### void set_state_data( data: Dictionary ) {#method-set-state-data}

Set state data from external source

