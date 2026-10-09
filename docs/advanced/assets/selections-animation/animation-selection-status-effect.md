<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AnimationSelectionStatusEffect

**Inherits:** [AnimationSelection](/advanced/assets/selections-animation/animation-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Animation selection for status effects - simplified to select one folder that contains all three phases The folder name (e.g., "incapacitated", "stun") contains start/loop/end animations automatically

## Properties

| | | |
|---|---|---|
| `String` | [status_effect_name](#prop-status-effect-name) | `""` |

## Methods

| | |
|---|---|
| `String` | [get_animation_name](#method-get-animation-name)( `phase_context: String = ""` ) |
| `String` | [get_start_animation](#method-get-start-animation)() |
| `String` | [get_loop_animation](#method-get-loop-animation)() |
| `String` | [get_end_animation](#method-get-end-animation)() |
| `Dictionary` | [validate_phases_exist](#method-validate-phases-exist)( `entity_type: String` ) |
| `String` | [get_description](#method-get-description)() |

## Property descriptions

### String status_effect_name = "" {#prop-status-effect-name}

The folder name under status_effects/ (e.g., "stun", "incapacitated")

## Method descriptions

### String get_animation_name( phase_context: String = "" ) {#method-get-animation-name}

Get status effect animation name for a specific phase This is called by EntityAnimationPlayer when it needs a specific phase

### String get_start_animation() {#method-get-start-animation}

Get animation name for start phase

### String get_loop_animation() {#method-get-loop-animation}

Get animation name for loop phase

### String get_end_animation() {#method-get-end-animation}

Get animation name for end phase

### Dictionary validate_phases_exist( entity_type: String ) {#method-validate-phases-exist}

Check if this status effect has all three phases available in the database

### String get_description() {#method-get-description}

Get a user-friendly description of this status effect animation

