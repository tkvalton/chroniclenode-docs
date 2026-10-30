<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EnvironmentBar

**Inherits:** [PanelContainer](https://docs.godotengine.org/en/stable/classes/class_panelcontainer.html)

The bar at the top of the 3D viewport while the environment preview is on: which Sun, Sky and Environment config to look at, the hour of the day (a slider, and a clock that runs), whether the default video settings of the project are used, and what to do with the choice: use it for this world, or go back to the configs of the world. The configs are changed in World Configs; the preview shows them at once (Refresh after a change).

## Variables

| | | |
|---|---|---|
| `EnvironmentPreview` | [preview](#var-preview) | `null` |
| `SunConfig` | [world_sun](#var-world-sun) | `null` |
| `SkyConfig` | [world_sky](#var-world-sky) | `null` |
| `EnvironmentConfig` | [world_environment](#var-world-environment) | `null` |
| `OptionButton` | [sun_option](#var-sun-option) |  |
| `OptionButton` | [sky_option](#var-sky-option) |  |
| `OptionButton` | [environment_option](#var-environment-option) |  |
| `HSlider` | [time_slider](#var-time-slider) |  |
| `Label` | [time_label](#var-time-label) |  |
| `Button` | [play_button](#var-play-button) |  |
| `SpinBox` | [speed_spin](#var-speed-spin) |  |
| `CheckBox` | [video_check](#var-video-check) |  |
| `OptionButton` | [blind_option](#var-blind-option) |  |

## Methods

| | |
|---|---|
| `void` | [bind](#method-bind)( `p_preview: EnvironmentPreview, p_sun: SunConfig, p_sky: SkyConfig, p_environment: EnvironmentConfig` ) |
| `void` | [refresh](#method-refresh)() |

## Signals

### use_for_world_requested( sun: SunConfig, sky: SkyConfig, environment: EnvironmentConfig ) {#signal-use-for-world-requested}

### world_configs_requested() {#signal-world-configs-requested}

### reset_requested() {#signal-reset-requested}

### close_requested() {#signal-close-requested}

## Variable descriptions

### EnvironmentPreview preview = null {#var-preview}

*No description yet.*

### SunConfig world_sun = null {#var-world-sun}

The configs the world has by itself (its overrides, else the defaults): marked in the lists

### SkyConfig world_sky = null {#var-world-sky}

*No description yet.*

### EnvironmentConfig world_environment = null {#var-world-environment}

*No description yet.*

### OptionButton sun_option {#var-sun-option}

*No description yet.*

### OptionButton sky_option {#var-sky-option}

*No description yet.*

### OptionButton environment_option {#var-environment-option}

*No description yet.*

### HSlider time_slider {#var-time-slider}

*No description yet.*

### Label time_label {#var-time-label}

*No description yet.*

### Button play_button {#var-play-button}

*No description yet.*

### SpinBox speed_spin {#var-speed-spin}

*No description yet.*

### CheckBox video_check {#var-video-check}

*No description yet.*

### OptionButton blind_option {#var-blind-option}

*No description yet.*

## Method descriptions

### void bind( p_preview: EnvironmentPreview, p_sun: SunConfig, p_sky: SkyConfig, p_environment: EnvironmentConfig ) {#method-bind}

Shows a preview: fills the lists and puts the controls where the preview is

### void refresh() {#method-refresh}

Reads the lists again (a config was made or changed) and keeps what is chosen

