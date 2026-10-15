<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MotionSFXSelection

**Inherits:** [SFXSelection](/advanced/assets/selections-sfx/sfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Specialized SFX selection for motion sound effects (footsteps, movement)

## Properties

| | | |
|---|---|---|
| `String` | [entity_type](#prop-entity-type) | `"humanoid"` |
| `String` | [surface](#prop-surface) | `"stone"` |
| `String` | [movement](#prop-movement) | `"walk"` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_available_entity_types](#method-get-available-entity-types)() |
| `Array[String]` | [get_available_surfaces](#method-get-available-surfaces)() |
| `Array[String]` | [get_available_movements](#method-get-available-movements)() |
| `AudioStream` | [get_sound_resource](#method-get-sound-resource)() |

## Property descriptions

### String entity_type = "humanoid" {#prop-entity-type}

The kind of entity that walks (humanoid ...).

### String surface = "stone" {#prop-surface}

The ground it walks on (stone ...).

### String movement = "walk" {#prop-movement}

The kind of movement (walk, run ...).

## Method descriptions

### Array[String] get_available_entity_types() {#method-get-available-entity-types}

The kinds of entity the database has footsteps for.

### Array[String] get_available_surfaces() {#method-get-available-surfaces}

The surfaces the database has footsteps for, for the entity type chosen.

### Array[String] get_available_movements() {#method-get-available-movements}

The movements the database has footsteps for, for the entity type and surface chosen.

### AudioStream get_sound_resource() {#method-get-sound-resource}

The sound this selection points to, or null when it is not set.

