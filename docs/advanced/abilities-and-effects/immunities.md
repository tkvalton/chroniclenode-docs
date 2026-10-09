# Immunities: how they are built

The [Immunities](/basic/abilities-and-effects/immunities) editor and the status effect kinds of [Status Effects](/basic/abilities-and-effects/status-effects). In code an immunity is a [`DatabaseResource`](/advanced/data-and-database/database-classes/database-resource) saved in `res://src/data/stats/immunities/`, referenced by `int` id (`permanent_immunities`, [`ImmunityEffect.immunity_affected`](/advanced/abilities-and-effects/effects-status-and-control/immunity-effect)).

An [`ImmunityDefinition`](/advanced/entity-stats/definitions/immunity-definition) has an `immunity_type` (`DAMAGE_TYPE`, `STATUS_EFFECT` or `SCHOOL_TYPE`), `protected_targets` and `exclusions` (ids). `validate()` reports a missing name, no targets and an id that is in both lists.

At runtime the [`ImmunityComponent`](/advanced/entity-stats/runtime/immunity-component) holds the **active** immunities, one [`ImmunityInstance`](/advanced/entity-stats/runtime/immunity-instance) each with a pooled timer. [`StatsComponent.activate_immunity(id, duration)`](/advanced/entity-stats/runtime/stats-component) switches one on (a duration of 0 or less is 10 seconds) and `deactivate_immunity(id)` removes it. `permanent_immunities` of the [`StatsData`](/advanced/entity-stats/stats-and-pools/stats-data) are activated for 24 hours when the entity spawns. Timed immunities are saved with their remaining time.

| Type | Checked by |
|---|---|
| Damage type | `check_damage_immunity` in `StatsComponent.take_damage`, before the defender's phase. Outcome `IMMUNE` |
| Status effect | `check_status_effect_immunity` in `apply_status_effect` |
| School type | `check_school_immunity`, through `StatsComponent.can_apply_school_effect`, in [`EffectInstance.start_effect`](/advanced/abilities-and-effects/runtime/effect-instance) for an effect whose `effect_school` is set, that applies to the target, from another originator. The instance is rejected with a reason |

## Status effect definitions and diminishing returns

[`StatusEffectDefinition`](/advanced/entity-stats/definitions/status-effect-definition) decides how repeated control behaves. The [`ApplicationTracker`](/advanced/entity-stats/runtime/application-tracker) counts applications inside a reset window; the effective duration shrinks by `diminishing_return_percentage` per repeat, and after `immunity_threshold` applications an immunity can start. The game effect itself (stun, root) is in the [effects system](/advanced/abilities-and-effects/); the stat system keeps only the diminishing returns.
