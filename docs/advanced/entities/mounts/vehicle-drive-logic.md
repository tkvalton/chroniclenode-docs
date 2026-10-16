<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VehicleDriveLogic

**Inherits:** [DriveLogic](/advanced/entities/mounts/drive-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The way a cart, a tank or a boat is steered: W and S speed up and brake or reverse, A and D turn. The vehicle keeps its speed when no key is pressed and slows down with its braking; it turns faster the faster it goes (it cannot spin on the spot). The numbers are the fields of the Vehicle (acceleration, braking, turning rate, reverse speed).

## Methods

| | |
|---|---|
| `void` | [begin](#method-begin)( `p_session: MountSession` ) |
| `void` | [drive](#method-drive)( `input: Vector2, delta: float` ) |
| `void` | [end](#method-end)() |
| `float` | [get_speed](#method-get-speed)() |

## Method descriptions

### void begin( p_session: MountSession ) {#method-begin}

The rider got on. Override to set up a state *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### void drive( input: Vector2, delta: float ) {#method-drive}

Every physics frame while the rider is on. `input` is the move keys (x right, y forward, each -1 to 1), zero when the player does not steer this rider. Override this *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### void end() {#method-end}

The rider got off. Override to clean up *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### float get_speed() {#method-get-speed}

The speed the vehicle has now (negative in reverse)

