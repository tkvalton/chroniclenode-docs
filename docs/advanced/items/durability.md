# Durability: how it is built

This page is for developers. For the settings and how to use them, see [Durability](/basic/items/durability).

Durability is a small static class, a few fields on the slots, and hooks in three places. Nothing exists when *Durability mode* is **Off**: no key is written on any item.

## The pieces

| Piece | What it does |
|---|---|
| [`Durability`](/advanced/managers/utilities/durability) | Static helpers: `is_enabled`, `max_of`, `current_of`, `percent_of`, `has_durability`, `is_broken`, `initialize`, `wear_from_hit`, `lose`, `lose_on_death`, `repair`, `repair_cost`, `damaged_pieces` |
| [`EquipmentSlotDefinition`](/advanced/equipment-definitions/definitions/equipment-slot-definition) | `max_durability`, `durability_loss_multiplier`, `durability_wears_on`; `wears_on_damage_dealt()` and `wears_on_damage_taken()` read them |
| [`ItemDefinitionEquipment`](/advanced/items/item-definitions/item-definition-equipment) | `durability_override` (0 = the slot, -1 = never wears, N = its own) |
| [`EquipmentInventoryComponent`](/advanced/items/runtime/equipment-inventory-component) | Gives the durability when an item is worn, breaks and repairs worn pieces (`break_item`, `repair_broken_item`), and emits `item_broken` |
| [`CombatManager`](/advanced/entity-stats/combat/combat-manager) | `_announce_damage` calls `Durability.wear_from_hit(result)` for every resolved hit |
| [`Player`](/advanced/entities/runtime/player) | `entity_death` calls `_lose_items_on_death`, `_lose_currency_on_death` and `Durability.lose_on_death` |
| [`VendorInventoryComponent`](/advanced/items/runtime/vendor-inventory-component) | `get_repair_cost`, `get_repair_cost_all`, `repair_equipment(player, item)` |
| [`VendorPanelUI`](/advanced/user-interface/interaction-panels/vendor-panel-ui) | The *Repair all* button (the node `%RepairAllButton`, made in code when the scene has none) |
| [`RepairEquipmentAction`](/advanced/events-and-quests/actions-player/repair-equipment-action) | The event action |

## Where the numbers live

An item **instance** keeps its durability in `runtime_data`, which is saved with it and read by the tooltip:

| Key | Meaning |
|---|---|
| `max_durability` | The maximum, set once by `Durability.initialize` the first time the item is worn (`Durability.max_for`: the item's own, else the slot's) |
| `durability` | The current value |
| `broken` | `true` while the item is broken |

An item that has no `max_durability` key has no durability: it never wears.

## A hit

`Durability.wear_from_hit(result)` runs for every hit that `CombatManager` announces and that is `is_hit()` (an avoided, immune or redirected hit is not), is the first of its chain (`chain_depth == 0`) and, for the attacker, dealt damage (`done > 0`), for the target took it (`taken > 0`). Only a `Player` wears. For each worn piece: it must have durability and not be broken, its slot must wear on that side (`wears_on_damage_dealt()` for the attacker, `wears_on_damage_taken()` for the target), a roll against *Durability loss chance* must pass, and then `lose(item, per_hit * slot multiplier)` runs. With *one piece per hit* the taking side picks one random candidate first.

## Breaking

`lose` lowers `durability`; at 0 it calls `EquipmentInventoryComponent.break_item(item)`, which:

1. calls `_remove_item_effects` (the stat bonuses, visuals, equipment effects and gem effects come off),
2. sets `broken`, emits `item_broken` and `item_properties_changed`,
3. does what *Broken behavior* says: nothing, `unequip_slot` and into the bag (only when the bag has room), or `unequip_slot` and let go.

`_apply_item_effects` and `_remove_item_effects` **return at once for a broken item**: that is what keeps a broken piece from giving effects when it is worn again and from taking its bonuses off a second time when it is taken off. `repair` clears `broken` and calls `_apply_item_effects` again (`repair_broken_item`). Set bonuses and armor class bonuses count what is worn, so a broken piece still counts for them.

## The money of a death

[`GameplayConfig.death_currency_losses`](/advanced/game-settings/config/gameplay-config) is an array of [`DeathCurrencyLoss`](/advanced/game-settings/config/death-currency-loss) resources: `currency_id` (0 = every currency in the database), `mode` (`PERCENT`, `LOSE_AMOUNT`, `SET_TO`), `amount`, `drop_on_ground`. `lost_from(held)` gives how much a held amount loses; `Player._lose_currency_on_death` applies the rules in order to the purse of the character that speaks for the bag, and a rule with `drop_on_ground` makes [`DroppedItem.drop_currency`](/advanced/items/runtime/dropped-item) piles.

## Tests

`tests/durability_audit.gd` (the slots, getting durability, wear, breaking and repairing, saving, the vendor, the action, the death, the money rules) and `tests/durability_editor_check.gd` (the slot, item and vendor editors, the Gameplay Config, the money editor).

## See also

- [Durability](/basic/items/durability) (the chapter for designers)
- [Dropped items: how they are built](/advanced/items/dropped-items), [Inventories: how they are built](/advanced/items/inventories)
