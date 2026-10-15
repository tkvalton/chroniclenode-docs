<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Light

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

LightEffect manages light sources and associated audio effects in the game world. It provides functionality to control both OmniLight3D and SpotLight3D nodes, as well as an associated AudioStreamPlayer3D for ambient sound effects.

## Description

Key features:

- Controls both OmniLight3D and SpotLight3D nodes
- Manages an associated audio stream for ambient effects
- Provides functionality to toggle shadows for performance optimization
- Can be enabled/disabled for interactive lighting systems
- Automatically adds itself to the "lights" group when entering the scene tree

Note: All instances of this class are automatically added to the "lights" group for proper scene organization and potential performance optimizations.

## Properties

| | | |
|---|---|---|
| `Light3D` | [omni_light](#prop-omni-light) |  |
| `SpotLight3D` | [spot_light](#prop-spot-light) |  |
| `AudioStreamPlayer3D` | [audio_stream_player_3d](#prop-audio-stream-player-3d) |  |
| `bool` | [light_enabled](#prop-light-enabled) | `true` |
| `bool` | [shadows_enabled](#prop-shadows-enabled) | `true` |
| `bool` | [loop_audio](#prop-loop-audio) | `true` |

## Variables

| | | |
|---|---|---|
| `float` | [stored_omni_energy](#var-stored-omni-energy) | `1.0` |
| `float` | [stored_spot_energy](#var-stored-spot-energy) | `1.0` |
| `bool` | [stored_omni_visible](#var-stored-omni-visible) | `true` |
| `bool` | [stored_spot_visible](#var-stored-spot-visible) | `true` |

## Methods

| | |
|---|---|
| `void` | [start_audio](#method-start-audio)() |
| `void` | [stop_audio](#method-stop-audio)() |
| `void` | [set_audio_volume](#method-set-audio-volume)( `volume: float` ) |
| `void` | [toggle_shadows](#method-toggle-shadows)( `value: bool` ) |
| `void` | [enable_shadows](#method-enable-shadows)() |
| `void` | [disable_shadows](#method-disable-shadows)() |
| `void` | [set_light_enabled](#method-set-light-enabled)( `enabled: bool` ) |
| `void` | [enable_light](#method-enable-light)() |
| `void` | [disable_light](#method-disable-light)() |
| `void` | [toggle_light](#method-toggle-light)() |
| `void` | [set_light_energy](#method-set-light-energy)( `energy: float` ) |
| `void` | [set_light_color](#method-set-light-color)( `color: Color` ) |
| `void` | [set_omni_range](#method-set-omni-range)( `range_value: float` ) |
| `void` | [set_spot_range](#method-set-spot-range)( `range_value: float` ) |
| `void` | [set_spot_angle](#method-set-spot-angle)( `angle_degrees: float` ) |
| `void` | [animate_light_energy](#method-animate-light-energy)( `target_energy: float, duration: float = 1.0` ) |
| `void` | [animate_light_color](#method-animate-light-color)( `target_color: Color, duration: float = 1.0` ) |
| `void` | [start_flicker_effect](#method-start-flicker-effect)( `min_energy: float = 0.5, max_energy: float = 1.5, interval: float = 0.1` ) |
| `void` | [stop_flicker_effect](#method-stop-flicker-effect)() |
| `bool` | [is_light_enabled](#method-is-light-enabled)() |
| `bool` | [are_shadows_enabled](#method-are-shadows-enabled)() |
| `bool` | [has_lights](#method-has-lights)() |
| `bool` | [has_audio](#method-has-audio)() |

## Signals

### light_turned_on() {#signal-light-turned-on}

Signal emitted when the light is turned on

### light_turned_off() {#signal-light-turned-off}

Signal emitted when the light is turned off

### shadows_toggled( enabled: bool ) {#signal-shadows-toggled}

Signal emitted when shadows are toggled

## Property descriptions

### Light3D omni_light {#prop-omni-light}

Reference to the OmniLight3D node (if present)

### SpotLight3D spot_light {#prop-spot-light}

Reference to the SpotLight3D node (if present)

### AudioStreamPlayer3D audio_stream_player_3d {#prop-audio-stream-player-3d}

Reference to the AudioStreamPlayer3D for ambient sound effects

### bool light_enabled = true {#prop-light-enabled}

Whether the light is currently enabled

### bool shadows_enabled = true {#prop-shadows-enabled}

Whether shadows are enabled

### bool loop_audio = true {#prop-loop-audio}

Whether audio should loop continuously

## Variable descriptions

### float stored_omni_energy = 1.0 {#var-stored-omni-energy}

*No description yet.*

### float stored_spot_energy = 1.0 {#var-stored-spot-energy}

*No description yet.*

### bool stored_omni_visible = true {#var-stored-omni-visible}

*No description yet.*

### bool stored_spot_visible = true {#var-stored-spot-visible}

*No description yet.*

## Method descriptions

### void start_audio() {#method-start-audio}

Start playing the ambient audio

### void stop_audio() {#method-stop-audio}

Stop playing the ambient audio

### void set_audio_volume( volume: float ) {#method-set-audio-volume}

Set the audio volume (0.0 to 1.0)

### void toggle_shadows( value: bool ) {#method-toggle-shadows}

Toggles shadow casting for both OmniLight3D and SpotLight3D (if present) This can be used for performance optimization by disabling shadows when not needed

### void enable_shadows() {#method-enable-shadows}

Enable shadows for all lights

### void disable_shadows() {#method-disable-shadows}

Disable shadows for all lights

### void set_light_enabled( enabled: bool ) {#method-set-light-enabled}

Enable or disable the light effect

### void enable_light() {#method-enable-light}

Turn on the light effect

### void disable_light() {#method-disable-light}

Turn off the light effect

### void toggle_light() {#method-toggle-light}

Toggle the light on/off

### void set_light_energy( energy: float ) {#method-set-light-energy}

Set the energy/brightness of all lights

### void set_light_color( color: Color ) {#method-set-light-color}

Set the color of all lights

### void set_omni_range( range_value: float ) {#method-set-omni-range}

Set the range of omni light (if present)

### void set_spot_range( range_value: float ) {#method-set-spot-range}

Set the range of spot light (if present)

### void set_spot_angle( angle_degrees: float ) {#method-set-spot-angle}

Set the spot light angle (if present)

### void animate_light_energy( target_energy: float, duration: float = 1.0 ) {#method-animate-light-energy}

Animate light energy over time

### void animate_light_color( target_color: Color, duration: float = 1.0 ) {#method-animate-light-color}

Animate light color over time

### void start_flicker_effect( min_energy: float = 0.5, max_energy: float = 1.5, interval: float = 0.1 ) {#method-start-flicker-effect}

Flicker effect - randomly varies light energy

### void stop_flicker_effect() {#method-stop-flicker-effect}

Stop flicker effect

### bool is_light_enabled() {#method-is-light-enabled}

Check if the light is currently enabled

### bool are_shadows_enabled() {#method-are-shadows-enabled}

Check if shadows are currently enabled

### bool has_lights() {#method-has-lights}

Check if any light components are present

### bool has_audio() {#method-has-audio}

Check if audio component is present

