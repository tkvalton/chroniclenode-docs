# Quality

<Shot name="quality-editor" caption="The Quality editor (Equipment Definitions > Quality)." />

A **quality** says how rare or good an [item](/basic/items/items) is: Poor, Common, Uncommon, Rare, Epic, Legendary, Artifact. The demo has seven. A quality is a name, a color and a number, and the interface uses the color for the border and the name of the item. For an ordinary (authored) item that is all a quality does.

For a [generated item](/basic/items/item-generation) a quality does more: it says **how much** an item of that tier rolls: its stat budget, how many affixes, how many sockets, what it is worth and how it is named. All of that is optional and **does nothing at its default value**, so a quality that you made before generated items works exactly as it did.

## Basic fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon** | What the editors and tooltips show | |
| **Color** | The color of the item's border and name | white |
| **Quality tier** | A number for sorting and comparing: `1` is the lowest. Qualities are ordered by tier. Affixes and loot tables can ask for a lowest tier | `1` |

## How often it rolls

An item that **randomizes its quality** ([Items](/basic/items/items#basic-properties)) picks one of the qualities it can have by these weights.

| Field | What it does | Default |
|---|---|---|
| **Drop weight** | Higher is more common. `600` against `100`: six times as often | `100` |
| **Lowest item level** | The quality is not rolled on an item below this level (`0` = any). Epic can start at level 30 however lucky the roll | `0` |

A player's **magic find** (loot rarity) adds weight to the higher tiers.

## Stat budget

| Field | What it does | Default |
|---|---|---|
| **Budget multiplier** | Multiplies the [stat budget](/basic/items/item-generation#the-budget) of the items of this quality: Common 1, Magic 1.5, Rare 2.5 | `1` |
| **Roll spread** | How unevenly the budget is split between the bonuses of an item. `0` splits it evenly. `1` gives some bonuses much more than others | `0.5` |

## Affixes it rolls

How many [affixes](/basic/items/affixes) an item of this quality rolls. Each pair is the lowest and the highest number; the count is random between them. `0` and `0` rolls none of that kind.

| Row | What it rolls |
|---|---|
| **Prefixes** | Affixes that go before the name |
| **Suffixes** | Affixes that go after the name |
| **Silent affixes** | Affixes with no name: extra stats that only show in the tooltip |
| **Effect affixes** | Affixes that bring effects |

If an item has fewer fitting affixes than the number asked for, it gets as many as there are (each once).

## Sockets

**Extra sockets**: how many sockets of the listed **socket types** an item of this quality gets on top of the sockets written on it. Pick the types in the checklist below it.

## Value and name

| Field | What it does | Default |
|---|---|---|
| **Vendor value multiplier** | Multiplies what the item is worth to a [vendor](/basic/items/vendors) | `1` |
| **Name** | **With its affixes**: Heavy Great Axe of the Monkey. **Name of the item only**: Great Axe (the color tells the rest). **With the name of the quality**: Rare Great Axe | with its affixes |

## Custom rules

For something the fields do not cover: a **rule** is a small script that changes the roll of an item of this quality. A legendary that always gets +7 Strength, an epic that always has a socket. See [how to write one](/advanced/items/generation#custom-quality-rules). Put your rule scripts in `res://src/quality_rules/`; the editor lists them under **Add rule**.

## The preview

Under the fields the editor shows the **budget by item level** for the quality (with a slot weight and item multiplier of `1`), and the affix slots it rolls, so you can see what the numbers add up to.

## Example set

| Quality | Weight | Lowest level | Budget × | Affixes | Name |
|---|---|---|---|---|---|
| Common | 600 | | 1 | none | name only |
| Uncommon | 250 | | 1.4 | 0 to 1 prefix, 0 to 1 suffix | with affixes |
| Rare | 100 | | 2 | 1 prefix, 1 suffix, 0 to 1 silent | with affixes |
| Epic | 40 | 10 | 3 | 1 to 2 prefixes, 1 to 2 suffixes, 1 silent, 0 to 1 effect | with affixes |
| Legendary | 5 | 20 | 4.5 | 2 prefixes, 2 suffixes, 1 to 2 silent, 1 effect | with affixes |

## See also

- [Generated Items](/basic/items/item-generation), [Affixes](/basic/items/affixes), [Items](/basic/items/items), [Set Bonus](/basic/equipment-definitions/set-bonus)
