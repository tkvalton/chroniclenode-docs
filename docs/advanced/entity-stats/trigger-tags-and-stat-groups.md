# Trigger tags and stat groups: how they are built

The [Trigger Tags](/basic/entity-stats/trigger-tags) and [Stat Groups](/basic/entity-stats/stat-groups) tabs of Entity Stats. In code each is a [`DatabaseResource`](/advanced/data-and-database/database-classes/database-resource) with an id, saved under `res://src/data/stats/` (`trigger_tags/`, `stat_groups/`). The other labels of the game are in [Types & Groups: how they are built](/advanced/types-and-groups/) and [Immunities: how they are built](/advanced/abilities-and-effects/immunities).

| Label | Class | Folder | Referenced as |
|---|---|---|---|
| Trigger tag | [`TriggerTagDefinition`](/advanced/entity-stats/triggers/trigger-tag-definition) | `trigger_tags/` | The resource itself in a stat effect or rule; the word (`get_tag()`) in contexts and procs |
| Stat group | [`StatGroupDefinition`](/advanced/entity-stats/definitions/stat-group-definition) | `stat_groups/` | `Array[int]` on a stat |

## Trigger tags

A [`TriggerTagDefinition`](/advanced/entity-stats/triggers/trigger-tag-definition) is the *definition* of what a tag is, so the engine knows no particular stat:

| Group | Fields |
|---|---|
| Tag | `tag` (the word; empty = the display name in lower case), `kind` (`NONE`, `AVOID`, `MITIGATE`, `BOOST`) |
| Magnitude | `base_magnitude` |
| Applies to the hit | `application` (`NONE`, `PERCENT_INCREASE`, `PERCENT_DECREASE`, `ADD`, `MINUS`), `application_priority` (default 25) |
| Presentation | `animation`, `message`, `log_phrase` |
| Forcing | `calculations` |

A stat rolls the tag with a [`CalculationTriggerStatEffect`](/advanced/entity-stats/stat-effects/calculation-trigger-stat-effect). A [`TriggerRule`](/advanced/entity-stats/triggers/trigger-rule) (on an effect that causes a hit, or from a [`TriggerRuleStatEffect`](/advanced/entity-stats/stat-effects/trigger-rule-stat-effect) on a stat) can change the chance, add to or multiply the magnitude, or force the tag **always** or **never**. "Never" beats "always". The rules of a phase are collected into a [`TriggerRuleSet`](/advanced/entity-stats/triggers/trigger-rule-set).

When a tag fires, the phase creates a [`TriggerRecord`](/advanced/entity-stats/triggers/trigger-record) (the stat that rolled it, the tag, kind, animation, message, log phrase, magnitude, application) and publishes it in the context: `context[tag] = true` and `context["magnitude:" + tag] = magnitude`. A modifier with `required_trigger_tag` reads it. A tag with an `application` also changes the number by itself, at its `application_priority` among the modifiers.

Forcing: an `ALWAYS` rule fires a tag no stat rolled. `fires_in(calculation)` says where: `calculations` when set, otherwise by kind (avoid and mitigate in damage taken, boost and none in damage done and healing done). Only damage-taken phases of a hit that `can_be_avoided` honor an avoid.

## Stat groups

[`StatGroupDefinition`](/advanced/entity-stats/definitions/stat-group-definition) has `sort_order` and `hide_from_sheet`. The ids 1000001 to 1000007 are the seven built-in groups (`ID_CORE` to `ID_HIDDEN`), created when a project has none. Old `display_category` numbers map to groups through `LEGACY_CATEGORY_GROUPS`. [`StatGroupUtility.layout(stats)`](/advanced/entity-stats/stats-and-pools/stat-group-utility) returns the sections of the character sheet and tooltips: a stat in several groups is listed once, under the first of its visible groups.

A [`StatModifierEffect`](/advanced/abilities-and-effects/effects-stats/stat-modifier-effect) or [`SetStatActiveStateEffect`](/advanced/abilities-and-effects/effects-stats/set-stat-active-state-effect) names a group instead of one stat: the effect then applies to every stat of the group that the target has.
