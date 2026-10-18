<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillSpecialization

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A choice inside a proficiency or a profession: mastering one aspect of it (Weaponsmith or Armorsmith, Two Handed or Dual Wield).

## Description

A character chooses it with a trainer lesson, a quest or an event (SpecializationReward). Choosing one of an **exclusive group** blocks the others of the group (until it is changed, if it can be). What it gives:

- for a **profession**: recipes (single ones and whole recipe categories) that are known while it is chosen, and craft effects: faster crafting, a chance of extra

output, a chance to get the materials back, and a bonus to the chance (or the points) of gaining skill;

- for a **proficiency**: flat bonuses to stats of the character while it is chosen;
- for both: rewards that are given once when it is chosen (an ability, an item). They are kept when it is changed: they are not taken back.

See docs/systems/skill-trainers.md, section 3.6.

## Properties

| | | |
|---|---|---|
| `int` | [id](#prop-id) | `0` |
| `String` | [display_name](#prop-display-name) | `"Specialization":` |
| `String` | [description](#prop-description) | `"":` |
| `Texture2D` | [icon](#prop-icon) |  |
| `String` | [group](#prop-group) | `""` |
| `int` | [min_tier](#prop-min-tier) | `0` |
| `Array[Requirement]` | [requirements](#prop-requirements) | `[]` |
| `bool` | [can_change](#prop-can-change) | `false` |
| `Array[int]` | [recipe_ids](#prop-recipe-ids) | `[]` |
| `Array[String]` | [recipe_categories](#prop-recipe-categories) | `[]` |
| `float` | [craft_speed_percent](#prop-craft-speed-percent) | `0.0` |
| `float` | [extra_output_chance](#prop-extra-output-chance) | `0.0` |
| `int` | [extra_output_amount](#prop-extra-output-amount) | `1` |
| `float` | [material_save_chance](#prop-material-save-chance) | `0.0` |
| `float` | [skill_gain_bonus_percent](#prop-skill-gain-bonus-percent) | `0.0` |
| `Dictionary` | [stat_bonuses](#prop-stat-bonuses) | `{}` |
| `Array[Reward]` | [rewards](#prop-rewards) | `[]` |

## Methods

| | |
|---|---|
| `bool` | [gives_recipe](#method-gives-recipe)( `recipe: CraftingRecipeDefinition` ) |
| `String` | [choose_blocker](#method-choose-blocker)( `all: Array[SkillSpecialization], chosen: Array[int], spec_id: int, tier_index: int` ) *static* |
| `SkillSpecialization` | [find](#method-find)( `all: Array[SkillSpecialization], spec_id: int` ) *static* |
| `SkillSpecialization` | [chosen_of_group](#method-chosen-of-group)( `all: Array[SkillSpecialization], chosen: Array[int], group_name: String` ) *static* |
| `Array[Dictionary]` | [validate_list](#method-validate-list)( `all: Array[SkillSpecialization]` ) *static* |

## Property descriptions

### int id = 0 {#prop-id}

The id that saves remember it by: unique inside the proficiency or the profession (the editor makes one)

### String display_name = "Specialization": {#prop-display-name}

The name

### String description = "": {#prop-description}

A line about it

### Texture2D icon {#prop-icon}

An icon

### String group = "" {#prop-group}

The exclusive group: choosing one specialization of a group blocks the others of it. Empty = no group, it can be had together with any other

### int min_tier = 0 {#prop-min-tier}

The lowest tier (a number from 0: the first tier) a character must be in to choose it

### Array[Requirement] requirements = [] {#prop-requirements}

More that a character needs to choose it (checked by the lesson or reward that gives it)

*Can be changed*

### bool can_change = false {#prop-can-change}

The character can give it up for another of its group (a lesson of its group is a re-spec)

*Profession: what it gives*

### Array[int] recipe_ids = [] {#prop-recipe-ids}

Recipes that are known while it is chosen

### Array[String] recipe_categories = [] {#prop-recipe-categories}

Recipe categories of the profession (a name of its categories) whose recipes are known while it is chosen

### float craft_speed_percent = 0.0 {#prop-craft-speed-percent}

Faster crafting: the craft time is shortened by this percent (20 = a fifth faster)

### float extra_output_chance = 0.0 {#prop-extra-output-chance}

The chance (percent) that a craft makes more than it should

### int extra_output_amount = 1 {#prop-extra-output-amount}

How many more items an extra output gives

### float material_save_chance = 0.0 {#prop-material-save-chance}

The chance (percent) that a finished craft gives the materials back

### float skill_gain_bonus_percent = 0.0 {#prop-skill-gain-bonus-percent}

More skill from crafting: a percent added to the chance of a skill-up (skill-up professions) or to the points of a craft (points professions)

*Proficiency: what it gives*

### Dictionary stat_bonuses =  {#prop-stat-bonuses}

Flat bonuses to stats of the character while it is chosen (stat id -&gt; points)

*Rewards*

### Array[Reward] rewards = [] {#prop-rewards}

Given once when it is chosen (not taken back if it is changed)

## Method descriptions

### bool gives_recipe( recipe: CraftingRecipeDefinition ) {#method-gives-recipe}

Does the profession gets a recipe from this specialization? (by id or by the category of the recipe)

### String choose_blocker( all: Array[SkillSpecialization], chosen: Array[int], spec_id: int, tier_index: int ) {#method-choose-blocker}

Why a character cannot choose `spec_id` now ("" = it can): the specialization is not in the list, is chosen already, the tier is too low, or one of its group is chosen

### SkillSpecialization find( all: Array[SkillSpecialization], spec_id: int ) {#method-find}

The specialization with this id in a list

### SkillSpecialization chosen_of_group( all: Array[SkillSpecialization], chosen: Array[int], group_name: String ) {#method-chosen-of-group}

The chosen one of an exclusive group, or null

### Array[Dictionary] validate_list( all: Array[SkillSpecialization] ) {#method-validate-list}

Problems of a list of specializations for the editors

