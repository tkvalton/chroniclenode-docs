<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherTableEntry

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One line of a weather table: a weather (or a clear sky) with how likely it is and how long it lasts when it is picked. See docs: World &gt; Weather tables.

## Properties

| | | |
|---|---|---|
| `int` | [weather_config_id](#prop-weather-config-id) | `0` |
| `float` | [weight](#prop-weight) | `1.0` |
| `float` | [min_minutes](#prop-min-minutes) | `5.0` |
| `float` | [max_minutes](#prop-max-minutes) | `15.0` |

## Methods

| | |
|---|---|
| `WeatherConfig` | [get_weather](#method-get-weather)() |
| `float` | [roll_seconds](#method-roll-seconds)( `rng: RandomNumberGenerator` ) |
| `String` | [describe](#method-describe)() |
| `PackedStringArray` | [validate](#method-validate)() |

## Property descriptions

### int weather_config_id = 0 {#prop-weather-config-id}

The weather of this line: the id of a Weather config of the project (World Configs &gt; Weather). 0 = a clear sky

### float weight = 1.0 {#prop-weight}

How likely the line is compared with the others of the table (a line of 3 comes up three times as often as a line of 1; 0 = never)

### float min_minutes = 5.0 {#prop-min-minutes}

The shortest time it lasts when it is picked, in minutes of play

### float max_minutes = 15.0 {#prop-max-minutes}

The longest time it lasts when it is picked, in minutes of play

## Method descriptions

### WeatherConfig get_weather() {#method-get-weather}

The weather of this line (null = a clear sky, or a weather that is gone)

### float roll_seconds( rng: RandomNumberGenerator ) {#method-roll-seconds}

How long this line lasts when it is picked now, in seconds of play

### String describe() {#method-describe}

One line that says what the entry is (the title of its container in the editor)

### PackedStringArray validate() {#method-validate}

The warnings of this line

