<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CameraShakeAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Shakes the camera of the player: a quake in a cutscene, an explosion in the valley, the roar of a boss. The shake dies away by itself over its duration; several shakes add up. The player's Camera shake setting scales it (0 = no shake). With a position and a radius it is weaker the farther the camera is from that position. See docs: World &gt; Camera effects.

## Properties

| | | |
|---|---|---|
| `float` | [amount](#prop-amount) | `0.5` |
| `float` | [duration](#prop-duration) | `1.0` |
| `bool` | [from_position](#prop-from-position) | `false` |
| `Vector3` | [position](#prop-position) | `Vector3.ZERO` |
| `float` | [radius](#prop-radius) | `40.0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### float amount = 0.5 {#prop-amount}

How hard the shake is: 0.2 a bump, 0.5 a hit, 1 an explosion

### float duration = 1.0 {#prop-duration}

Seconds the shake takes to die away

### bool from_position = false {#prop-from-position}

Shake because of a place: the farther the camera is from it the weaker the shake, and gone at the radius

### Vector3 position = Vector3.ZERO {#prop-position}

Where the shake comes from (in the world)

### float radius = 40.0 {#prop-radius}

Metres from the position at which the shake is gone

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

