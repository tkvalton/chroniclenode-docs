# The hit and heal pipeline

Every hit and every heal goes through the same steps. `CombatManager.apply_damage` and `apply_healing` are the entry points; everything that damages or heals, from an ability to a damage reflection, ends there. They return a typed result, never a loose dictionary.

## The result

[`DamageResult`](/advanced/entity-stats/combat/damage-result) is made for the hit and filled in as the pipeline goes. [`HealingResult`](/advanced/entity-stats/combat/healing-result) is its twin.

| Member | Meaning |
|---|---|
| `raw` | The number the effect asked for |
| `done` | After the attacker's phase |
| `taken` | After the target's phase, the number that goes to the pools |
| `triggers_done`, `triggers_taken` | [`TriggerRecord`](/advanced/entity-stats/triggers/trigger-record)s that fired in each phase |
| `steps_done`, `steps_taken` | The [`ModifierStep`](/advanced/entity-stats/triggers/modifier-step)s that changed the number, in order |
| `redirected`, `absorbed`, `health_damage` | Where the number went |
| `outcome` | `HIT`, `AVOIDED`, `IMMUNE`, `FULLY_REDIRECTED`, `TARGET_DEAD`, `FAILED`, `NEGATED` or `MISSED` |
| `chain_depth` | 0 for a normal hit, one more for damage caused by reacting to a hit |
| `target_died` | The hit killed the target |

Consumers choose which number they want with a `DamageBasis`: `RAW`, `AFTER_DONE`, `AFTER_TAKEN` or `HEALTH_ONLY` (what actually reached health). Threat, leech and damage reflection each have a setting for it, and `result.get_amount(basis)` returns the number.

A script error inside the target's processing is turned into a `FAILED` result by `CombatManager`, so a crash is never mistaken for a hit.

## The hit

```
CombatManager.apply_damage(attacker, target, raw, damage_type, effect_instance, can_be_avoided, chain_depth)
  1  validate the participants (both need a StatsComponent)
  2  make the DamageResult
  3  PHASE 1, attacker: DamageDoneCalculation.apply_to(attacker stats, result)    -> result.done
       an avoid trigger that fired (a miss)?    MISSED: the hit ends here, the target is not touched
  4  target.take_damage(result)                                                   -> StatsComponent.take_damage
       a  already dead?                         TARGET_DEAD
       b  redirection effects (guardians): redirect a share, reduce by a percentage
       c  nothing left?                         FULLY_REDIRECTED
       d  emit damage_incoming
       e  damage immunity?                      IMMUNE
       f  PHASE 2, target: DamageTakenCalculation.apply_to   -> result.taken
                avoid trigger fired?            AVOIDED
       g  project options: minimum damage, round damage, "zero is not a hit"  (NEGATED)
       h  pools take damage through the damage layers
       i  emit damage_taken, then the death check
  5  announce the result: damage_pipeline_completed, entity_hit_dealt, entity_hit_received
```

`run_damage_done(attacker, raw, type, effect)` runs only step 3 and returns the result. Effects that put a number somewhere other than on a target use it: the pool and stat modifier effects.

### A calculation

Both phases are a [`CalculationBase`](/advanced/entity-stats/calculations/calculation-base) subclass. `run_phase` returns a [`CalculationPhase`](/advanced/entity-stats/calculations/calculation-phase) (`value`, `triggers`, `steps`, `avoid`), which the subclass copies into the result.

```
run_phase(stats_component, start_value, context, formula_context, effect_instance)
  rules   = trigger rules of the effect causing the hit + every TriggerRuleStatEffect the entity has points in
  PHASE 1 triggers
      avoid triggers roll first (damage taken only). One fires: value = 0, the phase ends
      the other triggers roll, in stat id order, and set their tag in the context
      tags a rule forces ("always") fire without a stat
  PHASE 2 modifiers
      the universal order of every CalculationModifierStatEffect in the database,
      highest priority first. A fired tag with an Application takes its place in the same order
      a stat the entity has no points in is skipped; a modifier that requires a tag only runs when it fired
  value = max(value, 0)
```

The stat ids are sorted before every loop, so the result never depends on the order of a dictionary.

The **universal order** is built once by [`CombatCalculations`](/advanced/entity-stats/calculations/combat-calculations) from all the stats in the database, for each of the four calculations (`build_order`: priority, then stat id, then the position of the effect in the stat). It is a cache; the Calculations editor and any stat change invalidate it.

### Rules

`_collect_rules` builds the `TriggerRuleSet` of a phase from three places:

