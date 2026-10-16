<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Puts the target on a mount for as long as the effect lasts: the model of a creature (an NPC of the Database, set in the mount) is added under it, it sits on the seat of the model and moves faster, or swims, or flies, or sails. The mount is only a model and a speed: it has no health and nobody steers it. This is the mount of a game that wants "mounts" as a buff with a look (a horse that appears under the rider and goes when the rider is told to). Give it a Persistent or a Temporary time strategy; it ends when the effect is removed or runs out.

## Description

For a mount that is a creature or a vehicle of the world, use the Mount interaction. Both use a Mount of the Database (Entities &gt; Mounts).

## Properties

| | | |
|---|---|---|
| `int` | [mount_id](#prop-mount-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

### int mount_id = 0 {#prop-mount-id}

The mount (Entities &gt; Mounts): its model creature, how it moves, its speed and the seat of the rider

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Puts the target on the mount

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

When the effect ends, the rider gets off

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

