<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponProfileMigration

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Moves a project from the old way of naming weapon animations (free text tags on the weapon classes and the NPCs, the folders ability_animations/weapon/&lt;tag&gt;, aim, reload and core/combat_system/combat_idle) to Weapon Animation Profiles (see WeaponProfile). Three steps, all started from the Weapon Profiles tab, and none deletes anything: 1. make_profiles_from_old_tags: a profile for each different old attack tag ("1h_weapon_r" and "1h_weapon_l" are one profile, One Hand with hand variants), picked in every weapon class and NPC that had the tag. 2. move_legacy_files: the animation files of those tags move into the folders of the profile (attack, attack_left, stance, aim, reload). A file that two profiles need is copied to both. 3. move_map_fields: the old fixed lists of the animation maps (combat_idle_one_hand, block_bow, sheathe_polearm ...) go into the stance, block, sheathe and unsheathe folders of the profiles they fit (see legacy_key), and the fields of the map that were moved are emptied.

## Methods

| | |
|---|---|
| `Dictionary` | [split_tag](#method-split-tag)( `tag: String` ) *static* |
| `int` | [make_profiles_from_old_tags](#method-make-profiles-from-old-tags)( `only: Array = []` ) *static* |
| `String` | [legacy_key](#method-legacy-key)( `folder: String` ) *static* |
| `Array[Dictionary]` | [find_map_moves](#method-find-map-moves)( `only_packs: PackedStringArray = PackedStringArray(), only_profiles: Array = []` ) *static* |
| `int` | [move_map_fields](#method-move-map-fields)( `only_packs: PackedStringArray = PackedStringArray(), only_profiles: Array = []` ) *static* |
| `Array[Dictionary]` | [find_legacy_moves](#method-find-legacy-moves)( `only_packs: PackedStringArray = PackedStringArray(), only_users: Array = []` ) *static* |
| `int` | [move_legacy_files](#method-move-legacy-files)( `only_packs: PackedStringArray = PackedStringArray(), only_users: Array = []` ) *static* |

## Constants

- `Dictionary` **MAP_ROLES** = `{` - The folder of the pack (relative) that holds the clips of each role of the fixed lists, and the prefix of the map field

## Method descriptions

### Dictionary split_tag( tag: String ) {#method-split-tag}

An old attack tag split into the profile folder and the hand: "1h_weapon_r" -&gt; &#123;base: "1h_weapon", hand: "r"&#125;; "bow" -&gt; &#123;base: "bow", hand: ""&#125;

### int make_profiles_from_old_tags( only: Array = [] ) {#method-make-profiles-from-old-tags}

Makes a profile for each different old attack tag and picks it in the weapon classes and NPCs that had the tag. Gives how many profiles it made

### String legacy_key( folder: String ) {#method-legacy-key}

The part of the name of an old fixed field (combat_idle_&lt;key&gt;, block_&lt;key&gt;, sheathe_&lt;key&gt;) that a profile fits: made from its folder name (1h_weapon -&gt; one_hand, bow -&gt; bow, 1h_pistol -&gt; ranged_weapon ...). "" = no field fits it

### Array[Dictionary] find_map_moves( only_packs: PackedStringArray = PackedStringArray(), only_profiles: Array = [] ) {#method-find-map-moves}

The clips of the old fixed lists of the animation maps and where they go: [&#123;pack, field, role, profile, clip, from, to&#125;]. A clip that is not in the folder of the pack itself is left to the pack it is in

### int move_map_fields( only_packs: PackedStringArray = PackedStringArray(), only_profiles: Array = [] ) {#method-move-map-fields}

Moves (or copies, when two profiles need the same file) the clips of find_map_moves, and empties the fields of the maps that were moved. Gives how many files it moved or copied

### Array[Dictionary] find_legacy_moves( only_packs: PackedStringArray = PackedStringArray(), only_users: Array = [] ) {#method-find-legacy-moves}

The animation files the old tags point at, and where they go: [&#123;pack, from, to&#125;] (a file two profiles need appears twice)

### int move_legacy_files( only_packs: PackedStringArray = PackedStringArray(), only_users: Array = [] ) {#method-move-legacy-files}

Moves (or copies, when two profiles need the same file) the files of find_legacy_moves. Gives how many files it moved or copied

