# Chat box, messages and the combat log

::: warning Not built yet
This page describes a planned feature. Today the [HUD](/basic/user-interface/hud) has a **combat log** and the interface has short **messages**; neither keeps what the player did. The design below is settled in its main lines; the details marked *open* are still to decide.
:::

Everything the game wants to **tell the player** goes through one place, the **message manager**. What the player sees (a chat box with tabs, a level up toast, a warning label, a loot feed) is a **viewer** that listens to the **channels** it is given. The combat log is not a separate system: it is a tab of the chat box.

## What exists today

- The **combat log** ([`CombatLog`](/advanced/user-interface/hud/combat-log)) shows the lines of the combat: three text areas (everything, damage taken, damage done), fed in batches by the [combat manager](/advanced/entity-stats/combat/combat-manager). It sorts a line into *taken* or *done* by looking for the word "dealt" and the player's name in the text.
- **Messages** (`ui_manager.message()`, `warning_message()`, `yellow_message()`) show a line at the top of the screen that fades. They keep nothing.
- Nothing records a level up, a skill up, loot, experience or a quest update.

## The message manager

One manager takes every message of the game. A system **posts** a message to a **channel** and does not know who shows it.

| Part | What it is |
|---|---|
| **Channel** | One **kind** of message (channels are flat). Examples: Damage, Healing, Level up, Loot, Money, Experience, Quest, Reputation, Skill up, Say, Emote, System, Warning, Highlight. A channel has a name, a colour, a message template and two flags: *also show as a fading message* and *keep in the save* |
| **Message** | A line of text made for a channel, with the data it was made from (the item, the amount, the entity) |
| **Viewer** | A UI node with a list of channels. The chat box, a toast, the warning label and the loot feed are all viewers |

The **channel list** is one list for the whole game (a level up toast and the chat box both have to name the Level up channel). **Which channels a viewer shows is an export on the viewer's scene**, together with its other options.

### Viewers

- **One base class** holds the channels, the line limit and one method that is called with each new message. A viewer of your own extends it, ticks its channels in the inspector and overrides that method.
- The **warning label** and the other message labels become viewers of the System, Warning and Highlight channels. The calls that exist today (`ui_manager.message()`, `warning_message()`, `yellow_message()`, `InstanceUtility.warn_player()`) keep working: they post to those channels.
- A **level up toast** is a scene set to the Level up channel. The message carries the new level, so the toast shows it and plays its animation. A **loot feed** does the same with the Loot channel.
- The **chat box** is a viewer with **tabs**. A tab is a list of channels (and, for combat, a filter). The tabs and the **line limit** (`0` = no limit) are exports of the chat box scene. A player making their own tabs is a feature a game builds in its own interface.
- The chat box is a **HUD element**, not a [window](/basic/user-interface/ui-panels): it is not opened or closed and takes no part in screen space.

### Messages for the events of the game

A **listener** for each system turns the signals that exist already into messages, so a system does not have to know about the chat. The text comes from the **template** of the channel, with [text tokens](/basic/shared-systems/text-tokens) for the details:

| Event | Example |
|---|---|
| Experience | `You gain 120 experience.` |
| Level up | `Mira reaches level 5.` |
| Skill up | `Your Herbalism increases to 31.` |
| Loot | `You receive [Iron Sword] x1.` |
| Money | `You receive 3 gold 20 silver.` |
| Quest | `Quest accepted: Wolves at the Gate.` |
| Reputation | `Your standing with the Rangers increases.` |

- A message is written **as it is shown**. The text is made when the message arrives, in the language of the player at that moment. Lines that are in the box stay in the language they were written in; new lines use the new language.
- A channel can be marked **also show as a fading message** (a level up probably should). The fading messages that exist today are the same system, so the two are one.
- A channel can be marked **keep in the save**, so the lines come back after a load.

## Combat

### Channels by who

The combat channels are about **who** the line is about:

| Channel | The line is about |
|---|---|
| **Personal** | The character the player controls: what it does and what happens to it |
| **Party** | A member of the party or a pet: what it does and what happens to it. A **personal line is also a party line**, so a Party tab shows everything and a Personal tab shows only the player |
| **Hostile** | An enemy that is in the same fight as a party member: what it does and what happens to it |

A viewer that shows both Personal and Party shows a line once. A line that has no one of the party in it, and no enemy in a fight with the party (two NPCs fighting across the map), is **not logged**.

### What happened: a filter

