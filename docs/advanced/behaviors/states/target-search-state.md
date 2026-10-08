<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TargetSearchState

**Inherits:** [ActionState](/advanced/behaviors/states/action-state) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

TargetSearchState manages the search for valid targets when entity has none. It implements different search logic for NPCs (threat-based) vs Players/Pets (proximity-based).

## Description

Key features:

- Implements target search with caching to reduce performance impact
- Handles threat table management for NPCs
- Uses encounter-based enemy detection for cleaner combat exit logic
- Handles combat exit when no targets found

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [update](#method-update)( `_delta: float` ) |
| `void` | [exit](#method-exit)() |
| `void` | [search_for_target](#method-search-for-target)() |
| `Entity` | [find_non_threat_target](#method-find-non-threat-target)() |
| `Entity` | [reset_and_select_threat_target](#method-reset-and-select-threat-target)() |
| `Entity` | [find_new_threat_target](#method-find-new-threat-target)() |
| `void` | [start_delayed_combat_exit](#method-start-delayed-combat-exit)() |
| `void` | [handle_non_threat_combat_exit](#method-handle-non-threat-combat-exit)() |
| `void` | [handle_threat_combat_exit](#method-handle-threat-combat-exit)() |
| `void` | [exit_combat](#method-exit-combat)() |
| `void` | [return_all_timer](#method-return-all-timer)() |

## Method descriptions

### void enter() {#method-enter}

Sets up timers and begins target search

### void update( _delta: float ) {#method-update}

Checks for target and transitions if found

### void exit() {#method-exit}

Cleans up timers when exiting state

### void search_for_target() {#method-search-for-target}

Initiates search for new targets with cooldown

### Entity find_non_threat_target() {#method-find-non-threat-target}

Finds targets for Players/Pets using proximity

### Entity reset_and_select_threat_target() {#method-reset-and-select-threat-target}

Selects targets for NPCs using threat tables

### Entity find_new_threat_target() {#method-find-new-threat-target}

Searches for new threat targets from encounter enemies or nearby

### void start_delayed_combat_exit() {#method-start-delayed-combat-exit}

Starts delayed combat exit timer

### void handle_non_threat_combat_exit() {#method-handle-non-threat-combat-exit}

Handles combat exit for Players/Pets

### void handle_threat_combat_exit() {#method-handle-threat-combat-exit}

Handles combat exit for NPCs with encounter-based logic

### void exit_combat() {#method-exit-combat}

Exits combat and returns to inactive

### void return_all_timer() {#method-return-all-timer}

Cleanup all timers

