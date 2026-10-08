<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TargetStrategyDefinition

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AimedTargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/aimed-target-strategy-definition), [AllyTargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/ally-target-strategy-definition), [AnyEntityTargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/any-entity-target-strategy-definition), [EnemyTargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/enemy-target-strategy-definition), [MultiPointTargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/multi-point-target-strategy-definition), [NoTargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/no-target-strategy-definition), [PointTargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/point-target-strategy-definition), [SelfTargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/self-target-strategy-definition)

TargetStrategyDefinition contains all logic for ability targeting strategies. Subclasses implement specific targeting patterns (self, enemy, ally, point, etc.). TargetStrategyInstance holds only runtime state and delegates logic to this definition.

## Properties

| | | |
|---|---|---|
| `bool` | [has_auto_target](#prop-has-auto-target) | `true` |
| `bool` | [can_target_dead](#prop-can-target-dead) | `false` |
| `bool` | [requires_line_of_sight](#prop-requires-line-of-sight) | `true` |
| `float` | [max_range](#prop-max-range) | `3.0` |
| `bool` | [requires_targeting_input](#prop-requires-targeting-input) | `false` |
| `ReputationLevel.FactionRelationship` | [target_collision_layer](#prop-target-collision-layer) | `ReputationLevel.FactionRelationship.HOSTILE` |
| `float` | [target_collision_radius](#prop-target-collision-radius) | `0.0` |
| `bool` | [has_marker](#prop-has-marker) | `false` |
| `AbilityMarkerLocation` | [marker_location](#prop-marker-location) | `AbilityMarkerLocation.MOUSE` |
| `String` | [marker_texture](#prop-marker-texture) |  |
| `bool` | [marker_is_friendly](#prop-marker-is-friendly) | `false` |
| `float` | [marker_x](#prop-marker-x) | `0.0` |
| `float` | [marker_z](#prop-marker-z) | `0.0` |
| `float` | [marker_offset](#prop-marker-offset) | `0.0` |
| `TargetStrategyDefinition.AbilityTargetStrategy` | [target_type](#prop-target-type) |  |

## Methods

| | |
|---|---|
| `Dictionary` | [validate_target](#method-validate-target)( `strategy_instance: TargetStrategyInstance, target: Variant, user: Variant` ) |
| `Variant` | [get_auto_target](#method-get-auto-target)( `strategy_instance: TargetStrategyInstance, user: Variant` ) |
| `bool` | [get_requires_line_of_sight](#method-get-requires-line-of-sight)() |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: TargetStrategyInstance, property_name: String` ) |
| `Dictionary` | [validate_basic_entity_requirements](#method-validate-basic-entity-requirements)( `strategy_instance: TargetStrategyInstance, target: Variant, user: Variant` ) |
| `Dictionary` | [validate_interactable_requirements](#method-validate-interactable-requirements)( `strategy_instance: TargetStrategyInstance, target: Variant, user: Variant` ) |
| `Dictionary` | [validate_point_target](#method-validate-point-target)( `strategy_instance: TargetStrategyInstance, target: Variant, user: Variant` ) |
| `bool` | [is_valid_enemy](#method-is-valid-enemy)( `user: Variant, target: Variant` ) |
| `bool` | [is_valid_ally](#method-is-valid-ally)( `user: Variant, target: Variant, can_target_self: bool` ) |

## Enumerations

### enum AbilityTargetStrategy {#enum-abilitytargetstrategy}

- **ENEMY** = `0`
- **ALLY** = `1`
- **ANY_ENTITY** = `2`
- **SELF** = `3`
- **POINT** = `4`
- **MULTI_POINT** = `5`
- **NONE** = `6`
- **AIMED** = `7`

### enum AbilityMarkerLocation {#enum-abilitymarkerlocation}

- **MOUSE** = `0`
- **USER** = `1`

## Property descriptions

### bool has_auto_target = true {#prop-has-auto-target}

Whether this strategy can automatically select a target without player input

### bool can_target_dead = false {#prop-can-target-dead}

Whether dead entities can be valid targets for this strategy

### bool requires_line_of_sight = true {#prop-requires-line-of-sight}

If line of sight is required

### float max_range = 3.0 {#prop-max-range}

Maximum distance from caster that targets can be selected (0 = unlimited)

### bool requires_targeting_input = false {#prop-requires-targeting-input}

Whether this strategy requires manual player targeting input (overrides auto-targeting)

### ReputationLevel.FactionRelationship target_collision_layer = ReputationLevel.FactionRelationship.HOSTILE {#prop-target-collision-layer}

Faction relationship filter for valid targets (hostile, friendly, neutral)

### float target_collision_radius = 0.0 {#prop-target-collision-radius}

Radius around target point for collision detection (0 = point targeting)

### bool has_marker = false {#prop-has-marker}

Whether to display a targeting marker/cursor for this strategy

### AbilityMarkerLocation marker_location = AbilityMarkerLocation.MOUSE {#prop-marker-location}

Where the targeting marker should be positioned

### String marker_texture {#prop-marker-texture}

Texture identifier for the targeting marker

### bool marker_is_friendly = false {#prop-marker-is-friendly}

Whether the marker indicates a friendly target (affects marker color/style)

### float marker_x = 0.0 {#prop-marker-x}

X offset for marker positioning relative to marker_location

### float marker_z = 0.0 {#prop-marker-z}

Z offset for marker positioning relative to marker_location

### float marker_offset = 0.0 {#prop-marker-offset}

Additional offset applied to marker positioning

### TargetStrategyDefinition.AbilityTargetStrategy target_type {#prop-target-type}

The type of targeting strategy this definition represents

## Method descriptions

### Dictionary validate_target( strategy_instance: TargetStrategyInstance, target: Variant, user: Variant ) {#method-validate-target}

Virtual method for target validation - override in subclasses to implement specific validation logic

### Variant get_auto_target( strategy_instance: TargetStrategyInstance, user: Variant ) {#method-get-auto-target}

Virtual method for auto-target selection - override in subclasses to implement specific auto-targeting

### bool get_requires_line_of_sight() {#method-get-requires-line-of-sight}

Virtual method for line of sight requirement

### Variant get_property_value( strategy_instance: TargetStrategyInstance, property_name: String ) {#method-get-property-value}

Virtual method for property getters with runtime override support - override in subclasses

### Dictionary validate_basic_entity_requirements( strategy_instance: TargetStrategyInstance, target: Variant, user: Variant ) {#method-validate-basic-entity-requirements}

Validates basic requirements for entity targets (range, death, etc.)

### Dictionary validate_interactable_requirements( strategy_instance: TargetStrategyInstance, target: Variant, user: Variant ) {#method-validate-interactable-requirements}

Validates a targetable interactable (a destructible, a ward, a turret) the way an entity is validated: targetable, has stats, not dead, in range and in line of sight (an object behind a wall cannot be targeted). The strategy adds its own faction rule

### Dictionary validate_point_target( strategy_instance: TargetStrategyInstance, target: Variant, user: Variant ) {#method-validate-point-target}

Validates point targets (position and range)

### bool is_valid_enemy( user: Variant, target: Variant ) {#method-is-valid-enemy}

Check if target is a valid enemy based on faction relationships

### bool is_valid_ally( user: Variant, target: Variant, can_target_self: bool ) {#method-is-valid-ally}

Check if target is a valid ally based on faction relationships

