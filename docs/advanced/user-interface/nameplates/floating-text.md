<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FloatingText

**Inherits:** [Label](https://docs.godotengine.org/en/stable/classes/class_label.html)

A short text that floats up from an entity's nameplate marker and fades out: damage numbers, "Dodge", "Immune", heals. It follows the marker on screen while it rises (the camera may move), independent of the nameplate itself (which can be hidden by the settings). Created by the NameplateManager from the combat results.

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `anchor: Node3D, camera_controller: CameraController, text_to_show: String, color: Color, jitter: Vector2 = Vector2.ZERO` ) |

## Constants

- `float` **DURATION** = `1.1`
- `float` **RISE** = `48.0` - How far it rises, in pixels

## Method descriptions

### void setup( anchor: Node3D, camera_controller: CameraController, text_to_show: String, color: Color, jitter: Vector2 = Vector2.ZERO ) {#method-setup}

Starts the text over `anchor` (a Node3D, usually the entity's nameplate marker)

