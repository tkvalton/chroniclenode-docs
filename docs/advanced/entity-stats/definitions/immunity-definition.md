<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ImmunityDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `ImmunityType` | [immunity_type](#prop-immunity-type) | `ImmunityType.DAMAGE_TYPE` |
| `Array[int]` | [protected_targets](#prop-protected-targets) | `[] # What this immunity protects against` |
| `Array[int]` | [exclusions](#prop-exclusions) | `[] # Exceptions to the immunity` |

## Methods

| | |
|---|---|
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_immune_to](#method-is-immune-to)( `target: int` ) |
| `int` | [get_id](#method-get-id)() |

## Enumerations

### enum ImmunityType {#enum-immunitytype}

- **DAMAGE_TYPE** = `0`
- **STATUS_EFFECT** = `1`
- **SCHOOL_TYPE** = `2`

## Property descriptions

*Basic Properties*

### Color color = Color.WHITE {#prop-color}

The color that stands for this in the interface

*Immunity Targets*

### ImmunityType immunity_type = ImmunityType.DAMAGE_TYPE {#prop-immunity-type}

What the immunity protects against: damage types, status effects or ability schools

### Array[int] protected_targets = [] # What this immunity protects against {#prop-protected-targets}

The ids of what the immunity protects against (damage types, status effects or schools, by the immunity type)

### Array[int] exclusions = [] # Exceptions to the immunity {#prop-exclusions}

The ids that are left out of the immunity: an exception to the protected targets

## Method descriptions

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### bool is_immune_to( target: int ) {#method-is-immune-to}

*No description yet.*

### int get_id() {#method-get-id}

*No description yet.*

