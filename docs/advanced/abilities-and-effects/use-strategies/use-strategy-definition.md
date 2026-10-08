<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UseStrategyDefinition

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [CastUseStrategyDefinition](/advanced/abilities-and-effects/use-strategies/cast-use-strategy-definition), [ChannelUseStrategyDefinition](/advanced/abilities-and-effects/use-strategies/channel-use-strategy-definition), [InstantUseStrategyDefinition](/advanced/abilities-and-effects/use-strategies/instant-use-strategy-definition), [ToggleUseStrategyDefinition](/advanced/abilities-and-effects/use-strategies/toggle-use-strategy-definition)

UseStrategyDefinition contains all logic for ability usage strategies. Subclasses implement specific timing patterns (instant, cast, channel, toggle). UseStrategyInstance holds only runtime state and delegates logic to this definition.

## Properties

| | | |
|---|---|---|
| `AnimationSelectionAbility` | [on_cast_animation](#prop-on-cast-animation) |  |
| `EntityVoiceSFXSelection` | [voice_cast_sfx](#prop-voice-cast-sfx) |  |
| `SFXSelection` | [on_cast_sfx](#prop-on-cast-sfx) |  |
| `VFXSelection` | [cast_vfx](#prop-cast-vfx) |  |
| `VFXSelectionTelegraph` | [ability_telegraph](#prop-ability-telegraph) |  |
| `AbilityUseStrategy` | [use_type](#prop-use-type) |  |

## Methods

| | |
|---|---|
| `void` | [execute_strategy](#method-execute-strategy)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [complete_early](#method-complete-early)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: UseStrategyInstance, property_name: String` ) |
| `bool` | [try_interrupt](#method-try-interrupt)( `strategy_instance: UseStrategyInstance` ) |
| `void` | [force_cancel](#method-force-cancel)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant, reason: String` ) |
| `void` | [complete_timing_pattern](#method-complete-timing-pattern)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [cancel_timing_pattern](#method-cancel-timing-pattern)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant, message: String` ) |
| `void` | [cleanup_timing_resources](#method-cleanup-timing-resources)( `strategy_instance: UseStrategyInstance, user: Entity` ) |
| `void` | [cleanup_base_resources](#method-cleanup-base-resources)( `strategy_instance: UseStrategyInstance` ) |
| `void` | [handle_completion_presentation](#method-handle-completion-presentation)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [handle_initial_presentation](#method-handle-initial-presentation)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [face_target](#method-face-target)( `user: Entity, target: Variant` ) |
| `Array[VFX]` | [show_vfx](#method-show-vfx)( `vfx_manager: VFXManager, user: Entity, target: Variant` ) |
| `Array[VFX]` | [show_telegraph_vfx](#method-show-telegraph-vfx)( `vfx_manager: VFXManager, user: Entity, target: Variant` ) |
| `Array[VFX]` | [show_telegraph_vfx_with_timer](#method-show-telegraph-vfx-with-timer)( `vfx_manager: VFXManager, user: Entity, target: Variant, timer: Timer = null` ) |
| `void` | [play_voice_sfx](#method-play-voice-sfx)( `user: Entity` ) |
| `void` | [play_cast_sfx](#method-play-cast-sfx)( `user: Entity` ) |
| `void` | [play_ability_animation](#method-play-ability-animation)( `strategy_instance: UseStrategyInstance, user: Entity` ) |
| `String` | [get_weapon_animation_tag](#method-get-weapon-animation-tag)( `strategy_instance: UseStrategyInstance, user: Entity, category: AnimationSelectionAbility.AbilityCategory, hand_preference: AnimationSelectionAbility.HandPreference` ) |
| `void` | [apply_casting_slow](#method-apply-casting-slow)( `strategy_instance: UseStrategyInstance, user: Entity, speed_multiplier: float` ) |
| `void` | [remove_casting_slow](#method-remove-casting-slow)( `strategy_instance: UseStrategyInstance, user: Entity` ) |
| `void` | [on_input_released](#method-on-input-released)( `_strategy_instance: UseStrategyInstance, _user: Entity, _target: Variant` ) |

## Enumerations

### enum AbilityUseStrategy {#enum-abilityusestrategy}

- **INSTANT** = `0`
- **CAST** = `1`
- **CHANNEL** = `2`
- **TOGGLE** = `3`

## Property descriptions

### AnimationSelectionAbility on_cast_animation {#prop-on-cast-animation}

Animation played when the ability completes execution

### EntityVoiceSFXSelection voice_cast_sfx {#prop-voice-cast-sfx}

Voice sound effect played when the ability completes

### SFXSelection on_cast_sfx {#prop-on-cast-sfx}

Sound effect played when the ability completes execution

### VFXSelection cast_vfx {#prop-cast-vfx}

Visual effect shown when the ability completes execution

### VFXSelectionTelegraph ability_telegraph {#prop-ability-telegraph}

Visual telegraph effect that shows the ability's area/target before execution

### AbilityUseStrategy use_type {#prop-use-type}

The type of use strategy this definition represents (instant, cast, channel, toggle)

## Method descriptions

### void execute_strategy( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-execute-strategy}

Virtual method for strategy execution - override in subclasses to implement timing patterns

### void complete_early( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-complete-early}

Virtual method for early completion - override in subclasses that support it (like PowerUp abilities)

### Variant get_property_value( strategy_instance: UseStrategyInstance, property_name: String ) {#method-get-property-value}

Virtual method for property getters with runtime override support - override in subclasses

### bool try_interrupt( strategy_instance: UseStrategyInstance ) {#method-try-interrupt}

Try to interrupt the strategy execution - respects interrupt shields and settings

### void force_cancel( strategy_instance: UseStrategyInstance, user: Entity, target: Variant, reason: String ) {#method-force-cancel}

Force cancellation regardless of shields or settings

### void complete_timing_pattern( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-complete-timing-pattern}

Complete the timing pattern - called when strategy execution finishes successfully

### void cancel_timing_pattern( strategy_instance: UseStrategyInstance, user: Entity, target: Variant, message: String ) {#method-cancel-timing-pattern}

Cancel the timing pattern - called when strategy execution is interrupted or cancelled

### void cleanup_timing_resources( strategy_instance: UseStrategyInstance, user: Entity ) {#method-cleanup-timing-resources}

Clean up strategy-specific timing resources - virtual method for subclasses

### void cleanup_base_resources( strategy_instance: UseStrategyInstance ) {#method-cleanup-base-resources}

Clean up base resources used by all strategies

### void handle_completion_presentation( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-handle-completion-presentation}

Handle completion presentation effects (VFX, SFX, animations)

### void handle_initial_presentation( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-handle-initial-presentation}

Handle initial presentation (used by subclasses for preparation phases)

### void face_target( user: Entity, target: Variant ) {#method-face-target}

Face the entity toward the target appropriately

### Array[VFX] show_vfx( vfx_manager: VFXManager, user: Entity, target: Variant ) {#method-show-vfx}

Create and show VFX using VFXSelection

### Array[VFX] show_telegraph_vfx( vfx_manager: VFXManager, user: Entity, target: Variant ) {#method-show-telegraph-vfx}

Create and show telegraph VFX

### Array[VFX] show_telegraph_vfx_with_timer( vfx_manager: VFXManager, user: Entity, target: Variant, timer: Timer = null ) {#method-show-telegraph-vfx-with-timer}

Create and show telegraph VFX with timer integration

### void play_voice_sfx( user: Entity ) {#method-play-voice-sfx}

Play voice sound effect

### void play_cast_sfx( user: Entity ) {#method-play-cast-sfx}

Play cast sound effect

### void play_ability_animation( strategy_instance: UseStrategyInstance, user: Entity ) {#method-play-ability-animation}

Play ability animation for completion effects

### String get_weapon_animation_tag( strategy_instance: UseStrategyInstance, user: Entity, category: AnimationSelectionAbility.AbilityCategory, hand_preference: AnimationSelectionAbility.HandPreference ) {#method-get-weapon-animation-tag}

Get the weapon animation tag from the entity This is the core data-driven animation resolution method First checks Entity.get_animation_tags() (works for NPCs with definition tags) Falls back to equipment lookup for entities with actual weapons (Players)

### void apply_casting_slow( strategy_instance: UseStrategyInstance, user: Entity, speed_multiplier: float ) {#method-apply-casting-slow}

Slows the user for the length of a cast or channel (multiplier 0.4 = 40 % of the normal speed; 1 = no change). Taken back by `remove_casting_slow`

### void remove_casting_slow( strategy_instance: UseStrategyInstance, user: Entity ) {#method-remove-casting-slow}

*No description yet.*

### void on_input_released( _strategy_instance: UseStrategyInstance, _user: Entity, _target: Variant ) {#method-on-input-released}

The key or button that started the ability was released (strategies that wait for the release, like a drawn bow, act on it; the others ignore it)

