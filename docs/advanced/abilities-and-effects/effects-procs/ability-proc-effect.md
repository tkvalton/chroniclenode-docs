<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityProcEffect

**Inherits:** [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Proc effect that responds to ability usage

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_on](#prop-trigger-on) | `TriggerType.ABILITY_CAST` |
| `AbilityFilter` | [ability_filter](#prop-ability-filter) | `AbilityFilter.ANY_ABILITY` |
| `Array[int]` | [specific_ability_ids](#prop-specific-ability-ids) | `[]` |
| `int` | [school_type](#prop-school-type) | `0` |
| `bool` | [apply_to_attack_target](#prop-apply-to-attack-target) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum TriggerType {#enum-triggertype}

- **ABILITY_CAST** = `0` - When any ability is cast
- **AUTO_ATTACK** = `1` - When auto-attack is cast

### enum AbilityFilter {#enum-abilityfilter}

- **ANY_ABILITY** = `0` - Affects all abilities
- **SPECIFIC_ABILITIES** = `1` - Only abilities in the array
- **ABILITY_SCHOOL** = `2` - Abilities of specific school
- **ALL_EXCEPT_BLACKLIST** = `3` - All abilities EXCEPT those in the array

## Property descriptions

*Ability Trigger Settings*

### TriggerType trigger_on = TriggerType.ABILITY_CAST {#prop-trigger-on}

Which ability event triggers this proc

### AbilityFilter ability_filter = AbilityFilter.ANY_ABILITY {#prop-ability-filter}

How to filter which abilities trigger this proc

### Array[int] specific_ability_ids = [] {#prop-specific-ability-ids}

Specific ability IDs (for SPECIFIC_ABILITIES or ALL_EXCEPT_BLACKLIST)

### int school_type = 0 {#prop-school-type}

Ability school ID (for ABILITY_SCHOOL filter)

*Target Override*

### bool apply_to_attack_target = false {#prop-apply-to-attack-target}

Apply child effects to the target of the triggering ability instead of the proc holder

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [ProcEffect](/advanced/abilities-and-effects/effects-base/proc-effect).*