1. the `trigger_rules` of the effect that causes the hit or heal,
2. the `TriggerRuleStatEffect`s of the entity that runs the phase whose `applies_to` is `OWNER`,
3. the `TriggerRuleStatEffect`s of its **opponent** (`context["opponent"]`) with `OPPONENT_ACTING_ON_ME` when the phase is a *done* phase (Damage Done, Healing Done) or `OPPONENT_DEFENDING_AGAINST_ME` when it is a *taken* phase. The conditions of those effects are checked with the roles swapped: the opponent is the owner.

A rule that names no tag can name a **kind** (`TagKindFilter`): it then matches every tag of that kind (`TriggerRuleSet` takes the kind of the tag it is asked about). A rule that names a tag matches only that tag.

### Misses

An avoid trigger acts in Damage Taken (a dodge). It acts in **Damage Done** only when its `target_calculations` name Damage Done (a miss); an avoid trigger with no list stays a Damage Taken trigger. A trigger with `inverted` set rolls the chance `100 - value` and rolls even at 0 points, because 0 points of a hit chance is a certain miss. When the avoid fires in the done phase, `DamageDoneCalculation` calls `result.mark_missed(record)`, and `CombatManager.apply_damage` announces the result without calling `take_damage`. A hit with `can_be_avoided` off cannot be missed, and neither can a number measured without a target (`run_damage_done`). A preview of damage never rolls an avoid.

### Context and tags

The context dictionary holds what the stat effects look at:

| Key | Meaning |
|---|---|
| `damage_type` | The damage type id of the hit |
| `calculation_target` | `"Damage Done"`, `"Damage Taken"`, ... |
| `is_damage_calculation`, `can_be_avoided`, `in_combat` | The kind of hit and the combat state |
| `owner`, `opponent` | The entity being calculated and the other side |
| `school` | The school id of the ability (else of the effect) that causes the hit, 0 for none |
| `distance` | The distance in metres between the two, when both are in the world |
| `is_periodic` | True for a tick of a damage or healing over time (the effect instance has a tick interval) |
| *the tag* | `true` when a trigger with this tag fired |
| `"magnitude:" + tag` | The magnitude of the fired tag |

The tags the attacker fired on this hit are also visible to the defender's modifiers. Resilience can cut critical damage, armor can be pierced.

## The heal

```
CombatManager.apply_healing(healer, target, raw, effect_instance, chain_depth, only_pool_id)
  1  validate, make the HealingResult
  2  PHASE 1, healer: HealingDoneCalculation                  -> result.done
  3  target.take_healing(result)
       PHASE 2, target: HealingTakenCalculation               -> result.taken
       heal absorbs soak up healing (HealAbsorbEffect)        -> result.absorbed
       pools that receive healing are filled                  -> result.applied
       death check: a heal can revive                         -> result.target_revived
  4  announce: healing_pipeline_completed, entity_heal_dealt, entity_heal_received
```

`only_pool_id` limits the heal to one pool (restore mana only).

## Reactions

Leech and damage reflection are *reactions* to a resolved hit. [`CombatReactions`](/advanced/entity-stats/combat/combat-reactions) implements both once: it reads one number of the hit (a `DamageBasis`), turns it into an amount and applies it through the real pipelines (`apply_healing`, `apply_damage`), so healing-done and damage-done modifiers, the log and the result signals all apply. The reaction is called by the effect classes and by the stat effects ([`PoolRestorationStatEffect`](/advanced/entity-stats/stat-effects/pool-restoration-stat-effect), [`ReactiveDamageStatEffect`](/advanced/entity-stats/stat-effects/reactive-damage-stat-effect)).

A reaction hit has `chain_depth + 1`. The game settings set the longest chain (`CombatOptions.max_reflect_chain`); a hit at that depth does not react again, so two reflecting entities cannot bounce a hit for ever.

## Project options

[`CombatOptions`](/advanced/entity-stats/combat/combat-options) reads the game settings once for the pipeline: a minimum damage, whole numbers only, and whether a hit reduced to 0 still counts as a hit. They apply after the defender's phase.

## Immunities and statuses

A damage immunity is checked before the defender's phase. Status effects go through `StatsComponent.apply_status_effect`, which asks for immunity, tenacity (the *status duration* gain channel) and diminishing returns, and answers `{can_apply, effective_duration, ...}`. School immunities are checked when an effect is started on a target (`EffectInstance.start_effect`). See [Tags & Groups: how they are built](/advanced/entity-stats/tags-and-groups).
