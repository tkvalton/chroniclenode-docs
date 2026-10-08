<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TargetStrategyInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Runtime instance of a targeting strategy that references a TargetStrategyDefinition for configuration.

## Variables

| | | |
|---|---|---|
| `TargetStrategyDefinition` | [definition](#var-definition) |  |
| `AbilityInstance` | [ability_instance](#var-ability-instance) |  |
| `Dictionary` | [runtime_data](#var-runtime-data) | `{}` |
| `Dictionary` | [runtime_property_overrides](#var-runtime-property-overrides) | `{}` |
| `PropertyModifierSet` | [modifiers](#var-modifiers) | `PropertyModifierSet.new()` |

## Methods

| | |
|---|---|
| `Variant` | [apply_modifiers](#method-apply-modifiers)( `property_name: String, value: Variant` ) |
| `void` | [set_runtime_property](#method-set-runtime-property)( `property_name: String, value: Variant` ) |
| `void` | [clear_runtime_property](#method-clear-runtime-property)( `property_name: String` ) |
| `bool` | [has_runtime_override](#method-has-runtime-override)( `property_name: String` ) |
| `Dictionary` | [get_all_runtime_overrides](#method-get-all-runtime-overrides)() |
| `void` | [clear_all_runtime_overrides](#method-clear-all-runtime-overrides)() |
| `Dictionary` | [validate_target](#method-validate-target)( `target: Variant, user: Entity` ) |
| `Variant` | [get_auto_target](#method-get-auto-target)() |
| `bool` | [get_requires_line_of_sight](#method-get-requires-line-of-sight)() |
| `Variant` | [get_property_value](#method-get-property-value)( `property_name: String` ) |
| `float` | [get_max_range](#method-get-max-range)() |
| `bool` | [get_requires_targeting_input](#method-get-requires-targeting-input)() |
| `bool` | [get_has_auto_target](#method-get-has-auto-target)() |
| `bool` | [get_can_target_dead](#method-get-can-target-dead)() |
| `int` | [get_target_collision_layer](#method-get-target-collision-layer)() |
| `float` | [get_target_collision_radius](#method-get-target-collision-radius)() |
| `bool` | [get_has_marker](#method-get-has-marker)() |
| `TargetStrategyDefinition.AbilityMarkerLocation` | [get_marker_location](#method-get-marker-location)() |
| `bool` | [get_marker_is_friendly](#method-get-marker-is-friendly)() |
| `bool` | [get_can_target_self](#method-get-can-target-self)() |
| `int` | [get_points_expected](#method-get-points-expected)() |
| `Dictionary` | [add_multi_point](#method-add-multi-point)( `point: Vector3, user: Entity` ) |
| `void` | [clear_multi_points](#method-clear-multi-points)() |
| `bool` | [requires_targeting_input](#method-requires-targeting-input)() |
| `bool` | [has_auto_targeting](#method-has-auto-targeting)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [reset](#method-reset)() |

## Variable descriptions

### TargetStrategyDefinition definition {#var-definition}

Reference to the immutable targeting definition (contains all logic)

### AbilityInstance ability_instance {#var-ability-instance}

The ability instance that owns this targeting instance

### Dictionary runtime_data =  {#var-runtime-data}

Runtime data specific to the targeting strategy type (last targets, acquired points, etc.)

### Dictionary runtime_property_overrides =  {#var-runtime-property-overrides}

Runtime overrides for definition properties (only set when modified by effects)

### PropertyModifierSet modifiers = PropertyModifierSet.new() {#var-modifiers}

Modifiers on the numeric properties (cast time, range, drain ...): they stack and can be taken away by their source

## Method descriptions

### Variant apply_modifiers( property_name: String, value: Variant ) {#method-apply-modifiers}

A numeric property with the modifiers applied (other kinds of value pass through)

### void set_runtime_property( property_name: String, value: Variant ) {#method-set-runtime-property}

Set a runtime property override (for stat effects modifying targeting properties)

### void clear_runtime_property( property_name: String ) {#method-clear-runtime-property}

Clear a runtime property override (reverts to definition value)

### bool has_runtime_override( property_name: String ) {#method-has-runtime-override}

Check if a property has a runtime override

### Dictionary get_all_runtime_overrides() {#method-get-all-runtime-overrides}

Get all runtime overrides (for debugging/save states)

### void clear_all_runtime_overrides() {#method-clear-all-runtime-overrides}

Clear all runtime overrides

### Dictionary validate_target( target: Variant, user: Entity ) {#method-validate-target}

Validate target - delegates to definition

### Variant get_auto_target() {#method-get-auto-target}

Get auto-target - delegates to definition

### bool get_requires_line_of_sight() {#method-get-requires-line-of-sight}

Virtual method for line of sight requirement

### Variant get_property_value( property_name: String ) {#method-get-property-value}

Get property value with runtime override support - delegates to definition

### float get_max_range() {#method-get-max-range}

Convenience getters for common properties

### bool get_requires_targeting_input() {#method-get-requires-targeting-input}

*No description yet.*

### bool get_has_auto_target() {#method-get-has-auto-target}

*No description yet.*

### bool get_can_target_dead() {#method-get-can-target-dead}

*No description yet.*

### int get_target_collision_layer() {#method-get-target-collision-layer}

*No description yet.*

### float get_target_collision_radius() {#method-get-target-collision-radius}

*No description yet.*

### bool get_has_marker() {#method-get-has-marker}

*No description yet.*

### TargetStrategyDefinition.AbilityMarkerLocation get_marker_location() {#method-get-marker-location}

*No description yet.*

### bool get_marker_is_friendly() {#method-get-marker-is-friendly}

*No description yet.*

### bool get_can_target_self() {#method-get-can-target-self}

*No description yet.*

### int get_points_expected() {#method-get-points-expected}

*No description yet.*

### Dictionary add_multi_point( point: Vector3, user: Entity ) {#method-add-multi-point}

Add a point to multi-point targeting and return status (delegates to definition if needed)

### void clear_multi_points() {#method-clear-multi-points}

Clear accumulated multi-points

### bool requires_targeting_input() {#method-requires-targeting-input}

Check if this strategy requires manual targeting input

### bool has_auto_targeting() {#method-has-auto-targeting}

Check if this strategy has auto-targeting capability

### Dictionary to_save_data() {#method-to-save-data}

Save runtime state to dictionary

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Load runtime state from dictionary

### void reset() {#method-reset}

Reset targeting state (for reuse)

