<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Runtime instance of an item that references an ItemDefinition for configuration Handles individual item state, modifications, effects, and socket management

## Variables

| | | |
|---|---|---|
| `ItemDefinition` | [definition](#var-definition) |  |
| `String` | [instance_id](#var-instance-id) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `CombatManager:` | [combat_manager](#var-combat-manager) |  |
| `int:` | [stack_size](#var-stack-size) |  |
| `Dictionary` | [runtime_data](#var-runtime-data) | `{}` |
| `Array[EffectInstance]` | [active_equipment_effects](#var-active-equipment-effects) | `[]` |
| `bool` | [is_equipped](#var-is-equipped) | `false` |
| `Entity` | [equipped_to](#var-equipped-to) | `null` |
| `Array[SocketInstance]` | [socket_instances](#var-socket-instances) | `[]` |
| `bool` | [all_sockets_filled](#var-all-sockets-filled) | `false` |
| `EffectInstance` | [full_socket_bonus_effect](#var-full-socket-bonus-effect) | `null` |
| `Timer` | [cooldown_timer](#var-cooldown-timer) | `null` |
| `bool` | [is_on_cooldown](#var-is-on-cooldown) | `false` |
| `int` | [current_charges](#var-current-charges) | `0` |
| `AbilityInstance` | [ability_instance](#var-ability-instance) | `null` |
| `Array[EnchantEntry]` | [enchants](#var-enchants) | `[]` |
| `Effect:` | [current_enchant](#var-current-enchant) |  |

## Methods

| | |
|---|---|
| `SocketInstance` | [get_socket](#method-get-socket)( `index: int` ) |
| `int` | [get_socket_count](#method-get-socket-count)() |
| `int` | [get_occupied_socket_count](#method-get-occupied-socket-count)() |
| `bool` | [are_all_sockets_filled](#method-are-all-sockets-filled)() |
| `bool` | [socket_item_at_index](#method-socket-item-at-index)( `index: int, item: ItemInstance` ) |
| `ItemInstance` | [unsocket_item_at_index](#method-unsocket-item-at-index)( `index: int` ) |
| `int` | [find_available_socket_for_item](#method-find-available-socket-for-item)( `item: ItemInstance` ) |
| `bool` | [auto_socket_item](#method-auto-socket-item)( `item: ItemInstance` ) |
| `Array[ItemInstance]` | [get_socketed_items](#method-get-socketed-items)() |
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_description](#method-get-description)() |
| `Texture2D` | [get_icon](#method-get-icon)() |
| `int` | [get_vendor_value](#method-get-vendor-value)() |
| `int` | [get_max_stack_size](#method-get-max-stack-size)() |
| `int` | [get_item_level](#method-get-item-level)() |
| `bool` | [equip](#method-equip)( `user: Entity` ) |
| `bool` | [unequip](#method-unequip)() |
| `bool` | [use](#method-use)( `user: Entity` ) |
| `bool` | [can_use](#method-can-use)( `user: Entity` ) |
| `bool` | [enchant_target_item](#method-enchant-target-item)( `target_equipment: ItemInstance, user: Entity` ) |
| `int` | [get_current_charges](#method-get-current-charges)() |
| `int` | [get_max_charges](#method-get-max-charges)() |
| `bool` | [has_charges](#method-has-charges)() |
| `bool` | [is_at_full_charges](#method-is-at-full-charges)() |
| `float` | [get_charge_percentage](#method-get-charge-percentage)() |
| `bool` | [can_stack_with](#method-can-stack-with)( `other_item: ItemInstance` ) |
| `int` | [add_to_stack](#method-add-to-stack)( `amount: int` ) |
| `int` | [remove_from_stack](#method-remove-from-stack)( `amount: int` ) |
| `bool` | [is_stack_full](#method-is-stack-full)() |
| `bool` | [is_stack_empty](#method-is-stack-empty)() |
| `bool` | [meets_requirements](#method-meets-requirements)( `user: Entity` ) |
| `String` | [get_requirement_failure_message](#method-get-requirement-failure-message)( `user: Entity` ) |
| `bool` | [is_equipment](#method-is-equipment)() |
| `bool` | [is_consumable](#method-is-consumable)() |
| `bool` | [is_weapon](#method-is-weapon)() |
| `bool` | [is_socketable](#method-is-socketable)() |
| `bool` | [add_enchant_effect](#method-add-enchant-effect)( `effect: Effect, duration: float = -1, source: String = ""` ) |
| `Dictionary` | [preview_enchant](#method-preview-enchant)( `effect: Effect` ) |
| `void` | [remove_enchant](#method-remove-enchant)( `effect: Effect = null, cleanup_reason: String = ""` ) |
| `void` | [remove_current_enchant](#method-remove-current-enchant)( `cleanup_reason: String = ""` ) |
| `bool` | [has_enchant](#method-has-enchant)() |
| `Effect` | [get_current_enchant](#method-get-current-enchant)() |
| `Array[Effect]` | [get_enchant_effects](#method-get-enchant-effects)() |
| `Dictionary` | [get_enchant_metadata](#method-get-enchant-metadata)( `effect: Effect = null` ) |
| `float` | [get_enchant_time_remaining](#method-get-enchant-time-remaining)( `effect: Effect = null` ) |
| `Array` | [get_enchant_save_data](#method-get-enchant-save-data)() |
| `void` | [restore_enchant_from_save](#method-restore-enchant-from-save)( `save_data: Variant` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [receive_shared_cooldown](#method-receive-shared-cooldown)( `duration: float` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### item_used( item_instance: ItemInstance ) {#signal-item-used}

Emitted when the item is used

### item_properties_changed( item_instance: ItemInstance ) {#signal-item-properties-changed}

Emitted when item properties are dynamically changed (durability, enchantments, etc.)

### item_equipped( item_instance: ItemInstance, user: Entity ) {#signal-item-equipped}

Emitted when item is equipped (for equipment items)

### item_unequipped( item_instance: ItemInstance, user: Entity ) {#signal-item-unequipped}

Emitted when item is unequipped (for equipment items)

### item_consumed( item_instance: ItemInstance, user: Entity, amount_consumed: int ) {#signal-item-consumed}

Emitted when item is consumed (for consumable items)

### item_depleted( item_instance: ItemInstance ) {#signal-item-depleted}

Emitted when on-use item has no charges left and should be removed

### socket_changed( item_instance: ItemInstance, socket_index: int, socketable_item: ItemInstance ) {#signal-socket-changed}

Emitted when a socket state changes (item socketed/unsocketed)

### sockets_full_status_changed( item_instance: ItemInstance, are_full: bool ) {#signal-sockets-full-status-changed}

Emitted when all sockets become filled or unfilled

### quest_item_used( item_instance: ItemInstance, quest_id: int, user: Entity ) {#signal-quest-item-used}

### readable_item_used( item_instance: ItemInstance, pages: Array[String] ) {#signal-readable-item-used}

### enchant_applied( item_instance: ItemInstance, enchant_effect: Effect ) {#signal-enchant-applied}

Emitted when an enchant is applied to this item

### enchant_removed( item_instance: ItemInstance, enchant_effect: Effect, reason: String ) {#signal-enchant-removed}

Emitted when an enchant expires or is removed from this item

### enchant_scroll_used( item_instance: ItemInstance, enchant_scroll: ItemDefinitionEnchantScroll, user: Entity ) {#signal-enchant-scroll-used}

Emitted when an enchant scroll is used (for UI integration)

## Variable descriptions

### ItemDefinition definition {#var-definition}

Reference to the immutable item definition (shared across instances)

### String instance_id {#var-instance-id}

Unique instance ID for save/load and tracking

### GameHost.SystemHub system_hub {#var-system-hub}

Combat system manager

### CombatManager: combat_manager {#var-combat-manager}

The combat manager of the game: item definitions start their effects (consumables, socketed gems) through it

### int: stack_size {#var-stack-size}

Current stack size for this item instance

### Dictionary runtime_data =  {#var-runtime-data}

Runtime data storage for item-specific information

### Array[EffectInstance] active_equipment_effects = [] {#var-active-equipment-effects}

Active effect instances from this equipment (only for ItemDefinitionEquipment)

### bool is_equipped = false {#var-is-equipped}

Whether this equipment is currently equipped

### Entity equipped_to = null {#var-equipped-to}

The entity this equipment is equipped to (if any)

### Array[SocketInstance] socket_instances = [] {#var-socket-instances}

Array of socket instances for this item (only for equipment with sockets)

### bool all_sockets_filled = false {#var-all-sockets-filled}

Whether all sockets are currently filled

### EffectInstance full_socket_bonus_effect = null {#var-full-socket-bonus-effect}

Active effect instance from full socket bonus (if any)

### Timer cooldown_timer = null {#var-cooldown-timer}

Cooldown timer for consumable items

### bool is_on_cooldown = false {#var-is-on-cooldown}

Whether this consumable is on cooldown

### int current_charges = 0 {#var-current-charges}

Current charges for on-use items

### AbilityInstance ability_instance = null {#var-ability-instance}

Ability instance for on-use items (holds the runtime state of the item's ability)

### Array[EnchantEntry] enchants = [] {#var-enchants}

The enchants of the item (see the enchant system below)

### Effect: current_enchant {#var-current-enchant}

The first enchant effect (null if none), kept for older code

## Method descriptions

### SocketInstance get_socket( index: int ) {#method-get-socket}

Get socket instance by index

### int get_socket_count() {#method-get-socket-count}

Get total number of sockets

### int get_occupied_socket_count() {#method-get-occupied-socket-count}

Get number of occupied sockets

### bool are_all_sockets_filled() {#method-are-all-sockets-filled}

Check if all sockets are filled

### bool socket_item_at_index( index: int, item: ItemInstance ) {#method-socket-item-at-index}

Socket an item into a specific socket

### ItemInstance unsocket_item_at_index( index: int ) {#method-unsocket-item-at-index}

Remove item from a specific socket

### int find_available_socket_for_item( item: ItemInstance ) {#method-find-available-socket-for-item}

Find first available socket for a socketable item

### bool auto_socket_item( item: ItemInstance ) {#method-auto-socket-item}

Auto-socket an item into the first available compatible socket

### Array[ItemInstance] get_socketed_items() {#method-get-socketed-items}

Get all socketed items

### String get_display_name() {#method-get-display-name}

Get display name from definition

### String get_description() {#method-get-description}

Get description from definition

### Texture2D get_icon() {#method-get-icon}

Get icon from definition

### int get_vendor_value() {#method-get-vendor-value}

Get vendor value from definition

### int get_max_stack_size() {#method-get-max-stack-size}

Get max stack size from definition

### int get_item_level() {#method-get-item-level}

Get item level from definition

### bool equip( user: Entity ) {#method-equip}

Equip this item (for equipment items) - now only handles state tracking

### bool unequip() {#method-unequip}

Unequip this item - now only handles state tracking

### bool use( user: Entity ) {#method-use}

Use the item

### bool can_use( user: Entity ) {#method-can-use}

Check if this item instance can be used

### bool enchant_target_item( target_equipment: ItemInstance, user: Entity ) {#method-enchant-target-item}

Enchant a target equipment item (for enchant scrolls)

### int get_current_charges() {#method-get-current-charges}

Get current charges for on-use items

### int get_max_charges() {#method-get-max-charges}

Get maximum charges for on-use items

### bool has_charges() {#method-has-charges}

Check if on-use item has charges remaining

### bool is_at_full_charges() {#method-is-at-full-charges}

Check if on-use item is at full charges

### float get_charge_percentage() {#method-get-charge-percentage}

Get charges remaining as a percentage (0.0 to 1.0)

### bool can_stack_with( other_item: ItemInstance ) {#method-can-stack-with}

Check if this item can stack with another item instance

### int add_to_stack( amount: int ) {#method-add-to-stack}

Add to stack size

### int remove_from_stack( amount: int ) {#method-remove-from-stack}

Remove from stack size

### bool is_stack_full() {#method-is-stack-full}

Check if stack is full

### bool is_stack_empty() {#method-is-stack-empty}

Check if stack is empty

### bool meets_requirements( user: Entity ) {#method-meets-requirements}

Check if this item meets requirements for a user

### String get_requirement_failure_message( user: Entity ) {#method-get-requirement-failure-message}

Get requirement failure message

### bool is_equipment() {#method-is-equipment}

Check if this is a specific item type

### bool is_consumable() {#method-is-consumable}

*No description yet.*

### bool is_weapon() {#method-is-weapon}

*No description yet.*

### bool is_socketable() {#method-is-socketable}

*No description yet.*

### bool add_enchant_effect( effect: Effect, duration: float = -1, source: String = "" ) {#method-add-enchant-effect}

Add an enchant effect to this equipment item. False when the item is not equipment, or a group of the enchant refuses it (the item keeps its enchants)

### Dictionary preview_enchant( effect: Effect ) {#method-preview-enchant}

Would this enchant be refused, and which enchants would it replace? (for a scroll or an ability that asks before it spends anything)

### void remove_enchant( effect: Effect = null, cleanup_reason: String = "" ) {#method-remove-enchant}

Remove one enchant (null: every enchant of the item)

### void remove_current_enchant( cleanup_reason: String = "" ) {#method-remove-current-enchant}

Remove every enchant (the single enchant of the old rules)

### bool has_enchant() {#method-has-enchant}

Does this item have an enchant?

### Effect get_current_enchant() {#method-get-current-enchant}

The first enchant effect (null if none); `get_enchant_effects` lists them all

### Array[Effect] get_enchant_effects() {#method-get-enchant-effects}

*No description yet.*

### Dictionary get_enchant_metadata( effect: Effect = null ) {#method-get-enchant-metadata}

*No description yet.*

### float get_enchant_time_remaining( effect: Effect = null ) {#method-get-enchant-time-remaining}

Time left on an enchant (-1 for permanent, 0 if it is not on the item); the first enchant when none is given

### Array get_enchant_save_data() {#method-get-enchant-save-data}

Enchant save data: one entry per enchant

### void restore_enchant_from_save( save_data: Variant ) {#method-restore-enchant-from-save}

Restore the enchants from save data (a list, or the single enchant dictionary of older saves)

### Dictionary to_save_data() {#method-to-save-data}

Save instance runtime state

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Load instance runtime state

### void receive_shared_cooldown( duration: float ) {#method-receive-shared-cooldown}

A member of one of the item's groups was used: this item is on cooldown for the shared time too (unless it is on a longer one)

### void cleanup() {#method-cleanup}

Clean up all resources used by this item instance

