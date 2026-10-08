<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftingRecipeDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for a crafting recipe that can be executed multiple times Uses ItemDefinition references and integrates with the database system

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [output_quantity](#prop-output-quantity) | `1` |
| `float` | [craft_duration](#prop-craft-duration) | `5.0` |
| `Dictionary` | [craft_materials](#prop-craft-materials) | `{}` |
| `int` | [craft_school_id](#prop-craft-school-id) | `-1` |
| `String` | [recipe_category](#prop-recipe-category) | `""` |
| `int` | [required_skill_level](#prop-required-skill-level) | `1` |
| `int` | [skill_points_per_craft](#prop-skill-points-per-craft) | `1` |
| `Array[Requirement]` | [requirements](#prop-requirements) | `[]` |
| `bool` | [requires_learning](#prop-requires-learning) | `false` |

## Methods

| | |
|---|---|
| `Dictionary` | [can_craft](#method-can-craft)( `crafter: Entity, craft_school_instance: CraftSchoolInstance` ) |
| `ItemDefinition` | [get_craft_item](#method-get-craft-item)() |
| `Texture2D` | [get_display_icon](#method-get-display-icon)() |
| `String` | [get_display_name](#method-get-display-name)() |
| `Array` | [get_materials_display](#method-get-materials-display)() |
| `float` | [calculate_craft_duration](#method-calculate-craft-duration)( `crafter: Entity, craft_school_instance: CraftSchoolInstance` ) |

## Property descriptions

### int item_id = 0 {#prop-item-id}

The item definition that will be created when this recipe is executed

### int output_quantity = 1 {#prop-output-quantity}

How many of the item will be created per craft

### float craft_duration = 5.0 {#prop-craft-duration}

Base time in seconds to complete this craft

### Dictionary craft_materials =  {#prop-craft-materials}

Dictionary mapping ItemDefinition -&gt; required quantity Use ItemDefinition directly for better type safety and editor integration

### int craft_school_id = -1 {#prop-craft-school-id}

Which craft school this recipe belongs to

### String recipe_category = "" {#prop-recipe-category}

Sub-category within the school (e.g., "Weapons", "Armor", "Tools")

### int required_skill_level = 1 {#prop-required-skill-level}

Minimum skill level required in the craft school

### int skill_points_per_craft = 1 {#prop-skill-points-per-craft}

Skill points awarded when this recipe is successfully crafted

### Array[Requirement] requirements = [] {#prop-requirements}

Additional requirements (could be quest completion, reputation, etc.)

### bool requires_learning = false {#prop-requires-learning}

Whether this recipe is known from the start or must be learned

## Method descriptions

### Dictionary can_craft( crafter: Entity, craft_school_instance: CraftSchoolInstance ) {#method-can-craft}

Check if an entity can craft this recipe

### ItemDefinition get_craft_item() {#method-get-craft-item}

Get the craftable item

### Texture2D get_display_icon() {#method-get-display-icon}

Get icon to display for this recipe

### String get_display_name() {#method-get-display-name}

Get display name, falling back to item name if empty

### Array get_materials_display() {#method-get-materials-display}

Get formatted materials list for UI display

### float calculate_craft_duration( crafter: Entity, craft_school_instance: CraftSchoolInstance ) {#method-calculate-craft-duration}

Calculate actual craft duration (could be modified by skill level, buffs, etc.)

