<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AbilityCooldownReadyCondition](/advanced/shared-systems/entity-conditions/ability-cooldown-ready-condition), [AlliesInRangeCondition](/advanced/shared-systems/entity-conditions/allies-in-range-condition), [AlliesInRangeHealthCondition](/advanced/shared-systems/entity-conditions/allies-in-range-health-condition), [AlliesInRangeWithEffectCondition](/advanced/shared-systems/entity-conditions/allies-in-range-with-effect-condition), [CastingStateCondition](/advanced/shared-systems/entity-conditions/casting-state-condition), [CombatStateCondition](/advanced/shared-systems/entity-conditions/combat-state-condition), [EncounterDurationCondition](/advanced/shared-systems/entity-conditions/encounter-duration-condition), [EncounterFactionBalanceCondition](/advanced/shared-systems/entity-conditions/encounter-faction-balance-condition), [EnemiesInRangeCondition](/advanced/shared-systems/entity-conditions/enemies-in-range-condition), [EnemiesInRangeHealthCondition](/advanced/shared-systems/entity-conditions/enemies-in-range-health-condition), [EnemiesInRangeWithEffectCondition](/advanced/shared-systems/entity-conditions/enemies-in-range-with-effect-condition), [EntitiesInRangeHealthCondition](/advanced/shared-systems/entity-conditions/entities-in-range-health-condition), [EntitiesInRangeWithEffectCondition](/advanced/shared-systems/entity-conditions/entities-in-range-with-effect-condition), [EntityDistanceToEntityCondition](/advanced/shared-systems/entity-conditions/entity-distance-to-entity-condition), [EntityDistanceToInteractableCondition](/advanced/shared-systems/entity-conditions/entity-distance-to-interactable-condition), [EntityHasTagCondition](/advanced/shared-systems/entity-conditions/entity-has-tag-condition), [EquippedWeaponTypeCondition](/advanced/shared-systems/entity-conditions/equipped-weapon-type-condition), [HasEffectCondition](/advanced/shared-systems/entity-conditions/has-effect-condition), [HasEquippedCondition](/advanced/shared-systems/entity-conditions/has-equipped-condition), [HasItemCondition](/advanced/shared-systems/entity-conditions/has-item-condition), [HasTargetCondition](/advanced/shared-systems/entity-conditions/has-target-condition), [HealthPercentCondition](/advanced/shared-systems/entity-conditions/health-percent-condition), [IsAliveCondition](/advanced/shared-systems/entity-conditions/is-alive-condition), [IsLevelCondition](/advanced/shared-systems/entity-conditions/is-level-condition), [IsPlayerClassCondition](/advanced/shared-systems/entity-conditions/is-player-class-condition), [MetadataCondition](/advanced/shared-systems/entity-conditions/metadata-condition), [MovementStateCondition](/advanced/shared-systems/entity-conditions/movement-state-condition), [QuestActiveEntityCondition](/advanced/shared-systems/general-conditions/quest-active-entity-condition), [QuestCompletedEntityCondition](/advanced/shared-systems/general-conditions/quest-completed-entity-condition), [RandomChanceCondition](/advanced/shared-systems/general-conditions/random-chance-condition), [SwitchStateCondition](/advanced/shared-systems/general-conditions/switch-state-condition), [TargetDistanceBetweenCondition](/advanced/shared-systems/entity-conditions/target-distance-between-condition), [TargetDistanceCondition](/advanced/shared-systems/entity-conditions/target-distance-condition), [TargetIsPlayerCondition](/advanced/shared-systems/entity-conditions/target-is-player-condition), [WearingArmorClassCondition](/advanced/shared-systems/entity-conditions/wearing-armor-class-condition), [WorldPositionDistanceBetweenCondition](/advanced/shared-systems/entity-conditions/world-position-distance-between-condition), [WorldPositionDistanceCondition](/advanced/shared-systems/entity-conditions/world-position-distance-condition)

Base class for conditions that evaluate entity state. Can target different entities based on EntityTarget enum or specific entity ID.

## Properties

| | | |
|---|---|---|
| `EntityTarget` | [entity_target](#prop-entity-target) | `EntityTarget.ARGUMENT_ENTITY` |
| `int` | [target_entity_id](#prop-target-entity-id) | `0` |

## Methods

| | |
|---|---|
| `Entity` | [get_target_entity](#method-get-target-entity)( `argument: Variant = null` ) |
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `Array[Player]` | [get_party_members](#method-get-party-members)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum EntityTarget {#enum-entitytarget}

- **ARGUMENT_ENTITY** = `0` - Use the entity passed as argument
- **ARGUMENT_ENTITY_TARGET** = `1` - Use the argument entity's target
- **CURRENT_PLAYER** = `2` - Use the current active player
- **ANY_PLAYER** = `3` - True when the condition holds for at least one member of the party
- **ALL_PLAYER** = `4` - True when the condition holds for every member of the party
- **SUMMONER** = `5` - Use the argument entity's owner
- **UNIQUE_ID** = `6` - Use entity with specific unique_id
- **OPPONENT** = `7` - The other side of the hit being calculated (only for conditions on stat effects, see StatConditionContext)

## Property descriptions

*Entity Targeting*

### EntityTarget entity_target = EntityTarget.ARGUMENT_ENTITY {#prop-entity-target}

How to determine which entity to evaluate

### int target_entity_id = 0 {#prop-target-entity-id}

Unique ID of entity to target (only used when entity_target is UNIQUE_ID)

## Method descriptions

### Entity get_target_entity( argument: Variant = null ) {#method-get-target-entity}

Get the target entity based on the targeting settings @param argument: The argument passed to evaluate() - usually an Entity @return: The Entity to evaluate, or null if not found/invalid

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Final evaluate method that handles entity targeting and calls evaluate_entity Don't override this - override evaluate_entity instead

### Array[Player] get_party_members( argument: Variant = null ) {#method-get-party-members}

The members of the party the condition is asked about (empty when there is no party yet)

### String get_description() {#method-get-description}

Get description including entity targeting info

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing

### String get_function_description() {#method-get-function-description}

Main function description method - includes targeting as part of inline template

### bool is_valid() {#method-is-valid}

Validate entity targeting configuration

### String get_expected_argument_type() {#method-get-expected-argument-type}

Get the expected argument type for this condition (for editor hints) Override in subclasses to specify what argument type is expected *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### void cleanup() {#method-cleanup}

Cleanup any resources

