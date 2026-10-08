<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DelayedEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

DelayedEffect applies child effects after a specified delay

## Properties

| | | |
|---|---|---|
| `bool` | [apply_on_cancelled](#prop-apply-on-cancelled) | `false` |
| `VFXSelectionTelegraph` | [telegraph_vfx](#prop-telegraph-vfx) |  |
| `bool` | [telegraph_on_cancellation](#prop-telegraph-on-cancellation) | `false` |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `effect_instance: EffectInstance` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `_effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `float` | [get_delay_duration](#method-get-delay-duration)() |
| `bool` | [is_delay_pending](#method-is-delay-pending)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_type_description](#method-get-effect-type-description)() |
| `bool` | [has_telegraph_warning](#method-has-telegraph-warning)() |
| `float` | [get_telegraph_duration](#method-get-telegraph-duration)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Delay Settings*

### bool apply_on_cancelled = false {#prop-apply-on-cancelled}

Apply child effects when effect is cancelled/dispelled

*Telegraph VFX*

### VFXSelectionTelegraph telegraph_vfx {#prop-telegraph-vfx}

Telegraph warning VFX to show during delay

### bool telegraph_on_cancellation = false {#prop-telegraph-on-cancellation}

Show telegraph even when triggered by cancellation

## Method descriptions

### void process_before_start( effect_instance: EffectInstance ) {#method-process-before-start}

Override to handle telegraph VFX when effect starts

### void specific_effect_logic( _effect_instance: EffectInstance ) {#method-specific-effect-logic}

Override Delay Effect instead applies child effects on finished

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Apply child effects when the delay timer finishes

### float get_delay_duration() {#method-get-delay-duration}

Get the delay duration from the time strategy

### bool is_delay_pending( effect_instance: EffectInstance ) {#method-is-delay-pending}

Check if the delayed effect is still pending

### String get_effect_type_description() {#method-get-effect-type-description}

Get the effect type description for tooltips

### bool has_telegraph_warning() {#method-has-telegraph-warning}

Check if this delayed effect has a telegraph warning

### float get_telegraph_duration() {#method-get-telegraph-duration}

Get telegraph duration (same as delay duration)

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect).*

