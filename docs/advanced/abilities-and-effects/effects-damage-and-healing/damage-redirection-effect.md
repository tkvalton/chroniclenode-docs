<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamageRedirectionEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

DamageRedirectionEffect redirects damage from the target to the originator.

## Properties

| | | |
|---|---|---|
| `float` | [percentage_of_damage](#prop-percentage-of-damage) | `50.0` |
| `int` | [maximum_damage_per_redirect](#prop-maximum-damage-per-redirect) | `0` |
| `int` | [total_damage_to_redirect](#prop-total-damage-to-redirect) | `0` |
| `bool` | [redirect_tick_damage](#prop-redirect-tick-damage) | `false` |
| `float` | [damage_reduction_on_target](#prop-damage-reduction-on-target) | `0.0` |
| `int` | [redirect_damage_type](#prop-redirect-damage-type) | `0` |
| `bool` | [can_redirect_be_avoided](#prop-can-redirect-be-avoided) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `Dictionary` | [process_damage_redirection](#method-process-damage-redirection)( `damage_amount: float, damage_type: int, damage_source: Entity, original_effect: EffectInstance, effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `int` | [get_damage_redirected](#method-get-damage-redirected)( `effect_instance: EffectInstance` ) |
| `int` | [get_remaining_redirect_capacity](#method-get-remaining-redirect-capacity)( `effect_instance: EffectInstance` ) |
| `float` | [get_redirection_preview](#method-get-redirection-preview)( `base_damage: float` ) |
| `bool` | [is_redirection_active](#method-is-redirection-active)( `effect_instance: EffectInstance` ) |
| `Entity` | [get_guardian](#method-get-guardian)( `effect_instance: EffectInstance` ) |
| `Entity` | [get_protected_target](#method-get-protected-target)( `effect_instance: EffectInstance` ) |
| `bool` | [is_entity_protected](#method-is-entity-protected)( `entity: Entity, effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `Dictionary` | [get_relationship_info](#method-get-relationship-info)( `effect_instance: EffectInstance` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

### float percentage_of_damage = 50.0 {#prop-percentage-of-damage}

Percentage of damage to redirect

### int maximum_damage_per_redirect = 0 {#prop-maximum-damage-per-redirect}

Max damage per redirect (0 = unlimited)

### int total_damage_to_redirect = 0 {#prop-total-damage-to-redirect}

Total damage cap before effect ends (0 = unlimited)

### bool redirect_tick_damage = false {#prop-redirect-tick-damage}

Whether to redirect DoT/tick damage

### float damage_reduction_on_target = 0.0 {#prop-damage-reduction-on-target}

Additional damage reduction for original target (0-100)

### int redirect_damage_type = 0 {#prop-redirect-damage-type}

Override damage type for redirected damage (empty = use original)

### bool can_redirect_be_avoided = true {#prop-can-redirect-be-avoided}

Whether redirected damage can be avoided by guardian

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect, setting up damage redirection

### Dictionary process_damage_redirection( damage_amount: float, damage_type: int, damage_source: Entity, original_effect: EffectInstance, effect_instance: EffectInstance ) {#method-process-damage-redirection}

Process damage redirection for a specific incoming damage event This is called by StatsComponent during damage processing, BEFORE pipeline calculations

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect

### int get_damage_redirected( effect_instance: EffectInstance ) {#method-get-damage-redirected}

Gets the current amount of damage redirected for a specific effect instance

### int get_remaining_redirect_capacity( effect_instance: EffectInstance ) {#method-get-remaining-redirect-capacity}

Gets the remaining damage that can be redirected for a specific effect instance

### float get_redirection_preview( base_damage: float ) {#method-get-redirection-preview}

Calculate potential redirection amount for preview/tooltip purposes

### bool is_redirection_active( effect_instance: EffectInstance ) {#method-is-redirection-active}

Check if redirection effect is still active and has capacity

### Entity get_guardian( effect_instance: EffectInstance ) {#method-get-guardian}

Get guardian entity for this redirection effect

### Entity get_protected_target( effect_instance: EffectInstance ) {#method-get-protected-target}

Get protected entity for this redirection effect

### bool is_entity_protected( entity: Entity, effect_instance: EffectInstance ) {#method-is-entity-protected}

Check if an entity is protected by this redirection effect

### String get_effect_description() {#method-get-effect-description}

Generates effect description for tooltips

### Dictionary get_relationship_info( effect_instance: EffectInstance ) {#method-get-relationship-info}

Get relationship info for UI display

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

