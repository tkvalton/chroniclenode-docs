<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProficiencyDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A skill a player gets better at by using it, or is trained in: swords, heavy armor, fire magic, lockpicking.

## Description

A proficiency has a level from 0 to `max_level`. Its experience comes from use (hitting with a weapon of a class or type, being hit in armor of a class, using an ability of a school), from rewards and from scripts. It has **stat effects of its own**: the level is the "points" they are worked out from (a Linear formula of 0.5 is "half a percent per level"), and by default they only work while the player uses what the proficiency is for (holds the weapon, wears the armor). It can also **gate** the equipment it is linked to: items of its weapon classes, weapon types and armor classes need a level to be equipped. A requirement can ask for a level (RequirementProficiency) and a reward can give experience or levels (ProficiencyReward). The levels belong to the player and are saved with it (ProficiencyTracker). See docs/systems/entity-stats.md, sections 29 and 31.

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `int` | [max_level](#prop-max-level) | `100` |
| `int` | [starting_level](#prop-starting-level) | `0` |
| `CalculationFormula` | [experience_formula](#prop-experience-formula) |  |
| `Array[int]` | [weapon_classes](#prop-weapon-classes) | `[]` |
| `Array[int]` | [weapon_types](#prop-weapon-types) | `[]` |
| `Array[int]` | [armor_classes](#prop-armor-classes) | `[]` |
| `Array[int]` | [schools](#prop-schools) | `[]` |
| `float` | [experience_per_use](#prop-experience-per-use) | `1.0` |
| `float` | [minimum_seconds_between_gains](#prop-minimum-seconds-between-gains) | `0.0` |
| `int` | [level_needed_to_equip](#prop-level-needed-to-equip) | `0` |
| `Array[StatEffect]` | [stat_effects](#prop-stat-effects) | `[]` |
| `bool` | [effects_need_matching_equipment](#prop-effects-need-matching-equipment) | `true` |

## Methods

| | |
|---|---|
| `float` | [experience_to_next_level](#method-experience-to-next-level)( `level: int` ) |
| `StatDefinition` | [get_virtual_stat](#method-get-virtual-stat)() |
| `bool` | [uses_equipment](#method-uses-equipment)() |
| `bool` | [is_for_weapon](#method-is-for-weapon)( `weapon_class_id: int, weapon_type_id: int` ) |
| `bool` | [is_trained_by_armor_class](#method-is-trained-by-armor-class)( `armor_class_id: int` ) |
| `bool` | [is_trained_by_school](#method-is-trained-by-school)( `school_id: int` ) |
| `bool` | [is_trained_by_weapon_type](#method-is-trained-by-weapon-type)( `weapon_type_id: int` ) |
| `Array[Requirement]` | [requirements_for_item](#method-requirements-for-item)( `item: ItemDefinition` ) *static* |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Constants

- `int` **VIRTUAL_STAT_BASE** = `StatDefinition.VIRTUAL_ID_BASE` - The ids of the stat that carries the effects of a proficiency start here (the id of the proficiency is added), so they never meet the ids of stats

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

*What it is for*

### Array[int] weapon_classes = [] {#prop-weapon-classes}

Weapon classes (Sword, Dagger, Bow ...): hitting with one trains the proficiency, it gates them, and its effects work while one is held (WeaponClassDefinition ids)

### Array[int] weapon_types = [] {#prop-weapon-types}

Weapon types (One Hand, Two Hand, Ranged ...): the same, for whole types of weapon (WeaponTypeDefinition ids)

### Array[int] armor_classes = [] {#prop-armor-classes}

Armor classes (Plate, Mail, Leather ...): being hit in one trains the proficiency, it gates them, and its effects work while one is worn (ArmorClassDefinition ids)

### Array[int] schools = [] {#prop-schools}

Schools (Arcane, Divine ...): using an ability of one trains the proficiency (SchoolTypeDefinition ids)

*Gaining experience*

### float experience_per_use = 1.0 {#prop-experience-per-use}

The experience of one use

### float minimum_seconds_between_gains = 0.0 {#prop-minimum-seconds-between-gains}

Uses closer together than this give nothing (seconds, 0 = every use counts): a training dummy cannot be farmed with a thousand taps

*Requirements*

### int level_needed_to_equip = 0 {#prop-level-needed-to-equip}

The level the player needs to equip the weapons and armor this proficiency is for (0 = no level needed: anyone can equip them). A player who does not have the level cannot wear the item, so give the starting level to the classes that start trained (a ProficiencyReward in their level 1 rewards)

*Effects*

### Array[StatEffect] stat_effects = [] {#prop-stat-effects}

What the level does. These are stat effects like the ones of a stat, and the **level of the proficiency is their points**: a Calculation Modifier with a Linear formula of 0.5 makes the hits half a percent stronger for every level

### bool effects_need_matching_equipment = true {#prop-effects-need-matching-equipment}

The effects only work while the player uses what the proficiency is for: holds a weapon of its classes or types, or wears a piece of its armor classes. Off: they always work. A proficiency with no weapon or armor (a school, lockpicking) always works either way

## Method descriptions

### float experience_to_next_level( level: int ) {#method-experience-to-next-level}

Experience needed to go from `level` to the next one

### StatDefinition get_virtual_stat() {#method-get-virtual-stat}

The stat that carries the effects of this proficiency: a hidden stat with the effects of the proficiency (the same array) that the entities get like any other stat. Its points are the level of the proficiency (see ProficiencyTracker)

### bool uses_equipment() {#method-uses-equipment}

Is this proficiency tied to weapons or armor (so its effects can wait for them)?

### bool is_for_weapon( weapon_class_id: int, weapon_type_id: int ) {#method-is-for-weapon}

Does a weapon of this class and type train the proficiency, gate on it, and make its effects work?

### bool is_trained_by_armor_class( armor_class_id: int ) {#method-is-trained-by-armor-class}

Does equipment of this armor class?

### bool is_trained_by_school( school_id: int ) {#method-is-trained-by-school}

Does an ability of this school train the proficiency?

### bool is_trained_by_weapon_type( weapon_type_id: int ) {#method-is-trained-by-weapon-type}

Does a weapon of this type train the proficiency? (kept for scripts that only know the type)

### Array[Requirement] requirements_for_item( item: ItemDefinition ) {#method-requirements-for-item}

The requirements the proficiencies put on an item: for every proficiency that gates the weapon class, weapon type or armor class of the item, a RequirementProficiency for its level. Items that are not equipment have none

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

