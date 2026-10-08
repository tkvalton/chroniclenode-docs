<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftSchoolDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition of a crafting school (Blacksmithing, Tailoring, Alchemy, etc.) Contains static data that can be shared across multiple instances

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `int` | [max_skill_level](#prop-max-skill-level) | `100` |
| `int` | [base_skill_point_cost](#prop-base-skill-point-cost) | `10` |
| `int` | [skill_cost_increase_per_level](#prop-skill-cost-increase-per-level) | `2` |
| `Array[String]` | [recipe_categories](#prop-recipe-categories) | `["General"]` |
| `Array[int]` | [starting_recipes](#prop-starting-recipes) | `[]` |
| `int` | [starting_skill_level](#prop-starting-skill-level) | `1` |
| `Array[Requirement]` | [learning_requirements](#prop-learning-requirements) | `[]` |
| `SkillTree` | [skill_tree](#prop-skill-tree) | `null` |

## Methods

| | |
|---|---|
| `int` | [get_skill_point_cost_for_level](#method-get-skill-point-cost-for-level)( `level: int` ) |
| `int` | [get_experience_required_for_level](#method-get-experience-required-for-level)( `level: int` ) |
| `int` | [get_total_experience_for_level](#method-get-total-experience-for-level)( `level: int` ) |

## Property descriptions

### Color color = Color.WHITE {#prop-color}

Color theme for UI elements related to this school

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

### Array[Requirement] learning_requirements = [] {#prop-learning-requirements}

Requirements to learn this craft school (could be quest, level, etc.)

### SkillTree skill_tree = null {#prop-skill-tree}

Optional skill tree for this craft school

## Method descriptions

### int get_skill_point_cost_for_level( level: int ) {#method-get-skill-point-cost-for-level}

Calculate skill point cost for a specific level

### int get_experience_required_for_level( level: int ) {#method-get-experience-required-for-level}

Calculate experience needed for a specific level

### int get_total_experience_for_level( level: int ) {#method-get-total-experience-for-level}

Calculate total experience needed from level 1 to target level

