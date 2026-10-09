# Equipment Definitions

These are the rules that [equipment](/basic/items/items#equipment) is built from. Equipment items name a type, a class, a quality and a set; characters have slots; this category defines all of those.

| Tab | What it defines | An example |
|---|---|---|
| [**Equipment Type**](/basic/equipment-definitions/equipment-type) | What an item *is* for fitting and looks: which slot takes it, which body parts it covers. **Weapon types** (one-handed, two-handed, ranged) are made here too | Helm, Chest, Ring, Two Hand |
| [**Equipment Slot**](/basic/equipment-definitions/equipment-slot) | The places on a character that hold equipment, and what each takes | Head, Main Hand, Finger (two of them) |
| [**Armor Class**](/basic/equipment-definitions/armor-class) | The kind of armor, for skills and conditions | Plate, Mail, Leather, Cloth |
| [**Weapon Class**](/basic/equipment-definitions/weapon-class) | The kind of weapon: its animations, its basic attack and the ammo it shoots | Sword, Bow, Staff, Dagger |
| [**Quality**](/basic/equipment-definitions/quality) | How rare an item is, with a color | Poor, Common, Rare, Epic |
| [**Set Bonus**](/basic/equipment-definitions/set-bonus) | The bonuses of wearing several pieces of a set | 2 pieces: +10 armor. 4 pieces: a proc |
| [**Socket**](/basic/equipment-definitions/socket) | The kinds of socket equipment has, and of the mods that fit them (gems, runes, attachments ...) | Red, Blue, Rune, Scope |

## How an item gets into a slot

1. The item names an **equipment type** (and, for a weapon, a **weapon class**, which has a **weapon type**).
2. A **slot** lists the equipment types it accepts. The item can go into any free slot that accepts its type.
3. A **weapon type** can also **block** other slots: a two-handed weapon blocks the off hand, so equipping one puts the off-hand item back in the bag.
4. The [requirements](/basic/shared-systems/requirements) of the item must be met (a level, a class, a [proficiency](/basic/entity-stats/proficiencies)). A [proficiency](/basic/entity-stats/proficiencies) can also gate a whole armor class, weapon class or weapon type with its *Level needed to equip*.

```text
Item: "Iron Longsword"
  equipment type ... One Hand       ---> accepted by: Main Hand slot, Off Hand slot
  weapon class ..... Sword          ---> animations, basic attack, is it ranged?
                     weapon type: One Hand (mesh slot: main hand, blocks nothing)

Item: "Oak Greatbow"
  equipment type ... Two Hand       ---> accepted by: Main Hand slot
  weapon class ..... Bow            ---> ranged, shoots arrows, basic attack: Shoot
                     weapon type: Two Hand (blocks: Off Hand)
```

## What reads these

| Reader | What it reads |
|---|---|
| [**Proficiencies**](/basic/entity-stats/proficiencies) | Train and gate by weapon class, weapon type and armor class |
| [**Conditions**](/basic/shared-systems/conditions) | *Equipped Weapon Type* and *Wearing Armor Class* |
| [**Ability requirements**](/basic/shared-systems/requirements) | A *Weapon* requirement can demand a weapon type |
| **The character model** | The equipment type decides which body parts hide and which attachment points show a mesh |

## See also

- [Items](/basic/items/items), [Player Classes](/basic/entities/player-classes) (locked equipment slots), [Rewards](/basic/shared-systems/rewards) (the Equipment Slot Unlock reward)
- [Equipment Definitions: how they are built](/advanced/equipment-definitions/) (Advanced)
