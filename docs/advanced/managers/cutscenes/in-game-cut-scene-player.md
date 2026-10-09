<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InGameCutScenePlayer

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

InGameCutScenePlayer is a simple base class for in-game cutscenes that use AnimationPlayer. Cutscene scenes should extend this class and have an AnimationPlayer as a child node.

## Description

Key features:

- Simple play() and stop() interface for cutscenes
- Requires an AnimationPlayer node to be present
- Emits signals for cutscene events
- Handles basic cutscene state management

Usage:

1. Create a scene that extends InGameCutScenePlayer

2. Add an AnimationPlayer as a child

3. Create your cutscene animations

4. The UIContainer will instantiate and play your cutscene

## Methods

| | |
|---|---|
| `void` | [play](#method-play)( `animation_name: String = ""` ) |
| `void` | [stop](#method-stop)() |

## Signals

### cutscene_started() {#signal-cutscene-started}

### cutscene_finished() {#signal-cutscene-finished}

## Method descriptions

### void play( animation_name: String = "" ) {#method-play}

Plays the cutscene animation

### void stop() {#method-stop}

Stops the cutscene animation

