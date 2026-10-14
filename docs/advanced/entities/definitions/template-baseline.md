<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TemplateBaseline

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

What a template was the last time an entity that uses it looked at it: the base values of its stats and pools, its immunities and its abilities. The entity keeps this next to its own values, so that when the template changes the difference can be added to the entity: a template that gains 100 health gives every entity of it 100 more, whatever each of them added or took away for itself. See EntityTemplates.

## Properties

| | | |
|---|---|---|
| `StatsData` | [stats_data](#prop-stats-data) |  |
| `int` | [basic_attack](#prop-basic-attack) | `0` |
| `Array[int]` | [active_abilities](#prop-active-abilities) | `[]` |
| `Array[int]` | [passive_abilities](#prop-passive-abilities) | `[]` |

## Property descriptions

### StatsData stats_data {#prop-stats-data}

The stats data of the template at that time (a copy)

### int basic_attack = 0 {#prop-basic-attack}

The basic attack of the template at that time (NPCs)

### Array[int] active_abilities = [] {#prop-active-abilities}

The active abilities of the template at that time (NPCs)

### Array[int] passive_abilities = [] {#prop-passive-abilities}

The passive abilities of the template at that time (NPCs)

