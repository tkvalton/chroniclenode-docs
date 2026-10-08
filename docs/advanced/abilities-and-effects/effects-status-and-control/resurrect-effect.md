<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ResurrectEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ResurrectEffect brings a dead entity back to life with specified health.

## Properties

| | | |
|---|---|---|
| `float` | [health_percentage](#prop-health-percentage) | `0.25` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `Dictionary` | [get_resurrection_preview](#method-get-resurrection-preview)( `target_entity: Entity` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

### float health_percentage = 0.25 {#prop-health-percentage}

The percentage of max health to restore (0.0 - 1.0)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect, resurrecting the target if they are dead

### String get_effect_description() {#method-get-effect-description}

Enhanced tooltip

### Dictionary get_resurrection_preview( target_entity: Entity ) {#method-get-resurrection-preview}

Get resurrection preview info for UI

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

