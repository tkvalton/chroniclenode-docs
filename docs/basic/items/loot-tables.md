# Loot Tables

<Shot name="loot-tables-editor" caption="The Loot Tables editor (Items > Loot Tables)." />

A **loot table** says what a defeated enemy or an opened chest gives. It has two lists: the **guaranteed** items that always drop, and the **random** ones, rolled by weight.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon** | The name in the lists | |
| **Min items** / **Max items** | How many times the random list is rolled: a number from the minimum to the maximum. `0` for both means only the guaranteed items drop | `1` / `3` |

## Guaranteed entries

Each guaranteed entry always drops, and does not count toward the number of random rolls.

| Field | What it does |
|---|---|
| **Item** | The [item](/basic/items/items) |
| **Min quantity**, **Max quantity** | A random number between the two is dropped as one [stack](/basic/keywords#stacks) |

## Loot entries (the random rolls)

Each roll picks one entry from the list, at random, **in proportion to its weight**: an entry with weight `30` drops three times as often as one with weight `10`.

| Field | What it does | Default |
|---|---|---|
| **Item** | The item | |
| **Weight** | Higher means more likely. Only the proportions matter | `10` |
| **Min quantity**, **Max quantity** | The size of the stack when it drops | `1` / `1` |
| **Can duplicate** | Off: once this entry has dropped in this table roll it cannot be picked again. On: it can drop on several rolls | off |

Entries that drop twice are added into one stack count. An entry can never be rolled again if it has run out of options: with only two entries and *Max items* `5` you get at most two items, unless they can duplicate.

## An example

| Entry | Weight | Quantity |
|---|---|---|
| Wolf pelt (guaranteed) | | 1 to 2 |
| Raw meat | 50 | 1 to 3 |
| Wolf fang | 30 | 1 |
| Rare charm | 5 | 1 |

*Min items* `1`, *Max items* `2`: every wolf drops 1 or 2 pelts, plus one or two of meat, fang or charm, and the charm turns up about one time in 17 rolls.

## Test generation

The **Test** button at the bottom rolls the table many times and shows what dropped, so you can check the proportions before you play. The **Validation** box lists mistakes: a negative minimum, a maximum under the minimum, an entry with no item, a weight of 0, a quantity under 1.

## Where a loot table is used

| Where | How |
|---|---|
| **An NPC** | In its [definition](/basic/entities/npcs), *Loot table* and *Loot table logic*: **None**, **On initialize** (the loot is in its bag when it spawns) or **On death** (it drops when it dies) |
| **A unique character** | A [unique](/basic/world/uniques) can override the table of its definition |
| **A container** | A chest or crate [interactable](/basic/entities/interactables) fills itself from its loot table when it is created in the world, next to the items you put in it by hand |

## Stats that change loot

Two [gain channels](/basic/entity-stats/stats#the-effect-types) of the **killer** change a roll (the entity that dealt the last damage):

| Channel | What it does |
|---|---|
| **Loot quantity** | Makes the stacks of loot bigger. Never smaller than the table rolled |
| **Loot rarity** (magic find) | Raises the weight of the entries that are rarer than the average of the table, by that percent |

A **Gain Modifier Effect** on a stat (or on gear) sets them. They apply to the loot of an enemy that dies; a chest that fills itself has no killer, so they do not change its contents.

## See also

- [Items](/basic/items/items), [Currency](/basic/items/currency), [Stat recipes](/basic/entity-stats/stat-recipes)
