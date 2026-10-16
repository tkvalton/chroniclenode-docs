<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SeatAI

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [DriverSeatAI](/advanced/entities/mounts/driver-seat-ai), [TurretSeatAI](/advanced/entities/mounts/turret-seat-ai)

What acts for a seat when the player does not: a companion or an NPC that sits in it, or nobody (a tank crewed by AI). Every physics frame the AI is asked for the move input of the seat, the same x (right) and y (forward) that the keys of the player give, and it can do other things with the helpers of the ride (aim a turret, cast an ability). A DriverSeat's input goes to the drive logic of the mount, so an AI tank turns like a tank that a player drives. A script that extends SeatAI in the folder data_classes/mount/seat_ai/ is found by the Mounts editor and can be chosen there; its exported variables appear in the editor.

## Description

The AI is active when the seat is not controlled by the player: the character in control sitting in the seat takes it over, and the AI takes it back when that character gets up or another character is put in control.

## Variables

| | | |
|---|---|---|
| `MountSession` | [session](#var-session) |  |

## Methods

| | |
|---|---|
| `String` | [get_ai_type_name](#method-get-ai-type-name)() |
| `String` | [get_ai_type_description](#method-get-ai-type-description)() |
| `Dictionary` | [get_field_descriptions](#method-get-field-descriptions)() |
| `void` | [begin](#method-begin)( `p_session: MountSession` ) |
| `Vector2` | [think](#method-think)( `_delta: float` ) |
| `void` | [end](#method-end)() |

## Variable descriptions

### MountSession session {#var-session}

The ride this AI belongs to (set when it starts)

## Method descriptions

### String get_ai_type_name() {#method-get-ai-type-name}

What this AI is called in the editor list

### String get_ai_type_description() {#method-get-ai-type-description}

A sentence about what this AI does, for the editor

### Dictionary get_field_descriptions() {#method-get-field-descriptions}

The sentences the editor shows as tooltips: &#123;name of an exported variable: text&#125;. An AI of your own adds its variables (call super and merge)

### void begin( p_session: MountSession ) {#method-begin}

The AI starts (the rider sits, or the crew takes the seat). Override to set up a state

### Vector2 think( _delta: float ) {#method-think}

Every physics frame while the AI acts. Return the move input of the seat (x right, y forward, each -1 to 1). Override this

### void end() {#method-end}

The AI stops (the rider gets up, a player takes the seat). Override to clean up

