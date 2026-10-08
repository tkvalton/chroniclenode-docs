<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatProcEffect

**Inherits:** [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Proc effect that responds to the resolved hits of its holder (offensive: hits dealt, defensive: hits received). Reads the typed DamageResult and filters by the trigger tags that fired (e.g. "critical strike", "dodge", "block")

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_on](#prop-trigger-on) | `TriggerType.OFFENSIVE_PROC` |
| `String` | [required_trigger_tag](#prop-required-trigger-tag) | `""` |
| `bool` | [apply_to_attack_target](#prop-apply-to-attack-target) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum TriggerType {#enum-triggertype}

- **OFFENSIVE_PROC** = `0` - When an offensive trigger happens (Critical Strike, Armor Pen, etc.)
- **DEFENSIVE_PROC** = `1` - When a defensive trigger happens (Dodge, Parry, Block, etc.)

## Property descriptions

*Combat Trigger Settings*

### TriggerType trigger_on = TriggerType.OFFENSIVE_PROC {#prop-trigger-on}

Which type of special effect triggers this proc

### String required_trigger_tag = "" {#prop-required-trigger-tag}

Only proc when this specific trigger tag occurs (empty = any trigger)

*Target Override*

### bool apply_to_attack_target = false {#prop-apply-to-attack-target}

Apply child effects to the target of the triggering attack instead of the proc holder

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect).*

