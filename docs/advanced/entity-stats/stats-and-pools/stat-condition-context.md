<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatConditionContext

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What the conditions on a stat effect can see: the entity that owns the stat, and the opponent of the hit being calculated (the defender while the owner attacks, the attacker while the owner defends; null outside a hit). EntityCondition understands it: "argument entity" is the owner, and the new target kind "opponent" is the other side. See docs/systems/entity-stats.md, section 24.3.

## Variables

| | | |
|---|---|---|
| `Variant` | [owner](#var-owner) | `null` |
| `Variant` | [opponent](#var-opponent) | `null` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) | `null` |

## Methods

| | |
|---|---|
| `StatConditionContext` | [create](#method-create)( `p_owner: Variant, p_opponent: Variant = null, p_system_hub: GameHost.SystemHub = null` ) *static* |

## Variable descriptions

### Variant owner = null {#var-owner}

*No description yet.*

### Variant opponent = null {#var-opponent}

*No description yet.*

### GameHost.SystemHub system_hub = null {#var-system-hub}

*No description yet.*

## Method descriptions

### StatConditionContext create( p_owner: Variant, p_opponent: Variant = null, p_system_hub: GameHost.SystemHub = null ) {#method-create}

*No description yet.*

