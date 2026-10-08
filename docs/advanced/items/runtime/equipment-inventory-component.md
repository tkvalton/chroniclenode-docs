<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EquipmentInventoryComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Equipment signals for Entity to connect to Emitted when stat bonuses are applied/removed from equipment

## Variables

| | | |
|---|---|---|
| `Array[EquipmentSlotInstance]` | [slots](#var-slots) | `[]` |
| `Entity` | [entity_owner](#var-entity-owner) | `null` |
| `Dictionary` | [active_set_bonus_effects](#var-active-set-bonus-effects) | `{} # Key: SetBonusDefinition, Value: Array[EffectInstance]` |
| `CombatManager` | [combat_manager](#var-combat-manager) |  |

## Methods

| | |
|---|---|
| `void` | [equipment_inventory_setup](#method-equipment-inventory-setup)( `unlocked_slots: Array[EquipmentSlotDefinition] = [], owner: Entity = null` ) |
| `void` | [update_unlocked_slots](#method-update-unlocked-slots)( `unlocked_slots: Array[EquipmentSlotDefinition]` ) |
| `Array[EquipmentSlotInstance]` | [get_locked_slots](#method-get-locked-slots)() |
| `Array[EquipmentSlotInstance]` | [get_unlocked_slots](#method-get-unlocked-slots)() |
| `bool` | [equip_item](#method-equip-item)( `item_instance: ItemInstance, forced: bool = false` ) |
| `bool` | [equip_item_to_slot](#method-equip-item-to-slot)( `item_instance: ItemInstance, slot_data: EquipmentSlotInstance, forced: bool = false` ) |
| `ItemInstance` | [unequip_slot](#method-unequip-slot)( `slot_data: EquipmentSlotInstance` ) |
| `bool` | [unequip_item](#method-unequip-item)( `item_instance: ItemInstance` ) |
| `Array[ItemInstance]` | [get_all_equipped_items](#method-get-all-equipped-items)() |
| `ItemInstance` | [get_item_at_index](#method-get-item-at-index)( `index: int` ) |
| `int` | [get_index_of_slot](#method-get-index-of-slot)( `slot_instance: EquipmentSlotInstance` ) |
| `bool` | [is_item_equipped](#method-is-item-equipped)( `item_instance: ItemInstance` ) |
| `Array[EquipmentSlotInstance]` | [get_slots_by_definition](#method-get-slots-by-definition)( `slot_def: EquipmentSlotDefinition` ) |
| `bool` | [has_item_equipped_in_slot_definition](#method-has-item-equipped-in-slot-definition)( `slot_def: EquipmentSlotDefinition` ) |
| `ItemInstance` | [get_equipped_item_from_slot_definition](#method-get-equipped-item-from-slot-definition)( `slot_def: EquipmentSlotDefinition` ) |
| `Array[ItemInstance]` | [get_all_equipped_items_from_slot_definition](#method-get-all-equipped-items-from-slot-definition)( `slot_def: EquipmentSlotDefinition` ) |
| `void` | [clear_all_equipment](#method-clear-all-equipment)() |
| `EquipmentSlotInstance` | [find_best_compatible_slot](#method-find-best-compatible-slot)( `item: ItemInstance` ) |
| `EquipmentSlotInstance` | [find_compatible_unlocked_slot](#method-find-compatible-unlocked-slot)( `item: ItemInstance` ) |
| `EquipmentSlotInstance` | [find_slot_with_item_instance](#method-find-slot-with-item-instance)( `item_instance: ItemInstance` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary, owner: Entity = null` ) |

## Signals

### equipment_stat_bonuses_applied( item_instance: ItemInstance, bonuses: Dictionary, is_applying: bool ) {#signal-equipment-stat-bonuses-applied}

Equipment signals for Entity to connect to Emitted when stat bonuses are applied/removed from equipment

### equipment_visual_changed( item_instance: ItemInstance, slot_def: EquipmentSlotDefinition, is_equipping: bool ) {#signal-equipment-visual-changed}

Emitted when equipment visual appearance changes (mesh/material assignments)

### equipment_effects_applied( item_instance: ItemInstance, effects: Array[EffectInstance], is_applying: bool ) {#signal-equipment-effects-applied}

Emitted when equipment-specific effects (not stats) are applied/removed

### equipment_changed( item_instance: ItemInstance, slot_def: EquipmentSlotDefinition, equipped: bool ) {#signal-equipment-changed}

Emitted whenever any equipment change occurs (equip/unequip)

### set_bonus_changed( item_instance: ItemInstance, set_def: SetBonusDefinition, is_applying: bool ) {#signal-set-bonus-changed}

Emitted when set bonus effects are applied/removed

## Variable descriptions

### Array[EquipmentSlotInstance] slots = [] {#var-slots}

Array of all equipment slots this entity has (includes locked/unlocked)

### Entity entity_owner = null {#var-entity-owner}

Reference to the entity that owns this equipment inventory

### Dictionary active_set_bonus_effects =  # Key: SetBonusDefinition, Value: Array[EffectInstance] {#var-active-set-bonus-effects}

Track active set bonus effects for proper removal

### CombatManager combat_manager {#var-combat-manager}

The combat system manager

## Method descriptions

### void equipment_inventory_setup( unlocked_slots: Array[EquipmentSlotDefinition] = [], owner: Entity = null ) {#method-equipment-inventory-setup}

Initialize equipment inventory with slot definitions and ownership

### void update_unlocked_slots( unlocked_slots: Array[EquipmentSlotDefinition] ) {#method-update-unlocked-slots}

Update which slots are unlocked based on provided definitions

### Array[EquipmentSlotInstance] get_locked_slots() {#method-get-locked-slots}

Get all currently locked equipment slots

### Array[EquipmentSlotInstance] get_unlocked_slots() {#method-get-unlocked-slots}

Get all currently unlocked equipment slots

### bool equip_item( item_instance: ItemInstance, forced: bool = false ) {#method-equip-item}

Equip an item to the best available slot. `forced` skips the requirements of the item (a trigger, an effect, starting gear or a reward puts it on; a player who equips it themselves does not use it)

### bool equip_item_to_slot( item_instance: ItemInstance, slot_data: EquipmentSlotInstance, forced: bool = false ) {#method-equip-item-to-slot}

Equip an item to a specific slot. Nothing changes unless the whole equip works: the slot must take the item, the player must meet its requirements (unless `forced`), and a worn item that is displaced must find room in the bag. An item that comes from the bag leaves it.

### ItemInstance unequip_slot( slot_data: EquipmentSlotInstance ) {#method-unequip-slot}

Unequip a specific slot and return the item instance

### bool unequip_item( item_instance: ItemInstance ) {#method-unequip-item}

Unequip a specific item instance

### Array[ItemInstance] get_all_equipped_items() {#method-get-all-equipped-items}

Get all equipped items

### ItemInstance get_item_at_index( index: int ) {#method-get-item-at-index}

Get item at specific slot index

### int get_index_of_slot( slot_instance: EquipmentSlotInstance ) {#method-get-index-of-slot}

Get the index of a specific slot instance

### bool is_item_equipped( item_instance: ItemInstance ) {#method-is-item-equipped}

Check if a specific item instance is currently equipped

### Array[EquipmentSlotInstance] get_slots_by_definition( slot_def: EquipmentSlotDefinition ) {#method-get-slots-by-definition}

Get all slots that match a specific slot definition

### bool has_item_equipped_in_slot_definition( slot_def: EquipmentSlotDefinition ) {#method-has-item-equipped-in-slot-definition}

Check if any item is equipped in slot definition

### ItemInstance get_equipped_item_from_slot_definition( slot_def: EquipmentSlotDefinition ) {#method-get-equipped-item-from-slot-definition}

Get first equipped item from slot definition

### Array[ItemInstance] get_all_equipped_items_from_slot_definition( slot_def: EquipmentSlotDefinition ) {#method-get-all-equipped-items-from-slot-definition}

Get all equipped items from slot definition

### void clear_all_equipment() {#method-clear-all-equipment}

Clear all equipment Remove all equipped items and clear all slots

### EquipmentSlotInstance find_best_compatible_slot( item: ItemInstance ) {#method-find-best-compatible-slot}

Find the best compatible slot: prefer empty slots, then fall back to occupied ones

### EquipmentSlotInstance find_compatible_unlocked_slot( item: ItemInstance ) {#method-find-compatible-unlocked-slot}

Find the first unlocked slot that can accept the given item and is not blocked by weapons

### EquipmentSlotInstance find_slot_with_item_instance( item_instance: ItemInstance ) {#method-find-slot-with-item-instance}

Find the slot that currently contains the specified item instance

### Dictionary to_save_data() {#method-to-save-data}

Serialize equipment inventory state to dictionary for saving

### void from_save_data( save_data: Dictionary, owner: Entity = null ) {#method-from-save-data}

Restore equipment inventory state from saved dictionary data

