# Dropped items

A **dropped item** is an item (or a pile of money) that lies in the world, where a character can walk up and take it. The player can drop things from the bag, a dead NPC or a smashed crate can leave its loot on the ground, an event can put a key on a table, and you can place items in your map by hand.

The feature is **optional**. A game that does not want items on the ground switches it off in the [Gameplay Config](/basic/game-settings/gameplay-config#dropped-items) and everything works as before: loot goes into inventories and a loot window.

## What it looks like

A dropped item is a 3D object in the world:

- It shows the **3D model** of the item (Items > the model of the item), or a **flat picture of its icon** that always faces the camera. The setting *Visual style* picks one for the whole game; an item with no model shows its icon, and an item with neither shows a small box in the color of its quality.
- It can carry a **visual effect**: one set on the **item** (a glow on a quest item) and one set on its **quality** (a beam of light on every rare item). Both are shown while it lies there and go when it is taken.
- It can show its **name** above it (*Label mode*): never, only when the mouse or the crosshair is on it or it is the item you would pick up, or always. A stack shows how many (*Arrow x20*), a pile of money shows the amount (*120 Gold*).
- The mouse or the crosshair on it **lights it up** with the hover outline of the project.

Each item has a **Dropped item** panel in the [Items editor](/basic/items/items#dropped-item): how big it is on the ground, its visual effect and the sound of picking it up. A quality has a visual effect too ([Quality](/basic/equipment-definitions/quality)).

## Physics

A dropped item is a physics body, so what physics does to it is a setting (*Physics*):

| Mode | What happens |
|---|---|
| **Place on ground** | The item is put on the ground under where it is dropped and stays still. The cheapest, and the tidiest: nothing rolls away |
| **Settle then freeze** (default) | The item is thrown: it falls, bounces and comes to rest, and is then **frozen** where it lies. You get the look of physics at no cost once things have settled |
| **Always simulated** | The item stays a physics body for as long as it lies there (it can be pushed by other physics things). Use it for a small game or a special case |

Items only collide with the world (the ground and the scenery), never with characters, so nobody is pushed around by loot. A placed item stays exactly where you put it unless you say otherwise ([below](#placing-an-item-by-hand)).

## Picking up

Four ways to pick an item up, each a switch in the Gameplay Config. Turn on the ones your game uses:

| Way | What the player does | Notes |
|---|---|---|
| **Walk over** | Walk onto the item (within *Walk over radius*) | Only the character the player controls takes it. The rest of the party does not loot by itself |
| **Interact key** | Press the interact key when the item is near | The same key as for NPCs and objects; the item is the target when it is the nearest. Its name shows with the key: *[E] Iron Sword* |
| **Mouse over** | Click the item with the mouse | For games with a visible pointer. The item must be within *Mouse range* and the pointer must be over the world, not over a window or the HUD |
| **Look at** | Press the interact key while the crosshair is on the item | For first person and over-the-shoulder games, where the mouse is captured. Within *Mouse range*, and the scenery in between must not block the view |

Other things to know:

- An item **cannot be taken for a moment after it lands** (*Pickup delay*, 1 second by default), so an item you drop is not taken straight back.
- A **full bag** leaves the item on the ground and says *Your bag is full*. When only part of a **stack** fits, that part is taken and the rest stays.
- A pile of **money** goes to the purse of the character. With a shared purse it is the party's.
- An item that nobody takes can **disappear** after *Lifetime* seconds (0 = never), and *Max in world* keeps the number of items down: past it, the oldest one goes.

## Where items come from

| Source | How |
|---|---|
| **The player** | **Drag** an item out of the inventory or an equipment slot and **let go over the world**: it drops in front of the character. Over a window or the HUD it goes back. A **key item** cannot be dropped |
| **Dying** | With *Death item loss* or *Death equipment loss* set to **Drop** (Gameplay Config > Combat > Death & Revival) the bag, the worn equipment or both spill around the body; **Destroy** removes them instead, **Keep** (the default) leaves them. *Death item loss chance* is the share of the stacks and pieces that are lost; key items never are. If dropped items are off, a Drop keeps the items |
| **An NPC or an object** | A [loot rule](/basic/items/loot-rules#where-the-drops-go) with *Drops: On the ground*: the loot lies around the body or the wreck, with **no loot window** |
| **A gathering node** | Loot mode *On the ground*: what a gather rolls lies around the node ([Gather](/basic/entities/interaction-types#gather)) |
| **An event** | The [Drop Item](/basic/events-and-quests/event-actions#drop-item) action: a quest reward left on a table, a key that falls from the ceiling, coins that spill from a chest |
| **An NPC, as behaviour** | The [Drop Item](/basic/behaviors/behavior-scripts#tasks) task: a farmer who leaves a crate, a thief who drops loot |
| **You, by hand** | Place an item in your map ([below](#placing-an-item-by-hand)) |

When several things drop together (the loot of a boss) they are **scattered** around the place (*Scatter radius*), each stack as one item. If dropped items are switched off, a loot rule with *On the ground* puts the loot **in the inventory of the body** instead, so nothing is lost.

## Placing an item by hand

1. Open the map scene. In the 3D viewport use **Add Object > Add Dropped Item** (or **Add Dropped Currency**).
2. Pick the item in the catalog. It appears in the **DroppedItems** container of the map with a preview of its model or icon, and is selected.
3. Move it where you want it. In the inspector set:

| Field | What it does |
|---|---|
| **Item**, **Quantity**, **Item level** | What lies there, how many, and the level of a [generated item](/basic/items/item-generation) (0 = the level of the item). A generated item is rolled when the world loads and kept |
| **Currency**, **Currency amount** | For a pile of money (leave the item empty) |
| **Physics override** | *Project* (the item stays exactly where you put it), or *Place on ground*, *Settle then freeze* or *Always simulated* for this item only |
| **Respawn time** | Seconds after it is taken until it lies there again (0 = never) |
| **Lifetime override** | Seconds before it disappears (-1 = the project setting) |

An item placed by hand is **remembered**: once taken it stays gone when the player leaves the map and comes back, and in a saved game, unless it has a respawn time. Every placed item has a hidden *placement id* that tells it apart from the others. If you **copy and paste** an item the copy gets an id of its own.

## Saving

Dropped items travel with the map: leave a world and come back, or [save and load](/advanced/save-and-load), and they are as they were (position, what they hold, how long they have lain). *Saved to map* (on by default) decides whether the items that were dropped *while playing* are kept; items you placed by hand always remember whether they were taken.

## The settings

All in the [Gameplay Config > Dropped Items](/basic/game-settings/gameplay-config#dropped-items).

## Not built

- **Who may take loot.** Everybody can take everything today. Reserving the loot of a kill for the killer's party for a while is a part of multiplayer, and not built.
- **Piles.** Each stack is its own item. Items are not merged into a pile, and there is no window for a pile.
- A chat line or a log entry for *You picked up ...* waits for the [chat box](/planned/chat-box).

## See also

- [Loot rules](/basic/items/loot-rules), [Loot tables](/basic/items/loot-tables)
- [Inventories](/basic/shared-systems/inventories)
- [Add Object](/basic/world/add-object)
- [Dropped items: how they are built](/advanced/items/dropped-items) (for developers)
