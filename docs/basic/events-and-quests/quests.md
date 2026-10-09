# Quests

A **quest** is a job the player takes on: *Kill three wolves*, *Bring the herbs to the healer*, *Find the lost child*. **Events > Quests** is where you make them. A quest has **objectives** to complete, **rewards** when it is done, **requirements** to accept it, and rules for what happens when it is failed, given up, or done again.

Most quests are offered and handed in through a [conversation](/basic/behaviors/conversations); an [event](/basic/events-and-quests/events) can also start, complete or fail a quest (the *Quest* actions), so a region, a timer or a death can give one.

## The editor

| Field | What it does | Default |
|---|---|---|
| **Name**, **Description**, **Icon** | What the player reads in the quest log and the tracker. The name and description can use [words in `<angle brackets>`](#words-in-the-texts); double click the description for formatting | |
| **Quest level** | The level of player the quest is meant for. `0` = no level. It is only **shown**: the name gets "[Lv 12]" in front. What the player needs to accept the quest is a *requirement* | `0` |
| **When it fails** | **Use the gameplay setting**, **Final** (it is over for good), **Can be retried** (it can be taken again from the start) or **Game over** (failing it ends the game). See *Failing* below | Use the setting |
| **Can be given up** | **Use the gameplay setting**, **Yes** or **No**. See *Giving up* below | Use the setting |

### Objectives

Right-click **Objectives** in the tree and **Add Objective**. An objective is a thing the player must do. It is made of an **event trigger** (the same [triggers](/basic/events-and-quests/event-triggers) that start events) and some display settings. "Kill 3 wolves" is an *Entity Death Type* trigger with a count of 3; "Talk to the king" is an *Entity Interact* trigger; "Reach the old mill" is a *Region Detection Player* trigger.

| Setting | What it does | Default |
|---|---|---|
| **The trigger** | When the objective is done, and its own fields (which NPC, how many, which region) | |
| **Optional** | The quest can complete without it, and failing it does not fail the quest. The tree and the log show "(optional)". A required objective that fails fails the quest | off |
| **Hide description** | The log does not show this objective until it is done | off |
| **Progress display** | **None**, **X / Y** (a tally) or **Percent**. Used by objectives that count | X / Y |
| **Custom description** | Replaces the text that is written from the trigger ("Defeat 3 Wolf") | empty |

An objective has a **number** (its position, 1 is the first). Conversations and the *Complete Quest Objective* and *Fail Quest Objective* actions use the number, so an objective that nothing in the world can measure ("the king decides you are worthy") can be completed by an event or a conversation response.

The quest is complete when every **required** objective is complete.

### Rewards

**Add Reward** gives the player [rewards](/basic/shared-systems/rewards) when the quest completes: experience, items, gold, reputation, a skill point. Right-click a reward to edit, remove, move or clear. If a reward needs room the player does not have (an item and a full bag), the player is told and the quest **waits**; it completes by itself as soon as there is room (a hand-in quest, when it is handed in again).

### Requirements

**Add Requirement** adds a [requirement](/basic/shared-systems/requirements) the player must meet to **accept** the quest: a level, a class, a quest done, an item. All of them must be met. A conversation that offers the quest shows it only to players who meet them.

### Hand-in

| Field | What it does | Default |
|---|---|---|
| **Requires hand in** | The quest does not complete when its last objective does. It waits at "ready to hand in" until the player gives it to an NPC | off |
| **Turn-in text** | What the NPC says when the player hands it in | empty |

Add the quest to the **hand-in list** of the NPC's [conversation](/basic/behaviors/conversations). The quest editor lists the conversations that take the quest in, under the text, and shows an orange warning while none does (the quest would wait for ever).

### Repeating

| Field | What it does | Default |
|---|---|---|
| **Is repeatable** | The quest can be done again after it is completed | off |
| **Repeat limit** | The most times it can be completed. `0` = no limit | `0` |
| **Cooldown** | **None**, **Duration (hours)** or **Reset at time** | None |
| **Cooldown duration** | For *Duration*: game hours to wait. A day is 24 | `24` |
| **Reset hour** | For *Reset at time*: the hour (0 to 23) at which the quest is available again. The next time the clock reads that hour | `6` |

The [cooldown](/basic/keywords#cooldown) counts on the **running game clock**, so it does not matter that the time of day wraps every 24 hours: a cooldown of 30 hours takes 30 hours, also across days and also when the time is skipped with an action.

### Actions

Three lists of [event actions](/basic/events-and-quests/event-actions) change the world around the quest:

| List | When it runs |
|---|---|
| **On Start Actions** | The quest is accepted: spawn the thing to find, open a door, give a quest item |
| **On Complete Actions** | The quest is completed: the village is saved, the bridge is rebuilt |
| **On Abandon Actions** | The player gives it up: take back what the quest gave, remove the escort |

Right-click the heading to add, and an action to edit, duplicate or delete it.

## The life of a quest

```text
Inactive ──accept──► Active ──last objective──► Completed
                      │  ▲                          │ repeatable?
                      │  └────── give up ──┐        └──► Cooldown ──► Inactive
                      ├─ with hand-in:  Ready to hand in ──hand in──► Completed
                      └─ a required objective fails ──► Failed
```

A quest can be accepted only when it is **waiting**: not running, not on a cooldown, not already completed (unless it is repeatable and has repeats left), and not failed for good.

### Failing

A quest **fails** when a required objective fails, or when an event runs a *Fail Quest* action (the deadline passed, the person to protect died). What failing means is **When it fails**:

| Choice | What happens |
|---|---|
| **Final** | The quest is over. It is not offered again |
| **Can be retried** | It can be taken again. It starts from the beginning |
| **Game over** | The game ends |
| **Use the gameplay setting** | The project's *Default quest failure* ([Gameplay Config](/basic/game-settings/gameplay-config): final or retry; the default is retry) |

### Giving up

Giving up is **not** a failure. The quest goes back to the start (no progress, and it does not count as a completion), its *On Abandon Actions* run, and it can be taken again. Nothing that waits for the quest to *fail* is set off. Use the *Abandon Quest* action to let the player give one up (the quest log button belongs to your interface). **Can be given up** chooses between yes, no, and the project's *Allow quest abandon*.

## Quest levels

The **Quest level** is only information. The interface can colour the quest by how hard it is for the player: *trivial*, *easy*, *normal*, *hard* or *deadly*, using the gaps set in the Gameplay Config: a quest 5 or more levels under the player is trivial, 2 or more is easy, 3 or more levels over the player is hard, 6 or more is deadly. **Show quest levels** turns the text off.

## Words in the texts

The texts of a quest (name, description, objective descriptions, hand-in text) and of a conversation (chats and responses) can contain words in angle brackets that are filled in when the text is shown: `Well met, <player name>! Bring me <target> wolf pelts.`

Capitals, spaces and underscores do not matter (`<Player Name>` = `<player_name>`). Something in brackets that is **not** a word is left as it is. A word with nothing to say where it is shown gets a plain fallback ("Adventurer") instead of a gap.

| Word | What it says | Where |
|---|---|---|
| `<player name>`, `<player class>`, `<player level>` | The player character who is reading | Everywhere |
| `<party size>`, `<world name>` | How many in the party; the world they are in | Everywhere |
| `<npc name>` | The NPC the player talks to | Conversations |
| `<quest name>`, `<quest level>` | The quest | Quest texts |
| `<progress>`, `<target>` | How far the objective is and where it ends | Objective texts |

The editor shows the list when you hover over those fields, and warns about a typo like `<player nane>`. A game can add its own words in code.

## The quest settings

In the [Gameplay Config](/basic/game-settings/gameplay-config): the **maximum active quests** (a quest offered over the limit is refused with a message; the steps of a quest line start anyway), **auto track quest objectives**, **quest markers** (the icons over quest givers and quest enemies), the default **failure** and **abandon** rules, and the **quest level** settings.

## See also

- [Events](/basic/events-and-quests/events), [Quest Lines](/basic/events-and-quests/quest-lines), [Conversations](/basic/behaviors/conversations).
- [How quests are built](/advanced/events-and-quests/).
