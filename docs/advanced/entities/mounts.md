# Mounts and vehicles: how they are built

This page is for developers. For the fields and the way to use them, see [Mounts and vehicles](/basic/entities/mounts).

All three ways to ride use the same piece, a **ride** (`MountSession`), which belongs to the rider. What differs is who starts it and whether there is a creature to carry the rider.

## The pieces

| Piece | What it does |
|---|---|
| [`MountConfig`](/advanced/entities/mounts/mount-config) | What a mount is: movement, speed, steering, the seat, the pose. A `Resource` that the effect and the interactions fill from their own fields (`MountConfig.from_object(source)` copies each field by name) |
| [`MountSession`](/advanced/entities/runtime/mount-session) | One ride. Made by `MountSession.begin(rider, config, mount, drive_logic)` (or `Entity.start_mount`), freed by `dismount()` |
| [`DriveLogic`](/advanced/entities/mounts/drive-logic) | How the player steers a mount. [`WalkDriveLogic`](/advanced/entities/mounts/walk-drive-logic) and [`VehicleDriveLogic`](/advanced/entities/mounts/vehicle-drive-logic) come with the toolkit; yours extends the base |
| [`MountEffect`](/advanced/abilities-and-effects/effects-movement/mount-effect) | A mount that is only a model: starts the ride on the target and ends it with the effect |
| [`MountInteraction`](/advanced/entities/interactions/mount-interaction), [`VehicleInteraction`](/advanced/entities/interactions/vehicle-interaction) | The player gets on the NPC they belong to |
| [`Entity`](/advanced/entities/runtime/entity) | `start_mount`, `dismount`, `is_mounted`, `is_ridden`, `is_carried_by_mount`, `get_mount`, `get_rider` |
| [`MovementClaim`](/advanced/entities/runtime/movement-claim) | Swimming, flying and boats are claims on the body that moves (see [movement volumes](/advanced/world/movement-volumes#claims)). A mount's claim has priority 10 so it wins over the claim of a water volume |

## The two kinds of ride

`MountSession.begin` takes an optional `mount` entity.

**Without a mount entity** (the effect): `_start_model`. The model of the creature (`definition.entity_model`, an NPC of the Database, scaled by its `model_scale`) is added as a child of the rider. The seat is its `mount_seat_remote` (a [`GeneralSkeleton`](/advanced/assets/rig/general-skeleton) with `has_mount_seat`), or the seat offset in the space of the model. The model of the rider (the rig component) is moved by the distance between the seat and its `rider_marker` (or its feet), and put back at the end. A claim on the **rider** gives the speed multiplier and swimming or flying. The rider keeps moving by itself; the [`WASDWithMouseLogic`](/advanced/game-settings/camera-and-controller/wasd-with-mouse-logic) is untouched.

**With a mount entity** (the interactions): `_start_carried`. The rider is **carried**:

1. Its collision layer and mask are saved and set to 0, and its velocity to 0.
2. `Entity.is_carried_by_mount()` is true, so [`NavigationController.process_physics`](/advanced/behaviors/states/navigation-controller) does nothing for the rider (it stops moving by itself), and `WASDWithMouseLogic` skips the movement, jump and crouch input.
3. The behavior of the mount waits (`pause_behavior`) and its navigation controller is put under the control of the session.
4. A claim on the **mount** (priority 10) gives swimming, flying or a boat. The speed of the mount is its movement speed stat times `speed_multiplier`: `MountSession.get_top_speed()`.
5. Every physics frame (`process_physics_priority` 100, after the entities have moved) the session reads the keys, asks the drive logic to move the mount and puts the rider on the seat: `rider.global_transform = get_seat_transform()`.

The keys are only read when the player controls the rider (`is_controlled_by_player()`: `party_manager.current_player == rider`). A rider who is a companion or an NPC is not steered by the keys.

Ending (`dismount`): the pose stops, the drive logic's `end()` is called, the claim goes, the collision is restored, the rider is put 1.6 m to the right of the mount, the mount's behavior resumes and its navigation is freed, the model is freed, and `dismounted` is emitted. A ride also ends when the rider or the mount dies (`entity_died`), when the rider is hurt (`dismount_on_damage`), when the dismount key is pressed (the action `dismount`, if the project has it), and when the session leaves the tree.

## Steering

`MountSession.set_move(input, speed, forward)` is the one door to the body of the mount: it puts the navigation controller in direct input mode and gives it the keys, the speed and the direction forward, exactly as the player controller does for the player. With a zero input it leaves direct input mode.

| Logic | What it does |
|---|---|
| `WalkDriveLogic` | The direction of the keys relative to the camera (`session.get_camera_direction`, along the pitch of the camera when the mount swims or flies); the mount turns to face it at `turn_speed`; speed is the top speed |
| `VehicleDriveLogic` | A speed that approaches the throttle with `acceleration`, brakes with `braking` (and half of it when no key is pressed), reverses up to `reverse_speed_share`; the yaw changes with the A and D keys times the speed share, so it cannot spin on the spot |

### Your own steering

Extend `DriveLogic`, override `drive` (and `begin` and `end` if you keep a state) and either give its script path in the *Custom drive logic path* of the interaction, or pass an instance to `start_mount`:

```gdscript
class_name HoverDrive extends DriveLogic

func drive(input: Vector2, delta: float) -> void:
	# input.x is right, input.y is forward (zero when the player does not steer this rider)
	var forward: Vector3 = -session.mount.global_transform.basis.z
	session.mount.rotation.y -= input.x * 2.0 * delta
	session.set_move(Vector2(0.0, input.y), get_top_speed(), forward)
```

The `session` has the rider, the mount, the config and helpers: `get_top_speed()`, `get_camera_direction()`, `is_body_free_moving()`, `get_seat_transform()`.

## Boats

A boat is `Movement.BOAT`. The session looks, every frame, for a **movement volume with a surface** under the body (`MountSession.find_water_surface`, through the group `movement_volumes`). With water under it the claim is *Swim* with `surface_y` set, `float_depth` 0, `vertical_control` false and the idle buoyancy *Float up*: the body floats on the surface and ignores jump and crouch. With no water the claim is *Ground*, so a beached boat is on the ground. `MovementClaim.vertical_control` and `priority` are the two fields that were added for this.

## NPCs that ride

`Entity.start_mount` works for any entity, so a script can put an NPC on a creature:

```gdscript
var session: MountSession = rider_npc.start_mount(MountConfig.new(), steed_npc)
```

The keys do not steer it (the NPC is not the player's character): give the mount a `DriveLogic` that moves it however you want, or let the mount's own AI run by not pausing it in your own session.

## What is not built

Passengers (a list of seats with roles), abilities of the vehicle on the driver's action bar, a mount that fights while ridden, sending NPCs to mounts, saving a ride, a rebind row for the dismount key in the settings menu, and flying animations. The pieces above are the places to add them: a `seats` array on the session, an ability source on the mount, a flag that does not pause the behavior.

## Tests

`tests/mount_audit.gd` runs the real game: the config, claim priority, the effect (the model, the seat, the speed, ending, no second mount), flying and swimming mounts, a boat on water and on land, a creature (getting on, steering, the rider on the seat, stopping, the key, death, damage, dismount), a vehicle (acceleration, top speed, coasting, turning, braking, reversing, no spinning on the spot), a logic of your own, a flying creature, and who cannot ride. `tests/mount_editor_check.gd` covers the editor side.
