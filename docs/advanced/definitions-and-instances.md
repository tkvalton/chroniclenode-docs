# Definitions and instances

One idea runs through the whole toolkit, and everything in the Advanced section assumes you know it: **a definition says what a thing is; an instance is one of them, alive in the game.**

| | Definition | Instance |
|---|---|---|
| **What it is** | A Godot `Resource`, saved as a `.tres` file in `res://src/data/` | A plain object (almost always a `RefCounted`) made while the game runs |
| **Made by** | You, in the editors | The game, from a definition |
| **Changes while playing?** | **Never** | All the time |
| **How many** | One for each thing in the database. Every entity that uses it shares it | One for each thing that exists: each fireball in the air, each potion in a bag, each character's copy of a skill tree |
| **Has an id** | Yes, in the [database](/advanced/data-and-database/) | No. It points to its definition |
| **Saved** | In its own file, with the project | In the save file, as the part that changed: a stack count, a time left, a rank |
| **Name** | `Thing`, `ThingDefinition` | `ThingInstance` |

## Why

Take a *Fireball*. The designer decides its damage, its range, its cooldown and its effect once. A hundred NPCs can cast it, and ten of them can have it on cooldown right now with different times left. If the cooldown lived on the fireball resource, one NPC casting it would put all hundred on cooldown.

So the resource keeps only what is **the same for everybody**, and the object that is made for each caster keeps **what is different for this one**:

```text
AbilityDefinition "Fireball"      (one, in res://src/data/abilities/)
  damage, range, cooldown 8 s, school Fire, effects [Burn]
      ▲                ▲                 ▲
      │                │                 │
AbilityInstance   AbilityInstance   AbilityInstance
 of the Mage       of NPC Pyro #1     of NPC Pyro #2
 cooldown 3.2 s    ready              cooldown 7.9 s
 charges 2         ...                ...
```

This gives three things:

1. **Saves are small and safe.** A save stores "ability 4821, cooldown 3.2 s", never a copy of the ability. Change the damage of the Fireball in an update and old saves use the new damage.
2. **Definitions can be shared and cached.** The database loads every definition once.
3. **Instances can be pooled and thrown away.** An instance is cheap to make and holds no data that is not state, so the toolkit can reuse them (see [Pooling](/advanced/pooling)).

## The pairs

