<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftingManager

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

CraftingManager - Main interface for the crafting system Autoload singleton that stores player crafting data and provides API for UI and gameplay systems

## Methods

| | |
|---|---|
| `void` | [initialize_craft_schools](#method-initialize-craft-schools)( `chrono_manager: ChronoManager` ) |
| `void` | [reset_for_new_game](#method-reset-for-new-game)() |
| `CraftSchoolInstance` | [get_craft_school_instance](#method-get-craft-school-instance)( `school_definition: CraftSchoolDefinition` ) |
| `CraftSchoolInstance` | [get_craft_school_instance_by_id](#method-get-craft-school-instance-by-id)( `school_id: int` ) |
| `Array[CraftSchoolInstance]` | [get_all_craft_school_instances](#method-get-all-craft-school-instances)() |
| `bool` | [knows_recipe](#method-knows-recipe)( `recipe: CraftingRecipeDefinition` ) |
| `bool` | [learn_recipe](#method-learn-recipe)( `recipe: CraftingRecipeDefinition` ) |
| `bool` | [unlearn_recipe](#method-unlearn-recipe)( `recipe: CraftingRecipeDefinition` ) |
| `Array[CraftingRecipeDefinition]` | [get_known_recipes_for_school](#method-get-known-recipes-for-school)( `school_definition: CraftSchoolDefinition` ) |
| `Array[CraftingRecipeDefinition]` | [get_available_recipes_for_school](#method-get-available-recipes-for-school)( `school_definition: CraftSchoolDefinition` ) |
| `Dictionary` | [can_craft](#method-can-craft)( `player: Player, recipe: CraftingRecipeDefinition` ) |
| `bool` | [start_craft](#method-start-craft)( `player: Player, recipe: CraftingRecipeDefinition, quantity: int = 1` ) |
| `bool` | [cancel_craft](#method-cancel-craft)( `school_definition: CraftSchoolDefinition` ) |
| `CraftingJob` | [get_active_craft](#method-get-active-craft)( `school_definition: CraftSchoolDefinition` ) |
| `Array[CraftingJob]` | [get_all_active_crafts](#method-get-all-active-crafts)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `chrono_manager: ChronoManager, save_data: Dictionary, crafter: Entity = null` ) |

## Method descriptions

### void initialize_craft_schools( chrono_manager: ChronoManager ) {#method-initialize-craft-schools}

Initialize all craft school instances

### void reset_for_new_game() {#method-reset-for-new-game}

Reset all craft schools for new game Clears all progress, learned recipes, and active crafts

### CraftSchoolInstance get_craft_school_instance( school_definition: CraftSchoolDefinition ) {#method-get-craft-school-instance}

Get craft school instance by definition

### CraftSchoolInstance get_craft_school_instance_by_id( school_id: int ) {#method-get-craft-school-instance-by-id}

Get craft school instance by school ID

### Array[CraftSchoolInstance] get_all_craft_school_instances() {#method-get-all-craft-school-instances}

Get all craft school instances

### bool knows_recipe( recipe: CraftingRecipeDefinition ) {#method-knows-recipe}

Check if player knows a specific recipe

### bool learn_recipe( recipe: CraftingRecipeDefinition ) {#method-learn-recipe}

Learn a new recipe

### bool unlearn_recipe( recipe: CraftingRecipeDefinition ) {#method-unlearn-recipe}

Forget a learned recipe (a starting recipe cannot be forgotten)

### Array[CraftingRecipeDefinition] get_known_recipes_for_school( school_definition: CraftSchoolDefinition ) {#method-get-known-recipes-for-school}

Get all known recipes for a specific school

### Array[CraftingRecipeDefinition] get_available_recipes_for_school( school_definition: CraftSchoolDefinition ) {#method-get-available-recipes-for-school}

Get all available recipes (known + sufficient skill level)

### Dictionary can_craft( player: Player, recipe: CraftingRecipeDefinition ) {#method-can-craft}

Check if player can craft a recipe

### bool start_craft( player: Player, recipe: CraftingRecipeDefinition, quantity: int = 1 ) {#method-start-craft}

Start crafting a recipe

### bool cancel_craft( school_definition: CraftSchoolDefinition ) {#method-cancel-craft}

Cancel active craft for a specific school

### CraftingJob get_active_craft( school_definition: CraftSchoolDefinition ) {#method-get-active-craft}

Get active crafting job for a school

### Array[CraftingJob] get_all_active_crafts() {#method-get-all-active-crafts}

Get all active crafts across all schools

### Dictionary to_save_data() {#method-to-save-data}

Save all crafting data (skill levels, known recipes, active/queued crafts)

### void from_save_data( chrono_manager: ChronoManager, save_data: Dictionary, crafter: Entity = null ) {#method-from-save-data}

Load crafting data (restores skill levels, recipes, active/queued crafts)

