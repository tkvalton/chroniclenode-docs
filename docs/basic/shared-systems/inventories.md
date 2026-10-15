# Inventories

Everything that holds items in ChronicleNode is an **inventory**: the bag of a character, what a character wears, the contents of a chest or a body, the stock of a shop. They share the same rules for items (stacks, room, money), so this page explains the rules once and then each place that holds items.

## Where items live

| What | What it is | Slots | Where it is edited | Saved with |
|---|---|---|---|---|
| **The bag of a character** | The **inventory** of a player, a companion or an NPC | By default a list of slots, as many as the character's [Bag Slots](#the-size-of-a-bag); the [inventory style](#inventory-styles) can change that | [Player Classes](/basic/entities/player-classes), [NPCs](/basic/entities/npcs) | The character |
| **What a character wears** | The **equipment inventory**: one slot for each [equipment slot](/basic/equipment-definitions/equipment-slot) | The slots of the definitions, some locked | [Equipment Slot](/basic/equipment-definitions/equipment-slot) | The character |
| **A container** | A chest, a crate, a cupboard: an [interactable](/basic/entities/interactables) with a **Container** interaction | **Max slots** of the interaction (`20`) | [Interactables](/basic/entities/interaction-types#container) | The object |
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
- **Discarding** an item destroys it. **Dropping** an item (dragging it out of the windows onto the world) puts it on the ground as a [dropped item](/basic/items/dropped-items), where it can be picked up again.
- A [quest item](/basic/items/quest-items) can be made to leave the bag when its quest ends ([availability](/basic/items/quest-items#quest-item-availability)).

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

## Items kept aside

A [quest item](/basic/items/quest-items#quest-items-kept-aside) can be set to be **kept aside**. It is then not in the slots (or the cells) at all: it is in a list of its own that grows and shrinks with what is in it. It takes no slot, no cell and no weight, a full bag still takes it, and it counts everywhere else (objectives, requirements, hand-in costs, saves, the shared party bag). The inventory window lists it as **Quest items** under the slots; a window without that list shows nothing.

## What a character wears

Equipment is a second inventory with a slot for each **equipment slot** (head, chest, two rings, main hand ...). A slot can be **locked** until a reward unlocks it. A piece of equipment

- goes in a slot of its equipment type (one that does not fit the slot is refused);
- needs its [requirements](/basic/shared-systems/requirements) (a level, a proficiency) unless a trigger, an effect, a reward or starting gear puts it on;
- gives its stat bonuses, [effects](/basic/abilities-and-effects/effects), the effects of its gems and of its set while it is on, and takes them away when it comes off;
- sends the piece it replaces to the bag. If the bag has no room for it, **nothing changes**.

NPCs have all their slots open.

## Containers and other objects

A [container](/basic/entities/interaction-types#container) has a bag of its own. It can be locked, opens a window next to the inventory of the player, and closes when the player walks away. What is in it comes from its [loot rules](/basic/items/loot-rules) (rolled when it is made, opened, or destroyed) and from what the player puts in. A destroyed container that still holds something stays lootable. Items cannot hold other items: a bag in the style of other games is not an item (see below).

## Shops

A [vendor](/basic/items/vendors) is **not** a bag: it is a list of goods, each with a quantity (or unlimited), prices, and its own money. It restocks over time. Buying moves an item from the stock into the buyer's bag (a [generated](/basic/items/item-generation) item is made at the level that the shop says); selling moves a stack from the bag into the shop's. The shop has no slots and no room limit; the **buyer's bag** must have room.

## Inventory styles

Different games hold items in different ways. An **inventory style** is the set of rules of one kind of owner. The **Gameplay Config** (Inventory Styles) has the style of the **characters** (players and companions), of **NPCs** and of **containers**; an NPC and a container can have **an own style** that replaces the project's (the NPC editor, **Bag**; the container interaction, **Inventory style**). The default style is a list of slots from the Bag Slots stat, with no weight, which is how inventories always worked.

| Field | What it does | Default |
|---|---|---|
| **Items take space as** | **Slots** (a list), **A grid** (cells, items have a shape) or **No limit** (slots appear as items come, and go when they are emptied; there is always one empty slot) | Slots |
| **Cells across**, **Cells down** | The size of a grid | `10`, `6` |
| **Number of slots from** | **The Bag Slots stat** of the owner, or **a fixed number** | The stat |
| **Items have weight** | Turns weight on (below) | off |
| **Capacity from** | **The Carry Capacity stat** of the owner, or a fixed number | The stat |
| **Worn equipment weighs too** | What a character wears counts towards the load | on |
| **Above the capacity** | **Nothing** (the weight is only shown), **A hard limit**, or **Encumbrance** | Nothing |
| **Hard limit** | The share of the capacity that can be filled. 100 = the capacity itself; 200 lets a character carry twice as much | 100 |
| **Encumbrance steps** | A list of steps: **name**, **from percent of the capacity** and an **effect** | none |

A container's own **Max slots** is its number of slots in slots mode (the style's *fixed number* is for characters and NPCs). A [shared party bag](/basic/entities/shared-inventory) ignores the style: it has its fixed size and no weight.

### A grid

In a **grid** (as in Diablo) the bag is a rectangle of cells and every item has a **shape**: a **width and a height in cells** (the item editor, **Shape**; 1 x 1 by default, a sword can be 1 x 3, a shield 2 x 2). The shape is always a rectangle and items **cannot be turned**.

- A new item goes in the **first place** (row by row, from the top left) where its rectangle is free. Items are drawn over the cells they cover.
- Stacks work as they do in slots: a stackable item joins the stack of the same item, and a full stack makes a new item in a new place. A stack covers the shape of one item.
- **Dragging**: an item can be dropped where its rectangle is free, or on a stack of the same item to join it. It does not go where it would cover another item or over the edge; it goes back where it was. (Swapping two items by dropping one on the other is not there: move one away first.)
- **Room** is a question of rectangles: a bag with 12 free cells may have no room for a 3 x 2 item. Loot, rewards, purchases and crafting use the same check, so a stack that does not fit stays with the giver. An item bigger than the grid never fits.
- **More cells**: the **Inventory Size** reward and the **Change Inventory Size** event action add **rows** (one slot = one row). The Bag Slots stat is not used by a grid. Bags (items that give slots) do not apply to a grid.
- A grid is saved with the position of every item. Items keep their place after a load.
- A grid can have **weight** too: the hard limit and encumbrance work as in the other styles.

### Bags

A **bag** is an item that gives its wearer more slots, as in World of Warcraft. Make the item as a **Bag** (the [item editor](/basic/items/items#bag)), make an equipment type for bags and **equipment slots** that take it (four bag slots, say), and the bags a character wears add their slots to the slots of their own bag.

- The slots stay **one list** that the inventory window shows grouped by bag: the character's own slots first, then a row for each bag under its name (the slots of a bag have a faint tint of their own).
- A bag can take **only some groups** of items (an herb pouch, a quiver, a gem case). An item of such a group goes into a bag that takes it **before** any other slot, and nothing else can be put in that bag. A bag with no groups takes anything.
- A bag can make what is in it **lighter**: *What the items in it weigh* is a multiplier (0.5 = half) that counts when the style has weight.
- A bag **cannot be taken off** while what it holds would not fit in the other slots (there needs to be a free slot for each item inside, and one for the bag): the player is told and the bag stays on. Replacing a bag with another one follows the same rule.
- A worn bag is saved with the equipment, and the items in its slots with the inventory: after a load every item is in the same slot.
- Bags give slots in the **slots** style. In **no limit** space they are not needed. A [shared party bag](/basic/entities/shared-inventory) has a fixed size and does not use bags.

### Weight

Every item has a **Weight** (the item editor, next to the value; `0` = nothing). A stack weighs the weight times its size, and the tooltip shows it. The inventory window shows **Weight 45.0 / 100.0** (and the name of the encumbrance step) when the style counts weight. Money has no weight.

- **A hard limit**: loot, rewards, purchases, crafting and pick-ups stop at the limit. What is too heavy stays where it came from, and a stack that fits only in part puts that part in. An item with no weight always goes in.
- **Encumbrance**: nothing is refused. From each step's share of the capacity an **[effect](/basic/abilities-and-effects/effects) is put on the character**: make it in the Effects editor (slowed, cannot sprint, cannot jump, extra stamina cost ...) and pick it in the step. Only the highest step reached is on; when the load goes down it comes off. A load of 120 percent with steps at 100 and 150 is in the first step. The effect is on while the step is, whatever the effect's own settings say, so use a **persistent** effect.
- The capacity follows the **Carry Capacity** stat (class, growth, equipment and effects change it) and the **slots for good** (the reward and the event action also add capacity).

### Examples

| Game | Style |
|---|---|
| **The toolkit's own** | The default: slots from the stat, no weight |
| **Diablo-like** | **A grid** of 10 x 6, items with shapes, no weight |
| **Skyrim-like** | **No limit**, weight on, **Encumbrance** with a step at 100 that slows the character and a step at 150 that stops running |
| **Slot bag with a weight limit** | Slots from the stat, weight on, a **hard limit** |
| **World of Warcraft-like** | Slots from a small fixed number, four bag equipment slots, bags of 6 to 16 slots, an herb bag that takes only herbs |
| **A chest that never fills** | The container style: **No limit** |
| **A strongbox** | A container with its own style: weight on, a fixed capacity, a hard limit |

## What there is not

- The older setting *Item weight enabled* in the [Gameplay Config](/basic/game-settings/gameplay-config#items-and-inventory) is not read: weight is a rule of the style. Equipment that wears out is [Durability](/basic/items/durability).

## See also

- [Shared party inventory](/basic/entities/shared-inventory), [Items](/basic/items/items), [Currency](/basic/items/currency), [Loot rules](/basic/items/loot-rules), [Vendors](/basic/items/vendors), [Trainers](/basic/items/trainers)
- [Interactables](/basic/entities/interaction-types#container), [Equipment Slot](/basic/equipment-definitions/equipment-slot)
