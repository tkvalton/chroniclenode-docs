# Time config

The **Time** tab (**World > Time**) sets how a world's **clock** runs: how long a game day lasts, how fast time goes and what time it is at the start. It is one of the five [world configs](/basic/world/world-configs); the project starts with one called *Default*, and every world uses it unless the world says otherwise (see [Worlds](/basic/world/worlds#config-overrides)).

## The tab

The tab is built like the other editors of the toolkit. On the left is **the list of the time configs**: a filter box and **New** (name it, and a new one starts with the default values). The default is always there and cannot be deleted; right-click an entry for **Duplicate**, **Delete** and **Copy Path**. On the right is a container for **Details** (name, id and a note) and **a container for each group of settings**, titled with the name of the group. A group can be folded. Changes are saved as you make them.

| Container | Field | What it does | Default |
|---|---|---|---|
| **Day Length** | **Day length seconds** | Real seconds for a whole game day. `86400` is real time; `1440` makes a game hour last one real minute; `3600` makes a day last an hour | `86400` |
| | **Time multiplier** | Speeds time up or slows it down. `2` is twice as fast, `0` freezes the clock | `1` |
| **Starting Time** | **Starting time** | The hour of the day (0 to 24) when a new game starts, or when the party enters a world that uses a *different* time config | `8` |

## How the clock behaves

The game clock **keeps running between worlds**. Going through a door does not set the time back to the starting time; only a new game does. A world with its *own* time config moves the time of day to that config's starting time when you arrive (forwards: the game does not run time backwards, because [cooldowns](/basic/keywords#cooldown) and timed worlds count on it), and uses its day length and speed while you are there.

A good project has the default set up for the normal world and a few extra time configs for the places that are different: a dream where time runs ten times faster, a dungeon where it stands still.

## See also

- [World configs](/basic/world/world-configs): the five configs and how a look changes over time.
- [Sun config](/basic/world/sun-config): the hours the sun rises and sets follow this clock.
- [Worlds](/basic/world/worlds#config-overrides): choose a time config for a world.
