<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityVoiceSFXSelection

**Inherits:** [SFXSelection](/advanced/assets/selections-sfx/sfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Specialized SFX selection for entity voice sound effects (combat barks, reactions) Only stores the action - entity provides its own voice type and variant at runtime

## Properties

| | | |
|---|---|---|
| `String` | [action](#prop-action) | `"attack"` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_available_actions](#method-get-available-actions)() |
| `AudioStream` | [get_sound_resource](#method-get-sound-resource)() |

## Property descriptions

### String action = "attack" {#prop-action}

The action the voice plays for (attack, hit ...). The entity gives its own voice.

## Method descriptions

### Array[String] get_available_actions() {#method-get-available-actions}

The actions a voice can have.

### AudioStream get_sound_resource() {#method-get-sound-resource}

The sound this selection points to, or null when it is not set.

