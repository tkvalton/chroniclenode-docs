# Abilities & Effects: how it is built

The [Abilities & Effects chapter](/basic/abilities-and-effects/) explains the editors. This page is the map of the code: the classes, who owns them, what happens when a player presses a button, and where to plug in your own. If **definition** and **instance** are new words, read [Definitions and instances](/advanced/definitions-and-instances) first, and [Pooling](/advanced/pooling) for how the short-lived objects here are reused.

## The two halves

An **ability** is something an entity *does*: it has a user, a target, a cost, a cooldown and a way of being used. An **effect** is something that *happens*: damage, a buff, a push, a summon. An ability is mostly a list of effects with rules around them.

```text
AbilityDefinition ──► AbilityInstance (on one entity, in its AbilityComponent)
   │  targeting strategy ──► TargetStrategyInstance
   │  use strategy ───────► UseStrategyInstance
   └─ on_use_effects [ids] ─► Effect ──► EffectInstance (in the target's EffectsComponent,
                                                         or in the world for areas and projectiles)
                                          ├─ DamageEffect ─► CombatManager ─► the damage pipeline
                                          ├─ CompositeEffect ─► child EffectInstances (share a CastRecord)
                                          └─ ProjectileEffect ─► a projectile ─► an EffectInstance on arrival
```

| Layer | Definition (a resource) | Instance (runtime) | Owner |
|---|---|---|---|
| Ability | [`AbilityDefinition`](/advanced/abilities-and-effects/abilities/ability-definition), [`PassiveAbilityDefinition`](/advanced/abilities-and-effects/abilities/passive-ability-definition), [`ActiveAbilityDefinition`](/advanced/abilities-and-effects/abilities/active-ability-definition) and the charge, combo and power-up kinds | [`AbilityInstance`](/advanced/abilities-and-effects/runtime/ability-instance) | [`AbilityComponent`](/advanced/abilities-and-effects/runtime/ability-component) of the entity |
| Targeting | `TargetStrategyDefinition` and its types | [`TargetStrategyInstance`](/advanced/abilities-and-effects/runtime/target-strategy-instance) | The ability instance |
| Use | `UseStrategyDefinition`: instant, cast, channel, toggle | [`UseStrategyInstance`](/advanced/abilities-and-effects/runtime/use-strategy-instance) | The ability instance |
| Effect | [`Effect`](/advanced/abilities-and-effects/effects-base/effect) and its 80-odd types | [`EffectInstance`](/advanced/abilities-and-effects/runtime/effect-instance), made by the [`EffectInstancePool`](/advanced/abilities-and-effects/runtime/effect-instance-pool) | [`EffectsComponent`](/advanced/abilities-and-effects/runtime/effects-component) of the target, or the `CombatManager` for world effects |

## What happens when an ability is used

1. `AbilityComponent.attempt_use_ability_instance` calls `AbilityInstance.use_ability(target, from_action)`.
2. `can_use` refuses an inactive ability, one on cooldown, a dead or incapacitated or silenced user, one the user cannot pay for, a missing ammo, and anything the definition's `validate_ability_usage` refuses (the global cooldown, the requirements; charge abilities add "no charges").
3. The **targeting strategy** validates the target. A failed validation tries the auto-target (not for "out of range").
4. The **cost is paid**, then the **use strategy** runs: *instant* completes at once, *cast* waits the cast time (and can be interrupted), *channel* ticks, *toggle* switches.
5. On completion the effects of `on_use_effects` are started on the targets, after the optional `on_use_effects_delay`, and `handle_completion` runs: cooldown, resource gain, state, the `ability_used` signal.
6. The component starts the global cooldown if the ability is on it.

Passive abilities apply their `passive_effects` when their requirements become true, and remove them when they stop being true.

Costs, cooldowns, gains, cast time and range can be changed by stats: the five `STAT_MODIFIED_PROPERTIES` of `AbilityInstance` are asked through `StatsComponent.get_ability_modifier_entries`, and the strategy instances apply them.

## What happens when an effect runs

`EffectInstance.start_effect()`:

