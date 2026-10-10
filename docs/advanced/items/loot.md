# Loot: how it is built

The [Loot Rules](/basic/items/loot-rules) and [Loot Tables](/basic/items/loot-tables) chapters explain the options. This page explains the code.

## The pieces

| Class | What it is |
|---|---|
| [`LootTable`](/advanced/items/item-definitions/loot-table), [`LootEntry`](/advanced/items/item-definitions/loot-entry) | What can drop. `roll_drops(context)` is the roll; `generate_loot(looter)` is the older answer (item id → quantity) |
| [`LootRule`](/advanced/items/item-definitions/loot-rule) | A trigger, a table (shared by `table_id`, or `own_table` saved with the holder), a level source, `uses_receiver` |
| [`LootLevelSource`](/advanced/items/item-definitions/loot-level-source) | Where an item level comes from: a source, an offset, a lowest and a highest level |
| [`LootLevel`](/advanced/items/generation-runtime/loot-level) | `resolve(sources, holder_kind, holder, receiver, hub)` answers the level; `resolve_nested`, `from_choice` |
| [`LootDispatcher`](/advanced/items/generation-runtime/loot-dispatcher) | `run` finds the rules of a trigger and rolls them into an inventory; `roll_rule`, `deliver` |
| [`Entity`](/advanced/entities/runtime/entity), [`InteractableObject`](/advanced/entities/runtime/interactable-object) | The holders: `get_loot_rules()`, `run_loot_rules(trigger, receiver)`, `loot_rolled` |

## The roll of a table

`LootTable.roll_drops(context)` returns `{"items": [...], "currency": {id: amount}}`. Each item drop is `{item_id, quantity, item_level, min_quality_tier, magic_find}`, so a generated item can be made later with everything it needs. The context holds `looter` (an entity with `modify_gain` and `modify_gain_int`), `item_level`, `rng`, and `level_resolver` (a `Callable(source, inherited_level)` that answers the level of a table inside a table).

1. The looter's **magic find** ([`GainChannels.LOOT_RARITY`](/advanced/entity-stats/stats-and-pools/gain-channels)) is read once.
2. The **guaranteed entries** that fit the level are dropped.
3. `randi_range(min_items, max_items)` **rolls**: each picks among the entries that fit the level and are not used (an entry that cannot duplicate is used up), by weight; magic find raises the weight of entries under the average; `nothing_weight` is a share of the roll that picks nothing.
4. An entry's **chance** is checked after it is picked. An item entry rolls its quantity (and the looter's **loot quantity** channel); a currency entry rolls an amount; a **table** entry rolls the other table at the level its own `level_source` gives (the resolver), up to `MAX_DEPTH` (6) levels.

## What a holder does

A holder has `get_loot_rules()`: an NPC's `loot_rules` plus the rules its older settings make ([`NPCDefinition.get_legacy_loot_rules`](/advanced/entities/definitions/npc-definition): the old table with its logic, and the fixed `inventory` as an own table of guaranteed entries; `LootRule.from_inventory`), or the rules of a placed NPC ([`UniqueEntityData.get_effective_loot_rules`](/advanced/world/world-data/unique-entity-data): its own replace everything). An object has [`InteractableDefinition.loot_rules`](/advanced/entities/definitions/interactable-definition) plus the rules of its container's older settings ([`ContainerInteraction.get_legacy_loot_rules`](/advanced/entities/interactions/container-interaction)), or those of the placed object ([`UniqueInteractableData.loot_rules_override`](/advanced/world/world-data/unique-interactable-data)).

`run_loot_rules(trigger, receiver)` calls `LootDispatcher.run(holder, kind, rules, trigger, inventory, loot_rolled, receiver, hub)`:

- For each rule of the trigger: a rule on **Initialize** or **First Access** that is already in `loot_rolled` (by its index in the list) is skipped; the rule is rolled (`roll_rule`: its table → `LootLevel.resolve([table.level_source, rule.level_source], …)` → `table.roll_drops`) and **delivered** (`deliver`: an item that `needs_generation()` goes through [`ItemGenerator.make_instances`](/advanced/items/generation-runtime/item-generator) at the item level of its drop, any other item through [`InstanceUtility.add_item_to_inventory`](/advanced/managers/utilities/instance-utility); currency through `add_currency`); then the index is added to `loot_rolled`.
- `loot_rolled` is saved with the holder (`"loot_rolled"` in the entity and object save data, restored as integers after JSON).

