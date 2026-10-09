# Encounters: how they are built

An [`Encounter`](/advanced/world/runtime/encounter) is a `Node3D` that coordinates the NPCs that are its children. Like a region it makes and keeps its own record, here a [`UniqueEncounterData`](/advanced/world/world-data/unique-encounter-data), which holds both the **settings** (the formation, the behavior, the reactions) and the **placement** (position and rotation): an encounter is one object, with no separate definition.

## Lifecycle

| Step | What happens |
|---|---|
| In the editor | The node makes its `UniqueEncounterData` (`_check_and_create_unique_data`), syncs the position on `scene_pre_save` and removes the record when really deleted, like a [region](/advanced/world/regions) |
| The world loads | The registry calls `initialize_encounter(system_hub)`: caches the NPC children as the **original group members** (`original_group_members` and `group_member_lookup` for fast tests), deep-copies the reactions (`_setup_reactions`: each encounter node has its own copies of the shared resources, with their state), connects the signals of each member and sets the spacing timer |
| A member enters combat | `_on_entity_entity_combat_state_changed`: if the encounter is `OUT_OF_COMBAT`, `_start_group_combat` (state `IN_COMBAT`, the formation is applied, `encounter_combat_started`) and the `CombatManager` is told (`handle_unique_encounter_combat_started`). With `auto_join_combat`, `_force_all_children_into_combat` sets the target of every living member that is not fighting and makes it enter combat |
| A member leaves combat | `_check_group_combat_end`: if no original member is in combat, `_end_group_combat("no_combatants")` |
| The fight ends | State becomes `DEFEATED` if the reason is `all_dead` or `group_defeated`, or `no_combatants` with nobody left alive; otherwise `OUT_OF_COMBAT` (the group ran the party off and can fight again). Tracking is cleared, reactions are cleaned up (and reset unless the reason was `all_dead`), `encounter_combat_ended(encounter, reason)` is emitted |

Only an `OUT_OF_COMBAT` encounter starts group combat (`can_start_combat`). Members that join during the fight (`add_member`, `add_dynamic_participant`) are *dynamic participants*: they count as participants for the reactions and are dropped when the fight ends.

`set_active_state(system_hub, active)` shows or hides the encounter and every participant and switches processing; `encounter_activated` is emitted. Events and quests use it.

The registry saves each placed encounter (`Encounter.to_save_data`: `unique_id`, `encounter_state`, `is_active`) next to the NPCs, which are saved as NPCs, and `_restore_encounters` puts the state back. A defeated encounter that respawns starts its timer again from the beginning after a load (the time already waited is not saved).

### Respawn

`UniqueEncounterData.respawns` and `respawn_delay` (seconds). The encounter becomes `DEFEATED` in two places: `_end_group_combat` (see above) and `_on_member_died`, which listens to `entity_died` of every original member and defeats the group when the last one dies outside a fight. Both call `_start_respawn_timer()`, which takes a timer from the `ChronoManager` pool when `respawns` is on. When it runs out, `respawn_group()` calls `NPC.respawn_now()` on every member that is dead, is not already respawning on its own timer and is not `is_unique_encounter`, sets the state to `OUT_OF_COMBAT`, resets the reactions and `UniqueEncounterData.reset_state()`, and emits `encounter_respawned`. `_exit_tree` returns the timer.

## Formation, spacing, attackers

`UniqueEncounterData` answers the questions the encounter asks: `get_formation_radius(group_size)`, `get_max_attackers(group_size)` (`max_simultaneous_attackers`, else by behavior: Passive 0, Cautious a third, Balanced half, Aggressive and Berserker all), `should_enforce_spacing()` (never for Berserker) and `get_spacing_priority()`.

`_apply_formation` runs a `GroupFormationAction` for the formation of the data. The spacing timer (`spacing_check_interval`, from the `ChronoManager` pool) keeps the members apart while `enforce_spacing` is on. In combat, `_process_attack_coordination` rotates which members are allowed to attack (`current_attackers`, `attack_rotation_delay`).

## Reactions

An [`EncounterReaction`](/advanced/world/encounters/encounter-reaction) has a `trigger_event`, `one_time`, `cooldown`, `conditions` and `actions`.

- **Wiring.** `_connect_reaction_signals` connects, for each original member, only the signals that the reactions in use need: `entity_taken_damage`, `entity_dealt_damage`, the effects component's `effect_gained` / `effect_lost`, the ability component's casts. Deaths reach the reaction through `_on_participant_left` (a participant of the combat session left and is dead), which uses `_is_original_group_member` to tell allies from enemies. `TIME_PASSED` and `GROUP_HEALTH_BELOW_PERCENT` are checked every frame in the reaction's `process(delta)`, which the encounter calls from its own `_process` while `IN_COMBAT`.
- **Firing.** `trigger()` runs if `can_trigger()` (not used up by `one_time`, off cooldown, all conditions true), executes every action (each checks its own conditions and cooldown) and starts the cooldown if one succeeded.
- **State.** `has_triggered`, `cooldown_remaining`, `time_passed_timer` live on the copied reaction and are cleared by `reset()`.

### Actions and conditions

| Extend | Folder the editor scans |
|---|---|
| [`EncounterAction`](/advanced/world/encounters/encounter-action) with `execute() -> bool` (and `process(delta)` if it has timed state); its exports become the fields | `data_classes/encounters/actions/types/` |
| [`EncounterCondition`](/advanced/shared-systems/) with `evaluate() -> bool`. `get_target_encounter(argument)` finds the encounter by the `encounter_target` setting (`ARGUMENT_ENCOUNTER`, `CURRENT_ACTIVE`, `NEAREST`, `UNIQUE_ID`) | `data_classes/conditions/encounter/` |

The built-in actions: `CallReinforcementsAction`, `GroupFormationAction`, `ModifyGroupBehaviorAction`, `ForceGroupTargetAction`, `SpawnEffectAction`, `TriggerEventAction`, `EncounterQuestActivateAction`. The built-in conditions: `CombatDurationCondition`, `DistanceFromPositionCondition`, `EncounterActiveStateCondition`, `EncounterCombatStateCondition`, `EncounterEntityCountCondition`, `GroupHealthPercentageCondition`, `GroupMembersAliveCondition`, `PlayersInAreaCondition`.

The reaction list is edited in the Unique Object panel by [`EncounterReactionsEditor`](/advanced/world/editor-tools/encounter-reactions-editor) (a list with Add Reaction, and dialogs for a reaction, an action and a condition).

## See also

- [World: how it is built](/advanced/world/), [Encounters](/basic/world/encounters), [Combat Scripts](/advanced/behaviors/).
