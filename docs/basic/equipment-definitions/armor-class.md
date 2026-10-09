# Armor Class

<Shot name="armor-class-editor" caption="The Armor Class editor (Equipment Definitions > Armor Class)." />

An **armor class** is the kind of an armor piece: Plate, Mail, Leather, Cloth, Shield. The class has no numbers of its own; it is a **label** that other systems read.

## Fields

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Icon** | What the editors show |
| **Color** | A color for the class in lists and tooltips |

An [armor item](/basic/items/items#equipment) chooses its class in the **Class** field of the Equipment section.

## What reads an armor class

| Reader | What it does with it |
|---|---|
| [**Proficiencies**](/basic/entity-stats/proficiencies) | A proficiency lists armor classes: being hit while wearing one trains the skill, the skill's effects work while one is worn, and a *level needed to equip* can gate the whole class: "Plate needs Heavy Armor 25" |
| [**Wearing Armor Class**](/basic/shared-systems/conditions) condition | "Wears at least three pieces of plate": for a stat effect, an effect or an event |

## Who may wear it

A class does not say who may wear it. That is a [proficiency](/basic/entity-stats/proficiencies): make *Heavy Armor* with the armor class Plate and **Level needed to equip** `25`, and plate cannot be worn below level 25 of the skill. A proficiency also grows by use, can make the armor better, and can be required by other things. Items can add [requirements](/basic/shared-systems/requirements) of their own.

## See also

- [Weapon Class](/basic/equipment-definitions/weapon-class), [Items](/basic/items/items#equipment), [Proficiencies](/basic/entity-stats/proficiencies)
