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
| `AbilityDefinition` and its kinds | `AbilityInstance` | `InstanceUtility.create_ability_instance(definition, user)` | The user, the cooldown timer, charges, combo step, passive effects, runtime overrides |
| `UseStrategyDefinition`, `TargetStrategyDefinition` | `UseStrategyInstance`, `TargetStrategyInstance` | The ability instance | Timers, toggle state, the stat-modified range and cast time |
| `Effect` and its types | `EffectInstance` | `EffectInstancePool.get_effect_instance(effect, originator, target)` | The originator, the target, the timers, the stack count, the cast record, the hit outcome |
| `ItemDefinition` and its kinds | `ItemInstance` | `InstanceUtility.create_item_instance(id)` | The stack, the charges, the cooldown, sockets and gems, enchantments |
| `StatDefinition` | `StatInstance` | The stats component | The base value, the bonuses, the multiplier |
| `PoolDefinition` | `PoolInstance` | The stats component | The current value, the maximum, the regeneration |
| `ImmunityDefinition` | `ImmunityInstance` | The immunity component | The timer |
| `SkillTree`, `SkillPointPool` | `SkillTreeInstance`, `SkillPointPoolInstance` | The player | The ranks, the points earned and spent |
| `CraftSchoolDefinition` | `CraftSchoolInstance` | The crafting manager | The skill, the learned recipes, the queue of jobs |
| `Conversation` | `ConversationInstance` | The conversation interaction | The active chat, the state of the responses |
| `ProficiencyDefinition` | (the `ProficiencyTracker`) | The player | The level and experience of every proficiency |
| `NPCDefinition`, `CharacterDefinition` | The `NPC` or `Player` node | The world, the party manager | Everything the entity is |

`EquipmentSlotInstance` is the instance of an `EquipmentSlotDefinition`; the slots of a bag (`InventorySlotInstance`) have no definition, they are just numbered.

## Rules to code by

- **Never change a definition at run time.** `ability.cooldown = 5` on the resource changes it for every entity and is not saved. Change the instance (`instance.runtime_overrides`) or add an [effect](/basic/abilities-and-effects/effects).
- **Ask the instance, not the definition,** for anything that can change: `item.get_max_stack_size()`, `ability.get_max_range()`. The instance answers with its own override or the modified value when there is one, and the definition's value when there is not.
- **Keep the id, not the resource,** when you store a reference in data. Resources hold `int` ids (`ability_id`, `loot_table`); `Database.get_resource("ability", id)` finds the definition. This also keeps files free of circular loading.
- **A definition may not know its instance,** but an instance always knows its definition (`instance.definition`).
- **Instances are created by the toolkit,** not with `.new()` in your code, wherever there is a factory (`InstanceUtility`, `EffectInstancePool`, the components). The factory sets the references (`system_hub`, `combat_manager`) that the instance needs.

## Where to find them

Every system's Advanced overview lists its classes in two groups, and the generated class pages carry the same rule in their first lines. The class names tell which is which.

## See also

- [Pooling](/advanced/pooling), [The database](/advanced/data-and-database/), [Abilities & Effects: how it is built](/advanced/abilities-and-effects/)
