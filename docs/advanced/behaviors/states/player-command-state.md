<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerCommandState

**Inherits:** [ActionState](/advanced/behaviors/states/action-state) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

PlayerCommandState represents when an entity is executing a player command. It handles movement to a designated location and transitions back when complete.

## Description

Key features:

- Handles navigation to command target position
- Detects when navigation is complete or fails
- Manages transitions when command is completed or interrupted

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |
| `void` | [update](#method-update)( `_delta: float` ) |
| `void` | [start_return_to_inactive](#method-start-return-to-inactive)() |
| `void` | [return_all_timer](#method-return-all-timer)() |

## Method descriptions

### void enter() {#method-enter}

Called when entering the player command state

### void exit() {#method-exit}

Called when exiting the player command state

### void update( _delta: float ) {#method-update}

Called every frame to check navigation status

### void start_return_to_inactive() {#method-start-return-to-inactive}

Initiates return to inactive state

### void return_all_timer() {#method-return-all-timer}

Timer cleanup

