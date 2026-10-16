<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Puts the target on a mount for as long as the effect lasts: the model of a creature (an NPC of the Database) is added under it, it sits on the seat of the model and moves faster, or swims, or flies, or sails. The mount is only a model and a speed: it has no health and nobody steers it. This is the mount of a game that wants "mounts" as a buff with a look (a horse that appears under the rider and goes when the rider is told to). Give it a Persistent or a Temporary time strategy; it ends when the effect is removed or runs out.

## Description

For a mount that is a creature or a vehicle of the world, use the Mount or Vehicle interaction. The fields below are the same as theirs (see MountConfig).

## Properties

| | | |
|---|---|---|
| `int` | [entity_id](#prop-entity-id) | `0` |
| `MountConfig.Movement` | [movement](#prop-movement) | `MountConfig.Movement.GROUND` |
| `float` | [speed_multiplier](#prop-speed-multiplier) | `1.5` |
| `float` | [vertical_speed](#prop-vertical-speed) | `4.0` |
| `Vector3` | [seat_offset](#prop-seat-offset) | `Vector3(0.0, 1.0, 0.0)` |
| `String` | [pose_name](#prop-pose-name) | `""` |
| `bool` | [dismount_on_damage](#prop-dismount-on-damage) | `false` |
| `String` | [mount_idle_animation](#prop-mount-idle-animation) | `"idle"` |
| `String` | [mount_move_animation](#prop-mount-move-animation) | `"run"` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

### int entity_id = 0 {#prop-entity-id}

The creature whose model is the mount (an NPC of the Database). Its stats, abilities and AI are not used

### MountConfig.Movement movement = MountConfig.Movement.GROUND {#prop-movement}

How the mount moves: on the ground, swimming, flying, or as a boat on the water

### float speed_multiplier = 1.5 {#prop-speed-multiplier}

The speed of the rider times this while it is mounted

### float vertical_speed = 4.0 {#prop-vertical-speed}

How fast the rider goes up and down when the mount swims or flies (units per second)

*The rider*

### Vector3 seat_offset = Vector3(0.0, 1.0, 0.0) {#prop-seat-offset}

Where the rider sits compared with the mount when its model has no seat (a model with a seat uses the seat)

### String pose_name = "" {#prop-pose-name}

The pose of the rider: the name of a status animation folder (its _loop animation plays while the effect lasts). Empty = none

### bool dismount_on_damage = false {#prop-dismount-on-damage}

The rider gets off when it takes damage

### String mount_idle_animation = "idle" {#prop-mount-idle-animation}

Mount model with an AnimationPlayer: the animation played when the mount stands still

### String mount_move_animation = "run" {#prop-mount-move-animation}

Mount model with an AnimationPlayer: the animation played when the mount moves

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Puts the target on the mount

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

When the effect ends, the rider gets off

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

