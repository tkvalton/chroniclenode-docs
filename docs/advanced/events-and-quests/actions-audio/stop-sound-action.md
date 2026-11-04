<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StopSoundAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Stops a sound that the Spawn Sound action made, by its name: it fades out over the seconds and goes. A name nothing plays under does nothing. See docs: Events &gt; Audio actions.

## Properties

| | | |
|---|---|---|
| `String` | [sound_name](#prop-sound-name) | `""` |
| `float` | [fade_seconds](#prop-fade-seconds) | `1.0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### String sound_name = "" {#prop-sound-name}

The name the sound was spawned with

### float fade_seconds = 1.0 {#prop-fade-seconds}

Seconds the sound takes to fade out (0 = it stops at once)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

