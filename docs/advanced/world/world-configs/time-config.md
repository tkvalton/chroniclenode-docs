<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TimeConfig

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Configuration for time flow and day/night cycle timing

## Description

Controls how time progresses in the game. Rarely overridden per-map, but useful for special zones like time-frozen dungeons or fast-time dream sequences.

## Properties

| | | |
|---|---|---|
| `float` | [day_length_seconds](#prop-day-length-seconds) | `86400.0` |
| `float` | [time_multiplier](#prop-time-multiplier) | `1.0` |
| `float` | [starting_time](#prop-starting-time) | `8.0` |

## Property descriptions

### float day_length_seconds = 86400.0 {#prop-day-length-seconds}

Real-world seconds for a full 24-hour game day (default: 86400 = realtime 1:1) Common values: 86400 (realtime), 1440 (1 real minute = 1 game hour), 3600 (1 real hour = 1 game day)

### float time_multiplier = 1.0 {#prop-time-multiplier}

Time speed multiplier (1.0 = normal, 2.0 = twice as fast, 0.5 = half speed, 0.0 = frozen time)

### float starting_time = 8.0 {#prop-starting-time}

Starting time when this config is applied (in hours, 0-24)

