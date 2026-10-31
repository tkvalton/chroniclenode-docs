<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherEffectEntry

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

An effect a weather gives to those who stand in it (a burn in a rain of embers, a Wet debuff in the rain), and how. One entry of the Exposed Effects list of a WeatherConfig.

## Description

The entries are saved with the weather and edited in the Weather tab. The weather system does not apply them yet: that is the exposed effects step of the weather work (see docs/systems/weather-plan.md, W8).

## Properties

| | | |
|---|---|---|
| `int` | [effect_id](#prop-effect-id) | `0` |
| `Mode` | [mode](#prop-mode) | `Mode.HELD` |
| `float` | [interval](#prop-interval) | `0.5` |
| `Affects` | [affects](#prop-affects) | `Affects.PARTY` |

## Methods

| | |
|---|---|
| `Effect` | [get_effect](#method-get-effect)() |
| `String` | [describe](#method-describe)() |
| `PackedStringArray` | [validate](#method-validate)() |

## Enumerations

### enum Mode {#enum-mode}

How the weather gives the effect

- **HELD** = `0` - Given once when an entity is exposed, taken away at once when it is sheltered or the weather ends (a burn while the embers fall)
- **REFRESHED** = `1` - Applied again every interval to every exposed entity, so its duration keeps being renewed; when the weather ends or the entity is sheltered nothing renews it and it runs out by itself (a Wet debuff of a minute)

### enum Affects {#enum-affects}

Who gets the effect

- **PARTY** = `0` - The players of the party
- **EVERYONE** = `1` - Every entity of the world

## Property descriptions

### int effect_id = 0 {#prop-effect-id}

The effect (an Effect of the project: its id). 0 = none chosen

### Mode mode = Mode.HELD {#prop-mode}

How the weather gives it: held while exposed, or renewed every interval (see the modes)

### float interval = 0.5 {#prop-interval}

Seconds between two applications in the Refreshed mode

### Affects affects = Affects.PARTY {#prop-affects}

Who gets the effect: the party, or every entity

## Method descriptions

### Effect get_effect() {#method-get-effect}

The effect of this entry (null when none is chosen or it was deleted)

### String describe() {#method-describe}

One line that says what the entry is (the title of its container in the editor)

### PackedStringArray validate() {#method-validate}

The warnings of this entry

