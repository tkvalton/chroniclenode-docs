# Weapon Profiles

A **weapon profile** is one way of fighting that your game has animations for: *One Hand*, *Two Hand*, *Bow*, *Rifle*, *Staff*, *Unarmed*. You define it **once**, here, and **every animation pack gets a folder for it**, with a subfolder for each kind of clip. A [weapon class](/basic/equipment-definitions/weapon-class#animation-tags) or an [NPC](/basic/entities/npcs) picks a profile, and from then on the creature plays the clips in that profile's folders: its attacks, its combat idle (the **stance**), its block, and for a ranged weapon its aim and reload.

This is the part of the toolkit that decides **which animation plays when a creature fights with a particular weapon**. What the weapons *are* depends on your game: a fantasy game has swords and bows, a shooter has pistols and rifles, and both can have a profile for fists. The toolkit does not know any of them until you make the profile.

## Why profiles

Before profiles, the animations of a weapon were scattered over four places and were picked by typing folder names into the weapon class: the attacks in `ability_animations/weapon/<name>`, the combat idle in `core/combat_system/combat_idle`, the block in the animation map and the aim and reload in `ability_animations/aim` and `reload`. Nothing told you that the folder name had to match, and every new animation pack needed the folders made by hand.

With profiles:

- **One place.** Everything a weapon animates is in one folder, named for the profile.
- **Made for you.** Make a profile and the folders are in **every** animation pack, the ones you have and the ones you make later.
- **One choice.** A weapon class picks a profile instead of four tags. Several weapon classes share one (an axe, a sword and a mace are all *One Hand*).

## The folders

A profile named *One Hand* with **Left hand attacks** on makes this in every pack:

```text
humanoid/
  weapon_animations/              the section of the weapon animations
    one_hand/                     the profile (its folder name never changes)
      attack/                     attack clips; one is picked at random each time
      attack_left/                attack clips of the left hand (only with Left hand attacks)
      stance/                     the combat idle held with the weapon (the first clip is used)
      block/                      block clips; one is picked at random
      aim/  reload/               only for a ranged profile
    unarmed/
      attack/  stance/  block/
```

| Folder | What goes in it | When it is played |
|---|---|---|
| `attack` | The clips of an attack with this weapon | An ability whose animation is **Weapon** (the weapon in hand) plays one of them at random |
| `attack_left` | The same for the left hand (a dagger in the off hand) | The same ability, when it is used with the weapon of the left hand. With no clips here the `attack` clips are used for both hands |
| `stance` | The combat idle of the weapon: how the creature stands and moves while it fights with it | While the creature is in combat. The first clip (by name) is used; keep one |
| `block` | The clips of a block | When a [trigger](/basic/entity-stats/trigger-tags) called *Block* fires. With no clip the old block of the animation map plays |
| `aim`, `reload` | The aim and reload clips of a ranged weapon | An ability whose animation is **Aim** or **Reload** |

The section is **outside** the ability animations: *Ability Animations* are for the casts and special attacks of abilities (casting, spell cast, special attack), *Weapon Animations* are for what a weapon does.

::: warning Clip names are unique in a pack
All the clips of a pack are put in one library by name. Two clips with the same name in two profiles are one clip (the first one wins). Name them for the profile: `one_hand_slash_1`, `bow_draw`.
:::

## The editor

**Entity Assets > Weapon Profiles**. The list on the left has the profiles; **New** makes one. The built-in **Unarmed** is always there and cannot be deleted.

| Part | What it does |
|---|---|
| **Name**, **Description** | The name the lists show. Renaming the profile does **not** rename its folder |
| **Left hand attacks** | Adds the `attack_left` folder |
| **Ranged weapon** | Adds the `aim` and `reload` folders |
| **Folders** | The folder name of the profile (made from its name when you made it; it never changes) and what each subfolder is for |
| **Animation packs** | For every pack, how many clips each folder has. **Green**: every folder has clips. **Orange**: a folder is empty (a pack that has none takes its parent's clips: the count says *(parent)*). **Make the folders in every pack** makes the folders that are missing |
| **Used by** | The weapon classes and NPCs that use the profile |
| **From the old tags** | Only shown when the project still has weapon classes or NPCs with the old tags, or old animation files. See below |
| **Warnings** | A profile without a folder name, or two profiles with the same folder |

The folders are made **by themselves** when you make a profile, when you change **Left hand attacks** or **Ranged weapon**, when you make a pack (**Create New Pack** in the Animations tab) and when you open the Animations tab.

::: tip Empty folders and version control
Git does not keep empty folders. After a clone, the folders you have not put clips in are missing until you open the **Animations** tab or press **Make the folders in every pack**.
:::

## Using a profile

- **Weapon class.** Pick the **Weapon Profile** in the *Animation tags* section. The weapon is ranged when the profile is.
- **NPC.** Pick the **Weapon Profile** in the *Animations* section: an archer uses *Bow*, a wolf uses *Unarmed*. An NPC with no profile uses the old tags.
- **A creature with no weapon** plays the **Unarmed** profile: its attack clips, its stance and its block.
- **Abilities.** In the animation window of an ability, the category **Weapon** (and **Aim** and **Reload**) with *Auto from equipped* plays the profile of the weapon in hand. *Specific weapon* lists the profiles, and the hand (left, right, random) chooses `attack_left` for a profile with left hand attacks.
- **Triggers.** A trigger whose animation [depends on the weapon](/basic/entity-stats/trigger-tags#entity-reactions) has a list for each profile in the animation map, and one for *unarmed*.
- **No stance clip.** A profile whose `stance` folder is empty holds the default combat idle of the animation map.

## Tutorial: a rifle

1. Open **Entity Assets > Weapon Profiles** and press **New**. Name it `Rifle`.
2. Turn on **Ranged weapon**. The `aim` and `reload` folders are added. Look at **Animation packs**: every pack has `weapon_animations/rifle/` now, in orange, because the folders are empty.
3. Put the clips in the folders of the pack of your characters: `rifle_shot_1.res` in `attack/`, `rifle_idle.res` in `stance/`, `rifle_aim.res` in `aim/`, `rifle_reload.res` in `reload/`. Press **Refresh** in the Animations tab. The counts turn green.
4. In **Equipment Definitions > Weapon Class**, make *Assault Rifle* with the weapon type *Ranged* and pick the profile *Rifle*.
5. Make an item of that class and give it to a character. In combat the character holds the rifle stance. An ability whose animation is *Weapon* plays `rifle_shot_1`; one that is *Aim* plays `rifle_aim`.

## Moving from the old tags

A project made before profiles has weapon classes with free text tags (`1h_weapon_r`, `bow`) and animation files in `ability_animations/weapon/<tag>`, `aim`, `reload` and `core/combat_system/combat_idle`. **They keep working.** A tag that is not the folder of a profile is looked up in the old places. When you want to move to profiles, the **From the old tags** part of the Weapon Profiles tab does it in two steps. Nothing is deleted, and you can use git to see (and undo) what moved.

1. **Make profiles from the old tags.** A profile for each different attack tag; `1h_weapon_r` and `1h_weapon_l` become one profile, *1h Weapon*, with **Left hand attacks**. A ranged weapon class makes a ranged profile. The profile is picked in every weapon class and NPC that had the tag. Rename the profiles afterwards if you like (the folders keep their names).
2. **Move the old animation files.** The files of the attack folders go into `attack` (the `_l` folder into `attack_left`); the clip named by a stance tag goes into `stance`; the clips whose names contain the aim and reload tags go into `aim` and `reload`. A clip that two profiles need is **copied** into both. The plain `combat_idle` clip stays where it is: it is the default every creature holds.

The old **Combat Idle** and **Block** lists of the animation map (`combat_idle_one_hand`, `block_bow` and the others) stay as a fallback for creatures whose profile has no stance or block clip.

## Good to know

- The **folder name** is made from the name when you create the profile (`One Hand!` becomes `one_hand`; a taken name gets a number) and never changes. Deleting a profile does not delete folders or files; the weapon classes and NPCs that used it go back to their old tags.
- A weapon class **without** a profile and without old tags plays the **Unarmed** animations.
- The block of an animation map used to play the *unarmed* block whatever the creature held. It now plays the block of the profile of the weapon in hand.

## See also

- [Animations](/basic/entity-assets/animations): the packs, the sections and the animation map.
- [Weapon Class](/basic/equipment-definitions/weapon-class#animation-tags) and [NPCs](/basic/entities/npcs): where a profile is picked.
- [Trigger Tags](/basic/entity-stats/trigger-tags#entity-reactions): animations by weapon.
- [How the animation library is built](/advanced/assets/).
