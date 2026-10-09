<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NPCDefinition

**Inherits:** [EntityDefinition](/advanced/entities/definitions/entity-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

NPCDefinition extends EntityDefinition with combat stats, AI behavior, and loot systems Used for creating NPC entities with full combat and inventory capabilities

## Properties

| | | |
|---|---|---|
| `int` | [default_level](#prop-default-level) | `1` |
| `int` | [experience_worth](#prop-experience-worth) | `0` |
| `float` | [experience_multiplier](#prop-experience-multiplier) | `1.0` |
| `int` | [faction](#prop-faction) | `0` |
| `StatsData` | [stats_data](#prop-stats-data) | `StatsData.new()` |
| `LootTableLogic` | [loot_table_logic](#prop-loot-table-logic) | `LootTableLogic.NONE` |
| `int` | [loot_table](#prop-loot-table) | `0` |
| `Dictionary` | [inventory](#prop-inventory) | `{ ... }` |
| `int` | [basic_attack_data](#prop-basic-attack-data) | `0` |
| `Array[int]` | [active_abilities_data](#prop-active-abilities-data) | `[]` |
| `Array[int]` | [passive_abilities_data](#prop-passive-abilities-data) | `[]` |
| `int` | [behavior_script](#prop-behavior-script) | `0` |
| `int` | [combat_script](#prop-combat-script) | `0` |
| `String` | [attack_tag](#prop-attack-tag) | `""` |
| `String` | [stance_tag](#prop-stance-tag) | `""` |
| `bool` | [is_ranged](#prop-is-ranged) | `false` |
| `String` | [aim_tag](#prop-aim-tag) | `""` |
| `String` | [reload_tag](#prop-reload-tag) | `""` |

## Methods

| | |
|---|---|
| `void` | [set_faction](#method-set-faction)( `faction_id: int` ) |
| `FactionDefinition` | [get_faction](#method-get-faction)() |
| `int` | [get_faction_id](#method-get-faction-id)() |
| `String` | [get_team_name](#method-get-team-name)() |
| `void` | [set_default_level](#method-set-default-level)( `new_default_level: int` ) |
| `void` | [set_experience_worth](#method-set-experience-worth)( `experience: int` ) |
| `int` | [get_experience_worth](#method-get-experience-worth)() |
| `void` | [set_stats_data](#method-set-stats-data)( `new_stats: StatsData` ) |
| `StatsData` | [get_stats_data](#method-get-stats-data)() |
| `void` | [set_behavior_script](#method-set-behavior-script)( `script_id: int` ) |
| `ModularBehaviorScript` | [get_behavior_script](#method-get-behavior-script)() |
| `void` | [set_combat_script](#method-set-combat-script)( `script_id: int` ) |
| `ModularCombatScript` | [get_combat_script](#method-get-combat-script)() |
| `String` | [get_aim_tag](#method-get-aim-tag)() |
| `String` | [get_reload_tag](#method-get-reload-tag)() |
| `bool` | [has_animation_tags](#method-has-animation-tags)() |
| `String` | [get_animation_tag_for_category](#method-get-animation-tag-for-category)( `category: String` ) |
| `Dictionary` | [get_inventory](#method-get-inventory)() |
| `void` | [set_inventory](#method-set-inventory)( `new_inventory: Dictionary` ) |
| `void` | [add_inventory_item](#method-add-inventory-item)( `item_id: int, quantity: int = 1` ) |
| `bool` | [remove_inventory_item](#method-remove-inventory-item)( `item_id: int, quantity: int = 1` ) |
| `void` | [clear_inventory_item](#method-clear-inventory-item)( `item_id: int` ) |
| `int` | [get_inventory_item_quantity](#method-get-inventory-item-quantity)( `item_id: int` ) |
| `bool` | [has_inventory_item](#method-has-inventory-item)( `item_id: int` ) |
| `Dictionary` | [get_inventory_items](#method-get-inventory-items)() |
| `void` | [add_currency](#method-add-currency)( `currency_id: int, amount: int` ) |
| `bool` | [remove_currency](#method-remove-currency)( `currency_id: int, amount: int` ) |
| `void` | [set_currency_amount](#method-set-currency-amount)( `currency_id: int, amount: int` ) |
| `int` | [get_currency_amount](#method-get-currency-amount)( `currency_id: int` ) |
| `bool` | [has_currency](#method-has-currency)( `currency_id: int` ) |
| `Dictionary` | [get_currencies](#method-get-currencies)() |
| `void` | [clear_currency](#method-clear-currency)( `currency_id: int` ) |
| `void` | [clear_all_inventory](#method-clear-all-inventory)() |
| `void` | [set_basic_attack_data](#method-set-basic-attack-data)( `ability_id: int` ) |
| `ActiveAbilityDefinition` | [get_basic_attack_data](#method-get-basic-attack-data)() |
| `int` | [get_basic_attack_id](#method-get-basic-attack-id)() |
| `void` | [add_active_ability_definition](#method-add-active-ability-definition)( `ability_id: int` ) |
| `bool` | [remove_active_ability_definition](#method-remove-active-ability-definition)( `ability_id: int` ) |
| `bool` | [remove_active_ability_definition_by_name](#method-remove-active-ability-definition-by-name)( `ability_name: String` ) |
| `bool` | [remove_active_ability_definition_by_id](#method-remove-active-ability-definition-by-id)( `ability_id: int` ) |
| `Array[int]` | [get_active_abilities_data_ids](#method-get-active-abilities-data-ids)() |
| `Array[ActiveAbilityDefinition]` | [get_active_abilities_data](#method-get-active-abilities-data)() |
| `int` | [get_active_ability_definition_count](#method-get-active-ability-definition-count)() |
| `bool` | [has_active_ability_definition](#method-has-active-ability-definition)( `ability_name: String` ) |
| `bool` | [has_active_ability_definition_by_id](#method-has-active-ability-definition-by-id)( `ability_id: int` ) |
| `ActiveAbilityDefinition` | [get_active_ability_definition](#method-get-active-ability-definition)( `ability_name: String` ) |
| `ActiveAbilityDefinition` | [get_active_ability_definition_by_id](#method-get-active-ability-definition-by-id)( `ability_id: int` ) |
| `void` | [clear_active_abilities_data](#method-clear-active-abilities-data)() |
| `void` | [add_passive_ability_definition](#method-add-passive-ability-definition)( `ability_id: int` ) |
| `bool` | [remove_passive_ability_definition](#method-remove-passive-ability-definition)( `ability_id: int` ) |
| `bool` | [remove_passive_ability_definition_by_name](#method-remove-passive-ability-definition-by-name)( `ability_name: String` ) |
| `bool` | [remove_passive_ability_definition_by_id](#method-remove-passive-ability-definition-by-id)( `ability_id: int` ) |
| `Array[int]` | [get_passive_abilities_data_ids](#method-get-passive-abilities-data-ids)() |
| `Array[PassiveAbilityDefinition]` | [get_passive_abilities_data](#method-get-passive-abilities-data)() |
| `int` | [get_passive_ability_definition_count](#method-get-passive-ability-definition-count)() |
| `bool` | [has_passive_ability_definition](#method-has-passive-ability-definition)( `ability_name: String` ) |
| `bool` | [has_passive_ability_definition_by_id](#method-has-passive-ability-definition-by-id)( `ability_id: int` ) |
| `PassiveAbilityDefinition` | [get_passive_ability_definition](#method-get-passive-ability-definition)( `ability_name: String` ) |
| `PassiveAbilityDefinition` | [get_passive_ability_definition_by_id](#method-get-passive-ability-definition-by-id)( `ability_id: int` ) |
| `void` | [clear_passive_abilities_data](#method-clear-passive-abilities-data)() |
| `int` | [get_total_ability_definition_count](#method-get-total-ability-definition-count)() |
| `bool` | [is_valid](#method-is-valid)() |

## Enumerations

### enum LootTableLogic {#enum-loottablelogic}

- **NONE** = `0`
- **ON_INITIALIZE** = `1`

## Property descriptions

*Level Configuration*

### int default_level = 1 {#prop-default-level}

Default level when NPC is spawned

### int experience_worth = 0 {#prop-experience-worth}

Experiance granted to player on death. With Kill Experience on Fixed (Gameplay Config) this is the amount; with a table or a formula it replaces the amount of the level when above 0

### float experience_multiplier = 1.0 {#prop-experience-multiplier}

Multiplies the experience this NPC gives (1 = as the settings say, 2 = double, 0 = none). A placed NPC and the entity types of the NPC have multipliers too, and all of them multiply

*Faction &amp; Alignment*

### int faction = 0 {#prop-faction}

Team/faction alignment for combat and AI behavior

*Combat Stats*

### StatsData stats_data = StatsData.new() {#prop-stats-data}

Stats configuration including health, resources, and combat stats

*Loot Configuration*

### LootTableLogic loot_table_logic = LootTableLogic.NONE {#prop-loot-table-logic}

When to generate and add loot from the loot table

### int loot_table = 0 {#prop-loot-table}

Loot table defining what this entity drops when defeated

*Inventory*

### Dictionary inventory {#prop-inventory}

Entity Inventory - starting items &amp; currency for this NPC

*Ability Definitions*

### int basic_attack_data = 0 {#prop-basic-attack-data}

Primary attack ability definition used for auto-attacks

### Array[int] active_abilities_data = [] {#prop-active-abilities-data}

Collection of active ability definitions this entity can use

### Array[int] passive_abilities_data = [] {#prop-passive-abilities-data}

Collection of passive ability definitions that affect this entity

*AI Scripts*

### int behavior_script = 0 {#prop-behavior-script}

Behavior Script - controls non-combat AI behavior

### int combat_script = 0 {#prop-combat-script}

Combat Script - controls combat AI behavior

*Animation Tags*

### String attack_tag = "" {#prop-attack-tag}

Animation tags for NPC combat animations (used instead of equipment lookup) Attack animation folder tag (e.g., "1h_weapon_r", "bow", "2h_weapon") This is used by UseStrategy when playing weapon attack animations

### String stance_tag = "" {#prop-stance-tag}

Combat idle/stance animation name (e.g., "combat_idle_bow", "combat_idle_2h") This is used by EntityAnimationPlayer for combat idle poses

### bool is_ranged = false {#prop-is-ranged}

Whether this NPC uses ranged weapon animations

### String aim_tag = "" {#prop-aim-tag}

Aim animation name for ranged NPCs (e.g., "idle_bow_aim")

### String reload_tag = "" {#prop-reload-tag}

Reload animation name for ranged NPCs (e.g., "shoot_bow_reload")

## Method descriptions

### void set_faction( faction_id: int ) {#method-set-faction}

Set faction by ID

### FactionDefinition get_faction() {#method-get-faction}

Get faction resource from Database

### int get_faction_id() {#method-get-faction-id}

Get faction ID

### String get_team_name() {#method-get-team-name}

Get team name from faction

### void set_default_level( new_default_level: int ) {#method-set-default-level}

Set default level

### void set_experience_worth( experience: int ) {#method-set-experience-worth}

Set experience to grant on death

### int get_experience_worth() {#method-get-experience-worth}

Get experience this entity grants on death

### void set_stats_data( new_stats: StatsData ) {#method-set-stats-data}

Set stats data

### StatsData get_stats_data() {#method-get-stats-data}

Get stats data

### void set_behavior_script( script_id: int ) {#method-set-behavior-script}

Set behavior script by ID

### ModularBehaviorScript get_behavior_script() {#method-get-behavior-script}

Get behavior script resource from Database

### void set_combat_script( script_id: int ) {#method-set-combat-script}

Set combat script by ID

### ModularCombatScript get_combat_script() {#method-get-combat-script}

Get combat script resource from Database

### String get_aim_tag() {#method-get-aim-tag}

Get the aim tag (only valid if is_ranged is true)

### String get_reload_tag() {#method-get-reload-tag}

Get the reload tag (only valid if is_ranged is true)

### bool has_animation_tags() {#method-has-animation-tags}

Check if this NPC has custom animation tags defined

### String get_animation_tag_for_category( category: String ) {#method-get-animation-tag-for-category}

Get animation tag for a specific category Returns empty string if not defined, allowing fallback to defaults

### Dictionary get_inventory() {#method-get-inventory}

Get inventory with proper structure

### void set_inventory( new_inventory: Dictionary ) {#method-set-inventory}

Set inventory

### void add_inventory_item( item_id: int, quantity: int = 1 ) {#method-add-inventory-item}

Add item to inventory

### bool remove_inventory_item( item_id: int, quantity: int = 1 ) {#method-remove-inventory-item}

Remove item from inventory

### void clear_inventory_item( item_id: int ) {#method-clear-inventory-item}

Clear specific item from inventory

### int get_inventory_item_quantity( item_id: int ) {#method-get-inventory-item-quantity}

Get item quantity

### bool has_inventory_item( item_id: int ) {#method-has-inventory-item}

Check if inventory has item

### Dictionary get_inventory_items() {#method-get-inventory-items}

Get all inventory items

### void add_currency( currency_id: int, amount: int ) {#method-add-currency}

Add currency

### bool remove_currency( currency_id: int, amount: int ) {#method-remove-currency}

Remove currency

### void set_currency_amount( currency_id: int, amount: int ) {#method-set-currency-amount}

Set currency amount

### int get_currency_amount( currency_id: int ) {#method-get-currency-amount}

Get currency amount

### bool has_currency( currency_id: int ) {#method-has-currency}

Check if has currency

### Dictionary get_currencies() {#method-get-currencies}

Get all currencies

### void clear_currency( currency_id: int ) {#method-clear-currency}

Clear specific currency

### void clear_all_inventory() {#method-clear-all-inventory}

Clear entire inventory

### void set_basic_attack_data( ability_id: int ) {#method-set-basic-attack-data}

Set basic attack data by ID

### ActiveAbilityDefinition get_basic_attack_data() {#method-get-basic-attack-data}

Get basic attack data resource from Database

### int get_basic_attack_id() {#method-get-basic-attack-id}

Get basic attack ID

### void add_active_ability_definition( ability_id: int ) {#method-add-active-ability-definition}

Add active ability definition by ID

### bool remove_active_ability_definition( ability_id: int ) {#method-remove-active-ability-definition}

Remove active ability definition by ID

### bool remove_active_ability_definition_by_name( ability_name: String ) {#method-remove-active-ability-definition-by-name}

Remove active ability by name (looks up via Database)

### bool remove_active_ability_definition_by_id( ability_id: int ) {#method-remove-active-ability-definition-by-id}

Remove active ability by ID (direct match)

### Array[int] get_active_abilities_data_ids() {#method-get-active-abilities-data-ids}

Get active abilities data as Array of IDs

### Array[ActiveAbilityDefinition] get_active_abilities_data() {#method-get-active-abilities-data}

Get active abilities data as Array of resources

### int get_active_ability_definition_count() {#method-get-active-ability-definition-count}

Get active ability count

### bool has_active_ability_definition( ability_name: String ) {#method-has-active-ability-definition}

Check if has active ability by name

### bool has_active_ability_definition_by_id( ability_id: int ) {#method-has-active-ability-definition-by-id}

Check if has active ability by ID

### ActiveAbilityDefinition get_active_ability_definition( ability_name: String ) {#method-get-active-ability-definition}

Get active ability resource by name

### ActiveAbilityDefinition get_active_ability_definition_by_id( ability_id: int ) {#method-get-active-ability-definition-by-id}

Get active ability resource by ID

### void clear_active_abilities_data() {#method-clear-active-abilities-data}

Clear all active abilities

### void add_passive_ability_definition( ability_id: int ) {#method-add-passive-ability-definition}

Add passive ability definition by ID

### bool remove_passive_ability_definition( ability_id: int ) {#method-remove-passive-ability-definition}

Remove passive ability definition by ID

### bool remove_passive_ability_definition_by_name( ability_name: String ) {#method-remove-passive-ability-definition-by-name}

Remove passive ability by name (looks up via Database)

### bool remove_passive_ability_definition_by_id( ability_id: int ) {#method-remove-passive-ability-definition-by-id}

Remove passive ability by ID (direct match)

### Array[int] get_passive_abilities_data_ids() {#method-get-passive-abilities-data-ids}

Get passive abilities data as Array of IDs

### Array[PassiveAbilityDefinition] get_passive_abilities_data() {#method-get-passive-abilities-data}

Get passive abilities data as Array of resources

### int get_passive_ability_definition_count() {#method-get-passive-ability-definition-count}

Get passive ability count

### bool has_passive_ability_definition( ability_name: String ) {#method-has-passive-ability-definition}

Check if has passive ability by name

### bool has_passive_ability_definition_by_id( ability_id: int ) {#method-has-passive-ability-definition-by-id}

Check if has passive ability by ID

### PassiveAbilityDefinition get_passive_ability_definition( ability_name: String ) {#method-get-passive-ability-definition}

Get passive ability resource by name

### PassiveAbilityDefinition get_passive_ability_definition_by_id( ability_id: int ) {#method-get-passive-ability-definition-by-id}

Get passive ability resource by ID

### void clear_passive_abilities_data() {#method-clear-passive-abilities-data}

Clear all passive abilities

### int get_total_ability_definition_count() {#method-get-total-ability-definition-count}

Get total ability count

### bool is_valid() {#method-is-valid}

Validates that all required NPC configuration is present

