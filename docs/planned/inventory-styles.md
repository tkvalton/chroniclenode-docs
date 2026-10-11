# Inventory styles

::: info Partly built
**Built:** weight, the carry capacity, a hard limit, encumbrance, unlimited space, and a bag that follows the Bag Slots stat live: see [Inventories](/basic/shared-systems/inventories#inventory-styles). **Still to come on this page:** bags that are items, and the grid.
:::

Games hold items in different ways. ChronicleNode will let you choose the style of your game, and mix parts of them:

| Style | Example | What it is |
|---|---|---|
| **Slots** | What the toolkit has today | A fixed number of slots, one stack in each |
| **Bags** | World of Warcraft | Bags are **items**. Wearing a bag adds slots to the total; special bags hold only some kinds of items |
| **Grid** | Diablo | The bag is a grid of cells and every item has a shape (1x2 for a sword, 2x3 for armor) |
| **Weight** | Skyrim | No slot limit. Items have **weight** and the owner has a **carry capacity**; going over it slows you down instead of stopping you |

## The idea

An inventory style is made of **separate rules** that can be combined, not four fixed modes:

- **How items take space**: *slots*, a *grid*, or *no limit*.
- **Where the capacity comes from**: a stat of the owner, *bags* that the owner wears, or both.
- **Weight**: on or off. Items have a weight, an owner has a carry capacity, and what happens above it is a choice: nothing, a **hard limit** (nothing more can be picked up) or **encumbrance** (effects that slow the character down, in steps).

The project chooses the style for characters; a container, a chest or an NPC can have a style of its own (a chest of unlimited size, a grid for the player).

## What is there today

- **Slots**, **no limit** and **weight** (a hard limit or encumbrance) are built, with a style for characters, NPCs and containers.
- Items have a **weight** but no **size**, and nothing adds slots by being worn.
- Equipment slots can be locked and unlocked by a reward: a bag uses the same idea.

## The two that are left

**Bags (World of Warcraft).** A bag is an **equipment item** that gives slots. Some equipment slots are **bag slots** (a definition says so); the slots of the bags worn are added to the base slots of the character. The slots stay **one pooled list** that the window shows grouped by bag. A bag can accept only some [groups](/basic/types-and-groups/groups) of items (an herb bag, a quiver): such items go there first. A bag cannot be taken off if what it holds would not fit in the other slots.

**Grid (Diablo).** Every item has a **shape**: a width and a height in cells (1 x 1 by default). In a grid the bag is a grid of cells; an item stack covers the cells of its shape, is placed on the first free spot, and stacks still merge. There is **no rotation**. A new window draws the grid with drag and drop.

## Still to decide

- How several grids (a bag in a grid style) work together.
