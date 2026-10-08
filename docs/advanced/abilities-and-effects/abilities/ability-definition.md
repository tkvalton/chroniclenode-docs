<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [PassiveAbilityDefinition](/advanced/abilities-and-effects/abilities/passive-ability-definition)

AbilityDefinition is pure configuration data for abilities.

## Properties

| | | |
|---|---|---|
| `Array[Requirement]` | [requirements](#prop-requirements) | `[]` |
| `Array[int]` | [groups](#prop-groups) | `[]` |

## Variables

| | | |
|---|---|---|
| `Array[Effect]` | [all_discovered_effects](#var-all-discovered-effects) | `[]` |

## Methods

| | |
|---|---|
| `void` | [handle_completion](#method-handle-completion)( `ability_instance: AbilityInstance` ) |
| `AbilityInstance.AbilityUseAttemptResult` | [validate_ability_usage](#method-validate-ability-usage)( `ability_instance: AbilityInstance, from_action: bool` ) |
| `void` | [cleanup_ability_logic](#method-cleanup-ability-logic)( `ability_instance: AbilityInstance` ) |
| `String` | [get_tooltip_description](#method-get-tooltip-description)() |

## Property descriptions

### Array[Requirement] requirements = [] {#prop-requirements}

Array of requirements that must be met to use this ability (weapon type, stats, conditions, etc.)

### Array[int] groups = [] {#prop-groups}

Groups this ability is in (see GroupDefinition): abilities and consumables of a group that shares its cooldown go on cooldown together

## Variable descriptions

### Array[Effect] all_discovered_effects = [] {#var-all-discovered-effects}

All effects discovered recursively (including children) - populated by subclasses for tooltips only

## Method descriptions

### void handle_completion( ability_instance: AbilityInstance ) {#method-handle-completion}

Virtual method for handling ability completion (override in subclasses) Default implementation handles standard ability completion

### AbilityInstance.AbilityUseAttemptResult validate_ability_usage( ability_instance: AbilityInstance, from_action: bool ) {#method-validate-ability-usage}

Virtual method for ability-specific validation (override in subclasses) Default implementation does no additional validation

### void cleanup_ability_logic( ability_instance: AbilityInstance ) {#method-cleanup-ability-logic}

Virtual method for ability-specific cleanup (override in subclasses) Default implementation does nothing

### String get_tooltip_description() {#method-get-tooltip-description}

Get formatted description for tooltips with effect placeholder replacement

