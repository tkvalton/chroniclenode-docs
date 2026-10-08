<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PartyManager

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

PartyManager manages the physical containers and setup for the player party system.

## Description

Key features:

- Creates physical containers for players
- Handles party inventory setup
- Manages the reserve (recruited companions waiting outside the active party)
- Switching between party members and the AI companions the others become
- Integrates cleanly with new PartyManager
- Supports flexible party sizes

## Variables

| | | |
|---|---|---|
| `int` | [max_party_slots](#var-max-party-slots) | `4` |
| `Player` | [current_player](#var-current-player) |  |
| `Array[Player]` | [reserve_players](#var-reserve-players) | `[]` |
| `Array[Player]` | [players](#var-players) | `[]` |
| `int` | [max_party_size](#var-max-party-size) | `4` |
| `Array[CharacterDefinition]` | [party_composition](#var-party-composition) | `[]` |
| `CustomCharacterDefinition` | [custom_player_start_definition](#var-custom-player-start-definition) | `null` |
| `int` | [next_player_unique_id](#var-next-player-unique-id) | `1` |
| `bool` | [players_in_combat](#var-players-in-combat) | `false` |
| `PlayerController` | [player_controller](#var-player-controller) |  |
| `CameraController` | [camera_controller](#var-camera-controller) |  |
| `CraftingManager` | [crafting_manager](#var-crafting-manager) |  |
| `WorldContainer` | [world_container](#var-world-container) |  |

## Methods

| | |
|---|---|
| `bool` | [setup_initial_party](#method-setup-initial-party)( `system_hub: GameHost.SystemHub, loading_screen: LoadingScreen = null` ) |
| `bool` | [create_players_from_party_composition](#method-create-players-from-party-composition)( `system_hub: GameHost.SystemHub, p_party_composition: Array[CharacterDefinition], loading_screen: LoadingScreen = null` ) |
| `Player` | [create_player_from_character](#method-create-player-from-character)( `system_hub: GameHost.SystemHub, character_def: CharacterDefinition` ) |
| `bool` | [add_player](#method-add-player)( `player: Player` ) |
| `bool` | [remove_player](#method-remove-player)( `player: Player` ) |
| `void` | [clear_all_players](#method-clear-all-players)() |
| `void` | [set_current_player](#method-set-current-player)( `player: Player` ) |
| `Player` | [get_current_player](#method-get-current-player)() |
| `Node3D` | [get_current_player_target](#method-get-current-player-target)() |
| `String` | [get_switch_denial](#method-get-switch-denial)( `player: Player` ) |
| `bool` | [can_switch_to](#method-can-switch-to)( `player: Player` ) |
| `bool` | [try_switch_to](#method-try-switch-to)( `player: Player` ) |
| `bool` | [switch_to_next](#method-switch-to-next)( `step: int = 1` ) |
| `bool` | [is_party_in_combat](#method-is-party-in-combat)() |
| `int` | [get_max_reserve_size](#method-get-max-reserve-size)() |
| `bool` | [is_reserve_full](#method-is-reserve-full)() |
| `bool` | [can_recruit](#method-can-recruit)() |
| `RecruitResult` | [recruit_player](#method-recruit-player)( `player: Player` ) |
| `void` | [add_to_reserve](#method-add-to-reserve)( `player: Player` ) |
| `bool` | [move_to_reserve](#method-move-to-reserve)( `player: Player, ignore_limits: bool = false` ) |
| `bool` | [move_to_party](#method-move-to-party)( `player: Player` ) |
| `bool` | [swap_with_reserve](#method-swap-with-reserve)( `party_member: Player, reserve_member: Player` ) |
| `void` | [set_max_party_size](#method-set-max-party-size)( `new_size: int` ) |
| `bool` | [has_companion_of_definition](#method-has-companion-of-definition)( `character_definition_id: int` ) |
| `Array[Player]` | [get_all_companions](#method-get-all-companions)() |
| `void` | [force_game_over](#method-force-game-over)() |
| `Player` | [get_main_character](#method-get-main-character)() |
| `void` | [respawn_player](#method-respawn-player)( `player: Player, respawn_point: Marker3D` ) |
| `void` | [respawn_party_at_checkpoint](#method-respawn-party-at-checkpoint)() |
| `int` | [get_party_size](#method-get-party-size)() |
| `Array[Player]` | [get_party_members](#method-get-party-members)() |
| `bool` | [is_party_full](#method-is-party-full)() |
| `Player` | [get_player](#method-get-player)( `index: int` ) |
| `Player` | [get_player_by_unique_id](#method-get-player-by-unique-id)( `unique_id: int` ) |
| `bool` | [is_party_empty](#method-is-party-empty)() |
| `void` | [set_custom_player_definition](#method-set-custom-player-definition)( `definition: CustomCharacterDefinition` ) |
| `void` | [clear_custom_player_definition](#method-clear-custom-player-definition)() |
| `bool` | [has_custom_player_definition](#method-has-custom-player-definition)() |
| `void` | [grant_party_experience](#method-grant-party-experience)( `amount: int` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |

## Signals

### player_added( player: Player, slot_index: int ) {#signal-player-added}

---------- Signals ---------- Signal emitted when a new player is added to party

### player_removed( player: Player, slot_index: int ) {#signal-player-removed}

Signal emitted when a player is removed from party

### party_setup_complete( players: Array[Player] ) {#signal-party-setup-complete}

Signal emitted when party setup is complete

### party_cleared() {#signal-party-cleared}

Signal emitted when party is cleared

### new_current_player( companion: Player ) {#signal-new-current-player}

Signal emitted when the current player changes

### switch_denied( player: Player, reason: String ) {#signal-switch-denied}

Signal emitted when the player could not switch to a member (the reason is a short sentence for the UI)

### reserve_changed() {#signal-reserve-changed}

Signal emitted when a member enters or leaves the reserve

### game_over_triggered( death_behavior: GameplayConfig.DeathBehavior, dead_player: Player ) {#signal-game-over-triggered}

Death System Signals Signal emitted when game over is triggered (for UI to respond)

### respawn_requested( player: Player, respawn_point: Marker3D ) {#signal-respawn-requested}

Signal emitted when respawn is requested

## Enumerations

### enum RecruitResult {#enum-recruitresult}

Where a recruit ended up

- **REFUSED** = `0`
- **PARTY** = `1`
- **RESERVE** = `2`

## Variable descriptions

### int max_party_slots = 4 {#var-max-party-slots}

---------- Core Properties ---------- Maximum number of party slots (the size of the active party, from the Gameplay Config)

### Player current_player {#var-current-player}

The Player currently being controlled by the user

### Array[Player] reserve_players = [] {#var-reserve-players}

Companions the user has outside of the active party: they are recruited, wait out of the world and gain reserve experience

### Array[Player] players = [] {#var-players}

Array of all players in the party

### int max_party_size = 4 {#var-max-party-size}

Maximum number of players in the active party (from the Gameplay Config, an event can change it)

### Array[CharacterDefinition] party_composition = [] {#var-party-composition}

Party composition data for new game setup (array of CharacterDefinitions)

### CustomCharacterDefinition custom_player_start_definition = null {#var-custom-player-start-definition}

Custom player definition from character creation (used as first party member)

### int next_player_unique_id = 1 {#var-next-player-unique-id}

Tracks the next available player slot ID (starts at 1, increments)

### bool players_in_combat = false {#var-players-in-combat}

Combat status flag

### PlayerController player_controller {#var-player-controller}

The player controller

### CameraController camera_controller {#var-camera-controller}

The player camera

### CraftingManager crafting_manager {#var-crafting-manager}

CraftingManager system ref

### WorldContainer world_container {#var-world-container}

WorldContainer system ref

## Method descriptions

### bool setup_initial_party( system_hub: GameHost.SystemHub, loading_screen: LoadingScreen = null ) {#method-setup-initial-party}

Setup initial party based on character creation settings This is the main entry point for party setup that handles both custom character creation and default party composition flows

### bool create_players_from_party_composition( system_hub: GameHost.SystemHub, p_party_composition: Array[CharacterDefinition], loading_screen: LoadingScreen = null ) {#method-create-players-from-party-composition}

Create players from party composition array of CharacterDefinitions

### Player create_player_from_character( system_hub: GameHost.SystemHub, character_def: CharacterDefinition ) {#method-create-player-from-character}

Create a Player from a CharacterDefinition

### bool add_player( player: Player ) {#method-add-player}

Add a player to the party

### bool remove_player( player: Player ) {#method-remove-player}

Remove a player from the party or from the reserve (a dismissed companion is gone for good)

### void clear_all_players() {#method-clear-all-players}

Clear all players from the party and the reserve

### void set_current_player( player: Player ) {#method-set-current-player}

Set the current player (the one being controlled). This is the raw call (setup, loading, the death of the player in control): the switch the player asks for goes through try_switch_to, which obeys the gameplay options

### Player get_current_player() {#method-get-current-player}

Get the current player

### Node3D get_current_player_target() {#method-get-current-player-target}

*No description yet.*

### String get_switch_denial( player: Player ) {#method-get-switch-denial}

Why the player cannot take over this member right now ("" = it can)

### bool can_switch_to( player: Player ) {#method-can-switch-to}

Can the player take over this member right now (the gameplay options allow it)?

### bool try_switch_to( player: Player ) {#method-try-switch-to}

The player takes over a party member (the former one becomes a companion). False (and switch_denied) if the options or the state forbid it

### bool switch_to_next( step: int = 1 ) {#method-switch-to-next}

Take over the next (step 1) or the previous (step -1) member that can be taken over

### bool is_party_in_combat() {#method-is-party-in-combat}

Is any member of the party in a fight?

### int get_max_reserve_size() {#method-get-max-reserve-size}

How many companions can wait in the reserve

### bool is_reserve_full() {#method-is-reserve-full}

*No description yet.*

### bool can_recruit() {#method-can-recruit}

Is there room for one more recruit (in the party or in the reserve)?

### RecruitResult recruit_player( player: Player ) {#method-recruit-player}

A new companion joins: the party if there is room, else the reserve, else it is turned down (the caller keeps the player then)

### void add_to_reserve( player: Player ) {#method-add-to-reserve}

Put a player that is not yet in the party straight into the reserve

### bool move_to_reserve( player: Player, ignore_limits: bool = false ) {#method-move-to-reserve}

A party member waits in the reserve (it leaves the world; the party keeps at least one member)

### bool move_to_party( player: Player ) {#method-move-to-party}

A companion from the reserve joins the party (next to the member the player controls)

### bool swap_with_reserve( party_member: Player, reserve_member: Player ) {#method-swap-with-reserve}

A party member and a companion of the reserve change places

### void set_max_party_size( new_size: int ) {#method-set-max-party-size}

Change the size of the active party at run time: members beyond the new size wait in the reserve (nobody is lost; the reserve limit only applies to new recruits)

### bool has_companion_of_definition( character_definition_id: int ) {#method-has-companion-of-definition}

Is a companion made from this character definition already here (in the party or the reserve)?

### Array[Player] get_all_companions() {#method-get-all-companions}

Every companion the player has (the party and the reserve)

### void force_game_over() {#method-force-game-over}

Ends the game now (a quest that ends the game when it fails, an event): the game over, whatever the death behaviour of the settings says

### Player get_main_character() {#method-get-main-character}

The main character: the member in slot 0 of the party (its death ends the game with the game over and permadeath behaviours; it cannot be put in the reserve)

### void respawn_player( player: Player, respawn_point: Marker3D ) {#method-respawn-player}

Respawn a player at a specific location

### void respawn_party_at_checkpoint() {#method-respawn-party-at-checkpoint}

Respawn entire party (for party wipe scenarios or reload)

### int get_party_size() {#method-get-party-size}

Get number of players in party

### Array[Player] get_party_members() {#method-get-party-members}

Get all party members

### bool is_party_full() {#method-is-party-full}

Check if party is full

### Player get_player( index: int ) {#method-get-player}

Get player by index (0-based)

### Player get_player_by_unique_id( unique_id: int ) {#method-get-player-by-unique-id}

Get player by their unique ID (slot number)

### bool is_party_empty() {#method-is-party-empty}

Check if party is empty

### void set_custom_player_definition( definition: CustomCharacterDefinition ) {#method-set-custom-player-definition}

Set the custom player definition for the next game start Call this from character creation UI before starting a new game

### void clear_custom_player_definition() {#method-clear-custom-player-definition}

Clear the custom player definition

### bool has_custom_player_definition() {#method-has-custom-player-definition}

Check if a custom player definition is set

### void grant_party_experience( amount: int ) {#method-grant-party-experience}

Grant experience: the party gets all of it, the companions in the reserve a share of it (when the reserve experience is on)

### Dictionary to_save_data() {#method-to-save-data}

Save PartyManager state including all party members

