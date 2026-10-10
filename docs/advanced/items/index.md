# Items: how they are built

The [Items chapter](/basic/items/) explains the editors. This page explains the code: what is a resource, what is an object that lives while the game runs, who owns what, and where an item can go wrong.

## Definitions and instances

| | Definition | Instance |
|---|---|---|
| What | A shared [`DatabaseResource`](/advanced/data-and-database/database-classes/database-resource) in `res://src/data/items/`. Never changed while the game runs | An `ItemInstance`, a `RefCounted` made when an item enters a bag, a shop or a chest |
| Holds | The kind, the stack size, the stat bonuses, the effect, the value | The stack count, the charges, the cooldown, the sockets and their gems, the enchantments with their timers, `runtime_data` overrides |
| Made by | The Items editor | [`InstanceUtility`](/advanced/managers/utilities/instance-utility) |

Always ask the **instance** for a value that can change (`get_max_stack_size()`, `get_vendor_value()`), not the definition: an instance may override it.

## Generated items and loot

An item can be made with a roll: its quality, its affixes (and so its stats and effects), its item level, its name and its sockets are rolled by [`ItemGenerator`](/advanced/items/generation-runtime/item-generator)from a stat budget ([`ItemBudget`](/advanced/items/item-definitions/item-budget)), and kept in the instance. Loot is handed out by the [loot rules](/advanced/items/loot) of an NPC or an object. See [Generated items: how they are built](/advanced/items/generation) and [Loot: how it is built](/advanced/items/loot).

## The kinds of item

`ItemDefinition` is the base. Every kind is a subclass; the Items editor offers them in its **Add** dialog.

| Class | Adds |
|---|---|
| [`ItemDefinitionConsumable`](/advanced/items/item-definitions/item-definition-consumable) | `consume_effect_id`, `consume_amount`, `consume_effect_per_amount`, the cooldown |
| [`ItemDefinitionEquipment`](/advanced/items/item-definitions/item-definition-equipment) | `stat_bonuses`, `equipment_type`, `armor_class`, `equipment_effects`, `on_use_ability_id`, `socket_definitions`, `full_sockets_effect`, `set_bonus_definition`, `modular_mesh_data` |
| [`ItemDefinitionEquipmentWeapon`](/advanced/items/item-definitions/item-definition-equipment-weapon) | `weapon_class`, the damage range and type, `weapon_speed`, `collision_template`. `get_weapon_hand_requirement()` is `2` when the weapon type blocks slots |
| [`ItemDefinitionAmmo`](/advanced/items/item-definitions/item-definition-ammo) | `ammo_effects`. It is equipment: it sits in the ammo slot |
| [`ItemDefinitionOnUse`](/advanced/items/item-definitions/item-definition-on-use) | `ability_id` and the charges |
| [`ItemDefinitionMaterial`](/advanced/items/item-definitions/item-definition-material), [`ItemDefinitionReadable`](/advanced/items/item-definitions/item-definition-readable), [`ItemDefinitionQuest`](/advanced/items/item-definitions/item-definition-quest), [`ItemDefinitionSocketable`](/advanced/items/item-definitions/item-definition-socketable), [`ItemDefinitionEnchantScroll`](/advanced/items/item-definitions/item-definition-enchant-scroll) | Their own small sets of fields |

**Using an item** is `ItemInstance.use(user)`: the definition validates (`can_use`) and executes (`execute_use`), then the instance consumes (stack, charges, cooldown). The entity announces it with `entity_item_used` and `entity_item_consumed`; a used-up item raises `item_removed` from its slot and `entity_item_depleted`.

## Containers

| Class | Holds | Used by |
|---|---|---|
| [`InventoryComponent`](/advanced/items/runtime/inventory-component) | Slots of [`InventorySlotInstance`](/advanced/items/runtime/inventory-slot-instance) and the currency amounts by id | Players, NPCs, chests, corpses |
| [`EquipmentInventoryComponent`](/advanced/items/runtime/equipment-inventory-component) | Slots of [`EquipmentSlotInstance`](/advanced/items/runtime/equipment-slot-instance), made from the [slot definitions](/advanced/equipment-definitions/), locked or not | Entities that wear equipment |
| [`VendorInventoryComponent`](/advanced/items/runtime/vendor-inventory-component) | The stock and the purse of a vendor | Vendor interactables |

`InventoryComponent.add_item_definition` is **all or nothing** and splits into stacks; `add_item_definition_partial` adds what fits. A key item cannot be discarded: `can_discard_item` and `discard_item` are the calls a UI delete must use.

