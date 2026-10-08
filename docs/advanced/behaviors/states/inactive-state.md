<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InactiveState

**Inherits:** [ActionState](/advanced/behaviors/states/action-state) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

InactiveState represents when an entity is not actively engaged in combat. It handles basic idle behavior and transitions to combat states when needed.

## Description

Key features:

- Handles leashing logic (exits combat if target too far)
- Transitions to combat when target present
- Default idle state for non-combat entities

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [update](#method-update)( `_delta: float` ) |
| `void` | [exit](#method-exit)() |

## Method descriptions

### void enter() {#method-enter}

Called when entering the inactive state

### void update( _delta: float ) {#method-update}

Called every frame to check for combat transitions

### void exit() {#method-exit}

Called when exiting the inactive state

