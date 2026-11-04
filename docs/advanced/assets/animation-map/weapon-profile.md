<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponProfile

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A Weapon Animation Profile: one way of fighting that your game has animations for (One Hand, Two Hand, Bow, Rifle, Unarmed ...). You define it once (Entity Assets &gt; Weapon Profiles) and every animation pack gets its folder `weapon_animations/<folder name>/` with a subfolder for each animation role: `attack`, `stance` (the combat idle), `block`, `dodge`, `hit`, `sheathe`, `unsheathe`, and for a ranged profile `aim` and `reload`; a profile with hand variants has `attack_left` too. The packs that already exist get the folders when you save the profile, and the packs you make afterwards get them with the rest of their folders. A weapon class (and an NPC) picks a profile; the animations of the equipped weapon are then the clips in its folders. Unarmed is built in and cannot be deleted. See docs: Entity Assets &gt; Weapon Profiles.

## Properties

| | | |
|---|---|---|
| `String` | [folder_name](#prop-folder-name) | `""` |
| `bool` | [hand_variants](#prop-hand-variants) | `false` |
| `bool` | [ranged](#prop-ranged) | `false` |
| `bool` | [built_in](#prop-built-in) | `false` |

## Methods

| | |
|---|---|
| `PackedStringArray` | [get_roles](#method-get-roles)() |
| `String` | [describe_role](#method-describe-role)( `role: String` ) *static* |
| `PackedStringArray` | [get_required_roles](#method-get-required-roles)() |
| `PackedStringArray` | [get_folder_paths](#method-get-folder-paths)() |
| `String` | [make_folder_name](#method-make-folder-name)( `text: String` ) *static* |
| `bool` | [is_valid_folder_name](#method-is-valid-folder-name)( `text: String` ) *static* |
| `WeaponProfile` | [build_unarmed](#method-build-unarmed)() *static* |
| `PackedStringArray` | [validate](#method-validate)() |

## Constants

- `int` **ID_UNARMED** = `1000001` - The id of the built-in Unarmed profile
- `String` **UNARMED_FOLDER** = `"unarmed"` - The folder name of the built-in Unarmed profile
- `String` **ROLE_ATTACK** = `"attack"` - The roles (the subfolders of the profile folder) and what they are for
- `String` **ROLE_ATTACK_LEFT** = `"attack_left"`
- `String` **ROLE_STANCE** = `"stance"`
- `String` **ROLE_BLOCK** = `"block"`
- `String` **ROLE_DODGE** = `"dodge"`
- `String` **ROLE_HIT** = `"hit"`
- `String` **ROLE_SHEATHE** = `"sheathe"`
- `String` **ROLE_UNSHEATHE** = `"unsheathe"`
- `String` **ROLE_AIM** = `"aim"`
- `String` **ROLE_RELOAD** = `"reload"`

## Property descriptions

### String folder_name = "" {#prop-folder-name}

The name of the folder of this profile in every animation pack (made when the profile is made; it never changes, so the files stay where they are when the profile is renamed)

### bool hand_variants = false {#prop-hand-variants}

Does a one handed weapon of this profile have different attack clips for the left hand (a folder `attack_left`)? With none in it the right hand clips play for both

### bool ranged = false {#prop-ranged}

Is it a ranged weapon (a bow, a gun)? A ranged profile has aim and reload folders

### bool built_in = false {#prop-built-in}

Is it built in (Unarmed)? It cannot be deleted

## Method descriptions

### PackedStringArray get_roles() {#method-get-roles}

The folders (roles) of this profile: attack, attack_left (hand variants), stance, block, aim and reload (ranged)

### String describe_role( role: String ) {#method-describe-role}

What a role is for, in a sentence (the tooltips and the report of the editor)

### PackedStringArray get_required_roles() {#method-get-required-roles}

The roles a profile should have clips for (the others are optional): the report of the editor is orange when one of these is empty

### PackedStringArray get_folder_paths() {#method-get-folder-paths}

The folders of this profile relative to the entity folder of a pack ("weapon_animations/one_hand/attack" ...)

### String make_folder_name( text: String ) {#method-make-folder-name}

A folder name made from a name: lower case letters, digits and underscores ("One Hand!" -&gt; "one_hand")

### bool is_valid_folder_name( text: String ) {#method-is-valid-folder-name}

Can this text be the folder name of a profile?

### WeaponProfile build_unarmed() {#method-build-unarmed}

The built-in Unarmed profile

### PackedStringArray validate() {#method-validate}

Warnings about the profile (empty when it is fine)

