<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NpcLevels

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The level of an NPC and the experience it gives, by the settings of the project (Gameplay Config: NPC Level Scaling and Kill Experience).

## Description

- **Level scaling.** When an NPC is made it takes the level of its definition (or of the placed NPC), and, if the project scales NPC levels, that level is

moved towards the level of the party (scaled_level). The level is fixed from then on: an NPC does not change level while it lives or when the player switches character; a saved NPC keeps the level it had. The entity types of an NPC (elite, rare, boss) can change how it scales (EntityTagDefinition.level_scaling).

- **Kill experience.** What a defeated NPC gives: the settings' amount for its (scaled) level, times the multipliers of its definition, of the placed NPC and of

its entity types (kill_experience). See section 7 of the entity document in docs/systems.

## Methods

| | |
|---|---|
| `int` | [reference_level](#method-reference-level)( `party_manager: PartyManager, config: GameplayConfig = null` ) *static* |
| `Array` | [entity_types_of](#method-entity-types-of)( `entity: Entity` ) *static* |
| `int` | [scaled_level](#method-scaled-level)( `npc: Entity, base_level: int, party_manager: PartyManager` ) *static* |
| `float` | [experience_multiplier](#method-experience-multiplier)( `npc: NPC` ) *static* |
| `int` | [kill_experience](#method-kill-experience)( `npc: NPC` ) *static* |

## Method descriptions

### int reference_level( party_manager: PartyManager, config: GameplayConfig = null ) {#method-reference-level}

The level the NPCs scale to: the party's average, the highest of the party, or the character in control. 0 when there is no party yet (nothing to scale to)

### Array entity_types_of( entity: Entity ) {#method-entity-types-of}

The entity types (EntityTagDefinition) of an entity, in the order of its list

### int scaled_level( npc: Entity, base_level: int, party_manager: PartyManager ) {#method-scaled-level}

The level an NPC takes when it is made: base_level (its definition or its placed NPC) moved by the scaling settings of the project

### float experience_multiplier( npc: NPC ) {#method-experience-multiplier}

The multiplier on the experience of an NPC from its definition, its placed NPC and its entity types

### int kill_experience( npc: NPC ) {#method-kill-experience}

The experience a defeated NPC gives

