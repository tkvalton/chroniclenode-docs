<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherConfig

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A weather of the world: what falls (a particle scene), how the wind blows and what the weather does to the ground (wet and darker, tinted, covered by snow, sand, ash or anything else).

## Description

A world has a default weather (World editor &gt; Weather) and an event changes it with Set Weather. Rain, snow, a sandstorm, a rain of embers and a magic fog are all the same class with other numbers: what makes snow different from sand is the colour of the cover, how much of it lies on the ground and where it sticks. See docs: World &gt; Weather.

## Properties

| | | |
|---|---|---|
| `String` | [weather_vfx_name](#prop-weather-vfx-name) | `""` |
| `Vector3` | [wind_direction](#prop-wind-direction) | `Vector3(1.0, 0.0, 0.0):` |
| `float` | [wind_intensity](#prop-wind-intensity) | `0.5` |
| `float` | [ground_wetness](#prop-ground-wetness) | `0.0` |
| `Color` | [wet_tint](#prop-wet-tint) | `Color(0.6, 0.65, 0.75)` |
| `float` | [wet_tint_amount](#prop-wet-tint-amount) | `0.0` |
| `float` | [cover_amount](#prop-cover-amount) | `0.0` |
| `Color` | [cover_color](#prop-cover-color) | `Color(0.92, 0.94, 0.97)` |
| `CoverSticksOn` | [cover_sticks_on](#prop-cover-sticks-on) | `CoverSticksOn.FLAT_GROUND` |
| `float` | [cover_roughness](#prop-cover-roughness) | `0.6` |

## Methods

| | |
|---|---|
| `float` | [get_cover_stick](#method-get-cover-stick)() |
| `VFXSelectionWeather` | [to_selection](#method-to-selection)() |
| `PackedStringArray` | [validate](#method-validate)() |
| `WeatherConfig` | [from_selection](#method-from-selection)( `selection: VFXSelectionWeather` ) *static* |

## Enumerations

### enum CoverSticksOn {#enum-coverstickson}

Where the cover of the weather sticks.

- **FLAT_GROUND** = `0` - Only on ground that does not lean (snow)
- **MOST_GROUND** = `1` - On gentle slopes as well (sand, ash)
- **EVERYWHERE** = `2` - On steep ground too (a thick dust, a magic frost)

## Property descriptions

*Look*

### String weather_vfx_name = "" {#prop-weather-vfx-name}

The weather particles that fall around the camera: the name of a Weather VFX of the project (Rain, Snow ...). Empty = nothing falls (a weather that only changes the ground, or the wind)

*Wind*

### Vector3 wind_direction = Vector3(1.0, 0.0, 0.0): {#prop-wind-direction}

The direction the wind blows in (x, z on the ground)

### float wind_intensity = 0.5 {#prop-wind-intensity}

How strong the wind is: the plants of the world bend by it (0 still, 1 a gale)

*Ground Wetness*

### float ground_wetness = 0.0 {#prop-ground-wetness}

How wet this weather makes the ground in the end (0 dry, 1 soaked). The ground gets there over time, at the rates of the world

### Color wet_tint = Color(0.6, 0.65, 0.75) {#prop-wet-tint}

The colour a wet ground gets (multiplied with the textures): a blue-grey for rain, a dark red for a rain of blood, a green glow for acid

### float wet_tint_amount = 0.0 {#prop-wet-tint-amount}

How much of the wet tint shows when the ground is soaked (0 = none: the ground only gets darker and shinier as the textures say)

*Ground Cover*

### float cover_amount = 0.0 {#prop-cover-amount}

How much of the ground this weather covers in the end (0 none, 1 covered). The cover is snow, sand, ash, mud, moss ... the colour below says which. The ground gets there over time, at the rates of the world

### Color cover_color = Color(0.92, 0.94, 0.97) {#prop-cover-color}

The colour of the cover (white for snow, tan for sand, grey for ash)

### CoverSticksOn cover_sticks_on = CoverSticksOn.FLAT_GROUND {#prop-cover-sticks-on}

Where the cover sticks: snow only on flat ground, sand on most, a thick dust everywhere. Each ground texture also says how much cover it takes (Terrain textures &gt; Cover)

### float cover_roughness = 0.6 {#prop-cover-roughness}

How shiny the cover is (0 a mirror, 1 matte): wet snow and ice are shinier than dust

## Method descriptions

### float get_cover_stick() {#method-get-cover-stick}

How far down a slope the cover goes, as the number the terrain shader reads (0 flat ground only, 1 everywhere)

### VFXSelectionWeather to_selection() {#method-to-selection}

The weather particles and wind as the spawner of the weather VFX wants them (a selection built from this weather; the ground is not in it)

### PackedStringArray validate() {#method-validate}

The warnings of this weather (shown by the editor)

### WeatherConfig from_selection( selection: VFXSelectionWeather ) {#method-from-selection}

A weather made from the old weather selection of a world (weather name rules become the starting values: rain wets, snow covers). Not saved: the editor saves the converted one