1. `process_before_start`, then the **checks that can reject it**: school immunity of the target and the [hit roll](/advanced/entity-stats/pipeline#the-hit-roll) of the ability. A rejected instance cleans up and says why (`rejection_reason`).
2. The **stacking lookup**, per originator or global, in the entity's component (or the world list for point, area and projectile effects). A hit on an existing instance adds a stack (up to `max_stacks`), optionally refreshes the duration and runs `on_stack_reapply`, and the new instance is thrown away.
3. Otherwise by the **time strategy**: *immediate* effects apply and finish at once and are never registered; *persistent* effects apply and wait; *temporary* ones also start a duration timer; the *ticking* ones add a tick timer (the first application is the first tick).
4. `specific_effect_logic(instance)` is what the effect type does. It registers with the component or the world.
5. It ends through `on_apply_finished` (the duration ran out) or `_on_apply_cancelled` (a dispel, death, the owner gone), then `cleanup()` empties it.

`is_one_off_application()` marks effects whose application is not repeated when a save is loaded (a heal, a reward); an effect that keeps state (a stat modifier, a shield, a status) is applied again so its state is rebuilt.

**Composite effects** hold child effect ids; their children share one [`CastRecord`](/advanced/abilities-and-effects/runtime/cast-record), the per-use memory that lets a heal be "half the damage the strike dealt" and makes the hit roll happen once for the whole use. The type of an effect decides its **category** in the editor by the folder of its script.

## Where each group lives

| Group | Folder of the addon | Page |
|---|---|---|
| Abilities and strategies | `data_classes/abilities/` | The class groups on the left |
| Effect base classes | `data_classes/effects/` | `Effect`, `CombatResultEffect` (damage and healing), `CollisionEffect`, `ProcEffect`, `ScalingEffect` ... |
| Effect types | `data_classes/effects/<category>/` | One group each: ability, area, amount, composite, conditional, damage and healing, item, movement, pets and summons, procs, projectiles and shots, stats, status and control, utility |
| Runtime | `runtime_classes/entity/abilities/`, `.../components/ability_component.gd`, `effects_component.gd` | The *Runtime* group |
| Combat | `runtime_classes/combat/` | See [Entity Stats: the pipeline](/advanced/entity-stats/pipeline) |
| Skill trees | `data_classes/skill_tree/`, `runtime_classes/player/skill_tree/` | [Skill trees](/advanced/abilities-and-effects/skill-trees) |

## Chapters of this section

| Page | What it covers |
|---|---|
| [The effect amount](/advanced/abilities-and-effects/effect-amount) | `EffectAmount`, `AmountSource` and the `CastRecord` |
| [Immunities](/advanced/abilities-and-effects/immunities) | Immunities and the status effect definitions |
| [Skill trees](/advanced/abilities-and-effects/skill-trees) | `SkillTree` and `SkillTreeInstance` |
| [Definitions and instances](/advanced/definitions-and-instances) | The idea behind the Definition / Instance classes |
| [Pooling](/advanced/pooling) | How effects, projectiles, VFX, timers and sounds are reused |
| [Entity Stats: the hit and heal pipeline](/advanced/entity-stats/pipeline) | What a damage or heal effect does after it starts |

## Extending

| You want | Do |
|---|---|
| **A new effect type** | A script that `extends Effect` (or `CombatResultEffect`, `ScalingEffect`, `CollisionEffect` for the matching families). Override `specific_effect_logic(instance)`, and `on_apply_finished` / `_on_apply_cancelled` if it must undo something. Put it in the folder of its category in `data_classes/effects/`; the effect editor finds it by scanning that folder, and its `@export` variables become its fields |
| **Fields with a picker** | Name an integer `ability_id`, `effect_id`, `item_id`, `stat_id`, `proficiency_id` ... : `PropertySelectorRegistry` maps the name to a database, and the editor shows a picker. Lists of ids named `ability_ids`, `effect_ids` and so on get the checklist |
| **A new use strategy or target strategy** | Extend `UseStrategyDefinition` / `TargetStrategyDefinition`; the instance class holds the runtime state |
| **A new ability kind** | Extend `ActiveAbilityDefinition` (see the charge, combo and power-up kinds) and add a matching `AbilityInstance` branch if it needs state |
| **Something to happen when an effect runs, without an effect type** | A [proc](/basic/abilities-and-effects/effect-types) effect on the entity, or connect to the signals of the entity (`effect_gained`, `entity_ability_cast`, ...) |

Keep a new effect **free of state in its own fields**: it is a definition shared by every use. State belongs in `effect_instance.custom_effect_data` (which is saved, without objects) or in a field you declare on the instance.

## The amount of an effect

The number of a damage, heal or stat modifier effect is an `EffectAmount`, and the effects of one cast share a `CastRecord` so one effect can react to what another did. See [The effect amount: how it is built](/advanced/abilities-and-effects/effect-amount).
