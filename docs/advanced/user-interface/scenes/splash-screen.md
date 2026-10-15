<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SplashScreen

**Inherits:** [CanvasLayer](https://docs.godotengine.org/en/stable/classes/class_canvaslayer.html)

SplashScreenManager handles the display of splash screens at game startup. It manages the sequence of Godot and company splash screens, including animations and video playback, before transitioning to the main menu. Key features:

## Description

- Displays Godot splash screen with video
- Shows company splash screen with animation
- Handles timing for splash screen transitions
- Allows for skipping splash screens
- Preloads the main menu scene during splash screen display

## Methods

| | |
|---|---|
| `void` | [splash_finished](#method-splash-finished)() |

## Signals

### splash_finished_signal() {#signal-splash-finished-signal}

Emitted when the splash screens are done.

## Method descriptions

### void splash_finished() {#method-splash-finished}

Sets the flag to indicate splash screens are finished

