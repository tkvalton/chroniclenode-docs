# Chat

Everything the game tells the player goes through one place, the **message manager**. A system **posts** a message to a **channel**; a **viewer** (the chat box, a level up toast, the warning label) shows the channels it is given. The channels, their colours and their texts are set on the **Chat** page of the Game Settings.

::: tip What is built
The message manager, the channels, the Chat page, the viewers, the chat box with its tabs, the messages for the events of the game, the combat channels, **lines** (say and emote from interactions, NPC tasks, combat actions and events), the **emote library**, the **speech bubbles**, **typing and commands**, the **developer commands** and the **languages** are built. The channels that carry messages between players are [planned](/planned/chat-box).
:::

## Channels

A **channel** is one kind of message. The toolkit has these:

| Group | Channels |
|---|---|
| **Combat** | **Combat (Personal)**, **Combat (Party)**, **Combat (Friendly)**, **Combat (Hostile)** (see [Combat](#combat)) |
| **Progress** | **Experience**, **Level up**, **Skill up**, **Abilities** (learned), **Reputation** |
| **Items and currency** | **Loot**, **Currency**, **Trade**, **Crafting**, **Equipment** (a piece breaks) |
| **World and story** | **Quest**, **Discovery**, **Party events**, **Dialogue** |
| **Talk** | **Say**, **Yell**, **Emote** |
| **System** | **System**, **Highlight**, **Warning**, **Hint**, **Debug** |

Most of these are posted by the toolkit already: experience, level up, skill up (proficiencies), abilities learned, reputation, loot, currency, trade (buying and selling at a vendor), crafting (a finished craft), equipment (a piece breaks), quest, discovery (walking into a named area), party events, say, yell and emote, and the System, Highlight and Warning channels (the older messages). Dialogue, Hint and Debug are for your own systems (Debug carries the answers of the developer commands). Any code can write on any channel: [`InstanceUtility.tell_player("crafting", "You craft [Iron Bar].")`](/advanced/managers/utilities/instance-utility).

### The Chat page

**Game Settings > Chat** lists the channels by group. Pick one to set:

| Field | What it does |
|---|---|
| **Id** | The key that viewers and code name the channel by (lower case letters, numbers and `_`). It cannot be changed for a channel of the toolkit |
| **Name** | The name the player reads. It is translated like the other names |
| **Colour** | The colour of the lines of the channel in the chat box, the toasts and the labels |
| **Group** | The heading the channel is listed under in this page |
| **Text of a line** | What a line says, with `{holes}` that the system fills in (`You gain {amount} experience.`). Empty = the system writes the line itself |
| **Also show as a fading message** | A line also appears as a short message at the top of the screen |
| **Range** | How far a line of this channel is heard, in metres, from the one who says it (Say 10, Yell 30, Emote 10). `0` = no limit |
| **Keep the lines in the save** | The lines come back after a load |

**Add channel** makes a channel of your own; **Remove** takes one of yours away (the toolkit's channels cannot be removed); **Reset** gives a channel of the toolkit its own values back. **Lines remembered per channel** (200) is how much the manager remembers while the game runs, so a viewer that appears late can show it.

Everything is saved as it changes in `res://src/data/config_data/chat_config.tres`. A project without the file has the channels of the toolkit.

## Viewers

A **viewer** is a node that shows messages. You give it **channels** in the inspector and it shows the messages posted to them. The toolkit's viewers:

| Viewer | What it shows |
|---|---|
| **Chat box** ([`ChatBox`](/advanced/user-interface/hud/chat-box)) | A HUD element with tabs. It replaces the old combat log in the template |
| **Fading messages** ([`MessagesManager`](/advanced/user-interface/in-game/messages-manager)) | The short messages at the top of the screen: every channel marked *Also show as a fading message*, in the colour of its channel |

`ui_manager.message()`, `warning_message()` and `yellow_message()` keep working: they post to the System, Warning and Highlight channels.

### Making your own viewer

Extend [`ChatViewer`](/advanced/user-interface/hud/chat-viewer), place it in your HUD, tick its channels, and override `_on_message(message)`:

```gdscript
class_name LevelUpToast extends ChatViewer

func _on_message(message: ChatMessage) -> void:
    $Label.text = message.text            # "Mira reaches level 5."
    $AnimationPlayer.play("pop")          # message.data["level"] is the new level

func _on_history_message(_message: ChatMessage) -> void:
    pass                                  # an old level up is not news
```

A message holds its `channel_id`, its `text` (finished, in the language of the moment), `data` (ids and numbers: the item, the amount, the level) and `game_hours`. A viewer started late is given the lines the manager remembers (`show_history_on_start`).

Any code can post: `system_hub.chat_manager.post("quest", "The bridge is out.", {"quest": 12})`, or `post_template("loot", {"item": name, "amount": 3}, fallback_text)` to use the text of the channel.

## The chat box

The chat box has **tabs**. A tab ([`ChatTab`](/advanced/user-interface/hud/chat-tab)) is a list of channels, and for the combat channels the kinds of event it shows. The tabs are exports of the chat box scene (`ui_scenes/in_game/HUD/chat_box/chat_box.tscn`):

| Export | What it does | Default |
|---|---|---|
| **Tabs** | The tabs of the box. The scene has **General**, **Combat** and **Loot** | |
| **Line limit** | The lines each tab keeps (the oldest go first). `0` = no limit | `200` |
| **Show time** | The game time in front of each line | off |
| **Font size** | The size of the text | `12` |
| **Link tooltip** | What the names of items and abilities in a line do: **Hover** shows the tooltip while the mouse is over the name, **Click** shows it when the name is clicked (it goes when the mouse leaves the chat or a click lands elsewhere), **None** leaves the names as plain text | Hover |

A tab has a **name**, its **channels** (a list to pick from) and **kinds** (tick the kinds of combat event it shows; none ticked = all). A line that belongs to two channels of a tab is written once. Lines stay in the language they were written in; new lines use the new language.

## Combat

Combat is not written as text. It produces **combat events**: one record for each hit, heal, buff or debuff gained or lost, death, cast, interruption and avoided hit. The events are plain data (ids, numbers and the names as they were) with a sequence number and the game time, so they convert to a dictionary and back.

The combat channels are about **who** the line is about:

| Channel | The line is about |
|---|---|
| **Combat (Personal)** | The character the player controls: what it does and what happens to it. Written in the second person (*Your [Slash] hit Wolf for 12*, *Wolf's [Bite] hit you for 7*) |
| **Combat (Party)** | A member of the party or a pet. A personal line is also a party line |
| **Combat (Friendly)** | The party's side of the fight: the party and the allies that fight beside it (a companion, a guard). A party line is also a friendly line |
| **Combat (Hostile)** | An enemy that is in the same fight as a party member |

In a fight every entity is friendly or hostile to the party. An entity that is in no fight with the party and is not in the party is **not logged**: two NPCs fighting far away do not fill your chat. A line shows once in a viewer that shows several of its channels.

A tab can filter the **kinds** of event: Damage, Healing, Effect gained, Effect lost, Death, Cast, Interrupt, Avoid, and the Detailed and Debug kinds below. A *Personal* tab (all kinds), a *Healing* tab (the party channel, Healing) and an *Enemy* tab (Hostile, Damage and Cast) are all the same box with different tabs.

When a fight ends, a summary line is written (*Combat ended (0:45): the party dealt 340 damage, took 120 and healed 60.*).

### What is recorded at each level

The detail is the **Combat log detail** of the [Gameplay Config](/basic/game-settings/gameplay-combat#combat-log). Each level adds to the one before:

| Level | Kinds of event |
|---|---|
| **Critical** | Deaths, kills and critical hits |
| **Normal** (default) | Damage, healing, avoids, casts, interruptions, effects gained and lost |
| **Detailed** | **Resource** (a pool spent, a pool that runs dry or fills up, a pool that grows), **Cooldown** (an ability goes on cooldown and comes back, its charges), **Ability denied** (why an ability could not be used: on cooldown, not enough resource, out of range ...), **Target change**, **Effect updated** (a buff or debuff refreshed or restacked) |
| **Debug** | Regeneration and the changes of health, written together once a second per pool, the global cooldown, **Movement** of the entities of a fight (sampled once a second, 1 m or more), **AI decision** (the behavior task or the combat action an NPC started), and the denied abilities of NPCs (at Detailed only the party's are written, because an NPC tries all the time) |

The lines are in the second person for the character the player controls (*You spend 20 Mana*, *Your Fireball is on cooldown for 8s*).

### The record of a fight

Each combat session keeps the **events of its fight** in a bounded list. Three settings in the [Gameplay Config](/basic/game-settings/gameplay-combat#combat-log) say how much is recorded and what is kept.

### The combat report

The window **Combat report** (a UI panel in the template, panel name `combat_report`) lists the fights the game kept: pick one for its totals and its events, filter them by kind, and **export** the fight to a file. `/report` opens it. It shows nothing when **Combat log keep** is *Discard*.

The files are written in `user://combat_logs/` (the user folder of the game): **JSON** (the whole record of the fight) or **CSV** (a header and a row for each event: sequence, game hours, kind, actor, target, ability, amount, damage type, crit, slain, channels, line), for a spreadsheet. The developer command `/exportlog [json|csv]` writes the last kept fight.

## Lines

A **line** is something an entity says, or something that is described. *Say*, *yell* and *emote* are one thing with a **kind**; the kind decides the channel the line is written in (Say, Yell or Emote). A line has:

| Field | What it does | Default |
|---|---|---|
| **Kind** | Say, yell or emote | Say |
| **Text** | What is said or described. The words in angle brackets are filled in: `<user>` (who says it), `<target name>`, `<player name>` | |
| **Emote** | An emote of the [library](#emotes) instead of a text of its own. A text written on the line wins over the one of the emote | none |
| **Animation**, **Sound** | The animation the speaker plays, and a sound (a voice line plays on the Voice channel with its subtitle) | none |
| **Audience** | Who reads it (below) | Near |
| **Range** | For *Near*: how far, in metres. `0` = the range of the channel (or of the emote) | `0` |
| **Region** | For *Region*: the region the players have to be in | none |
| **Bubble seconds** | How long a [speech bubble](#speech-bubbles) stays over the speaker. `0` = none | `5` |

| Audience | Who gets the line |
|---|---|
| **Near** | The players within the range of the channel of the line, from the speaker (or from the point when nobody speaks) |
| **Everyone** | Every player |
| **Region** | Only the players who are in that [region](/basic/world/regions) |
| **The player who triggered it** | The one who used the switch or talked to the NPC |

The speaker plays the animation and the sound whoever hears the line. A line with no speaker ("The ground rumbles.") is heard from the point it starts at. The texts of lines inside events, behavior scripts and combat scripts are translated like the other names: they are collected by the [Localization](/basic/game-settings/localization) tab under the keys `event/<id>/line/<n>`, `behavior_script/<id>/line/<n>` and `combat_script/<id>/line/<n>`, numbered in the order they come in the data (adding a line in the middle moves the numbers of the ones after it, so a translation is marked *needs review*).

### Where lines come from

| Where | How |
|---|---|
| **A [Speak interaction](/basic/entities/interaction-types#speak)** of an NPC or an object | Its text is also written in the chat. **Kind** (say, yell or emote), **Emote**, **Audience**, **Range** and **Region** are in its *Chat* group; the default audience is the player who talked to it |
| **An NPC behavior task**, *Say or Emote* | The NPC says the line while it idles or walks its route: the guard yawns, the merchant calls out his wares. *Wait seconds* keeps the task going while the animation plays |
| **A combat action**, *Say or Emote* | The NPC says the line in a fight. Put conditions on it (health below 50%) and a cooldown |
| **An event action**, *Say or Emote* | An NPC (by its unique id) says it, or nobody does and it describes something. A target (for an emote), an origin for the range, and the line |

## Emotes

An **emote** is a definition in the project: the commands a player types (`/wave`) and a library that the lines of NPCs, events and objects can pick from. **Behaviors > Emotes** is the editor.

| Field | What it does |
|---|---|
| **Command** | `wave` for `/wave`. **Aliases** are other words for it (a translated game adds its own: `saluer`) |
| **Animation**, **Sound** | Both optional |
| **Target** | **None**: never uses a target. **Optional**: the target texts are used when there is a target. **Required**: with no target the player gets *You need a target* |
| **Target range** | How far the target can be, in metres |
| **Heard within** | How far the line is heard. `0` = the range of the Emote channel |
| **Texts** | One for each way the line is read (below) |

| Who reads it | No target | With a target |
|---|---|---|
| **Everyone else** | `<user> waves.` | `<user> waves to <target name>.` |
| **The one who does it** | `You wave.` | `You wave to <target name>.` |
| **The target** | (none) | `<user> waves to you.` |

The first-person texts are separate because one template cannot turn *waves* into *wave* in every language. An empty text falls back to the third-person one (the target text to the text of everyone else). `<user>` and `<target name>` are the display names of the entities in the language of the player. (`<target>` is taken: it is the number of an objective.)

A line that picks an emote takes its texts, animation and sound from it; the same emote serves `/wave` and *the guard waves at you*. The texts of an emote are translated like the other names. Typing the command is described under [Typing and commands](#typing-and-commands).

## Speech bubbles

[`SpeechBubbles`](/advanced/user-interface/hud/speech-bubbles) is a viewer of the Say, Yell and Emote channels. A line that has a speaker and a bubble time gets a text over the speaker's head for that many seconds. It is in the HUD of the template; its height, text size and outline size are exports.

## Links to items and abilities

A message can hold **links**: the data of a message has a list `links` of `{ "kind": "item" or "ability", "id": ..., "text": the name in the line }`. The chat box makes the name a link, and the **tooltip** of the item or the ability shows (the same tooltip as in the bag) when the mouse is over it, or when it is clicked, as the **Link tooltip** export of the chat box says (and with *None* there are no links). The toolkit adds links to the lines of loot, trade and learned abilities; a message of your own adds them in its data.

## Typing and commands

The chat box has a line to type in (hidden until it is used). **Enter** opens it, **/** opens it with a slash, **Enter** sends it and **Esc** closes it. While the player types, the keys are letters: the character does not move and no ability is used. The exports of the chat box: **Allow typing**, **Focus key**, **Max length**.

| What is typed | What happens |
|---|---|
| A plain line | The character **says** it: it shows in the Say channel and over the head of the character |
| `/say` (`/s`), `/yell` (`/y`) | Say or shout a text (the Yell channel is heard farther) |
| `/me <text>` (`/emote`, `/e`) | Describes what the character does: `/me scratches his chin` shows *Mira scratches his chin* |
| `/wave`, `/bow` ... | An [emote](#emotes) of the library, by its command or an alias. With a target it uses the target texts (see *Target* of the emote) |
| `/language [name]` | Without a name: the language the character speaks and the ones it knows. With a name: speak that [language](#languages) |
| `/report` | Opens the [combat report](#the-combat-report) |
| `/help` | Lists the commands and the emotes |
| Anything else | The player is told there is no such command |

A game adds its own commands in code: `system_hub.chat_manager.commands.register("ping", callable, "/ping: help text")`. The callable gets the words after the command and the same as one text.

### Developer commands

Commands for testing: they work on the character the player controls and answer in the **Debug** channel. They work only when **Developer commands** is on in the [Gameplay Config](/basic/game-settings/gameplay-config#developer); turn it off for a release (the default is off).

| Command | What it does |
|---|---|
| `/give <item id or name> [amount]` | Adds items to the bag |
| `/xp <amount>` | Gives experience |
| `/level <level>` | Sets the level |
| `/money <currency id or name> <amount>` | Adds money (a negative amount takes it) |
| `/addtime <hours>` | Moves the game clock forward: both [clocks](/basic/shared-systems/clocks), so cooldowns and restocks count it |
| `/settime <HH:MM>` | Sets the time of the day (it only moves forward) |
| `/quest start <id>`, `/quest complete <id>` | Starts or completes a quest. The quest rules do not stop it (like the *Activate Quest* action) |
| `/heal` | Fills the health and resource pools of the character |
| `/kill` | Kills the target of the character |
| `/exportlog [json\|csv]` | Writes the last kept fight to a file in the user folder |

## Languages

Entities can speak **languages** of the game world (Common, Orcish, Elvish; they are not the languages of the [translation of the game](/basic/game-settings/localization)). A listener who does not fully understand a language reads a line **garbled**, as in an MMO.

- **A language is a [proficiency](/basic/entity-stats/proficiencies#language).** It has levels, so the understanding of a language **grows**. Tick *This proficiency is a language* on the proficiency and give it **syllables** (the garbled words are made of them; there is a default list).
- **How much is understood:** the share of the words a listener reads is the level divided by the highest level. At level 0 the whole line is garbled, at the top level none of it. Each word is garbled or not by the same rule every time, so the same line always reads the same to the same listener, and a higher level never loses a word it had.
- **Who speaks what:** an NPC or a character has **Speaks** in its editor (the language of its lines). A line can name another language of its own (*Language* of the line); 0 = the language the speaker speaks. The player chooses what to speak with `/language`; the choice is saved.
- **Who understands:** the level of the proficiency of the character the player controls. A character starts with the *starting level* of the proficiency and gains experience in it by **hearing** the language: each garbled line gives a little, as for any proficiency. Teachers, items and effects can raise it like any other proficiency.
- **Where it shows:** in the chat, the speech bubble and the line of a speak interaction. The message data holds the `language` and the share `understood`. An **emote** has no language.
- A voice line still plays; whether it plays for a listener who understands little of the language is not decided yet.

## Not built yet

See the [plan](/planned/chat-box): the channels that carry messages between players (guild, raid, world, whisper, channels players make) and moderation.
