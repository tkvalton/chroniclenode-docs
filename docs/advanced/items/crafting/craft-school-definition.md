<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftSchoolDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition of a crafting school (Blacksmithing, Tailoring, Alchemy, etc.) Contains static data that can be shared across multiple instances

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `ProgressionMode` | [progression_mode](#prop-progression-mode) | `ProgressionMode.POINTS` |
| `CalculationFormula` | [level_cost_formula](#prop-level-cost-formula) |  |
| `int` | [max_skill_level](#prop-max-skill-level) | `100` |
| `int` | [base_skill_point_cost](#prop-base-skill-point-cost) | `10` |
| `int` | [skill_cost_increase_per_level](#prop-skill-cost-increase-per-level) | `2` |
| `Array[String]` | [recipe_categories](#prop-recipe-categories) | `["General"]` |
| `Array[int]` | [starting_recipes](#prop-starting-recipes) | `[]` |
| `int` | [starting_skill_level](#prop-starting-skill-level) | `1` |
| `bool` | [starts_learned](#prop-starts-learned) | `true` |
| `Array[SkillTier]` | [tiers](#prop-tiers) | `[]` |
| `Array[SkillSpecialization]` | [specializations](#prop-specializations) | `[]` |
| `Array[Requirement]` | [learning_requirements](#prop-learning-requirements) | `[]` |
| `SkillTree` | [skill_tree](#prop-skill-tree) | `null` |
| `Array[int]` | [skill_trees](#prop-skill-trees) | `[]` |

## Methods

| | |
|---|---|
| `String` | [get_category_label](#method-get-category-label)( `category: String` ) |
| `int` | [get_skill_point_cost_for_level](#method-get-skill-point-cost-for-level)( `level: int` ) |
| `int` | [get_experience_required_for_level](#method-get-experience-required-for-level)( `level: int` ) |
| `int` | [get_total_experience_for_level](#method-get-total-experience-for-level)( `level: int` ) |

## Enumerations

### enum ProgressionMode {#enum-progressionmode}

How the profession gains skill

- **POINTS** = `0` - Every craft gives points towards the next level (the cost of a level follows the cost formula)
- **SKILL_UPS** = `1` - A craft gives a chance to go up one level at once: the chance comes from the recipe (its range and its curve), as in World of Warcraft

## Property descriptions

### Color color = Color.WHITE {#prop-color}

Color theme for UI elements related to this school

### ProgressionMode progression_mode = ProgressionMode.POINTS {#prop-progression-mode}

How a craft raises the skill: points that fill a bar, or a chance of a skill-up

### CalculationFormula level_cost_formula {#prop-level-cost-formula}

The points a level costs (Points mode): a formula that gets the level the crafter is at and gives the points to reach the next one. Empty = the straight price below

### int max_skill_level = 100 {#prop-max-skill-level}

Maximum skill level achievable in this school

### int base_skill_point_cost = 10 {#prop-base-skill-point-cost}

Base skill point cost to level up at level 1

### int skill_cost_increase_per_level = 2 {#prop-skill-cost-increase-per-level}

How much the skill point cost increases per level (e.g., 2 means level 2 costs 12, level 3 costs 14)

### Array[String] recipe_categories = ["General"] {#prop-recipe-categories}

Available categories within this school for organizing recipes

### Array[int] starting_recipes = [] {#prop-starting-recipes}

Recipes that are immediately available when learning this school

### int starting_skill_level = 1 {#prop-starting-skill-level}

Starting skill level (usually 1, but could be 0 for locked schools)

### bool starts_learned = true {#prop-starts-learned}

The profession is known from the start of the game. Off: it has to be learned (from a trainer, a quest or an event) before anybody can craft with it

### Array[SkillTier] tiers = [] {#prop-tiers}

The steps of the profession (Apprentice, Journeyman, Expert, Master). A crafter is in one tier at a time and the skill level cannot go above the cap of the tier until a trainer, a quest or an event trains the next one. Empty = no caps: the level goes up to the maximum skill level

### Array[SkillSpecialization] specializations = [] {#prop-specializations}

The choices inside the profession (weaponsmith or armorsmith). A crafter chooses with a trainer, a quest or an event

### Array[Requirement] learning_requirements = [] {#prop-learning-requirements}

Requirements to learn this craft school (could be quest, level, etc.)

### SkillTree skill_tree = null {#prop-skill-tree}

Optional skill tree for this craft school

### Array[int] skill_trees = [] {#prop-skill-trees}

Skill trees of this profession (ids of the skill_tree type). They open when the profession is learned and spend the points of the profession pools (SkillPointPool.scope). The older field above is not read

## Method descriptions

### String get_category_label( category: String ) {#method-get-category-label}

The label of a recipe category in the language of the player. The category text is the id the recipes use; the label is the text translated in the Localization tables

### int get_skill_point_cost_for_level( level: int ) {#method-get-skill-point-cost-for-level}

Calculate skill point cost for a specific level

### int get_experience_required_for_level( level: int ) {#method-get-experience-required-for-level}

Calculate experience needed for a specific level

### int get_total_experience_for_level( level: int ) {#method-get-total-experience-for-level}

Calculate total experience needed from level 1 to target level

