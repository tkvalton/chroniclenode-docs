<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectTextUtil

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The words of an effect inside a text: the `<Effect1>` and `<EffectText1>` placeholders of the description of an ability, and of an effect with child effects.

## Description

The words of an effect inside a text: the `<Effect1>` and `<EffectText1>` placeholders of the description of an ability, and of an effect with child effects.

`<Effect1>` is the text the effect type writes itself ("deals 10 fire damage for 6s"), so it follows the numbers of the effect. `<EffectText1>` is the Description you wrote for the effect (its own placeholders are filled in too), and the type's text when the effect has none. The number counts the effects of the list that is given, from 1: for an ability, its effects and their child effects; for an effect, its own child effects.

## Methods

| | |
|---|---|
| `String` | [replace_placeholders](#method-replace-placeholders)( `text: String, effects: Array[Effect]` ) *static* |

## Method descriptions

### String replace_placeholders( text: String, effects: Array[Effect] ) {#method-replace-placeholders}

Replaces the placeholders of the text, counting the given effects

