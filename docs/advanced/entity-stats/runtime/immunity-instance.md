<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ImmunityInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Individual immunity instance that tracks a specific active immunity

## Variables

| | | |
|---|---|---|
| `ImmunityDefinition` | [definition](#var-definition) |  |
| `int` | [immunity_id](#var-immunity-id) |  |
| `float` | [duration](#var-duration) |  |
| `Timer` | [timer](#var-timer) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `bool` | [permanent](#var-permanent) | `false` |

## Methods

| | |
|---|---|
| `float` | [get_time_remaining](#method-get-time-remaining)() |
| `bool` | [is_active](#method-is-active)() |
| `bool` | [is_immune_to](#method-is-immune-to)( `target: int` ) |
| `ImmunityDefinition.ImmunityType` | [get_immunity_type](#method-get-immunity-type)() |
| `String` | [get_immunity_type_string](#method-get-immunity-type-string)() |
| `String` | [get_display_string](#method-get-display-string)() |
| `Dictionary` | [get_state_info](#method-get-state-info)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### immunity_expired( immunity_instance: ImmunityInstance ) {#signal-immunity-expired}

### time_remaining_changed( immunity_instance: ImmunityInstance, time_remaining: float ) {#signal-time-remaining-changed}

## Variable descriptions

### ImmunityDefinition definition {#var-definition}

*No description yet.*

### int immunity_id {#var-immunity-id}

*No description yet.*

### float duration {#var-duration}

*No description yet.*

### Timer timer {#var-timer}

*No description yet.*

### ChronoManager chrono_manager {#var-chrono-manager}

*No description yet.*

### bool permanent = false {#var-permanent}

A permanent immunity has no timer and never expires (entity-wide immunities from StatsData)

## Method descriptions

### float get_time_remaining() {#method-get-time-remaining}

Seconds left (-1 for a permanent immunity, 0 when it has ended)

### bool is_active() {#method-is-active}

Is the immunity running? A permanent one always is

### bool is_immune_to( target: int ) {#method-is-immune-to}

Does the immunity cover this target (a damage type, a status effect or a school id, by its type)? The exclusions of the definition are left out

### ImmunityDefinition.ImmunityType get_immunity_type() {#method-get-immunity-type}

The type of the definition: damage type, status effect or school

### String get_immunity_type_string() {#method-get-immunity-type-string}

The type as text, such as "DAMAGE_TYPE"

### String get_display_string() {#method-get-display-string}

A line for the interface: the name and the seconds remaining

### Dictionary get_state_info() {#method-get-state-info}

A dictionary with the id, name, duration, time remaining, type, protected targets and exclusions, for debugging and the editor

### Dictionary to_save_data() {#method-to-save-data}

The id, duration, time remaining and whether it is permanent

### void cleanup() {#method-cleanup}

Stops and returns the timer

