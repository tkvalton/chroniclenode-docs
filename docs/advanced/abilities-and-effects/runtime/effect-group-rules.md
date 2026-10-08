<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectGroupRules

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The rules of exclusive effect groups (see GroupDefinition): which effects an effect that is about to start would replace, or whether a group refuses it. `EffectInstance.start_effect` applies them; items and abilities can ask `preview` first so nothing is spent on a refused effect and the UI can say "replaces Elixir of X".

## Methods

| | |
|---|---|
| `Dictionary` | [preview](#method-preview)( `effect: Effect, originator: Variant, entity: Variant, ignore: EffectInstance = null` ) *static* |
| `Array[EffectInstance]` | [get_group_members](#method-get-group-members)( `group: GroupDefinition, originator: Variant, entity: Variant, ignore: EffectInstance = null` ) *static* |
| `bool` | [resolve](#method-resolve)( `instance: EffectInstance` ) *static* |

## Method descriptions

### Dictionary preview( effect: Effect, originator: Variant, entity: Variant, ignore: EffectInstance = null ) {#method-preview}

What applying `effect` to `entity` (from `originator`) would do: {"refused": bool, "refused_by": GroupDefinition, "replaces": Array[EffectInstance]}. `ignore` is an instance that is starting right now (it does not count against itself)

### Array[EffectInstance] get_group_members( group: GroupDefinition, originator: Variant, entity: Variant, ignore: EffectInstance = null ) {#method-get-group-members}

The active effects that fill a slot of `group` for an effect applied by `originator` to `entity`, by the scope of the group

### bool resolve( instance: EffectInstance ) {#method-resolve}

Applies the rules for an effect that is starting: false when a group refuses it, otherwise the effects it replaces are ended

