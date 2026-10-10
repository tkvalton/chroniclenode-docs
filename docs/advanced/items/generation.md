# Generated items: how they are built

The [Generated Items](/basic/items/item-generation) chapter explains the options. This page explains the code: what rolls, in which order, what is stored on the item, where it is read, and how to extend it.

## The pieces

| Class | What it is |
|---|---|
| [`ItemBudget`](/advanced/items/item-definitions/item-budget) | Pure functions: the budget of an item, the scale factor of an item that scales, the weight of a slot, the cost of a stat, what the written part spends, and `allocate`, the split of a budget between bonuses |
| [`ItemGenerator`](/advanced/items/generation-runtime/item-generator) | `roll(definition, context)` gives the roll as a `Dictionary`; `generate` makes an [`ItemInstance`](/advanced/items/runtime/item-instance) with it; `make_instances` makes a quantity (one roll per stack); `compose_name` and `describe_roll` make text |
| [`Quality`](/advanced/equipment-definitions/definitions/quality), [`QualityRule`](/advanced/equipment-definitions/definitions/quality-rule) | What a quality rolls: drop weight, lowest level, budget multiplier, spread, affix counts, sockets, value, name mode, custom rules |
| [`Affix`](/advanced/items/affixes/affix), [`AffixStatGrant`](/advanced/items/affixes/affix-stat-grant), [`AffixEffectGrant`](/advanced/items/affixes/affix-effect-grant) | A bonus an item can roll. Database type `affix` (`res://src/data/items/affixes/`) |
| [`ItemDefinition`](/advanced/items/item-definitions/item-definition), [`ItemDefinitionEquipment`](/advanced/items/item-definitions/item-definition-equipment) | The flags: `randomize_quality`, `rollable_quality_ids`, `scales_with_item_level`, `randomize_stats`, `randomize_effects`, the affix pools, `budget_multiplier`, `equipment_effect_costs`. `needs_generation()` says whether the item is generated |
| `ItemInstance` | Keeps the roll: `get_generated()`, `get_item_level()`, `get_quality()`, `get_scale_factor()`, `get_display_name()` |
| [`GameplayConfig`](/advanced/game-settings/config/gameplay-config) | `item_budget_formula`, `get_item_budget(level)`, the default loot levels, the fallback level |

## What an item stores

An instance that was generated has a `generated` dictionary in `runtime_data`, and the rolled stats and effects are also where the equipment code already looked for per-instance changes:

```
runtime_data["generated"] = {
	"item_level": 30, "quality_id": 5154770, "scale_factor": 1.0 (only when it scales),
	"name_prefix": "Heavy", "name_suffix": "of the Monkey",
	"affixes": [ {"affix_id": 123, "grants": [{"kind": "stat", "id": <stat id>, "value": 860.0}]},
	             {"affix_id": 456, "grants": [{"kind": "effect", "id": <effect id>, "cost": 150.0}]} ],
	"extra_sockets": [socket ids]
}
runtime_data["stat_bonuses"]      = {stat id: points}      # read by get_effective_stat_bonuses
runtime_data["additional_effects"] = [effect ids]          # read by get_effective_equipment_effects
```

The roll is **stored, never recomputed**: loading a save restores the numbers. A JSON save turns the integer keys into text and the integers into decimals, so the instance converts them back when it loads (`from_save_data`), and `get_effective_*` casts effect ids with `int()`. The extra sockets are added to the instance before its socket states are restored (`_add_generated_sockets`). `can_stack_with` compares `get_generated()`: equal rolls stack.

An item that scales uses `get_effective_stat_bonuses` too: the written `stat_bonuses` are multiplied by the instance's `scale_factor`, and a weapon multiplies its damage and spread (not its speed).

## The roll, in order

`ItemGenerator.roll`:

