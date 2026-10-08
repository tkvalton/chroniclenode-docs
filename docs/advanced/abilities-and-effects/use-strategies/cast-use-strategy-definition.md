<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CastUseStrategyDefinition

**Inherits:** [UseStrategyDefinition](/advanced/abilities-and-effects/use-strategies/use-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for abilities that require a casting time before execution. Handles the complete cast timing pattern including preparation, casting state, and completion.

## Properties

| | | |
|---|---|---|
| `float` | [cast_duration](#prop-cast-duration) | `2.0` |
| `bool` | [immobile_during_cast](#prop-immobile-during-cast) | `true` |
| `bool` | [interruptable_cast](#prop-interruptable-cast) | `true` |
| `int` | [interrupt_shield_level](#prop-interrupt-shield-level) | `0` |
| `bool` | [immune_to_silence](#prop-immune-to-silence) | `false` |
| `SpeedSource` | [speed_source](#prop-speed-source) | `SpeedSource.CAST_SPEED` |
| `float` | [movement_speed_while_casting](#prop-movement-speed-while-casting) | `1.0` |
| `bool` | [release_to_fire](#prop-release-to-fire) | `false` |
| `float` | [min_hold](#prop-min-hold) | `0.0` |
| `float` | [max_hold](#prop-max-hold) | `0.0` |
| `AnimationSelectionAbility` | [casting_animation](#prop-casting-animation) |  |
| `CastingSFXSelection` | [casting_sfx](#prop-casting-sfx) |  |
| `VFXSelection` | [casting_vfx](#prop-casting-vfx) |  |

## Methods

| | |
|---|---|
| `void` | [execute_strategy](#method-execute-strategy)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [complete_early](#method-complete-early)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: UseStrategyInstance, property_name: String` ) |
| `float` | [get_speed_multiplier](#method-get-speed-multiplier)( `strategy_instance: UseStrategyInstance` ) |
| `void` | [setup_cast_presentation](#method-setup-cast-presentation)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [play_casting_animation](#method-play-casting-animation)( `strategy_instance: UseStrategyInstance, user: Entity` ) |
| `void` | [play_casting_sfx](#method-play-casting-sfx)( `strategy_instance: UseStrategyInstance, user: Entity` ) |
| `void` | [on_input_released](#method-on-input-released)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [cleanup_timing_resources](#method-cleanup-timing-resources)( `strategy_instance: UseStrategyInstance, user: Entity` ) |
| `void` | [cleanup_cast_effects](#method-cleanup-cast-effects)( `strategy_instance: UseStrategyInstance, user: Entity` ) |

## Enumerations

### enum SpeedSource {#enum-speedsource}

- **CAST_SPEED** = `0` - the Cast Speed stat (spells)
- **ATTACK_SPEED** = `1` - the Attack Speed stat (aim and draw time of a weapon attack)
- **NONE** = `2` - fixed duration

## Property descriptions

### float cast_duration = 2.0 {#prop-cast-duration}

Duration in seconds for the casting phase before ability executes

### bool immobile_during_cast = true {#prop-immobile-during-cast}

Whether the caster becomes immobile during the casting phase

### bool interruptable_cast = true {#prop-interruptable-cast}

Whether this cast can be interrupted by damage or effects

### int interrupt_shield_level = 0 {#prop-interrupt-shield-level}

Number of interrupt attempts that will be blocked before cast can be interrupted

### bool immune_to_silence = false {#prop-immune-to-silence}

Whether this ability is immune to silence effects (can be cast while silenced)

### SpeedSource speed_source = SpeedSource.CAST_SPEED {#prop-speed-source}

Which stat makes the cast faster: Cast Speed (spells), Attack Speed (the aim and draw time of a weapon attack) or none. A speed of 2 halves the cast time

### float movement_speed_while_casting = 1.0 {#prop-movement-speed-while-casting}

Movement speed while casting as a share of the normal speed (1 = unchanged, 0.4 = 40 %). Used when the caster is not immobile during the cast

*Draw and Release*

### bool release_to_fire = false {#prop-release-to-fire}

After the cast time the shot waits at full draw until the key is released (a bow). Only for the player in control: an NPC or a companion lets go at full draw

### float min_hold = 0.0 {#prop-min-hold}

Releasing before this many seconds (at normal speed) cancels the shot and gives back what it cost

### float max_hold = 0.0 {#prop-max-hold}

While waiting at full draw: let go by itself after this many seconds (0 = hold as long as the player wants)

### AnimationSelectionAbility casting_animation {#prop-casting-animation}

Animation played during the casting phase (charging/preparation)

### CastingSFXSelection casting_sfx {#prop-casting-sfx}

Sound effects played during the casting phase

### VFXSelection casting_vfx {#prop-casting-vfx}

Visual effects shown during the casting phase (charging/channeling effect)

## Method descriptions

### void execute_strategy( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-execute-strategy}

Execute cast strategy - delayed execution after cast time

### void complete_early( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-complete-early}

Handle early completion for PowerUp abilities

### Variant get_property_value( strategy_instance: UseStrategyInstance, property_name: String ) {#method-get-property-value}

Get property value with runtime override support

### float get_speed_multiplier( strategy_instance: UseStrategyInstance ) {#method-get-speed-multiplier}

The speed the user casts at (1 = normal): the stat chosen by `speed_source`

### void setup_cast_presentation( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-setup-cast-presentation}

Setup casting visuals and audio

### void play_casting_animation( strategy_instance: UseStrategyInstance, user: Entity ) {#method-play-casting-animation}

Play casting animation

### void play_casting_sfx( strategy_instance: UseStrategyInstance, user: Entity ) {#method-play-casting-sfx}

Play casting sound effect

### void on_input_released( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-on-input-released}

The key was released: a drawn shot is loosed at the charge it has (released before `min_hold` it is cancelled and gives back what it cost)

### void cleanup_timing_resources( strategy_instance: UseStrategyInstance, user: Entity ) {#method-cleanup-timing-resources}

Clean up cast-specific resources

### void cleanup_cast_effects( strategy_instance: UseStrategyInstance, user: Entity ) {#method-cleanup-cast-effects}

Clean up casting effects and state

