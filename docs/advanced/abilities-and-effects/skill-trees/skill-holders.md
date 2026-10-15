<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillHolders

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The owners of skill trees and skill points that are not a character: the professions and the factions. A pool (SkillPointPool.scope) and the trees that spend it are kept by the same owner, so a tree of a profession spends the points of a profession pool wherever the player is, and a faction tree spends the points of the party.

## Description

- PROFESSION: the owner is the one of the professions (Gameplay Config &gt; Professions belong to): the party (key 0) or each character (the unique id of the player)
- FACTION: the party (key 0). The key is asked from `key_for` so that factions of each character can be added without changing the callers

A holder is made the first time it is asked for. The party manager has one of these (PartyManager.skill_holders) and it is saved with the game.

## Methods

| | |
|---|---|
| `int` | [key_for](#method-key-for)( `scope: SkillPointPool.Scope, player: Entity = null` ) |
| `SkillHolder` | [holder_for](#method-holder-for)( `scope: SkillPointPool.Scope, player: Entity = null` ) |
| `Array[SkillHolder]` | [all_holders](#method-all-holders)() |
| `Dictionary` | [source_availability](#method-source-availability)( `instance: SkillTreeInstance, player: Entity` ) |
| `void` | [reset_for_new_game](#method-reset-for-new-game)() |
| `Array` | [to_save_data](#method-to-save-data)() |
| `void` | [restore_from_save_data](#method-restore-from-save-data)( `data: Array, player: Player = null` ) |

## Constants

- `int` **PARTY_KEY** = `0` - The key of the party

## Method descriptions

### int key_for( scope: SkillPointPool.Scope, player: Entity = null ) {#method-key-for}

The key of the owner for a kind of points: who keeps them for this player

### SkillHolder holder_for( scope: SkillPointPool.Scope, player: Entity = null ) {#method-holder-for}

The holder of this kind of points for this player (made when first asked for). Null for the points of a character

### Array[SkillHolder] all_holders() {#method-all-holders}

Every holder made so far

### Dictionary source_availability( instance: SkillTreeInstance, player: Entity ) {#method-source-availability}

Can the player spend points in a tree of a profession or a faction? The profession has to be learned, the faction has to have met the party. &#123;"available", "reason"&#125;

### void reset_for_new_game() {#method-reset-for-new-game}

A new game: every owner starts again

### Array to_save_data() {#method-to-save-data}

*No description yet.*

### void restore_from_save_data( data: Array, player: Player = null ) {#method-restore-from-save-data}

*No description yet.*

