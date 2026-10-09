<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GameHost

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

GAME ROOT GLOBAL

## Description

GameHost serves as the central coordinator for the entire game runtime. As a global singleton, it manages state transitions, container lifecycles, input handling, pause systems, save/load coordination, and provides essential game infrastructure that's always available.

## Variables

| | | |
|---|---|---|
| `SystemHub` | [system_hub](#var-system-hub) |  |
| `bool` | [is_initialized](#var-is-initialized) | `false` |
| `Node` | [test_scene_detected](#var-test-scene-detected) | `null` |
| `String` | [original_main_scene](#var-original-main-scene) | `""` |

## Methods

| | |
|---|---|
| `void` | [handle_pause_menu_key](#method-handle-pause-menu-key)() |
| `void` | [handle_pause_menu_transition](#method-handle-pause-menu-transition)() |

## Enumerations

### enum PauseType {#enum-pausetype}

- **NONE** = `0`
- **MENU_PAUSE** = `1`
- **POPUP** = `2`

## Variable descriptions

### SystemHub system_hub {#var-system-hub}

SystemRefs

### bool is_initialized = false {#var-is-initialized}

Init Flag

### Node test_scene_detected = null {#var-test-scene-detected}

Test Scenes

### String original_main_scene = "" {#var-original-main-scene}

*No description yet.*

## Method descriptions

### void handle_pause_menu_key() {#method-handle-pause-menu-key}

Handle pause menu key (ESC) in main game

### void handle_pause_menu_transition() {#method-handle-pause-menu-transition}

Handle pause menu state transitions

