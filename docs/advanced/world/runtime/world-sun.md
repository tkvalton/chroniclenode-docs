<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldSun

**Inherits:** `DirectionalLight3D`

Currently active sun configuration

## Variables

| | | |
|---|---|---|
| `SunConfig` | [current_sun_config](#var-current-sun-config) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `bool` | [day_night_cycle](#var-day-night-cycle) | `true` |
| `float` | [sun_rise_hour](#var-sun-rise-hour) | `6.0` |
| `float` | [sun_set_hour](#var-sun-set-hour) | `20.5` |
| `float` | [max_light_energy](#var-max-light-energy) | `2.0` |
| `float` | [min_light_energy](#var-min-light-energy) | `0.5` |
| `float` | [dawn_dusk_light](#var-dawn-dusk-light) | `1.0` |
| `Color` | [day_light_color](#var-day-light-color) | `Color("fffff2ff")` |
| `Color` | [dawn_light_color](#var-dawn-light-color) | `Color("ffcc99ff")` |
| `Color` | [dusk_light_color](#var-dusk-light-color) | `Color("ffb380ff")` |
| `Color` | [night_light_color](#var-night-light-color) | `Color("333380ff")` |

## Methods

| | |
|---|---|
| `void` | [update_sun_position](#method-update-sun-position)( `current_time: float` ) |
| `void` | [update_light_energy](#method-update-light-energy)( `current_time: float` ) |
| `void` | [update_light_color](#method-update-light-color)( `current_time: float` ) |
| `void` | [apply_sun_config](#method-apply-sun-config)( `config: SunConfig` ) |

## Variable descriptions

### SunConfig current_sun_config {#var-current-sun-config}

Currently active sun configuration

### ChronoManager chrono_manager {#var-chrono-manager}

Chronomanager ref

### bool day_night_cycle = true {#var-day-night-cycle}

*No description yet.*

### float sun_rise_hour = 6.0 {#var-sun-rise-hour}

*No description yet.*

### float sun_set_hour = 20.5 {#var-sun-set-hour}

*No description yet.*

### float max_light_energy = 2.0 {#var-max-light-energy}

*No description yet.*

### float min_light_energy = 0.5 {#var-min-light-energy}

*No description yet.*

### float dawn_dusk_light = 1.0 {#var-dawn-dusk-light}

*No description yet.*

### Color day_light_color = Color("fffff2ff") {#var-day-light-color}

*No description yet.*

### Color dawn_light_color = Color("ffcc99ff") {#var-dawn-light-color}

*No description yet.*

### Color dusk_light_color = Color("ffb380ff") {#var-dusk-light-color}

*No description yet.*

### Color night_light_color = Color("333380ff") {#var-night-light-color}

*No description yet.*

## Method descriptions

### void update_sun_position( current_time: float ) {#method-update-sun-position}

*No description yet.*

### void update_light_energy( current_time: float ) {#method-update-light-energy}

*No description yet.*

### void update_light_color( current_time: float ) {#method-update-light-color}

*No description yet.*

### void apply_sun_config( config: SunConfig ) {#method-apply-sun-config}

Apply a SunConfig to reconfigure the sun

