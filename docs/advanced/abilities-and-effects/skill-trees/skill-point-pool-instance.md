<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillPointPoolInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Runtime instance tracking state of a skill point pool for a player

## Variables

| | | |
|---|---|---|
| `SkillPointPool` | [pool_definition](#var-pool-definition) |  |
| `int` | [total_points_earned](#var-total-points-earned) | `0` |
| `int` | [points_spent](#var-points-spent) | `0` |

## Methods

| | |
|---|---|
| `SkillPointPoolInstance` | [create_from_definition](#method-create-from-definition)( `pool_def: SkillPointPool` ) *static* |
| `int` | [get_available_points](#method-get-available-points)() |
| `int` | [get_pool_id](#method-get-pool-id)() |
| `String` | [get_pool_name](#method-get-pool-name)() |
| `Color` | [get_pool_color](#method-get-pool-color)() |
| `bool` | [is_at_cap](#method-is-at-cap)() |
| `int` | [get_remaining_capacity](#method-get-remaining-capacity)() |
| `bool` | [can_add_points](#method-can-add-points)( `amount: int` ) |
| `bool` | [add_points](#method-add-points)( `amount: int` ) |
| `bool` | [can_spend_points](#method-can-spend-points)( `amount: int` ) |
| `bool` | [spend_points](#method-spend-points)( `amount: int` ) |
| `bool` | [refund_points](#method-refund-points)( `amount: int` ) |
| `bool` | [remove_points](#method-remove-points)( `amount: int` ) |
| `void` | [reset_spent_points](#method-reset-spent-points)() |
| `String` | [get_summary](#method-get-summary)() |
| `float` | [get_progress_percentage](#method-get-progress-percentage)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [restore_from_save_data](#method-restore-from-save-data)( `save_data: Dictionary` ) |
| `SkillPointPoolInstance` | [from_save_data](#method-from-save-data)( `save_data: Dictionary, pool_def: SkillPointPool` ) *static* |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |

## Variable descriptions

### SkillPointPool pool_definition {#var-pool-definition}

The pool definition this instance tracks

### int total_points_earned = 0 {#var-total-points-earned}

Total points ever earned for this pool

### int points_spent = 0 {#var-points-spent}

Points currently spent from this pool

## Method descriptions

### SkillPointPoolInstance create_from_definition( pool_def: SkillPointPool ) {#method-create-from-definition}

Factory method to create a new instance from a pool definition

### int get_available_points() {#method-get-available-points}

Get unspent points currently available

### int get_pool_id() {#method-get-pool-id}

Get the pool ID this instance tracks

### String get_pool_name() {#method-get-pool-name}

Get the display name of this pool

### Color get_pool_color() {#method-get-pool-color}

Get the display color for this pool

### bool is_at_cap() {#method-is-at-cap}

Check if pool has reached its maximum capacity

### int get_remaining_capacity() {#method-get-remaining-capacity}

Get how many more points can be earned (-1 if unlimited)

### bool can_add_points( amount: int ) {#method-can-add-points}

Check if points can be added without exceeding cap

### bool add_points( amount: int ) {#method-add-points}

Add points to the pool (increases total_points_earned)

### bool can_spend_points( amount: int ) {#method-can-spend-points}

Check if enough points are available to spend

### bool spend_points( amount: int ) {#method-spend-points}

Spend points from available pool

### bool refund_points( amount: int ) {#method-refund-points}

Refund spent points back to available

### bool remove_points( amount: int ) {#method-remove-points}

Take earned points away again (an unapplied reward): only points that are not spent can go

### void reset_spent_points() {#method-reset-spent-points}

Reset all spent points (full respec of this pool)

### String get_summary() {#method-get-summary}

Get a summary string for display

### float get_progress_percentage() {#method-get-progress-percentage}

Get percentage of pool capacity used (0.0 to 1.0), returns -1.0 if unlimited

### Dictionary to_save_data() {#method-to-save-data}

Convert instance to save data

### void restore_from_save_data( save_data: Dictionary ) {#method-restore-from-save-data}

Restore state from save data into this existing instance

### SkillPointPoolInstance from_save_data( save_data: Dictionary, pool_def: SkillPointPool ) {#method-from-save-data}

Create instance from save data (legacy/factory method) Prefer using restore_from_save_data() on existing instances

### Array[Dictionary] validate() {#method-validate}

Validate the instance state

### bool is_valid() {#method-is-valid}

Check if instance is in a valid state

