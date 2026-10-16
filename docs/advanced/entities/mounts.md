# Mounts and vehicles: how they are built

This page is for developers. For the fields and the way to use them, see [Mounts and vehicles](/basic/entities/mounts).

A mount is a `MountDefinition` of the Database. A rider sits on one **seat** of it, and the sitting is one object, a **ride** (`MountSession`), that belongs to the rider. The three ways to ride (the effect, the interaction, a script) only differ in who starts the ride and whether there is a creature to carry the rider.

## The pieces

| Piece | What it does |
|---|---|
| [`MountDefinition`](/advanced/entities/mounts/mount-definition) | A database resource (type `mount`, saved in `src/data/mounts/`): the model creature, the movement, the speed, the steering (`drive_logic`), the seats (`seats`), dismount on damage, the mount animations |
| [`Seat`](/advanced/entities/mounts/seat) | A place for a rider. A resource: name, marker, offset, pose, `controls_movement`, the action bar slots. Override `can_enter`, `on_enter`, `on_exit` and `process`. [`DriverSeat`](/advanced/entities/mounts/driver-seat) and [`PassengerSeat`](/advanced/entities/mounts/passenger-seat) come with the toolkit |
| [`TurretSeat`](/advanced/entities/mounts/turret-seat) | A seat with a turret: `aim_at`, `aim_in_direction`, `is_aimed`, `get_aim_direction`; a node of the model turns to follow the aim, a player aims with the camera |
| [`SeatAI`](/advanced/entities/mounts/seat-ai) | What acts for a seat that the player does not: `think(delta)` returns the move input of the seat. [`DriverSeatAI`](/advanced/entities/mounts/driver-seat-ai) and [`TurretSeatAI`](/advanced/entities/mounts/turret-seat-ai) come with the toolkit |
| [`MountCrew`](/advanced/entities/runtime/mount-crew) | Keeps a ride with no rider on every seat of an NPC vehicle that has an AI that acts when empty |
| [`SeatAbilitySlot`](/advanced/entities/mounts/seat-ability-slot) | One slot of the action bar that a seat takes over: a number, an ability and whether to grant it |
| [`DriveLogic`](/advanced/entities/mounts/drive-logic) | How the player steers a mount. [`WalkDriveLogic`](/advanced/entities/mounts/walk-drive-logic) and [`VehicleDriveLogic`](/advanced/entities/mounts/vehicle-drive-logic) come with the toolkit |
| [`MountSession`](/advanced/entities/runtime/mount-session) | One rider on one seat. `MountSession.begin(rider, definition, mount, drive_logic, seat_index)` (or `Entity.start_mount`), freed by `dismount()` |
| [`MountClasses`](/advanced/entities/mounts/mount-classes) | Finds the seat and the steering classes in their folders, for the editor |
| [`MountEffect`](/advanced/abilities-and-effects/effects-movement/mount-effect) | A mount that is only a model: starts the ride on the target (seat 0) and ends it with the effect |
| [`MountInteraction`](/advanced/entities/interactions/mount-interaction) | The player sits on the first free seat of the NPC it belongs to |
| [`MountEditor`](/advanced/editor/entities/mount-editor), [`ResourcePropertyForm`](/advanced/editor/tools/resource-property-form) | The Mounts editor; and the form that shows the exported variables of any seat or steering class |
| [`Entity`](/advanced/entities/runtime/entity) | `start_mount`, `dismount`, `is_mounted`, `is_ridden`, `is_carried_by_mount`, `get_mount`, `get_rider`, `get_riders`, `is_seat_taken`, `get_free_seat_index` |
| [`MovementClaim`](/advanced/entities/runtime/movement-claim) | Swimming, flying and boats are claims on the body that moves (see [movement volumes](/advanced/world/movement-volumes#claims)). A mount's claim has priority 10 so it wins over the claim of a water volume |

## The two kinds of ride

`MountSession.begin` takes an optional `mount` entity and a `seat_index` (-1 = the first free seat).

**Without a mount entity** (the effect): `_start_model`. The model of the creature (`definition.model_entity_id`, an NPC of the Database, scaled by its `model_scale`) is added as a child of the rider. The seat is the node the seat names, the `mount_seat_remote` of a skeleton with `has_mount_seat`, or the seat offset. The model of the rider (the rig component) is moved by the distance between the seat and its `rider_marker` (or its feet), and put back at the end. A claim on the **rider** gives the speed multiplier and swimming or flying. The rider keeps moving by itself; [`WASDWithMouseLogic`](/advanced/game-settings/camera-and-controller/wasd-with-mouse-logic) is untouched.

**With a mount entity** (the interaction): `_start_carried`. The rider is **carried**:

1. Its collision layer and mask are saved and set to 0, and its velocity to 0.
2. `Entity.is_carried_by_mount()` is true, so [`NavigationController.process_physics`](/advanced/behaviors/states/navigation-controller) does nothing for the rider, and `WASDWithMouseLogic` skips the movement, jump and crouch input.
3. The mount keeps a list of its rides (`ridden_sessions`, one for each rider). When the **first** rider sits, the behavior of the mount waits (`pause_behavior`); when the **last** one leaves it resumes.
4. If the seat has `controls_movement`, a claim on the **mount** (priority 10) gives swimming, flying or a boat, a copy of the `drive_logic` of the definition is made for the ride (it keeps a state) and `begin`ed, and the keys go to it. The speed of the mount is its movement speed stat times `speed_multiplier`: `MountSession.get_top_speed()`.
5. Every physics frame (`process_physics_priority` 100, after the entities have moved) the session reads the keys, asks the logic to move the mount (steering seat) and the seat to `process`, and puts the rider on its seat: `rider.global_transform = get_seat_transform()`.

The keys are only read when the player controls the rider (`is_controlled_by_player()`). A rider who is a companion or an NPC is not steered by the keys, but its seat still gets `process` with a zero input.

Ending (`dismount`): the pose stops, `seat.on_exit()` is called (the action bar comes back), the logic's `end()` is called, the claim goes, the collision is restored, the rider is put 1.6 m to the right of the mount (the next seats on the left, then further back), the behavior of the mount resumes when no rider is left, the model is freed, and `dismounted` is emitted. A ride also ends when the rider or the mount dies (`entity_died`), when the rider is hurt (`dismount_on_damage`), when the dismount key is pressed (the action `dismount`, if the project has it), and when the session leaves the tree.

## Seats

A seat is a **copy** of the one in the definition (`duplicate(true)` at `begin`), so it can keep a state. The ride calls:

| Call | When |
|---|---|
| `can_enter(rider)` | Before the rider sits. Return false to refuse |
| `on_enter(session)` | The rider sits. The base puts the action bar slots on the bar |
| `process(input, delta)` | Every physics frame while the rider sits. `input` is the move keys of the player (zero when the player does not steer this rider) |
| `on_exit()` | The rider gets up. The base gives the bar back |

### The action bar

`Seat._cover_action_bar` uses the override stack of the player ([`Player.push_action_bar_override(slot, source, ability)`](/advanced/entities/runtime/player)) that the Action Bar Slot effect uses: each slot of `ability_slots` is covered with its ability (granted as an external ability if the player does not know it and `grant_ability` is on), and with `clears_other_slots` every other slot is covered with nothing. The source is the seat, so `on_exit` takes exactly its own overrides away, and what the player had on the slot (or another effect had put there) comes back. The abilities are the **rider's**: the rider casts them.

## AI for seats

The player's keys and an AI are two sources of the same thing, the **move input** of a seat. `MountSession._choose_control` decides every frame who acts (`MountSession.Acting`):

| `Acting` | When | Input of the seat |
|---|---|---|
| `PLAYER` | The rider is `party_manager.current_player` | The keys. The dismount key works |
| `AI` | Any other case, and the seat has a `SeatAI` | `seat.ai.think(delta)` |
| `NONE` | Any other case | Zero |

The driver logic, `seat.process(input, delta)` and the rest get the input without knowing where it came from. When the control changes the AI is `begin`ned or `end`ed, and the navigation of the mount is switched between **direct input** (a player steers) and **steered externally** (an AI steers).

### Steering the navigation

An AI driver cannot let the navigation move the body: the vehicle must move the way its drive logic says. `NavigationController.steered_externally` is the switch. While it is on, `process_physics` only applies gravity and the velocity the driver gave (`set_direct_movement_input`, as for a player's keys), and the navigation says **where it wants to go**: `get_steer_heading()` is the flat direction towards the next point of the path (or of what it follows). Reaching the end of the path still stops the navigation, so the behavior that sent it goes on. `DriverSeatAI` turns the angle between the front of the mount and that heading into steering and throttle.

Whose navigation? `MountSession.get_brain_navigation()`: the **rider's** if there is a rider (a companion that follows its leader keeps giving move orders to its own navigation, which no longer moves it because it is carried), the **mount's** when there is none (the NPC vehicle's own brain).

### The crew

`MountSession.begin_crew(mount, definition, seat_index)` makes a session with no rider (`rider` is null) on a seat that has an AI. It sits in `mount.crew_sessions` (not in `ridden_sessions`: a crew is not a rider, `is_ridden()` is false and the seat is not taken). `MountCrew` (a node of an NPC) keeps them: every 0.25 s it starts the crew of each seat that has an AI with `ai_runs_when_empty`, is not taken, and the mount is alive, and ends it when a **player character** is aboard (`get_riders()` has a `Player`) or the seat is taken. `Npc.setup_mount_crew()` makes it when the `interaction` of the NPC is a `MountInteraction` whose Mount has such a seat. The behavior of the mount is **not** paused for a crew (it is for riders), so its brain keeps choosing the target and the destination.

The abilities of a seat are cast by `session.get_caster()`: the rider, or the mount for a crew. `TurretSeatAI` reads the target from `session.get_ai_target()` (the rider's target, else the mount's) and uses the first ability of the seat that returns `OK` from `use_ability`.

### Your own AI

A script in `data_classes/mount/seat_ai/` that extends `SeatAI` is found by `MountClasses` and shown in the seat block of the Mounts editor, with its exported variables as fields:

```gdscript
class_name CircleDriverAI extends SeatAI
## Drives in circles (a guard vehicle on patrol)

@export_range(0.0, 1.0, 0.05) var turn: float = 0.5

func get_ai_type_name() -> String:
	return "Circle driver AI"

func think(_delta: float) -> Vector2:
	# x is right, y is forward: turn a little to the right while driving forward
	return Vector2(turn, 1.0)
```

## Your own seats and steering

A script in `data_classes/mount/seats/` that extends `Seat`, or in `data_classes/mount/drive_logic/` that extends `DriveLogic`, is found by `MountClasses` and shown in the Mounts editor. The editor lists it with the name it gives itself (`get_seat_type_name()` / `get_drive_type_name()`), and shows its **exported variables** as fields (`ResourcePropertyForm`: a bool, a number with its range, a String, an enum, a Vector3, a Color). Override `get_field_descriptions()` to give the fields tooltips (call `super` and merge).

```gdscript
class_name OfficerSeat extends Seat
## Only a rider of level 10 or more may sit here

func get_seat_type_name() -> String:
	return "Officer seat"

func can_enter(rider: Entity) -> bool:
	return rider.current_level >= 10
```

```gdscript
class_name HoverDrive extends DriveLogic

@export var height: float = 1.5

func get_drive_type_name() -> String:
	return "Hover"

func drive(input: Vector2, delta: float) -> void:
	# input.x is right, input.y is forward (zero when the player does not steer this rider)
	var forward: Vector3 = -session.mount.global_transform.basis.z
	session.mount.rotation.y -= input.x * 2.0 * delta
	session.set_move(Vector2(0.0, input.y), get_top_speed(), forward)
```

The folders are in the addon, like the folders of the controller logics and the interactions. The `session` has the rider, the mount, the definition and helpers: `get_top_speed()`, `get_camera_direction()`, `is_body_free_moving()`, `get_seat_transform()`, `set_move()`. You can also pass an instance of a logic to `start_mount` (`rider.start_mount(definition, mount, my_logic)`), which is used instead of the one of the definition.

## Steering

`MountSession.set_move(input, speed, forward)` is the one door to the body of the mount: it puts the navigation controller in direct input mode and gives it the keys, the speed and the direction forward, exactly as the player controller does for the player. With a zero input it leaves direct input mode.

| Logic | What it does |
|---|---|
| `WalkDriveLogic` | The direction of the keys relative to the camera (`session.get_camera_direction`, along the pitch of the camera when the mount swims or flies); the mount turns to face it at `turn_speed`; speed is the top speed |
| `VehicleDriveLogic` | A speed that approaches the throttle with `acceleration`, brakes with `braking` (and half of it when no key is pressed), reverses up to `reverse_speed_share`; the yaw changes with the A and D keys times the speed share, so it cannot spin on the spot |

## Boats

A boat is `Movement.BOAT`. The session looks, every frame, for a **movement volume with a surface** under the body (`MountSession.find_water_surface`, through the group `movement_volumes`). With water under it the claim is *Swim* with `surface_y` set, `float_depth` 0, `vertical_control` false and the idle buoyancy *Float up*: the body floats on the surface and ignores jump and crouch. With no water the claim is *Ground*, so a beached boat is on the ground.

## NPCs that ride

`Entity.start_mount` works for any entity, so a script can put an NPC on a creature (or a seat of a wagon with the `seat_index`):

```gdscript
var session: MountSession = rider_npc.start_mount(definition, steed_npc)
var passenger_session: MountSession = companion.start_mount(definition, wagon, null, 1)
```

The keys do not steer an NPC rider: give the mount a `DriveLogic` that moves it however you want, or let the mount's own AI run.

## What is not built

Hijacking (changing the faction of a vehicle that a player takes), sending NPCs to mounts, saving a ride, a rebind row for the dismount key in the settings menu, and flying animations. The places to add them: a faction change in `MountSession.begin`, a rule in the crew about who may sit.

## Tests

`tests/mount_audit.gd` runs the real game: the definition and its seats, claim priority, the effect, flying, swimming and boat mounts, a creature (getting on, steering, the seat, the key, death, damage), a vehicle (acceleration, top speed, turning, braking, reversing), a driver and a passenger (the seats, a full wagon, the driver leaving, the wagon dying), the action bar of a seat (a slot, the whole bar, giving it back), a logic and a seat of your own, a flying creature, a vehicle crewed by AI (it drives where the NPC is sent, turns and speeds up like a vehicle, the turret aims and fires, a player sitting silences the crew, a dead vehicle has none), an AI rider on a turret seat while the player drives, and a player aiming a turret with the camera, and who cannot ride. `tests/mount_editor_check.gd` covers the Mounts editor, the class lists (including scripts added to the folders) and the generic form.
