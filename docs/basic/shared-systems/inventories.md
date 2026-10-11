# Inventories

Everything that holds items in ChronicleNode is an **inventory**: the bag of a character, what a character wears, the contents of a chest or a body, the stock of a shop. They share the same rules for items (stacks, room, money), so this page explains the rules once and then each place that holds items.

## Where items live

| What | What it is | Slots | Where it is edited | Saved with |
|---|---|---|---|---|
| **The bag of a character** | The **inventory** of a player, a companion or an NPC | A list of slots, as many as the character's [Carry Weight](#the-size-of-a-bag) | [Player Classes](/basic/entities/player-classes), [NPCs](/basic/entities/npcs) | The character |
| **What a character wears** | The **equipment inventory**: one slot for each [equipment slot](/basic/equipment-definitions/equipment-slot) | The slots of the definitions, some locked | [Equipment Slot](/basic/equipment-definitions/equipment-slot) | The character |
| **A container** | A chest, a crate, a cupboard: an [interactable](/basic/entities/interactables) with a **Container** interaction | **Max slots** of the interaction (`20`) | [Interactables](/basic/entities/interactables#container) | The object |
| **The remains** | The body of a dead NPC, a destroyed object that held loot | The bag of the NPC, or a container made for the object | [Loot rules](/basic/items/loot-rules) | The NPC or the object |
| **A shop** | A [vendor](/basic/items/vendors): a stock, not a bag | None: a list of goods with a quantity each (or unlimited) | [Vendors](/basic/items/vendors) | The vendor interaction |
| **The shared party bag** | One bag for the whole party, when the game [shares it](/basic/entities/shared-inventory) | **Shared bag slots** | [Gameplay Config](/basic/game-settings/gameplay-config) | Every character (the same bag) |

Money is kept by the same inventories (see [money](#money)).

## Items in an inventory

### Stacks

An [item](/basic/items/items) is **stackable** or not, with a **max stack size**. Adding a stackable item first fills the stacks of the same item that have room, then opens a new slot. Two stacks join only if they are the same item **with the same roll**: two [generated](/basic/items/item-generation) hoods with different bonuses do not stack. A stack can be **split** into two slots by the player.

### Room

- An item that does not fit stays where it came from, and the giver tells the player ("No room in your inventory"). A stack that fits only in part puts that part in. Things that are given **wait for room** instead of being lost: a [reward](/basic/shared-systems/rewards) of items waits until there is room, a finished craft waits in the school until the bag has room, a quest that would give a reward the bag cannot hold waits to complete.
- A crafting job needs room for its result before it starts, and an item you take off needs room in the bag (otherwise it stays on).
- Loot that does not fit is not lost: it stays in the body or the chest.

### Taking items out

- Using an item that is consumed shrinks the stack; a **key item** (quest items are key items by default) can **never be discarded**, destroyed or sold.
- **Discarding** an item destroys it. Putting items on the ground is a [planned feature](/planned/dropped-items).
- A [quest item](/basic/items/items#quest-item) can be made to leave the bag when its quest ends ([availability](/basic/items/items#quest-item-availability)).

### Money

Every inventory has **money**: an amount of each [currency](/basic/items/currency). A currency has a **maximum** it can hold (an amount over it is lost). An inventory can be tied to a **shared purse** so that the whole party holds the same money (see [Shared party inventory](/basic/entities/shared-inventory)). Shops, trainers, crafting and rewards all use the money of the inventory of the character in question.

## The bag of a character

Every [entity](/basic/entities/) has a bag: players, companions and NPCs. It is made when the entity is made.

### The size of a bag

The number of slots is the entity's **Carry Weight** stat, rounded down, read **once** when the entity is created. A character class or NPC starts with `20` (the stat's own default is `50`); equipment or effects that add Carry Weight afterwards do **not** change the number of slots of a bag that exists. Despite the name, Carry Weight is a **slot count** today: items have no weight (see [what there is not](#what-there-is-not)).

### Who sees it

- The **player** sees the bag of the character they control in the inventory window. With a shared bag all characters show the same bag.
- Companions use theirs automatically (to pick up loot, to get things from the player).
- NPCs hold what their [loot rules](/basic/items/loot-rules) gave them: a body can be looted, and a [pickpocket](/basic/abilities-and-effects/effect-types) effect opens the bag of a live NPC.

## What a character wears

Equipment is a second inventory with a slot for each **equipment slot** (head, chest, two rings, main hand ...). A slot can be **locked** until a reward unlocks it. A piece of equipment

- goes in a slot of its equipment type (one that does not fit the slot is refused);
- needs its [requirements](/basic/shared-systems/requirements) (a level, a proficiency) unless a trigger, an effect, a reward or starting gear puts it on;
- gives its stat bonuses, [effects](/basic/abilities-and-effects/effects), the effects of its gems and of its set while it is on, and takes them away when it comes off;
- sends the piece it replaces to the bag. If the bag has no room for it, **nothing changes**.

NPCs have all their slots open.

## Containers and other objects

A [container](/basic/entities/interactables#container) has a bag of its own. It can be locked, opens a window next to the inventory of the player, and closes when the player walks away. What is in it comes from its [loot rules](/basic/items/loot-rules) (rolled when it is made, opened, or destroyed) and from what the player puts in. A destroyed container that still holds something stays lootable. Items cannot hold other items: a bag in the style of other games is not an item (see below).

## Shops

A [vendor](/basic/items/vendors) is **not** a bag: it is a list of goods, each with a quantity (or unlimited), prices, and its own money. It restocks over time. Buying moves an item from the stock into the buyer's bag (a [generated](/basic/items/item-generation) item is made at the level that the shop says); selling moves a stack from the bag into the shop's. The shop has no slots and no room limit; the **buyer's bag** must have room.

## What there is not

- Items have **no weight** and **no size**. The settings *Item weight enabled* and *Item durability enabled* in the [Gameplay Config](/basic/game-settings/gameplay-config#items-and-inventory) are stored but nothing reads them.
- A bag is a **list of slots**, one stack per slot. There is no grid, no item that takes two slots, no item that adds slots to a bag, and no weight limit.
- A bag keeps the size it was made with: making a bag smaller would lose the items in the slots that go away, so bags are not resized.

Other games use other styles (separate bags that are items, a grid where items have a shape, a weight limit with a speed penalty). They are being designed: see [Inventory styles](/planned/inventory-styles).

## See also

- [Shared party inventory](/basic/entities/shared-inventory), [Items](/basic/items/items), [Currency](/basic/items/currency), [Loot rules](/basic/items/loot-rules), [Vendors](/basic/items/vendors), [Trainers](/basic/items/trainers)
- [Interactables](/basic/entities/interactables#container), [Equipment Slot](/basic/equipment-definitions/equipment-slot)
