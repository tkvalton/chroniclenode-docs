<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProficiencyDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A skill a player gets better at by using it, or is trained in: swords, heavy armor, fire magic, lockpicking.

## Description

A proficiency has a level from 0 to `max_level`. Its experience comes from use (hitting with a weapon of a type, being hit in armor of a class, using an ability of a school), from rewards and from scripts. Each level can give points to a **stat**, so everything a stat can do (more hit chance, more damage, less cast time) follows from the skill. A requirement can ask for a level (RequirementProficiency) and a reward can give experience or levels (ProficiencyReward). The levels belong to the player and are saved with it (ProficiencyTracker). See docs/systems/entity-stats.md, section 29.

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `int` | [max_level](#prop-max-level) | `100` |
| `int` | [starting_level](#prop-starting-level) | `0` |
| `CalculationFormula` | [experience_formula](#prop-experience-formula) |  |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `float` | [points_per_level](#prop-points-per-level) | `1.0` |
| `Array[int]` | [weapon_types](#prop-weapon-types) | `[]` |
| `Array[int]` | [armor_classes](#prop-armor-classes) | `[]` |
| `Array[int]` | [schools](#prop-schools) | `[]` |
| `float` | [experience_per_use](#prop-experience-per-use) | `1.0` |
| `float` | [minimum_seconds_between_gains](#prop-minimum-seconds-between-gains) | `0.0` |

## Methods

| | |
|---|---|
| `float` | [experience_to_next_level](#method-experience-to-next-level)( `level: int` ) |
| `bool` | [is_trained_by_weapon_type](#method-is-trained-by-weapon-type)( `weapon_type_id: int` ) |
| `bool` | [is_trained_by_armor_class](#method-is-trained-by-armor-class)( `armor_class_id: int` ) |
| `bool` | [is_trained_by_school](#method-is-trained-by-school)( `school_id: int` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### Color color = Color.WHITE {#prop-color}

The color that stands for this in the interface

*Levels*

### int max_level = 100 {#prop-max-level}

The highest level

### int starting_level = 0 {#prop-starting-level}

The level a new player starts at

### CalculationFormula experience_formula {#prop-experience-formula}

Experience needed to go from level n to level n+1, from the level n. Empty = 10 x (n + 1)

*Stat*

### int stat_id = 0 {#prop-stat-id}

The stat that gets points from the level (0 = none). A stat like "Sword Skill" can carry hit chance, damage and anything else

### float points_per_level = 1.0 {#prop-points-per-level}

Points of the stat for every level of the proficiency

*Gained by use*

### Array[int] weapon_types = [] {#prop-weapon-types}

Hitting an enemy while holding a weapon of one of these types gives experience (WeaponTypeDefinition ids)

### Array[int] armor_classes = [] {#prop-armor-classes}

Being hit while wearing equipment of one of these armor classes gives experience (ArmorClassDefinition ids)

### Array[int] schools = [] {#prop-schools}

Using an ability of one of these schools gives experience (SchoolTypeDefinition ids)

### float experience_per_use = 1.0 {#prop-experience-per-use}

The experience of one use

### float minimum_seconds_between_gains = 0.0 {#prop-minimum-seconds-between-gains}

Uses closer together than this give nothing (seconds, 0 = every use counts): a training dummy cannot be farmed with a thousand taps

## Method descriptions

### float experience_to_next_level( level: int ) {#method-experience-to-next-level}

Experience needed to go from `level` to the next one

### bool is_trained_by_weapon_type( weapon_type_id: int ) {#method-is-trained-by-weapon-type}

Does a weapon of this type train the proficiency?

### bool is_trained_by_armor_class( armor_class_id: int ) {#method-is-trained-by-armor-class}

Does equipment of this armor class train the proficiency?

### bool is_trained_by_school( school_id: int ) {#method-is-trained-by-school}

Does an ability of this school train the proficiency?

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

