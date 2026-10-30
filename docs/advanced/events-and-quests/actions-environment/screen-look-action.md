<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ScreenLookAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Changes how the screen looks: a flash, a red vignette, a blurred grey picture, a tint for a flashback, a push of the field of view. A look has a NAME: set it, and clear it by that name with another action (or give it a time to hold and it goes by itself). An event look is laid over the looks of effects and zones. The player's Screen effects setting (off, reduced, full) decides how much shows. See docs: World &gt; Camera effects.

## Properties

| | | |
|---|---|---|
| `Operation` | [operation](#prop-operation) | `Operation.SET` |
| `String` | [look_name](#prop-look-name) | `"event"` |
| `float` | [hold_seconds](#prop-hold-seconds) | `0.0` |
| `float` | [fade_seconds](#prop-fade-seconds) | `0.5` |
| `Color` | [tint](#prop-tint) | `Color(1.0, 1.0, 1.0, 0.0)` |
| `float` | [vignette](#prop-vignette) | `0.0` |
| `Color` | [vignette_color](#prop-vignette-color) | `Color.BLACK` |
| `float` | [blur](#prop-blur) | `0.0` |
| `float` | [desaturate](#prop-desaturate) | `0.0` |
| `float` | [aberration](#prop-aberration) | `0.0` |
| `float` | [grain](#prop-grain) | `0.0` |
| `float` | [fov_kick](#prop-fov-kick) | `0.0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Enumerations

### enum Operation {#enum-operation}

- **SET** = `0`
- **CLEAR** = `1`

## Property descriptions

### Operation operation = Operation.SET {#prop-operation}

Show a look, or take the look of that name off the screen

### String look_name = "event" {#prop-look-name}

The name of the look: the same name again replaces it, Clear takes it off

### float hold_seconds = 0.0 {#prop-hold-seconds}

Seconds to hold the look before it goes (0 = until another action clears it)

### float fade_seconds = 0.5 {#prop-fade-seconds}

Seconds the look takes to come, or to go when it is cleared

*Look*

### Color tint = Color(1.0, 1.0, 1.0, 0.0) {#prop-tint}

A colour laid over the picture. Its alpha is how strong it is (0 = no tint)

### float vignette = 0.0 {#prop-vignette}

How dark the corners are

### Color vignette_color = Color.BLACK {#prop-vignette-color}

The colour of the dark corners

### float blur = 0.0 {#prop-blur}

Blur of the whole picture

### float desaturate = 0.0 {#prop-desaturate}

0 = the colours as they are, 1 = black and white

### float aberration = 0.0 {#prop-aberration}

Colour fringes towards the edges

### float grain = 0.0 {#prop-grain}

Film grain

### float fov_kick = 0.0 {#prop-fov-kick}

Degrees added to the field of view (negative zooms in)

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

