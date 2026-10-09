# Types & Groups: how they are built

The [Types & Groups chapter](/basic/types-and-groups/) lists the labels. In code each is a [`DatabaseResource`](/advanced/data-and-database/database-classes/database-resource) with an id. Other resources hold the **id** (an `int`), never the resource.

| Label | Class | Folder | Referenced as |
|---|---|---|---|
| Damage type | [`DamageTypeDefinition`](/advanced/entity-stats/definitions/damage-type-definition) | `stats/damage_types/` | `int` id: `damage_type`, `absorbs_damage_types: Array[int]` |
| School type | [`SchoolTypeDefinition`](/advanced/entity-stats/definitions/school-type-definition) | `stats/school_types/` | `int` id: `effect_school`, `ability_school`, `ability_schools: Array[int]` |
| Entity type | [`EntityTagDefinition`](/advanced/entity-stats/definitions/entity-tag-definition) | `entity_tags/` | `Array[int]` on an entity definition |
| Group | [`GroupDefinition`](/advanced/shared-systems/groups/group-definition) | `groups/` | `Array[int]` on effects, abilities and items |

The class of an entity type is still called `EntityTagDefinition` and its database type `entity_tag`: *Entity Type* is the name the editors and the documentation use.

## Damage and school types

Both are labels: a name, a description, a color, an icon. A school has no behavior of its own. Everything that matters is in the code that compares the id: a stat effect with `affects_damage_type`, a pool with `absorbs_damage_types`, an [`ImmunityComponent`](/advanced/entity-stats/runtime/immunity-component) with its protected targets.

### Who reads them

| Type | Read by |
|---|---|
| Damage type | [`DamageEffect.damage_type`](/advanced/abilities-and-effects/effects-damage-and-healing/damage-effect), the `affects_damage_type` of a stat effect, `absorbs_damage_types` of a pool, damage immunities, [`ProficiencyDefinition`](/advanced/entity-stats/definitions/proficiency-definition) (weapon damage type) |
| School type | [`AbilityDefinition.ability_school`](/advanced/abilities-and-effects/abilities/ability-definition) and [`Effect.effect_school`](/advanced/abilities-and-effects/effects-base/effect) (dispels and purges match the school of an effect), school immunities ([`StatsComponent.can_apply_school_effect`](/advanced/entity-stats/runtime/stats-component), asked in [`EffectInstance.start_effect`](/advanced/abilities-and-effects/runtime/effect-instance)), school locks after an interrupt, `ProficiencyDefinition.schools`, the *Only these schools* hit filter of stat effects |

### Effects applied by a damage type

[`DamageTypeDefinition`](/advanced/entity-stats/definitions/damage-type-definition) has `applied_effects` (Effect ids), `apply_chance` and `apply_on_periodic_hits`. [`CombatManager.apply_damage`](/advanced/entity-stats/combat/combat-manager) calls `apply_hit_effects(combat_manager, result)` on the type of a complete, successful result, just before the result is announced. The effects are started on the target with the attacker as originator, and the `effect_owner` and `source` of the hit that caused them. Nothing is applied for a hit that is not a landed hit (avoided, immune, redirected, negated), that did no damage after the target's phase, or that killed the target. A hit whose effect is one of the applied effects, or inside one (the child of a burn), is skipped, and so is a ticking effect unless `apply_on_periodic_hits` is on.

## Entity types

[`Entity.has_entity_tag(id)`](/advanced/entities/runtime/entity), `add_entity_tag(id)` and `remove_entity_tag(id)` keep the types of one entity; they start from [`EntityDefinition.entity_tags`](/advanced/entities/definitions/entity-definition). Nothing but scripts changes them while the game runs. The reader is [`EntityHasTagCondition`](/advanced/shared-systems/conditions) (`tag_ids`, `require_all`, `invert`).

## Groups

Groups are used by effects, abilities and items, so they are a [shared system](/advanced/shared-systems/groups): the resource, the four jobs a group does and the runtime rules are described there. They are not [stat groups](/advanced/entity-stats/trigger-tags-and-stat-groups), which are the sections of the character sheet.
