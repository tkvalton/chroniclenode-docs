<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConditionalEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [DistanceConditionalEffect](/advanced/abilities-and-effects/effects-conditional/distance-conditional-effect), [EffectConditionalEffect](/advanced/abilities-and-effects/effects-conditional/effect-conditional-effect), [HealthConditionalEffect](/advanced/abilities-and-effects/effects-conditional/health-conditional-effect), [RandomChanceConditionalEffect](/advanced/abilities-and-effects/effects-conditional/random-chance-conditional-effect)

Base class for all conditional effects.

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

