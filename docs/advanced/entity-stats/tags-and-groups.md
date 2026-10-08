# Tags & Groups: how they are built

The [Tags & Groups chapter](/basic/tags-and-groups/) lists the labels. In code each is a `DatabaseResource` with an id, saved in its own folder under `res://src/data/stats/`. Other resources hold the **id** (an `int`), never the resource.

| Label | Class | Folder | Referenced as |
|---|---|---|---|
| Damage type | [`DamageTypeDefinition`](/advanced/entity-stats/definitions/damage-type-definition) | `damage_types/` | `int` id: `damage_type`, `absorbs_damage_types: Array[int]` |
| School type | [`SchoolTypeDefinition`](/advanced/entity-stats/definitions/school-type-definition) | `school_types/` | `int` id: `effect_school`, `ability_schools: Array[int]` |
| Trigger tag | [`TriggerTagDefinition`](/advanced/entity-stats/triggers/trigger-tag-definition) | `trigger_tags/` | The resource itself in a stat effect or rule; the word (`get_tag()`) in contexts and procs |
| Entity tag | [`EntityTagDefinition`](/advanced/entity-stats/definitions/entity-tag-definition) | `entity_tags/` | `Array[int]` on an entity definition |
| Immunity | [`ImmunityDefinition`](/advanced/entity-stats/definitions/immunity-definition) | `immunities/` | `int` id: `permanent_immunities`, `ImmunityEffect.immunity_affected` |
| Stat group | [`StatGroupDefinition`](/advanced/entity-stats/definitions/stat-group-definition) | `stat_groups/` | `Array[int]` on a stat |
| Status effect | [`StatusEffectDefinition`](/advanced/entity-stats/definitions/status-effect-definition) | `status_effects/` | `int` id |
| Group | [`GroupDefinition`](/advanced/shared-systems/groups) | `groups/` | `Array[int]` on effects, abilities and items |

## Damage and school types

Both are bare labels: a name, a description, a color, an icon. They have no behavior of their own. Everything that matters is in the code that compares the id: a stat effect with `affects_damage_type`, a pool with `absorbs_damage_types`, an `ImmunityComponent` with its protected targets.

## Trigger tags

A [`TriggerTagDefinition`](/advanced/entity-stats/triggers/trigger-tag-definition) is the *definition* of what a tag is, so the engine knows no particular stat:

| Group | Fields |
|---|---|
| Tag | `tag` (the word; empty = the display name in lower case), `kind` (`NONE`, `AVOID`, `MITIGATE`, `BOOST`) |
| Magnitude | `base_magnitude` |
| Applies to the hit | `application` (`NONE`, `PERCENT_INCREASE`, `PERCENT_DECREASE`, `ADD`, `MINUS`), `application_priority` (default 25) |
| Presentation | `animation`, `message`, `log_phrase` |
| Forcing | `calculations` |

A stat rolls the tag with a `CalculationTriggerStatEffect`. A [`TriggerRule`](/advanced/entity-stats/triggers/trigger-rule) (on an effect that causes a hit, or from a `TriggerRuleStatEffect` on a stat) can change the chance, add to or multiply the magnitude, or force the tag **always** or **never**. "Never" beats "always". The rules of a phase are collected into a [`TriggerRuleSet`](/advanced/entity-stats/triggers/trigger-rule-set).

When a tag fires, the phase creates a [`TriggerRecord`](/advanced/entity-stats/triggers/trigger-record) (the stat that rolled it, the tag, kind, animation, message, log phrase, magnitude, application) and publishes it in the context: `context[tag] = true` and `context["magnitude:" + tag] = magnitude`. A modifier with `required_trigger_tag` reads it. A tag with an `application` also changes the number by itself, at its `application_priority` among the modifiers.

Forcing: an `ALWAYS` rule fires a tag no stat rolled. `fires_in(calculation)` says where: `calculations` when set, otherwise by kind (avoid and mitigate in damage taken, boost and none in damage done and healing done). Only damage-taken phases of a hit that `can_be_avoided` honor an avoid.

## Entity tags

`Entity.has_entity_tag(id)`, `add_entity_tag(id)` and `remove_entity_tag(id)` keep the tags of one entity; they start from `EntityDefinition.entity_tags`. Nothing but scripts changes them while the game runs. The reader is [`EntityHasTagCondition`](/advanced/shared-systems/conditions) (`tag_ids`, `require_all`, `invert`).

## Immunities

An [`ImmunityDefinition`](/advanced/entity-stats/definitions/immunity-definition) has an `immunity_type` (`DAMAGE_TYPE`, `STATUS_EFFECT` or `SCHOOL_TYPE`), `protected_targets` and `exclusions` (ids). `validate()` reports a missing name, no targets and an id that is in both lists.

At runtime the [`ImmunityComponent`](/advanced/entity-stats/runtime/immunity-component) holds the **active** immunities, one [`ImmunityInstance`](/advanced/entity-stats/runtime/immunity-instance) each with a pooled timer. `StatsComponent.activate_immunity(id, duration)` switches one on (a duration of 0 or less is 10 seconds) and `deactivate_immunity(id)` removes it. `permanent_immunities` of the `StatsData` are activated for 24 hours when the entity spawns. Timed immunities are saved with their remaining time.

| Type | Checked by |
|---|---|
| Damage type | `check_damage_immunity` in `StatsComponent.take_damage`, before the defender's phase. Outcome `IMMUNE` |
| Status effect | `check_status_effect_immunity` in `apply_status_effect` |
| School type | `check_school_immunity`, through `StatsComponent.can_apply_school_effect`, in `EffectInstance.start_effect` for an effect whose `effect_school` is set, that applies to the target, from another originator. The instance is rejected with a reason |

## Status effect definitions and diminishing returns

[`StatusEffectDefinition`](/advanced/entity-stats/definitions/status-effect-definition) decides how repeated control behaves. The [`ApplicationTracker`](/advanced/entity-stats/runtime/application-tracker) counts applications inside a reset window; the effective duration shrinks by `diminishing_return_percentage` per repeat, and after `immunity_threshold` applications an immunity can start. The game effect itself (stun, root) is in the [effects system](/advanced/abilities-and-effects/); the stat system keeps only the diminishing returns.

## Stat groups

[`StatGroupDefinition`](/advanced/entity-stats/definitions/stat-group-definition) has `sort_order` and `hide_from_sheet`. The ids 1000001 to 1000007 are the seven built-in groups (`ID_CORE` to `ID_HIDDEN`), created when a project has none. Old `display_category` numbers map to groups through `LEGACY_CATEGORY_GROUPS`. [`StatGroupUtility.layout(stats)`](/advanced/entity-stats/stats-and-pools/stat-group-utility) returns the sections of the character sheet and tooltips: a stat in several groups is listed once, under the first of its visible groups.

A `StatModifierEffect` or `SetStatActiveStateEffect` names a group instead of one stat: the effect then applies to every stat of the group that the target has.

## Groups

Groups are a [shared system](/advanced/shared-systems/groups); they are not stat groups.