| Definition | Instance | Made by | Holds |
|---|---|---|---|
| [`AbilityDefinition`](/advanced/abilities-and-effects/abilities/ability-definition) and its kinds | [`AbilityInstance`](/advanced/abilities-and-effects/runtime/ability-instance) | [`InstanceUtility.create_ability_instance(definition, user)`](/advanced/managers/utilities/instance-utility) | The user, the cooldown timer, charges, combo step, passive effects, runtime overrides |
| [`UseStrategyDefinition`](/advanced/abilities-and-effects/use-strategies/use-strategy-definition), [`TargetStrategyDefinition`](/advanced/abilities-and-effects/target-strategies/target-strategy-definition) | [`UseStrategyInstance`](/advanced/abilities-and-effects/runtime/use-strategy-instance), [`TargetStrategyInstance`](/advanced/abilities-and-effects/runtime/target-strategy-instance) | The ability instance | Timers, toggle state, the stat-modified range and cast time |
| [`Effect`](/advanced/abilities-and-effects/effects-base/effect) and its types | [`EffectInstance`](/advanced/abilities-and-effects/runtime/effect-instance) | [`EffectInstancePool.get_effect_instance(effect, originator, target)`](/advanced/abilities-and-effects/runtime/effect-instance-pool) | The originator, the target, the timers, the stack count, the cast record, the hit outcome |
| [`ItemDefinition`](/advanced/items/item-definitions/item-definition) and its kinds | [`ItemInstance`](/advanced/items/runtime/item-instance) | `InstanceUtility.create_item_instance(id)` | The stack, the charges, the cooldown, sockets and gems, enchantments |
| [`StatDefinition`](/advanced/entity-stats/stats-and-pools/stat-definition) | [`StatInstance`](/advanced/entity-stats/runtime/stat-instance) | The stats component | The base value, the bonuses, the multiplier |
| [`PoolDefinition`](/advanced/entity-stats/stats-and-pools/pool-definition) | [`PoolInstance`](/advanced/entity-stats/runtime/pool-instance) | The stats component | The current value, the maximum, the regeneration |
| [`ImmunityDefinition`](/advanced/entity-stats/definitions/immunity-definition) | [`ImmunityInstance`](/advanced/entity-stats/runtime/immunity-instance) | The immunity component | The timer |
| [`SkillTree`](/advanced/abilities-and-effects/skill-trees/skill-tree), [`SkillPointPool`](/advanced/abilities-and-effects/skill-trees/skill-point-pool) | [`SkillTreeInstance`](/advanced/abilities-and-effects/skill-trees/skill-tree-instance), [`SkillPointPoolInstance`](/advanced/abilities-and-effects/skill-trees/skill-point-pool-instance) | The player | The ranks, the points earned and spent |
| [`CraftSchoolDefinition`](/advanced/items/crafting/craft-school-definition) | [`CraftSchoolInstance`](/advanced/items/crafting/craft-school-instance) | The crafting manager | The skill, the learned recipes, the queue of jobs |
| [`Conversation`](/advanced/behaviors/conversations/conversation) | [`ConversationInstance`](/advanced/behaviors/conversations/conversation-instance) | The conversation interaction | The active chat, the state of the responses |
| [`ProficiencyDefinition`](/advanced/entity-stats/definitions/proficiency-definition) | (the [`ProficiencyTracker`](/advanced/entity-stats/runtime/proficiency-tracker)) | The player | The level and experience of every proficiency |
| [`NPCDefinition`](/advanced/entities/definitions/npc-definition), [`CharacterDefinition`](/advanced/entities/definitions/character-definition) | The [`NPC`](/advanced/entities/runtime/npc) or [`Player`](/advanced/entities/runtime/player) node | The world, the [party manager](/advanced/entities/runtime/party-manager) | Everything the entity is |

[`EquipmentSlotInstance`](/advanced/items/runtime/equipment-slot-instance) is the instance of an [`EquipmentSlotDefinition`](/advanced/equipment-definitions/definitions/equipment-slot-definition); the slots of a bag ([`InventorySlotInstance`](/advanced/items/runtime/inventory-slot-instance)) have no definition, they are just numbered.

## Rules to code by

- **Never change a definition at run time.** `ability.cooldown = 5` on the resource changes it for every entity and is not saved. Change the instance (`instance.runtime_overrides`) or add an [effect](/basic/abilities-and-effects/effects).
- **Ask the instance, not the definition,** for anything that can change: `item.get_max_stack_size()`, `ability.get_max_range()`. The instance answers with its own override or the modified value when there is one, and the definition's value when there is not.
- **Keep the id, not the resource,** when you store a reference in data. Resources hold `int` ids (`ability_id`, `loot_table`); [`Database.get_resource("ability", id)`](/advanced/data-and-database/database-classes/database) finds the definition. This also keeps files free of circular loading.
- **A definition may not know its instance,** but an instance always knows its definition (`instance.definition`).
- **Instances are created by the toolkit,** not with `.new()` in your code, wherever there is a factory (`InstanceUtility`, `EffectInstancePool`, the components). The factory sets the references (`system_hub`, `combat_manager`) that the instance needs.

## Where to find them

Every system's Advanced overview lists its classes in two groups, and the generated class pages carry the same rule in their first lines. The class names tell which is which.

## See also

- [Pooling](/advanced/pooling), [The database](/advanced/data-and-database/), [Abilities & Effects: how it is built](/advanced/abilities-and-effects/)
