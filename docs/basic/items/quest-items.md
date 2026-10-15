# Quest items

A **quest item** is an [item](/basic/items/items) that belongs to a quest: it only exists while the quest is active, or it is kept aside from the bag. This page is about the fields of the quest item kind.

| Field | What it does | Default |
|---|---|---|
| **Quest** | The [quest](/basic/events-and-quests/quests) the item belongs to. `Browse Quests` opens the list | none |
| **Auto use on pickup** | The item is used as soon as a player picks it up | off |
| **Triggers quest** | Using the item starts the quest | off |
| **Remove on quest complete** | The item leaves the bag of every party member when the quest completes | on |
| **Availability** | When the item can drop and how long it may exist: see [below](#quest-item-availability) | Always drops |
| **Bag space** | **In the bag** (a slot or cells, and its weight, like any item) or **Kept aside** (no space at all): see [below](#quest-items-kept-aside) | In the bag |

### Quest item availability

A quest item can be made to follow its quest:

| Availability | Loot | In the bag |
|---|---|---|
| **Always drops** | A [loot table](/basic/items/loot-tables) gives it whenever it rolls it | It stays until it is used, or until the quest completes (*Remove on quest complete*) |
| **Drops only while the quest is active** | Loot gives it only while the quest is running. The corpses and chests of a quest you do not have hold nothing | Once it is in the bag it stays, as above |
| **Exists only while the quest is active** | The same as the one above | It is **taken out of every party bag** when the quest completes, fails or is given up. It is also taken out again at once if it reaches a bag while the quest is not running (from a vendor, a reward or an event) |

- *Running* means the quest is accepted, or finished and waiting to be handed in. A quest that gives its own item in its *On Start Actions* counts as running while they run, so the item stays.
- Only **loot** is held back. An item that a quest, a vendor or an event gives straight to the player is not, except that the third availability will not stay in a bag while its quest is not running.
- Put the same quest item in the loot tables of every place it could come from: the availability decides when it really drops, so you do not need a different table for "before" and "after".
- An item with an availability and no quest set is flagged by the editor: it has nothing to follow.

### Quest items kept aside

Set **Bag space** to **Kept aside** and the item takes **no space**: no slot, no cell of a grid and no weight, in any [inventory style](/basic/shared-systems/inventories#inventory-styles). It lives in a list of its own next to the bag.

- A bag that is **full still takes it**: a quest item never fails to arrive because the player carries too much.
- It **counts everywhere** an item counts: an objective of collecting it (*Player Has X Items*, with its tally), the *Has item* condition, a requirement, the [hand-in cost](/basic/events-and-quests/quests#hand-in-cost) of a quest, the *Take Items* action. It is saved with the bag, and the shared bag of a [shared party inventory](/basic/entities/shared-inventory) keeps it for the whole party.
- It stacks as any item does (*Stackable*, *Max stack*): 25 of an item with a stack of 10 are three stacks in the list.
- It follows the rest of the quest item rules: *Availability*, *Remove on quest complete*, *Auto use on pickup*. It is a key item: it cannot be sold, dropped or deleted.

Whether the player **sees** the list is a question of the interface only. The inventory window of the toolkit shows a **Quest items** list under the slots while something is kept aside (the window's **Show kept aside** option, on by default). A window that has that option off, or your own interface that does not draw the list, shows nothing: the items are still held and counted, they just are not shown anywhere.

::: tip Set per item
**Bag space** is a setting of each quest item, so a key that opens a door can be kept aside while an item that starts a quest is left in the bag. The editor warns about an item that is **kept aside and starts a quest when used** without *Auto use on pickup*: the player would have to use it from the "Quest items" list, which your interface may not have.
:::

::: tip Hidden quest items
"Hidden" is "kept aside, with no list in the interface". There is no separate setting.
:::

::: warning Using an item that is kept aside
The player uses an item of the list with a right click. If your interface has no list, an item that has to be used (one that **starts a quest**) should be set to **Auto use on pickup**, so it is used the moment it arrives.
:::
