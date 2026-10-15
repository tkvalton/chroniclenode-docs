# Durability

**Durability** makes equipment wear out. Weapons lose durability when their wearer deals damage, the rest of the equipment loses it when its wearer takes damage, and a piece that reaches 0 **breaks**: it gives nothing until it is repaired. A vendor repairs it for money.

The feature is **optional**: it is off until you turn it on (*Durability mode*), and nothing about durability is shown or saved before that.

## The numbers are on the slots

You do not give every item a durability. The **equipment slot** does ([Equipment Slot](/basic/equipment-definitions/equipment-slot#durability)):

| Field | What it does | Default |
|---|---|---|
| **Durability** | The durability of the items worn in this slot. `0` means the slot is **exempt**: its items never wear (rings, trinkets, cloaks if you want) | `0` |
| **Loss multiplier** | How fast the items of this slot wear compared with the others. `2` for a shield wears twice as fast, `0.5` half as fast | `1` |
| **Wears when** | **Automatic**: a weapon slot wears when its wearer **deals** damage, any other slot when its wearer **takes** damage. Or choose *Damage dealt*, *Damage taken* or *Both* (a shield in the off hand: damage taken) | Automatic |

An item gets its durability **the first time it is worn**: the durability of its slot, at full. It keeps it from then on (it is saved with the item), so moving it to another slot does not change it. One item can differ: its **Durability** field in the [item editor](/basic/items/items#durability) (`0` = what the slot gives, **`-1` = this item never wears**, a number = that durability whatever the slot says).

## The project's rules

[Gameplay Config > General > Durability](/basic/game-settings/gameplay-config#durability):

| Field | What it does | Default |
|---|---|---|
| **Durability mode** | **Off**, or **On hits** (weapons wear when their wearer deals damage, the rest when it takes damage) | Off |
| **Durability loss per hit** | How much a piece loses in a hit, multiplied by the loss multiplier of its slot | `1` |
| **Durability loss chance** | The chance that a piece wears in a hit (`1` = every hit) | `1` |
| **Durability one piece per hit** | When a character takes damage only one random piece wears, not all of them | off |
| **Durability broken behavior** | What a piece that reaches 0 does ([below](#a-broken-piece)) | No effect |
| **Durability repair cost multiplier** | What a vendor charges: the vendor value of the item × the share that is missing × this | `0.25` |
| **Death durability loss** | The share of its maximum that every worn piece loses when the player dies (`0.25` = a quarter) | `0` |

Only **the characters of the player** wear out their equipment (an NPC with a sword does not). A hit that is avoided (a miss, a dodge, a block), that took nothing, or that was reflected or chained from another hit, does not wear anything.

## A broken piece

A piece that reaches 0 durability is **broken**, the wearer is told, and what *Broken behavior* says happens:

| Setting | What happens |
|---|---|
| **No effect** (default) | The piece stays worn but gives **nothing**: no stats, no effects, no gem bonuses. Repair it and it works again |
| **Unequip** | It is taken off into the bag (still broken; with no room in the bag it stays on, giving nothing) |
| **Destroy** | It is gone |

A broken piece still counts for [set bonuses and armor class bonuses](/basic/equipment-definitions/set-bonus): they count what is worn, not what works.

## Repairing

- **Vendors** repair for money. A vendor with **Repairs equipment** on ([Vendors](/basic/items/vendors#repairs)) shows a **Repair all** button with the price in its window. The price is the same for every piece: vendor value × missing share × the project multiplier × the vendor's own multiplier. It is paid in the vendor's preferred currency, all or nothing.
- The event action [**Repair Equipment**](/basic/events-and-quests/event-actions#player) repairs the worn equipment of a player by a share of its maximum (100 % = fully). Use it for a rest at an inn, a quest reward or a shrine.
- An item shows **Durability: 40/100** in its tooltip (and *(broken)*), green, yellow and red as it wears.

## Dying

Dying can cost equipment ([Dropped items](/basic/items/dropped-items#where-items-come-from)): *Death equipment loss* drops or destroys worn pieces, and *Death durability loss* wears every worn piece by a share of its maximum. Both work together.

## A way to set it up

1. Gameplay Config > Durability: *Durability mode* **On hits**.
2. Equipment Slots: give *Chest*, *Head*, *Legs*, *Feet* a durability (`100`), the *Main hand* `150`, and the *Off hand* (a shield) `120` with a loss multiplier of `2` and *Wears when* **Damage taken**. Leave *Ring* and *Trinket* at `0`.
3. A vendor: *Repairs equipment* on.
4. Test: wear a piece, fight, open the tooltip.

## Not built

- Items that are not worn (a sword in the bag) have no durability: they get it when worn first.
- Durability does not wear from using an item (a pickaxe that gathers), only from hits.
- Repair with an item (a repair kit) or at a crafting station: the action and the vendor are the two ways today.

## See also

- [Equipment Slot](/basic/equipment-definitions/equipment-slot), [Items](/basic/items/items), [Vendors](/basic/items/vendors)
- [Dropped items](/basic/items/dropped-items) (what happens to the equipment when a player dies)
- [Durability: how it is built](/advanced/items/durability) (for developers)
