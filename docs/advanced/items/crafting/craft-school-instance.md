<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftSchoolInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Runtime instance of a craft school for a specific entity Contains learned recipes, skill progress, and active crafting state

## Variables

| | | |
|---|---|---|
| `CraftSchoolDefinition` | [definition](#var-definition) | `null` |
| `int` | [current_skill_level](#var-current-skill-level) | `1` |
| `int` | [current_experience](#var-current-experience) | `0` |
| `int` | [total_experience](#var-total-experience) | `0` |
| `Array` | [learned_recipe_ids](#var-learned-recipe-ids) | `[]` |
| `bool` | [is_unlocked](#var-is-unlocked) | `false` |
| `CraftingJob` | [active_craft_job](#var-active-craft-job) | `null` |
| `Array[CraftingJob]` | [craft_queue](#var-craft-queue) | `[]` |
| `int` | [original_craft_total](#var-original-craft-total) | `0` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `Array` | [pending_outputs](#var-pending-outputs) | `[]` |

## Methods

| | |
|---|---|
| `bool` | [is_recipe_known](#method-is-recipe-known)( `recipe_id: int` ) |
| `bool` | [learn_recipe](#method-learn-recipe)( `recipe_id: int` ) |
| `bool` | [unlearn_recipe](#method-unlearn-recipe)( `recipe_id: int` ) |
| `Array[CraftingRecipeDefinition]` | [get_known_recipes](#method-get-known-recipes)() |
| `Array[CraftingRecipeDefinition]` | [get_available_recipes](#method-get-available-recipes)() |
| `void` | [add_experience](#method-add-experience)( `amount: int` ) |
| `int` | [change_skill_level](#method-change-skill-level)( `delta: int` ) |
| `int` | [get_skill_points_to_next_level](#method-get-skill-points-to-next-level)() |
| `float` | [get_skill_progress_percentage](#method-get-skill-progress-percentage)() |
| `Array[CraftingJob]` | [start_craft](#method-start-craft)( `recipe: CraftingRecipeDefinition, crafter: Entity, quantity: int = 1` ) |
| `bool` | [cancel_craft](#method-cancel-craft)() |
| `bool` | [cancel_current_craft](#method-cancel-current-craft)() |
| `bool` | [clear_queue](#method-clear-queue)() |
| `int` | [get_total_craft_count](#method-get-total-craft-count)() |
| `float` | [get_total_remaining_time](#method-get-total-remaining-time)() |
| `Dictionary` | [get_queue_info](#method-get-queue-info)() |
| `Array[CraftingJob]` | [get_all_craft_jobs](#method-get-all-craft-jobs)() |
| `Dictionary` | [to_dict](#method-to-dict)() |
| `void` | [from_dict](#method-from-dict)( `data: Dictionary, craft_school_def: CraftSchoolDefinition, crafter: Entity = null` ) |

## Signals

### queue_updated( queue_size: int ) {#signal-queue-updated}

### skill_level_changed( old_level: int, new_level: int ) {#signal-skill-level-changed}

### experience_gained( amount: int ) {#signal-experience-gained}

## Variable descriptions

### CraftSchoolDefinition definition = null {#var-definition}

Reference to the static definition

### int current_skill_level = 1 {#var-current-skill-level}

Current skill level in this school

### int current_experience = 0 {#var-current-experience}

Current experience points towards next level

### int total_experience = 0 {#var-total-experience}

Total experience ever gained in this school

### Array learned_recipe_ids = [] {#var-learned-recipe-ids}

Recipe IDs that have been learned (beyond starting recipes)

### bool is_unlocked = false {#var-is-unlocked}

Whether this school has been unlocked/learned

### CraftingJob active_craft_job = null {#var-active-craft-job}

Currently active crafting job (if any)

### Array[CraftingJob] craft_queue = [] {#var-craft-queue}

Queue of pending crafts (for systems that support queuing)

### int original_craft_total = 0 {#var-original-craft-total}

Total number of crafts originally started (for progress display)

### ChronoManager chrono_manager {#var-chrono-manager}

ChronoManager system ref

### Array pending_outputs = [] {#var-pending-outputs}

Items that were made and wait for room in the bag of the crafter

## Method descriptions

### bool is_recipe_known( recipe_id: int ) {#method-is-recipe-known}

Check if a specific recipe is known

### bool learn_recipe( recipe_id: int ) {#method-learn-recipe}

Learn a new recipe (false if it is already known or does not exist)

### bool unlearn_recipe( recipe_id: int ) {#method-unlearn-recipe}

Forget a learned recipe (a starting recipe is always known)

### Array[CraftingRecipeDefinition] get_known_recipes() {#method-get-known-recipes}

Get all known recipes for this school

### Array[CraftingRecipeDefinition] get_available_recipes() {#method-get-available-recipes}

Get recipes available at current skill level

### void add_experience( amount: int ) {#method-add-experience}

Add experience and handle level ups

### int change_skill_level( delta: int ) {#method-change-skill-level}

Change the skill level directly (a reward gives or takes levels): between 1 and the maximum, with the signal

### int get_skill_points_to_next_level() {#method-get-skill-points-to-next-level}

Get skill points needed for next level

### float get_skill_progress_percentage() {#method-get-skill-progress-percentage}

Get skill progress as percentage (0.0 to 1.0)

### Array[CraftingJob] start_craft( recipe: CraftingRecipeDefinition, crafter: Entity, quantity: int = 1 ) {#method-start-craft}

Start crafting a recipe with queue support If quantity &gt; 1, creates multiple individual jobs in the queue Returns array of all jobs created (empty array if failed)

### bool cancel_craft() {#method-cancel-craft}

Cancel active craft and clear queue

### bool cancel_current_craft() {#method-cancel-current-craft}

Cancel only the current active job, keep queue

### bool clear_queue() {#method-clear-queue}

Cancel all queued crafts but not the active one

### int get_total_craft_count() {#method-get-total-craft-count}

Get total number of crafts (active + queued)

### float get_total_remaining_time() {#method-get-total-remaining-time}

Get remaining time for all crafts (active + queue)

### Dictionary get_queue_info() {#method-get-queue-info}

Get information about the current queue state

### Array[CraftingJob] get_all_craft_jobs() {#method-get-all-craft-jobs}

Get array of all jobs (active + queued) for UI display

### Dictionary to_dict() {#method-to-dict}

*No description yet.*

### void from_dict( data: Dictionary, craft_school_def: CraftSchoolDefinition, crafter: Entity = null ) {#method-from-dict}

*No description yet.*

