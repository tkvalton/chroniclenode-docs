# Generated Items

Most items are **authored**: you write one sword, with its stats, and every copy of it in the game is the same. A **generated** item is made at the moment it is given (as loot, a reward, in a shop) and can be different every time, and fit the level of the player who gets it. Everything on this page is **optional**. An item that has none of the settings below is an ordinary authored item, exactly as it always was.

You choose how much to randomize. A game with hand-made gear never touches this page. A game that wants endless loot (Diablo style) uses all of it. Most games land in the middle: a few authored items, some that scale, and some that roll a bonus or two.

## The four ideas

| Idea | What it is | Where you set it |
|---|---|---|
| **Item level** | How powerful an item is, as a number. It decides how big the bonuses of a generated item are and which [affixes](/basic/items/affixes) can roll on it. It is **not** a level the player needs to use the item (that is a [requirement](/basic/shared-systems/requirements#level)) | The item, and wherever the item is given ([loot rules](/basic/items/loot-rules), [rewards](/basic/shared-systems/rewards#item-reward), shops) |
| **Quality** | A tier (Common, Rare, Epic ...) with a color. It also says **how much** an item of that tier rolls: its stat budget and how many affixes | [Quality](/basic/equipment-definitions/quality) |
| **Affix** | A bonus an item can roll: "Heavy" (+Strength), "of the Monkey" (+Agility **or** +Dodge). It says **what** the bonus is, never how big | [Affixes](/basic/items/affixes) |
| **Stat budget** | A pool of points the bonuses of an item share. It grows with the item level, and each stat costs a different amount per point, so +400 Strength, or +200 Crit and +200 Hit, are the same value | [Gameplay Config](/basic/game-settings/gameplay-config#item-generation), [Stats](/basic/entity-stats/stats#item-budget), [Equipment Slot](/basic/equipment-definitions/equipment-slot#item-budget) |

## What happens when a generated item is made

1. The **item level** is decided (the item's own, or the one the loot, reward or shop says).
2. The **quality** is decided: the item's own, or rolled from the qualities it can have (more common ones first; a lucky player's [magic find](/basic/items/loot-tables#stats-that-change-loot) shifts the roll upward).
3. The **budget** is worked out: the budget of the item level × the weight of its [slot](/basic/equipment-definitions/equipment-slot) × the multiplier of the item × the budget multiplier of the quality. What is **written on the item** (its stats and effects) is paid from the budget first.
4. The **affixes** are picked: as many prefixes, suffixes, silent affixes and effect affixes as the quality says, from the pool of the item, by weight, never two of one exclusive group.
5. The **effects** the affixes bring are paid (each has a fixed price). What is left is shared between the **stat bonuses**: each gets a share, a slice of the budget, and its points are the slice divided by the cost of the stat.
6. The item gets its **name** (Heavy Great Axe of the Monkey), extra **sockets** if its quality gives some, and any [custom rule](/basic/equipment-definitions/quality#custom-rules) of the quality runs.
7. What was rolled is **saved on the item**. It never changes afterwards: changing a formula, a quality or an affix later does not alter an item that already dropped.

## The budget

```
budget = (budget of the item level) × (weight of the slot) × (multiplier of the item) × (budget multiplier of the quality)
```

| Piece | Where | Default |
|---|---|---|
| Budget of the item level | **Game Settings > Gameplay Config > Item Generation > Item Budget Formula**. A [formula](/basic/shared-systems/formulas) of the item level. Empty = Linear 20 | 20 per level: 20 at level 1, 400 at level 20 |
| Weight of the slot | The [equipment slot](/basic/equipment-definitions/equipment-slot#item-budget) the item goes in. Chest 1.5, ring 0.5 | `1` |
| Multiplier of the item | **Budget multiplier** in the item's **Generation** section. A two-handed axe 1.5 | `1` |
| Budget multiplier of the quality | The [quality](/basic/equipment-definitions/quality#stat-budget). Common 1, Rare 2 ... | `1` |

**Stat cost.** Every [stat](/basic/entity-stats/stats#item-budget) has a **budget cost per point** (default `1`). A stat that costs `2` gets half the points for the same slice: crit rating can cost 2 and dodge 3. This is what makes stats comparable.

**Effect cost.** An [effect](/basic/abilities-and-effects/effects) on an item or an affix has a **fixed budget cost** you write on it (a burn-on-hit proc: `150`). Effects are not scaled by the budget. An effect that costs more than what is left is simply **not rolled**.

**Written stats count.** The stats and effects you write on the item are paid from the budget **first**. A hood with +100 Strength written on it has `budget - 100` left for the affixes. If what is written costs more than the whole budget, nothing is left and no affix rolls (the editor warns you). The **Budget check** in the item editor shows this for any item level and quality.

### A worked example

A two-handed **Great Axe**. Item multiplier `1.5`, +100 Strength written on it, the slot has weight `1`. It drops as a **Rare** (budget multiplier `2.5`, 1 prefix, 1 suffix, 1 silent affix) at **item level 30**.

| Step | Number |
|---|---|
| Budget | 20 × 30 = 600; × 1 (slot) × 1.5 (item) × 2.5 (quality) = **2250** |
| Written +100 Strength costs | 100 (so **2150** is left) |
| Affixes picked | *Heavy* (prefix: Strength), *of the Monkey* (suffix: Agility **or** Dodge, rolled Agility), *Keen* (silent: Crit rating, costs 2) |
| Shares | each affix has a random weight (the quality's **roll spread**): say 1.2, 0.8 and 1.0 of a total of 3 |
| Strength | 2150 × 1.2 ÷ 3 = 860 points of budget = **+860 Strength** |
| Agility | 2150 × 0.8 ÷ 3 = 573 = **+573 Agility** |
| Crit rating | 2150 × 1.0 ÷ 3 = 717 of budget ÷ 2 per point = **+358 Crit rating** |

The item is called **Heavy Great Axe of the Monkey**, is Rare in color, and its tooltip lists where each bonus came from ("Heavy: +860 Strength"). The next Great Axe that drops can have other affixes and other splits, but always the same total budget.

## Choosing your style

Pick the recipe closest to your game, and mix as you like.

### 1. Hand-made items only

Do nothing. An item with no box ticked is exactly what is written. Use a [loot table](/basic/items/loot-tables) with the items you made; give the quest rewards by hand. The item level on the item is only shown in the tooltip.

### 2. One reward that fits every stage of the game

You made one great sword and want it to be a good reward at level 5 and at level 50.

1. Open the item, tick **Scales with item level**. The item level of the item now reads **Authored at level**: write the level your numbers are for (usually `1`).
2. Give it as a [reward](/basic/shared-systems/rewards#item-reward) or in a [loot table](/basic/items/loot-tables), and say the level it is made at (the level of the player, a fixed level, the party, the world).

The stats and weapon damage you wrote are multiplied by how much the budget has grown from the authored level to the level it is made at (level 30 against level 1 is ×30 with the default budget). It never shrinks under what you wrote. Its effects are not scaled by this: give an effect an amount that reads **Item level of the item of the effect** if you want it to grow.

### 3. Items whose quality is random

Tick **Randomize** next to the quality and tick the qualities it can roll. The chance of each is its **drop weight**. With no [affix slots](/basic/equipment-definitions/quality#affixes-it-rolls) on those qualities it only changes the color, name and value of the item: a simple "this potion is Good or Excellent".

### 4. Items with random bonuses (the Diablo style)

1. Make your [qualities](/basic/equipment-definitions/quality) say how many prefixes, suffixes and silent affixes they roll.
2. Make [affixes](/basic/items/affixes): "Heavy", "of the Monkey" ...
3. Open an equipment item and, in **Generation**, tick **Randomize stats** (and **Randomize effects** if you made effect affixes). Choose where the affixes come from: **any that fit** the item, or **only these** you list for it (a Great Axe lists its own).
4. Give the item through a loot rule, reward or shop that says its item level.

### 5. Authored items with level bands (the Skyrim style)

You write every item, and the table picks the item that fits the level: put **lowest and highest item level** on the entries of a [loot table](/basic/items/loot-tables#level-bands). At level 10 the iron sword drops; from level 20 the steel sword does. No item is generated.

### 6. A mix

Write the base stats you want on every Great Axe, tick **Randomize stats** for the extra bonuses on top, and make it scale. The written part is paid first, the rest is rolled.

## Setting it up, step by step

| # | Where | What |
|---|---|---|
| 1 | **Entity Stats > Stats** | Give stats that should cost more a **budget cost** (crit rating 2). Optional |
| 2 | **Equipment Definitions > Equipment Slot** | Give slots a **budget weight** (ring 0.5, chest 1.5). Optional |
| 3 | **Game Settings > Gameplay Config > Item Generation** | Choose the **budget formula**. The default (20 per level) is a fine start |
| 4 | **Equipment Definitions > Quality** | Set the budget multiplier and the affix slots of each quality |
| 5 | **Items > Affixes** | Make the affixes |
| 6 | **Items > Items** | Tick **Randomize**, **Scales with item level** or **Randomize stats / effects** on an item and check its **Budget check** |
| 7 | **Items > Loot Tables**, an NPC or an object's [loot rules](/basic/items/loot-rules), a [reward](/basic/shared-systems/rewards#item-reward), a [vendor](/basic/items/vendors) | Give it out, and say the item level |
| 8 | **Items > Loot Tables > Test** | Roll the table at a level and read what comes out |

## Where the item level comes from

A generated item needs a level when it is given. Each way of giving has a setting for it:

| Given by | The level comes from |
|---|---|
| A [loot rule](/basic/items/loot-rules#where-the-item-level-comes-from) (NPC, chest, destroyed object) | The rule and the loot table: the NPC's level, the player's, the party's, the world's or a fixed number |
| An [item reward](/basic/shared-systems/rewards#item-reward) | The reward: the level of the player (default), a fixed level, the party or the world, with an offset |
| A [vendor](/basic/items/vendors#generated-items) | The stock entry (`0` = the level of the buyer) |
| The **Create Item** effect and the **Add Items to Container** action | Their own *Item level* field (`0` = the level of the one who gets it, or the party) |

## What players see

- The **name**: the quality's *Name* setting chooses *with its affixes* (Heavy Great Axe of the Monkey), *name of the item only* (the color tells the rest) or *with the name of the quality* (Rare Great Axe).
- The **quality** name and color, and **Item Level N**.
- The bonuses, and under them where each came from.
- A **level requirement** can follow the item level ([Requirements](/basic/shared-systems/requirements#level)): an item generated at level 30 can ask for a level 28 player.
- Generated items **stack** only with the same roll. Two potions of the same quality stack; two axes never do.

## Tips

- If nothing rolls, check, in this order: the item's **quality** has affix slots; the item has **Randomize stats** ticked; some affix **fits** the item (equipment type, item level, quality tier); the **budget check** is not red.
- An affix that gives a stat with a high cost needs a big budget: at low levels it can give **0 points** and drop out. Give it a lowest item level.
- Give an affix a **cap** to stop a stat that is too strong (dodge never above 15). What a cap cuts off is given to the other bonuses of the item.
- Use the **exclusive group** of affixes so an item cannot be of the Monkey and of the Bear at once.
- Everything is rolled once and kept, so you can safely rebalance the budget formula between versions of your game: items that already dropped keep their stats.

## See also

- [Quality](/basic/equipment-definitions/quality), [Affixes](/basic/items/affixes), [Loot Rules](/basic/items/loot-rules), [Loot Tables](/basic/items/loot-tables), [Items](/basic/items/items)
- [Generated items: how they are built](/advanced/items/generation) (Advanced)
