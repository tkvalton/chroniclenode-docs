<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpaceVolume

**Inherits:** [Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)

**Inherited by:** [AudioZone](/advanced/world/runtime/audio-zone), [MovementVolume](/advanced/world/runtime/movement-volume), [Spawner](/advanced/world/runtime/spawner), [ZoneVolume](/advanced/world/runtime/zone-volume)

A space in a world, given by the shape of its CollisionShape3D child (a box, sphere, cylinder or capsule). It is the base of the volumes that watch where the camera or an entity is: the MovementVolume and the AudioZone. It knows where its surface (the top of the shape) is and whether a point or the camera is inside.

## Properties

| | | |
|---|---|---|
| `Color` | [debug_color](#prop-debug-color) | `Color(0.0, 0.0, 0.0, 0.0):` |

## Variables

| | | |
|---|---|---|
| `Array[Entity]` | [entities_inside](#var-entities-inside) | `[]` |

## Methods

| | |
|---|---|
| `float` | [get_surface_y](#method-get-surface-y)() |
| `bool` | [contains_point](#method-contains-point)( `world_point: Vector3` ) |
| `bool` | [is_camera_inside](#method-is-camera-inside)( `below_surface_only: bool = false` ) |

## Property descriptions

*Editor*

### Color debug_color = Color(0.0, 0.0, 0.0, 0.0): {#prop-debug-color}

The colour of the shape of this volume in the editor (and with Visible Collision Shapes): choose one to tell your volumes apart. A clear colour (alpha 0) leaves the colour Godot gives a shape

## Variable descriptions

### Array[Entity] entities_inside = [] {#var-entities-inside}

The entities (players, NPCs, pets) that are inside the volume now. Filled while the game runs, for a volume that watches entities

## Method descriptions

### float get_surface_y() {#method-get-surface-y}

The height of the surface (the top of the shape) in the world

### bool contains_point( world_point: Vector3 ) {#method-contains-point}

Is a world point inside the shape of the volume? (for the camera: it is not a body)

### bool is_camera_inside( below_surface_only: bool = false ) {#method-is-camera-inside}

Is the camera of the viewport inside the volume? With `below_surface_only` a camera above the surface (the top of the shape) is not

