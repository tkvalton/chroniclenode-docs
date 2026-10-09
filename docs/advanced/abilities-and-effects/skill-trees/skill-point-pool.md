<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillPointPool

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Point management for different skill point sources

## Properties

| | | |
|---|---|---|
| `Color` | [pool_color](#prop-pool-color) | `Color.CYAN` |
| `int` | [max_total_points](#prop-max-total-points) | `-1  # -1 = unlimited` |

## Methods

| | |
|---|---|
| `bool` | [has_point_cap](#method-has-point-cap)() |
| `int` | [get_point_cap](#method-get-point-cap)() |
| `bool` | [can_add_points](#method-can-add-points)( `current_points: int, points_to_add: int` ) |
| `int` | [get_remaining_capacity](#method-get-remaining-capacity)( `current_points: int` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

### Color pool_color = Color.CYAN {#prop-pool-color}

*No description yet.*

### int max_total_points = -1  # -1 = unlimited {#prop-max-total-points}

*No description yet.*

## Method descriptions

### bool has_point_cap() {#method-has-point-cap}

*No description yet.*

### int get_point_cap() {#method-get-point-cap}

*No description yet.*

### bool can_add_points( current_points: int, points_to_add: int ) {#method-can-add-points}

*No description yet.*

### int get_remaining_capacity( current_points: int ) {#method-get-remaining-capacity}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*

