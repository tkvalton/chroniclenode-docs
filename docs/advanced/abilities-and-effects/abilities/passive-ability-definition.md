<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PassiveAbilityDefinition

**Inherits:** [AbilityDefinition](/advanced/abilities-and-effects/abilities/ability-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/active-ability-definition)

PassiveAbilityDefinition is the base for any ability that has persistent passive effects.

## Description

PassiveAbilityDefinition is the base for any ability that has persistent passive effects. It holds passive_effects and owns the virtual logic for applying/removing them. ActiveAbilityDefinition extends this, inheriting passive effect support.

As a standalone concrete resource it represents a pure passive ability - an always-on aura or buff that requires no player input to use.

## Properties

| | | |
|---|---|---|
| `Array[int]` | [passive_effects](#prop-passive-effects) | `[]` |

## Methods

| | |
|---|---|
| `Array` | [get_current_passive_effects](#method-get-current-passive-effects)( `ability_instance: AbilityInstance` ) |
| `void` | [handle_completion](#method-handle-completion)( `ability_instance: AbilityInstance` ) |
| `AbilityInstance.AbilityUseAttemptResult` | [validate_ability_usage](#method-validate-ability-usage)( `ability_instance: AbilityInstance, from_action: bool` ) |
| `void` | [cleanup_ability_logic](#method-cleanup-ability-logic)( `ability_instance: AbilityInstance` ) |
| `String` | [get_tooltip_description](#method-get-tooltip-description)() |

## Property descriptions

*Passive Effects*

### Array[int] passive_effects = [] {#prop-passive-effects}

Effects that are persistently applied to the owner while this ability is active. For standalone passives: applied on ability init, removed when requirements fail. For active abilities: applied on init, gated by strip_passive_on_inactive on the active def.

## Method descriptions

### Array get_current_passive_effects( ability_instance: AbilityInstance ) {#method-get-current-passive-effects}

Virtual: return the passive effects to apply. Override in subclasses if passive effects need dynamic selection.

### void handle_completion( ability_instance: AbilityInstance ) {#method-handle-completion}

Passive abilities have no completion logic - they are persistent.

### AbilityInstance.AbilityUseAttemptResult validate_ability_usage( ability_instance: AbilityInstance, from_action: bool ) {#method-validate-ability-usage}

Passive abilities cannot be actively used.

### void cleanup_ability_logic( ability_instance: AbilityInstance ) {#method-cleanup-ability-logic}

No special cleanup needed - AbilityInstance handles effect removal.

### String get_tooltip_description() {#method-get-tooltip-description}

Get formatted description for tooltips with effect placeholder replacement *(from [AbilityDefinition](/advanced/abilities-and-effects/abilities/ability-definition))*

