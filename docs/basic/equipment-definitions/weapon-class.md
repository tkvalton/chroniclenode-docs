# Weapon Class

<Shot name="weapon-class-editor" caption="The Weapon Class editor (Equipment Definitions > Weapon Class)." />

A **weapon class** is the kind of a weapon: Sword, Dagger, Mace, Bow, Staff, Wand. It says how the weapon is held, how the wielder moves with it, what its basic attack is and what ammo it shoots. A [weapon item](/basic/items/items#weapon) chooses its class in the **Weapon class** field.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon**, **Color** | What the editors and lists show | |
| **Weapon type** | The [weapon type](/basic/equipment-definitions/equipment-type#weapon-types) of the class: one-handed, two-handed, ranged. It decides the hand the weapon is drawn in and the slots it blocks | none |

### Animation tags

The wielder plays animations by **tag**. Each tag is chosen from the animation library of the project; the game adds `_r` or `_l` for the hand.

| Field | What it does |
|---|---|
| **Is ranged** | The weapon is a ranged weapon (bow, crossbow, wand). It turns on the aim and reload tags |
| **Attack tag** | The animation of an attack: `sword_slash`, `dagger_stab`, `bow_shoot` |
| **Stance tag** | The idle and walk stance while the weapon is out: `sword_stance` |
| **Aim tag** | The aiming animation of a ranged weapon: `bow_aim` |
| **Reload tag** | The reload animation of a ranged weapon: `crossbow_reload` |

### Basic attack

| Field | What it does | Default |
|---|---|---|
| **Basic attack ability** | The [ability](/basic/abilities-and-effects/abilities) that becomes the wielder's basic attack while the weapon is held: a bow shoots, a wand zaps. `0` = the weapon does not change the basic attack | none |

### Ammo

| Field | What it does | Default |
|---|---|---|
| **Ammo group** | The [group](/basic/shared-systems/groups) of the ammo this weapon shoots. The arrows are in the group; an ability that spends *equipped ammo* takes from the matching ammo in the quiver. `0` = any ammo works, or the weapon needs none | none |

### Requirements

**Add Requirement** adds passive [abilities](/basic/abilities-and-effects/abilities) the wielder must have to use the class. As with [armor classes](/basic/equipment-definitions/armor-class#ability-requirements-or-proficiencies), a [proficiency](/basic/entity-stats/proficiencies) with *Level needed to equip* is the way to gate a class by a trained level.

## What reads a weapon class

| Reader | What it does with it |
|---|---|
| [**Proficiencies**](/basic/entity-stats/proficiencies) | Train and gate by weapon class (and by weapon type) |
| [**Equipped Weapon Type**](/basic/shared-systems/conditions) condition and *Weapon* [requirement](/basic/shared-systems/requirements) | Ask for a weapon type |
| **Accuracy and the hit roll** | An ability counts as melee or ranged by its own range or *Attack style*, not by the class. Use **Is ranged** only for animations and aiming |

## See also

- [Equipment Type](/basic/equipment-definitions/equipment-type), [Items](/basic/items/items#weapon), [Abilities](/basic/abilities-and-effects/abilities#ammo-and-reagents)
