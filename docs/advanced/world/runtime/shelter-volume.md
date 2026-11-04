<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ShelterVolume

**Inherits:** [SpaceVolume](/advanced/world/runtime/space-volume) < [Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)

A place that keeps the weather off: a cabin, a cave, a tent, a porch. Put it in a world scene (Add Object &gt; Volumes &gt; Shelter volume), give its CollisionShape3D the shape of the place and set what the shelter is in the Unique Object panel: how much of the weather it keeps off, whether it stops the exposed effects of the weather, how it changes the sound and which sound plays inside for each kind of weather. The panel has a menu of presets (Wooden cabin, Cave, Tent, and yours) that copy these settings into the volume. While the camera is inside, the weather weakens on the screen, the sound of the weather on the roof plays and the audio profile muffles the world; while an entity is inside it does not get the exposed effects of the weather (if the shelter stops them). See docs: World &gt; Shelter.

## Description

It only measures: rain stays off a roof by itself (the weather's particles land on any solid mesh). It does not touch anyone.

## Properties

| | | |
|---|---|---|
| `float` | [shelter_amount](#prop-shelter-amount) | `1.0` |
| `bool` | [stops_effects](#prop-stops-effects) | `true` |
| `AudioProfile` | [audio_profile](#prop-audio-profile) | `null` |
| `Array[ShelterWeatherSound]` | [weather_sounds](#prop-weather-sounds) | `[]` |

## Methods

| | |
|---|---|
| `float` | [get_amount](#method-get-amount)() |
| `bool` | [protects_from_effects](#method-protects-from-effects)() |
| `ShelterWeatherSound` | [get_weather_sound](#method-get-weather-sound)( `kind: String` ) |
| `ShelterWeatherSound` | [find_weather_sound](#method-find-weather-sound)( `kinds: PackedStringArray` ) |
| `PackedStringArray` | [validate](#method-validate)() |

## Constants

- `float` **CHECK_INTERVAL** = `0.1` - How often (seconds) the camera is checked, for the audio profile of the shelter
- `StringName` **GROUP** = `&"shelter_volumes"` - The group every shelter volume is in (Shelter looks them up there)

## Property descriptions

*Shelter*

### float shelter_amount = 1.0 {#prop-shelter-amount}

How much of the weather it keeps off (0 to 1): the screen look of the weather is weakened by this much (a tent 0.6, a porch 0.8, a cabin or a cave 1)

### bool stops_effects = true {#prop-stops-effects}

Do the exposed effects of the weather (a burn, a Wet debuff) stop for whoever is inside? Off for a tent that only keeps the rain off

*Sound*

### AudioProfile audio_profile = null {#prop-audio-profile}

How the sound changes while the camera is inside: the muffle of the weather outside, echo. Empty = it does not change

### Array[ShelterWeatherSound] weather_sounds = [] {#prop-weather-sounds}

The weather sounds of this shelter: a track for each kind of weather (the rain on the roof). A weather lists its kinds in its Sound group; the shelter plays the track of the first kind it has one for

## Method descriptions

### float get_amount() {#method-get-amount}

How much of the weather this shelter keeps off (0 to 1)

### bool protects_from_effects() {#method-protects-from-effects}

Does it stop the exposed effects of the weather for whoever is inside?

### ShelterWeatherSound get_weather_sound( kind: String ) {#method-get-weather-sound}

The line for a kind of weather (null when the shelter has none)

### ShelterWeatherSound find_weather_sound( kinds: PackedStringArray ) {#method-find-weather-sound}

The line for the first of these kinds that the shelter has a line for (a weather lists its kinds in order: sleet may list rain, then snow)

### PackedStringArray validate() {#method-validate}

The warnings of the settings of this shelter (the editor shows them)

