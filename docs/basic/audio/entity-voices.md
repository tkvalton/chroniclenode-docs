# Entity Voices

A **voice** is the set of sounds a creature makes by itself: the grunt when it is hit, the cry when it dies, the sound of a dodge, the call that starts a fight. Every NPC, character and player class chooses a voice, and the game plays its **calls** at the moments they happen. **Audio > Entity Voices** lines the voices of your audio library up with the calls the game makes, as the Animations tab lines up the animations of a creature: it shows which calls each voice has files for, what a missing call does, and lets you import files, listen to them and check every voice.

Abilities bring their own sounds (the [Voice sound effect](/basic/abilities-and-effects/using-an-ability) of an ability), conversations their own [voice lines](/basic/game-settings/localization#voice-lines-in-other-languages). This page is about the calls an entity makes without being told.

## How a voice is stored

A voice is a folder of the [audio library](/basic/audio/sound-library):

```text
src/data/audio/entity_voices/
  humanoid/                  the kind of creature (the entity type of an NPC)
    Mage_Pack/               a voice of that kind (an NPC or a character chooses it)
      hit/                   a call: its files, one is picked at random each time
        hit1.wav
        hit2.wav
      death/
      dodge/
```

- The **kind of creature** is a set of voices that suit it: *humanoid*, *wolf*, *orc*.
- A **voice** is one of them: *Male_01*, *Orc_Grunt*. The NPC or character editor's **Voice audio** setting picks the kind and the voice.
- A **call** is a folder named for what happens. Put several files in it for variety.

## The calls

There are two kinds: the calls the **game** makes, and the calls of your **triggers**.

### The calls of the game

| Call | When it plays | A voice without it |
|---|---|---|
| **Hit** (`hit`) | The entity is hit and takes damage. At most one a second | silent. Required |
| **Hit, heavy** (`hit_heavy`) | A hit takes a quarter or more of the entity's health at once | uses Hit |
| **Death** (`death`) | The entity dies | uses Pain, then Hit. Required |
| **Aggro** (`aggro`) | A creature starts a fight. Players do not say it. At most one every eight seconds | silent |
| **Jump** (`jump_start`), **Landing** (`jump_end`) | The entity leaves the ground, lands | silent |
| **Pain** (`pain`) | Not played by itself: it is what Death falls back to. Use it for a groan of your own | |

### The calls of your triggers

A [trigger tag](/basic/entity-stats/trigger-tags#entity-reactions) with **Has a voice call** adds a call to **every voice**, named by its **slot** (the tag in snake_case, or the *Slot name* you gave it). They are listed in the *Triggers* group. The template's triggers have it:

| Call | When it plays | A voice without it |
|---|---|---|
| **Dodge** (`dodge`) | An avoid trigger called *dodge* saves the entity from a hit | silent |
| **Parry** (`parry`) | The same for *parry* | uses Dodge (the trigger's *If a creature has none, use*) |
| **Block** (`block`) | A block reduces a hit | silent |
| **Critical strike** (`crit`) | The entity lands a critical strike (the template's slot is called `crit`) | silent |

Make a trigger (an *Evade*, a *Reflect*) and tick **Has a voice call**: every voice gets an `evade` call to fill, the editor lists it, and nothing else changes. A trigger that fired on the **target** (a dodge, a block) is said by the target, one the **attacker** rolled (a critical strike) by the attacker. A trigger's call plays at most once every half second.

- A **required** call is one every voice should have: the editor warns when a voice has neither it nor a call that stands in for it. Trigger calls are never required.
- Older folder names still work: `hit_short` is Hit and `hit_long` is Hit, heavy. The editor suggests renaming them.
- The calls play a little quietly (a few dB under the file) so a crowd is not deafening: make the files the loudness you want.

## Your own calls

An ability can ask the voice for **any name**: its **Voice sound effect** holds an *action*, `shout` say, and the creature that uses the ability plays `shout` from its own voice, so a goblin and a dragon with the same ability each shout their own way. The selection window offers the calls above and common names (`attack`, `shout`, `roar`, `taunt`, `laugh` ...); a name the voice you are browsing has no files for is shown in grey. If the creature's voice has no folder with the name, nothing plays and the output says so: check the tab.

Folders of a voice that are not calls of the game appear in **Your own calls**.

## The tab

| Part | What it does |
|---|---|
| **Search**, **Refresh** | Filter the kinds of creature; read the folders again |
| **Tools menu** | **Create a kind of creature...**, **Create a voice...**, **Check all the voices** (lists the voices that lack a required call) |
| The list on the left | The kinds of creature with the number of voices; a mark when a voice lacks a required call |
| **Voice** | The voices of the kind; **New voice...** makes one |
| The tree | The calls by group, with how many **files** each has, its **status** (*has files*, *uses Hit*, *none (silent)*, *missing* for a required call, *your call*) and **when it plays**. Select a call to work on it |
| **Import files...** | Copy sound files from anywhere on your computer into the folder of the selected call (it is made) |
| **Add a call...** | A folder for a call of your own |
| **Open folder** | Show the folder in the file manager |
| The selected call | What it is for, its files, **Play** (a double-click plays a file), **Stop** |
| **What this voice lacks** | The warnings: required calls with no sound, the optional ones that stay silent, folders with an old name |
| **Used by** | The NPCs, characters and player classes that have this voice |

The template project has a voice to look at: **humanoid / Mage_Pack**. Its folders are the names of the pack (`hit`, `death`, `crit` match the calls of the game; `attack`, `lightattack`, `laugh` ... are calls of your own for abilities).

## See also

- [Guide 7: a voice for your creatures](/basic/audio/guides/a-voice-for-your-creatures).
- [Sound Library](/basic/audio/sound-library), [NPCs](/basic/entities/npcs), [Using an ability](/basic/abilities-and-effects/using-an-ability).
