<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MiniMap

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

MinimapCamera is a specialized camera used for rendering a top-down view of the game world, typically displayed as a minimap in the user interface. It follows the main camera's position but maintains a fixed height and offset.

## Description

Key features:

- Follows the x and z position of the main camera
- Maintains a fixed y position for a consistent top-down view
- Uses a fixed offset from the main camera's z position
- Updates its position every frame to stay in sync with the main camera

This camera is designed to work in conjunction with a separate render layer for the minimap, providing players with an overview of their surroundings without affecting the main game view.

## Variables

| | | |
|---|---|---|
| `CameraController` | [camera_controller](#var-camera-controller) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `system_hub: GameHost.SystemHub` ) |

## Variable descriptions

### CameraController camera_controller {#var-camera-controller}

Ref to the camrea container

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*Overrides this function of [HUDUIElement](/advanced/user-interface/hud/hudui-element).*

