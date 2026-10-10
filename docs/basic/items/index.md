# Items

Everything a player can own, find, make and trade is built in this category: the **items** themselves, the **currencies** that pay for them, the **loot tables** that drop them (and the [loot rules](/basic/items/loot-rules) that say when and at what level), the **affixes** that give generated items their random bonuses, the **craft schools and recipes** that make them and the **vendors** that sell them.The rules that equipment is built from (slots, types, qualities, sets, sockets) are in [Equipment Definitions](/basic/equipment-definitions/).

| Tab | What it holds |
|---|---|
| [**Items**](/basic/items/items) | Every item of the game, of eleven kinds: basic, consumable, equipment, weapon, ammo, [quest](/basic/events-and-quests/quests) item, material, enchant scroll, on-use item, readable and socketable |
| [**Currency**](/basic/items/currency) | Gold, gems, credits: anything that is counted instead of carried, with a maximum and an abbreviation |
| [**Loot Tables**](/basic/items/loot-tables) | What an enemy, a chest or a crate drops: guaranteed entries and weighted random rolls of items, currency and other tables |
| [**Affixes**](/basic/items/affixes) | The bonuses a generated item can roll: "Heavy", "of the Monkey". An affix says what, the item's budget says how much |
| [**Craft Recipes**](/basic/items/craft-recipes) | Materials in, an item out, with a duration, a skill level and requirements |
| [**Craft Schools**](/basic/items/craft-schools) | A crafting profession: its skill, its recipe categories, the recipes it starts with and what it takes to learn it |
| [**Vendors**](/basic/items/vendors) | A shop: what it stocks, how it restocks, what it pays and what it charges |

## Authored or generated

An item can be exactly what you wrote (the default), or **generated** when it is given: it rolls its quality and bonuses, and it can scale with the level it is given at. **[Generated Items](/basic/items/item-generation)** explains the whole system and the styles you can build with it, from "hand-made items only" to "random affixes everywhere". [Loot Rules](/basic/items/loot-rules) say when an NPC or an object hands out its loot and at what item level.

## How the pieces work together

1. An **item definition** says what an item is. The player's bag holds **item instances**: the same definition with a [stack](/basic/keywords#stacks) size, charges, a [cooldown](/basic/keywords#cooldown), socketed gems and enchantments of its own.
2. A **loot table** (through a [loot rule](/basic/items/loot-rules)) puts instances in a chest or on a corpse,a **vendor** sells them, a **recipe** makes them, a [reward](/basic/shared-systems/rewards) gives them.
3. Using an item runs what it is: a consumable applies its [effect](/basic/abilities-and-effects/effects), an on-use item runs its [ability](/basic/abilities-and-effects/abilities), equipment is worn into a slot and gives its stat bonuses and effects while it is there.
4. Anything an item needs to be used or worn is a [requirement](/basic/shared-systems/requirements): a level, a class, a [proficiency](/basic/entity-stats/proficiencies), a quest.

## What happens when there is no room

Nothing is ever lost and nothing is put over another item. When a reward, a purchase or a finished craft needs room that the bag has not got:

| Source | What happens |
|---|---|
| **A purchase** | Refused, and no money is taken. Buying is all or nothing: the stock, the price and the room for the whole quantity are checked first |
| **A craft** | The materials are taken and the room for the result is checked. Without room **the craft does not start** and the materials stay. A result that finds the bag full when it is done waits in the school and is delivered as soon as there is room |
| **A reward** (quest, level-up, event, conversation) | It waits, is saved, and is given when the bag has room. A quest does not complete while one of its rewards does not fit |
| **Equipping over a worn item** | The worn item needs a free slot in the bag; with a full bag a swap still works, because the new item leaves its slot first |

Every one of these tells the player in the message area. Dropping the overflow into the world is not built yet.

## See also

- [Equipment Definitions](/basic/equipment-definitions/), [Groups](/basic/shared-systems/groups) (shared cooldowns for potions, ammo matching), [Requirements](/basic/shared-systems/requirements), [Rewards](/basic/shared-systems/rewards)
- [Items: how they are built](/advanced/items/) (Advanced)
