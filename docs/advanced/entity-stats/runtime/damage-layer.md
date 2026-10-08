<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamageLayer

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

A pool taking part of the damage an entity suffers, for as long as the layer exists. Which pools are damage layers (and in what order) is the layers' business, not the pool lists': health and shields have a permanent layer from their definition, an effect can give any pool a temporary one (a mana shield turns mana into a second health bar). See docs/systems/entity-stats.md, section 26.

## Variables

| | | |
|---|---|---|
| `PoolInstance` | [pool](#var-pool) |  |
| `int` | [priority](#var-priority) | `0` |
| `float` | [ratio](#var-ratio) | `1.0` |
| `float` | [percent](#var-percent) | `100.0` |
| `float` | [max_damage_per_hit](#var-max-damage-per-hit) | `0.0` |
| `Array[int]` | [damage_types](#var-damage-types) | `[]` |
| `bool` | [counts_as_mitigation](#var-counts-as-mitigation) | `false` |
| `Variant` | [source](#var-source) | `null` |
| `int` | [sequence](#var-sequence) | `0` |

## Methods

| | |
|---|---|
| `DamageLayer` | [for_pool](#method-for-pool)( `p_pool: PoolInstance` ) *static* |
| `float` | [absorb](#method-absorb)( `incoming: float, damage_type: int, pool_cost_multiplier: float = 1.0` ) |
| `bool` | [is_available](#method-is-available)() |

## Variable descriptions

### PoolInstance pool {#var-pool}

The pool that absorbs

### int priority = 0 {#var-priority}

Layers with a higher priority absorb first

### float ratio = 1.0 {#var-ratio}

Damage absorbed per point of the pool: 1 = point for point, 0.5 = each point of mana absorbs 2 damage

### float percent = 100.0 {#var-percent}

The share (0 to 100) of the damage reaching this layer that it takes; the rest goes on to the next layer

### float max_damage_per_hit = 0.0 {#var-max-damage-per-hit}

The most damage this layer takes from one hit (0 = no limit); the pool definition has its own limit in pool points

### Array[int] damage_types = [] {#var-damage-types}

The damage types this layer takes (empty = every type the pool absorbs)

### bool counts_as_mitigation = false {#var-counts-as-mitigation}

Does what this layer absorbs count as mitigation (a shield) rather than damage taken (health)? Leech, threat and the combat log tell them apart

### Variant source = null {#var-source}

The effect instance that put the layer there (null for a permanent one)

### int sequence = 0 {#var-sequence}

Order of creation: equal priorities absorb newest first

## Method descriptions

### DamageLayer for_pool( p_pool: PoolInstance ) {#method-for-pool}

The permanent layer of a pool, from its definition

### float absorb( incoming: float, damage_type: int, pool_cost_multiplier: float = 1.0 ) {#method-absorb}

Takes what it can of `incoming` damage from the pool and returns how much damage it absorbed (in damage, not pool points)

### bool is_available() {#method-is-available}

Can this layer still take damage?

