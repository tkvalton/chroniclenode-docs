<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Shelter

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Questions about the shelter volumes of the world: how sheltered is a point, by which volume. The weather system asks it for the camera (the screen look, the sound) and for entities (the exposed effects).

## Methods

| | |
|---|---|
| `ShelterVolume` | [volume_at](#method-volume-at)( `tree: SceneTree, point: Vector3` ) *static* |
| `float` | [amount_at](#method-amount-at)( `tree: SceneTree, point: Vector3` ) *static* |
| `bool` | [protects_at](#method-protects-at)( `tree: SceneTree, point: Vector3` ) *static* |
| `Variant` | [camera_position](#method-camera-position)( `tree: SceneTree` ) *static* |
| `float` | [amount_at_camera](#method-amount-at-camera)() *static* |

## Method descriptions

### ShelterVolume volume_at( tree: SceneTree, point: Vector3 ) {#method-volume-at}

The best shelter at a point: the volume with the most amount among those the point is inside (ties: the first). Null when the point is in the open

### float amount_at( tree: SceneTree, point: Vector3 ) {#method-amount-at}

How sheltered a point is: the amount of its best shelter (0 in the open)

### bool protects_at( tree: SceneTree, point: Vector3 ) {#method-protects-at}

Is an entity at this point protected from the exposed effects of the weather? (inside a volume that protects, whose amount is above 0)

### Variant camera_position( tree: SceneTree ) {#method-camera-position}

The position of the camera of the game (null when there is none)

### float amount_at_camera() {#method-amount-at-camera}

How sheltered the camera of the game is now (0 in the open): what the screen look and the condition Is sheltered use

