<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityTagDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A type tag an entity can have: "Humanoid", "Beast", "Undead", "Construct", "Demon" ... Entities get them from their definition (EntityDefinition.entity_tags); code can add or remove them at runtime (Entity.add_entity_tag / remove_entity_tag). Conditions read them (EntityHasTagCondition), so "+30 % damage against Undead" is a stat effect with the condition "opponent has tag Undead". See docs/systems/entity-stats.md, section 24.3.

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |

## Property descriptions

### Color color = Color.WHITE {#prop-color}

The color that stands for this in the interface

