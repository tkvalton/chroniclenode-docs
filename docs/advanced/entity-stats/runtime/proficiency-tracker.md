<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProficiencyTracker

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The proficiency levels of one player: skill in weapon classes and types, armor classes, schools, or any skill a game adds (lockpicking).

## Description

It listens to the player: a hit dealt with a weapon, a hit taken in armor and an ability used give experience to the proficiencies that name them (see ProficiencyDefinition). The level of a proficiency is the points of its hidden stat (ProficiencyDefinition.get_virtual_stat), so the stat effects of the proficiency work from it; by default only while the player holds or wears what the proficiency is for. Rewards and scripts add experience or levels directly. The levels are saved with the player.

## Variables

| | | |
|---|---|---|
| `Player` | [player](#var-player) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_player: Player` ) |
| `int` | [get_level](#method-get-level)( `proficiency_id: int` ) |
| `int` | [get_base_level](#method-get-base-level)( `proficiency_id: int` ) |
| `int` | [get_bonus_levels](#method-get-bonus-levels)( `proficiency_id: int` ) |
| `int` | [add_bonus_levels](#method-add-bonus-levels)( `proficiency_id: int, levels: int` ) |
| `float` | [get_experience](#method-get-experience)( `proficiency_id: int` ) |
| `float` | [get_experience_to_next](#method-get-experience-to-next)( `proficiency_id: int` ) |
| `int` | [add_experience](#method-add-experience)( `proficiency_id: int, amount: float` ) |
| `void` | [set_level](#method-set-level)( `proficiency_id: int, level: int` ) |
| `int` | [add_levels](#method-add-levels)( `proficiency_id: int, levels: int` ) |
| `int` | [get_tier](#method-get-tier)( `proficiency_id: int` ) |
| `SkillTier` | [get_tier_definition](#method-get-tier-definition)( `proficiency_id: int` ) |
| `int` | [get_level_cap](#method-get-level-cap)( `proficiency_id: int` ) |
| `bool` | [is_at_tier_cap](#method-is-at-tier-cap)( `proficiency_id: int` ) |
| `bool` | [set_tier](#method-set-tier)( `proficiency_id: int, tier_index: int` ) |
| `Array[int]` | [get_specializations](#method-get-specializations)( `proficiency_id: int` ) |
| `bool` | [has_specialization](#method-has-specialization)( `proficiency_id: int, spec_id: int` ) |
| `String` | [get_specialization_blocker](#method-get-specialization-blocker)( `proficiency_id: int, spec_id: int` ) |
| `bool` | [choose_specialization](#method-choose-specialization)( `proficiency_id: int, spec_id: int` ) |
| `bool` | [remove_specialization](#method-remove-specialization)( `proficiency_id: int, spec_id: int, force: bool = false` ) |
| `Array[int]` | [get_known_ids](#method-get-known-ids)() |
| `void` | [sync_all_stats](#method-sync-all-stats)() |
| `float` | [get_active_points](#method-get-active-points)( `proficiency_id: int` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [load_save_data](#method-load-save-data)( `saved: Dictionary` ) |

## Signals

### experience_gained( proficiency_id: int, amount: float ) {#signal-experience-gained}

Emitted when a proficiency gains experience.

### level_changed( proficiency_id: int, new_level: int, old_level: int ) {#signal-level-changed}

Emitted when a proficiency changes level: the proficiency, the new and the old level.

### tier_changed( proficiency_id: int, new_tier: int, old_tier: int ) {#signal-tier-changed}

A tier or a specialization changed

### specialization_changed( proficiency_id: int, specialization_id: int, chosen: bool ) {#signal-specialization-changed}

Emitted when a specialization is chosen or dropped.

## Variable descriptions

### Player player {#var-player}

The player the tracker belongs to.

## Method descriptions

### void setup( p_player: Player ) {#method-setup}

Connects to the player. Called once when the player is set up

### int get_level( proficiency_id: int ) {#method-get-level}

The level of a proficiency now: the trained level (or the starting level when the player never trained it) plus the temporary boosts, kept between 0 and the highest level

### int get_base_level( proficiency_id: int ) {#method-get-base-level}

The trained level, without the temporary boosts (what is saved)

### int get_bonus_levels( proficiency_id: int ) {#method-get-bonus-levels}

The levels the temporary boosts add now (negative for a curse)

### int add_bonus_levels( proficiency_id: int, levels: int ) {#method-add-bonus-levels}

Adds levels for as long as something lasts (an effect with a duration). Give the same number with a minus to take them away again. Returns the change of the level that results

### float get_experience( proficiency_id: int ) {#method-get-experience}

The experience towards the next level

### float get_experience_to_next( proficiency_id: int ) {#method-get-experience-to-next}

The experience the next level needs (0 at the highest level the tier allows)

### int add_experience( proficiency_id: int, amount: float ) {#method-add-experience}

Adds experience, and levels up as far as it reaches. Returns the levels gained

### void set_level( proficiency_id: int, level: int ) {#method-set-level}

Sets the level directly (a trainer, a reward, a cheat). The experience towards the next level starts again

### int add_levels( proficiency_id: int, levels: int ) {#method-add-levels}

Adds levels (a reward of whole levels). Returns the levels really added

### int get_tier( proficiency_id: int ) {#method-get-tier}

The tier the character is in (a number from 0, the first tier). 0 for a proficiency with no tiers

### SkillTier get_tier_definition( proficiency_id: int ) {#method-get-tier-definition}

The tier the character is in, as a resource (null when the proficiency has no tiers)

### int get_level_cap( proficiency_id: int ) {#method-get-level-cap}

The highest level the character can reach now: the cap of the tier, or the highest level of the proficiency

### bool is_at_tier_cap( proficiency_id: int ) {#method-is-at-tier-cap}

Is the character at the cap of the tier (and the tier is not the last: a trainer can take it further)?

### bool set_tier( proficiency_id: int, tier_index: int ) {#method-set-tier}

Puts the character in a tier (a number from 0). A lower tier brings the level down to its cap. False when nothing changed or the tier does not exist

### Array[int] get_specializations( proficiency_id: int ) {#method-get-specializations}

The ids of the specializations the character has chosen

### bool has_specialization( proficiency_id: int, spec_id: int ) {#method-has-specialization}

Has the player chosen this specialization of the proficiency?

### String get_specialization_blocker( proficiency_id: int, spec_id: int ) {#method-get-specialization-blocker}

Why the character cannot choose a specialization now ("" = they can)

### bool choose_specialization( proficiency_id: int, spec_id: int ) {#method-choose-specialization}

Chooses a specialization (its rewards are given by whoever gives it: see SpecializationReward). False when it cannot be chosen

### bool remove_specialization( proficiency_id: int, spec_id: int, force: bool = false ) {#method-remove-specialization}

Gives a specialization up (only one that can be changed, unless `force`)

### Array[int] get_known_ids() {#method-get-known-ids}

The proficiencies the player has trained or been given (those with a level above the starting one, or any experience)

### void sync_all_stats() {#method-sync-all-stats}

Puts the points of every proficiency on its hidden stat

### float get_active_points( proficiency_id: int ) {#method-get-active-points}

The points the proficiency gives now: its level while the player uses what it is for, else none

### Dictionary to_save_data() {#method-to-save-data}

========== SAVING ==========

### void load_save_data( saved: Dictionary ) {#method-load-save-data}

Restores the proficiencies from a save.

