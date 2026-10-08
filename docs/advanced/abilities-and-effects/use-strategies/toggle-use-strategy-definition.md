<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ToggleUseStrategyDefinition

**Inherits:** [UseStrategyDefinition](/advanced/abilities-and-effects/use-strategies/use-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for abilities that can be turned on and off (stance abilities, auras, etc.). Handles activation/deactivation logic, resource draining, and toggle group management.

## Properties

| | | |
|---|---|---|
| `TogglePayment` | [cost_timing](#prop-cost-timing) | `TogglePayment.ON_ACTIVATE` |
| `TogglePayment` | [cooldown_timing](#prop-cooldown-timing) | `TogglePayment.ON_DEACTIVATE` |
| `bool` | [has_resource_drain](#prop-has-resource-drain) | `false` |
| `PoolType` | [drain_pool_type](#prop-drain-pool-type) | `PoolType.RESOURCE_POOL` |
| `int` | [drain_pool_id](#prop-drain-pool-id) | `0` |
| `float` | [drain_per_second](#prop-drain-per-second) | `5.0` |
| `bool` | [auto_deactivate_on_empty](#prop-auto-deactivate-on-empty) | `true` |
| `float` | [deactivate_threshold_percent](#prop-deactivate-threshold-percent) | `0.0` |
| `String` | [toggle_group](#prop-toggle-group) | `""` |
| `bool` | [deactivate_group_members](#prop-deactivate-group-members) | `true` |
| `float` | [min_active_duration](#prop-min-active-duration) | `0.0` |
| `float` | [max_active_duration](#prop-max-active-duration) | `-1.0` |
| `CompressedTexture2D` | [active_icon](#prop-active-icon) |  |

## Methods

| | |
|---|---|
| `bool` | [charges_at](#method-charges-at)( `timing: TogglePayment, switching_on: bool` ) |
| `void` | [execute_strategy](#method-execute-strategy)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [attempt_activate_toggle](#method-attempt-activate-toggle)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `bool` | [is_min_duration_running](#method-is-min-duration-running)( `strategy_instance: UseStrategyInstance` ) |
| `void` | [attempt_deactivate_toggle](#method-attempt-deactivate-toggle)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [activate_toggle](#method-activate-toggle)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `void` | [deactivate_toggle](#method-deactivate-toggle)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `EffectInstance` | [apply_effect_and_get_instance](#method-apply-effect-and-get-instance)( `effect: Effect, target: Variant, strategy_instance: UseStrategyInstance` ) |
| `void` | [setup_toggle_timers](#method-setup-toggle-timers)( `strategy_instance: UseStrategyInstance` ) |
| `void` | [stop_toggle_timers](#method-stop-toggle-timers)( `strategy_instance: UseStrategyInstance` ) |
| `void` | [update_toggle_appearance](#method-update-toggle-appearance)( `strategy_instance: UseStrategyInstance` ) |
| `bool` | [can_activate_in_group](#method-can-activate-in-group)( `user: Entity` ) |
| `void` | [deactivate_group_members_func](#method-deactivate-group-members-func)( `user: Entity` ) |
| `PoolInstance` | [get_drain_pool](#method-get-drain-pool)( `user: Entity` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: UseStrategyInstance, property_name: String` ) |
| `void` | [cleanup_timing_resources](#method-cleanup-timing-resources)( `strategy_instance: UseStrategyInstance, user: Entity` ) |

## Enumerations

### enum PoolType {#enum-pooltype}

- **HEALTH_POOL** = `0`
- **RESOURCE_POOL** = `1`

### enum TogglePayment {#enum-togglepayment}

When a toggle charges its cost or starts its cooldown

- **ON_ACTIVATE** = `0` - when it is switched on
- **ON_DEACTIVATE** = `1` - when it is switched off
- **BOTH** = `2` - on every switch

## Property descriptions

### TogglePayment cost_timing = TogglePayment.ON_ACTIVATE {#prop-cost-timing}

When the ability's resource cost is paid (the cooldown and cost of an ability apply to a toggle through these two settings)

### TogglePayment cooldown_timing = TogglePayment.ON_DEACTIVATE {#prop-cooldown-timing}

When the ability's cooldown starts. A toggle can always be switched off during a cooldown; it cannot be switched on again until it ends

### bool has_resource_drain = false {#prop-has-resource-drain}

Whether this toggle drains resources while active

### PoolType drain_pool_type = PoolType.RESOURCE_POOL {#prop-drain-pool-type}

Type of pool to drain from (health_pool or resource_pool)

### int drain_pool_id = 0 {#prop-drain-pool-id}

Specific name of the pool to drain from (mana, stamina, etc.)

### float drain_per_second = 5.0 {#prop-drain-per-second}

Amount of resources consumed per second while active

### bool auto_deactivate_on_empty = true {#prop-auto-deactivate-on-empty}

Whether to automatically deactivate when resources are exhausted

### float deactivate_threshold_percent = 0.0 {#prop-deactivate-threshold-percent}

Percentage threshold below which to auto-deactivate (0-100)

### String toggle_group = "" {#prop-toggle-group}

Group name for mutually exclusive toggles (abilities in same group deactivate each other)

### bool deactivate_group_members = true {#prop-deactivate-group-members}

Whether activating this toggle should deactivate other members of the same group

### float min_active_duration = 0.0 {#prop-min-active-duration}

Minimum time this toggle must stay active before it can be deactivated

### float max_active_duration = -1.0 {#prop-max-active-duration}

Maximum time this toggle can stay active (-1 for unlimited)

### CompressedTexture2D active_icon {#prop-active-icon}

Icon to display when the toggle is active (overrides base ability icon)

## Method descriptions

### bool charges_at( timing: TogglePayment, switching_on: bool ) {#method-charges-at}

Does a payment set to `timing` happen on this switch?

### void execute_strategy( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-execute-strategy}

Execute toggle strategy - activate/deactivate based on current state

### void attempt_activate_toggle( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-attempt-activate-toggle}

Attempt to activate the toggle (checks group restrictions)

### bool is_min_duration_running( strategy_instance: UseStrategyInstance ) {#method-is-min-duration-running}

Is the toggle still inside its minimum active duration (it cannot be switched off yet)?

### void attempt_deactivate_toggle( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-attempt-deactivate-toggle}

Attempt to deactivate the toggle (checks minimum duration)

### void activate_toggle( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-activate-toggle}

Internal toggle activation logic

### void deactivate_toggle( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-deactivate-toggle}

Internal toggle deactivation logic

### EffectInstance apply_effect_and_get_instance( effect: Effect, target: Variant, strategy_instance: UseStrategyInstance ) {#method-apply-effect-and-get-instance}

Apply effect and return instance for tracking

### void setup_toggle_timers( strategy_instance: UseStrategyInstance ) {#method-setup-toggle-timers}

Setup toggle-specific timers

### void stop_toggle_timers( strategy_instance: UseStrategyInstance ) {#method-stop-toggle-timers}

Stop toggle timers

### void update_toggle_appearance( strategy_instance: UseStrategyInstance ) {#method-update-toggle-appearance}

Update toggle appearance based on current state

### bool can_activate_in_group( user: Entity ) {#method-can-activate-in-group}

Check if this toggle can activate in its group

### void deactivate_group_members_func( user: Entity ) {#method-deactivate-group-members-func}

Deactivate other members of the same toggle group

### PoolInstance get_drain_pool( user: Entity ) {#method-get-drain-pool}

Get drain pool for resource consumption

### Variant get_property_value( strategy_instance: UseStrategyInstance, property_name: String ) {#method-get-property-value}

Get property value with runtime override support

### void cleanup_timing_resources( strategy_instance: UseStrategyInstance, user: Entity ) {#method-cleanup-timing-resources}

Clean up toggle-specific resources

