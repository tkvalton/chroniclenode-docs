# Text tokens

A **text token** is a word in angle brackets that is replaced when the text is shown. Write `Well met, <player name>!` in a conversation and the player sees *Well met, Aldric!*. Tokens let one text work for every character, class and quest.

## Where you can use them

Tokens work in the texts the player reads:

- the **name** and **description** of a quest, its objectives and its hand-in text;
- conversation **chat** and **response** texts;
- the title and text of the default **popup**.

The editors say so in the tooltip of a field that takes tokens, and the tooltip lists them.

## The tokens

| Token | What it says | Works in |
|---|---|---|
| `<player name>` | The name of the player character | Everywhere |
| `<player class>` | The class of the player character | Everywhere |
| `<player level>` | The level of the player character | Everywhere |
| `<party size>` | How many members the party has | Everywhere |
| `<world name>` | The name of the world the player is in | Everywhere |
| `<npc name>` | The name of the NPC the player is talking to | Conversation text only |
| `<quest name>` | The name of the quest | Quest text only |
| `<quest level>` | The level of the quest | Quest text only |
| `<progress>` | How far the objective is, a number | Objective text only |
| `<target>` | How far the objective has to go, a number | Objective text only |

"Bring me `<target>` wolf pelts, `<player class>`" becomes *Bring me 10 wolf pelts, Mage*.
An objective text such as `Wolf pelts: <progress> / <target>` shows how far the player has got and how far the objective goes.

## Rules

- **Capitals, underscores and spaces do not matter.** `<Player Name>`, `<player_name>` and `<player name>` are the same token.
- **Something in angle brackets that is not a token is left as it is.** `<sigh>` stays `<sigh>`. A typo such as `<player nane>` is not replaced either; the quest editor warns about the unknown words.
- **A token that has nothing to say gets a plain fallback, never a gap.** A token outside the place it works in (an NPC name in a quest description) is filled with the fallback:

| Token | Fallback |
|---|---|
| `<player name>` | Adventurer |
| `<player class>` | adventurer |
| `<player level>`, `<party size>`, `<quest level>` | ? |
| `<world name>` | this land |
| `<npc name>` | someone |
| `<quest name>` | the quest |
| `<progress>` | 0 |
| `<target>` | 1 |

## Not the same as effect placeholders

The `<Effect1>` and `<EffectText1>` placeholders of ability and effect descriptions look alike but are a separate thing, filled in from the effects the text belongs to. See [Child effects and auras](/basic/abilities-and-effects/child-effects-and-auras#using-the-text-of-the-child-effects-in-a-description).

## Tokens of your own

A game can add tokens with a little code, such as `<guild name>`. See [Text tokens: how they are built](/advanced/shared-systems/text-tokens) (Advanced).

## See also

- [Quests](/basic/events-and-quests/quests)
- [Conversations](/basic/behaviors/conversations)
