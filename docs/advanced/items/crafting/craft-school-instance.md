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
| `int` | [current_tier](#var-current-tier) | `0` |
| `Array[int]` | [chosen_specializations](#var-chosen-specializations) | `[]` |
| `Variant` | [rng](#var-rng) | `RandomNumberGenerator.new()` |
| `CraftingJob` | [active_craft_job](#var-active-craft-job) | `null` |
| `Array[CraftingJob]` | [craft_queue](#var-craft-queue) | `[]` |
| `int` | [original_craft_total](#var-original-craft-total) | `0` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `Array` | [pending_outputs](#var-pending-outputs) | `[]` |

## Methods

| | |
|---|---|
| `SkillTier` | [get_tier_definition](#method-get-tier-definition)() |
| `int` | [get_level_cap](#method-get-level-cap)() |
| `bool` | [is_at_tier_cap](#method-is-at-tier-cap)() |
| `bool` | [set_tier](#method-set-tier)( `tier_index: int` ) |
| `bool` | [has_specialization](#method-has-specialization)( `spec_id: int` ) |
| `String` | [get_specialization_blocker](#method-get-specialization-blocker)( `spec_id: int` ) |
| `bool` | [choose_specialization](#method-choose-specialization)( `spec_id: int` ) |
| `bool` | [remove_specialization](#method-remove-specialization)( `spec_id: int, force: bool = false` ) |
| `Array[SkillSpecialization]` | [get_chosen_specializations](#method-get-chosen-specializations)() |
| `float` | [get_craft_speed_factor](#method-get-craft-speed-factor)() |
| `Dictionary` | [get_extra_output](#method-get-extra-output)() |
| `float` | [get_material_save_chance](#method-get-material-save-chance)() |
| `float` | [get_skill_gain_bonus](#method-get-skill-gain-bonus)() |
| `bool` | [learn_school](#method-learn-school)() |
| `bool` | [forget_school](#method-forget-school)() |
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

### skill_up( new_level: int ) {#signal-skill-up}

A skill-up happened (a craft gave one level)

### tier_changed( new_tier: int, old_tier: int ) {#signal-tier-changed}

A tier or a specialization changed

### specialization_changed( specialization_id: int, chosen: bool ) {#signal-specialization-changed}

### learned_changed( learned: bool ) {#signal-learned-changed}

The profession was learned or forgotten

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

### int current_tier = 0 {#var-current-tier}

The tier the crafter is in (a number from 0, the first tier)

### Array[int] chosen_specializations = [] {#var-chosen-specializations}

The ids of the specializations the crafter has chosen

### rng = RandomNumberGenerator.new() {#var-rng}

The chance rolls of a craft (skill-ups, extra output, getting the materials back). A test can seed it

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

### SkillTier get_tier_definition() {#method-get-tier-definition}

The tier the crafter is in, as a resource (null when the profession has no tiers)

### int get_level_cap() {#method-get-level-cap}

The highest level the crafter can reach now: the cap of the tier, or the maximum skill level

### bool is_at_tier_cap() {#method-is-at-tier-cap}

Is the crafter at the cap of the tier, with a higher tier that a trainer can give?

### bool set_tier( tier_index: int ) {#method-set-tier}

Puts the crafter in a tier. A lower tier brings the level down to its cap. False when nothing changed or the tier does not exist

### bool has_specialization( spec_id: int ) {#method-has-specialization}

*No description yet.*

### String get_specialization_blocker( spec_id: int ) {#method-get-specialization-blocker}

Why the crafter cannot choose a specialization now ("" = they can)

### bool choose_specialization( spec_id: int ) {#method-choose-specialization}

Chooses a specialization (its rewards are given by whoever gives it: see SpecializationReward). False when it cannot be chosen

### bool remove_specialization( spec_id: int, force: bool = false ) {#method-remove-specialization}

Gives a specialization up (only one that can be changed, unless `force`)

### Array[SkillSpecialization] get_chosen_specializations() {#method-get-chosen-specializations}

The chosen specializations, as resources

### float get_craft_speed_factor() {#method-get-craft-speed-factor}

How much of the craft time is left: 1.0 normally, less with faster crafting (never below a tenth)

### Dictionary get_extra_output() {#method-get-extra-output}

The chance (percent, up to 100) of a craft making more than it should, and how many more

### float get_material_save_chance() {#method-get-material-save-chance}

The chance (percent, up to 100) of a finished craft giving the materials back

### float get_skill_gain_bonus() {#method-get-skill-gain-bonus}

The bonus to what a craft teaches, as a factor: 0.25 = a quarter more

### bool learn_school() {#method-learn-school}

Learn the profession (false when it is learned already)

### bool forget_school() {#method-forget-school}

Forget the profession: nothing can be crafted with it until it is learned again. Its level and recipes stay (false when it was not learned)

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

