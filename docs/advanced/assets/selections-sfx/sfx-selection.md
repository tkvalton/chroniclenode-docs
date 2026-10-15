<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SFXSelection

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [CastSFXSelection](/advanced/assets/selections-sfx/cast-sfx-selection), [CastingSFXSelection](/advanced/assets/selections-sfx/casting-sfx-selection), [EntityVoiceSFXSelection](/advanced/assets/selections-sfx/entity-voice-sfx-selection), [EnvironmentalSFXSelection](/advanced/assets/selections-sfx/environmental-sfx-selection), [ImpactSFXSelection](/advanced/assets/selections-sfx/impact-sfx-selection), [InteractableSFXSelection](/advanced/assets/selections-sfx/interactable-sfx-selection), [LoopSFXSelection](/advanced/assets/selections-sfx/loop-sfx-selection), [MotionSFXSelection](/advanced/assets/selections-sfx/motion-sfx-selection), [ShootSFXSelection](/advanced/assets/selections-sfx/shoot-sfx-selection), [SpawnSFXSelection](/advanced/assets/selections-sfx/spawn-sfx-selection), [StatusEffectSFXSelection](/advanced/assets/selections-sfx/status-effect-sfx-selection), [VoicelineSFXSelection](/advanced/assets/selections-sfx/voiceline-sfx-selection)

Base class for SFX selection resources Works with static DatabaseAudio

## Properties

| | | |
|---|---|---|
| `String` | [specific_file](#prop-specific-file) | `""` |
| `float` | [volume_db](#prop-volume-db) | `0.0` |
| `float` | [pitch_scale](#prop-pitch-scale) | `1.0` |
| `float` | [max_distance](#prop-max-distance) | `20.0` |
| `float` | [unit_size](#prop-unit-size) | `10.0` |

## Methods

| | |
|---|---|
| `AudioStream` | [get_sound_resource](#method-get-sound-resource)() |
| `String` | [get_sfx_selection_class_name](#method-get-sfx-selection-class-name)( `sfx_selection: SFXSelection` ) *static* |
| `String` | [get_sfx_description](#method-get-sfx-description)( `sfx: SFXSelection` ) *static* |

## Property descriptions

### String specific_file = "" {#prop-specific-file}

Optional specific file override (only used when selection_type is SPECIFIC)

### float volume_db = 0.0 {#prop-volume-db}

Basic Properties - Ensure proper type initialization

### float pitch_scale = 1.0 {#prop-pitch-scale}

The pitch of the sound (1 = normal).

*3D Audio Settings*

### float max_distance = 20.0 {#prop-max-distance}

How far away the sound can be heard.

### float unit_size = 10.0 {#prop-unit-size}

How loud the sound is close up (the distance where it starts to fade).

## Method descriptions

### AudioStream get_sound_resource() {#method-get-sound-resource}

This will be implemented by child classes

### String get_sfx_selection_class_name( sfx_selection: SFXSelection ) {#method-get-sfx-selection-class-name}

The class name of a sound selection (CastSFXSelection when it is empty).

### String get_sfx_description( sfx: SFXSelection ) {#method-get-sfx-description}

A short text about a sound selection, for the editor.

