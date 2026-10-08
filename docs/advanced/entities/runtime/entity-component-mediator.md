<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityComponentMediator

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Internal signal bus for Entity component coordination

## Description

PURPOSE: The mediator acts as a private communication layer between Entity's internal components (Stats, Effects, Abilities, Equipment, Pets, etc.). Components use the mediator to coordinate with each other without tight coupling.

ARCHITECTURE:

- INTERNAL API: Components access each other via mediator.get_component()
- INTERNAL SIGNALS: Components emit through mediator for inter-component coordination
- PUBLIC API: Entity forwards mediator signals as Entity signals for external systems

DESIGN PATTERN: External Systems (UI/Quests/Audio) → Connect to Entity.signals (public API) → Entity forwards from Mediator.signals → Mediator coordinates Component.signals (internal API)

This separation provides:

- Clean encapsulation of Entity's internal architecture
- Flexibility to refactor components without breaking external code
- Clear boundary between internal coordination and external communication

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `CombatManager` | [combat_manager](#var-combat-manager) |  |
| `Dictionary` | [components](#var-components) | `{}` |
| `Dictionary` | [subscriptions](#var-subscriptions) | `{}` |
| `bool` | [is_initialized](#var-is-initialized) | `false` |

## Methods

| | |
|---|---|
| `void` | [register_component](#method-register-component)( `component_type: String, component: Variant` ) |
| `Variant` | [get_component](#method-get-component)( `component_type: String` ) |
| `bool` | [has_component](#method-has-component)( `component_type: String` ) |
| `void` | [finalize_connections](#method-finalize-connections)() |
| `void` | [subscribe](#method-subscribe)( `event_name: String, callback: Callable` ) |
| `void` | [unsubscribe](#method-unsubscribe)( `event_name: String, callback: Callable` ) |
| `void` | [emit_event](#method-emit-event)( `event_name: String, event_data: Dictionary = {}` ) |
| `void` | [route_combat_state_changed](#method-route-combat-state-changed)( `in_combat: bool` ) |
| `void` | [route_damage_dealt](#method-route-damage-dealt)( `effect: EffectInstance, target: Variant` ) |
| `void` | [route_kill](#method-route-kill)( `target: Entity` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### damage_taken( amount: float, source: Entity, effect: EffectInstance, damage_type: int ) {#signal-damage-taken}

Combat signals

### damage_incoming( amount: float, damage_type: int, source: Entity, effect: EffectInstance ) {#signal-damage-incoming}

### healing_received( pool_id: int, amount: float, source: Entity, effect: EffectInstance ) {#signal-healing-received}

### entity_died( entity: Entity ) {#signal-entity-died}

### damage_absorbed_by_pool( pool_id: int, amount: float, damage_type: int, source: Entity, effect: EffectInstance ) {#signal-damage-absorbed-by-pool}

Mitigation signals

### ability_used( ability_instance: AbilityInstance, target: Variant ) {#signal-ability-used}

Ability signals

### ability_cooldown_started( ability_name: String, duration: float ) {#signal-ability-cooldown-started}

### effect_gained( effect_instance: EffectInstance ) {#signal-effect-gained}

Effect signals

### effect_lost( effect_instance: EffectInstance ) {#signal-effect-lost}

### effect_updated( effect_instance: EffectInstance ) {#signal-effect-updated}

### stat_changed( stat_id: int, old_value: float, new_value: float ) {#signal-stat-changed}

State signals

### pool_value_changed( pool_id: int, current: float, max_value: float ) {#signal-pool-value-changed}

### equipment_changed( item: ItemInstance, slot_def: EquipmentSlotDefinition, equipped: bool ) {#signal-equipment-changed}

### combat_state_changed( entity: Entity, in_combat: bool ) {#signal-combat-state-changed}

### immunity_activated( immunity_id: int, duration: float, immunity_type: ImmunityDefinition.ImmunityType, protected_targets: Array[int] ) {#signal-immunity-activated}

Immunity signals

### immunity_deactivated( immunity_id: int, immunity_type: ImmunityDefinition.ImmunityType, protected_targets: Array[int] ) {#signal-immunity-deactivated}

### pet_gained( pet: Pet ) {#signal-pet-gained}

Pet signals

### pet_lost( pet: Pet ) {#signal-pet-lost}

### item_received( item_instance: ItemInstance, slot_index: int ) {#signal-item-received}

Inventory component signals - relayed to Entity

### item_removed( item_instance: ItemInstance, quantity: int ) {#signal-item-removed}

## Variable descriptions

### Entity entity {#var-entity}

*No description yet.*

### CombatManager combat_manager {#var-combat-manager}

*No description yet.*

### Dictionary components =  {#var-components}

*No description yet.*

### Dictionary subscriptions =  {#var-subscriptions}

*No description yet.*

### bool is_initialized = false {#var-is-initialized}

*No description yet.*

## Method descriptions

### void register_component( component_type: String, component: Variant ) {#method-register-component}

*No description yet.*

### Variant get_component( component_type: String ) {#method-get-component}

*No description yet.*

### bool has_component( component_type: String ) {#method-has-component}

*No description yet.*

### void finalize_connections() {#method-finalize-connections}

*No description yet.*

### void subscribe( event_name: String, callback: Callable ) {#method-subscribe}

*No description yet.*

### void unsubscribe( event_name: String, callback: Callable ) {#method-unsubscribe}

*No description yet.*

### void emit_event( event_name: String, event_data: Dictionary = {} ) {#method-emit-event}

*No description yet.*

### void route_combat_state_changed( in_combat: bool ) {#method-route-combat-state-changed}

*No description yet.*

### void route_damage_dealt( effect: EffectInstance, target: Variant ) {#method-route-damage-dealt}

*No description yet.*

### void route_kill( target: Entity ) {#method-route-kill}

*No description yet.*

### void cleanup() {#method-cleanup}

*No description yet.*

