<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Entity

**Inherits:** [CharacterBody3D](https://docs.godotengine.org/en/stable/classes/class_characterbody3d.html)

**Inherited by:** [NPC](/advanced/entities/runtime/npc), [Pet](/advanced/entities/runtime/pet), [Player](/advanced/entities/runtime/player)

Entity is the base class for all characters and creatures in the game world. It provides core functionality for movement, combat, stats management, and interaction with the game's systems. This class serves as the foundation for both player-controlled characters and AI-driven entities.

## Properties

| | | |
|---|---|---|
| `UniqueEntityData` | [unique_data](#prop-unique-data) |  |
| `EntityDefinition :` | [definition](#prop-definition) |  |

## Variables

| | | |
|---|---|---|
| `float` | [jump_velocity](#var-jump-velocity) | `4.5` |
| `bool` | [is_initialized](#var-is-initialized) | `false` |
| `String` | [display_name](#var-display-name) |  |
| `Variant` | [target](#var-target) |  |
| `int` | [current_level](#var-current-level) | `0:` |
| `AbilityInstance` | [casting_ability](#var-casting-ability) | `null:` |
| `FactionDefinition` | [faction](#var-faction) |  |
| `Entity` | [last_damage_source](#var-last-damage-source) | `null` |
| `Dictionary` | [meta_data](#var-meta-data) | `{}` |
| `bool` | [is_active](#var-is-active) | `false` |
| `bool` | [is_dead](#var-is-dead) | `false` |
| `bool` | [currently_moving](#var-currently-moving) | `false` |
| `bool` | [in_combat](#var-in-combat) | `false` |
| `CombatSession` | [current_encounter](#var-current-encounter) | `null` |
| `EffectInstance` | [active_movement_effect](#var-active-movement-effect) | `null` |
| `bool` | [immobile](#var-immobile) | `false` |
| `bool` | [cast_immobile](#var-cast-immobile) | `false` |
| `bool` | [is_falling](#var-is-falling) | `false` |
| `bool` | [is_crouched](#var-is-crouched) | `false` |
| `bool` | [is_swimming](#var-is-swimming) | `false` |
| `bool` | [is_walking](#var-is-walking) | `false` |
| `bool` | [is_flying](#var-is-flying) | `false` |
| `bool` | [is_climbing](#var-is-climbing) | `false` |
| `bool` | [fleeing](#var-fleeing) | `false` |
| `bool` | [incapactiated](#var-incapactiated) | `false` |
| `bool` | [disoriented](#var-disoriented) | `false` |
| `bool` | [is_stealthed](#var-is-stealthed) | `false:` |
| `GameplayConfig.LODLevel` | [lod_level](#var-lod-level) | `GameplayConfig.LODLevel.HIGH_DETAIL:` |
| `GameplayConfig.FogState` | [fog_state](#var-fog-state) | `GameplayConfig.FogState.VISIBLE:` |
| `bool` | [is_current_player](#var-is-current-player) | `false:` |
| `bool` | [is_fog_hidden](#var-is-fog-hidden) | `false` |
| `EntityComponentRegistry` | [components](#var-components) |  |
| `CollisionShape3D` | [entity_collision](#var-entity-collision) |  |
| `Decal` | [map_marker](#var-map-marker) |  |
| `Nameplate:` | [nameplate](#var-nameplate) |  |
| `Marker3D:` | [nameplate_marker](#var-nameplate-marker) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `WorldContainer` | [world_container](#var-world-container) |  |
| `float` | [seconds_stationary](#var-seconds-stationary) | `0.0` |
| `float` | [seconds_moving](#var-seconds-moving) | `0.0` |
| `Array[Entity]` | [temporarily_hostile_to](#var-temporarily-hostile-to) | `[]` |
| `Array[int]` | [runtime_entity_tags](#var-runtime-entity-tags) | `[]` |
| `Array[int]` | [suppressed_entity_tags](#var-suppressed-entity-tags) | `[]` |
| `AimProvider` | [aim_provider](#var-aim-provider) | `null` |

## Methods

| | |
|---|---|
| `int` | [get_unique_id](#method-get-unique-id)() |
| `void` | [initialize_entity](#method-initialize-entity)( `system_hub: GameHost.SystemHub` ) |
| `void` | [update_movement_tracking](#method-update-movement-tracking)( `delta: float` ) |
| `bool` | [is_moving](#method-is-moving)() |
| `void` | [turn_by](#method-turn-by)( `delta_yaw: float` ) |
| `bool` | [request_facing_yaw](#method-request-facing-yaw)( `yaw: float, speed: int = FaceTargetSpeed.INSTANT` ) |
| `void` | [begin_direct_facing](#method-begin-direct-facing)( `block_auto_face: bool` ) |
| `void` | [end_direct_facing](#method-end-direct-facing)() |
| `bool` | [is_auto_facing_blocked](#method-is-auto-facing-blocked)() |
| `bool` | [is_turning](#method-is-turning)() |
| `bool` | [is_turn_in_progress](#method-is-turn-in-progress)() |
| `float` | [get_target_facing_yaw](#method-get-target-facing-yaw)() |
| `void` | [stop_turning](#method-stop-turning)() |
| `void` | [apply_facing_yaw](#method-apply-facing-yaw)( `yaw: float` ) |
| `void` | [apply_velocity_facing_yaw](#method-apply-velocity-facing-yaw)( `yaw: float` ) |
| `void` | [set_active_state](#method-set-active-state)( `system_hub: GameHost.SystemHub, active: bool` ) |
| `void` | [resume_behavior_system](#method-resume-behavior-system)() |
| `void` | [pause_behavior_system](#method-pause-behavior-system)() |
| `GameplayConfig.LODLevel` | [get_lod_level](#method-get-lod-level)() |
| `bool` | [is_high_detail](#method-is-high-detail)() |
| `bool` | [is_lod_culled](#method-is-lod-culled)() |
| `GameplayConfig.FogState` | [get_fog_state](#method-get-fog-state)() |
| `bool` | [is_fog_visible](#method-is-fog-visible)() |
| `bool` | [is_in_explored_fog](#method-is-in-explored-fog)() |
| `bool` | [is_in_shroud](#method-is-in-shroud)() |
| `int` | [get_current_level](#method-get-current-level)() |
| `int` | [get_max_level](#method-get-max-level)() |
| `void` | [set_entity_level](#method-set-entity-level)( `new_level: int` ) |
| `void` | [level_up](#method-level-up)() |
| `float` | [get_stat](#method-get-stat)( `stat_id: int` ) |
| `bool` | [has_stat](#method-has-stat)( `stat_id: int` ) |
| `float` | [get_stat_value](#method-get-stat-value)( `stat_name: String` ) |
| `Array[int]` | [get_stat_ids_in_group](#method-get-stat-ids-in-group)( `group_id: int` ) |
| `bool` | [add_stat_bonus](#method-add-stat-bonus)( `stat_id: int, amount: float` ) |
| `bool` | [add_stat_multiplier](#method-add-stat-multiplier)( `stat_id: int, amount: float` ) |
| `bool` | [set_stat_multiplier](#method-set-stat-multiplier)( `stat_id: int, multiplier: float` ) |
| `bool` | [is_hostile_to](#method-is-hostile-to)( `other: Variant` ) |
| `bool` | [is_neutral_to](#method-is-neutral-to)( `other: Variant` ) |
| `bool` | [can_attack](#method-can-attack)( `other: Variant` ) |
| `void` | [make_hostile_to](#method-make-hostile-to)( `other: Entity` ) |
| `void` | [end_temporary_hostility](#method-end-temporary-hostility)() |
| `Array[int]` | [get_entity_tags](#method-get-entity-tags)() |
| `int` | [get_proficiency_level](#method-get-proficiency-level)( `proficiency_id: int` ) |
| `bool` | [has_entity_tag](#method-has-entity-tag)( `tag_id: int` ) |
| `void` | [add_entity_tag](#method-add-entity-tag)( `tag_id: int` ) |
| `void` | [remove_entity_tag](#method-remove-entity-tag)( `tag_id: int` ) |
| `Dictionary` | [entity_tags_to_save](#method-entity-tags-to-save)() |
| `void` | [entity_tags_from_save](#method-entity-tags-from-save)( `data: Dictionary` ) |
| `float` | [modify_gain](#method-modify-gain)( `channel: String, amount: float` ) |
| `int` | [modify_gain_int](#method-modify-gain-int)( `channel: String, amount: int, probabilistic: bool = false` ) |
| `bool` | [set_stat_base](#method-set-stat-base)( `stat_id: int, value: float` ) |
| `void` | [set_custom_gravity](#method-set-custom-gravity)( `new_gravity: float` ) |
| `void` | [reset_custom_gravity](#method-reset-custom-gravity)() |
| `float` | [get_custom_gravity](#method-get-custom-gravity)() |
| `float` | [get_weapon_damage](#method-get-weapon-damage)() |
| `float` | [roll_weapon_damage](#method-roll-weapon-damage)() |
| `bool` | [has_weapon_equipped](#method-has-weapon-equipped)() |
| `int` | [get_equipped_weapon_damage_type](#method-get-equipped-weapon-damage-type)() |
| `bool` | [has_weapon_with_damage_type](#method-has-weapon-with-damage-type)( `damage_type: int` ) |
| `float` | [get_current_health](#method-get-current-health)() |
| `float` | [get_max_health](#method-get-max-health)() |
| `float` | [get_health_percentage](#method-get-health-percentage)() |
| `bool` | [is_health_below](#method-is-health-below)( `threshold: float` ) |
| `bool` | [is_health_above](#method-is-health-above)( `threshold: float` ) |
| `float` | [get_pool_current](#method-get-pool-current)( `pool_id: int` ) |
| `float` | [get_pool_max](#method-get-pool-max)( `pool_id: int` ) |
| `float` | [get_pool_percentage](#method-get-pool-percentage)( `pool_id: int` ) |
| `Dictionary` | [can_afford_resource](#method-can-afford-resource)( `pool_id: int, amount: float` ) |
| `bool` | [has_pool](#method-has-pool)( `pool_id: int` ) |
| `bool` | [is_master_pool](#method-is-master-pool)( `pool_id: int` ) |
| `PoolInstance` | [get_master_pool](#method-get-master-pool)() |
| `float` | [add_pool_value](#method-add-pool-value)( `pool_id: int, amount: float` ) |
| `bool` | [remove_pool_value](#method-remove-pool-value)( `pool_id: int, amount: float` ) |
| `bool` | [is_resource_pool](#method-is-resource-pool)( `pool_id: int` ) |
| `Array[int]` | [get_resource_pool_ids](#method-get-resource-pool-ids)() |
| `AbilityInstance` | [get_ability_by_id](#method-get-ability-by-id)( `ability_id: int` ) |
| `bool` | [has_ability_by_id](#method-has-ability-by-id)( `ability_id: int` ) |
| `AbilityInstance` | [get_basic_attack](#method-get-basic-attack)() |
| `Array[AbilityInstance]` | [get_active_abilities](#method-get-active-abilities)() |
| `Array[AbilityInstance]` | [get_passive_abilities](#method-get-passive-abilities)() |
| `bool` | [add_ability](#method-add-ability)( `ability: AbilityInstance` ) |
| `bool` | [swap_basic_attack](#method-swap-basic-attack)( `ability: AbilityInstance` ) |
| `bool` | [remove_basic_attack](#method-remove-basic-attack)() |
| `bool` | [remove_ability_by_id](#method-remove-ability-by-id)( `ability_id: int` ) |
| `bool` | [move_to_position](#method-move-to-position)( `target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [move_keep_facing](#method-move-keep-facing)( `target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [backpedal_to](#method-backpedal-to)( `target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [strafe_to](#method-strafe-to)( `target_pos: Vector3, strafe_direction: int, should_walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [follow_target](#method-follow-target)( `target_to_follow: Node3D, min_distance: float = 2.0, should_walk: bool = false` ) |
| `bool` | [move_to_position_sync](#method-move-to-position-sync)( `target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [move_keep_facing_sync](#method-move-keep-facing-sync)( `target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [backpedal_to_sync](#method-backpedal-to-sync)( `target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [strafe_to_sync](#method-strafe-to-sync)( `target_pos: Vector3, strafe_direction: int, should_walk: bool = false, min_distance: float = -1.0` ) |
| `void` | [stop_moving](#method-stop-moving)() |
| `void` | [jump](#method-jump)() |
| `void` | [entity_face_direction](#method-entity-face-direction)( `look_at_direction: Vector3, speed: int = FaceTargetSpeed.INSTANT` ) |
| `void` | [entity_look_at_object](#method-entity-look-at-object)( `object: Node3D, speed: int = FaceTargetSpeed.INSTANT` ) |
| `void` | [set_approach_distance](#method-set-approach-distance)( `distance: float` ) |
| `MovementState` | [get_movement_state](#method-get-movement-state)() |
| `void` | [change_movement_state](#method-change-movement-state)( `state_name: MovementStateComponent.MovementStateName` ) |
| `Dictionary` | [get_aim](#method-get-aim)( `max_range: float = 0.0` ) |
| `void` | [request_action_state_change](#method-request-action-state-change)( `state_name: ModularCombatScript.ActionStateName, data: Dictionary = {}` ) |
| `void` | [set_stealth_prevention](#method-set-stealth-prevention)( `prevent: bool` ) |
| `bool` | [is_stealth_prevented](#method-is-stealth-prevented)() |
| `bool` | [is_immobile](#method-is-immobile)() |
| `void` | [cast_interrupted](#method-cast-interrupted)() |
| `void` | [stop_cast](#method-stop-cast)() |
| `void` | [set_target](#method-set-target)( `new_target: Variant` ) |
| `void` | [enter_combat](#method-enter-combat)( `target_entity: Entity = null` ) |
| `void` | [exit_combat](#method-exit-combat)() |
| `void` | [change_combat_state](#method-change-combat-state)( `value: bool` ) |
| `void` | [set_encounter](#method-set-encounter)( `encounter: CombatSession` ) |
| `void` | [leave_encounter](#method-leave-encounter)() |
| `Node3D` | [get_attachment_point_node](#method-get-attachment-point-node)( `location: VFXSelection.VfxLocation` ) |
| `DamageResult` | [take_damage](#method-take-damage)( `result: DamageResult` ) |
| `HealingResult` | [take_healing](#method-take-healing)( `result: HealingResult` ) |
| `bool` | [can_apply_school_effect](#method-can-apply-school-effect)( `school_id: int, source_entity: Variant = null, effect: EffectInstance = null` ) |
| `EffectInstance` | [get_effect](#method-get-effect)( `effect_id: int` ) |
| `EffectInstance` | [get_effect_from_caller](#method-get-effect-from-caller)( `effect_id: int, originator: Entity` ) |
| `void` | [reduce_effect_stacks](#method-reduce-effect-stacks)( `effect_instance: EffectInstance, stacks_to_remove: int` ) |
| `Array[EffectInstance]` | [get_active_effects_by_type](#method-get-active-effects-by-type)( `effect_type: String` ) |
| `Array[EffectInstance]` | [get_all_active_effects](#method-get-all-active-effects)() |
| `void` | [remove_all_effects](#method-remove-all-effects)() |
| `Dictionary` | [apply_status_effect](#method-apply-status-effect)( `status_effect: int, base_duration: float, source_entity: Variant = null, effect: EffectInstance = null` ) |
| `bool` | [is_immune_to_status_effect](#method-is-immune-to-status-effect)( `status_effect_id: int` ) |
| `bool` | [is_immune_to_damage_type](#method-is-immune-to-damage-type)( `damage_type: int` ) |
| `bool` | [is_immune_to_school_type](#method-is-immune-to-school-type)( `school_id: int` ) |
| `bool` | [activate_immunity](#method-activate-immunity)( `immunity_id: int, duration: float = -1.0` ) |
| `bool` | [deactivate_immunity](#method-deactivate-immunity)( `immunity_id: int` ) |
| `bool` | [is_incapacitated](#method-is-incapacitated)() |
| `bool` | [is_silenced](#method-is-silenced)() |
| `bool` | [is_rooted](#method-is-rooted)() |
| `bool` | [is_crippled](#method-is-crippled)() |
| `bool` | [is_blinded](#method-is-blinded)() |
| `bool` | [is_fleeing](#method-is-fleeing)() |
| `bool` | [is_disoriented](#method-is-disoriented)() |
| `bool` | [is_disarmed](#method-is-disarmed)() |
| `Dictionary` | [get_status_effect_summary](#method-get-status-effect-summary)() |
| `Array[String]` | [get_active_status_effects](#method-get-active-status-effects)() |
| `bool` | [has_any_cc_effects](#method-has-any-cc-effects)() |
| `bool` | [has_movement_impairing_effects](#method-has-movement-impairing-effects)() |
| `bool` | [has_ability_blocking_effects](#method-has-ability-blocking-effects)() |
| `bool` | [can_use_weapon_abilities](#method-can-use-weapon-abilities)() |
| `InventoryComponent` | [get_inventory](#method-get-inventory)() |
| `bool` | [has_inventory](#method-has-inventory)() |
| `int` | [count_item](#method-count-item)( `item_id: int` ) |
| `bool` | [equip_item](#method-equip-item)( `item_instance: ItemInstance, forced: bool = false` ) |
| `bool` | [equip_item_to_slot](#method-equip-item-to-slot)( `item_instance: ItemInstance, slot_data: EquipmentSlotInstance, forced: bool = false` ) |
| `ItemInstance` | [unequip_slot](#method-unequip-slot)( `slot_data: EquipmentSlotInstance` ) |
| `bool` | [unequip_item](#method-unequip-item)( `item_instance: ItemInstance` ) |
| `bool` | [equip_item_instance](#method-equip-item-instance)( `item_instance: ItemInstance` ) |
| `bool` | [unequip_item_instance](#method-unequip-item-instance)( `item_instance: ItemInstance` ) |
| `Array[ItemInstance]` | [get_equipped_items](#method-get-equipped-items)() |
| `void` | [clear_all_equipment](#method-clear-all-equipment)() |
| `Array[EquipmentSlotInstance]` | [get_equipment_slots_by_definition](#method-get-equipment-slots-by-definition)( `slot_def: EquipmentSlotDefinition` ) |
| `bool` | [has_item_equipped_in_slot_definition](#method-has-item-equipped-in-slot-definition)( `slot_def: EquipmentSlotDefinition` ) |
| `ItemInstance` | [get_equipped_item_from_slot_definition](#method-get-equipped-item-from-slot-definition)( `slot_def: EquipmentSlotDefinition` ) |
| `Array[ItemInstance]` | [get_all_equipped_items_from_slot_definition](#method-get-all-equipped-items-from-slot-definition)( `slot_def: EquipmentSlotDefinition` ) |
| `ItemInstance` | [get_equipped_weapon_from_slot](#method-get-equipped-weapon-from-slot)( `slot_def: EquipmentSlotDefinition` ) |
| `Array[ItemInstance]` | [get_equipped_weapons](#method-get-equipped-weapons)() |
| `bool` | [has_any_weapon_equipped](#method-has-any-weapon-equipped)() |
| `bool` | [has_weapon_equipped_in_slot](#method-has-weapon-equipped-in-slot)( `slot_def: EquipmentSlotDefinition` ) |
| `void` | [sync_animation_state](#method-sync-animation-state)() |
| `Dictionary` | [get_animation_tags](#method-get-animation-tags)() |
| `String` | [get_stance_tag](#method-get-stance-tag)() |
| `String` | [get_attack_tag](#method-get-attack-tag)() |
| `void` | [entity_death](#method-entity-death)( `announce: bool = true` ) |
| `void` | [resurrect](#method-resurrect)() |
| `void` | [set_current_target_hover](#method-set-current-target-hover)() |
| `void` | [set_current_target_on](#method-set-current-target-on)() |
| `void` | [set_current_target_off](#method-set-current-target-off)() |
| `void` | [set_map_marker_icon](#method-set-map-marker-icon)( `type: Entity.MapMarkerType` ) |
| `String` | [get_current_surface_type](#method-get-current-surface-type)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary, system_hub: GameHost.SystemHub` ) |

## Signals

### entity_damage_incoming( damage_amount: float, damage_type: int, damage_source: Variant, effect: EffectInstance ) {#signal-entity-damage-incoming}

Damage signals - forwarded from StatsComponent

### entity_taken_damage( damage_amount: int, damage_source: Variant, effect: EffectInstance, damage_type: int ) {#signal-entity-taken-damage}

### entity_health_changed( new_health: int ) {#signal-entity-health-changed}

### entity_damage_absorbed_by_pool( pool_id: int, amount: float, damage_type: int, damage_source: Variant, effect: EffectInstance ) {#signal-entity-damage-absorbed-by-pool}

### entity_healing_applied( pool_id: int, amount: float, healing_source: Variant, effect: EffectInstance ) {#signal-entity-healing-applied}

Healing signals - forwarded from StatsComponent

### entity_hit_dealt( result: DamageResult ) {#signal-entity-hit-dealt}

Resolved hits and heals: ONE signal each carrying the typed result (see DamageResult / HealingResult). The result holds the outcome (hit, avoided, immune ...), every amount, and the trigger records (dodge, block, crit). Combat feedback, proc effects and event triggers all read these.

### entity_hit_received( result: DamageResult ) {#signal-entity-hit-received}

### entity_heal_dealt( result: HealingResult ) {#signal-entity-heal-dealt}

### entity_heal_received( result: HealingResult ) {#signal-entity-heal-received}

### entity_dying( entity: Entity ) {#signal-entity-dying}

Death signal - forwarded from StatsComponent via mediator Emitted when the entity has just died, before its effects are removed: death procs (and a resurrection) run on it. entity_died follows

### entity_died( entity: Entity ) {#signal-entity-died}

### entity_corpse_restored( entity: Entity ) {#signal-entity-corpse-restored}

A saved corpse was put back on load: its death is not announced again (entity_died would count a kill, ask the party for a respawn ...), only what shows a corpse listens

### damage_reflected( attacker: Variant, amount: float, effect: EffectInstance ) {#signal-damage-reflected}

The damage reflection of this entity hit an attacker (the attacker, the damage, the effect) and the damage reflection of someone else hit this entity (the bearer, the damage, the effect)

### reflected_damage_taken( bearer: Variant, amount: float, effect: EffectInstance ) {#signal-reflected-damage-taken}

### entity_resource_changed( new_resource: int ) {#signal-entity-resource-changed}

Resource signals - forwarded from StatsComponent

### pool_added( pool_instance: PoolInstance, pool_type: String ) {#signal-pool-added}

### pool_removed( pool_id: int, pool_type: String ) {#signal-pool-removed}

### entity_stat_changed( stat_id: int, old_value: float, new_value: float ) {#signal-entity-stat-changed}

Stat signals - forwarded from StatsComponent

### target_update( new_target: Variant ) {#signal-target-update}

Targeting signal - Entity-level emission

### effect_gained( effect_instance: EffectInstance ) {#signal-effect-gained}

Effect signals - forwarded from EffectsComponent

### effect_updated( effect_instance: EffectInstance ) {#signal-effect-updated}

### effect_lost( effect_instance: EffectInstance ) {#signal-effect-lost}

### immunity_activated( immunity_id: int, duration: float, immunity_type: ImmunityDefinition.ImmunityType, protected_targets: Array[int] ) {#signal-immunity-activated}

Immunity signals - forwarded from ImmunityComponent via StatsComponent

### immunity_deactivated( immunity_id: int, immunity_type: ImmunityDefinition.ImmunityType, protected_targets: Array[int] ) {#signal-immunity-deactivated}

### ability_cooldown_started( ability_name: String, duration: float ) {#signal-ability-cooldown-started}

Ability cooldown signals - forwarded from AbilityComponent

### global_cooldown_started() {#signal-global-cooldown-started}

### global_cooldown_ended() {#signal-global-cooldown-ended}

### pet_gained( pet: Pet ) {#signal-pet-gained}

Pet signals - forwarded from PetManagerComponent

### pet_lost( pet: Pet ) {#signal-pet-lost}

### equipment_changed( item: ItemInstance, item_slot: EquipmentSlotDefinition, equipped: bool ) {#signal-equipment-changed}

Equipment signal - forwarded from EquipmentComponent

### entity_item_received( item_instance: ItemInstance, slot_index: int ) {#signal-entity-item-received}

Inventory change signals - forwarded from InventoryComponent

### entity_item_removed( item_instance: ItemInstance, quantity: int ) {#signal-entity-item-removed}

### entity_dealt_damage( effect: EffectInstance, target: Variant ) {#signal-entity-dealt-damage}

Entity action signals - Entity-level emissions (not from components)

### entity_heal_cast( effect: EffectInstance, target: Variant ) {#signal-entity-heal-cast}

### entity_cast_resurrection( target: Variant, healing_applied: float, effect: EffectInstance ) {#signal-entity-cast-resurrection}

Emitted on the caster of a resurrection (the revived entity, the health it came back with)

### entity_resurrected( resurrector: Variant, healing_applied: float, effect: EffectInstance ) {#signal-entity-resurrected}

Emitted on the entity that was brought back to life (who revived it, the health it came back with)

### stat_active_state_changed( target: Variant, stat_ids: Array, is_active: bool ) {#signal-stat-active-state-changed}

Emitted on the entity whose stats a SetStatActiveState effect switched on or off (the stats, the new state)

### damage_redirected_away( guardian: Variant, amount: float, effect: EffectInstance ) {#signal-damage-redirected-away}

Damage redirection (a guardian takes hits for someone): on the protected entity, on the guardian, and on the attacker

### damage_redirected_to_self( protected: Variant, attacker: Variant, amount: float, effect: EffectInstance ) {#signal-damage-redirected-to-self}

### damage_was_redirected( protected: Variant, guardian: Variant, amount: float, effect: EffectInstance ) {#signal-damage-was-redirected}

### entity_ability_cast( ability: AbilityInstance, target: Variant ) {#signal-entity-ability-cast}

### entity_basic_attack_cast() {#signal-entity-basic-attack-cast}

### entity_casting( ability: AbilityInstance ) {#signal-entity-casting}

### entity_stop_casting() {#signal-entity-stop-casting}

### entity_interrupted() {#signal-entity-interrupted}

### entity_leveled_up( entity: Entity ) {#signal-entity-leveled-up}

Level progression signals - Player-specific

### entity_xp_changed( player: Player, experience: int, experience_requirement: int ) {#signal-entity-xp-changed}

### entity_interacted() {#signal-entity-interacted}

Interaction signal - Entity-level emission

### entity_was_interacted_with( by: Entity ) {#signal-entity-was-interacted-with}

Somebody interacted with this entity (an NPC that is talked to): the entity that did it. (entity_interacted is the one of the entity that interacts)

### entity_combat_state_changed( entity: Entity, in_combat: bool ) {#signal-entity-combat-state-changed}

Combat state signal - Entity-level emission (routed TO mediator for component coordination)

### entity_selection_state_changed( is_current: bool, is_selected: bool ) {#signal-entity-selection-state-changed}

Selection state signal - Entity-level emission for UI/camera systems

### entity_item_used( item_instance: ItemInstance ) {#signal-entity-item-used}

Item usage signals - emitted directly from ItemInstance

### entity_item_consumed( item_instance: ItemInstance, amount: int ) {#signal-entity-item-consumed}

### entity_item_depleted( item_instance: ItemInstance ) {#signal-entity-item-depleted}

## Enumerations

### enum MapMarkerType {#enum-mapmarkertype}

- **ENTITY** = `0`
- **QUEST_NPC** = `1`
- **QUEST_GIVER** = `2`
- **TREASURE** = `3`
- **INTERACTABLE_RESOURCE** = `4`
- **INTERACTABLE_QUEST** = `5`
- **RABBITHOLE** = `6`

### enum FaceTargetSpeed {#enum-facetargetspeed}

- **SLOW** = `0`
- **AVERAGE** = `1`
- **FAST** = `2`
- **INSTANT** = `3`

### enum TurnSource {#enum-turnsource}

- **NAVIGATION** = `0`
- **DIRECT_INPUT** = `1`

## Constants

- `float` **MOVING_SPEED_THRESHOLD** = `0.1` - Horizontal speed (units per second) above which the entity counts as moving

## Property descriptions

### UniqueEntityData unique_data {#prop-unique-data}

*No description yet.*

### EntityDefinition : definition {#prop-definition}

*No description yet.*

## Variable descriptions

### float jump_velocity = 4.5 {#var-jump-velocity}

Jump velocity applied when jump() is called

### bool is_initialized = false {#var-is-initialized}

*No description yet.*

### String display_name {#var-display-name}

*No description yet.*

### Variant target {#var-target}

*No description yet.*

### int current_level = 0: {#var-current-level}

*No description yet.*

### AbilityInstance casting_ability = null: {#var-casting-ability}

*No description yet.*

### FactionDefinition faction {#var-faction}

*No description yet.*

### Entity last_damage_source = null {#var-last-damage-source}

*No description yet.*

### Dictionary meta_data =  {#var-meta-data}

Free-form values behaviour tasks and conditions read and write (the Set Metadata task, the Metadata condition); saved with the entity

### bool is_active = false {#var-is-active}

*No description yet.*

### bool is_dead = false {#var-is-dead}

*No description yet.*

### bool currently_moving = false {#var-currently-moving}

*No description yet.*

### bool in_combat = false {#var-in-combat}

*No description yet.*

### CombatSession current_encounter = null {#var-current-encounter}

*No description yet.*

### EffectInstance active_movement_effect = null {#var-active-movement-effect}

*No description yet.*

### bool immobile = false {#var-immobile}

*No description yet.*

### bool cast_immobile = false {#var-cast-immobile}

*No description yet.*

### bool is_falling = false {#var-is-falling}

*No description yet.*

### bool is_crouched = false {#var-is-crouched}

*No description yet.*

### bool is_swimming = false {#var-is-swimming}

*No description yet.*

### bool is_walking = false {#var-is-walking}

*No description yet.*

### bool is_flying = false {#var-is-flying}

*No description yet.*

### bool is_climbing = false {#var-is-climbing}

*No description yet.*

### bool fleeing = false {#var-fleeing}

*No description yet.*

### bool incapactiated = false {#var-incapactiated}

*No description yet.*

### bool disoriented = false {#var-disoriented}

*No description yet.*

### bool is_stealthed = false: {#var-is-stealthed}

*No description yet.*

### GameplayConfig.LODLevel lod_level = GameplayConfig.LODLevel.HIGH_DETAIL: {#var-lod-level}

Current LOD level - managed by ObjectRegistry during batch optimization

### GameplayConfig.FogState fog_state = GameplayConfig.FogState.VISIBLE: {#var-fog-state}

Current fog state - managed by FogOfWarSystem

### bool is_current_player = false: {#var-is-current-player}

Whether this Player is the currently selected player character

### bool is_fog_hidden = false {#var-is-fog-hidden}

Whether this entity is currently hidden due to fog

### EntityComponentRegistry components {#var-components}

*No description yet.*

### CollisionShape3D entity_collision {#var-entity-collision}

*No description yet.*

### Decal map_marker {#var-map-marker}

*No description yet.*

### Nameplate: nameplate {#var-nameplate}

Nameplate - delegated to EntityComponentRegistry for centralized lifecycle management

### Marker3D: nameplate_marker {#var-nameplate-marker}

Nameplate marker - delegated to EntityComponentRegistry

### ChronoManager chrono_manager {#var-chrono-manager}

SystemRefs

### WorldContainer world_container {#var-world-container}

TODO: it's just 1 method, we should be able to get data from collision

### float seconds_stationary = 0.0 {#var-seconds-stationary}

How long the entity has been standing still, in seconds (0 while it moves). For the Movement State condition

### float seconds_moving = 0.0 {#var-seconds-moving}

How long the entity has been moving without stopping, in seconds (0 while it stands still)

### Array[Entity] temporarily_hostile_to = [] {#var-temporarily-hostile-to}

Entities this one is hostile to for now, whatever its faction says (see make_hostile_to)

### Array[int] runtime_entity_tags = [] {#var-runtime-entity-tags}

Tags added or removed while the game runs (an effect that makes a target Undead); the definition's tags are separate

### Array[int] suppressed_entity_tags = [] {#var-suppressed-entity-tags}

Tags removed while the game runs even though the definition has them

### AimProvider aim_provider = null {#var-aim-provider}

Where this entity is aiming (see AimProvider). The controller of the player in control sets a CameraAimProvider; null = aim at the target

## Method descriptions

### int get_unique_id() {#method-get-unique-id}

*No description yet.*

### void initialize_entity( system_hub: GameHost.SystemHub ) {#method-initialize-entity}

*No description yet.*

### void update_movement_tracking( delta: float ) {#method-update-movement-tracking}

Counts how long the entity has been moving or standing still (called every physics frame)

### bool is_moving() {#method-is-moving}

True while the entity moves on the ground plane faster than MOVING_SPEED_THRESHOLD (falling alone is not moving)

### void turn_by( delta_yaw: float ) {#method-turn-by}

Direct turn for player mouse-look: applies `delta_yaw` (radians) immediately and re-bases `target_rotation` on the result, so the physics-step smoothing above has nothing left to "correct". The controller must be the only thing integrating mouse-look yaw (the camera reads `rotation.y`, it never writes it). NPCs and navigation keep using `target_rotation` / `current_turning` via NavigationController.command_look_at.

### bool request_facing_yaw( yaw: float, speed: int = FaceTargetSpeed.INSTANT ) {#method-request-facing-yaw}

Smooth/instant automatic facing (navigation, abilities, behaviour tasks, effects). This is the single entry point NavigationController.command_look_at and entity_face_direction go through. Returns false if a mouse-look lease is blocking automatic facing. NPCs never take a lease, so for them this behaves exactly as the old inline code did.

### void begin_direct_facing( block_auto_face: bool ) {#method-begin-direct-facing}

Mouse-look lease, held by the controller for the duration of an RMB look. block_auto_face = true:  automatic facing (see request_facing_yaw and is_auto_facing_blocked) is ignored while held. block_auto_face = false: automatic facing still works, and turn_by() yields until that turn completes. Only the player's controller should call this.

### void end_direct_facing() {#method-end-direct-facing}

*No description yet.*

### bool is_auto_facing_blocked() {#method-is-auto-facing-blocked}

True while a mouse-look lease is ignoring automatic facing. Systems that rotate the entity directly (NavigationController velocity facing) check this before writing rotation.

### bool is_turning() {#method-is-turning}

True while the entity is turning: an automatic turn in progress, or a mouse-look turn within the last FacingMath.DIRECT_TURN_HOLD_MSEC. Movement-state transitions use this (not current_turning) so turn-in-place does not flap between mouse events and physics ticks.

### bool is_turn_in_progress() {#method-is-turn-in-progress}

True while a smooth turn is still being applied (set by request_facing_yaw / turn_by, cleared when the turn reaches its target or stop_turning is called). Unlike is_turning it has no hold.

### float get_target_facing_yaw() {#method-get-target-facing-yaw}

The yaw the current smooth turn is heading for (equals rotation.y when not turning)

### void stop_turning() {#method-stop-turning}

Ends any smooth turn in progress (the entity stays where it is facing now)

### void apply_facing_yaw( yaw: float ) {#method-apply-facing-yaw}

Sets the facing directly and keeps the turn target in sync, without starting a turn. For controllers that already smooth the rotation themselves (e.g. lock-on turning every frame).

### void apply_velocity_facing_yaw( yaw: float ) {#method-apply-velocity-facing-yaw}

Sets the facing to follow the direction of travel (NavigationController velocity facing). The caller does the smoothing; this marks navigation as the turn source and leaves any turn target alone.

### void set_active_state( system_hub: GameHost.SystemHub, active: bool ) {#method-set-active-state}

*No description yet.*

### void resume_behavior_system() {#method-resume-behavior-system}

Resume the behavior system using the new architecture

### void pause_behavior_system() {#method-pause-behavior-system}

Pause the behavior system using the new architecture

### GameplayConfig.LODLevel get_lod_level() {#method-get-lod-level}

Get current LOD level

### bool is_high_detail() {#method-is-high-detail}

Check if entity is at high detail LOD

### bool is_lod_culled() {#method-is-lod-culled}

Check if entity is culled (no updates)

### GameplayConfig.FogState get_fog_state() {#method-get-fog-state}

Get current fog state

### bool is_fog_visible() {#method-is-fog-visible}

Check if entity is currently visible (not hidden by fog)

### bool is_in_explored_fog() {#method-is-in-explored-fog}

Check if entity is in explored fog (seen before but not currently visible)

### bool is_in_shroud() {#method-is-in-shroud}

Check if entity is in shroud (never seen)

### int get_current_level() {#method-get-current-level}

Get current level

### int get_max_level() {#method-get-max-level}

Get maximum level

### void set_entity_level( new_level: int ) {#method-set-entity-level}

Set entity level and apply rewards

### void level_up() {#method-level-up}

Level up a specific player

### float get_stat( stat_id: int ) {#method-get-stat}

*No description yet.*

### bool has_stat( stat_id: int ) {#method-has-stat}

*No description yet.*

### float get_stat_value( stat_name: String ) {#method-get-stat-value}

A stat by its name (the display name, any case) or by its id as text: what conversation dice rolls ask for. 0 when the entity has no such stat

### Array[int] get_stat_ids_in_group( group_id: int ) {#method-get-stat-ids-in-group}

*No description yet.*

### bool add_stat_bonus( stat_id: int, amount: float ) {#method-add-stat-bonus}

*No description yet.*

### bool add_stat_multiplier( stat_id: int, amount: float ) {#method-add-stat-multiplier}

*No description yet.*

### bool set_stat_multiplier( stat_id: int, multiplier: float ) {#method-set-stat-multiplier}

*No description yet.*

### bool is_hostile_to( other: Variant ) {#method-is-hostile-to}

Is `other` an enemy of this entity: its faction is hostile to the other's, or the two are temporarily hostile

### bool is_neutral_to( other: Variant ) {#method-is-neutral-to}

Neither friend nor foe: the factions are neutral to each other and there is no temporary hostility

### bool can_attack( other: Variant ) {#method-can-attack}

Can this entity attack `other` on purpose (aiming an ability or clicking): enemies, and neutrals and scenery for the player. Friends never

### void make_hostile_to( other: Entity ) {#method-make-hostile-to}

From now on this entity and `other` are enemies, until one of them leaves combat (or dies)

### void end_temporary_hostility() {#method-end-temporary-hostility}

Ends every temporary hostility this entity is part of (it left combat or died)

### Array[int] get_entity_tags() {#method-get-entity-tags}

The type tags of this entity (EntityTagDefinition ids): its definition's, plus the ones added at runtime, minus the removed

### int get_proficiency_level( proficiency_id: int ) {#method-get-proficiency-level}

The level of a proficiency (swords, heavy armor, lockpicking). Only players train proficiencies; any other entity has the starting level of the proficiency. Player overrides this. Conditions and requirements ask this, and a UI can too

### bool has_entity_tag( tag_id: int ) {#method-has-entity-tag}

*No description yet.*

### void add_entity_tag( tag_id: int ) {#method-add-entity-tag}

*No description yet.*

### void remove_entity_tag( tag_id: int ) {#method-remove-entity-tag}

*No description yet.*

### Dictionary entity_tags_to_save() {#method-entity-tags-to-save}

The tags added or removed while playing (the definition's own tags come back from the definition)

### void entity_tags_from_save( data: Dictionary ) {#method-entity-tags-from-save}

*No description yet.*

### float modify_gain( channel: String, amount: float ) {#method-modify-gain}

What this entity gains on a gain channel (see GainChannels): experience, currency, loot, threat ...

### int modify_gain_int( channel: String, amount: int, probabilistic: bool = false ) {#method-modify-gain-int}

modify_gain for whole numbers; `probabilistic` turns a fraction into a chance of one more

### bool set_stat_base( stat_id: int, value: float ) {#method-set-stat-base}

*No description yet.*

### void set_custom_gravity( new_gravity: float ) {#method-set-custom-gravity}

*No description yet.*

### void reset_custom_gravity() {#method-reset-custom-gravity}

*No description yet.*

### float get_custom_gravity() {#method-get-custom-gravity}

*No description yet.*

### float get_weapon_damage() {#method-get-weapon-damage}

*No description yet.*

### float roll_weapon_damage() {#method-roll-weapon-damage}

*No description yet.*

### bool has_weapon_equipped() {#method-has-weapon-equipped}

*No description yet.*

### int get_equipped_weapon_damage_type() {#method-get-equipped-weapon-damage-type}

Get the damage type from the first equipped weapon, or empty string if none

### bool has_weapon_with_damage_type( damage_type: int ) {#method-has-weapon-with-damage-type}

Check if any equipped weapon deals a specific damage type

### float get_current_health() {#method-get-current-health}

*No description yet.*

### float get_max_health() {#method-get-max-health}

*No description yet.*

### float get_health_percentage() {#method-get-health-percentage}

*No description yet.*

### bool is_health_below( threshold: float ) {#method-is-health-below}

*No description yet.*

### bool is_health_above( threshold: float ) {#method-is-health-above}

*No description yet.*

### float get_pool_current( pool_id: int ) {#method-get-pool-current}

*No description yet.*

### float get_pool_max( pool_id: int ) {#method-get-pool-max}

*No description yet.*

### float get_pool_percentage( pool_id: int ) {#method-get-pool-percentage}

*No description yet.*

### Dictionary can_afford_resource( pool_id: int, amount: float ) {#method-can-afford-resource}

*No description yet.*

### bool has_pool( pool_id: int ) {#method-has-pool}

*No description yet.*

### bool is_master_pool( pool_id: int ) {#method-is-master-pool}

*No description yet.*

### PoolInstance get_master_pool() {#method-get-master-pool}

*No description yet.*

### float add_pool_value( pool_id: int, amount: float ) {#method-add-pool-value}

*No description yet.*

### bool remove_pool_value( pool_id: int, amount: float ) {#method-remove-pool-value}

*No description yet.*

### bool is_resource_pool( pool_id: int ) {#method-is-resource-pool}

*No description yet.*

### Array[int] get_resource_pool_ids() {#method-get-resource-pool-ids}

*No description yet.*

### AbilityInstance get_ability_by_id( ability_id: int ) {#method-get-ability-by-id}

*No description yet.*

### bool has_ability_by_id( ability_id: int ) {#method-has-ability-by-id}

*No description yet.*

### AbilityInstance get_basic_attack() {#method-get-basic-attack}

*No description yet.*

### Array[AbilityInstance] get_active_abilities() {#method-get-active-abilities}

*No description yet.*

### Array[AbilityInstance] get_passive_abilities() {#method-get-passive-abilities}

*No description yet.*

### bool add_ability( ability: AbilityInstance ) {#method-add-ability}

*No description yet.*

### bool swap_basic_attack( ability: AbilityInstance ) {#method-swap-basic-attack}

*No description yet.*

### bool remove_basic_attack() {#method-remove-basic-attack}

*No description yet.*

### bool remove_ability_by_id( ability_id: int ) {#method-remove-ability-by-id}

*No description yet.*

### bool move_to_position( target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0 ) {#method-move-to-position}

*No description yet.*

### bool move_keep_facing( target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0 ) {#method-move-keep-facing}

*No description yet.*

### bool backpedal_to( target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0 ) {#method-backpedal-to}

*No description yet.*

### bool strafe_to( target_pos: Vector3, strafe_direction: int, should_walk: bool = false, min_distance: float = -1.0 ) {#method-strafe-to}

*No description yet.*

### bool follow_target( target_to_follow: Node3D, min_distance: float = 2.0, should_walk: bool = false ) {#method-follow-target}

*No description yet.*

### bool move_to_position_sync( target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0 ) {#method-move-to-position-sync}

Synchronous movement to position (no await) - for behavior tasks

### bool move_keep_facing_sync( target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0 ) {#method-move-keep-facing-sync}

Synchronous movement keeping facing direction - for behavior tasks

### bool backpedal_to_sync( target_pos: Vector3, should_walk: bool = false, min_distance: float = -1.0 ) {#method-backpedal-to-sync}

Synchronous backpedal movement - for behavior tasks

### bool strafe_to_sync( target_pos: Vector3, strafe_direction: int, should_walk: bool = false, min_distance: float = -1.0 ) {#method-strafe-to-sync}

Synchronous strafe movement - for behavior tasks

### void stop_moving() {#method-stop-moving}

*No description yet.*

### void jump() {#method-jump}

Performs a jump if the entity is on the floor Uses the exported jump_velocity value

### void entity_face_direction( look_at_direction: Vector3, speed: int = FaceTargetSpeed.INSTANT ) {#method-entity-face-direction}

*No description yet.*

### void entity_look_at_object( object: Node3D, speed: int = FaceTargetSpeed.INSTANT ) {#method-entity-look-at-object}

*No description yet.*

### void set_approach_distance( distance: float ) {#method-set-approach-distance}

*No description yet.*

### MovementState get_movement_state() {#method-get-movement-state}

*No description yet.*

### void change_movement_state( state_name: MovementStateComponent.MovementStateName ) {#method-change-movement-state}

*No description yet.*

### Dictionary get_aim( max_range: float = 0.0 ) {#method-get-aim}

*No description yet.*

### void request_action_state_change( state_name: ModularCombatScript.ActionStateName, data: Dictionary = {} ) {#method-request-action-state-change}

*No description yet.*

### void set_stealth_prevention( prevent: bool ) {#method-set-stealth-prevention}

*No description yet.*

### bool is_stealth_prevented() {#method-is-stealth-prevented}

*No description yet.*

### bool is_immobile() {#method-is-immobile}

*No description yet.*

### void cast_interrupted() {#method-cast-interrupted}

*No description yet.*

### void stop_cast() {#method-stop-cast}

*No description yet.*

### void set_target( new_target: Variant ) {#method-set-target}

*No description yet.*

### void enter_combat( target_entity: Entity = null ) {#method-enter-combat}

*No description yet.*

### void exit_combat() {#method-exit-combat}

*No description yet.*

### void change_combat_state( value: bool ) {#method-change-combat-state}

*No description yet.*

### void set_encounter( encounter: CombatSession ) {#method-set-encounter}

Set the current encounter and notify all combat reactions

### void leave_encounter() {#method-leave-encounter}

Remove entity from current encounter

### Node3D get_attachment_point_node( location: VFXSelection.VfxLocation ) {#method-get-attachment-point-node}

*No description yet.*

### DamageResult take_damage( result: DamageResult ) {#method-take-damage}

Completes the DamageResult for a hit on this entity (see StatsComponent.take_damage). Returns null if it aborted

### HealingResult take_healing( result: HealingResult ) {#method-take-healing}

Completes the HealingResult for a heal on this entity (see StatsComponent.take_healing). Returns null if it aborted

### bool can_apply_school_effect( school_id: int, source_entity: Variant = null, effect: EffectInstance = null ) {#method-can-apply-school-effect}

*No description yet.*

### EffectInstance get_effect( effect_id: int ) {#method-get-effect}

*No description yet.*

### EffectInstance get_effect_from_caller( effect_id: int, originator: Entity ) {#method-get-effect-from-caller}

*No description yet.*

### void reduce_effect_stacks( effect_instance: EffectInstance, stacks_to_remove: int ) {#method-reduce-effect-stacks}

*No description yet.*

### Array[EffectInstance] get_active_effects_by_type( effect_type: String ) {#method-get-active-effects-by-type}

*No description yet.*

### Array[EffectInstance] get_all_active_effects() {#method-get-all-active-effects}

*No description yet.*

### void remove_all_effects() {#method-remove-all-effects}

*No description yet.*

### Dictionary apply_status_effect( status_effect: int, base_duration: float, source_entity: Variant = null, effect: EffectInstance = null ) {#method-apply-status-effect}

Asks the stat system whether a status lands and for how long (immunity, tenacity, diminishing returns): {can_apply, effective_duration, ...}

### bool is_immune_to_status_effect( status_effect_id: int ) {#method-is-immune-to-status-effect}

*No description yet.*

### bool is_immune_to_damage_type( damage_type: int ) {#method-is-immune-to-damage-type}

*No description yet.*

### bool is_immune_to_school_type( school_id: int ) {#method-is-immune-to-school-type}

*No description yet.*

### bool activate_immunity( immunity_id: int, duration: float = -1.0 ) {#method-activate-immunity}

*No description yet.*

### bool deactivate_immunity( immunity_id: int ) {#method-deactivate-immunity}

*No description yet.*

### bool is_incapacitated() {#method-is-incapacitated}

*No description yet.*

### bool is_silenced() {#method-is-silenced}

*No description yet.*

### bool is_rooted() {#method-is-rooted}

*No description yet.*

### bool is_crippled() {#method-is-crippled}

*No description yet.*

### bool is_blinded() {#method-is-blinded}

*No description yet.*

### bool is_fleeing() {#method-is-fleeing}

*No description yet.*

### bool is_disoriented() {#method-is-disoriented}

*No description yet.*

### bool is_disarmed() {#method-is-disarmed}

*No description yet.*

### Dictionary get_status_effect_summary() {#method-get-status-effect-summary}

*No description yet.*

### Array[String] get_active_status_effects() {#method-get-active-status-effects}

*No description yet.*

### bool has_any_cc_effects() {#method-has-any-cc-effects}

*No description yet.*

### bool has_movement_impairing_effects() {#method-has-movement-impairing-effects}

*No description yet.*

### bool has_ability_blocking_effects() {#method-has-ability-blocking-effects}

*No description yet.*

### bool can_use_weapon_abilities() {#method-can-use-weapon-abilities}

*No description yet.*

### InventoryComponent get_inventory() {#method-get-inventory}

*No description yet.*

### bool has_inventory() {#method-has-inventory}

*No description yet.*

### int count_item( item_id: int ) {#method-count-item}

How many of an item (by definition id) the entity carries in its inventory

### bool equip_item( item_instance: ItemInstance, forced: bool = false ) {#method-equip-item}

*No description yet.*

### bool equip_item_to_slot( item_instance: ItemInstance, slot_data: EquipmentSlotInstance, forced: bool = false ) {#method-equip-item-to-slot}

*No description yet.*

### ItemInstance unequip_slot( slot_data: EquipmentSlotInstance ) {#method-unequip-slot}

*No description yet.*

### bool unequip_item( item_instance: ItemInstance ) {#method-unequip-item}

*No description yet.*

### bool equip_item_instance( item_instance: ItemInstance ) {#method-equip-item-instance}

The names the behaviour tasks use for the same two actions

### bool unequip_item_instance( item_instance: ItemInstance ) {#method-unequip-item-instance}

*No description yet.*

### Array[ItemInstance] get_equipped_items() {#method-get-equipped-items}

*No description yet.*

### void clear_all_equipment() {#method-clear-all-equipment}

*No description yet.*

### Array[EquipmentSlotInstance] get_equipment_slots_by_definition( slot_def: EquipmentSlotDefinition ) {#method-get-equipment-slots-by-definition}

*No description yet.*

### bool has_item_equipped_in_slot_definition( slot_def: EquipmentSlotDefinition ) {#method-has-item-equipped-in-slot-definition}

*No description yet.*

### ItemInstance get_equipped_item_from_slot_definition( slot_def: EquipmentSlotDefinition ) {#method-get-equipped-item-from-slot-definition}

*No description yet.*

### Array[ItemInstance] get_all_equipped_items_from_slot_definition( slot_def: EquipmentSlotDefinition ) {#method-get-all-equipped-items-from-slot-definition}

*No description yet.*

### ItemInstance get_equipped_weapon_from_slot( slot_def: EquipmentSlotDefinition ) {#method-get-equipped-weapon-from-slot}

*No description yet.*

### Array[ItemInstance] get_equipped_weapons() {#method-get-equipped-weapons}

*No description yet.*

### bool has_any_weapon_equipped() {#method-has-any-weapon-equipped}

*No description yet.*

### bool has_weapon_equipped_in_slot( slot_def: EquipmentSlotDefinition ) {#method-has-weapon-equipped-in-slot}

*No description yet.*

### void sync_animation_state() {#method-sync-animation-state}

Synchronize animation state with current entity configuration Call this after equipment changes (Player) or on initialization (NPC)

### Dictionary get_animation_tags() {#method-get-animation-tags}

Virtual method to get animation tags for this entity Override in subclasses (NPC, Player) to provide appropriate source Returns a Dictionary with keys: attack_tag, stance_tag, aim_tag, reload_tag, is_ranged Returns empty dictionary if no tags available (will use defaults)

### String get_stance_tag() {#method-get-stance-tag}

Get the stance tag for combat idle animations Virtual method - override in subclasses for different sources

### String get_attack_tag() {#method-get-attack-tag}

Get the attack tag for weapon animations Virtual method - override in subclasses for different sources

### void entity_death( announce: bool = true ) {#method-entity-death}

`announce` false puts a saved corpse back (loading): the entity becomes a corpse but nobody is told it died

### void resurrect() {#method-resurrect}

*No description yet.*

### void set_current_target_hover() {#method-set-current-target-hover}

*No description yet.*

### void set_current_target_on() {#method-set-current-target-on}

*No description yet.*

### void set_current_target_off() {#method-set-current-target-off}

*No description yet.*

### void set_map_marker_icon( type: Entity.MapMarkerType ) {#method-set-map-marker-icon}

*No description yet.*

### String get_current_surface_type() {#method-get-current-surface-type}

*No description yet.*

### Dictionary to_save_data() {#method-to-save-data}

*No description yet.*

### void from_save_data( save_data: Dictionary, system_hub: GameHost.SystemHub ) {#method-from-save-data}

*No description yet.*

