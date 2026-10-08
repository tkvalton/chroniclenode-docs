<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementChecker

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Utility class for checking requirements and generating feedback Can be used as a static utility or instantiated for batch checking

## Methods

| | |
|---|---|
| `Dictionary` | [check_all](#method-check-all)( `entity: Entity, requirements: Array[Requirement]` ) *static* |
| `bool` | [meets_all_requirements](#method-meets-all-requirements)( `entity: Entity, requirements: Array[Requirement]` ) *static* |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity, requirements: Array[Requirement]` ) *static* |
| `String` | [get_requirements_summary](#method-get-requirements-summary)( `requirements: Array[Requirement]` ) *static* |
| `Array[Dictionary]` | [validate_requirements](#method-validate-requirements)( `requirements: Array[Requirement]` ) *static* |

## Method descriptions

### Dictionary check_all( entity: Entity, requirements: Array[Requirement] ) {#method-check-all}

Check all requirements for an entity Returns a dictionary with results and failure details

### bool meets_all_requirements( entity: Entity, requirements: Array[Requirement] ) {#method-meets-all-requirements}

Quick check if all requirements pass

### String get_failure_message( entity: Entity, requirements: Array[Requirement] ) {#method-get-failure-message}

Get a formatted string of all requirement failures

### String get_requirements_summary( requirements: Array[Requirement] ) {#method-get-requirements-summary}

Get a summary of all requirements for tooltip display

### Array[Dictionary] validate_requirements( requirements: Array[Requirement] ) {#method-validate-requirements}

Validate all requirements are properly configured

