<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CameraAimProvider

**Inherits:** [AimProvider](/advanced/game-settings/camera-and-controller/aim-provider) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Aims through the camera: the ray from the screen centre (the crosshair) while the mouse is captured for mouse-look, otherwise the ray under the mouse pointer (which is also what a point-and-click game wants). See AimProvider.

## Variables

| | | |
|---|---|---|
| `bool` | [always_use_screen_center](#var-always-use-screen-center) | `false` |

## Methods

| | |
|---|---|
| `Dictionary` | [get_aim](#method-get-aim)( `entity: Entity, max_range: float` ) |

## Variable descriptions

### bool always_use_screen_center = false {#var-always-use-screen-center}

Use the screen centre even when the mouse is not captured (a game with a fixed crosshair)

## Method descriptions

### Dictionary get_aim( entity: Entity, max_range: float ) {#method-get-aim}

*Overrides this function of [AimProvider](/advanced/game-settings/camera-and-controller/aim-provider).*

