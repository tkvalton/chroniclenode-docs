# Movement volumes: how they are built

This page is for developers. For the fields and the way to use them, see [Movement volumes](/basic/world/movement-volumes).

A movement volume does not move anyone. It gives each entity inside a **claim** on its movement, and the entity (with its navigation controller and, for the player, the controller logic) does the rest. So **anything can ask for swimming or flying**, a volume, an effect, a mount, and several things can ask at once.

## The pieces

| Piece | What it does |
|---|---|
| [`MovementVolume`](/advanced/world/runtime/movement-volume) | The `Area3D`. Keeps the list of entities inside, gives each a claim, applies the effects, tells entities they are under water and tells the camera helper when the camera is in |
| [`MovementClaim`](/advanced/entities/runtime/movement-claim) | What something asks of the movement of an entity: a mode (Ground, Swim, Fly), a speed multiplier, a vertical speed, what to do when nobody steers, the surface |
| [`Entity`](/advanced/entities/runtime/entity) | The claims (`add_movement_claim`, `remove_movement_claim`), the resulting `movement_mode`, `is_swimming` and `is_flying`, the leap, and the **breath** |
| [`NavigationController`](/advanced/behaviors/states/navigation-controller) | Gravity and the vertical movement in a free mode (`_handle_free_vertical`), the speed multiplier, and the 3D direction of the direct input |
| [`WASDWithMouseLogic`](/advanced/game-settings/camera-and-controller/wasd-with-mouse-logic) | The vertical input (jump up, crouch down) and the movement along the camera pitch |
| [`MovementVolumeCamera`](/advanced/world/runtime/movement-volume-camera) | The look of the screen while the camera is inside: tint and fog; the stack of volumes |
| [`AudioProfileStack`](/advanced/world/runtime/audio-profile-stack) | The sound while the camera is inside: the `audio_profile` of the volume ([Audio zones](/advanced/world/audio-zones)) |
| [`BreathBarUI`](/advanced/user-interface/hud/breath-bar-ui) | The HUD bar of the breath of the current player |
| [`GameplayConfig`](/advanced/game-settings/config/gameplay-config) | The *Breath* group: who holds a breath, how long, how fast it returns, the drowning effect |

## Claims

An entity has a list of `MovementClaim`s, **one for each source** (the source is the volume or whatever else made it; a second claim of the same source replaces the first). The claim that **counts** is the one with the **highest mode** (Fly over Swim over Ground); of two equal ones the later wins.

```gdscript
var claim := MovementClaim.new(self, MovementClaim.Mode.FLY)
claim.vertical_speed = 5.0
claim.speed_multiplier = 1.5
entity.add_movement_claim(claim)      # it flies
entity.remove_movement_claim(self)    # it walks again
```

| On `Entity` | |
|---|---|
| `movement_mode` | `GROUND`, `SWIM` or `FLY`: from the active claim |
| `is_swimming` | **True in any free mode** (swim and fly). The animations read it |
| `is_flying` | True only for `FLY` |
| `is_free_moving()` | Swim or fly: gravity is off and the entity moves in 3D |
| `get_active_movement_claim()` | The claim that counts, or `null` (also while the claims are suspended) |
| `get_movement_speed_multiplier()` | The multiplier of the active claim, `1` with none. A **Ground** claim only changes the speed: it is how wading works |
| `suspend_movement_claims(seconds)` | All claims are ignored for a moment (used by the leap) |
| `leap_out_of_water()` | Only where the active claim allows it and the entity is near the surface: an upward speed and a 0.6 second suspension |
| `movement_mode_changed(old, new)` | Emitted when the mode changes |

### What a free mode does

In a free mode `NavigationController._handle_gravity_and_falling` does not apply gravity: `_handle_free_vertical` sets the vertical speed instead.

1. With **vertical input** (set each frame by the controller logic) the target speed is the input times `vertical_speed`, plus the vertical part of the direct input (the camera pitch).
2. With **none**, the target comes from the claim's `idle_buoyancy`: *Hover* is 0, *Float up* is a pull towards `surface_y - float_depth`, *Sink* is a slow fall.
3. Going **up** is limited so the entity stops at `surface_y - surface_stop_depth`: the limit slows it down as it nears, so it does not drift out of the water.
4. The speed approaches the target at 14 units per second squared.

