<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftingJob

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Represents an active crafting operation with progress tracking Uses a single completion timer instead of polling for smoother performance Progress is calculated on-demand from timer.time_left when needed

## Variables

| | | |
|---|---|---|
| `CraftingRecipeDefinition` | [recipe](#var-recipe) | `null` |
| `Entity` | [crafter](#var-crafter) | `null` |
| `CraftSchoolInstance` | [craft_school_instance](#var-craft-school-instance) | `null` |
| `int` | [quantity](#var-quantity) | `1` |
| `float` | [duration_per_item](#var-duration-per-item) | `1.0` |
| `float` | [total_duration](#var-total-duration) | `1.0` |
| `bool` | [is_active](#var-is-active) | `false` |
| `bool` | [was_cancelled](#var-was-cancelled) | `false` |
| `bool` | [is_completed](#var-is-completed) | `false` |
| `int` | [start_time](#var-start-time) | `0` |
| `Timer` | [completion_timer](#var-completion-timer) | `null` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [start](#method-start)() |
| `void` | [cancel](#method-cancel)() |
| `float` | [get_completion_percentage](#method-get-completion-percentage)() |
| `float` | [get_remaining_time](#method-get-remaining-time)() |
| `float` | [get_elapsed_time](#method-get-elapsed-time)() |
| `int` | [get_current_item_index](#method-get-current-item-index)() |
| `float` | [get_current_item_progress](#method-get-current-item-progress)() |
| `int` | [get_completed_item_count](#method-get-completed-item-count)() |
| `Dictionary` | [get_save_data](#method-get-save-data)() |
| `void` | [restore_from_save](#method-restore-from-save)( `data: Dictionary` ) |
| `String` | [get_time_remaining_formatted](#method-get-time-remaining-formatted)() |
| `Dictionary` | [get_job_summary](#method-get-job-summary)() |

## Signals

### item_completed( item_index: int, total_items: int ) {#signal-item-completed}

### job_completed() {#signal-job-completed}

### job_cancelled() {#signal-job-cancelled}

## Variable descriptions

### CraftingRecipeDefinition recipe = null {#var-recipe}

The recipe being crafted

### Entity crafter = null {#var-crafter}

The entity doing the crafting

### CraftSchoolInstance craft_school_instance = null {#var-craft-school-instance}

The craft school instance handling this job

### int quantity = 1 {#var-quantity}

How many items are being crafted

### float duration_per_item = 1.0 {#var-duration-per-item}

Time per individual item

### float total_duration = 1.0 {#var-total-duration}

Total time for the entire job

### bool is_active = false {#var-is-active}

Whether this job is currently active

### bool was_cancelled = false {#var-was-cancelled}

Whether this job was cancelled

### bool is_completed = false {#var-is-completed}

Whether this job completed successfully

### int start_time = 0 {#var-start-time}

When the job started (using Time.get_ticks_msec())

### Timer completion_timer = null {#var-completion-timer}

Single completion timer from ChronoManager pool

### ChronoManager chrono_manager {#var-chrono-manager}

ChronoManager system ref

## Method descriptions

### void start() {#method-start}

Start the crafting job

### void cancel() {#method-cancel}

Cancel the crafting job

### float get_completion_percentage() {#method-get-completion-percentage}

Get completion percentage (0.0 to 1.0)

### float get_remaining_time() {#method-get-remaining-time}

Get remaining time in seconds

### float get_elapsed_time() {#method-get-elapsed-time}

Get elapsed time in seconds

### int get_current_item_index() {#method-get-current-item-index}

Get current item being worked on (1-indexed)

### float get_current_item_progress() {#method-get-current-item-progress}

Get progress on current item (0.0 to 1.0)

### int get_completed_item_count() {#method-get-completed-item-count}

Get how many items have been completed so far

### Dictionary get_save_data() {#method-get-save-data}

Get data for saving the job state

### void restore_from_save( data: Dictionary ) {#method-restore-from-save}

Restore job from saved data

### String get_time_remaining_formatted() {#method-get-time-remaining-formatted}

Get formatted time remaining string

### Dictionary get_job_summary() {#method-get-job-summary}

Get job summary for UI display

