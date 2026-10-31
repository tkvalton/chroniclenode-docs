<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetWeatherIntensityAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Makes the weather that is on lighter or heavier, without bringing another one: the rain thins out or comes down harder, the ground, the sky, the fog, the sun, the wind, the screen and the sound of the weather all ease to the new level. A storm that builds up over a quest is this action again and again with a higher number. See docs: World &gt; Weather &gt; Intensity.

## Properties

| | | |
|---|---|---|
| `float` | [intensity](#prop-intensity) | `1.0` |
| `float` | [transition_duration](#prop-transition-duration) | `5.0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### float intensity = 1.0 {#prop-intensity}

How strong the weather is now, 0 to 1, times the intensity the weather itself says (1 = as the weather says, 0.3 = a light version of it, 0 = it stops without being taken away)

### float transition_duration = 5.0 {#prop-transition-duration}

Seconds the weather takes to get there (0 = at once)

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

