<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Player

**Inherits:** [Entity](/advanced/entities/runtime/entity) < [CharacterBody3D](https://docs.godotengine.org/en/stable/classes/class_characterbody3d.html)

Player represents a player-controlled character in the game. It extends the base Entity class with specific features for player characters, including class specialization, experience and leveling systems, and player-specific interactions.

## Description

Key features:

- Implements player class system with associated stats and abilities
- Manages skill trees and point pool progression
- Handles experience points and leveling
- Supports player AI with follow/attack stances
- Manages action bar configuration
- Integrates with the game's UI and interaction systems

## Properties

| | | |
|---|---|---|
| `PlayerClassDefinition:` | [player_class](#prop-player-class) |  |

## Variables

| | | |
|---|---|---|
| `int` | [experience](#var-experience) | `0:` |
| `int` | [experience_requirement](#var-experience-requirement) |  |
| `bool` | [follow_stance](#var-follow-stance) | `true:` |
| `bool` | [attack_stance](#var-attack-stance) | `true` |
| `Array[ActionBarSlotData]` | [action_bar_configuration](#var-action-bar-configuration) | `[]` |
| `Dictionary` | [action_bar_locked](#var-action-bar-locked) | `{}` |
| `Dictionary` | [action_bar_reserved](#var-action-bar-reserved) | `{}` |
| `bool` | [is_awaiting_target](#var-is-awaiting-target) | `false` |
| `Array[SkillTreeInstance]` | [skill_tree_instances](#var-skill-tree-instances) | `[]` |
| `Array[SkillPointPoolInstance]` | [skill_point_pools](#var-skill-point-pools) | `[]` |
| `Array[int]` | [granted_skill_tree_ids](#var-granted-skill-tree-ids) | `[]` |
| `Array[EquipmentSlotDefinition]` | [unlocked_equipment_slots](#var-unlocked-equipment-slots) | `[]` |
| `Marker3D` | [drop_location](#var-drop-location) |  |
| `AudioListener3D` | [audio_listener](#var-audio-listener) |  |
| `Area3D` | [interaction_area](#var-interaction-area) |  |
| `CollisionShape3D` | [interaction_shape](#var-interaction-shape) |  |
| `Array` | [nearby_interactables](#var-nearby-interactables) | `[]` |
| `Variant` | [current_interact_target](#var-current-interact-target) | `null` |
| `bool` | [can_interact](#var-can-interact) | `false` |
| `bool` | [target_locked](#var-target-locked) | `false:` |
| `PlayerController` | [player_controller](#var-player-controller) |  |
| `PartyManager` | [party_manager](#var-party-manager) |  |
| `Array[Reward]` | [pending_rewards](#var-pending-rewards) | `[]` |
| `ProficiencyTracker` | [proficiencies](#var-proficiencies) |  |
| `int` | [chosen_language_id](#var-chosen-language-id) | `0` |
| `bool` | [is_reserved](#var-is-reserved) | `false` |

## Methods

| | |
|---|---|
| `int` | [get_proficiency_level](#method-get-proficiency-level)( `proficiency_id: int` ) |
| `int` | [get_spoken_language_id](#method-get-spoken-language-id)() |
| `ProficiencyTracker` | [get_proficiencies](#method-get-proficiencies)() |
| `void` | [set_reserved](#method-set-reserved)( `value: bool` ) |
| `Dictionary` | [grant_reward](#method-grant-reward)( `reward: Reward, for_good: bool = false` ) |
| `AbilityInstance` | [get_basic_attack](#method-get-basic-attack)() |
| `bool` | [is_companion](#method-is-companion)() |
| `void` | [initialize_entity](#method-initialize-entity)( `system_hub: GameHost.SystemHub` ) |
| `void` | [equip_starting_gear](#method-equip-starting-gear)() |
| `Array[SkillTree]` | [get_skill_tree_definitions](#method-get-skill-tree-definitions)() |
| `bool` | [grant_skill_tree](#method-grant-skill-tree)( `tree_id: int` ) |
| `bool` | [revoke_skill_tree](#method-revoke-skill-tree)( `tree_id: int` ) |
| `Array[SkillTreeInstance]` | [get_all_skill_tree_instances](#method-get-all-skill-tree-instances)() |
| `Array[SkillPointPoolInstance]` | [get_all_skill_point_pools](#method-get-all-skill-point-pools)() |
| `SkillTreeInstance` | [get_skill_tree_instance](#method-get-skill-tree-instance)( `tree_id: int` ) |
| `SkillPointPoolInstance` | [get_skill_point_pool_instance](#method-get-skill-point-pool-instance)( `pool_id: int` ) |
| `bool` | [can_spend_from_pool](#method-can-spend-from-pool)( `pool_def: SkillPointPool, amount: int = 1` ) |
| `bool` | [spend_points_from_pool](#method-spend-points-from-pool)( `pool_def: SkillPointPool, amount: int = 1` ) |
| `bool` | [refund_points_to_pool](#method-refund-points-to-pool)( `pool_def: SkillPointPool, amount: int = 1` ) |
| `bool` | [award_points_to_pool](#method-award-points-to-pool)( `pool_def: SkillPointPool, amount: int = 1` ) |
| `bool` | [add_skill_points_to_pool](#method-add-skill-points-to-pool)( `pool_id: int, amount: int` ) |
| `bool` | [remove_skill_points_from_pool](#method-remove-skill-points-from-pool)( `pool_id: int, amount: int` ) |
| `int` | [get_available_skill_points](#method-get-available-skill-points)( `pool_id: int` ) |
| `Dictionary` | [can_unlock_skill_node](#method-can-unlock-skill-node)( `tree_id: int, node_id: int` ) |
| `bool` | [unlock_skill_node](#method-unlock-skill-node)( `tree_id: int, node_id: int, choice_index: int = -1` ) |
| `bool` | [refund_skill_node](#method-refund-skill-node)( `tree_id: int, node_id: int, full_refund: bool = false` ) |
| `bool` | [has_skill_node_unlocked](#method-has-skill-node-unlocked)( `tree_id: int, node_id: int` ) |
| `int` | [get_skill_node_rank](#method-get-skill-node-rank)( `tree_id: int, node_id: int` ) |
| `void` | [reset_skill_tree](#method-reset-skill-tree)( `tree_id: int` ) |
| `bool` | [is_equipment_slot_unlocked](#method-is-equipment-slot-unlocked)( `slot: EquipmentSlotDefinition` ) |
| `void` | [unlock_equipment_slot](#method-unlock-equipment-slot)( `slot: EquipmentSlotDefinition` ) |
| `void` | [lock_equipment_slots](#method-lock-equipment-slots)( `slots: Array` ) |
| `void` | [lock_equipment_slot](#method-lock-equipment-slot)( `slot: EquipmentSlotDefinition` ) |
| `void` | [level_up](#method-level-up)() |
| `void` | [update_experience](#method-update-experience)( `amount: int` ) |
| `bool` | [can_level_up](#method-can-level-up)() |
| `int` | [get_experience_needed_for_next_level](#method-get-experience-needed-for-next-level)() |
| `int` | [get_max_level](#method-get-max-level)() |
| `int` | [get_action_bar_slot_count](#method-get-action-bar-slot-count)() |
| `bool` | [is_action_bar_slot_locked](#method-is-action-bar-slot-locked)( `slot_index: int` ) |
| `void` | [validate_action_bar_integrity](#method-validate-action-bar-integrity)() |
| `void` | [update_action_bar_slot](#method-update-action-bar-slot)( `slot_index: int, slot_data: ActionBarSlotData, by_system: bool = false` ) |
| `void` | [clear_action_bar_slot](#method-clear-action-bar-slot)( `slot_index: int` ) |
| `void` | [set_action_bar_slot_ability](#method-set-action-bar-slot-ability)( `slot_index: int, ability_id: int, lock_change: int = 0` ) |
| `void` | [push_action_bar_override](#method-push-action-bar-override)( `slot_index: int, source: Variant, ability: AbilityInstance` ) |
| `void` | [remove_action_bar_override](#method-remove-action-bar-override)( `slot_index: int, source: Variant` ) |
| `bool` | [is_action_bar_slot_covered](#method-is-action-bar-slot-covered)( `slot_index: int` ) |
| `void` | [apply_action_bar_layout](#method-apply-action-bar-layout)() |
| `Variant` | [get_action_bar_content](#method-get-action-bar-content)( `slot_index: int` ) |
| `void` | [initialize_action_bar](#method-initialize-action-bar)( `slot_count: int = 10` ) |
| `Array` | [serialize_action_bar](#method-serialize-action-bar)() |
| `void` | [deserialize_action_bar](#method-deserialize-action-bar)( `serialized_bar: Array` ) |
| `String` | [get_player_class_name](#method-get-player-class-name)() |
| `bool` | [has_valid_player_class](#method-has-valid-player-class)() |
| `void` | [interact](#method-interact)() |
| `DroppedItem` | [drop_from_bag](#method-drop-from-bag)( `item: ItemInstance, quantity: int = -1` ) |
| `DroppedItem` | [drop_item_instance](#method-drop-item-instance)( `piece: ItemInstance` ) |
| `void` | [entity_death](#method-entity-death)( `announce: bool = true` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary, system_hub: GameHost.SystemHub` ) |

## Signals

### action_bar_configuration_updated( slot_index: int, slot_data: ActionBarSlotData ) {#signal-action-bar-configuration-updated}

Signal emitted when action bar configuration changes

### player_class_changed( new_class: PlayerClassDefinition ) {#signal-player-class-changed}

Signal emitted when player class changes

### target_lock_changed( is_locked: bool, locked_target: Variant ) {#signal-target-lock-changed}

Signal emitted when target lock state changes

### reward_blocked( reward: Reward, reason: String ) {#signal-reward-blocked}

Signal emitted when a reward could not be given (no room in the bag): it waits in `pending_rewards`

### reward_given( reward: Reward ) {#signal-reward-given}

Signal emitted when a reward was given (also one that had waited)

### experience_gained( amount: int ) {#signal-experience-gained}

Emitted when the player gains experience, with what was gained (after the experience multiplier)

## Property descriptions

### PlayerClassDefinition: player_class {#prop-player-class}

The PlayerClassDefinition resource that defines this player's class template

## Variable descriptions

### int experience = 0: {#var-experience}

Current experience amount for this Player Experience towards the next level (what is left over after the levels it paid for; what a level costs is `get_experience_needed_for_next_level()`)

### int experience_requirement {#var-experience-requirement}

Required amount of experience needed for next level up

### bool follow_stance = true: {#var-follow-stance}

Stance of a companion (while the player does not control this member): follow the member in control (off: stay where it is)

### bool attack_stance = true {#var-attack-stance}

Stance of a companion: fight freely, joining the fights of the party (off: passive, it only fights back when it is attacked)

### Array[ActionBarSlotData] action_bar_configuration = [] {#var-action-bar-configuration}

Actionbar configuration for this player: what each slot shows now (an effect can cover what the player put on it, see push_action_bar_override)

### Dictionary action_bar_locked =  {#var-action-bar-locked}

The slots the player cannot change (a plan of the class, an event): slot index -&gt; true. Saved

### Dictionary action_bar_reserved =  {#var-action-bar-reserved}

The slots that wait for an ability the player has not learned yet: slot index -&gt; ability id. Saved. The ability goes on its slot when it is learned

### bool is_awaiting_target = false {#var-is-awaiting-target}

Flag indicating if player is waiting for player to select a target for an ability

### Array[SkillTreeInstance] skill_tree_instances = [] {#var-skill-tree-instances}

Active skill tree instances for this player

### Array[SkillPointPoolInstance] skill_point_pools = [] {#var-skill-point-pools}

Skill point pool instances for available pools

### Array[int] granted_skill_tree_ids = [] {#var-granted-skill-tree-ids}

Skill trees given to this player by a reward (a specialization, a quest, an event): saved with the player, on top of the trees of its class and its character

### Array[EquipmentSlotDefinition] unlocked_equipment_slots = [] {#var-unlocked-equipment-slots}

Currently unlocked equipment slots for this player

### Marker3D drop_location {#var-drop-location}

Position marker for where dropped items appear

### AudioListener3D audio_listener {#var-audio-listener}

The audio listen to redirect 3d audio listen position from camera to the player

### Area3D interaction_area {#var-interaction-area}

Area3D for detecting nearby interactables (3m radius cylinder)

### CollisionShape3D interaction_shape {#var-interaction-shape}

CollisionShape3D for the interaction area

### Array nearby_interactables = [] {#var-nearby-interactables}

Array of nearby interactables within detection radius

### Variant current_interact_target = null {#var-current-interact-target}

Current target detected by the interact raycast

### bool can_interact = false {#var-can-interact}

Whether the player can currently interact with a detected target

### bool target_locked = false: {#var-target-locked}

Whether player is locked onto current target

### PlayerController player_controller {#var-player-controller}

Kinda don't like process logic anyway so lets figure a better solution

### PartyManager party_manager {#var-party-manager}

The party manager this player belongs to (rewards reach the crafting manager through it)

### Array[Reward] pending_rewards = [] {#var-pending-rewards}

Rewards that could not be given yet (no room for an item): they wait here, are saved, and are given as soon as the bag has room

### ProficiencyTracker proficiencies {#var-proficiencies}

The skill of the player in weapon types, armor classes, schools and any skill the game adds (see ProficiencyDefinition)

### int chosen_language_id = 0 {#var-chosen-language-id}

The language the player has chosen to speak (/language). 0 = the one of the character

### bool is_reserved = false {#var-is-reserved}

Is this companion waiting in the reserve of the party (out of the world, not run by anything)?

## Method descriptions

### int get_proficiency_level( proficiency_id: int ) {#method-get-proficiency-level}

The level of a proficiency now, boosts included (see ProficiencyTracker.get_level)

### int get_spoken_language_id() {#method-get-spoken-language-id}

The language this character speaks: the one the player chose, else the one of its definition

### ProficiencyTracker get_proficiencies() {#method-get-proficiencies}

The proficiency tracker. It exists before the player is set up when something needs it early (a level 1 reward gives a proficiency level while the character is made)

### void set_reserved( value: bool ) {#method-set-reserved}

A companion in the reserve leaves the world: hidden, not processed, not detected, and it detects nothing. Joining the party undoes it

### Dictionary grant_reward( reward: Reward, for_good: bool = false ) {#method-grant-reward}

Give a reward. One that cannot be given right now (no room for its items) waits instead of being lost: the player is warned and it is given when there is room. The answer has `pending` set then. `for_good`: the reward is the player's from now on (a quest, a conversation, an event, a trainer): an ability or a rank it gives is saved with the player. Left off, the caller keeps the reward itself and gives it again after a load (a skill tree, the levels of a class)

### AbilityInstance get_basic_attack() {#method-get-basic-attack}

The basic attack of a player is the one of the weapon, unless the project turns the built-in basic attack off (then there is none: slot 1 is a slot like any other)

### bool is_companion() {#method-is-companion}

Is this member run by the AI (a party member the player does not control)?

### void initialize_entity( system_hub: GameHost.SystemHub ) {#method-initialize-entity}

Initializes the player entity, extending the base entity initialization

### void equip_starting_gear() {#method-equip-starting-gear}

Equip starting gear from CharacterDefinition override or PlayerClassDefinition Called by PartyManager after player is in the scene tree so rig mesh assignments work

### Array[SkillTree] get_skill_tree_definitions() {#method-get-skill-tree-definitions}

The skill trees this player has of its own: the trees of its class, then the ones of its character, then the ones a reward gave (each once)

### bool grant_skill_tree( tree_id: int ) {#method-grant-skill-tree}

Gives the player a skill tree (a reward gives it). False when it has the tree already or the tree does not exist

### bool revoke_skill_tree( tree_id: int ) {#method-revoke-skill-tree}

Takes a tree a reward gave away again: what was spent in it is refunded and its rewards are taken back. False when the tree was not given by a reward

### Array[SkillTreeInstance] get_all_skill_tree_instances() {#method-get-all-skill-tree-instances}

Every skill tree the player can see: its own, the ones of the professions and the ones of the factions

### Array[SkillPointPoolInstance] get_all_skill_point_pools() {#method-get-all-skill-point-pools}

Every skill point pool of the player: its own, the ones of its professions and the ones of the factions

### SkillTreeInstance get_skill_tree_instance( tree_id: int ) {#method-get-skill-tree-instance}

Get skill tree instance by definition ID (the player's own, then the ones of the professions and the factions)

### SkillPointPoolInstance get_skill_point_pool_instance( pool_id: int ) {#method-get-skill-point-pool-instance}

Get skill point pool instance by definition ID. The points of a profession or a faction pool are kept by the owner of those (SkillHolders), not by the character

### bool can_spend_from_pool( pool_def: SkillPointPool, amount: int = 1 ) {#method-can-spend-from-pool}

Check if player can spend points from a specific pool

### bool spend_points_from_pool( pool_def: SkillPointPool, amount: int = 1 ) {#method-spend-points-from-pool}

Spend points from a skill point pool

### bool refund_points_to_pool( pool_def: SkillPointPool, amount: int = 1 ) {#method-refund-points-to-pool}

Refund points to a skill point pool

### bool award_points_to_pool( pool_def: SkillPointPool, amount: int = 1 ) {#method-award-points-to-pool}

Award points to a skill point pool

### bool add_skill_points_to_pool( pool_id: int, amount: int ) {#method-add-skill-points-to-pool}

Gives points to a skill point pool by its id (what a skill point reward does); false when the pool does not exist or is capped

### bool remove_skill_points_from_pool( pool_id: int, amount: int ) {#method-remove-skill-points-from-pool}

Takes points that are not spent away again (an unapplied reward)

### int get_available_skill_points( pool_id: int ) {#method-get-available-skill-points}

Get available points in a pool (convenience)

### Dictionary can_unlock_skill_node( tree_id: int, node_id: int ) {#method-can-unlock-skill-node}

Check if player can unlock a specific node

### bool unlock_skill_node( tree_id: int, node_id: int, choice_index: int = -1 ) {#method-unlock-skill-node}

Unlock a skill node

### bool refund_skill_node( tree_id: int, node_id: int, full_refund: bool = false ) {#method-refund-skill-node}

Refund a skill node

### bool has_skill_node_unlocked( tree_id: int, node_id: int ) {#method-has-skill-node-unlocked}

Check if player has unlocked a specific node

### int get_skill_node_rank( tree_id: int, node_id: int ) {#method-get-skill-node-rank}

Get current rank of a skill node

### void reset_skill_tree( tree_id: int ) {#method-reset-skill-tree}

Reset entire skill tree

### bool is_equipment_slot_unlocked( slot: EquipmentSlotDefinition ) {#method-is-equipment-slot-unlocked}

Check if an equipment slot is unlocked

### void unlock_equipment_slot( slot: EquipmentSlotDefinition ) {#method-unlock-equipment-slot}

Unlock an equipment slot

### void lock_equipment_slots( slots: Array ) {#method-lock-equipment-slots}

Locks several slots (what an unapplied slot reward does)

### void lock_equipment_slot( slot: EquipmentSlotDefinition ) {#method-lock-equipment-slot}

Lock an equipment slot

### void level_up() {#method-level-up}

Level up a specific player

### void update_experience( amount: int ) {#method-update-experience}

Update experience and check for level ups

### bool can_level_up() {#method-can-level-up}

Check if player can level up

### int get_experience_needed_for_next_level() {#method-get-experience-needed-for-next-level}

Get experience needed for next level

### int get_max_level() {#method-get-max-level}

Get max level from player class

### int get_action_bar_slot_count() {#method-get-action-bar-slot-count}

How many slots the action bar has (the setting of the project)

### bool is_action_bar_slot_locked( slot_index: int ) {#method-is-action-bar-slot-locked}

Can the player not change this slot? (the project says the bar is fixed, the plan of the class or an event locked it, or an effect covers it)

### void validate_action_bar_integrity() {#method-validate-action-bar-integrity}

Validate all action bar slots and clean up invalid references

### void update_action_bar_slot( slot_index: int, slot_data: ActionBarSlotData, by_system: bool = false ) {#method-update-action-bar-slot}

Updates the action bar configuration at the specified index Parameters:

- slot_index: The index in the action bar to update (0-based)
- ability: The ability to assign to the slot, or null to clear it

`by_system` is true for the game itself (events, the plan of a class, cleaning up): the player's own change of a slot that is locked is refused (the bar shows what it holds again)

### void clear_action_bar_slot( slot_index: int ) {#method-clear-action-bar-slot}

Clear action bar slot (by the game: a locked slot is cleared too)

### void set_action_bar_slot_ability( slot_index: int, ability_id: int, lock_change: int = 0 ) {#method-set-action-bar-slot-ability}

Puts an ability on a slot, empties it (ability_id 0), or reserves it for an ability that is not known yet (it goes there when it is learned). `lock_change`: 0 keep the lock as it is, 1 lock, 2 unlock. A locked slot keeps its plan: the ability goes back to it when it is learned again

### void push_action_bar_override( slot_index: int, source: Variant, ability: AbilityInstance ) {#method-push-action-bar-override}

An effect covers a slot: it shows `ability` (null = the slot is empty and cannot be used) and the player cannot change it. What was on the slot comes back when the effect ends (remove_action_bar_override)

### void remove_action_bar_override( slot_index: int, source: Variant ) {#method-remove-action-bar-override}

Takes away what a source put on a slot of the action bar; the slot shows what was under it.

### bool is_action_bar_slot_covered( slot_index: int ) {#method-is-action-bar-slot-covered}

Is an effect covering this slot?

### void apply_action_bar_layout() {#method-apply-action-bar-layout}

The plan of the player class goes on the bar: each planned slot gets its ability (or waits for it) and its lock

### Variant get_action_bar_content( slot_index: int ) {#method-get-action-bar-content}

Get content at action bar slot

### void initialize_action_bar( slot_count: int = 10 ) {#method-initialize-action-bar}

Initialize action bar with default size

### Array serialize_action_bar() {#method-serialize-action-bar}

Serialize action bar configuration (what the player put on the slots: a slot an effect covers saves what is underneath)

### void deserialize_action_bar( serialized_bar: Array ) {#method-deserialize-action-bar}

Deserialize action bar configuration

### String get_player_class_name() {#method-get-player-class-name}

Get display name for current PlayerClassDefinition

### bool has_valid_player_class() {#method-has-valid-player-class}

Check if player has a valid PlayerClassDefinition assigned

### void interact() {#method-interact}

Performs interaction with the current nearest target

### DroppedItem drop_from_bag( item: ItemInstance, quantity: int = -1 ) {#method-drop-from-bag}

Drops an item of the bag (or part of its stack) on the ground in front of the character. Gives the dropped item, or null when it cannot be dropped: dropped items are off in the Gameplay Config, the item is a key item, or the item is not in the bag

### DroppedItem drop_item_instance( piece: ItemInstance ) {#method-drop-item-instance}

Drops an item that is already out of the bag (dragged out of it, or taken off) on the ground in front of the character

### void entity_death( announce: bool = true ) {#method-entity-death}

A player that dies loses items when the Gameplay Config says so

### Dictionary to_save_data() {#method-to-save-data}

Save player data including skill trees and point pools

### void from_save_data( save_data: Dictionary, system_hub: GameHost.SystemHub ) {#method-from-save-data}

Load player data including skill trees and point pools

