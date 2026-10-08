<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MinimumApplicationAreaEffect

**Inherits:** [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect) < [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AreaRandomizeTargetEffect](/advanced/abilities-and-effects/effects-area/area-randomize-target-effect), [EqualizeAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-area-effect)

AreaEffect with a guaranteed minimum number of effect applications.

## Description

AreaEffect with a guaranteed minimum number of effect applications. When fewer valid targets exist than minimum_applications, the effect wraps back through already-hit targets until the minimum is met.

Useful for abilities that must always fire N times — e.g. a 3-bounce lightning that chains back on itself with only 1 target, or a heal that always builds N stacks even on a single target. Also works naturally with stacking effects. Subclasses (EqualizeAreaEffect, AreaRandomizeTargetEffect) honour this minimum via their own application loops, calling _fill_minimum_applications after the main pass.

## Properties

| | | |
|---|---|---|
| `int` | [minimum_applications](#prop-minimum-applications) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Minimum Applications*

### int minimum_applications = 0 {#prop-minimum-applications}

Minimum number of effect applications per activation. 0 = disabled. When the ordered target list has fewer entries than this value, the effect cycles back through the list. Deliberately bypasses prevent_duplicate_hits — intentional.

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

