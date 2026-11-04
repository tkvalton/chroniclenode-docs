<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponProfileMigration

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Moves a project from the old way of naming weapon animations (free text tags on the weapon classes and the NPCs, the folders ability_animations/weapon/&lt;tag&gt;, aim, reload and core/combat_system/combat_idle) to Weapon Animation Profiles (see WeaponProfile). Two steps, both started from the Weapon Profiles tab, and neither deletes anything: 1. make_profiles_from_old_tags: a profile for each different old attack tag ("1h_weapon_r" and "1h_weapon_l" are one profile, One Hand with hand variants), picked in every weapon class and NPC that had the tag. 2. move_legacy_files: the animation files of those tags move into the folders of the profile (attack, attack_left, stance, aim, reload). A file that two profiles need is copied to both.

## Methods

| | |
|---|---|
| `Dictionary` | [split_tag](#method-split-tag)( `tag: String` ) *static* |
| `int` | [make_profiles_from_old_tags](#method-make-profiles-from-old-tags)( `only: Array = []` ) *static* |
| `Array[Dictionary]` | [find_legacy_moves](#method-find-legacy-moves)( `only_packs: PackedStringArray = PackedStringArray(), only_users: Array = []` ) *static* |
| `int` | [move_legacy_files](#method-move-legacy-files)( `only_packs: PackedStringArray = PackedStringArray(), only_users: Array = []` ) *static* |

## Method descriptions

### Dictionary split_tag( tag: String ) {#method-split-tag}

An old attack tag split into the profile folder and the hand: "1h_weapon_r" -&gt; &#123;base: "1h_weapon", hand: "r"&#125;; "bow" -&gt; &#123;base: "bow", hand: ""&#125;

### int make_profiles_from_old_tags( only: Array = [] ) {#method-make-profiles-from-old-tags}

Makes a profile for each different old attack tag and picks it in the weapon classes and NPCs that had the tag. Gives how many profiles it made

### Array[Dictionary] find_legacy_moves( only_packs: PackedStringArray = PackedStringArray(), only_users: Array = [] ) {#method-find-legacy-moves}

The animation files the old tags point at, and where they go: [&#123;pack, from, to&#125;] (a file two profiles need appears twice)

### int move_legacy_files( only_packs: PackedStringArray = PackedStringArray(), only_users: Array = [] ) {#method-move-legacy-files}

Moves (or copies, when two profiles need the same file) the files of find_legacy_moves. Gives how many files it moved or copied

