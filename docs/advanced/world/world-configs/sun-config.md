<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SunConfig

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The PATH of the sun: where it is in the sky and when. One per world (a planet has one sun that rises and sets the same way in every valley of it).

## Description

How the sun LOOKS (its brightness and colour by the hour, shadows, how it lights the fog and the sky) is the mood of a place, so it is in the Environment config (the "Sun Light" groups): a zone or an event that changes the Environment can dim or warm the sun without moving it. Set day_night_cycle to false for a sun that stays where it is.

## Properties

| | | |
|---|---|---|
| `bool` | [day_night_cycle](#prop-day-night-cycle) | `true` |
| `float` | [static_rotation](#prop-static-rotation) | `-45.0` |
| `float` | [sun_rise_hour](#prop-sun-rise-hour) | `6.0` |
| `float` | [sun_set_hour](#prop-sun-set-hour) | `20.5` |
| `float` | [sun_heading](#prop-sun-heading) | `90.0` |

## Property descriptions

### bool day_night_cycle = true {#prop-day-night-cycle}

Enable day/night cycle (false = a sun that stays where it is: the static height below)

*Static Sun*

### float static_rotation = -45.0 {#prop-static-rotation}

Static sun height (degrees, when day_night_cycle = false): 0 is on the horizon, -90 is straight overhead. The direction it shines from is the heading of the Sun Direction group

*Day Night Timing*

### float sun_rise_hour = 6.0 {#prop-sun-rise-hour}

Hour when sun rises (0-24)

### float sun_set_hour = 20.5 {#prop-sun-set-hour}

Hour when sun sets (0-24)

*Sun Direction*

### float sun_heading = 90.0 {#prop-sun-heading}

The direction of the sun's path across the sky, in degrees round the up axis. 90 (the default): the sun rises in the east (+X), crosses the sky overhead and sets in the west (-X), the way the maps are laid out. 0: it rises in the south (+Z) and sets in the north (-Z). 180 and 270 are the opposite ones

