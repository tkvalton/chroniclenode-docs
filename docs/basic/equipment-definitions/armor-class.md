# Armor Class

<Shot name="armor-class-editor" caption="The Armor Class editor (Equipment Definitions > Armor Class)." />

An **armor class** is the kind of an armor piece: Plate, Mail, Leather, Cloth, Shield. The class has no numbers of its own; it is a **label** that other systems read, and it can give **bonuses** for the pieces that are worn.

## Fields

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Icon** | What the editors show |
| **Color** | A color for the class in lists and tooltips |
| **Bonuses** | The effects for the pieces of the class that are worn ([below](#bonuses-of-the-class)) |

An [armor item](/basic/items/items#equipment) chooses its class in the **Class** field of the Equipment section.

## Bonuses of the class

An armor class can give its wearer **effects**, in the way of a [set bonus](/basic/equipment-definitions/set-bonus): each **bonus** says **how many of the worn pieces must be of the class** and which effects the wearer gets then.

| Field | What it does |
|---|---|
| **Worn pieces of the class** | The number of worn pieces that are of this class (1 or more). *1* is the effect of wearing any piece, *3* needs three of them |
| **Effects** | The [effects](/basic/abilities-and-effects/effects) the wearer has while enough pieces are worn. Pick them with **Add...** |

**Add a bonus** makes the next one (one more piece than the highest so far); the **x** takes one away. Example: *Plate*, one piece: *Clanking* (the wearer is louder); three pieces: *Fortified* (+10 % armor); five pieces: *Immovable* (cannot be knocked back).

Taking a piece off takes the bonuses that need it away. The effects are put on again when the character is made and when the equipment changes, so they are not saved with the character, and an effect that fails its own requirements is not applied. An armor class that has bonuses with no effects shows a warning.


## What reads an armor class

| Reader | What it does with it |
|---|---|
| [**Proficiencies**](/basic/entity-stats/proficiencies) | A proficiency lists armor classes: being hit while wearing one trains the skill, the skill's effects work while one is worn, and a *level needed to equip* can gate the whole class: "Plate needs Heavy Armor 25" |
| [**Wearing Armor Class**](/basic/shared-systems/conditions) condition | "Wears at least three pieces of plate": for a stat effect, an effect or an event |

## Who may wear it

A class does not say who may wear it. That is a [proficiency](/basic/entity-stats/proficiencies): make *Heavy Armor* with the armor class Plate and **Level needed to equip** `25`, and plate cannot be worn below level 25 of the skill. A proficiency also grows by use, can make the armor better, and can be required by other things. Items can add [requirements](/basic/shared-systems/requirements) of their own.

## See also

- [Weapon Class](/basic/equipment-definitions/weapon-class), [Items](/basic/items/items#equipment), [Proficiencies](/basic/entity-stats/proficiencies)
