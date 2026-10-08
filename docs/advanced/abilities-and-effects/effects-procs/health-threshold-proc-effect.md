<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HealthThresholdProcEffect

**Inherits:** [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Proc effect that triggers when health crosses a percentage threshold.

## Properties

| | | |
|---|---|---|
| `TriggerDirection` | [trigger_direction](#prop-trigger-direction) | `TriggerDirection.DROPS_BELOW` |
| `float` | [threshold_percentage](#prop-threshold-percentage) | `35.0` |
| `bool` | [trigger_once_per_cross](#prop-trigger-once-per-cross) | `true` |
| `bool` | [monitor_targets_health](#prop-monitor-targets-health) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum TriggerDirection {#enum-triggerdirection}

- **DROPS_BELOW** = `0` - Fires when health crosses threshold going down
- **RISES_ABOVE** = `1` - Fires when health crosses threshold going up

## Property descriptions

*Threshold Settings*

### TriggerDirection trigger_direction = TriggerDirection.DROPS_BELOW {#prop-trigger-direction}

Which direction triggers this proc

### float threshold_percentage = 35.0 {#prop-threshold-percentage}

Health percentage threshold (0–100)

### bool trigger_once_per_cross = true {#prop-trigger-once-per-cross}

Only trigger once per threshold crossing — prevents repeated firing while health stays below

*Target Monitoring*

### bool monitor_targets_health = false {#prop-monitor-targets-health}

Monitor the caster's current target's health instead of their own (e.g. execute mechanics)

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect).*

