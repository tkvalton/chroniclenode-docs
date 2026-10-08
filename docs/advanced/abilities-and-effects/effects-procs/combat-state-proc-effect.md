<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatStateProcEffect

**Inherits:** [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Proc effect that responds to its holder entering or leaving combat.

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_on](#prop-trigger-on) | `TriggerType.ENTER_COMBAT` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum TriggerType {#enum-triggertype}

- **ENTER_COMBAT** = `0` - When the holder enters combat
- **LEAVE_COMBAT** = `1` - When the holder leaves combat

## Property descriptions

*Combat State Trigger Settings*

### TriggerType trigger_on = TriggerType.ENTER_COMBAT {#prop-trigger-on}

Which change of combat state triggers this proc

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

