# Sun config

The **Sun** tab (**World > Sun**) sets the **path** of the sun: where it is in the sky and when. A planet has one sun that rises and sets the same way in every valley, so there is **one sun config per world**. It is one of the five [world configs](/basic/world/world-configs).

**How the sun looks** (how bright, what colour, how soft its shadows are) is the mood of a place and lives in the [Environment config](/basic/world/environment-config) (the **Sun Light** containers), so a zone or an event that changes the environment can dim or warm the sun **without moving it**. A [weather](/basic/world/weather#the-sky-and-the-light) can dim it too.

## The tab

The tab is built like the other editors of the toolkit. On the left is **the list of the sun configs**: a filter box and **New** (name it, and a new one starts with the default values). The default is always there and cannot be deleted; right-click an entry for **Duplicate**, **Delete** and **Copy Path**. On the right is a container for **Details** (name, id and a note) and **a container for each group of settings**, titled with the name of the group. A group can be folded. Changes are saved as you make them.

The containers:

| Container | Field | What it does | Default |
|---|---|---|---|
| **Day Night Cycle** | **Day night cycle** | On: the sun moves with the time. Off: a sun that stays where it is | on |
| **Static Sun** | **Static rotation** | With the cycle off: the height of the sun, `0` on the horizon, `-90` straight overhead | `-45` |
| **Day Night Timing** | **Sun rise hour**, **Sun set hour** | With the cycle on: the hour the sun rises and sets | `6`, `20.5` |
| **Sun Direction** | **Sun heading** | The direction of the path, in degrees (also for a static sun). `90` (the default): the sun rises in the east (+X), is overhead at midday and sets in the west (-X), the way the maps are laid out. `0` is the old path: rising to the south (+Z), setting to the north (-Z). `180` and `270` are the opposite ones | `90` |

The tab shows the containers that apply: with the day night cycle on you see **Day Night Timing** and not **Static Sun**; with it off, the other way round. **Sun Direction** is always there.

At night the same light runs the same arc: it is the moon.

## What follows the sun

- The **sky** changes at the hours this config says the sun rises and sets (half an hour before to half an hour after). The sky has no hours of its own: see [Sky config](/basic/world/sky-config).
- The **time** of the day it is comes from the [Time config](/basic/world/time-config).
- A [zone](/basic/world/zones) cannot change the sun's path: it is the world's, always.

## See also

- [World configs](/basic/world/world-configs) and [Worlds](/basic/world/worlds#config-overrides) to choose a sun config for a world.
