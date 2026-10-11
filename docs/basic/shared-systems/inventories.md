# Inventories

Everything that holds items in ChronicleNode is an **inventory**: the bag of a character, what a character wears, the contents of a chest or a body, the stock of a shop. They share the same rules for items (stacks, room, money), so this page explains the rules once and then each place that holds items.

## Where items live

| What | What it is | Slots | Where it is edited | Saved with |
|---|---|---|---|---|
| **The bag of a character** | The **inventory** of a player, a companion or an NPC | By default a list of slots, as many as the character's [Bag Slots](#the-size-of-a-bag); the [inventory style](#inventory-styles) can change that | [Player Classes](/basic/entities/player-classes), [NPCs](/basic/entities/npcs) | The character |
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

With the default style, the number of slots is the entity's **Bag Slots** stat, rounded down. A character class or NPC can set it (the stat's own default is `50`). The bag **follows the stat live**: equipment, a [stat modifier effect](/basic/abilities-and-effects/effect-types) or a [reward](/basic/shared-systems/rewards) that changes Bag Slots grows or shrinks the bag at once.

- A bag never destroys items. If the bag gets smaller and an item is in a slot that goes away, the slots up to that item stay (they are tinted in the window) and **nothing new can be added until the bag is under its size again**.
- **Slots for good**: the **Inventory Size** [reward](/basic/shared-systems/rewards) and the **Change Inventory Size** [event action](/basic/events-and-quests/events) add slots (and carry capacity) that are saved with the bag, on top of the stat. A quest that gives a bigger backpack uses them.
- The older name of the stat was **Carry Weight**; it was always the number of slots. **Carry Capacity** is a new stat: the weight a character can carry (see [weight](#weight)).

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

## Inventory styles

Different games hold items in different ways. An **inventory style** is the set of rules of one kind of owner. The **Gameplay Config** (Inventory Styles) has the style of the **characters** (players and companions), of **NPCs** and of **containers**; an NPC and a container can have **an own style** that replaces the project's (the NPC editor, **Bag**; the container interaction, **Inventory style**). The default style is a list of slots from the Bag Slots stat, with no weight, which is how inventories always worked.

| Field | What it does | Default |
|---|---|---|
| **Items take space as** | **Slots** (a list) or **No limit** (slots appear as items come, and go when they are emptied; there is always one empty slot) | Slots |
| **Number of slots from** | **The Bag Slots stat** of the owner, or **a fixed number** | The stat |
| **Items have weight** | Turns weight on (below) | off |
| **Capacity from** | **The Carry Capacity stat** of the owner, or a fixed number | The stat |
| **Worn equipment weighs too** | What a character wears counts towards the load | on |
| **Above the capacity** | **Nothing** (the weight is only shown), **A hard limit**, or **Encumbrance** | Nothing |
| **Hard limit** | The share of the capacity that can be filled. 100 = the capacity itself; 200 lets a character carry twice as much | 100 |
| **Encumbrance steps** | A list of steps: **name**, **from percent of the capacity** and an **effect** | none |

A container's own **Max slots** is its number of slots in slots mode (the style's *fixed number* is for characters and NPCs). A [shared party bag](/basic/entities/shared-inventory) ignores the style: it has its fixed size and no weight.

### Weight

Every item has a **Weight** (the item editor, next to the value; `0` = nothing). A stack weighs the weight times its size, and the tooltip shows it. The inventory window shows **Weight 45.0 / 100.0** (and the name of the encumbrance step) when the style counts weight. Money has no weight.

- **A hard limit**: loot, rewards, purchases, crafting and pick-ups stop at the limit. What is too heavy stays where it came from, and a stack that fits only in part puts that part in. An item with no weight always goes in.
- **Encumbrance**: nothing is refused. From each step's share of the capacity an **[effect](/basic/abilities-and-effects/effects) is put on the character**: make it in the Effects editor (slowed, cannot sprint, cannot jump, extra stamina cost ...) and pick it in the step. Only the highest step reached is on; when the load goes down it comes off. A load of 120 percent with steps at 100 and 150 is in the first step. The effect is on while the step is, whatever the effect's own settings say, so use a **persistent** effect.
- The capacity follows the **Carry Capacity** stat (class, growth, equipment and effects change it) and the **slots for good** (the reward and the event action also add capacity).

### Examples

| Game | Style |
|---|---|
| **The toolkit's own** | The default: slots from the stat, no weight |
| **Skyrim-like** | **No limit**, weight on, **Encumbrance** with a step at 100 that slows the character and a step at 150 that stops running |
| **Slot bag with a weight limit** | Slots from the stat, weight on, a **hard limit** |
| **A chest that never fills** | The container style: **No limit** |
| **A strongbox** | A container with its own style: weight on, a fixed capacity, a hard limit |

## What there is not

- Items have **no size**: a bag has one stack in each slot. There is no **grid** where items cover cells, and no **bags that are items** (a worn bag that adds slots). Both are being built: see [Inventory styles](/planned/inventory-styles).
- The older settings *Item weight enabled* and *Item durability enabled* in the [Gameplay Config](/basic/game-settings/gameplay-config#items-and-inventory) are not read: weight is a rule of the style, and items do not wear out yet.

## See also

- [Shared party inventory](/basic/entities/shared-inventory), [Items](/basic/items/items), [Currency](/basic/items/currency), [Loot rules](/basic/items/loot-rules), [Vendors](/basic/items/vendors), [Trainers](/basic/items/trainers)
- [Interactables](/basic/entities/interactables#container), [Equipment Slot](/basic/equipment-definitions/equipment-slot)
