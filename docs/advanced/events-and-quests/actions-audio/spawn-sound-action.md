<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnSoundAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Spawns a sound in the world at a place: a bell from a tower, a growl from the dark, a campfire that crackles from now on. The place is a typed position, a marker of the world scene (a Marker3D or any 3D node, by name), an entity or an interactable (by unique id); a sound given a name can be stopped later with Stop Sound, and a sound that loops (with an optional pause between plays) stays until it is stopped. A sound that does not loop and has no name is played once and forgotten. See docs: Events &gt; Audio actions.

## Properties

| | | |
|---|---|---|
| `SFXSelection` | [sfx_selection](#prop-sfx-selection) |  |
| `Place` | [place](#prop-place) | `Place.POSITION` |
| `Vector3` | [position](#prop-position) | `Vector3.ZERO` |
| `String` | [marker_name](#prop-marker-name) | `""` |
| `int` | [unique_id](#prop-unique-id) | `0` |
| `bool` | [follow](#prop-follow) | `false` |
| `bool` | [loop](#prop-loop) | `false` |
| `float` | [delay_min](#prop-delay-min) | `0.0` |
| `float` | [delay_max](#prop-delay-max) | `0.0` |
| `String` | [sound_name](#prop-sound-name) | `""` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Node3D` | [resolve_place](#method-resolve-place)() |

## Enumerations

### enum Place {#enum-place}

Where the sound comes from

- **POSITION** = `0`
- **MARKER** = `1`
- **ENTITY** = `2`
- **INTERACTABLE** = `3`

## Property descriptions

### SFXSelection sfx_selection {#prop-sfx-selection}

Any sound effect (casting, impact, environmental, an interface sound ...): the sound with its volume, pitch and range

### Place place = Place.POSITION {#prop-place}

Where the sound comes from: a typed position, a marker of the world by its name, an entity or an interactable by its unique id

### Vector3 position = Vector3.ZERO {#prop-position}

The position (Position)

### String marker_name = "" {#prop-marker-name}

The name of the marker node in the world scene (Marker)

### int unique_id = 0 {#prop-unique-id}

The unique id of the entity or the interactable (Entity, Interactable)

### bool follow = false {#prop-follow}

The sound goes with the entity or the interactable when it moves (Entity, Interactable)

### bool loop = false {#prop-loop}

The sound plays again when it ends, until Stop Sound

### float delay_min = 0.0 {#prop-delay-min}

The pause before a looping sound plays again, a random time between the two (seconds)

### float delay_max = 0.0 {#prop-delay-max}

*No description yet.*

### String sound_name = "" {#prop-sound-name}

The name of the sound, to stop it with Stop Sound. Spawning a sound with a name that is playing replaces it

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### Node3D resolve_place() {#method-resolve-place}

The node the place names (null for a position, or when nothing is found)

