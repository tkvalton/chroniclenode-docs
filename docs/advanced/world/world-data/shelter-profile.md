<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ShelterProfile

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

What a kind of shelter does (a wooden cabin, a cave, a tent, a stone hall): how much of the weather it keeps off, what it does to the sound and which sound plays inside for each kind of weather. Make one in World &gt; Shelters and give it to every ShelterVolume of that kind, so the cabin is written once. See docs: World &gt; Shelter.

## Properties

| | | |
|---|---|---|
| `float` | [shelter_amount](#prop-shelter-amount) | `1.0` |
| `bool` | [protects_from_effects](#prop-protects-from-effects) | `true` |
| `AudioProfile` | [audio_profile](#prop-audio-profile) |  |
| `Array[ShelterWeatherSound]` | [weather_sounds](#prop-weather-sounds) | `[]` |

## Methods

| | |
|---|---|
| `ShelterWeatherSound` | [get_weather_sound](#method-get-weather-sound)( `kind: String` ) |
| `ShelterWeatherSound` | [find_weather_sound](#method-find-weather-sound)( `kinds: PackedStringArray` ) |
| `PackedStringArray` | [validate](#method-validate)() |

## Property descriptions

*Shelter*

### float shelter_amount = 1.0 {#prop-shelter-amount}

How much of the weather it keeps off (0 to 1): the screen look of the weather is weakened by this much (a tent 0.6, a porch 0.8, a cabin or a cave 1). A volume can use its own number

### bool protects_from_effects = true {#prop-protects-from-effects}

Do the exposed effects of the weather (a burn, a Wet debuff) stop for whoever is inside? Off for a tent that only keeps the rain off

*Sound*

### AudioProfile audio_profile {#prop-audio-profile}

How the sound changes while the camera is inside: the muffle of the weather outside, echo. Empty = it does not change

### Array[ShelterWeatherSound] weather_sounds = [] {#prop-weather-sounds}

The weather sounds of this kind of shelter: a track for each kind of weather (the rain on the roof). A list, edited in the Shelters tab

## Method descriptions

### ShelterWeatherSound get_weather_sound( kind: String ) {#method-get-weather-sound}

The line for a kind of weather (null when the profile has none)

### ShelterWeatherSound find_weather_sound( kinds: PackedStringArray ) {#method-find-weather-sound}

The line for the first of these kinds that the profile has a line for (a weather lists its kinds in order: sleet may list rain, then snow)

### PackedStringArray validate() {#method-validate}

The warnings of this profile (shown by the editor)