The WASD controller logic reads the claim: forward is the **camera forward in 3D** when the claim `follows_camera_pitch` and the camera is not a top-down one; crouch is for going down (it does not crouch); the speed is multiplied by `get_movement_speed_multiplier()`. The same multiplier is applied in `NavigationController._begin_move` for everything else that moves (companions, NPCs).

## The volume

`MovementVolume` is an `Area3D`. In the game it sets its own collision layers (it **sees** the player characters, NPCs and pets) and listens to `body_entered` and `body_exited`. Every second `_reconcile` checks the overlapping bodies, in case the engine missed one (a body that was inside when the volume started, or a teleport). Each physics frame, for every entity inside:

1. `_refresh_claim` works out the **mode**: for a Swim volume with a surface and a wade depth the entity **swims** from a depth of `wade_depth` and **wades** (a Ground claim with `wade_speed_multiplier`) until it is under `wade_depth / 2` again. A claim is made when the mode changes; its numbers are **read again every frame**, so changing a field of a running volume reaches the entities inside.
2. `_update_breath` tells the entity it is **submerged** if the volume says so (Always inside, or the head under the surface: `feet y + head_height < surface`).
3. Every `EFFECT_CHECK_INTERVAL` (0.5 s) `_apply_effects` puts the **effects** of the list on the entity if it does not have them.

When an entity leaves, or the volume is removed from the tree, `_release` takes the claim away, takes the effects off (`remove_effect` on each instance) and clears the submerged flag.

The **surface** is the top of the first `CollisionShape3D` child (`get_surface_y()`: a box, sphere, cylinder or capsule; another shape gives the position of the volume) and is read each frame. `contains_point(point)` answers for the camera.

A preset is applied when the `preset` property is set **while the node is in the tree** (someone picked it in the inspector), never while a scene loads, so the saved fields survive.

## Breath

The breath is a property of the **entity**, not of the volume: anything that holds an entity under water (a volume, a script) uses it.

| On `Entity` | |
|---|---|
| `uses_breath()` | The Gameplay Config says who (*Breath users*: nobody, players or everyone); `breath_exempt` (set it from a script or an effect) says never |
| `set_submerged(true)` | Call it **every physics frame** the entity is under water. If you stop calling it, the breath recovers |
| `get_breath()`, `get_breath_maximum()` | Seconds left and in all (*Breath duration*) |
| `is_drowning()` | The breath is 0 |
| `restore_breath()` | Fills it at once and ends the drowning |
| `breath_changed(current, maximum)`, `drowning_changed(is_drowning)` | Signals for interfaces |

Each frame `_update_breath(delta)` takes `delta` off the breath while submerged and gives `delta × Breath recovery speed` back otherwise. At 0 the entity is drowning: the **drowning effect** (an effect id of the Gameplay Config) is spawned on it, and it is removed when the breath is above 0 again. A full breath is stored as `-1` and **not saved**; a lower one is saved (`breath`) with the entity, so a saved game under water comes back with its breath.

## The camera

A volume with **Camera effect enabled** checks, each physics frame, whether the camera of the viewport is inside its shape (and not above its surface). On entering it calls `MovementVolumeCamera.enter(volume)`, on leaving `leave(volume)`. `MovementVolumeCamera` keeps a **stack** of volumes and applies the top one:

- a `ColorRect` in a `CanvasLayer` (layer 90) with the tint;
- the **fog** of the environment of the camera (or of the world; one is made and put back if there is none), with the original values saved;
The **sound** is a separate matter: the volume calls `AudioProfileStack` with its `audio_profile` ([Audio zones](/advanced/world/audio-zones)), so it works with the camera effect switched off and never touches the master bus.

When the stack is empty everything is put back. `MovementVolumeCamera.reset()` clears it (a scene that is left).

## Giving an entity flight

