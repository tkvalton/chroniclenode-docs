<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MinimumApplicationAreaEffect

**Inherits:** [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect) < [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AreaRandomizeTargetEffect](/advanced/abilities-and-effects/effects-area/area-randomize-target-effect), [EqualizeAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-area-effect)

AreaEffect with a guaranteed minimum number of effect applications.

## Description

AreaEffect with a guaranteed minimum number of effect applications. When fewer valid targets exist than minimum_applications, the effect wraps back through already-hit targets until the minimum is met.

Useful for abilities that must always fire N times — e.g. a 3-bounce lightning that chains back on itself with only 1 target, or a heal that always builds N stacks even on a single target. Also works naturally with stacking effects. Subclasses (EqualizeAreaEffect, AreaRandomizeTargetEffect) honour this minimum via their own application loops, calling _fill_minimum_applications after the main pass.

## Properties

| | | |
|---|---|---|
| `int` | [minimum_applications](#prop-minimum-applications) | `0` |
| `int` | [maximum_applications](#prop-maximum-applications) | `0` |

## Methods

| | |
|---|---|
| `void` | [apply_child_effects_to_target](#method-apply-child-effects-to-target)( `effect_instance: EffectInstance, target: Variant` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Applications*

### int minimum_applications = 0 {#prop-minimum-applications}

Minimum number of effect applications per activation. 0 = disabled. When the ordered target list has fewer entries than this value, the effect cycles back through the list. Deliberately bypasses prevent_duplicate_hits — intentional.

### int maximum_applications = 0 {#prop-maximum-applications}

Maximum number of effect applications over the whole life of this effect, repeat hits included. 0 = unlimited. Max targets limits how many entities are chosen; this limits how many times the child effects are applied in all: a pulse that heals at most 5 times, or a persistent area that gives its effect to the first 3 entrants and then stops. When it is lower than the minimum, the maximum wins.

## Method descriptions

### void apply_child_effects_to_target( effect_instance: EffectInstance, target: Variant ) {#method-apply-child-effects-to-target}

Every way a collision effect applies its child effects goes through here, so the maximum holds for all of them.

### String get_effect_description() {#method-get-effect-description}

Override description to include shape info *(from [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect).*

