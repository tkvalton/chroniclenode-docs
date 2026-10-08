# Equipment Type

<Shot name="equipment-type-editor" caption="The Equipment Type editor (Equipment Definitions > Equipment Type)." />

An **equipment type** says what kind of thing an item is for the purpose of fitting it: a helm, a chest piece, a ring, a bow. A [slot](/basic/equipment-definitions/equipment-slot) lists the types it accepts, an [item](/basic/items/items#equipment) names one type, and the character model uses it to know which body parts to hide.

This tab holds two kinds of types in one list: **equipment types** (armor and accessories) and **weapon types**. **Add** asks which one to make.

## Fields of every type

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Icon**, **Color** | What the editors and lists show |
| **Add Body Part** | A body part of the character model that this type **replaces or hides**: a chest piece covers the torso and upper arms, boots cover the feet. When a piece is worn, the bare body part is hidden so it does not poke through the armor |
| **Add Attachment Point** | A place on the model where the type shows a mesh: helmet, back, left hand, left shoulder, cloak. A cloak uses the *Cloak* point, a shoulder guard the two *Shoulder* points |

The list of body parts and attachment points comes from the [model scene](/basic/assets/model-scenes) rig (head, torso, arms, hands, hips, legs, feet; head, face, chest, back, hips, hands, shoulders, knees, elbows, helmet, cloak).

## Weapon types

A weapon type is an equipment type with two more fields.

| Field | What it does |
|---|---|
| **Weapon mesh slot** | Which hand the weapon is drawn in: **main hand** (right) or **off hand** (left). A weapon class that uses a main-hand type is shown in the right hand |
| **Blocked slots** | **Add Blocked Slot**: [equipment slots](/basic/equipment-definitions/equipment-slot) that are emptied and blocked while a weapon of this type is wielded. A two-handed type blocks the off hand |

A weapon with a type that blocks slots takes **two hands** (the game counts it as needing two). A one-handed type blocks nothing.

The demo has the weapon types *One Hand*, *Two Hand*, *Main Hand*, *Off Hand*, *Shield* and *Ranged*.

::: tip Weapon type or weapon class?
The **weapon type** decides *where and how many hands* (a mesh slot, blocked slots). The [weapon class](/basic/equipment-definitions/weapon-class) decides *what it is and does* (sword or mace, its animations, its basic attack, its ammo). Many classes share a type: sword, mace and axe can all be *One Hand*.
:::

## See also

- [Equipment Slot](/basic/equipment-definitions/equipment-slot), [Weapon Class](/basic/equipment-definitions/weapon-class), [Items](/basic/items/items)
- [Proficiencies](/basic/entity-stats/proficiencies) can train and gate by weapon type