Every combat message also has a **kind**, and a viewer can filter by it:

| Kind | Examples |
|---|---|
| **Damage** | Done and taken, with the damage type, crits and the blocked or absorbed part |
| **Healing** | Done and received |
| **Buffs and debuffs** | An effect gained, refreshed or lost |
| **Deaths** | Kills and resurrections |
| **Casts** | An ability used, interrupted |
| **Avoids** | Miss, dodge, immune |

A tab is channels plus kinds: a *Personal* tab (Personal, all kinds), a *Healing* tab (Party, Healing), an *Enemy* tab (Hostile, Casts and Damage). The lines say *You* when the player is the actor (*You hit the Wolf for 12*, not *Mira hits the Wolf for 12*): each kind has two templates, which also reads and translates better.

### Combat events and the recorder

Combat is not written as text. It produces **combat events**:

- A **combat event** is one record of something that happened: the kind, the actor, the target, the ability, the amount, the damage type, a crit flag. It holds **ids** (the unique id of the entity, the id of the ability or the item), never references to objects, converts to and from a dictionary, and has a **sequence number** and the game time.
- A **recorder** in the combat manager builds every event once. It listens to the results the combat manager already announces (damage and healing) and to the signals of the entities (deaths, casts, interruptions, effects gained and lost). It decides the **scope** of each event (Personal, Party, Hostile) and sends the event to two places: the **combat session** (if the event happened inside one) and the **message manager**.
- The **combat session** keeps a **bounded log** of its events (oldest dropped past a size). The log is useful on its own: a **summary line** when a fight ends, the damage meter in the future, a **report** of a fight. Chat does not read it: a party member can be hurt outside any session (a trap, a fall, a burning effect that outlasts the fight), and the chat must show that too.
- The **gate** is the combat session, which knows who is in the fight: what a party member does or suffers is always logged; an enemy is logged only while it is in a session with a party member.
- Nothing is built when nobody wants it: if no viewer shows a channel and the session does not need the event, the recorder does not format it.

### How detailed the log is

The detail is chosen by the developer in the Gameplay Config. Each kind of event has a minimum level:

| Level | Adds |
|---|---|
| **Off** | Nothing is recorded |
| **Critical** | Deaths, kills, big hits |
| **Normal** | Damage, healing, casts, effects gained and lost (the default) |
| **Detailed** | Every effect tick, resource changes, cooldowns, target changes |
| **Debug** | Movement (sampled, not every frame) and the decisions of the AI. For developers, to design and debug a fight |

Below a level the recorder does not even connect to the signals of that level.

### What is kept

A second setting says what happens to the log of a fight:

| Choice | What happens |
|---|---|
| **Discard** | The log is thrown away when the combat ends; a summary line stays in the chat |
| **Keep the last N fights** | A player can look back at the last fights (a *combat report* window comes later) |
| **Keep the play session** | Every fight, until the game is closed |

A per-fight size cap stops a long fight from growing without end. A developer can **export a fight to a file** (JSON or CSV), and a timeline view for tuning boss fights is a later tool.

## Lines: say and emote

A **line** is something an entity says, or something that is described. *Say* and *emote* are one thing with a **kind** switch, not two systems:

| | Say | Emote |
|---|---|---|
| **Text** | `Guard: Halt!` | `The guard yawns.`, or with no speaker `The ground rumbles.` |
| **Speaker** | An entity | An entity, or nobody |
| **Animation** | Optional | Optional, usually the point |
| **Sound** | Plays on the Voice channel, with a subtitle | A 3D sound effect at the speaker or at a point (a growl, a click) |
| **Chat channel** | Say | Emote |
| **Over the head** | A speech bubble | The same bubble in another style, or none |

The **Speak interaction** (text, voice line, animation, floating label) is the first front door and gets a **Kind** switch. The floating text above the entity becomes a **viewer** of the Say and Emote channels, as the chat box is, so the label code leaves the interaction.

### Where lines come from

- **Interactions** of NPCs and of [interactables](/basic/entities/interactables): a switch can emote *The lever clicks into place.* with no speaker and no animation.
- **NPC actions:** a behavior task (like Idle, Wander, Patrol) or a combat action (like Delay) says or emotes a line: the guard yawns while he idles, the boss roars at half health.
- **An event action:** a line with a speaker (an NPC by unique id) or none, and an audience.
- **The player's typed emotes** (`/wave`), below.

### Who receives a line

