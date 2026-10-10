<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GameplayConfig

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Configuration for gameplay rules and mechanics

## Properties

| | | |
|---|---|---|
| `bool` | [dropped_items_enabled](#prop-dropped-items-enabled) | `true` |
| `DroppedItemsVisualSytle` | [dropped_items_visual_style](#prop-dropped-items-visual-style) | `DroppedItemsVisualSytle.MESH` |
| `DroppedItemsPickupRule` | [dropped_items_pickup_rule](#prop-dropped-items-pickup-rule) | `DroppedItemsPickupRule.BOTH` |
| `bool` | [droped_items_saved_to_map](#prop-droped-items-saved-to-map) | `false` |
| `bool` | [item_weight_enabled](#prop-item-weight-enabled) | `false` |
| `bool` | [item_durability_enabled](#prop-item-durability-enabled) | `false` |
| `CalculationFormula` | [item_budget_formula](#prop-item-budget-formula) |  |
| `LootLevelSource.Source` | [default_npc_loot_level](#prop-default-npc-loot-level) | `LootLevelSource.Source.HOLDER` |
| `LootLevelSource.Source` | [default_object_loot_level](#prop-default-object-loot-level) | `LootLevelSource.Source.PARTY` |
| `int` | [fallback_item_level](#prop-fallback-item-level) | `1` |
| `int` | [max_active_quests](#prop-max-active-quests) | `20` |
| `bool` | [quest_markers_enabled](#prop-quest-markers-enabled) | `true` |
| `QuestFailureRule` | [default_quest_failure](#prop-default-quest-failure) | `QuestFailureRule.RETRY` |
| `bool` | [allow_quest_abandon](#prop-allow-quest-abandon) | `true` |
| `bool` | [show_quest_levels](#prop-show-quest-levels) | `true` |
| `int` | [quest_level_trivial_gap](#prop-quest-level-trivial-gap) | `5` |
| `int` | [quest_level_easy_gap](#prop-quest-level-easy-gap) | `2` |
| `int` | [quest_level_hard_gap](#prop-quest-level-hard-gap) | `3` |
| `int` | [quest_level_deadly_gap](#prop-quest-level-deadly-gap) | `6` |
| `bool` | [auto_track_quest_objectives](#prop-auto-track-quest-objectives) | `true` |
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
| `float` | [look_drag_threshold](#prop-look-drag-threshold) | `10.0` |
| `bool` | [log_input_routing](#prop-log-input-routing) | `false` |
| `CombatStyle` | [combat_style](#prop-combat-style) | `CombatStyle.REAL_TIME` |
| `DeathBehavior` | [death_behavior](#prop-death-behavior) | `DeathBehavior.RESPAWN_CHECKPOINT` |
| `float` | [death_gold_penalty](#prop-death-gold-penalty) | `0.1` |
| `float` | [death_experience_penalty](#prop-death-experience-penalty) | `0.0` |
| `bool` | [drop_items_on_death](#prop-drop-items-on-death) | `false` |
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

- **MESH** = `0`
- **SPRITE** = `1`

### enum DroppedItemsPickupRule {#enum-droppeditemspickuprule}

- **INTERACT** = `0`
- **WALKOVER** = `1`
- **BOTH** = `2`

### enum CombatStyle {#enum-combatstyle}

- **REAL_TIME** = `0`
- **TURN_BASED** = `1`

### enum DeathBehavior {#enum-deathbehavior}

- **GAME_OVER** = `0`
- **RESPAWN_CHECKPOINT** = `1`
- **PERMADEATH** = `2`

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

## Constants

- `const` **CONFIG_PATH** = `"res://src/data/config_data/gameplay_config.tres"`
- `float` **DEFAULT_BUDGET_PER_LEVEL** = `20.0` - The budget per item level when the project has no formula of its own
- `Dictionary` **SETTING_DESCRIPTIONS** = `{` - Dictionary of setting descriptions for tooltips and help text

## Property descriptions

*Items &amp; Inventory*

### bool dropped_items_enabled = true {#prop-dropped-items-enabled}

Items can be dropped in the physical world

### DroppedItemsVisualSytle dropped_items_visual_style = DroppedItemsVisualSytle.MESH {#prop-dropped-items-visual-style}

Items can be dropped in the physical world

### DroppedItemsPickupRule dropped_items_pickup_rule = DroppedItemsPickupRule.BOTH {#prop-dropped-items-pickup-rule}

Items can be dropped in the physical world

### bool droped_items_saved_to_map = false {#prop-droped-items-saved-to-map}

Are dropped items saved for maps save data

### bool item_weight_enabled = false {#prop-item-weight-enabled}

Items have weight/encumbrance

### bool item_durability_enabled = false {#prop-item-durability-enabled}

Items can break/degrade over time

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

### bool allow_character_switching = true {#prop-allow-character-switching}

The player may take over any living party member (off: the first member of the party is the only one the player controls, the others are companions)

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

*Input*

### float look_drag_threshold = 10.0 {#prop-look-drag-threshold}

Pixels the mouse must move while a button is held before a drag gesture starts (e.g. left-button free-look, or right-click that only looks when dragged). A release before that counts as a plain click.

### bool log_input_routing = false {#prop-log-input-routing}

Print one line per mouse click saying whether it reached the world or was consumed by UI (and which Control consumed it). Handy for tracking down mouse_filter problems.

*Combat*

### CombatStyle combat_style = CombatStyle.REAL_TIME {#prop-combat-style}

Combat system style (real-time or turn-based)

*Death &amp; Revival*

### DeathBehavior death_behavior = DeathBehavior.RESPAWN_CHECKPOINT {#prop-death-behavior}

What happens when the player dies

### float death_gold_penalty = 0.1 {#prop-death-gold-penalty}

Gold penalty on death (percentage lost, 0.0 - 1.0)

### float death_experience_penalty = 0.0 {#prop-death-experience-penalty}

Experience penalty on death (percentage lost, 0.0 - 1.0)

### bool drop_items_on_death = false {#prop-drop-items-on-death}

Items dropped on death

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

*No description yet.*

### Array[String] get_input_setup_warnings() {#method-get-input-setup-warnings}

Problems with the chosen camera + controller pairing (empty = fine). Shown under the pickers in the config editor and printed once when the game starts. A pairing is never blocked: the InputManager resolves conflicts the same way (the controller's claim wins), these messages just explain what will be ignored.

