<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DeathProcEffect

**Inherits:** [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Proc effect that responds to death events

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_on](#prop-trigger-on) | `TriggerType.ON_DEATH` |
| `bool` | [apply_to_killed_target](#prop-apply-to-killed-target) | `false` |
| `bool` | [resurrect_on_proc](#prop-resurrect-on-proc) | `false` |
| `float` | [resurrection_health_percent](#prop-resurrection-health-percent) | `30.0` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum TriggerType {#enum-triggertype}

- **ON_DEATH** = `0` - When you die
- **ON_KILL** = `1` - When you kill something

## Property descriptions

*Death Trigger Settings*

### TriggerType trigger_on = TriggerType.ON_DEATH {#prop-trigger-on}

Which death event triggers this proc

*Target Override (for ON_KILL only)*

### bool apply_to_killed_target = false {#prop-apply-to-killed-target}

Apply child effects to the entity you killed instead of yourself

*Resurrection Settings (for ON_DEATH only)*

### bool resurrect_on_proc = false {#prop-resurrect-on-proc}

Resurrect this entity when proc triggers

### float resurrection_health_percent = 30.0 {#prop-resurrection-health-percent}

Health percentage to resurrect at

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