| Audience | Who gets it |
|---|---|
| **Everyone** | Every player (global) |
| **Near the speaker or a point** | Players within a radius. The default is the **hearing distance** of the Gameplay Config |
| **Players in a region** | Only a player who is in that [region](/basic/world/regions) |
| **The player who triggered it** | The one who used the switch or talked to the NPC |

The default depends on the source: the line of an NPC goes to the players within hearing distance (a distant NPC does not fill the chat), the line of a switch goes to the one who used it, the line of an event goes to everyone unless it names an area.

The text of a line is translatable like the text of a quest or a conversation, and it is written when it arrives, with the display names of the entities in the language of the player.

## Emotes

An **emote** is a definition in the project (a database type) for the commands a player types, and a library that the lines of NPCs, events and interactions can pick from. A line can also be written by hand ("custom") when it is a one-off.

| Field | What it does |
|---|---|
| **Command** | `wave` for `/wave`. A list of **aliases** lets a translated game add its own word |
| **Animation**, **sound** | Both optional |
| **Target mode** | **None**: the emote never uses a target. **Optional**: the target texts are used when the player has a target, else the others. **Required**: with no target the player gets *You need a target* |
| **Range** | How far the target can be |
| **Audience** | How far the line is heard (the hearing distance by default) |
| **Texts** | One text for each way the line is read (below) |

| Who reads it | No target | With a target |
|---|---|---|
| **Everyone else** | `<user> waves.` | `<user> waves to <target name>.` |
| **The one who does it** | `You wave.` | `You wave to <target name>.` |
| **The target** | (none) | `<user> waves to you.` (empty = the text of everyone else) |

- The first-person texts are separate because one template cannot turn *waves* into *wave* in every language. When one is empty, the third-person text is used.
- `<user>` (who does it) and `<target name>` (the other) are new [text tokens](/basic/shared-systems/text-tokens), listed in the tooltips of the editor like the others. They are the display names of the entities, in the language of the player. (`<target>` is taken: it is the number of an objective.)
- An NPC, event or interaction line that **picks an emote** from the library takes its animation, sound and texts from it (each can be overridden), so `/wave` and *the guard waves at you* share one definition and one translation.
- The toolkit ships a small **starter set** (wave, bow, laugh, cheer, shrug) with text only, because the animations belong to your characters.
- **Where they are edited:** an emote is a database type, because the pickers of NPCs, events and interactions, and the keys of the translation tables, work with ids. It has a small editor tab (a list and a form), like the other definitions. The **channel list** is a page of the Game Settings (**Chat**), where the toolkit's channels can be changed and new ones added. A folder of loose resource files with no editor was considered and left out: it has no unique ids, no picker and no translation keys.

## Typing and commands (second step)

- **Enter** opens a line to type in. A line that starts with **/** is a **command**.
- A plain line is **said** by the current character: it shows in the Say channel and above their head, and an [event](/basic/events-and-quests/events) trigger can react to it (an NPC that answers a word). A single-player game uses this for emotes and for the developer's own commands; it is not a network chat.
- **Emote commands** are the emotes of the library: `/wave`, `/wave` with a target selected.
- **Developer commands** (cheats) are commands that exist only when a switch in the **Gameplay Config** is on: give an item, set the level, add game time and so on. Commands are registered one by one, so a game adds its own.

## Multiplayer

The combat event and the single entrance of the message manager (`ingest(event)`) are built so that a future networked game does not have to change the viewers: today the local recorder calls `ingest`, and a client would call it when the server sends an event. Each client writes the lines in its own language. Multiplayer itself is **not planned**; see the roadmap for what stands in the way.

## Still undecided

- The exact list of **channels** the toolkit ships with, and which ones are also fading messages and kept in the save by default.
- Whether damage over time is **combined** into one line per second.

## Order of work

1. The message manager, the channels, the viewer base class, the listeners for the events of the game, the chat box with tabs, the combat events and the recorder, the detail and keep settings. **Lines** (say and emote from interactions, NPC actions and events, with their audiences, the speech bubble viewer) and the emote library come in this step too: a line only posts a message.
2. Typing, commands, the player's emote commands, the developer commands.
3. Links to items and abilities in a message (hover for the tooltip), the combat report window, the file export.

## See also

- [HUD](/basic/user-interface/hud)
- [Messages and popups](/basic/user-interface/messages-and-popups)
- [Text tokens](/basic/shared-systems/text-tokens)
