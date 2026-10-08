<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChannelUseStrategyDefinition

**Inherits:** [UseStrategyDefinition](/advanced/abilities-and-effects/use-strategies/use-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for abilities that execute over time with periodic or continuous effects.

## Properties

| | | |
|---|---|---|
| `float` | [channel_duration](#prop-channel-duration) | `2.0` |
| `ChannelMode` | [channel_mode](#prop-channel-mode) | `ChannelMode.TICK_CHANNEL` |
| `CooldownStart` | [cooldown_starts](#prop-cooldown-starts) | `CooldownStart.AT_START` |
| `float` | [channel_tick_rate](#prop-channel-tick-rate) | `1.0` |
| `bool` | [immobile_during_cast](#prop-immobile-during-cast) | `true` |
| `bool` | [interruptable_cast](#prop-interruptable-cast) | `true` |
| `int` | [interrupt_shield_level](#prop-interrupt-shield-level) | `0` |
| `bool` | [immune_to_silence](#prop-immune-to-silence) | `false` |
| `float` | [movement_speed_while_casting](#prop-movement-speed-while-casting) | `1.0` |
| `AnimationSelectionAbility` | [casting_animation](#prop-casting-animation) |  |
| `CastingSFXSelection` | [casting_sfx](#prop-casting-sfx) |  |
| `VFXSelection` | [casting_vfx](#prop-casting-vfx) |  |

## Methods

| | |
|---|---|
| `void` | [execute_strategy](#method-execute-strategy)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [complete_early](#method-complete-early)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [apply_progressive_powerup_effects](#method-apply-progressive-powerup-effects)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `EffectInstance` | [apply_effect_and_get_instance_for_channel](#method-apply-effect-and-get-instance-for-channel)( `effect: Effect, target: Variant, strategy_instance: UseStrategyInstance` ) |
| `void` | [initialize_channel_timers](#method-initialize-channel-timers)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [setup_tick_channel_mode](#method-setup-tick-channel-mode)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [setup_active_channel_mode](#method-setup-active-channel-mode)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [setup_channel_presentation](#method-setup-channel-presentation)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [play_casting_animation](#method-play-casting-animation)( `strategy_instance: UseStrategyInstance, user: Entity` ) |
| `void` | [play_casting_sfx](#method-play-casting-sfx)( `strategy_instance: UseStrategyInstance, user: Entity` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: UseStrategyInstance, property_name: String` ) |
| `void` | [cleanup_timing_resources](#method-cleanup-timing-resources)( `strategy_instance: UseStrategyInstance, user: Entity` ) |
| `void` | [cleanup_channel_effects](#method-cleanup-channel-effects)( `strategy_instance: UseStrategyInstance, user: Entity` ) |
| `void` | [cleanup_tick_channel_mode](#method-cleanup-tick-channel-mode)( `strategy_instance: UseStrategyInstance` ) |
| `void` | [cleanup_active_channel_mode](#method-cleanup-active-channel-mode)( `strategy_instance: UseStrategyInstance` ) |
| `void` | [cleanup_progressive_powerup_effects](#method-cleanup-progressive-powerup-effects)( `strategy_instance: UseStrategyInstance` ) |

## Enumerations

### enum ChannelMode {#enum-channelmode}

- **TICK_CHANNEL** = `0` - Effects applied on each tick (existing behavior)
- **ACTIVE_CHANNEL** = `1` - Effects applied at start, removed when channel ends

### enum CooldownStart {#enum-cooldownstart}

When the ability's cooldown starts

- **AT_START** = `0` - when the channel begins (default: it cannot be used again meanwhile either way)
- **AT_END** = `1` - when the channel ends

## Property descriptions

### float channel_duration = 2.0 {#prop-channel-duration}

Duration in seconds for the channeling phase

### ChannelMode channel_mode = ChannelMode.TICK_CHANNEL {#prop-channel-mode}

How the channel applies effects (tick-based vs continuous)

### CooldownStart cooldown_starts = CooldownStart.AT_START {#prop-cooldown-starts}

When the ability's cooldown starts: at the start of the channel (default) or when it ends

### float channel_tick_rate = 1.0 {#prop-channel-tick-rate}

Time between effect ticks (only used for TICK_CHANNEL mode)

### bool immobile_during_cast = true {#prop-immobile-during-cast}

Whether the caster becomes immobile during the channeling phase

### bool interruptable_cast = true {#prop-interruptable-cast}

Whether this channel can be interrupted by damage or effects

### int interrupt_shield_level = 0 {#prop-interrupt-shield-level}

Number of interrupt attempts that will be blocked before channel can be interrupted

### bool immune_to_silence = false {#prop-immune-to-silence}

Whether this ability is immune to silence effects (can be channeled while silenced)

### float movement_speed_while_casting = 1.0 {#prop-movement-speed-while-casting}

Movement speed while channeling as a share of the normal speed (1 = unchanged, 0.4 = 40 %). Used when the caster is not immobile during the channel

### AnimationSelectionAbility casting_animation {#prop-casting-animation}

Animation played during the channeling phase

### CastingSFXSelection casting_sfx {#prop-casting-sfx}

Sound effects played during the channeling phase

### VFXSelection casting_vfx {#prop-casting-vfx}

Visual effects shown during the channeling phase

## Method descriptions

### void execute_strategy( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-execute-strategy}

Execute channel strategy - supports both tick and active modes with PowerUp integration

### void complete_early( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-complete-early}

Handle early completion for PowerUp abilities

### void apply_progressive_powerup_effects( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-apply-progressive-powerup-effects}

Apply progressive PowerUp effects during channeling

### EffectInstance apply_effect_and_get_instance_for_channel( effect: Effect, target: Variant, strategy_instance: UseStrategyInstance ) {#method-apply-effect-and-get-instance-for-channel}

Apply effect for channel and return instance for tracking

### void initialize_channel_timers( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-initialize-channel-timers}

Initialize channel timers

### void setup_tick_channel_mode( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-setup-tick-channel-mode}

Setup tick channel mode (existing behavior)

### void setup_active_channel_mode( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-setup-active-channel-mode}

Setup active channel mode (continuous effect)

### void setup_channel_presentation( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-setup-channel-presentation}

Setup channeling visuals and audio

### void play_casting_animation( strategy_instance: UseStrategyInstance, user: Entity ) {#method-play-casting-animation}

Play casting animation

### void play_casting_sfx( strategy_instance: UseStrategyInstance, user: Entity ) {#method-play-casting-sfx}

Play casting sound effect

### Variant get_property_value( strategy_instance: UseStrategyInstance, property_name: String ) {#method-get-property-value}

Get property value with runtime override support

### void cleanup_timing_resources( strategy_instance: UseStrategyInstance, user: Entity ) {#method-cleanup-timing-resources}

Clean up channel-specific resources

### void cleanup_channel_effects( strategy_instance: UseStrategyInstance, user: Entity ) {#method-cleanup-channel-effects}

Clean up channel effects and state

### void cleanup_tick_channel_mode( strategy_instance: UseStrategyInstance ) {#method-cleanup-tick-channel-mode}

Cleanup tick channel mode

### void cleanup_active_channel_mode( strategy_instance: UseStrategyInstance ) {#method-cleanup-active-channel-mode}

Cleanup active channel mode - remove all applied effects

### void cleanup_progressive_powerup_effects( strategy_instance: UseStrategyInstance ) {#method-cleanup-progressive-powerup-effects}

Cleanup PowerUp progressive effects

