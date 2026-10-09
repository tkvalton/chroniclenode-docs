<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MouseUtility

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

MouseUtility provides centralized functions for handling mouse interaction with the 3D world. It handles various methods of obtaining mouse position and intersections with the game world, including special handling for Terrain3D nodes.

## Methods

| | |
|---|---|
| `void` | [freeze_pointer](#method-freeze-pointer)( `screen_position: Vector2` ) *static* |
| `void` | [unfreeze_pointer](#method-unfreeze-pointer)() *static* |
| `bool` | [is_pointer_frozen](#method-is-pointer-frozen)() *static* |
| `Vector2` | [get_pointer_position](#method-get-pointer-position)() *static* |
| `Vector3` | [get_mouse_world_position](#method-get-mouse-world-position)( `collision_mask: int = 0xFFFFFFFF` ) *static* |
| `Dictionary` | [get_mouse_collision_info](#method-get-mouse-collision-info)( `collision_mask: int = 0xFFFFFFFF, collide_with_areas: bool = false, collide_with_bodies: bool = true` ) *static* |
| `Dictionary` | [get_collision_from_screen_position](#method-get-collision-from-screen-position)( `screen_position: Vector2, collision_mask: int = 0xFFFFFFFF, collide_with_areas: bool = false, collide_with_bodies: bool = true` ) *static* |
| `Dictionary` | [get_terrain_intersection](#method-get-terrain-intersection)( `from: Vector3, normal: Vector3` ) *static* |
| `Camera3D` | [get_viewport_camera](#method-get-viewport-camera)() *static* |
| `Viewport` | [get_viewport](#method-get-viewport)() *static* |
| `Vector2` | [get_global_mouse_position](#method-get-global-mouse-position)() *static* |

## Method descriptions

### void freeze_pointer( screen_position: Vector2 ) {#method-freeze-pointer}

*No description yet.*

### void unfreeze_pointer() {#method-unfreeze-pointer}

*No description yet.*

### bool is_pointer_frozen() {#method-is-pointer-frozen}

*No description yet.*

### Vector2 get_pointer_position() {#method-get-pointer-position}

The screen position of the pointer for picking: the live mouse position, or the frozen press position while the cursor is captured for mouse-look

### Vector3 get_mouse_world_position( collision_mask: int = 0xFFFFFFFF ) {#method-get-mouse-world-position}

Gets the world position of the mouse cursor using physics raycast with fallback to terrain heightmap

### Dictionary get_mouse_collision_info( collision_mask: int = 0xFFFFFFFF, collide_with_areas: bool = false, collide_with_bodies: bool = true ) {#method-get-mouse-collision-info}

Gets collision information for the mouse cursor position

### Dictionary get_collision_from_screen_position( screen_position: Vector2, collision_mask: int = 0xFFFFFFFF, collide_with_areas: bool = false, collide_with_bodies: bool = true ) {#method-get-collision-from-screen-position}

Gets collision information from a specific screen position

### Dictionary get_terrain_intersection( from: Vector3, normal: Vector3 ) {#method-get-terrain-intersection}

Special function to handle Terrain3D intersection

### Camera3D get_viewport_camera() {#method-get-viewport-camera}

Utility function to get the viewport camera

### Viewport get_viewport() {#method-get-viewport}

Helper function to get the current viewport

### Vector2 get_global_mouse_position() {#method-get-global-mouse-position}

Helper function to get mouse screen position

