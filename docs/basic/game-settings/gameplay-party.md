# Gameplay Config: Party Management

The **Party Management** category of the [Gameplay Config](/basic/game-settings/gameplay-config): the rules for the party of player characters. See [Playable Character](/basic/entities/playable-character#companions) for how the companions behave. The rules of leveling and experience are on [Leveling and experience](/basic/game-settings/leveling-and-experience).

## Party

| Field | What it does | Default |
|---|---|---|
| **Max party size** | How many characters are in the active party | `4` |
| **Max reserve companions** | How many recruited companions can wait out of the world, besides the active party. `0` = no reserve: a recruit with a full party is turned down | `6` |
| **Reserve experience enabled** | Companions in the reserve gain experience too | on |
| **Reserve experience percentage** | The share of every experience grant the reserve gets (`0.5` = half) | `0.5` |
| **Allow character switching** | The player may take over any living party member. Off: the player only ever controls the first member, and the others are companions (when that member falls, control still passes to a living one) | on |
| **Allow switching in combat** | The player may switch characters while the party is fighting | on |
| **Has main character** | On: the first member of the party is the **main character**. It cannot wait in the reserve, and its death ends the game under *Game over* and *Permadeath*. Off: there is **no main character**: any member, the first included, can be put in the reserve and swapped out, and the game ends only when the **whole party** is down. Needs *Allow character switching*: when the player cannot take over the others, the first member is the only one the player controls, so it is always the main character (the switch is greyed out in the editor) | on |

With **Has main character** on, the first member of the party is the **main character**: it cannot be put in the reserve, and its death ends the game when the death behavior is *Game over* or *Permadeath* (a companion that falls does not end it). With it off, nobody is special: the party can rotate its first member into the reserve, and only a party wipe ends the game. Use it for a game of a band of equals, where the player picks a squad from a roster.

## Inventory and professions

| Field | What it does | Default |
|---|---|---|
| **Inventory sharing** | What the characters share: nothing, one purse, or one purse and one bag. See [Shared party inventory](/basic/entities/shared-inventory) | Per character |
| **Shared bag slots** | The size of the shared bag | `40` |
| **Professions belong to** | **The party** (one set of professions, recipes and levels) or **Each character** (professions of their own). See [Craft Schools](/basic/items/craft-schools#who-owns-the-professions) | The party |

Choose both before the game starts: a save made with another choice is not converted.

## Companions

| Field | What it does | Default |
|---|---|---|
| **Companion follow distance** | How far (in metres) a companion stays behind the character the player controls. Each companion further down the line stands a little farther back | `3` |
| **Companion assist range** | How far from a fighting party member a companion joins the fight | `25` |
| **Companions use abilities** | Off: a companion only uses its basic attack | on |

## New game rules

| Field | What it does | Default |
|---|---|---|
| **Use character creation UI** | The player chooses or makes a character at the start of a new game | on |
| **Starting party composition** | The [characters](/basic/entities/playable-character) of the starting party | none |
| **Starting map** | The id of the [world](/basic/world/worlds) a new game starts in | |

## Action bar

How the bar of a character works. The whole subject, with recipes, is on [Action bars and keybinds](/basic/game-settings/action-bars-and-keybinds); the scene that draws it is [Action bar](/basic/user-interface/action-bar).

| Setting | What it does | Default |
|---|---|---|
| **Action bar slot count** | How many slots a character has, `1` to `60`. The first 30 have keys by default; bind the others in the Input Map. How many the screen draws is the interface's business | `30` |
| **Action bar arrangement** | **Free**: the player drags abilities and items on and off the slots (slots a class plan or an effect locks excepted). **Fixed**: nobody can change a slot but the class plan, the effects and the events | Free |
| **Action bar auto fill** | A newly learned ability goes to the first free slot that nothing is planned for. Off: it waits in the spellbook | off |
| **Player basic attack** | **Auto attack**: the built-in basic attack of the weapon. **Off**: there is none for players and companions, and **slot 1 is a slot like any other**: the attacks of your game are the abilities you put on the slots. NPCs keep their basic attack | Auto attack |

With the basic attack **Off** and a point-and-click controller, clicking an enemy only selects it: the editor shows a warning for that pairing.

## Input

The **Controller** and **Camera** have tabs of their own now ([Controller & Camera](/basic/game-settings/controller-and-camera)). Two options of the whole input stay here: **Look drag threshold** is how far the mouse moves with a button held before a drag begins, and **Log input routing** prints where each click went, for finding interface problems.
