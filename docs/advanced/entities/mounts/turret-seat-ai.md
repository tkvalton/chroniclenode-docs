<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TurretSeatAI

**Inherits:** [SeatAI](/advanced/entities/mounts/seat-ai) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Aims the turret of its seat at the target and fires the abilities the seat lists. The target is the one of the rider (a companion's target) or, with nobody sitting, the one of the mount (the target its behavior picked). The abilities are cast by the rider, or by the mount when nobody sits, so they must be on that entity's abilities (a seat grants them to a rider; an NPC has them in its definition). Use it on a TurretSeat.

## Properties

| | | |
|---|---|---|
| `float` | [fire_range](#prop-fire-range) | `30.0` |
| `float` | [aim_tolerance_degrees](#prop-aim-tolerance-degrees) | `8.0` |
| `float` | [fire_interval](#prop-fire-interval) | `0.5` |

## Variables

| | | |
|---|---|---|
| `int` | [attempts](#var-attempts) | `0` |
| `int` | [successes](#var-successes) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_ai_type_name](#method-get-ai-type-name)() |
| `String` | [get_ai_type_description](#method-get-ai-type-description)() |
| `Dictionary` | [get_field_descriptions](#method-get-field-descriptions)() |
| `void` | [begin](#method-begin)( `p_session: MountSession` ) |
| `Vector2` | [think](#method-think)( `delta: float` ) |

## Property descriptions

### float fire_range = 30.0 {#prop-fire-range}

It fires only at targets nearer than this (units)

### float aim_tolerance_degrees = 8.0 {#prop-aim-tolerance-degrees}

It fires when the turret points within this many degrees of the target

### float fire_interval = 0.5 {#prop-fire-interval}

Seconds between two tries to fire (the abilities have their own cooldowns on top)

## Variable descriptions

### int attempts = 0 {#var-attempts}

How many times it tried to fire and how many times an ability was used (for tests and for your own code)

### int successes = 0 {#var-successes}

*No description yet.*

## Method descriptions

### String get_ai_type_name() {#method-get-ai-type-name}

What this AI is called in the editor list *(from [SeatAI](/advanced/entities/mounts/seat-ai))*

### String get_ai_type_description() {#method-get-ai-type-description}

A sentence about what this AI does, for the editor *(from [SeatAI](/advanced/entities/mounts/seat-ai))*

### Dictionary get_field_descriptions() {#method-get-field-descriptions}

The sentences the editor shows as tooltips: &#123;name of an exported variable: text&#125;. An AI of your own adds its variables (call super and merge) *(from [SeatAI](/advanced/entities/mounts/seat-ai))*

### void begin( p_session: MountSession ) {#method-begin}

The AI starts (the rider sits, or the crew takes the seat). Override to set up a state *(from [SeatAI](/advanced/entities/mounts/seat-ai))*

### Vector2 think( delta: float ) {#method-think}

Every physics frame while the AI acts. Return the move input of the seat (x right, y forward, each -1 to 1). Override this *(from [SeatAI](/advanced/entities/mounts/seat-ai))*

