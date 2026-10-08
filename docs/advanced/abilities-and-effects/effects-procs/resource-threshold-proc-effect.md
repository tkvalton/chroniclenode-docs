<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ResourceThresholdProcEffect

**Inherits:** [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Proc effect that triggers when a resource pool crosses a specific value threshold.

## Properties

| | | |
|---|---|---|
| `int` | [pool_definition_id](#prop-pool-definition-id) | `0` |
| `int` | [resource_threshold](#prop-resource-threshold) | `0` |
| `Condition.CheckLogic` | [resource_comparison](#prop-resource-comparison) | `Condition.CheckLogic.LESS_EQUAL` |
| `bool` | [monitor_targets_resource](#prop-monitor-targets-resource) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Threshold Settings*

### int pool_definition_id = 0 {#prop-pool-definition-id}

The resource pool to monitor (by pool definition ID)

### int resource_threshold = 0 {#prop-resource-threshold}

The value to compare against

### Condition.CheckLogic resource_comparison = Condition.CheckLogic.LESS_EQUAL {#prop-resource-comparison}

How to compare the new value against the threshold

*Target Monitoring*

### bool monitor_targets_resource = false {#prop-monitor-targets-resource}

Monitor the caster's current target's resource instead of their own

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect).*

