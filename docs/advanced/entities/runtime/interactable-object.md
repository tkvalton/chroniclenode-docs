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
| `String:` | [display_name](#var-display-name) |  |
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
| `Array[int]` | [get_ui_tag_ids](#method-get-ui-tag-ids)() |
| `Array[UITagDefinition]` | [get_ui_tags](#method-get-ui-tags)() |
| `bool` | [has_ui_tag](#method-has-ui-tag)( `tag: Variant` ) |
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
| `String` | [get_requirements_blocker](#method-get-requirements-blocker)( `entity: Entity` ) |
| `bool` | [is_in_use](#method-is-in-use)() |
| `void` | [cancel_use](#method-cancel-use)() |
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

Emitted when the object is locked.

### object_unlocked( object_id: int ) {#signal-object-unlocked}

Emitted when the object is unlocked.

### object_damaged( damage_amount: int, damage_source: Entity ) {#signal-object-damaged}

Emitted when the object is damaged (an object with stats can be hit).

### object_destroyed() {#signal-object-destroyed}

Emitted when the object is destroyed.

### use_started( user: Entity, duration: float ) {#signal-use-started}

Somebody started a use that takes time (the object has a use time), and how long it takes

### use_ended( user: Entity, completed: bool ) {#signal-use-ended}

The use that took time ended: it was finished (true) or cancelled (false)

### interaction_refused( user: Entity, message: String ) {#signal-interaction-refused}

Somebody tried to use the object and was refused (requirements, no room), with what they were told

### object_health_changed( new_health: int ) {#signal-object-health-changed}

Emitted when the health of the object changes, with the new health.

## Property descriptions

### UniqueInteractableData unique_data {#prop-unique-data}

The record of this object in the world (a placed object): its overrides, state and position.

### InteractableDefinition : definition {#prop-definition}

What kind of object this is: the interactable definition it was made from.

## Variable descriptions

### String: display_name {#var-display-name}

The name of the object: the one of its placed object or of its definition, when it is asked for (so it follows the language of the player); a name set by hand stays

### bool is_initialized = false {#var-is-initialized}

True once initialize_interactable has run.

### Node3D editor_visual {#var-editor-visual}

State Properties (from definition, can be overridden by unique_data)

### int locked_by_item_id = -1 {#var-locked-by-item-id}

The id of the item that opens the object, or -1 when it is not locked.

### bool is_interactable = false {#var-is-interactable}

True while the object can be used.

### FactionDefinition faction {#var-faction}

The faction of the object. It decides who may attack it and who it fights for.

### is_dead = false {#var-is-dead}

True when the object has been destroyed.

### bool object_targetable_directly = false {#var-object-targetable-directly}

Targeting flags (from definition)

### bool object_targetable_by_aoe = false {#var-object-targetable-by-aoe}

True when area effects hit the object (from the definition).

### bool object_has_stats = false {#var-object-has-stats}

True when the object has stats and pools of its own, so it can be hit (from the definition).

### bool wants_nameplate = false {#var-wants-nameplate}

Nameplate support

### Marker3D nameplate_marker {#var-nameplate-marker}

The marker where the nameplate of the object is placed.

### Nameplate nameplate {#var-nameplate}

The nameplate of the object, if it has one.

### CollisionShape3D object_collision {#var-object-collision}

Scene Structure References

### AnimationPlayer animation_player {#var-animation-player}

The animation player of the scene of the object.

### Label3D interact_prompt_label {#var-interact-prompt-label}

The label above the object that tells the player what the key does.

### Entity summoner = null {#var-summoner}

Effect refs

### Effect creating_effect = null {#var-creating-effect}

The effect that made the object (a summoned object), if any.

### Timer interaction_cooldown_timer {#var-interaction-cooldown-timer}

Interactions

### bool is_on_interaction_cooldown = false {#var-is-on-interaction-cooldown}

True while the object cannot be used again because of its cooldown.

### Interaction interaction = null {#var-interaction}

The interaction of the object (a door, a container, a trap ...), made from its definition.

### ChronoManager chrono_manager {#var-chrono-manager}

SystemRefs

### Array loot_rolled = [] {#var-loot-rolled}

The numbers of the loot rules that have rolled (a rule on Initialize or First Access rolls once). Saved with the object

### ComponentsManager components {#var-components}

The components of the object (stats, effects, inventory, rig ...), made when it is initialized.

## Method descriptions

### Array[int] get_ui_tag_ids() {#method-get-ui-tag-ids}

Core Properties The ids of the entity tags of this object: its definition's, plus the ones of its placed object, minus the ones the placed object takes away

### Array[UITagDefinition] get_ui_tags() {#method-get-ui-tags}

The entity tags of this object (what the interface reads to show it)

### bool has_ui_tag( tag: Variant ) {#method-has-ui-tag}

Does the object have this entity tag? By the key of the tag ("quest_giver") or its id

### void initialize_interactable( system_hub: GameHost.SystemHub ) {#method-initialize-interactable}

Builds the object from its definition: resolves its template, makes its components, interaction, faction and stats, and sets it up. Called once when the object is made.

### void show_interact_prompt() {#method-show-interact-prompt}

Shows the prompt above the object (only to a player who can use it).

### void hide_interact_prompt() {#method-hide-interact-prompt}

Hides the prompt above the object.

### void handle_destruction() {#method-handle-destruction}

Destroys the object: plays its death, drops what it drops and tells everyone.

### bool is_destroyed() {#method-is-destroyed}

Has the object been destroyed?

### Array[LootRule] get_loot_rules() {#method-get-loot-rules}

The loot rules of this object: the ones of the placed object when it has its own, else the ones of its definition, plus those of the older settings of its container (its fixed contents and its loot table)

### int run_loot_rules( trigger: LootRule.Trigger, receiver: Entity = null ) {#method-run-loot-rules}

Rolls the loot rules of a trigger into the inventory of this object (see LootDispatcher). `receiver` is whoever gets the loot (the one who opens a chest): it changes the amount and the quality by its loot gains and can give the item level. Returns how many rules rolled

### bool has_pending_loot() {#method-has-pending-loot}

Is there a rule that rolls the first time the object is opened and has not rolled yet?

### bool has_lootable_remains() {#method-has-lootable-remains}

Does a destroyed object still hold something to take (loot in its inventory, or a rule that rolls when it is opened)?

### void process_interaction( entity: Entity ) {#method-process-interaction}

Runs the interaction of the object for an entity (checks, then does what the interaction does).

### String get_requirements_blocker( entity: Entity ) {#method-get-requirements-blocker}

Why the user cannot use the object ("" = they can): what the object asks for (see InteractableDefinition.use_requirements)

### bool is_in_use() {#method-is-in-use}

Is somebody using the object now (a use that takes time)?

### void cancel_use() {#method-cancel-use}

The use that takes time is cancelled (the user moved, was hurt, cast an ability, died, or an event cancels it)

### bool is_locked() {#method-is-locked}

Is the object locked?

### Interaction get_interaction_by_type( type_name: String ) {#method-get-interaction-by-type}

The interaction of this object when it is of the type asked for (the name of its class), else null

### bool unlock_from_external() {#method-unlock-from-external}

Unlocks the object without its key (a script, a switch). False when it was not locked.

### bool play_animation( anim_name: String ) {#method-play-animation}

Plays an animation on the rig of the object. False when there is none.

### bool has_animation( anim_name: String ) {#method-has-animation}

Does the rig of the object have this animation?

### Array[String] get_available_animations() {#method-get-available-animations}

The names of the animations of the rig of the object.

### void play_sound_stream( stream: AudioStream ) {#method-play-sound-stream}

Plays a sound from the object.

### Node3D get_attachment_point_node( location: VFXSelection.VfxLocation ) {#method-get-attachment-point-node}

The node where a visual effect attaches (the object itself when it has no rig).

### int get_unique_id() {#method-get-unique-id}

The id of the unique record of the object (its place in the world), or -1 when it has none.

### int get_object_id() {#method-get-object-id}

The same as get_unique_id.

### String get_object_name() {#method-get-object-name}

The name of the object: its display name, else its node name.

### void set_faction_id( new_faction: FactionDefinition ) {#method-set-faction-id}

Sets the faction of the object.

### int get_faction_id() {#method-get-faction-id}

The id of the faction of the object.

### void set_summoner( new_summoner: Entity, effect: Effect = null ) {#method-set-summoner}

Marks the object as summoned by an entity (and by an effect): it takes the faction of the summoner and goes when the summoner dies.

### void summon_finished() {#method-summon-finished}

Ends the life of a summoned object (it is removed).

### InventoryComponent get_inventory() {#method-get-inventory}

The inventory component of the object.

### bool has_inventory() {#method-has-inventory}

Does the object have an inventory?

### EffectInstance get_effect( effect_id: int ) {#method-get-effect}

The effect of the object with this effect id, or null.

### EffectInstance get_effect_from_caller( effect_id: int, originator: Entity ) {#method-get-effect-from-caller}

The effect with this id that this originator put on the object, or null.

### void reduce_effect_stacks( effect_instance: EffectInstance, stacks_to_remove: int ) {#method-reduce-effect-stacks}

Takes stacks off an effect (the effect ends when none is left).

### Array[EffectInstance] get_active_effects_by_type( effect_type: String ) {#method-get-active-effects-by-type}

The active effects of one effect type (the class name of the type).

### Array[EffectInstance] get_all_active_effects() {#method-get-all-active-effects}

A copy of the list of the active effects of the object.

### int get_active_effect_count() {#method-get-active-effect-count}

How many effects are active on the object.

### bool has_any_active_effects() {#method-has-any-active-effects}

Is any effect active on the object?

### void remove_all_effects() {#method-remove-all-effects}

Removes every effect from the object.

### void remove_effects_from_originator( originator: Entity ) {#method-remove-effects-from-originator}

Removes the effects an entity put on the object.

### DamageResult take_damage( result: DamageResult ) {#method-take-damage}

Completes the DamageResult for a hit on this object (see StatsComponent.take_damage). Returns null if it aborted

### HealingResult take_healing( result: HealingResult ) {#method-take-healing}

Completes the HealingResult for a heal on this object (see StatsComponent.take_healing). Returns null if it aborted

### bool can_apply_school_effect( school_id: int, source_entity: Variant = null, effect: EffectInstance = null ) {#method-can-apply-school-effect}

Can an effect of this school land on the object?

### float get_current_health() {#method-get-current-health}

The current health (the current value of the master pool).

### float get_max_health() {#method-get-max-health}

The maximum health (the maximum of the master pool).

### float get_health_percentage() {#method-get-health-percentage}

The health as a percentage of the maximum.

### bool is_health_below( threshold: float ) {#method-is-health-below}

Is the health percentage below the threshold?

### bool is_health_above( threshold: float ) {#method-is-health-above}

Is the health percentage above the threshold?

### float get_pool_current( pool_id: int ) {#method-get-pool-current}

The current value of a pool.

### float get_pool_max( pool_id: int ) {#method-get-pool-max}

The maximum value of a pool.

### float get_pool_percentage( pool_id: int ) {#method-get-pool-percentage}

The value of a pool as a percentage of its maximum.

### bool has_pool( pool_id: int ) {#method-has-pool}

Does the object have this pool?

### bool is_master_pool( pool_id: int ) {#method-is-master-pool}

Is this the master pool of the object (the one whose emptying destroys it)?

### PoolInstance get_master_pool() {#method-get-master-pool}

The master pool of the object (health).

### float add_pool_value( pool_id: int, amount: float ) {#method-add-pool-value}

Adds an amount to a pool, up to its maximum. Gives back what was added.

### bool remove_pool_value( pool_id: int, amount: float ) {#method-remove-pool-value}

Takes an amount from a pool. False when the object has no such pool.

### bool is_resource_pool( pool_id: int ) {#method-is-resource-pool}

Is the pool a resource pool and not a health pool?

### float get_stat( stat_id: int ) {#method-get-stat}

The current value of a stat, with every bonus and multiplier.

### bool has_stat( stat_id: int ) {#method-has-stat}

Does the object have this stat?

### Array[int] get_stat_ids_in_group( group_id: int ) {#method-get-stat-ids-in-group}

The ids of the stats the object has in a stat group.

### bool add_stat_bonus( stat_id: int, amount: float ) {#method-add-stat-bonus}

Adds a flat amount to a stat (a negative amount takes away).

### bool add_stat_multiplier( stat_id: int, amount: float ) {#method-add-stat-multiplier}

Adds to the multiplier of a stat.

### bool set_stat_base( stat_id: int, value: float ) {#method-set-stat-base}

Sets the base value of a stat.

### void sync_to_unique_data() {#method-sync-to-unique-data}

Writes the state of the object (locked, destroyed, health, interaction state) into its unique record, so a save keeps it.

### void set_current_target_hover() {#method-set-current-target-hover}

Shows the hover highlight on the object (the mouse is over it).

### void set_current_target_on() {#method-set-current-target-on}

Shows the target highlight, in the color of the relation of the object to the player.

### void set_current_target_off() {#method-set-current-target-off}

Takes the target highlight off.

### void set_map_marker_icon( type: Entity.MapMarkerType ) {#method-set-map-marker-icon}

Sets the picture of the mini map mark of the object.

### Dictionary to_save_data() {#method-to-save-data}

Standardized save method

### void from_save_data( data: Dictionary, system_hub: GameHost.SystemHub ) {#method-from-save-data}

Standardized load method

