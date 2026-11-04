# Spawn tables

A **spawn table** says **what can appear** and **how likely** each thing is: three wolves, a stag, a patch of herbs, a few coins, or nothing at all. It is a list of **lines**, each with a **weight**, much like a [loot table](/basic/items/loot-tables). A spawner (see [Spawners](/basic/world/spawners)) rolls a table every time it makes something. One table can be used by any number of spawners.

Make tables in **Database > World > Spawn Tables**. Give a table a name (*Forest animals*, *Graveyard undead*, *Meadow herbs*), then fill in its **Lines**.

## A line

| Field | What it does | Default |
|---|---|---|
| **What** (the menu at the left) | **NPC**, **Interactable**, **Dropped item**, **Dropped money**, **Loot table roll** (what a loot table gives, lying on the ground), **Another spawn table**, or **Nothing** | NPC |
| **Weight** | How likely the line is next to the others. A line with weight `3` comes up three times as often as one with weight `1`. `0` = never | `1` |
| **Chance** (shown) | The chance that the line comes up, worked out from the weights. They add up to 100 % | |
| **Makes** | The NPC, the interactable, the item, the currency, the loot table or the table. Not used by *Nothing* | none |

An **NPC** line has more:

| Field | What it does | Default |
|---|---|---|
| **Level** | The level the NPC appears at, between the two numbers. `0` and `0` = the level of its definition. Only a first number is that level exactly | `0` to `0` |
| **Together** | How many NPCs of the line appear at once, between the two numbers: a lone wolf, a pack of two to four | `1` to `1` |
| **Fight as one** | **None**: each acts alone. **A new encounter for each group**: the NPCs that appear together are one [encounter](/basic/world/encounters) (they join a fight together, keep a formation, react as a group) | None |

A **Dropped item** or **Dropped money** line has an **Amount**: how many lie there, between the two numbers.

Each line can be moved (**Up**, **Down**) or taken away (**Remove**). **Add line** adds one.

## Nothing

A line of **Nothing** is the chance that the place stays empty. A table of three lines of weight `1` and a *Nothing* line of weight `1` leaves the place empty one time in four.

## Tables inside tables

A line can be **Another spawn table**: when it comes up, that table is rolled in its place. A *Forest animals* table can hold a *Wolves* table (weight 1) and a *Deer* table (weight 3), and each of those has its own lines. Tables can go up to eight deep; a table that holds itself (or two that hold each other) gives nothing and the editor says so.

## Try it

**Roll 100 times** rolls the table a hundred times and shows how often each line came up ("Nothing: 37, Texas Red: 28, Gold: 10"). A table inside a table counts as its line.

## What the editor tells you

Under the lines the editor lists problems in orange: a table with no lines, a line with nothing chosen, a line whose NPC or item was deleted from the Database (a line like that is never rolled, and the other lines share its chance), a line that is the table itself, or a table where no line can come up.

## See also

- [Spawners](/basic/world/spawners): the nodes that roll the tables.
- [Loot tables](/basic/items/loot-tables), [Encounters](/basic/world/encounters), [Zones](/basic/world/zones).
- [How spawn tables are built](/advanced/world/spawn-tables).
