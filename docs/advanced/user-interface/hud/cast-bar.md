<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CastBar

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Modular cast bar component that can be used by ActionBarUI, Nameplate, or any UI Automatically connects to entity casting signals and manages its own display state

## Properties

| | | |
|---|---|---|
| `bool` | [show_interrupt_colors](#prop-show-interrupt-colors) | `false` |
| `bool` | [show_ability_name](#prop-show-ability-name) | `true` |
| `bool` | [show_timer_text](#prop-show-timer-text) | `true` |
| `bool` | [show_tick_markers](#prop-show-tick-markers) | `true` |
| `int` | [update_frequency](#prop-update-frequency) | `60` |
| `ProgressBar` | [progress_bar](#prop-progress-bar) |  |
| `Label` | [ability_label](#prop-ability-label) |  |
| `Label` | [timer_label](#prop-timer-label) |  |
| `Control` | [tick_marker_container](#prop-tick-marker-container) |  |

## Variables

| | | |
|---|---|---|
| `bool` | [settings_enabled](#var-settings-enabled) | `false` |
| `String` | [settings_visibility_key](#var-settings-visibility-key) | `""` |
| `Entity` | [monitored_entity](#var-monitored-entity) | `null` |
| `AbilityInstance` | [current_ability](#var-current-ability) | `null` |
| `Timer` | [cast_timer](#var-cast-timer) | `null` |
| `Timer` | [update_timer](#var-update-timer) | `null` |
| `bool` | [is_casting](#var-is-casting) | `false` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `setting_key: String = ""` ) |
| `void` | [connect_to_entity](#method-connect-to-entity)( `entity: Entity` ) |
| `void` | [disconnect_from_entity](#method-disconnect-from-entity)() |
| `void` | [set_interrupt_colors_enabled](#method-set-interrupt-colors-enabled)( `enabled: bool` ) |
| `void` | [set_ability_name_visible](#method-set-ability-name-visible)( `visible_state: bool` ) |
| `void` | [set_timer_text_visible](#method-set-timer-text-visible)( `visible_state: bool` ) |
| `void` | [set_tick_markers_visible](#method-set-tick-markers-visible)( `visible_state: bool` ) |
| `void` | [set_update_frequency](#method-set-update-frequency)( `frequency: int` ) |
| `bool` | [is_currently_casting](#method-is-currently-casting)() |
| `float` | [get_cast_progress](#method-get-cast-progress)() |
| `float` | [get_time_remaining](#method-get-time-remaining)() |
| `AbilityInstance` | [get_current_ability](#method-get-current-ability)() |

## Property descriptions

### bool show_interrupt_colors = false {#prop-show-interrupt-colors}

Whether to show interrupt shield color coding (for nameplates vs action bars)

### bool show_ability_name = true {#prop-show-ability-name}

Whether to show the ability name label

### bool show_timer_text = true {#prop-show-timer-text}

Whether to show the timer text

### bool show_tick_markers = true {#prop-show-tick-markers}

Whether to show tick markers for channeled abilities

### int update_frequency = 60 {#prop-update-frequency}

Update frequency in FPS (60 = smooth, 30 = good performance, 10 = basic)

### ProgressBar progress_bar {#prop-progress-bar}

Progress bar showing cast progress

### Label ability_label {#prop-ability-label}

Label showing ability name

### Label timer_label {#prop-timer-label}

Label showing time remaining

### Control tick_marker_container {#prop-tick-marker-container}

Container for tick markers (Control overlay on progress bar)

## Variable descriptions

### bool settings_enabled = false {#var-settings-enabled}

Whether this cast bar respects settings (for nameplate/action bar)

### String settings_visibility_key = "" {#var-settings-visibility-key}

Settings key to check for visibility ("friendly_nameplates_cast_bar", "enemy_nameplates_cast_bar", "action_bar_cast_bar")

### Entity monitored_entity = null {#var-monitored-entity}

Entity being monitored for casting

### AbilityInstance current_ability = null {#var-current-ability}

Current casting ability reference

### Timer cast_timer = null {#var-cast-timer}

Direct reference to the cast timer

### Timer update_timer = null {#var-update-timer}

Update timer for smooth progress

### bool is_casting = false {#var-is-casting}

Whether currently showing a cast

## Method descriptions

### void initialize_ui( setting_key: String = "" ) {#method-initialize-ui}

Configure cast bar

### void connect_to_entity( entity: Entity ) {#method-connect-to-entity}

Connect this cast bar to monitor an entity's casting

### void disconnect_from_entity() {#method-disconnect-from-entity}

Disconnect from the currently monitored entity

### void set_interrupt_colors_enabled( enabled: bool ) {#method-set-interrupt-colors-enabled}

Set whether to show interrupt shield colors

### void set_ability_name_visible( visible_state: bool ) {#method-set-ability-name-visible}

Set whether to show ability name

### void set_timer_text_visible( visible_state: bool ) {#method-set-timer-text-visible}

Set whether to show timer text

### void set_tick_markers_visible( visible_state: bool ) {#method-set-tick-markers-visible}

Set whether to show tick markers

### void set_update_frequency( frequency: int ) {#method-set-update-frequency}

Set update frequency (higher = smoother, lower = better performance)

### bool is_currently_casting() {#method-is-currently-casting}

Check if currently displaying a cast

### float get_cast_progress() {#method-get-cast-progress}

Get current cast progress (0.0 to 1.0)

### float get_time_remaining() {#method-get-time-remaining}

Get current cast time remaining

### AbilityInstance get_current_ability() {#method-get-current-ability}

Get current casting ability

