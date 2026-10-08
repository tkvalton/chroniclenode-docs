<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectEventProcEffect

**Inherits:** [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Proc effect that responds to effect lifecycle events (gained, updated, lost)

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_on](#prop-trigger-on) | `TriggerType.EFFECT_GAINED` |
| `EffectFilter` | [effect_filter](#prop-effect-filter) | `EffectFilter.ANY_EFFECT` |
| `Array[int]` | [specific_effect_ids](#prop-specific-effect-ids) | `[]` |
| `Condition.CheckLogic` | [stack_count_logic](#prop-stack-count-logic) | `Condition.CheckLogic.EQUAL` |
| `int` | [desired_stack_count](#prop-desired-stack-count) | `0` |
| `bool` | [apply_to_effect_target](#prop-apply-to-effect-target) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum TriggerType {#enum-triggertype}

- **EFFECT_GAINED** = `0` - When an effect is applied
- **EFFECT_UPDATED** = `1` - When effect stacks change
- **EFFECT_LOST** = `2` - When an effect expires/is removed

### enum EffectFilter {#enum-effectfilter}

- **ANY_EFFECT** = `0` - Any effect triggers this
- **SPECIFIC_EFFECTS** = `1` - Only specific effects

## Property descriptions

*Effect Event Trigger Settings*

### TriggerType trigger_on = TriggerType.EFFECT_GAINED {#prop-trigger-on}

Which effect event triggers this proc

### EffectFilter effect_filter = EffectFilter.ANY_EFFECT {#prop-effect-filter}

How to filter which effects trigger this proc

### Array[int] specific_effect_ids = [] {#prop-specific-effect-ids}

Specific effect IDs (for SPECIFIC_EFFECTS filter)

*Stack Condition (for EFFECT_UPDATED only)*

### Condition.CheckLogic stack_count_logic = Condition.CheckLogic.EQUAL {#prop-stack-count-logic}

Logic for comparing stack counts

### int desired_stack_count = 0 {#prop-desired-stack-count}

Target stack count to check against

*Target Override*

### bool apply_to_effect_target = false {#prop-apply-to-effect-target}

Apply child effects to the target of the triggering effect instead of this effect's target

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect).*

