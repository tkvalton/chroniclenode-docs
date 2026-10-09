<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityTagDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A type tag an entity can have: "Humanoid", "Beast", "Undead", "Construct", "Demon" ... Entities get them from their definition (EntityDefinition.entity_tags); code can add or remove them at runtime (Entity.add_entity_tag / remove_entity_tag). Conditions read them (EntityHasTagCondition), so "+30 % damage against Undead" is a stat effect with the condition "opponent has tag Undead". See docs/systems/entity-stats.md, section 24.3.

## Description

A type can also be a **rank** (Elite, Rare, Boss): it can change how the NPCs that have it level and how much experience they give (the NPC section below). When the project does not scale NPC levels (Gameplay Config, NPC Level Scaling) a rank is only a label for the interface and for conditions.

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `ScalingRule` | [level_scaling](#prop-level-scaling) | `ScalingRule.FOLLOW_GAME` |
| `int` | [level_offset](#prop-level-offset) | `0` |
| `float` | [experience_multiplier](#prop-experience-multiplier) | `1.0` |

## Enumerations

### enum ScalingRule {#enum-scalingrule}

How an NPC with this type follows the level of the player (Gameplay Config, NPC Level Scaling)

- **FOLLOW_GAME** = `0` - Like every NPC: the settings of the project decide
- **NEVER_SCALES** = `1` - Keeps the level of its definition, whatever the player's level
- **FIXED_OFFSET** = `2` - Always a number of levels above (or under) the player: a boss that is 3 levels above you

## Property descriptions

### Color color = Color.WHITE {#prop-color}

The color that stands for this in the interface

*NPC Level and Experience*

### ScalingRule level_scaling = ScalingRule.FOLLOW_GAME {#prop-level-scaling}

How an NPC of this type follows the level of the player. Only matters when the project scales NPC levels. If an NPC has several types, Fixed offset wins over Never scales

### int level_offset = 0 {#prop-level-offset}

For Fixed offset: levels above the player (negative: under). 3 = always 3 levels above

### float experience_multiplier = 1.0 {#prop-experience-multiplier}

Experience a defeated NPC of this type gives, as a multiplier (an elite gives 3 times as much). All the types of an NPC multiply

