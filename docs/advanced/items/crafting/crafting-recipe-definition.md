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
| `int` | [skill_up_until](#prop-skill-up-until) | `0` |
| `CalculationFormula` | [skill_up_curve](#prop-skill-up-curve) |  |
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
| `float` | [get_skill_up_factor](#method-get-skill-up-factor)( `skill_level: int` ) |
| `float` | [skill_up_factor](#method-skill-up-factor)( `from_level: int, until_level: int, curve: CalculationFormula, skill_level: int` ) *static* |
| `SkillBand` | [get_skill_band](#method-get-skill-band)( `skill_level: int` ) |
| `float` | [calculate_craft_duration](#method-calculate-craft-duration)( `crafter: Entity, craft_school_instance: CraftSchoolInstance` ) |

## Enumerations

### enum SkillBand {#enum-skillband}

The colour band of the recipe for a crafter of this skill level, for the interface: NONE for a recipe with no range, else ORANGE (teaches well), YELLOW, GREEN (teaches little), GREY (teaches nothing)

- **NONE** = `0`
- **ORANGE** = `1`
- **YELLOW** = `2`
- **GREEN** = `3`
- **GREY** = `4`

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

### int skill_up_until = 0 {#prop-skill-up-until}

The level at which the recipe stops teaching anything (the "grey" level): from there a craft gives no skill. 0 = it never stops, as before

### CalculationFormula skill_up_curve {#prop-skill-up-curve}

How much the recipe teaches inside its range: a formula that gets the position in the range (0 at the level the recipe needs, 1 at the level where it stops teaching) and gives a factor from 0 to 1. Empty = 1 at the start, falling in a straight line to 0 at the end. A step curve makes the coloured bands

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

### float get_skill_up_factor( skill_level: int ) {#method-get-skill-up-factor}

How well the recipe teaches a crafter of this skill level: 0 (nothing: it is too easy) to 1 (everything). 1 for a recipe with no range

### float skill_up_factor( from_level: int, until_level: int, curve: CalculationFormula, skill_level: int ) {#method-skill-up-factor}

The same for any activity that teaches a profession (a recipe, a gathering node): it starts at `from_level`, teaches nothing from `until_level` on (0 = never stops) and follows `curve` in between (empty = a straight line down)

### SkillBand get_skill_band( skill_level: int ) {#method-get-skill-band}

*No description yet.*

### float calculate_craft_duration( crafter: Entity, craft_school_instance: CraftSchoolInstance ) {#method-calculate-craft-duration}

Calculate actual craft duration(could be modified by skill level, buffs, etc.)

