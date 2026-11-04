<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponProfiles

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The Weapon Animation Profiles at work: the list of them, the folders they make in the animation packs, and the clips a pack has for a profile.

## Description

A profile (see WeaponProfile) is defined once. This class puts its folders `weapon_animations/<folder>/<role>/` in EVERY animation pack under `res://src/data/animations/` (the ones that exist and, through DatabaseAnimation.create_entity_folder_structure, the ones made later), and answers what clip a pack plays for a role of a profile. A pack takes the clips it has not from its parent pack. Old projects that named the weapon folders by hand keep working: a tag that is not the folder of a profile is looked up in the old places (`ability_animations/weapon/<tag>`).

## Methods

| | |
|---|---|
| `Array[WeaponProfile]` | [all](#method-all)() *static* |
| `WeaponProfile` | [find](#method-find)( `profile_id: int` ) *static* |
| `WeaponProfile` | [find_by_folder](#method-find-by-folder)( `folder: String` ) *static* |
| `String` | [unique_folder_name](#method-unique-folder-name)( `display_name: String` ) *static* |
| `Dictionary` | [build_tags](#method-build-tags)( `profile: WeaponProfile, left_hand: bool = false` ) *static* |
| `String` | [profile_folder_of_tag](#method-profile-folder-of-tag)( `tag: String` ) *static* |
| `PackedStringArray` | [get_pack_names](#method-get-pack-names)() *static* |
| `int` | [create_folders_for](#method-create-folders-for)( `pack: String` ) *static* |
| `int` | [sync_all](#method-sync-all)() *static* |
| `Array[Dictionary]` | [get_missing_folders](#method-get-missing-folders)( `pack: String` ) *static* |
| `Array[String]` | [get_clips](#method-get-clips)( `pack: String, folder: String, role: String` ) *static* |
| `String` | [left_hand_tag](#method-left-hand-tag)( `folder: String` ) *static* |
| `Array[String]` | [resolve_clips](#method-resolve-clips)( `pack: String, tag: String, role: String` ) *static* |
| `String` | [first_clip](#method-first-clip)( `pack: String, tag: String, role: String` ) *static* |
| `Array[Dictionary]` | [get_pack_report](#method-get-pack-report)( `pack: String` ) *static* |

## Constants

- `String` **PACKAGE** = `"weapon_animations"` - The folder of the weapon animations in a pack

## Method descriptions

### Array[WeaponProfile] all() {#method-all}

Every profile, sorted by name (Unarmed first)

### WeaponProfile find( profile_id: int ) {#method-find}

The profile with this id (null for none)

### WeaponProfile find_by_folder( folder: String ) {#method-find-by-folder}

The profile whose folder is this (null when no profile has it: an old tag)

### String unique_folder_name( display_name: String ) {#method-unique-folder-name}

A folder name no profile uses yet, made from a name ("One Hand" -&gt; "one_hand", then "one_hand_2")

### Dictionary build_tags( profile: WeaponProfile, left_hand: bool = false ) {#method-build-tags}

The animation tags of a profile, as the entity hands them to the animation player and the abilities: attack_tag, stance_tag, aim_tag, reload_tag (the folder of the profile; the attack of the left hand has a role after a slash) and is_ranged

### String profile_folder_of_tag( tag: String ) {#method-profile-folder-of-tag}

The profile an animation tag belongs to: its folder, without the role after a slash ("one_hand/attack_left" -&gt; "one_hand"). A tag that is not a profile gives itself

### PackedStringArray get_pack_names() {#method-get-pack-names}

The names of the animation packs (the folders under res://src/data/animations/)

### int create_folders_for( pack: String ) {#method-create-folders-for}

Makes the folders of every profile in a pack (the ones that are missing). Gives how many folders it made

### int sync_all() {#method-sync-all}

Makes the folders of every profile in every pack, so a profile made today is in the packs of yesterday. Gives how many folders it made

### Array[Dictionary] get_missing_folders( pack: String ) {#method-get-missing-folders}

The folders a pack lacks for the profiles (the report of the editor): [&#123;profile, path&#125;]

### Array[String] get_clips( pack: String, folder: String, role: String ) {#method-get-clips}

The clips of a role of a profile in a pack, with the clips of its parent packs when it has none of its own (empty when the folder has no clips or the tag is not a profile)

### String left_hand_tag( folder: String ) {#method-left-hand-tag}

The tag of the left hand's attack of a profile ("one_hand/attack_left"): the animation tags of the abilities are the folder of the profile, with a role after a slash when it is not the default one

### Array[String] resolve_clips( pack: String, tag: String, role: String ) {#method-resolve-clips}

The clips of a pack for a role of the profile named by `tag` (its folder, or "folder/role"), as the animation player needs them: the left hand's attack falls back on the right hand's. Empty when the tag is not the folder of a profile

### String first_clip( pack: String, tag: String, role: String ) {#method-first-clip}

The first clip of a role (the stance), or "" when there is none

### Array[Dictionary] get_pack_report( pack: String ) {#method-get-pack-report}

For every profile, how many clips each role has in a pack: [&#123;profile, roles: [&#123;role, own, inherited&#125;], missing_folders&#125;] (the table of the editor)

