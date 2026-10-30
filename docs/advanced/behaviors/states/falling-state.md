<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FallingState

**Inherits:** [MovementState](/advanced/behaviors/states/movement-state) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

FallingState represents the state when an entity is in mid-air, typically after walking off an edge. It focuses solely on playing the appropriate animation for falling, and on telling the entity how far it fell when it lands (entity_landed: the camera shake of a hard landing listens to it). Key features:

## Description

- Plays the falling animation using blending
- Simple blending to other states handled by EntityStateComponent

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |

## Method descriptions

### void enter() {#method-enter}

Called when entering the falling state

### void exit() {#method-exit}

Called when exiting the falling state

