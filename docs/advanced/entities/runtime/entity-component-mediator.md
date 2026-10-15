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

Emitted before damage lands: the amount, the damage type, the source and the effect.

### healing_received( pool_id: int, amount: float, source: Entity, effect: EffectInstance ) {#signal-healing-received}

Emitted when a pool is healed: the pool, the amount, the source and the effect.

### entity_died( entity: Entity ) {#signal-entity-died}

Emitted when the entity dies.

### damage_absorbed_by_pool( pool_id: int, amount: float, damage_type: int, source: Entity, effect: EffectInstance ) {#signal-damage-absorbed-by-pool}

Mitigation signals

### ability_used( ability_instance: AbilityInstance, target: Variant ) {#signal-ability-used}

Ability signals

### ability_cooldown_started( ability_name: String, duration: float ) {#signal-ability-cooldown-started}

Emitted when the cooldown of an ability starts: the ability and how long it lasts.

### effect_gained( effect_instance: EffectInstance ) {#signal-effect-gained}

Effect signals

### effect_lost( effect_instance: EffectInstance ) {#signal-effect-lost}

Emitted when an effect ends or is removed.

### effect_updated( effect_instance: EffectInstance ) {#signal-effect-updated}

Emitted when an effect changes (a new stack, a refreshed duration).

### stat_changed( stat_id: int, old_value: float, new_value: float ) {#signal-stat-changed}

State signals

### pool_value_changed( pool_id: int, current: float, max_value: float ) {#signal-pool-value-changed}

Emitted when the value of a pool changes: the pool, the current and the maximum value.

### equipment_changed( item: ItemInstance, slot_def: EquipmentSlotDefinition, equipped: bool ) {#signal-equipment-changed}

Emitted when an item is equipped or taken off: the item, the slot and whether it was equipped.

### combat_state_changed( entity: Entity, in_combat: bool ) {#signal-combat-state-changed}

Emitted when the entity enters or leaves combat.

### immunity_activated( immunity_id: int, duration: float, immunity_type: ImmunityDefinition.ImmunityType, protected_targets: Array[int] ) {#signal-immunity-activated}

Immunity signals

### immunity_deactivated( immunity_id: int, immunity_type: ImmunityDefinition.ImmunityType, protected_targets: Array[int] ) {#signal-immunity-deactivated}

Emitted when a temporary immunity ends: the immunity, its type and what it protected against.

### pet_gained( pet: Pet ) {#signal-pet-gained}

Pet signals

### pet_lost( pet: Pet ) {#signal-pet-lost}

Emitted when a pet of the entity is lost.

### item_received( item_instance: ItemInstance, slot_index: int ) {#signal-item-received}

Inventory component signals - relayed to Entity

### item_removed( item_instance: ItemInstance, quantity: int ) {#signal-item-removed}

Emitted when items leave the bag: the item and how many.

## Variable descriptions

### Entity entity {#var-entity}

The entity the mediator belongs to.

### CombatManager combat_manager {#var-combat-manager}

The manager of combat of the game.

### Dictionary components =  {#var-components}

The components registered with the mediator, by type.

### Dictionary subscriptions =  {#var-subscriptions}

The callbacks subscribed to each event name.

### bool is_initialized = false {#var-is-initialized}

True once the mediator is set up.

## Method descriptions

### void register_component( component_type: String, component: Variant ) {#method-register-component}

Registers a component under its type name.

### Variant get_component( component_type: String ) {#method-get-component}

The component of a type, or null.

### bool has_component( component_type: String ) {#method-has-component}

Is a component of this type registered?

### void finalize_connections() {#method-finalize-connections}

Connects the signals of the components to each other. Called once after every component is registered.

### void subscribe( event_name: String, callback: Callable ) {#method-subscribe}

Subscribes a callback to an event by name (once: a callback already there is not added again).

### void unsubscribe( event_name: String, callback: Callable ) {#method-unsubscribe}

Takes a callback off an event.

### void emit_event( event_name: String, event_data: Dictionary = &#123;&#125; ) {#method-emit-event}

Calls every callback subscribed to the event with the data.

### void route_combat_state_changed( in_combat: bool ) {#method-route-combat-state-changed}

Tells everyone the combat state of the entity changed.

### void route_damage_dealt( effect: EffectInstance, target: Variant ) {#method-route-damage-dealt}

Tells everyone the entity dealt damage to a target.

### void route_kill( target: Entity ) {#method-route-kill}

Called by the entity when it kills another one.

### void cleanup() {#method-cleanup}

Forgets every component and subscription (the entity is going away).

