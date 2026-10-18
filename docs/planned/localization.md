# Localization: what is left

The localization tool is built: see [Localization](/basic/game-settings/localization). These are the parts that are not done yet.

## Sentences the game builds from numbers

The words around the numbers are translated where the interface has them (*Requires level %d*, *Buy: %s*). The sentences that the game builds in code from the data are still English:

| Text | Count |
|---|---|
| The description of an effect ("Deals 50 fire damage over 6 sec") | 92 effect types |
| The description of a quest objective ("Kill 5 wolves") | 78 objective types |
| The lines of the tooltips of stats, pools and status effects | about 40 |
| The combat log lines | about 15 |

Each of these becomes a **template** with named holes that a translator can reorder, like the others (*Kill {count} {target}*). Until then a tooltip in another language has English effect sentences in it.

## Plurals

A text with a plural has two forms (the name and a plural name, for currencies). Languages with three or four forms (Russian, Polish, Arabic) need the table to hold more forms for one row.

## Smaller leftovers

- The steps of the weight bar (the encumbrance steps of an inventory style) have names that are not in the tables yet.
- The name of a spawned object in a combat script ("Spawn Interactable" action) is not in the tables yet.
- Recipe categories have a translated label in the tables, but the crafting window does not list categories yet.
- Numbers, money and dates use the Godot formats, and the interface is not mirrored for right-to-left languages.