`EquipmentInventoryComponent` applies and removes everything an item brings: the stat bonuses, `equipment_effects`, the effects of its gems, the full sockets bonus, the set bonus effects, and the visuals (through signals that the rig listens to). `equip_item` moves the item out of the bag itself, then looks for a slot (`find_best_compatible_slot`: free slots first, then a displaceable one); `forced = true` skips the requirements of the item (used by NPC behaviors, starting gear, rewards, ammo refills and loading a save). A weapon whose type blocks slots empties them first (`_handle_weapon_slot_conflicts`), or moves the weapon in the way to another slot.

## Crafting

`CraftingManager` (on the [party manager](/advanced/entities/runtime/party-manager)) holds one [`CraftSchoolInstance`](/advanced/items/crafting/craft-school-instance) for each [`CraftSchoolDefinition`](/advanced/items/crafting/craft-school-definition). A school keeps the skill level and experience, the learned recipe ids, a queue of [`CraftingJob`](/advanced/items/crafting/crafting-job)s with one timer each, and the finished items that wait for room. `start_craft` checks the recipe (`CraftingRecipeDefinition.can_craft`), takes the materials, checks the room for the result (and gives the materials back if there is none), and queues a job for each piece. Crafts in progress are saved with who started them and restored on load.

## Loot

`LootTable.generate_loot(looter)` returns `{item_id: quantity}`: the guaranteed entries first, then `randi_range(min_items, max_items)` weighted picks. An entry that cannot duplicate is excluded after it has dropped. The looter's `loot_rarity` gain channel raises the weight of the entries that are lighter than the average; the `loot_quantity` channel raises the stack sizes. [`Entity`](/advanced/entities/runtime/entity) calls it with the entity that dealt the last damage as the looter, once when the NPC spawns or dies (`LootTableLogic`); a container calls it with no looter.

## Vendors

[`VendorItemStock.calculate_sell_price`](/advanced/items/vendors/vendor-item-stock) is `base_value x sell_value_multiplier x weight x item_price_modifier`, rounded down and at least 1. `VendorInventoryComponent.calculate_sell_price(item_instance)` is what the vendor pays: `vendor_value x buy_value_multiplier`, at least 1, `0` when the vendor cannot afford it. `sell_item_to_player` and `buy_item_from_player` return a dictionary with `success`, a `message`, the `payment` and the `currency_id`. Restocking uses [`ChronoManager.total_game_hours`](/advanced/managers/managers/chrono-manager), one timer per stocked item (`item_restock_times`), and starts the wait again whenever a restock is due.

## Rewards and room

Every [`Reward`](/advanced/shared-systems/rewards) has `get_block_reason(player)`. [`Player.grant_reward`](/advanced/entities/runtime/player) keeps a blocked reward in `pending_rewards` (saved), warns through `InstanceUtility.warn_player`, and gives it when the bag has room (`reward_blocked`, `reward_given`). [`Quest.complete()`](/advanced/events-and-quests/events/quest) returns `false` while a reward does not fit.

## Saving

Instances save the stack, charges, cooldowns, enchantments with their remaining time, and gems. Currency amounts are saved per currency (with the maximum applied). The vendor saves its stock levels, the restock times and its purse. The learned recipes are saved as integer ids.

## The classes

### Item definitions

<!-- classes:items/item-definitions -->
| Class | What it is |
|---|---|
| [ItemBudget](/advanced/items/item-definitions/item-budget) | The stat budget of an item: a pool of points that the bonuses of a generated item spend. |
| [ItemDefinition](/advanced/items/item-definitions/item-definition) | Base class for all item definitions with integrated Requirement system |
| [ItemDefinitionAmmo](/advanced/items/item-definitions/item-definition-ammo) | Ammunition: arrows, bolts, bullets, and anything else an ability spends a piece of per use. |
| [ItemDefinitionConsumable](/advanced/items/item-definitions/item-definition-consumable) | Consumable items that provide immediate effects when used (potions, food, scrolls, etc.) Uses the effect system for all functionality - effects, validation, and state management |
| [ItemDefinitionEnchantScroll](/advanced/items/item-definitions/item-definition-enchant-scroll) | Enchantment scrolls that can permanently or temporarily enhance equipment items Uses effects system for actual enchantment functionality |
| [ItemDefinitionEquipment](/advanced/items/item-definitions/item-definition-equipment) | Equipment items that can be worn by characters to provide stat bonuses and visual changes |
| [ItemDefinitionEquipmentWeapon](/advanced/items/item-definitions/item-definition-equipment-weapon) | Weapon items that can be equipped to provide combat capabilities Inherits all equipment functionality and adds weapon-specific properties for damage, speed, and combat |
| [ItemDefinitionMaterial](/advanced/items/item-definitions/item-definition-material) |  |
| [ItemDefinitionOnUse](/advanced/items/item-definitions/item-definition-on-use) | Items that function like abilities when used - trigger ability execution with charge consumption Uses charges instead of stacking for cleaner inventory management |
| [ItemDefinitionQuest](/advanced/items/item-definitions/item-definition-quest) | Quest-related items that trigger quests or serve as quest objectives. |
| [ItemDefinitionReadable](/advanced/items/item-definitions/item-definition-readable) | Readable items that display text content in a UI panel when used Supports multi-page documents like books, scrolls, letters, and lore texts |
| [ItemDefinitionSocketable](/advanced/items/item-definitions/item-definition-socketable) | Socketable items that can be inserted into socket slots on equipment to provide additional effects The entity that owns the socketed equipment receives the socketable's effect |
| [LootEntry](/advanced/items/item-definitions/loot-entry) | One line of a loot table: an item, an amount of a currency, or another loot table. |
| [LootLevelSource](/advanced/items/item-definitions/loot-level-source) | Where the item level of a generated item comes from: loot of an NPC or object, a reward, a vendor. |
| [LootRule](/advanced/items/item-definitions/loot-rule) | One rule of what a holder (an NPC, a chest, a crate) hands out and when: a loot table, a trigger, and where the item level of the drops comes from. |
| [LootTable](/advanced/items/item-definitions/loot-table) | A shareable resource for randomizing loot drops Can be used by entities, containers, chests, etc. |
<!-- /classes -->

