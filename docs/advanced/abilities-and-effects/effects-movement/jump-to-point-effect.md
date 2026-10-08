<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# JumpToPointEffect

**Inherits:** [MoveToPointEffect](/advanced/abilities-and-effects/effects-base/move-to-point-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

JumpToPointEffect: Direct CharacterBody3D movement along arc path

## Properties

| | | |
|---|---|---|
| `float` | [jump_speed](#prop-jump-speed) | `10.0` |
| `float` | [arc_height](#prop-arc-height) | `5.0` |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `effect_instance: EffectInstance` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Jump Settings*

### float jump_speed = 10.0 {#prop-jump-speed}

Speed of jump movement (units per second)

### float arc_height = 5.0 {#prop-arc-height}

Maximum height of the arc above the start/end positions

## Method descriptions

### void process_before_start( effect_instance: EffectInstance ) {#method-process-before-start}

*No description yet.*

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