### The triggers

| Trigger | Called from |
|---|---|
| `ON_INITIALIZE` | `Entity.initialize_entity`, after the NPC's level is set (so *Holder level* is known); `InteractableObject.initialize_interactable`, after the interactions are set up |
| `ON_DEATH` | `Entity.entity_death` (with the killer, `last_damage_source`, as receiver) |
| `ON_DESTROYED` | `InteractableObject.handle_destruction` |
| `ON_FIRST_ACCESS` | `ContainerInteraction._attempt_open_container` (opener as receiver), [`LootInteraction.start_interaction`](/advanced/entities/interactions/loot-interaction) (the body is looted), [`AccessEntityInventoryEffect`](/advanced/abilities-and-effects/effects-utility/access-entity-inventory-effect) (the pickpocket rolls the target's rules before it looks whether the inventory is empty) |

An NPC with an unrolled first-access rule gets its `LootInteraction` when it dies even if its inventory is empty (`Entity.has_pending_loot`).

### Remains of a destroyed object

`InteractableObject.has_lootable_remains()` is true while the object is destroyed (or being destroyed) and its inventory holds something or a first-access rule has not rolled. Then:

- `process_interaction` still works on a dead object that has remains, and `handle_destruction` clears the lock.
- A `ContainerInteraction` that is destroyed with remains stays in its closed state (`on_object_destroyed`), listens to its inventory (`_on_remains_updated`) and becomes `DESTROYED` for good when it is empty. After a load `refresh_after_load` does the same.
- An object with **no** container gets one made for it (`_make_remains_interaction`) when it is destroyed with loot, and again after a load of a destroyed object with a non-empty inventory.

## The level, in order

`LootLevel.resolve(sources, holder_kind, holder, receiver, hub)`:

1. The first of `sources` (table, then rule) whose source is not *Inherit* is the **chosen** one; its offset and limits shape the result. With none chosen, the default for the holder kind ([`GameplayConfig.default_npc_loot_level`](/advanced/game-settings/config/gameplay-config) / `default_object_loot_level`; a reward uses *Receiver*) is the source, and the first source in the list supplies the offset and limits.
2. *Fixed*: its level. *Holder*: `holder.current_level`, falling back to the party. *Receiver*: its `current_level`, falling back to the party. *Party*: [`NpcLevels.reference_level(party_manager)`](/advanced/entities/runtime/npc-levels). *World*: [`WorldData.item_level`](/advanced/world/world-data/world-data) of the current world, falling back to the party. The party falls back to `GameplayConfig.fallback_item_level`.
3. The offset is added; the lowest and highest level are applied; the result is at least 1.

## Extending

- A new **trigger**: add it to `LootRule.Trigger`, call `holder.run_loot_rules(trigger, receiver)` where it happens, and add it to the choices of [`LootRulesFields`](/advanced/editor/items/loot-rules-fields). Triggers other than Initialize and First Access roll every time they are called.
- A new **holder**: keep a `loot_rolled` array (saved), a `get_loot_rules()`, and call `LootDispatcher.run` with an inventory and a `LootLevel.HolderKind`.
- A new **entry kind**: add it to `LootEntry.EntryType` and handle it in `LootTable._drop_entry`.

## Pitfalls

- Rules are numbered by their place in the list. Removing a rule renumbers the ones after it: a saved holder that remembers rule 2 as rolled now remembers a different rule.
- [`ItemInstance`](/advanced/items/runtime/item-instance)s need a [system hub](/advanced/managers/game-host/game-host) (`InstanceUtility.system_hub`) to start effects; in the editor preview the roll is a plain `Dictionary` (`ItemGenerator.roll`, `describe_roll`).
- The older `generate_loot(looter)` returns item ids and quantities at item level 1 and ignores currency and level bands: use `roll_drops`.
