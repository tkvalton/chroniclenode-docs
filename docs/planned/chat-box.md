# Chat box and combat log

::: warning Not built yet
This page describes a planned feature. Today the [HUD](/basic/user-interface/hud) has a **combat log** and the interface has short **messages**; neither keeps what the player did.
:::

The combat log is going to become a **chat box**: one window of the HUD with **tabs**, where the game writes down what happens to the party, and where the player can type.

## What exists today

- The **combat log** ([`CombatLog`](/advanced/user-interface/hud/combat-log)) shows the lines of the combat: three text areas (everything, damage taken, damage done), fed in batches by the [combat manager](/advanced/entity-stats/combat/combat-manager).
- **Messages** (`ui_manager.message()` and friends) show a line at the top of the screen that fades. They keep nothing.
- Nothing records a level up, a skill up, loot, experience or a quest update.

## What is planned

### Tabs of messages

| Tab | What it holds |
|---|---|
| **General** | Everything that is not combat: level ups, skill ups of a [profession](/basic/entities/playable-character), experience and money gained, loot received, quests started and finished, reputation changes, abilities learned, system messages |
| **Combat** | The combat log as it is now, with the filters it has: damage done, damage taken, healing |
| **Loot** | What was picked up and who got it |
| **Your tabs** | A tab is a **filter**: the kinds of message it shows. You make the tabs of your game, and the player may add their own |

### Messages for the events of the game

The chat box listens to the same signals as the rest of the interface, so a system **does not have to know about it**. A **message template** for each kind of event says what is written, with [text tokens](/basic/shared-systems/text-tokens) for the details:

| Event | Example |
|---|---|
| Experience | `You gain 120 experience.` |
| Level up | `Mira reaches level 5.` |
| Skill up | `Your Herbalism increases to 31.` |
| Loot | `You receive [Iron Sword] x1.` |
| Money | `You receive 3 gold 20 silver.` |
| Quest | `Quest accepted: Wolves at the Gate.` |
| Reputation | `Your standing with the Rangers increases.` |

The templates are text in the project, so a game can change the voice of its messages ("You feel stronger!") or [translate them](/planned/localization). A message can be coloured by its kind and can hold a **link** to the item or ability it names (hover for the tooltip).

### Typing and emotes

- **Enter** opens a line to type in. A line that starts with **/** is a **command**.
- **Emotes** are commands that make the character **play an animation** and write a line: `/wave` shows *Mira waves.* A game defines its emotes: a name, an animation and the text for *to everyone* and *to a target*.
- A plain line is **said** by the current character: it shows above their head and in the box, and an [event](/basic/events-and-quests/events) trigger can react to it (an NPC that answers a word). A single-player game uses this for emotes and for the developer's own commands; it is not a network chat.

## Still undecided

- Whether the chat box stays a **HUD element** or becomes a panel with a panel key (a HUD element is simpler; the player can then not minimise it).
- How much to keep: how many lines, and whether the log is **saved** with the game.
- Where **emotes** are authored: a new tab in the database, or a list in the Gameplay Config.
- Whether a message of the box is also shown as a fading [message](/basic/user-interface/messages-and-popups) (a *level up* probably should).

## See also

- [HUD](/basic/user-interface/hud)
- [Messages and popups](/basic/user-interface/messages-and-popups)
- [Text tokens](/basic/shared-systems/text-tokens)
