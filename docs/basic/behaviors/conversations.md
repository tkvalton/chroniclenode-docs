# Conversations

<Shot name="conversations-editor" caption="The Conversations editor (Behaviors > Conversations)." />

A **conversation** is a dialogue: what an NPC says, what the player can answer, and what happens because of it. It is drawn as a **graph** of boxes joined by lines, so a branching story is easy to see. You attach a conversation to an NPC or an object with a [Conversation interaction](/basic/entities/interactables#conversation); the player starts it by using the NPC.

## The pieces

| Piece | What it is |
|---|---|
| **Chat** | One thing the NPC says: a block of text with an optional voice line and animation. A chat leads to a list of **responses** |
| **Response** | One answer the player can pick. It may have **requirements** and **actions** |
| **Dice roll** | A skill check that sends the conversation down one of two chats |
| **Start entry** | Where the conversation begins, with requirements. The first one the player qualifies for is used |

```text
[Start: "Stranger"]  ──►  [Chat: "What do you want?"]
                              ├─ [Response: "Who are you?"]      ──►  [Chat: "The mayor."]
                              ├─ [Response: "I need a job."]     ──►  [Chat: "Slay ten wolves."]
                              │                                        └─ [Response: "I accept."]  action: give quest
                              ├─ [Response: "Persuade (Charisma)"] ──►  [Dice roll d20, DC 12]
                              │                                        ├─ pass ──►  [Chat: "Fine, you may enter."]
                              │                                        └─ fail ──►  [Chat: "Get out!"]
                              └─ [Response: "Goodbye"]           action: end chat
```

## Chats

| Field | What it does | Default |
|---|---|---|
| **Text** | What is said. One entry for each language of the [localization](/basic/game-settings/localization); the first is the default. BBCode works | |
| **Voice line** | A sound for each language | none |
| **Animation** | A social animation the NPC plays | none |
| **Responses** | The responses offered, in order. An empty slot is a connector with nothing on it | none |
| **Allow end conversation** | Adds an automatic *End conversation* answer | on |

## Responses

| Field | What it does | Default |
|---|---|---|
| **Display name** | The text of the button. One for each language | |
| **Response text** | What the player's character says when it is chosen. One for each language | |
| **Active** | A response that is not active is hidden until an action turns it on | on |
| **Tags** | Words to group responses ("quest_active", "merchant", "romance") | none |
| **Voice line**, **Animation** | Played when chosen | none |
| **Requirements** | [Requirements](/basic/shared-systems/requirements) the player must meet for the response to show: a level, a class, a quest done, a [proficiency](/basic/entity-stats/proficiencies), a reputation. The **Response seen** requirement needs the player to have chosen another response before | none |
| **Actions** | What happens when it is chosen, see below | none |

## Actions

Actions run when a response is chosen (and in order).

| Action | What it does |
|---|---|
| **Proceed to chat** | Go to another chat. A response with no action ends the line |
| **End chat** | Close the conversation |
| **Proceed to dice roll** | Make a skill check, then go to its pass or fail chat |
| **Grant reward** | Give a [reward](/basic/shared-systems/rewards): an item, experience, currency, reputation |
| **Set starting chat** | Where this conversation will start **next time**. A story that moves on: the first talk, the second talk |
| **Set response state** | Turn another response on or off |
| **Trigger new interaction** | End the conversation and start a different [interaction](/basic/entities/interactables#interaction-types): open the shop, give the quest |

## Dice rolls

A skill check inside a conversation.

| Field | What it does | Default |
|---|---|---|
| **Roll type** | D4, D6, D8, D10, D12, D20, D100, 2D6, 3D6 or 4D6 | D20 |
| **DC** | The number to reach | `10` |
| **Modifier type** | How a stat changes the roll: **None**, **Additive** (the stat value is added), **Percentage** (the stat raises the chance of success by that percent) or **D&D style** (`(stat - 10) / 2`) | Additive |
| **Modifier stat** | The [stat](/basic/entity-stats/stats) that gives the bonus. Empty = none | none |
| **Accepts critical success/fail** | The lowest roll always fails, the highest always succeeds | off |
| **Pass chat**, **Fail chat** | Where the conversation goes | |

## Starting a conversation

The **Start** box lists **start entries** in priority order. Each has a chat and requirements. The first entry whose requirements the player meets is where the conversation opens: a first-meeting chat, then a "welcome back" once a quest is done. With no entries, the conversation opens at its first chat. An action can set a starting chat for the next time, which wins over the entries.

## Quests in a conversation

| Field | What it does |
|---|---|
| **Offer quests** | [Quests](/basic/events-and-quests/quests) the NPC can give. They show only when the player meets the requirements of the quest |
| **Hand-in quests** | Quests that can be handed in here. A quest that does not complete because a reward does not fit keeps the hand-in open |

## The graph editor

The toolbar above the graph has:

| Button | What it does |
|---|---|
| **Add Chat**, **Add Response**, **Add Dice Roll**, **Create Start** | Add a box of that kind to the graph |
| **Add Requirement** | Adds a requirement box (a gate) to put on a response |
| **Validate** | Checks the conversation for broken links and empty boxes |
| **Show Quests** | Shows the **Offer quests** and **Hand-in quests** lists. Right-click in a list to add or remove a quest |
| **Language** | Chooses which language's text the boxes show (see [Localization](/basic/game-settings/localization)) |

Drag from the port of one box to the port of another to connect them: a chat to its responses, a response to the chat it leads to. The layout of the boxes is saved with the conversation.

## See also

- [Interactables](/basic/entities/interactables#conversation), [Requirements](/basic/shared-systems/requirements), [Rewards](/basic/shared-systems/rewards), [Quests](/basic/events-and-quests/quests)
- [Behaviors: how they are built](/advanced/behaviors/) (Advanced)