Flight is a claim from something else. Anything that knows when it starts and ends (a script of an effect, an event, a mount) adds the claim and takes it away by its source:

```gdscript
var claim := MovementClaim.new(self, MovementClaim.Mode.FLY)
claim.vertical_speed = 6.0
claim.speed_multiplier = 1.5
entity.add_movement_claim(claim)      # it flies
entity.remove_movement_claim(self)    # it walks again
```

A claim with no surface (`surface_y = INF`, the default) has no ceiling and no float.

The built-in way is the **Flight effect** (`FlightEffect`): it makes one claim per effect instance with its settings, and the **Land effect** (`LandEffect`) ends flights. A claim can also carry a **`logic`** (a `FlightLogic`): once per physics frame, just before the entity is moved, `logic.shape_velocity(delta)` may change `entity.velocity` (momentum, a glide). Extend `FlightLogic` and choose the script in the Flight effect; each entity gets its own copy. The claim has `use_air_animations` (play the fly animations) and `animation_override` (one pose animation). See [Flying](/basic/world/flying#your-own-flight).

## Navigation

`MovementVolume.navigation` (`NavigationRule`: `WALK_THROUGH`, `AVOID_WHEN_DEEP`, `NEVER`) is read by the navigation bake, not at run time. `NavigationVolumes` (`runtime_classes/world/terrain/navigation_volumes.gd`) does the work, on the main thread, tile by tile, in cells of 2 m (the layout of the hole mask of a tile):

- `collect(root)` finds the volumes under a node whose rule is not Walk Through and that do not work on players only.
- `compute_tile(volumes, coord, height_at)` returns `{"never", "deep", "water"}`: the mask of the cells of a Never volume, the mask of the cells where the surface is higher than the ground by more than the volume's wade depth, and the triangles of the surface over those cells.
- `blocked_for(data, domain)` is the mask a domain loses: Never for everybody, Never and deep for `DOMAIN_LAND`.
- `fingerprint(data)` is the number the bake keeps with the tile (combined with the number of the objects, `TerrainNavigation.combine_fingerprints`; a tile counts its eight neighbours too, because a bake takes their cells in) and compares to see that a volume moved, changed or went.

`TerrainNavigation.bake_tile(tiles, coord, agent, objects, volumes)` takes the masks into `build_source` (they are added to the painted not-walkable cells) for the amphibious and land classes, and for a `DOMAIN_WATER` class it bakes only the surface triangles (no ground, no objects). The agent classes have a `domain` and a key suffix (`""`, `_land`, `_water`); `TerrainConfig.get_navigation_classes()` adds the land and water classes for the shapes some NPC of that domain has. `TerrainData.get_navigation_class_for_shape(shape, domain)`, `ChronicleTerrain.get_navigation_map(shape, domain)` and the navigation controller (`navigation_domain`) pick the class, falling back to the amphibious one when a domain was not baked. A water-only entity that is not swimming is "stranded": the controller keeps it still and the stall check ends its move with `path_failed`.

## What is not done

- **NPC navigation in 3D.** NPCs get the claims, the animations and the speed, but their pathfinding is the flat navigation mesh of the world (and, for the water creatures, a flat mesh over the surface of the deep water).
- **Obstacle avoidance and a ceiling** for flyers: see [Flying: what is planned](/planned/flying).
- **Water currents** and **buoyancy that depends on the weight** are not part of it.

## Tests

`tests/terrain_navigation_volumes_audit.gd` (44 checks) covers the masks, the domains, the meshes and the stale detection of the bake tool; `tests/npc_navigation_domain_audit.gd` runs the real game (a water creature on land stays, in the pond it swims to its goal); `tests/npc_swim_path_audit.gd` the swimmers following the path.

`tests/movement_volume_audit.gd` runs the real game: the claims, the volume shapes and presets, swimming, wading and its hysteresis, up and down, the leap, the weightless room, who the volume works on, effects, the breath and the drowning (with the HUD bar), the camera look and its stack, and the saving of the breath. `tests/movement_volume_editor_check.gd` covers the editor side: the Breath group, the inspector fields, the presets, the warnings and a volume saved into a scene.
