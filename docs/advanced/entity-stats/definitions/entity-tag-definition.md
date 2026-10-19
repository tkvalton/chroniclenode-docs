<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityTagDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A type tag an entity can have: "Humanoid", "Beast", "Undead", "Construct", "Demon" ... Entities get them from their definition (EntityDefinition.entity_tags); code can add or remove them at runtime (Entity.add_entity_tag / remove_entity_tag). Conditions read them (EntityHasTagCondition), so "+30 % damage against Undead" is a stat effect with the condition "opponent has tag Undead". See docs/systems/entity-stats.md, section 24.3.

## Description

A tag is one of two **kinds**: a **Type** (what an entity is: Humanoid, Beast, Undead) or a **Rank** (how important it is: Normal, Elite, Rare, Boss). An entity has any number of types and **one rank**. Both are tags, so everything a tag does works for both: conditions read them ("opponent has the tag Boss"), they apply effects, and the interface can show them (the color, the icon, a different unit frame or nameplate, a map icon: the interface decides what a tag looks like). A rank can also change how the NPCs that have it level and how much experience they give (the NPC section below). When the project does not scale NPC levels (Gameplay Config, NPC Level Scaling) a rank is only a label for the interface and for conditions.

## Properties

| | | |
|---|---|---|
| `Kind` | [kind](#prop-kind) | `Kind.TYPE` |
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `Array[int]` | [applied_effects](#prop-applied-effects) | `[]` |
| `ScalingRule` | [level_scaling](#prop-level-scaling) | `ScalingRule.FOLLOW_GAME` |
| `int` | [level_offset](#prop-level-offset) | `0` |
| `float` | [experience_multiplier](#prop-experience-multiplier) | `1.0` |

## Enumerations

### enum Kind {#enum-kind}

The kinds of tag: a type (Humanoid, Beast, Undead) or a rank (Normal, Elite, Rare, Boss)

- **TYPE** = `0` - What an entity is. An entity can have several
- **RANK** = `1` - How important an entity is. An entity has one

### enum ScalingRule {#enum-scalingrule}

How an NPC with this type follows the level of the player (Gameplay Config, NPC Level Scaling)

- **FOLLOW_GAME** = `0` - Like every NPC: the settings of the project decide
- **NEVER_SCALES** = `1` - Keeps the level of its definition, whatever the player's level
- **FIXED_OFFSET** = `2` - Always a number of levels above (or under) the player: a boss that is 3 levels above you

## Property descriptions

### Kind kind = Kind.TYPE {#prop-kind}

A type or a rank. The editors list types where an entity type is chosen and ranks where its rank is chosen

### Color color = Color.WHITE {#prop-color}

The color that stands for this in the interface

*Effects Applied To The Type*

### Array[int] applied_effects = [] {#prop-applied-effects}

The effects (Effect ids) every entity of this type has, as long as it has the type: Undead takes more damage from Holy, a Construct is immune to poison. They are put on the entity when it is made (and when the type is added to it while playing) and taken off when the type is taken away. Empty (default) = the type changes nothing by itself

*NPC Level and Experience*

### ScalingRule level_scaling = ScalingRule.FOLLOW_GAME {#prop-level-scaling}

How an NPC of this type follows the level of the player. Only matters when the project scales NPC levels. If an NPC has several types, Fixed offset wins over Never scales

### int level_offset = 0 {#prop-level-offset}

For Fixed offset: levels above the player (negative: under). 3 = always 3 levels above

### float experience_multiplier = 1.0 {#prop-experience-multiplier}

Experience a defeated NPC of this type gives, as a multiplier (an elite gives 3 times as much). All the types of an NPC multiply

