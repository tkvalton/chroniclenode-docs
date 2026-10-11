# Shared party inventory

By default **every character of the party has a bag and money of their own**. A game can change that in the [Gameplay Config](/basic/game-settings/gameplay-config#party-management) (Party Management > **Inventory sharing**): the party can share **one purse**, or **one purse and one bag**.

| Inventory sharing | What the characters share |
|---|---|
| **Per character** (default) | Nothing. Every character has a bag and money of their own. Loot, rewards and purchases go to the character who gets them |
| **Shared currency** | One purse for the whole party: all money is the same money. Every character keeps a bag of their own |
| **Shared currency and bag** | One purse and one bag. Whoever opens the inventory sees the same items and the same money |

**Shared bag slots** (default `40`) is the size of the shared bag. A bag of one character has the size of that character's carry weight; the shared bag has this fixed size instead (so the carry weight stat does not change it).

## What stays with the character

- **Equipment**: what a character wears or holds is theirs, whatever is shared. Taking a piece off puts it into the bag (the shared one, if there is one).
- **Skill points**, [abilities](/basic/abilities-and-effects/abilities), [proficiencies](/basic/entity-stats/proficiencies) and everything else that is about the character.

## What follows the choice

Everything that uses a character's bag or money uses the shared one when the party shares it:

- **Loot, item rewards, quest items and pick-pocketing** go into the bag of the party; money goes into the purse.
- **[Vendors](/basic/items/vendors)** sell to the purse and the bag, and buy from the bag.
- **[Trainers](/basic/items/trainers)** and **[crafting](/basic/items/craft-recipes)** take their costs and materials from the bag and the purse that the learner or crafter uses.
- [Quest items](/basic/items/items#quest-item) in the shared bag count for the whole party.

## Good to know

- **Choose it before the game starts.** A save made with another choice is not converted: money and items of the characters would be put together (or split) wrongly.
- A character that **joins** the party with money of their own puts it into the shared purse.
- The shared bag and purse are emptied by a **new game** and saved with the characters (every character's save holds the same bag; loading puts it back once).
- With a shared bag, only the **character the player controls** reports "an item came in" to events and triggers, so a trigger does not fire once per member.
- Starting items of every character are put into the shared bag when the character joins.

## See also

- [Inventories](/basic/shared-systems/inventories), [Gameplay Config](/basic/game-settings/gameplay-config), [Items](/basic/items/items), [Playable Character](/basic/entities/playable-character), [Crafting professions per character](/basic/items/craft-schools#who-owns-the-professions)
