# The effect amount: how it is built

The [basic page](/basic/abilities-and-effects/effect-amount) is about using it. This page is about the classes.

## The classes

| Class | What it is |
|---|---|
| [`EffectAmount`](/advanced/abilities-and-effects/effects-amount/effect-amount) | A `Resource`: `base`, `variance` and `sources`. `evaluate(effect_instance, overrides)` returns the number |
| [`AmountSource`](/advanced/abilities-and-effects/effects-amount/amount-source) | A `Resource`: one part. A `kind`, a `stat_id`, an optional `formula` and `returns`, a `multiplier`, a `maximum`, a `source_effect_id` |
| [`CastRecord`](/advanced/abilities-and-effects/runtime/cast-record) | A `RefCounted`: what the effects of one cast did, per kind and per effect |
| [`ScalingEffect`](/advanced/abilities-and-effects/effects-base/scaling-effect) | The base of the effects that have an amount. It holds `amount` and offers `get_amount()`, `ensure_amount()` and `calculate_amount()` |

The effects that use it are [`DamageEffect`](/advanced/abilities-and-effects/effects-damage-and-healing/damage-effect), [`HealEffect`](/advanced/abilities-and-effects/effects-damage-and-healing/heal-effect) and [`StatModifierEffect`](/advanced/abilities-and-effects/effects-stats/stat-modifier-effect), which all extend `ScalingEffect`.

## Evaluating

```
value = base
for each part of kind STAT:       value += part.evaluate()
if variance > 0:                  value = randf_range(value - variance, value + variance)
for each other part:              value += part.evaluate()
```

The variance applies to the base and the stat parts, not to the shares of the weapon or of health. The effect then applies what is its own: the stack count, `get_scaling_multiplier` and the charge multiplier.

`AmountSource.evaluate(effect_instance, overrides)`:

| Kind | Value |
|---|---|
| `STAT` | The points of `stat_id` on the originator, times `multiplier`. With a `formula` (or `returns`) the points go through [`FormulaPipeline.calculate`](/advanced/shared-systems/formula-support/formula-pipeline) with a [`FormulaContext`](/advanced/shared-systems/formula-support/formula-context) that has the originator as attacker and the target as defender, then are multiplied by `multiplier` |
| `WEAPON_DAMAGE` | `originator.get_weapon_damage()` x `multiplier` |
| `TARGET_MAX_HEALTH`, `TARGET_HEALTH`, `USER_MAX_HEALTH` | `get_max_health()` or `get_current_health()` of the target or the originator, x `multiplier`. A heal limited to one pool passes `"target_max_health"` in `overrides` to use that pool's maximum |
| `CAST_DAMAGE`, `CAST_HEALING`, `CAST_ABSORBED` | The total from the cast record (all effects, or `source_effect_id`) x `multiplier` |

Every part is limited to `maximum` when that is above 0.

## The older fields

Damage and heal effects used to have `base_damage` (`base_healing`), `stat_id`, `stat_multiplier`, a variance, `weapon_damage_percentage` and `total_health_percentage`; the stat modifier had `base_value`. They are `@export_storage` now: saved and loaded, hidden in the editor. An effect with no `amount` builds one from them every time it is asked (`_legacy_amount()`, which uses `EffectAmount.from_legacy`), so changing the old field of an effect that was never opened in the editor still works. The editor calls `ensure_amount()` when it shows the Amount section; from then on the effect has its own amount, saved with it, and the old fields are ignored.

A new effect type with a number extends `ScalingEffect`, overrides `_legacy_amount()` (return `EffectAmount.new()` for a type with no older fields) and calls `calculate_amount(effect_instance)`. The editor shows the Amount section for every `ScalingEffect`.

## The cast record

[`EffectInstance`](/advanced/abilities-and-effects/runtime/effect-instance) has a `cast_record` and `get_cast_record()`, which makes one when none exists, and a `parent_instance` (held weakly, so a parent that lists its children is not kept alive by them).

| Who | What it does |
|---|---|
| [`AbilityInstance.apply_ability_effects`](/advanced/abilities-and-effects/runtime/ability-instance) | Makes one record for the use and gives it to every root effect of that use (also the ammo effects) |
| [`CompositeEffect.apply_child_effect`](/advanced/abilities-and-effects/effects-composite/composite-effect) | Gives the child the record and the parent of the effect that applies it. Area, projectile and conditional effects apply their children this way |
| `DamageEffect._resolve_hit` | Adds the result of the hit: `CastRecord.add_damage_result` (health damage and what the shields absorbed) |
| `HealEffect` | Adds the healing that was applied: `add_healing_result` |
| `EffectInstance.reset` | Forgets both, so a pooled instance starts clean |

An effect started on its own (a buff from an item) has its own record, which nobody else shares. A record only holds numbers, it keeps no references.

The order of the child effects is the order they run in, so an effect that reads the record must come after the effects it reads. A projectile that applies its children when it hits does so later than the effects that started it; the record is the same one by then.

## Adding a kind of part

1. Add a value to `AmountSource.Kind` (at the end, so the saved numbers do not change).
2. Handle it in `AmountSource.evaluate`, `describe` and, if it needs a field, `validate`.
3. Add its label to [`StatPropertyFields.AMOUNT_KIND_HINT`](/advanced/editor/stats/stat-property-fields) and its fields to `add_effect_amount` so the editor shows it.

## Tests

`effect_types_audit` checks the conversion of the older fields, every kind of part that does not need a scene, and a composite of a strike and a heal that gives back half of the damage.
