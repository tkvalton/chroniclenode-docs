<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PoolBarUI

**Inherits:** `MarginContainer`

UI component for displaying a single pool (health or resource)

## Variables

| | | |
|---|---|---|
| `SettingsConfig.HealthDisplayOption` | [text_display_mode](#var-text-display-mode) | `SettingsConfig.HealthDisplayOption.CURRENT_PERCENTAGE` |
| `bool` | [show_pool_id](#var-show-pool-id) | `false` |
| `bool` | [show_pool_value](#var-show-pool-value) | `true` |
| `bool` | [show_overfill](#var-show-overfill) | `true` |
| `bool` | [animate_changes](#var-animate-changes) | `true` |
| `float` | [animation_duration](#var-animation-duration) | `0.3` |
| `PoolInstance` | [pool_instance](#var-pool-instance) |  |
| `int` | [pool_id](#var-pool-id) | `0` |
| `Tween` | [current_tween](#var-current-tween) |  |

## Methods

| | |
|---|---|
| `void` | [setup_pool_bar](#method-setup-pool-bar)( `p_pool_instance: PoolInstance` ) |
| `String` | [format_number_with_commas](#method-format-number-with-commas)( `value: float` ) |
| `String` | [format_number_abbreviated](#method-format-number-abbreviated)( `value: float` ) |
| `String` | [format_pool_value](#method-format-pool-value)( `value: float` ) |
| `void` | [set_text_display_mode](#method-set-text-display-mode)( `mode: SettingsConfig.HealthDisplayOption` ) |
| `void` | [set_show_pool_value](#method-set-show-pool-value)( `show_value: bool` ) |
| `void` | [set_bar_modulate](#method-set-bar-modulate)( `color: Color` ) |
| `void` | [set_animation_settings](#method-set-animation-settings)( `enabled: bool, duration: float = 0.3` ) |
| `Dictionary` | [get_pool_info](#method-get-pool-info)() |
| `void` | [cleanup](#method-cleanup)() |

## Variable descriptions

### SettingsConfig.HealthDisplayOption text_display_mode = SettingsConfig.HealthDisplayOption.CURRENT_PERCENTAGE {#var-text-display-mode}

Configuration

### bool show_pool_id = false {#var-show-pool-id}

True shows the id of the pool.

### bool show_pool_value = true {#var-show-pool-value}

True shows the numbers of the pool.

### bool show_overfill = true {#var-show-overfill}

True shows the overfill.

### bool animate_changes = true {#var-animate-changes}

True animates the bar when the value changes.

### float animation_duration = 0.3 {#var-animation-duration}

How many seconds the animation takes.

### PoolInstance pool_instance {#var-pool-instance}

Pool data

### int pool_id = 0 {#var-pool-id}

The pool the bar shows.

### Tween current_tween {#var-current-tween}

Animation

## Method descriptions

### void setup_pool_bar( p_pool_instance: PoolInstance ) {#method-setup-pool-bar}

Initialize the pool bar with a PoolInstance

### String format_number_with_commas( value: float ) {#method-format-number-with-commas}

Format a number with commas for thousands separators

### String format_number_abbreviated( value: float ) {#method-format-number-abbreviated}

Format a number with abbreviations (K, M, B)

### String format_pool_value( value: float ) {#method-format-pool-value}

Main formatting function - switches between comma and abbreviated based on size

### void set_text_display_mode( mode: SettingsConfig.HealthDisplayOption ) {#method-set-text-display-mode}

Set text display mode

### void set_show_pool_value( show_value: bool ) {#method-set-show-pool-value}

Set whether to show pool value

### void set_bar_modulate( color: Color ) {#method-set-bar-modulate}

Set the modulate color of the progress bar (simpler than style overrides)

### void set_animation_settings( enabled: bool, duration: float = 0.3 ) {#method-set-animation-settings}

Set animation settings

### Dictionary get_pool_info() {#method-get-pool-info}

Get pool information for external use

### void cleanup() {#method-cleanup}

Cleanup when removing

