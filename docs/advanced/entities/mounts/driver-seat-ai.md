<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DriverSeatAI

**Inherits:** [SeatAI](/advanced/entities/mounts/seat-ai) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Drives the mount where its own behavior sends it. The NPC (or the companion) still decides where to go, with its behavior and combat scripts as always: this AI takes the heading of its navigation and turns it into throttle and steering, so the mount moves the way the drive logic of its seat says (a tank turns in an arc instead of spinning on the spot).

## Properties

| | | |
|---|---|---|
| `float` | [slow_distance](#prop-slow-distance) | `5.0` |
| `float` | [steering_gain](#prop-steering-gain) | `1.5` |
| `float` | [turn_first_degrees](#prop-turn-first-degrees) | `70.0` |

## Methods

| | |
|---|---|
| `String` | [get_ai_type_name](#method-get-ai-type-name)() |
| `String` | [get_ai_type_description](#method-get-ai-type-description)() |
| `Dictionary` | [get_field_descriptions](#method-get-field-descriptions)() |
| `Vector2` | [think](#method-think)( `_delta: float` ) |

## Property descriptions

### float slow_distance = 5.0 {#prop-slow-distance}

The mount slows down when it is nearer than this to the end of its path (units)

### float steering_gain = 1.5 {#prop-steering-gain}

How strongly it steers towards the heading (1 = it turns fully at about 57 degrees of error)

### float turn_first_degrees = 70.0 {#prop-turn-first-degrees}

It does not drive forward while the heading is more than this many degrees off (it turns first)

## Method descriptions

### String get_ai_type_name() {#method-get-ai-type-name}

What this AI is called in the editor list *(from [SeatAI](/advanced/entities/mounts/seat-ai))*

### String get_ai_type_description() {#method-get-ai-type-description}

A sentence about what this AI does, for the editor *(from [SeatAI](/advanced/entities/mounts/seat-ai))*

### Dictionary get_field_descriptions() {#method-get-field-descriptions}

The sentences the editor shows as tooltips: &#123;name of an exported variable: text&#125;. An AI of your own adds its variables (call super and merge) *(from [SeatAI](/advanced/entities/mounts/seat-ai))*

### Vector2 think( _delta: float ) {#method-think}

Every physics frame while the AI acts. Return the move input of the seat (x right, y forward, each -1 to 1). Override this *(from [SeatAI](/advanced/entities/mounts/seat-ai))*

