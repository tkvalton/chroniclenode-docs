<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectConditionalEffect

**Inherits:** [ConditionalEffect](/advanced/abilities-and-effects/effects-base/conditional-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Applies child effects based on whether an entity has (or is missing) a specific effect, or has an exact stack count of it.

## Properties

| | | |
|---|---|---|
| `EffectTarget` | [effect_target](#prop-effect-target) | `EffectTarget.TARGET` |
| `EffectCheck` | [effect_check](#prop-effect-check) | `EffectCheck.HAS_EFFECT` |
| `int` | [effect_id](#prop-effect-id) | `0` |
| `int` | [required_stacks](#prop-required-stacks) | `1` |
| `StackComparison` | [stack_comparison](#prop-stack-comparison) | `StackComparison.AT` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum EffectTarget {#enum-effecttarget}

The options of effect target: target, originator.

- **TARGET** = `0`
- **ORIGINATOR** = `1`

### enum EffectCheck {#enum-effectcheck}

The options of effect check: has effect, missing effect, stack count.

- **HAS_EFFECT** = `0` - Entity currently has the effect
- **MISSING_EFFECT** = `1` - Entity does not have the effect
- **STACK_COUNT** = `2` - Entity stack count meets the StackComparison condition

### enum StackComparison {#enum-stackcomparison}

The options of stack comparison: at, below, above.

- **AT** = `0` - Exactly the required stack count
- **BELOW** = `1` - Fewer than the required stack count
- **ABOVE** = `2` - More than the required stack count

## Property descriptions

*Condition Settings*

### EffectTarget effect_target = EffectTarget.TARGET {#prop-effect-target}

Who is checked for the effect (the target or the originator).

### EffectCheck effect_check = EffectCheck.HAS_EFFECT {#prop-effect-check}

What is checked (has the effect, lacks it, has an exact number of stacks).

### int effect_id = 0 {#prop-effect-id}

Effect ID to check. Set to 0 to match any effect.

### int required_stacks = 1 {#prop-required-stacks}

Required stack count — only used when effect_check is STACK_COUNT

### StackComparison stack_comparison = StackComparison.AT {#prop-stack-comparison}

How to compare the stack count — only used when effect_check is STACK_COUNT

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

What the effect does to its target when it is applied.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

