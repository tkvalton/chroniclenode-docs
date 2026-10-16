<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DriveLogic

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [VehicleDriveLogic](/advanced/entities/mounts/vehicle-drive-logic), [WalkDriveLogic](/advanced/entities/mounts/walk-drive-logic)

How the player steers a mount or a vehicle. The logic gets the keys every physics frame and moves the body of the mount (a creature or a vehicle), the way a controller logic moves the player. Make your own by extending this class: override `drive` (and `begin` and `end` if it keeps a state), put the script in a Mount or Vehicle interaction (Custom drive logic path) and it is used instead of the ones that come with the toolkit.

## Description

The body is moved through its NavigationController (`session.set_move`), so gravity, swimming and flying work as for any entity.

## Variables

| | | |
|---|---|---|
| `MountSession` | [session](#var-session) |  |

## Methods

| | |
|---|---|
| `void` | [begin](#method-begin)( `p_session: MountSession` ) |
| `void` | [drive](#method-drive)( `_input: Vector2, _delta: float` ) |
| `void` | [end](#method-end)() |
| `float` | [get_top_speed](#method-get-top-speed)() |

## Variable descriptions

### MountSession session {#var-session}

The mount session this logic belongs to (set when the rider gets on)

## Method descriptions

### void begin( p_session: MountSession ) {#method-begin}

The rider got on. Override to set up a state

### void drive( _input: Vector2, _delta: float ) {#method-drive}

Every physics frame while the rider is on. `input` is the move keys (x right, y forward, each -1 to 1), zero when the player does not steer this rider. Override this

### void end() {#method-end}

The rider got off. Override to clean up

### float get_top_speed() {#method-get-top-speed}

The speed of the body of the mount (its movement speed stat) times the multiplier of the mount

