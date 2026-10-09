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
| `PartyManager` | [party_manager_of](#method-party-manager-of)( `npc: Entity` ) *static* |
| `int` | [base_level_of](#method-base-level-of)( `npc: NPC` ) *static* |
| `bool` | [rescale](#method-rescale)( `npc: NPC, party_manager: PartyManager` ) *static* |
| `float` | [experience_multiplier](#method-experience-multiplier)( `npc: NPC` ) *static* |
| `int` | [kill_experience](#method-kill-experience)( `npc: NPC` ) *static* |

## Method descriptions

### int reference_level( party_manager: PartyManager, config: GameplayConfig = null ) {#method-reference-level}

The level the NPCs scale to: the party's average, the highest of the party, or the character in control. 0 when there is no party yet (nothing to scale to)

### Array entity_types_of( entity: Entity ) {#method-entity-types-of}

The entity types (EntityTagDefinition) of an entity, in the order of its list

### int scaled_level( npc: Entity, base_level: int, party_manager: PartyManager ) {#method-scaled-level}

The level an NPC takes when it is made: base_level (its definition or its placed NPC) moved by the scaling settings of the project

### PartyManager party_manager_of( npc: Entity ) {#method-party-manager-of}

The party manager an NPC can reach (null when it has no world yet)

### int base_level_of( npc: NPC ) {#method-base-level-of}

The level the NPC has by its definition or its placed NPC, before any scaling

### bool rescale( npc: NPC, party_manager: PartyManager ) {#method-rescale}

Gives a living NPC the level the party needs now (after a respawn, a level-up of the party ...). An NPC in a fight waits for the fight to end. Returns true when the level changed

### float experience_multiplier( npc: NPC ) {#method-experience-multiplier}

The multiplier on the experience of an NPC from its definition, its placed NPC and its entity types

### int kill_experience( npc: NPC ) {#method-kill-experience}

The experience a defeated NPC gives

