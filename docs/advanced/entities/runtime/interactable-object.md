<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractableObject

**Inherits:** [StaticBody3D](https://docs.godotengine.org/en/stable/classes/class_staticbody3d.html)

Unified interactable object class - uses InteractableDefinition + Interactions All specialized logic is now in Interaction subclasses

## Properties

| | | |
|---|---|---|
| `UniqueInteractableData` | [unique_data](#prop-unique-data) |  |
| `InteractableDefinition :` | [definition](#prop-definition) |  |

## Variables

| | | |
|---|---|---|
| `String` | [display_name](#var-display-name) | `""` |
| `bool` | [is_initialized](#var-is-initialized) | `false` |
| `Node3D` | [editor_visual](#var-editor-visual) |  |
| `int` | [locked_by_item_id](#var-locked-by-item-id) | `-1` |
| `bool` | [is_interactable](#var-is-interactable) | `false` |
| `FactionDefinition` | [faction](#var-faction) |  |
| `Variant` | [is_dead](#var-is-dead) | `false` |
| `bool` | [object_targetable_directly](#var-object-targetable-directly) | `false` |
| `bool` | [object_targetable_by_aoe](#var-object-targetable-by-aoe) | `false` |
| `bool` | [object_has_stats](#var-object-has-stats) | `false` |
| `bool` | [wants_nameplate](#var-wants-nameplate) | `false` |
| `Marker3D` | [nameplate_marker](#var-nameplate-marker) |  |
| `Nameplate` | [nameplate](#var-nameplate) |  |
| `CollisionShape3D` | [object_collision](#var-object-collision) |  |
| `AnimationPlayer` | [animation_player](#var-animation-player) |  |
| `Label3D` | [interact_prompt_label](#var-interact-prompt-label) |  |
| `Entity` | [summoner](#var-summoner) | `null` |
| `Effect` | [creating_effect](#var-creating-effect) | `null` |
| `Timer` | [interaction_cooldown_timer](#var-interaction-cooldown-timer) |  |
| `bool` | [is_on_interaction_cooldown](#var-is-on-interaction-cooldown) | `false` |
| `Interaction` | [interaction](#var-interaction) | `null` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `Array` | [loot_rolled](#var-loot-rolled) | `[]` |
| `ComponentsManager` | [components](#var-components) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_interactable](#method-initialize-interactable)( `system_hub: GameHost.SystemHub` ) |
| `void` | [show_interact_prompt](#method-show-interact-prompt)() |
| `void` | [hide_interact_prompt](#method-hide-interact-prompt)() |
| `void` | [handle_destruction](#method-handle-destruction)() |
| `bool` | [is_destroyed](#method-is-destroyed)() |
| `Array[LootRule]` | [get_loot_rules](#method-get-loot-rules)() |
| `int` | [run_loot_rules](#method-run-loot-rules)( `trigger: LootRule.Trigger, receiver: Entity = null` ) |
| `bool` | [has_pending_loot](#method-has-pending-loot)() |
| `bool` | [has_lootable_remains](#method-has-lootable-remains)() |
| `void` | [process_interaction](#method-process-interaction)( `entity: Entity` ) |
| `bool` | [is_locked](#method-is-locked)() |
| `Interaction` | [get_interaction_by_type](#method-get-interaction-by-type)( `type_name: String` ) |
| `bool` | [unlock_from_external](#method-unlock-from-external)() |
| `bool` | [play_animation](#method-play-animation)( `anim_name: String` ) |
| `bool` | [has_animation](#method-has-animation)( `anim_name: String` ) |
| `Array[String]` | [get_available_animations](#method-get-available-animations)() |
| `void` | [play_sound_stream](#method-play-sound-stream)( `stream: AudioStream` ) |
| `Node3D` | [get_attachment_point_node](#method-get-attachment-point-node)( `location: VFXSelection.VfxLocation` ) |
| `int` | [get_unique_id](#method-get-unique-id)() |
| `int` | [get_object_id](#method-get-object-id)() |
| `String` | [get_object_name](#method-get-object-name)() |
| `void` | [set_faction_id](#method-set-faction-id)( `new_faction: FactionDefinition` ) |
| `int` | [get_faction_id](#method-get-faction-id)() |
| `void` | [set_summoner](#method-set-summoner)( `new_summoner: Entity, effect: Effect = null` ) |
| `void` | [summon_finished](#method-summon-finished)() |
| `InventoryComponent` | [get_inventory](#method-get-inventory)() |
| `bool` | [has_inventory](#method-has-inventory)() |
| `EffectInstance` | [get_effect](#method-get-effect)( `effect_id: int` ) |
| `EffectInstance` | [get_effect_from_caller](#method-get-effect-from-caller)( `effect_id: int, originator: Entity` ) |
| `void` | [reduce_effect_stacks](#method-reduce-effect-stacks)( `effect_instance: EffectInstance, stacks_to_remove: int` ) |
| `Array[EffectInstance]` | [get_active_effects_by_type](#method-get-active-effects-by-type)( `effect_type: String` ) |
| `Array[EffectInstance]` | [get_all_active_effects](#method-get-all-active-effects)() |
| `int` | [get_active_effect_count](#method-get-active-effect-count)() |
| `bool` | [has_any_active_effects](#method-has-any-active-effects)() |
| `void` | [remove_all_effects](#method-remove-all-effects)() |
| `void` | [remove_effects_from_originator](#method-remove-effects-from-originator)( `originator: Entity` ) |
| `DamageResult` | [take_damage](#method-take-damage)( `result: DamageResult` ) |
| `HealingResult` | [take_healing](#method-take-healing)( `result: HealingResult` ) |
| `bool` | [can_apply_school_effect](#method-can-apply-school-effect)( `school_id: int, source_entity: Variant = null, effect: EffectInstance = null` ) |
| `float` | [get_current_health](#method-get-current-health)() |
| `float` | [get_max_health](#method-get-max-health)() |
| `float` | [get_health_percentage](#method-get-health-percentage)() |
| `bool` | [is_health_below](#method-is-health-below)( `threshold: float` ) |
| `bool` | [is_health_above](#method-is-health-above)( `threshold: float` ) |
| `float` | [get_pool_current](#method-get-pool-current)( `pool_id: int` ) |
| `float` | [get_pool_max](#method-get-pool-max)( `pool_id: int` ) |
| `float` | [get_pool_percentage](#method-get-pool-percentage)( `pool_id: int` ) |
| `bool` | [has_pool](#method-has-pool)( `pool_id: int` ) |
| `bool` | [is_master_pool](#method-is-master-pool)( `pool_id: int` ) |
| `PoolInstance` | [get_master_pool](#method-get-master-pool)() |
| `float` | [add_pool_value](#method-add-pool-value)( `pool_id: int, amount: float` ) |
| `bool` | [remove_pool_value](#method-remove-pool-value)( `pool_id: int, amount: float` ) |
| `bool` | [is_resource_pool](#method-is-resource-pool)( `pool_id: int` ) |
| `float` | [get_stat](#method-get-stat)( `stat_id: int` ) |
| `bool` | [has_stat](#method-has-stat)( `stat_id: int` ) |
| `Array[int]` | [get_stat_ids_in_group](#method-get-stat-ids-in-group)( `group_id: int` ) |
| `bool` | [add_stat_bonus](#method-add-stat-bonus)( `stat_id: int, amount: float` ) |
| `bool` | [add_stat_multiplier](#method-add-stat-multiplier)( `stat_id: int, amount: float` ) |
| `bool` | [set_stat_base](#method-set-stat-base)( `stat_id: int, value: float` ) |
| `void` | [sync_to_unique_data](#method-sync-to-unique-data)() |
| `void` | [set_current_target_hover](#method-set-current-target-hover)() |
| `void` | [set_current_target_on](#method-set-current-target-on)() |
| `void` | [set_current_target_off](#method-set-current-target-off)() |
| `void` | [set_map_marker_icon](#method-set-map-marker-icon)( `type: Entity.MapMarkerType` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `data: Dictionary, system_hub: GameHost.SystemHub` ) |

## Signals

### object_interacted( object_id: int, entity: Entity ) {#signal-object-interacted}

Signals

### object_locked( object_id: int ) {#signal-object-locked}

### object_unlocked( object_id: int ) {#signal-object-unlocked}

### object_damaged( damage_amount: int, damage_source: Entity ) {#signal-object-damaged}

### object_destroyed() {#signal-object-destroyed}

### object_health_changed( new_health: int ) {#signal-object-health-changed}

## Property descriptions

### UniqueInteractableData unique_data {#prop-unique-data}

*No description yet.*

### InteractableDefinition : definition {#prop-definition}

*No description yet.*

## Variable descriptions

### String display_name = "" {#var-display-name}

Core Properties

### bool is_initialized = false {#var-is-initialized}

*No description yet.*

### Node3D editor_visual {#var-editor-visual}

State Properties (from definition, can be overridden by unique_data)

### int locked_by_item_id = -1 {#var-locked-by-item-id}

*No description yet.*

### bool is_interactable = false {#var-is-interactable}

*No description yet.*

### FactionDefinition faction {#var-faction}

*No description yet.*

### is_dead = false {#var-is-dead}

*No description yet.*

### bool object_targetable_directly = false {#var-object-targetable-directly}

Targeting flags (from definition)

### bool object_targetable_by_aoe = false {#var-object-targetable-by-aoe}

*No description yet.*

### bool object_has_stats = false {#var-object-has-stats}

*No description yet.*

### bool wants_nameplate = false {#var-wants-nameplate}

Nameplate support

### Marker3D nameplate_marker {#var-nameplate-marker}

*No description yet.*

### Nameplate nameplate {#var-nameplate}

*No description yet.*

### CollisionShape3D object_collision {#var-object-collision}

Scene Structure References

### AnimationPlayer animation_player {#var-animation-player}

*No description yet.*

### Label3D interact_prompt_label {#var-interact-prompt-label}

*No description yet.*

### Entity summoner = null {#var-summoner}

Effect refs

### Effect creating_effect = null {#var-creating-effect}

*No description yet.*

### Timer interaction_cooldown_timer {#var-interaction-cooldown-timer}

Interactions

### bool is_on_interaction_cooldown = false {#var-is-on-interaction-cooldown}

*No description yet.*

### Interaction interaction = null {#var-interaction}

*No description yet.*

### ChronoManager chrono_manager {#var-chrono-manager}

SystemRefs

### Array loot_rolled = [] {#var-loot-rolled}

The numbers of the loot rules that have rolled (a rule on Initialize or First Access rolls once). Saved with the object

### ComponentsManager components {#var-components}

*No description yet.*

## Method descriptions

### void initialize_interactable( system_hub: GameHost.SystemHub ) {#method-initialize-interactable}

*No description yet.*

### void show_interact_prompt() {#method-show-interact-prompt}

*No description yet.*

### void hide_interact_prompt() {#method-hide-interact-prompt}

*No description yet.*

### void handle_destruction() {#method-handle-destruction}

*No description yet.*

### bool is_destroyed() {#method-is-destroyed}

*No description yet.*

### Array[LootRule] get_loot_rules() {#method-get-loot-rules}

The loot rules of this object: the ones of the placed object when it has its own, else the ones of its definition, plus those of the older settings of its container (its fixed contents and its loot table)

### int run_loot_rules( trigger: LootRule.Trigger, receiver: Entity = null ) {#method-run-loot-rules}

Rolls the loot rules of a trigger into the inventory of this object (see LootDispatcher). `receiver` is whoever gets the loot (the one who opens a chest): it changes the amount and the quality by its loot gains and can give the item level. Returns how many rules rolled

### bool has_pending_loot() {#method-has-pending-loot}

Is there a rule that rolls the first time the object is opened and has not rolled yet?

### bool has_lootable_remains() {#method-has-lootable-remains}

Does a destroyed object still hold something to take (loot in its inventory, or a rule that rolls when it is opened)?

### void process_interaction( entity: Entity ) {#method-process-interaction}

*No description yet.*

### bool is_locked() {#method-is-locked}

*No description yet.*

### Interaction get_interaction_by_type( type_name: String ) {#method-get-interaction-by-type}

The interaction of this object when it is of the type asked for (the name of its class), else null

### bool unlock_from_external() {#method-unlock-from-external}

*No description yet.*

### bool play_animation( anim_name: String ) {#method-play-animation}

*No description yet.*

### bool has_animation( anim_name: String ) {#method-has-animation}

*No description yet.*

### Array[String] get_available_animations() {#method-get-available-animations}

*No description yet.*

### void play_sound_stream( stream: AudioStream ) {#method-play-sound-stream}

*No description yet.*

### Node3D get_attachment_point_node( location: VFXSelection.VfxLocation ) {#method-get-attachment-point-node}

*No description yet.*

### int get_unique_id() {#method-get-unique-id}

*No description yet.*

### int get_object_id() {#method-get-object-id}

*No description yet.*

### String get_object_name() {#method-get-object-name}

*No description yet.*

### void set_faction_id( new_faction: FactionDefinition ) {#method-set-faction-id}

*No description yet.*

### int get_faction_id() {#method-get-faction-id}

*No description yet.*

### void set_summoner( new_summoner: Entity, effect: Effect = null ) {#method-set-summoner}

*No description yet.*

### void summon_finished() {#method-summon-finished}

*No description yet.*

### InventoryComponent get_inventory() {#method-get-inventory}

*No description yet.*

### bool has_inventory() {#method-has-inventory}

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

### int get_active_effect_count() {#method-get-active-effect-count}

*No description yet.*

### bool has_any_active_effects() {#method-has-any-active-effects}

*No description yet.*

### void remove_all_effects() {#method-remove-all-effects}

*No description yet.*

### void remove_effects_from_originator( originator: Entity ) {#method-remove-effects-from-originator}

*No description yet.*

### DamageResult take_damage( result: DamageResult ) {#method-take-damage}

Completes the DamageResult for a hit on this object (see StatsComponent.take_damage). Returns null if it aborted

### HealingResult take_healing( result: HealingResult ) {#method-take-healing}

Completes the HealingResult for a heal on this object (see StatsComponent.take_healing). Returns null if it aborted

### bool can_apply_school_effect( school_id: int, source_entity: Variant = null, effect: EffectInstance = null ) {#method-can-apply-school-effect}

*No description yet.*

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

### float get_stat( stat_id: int ) {#method-get-stat}

*No description yet.*

### bool has_stat( stat_id: int ) {#method-has-stat}

*No description yet.*

### Array[int] get_stat_ids_in_group( group_id: int ) {#method-get-stat-ids-in-group}

*No description yet.*

### bool add_stat_bonus( stat_id: int, amount: float ) {#method-add-stat-bonus}

*No description yet.*

### bool add_stat_multiplier( stat_id: int, amount: float ) {#method-add-stat-multiplier}

*No description yet.*

### bool set_stat_base( stat_id: int, value: float ) {#method-set-stat-base}

*No description yet.*

### void sync_to_unique_data() {#method-sync-to-unique-data}

*No description yet.*

### void set_current_target_hover() {#method-set-current-target-hover}

*No description yet.*

### void set_current_target_on() {#method-set-current-target-on}

*No description yet.*

### void set_current_target_off() {#method-set-current-target-off}

*No description yet.*

### void set_map_marker_icon( type: Entity.MapMarkerType ) {#method-set-map-marker-icon}

*No description yet.*

### Dictionary to_save_data() {#method-to-save-data}

Standardized save method

### void from_save_data( data: Dictionary, system_hub: GameHost.SystemHub ) {#method-from-save-data}

Standardized load method