### Currency, crafting and vendors

<!-- classes:items/currency -->
| Class | What it is |
|---|---|
| [CurrencyDefinition](/advanced/items/currency/currency-definition) | CurrencyDefinition defines a currency type with display properties and limits Create instances as .tres files for each currency (gold, gems, credits, etc.) |
<!-- /classes -->

<!-- classes:items/crafting -->
| Class | What it is |
|---|---|
| [CraftingJob](/advanced/items/crafting/crafting-job) | Represents an active crafting operation with progress tracking Uses a single completion timer instead of polling for smoother performance Progress is calculated on-demand from timer.time_left when needed |
| [CraftingManager](/advanced/items/crafting/crafting-manager) | CraftingManager - Main interface for the crafting system Autoload singleton that stores player crafting data and provides API for UI and gameplay systems |
| [CraftingRecipeDefinition](/advanced/items/crafting/crafting-recipe-definition) | Definition for a crafting recipe that can be executed multiple times Uses ItemDefinition references and integrates with the database system |
| [CraftSchoolDefinition](/advanced/items/crafting/craft-school-definition) | Definition of a crafting school (Blacksmithing, Tailoring, Alchemy, etc.) Contains static data that can be shared across multiple instances |
| [CraftSchoolInstance](/advanced/items/crafting/craft-school-instance) | Runtime instance of a craft school for a specific entity Contains learned recipes, skill progress, and active crafting state |
<!-- /classes -->

<!-- classes:items/vendors -->
| Class | What it is |
|---|---|
| [VendorDefinition](/advanced/items/vendors/vendor-definition) | VendorDefinition serves as a blueprint/template that multiple vendor instances can share Contains all the static configuration data for a vendor type |
| [VendorItemStock](/advanced/items/vendors/vendor-item-stock) | Defines how a vendor stocks a specific item (template for runtime inventory) |
<!-- /classes -->

### Inventory and equipment (runtime)

<!-- classes:items/runtime -->
| Class | What it is |
|---|---|
| [DroppedItem](/advanced/items/runtime/dropped-item) |  |
| [EquipmentInventoryComponent](/advanced/items/runtime/equipment-inventory-component) | Equipment signals for Entity to connect to Emitted when stat bonuses are applied/removed from equipment |
| [EquipmentSlotInstance](/advanced/items/runtime/equipment-slot-instance) | Equipment slot for single-item equipment storage |
| [InventoryComponent](/advanced/items/runtime/inventory-component) | Universal inventory system for storing item instances and currency |
| [InventorySlotInstance](/advanced/items/runtime/inventory-slot-instance) | Inventory slot with full stacking support and item management |
| [ItemInstance](/advanced/items/runtime/item-instance) | Runtime instance of an item that references an ItemDefinition for configuration Handles individual item state, modifications, effects, and socket management |
| [SlotInstance](/advanced/items/runtime/slot-instance) | Base class for all slot types - provides common interface for item storage |
| [VendorInventoryComponent](/advanced/items/runtime/vendor-inventory-component) | Stock-based vendor inventory that manages item availability and creates instances on-demand No longer inherits from InventoryComponent - uses pure stock tracking instead |
<!-- /classes -->
