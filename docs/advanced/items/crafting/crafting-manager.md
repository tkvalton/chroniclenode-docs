<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftingManager

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

CraftingManager - Main interface for the crafting system Stores the professions (craft schools) of the player(s) and provides the API for UI and gameplay systems.

## Description

Who owns the professions is a project setting (GameplayConfig.professions_scope): the whole **party** shares one set of schools, recipes and levels (the key of that set is 0), or **each character** has a set of their own (the key is the unique id of the player, `Entity.get_unique_id()`). Every function that finds a school takes an optional `owner` (a Player): it is ignored while the party shares its professions, and it is the character in the other case (nothing given = the player in control).

## Methods

| | |
|---|---|
| `bool` | [is_per_character](#method-is-per-character)() |
| `int` | [key_for](#method-key-for)( `owner: Entity = null` ) |
| `void` | [initialize_craft_schools](#method-initialize-craft-schools)( `chrono_manager: ChronoManager` ) |
| `void` | [reset_for_new_game](#method-reset-for-new-game)() |
| `CraftSchoolInstance` | [get_craft_school_instance](#method-get-craft-school-instance)( `school_definition: CraftSchoolDefinition, owner: Entity = null` ) |
| `CraftSchoolInstance` | [get_craft_school_instance_by_id](#method-get-craft-school-instance-by-id)( `school_id: int, owner: Entity = null` ) |
| `Array[CraftSchoolInstance]` | [get_all_craft_school_instances](#method-get-all-craft-school-instances)( `owner: Entity = null` ) |
| `bool` | [knows_school](#method-knows-school)( `school_definition: CraftSchoolDefinition, owner: Entity = null` ) |
| `bool` | [learn_school](#method-learn-school)( `school_definition: CraftSchoolDefinition, owner: Entity = null` ) |
| `bool` | [unlearn_school](#method-unlearn-school)( `school_definition: CraftSchoolDefinition, owner: Entity = null` ) |
| `bool` | [knows_recipe](#method-knows-recipe)( `recipe: CraftingRecipeDefinition, owner: Entity = null` ) |
| `bool` | [learn_recipe](#method-learn-recipe)( `recipe: CraftingRecipeDefinition, owner: Entity = null` ) |
| `bool` | [unlearn_recipe](#method-unlearn-recipe)( `recipe: CraftingRecipeDefinition, owner: Entity = null` ) |
| `Array[CraftingRecipeDefinition]` | [get_known_recipes_for_school](#method-get-known-recipes-for-school)( `school_definition: CraftSchoolDefinition, owner: Entity = null` ) |
| `Array[CraftingRecipeDefinition]` | [get_available_recipes_for_school](#method-get-available-recipes-for-school)( `school_definition: CraftSchoolDefinition, owner: Entity = null` ) |
| `Dictionary` | [can_craft](#method-can-craft)( `player: Player, recipe: CraftingRecipeDefinition` ) |
| `bool` | [start_craft](#method-start-craft)( `player: Player, recipe: CraftingRecipeDefinition, quantity: int = 1` ) |
| `bool` | [cancel_craft](#method-cancel-craft)( `school_definition: CraftSchoolDefinition, owner: Entity = null` ) |
| `CraftingJob` | [get_active_craft](#method-get-active-craft)( `school_definition: CraftSchoolDefinition, owner: Entity = null` ) |
| `Array[CraftingJob]` | [get_all_active_crafts](#method-get-all-active-crafts)( `owner: Entity = null` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `chrono_manager: ChronoManager, save_data: Dictionary, crafter: Entity = null` ) |

## Constants

- `int` **PARTY_KEY** = `0` - The key of the one set of the party

## Method descriptions

### bool is_per_character() {#method-is-per-character}

Does each character have professions of their own?

### int key_for( owner: Entity = null ) {#method-key-for}

The key of the set of this owner: the party key while the party shares, else the unique id of the character (the player in control when none is given)

### void initialize_craft_schools( chrono_manager: ChronoManager ) {#method-initialize-craft-schools}

Initialize the craft school instances (the set of the party, or none yet: a character gets theirs when asked)

### void reset_for_new_game() {#method-reset-for-new-game}

Reset all craft schools for a new game Clears all progress, learned recipes, and active crafts

### CraftSchoolInstance get_craft_school_instance( school_definition: CraftSchoolDefinition, owner: Entity = null ) {#method-get-craft-school-instance}

Get craft school instance by definition

### CraftSchoolInstance get_craft_school_instance_by_id( school_id: int, owner: Entity = null ) {#method-get-craft-school-instance-by-id}

Get craft school instance by school ID

### Array[CraftSchoolInstance] get_all_craft_school_instances( owner: Entity = null ) {#method-get-all-craft-school-instances}

Get all craft school instances of an owner

### bool knows_school( school_definition: CraftSchoolDefinition, owner: Entity = null ) {#method-knows-school}

Has the owner learned this profession?

### bool learn_school( school_definition: CraftSchoolDefinition, owner: Entity = null ) {#method-learn-school}

Teach the owner a profession. False when it is learned already (or does not exist)

### bool unlearn_school( school_definition: CraftSchoolDefinition, owner: Entity = null ) {#method-unlearn-school}

Make the owner forget a profession (its levels and recipes are kept for when it is learned again)

### bool knows_recipe( recipe: CraftingRecipeDefinition, owner: Entity = null ) {#method-knows-recipe}

Check if player knows a specific recipe

### bool learn_recipe( recipe: CraftingRecipeDefinition, owner: Entity = null ) {#method-learn-recipe}

Learn a new recipe

### bool unlearn_recipe( recipe: CraftingRecipeDefinition, owner: Entity = null ) {#method-unlearn-recipe}

Forget a learned recipe (a starting recipe cannot be forgotten)

### Array[CraftingRecipeDefinition] get_known_recipes_for_school( school_definition: CraftSchoolDefinition, owner: Entity = null ) {#method-get-known-recipes-for-school}

Get all known recipes for a specific school

### Array[CraftingRecipeDefinition] get_available_recipes_for_school( school_definition: CraftSchoolDefinition, owner: Entity = null ) {#method-get-available-recipes-for-school}

Get all available recipes (known + sufficient skill level)

### Dictionary can_craft( player: Player, recipe: CraftingRecipeDefinition ) {#method-can-craft}

Check if player can craft a recipe

### bool start_craft( player: Player, recipe: CraftingRecipeDefinition, quantity: int = 1 ) {#method-start-craft}

Start crafting a recipe

### bool cancel_craft( school_definition: CraftSchoolDefinition, owner: Entity = null ) {#method-cancel-craft}

Cancel active craft for a specific school

### CraftingJob get_active_craft( school_definition: CraftSchoolDefinition, owner: Entity = null ) {#method-get-active-craft}

Get active crafting job for a school

### Array[CraftingJob] get_all_active_crafts( owner: Entity = null ) {#method-get-all-active-crafts}

Get all active crafts across all schools (of one owner, or of everybody)

### Dictionary to_save_data() {#method-to-save-data}

Save all crafting data (skill levels, known recipes, active/queued crafts) `school_instances` is the set of the party (an old save has only that); `characters` has the set of each character when professions are per character

### void from_save_data( chrono_manager: ChronoManager, save_data: Dictionary, crafter: Entity = null ) {#method-from-save-data}

Load crafting data (restores skill levels, recipes, active/queued crafts). `crafter` is the player in control, for the jobs of the party set; the jobs of a character are given back to that character

