<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProficiencyTracker

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The proficiency levels of one player: skill in weapon types, armor classes and schools, or any skill a game adds (lockpicking).

## Description

It listens to the player: a hit dealt with a weapon, a hit taken in armor and an ability used give experience to the proficiencies that name them (see ProficiencyDefinition). Levels give points to the proficiency's stat, so skill reaches everything a stat does. Rewards and scripts add experience or levels directly. The levels are saved with the player.

## Variables

| | | |
|---|---|---|
| `Player` | [player](#var-player) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_player: Player` ) |
| `int` | [get_level](#method-get-level)( `proficiency_id: int` ) |
| `float` | [get_experience](#method-get-experience)( `proficiency_id: int` ) |
| `float` | [get_experience_to_next](#method-get-experience-to-next)( `proficiency_id: int` ) |
| `int` | [add_experience](#method-add-experience)( `proficiency_id: int, amount: float` ) |
| `void` | [set_level](#method-set-level)( `proficiency_id: int, level: int` ) |
| `int` | [add_levels](#method-add-levels)( `proficiency_id: int, levels: int` ) |
| `Array[int]` | [get_known_ids](#method-get-known-ids)() |
| `void` | [sync_all_stats](#method-sync-all-stats)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [load_save_data](#method-load-save-data)( `saved: Dictionary` ) |

## Signals

### experience_gained( proficiency_id: int, amount: float ) {#signal-experience-gained}

### level_changed( proficiency_id: int, new_level: int, old_level: int ) {#signal-level-changed}

## Variable descriptions

### Player player {#var-player}

*No description yet.*

## Method descriptions

### void setup( p_player: Player ) {#method-setup}

Connects to the player. Called once when the player is set up

### int get_level( proficiency_id: int ) {#method-get-level}

The level of a proficiency (its starting level when the player never trained it)

### float get_experience( proficiency_id: int ) {#method-get-experience}

The experience towards the next level

### float get_experience_to_next( proficiency_id: int ) {#method-get-experience-to-next}

The experience the next level needs (0 at the highest level)

### int add_experience( proficiency_id: int, amount: float ) {#method-add-experience}

Adds experience, and levels up as far as it reaches. Returns the levels gained

### void set_level( proficiency_id: int, level: int ) {#method-set-level}

Sets the level directly (a trainer, a reward, a cheat). The experience towards the next level starts again

### int add_levels( proficiency_id: int, levels: int ) {#method-add-levels}

Adds levels (a reward of whole levels). Returns the levels really added

### Array[int] get_known_ids() {#method-get-known-ids}

The proficiencies the player has trained or been given (those with a level above the starting one, or any experience)

### void sync_all_stats() {#method-sync-all-stats}

Puts the points of every proficiency on its stat

### Dictionary to_save_data() {#method-to-save-data}

*No description yet.*

### void load_save_data( saved: Dictionary ) {#method-load-save-data}

*No description yet.*

