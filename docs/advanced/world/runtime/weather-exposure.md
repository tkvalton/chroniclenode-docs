<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherExposure

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Gives the exposed effects of the weather (WeatherConfig.exposed_effects) to those who stand in it, and takes them away again. Asked every EXPOSURE_INTERVAL seconds by the weather system.

## Description

An entity is exposed when the weather is on (intensity above 0), it is alive, and it is not inside a ShelterVolume that protects from effects. Two ways to give an effect (WeatherEffectEntry.Mode):

- Held: given once when the entity becomes exposed and taken off when it is sheltered, the weather ends or changes into one without the effect. An effect that ended by itself (a duration) is not put back

until the entity has been out of the weather and back in.

- Refreshed: every `interval` seconds the effect is given again; one the entity already has gets its duration renewed (no extra stack). When the entity is sheltered or the weather ends nothing renews it: it runs out by itself.

The effect that is put on is the ordinary effect of the project, from the environment as the originator (like the effects of a movement volume).

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [update](#method-update)( `config: WeatherConfig, tree: SceneTree, delta: float` ) |
| `void` | [apply](#method-apply)( `config: WeatherConfig, tree: SceneTree, step: float` ) |
| `void` | [clear](#method-clear)() |
| `int` | [held_count](#method-held-count)() |
| `bool` | [is_holding](#method-is-holding)( `entity: Entity, effect_id: int` ) |

## Constants

- `float` **EXPOSURE_INTERVAL** = `0.5` - How often (seconds) the exposure is looked at
- `String` **FROM_WEATHER_KEY** = `"from_weather"` - The key of the effect instances in their custom data: they came from the weather

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

The systems of the game

## Method descriptions

### void update( config: WeatherConfig, tree: SceneTree, delta: float ) {#method-update}

Looks at who is exposed to this weather (null = clear) once every EXPOSURE_INTERVAL seconds; `delta` is the time since the last call

### void apply( config: WeatherConfig, tree: SceneTree, step: float ) {#method-apply}

The exposure now, whatever the time: `step` is the seconds since the last one (the refresh timers run on it)

### void clear() {#method-clear}

Takes everything the weather gave off (the world is left, the weather system is freed)

### int held_count() {#method-held-count}

How many effects are held now (for the tests)

### bool is_holding( entity: Entity, effect_id: int ) {#method-is-holding}

Does this entity hold this effect of the weather? (for the tests)

