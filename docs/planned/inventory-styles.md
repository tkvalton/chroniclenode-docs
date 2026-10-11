# Inventory styles

::: warning Not built yet
This page describes a feature that is **being designed**. Today every inventory is a list of slots, one stack in each slot: see [Inventories](/basic/shared-systems/inventories). Nothing here can be used yet, and the design may change.
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

- Items have **no weight and no size**. The *Item weight enabled* setting is stored and unused.
- The **Carry Weight** stat is the **number of slots** of a bag, read when the character is made.
- Equipment slots can be locked and unlocked by a reward: a bag could use the same idea.

## Still to decide

- How bags and a weight limit work with a [shared party inventory](/basic/entities/shared-inventory).
- Whether items in a grid can be rotated, and whether stacks are allowed in a grid.
- Which of the three styles to build first.
