# Weapon Class

<Shot name="weapon-class-editor" caption="The Weapon Class editor (Equipment Definitions > Weapon Class)." />

A **weapon class** is the kind of a weapon: Sword, Dagger, Mace, Bow, Staff, Wand. It says how the weapon is held, how the wielder moves with it, what its basic attack is and what ammo it shoots. A [weapon item](/basic/items/items#weapon) chooses its class in the **Weapon class** field.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon**, **Color** | What the editors and lists show | |
| **Weapon type** | The [weapon type](/basic/equipment-definitions/equipment-type#weapon-types) of the class: one-handed, two-handed, ranged. It decides the hand the weapon is drawn in and the slots it blocks | none |

### Animation tags

The wielder plays the animations of a **[Weapon Profile](/basic/entity-assets/weapon-profiles)**: one choice instead of four tags. Several weapon classes can use the same profile (an axe, a sword and a mace are all *One Hand*).

| Field | What it does |
|---|---|
| **Weapon Profile** | The profile whose attack, stance (combat idle), block, aim and reload clips the weapon plays. Make the profiles in **Entity Assets > [Weapon Profiles](/basic/entity-assets/weapon-profiles)**. The weapon is ranged when the profile is |
| **Is ranged** | Set by the profile. Only used by a weapon class that has *no profile* |
| **Old tags** (**Attack tag**, **Stance tag**, **Aim tag**, **Reload tag**) | Only shown when the weapon class has *no profile*: the free text folder and clip names that projects used before profiles. They still work. The **From the old tags** buttons of the Weapon Profiles tab make profiles from them for you |

### Basic attack

| Field | What it does | Default |
|---|---|---|
| **Basic attack ability** | The [ability](/basic/abilities-and-effects/abilities) that becomes the wielder's basic attack while the weapon is held: a bow shoots, a wand zaps. `0` = the weapon does not change the basic attack | none |

### Ammo

| Field | What it does | Default |
|---|---|---|
| **Ammo group** | The [group](/basic/shared-systems/groups) of the ammo this weapon shoots. The arrows are in the group; an ability that spends *equipped ammo* takes from the matching ammo in the quiver. `0` = any ammo works, or the weapon needs none | none |

### Who may wield it

A class does not say who may use it. Gate it with a [proficiency](/basic/entity-stats/proficiencies) that lists the class and has a **Level needed to equip** (see [Armor Class](/basic/equipment-definitions/armor-class#who-may-wear-it)).

## What reads a weapon class

| Reader | What it does with it |
|---|---|
| [**Proficiencies**](/basic/entity-stats/proficiencies) | Train and gate by weapon class (and by weapon type) |
| [**Equipped Weapon Type**](/basic/shared-systems/conditions) condition and *Weapon* [requirement](/basic/shared-systems/requirements) | Ask for a weapon type |
| **Accuracy and the hit roll** | An ability counts as melee or ranged by its own range or *Attack style*, not by the class. Use **Is ranged** only for animations and aiming |

## See also

- [Equipment Type](/basic/equipment-definitions/equipment-type), [Items](/basic/items/items#weapon), [Abilities](/basic/abilities-and-effects/abilities#ammo-and-reagents)
