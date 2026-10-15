<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillHolder

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The skill trees and the skill point pools that one owner keeps besides the characters: the professions of the party (or of one character, Gameplay Config &gt; Professions belong to) and the factions of the party. The owner has one set of pools (the pools of the scope) and one instance of each tree its sources list (the skill trees of the craft schools, of the factions). A character keeps its own trees and pools itself (Player.skill_tree_instances, skill_point_pools). See SkillHolders.

## Variables

| | | |
|---|---|---|
| `SkillPointPool.Scope` | [scope](#var-scope) | `SkillPointPool.Scope.PROFESSION` |
| `int` | [key](#var-key) | `0` |
| `Array[SkillPointPoolInstance]` | [pools](#var-pools) | `[]` |
| `Array[SkillTreeInstance]` | [trees](#var-trees) | `[]` |

## Methods

| | |
|---|---|
| `Array[Resource]` | [sources](#method-sources)() |
| `SkillTreeInstance` | [get_tree_instance](#method-get-tree-instance)( `tree_id: int` ) |
| `SkillPointPoolInstance` | [get_pool_instance](#method-get-pool-instance)( `pool_id: int` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [restore_from_save_data](#method-restore-from-save-data)( `data: Dictionary, player: Player = null` ) |

## Variable descriptions

### SkillPointPool.Scope scope = SkillPointPool.Scope.PROFESSION {#var-scope}

Whose points these are (SkillPointPool.Scope: PROFESSION or FACTION)

### int key = 0 {#var-key}

Who the owner is: 0 for the party, the unique id of a character when each character has professions of their own

### Array[SkillPointPoolInstance] pools = [] {#var-pools}

*No description yet.*

### Array[SkillTreeInstance] trees = [] {#var-trees}

*No description yet.*

## Method descriptions

### Array[Resource] sources() {#method-sources}

The definitions that list trees for this kind of owner: the craft schools, or the factions

### SkillTreeInstance get_tree_instance( tree_id: int ) {#method-get-tree-instance}

*No description yet.*

### SkillPointPoolInstance get_pool_instance( pool_id: int ) {#method-get-pool-instance}

*No description yet.*

### Dictionary to_save_data() {#method-to-save-data}

*No description yet.*

### void restore_from_save_data( data: Dictionary, player: Player = null ) {#method-restore-from-save-data}

Restores the pools and the trees of a save. `player` is who the rewards of the nodes are given to again