1. **Level.** `context.item_level`, else the item's own (at least 1).
2. **Quality** (`_roll_quality`). A forced `quality_id` wins. An item that does not randomize its quality (or lists none) keeps its own. Otherwise the candidates are the listed qualities with a positive drop weight whose `min_item_level` is not above the level; those under the context's `min_quality_tier` are dropped (if none is left, all of them stay). They are sorted by tier and each weight is `drop_weight × (1 + magic_find / 100 × rank)` where `rank` is its index (0 for the lowest): magic find moves the roll up the tiers.
3. **Scale factor.** If the item scales: `ItemBudget.scale_factor(level, item_level)` = budget(level) ÷ budget(authored level), never below 1. Stored only when it is not 1.
4. **Equipment** (`_roll_equipment`):
   1. `budget = ItemBudget.total_budget(level, slot_weight, item_multiplier, quality_multiplier)`; `remaining = budget − ItemBudget.base_spent(item, factor)`. The written stats cost `|value| × factor × stat cost`; the written effects cost what `equipment_effect_costs` says.
   2. **Picks** (only with a quality, since a quality holds the counts). With `randomize_stats`: the stat affix pool (`_affix_pool`: all affixes, or the listed ones, that are stat affixes and `fits(item, level, tier)`), then `roll_count` prefixes, suffixes and silent affixes by weight (`_pick_from`: without repeats, never two of one exclusive group; the used groups are shared with the effect picks). With `randomize_effects`: the effect pool and `roll_count(effects_min, effects_max)` affixes of any placement.
   3. **Effects are paid first.** Each effect affix picks its grants (`Affix.pick_grants`); if the total cost is above `remaining` the affix is skipped; otherwise the cost is subtracted and the effect ids are added.
   4. **Stats share what is left.** Every picked stat grant becomes `{share, cost, cap}` and `ItemBudget.allocate(max(remaining, 0), entries, spread, rng)` gives the points (below). Each value is rounded for its stat (`_round_for_stat`: whole for an integer stat, the stat's decimals otherwise); a value that rounds to 0 is dropped; the same stat from two grants adds up.
   5. **Name.** The first prefix and the first suffix among the affixes that gave something (stat affixes in pick order, then effect affixes).
   6. **Sockets.** `roll_count(sockets_min, sockets_max)` picks from `socket_pool`.
5. **Quality rules.** Each `QualityRule.apply(data, definition, rng)` may change the data.

`generate` builds the instance with [`InstanceUtility`](/advanced/managers/utilities/instance-utility), `apply_roll` moves the stats and effects into `runtime_data`, and `apply_generated` stores the rest. An item with `needs_generation()` false and no forced quality or level is returned as a plain instance.

## The split of the budget

`ItemBudget.allocate(budget, grants, spread, rng)`:

1. Each grant gets a weight `share × max(1 + spread × (random × 2 − 1), 0.1)`.
2. The remaining budget is shared in proportion to the weights; the points of a grant are its slice divided by its `cost` (the stat's budget cost).
3. A grant over its `cap` is **held** at the cap; what it did not use is shared again among the grants that are not held. This repeats at most once per grant.
4. Without caps the spent budget (`Σ points × cost`) equals the budget exactly (before the rounding of each stat).

All of it is pure: pass a seeded `RandomNumberGenerator` and the same roll comes back. That is how the tests check it.

## Extending

### Custom quality rules

```gdscript
@tool
class_name SocketedLegendary extends QualityRule
func get_label() -> String:
	return "Always one socket"
func apply(generated: Dictionary, item_definition: ItemDefinition, rng: RandomNumberGenerator) -> void:
	generated["extra_sockets"] = (generated.get("extra_sockets", []) as Array) + [MY_SOCKET_ID]
```

Put the script in `res://src/quality_rules/` and the Quality editor offers it under **Add rule**. A rule changes the roll `Dictionary` (`stat_bonuses`, `effect_ids`, `name_prefix`, `name_suffix`, `extra_sockets`, `item_level`) and nothing else: keep it a pure function of its inputs. It runs after the affixes and before the item is made.

### The budget formula

A [formula](/advanced/shared-systems/formulas) of the item level. `GameplayConfig.get_item_budget(level)` reads it ([`FormulaPipeline.calculate`](/advanced/shared-systems/formula-support/formula-pipeline)) and is what `ItemBudget` calls; write your own [`CalculationFormula`](/advanced/shared-systems/formulas/calculation-formula) in `res://src/stat_formulas/` and pick it in the Gameplay Config.

### A new way to give items

Anything that gives items should call `ItemGenerator.make_instances(definition, quantity, item_level)` for an item that `needs_generation()`, and `InstanceUtility.add_item_to_inventory` otherwise (both are what the loot, the item reward, the vendor, the Create Item effect and the Add Items action do). Ask [`LootLevel`](/advanced/items/generation-runtime/loot-level) (`from_choice` for the short lists of the editors, `resolve` for the full order) where the item level comes from.

## Where it is read

| Place | What it reads |
|---|---|
| Tooltip (`tooltip_item.gd`) | `get_display_name`, `get_quality_*`, `get_item_level` ("Item Level N"), the rolled stats and effects, and the affix lines ("Heavy: +860 Strength") from `generated.affixes` |
| Inventory slot (`item_slot_ui.gd`) | `get_quality().color` of the instance |
| Vendor | `get_vendor_value`: value × the quality's value multiplier × the scale factor |
| Requirements | `ItemDefinition._requirement_context` gives `{"item_level"}` of the instance to [`RequirementChecker`](/advanced/shared-systems/requirements/requirement-checker); [`RequirementLevel`](/advanced/shared-systems/requirements/requirement-level) with `follow_item_level` reads it |
| Effects | [`AmountSource.Kind.SOURCE_ITEM_LEVEL`](/advanced/abilities-and-effects/effects-amount/amount-source): `effect_instance.effect_owner` is the `ItemInstance` for the effects of equipment, consumables and gems |

## Pitfalls

- The equipment code reads `runtime_data["stat_bonuses"]` with **integer** keys. Convert them after a JSON load.
- `Dictionary` keys that are resources (`record_of[affix]` in the roll) are fine inside one roll but must not be saved.
- A generated item whose `item_level` is missing from an old save falls back to the item level of its definition.
- The roll needs a quality for its counts. An item with `randomize_stats` and no quality rolls nothing: the editors warn about it.
