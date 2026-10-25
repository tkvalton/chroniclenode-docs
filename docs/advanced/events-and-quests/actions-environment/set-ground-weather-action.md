<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetGroundWeatherAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Changes how the terrain looks in the weather: how wet the ground is, how much snow lies on it, and the tint of the ground (a season). The levels can be set once (the ground then follows the weather again from there), or held until another action releases them: a quest turns the valley to deep winter and keeps it so. See docs: World &gt; Ground weather.

## Properties

| | | |
|---|---|---|
| `Operation` | [operation](#prop-operation) | `Operation.SET` |
| `bool` | [change_wetness](#prop-change-wetness) | `true` |
| `float` | [wetness](#prop-wetness) | `0.0` |
| `bool` | [change_snow](#prop-change-snow) | `false` |
| `float` | [snow](#prop-snow) | `1.0` |
| `float` | [fade_seconds](#prop-fade-seconds) | `0.0` |
| `bool` | [change_tint](#prop-change-tint) | `false` |
| `Color` | [tint](#prop-tint) | `Color(1.0, 0.75, 0.45)` |
| `float` | [tint_strength](#prop-tint-strength) | `0.5` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Enumerations

### enum Operation {#enum-operation}

What the action does with the levels

- **SET** = `0`
- **HOLD** = `1`
- **RELEASE** = `2`

## Property descriptions

### Operation operation = Operation.SET {#prop-operation}

Set the levels now (the ground follows the weather again from there), hold them until released, or let the weather decide again

### bool change_wetness = true {#prop-change-wetness}

Change how wet the ground is

### float wetness = 0.0 {#prop-wetness}

How wet the ground is (0 dry, 1 soaked)

### bool change_snow = false {#prop-change-snow}

Change how much snow lies on the ground

### float snow = 1.0 {#prop-snow}

How much snow lies on the ground (0 none, 1 covered)

### float fade_seconds = 0.0 {#prop-fade-seconds}

Seconds the change takes (0 = at once)

*Tint*

### bool change_tint = false {#prop-change-tint}

Change the tint of the ground (a season)

### Color tint = Color(1.0, 0.75, 0.45) {#prop-tint}

The colour the ground is tinted with (autumn orange, a withered grey)

### float tint_strength = 0.5 {#prop-tint-strength}

How much of the tint shows (0 = the ground as painted)

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

