# Armor Class

<Shot name="armor-class-editor" caption="The Armor Class editor (Equipment Definitions > Armor Class)." />

An **armor class** is the kind of an armor piece: Plate, Mail, Leather, Cloth, Shield. The class has no numbers of its own; it is a **label** that other systems read.

## Fields

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Icon** | What the editors show |
| **Color** | A color for the class in lists and tooltips |
| **Requirements** (*Add [Requirement](/basic/shared-systems/requirements)*) | Passive [abilities](/basic/abilities-and-effects/abilities) the wearer must have to wear armor of this class. See below |

An [armor item](/basic/items/items#equipment) chooses its class in the **Class** field of the Equipment section.

## What reads an armor class

| Reader | What it does with it |
|---|---|
| [**Proficiencies**](/basic/entity-stats/proficiencies) | A proficiency lists armor classes: being hit while wearing one trains the skill, the skill's effects work while one is worn, and a *level needed to equip* can gate the whole class: "Plate needs Heavy Armor 25" |
| [**Wearing Armor Class**](/basic/shared-systems/conditions) condition | "Wears at least three pieces of plate": for a stat effect, an effect or an event |

## Ability requirements or proficiencies?

**Requirements** on the class are the older way to say "only characters who learned this can wear it": the wearer needs a given passive ability. It works, and you can keep using it.

A **proficiency** is the newer way and does more: the skill has a **level** that grows by use, you can require a level instead of a yes or no, and the skill can make the armor better. For a game with trained skills use a proficiency with *Level needed to equip*; for a simple "class X can wear plate" game use the requirement.

## See also

- [Weapon Class](/basic/equipment-definitions/weapon-class), [Items](/basic/items/items#equipment), [Proficiencies](/basic/entity-stats/proficiencies)
