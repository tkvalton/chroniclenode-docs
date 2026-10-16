<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VehicleDriveLogic

**Inherits:** [DriveLogic](/advanced/entities/mounts/drive-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The way a cart, a tank or a boat is steered: W and S speed up and brake or reverse, A and D turn. The vehicle keeps its speed when no key is pressed and slows down with its braking; it turns faster the faster it goes (it cannot spin on the spot).

## Properties

| | | |
|---|---|---|
| `float` | [acceleration](#prop-acceleration) | `6.0` |
| `float` | [braking](#prop-braking) | `10.0` |
| `float` | [turn_rate_degrees](#prop-turn-rate-degrees) | `90.0` |
| `float` | [reverse_speed_share](#prop-reverse-speed-share) | `0.4` |

## Methods

| | |
|---|---|
| `Dictionary` | [get_field_descriptions](#method-get-field-descriptions)() |
| `String` | [get_drive_type_name](#method-get-drive-type-name)() |
| `String` | [get_drive_type_description](#method-get-drive-type-description)() |
| `void` | [begin](#method-begin)( `p_session: MountSession` ) |
| `void` | [drive](#method-drive)( `input: Vector2, delta: float` ) |
| `void` | [end](#method-end)() |
| `float` | [get_speed](#method-get-speed)() |

## Property descriptions

### float acceleration = 6.0 {#prop-acceleration}

How fast it speeds up (units per second, each second)

### float braking = 10.0 {#prop-braking}

How fast it slows down when the brake is pressed (units per second, each second). With no key it slows down at half of this

### float turn_rate_degrees = 90.0 {#prop-turn-rate-degrees}

How fast it turns at full speed (degrees per second)

### float reverse_speed_share = 0.4 {#prop-reverse-speed-share}

How fast it can reverse, as a share of its top speed

## Method descriptions

### Dictionary get_field_descriptions() {#method-get-field-descriptions}

The sentences the editor shows as tooltips: &#123;name of an exported variable: text&#125;. A logic of your own adds its variables (call super and merge) *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### String get_drive_type_name() {#method-get-drive-type-name}

What this logic is called in the editor list *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### String get_drive_type_description() {#method-get-drive-type-description}

A sentence about how this logic steers, for the editor *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### void begin( p_session: MountSession ) {#method-begin}

The rider got on. Override to set up a state *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### void drive( input: Vector2, delta: float ) {#method-drive}

Every physics frame while the rider is on. `input` is the move keys (x right, y forward, each -1 to 1), zero when the player does not steer this rider. Override this *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### void end() {#method-end}

The rider got off. Override to clean up *(from [DriveLogic](/advanced/entities/mounts/drive-logic))*

### float get_speed() {#method-get-speed}

The speed the vehicle has now (negative in reverse)

