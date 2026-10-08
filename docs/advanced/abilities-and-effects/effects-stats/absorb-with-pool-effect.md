<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbsorbWithPoolEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

"Absorb Damage With Pool": for as long as the effect lasts, a pool the target already has (mana, rage ...) also takes part of

## Properties

| | | |
|---|---|---|
| `int` | [pool_definition_id](#prop-pool-definition-id) | `0` |
| `float` | [percent](#prop-percent) | `100.0` |
| `float` | [damage_per_point](#prop-damage-per-point) | `1.0` |
| `float` | [max_damage_per_hit](#prop-max-damage-per-hit) | `0.0` |
| `Array[int]` | [damage_types](#prop-damage-types) | `[]` |
| `bool` | [counts_as_mitigation](#prop-counts-as-mitigation) | `true` |
| `int` | [priority](#prop-priority) | `50` |
| `bool` | [ends_when_empty](#prop-ends-when-empty) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Pool*

### int pool_definition_id = 0 {#prop-pool-definition-id}

The pool of the target that absorbs (a mana pool). It must exist on the target

*Absorption*

### float percent = 100.0 {#prop-percent}

The share (0 to 100) of every hit sent to the pool; the rest goes on to the next layer (shield, health)

### float damage_per_point = 1.0 {#prop-damage-per-point}

Damage absorbed per point of the pool: 0.5 means each point of mana absorbs 2 damage

### float max_damage_per_hit = 0.0 {#prop-max-damage-per-hit}

The most damage taken from one hit (0 = no limit)

### Array[int] damage_types = [] {#prop-damage-types}

The damage types absorbed (none ticked = all)

### bool counts_as_mitigation = true {#prop-counts-as-mitigation}

Damage absorbed counts as mitigation (like a shield) and not as damage taken (like health): leech, threat and the combat log see it that way

### int priority = 50 {#prop-priority}

Layers with a higher priority absorb first: 0 = health, 50 = after shields (100) but before health

### bool ends_when_empty = true {#prop-ends-when-empty}

End the effect (and the layer) as soon as the pool is empty

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

