<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatusEffectDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `String` | [base_status_type](#prop-base-status-type) | `"" # "Incapacitate", "Root", "Blind", "Cripple", "Silence...` |
| `bool` | [enable_diminishing_returns](#prop-enable-diminishing-returns) | `true` |
| `float` | [diminishing_return_percentage](#prop-diminishing-return-percentage) | `0.5 # Each stack reduces duration by this %` |
| `int` | [max_diminishing_applications](#prop-max-diminishing-applications) | `3 # How many times diminishing can stack` |
| `float` | [diminishing_reset_time](#prop-diminishing-reset-time) | `10.0 # Time before diminishing resets` |
| `bool` | [grants_temporary_immunity](#prop-grants-temporary-immunity) | `false` |
| `int` | [immunity_threshold](#prop-immunity-threshold) | `3 # How many applications before immunity` |
| `float` | [immunity_duration](#prop-immunity-duration) | `10.0 # Duration of immunity` |
| `int` | [triggered_immunity_id](#prop-triggered-immunity-id) | `0 # Which ImmunityDefinition to activate` |
| `bool` | [hide_weapon_mesh](#prop-hide-weapon-mesh) | `false` |
| `bool` | [breaks_on_damage_taken](#prop-breaks-on-damage-taken) | `false` |
| `float` | [break_damage_threshold_percent_of_health](#prop-break-damage-threshold-percent-of-health) | `10.0` |

## Methods

| | |
|---|---|
| `float` | [get_effective_duration](#method-get-effective-duration)( `base_duration: float, application_count: int` ) |
| `bool` | [should_grant_immunity](#method-should-grant-immunity)( `application_count: int` ) |
| `bool` | [should_break_on_damage](#method-should-break-on-damage)( `damage_amount: float, current_health: float, max_health: float` ) |
| `bool` | [is_crowd_control](#method-is-crowd-control)() |
| `bool` | [is_movement_impairing](#method-is-movement-impairing)() |
| `bool` | [is_ability_impairing](#method-is-ability-impairing)() |
| `bool` | [affects_combat](#method-affects-combat)() |
| `int` | [get_id](#method-get-id)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `Array[Dictionary]` | [get_duration_preview](#method-get-duration-preview)( `base_duration: float, max_applications: int = 5` ) |
| `String` | [get_preview_text](#method-get-preview-text)( `base_duration: float` ) |

## Constants

- `Array[String]` **CROWD_CONTROL_TYPES** = `["Incapacitate", "Root", "Silence", "Disarm", "Flee", "Disorient"]`
- `Array[String]` **MOVEMENT_IMPAIRING_TYPES** = `["Root", "Incapacitate", "Cripple"]`
- `Array[String]` **ABILITY_IMPAIRING_TYPES** = `["Silence", "Disarm", "Incapacitate"]`

## Property descriptions

*Basic Properties*

### Color color = Color.WHITE {#prop-color}

The color that stands for this in the interface

*Effect Classification*

### String base_status_type = "" # "Incapacitate", "Root", "Blind", "Cripple", "Silence",  {#prop-base-status-type}

The kind of control: "Incapacitate", "Root", "Silence", "Disarm", "Cripple", "Blind", "Flee" or "Disorient". It decides what the entity cannot do

*Diminishing Returns*

### bool enable_diminishing_returns = true {#prop-enable-diminishing-returns}

Does applying the status again and again make it shorter?

### float diminishing_return_percentage = 0.5 # Each stack reduces duration by this % {#prop-diminishing-return-percentage}

Each repeat shortens the duration by this fraction (0.5 = half as long each time)

### int max_diminishing_applications = 3 # How many times diminishing can stack {#prop-max-diminishing-applications}

How many times the shortening stacks

### float diminishing_reset_time = 10.0 # Time before diminishing resets {#prop-diminishing-reset-time}

Seconds without the status before the counter starts over

*Immunity System*

### bool grants_temporary_immunity = false {#prop-grants-temporary-immunity}

Does the target become immune after enough applications?

### int immunity_threshold = 3 # How many applications before immunity {#prop-immunity-threshold}

How many applications before the immunity starts

### float immunity_duration = 10.0 # Duration of immunity {#prop-immunity-duration}

How many seconds the immunity lasts

### int triggered_immunity_id = 0 # Which ImmunityDefinition to activate {#prop-triggered-immunity-id}

The immunity (ImmunityDefinition id) that is switched on

*Special Behavior*

### bool hide_weapon_mesh = false {#prop-hide-weapon-mesh}

Hide the weapon while the status lasts

### bool breaks_on_damage_taken = false {#prop-breaks-on-damage-taken}

Does a big enough hit end the status?

### float break_damage_threshold_percent_of_health = 10.0 {#prop-break-damage-threshold-percent-of-health}

A single hit breaks the status when it takes at least this share of the maximum health

## Method descriptions

### float get_effective_duration( base_duration: float, application_count: int ) {#method-get-effective-duration}

*No description yet.*

### bool should_grant_immunity( application_count: int ) {#method-should-grant-immunity}

*No description yet.*

### bool should_break_on_damage( damage_amount: float, current_health: float, max_health: float ) {#method-should-break-on-damage}

*No description yet.*

### bool is_crowd_control() {#method-is-crowd-control}

*No description yet.*

### bool is_movement_impairing() {#method-is-movement-impairing}

*No description yet.*

### bool is_ability_impairing() {#method-is-ability-impairing}

*No description yet.*

### bool affects_combat() {#method-affects-combat}

*No description yet.*

### int get_id() {#method-get-id}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### Array[Dictionary] get_duration_preview( base_duration: float, max_applications: int = 5 ) {#method-get-duration-preview}

*No description yet.*

### String get_preview_text( base_duration: float ) {#method-get-preview-text}

*No description yet.*

