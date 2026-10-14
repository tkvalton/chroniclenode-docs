<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterSheetStat

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Individual stat display component for character sheet Displays a stat name and its current value with color coding Stores the stat definition resource for enhanced functionality (shared resource, no memory overhead) Refactored to emit tooltip signals instead of calling ui_manager

## Variables

| | | |
|---|---|---|
| `int` | [tracked_stat_id](#var-tracked-stat-id) | `0` |
| `String` | [stat_type](#var-stat-type) | `"" # "effect", "primary"` |
| `String` | [display_name](#var-display-name) | `""` |
| `float` | [base_value](#var-base-value) | `0.0` |
| `StatInstance` | [stat_instance](#var-stat-instance) | `null` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `_system_hub: GameHost.SystemHub` ) |
| `void` | [setup_stat_with_instance](#method-setup-stat-with-instance)( `p_stat_instance: StatInstance, display_name_param: String = "", stat_type_param: String = ""` ) |
| `void` | [update_display](#method-update-display)( `current_value: float` ) |

## Signals

### description_tooltip_requested( object_name: String, description: String ) {#signal-description-tooltip-requested}

Signals for tooltip requests

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

## Constants

- `Color` **COLOR_NORMAL** = `Color.WHITE` - Colors for different stat states
- `Color` **COLOR_BUFFED** = `Color.GREEN`
- `Color` **COLOR_DEBUFFED** = `Color.RED`

## Variable descriptions

### int tracked_stat_id = 0 {#var-tracked-stat-id}

The stat name this component is tracking

### String stat_type = "" # "effect", "primary" {#var-stat-type}

The type of stat (for different handling)

### String display_name = "" {#var-display-name}

*No description yet.*

### float base_value = 0.0 {#var-base-value}

Cache base value for color comparison

### StatInstance stat_instance = null {#var-stat-instance}

Stat definition reference (shared resource - no memory overhead)

## Method descriptions

### void initialize_ui( _system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*No description yet.*

### void setup_stat_with_instance( p_stat_instance: StatInstance, display_name_param: String = "", stat_type_param: String = "" ) {#method-setup-stat-with-instance}

Initialize with direct stat instance connection (preferred)

### void update_display( current_value: float ) {#method-update-display}

Update the stat display with current value and appropriate color

