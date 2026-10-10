# Loot Tables

<Shot name="loot-tables-editor" caption="The Loot Tables editor (Items > Loot Tables)." />

A **loot table** says what a defeated enemy, an opened chest or a destroyed crate can give. It has two lists: the **guaranteed** entries that always drop, and the **random** ones, rolled by weight. An entry is an **item**, an **amount of a currency**, or **another loot table**.

A table says *what*. *When* it drops and *at what item level* is said by the [loot rule](/basic/items/loot-rules) of whatever holds it.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon** | The name in the lists | |
| **Min items** / **Max items** | How many times the random list is rolled: a number from the minimum to the maximum. `0` for both means only the guaranteed entries drop | `1` / `3` |
| **Nothing weight** | The weight of "nothing": a roll can come up empty. With entries of total weight `30` and a nothing weight of `10`, one roll in four gives nothing | `0` |
| **Lowest quality tier** | A [generated item](/basic/items/item-generation) from this table never rolls a quality under this tier (a boss table never gives Common). `0` = any | `0` |
| **Item level source** | Where the item level of the drops comes from. When it is not *Inherit* it **overrules** the source of the loot rule ([Loot Rules](/basic/items/loot-rules#where-the-item-level-comes-from)) | Inherit |

## The entries

An entry has a **type**: **Item** (**Add Loot Entry**), **Currency** (**Add currency**) or **Table** (**Add table**: the drops of another table, so a boss can have its own table and the common table of its zone). Every entry has these:

| Field | What it does | Default |
|---|---|---|
| **Chance** | Once the entry is picked, the chance (in percent) that it gives anything. A guaranteed entry with `50` gives half the time | `100` |
| **Lowest / highest item level** | The levels of loot the entry drops at (`0` = no limit) ([Level bands](#level-bands)) | `0` |

### Guaranteed entries

Each guaranteed entry always drops (subject to its chance and level band) and does not count toward the number of random rolls.

| Field | What it does |
|---|---|
| **Item** / **Currency** / **Table** | What it gives |
| **Min quantity**, **Max quantity** | A random number between the two. For an item it is dropped as one [stack](/basic/keywords#stacks); for a currency it is the amount |

### Rolled entries

Each roll picks one entry from the list, at random, **in proportion to its weight**: an entry with weight `30` drops three times as often as one with weight `10`.

| Field | What it does | Default |
|---|---|---|
| **Weight** | Higher means more likely. Only the proportions matter | `10` |
| **Min quantity**, **Max quantity** | The size of the stack (or the amount of currency) when it drops | `1` / `1` |
| **Can duplicate** | Off: once this entry has dropped in this table roll it cannot be picked again. On: it can drop on several rolls | off |

Entries that drop twice are added into one stack count. An entry can never be rolled again if it has run out of options: with only two entries and *Max items* `5` you get at most two items, unless they can duplicate.

### Level bands

Put a **lowest** and a **highest item level** on an entry and it only drops from loot of those levels. This is the Skyrim style of loot: no item is generated, you just say which of your items drop where.

| Entry | Lowest | Highest |
|---|---|---|
| Rusty sword | | 20 |
| Iron sword | 10 | 40 |
| Steel sword | 30 | |

At level 5 only the rusty sword can drop. At level 15 the rusty and the iron one. From level 41 only the steel one. The item level comes from the [loot rule](/basic/items/loot-rules#where-the-item-level-comes-from) (the level of the NPC, the party, the world ...).

### Tables inside tables

A **Table** entry rolls the other table and adds what it gives. The other table can have an **Item level source** of its own: its entries use it, while the entries of the outer table keep theirs. A table that contains itself stops after a few levels, and the table reports it.

## An example

| Entry | Weight | Quantity |
|---|---|---|
| Wolf pelt (guaranteed) | | 1 to 2 |
| Silver (currency, guaranteed) | | 5 to 20 |
| Raw meat | 50 | 1 to 3 |
| Wolf fang | 30 | 1 |
| Rare charm | 5 | 1 |

*Min items* `1`, *Max items* `2`: every wolf drops 1 or 2 pelts and some silver, plus one or two of meat, fang or charm, and the charm turns up about one time in 17 rolls.

## Generated items in a table

An entry that points at an item that is [generated](/basic/items/item-generation) (it rolls its quality, its stats or its effects, or it scales with its item level) does not drop a copy: it drops an item **generated at the item level of the drop**, each with its own roll. An entry that points at an ordinary item drops it as it is. There is no extra switch on the entry.

## Test generation

The **Test** button at the bottom rolls the table ten times at the **level of a test roll** (a field above it; a table that pins a fixed level uses that) and shows what dropped. A generated item is shown as it would be made: *Heavy Great Axe of the Monkey (Rare, level 30): +860 Strength, +573 Agility*. A summary of the totals follows, so you can check the proportions before you play. The **Validation** box lists mistakes: a negative minimum, a maximum under the minimum, an entry that points at nothing, a weight of 0, a quantity under 1, a table that contains itself.

## Where a loot table is used

A table is used through [loot rules](/basic/items/loot-rules):

| Where | How |
|---|---|
| **An NPC** | In its [definition](/basic/entities/npcs#loot), a rule with the trigger **On Initialize**, **On Death** or **On First Access** |
| **A chest, crate or other object** | In its [interactable](/basic/entities/interactables#loot), a rule with **On Initialize**, **On First Access** (when it is opened) or **On Destroyed** |
| **A placed NPC or object** | A [unique](/basic/world/uniques) can replace the rules of its definition |

Older NPCs and containers that still use the single **Loot table** field keep working, and the editors can move them into rules.

## Stats that change loot

Two [gain channels](/basic/entity-stats/stats#the-effect-types) of the **receiver** (the killer, the one who opens the chest) change a roll:

| Channel | What it does |
|---|---|
| **Loot quantity** | Makes the stacks of loot bigger. Never smaller than the table rolled |
| **Loot rarity** (magic find) | Raises the weight of the entries that are rarer than the average of the table, by that percent. For generated items it also moves the roll of the quality toward the higher tiers |

A **Gain Modifier Effect** on a stat (or on gear) sets them. A loot rule has **The receiver changes it** (on by default). A rule that fills a chest at set up has no receiver, so they do not change its contents.

## See also

- [Loot Rules](/basic/items/loot-rules), [Generated Items](/basic/items/item-generation), [Items](/basic/items/items), [Currency](/basic/items/currency), [Stat recipes](/basic/entity-stats/stat-recipes)
- [Loot: how it is built](/advanced/items/loot) (Advanced)
