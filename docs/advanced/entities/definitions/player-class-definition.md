<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerClassDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

PlayerClassDefinition defines the template and progression for player character classes This is a class archetype (like "Warrior", "Mage") not tied to specific entity models

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `Dictionary` | [starter_equipment](#prop-starter-equipment) | `{}` |
| `Array[LevelReward]` | [level_rewards](#prop-level-rewards) | `[]` |
| `Array[int]` | [locked_equipment_slots](#prop-locked-equipment-slots) | `[]` |
| `Array[int]` | [skill_trees](#prop-skill-trees) | `[]` |
| `StatsData` | [stats_data](#prop-stats-data) |  |
| `int` | [basic_attack_data](#prop-basic-attack-data) |  |
| `Array[int]` | [active_abilities_data](#prop-active-abilities-data) |  |
| `Array[int]` | [passive_abilities_data](#prop-passive-abilities-data) |  |
| `int` | [behavior_script](#prop-behavior-script) |  |
| `int` | [combat_script](#prop-combat-script) |  |
| `bool` | [template](#prop-template) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_class_name](#method-get-class-name)() |
| `bool` | [is_template](#method-is-template)() |
| `String` | [get_display_name](#method-get-display-name)() |
| `bool` | [set_level_reward](#method-set-level-reward)( `level: int, reward: LevelReward` ) |
| `LevelReward` | [get_level_reward](#method-get-level-reward)( `level: int` ) |
| `bool` | [has_level_reward](#method-has-level-reward)( `level: int` ) |
| `bool` | [remove_level_reward](#method-remove-level-reward)( `level: int` ) |
| `StatsData` | [get_base_stats](#method-get-base-stats)() |
| `ActiveAbilityDefinition` | [get_base_basic_attack](#method-get-base-basic-attack)() |
| `Array[ActiveAbilityDefinition]` | [get_base_active_abilities](#method-get-base-active-abilities)() |
| `Array[PassiveAbilityDefinition]` | [get_base_passive_abilities](#method-get-base-passive-abilities)() |
| `void` | [set_starter_equipment](#method-set-starter-equipment)( `equipment: Dictionary` ) |
| `Dictionary` | [get_starter_equipment](#method-get-starter-equipment)() |
| `void` | [add_locked_equipment_slot](#method-add-locked-equipment-slot)( `slot_id: int` ) |
| `bool` | [remove_locked_equipment_slot](#method-remove-locked-equipment-slot)( `slot_id: int` ) |
| `bool` | [is_equipment_slot_locked](#method-is-equipment-slot-locked)( `slot_id: int` ) |
| `Array[int]` | [get_locked_equipment_slot_ids](#method-get-locked-equipment-slot-ids)() |
| `Array[EquipmentSlotDefinition]` | [get_locked_equipment_slots](#method-get-locked-equipment-slots)() |
| `void` | [clear_locked_equipment_slots](#method-clear-locked-equipment-slots)() |
| `void` | [add_skill_tree](#method-add-skill-tree)( `tree_id: int` ) |
| `bool` | [remove_skill_tree](#method-remove-skill-tree)( `tree_id: int` ) |
| `Array[SkillTree]` | [get_skill_trees](#method-get-skill-trees)() |
| `ModularBehaviorScript` | [get_behavior_script](#method-get-behavior-script)() |
| `ModularCombatScript` | [get_combat_script](#method-get-combat-script)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

### Color color = Color.WHITE {#prop-color}

Theme color for this class used in UI

*Starting Equipment*

### Dictionary starter_equipment =  {#prop-starter-equipment}

Starting equipment mapped by slot_key (e.g., "MainHand:0") -&gt; item_id

*Progression*

### Array[LevelReward] level_rewards = [] {#prop-level-rewards}

Level rewards array (index = level - 1, so level_rewards[0] = level 1 rewards)

### Array[int] locked_equipment_slots = [] {#prop-locked-equipment-slots}

Equipment slots that start locked for this class

### Array[int] skill_trees = [] {#prop-skill-trees}

Skill trees available to this class

*Combat Stats*

### StatsData stats_data {#prop-stats-data}

Stats configuration including health, resources, and combat stats

*Ability Definitions*

### int basic_attack_data {#prop-basic-attack-data}

Primary attack ability definition used for auto-attacks

### Array[int] active_abilities_data {#prop-active-abilities-data}

Collection of active ability definitions this class starts with

### Array[int] passive_abilities_data {#prop-passive-abilities-data}

Collection of passive ability definitions this class starts with

*AI Scripts*

### int behavior_script {#prop-behavior-script}

Behavior Script - optional

### int combat_script {#prop-combat-script}

Combat Script - optional

### bool template = false {#prop-template}

*No description yet.*

## Method descriptions

### String get_class_name() {#method-get-class-name}

Get class name

### bool is_template() {#method-is-template}

Check if this PlayerClassDefinition is a template

### String get_display_name() {#method-get-display-name}

Get display name appropriate for templates vs classes

### bool set_level_reward( level: int, reward: LevelReward ) {#method-set-level-reward}

Set level reward for specific level

### LevelReward get_level_reward( level: int ) {#method-get-level-reward}

Get level reward for specific level

### bool has_level_reward( level: int ) {#method-has-level-reward}

Check if has level reward

### bool remove_level_reward( level: int ) {#method-remove-level-reward}

Remove level reward

### StatsData get_base_stats() {#method-get-base-stats}

Get base stats

### ActiveAbilityDefinition get_base_basic_attack() {#method-get-base-basic-attack}

Get basic attack resource

### Array[ActiveAbilityDefinition] get_base_active_abilities() {#method-get-base-active-abilities}

Get active abilities as resources

### Array[PassiveAbilityDefinition] get_base_passive_abilities() {#method-get-base-passive-abilities}

Get passive abilities as resources

### void set_starter_equipment( equipment: Dictionary ) {#method-set-starter-equipment}

Set starter equipment

### Dictionary get_starter_equipment() {#method-get-starter-equipment}

Get starter equipment

### void add_locked_equipment_slot( slot_id: int ) {#method-add-locked-equipment-slot}

Add locked equipment slot by ID

### bool remove_locked_equipment_slot( slot_id: int ) {#method-remove-locked-equipment-slot}

Remove locked equipment slot by ID

### bool is_equipment_slot_locked( slot_id: int ) {#method-is-equipment-slot-locked}

Check if equipment slot is locked (by ID)

### Array[int] get_locked_equipment_slot_ids() {#method-get-locked-equipment-slot-ids}

Get locked equipment slot IDs

### Array[EquipmentSlotDefinition] get_locked_equipment_slots() {#method-get-locked-equipment-slots}

Get locked equipment slots as resources

### void clear_locked_equipment_slots() {#method-clear-locked-equipment-slots}

Clear locked equipment slots

### void add_skill_tree( tree_id: int ) {#method-add-skill-tree}

Add skill tree by ID

### bool remove_skill_tree( tree_id: int ) {#method-remove-skill-tree}

Remove skill tree by ID

### Array[SkillTree] get_skill_trees() {#method-get-skill-trees}

Get all skill tree resources

### ModularBehaviorScript get_behavior_script() {#method-get-behavior-script}

Get behavior script resource

### ModularCombatScript get_combat_script() {#method-get-combat-script}

Get combat script resource

### bool is_valid() {#method-is-valid}

Validates that all required class configuration is present

