# Encounters: how they are built

An encounter is a **record** and a **runtime group**, and not a node of the scene. The record is a [`UniqueEncounterData`](/advanced/world/world-data/unique-encounter-data): the **settings** (formation, behavior, reactions, respawn), the id of its world, and `world_position` (the centre of the group when the scene was last saved). An NPC belongs to it through `UniqueEntityData.encounter_id` (`NPC.set_encounter_id`, `get_encounter_id`; 0 = none). When the world loads, the [`ObjectRegistry`](/advanced/world/runtime/object-registry) makes one [`EncounterGroup`](/advanced/world/runtime/encounter-group) for each encounter the NPCs name (`_build_encounter_groups`) and gives it its members. The members can stand anywhere in the scene.

## Lifecycle

| Step | What happens |
|---|---|
| In the editor | The placement tool's Encounter menu and the *Encounter* row of the Unique Object panel set `encounter_id` and make records with [`EncounterRecords`](/advanced/world/encounters/encounter-records) (`create_for_world`, which also lists the encounter in `WorldData.encounters`). On `scene_pre_save` the scene lists the encounters its NPCs name, drops the records no NPC names any more, and stores the centre of each (`UniqueEncounterData.update_center`) |
| The world loads | `register_world_objects` registers the NPCs, then `_build_encounter_groups`: for every encounter id an NPC names it makes an `EncounterGroup` (a child of the world container) with the record and calls `initialize_encounter(system_hub, members)`: the members become the **original group members** (`original_group_members` and `group_member_lookup`), the reactions are deep-copied (`_setup_reactions`), the spacing timer starts and the combat signals of the members are connected. An id with no record is skipped with a warning |
| A member enters combat | `_on_entity_entity_combat_state_changed`: if the encounter is `OUT_OF_COMBAT`, `_start_group_combat` (state `IN_COMBAT`, the formation is applied, `encounter_combat_started`) and the [`CombatManager`](/advanced/entity-stats/) hears of it (`handle_unique_encounter_combat_started`); with *Auto join combat* the other members are forced in |
| A member leaves combat | `_check_group_combat_end`: if no original member is in combat, `_end_group_combat("no_combatants")` |
| The fight ends | State becomes `DEFEATED` if the reason is `all_dead` or `group_defeated`, or `no_combatants` with nobody left alive; otherwise `OUT_OF_COMBAT`. Tracking is cleared, reactions are cleaned up and reset, `encounter_combat_ended` is emitted, and a defeated group that respawns starts its timer |

Only an `OUT_OF_COMBAT` encounter starts group combat (`can_start_combat`). Members that join during the fight (`add_member`, which no longer reparents anything, and `add_dynamic_participant`) are *dynamic participants*: they count as participants for the reactions and are dropped when the fight ends.

`set_active_state(system_hub, active)` switches every participant and the processing of the group; `encounter_activated` is emitted. Events and quests use it.

The registry saves each placed encounter (`EncounterGroup.to_save_data`: `unique_id`, `encounter_state`, `is_active`) next to the NPCs, which are saved as NPCs, and `_restore_encounters` puts the state back. A defeated encounter that respawns starts its timer again from the beginning after a load (the time already waited is not saved).

### Respawn

`UniqueEncounterData.respawns` and `respawn_delay` (seconds). The encounter becomes `DEFEATED` in two places: `_end_group_combat` (see above) and `_on_member_died`, which listens to `entity_died` of every original member and defeats the group when the last one dies outside a fight. Both call `_start_respawn_timer()`, which takes a timer from the [`ChronoManager`](/advanced/managers/managers/chrono-manager) pool when `respawns` is on. When it runs out, `respawn_group()` calls [`NPC.respawn_now()`](/advanced/entities/runtime/npc) on every member that is dead, is not already respawning on its own timer and is not `is_unique_encounter`, sets the state to `OUT_OF_COMBAT`, resets the reactions and `UniqueEncounterData.reset_state()`, and emits `encounter_respawned`. `_exit_tree` returns the timer.

## Formation, spacing, attackers

`UniqueEncounterData` answers the questions the encounter asks: `get_formation_radius(group_size)`, `get_max_attackers(group_size)` (`max_simultaneous_attackers`, else by behavior: Passive 0, Cautious a third, Balanced half, Aggressive and Berserker all), `should_enforce_spacing()` (never for Berserker) and `get_spacing_priority()`.

`_apply_formation` runs a [`GroupFormationAction`](/advanced/world/encounters/group-formation-action) for the formation of the data. The spacing timer (`spacing_check_interval`, from the `ChronoManager` pool) keeps the members apart while `enforce_spacing` is on. In combat, `_process_attack_coordination` rotates which members are allowed to attack (`current_attackers`, `attack_rotation_delay`).

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

The built-in actions: [`CallReinforcementsAction`](/advanced/world/encounters/call-reinforcements-action), `GroupFormationAction`, [`ModifyGroupBehaviorAction`](/advanced/world/encounters/modify-group-behavior-action), [`ForceGroupTargetAction`](/advanced/world/encounters/force-group-target-action), [`SpawnEffectAction`](/advanced/world/encounters/spawn-effect-action), [`TriggerEventAction`](/advanced/world/encounters/trigger-event-action), [`EncounterQuestActivateAction`](/advanced/world/encounters/encounter-quest-activate-action). The built-in conditions: [`CombatDurationCondition`](/advanced/shared-systems/encounter-conditions/combat-duration-condition), [`DistanceFromPositionCondition`](/advanced/shared-systems/encounter-conditions/distance-from-position-condition), [`EncounterActiveStateCondition`](/advanced/shared-systems/encounter-conditions/encounter-active-state-condition), [`EncounterCombatStateCondition`](/advanced/shared-systems/encounter-conditions/encounter-combat-state-condition), [`EncounterEntityCountCondition`](/advanced/shared-systems/encounter-conditions/encounter-entity-count-condition), [`GroupHealthPercentageCondition`](/advanced/shared-systems/encounter-conditions/group-health-percentage-condition), [`GroupMembersAliveCondition`](/advanced/shared-systems/encounter-conditions/group-members-alive-condition), [`PlayersInAreaCondition`](/advanced/shared-systems/encounter-conditions/players-in-area-condition).

The reaction list is edited in the Unique Object panel by [`EncounterReactionsEditor`](/advanced/world/editor-tools/encounter-reactions-editor) (a list with Add Reaction, and dialogs for a reaction, an action and a condition).

## See also

- [World: how it is built](/advanced/world/), [Encounters](/basic/world/encounters), [Combat Scripts](/advanced/behaviors/).
