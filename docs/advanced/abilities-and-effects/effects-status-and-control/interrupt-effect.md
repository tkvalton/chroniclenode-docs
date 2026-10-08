<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InterruptEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

InterruptEffect is a simple effect that interrupts the target's current casting.

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect, interrupting the target's cast

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

Get the effect description for tooltips

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

