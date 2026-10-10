# Equipment Slot

<Shot name="equipment-slot-editor" caption="The Equipment Slot editor (Equipment Definitions > Equipment Slot)." />

An **equipment slot** is a place on a character that holds one piece of equipment: head, chest, main hand, a ring finger. Every character gets the slots of the game. The slots decide what can be worn, how many of something can be worn, and what the equipment window shows.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon** | The name and the empty-slot picture in the equipment window | |
| **Slot category** | **Armor**, **Weapon** or **Accessory**. The interface groups the slots by category | Armor |
| **Sort order** | The position inside its category. Lower comes first | `0` |
| **Allowed equipment types** | The [equipment types](/basic/equipment-definitions/equipment-type) the slot accepts. An item fits if its type is in the list. The slot needs at least one | none |
| **Slot instances** | How many slots of this kind a character has. `2` for a ring slot gives two ring fingers | `1` |
| **Is weapon slot** | The slot holds weapons. It must accept at least one weapon type, and should use the Weapon category | off |
| **Mesh slot** | For a weapon slot, which hand the weapon is drawn in: main hand or off hand | main hand |

## Item budget

| Field | What it does | Default |
|---|---|---|
| **Budget weight** | How much of the stat budget an item in this slot gets compared with the items of other slots: chest `1.5`, head `1`, ring `0.5`, the slot of a two-handed weapon `2`. The budget is what the rolled bonuses of a [generated item](/basic/items/item-generation#the-budget) share. An item that fits several slots uses the highest weight | `1` |

## How an item finds a slot

Equipping an item (by double-click or by a reward) looks for a slot that accepts the type of the item and is not blocked by a wielded weapon:

1. A **free** slot is used first.
2. If all fitting slots are taken, the item **displaces** the one in the first fitting slot, which goes back to the bag. If the bag has no room the swap is still allowed when the new item comes out of the bag and frees the slot it needs.
3. A weapon whose [weapon type](/basic/equipment-definitions/equipment-type#weapon-types) blocks slots first empties them; a weapon that can sit in another slot is moved there instead of being sent to the bag.

Dragging an item onto a particular slot uses that slot if it accepts the type.

## Locked slots

A class can start with some slots **locked**. A locked slot shows but cannot take anything until it is unlocked.

| Where | How |
|---|---|
| [Player Classes](/basic/entities/player-classes) | *Locked equipment slots*: the slots this class starts without |
| [Rewards](/basic/shared-systems/rewards) | The **Equipment Slot Unlock** reward unlocks one. It can be undone, so an item or a talent can give a slot while it lasts |

Typical uses: a third ring slot from a [quest](/basic/events-and-quests/quests), an off-hand slot a class gets at level 10.

## See also

- [Equipment Type](/basic/equipment-definitions/equipment-type), [Items](/basic/items/items#equipment), [Weapon Class](/basic/equipment-definitions/weapon-class)
