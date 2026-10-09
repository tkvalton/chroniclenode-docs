<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FactionManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Variables

| | | |
|---|---|---|
| `Dictionary` | [all_factions](#var-all-factions) | `{}  # faction_id -> FactionDefinition` |
| `Dictionary` | [factions_by_name](#var-factions-by-name) | `{}  # display_name -> FactionDefinition` |
| `int` | [player_faction_id](#var-player-faction-id) | `Database.ID_PLAYER_FACTION` |

## Methods

| | |
|---|---|
| `void` | [load_all_factions](#method-load-all-factions)() |
| `FactionDefinition` | [get_faction](#method-get-faction)( `faction_id: int` ) |
| `bool` | [has_faction](#method-has-faction)( `faction_id: int` ) |
| `FactionDefinition` | [get_environmental_faction](#method-get-environmental-faction)() |
| `FactionDefinition` | [get_player_faction](#method-get-player-faction)() |
| `bool` | [set_player_faction](#method-set-player-faction)( `faction_id: int = Database.ID_PLAYER_FACTION` ) |
| `int` | [get_player_faction_id](#method-get-player-faction-id)() |
| `bool` | [add_reputation](#method-add-reputation)( `faction_a_id: int, faction_b_id: int, amount: int` ) |
| `bool` | [set_reputation](#method-set-reputation)( `faction_a_id: int, faction_b_id: int, amount: int` ) |
| `int` | [get_reputation](#method-get-reputation)( `faction_a_id: int, faction_b_id: int` ) |
| `ReputationLevel` | [get_standing_level](#method-get-standing-level)( `faction_a_id: int, faction_b_id: int` ) |
| `String` | [get_standing_name](#method-get-standing-name)( `faction_a_id: int, faction_b_id: int` ) |
| `String` | [get_predefined_relationship](#method-get-predefined-relationship)( `faction_a_id: int, faction_b_id: int` ) |
| `bool` | [are_factions_hostile](#method-are-factions-hostile)( `faction_a_id: int, faction_b_id: int` ) |
| `bool` | [are_factions_friendly](#method-are-factions-friendly)( `faction_a_id: int, faction_b_id: int` ) |
| `bool` | [are_factions_neutral](#method-are-factions-neutral)( `faction_a_id: int, faction_b_id: int` ) |
| `bool` | [is_player_hostile_with](#method-is-player-hostile-with)( `other_faction_id: int` ) |
| `bool` | [is_player_friendly_with](#method-is-player-friendly-with)( `other_faction_id: int` ) |
| `bool` | [is_player_neutral_with](#method-is-player-neutral-with)( `other_faction_id: int` ) |
| `bool` | [can_target_as_enemy](#method-can-target-as-enemy)( `faction_a_id: int, faction_b_id: int` ) |
| `bool` | [add_player_reputation](#method-add-player-reputation)( `other_faction_id: int, amount: int` ) |
| `bool` | [set_player_reputation](#method-set-player-reputation)( `other_faction_id: int, amount: int` ) |
| `int` | [get_player_reputation](#method-get-player-reputation)( `other_faction_id: int` ) |
| `ReputationLevel` | [get_player_standing_level](#method-get-player-standing-level)( `other_faction_id: int` ) |
| `String` | [get_player_standing_name](#method-get-player-standing-name)( `other_faction_id: int` ) |
| `void` | [refresh_all_data](#method-refresh-all-data)() |
| `void` | [clear_all_reputation](#method-clear-all-reputation)() |
| `void` | [initialize_starting_reputation](#method-initialize-starting-reputation)( `starting_reputation: Dictionary = {}` ) |
| `void` | [reset_to_defaults](#method-reset-to-defaults)( `starting_reputation: Dictionary = {}` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |

## Signals

### faction_standing_changed( faction_a_id: int, faction_b_id: int, old_standing: String, new_standing: String ) {#signal-faction-standing-changed}

Emitted when faction standing changes between two factions (after synchronization)

### player_standing_changed( other_faction_id: int, old_standing: String, new_standing: String ) {#signal-player-standing-changed}

Emitted when player's standing with another faction changes

## Variable descriptions

### Dictionary all_factions =   # faction_id -&gt; FactionDefinition {#var-all-factions}

All factions cached for fast access (runtime duplicates with their own reputation data)

### Dictionary factions_by_name =   # display_name -&gt; FactionDefinition {#var-factions-by-name}

Quick lookup by name

### int player_faction_id = Database.ID_PLAYER_FACTION {#var-player-faction-id}

Player's faction ID (set by game/PlayerClassDefinition)

## Method descriptions

### void load_all_factions() {#method-load-all-factions}

Load all factions into memory as RUNTIME DUPLICATES and connect signals

### FactionDefinition get_faction( faction_id: int ) {#method-get-faction}

Get faction by ID (fast cached access)

### bool has_faction( faction_id: int ) {#method-has-faction}

Check if faction exists

### FactionDefinition get_environmental_faction() {#method-get-environmental-faction}

Get environmental faction (convenience method)

### FactionDefinition get_player_faction() {#method-get-player-faction}

Get player faction (convenience method)

### bool set_player_faction( faction_id: int = Database.ID_PLAYER_FACTION ) {#method-set-player-faction}

Set the player's faction (defaults to built-in player faction)

### int get_player_faction_id() {#method-get-player-faction-id}

Get player faction ID

### bool add_reputation( faction_a_id: int, faction_b_id: int, amount: int ) {#method-add-reputation}

Add reputation between two factions (syncs both automatically via signal)

### bool set_reputation( faction_a_id: int, faction_b_id: int, amount: int ) {#method-set-reputation}

Set reputation between two factions (syncs both automatically via signal)

### int get_reputation( faction_a_id: int, faction_b_id: int ) {#method-get-reputation}

Get reputation between two factions

### ReputationLevel get_standing_level( faction_a_id: int, faction_b_id: int ) {#method-get-standing-level}

Get current standing level between two factions

### String get_standing_name( faction_a_id: int, faction_b_id: int ) {#method-get-standing-name}

Get standing name between two factions

### String get_predefined_relationship( faction_a_id: int, faction_b_id: int ) {#method-get-predefined-relationship}

Get predefined relationship from faction A to faction B (static)

### bool are_factions_hostile( faction_a_id: int, faction_b_id: int ) {#method-are-factions-hostile}

Check if two factions are hostile (delegates to faction)

### bool are_factions_friendly( faction_a_id: int, faction_b_id: int ) {#method-are-factions-friendly}

Check if two factions are friendly (delegates to faction)

### bool are_factions_neutral( faction_a_id: int, faction_b_id: int ) {#method-are-factions-neutral}

Check if two factions are neutral (delegates to faction)

### bool is_player_hostile_with( other_faction_id: int ) {#method-is-player-hostile-with}

Check if player is hostile with a faction

### bool is_player_friendly_with( other_faction_id: int ) {#method-is-player-friendly-with}

Check if player is friendly with a faction

### bool is_player_neutral_with( other_faction_id: int ) {#method-is-player-neutral-with}

Check if player is neutral with a faction

### bool can_target_as_enemy( faction_a_id: int, faction_b_id: int ) {#method-can-target-as-enemy}

Check if faction A can target faction B as an enemy (delegates to faction)

### bool add_player_reputation( other_faction_id: int, amount: int ) {#method-add-player-reputation}

Add reputation for player's faction with another faction

### bool set_player_reputation( other_faction_id: int, amount: int ) {#method-set-player-reputation}

Set reputation for player's faction with another faction

### int get_player_reputation( other_faction_id: int ) {#method-get-player-reputation}

Get reputation for player's faction with another faction

### ReputationLevel get_player_standing_level( other_faction_id: int ) {#method-get-player-standing-level}

Get player's standing with another faction

### String get_player_standing_name( other_faction_id: int ) {#method-get-player-standing-name}

Get player's standing name with another faction

### void refresh_all_data() {#method-refresh-all-data}

Refresh all faction data from database

### void clear_all_reputation() {#method-clear-all-reputation}

Clear all reputation data (for new game)

### void initialize_starting_reputation( starting_reputation: Dictionary = &#123;&#125; ) {#method-initialize-starting-reputation}

Initialize starting reputation for new games

### void reset_to_defaults( starting_reputation: Dictionary = &#123;&#125; ) {#method-reset-to-defaults}

Reset to defaults (convenience method for new game - combines clear + initialize)

### Dictionary to_save_data() {#method-to-save-data}

Save faction reputation data

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Load faction reputation data

