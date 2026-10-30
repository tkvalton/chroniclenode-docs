<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ClearEnvironmentLookAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Ends the look an event set (Set Sky Config, Set Environment Config): the look of the zone the party is in, or of the world, comes back over the blend seconds. It does nothing if no event look is on. See docs: World &gt; World Configs &gt; Changing a look over time.

## Properties

| | | |
|---|---|---|
| `bool` | [clear_sky](#prop-clear-sky) | `true` |
| `bool` | [clear_environment](#prop-clear-environment) | `true` |
| `float` | [blend_seconds](#prop-blend-seconds) | `2.0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### bool clear_sky = true {#prop-clear-sky}

End the sky an event set

### bool clear_environment = true {#prop-clear-environment}

End the environment an event set

### float blend_seconds = 2.0 {#prop-blend-seconds}

Seconds the look takes to go back (0 = at once)

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

