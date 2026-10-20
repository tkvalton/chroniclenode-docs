<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GameplayConfig

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Configuration for gameplay rules and mechanics

## Properties

| | | |
|---|---|---|
| `bool` | [item_weight_enabled](#prop-item-weight-enabled) | `false` |
| `bool` | [dropped_items_enabled](#prop-dropped-items-enabled) | `true` |
| `DroppedItemsVisualSytle` | [dropped_items_visual_style](#prop-dropped-items-visual-style) | `DroppedItemsVisualSytle.MESH` |
| `DroppedItemsPhysics` | [dropped_items_physics](#prop-dropped-items-physics) | `DroppedItemsPhysics.SETTLE_THEN_FREEZE` |
| `bool` | [dropped_items_pickup_walk_over](#prop-dropped-items-pickup-walk-over) | `true` |
| `bool` | [dropped_items_pickup_interact](#prop-dropped-items-pickup-interact) | `true` |
| `bool` | [dropped_items_pickup_mouse_over](#prop-dropped-items-pickup-mouse-over) | `false` |
| `bool` | [dropped_items_pickup_look_at](#prop-dropped-items-pickup-look-at) | `false` |
| `float` | [dropped_items_walk_over_radius](#prop-dropped-items-walk-over-radius) | `1.2` |
| `float` | [dropped_items_mouse_range](#prop-dropped-items-mouse-range) | `5.0` |
| `float` | [dropped_items_pickup_delay](#prop-dropped-items-pickup-delay) | `1.0` |
| `float` | [dropped_items_lifetime](#prop-dropped-items-lifetime) | `0.0` |
| `DroppedItemsLabelMode` | [dropped_items_label_mode](#prop-dropped-items-label-mode) | `DroppedItemsLabelMode.HOVER_AND_TARGET` |
| `float` | [dropped_items_scatter_radius](#prop-dropped-items-scatter-radius) | `1.0` |
| `int` | [dropped_items_max_in_world](#prop-dropped-items-max-in-world) | `0` |
| `bool` | [droped_items_saved_to_map](#prop-droped-items-saved-to-map) | `true` |
| `PackedScene` | [dropped_items_scene](#prop-dropped-items-scene) |  |
| `DurabilityMode` | [durability_mode](#prop-durability-mode) | `DurabilityMode.OFF` |
| `float` | [durability_loss_per_hit](#prop-durability-loss-per-hit) | `1.0` |
| `float` | [durability_loss_chance](#prop-durability-loss-chance) | `1.0` |
| `bool` | [durability_one_piece_per_hit](#prop-durability-one-piece-per-hit) | `false` |
| `BrokenBehavior` | [durability_broken_behavior](#prop-durability-broken-behavior) | `BrokenBehavior.NO_EFFECT` |
| `float` | [durability_repair_cost_multiplier](#prop-durability-repair-cost-multiplier) | `0.25` |
| `InventoryStyle` | [character_inventory_style](#prop-character-inventory-style) | `InventoryStyle.new()` |
| `InventoryStyle` | [npc_inventory_style](#prop-npc-inventory-style) | `InventoryStyle.new()` |
| `InventoryStyle` | [container_inventory_style](#prop-container-inventory-style) | `InventoryStyle.new()` |
| `CalculationFormula` | [item_budget_formula](#prop-item-budget-formula) |  |
| `LootLevelSource.Source` | [default_npc_loot_level](#prop-default-npc-loot-level) | `LootLevelSource.Source.HOLDER` |
| `LootLevelSource.Source` | [default_object_loot_level](#prop-default-object-loot-level) | `LootLevelSource.Source.PARTY` |
| `int` | [fallback_item_level](#prop-fallback-item-level) | `1` |
| `int` | [max_active_quests](#prop-max-active-quests) | `20` |
| `bool` | [quest_markers_enabled](#prop-quest-markers-enabled) | `true` |
| `QuestFailureRule` | [default_quest_failure](#prop-default-quest-failure) | `QuestFailureRule.RETRY` |
| `float` | [quest_game_over_delay](#prop-quest-game-over-delay) | `3.0` |
| `bool` | [allow_quest_abandon](#prop-allow-quest-abandon) | `true` |
| `bool` | [show_quest_levels](#prop-show-quest-levels) | `true` |
| `int` | [quest_level_trivial_gap](#prop-quest-level-trivial-gap) | `5` |
| `int` | [quest_level_easy_gap](#prop-quest-level-easy-gap) | `2` |
| `int` | [quest_level_hard_gap](#prop-quest-level-hard-gap) | `3` |
| `int` | [quest_level_deadly_gap](#prop-quest-level-deadly-gap) | `6` |
| `bool` | [auto_track_quest_objectives](#prop-auto-track-quest-objectives) | `true` |
| `bool` | [developer_commands](#prop-developer-commands) | `false` |
| `bool` | [fog_of_war_enabled](#prop-fog-of-war-enabled) | `true` |
| `int` | [fog_layers](#prop-fog-layers) | `2` |
| `bool` | [fog_persist_exploration](#prop-fog-persist-exploration) | `true` |
| `Color` | [fog_shroud_color](#prop-fog-shroud-color) | `Color(0.0, 0.0, 0.0, 1.0)` |
| `Color` | [fog_explored_color](#prop-fog-explored-color) | `Color(0.0, 0.0, 0.0, 0.6)` |
| `FogEdgeQuality` | [fog_edge_quality](#prop-fog-edge-quality) | `FogEdgeQuality.MEDIUM` |
| `float` | [fog_edge_softness](#prop-fog-edge-softness) | `0.3` |
| `float` | [fog_blur_radius](#prop-fog-blur-radius) | `1.0` |
| `int` | [fog_pixels_per_unit](#prop-fog-pixels-per-unit) | `4` |
| `float` | [fog_update_interval](#prop-fog-update-interval) | `0.1` |
| `FogEntityHideMode` | [fog_entity_hide_mode](#prop-fog-entity-hide-mode) | `FogEntityHideMode.RIG_HIDE` |
| `float` | [fog_fade_duration](#prop-fog-fade-duration) | `0.3` |
| `bool` | [fog_keep_collision_active](#prop-fog-keep-collision-active) | `true` |
| `bool` | [fog_hide_nameplates](#prop-fog-hide-nameplates) | `true` |
| `bool` | [fog_hide_map_markers](#prop-fog-hide-map-markers) | `true` |
| `bool` | [allow_manual_save](#prop-allow-manual-save) | `true` |
| `bool` | [allow_save_during_combat](#prop-allow-save-during-combat) | `false` |
| `int` | [max_save_slots](#prop-max-save-slots) | `10` |
| `String` | [save_directory](#prop-save-directory) | `"user://saves/"` |
| `bool` | [save_on_area_transition](#prop-save-on-area-transition) | `false` |
| `Texture2D` | [hitbox_outline_texture](#prop-hitbox-outline-texture) | `null` |
| `Texture2D` | [selection_marker_texture](#prop-selection-marker-texture) | `null` |
| `Texture2D` | [target_marker_texture](#prop-target-marker-texture) | `null` |
| `Material` | [hover_outline_material](#prop-hover-outline-material) | `null` |
| `Material` | [selection_outline_material](#prop-selection-outline-material) | `null` |
| `Texture2D` | [max_distance_circle_marker](#prop-max-distance-circle-marker) | `null` |
| `Material` | [attack_ribbon_material](#prop-attack-ribbon-material) | `null` |
| `Material` | [path_material](#prop-path-material) | `null` |
| `Texture2D` | [destination_material](#prop-destination-material) | `null` |
| `Array[Resource]` | [ability_target_textures](#prop-ability-target-textures) | `[]` |
| `int` | [max_party_size](#prop-max-party-size) | `4` |
| `bool` | [reserve_experience_enabled](#prop-reserve-experience-enabled) | `true` |
| `float` | [reserve_experience_percentage](#prop-reserve-experience-percentage) | `0.5` |
| `int` | [max_reserve_companions](#prop-max-reserve-companions) | `6` |
| `InventorySharing` | [inventory_sharing](#prop-inventory-sharing) | `InventorySharing.PER_CHARACTER` |
| `int` | [shared_bag_slots](#prop-shared-bag-slots) | `40` |
| `ProfessionsScope` | [professions_scope](#prop-professions-scope) | `ProfessionsScope.PARTY` |
| `bool` | [allow_character_switching](#prop-allow-character-switching) | `true` |
| `bool` | [allow_switching_in_combat](#prop-allow-switching-in-combat) | `true` |
| `bool` | [has_main_character](#prop-has-main-character) | `true` |
| `float` | [companion_follow_distance](#prop-companion-follow-distance) | `3.0` |
| `float` | [companion_assist_range](#prop-companion-assist-range) | `25.0` |
| `bool` | [companions_use_abilities](#prop-companions-use-abilities) | `true` |
| `bool` | [use_character_creation_ui](#prop-use-character-creation-ui) | `true` |
| `Array[CharacterDefinition]` | [starting_party_composition](#prop-starting-party-composition) | `[]` |
| `int` | [starting_map_id](#prop-starting-map-id) | `5754345` |
| `int` | [max_level](#prop-max-level) | `50` |
| `Dictionary` | [experience_per_level](#prop-experience-per-level) | `{}` |
| `KillExperienceMode` | [kill_experience_mode](#prop-kill-experience-mode) | `KillExperienceMode.FIXED` |
| `bool` | [kill_experience_falloff](#prop-kill-experience-falloff) | `false` |
| `NpcScalingMode` | [npc_level_scaling](#prop-npc-level-scaling) | `NpcScalingMode.OFF` |
| `ScalingReference` | [scaling_reference](#prop-scaling-reference) | `ScalingReference.PARTY_AVERAGE` |
| `int` | [scale_up_within_levels](#prop-scale-up-within-levels) | `3` |
| `int` | [scale_down_within_levels](#prop-scale-down-within-levels) | `3` |
| `bool` | [rescale_npcs_on_respawn](#prop-rescale-npcs-on-respawn) | `true` |
| `bool` | [rescale_npcs_on_party_change](#prop-rescale-npcs-on-party-change) | `true` |
| `int` | [default_npc_growth_profile_id](#prop-default-npc-growth-profile-id) | `GrowthProfile.ID_DEFAULT` |
| `CameraLogic` | [camera_logic](#prop-camera-logic) | `null` |
| `ControllerLogic` | [player_controller_logic](#prop-player-controller-logic) | `null` |
| `int` | [action_bar_slot_count](#prop-action-bar-slot-count) | `30` |
| `ActionBarArrangement` | [action_bar_arrangement](#prop-action-bar-arrangement) | `ActionBarArrangement.FREE` |
| `bool` | [action_bar_auto_fill](#prop-action-bar-auto-fill) | `false` |
| `PlayerBasicAttack` | [player_basic_attack](#prop-player-basic-attack) | `PlayerBasicAttack.AUTO_ATTACK` |
| `float` | [look_drag_threshold](#prop-look-drag-threshold) | `10.0` |
| `bool` | [log_input_routing](#prop-log-input-routing) | `false` |
| `CombatStyle` | [combat_style](#prop-combat-style) | `CombatStyle.REAL_TIME` |
| `DeathBehavior` | [death_behavior](#prop-death-behavior) | `DeathBehavior.RESPAWN_CHECKPOINT` |
| `Array[DeathCurrencyLoss]` | [death_currency_losses](#prop-death-currency-losses) | `[]` |
| `float` | [death_experience_penalty](#prop-death-experience-penalty) | `0.0` |
| `DeathItemLoss` | [death_item_loss](#prop-death-item-loss) | `DeathItemLoss.KEEP` |
| `DeathItemLoss` | [death_equipment_loss](#prop-death-equipment-loss) | `DeathItemLoss.KEEP` |
| `float` | [death_item_loss_chance](#prop-death-item-loss-chance) | `1.0` |
| `float` | [death_durability_loss](#prop-death-durability-loss) | `0.0` |
| `BreathUsers` | [breath_users](#prop-breath-users) | `BreathUsers.PLAYERS` |
| `float` | [breath_duration](#prop-breath-duration) | `20.0` |
| `float` | [breath_recovery_speed](#prop-breath-recovery-speed) | `4.0` |
| `int` | [drowning_effect_id](#prop-drowning-effect-id) | `0` |
| `bool` | [use_threat_system](#prop-use-threat-system) | `true` |
| `float` | [heal_threat_multiplier](#prop-heal-threat-multiplier) | `0.5` |
| `float` | [damage_threat_multiplier](#prop-damage-threat-multiplier) | `1.0` |
| `DamageResult.DamageBasis` | [threat_basis](#prop-threat-basis) | `DamageResult.DamageBasis.AFTER_TAKEN` |
| `DamageResult.DamageBasis` | [leech_basis](#prop-leech-basis) | `DamageResult.DamageBasis.HEALTH_ONLY` |
| `DamageResult.DamageBasis` | [reflect_basis](#prop-reflect-basis) | `DamageResult.DamageBasis.HEALTH_ONLY` |
| `int` | [max_reflect_chain](#prop-max-reflect-chain) | `1` |
| `bool` | [zero_damage_counts_as_hit](#prop-zero-damage-counts-as-hit) | `true` |
| `float` | [minimum_damage](#prop-minimum-damage) | `0.0` |
| `bool` | [round_damage](#prop-round-damage) | `false` |
| `CapacityRule` | [capacity_change_rule](#prop-capacity-change-rule) | `CapacityRule.KEEP_PERCENTAGE` |
| `CapacityRule` | [level_up_capacity_rule](#prop-level-up-capacity-rule) | `CapacityRule.ADD_GAIN` |
| `CombatEvent.Detail` | [combat_log_detail](#prop-combat-log-detail) | `CombatEvent.Detail.NORMAL` |
| `CombatLogKeep` | [combat_log_keep](#prop-combat-log-keep) | `CombatLogKeep.DISCARD` |
| `int` | [combat_log_keep_fights](#prop-combat-log-keep-fights) | `5` |
| `int` | [combat_log_events_per_fight](#prop-combat-log-events-per-fight) | `2000` |
| `bool` | [use_hit_system](#prop-use-hit-system) | `false` |
| `float` | [melee_range](#prop-melee-range) | `5.0` |
| `float` | [base_melee_hit_chance](#prop-base-melee-hit-chance) | `95.0` |
| `float` | [base_ranged_hit_chance](#prop-base-ranged-hit-chance) | `95.0` |
| `float` | [minimum_hit_chance](#prop-minimum-hit-chance) | `5.0` |
| `float` | [maximum_hit_chance](#prop-maximum-hit-chance) | `100.0` |
| `LevelGapMode` | [level_gap_mode](#prop-level-gap-mode) | `LevelGapMode.NONE` |
| `bool` | [glancing_hits_enabled](#prop-glancing-hits-enabled) | `false` |
| `float` | [glancing_chance](#prop-glancing-chance) | `30.0` |
| `float` | [glancing_reduction](#prop-glancing-reduction) | `40.0` |
| `bool` | [glancing_other_effects_apply](#prop-glancing-other-effects-apply) | `true` |
| `bool` | [npc_lod_enabled](#prop-npc-lod-enabled) | `true` |
| `float` | [lod_distance_high](#prop-lod-distance-high) | `30.0` |
| `float` | [lod_distance_medium](#prop-lod-distance-medium) | `100.0` |
| `float` | [lod_distance_low](#prop-lod-distance-low) | `250.0` |
| `float` | [lod_distance_minimal](#prop-lod-distance-minimal) | `400.0` |
| `float` | [lod_interval_high](#prop-lod-interval-high) | `0.1` |
| `float` | [lod_interval_medium](#prop-lod-interval-medium) | `0.5` |
| `float` | [lod_interval_low](#prop-lod-interval-low) | `1.0` |
| `float` | [lod_interval_minimal](#prop-lod-interval-minimal) | `2.0` |
| `float` | [lod_optimization_interval](#prop-lod-optimization-interval) | `1.0` |
| `int` | [lod_controllers_per_batch](#prop-lod-controllers-per-batch) | `10` |

## Methods

| | |
|---|---|
| `float` | [get_fog_edge_threshold](#method-get-fog-edge-threshold)() |
| `float` | [get_fog_edge_range](#method-get-fog-edge-range)() |
| `float` | [get_lod_distance](#method-get-lod-distance)( `level: LODLevel` ) |
| `float` | [get_lod_interval](#method-get-lod-interval)( `level: LODLevel` ) |
| `LODLevel` | [calculate_lod_level](#method-calculate-lod-level)( `distance: float` ) |
| `bool` | [main_character_exists](#method-main-character-exists)() |
| `float` | [get_kill_experience](#method-get-kill-experience)( `npc_level: int, fixed_worth: int = 0` ) |
| `float` | [get_kill_experience_falloff_factor](#method-get-kill-experience-falloff-factor)( `levels_below: int` ) |
| `float` | [get_item_budget](#method-get-item-budget)( `item_level: int` ) |
| `int` | [get_scaled_npc_level](#method-get-scaled-npc-level)( `base_level: int, reference_level: int, rank_types: Array = []` ) |
| `int` | [get_experience_for_level](#method-get-experience-for-level)( `level: int` ) |
| `int` | [get_total_experience_for_level](#method-get-total-experience-for-level)( `level: int` ) |
| `void` | [set_experience_for_level](#method-set-experience-for-level)( `level: int, xp: int` ) |
| `void` | [reset_experience_to_defaults](#method-reset-experience-to-defaults)() |
| `bool` | [has_custom_experience](#method-has-custom-experience)( `level: int` ) |
| `GameplayConfig` | [create_default](#method-create-default)() *static* |
| `GameplayConfig` | [get_config](#method-get-config)() *static* |
| `Array[String]` | [get_input_setup_warnings](#method-get-input-setup-warnings)() |

## Enumerations

### enum KillExperienceMode {#enum-killexperiencemode}

How much experience a defeated NPC gives

- **FIXED** = `0` - Each NPC says: its Experience worth (the amount does not change with its level)
- **PER_LEVEL_TABLE** = `1` - A table: the experience of an NPC of each level
- **FORMULA** = `2` - A formula (a curve) that gets the level of the NPC and returns the experience

### enum NpcScalingMode {#enum-npcscalingmode}

Whether the levels of NPCs follow the level of the player

- **OFF** = `0` - NPCs keep the level of their definition
- **SCALE_UP** = `1` - NPCs weaker than the player are raised towards the player's level
- **SCALE_DOWN** = `2` - NPCs stronger than the player are lowered towards the player's level
- **BOTH** = `3` - Both

### enum ScalingReference {#enum-scalingreference}

Whose level the NPCs scale to

- **PARTY_AVERAGE** = `0` - The average level of the party (rounded)
- **PARTY_HIGHEST** = `1` - The highest level in the party
- **CURRENT_PLAYER** = `2` - The character the player controls

### enum DroppedItemsVisualSytle {#enum-droppeditemsvisualsytle}

What a dropped item looks like: its model, or a flat picture of its icon that always faces the camera.

- **MESH** = `0`
- **SPRITE** = `1`

### enum DroppedItemsPhysics {#enum-droppeditemsphysics}

What physics does to a dropped item. Place on ground: it is put on the ground under where it is dropped and stays still. Settle then freeze: it is thrown, falls and bounces, and is frozen once it comes to rest. Always simulated: it stays a physics body for as long as it lies there.

- **PLACE_ON_GROUND** = `0`
- **SETTLE_THEN_FREEZE** = `1`
- **ALWAYS_SIMULATED** = `2`

### enum DroppedItemsLabelMode {#enum-droppeditemslabelmode}

When the name of a dropped item is shown above it: never, only when it is hovered, looked at or the interact target, or always.

- **NEVER** = `0`
- **HOVER_AND_TARGET** = `1`
- **ALWAYS** = `2`

### enum CombatStyle {#enum-combatstyle}

The options of combat style: real time, turn based.

- **REAL_TIME** = `0`
- **TURN_BASED** = `1`

### enum InventorySharing {#enum-inventorysharing}

What the members of the party share

- **PER_CHARACTER** = `0` - Every character has a bag and money of their own
- **SHARED_CURRENCY** = `1` - One purse for the whole party; every character keeps their own bag
- **SHARED_CURRENCY_AND_BAG** = `2` - One purse and one bag for the whole party (equipment stays on the character)

### enum ProfessionsScope {#enum-professionsscope}

Who owns the professions

- **PARTY** = `0` - The whole party shares one set of professions, recipes and levels
- **CHARACTER** = `1` - Every character has professions, recipes and levels of their own

### enum ActionBarArrangement {#enum-actionbararrangement}

Who arranges the action bar

- **FREE** = `0` - The player drags abilities and items on and off the slots (the plan of a class and the effects can lock slots)
- **FIXED** = `1` - The player cannot change any slot: only the plan of the class, effects and events fill the bar

### enum PlayerBasicAttack {#enum-playerbasicattack}

What the built-in basic attack of the player (and of the party members) is

- **AUTO_ATTACK** = `0` - The basic attack of the weapon: an auto attack when the player clicks an enemy or holds the attack button
- **OFF** = `1` - There is no built-in basic attack: the first slot of the action bar is an ordinary slot, and the attacks are whatever the game puts on the slots

### enum DeathBehavior {#enum-deathbehavior}

The options of death behavior: game over, respawn checkpoint, permadeath.

- **GAME_OVER** = `0`
- **RESPAWN_CHECKPOINT** = `1`
- **PERMADEATH** = `2`

### enum CombatLogKeep {#enum-combatlogkeep}

What happens to the record of a fight when it ends (combat_log_keep)

- **DISCARD** = `0`
- **LAST_FIGHTS** = `1`
- **PLAY_SESSION** = `2`

### enum QuestFailureRule {#enum-questfailurerule}

What a failed quest means by default (a quest can say otherwise itself)

- **FINAL** = `0`
- **RETRY** = `1`

### enum QuestLevelDifficulty {#enum-questleveldifficulty}

How hard a quest is for a player, by the quest's level against the player's

- **TRIVIAL** = `0`
- **EASY** = `1`
- **NORMAL** = `2`
- **HARD** = `3`
- **DEADLY** = `4`

### enum LevelGapMode {#enum-levelgapmode}

What happens to the current value of a pool when its maximum changes How the difference in level between the attacker and the target changes the chance to hit (Hit Rules)

- **NONE** = `0` - Levels do not matter
- **PER_LEVEL** = `1` - A number of points for every level the target is above the attacker, and optionally for every level it is below
- **TABLE** = `2` - A table: the change in chance for each size of the gap
- **FORMULA** = `3` - A formula that gets the gap (and can read both levels) and returns the change in chance

### enum CapacityRule {#enum-capacityrule}

The options of capacity rule: keep percentage, add gain, keep current, full restore.

- **KEEP_PERCENTAGE** = `0` - Current stays the same share of the maximum (equipping +50 health at 60/100 gives 90/150; unequipping undoes it)
- **ADD_GAIN** = `1` - A gained maximum is added to the current value (60/100 + 50 = 110/150); a lost maximum only caps it
- **KEEP_CURRENT** = `2` - Current is untouched unless it exceeds the new maximum
- **FULL_RESTORE** = `3` - A gained maximum fills the pool

### enum LODLevel {#enum-lodlevel}

LOD levels for NPC behavior optimization (distance-based)

- **HIGH_DETAIL** = `0` - Full behavior, close to player
- **MEDIUM_DETAIL** = `1` - Reduced updates, medium distance
- **LOW_DETAIL** = `2` - Basic behavior only, far distance
- **MINIMAL_DETAIL** = `3` - Very basic updates, very far
- **CULLED** = `4` - Paused behavior, extremely far

### enum FogState {#enum-fogstate}

Fog visibility states (fog-based)

- **VISIBLE** = `0` - In player vision range - fully visible
- **EXPLORED** = `1` - Previously seen but not in vision - greyed/hidden
- **SHROUDED** = `2` - Never seen - completely hidden

### enum FogEntityHideMode {#enum-fogentityhidemode}

How entities are hidden when in fog

- **RIG_HIDE** = `0` - Hide the rig node (fast, keeps collision)
- **SHADER_FADE** = `1` - Animate transparency (smooth, more expensive)
- **FULL_HIDE** = `2` - Hide entire entity (may affect collision)

### enum FogEdgeQuality {#enum-fogedgequality}

Fog edge quality - controls smoothness of fog boundaries

- **SHARP** = `0` - No smoothing - pixelated edges (fastest)
- **LOW** = `1` - Basic smoothing - slight blur
- **MEDIUM** = `2` - Moderate smoothing - balanced
- **HIGH** = `3` - High quality smoothing - smooth edges
- **ULTRA** = `4` - Maximum quality - very smooth (most expensive)

### enum DurabilityMode {#enum-durabilitymode}

Whether equipment wears out: off, or it loses durability when its owner deals and takes damage.

- **OFF** = `0`
- **ON_HITS** = `1`

### enum BrokenBehavior {#enum-brokenbehavior}

What happens to a piece of equipment that reaches 0 durability: it stops giving anything until repaired, it is taken off into the bag, or it is destroyed.

- **NO_EFFECT** = `0`
- **UNEQUIP** = `1`
- **DESTROY** = `2`

### enum DeathItemLoss {#enum-deathitemloss}

What happens to the items of a player who dies: they are kept, dropped on the ground around the body, or destroyed.

- **KEEP** = `0`
- **DROP** = `1`
- **DESTROY** = `2`

### enum BreathUsers {#enum-breathusers}

Who has to hold its breath where a movement volume asks for it (under water): nobody (breath is off), only the players, or everyone

- **NOBODY** = `0`
- **PLAYERS** = `1`
- **EVERYONE** = `2`

## Constants

- `const` **CONFIG_PATH** = `"res://src/data/config_data/gameplay_config.tres"` - The file the settings are saved in.
- `float` **DEFAULT_BUDGET_PER_LEVEL** = `20.0` - The budget per item level when the project has no formula of its own
- `Dictionary` **SETTING_DESCRIPTIONS** = `{` - Dictionary of setting descriptions for tooltips and help text

## Property descriptions

*Items &amp; Inventory*

### bool item_weight_enabled = false {#prop-item-weight-enabled}

(older switch: weight is a rule of the inventory styles below now, this one is not read)

*Dropped Items*

### bool dropped_items_enabled = true {#prop-dropped-items-enabled}

Items can lie in the world: the player can drop them, loot and events can leave them on the ground

### DroppedItemsVisualSytle dropped_items_visual_style = DroppedItemsVisualSytle.MESH {#prop-dropped-items-visual-style}

What a dropped item looks like: the model of the item, or a flat picture of its icon

### DroppedItemsPhysics dropped_items_physics = DroppedItemsPhysics.SETTLE_THEN_FREEZE {#prop-dropped-items-physics}

What physics does to a dropped item (see the options)

### bool dropped_items_pickup_walk_over = true {#prop-dropped-items-pickup-walk-over}

Picking up by walking over the item

### bool dropped_items_pickup_interact = true {#prop-dropped-items-pickup-interact}

Picking up with the interact key when the item is near

### bool dropped_items_pickup_mouse_over = false {#prop-dropped-items-pickup-mouse-over}

Picking up by clicking the item with the mouse (within the mouse range)

### bool dropped_items_pickup_look_at = false {#prop-dropped-items-pickup-look-at}

Picking up what the crosshair is on with the interact key (first person controllers), within the mouse range

### float dropped_items_walk_over_radius = 1.2 {#prop-dropped-items-walk-over-radius}

How close a character must come to pick an item up by walking over it

### float dropped_items_mouse_range = 5.0 {#prop-dropped-items-mouse-range}

How far away an item can be and still be picked up with the mouse or by looking at it

### float dropped_items_pickup_delay = 1.0 {#prop-dropped-items-pickup-delay}

Seconds after an item lands before it can be picked up (so an item that is dropped is not taken straight back)

### float dropped_items_lifetime = 0.0 {#prop-dropped-items-lifetime}

Seconds an item lies in the world before it disappears (0 = for ever)

### DroppedItemsLabelMode dropped_items_label_mode = DroppedItemsLabelMode.HOVER_AND_TARGET {#prop-dropped-items-label-mode}

When the name of a dropped item is shown above it

### float dropped_items_scatter_radius = 1.0 {#prop-dropped-items-scatter-radius}

How far from where they come from several dropped items are scattered

### int dropped_items_max_in_world = 0 {#prop-dropped-items-max-in-world}

The most dropped items in the world at once (0 = no limit). When it is passed the oldest one disappears

### bool droped_items_saved_to_map = true {#prop-droped-items-saved-to-map}

Are dropped items kept in the save and when the player leaves a world and comes back

### PackedScene dropped_items_scene {#prop-dropped-items-scene}

The scene a dropped item is made from (empty = the one of the toolkit). It must have a DroppedItem script on its root: copy the toolkit scene and change how it looks

*Durability*

### DurabilityMode durability_mode = DurabilityMode.OFF {#prop-durability-mode}

Off: nothing wears. On hits: the weapons of a character lose durability when it deals damage, the rest of its equipment when it takes damage. The numbers are on the equipment slots (Equipment Definitions &gt; Equipment Slots)

### float durability_loss_per_hit = 1.0 {#prop-durability-loss-per-hit}

How much durability a piece loses in a hit (multiplied by the loss multiplier of its slot)

### float durability_loss_chance = 1.0 {#prop-durability-loss-chance}

The chance that a piece wears in a hit (1 = every hit)

### bool durability_one_piece_per_hit = false {#prop-durability-one-piece-per-hit}

When a character takes damage only one random piece of its equipment wears, not all of them

### BrokenBehavior durability_broken_behavior = BrokenBehavior.NO_EFFECT {#prop-durability-broken-behavior}

What a piece of equipment that reaches 0 durability does

### float durability_repair_cost_multiplier = 0.25 {#prop-durability-repair-cost-multiplier}

What a vendor charges to repair: the vendor value of the item times the share that is missing times this

*Inventory Styles*

### InventoryStyle character_inventory_style = InventoryStyle.new() {#prop-character-inventory-style}

The rules of the bag of the characters (players and companions): how items take space, the weight and what happens above the limit. The default is a list of slots from the Bag Slots stat and no weight

### InventoryStyle npc_inventory_style = InventoryStyle.new() {#prop-npc-inventory-style}

The rules of the bag of NPCs (an NPC definition can have its own)

### InventoryStyle container_inventory_style = InventoryStyle.new() {#prop-container-inventory-style}

The rules of containers: chests, bodies and other objects (a container can have its own). In slots mode a container's own Max slots is its number of slots

*Item Generation*

### CalculationFormula item_budget_formula {#prop-item-budget-formula}

Turns the item level into the stat budget of a generated item (see ItemBudget): "Linear 20" gives 20 points of budget at level 1, 400 at level 20. A curve (hyperbolic, a soft cap) makes the high levels give less and less extra. Empty = Linear 20

### LootLevelSource.Source default_npc_loot_level = LootLevelSource.Source.HOLDER {#prop-default-npc-loot-level}

Where the item level of generated loot comes from when neither the loot table nor the rule of an NPC says (Holder = the level of the NPC)

### LootLevelSource.Source default_object_loot_level = LootLevelSource.Source.PARTY {#prop-default-object-loot-level}

The same for chests, crates and other objects (an object has no level of its own, so Holder falls back to the party)

### int fallback_item_level = 1 {#prop-fallback-item-level}

The item level used when a source cannot give one (no party yet, no world level)

*Quests*

### int max_active_quests = 20 {#prop-max-active-quests}

Maximum active quests allowed

### bool quest_markers_enabled = true {#prop-quest-markers-enabled}

Show quest markers on map/minimap

### QuestFailureRule default_quest_failure = QuestFailureRule.RETRY {#prop-default-quest-failure}

What happens to a quest that fails when the quest does not say (FINAL: it is over; RETRY: it can be taken again)

### float quest_game_over_delay = 3.0 {#prop-quest-game-over-delay}

Seconds between failing a quest that ends the game and the game over, so the player sees the quest fail first (0 = at once)

### bool allow_quest_abandon = true {#prop-allow-quest-abandon}

Players may give up a quest they are on (a quest can say otherwise itself)

### bool show_quest_levels = true {#prop-show-quest-levels}

Show the level of a quest next to its name (quests without a level never show one)

### int quest_level_trivial_gap = 5 {#prop-quest-level-trivial-gap}

Player levels above the quest's level from which the quest is trivial

### int quest_level_easy_gap = 2 {#prop-quest-level-easy-gap}

Player levels above the quest's level from which the quest is easy

### int quest_level_hard_gap = 3 {#prop-quest-level-hard-gap}

Quest levels above the player's level from which the quest is hard

### int quest_level_deadly_gap = 6 {#prop-quest-level-deadly-gap}

Quest levels above the player's level from which the quest is deadly

### bool auto_track_quest_objectives = true {#prop-auto-track-quest-objectives}

Quest objectives tracked automatically

*Developer*

### bool developer_commands = false {#prop-developer-commands}

The developer commands of the chat box (/give, /xp, /level, /money, /addtime, /settime, /quest). Turn them off for a release

*Fog of War*

### bool fog_of_war_enabled = true {#prop-fog-of-war-enabled}

Enable fog of war system

### int fog_layers = 2 {#prop-fog-layers}

Number of fog layers (1 = just shroud, 2 = shroud + explored fog)

### bool fog_persist_exploration = true {#prop-fog-persist-exploration}

Persist explored areas between sessions

### Color fog_shroud_color = Color(0.0, 0.0, 0.0, 1.0) {#prop-fog-shroud-color}

Shroud color (unexplored areas) - RGB used, alpha controls intensity

### Color fog_explored_color = Color(0.0, 0.0, 0.0, 0.6) {#prop-fog-explored-color}

Fog color (explored but not visible) - RGB used, alpha controls intensity

### FogEdgeQuality fog_edge_quality = FogEdgeQuality.MEDIUM {#prop-fog-edge-quality}

Edge quality - higher = smoother edges but more expensive

### float fog_edge_softness = 0.3 {#prop-fog-edge-softness}

Edge softness - how gradual the fog edge transition is (0.0 = sharp, 1.0 = very soft)

### float fog_blur_radius = 1.0 {#prop-fog-blur-radius}

Blur radius - controls fog edge smoothness (0.5 = sharp, 3.0 = very blurred)

### int fog_pixels_per_unit = 4 {#prop-fog-pixels-per-unit}

Fog texture resolution (pixels per world unit) - higher = sharper but more memory

### float fog_update_interval = 0.1 {#prop-fog-update-interval}

Fog update interval (seconds) - how often vision circles update position

### FogEntityHideMode fog_entity_hide_mode = FogEntityHideMode.RIG_HIDE {#prop-fog-entity-hide-mode}

How entities are hidden when in fog

### float fog_fade_duration = 0.3 {#prop-fog-fade-duration}

Fade duration when entering/exiting fog (for SHADER_FADE mode)

### bool fog_keep_collision_active = true {#prop-fog-keep-collision-active}

Keep collision active when hidden in fog

### bool fog_hide_nameplates = true {#prop-fog-hide-nameplates}

Hide nameplates when entity is in fog

### bool fog_hide_map_markers = true {#prop-fog-hide-map-markers}

Hide map markers when entity is in fog

*Save/Load Rules*

### bool allow_manual_save = true {#prop-allow-manual-save}

Allow manual saving

### bool allow_save_during_combat = false {#prop-allow-save-during-combat}

Allow saving during combat

### int max_save_slots = 10 {#prop-max-save-slots}

Maximum number of save slots (0 = unlimited)

### String save_directory = "user://saves/" {#prop-save-directory}

Save directory path

### bool save_on_area_transition = false {#prop-save-on-area-transition}

Save on area transition

*Rig Markers*

### Texture2D hitbox_outline_texture = null {#prop-hitbox-outline-texture}

Texture displayed for entity hitbox outlines

### Texture2D selection_marker_texture = null {#prop-selection-marker-texture}

Texture displayed for entity selection markers

### Texture2D target_marker_texture = null {#prop-target-marker-texture}

Texture displayed for entity target markers

*Outline Materials*

### Material hover_outline_material = null {#prop-hover-outline-material}

Outline material when hovering over entities

### Material selection_outline_material = null {#prop-selection-outline-material}

Outline material for selected entities

*Targeting Visuals*

### Texture2D max_distance_circle_marker = null {#prop-max-distance-circle-marker}

Maximum distance circle marker for ability range

### Material attack_ribbon_material = null {#prop-attack-ribbon-material}

Line of sight ribbon material from user to mouse

*Tactical View Visuals*

### Material path_material = null {#prop-path-material}

Path line material

### Texture2D destination_material = null {#prop-destination-material}

Destination Marker Material

*Target Textures*

### Array[Resource] ability_target_textures = [] {#prop-ability-target-textures}

Array of available textures/markers for ability targeting

*Party Management*

### int max_party_size = 4 {#prop-max-party-size}

Maximum party size

### bool reserve_experience_enabled = true {#prop-reserve-experience-enabled}

Reserve party members gain reduced experience

### float reserve_experience_percentage = 0.5 {#prop-reserve-experience-percentage}

Experience percentage for reserve members (0.0 - 1.0)

### int max_reserve_companions = 6 {#prop-max-reserve-companions}

How many recruited companions can wait in reserve besides the active party (0 = no reserve: a recruit with a full party is turned down)

### InventorySharing inventory_sharing = InventorySharing.PER_CHARACTER {#prop-inventory-sharing}

What the party members share: nothing (every character has a bag and a purse of their own), one purse, or one purse and one bag. Equipment always belongs to the character. Choose it before the game starts: a save made with another choice is not converted

### int shared_bag_slots = 40 {#prop-shared-bag-slots}

The number of slots of the shared bag (when the party shares the bag)

### ProfessionsScope professions_scope = ProfessionsScope.PARTY {#prop-professions-scope}

Who owns the professions (craft schools): the whole party shares one set of professions, recipes and levels, or every character has a set of their own. Choose it before the game starts: a save made with the other choice is not converted

### bool allow_character_switching = true {#prop-allow-character-switching}

The player may take over any living party member(off: the first member of the party is the only one the player controls, the others are companions)

### bool allow_switching_in_combat = true {#prop-allow-switching-in-combat}

The player may switch characters while the party is in combat

### bool has_main_character = true {#prop-has-main-character}

The first member of the party is the main character: it cannot wait in the reserve and its death ends the game (game over and permadeath). Off: there is no main character, any member can be put in the reserve, and the game ends only when the whole party is down. Needs Allow character switching: without it the first member is the only one the player controls, so it is always the main character

### float companion_follow_distance = 3.0 {#prop-companion-follow-distance}

How far (in metres) a companion stays behind the member the player controls (each further companion stands a little farther back)

### float companion_assist_range = 25.0 {#prop-companion-assist-range}

How far from a fighting party member (in metres) a companion joins the fight

### bool companions_use_abilities = true {#prop-companions-use-abilities}

Companions use their abilities in a fight (off: a companion only uses its basic attack)

*New Game Rules*

### bool use_character_creation_ui = true {#prop-use-character-creation-ui}

Use character creation/selection UI at game start

### Array[CharacterDefinition] starting_party_composition = [] {#prop-starting-party-composition}

Starting party composition (array of CharacterDefinitions)

### int starting_map_id = 5754345 {#prop-starting-map-id}

Starting map/scene ID

*Leveling*

### int max_level = 50 {#prop-max-level}

Maximum level players can reach

### Dictionary experience_per_level =  {#prop-experience-per-level}

Experience required for each level (level -&gt; xp_required) Key is level number (e.g., 2 for level 2), value is XP needed

*Kill Experience*

### KillExperienceMode kill_experience_mode = KillExperienceMode.FIXED {#prop-kill-experience-mode}

How much experience a defeated NPC gives: its own Experience worth, a table by its level, or a formula of its level. The result is multiplied by the experience multiplier of the NPC (definition and placed NPC) and of its entity types (elite, boss ...)

### bool kill_experience_falloff = false {#prop-kill-experience-falloff}

Falloff: an NPC under the level of the party gives less experience. Off: an NPC gives the same however weak it is next to the party

*NPC Level Scaling*

### NpcScalingMode npc_level_scaling = NpcScalingMode.OFF {#prop-npc-level-scaling}

Do NPCs follow the level of the player? Off: an NPC has the level of its definition (or placed NPC). Scale up: weak NPCs are raised. Scale down: strong NPCs are lowered. Both: both

### ScalingReference scaling_reference = ScalingReference.PARTY_AVERAGE {#prop-scaling-reference}

Whose level the NPCs follow

### int scale_up_within_levels = 3 {#prop-scale-up-within-levels}

Scale up: an NPC lower than this many levels under the player is raised to exactly this many levels under. 3: a level 4 NPC meeting a level 13 player becomes level 10; a level 12 NPC stays (0 = raised to the player's level)

### int scale_down_within_levels = 3 {#prop-scale-down-within-levels}

Scale down: an NPC higher than this many levels over the player is lowered to exactly this many levels over. 3: a level 22 NPC meeting a level 13 player becomes level 16 (0 = lowered to the player's level)

### bool rescale_npcs_on_respawn = true {#prop-rescale-npcs-on-respawn}

A NPC that respawns takes the level the party needs now, not the one it had when it was made

### bool rescale_npcs_on_party_change = true {#prop-rescale-npcs-on-party-change}

NPCs that are alive take the new level when the party levels up, a member joins or leaves or the player switches character (an NPC in a fight waits for the fight to end)

### int default_npc_growth_profile_id = GrowthProfile.ID_DEFAULT {#prop-default-npc-growth-profile-id}

The growth profile every NPC starts with (a GrowthProfile id; Entity Stats, Growth Profiles). It closes the chain of every NPC: a stat or pool that the NPC's own overrides and its own profile say nothing about grows as this profile says, then as its own definition says. 0 = none

*Controller Logic*

### CameraLogic camera_logic = null {#prop-camera-logic}

Camera logic resource - defines camera behavior and settings

### ControllerLogic player_controller_logic = null {#prop-player-controller-logic}

Player controller logic resource - defines movement and control behavior

*Action Bar*

### int action_bar_slot_count = 30 {#prop-action-bar-slot-count}

How many slots the action bar of a character has (the interface decides how many it shows and in what layout). Every slot has an input action `action_slot_keybind_N` in the Input Map: the first 30 get keys by default (1-0, Shift and Ctrl), the others are made without keys for you to bind (a mouse button, a gamepad button)

### ActionBarArrangement action_bar_arrangement = ActionBarArrangement.FREE {#prop-action-bar-arrangement}

Who arranges the action bar: the player (free), or nobody but the plan of the class, the effects and the events (fixed)

### bool action_bar_auto_fill = false {#prop-action-bar-auto-fill}

A newly learned ability goes to the first free slot that nothing is planned for (off: it waits in the spellbook until the player drags it)

### PlayerBasicAttack player_basic_attack = PlayerBasicAttack.AUTO_ATTACK {#prop-player-basic-attack}

The built-in basic attack of the player and the companions. Off: there is none, slot 1 is a slot like any other (put the basic attack of your game there, and bind the slot to a mouse button if you like). Not for NPCs: they keep theirs. With a point-and-click controller, Off means that clicking an enemy only selects it

*Input*

### float look_drag_threshold = 10.0 {#prop-look-drag-threshold}

Pixels the mouse must movewhile a button is held before a drag gesture starts (e.g. left-button free-look, or right-click that only looks when dragged). A release before that counts as a plain click.

### bool log_input_routing = false {#prop-log-input-routing}

Print one line per mouse click saying whether it reached the world or was consumed by UI (and which Control consumed it). Handy for tracking down mouse_filter problems.

*Combat*

### CombatStyle combat_style = CombatStyle.REAL_TIME {#prop-combat-style}

Combat system style (real-time or turn-based)

*Death &amp; Revival*

### DeathBehavior death_behavior = DeathBehavior.RESPAWN_CHECKPOINT {#prop-death-behavior}

What happens when the player dies

### Array[DeathCurrencyLoss] death_currency_losses = [] {#prop-death-currency-losses}

The money a player loses on death: a list of rules, each for one currency (or all of them): a percentage, an amount, or set to a value. Nothing when empty

### float death_experience_penalty = 0.0 {#prop-death-experience-penalty}

Experience penalty on death (percentage lost, 0.0 - 1.0)

### DeathItemLoss death_item_loss = DeathItemLoss.KEEP {#prop-death-item-loss}

What happens to the items in the bag of a player who dies: kept, dropped on the ground around the body (see Dropped Items), or destroyed. Key items are never lost

### DeathItemLoss death_equipment_loss = DeathItemLoss.KEEP {#prop-death-equipment-loss}

What happens to the equipment a player who dies wears: kept, taken off and dropped around the body, or destroyed. Key items are never lost

### float death_item_loss_chance = 1.0 {#prop-death-item-loss-chance}

What share of the stacks in the bag, and of the pieces of equipment, is lost on death (1 = all of them)

### float death_durability_loss = 0.0 {#prop-death-durability-loss}

The share of its maximum durability that every worn piece loses when the player dies (0 = none, 0.25 = a quarter). Needs durability on

*Breath*

### BreathUsers breath_users = BreathUsers.PLAYERS {#prop-breath-users}

Who has to hold its breath under water (see Movement Volumes). Nobody: swimming is free

### float breath_duration = 20.0 {#prop-breath-duration}

How many seconds an entity can hold its breath

### float breath_recovery_speed = 4.0 {#prop-breath-recovery-speed}

How fast the breath comes back above the surface compared with how fast it runs out (4 = four times as fast)

### int drowning_effect_id = 0 {#prop-drowning-effect-id}

The effect that is on an entity while it has no breath left (damage over time: it drowns). It is taken off when the breath comes back. 0 = nothing happens

*Threat*

### bool use_threat_system = true {#prop-use-threat-system}

On: enemies attack whoever has made the most threat (damage, healing, taunts). Off: enemies attack the nearest of the entities that are fighting them, and the numbers below do nothing (a Taunt effect still forces a target). Turn it off for a game with no tank and healer roles

### float heal_threat_multiplier = 0.5 {#prop-heal-threat-multiplier}

Healing makes threat on the enemies fighting the healed entity: this share of the healing done (0 = healing makes no threat), split between those enemies. A heal effect can set its own

### float damage_threat_multiplier = 1.0 {#prop-damage-threat-multiplier}

Damage makes threat on the target: this multiplier on the number of the hit chosen below (1 = as much threat as damage, 0 = damage makes no threat). A damage effect has its own threat multiplier on top of this

*Damage Results*

### DamageResult.DamageBasis threat_basis = DamageResult.DamageBasis.AFTER_TAKEN {#prop-threat-basis}

Which number of a hit makes the target's threat: the effect's own number, after the attacker's modifiers, after the defender's modifiers (shields included) or only what reached health. Effects can override it

### DamageResult.DamageBasis leech_basis = DamageResult.DamageBasis.HEALTH_ONLY {#prop-leech-basis}

Which number of a hit life leech is taken from. Effects and stat effects can override it

### DamageResult.DamageBasis reflect_basis = DamageResult.DamageBasis.HEALTH_ONLY {#prop-reflect-basis}

Which number of a hit a damage reflection is taken from. Effects and stat effects can override it

### int max_reflect_chain = 1 {#prop-max-reflect-chain}

How many reactions deep a hit may be and still be reflected. 1: a normal hit is reflected, a reflection is never reflected again. Higher values let two reflecting entities reflect each other that many times

### bool zero_damage_counts_as_hit = true {#prop-zero-damage-counts-as-hit}

A hit that modifiers reduced to 0 (armor, block ...) still counts as a hit: it triggers on-hit effects and procs and shows "0". Off: it counts as nothing happening

### float minimum_damage = 0.0 {#prop-minimum-damage}

Smallest damage a hit that lands can end with (0 = armor can reduce a hit to nothing)

### bool round_damage = false {#prop-round-damage}

Round the final damage a target takes to whole numbers

*Pools*

### CapacityRule capacity_change_rule = CapacityRule.KEEP_PERCENTAGE {#prop-capacity-change-rule}

What happens to a pool's current value when its maximum changes from equipment, buffs or stats. Keeping the percentage means equipping and unequipping a +max item cannot be used to heal

### CapacityRule level_up_capacity_rule = CapacityRule.ADD_GAIN {#prop-level-up-capacity-rule}

What happens to the current value of a pool whose maximum grows because the entity levelled up (stat growth, see the stat editor's Level Growth). Add the gain: the level-up health is available at once

*Combat Log*

### CombatEvent.Detail combat_log_detail = CombatEvent.Detail.NORMAL {#prop-combat-log-detail}

How much of a fight is recorded: Off, Critical (deaths, critical hits, kills), Normal (damage, healing, avoids, casts, effects gained and lost), Detailed (every effect, pool, cooldown and target change) or Debug (also movement and the decisions of the AI, for designing a fight). What a viewer shows is chosen by the viewer; this is what the game records at all

### CombatLogKeep combat_log_keep = CombatLogKeep.DISCARD {#prop-combat-log-keep}

What happens to the record of a fight when it ends. Discard: it is thrown away and a summary line stays in the chat. Keep the last fights: the last N are kept (for a combat report). Keep the play session: every fight until the game is closed

### int combat_log_keep_fights = 5 {#prop-combat-log-keep-fights}

For "keep the last fights": how many fights

### int combat_log_events_per_fight = 2000 {#prop-combat-log-events-per-fight}

The most events one fight records (the oldest are dropped past it), so a long fight cannot grow without end

*Hit Rules*

### bool use_hit_system = false {#prop-use-hit-system}

Do attacks have to hit? Off (default): no attack ever misses, whatever the abilities and stats say. On: an ability that can miss makes a hit roll against every enemy it reaches, once per use. Each ability can opt out (Hit rule: Always hits) or in (Can miss). See the Gameplay Config page of the documentation for the whole roll

### float melee_range = 5.0 {#prop-melee-range}

An ability with Attack style: Automatic is melee when its range is at most this many metres, ranged beyond that

### float base_melee_hit_chance = 95.0 {#prop-base-melee-hit-chance}

The chance to hit (percent) of a melee attack before the stats, the level gap and the limits are applied. 95 = a flat 5 % chance to miss

### float base_ranged_hit_chance = 95.0 {#prop-base-ranged-hit-chance}

The same for ranged attacks

### float minimum_hit_chance = 5.0 {#prop-minimum-hit-chance}

The chance to hit never goes below this (percent): a target is never untouchable. 0 = it can be impossible to hit

### float maximum_hit_chance = 100.0 {#prop-maximum-hit-chance}

The chance to hit never goes above this (percent): 95 = even the most accurate attacker misses one time in twenty. 100 = no limit

### LevelGapMode level_gap_mode = LevelGapMode.NONE {#prop-level-gap-mode}

How the levels of the two entities change the chance to hit. The settings of the mode you choose appear below it

### bool glancing_hits_enabled = false {#prop-glancing-hits-enabled}

When a hit roll fails, a share of the failures become glancing hits instead of misses: the attack lands, but weaker

### float glancing_chance = 30.0 {#prop-glancing-chance}

The share (percent) of the failed hit rolls that become glancing hits. 30 = three failures in ten are glancing, seven are misses

### float glancing_reduction = 40.0 {#prop-glancing-reduction}

How much a glancing hit is weaker (percent): its damage and healing are reduced by this much. 40 = it does 60 % of the damage and heals 60 % of the healing

### bool glancing_other_effects_apply = true {#prop-glancing-other-effects-apply}

Do the other effects of a glancing hit (statuses, buffs, debuffs) still apply? Off: only its damage and healing happen

*NPC LOD System*

### bool npc_lod_enabled = true {#prop-npc-lod-enabled}

Enable LOD system for NPCs

*LOD Distance Thresholds*

### float lod_distance_high = 30.0 {#prop-lod-distance-high}

Distance for HIGH detail (full updates)

### float lod_distance_medium = 100.0 {#prop-lod-distance-medium}

Distance for MEDIUM detail (reduced updates)

### float lod_distance_low = 250.0 {#prop-lod-distance-low}

Distance for LOW detail (basic updates)

### float lod_distance_minimal = 400.0 {#prop-lod-distance-minimal}

Distance for MINIMAL detail (rare updates)

*LOD Update Intervals*

### float lod_interval_high = 0.1 {#prop-lod-interval-high}

Update interval for HIGH detail (seconds)

### float lod_interval_medium = 0.5 {#prop-lod-interval-medium}

Update interval for MEDIUM detail

### float lod_interval_low = 1.0 {#prop-lod-interval-low}

Update interval for LOW detail

### float lod_interval_minimal = 2.0 {#prop-lod-interval-minimal}

Update interval for MINIMAL detail

*LOD Batch Processing*

### float lod_optimization_interval = 1.0 {#prop-lod-optimization-interval}

How often to check LOD levels (seconds)

### int lod_controllers_per_batch = 10 {#prop-lod-controllers-per-batch}

How many controllers to process per batch

## Method descriptions

### float get_fog_edge_threshold() {#method-get-fog-edge-threshold}

Get the smoothstep threshold based on edge quality

### float get_fog_edge_range() {#method-get-fog-edge-range}

Get the smoothstep range based on edge softness

### float get_lod_distance( level: LODLevel ) {#method-get-lod-distance}

Get LOD distance threshold for a given level

### float get_lod_interval( level: LODLevel ) {#method-get-lod-interval}

Get update interval for a given LOD level

### LODLevel calculate_lod_level( distance: float ) {#method-calculate-lod-level}

Calculate LOD level from distance

### bool main_character_exists() {#method-main-character-exists}

Is there a main character (the first member of the party)? Never when the player cannot switch characters

### float get_kill_experience( npc_level: int, fixed_worth: int = 0 ) {#method-get-kill-experience}

The experience an NPC of this level gives by the settings (before the multipliers). fixed_worth is the Experience worth of the NPC itself

### float get_kill_experience_falloff_factor( levels_below: int ) {#method-get-kill-experience-falloff-factor}

The share of the experience that is kept for an NPC this many levels under the reference level (1 = all of it)

### float get_item_budget( item_level: int ) {#method-get-item-budget}

The stat budget of an item of this item level, before the slot, item and quality multipliers (see ItemBudget). Linear 20 per level when the formula is empty

### int get_scaled_npc_level( base_level: int, reference_level: int, rank_types: Array = [] ) {#method-get-scaled-npc-level}

The level an NPC takes by the scaling settings. reference_level is the level it scales to (0 = no party yet: no scaling). rank_types are the entity types (EntityTagDefinition) of the NPC

### int get_experience_for_level( level: int ) {#method-get-experience-for-level}

Get experience required to reach a specific level

### int get_total_experience_for_level( level: int ) {#method-get-total-experience-for-level}

Get total experience needed from level 1 to reach target level

### void set_experience_for_level( level: int, xp: int ) {#method-set-experience-for-level}

Set custom experience for a specific level

### void reset_experience_to_defaults() {#method-reset-experience-to-defaults}

Clear custom experience and use default formula

### bool has_custom_experience( level: int ) {#method-has-custom-experience}

Check if experience is customized for a level

### GameplayConfig create_default() {#method-create-default}

The config of a project that has none yet: the third person camera with WASD and the mouse

### GameplayConfig get_config() {#method-get-config}

The gameplay settings of the project (the copy of the running game, else the file).

### Array[String] get_input_setup_warnings() {#method-get-input-setup-warnings}

Problems with the chosen camera + controller pairing (empty = fine). Shown under the pickers in the config editor and printed once when the game starts. A pairing is never blocked: the InputManager resolves conflicts the same way (the controller's claim wins), these messages just explain what will be ignored.

