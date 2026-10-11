# Zones

::: warning Not built yet
This page describes a planned feature, part of the [World Builder](/planned/world-builder). Today a world is one scene with one set of [configs](/basic/world/world-configs) and one default weather, and the only named places are [regions](/basic/world/regions), which are invisible detection areas for events. The names on this page are a **proposal**: they can still change.
:::

A **zone** is a **named area of the map**. A big world is built as one scene, but the player does not think in scenes: they think *Elderwood*, *the Sunken Caves*, *Port Haven*. Zones give those places a name, a mood and a meaning for the game, and **sub-zones** break them up further: *Elderwood > The Old Mill*.

## What a zone gives

| It gives | What it does |
|---|---|
| **A name on enter** | When the player crosses into a zone, a banner shows its name ("Elderwood"); a sub-zone shows its own line under it. A sound can play. Crossing back into the zone you just left, or into a sub-zone of the zone you are in, does not repeat the parent's banner |
| **Its own look** | A zone can choose an [Environment, Sun, Sky and Time config](/basic/world/world-configs) different from the world's: a cave without sun, a swamp with thick fog. The change **blends** over a few seconds at the border, it does not jump |
| **Its own weather** | A default weather for the zone (or none), and a table of weather with chances, so the swamp is foggy and the mountain snows. See [Worlds](/basic/world/worlds#default-weather) for the weather the world has today |
| **Its own sound** | Music and ambience for the zone, using the same tracks the world uses today |
| **Facts for the game** | A suggested **level range**, who holds it (a [faction](/basic/behaviors/factions)), whether it is a **safe zone**, and whether the player has **discovered** it |
| **A name for quests** | The quest tracker and the map can say where: "Kill 5 wolves in **Elderwood**", and the text words get `<zone>` and `<sub-zone>` ([text tokens](/basic/shared-systems/text-tokens)) |
| **Events** | Triggers *Zone entered* and *Zone left*, a condition *Player is in zone*, and a quest objective *Reach the zone* |
| **Saving** | The zones the player has discovered, and the zone the party is in |

A sub-zone **inherits** from its parent: it only sets what it wants to change. A sub-zone with nothing set is only a name.

## How a zone is drawn

There are three ways to say *where* a zone is. They are meant to be used together.

| Way | What it is | Good for |
|---|---|---|
| **Chunks** | The ground is cut into a grid of squares (you choose the size, from a few metres to a hundred); you give a square to a zone. One click fills a square | A big open world: a continent in zones |
| **Painting** | The same grid with **small** squares and a **brush**: you paint the zone on the ground and the border follows your brush | A forest edge, a river bank, a mountain ridge: borders that are not squares |
| **Volumes** | A 3D shape (box, sphere, cylinder) placed in the world with a **priority**, like the [regions](/basic/world/regions) you place today | **Above and below**: a cave under a hill, a floating island, the inside of a building, a tower with its own floors |

Chunks and painting are **one thing**: a zone map of the world, a grid whose squares hold a zone. Chunk mode is a grid with big squares and a fill tool; paint mode is a grid with small squares and a brush. You can use big squares to lay out the continent and then paint the borders that need to be exact.

Volumes sit **on top** of the zone map. A cave volume under a hillside wins over the forest painted on the ground above it.

### Which zone is the party in?

For any point in the world:

1. The **volumes** that contain it, the highest priority first (a smaller volume wins a tie).
2. If none: the **square of the zone map** under it.
3. If none: the **default zone of the world**.
4. If none: no zone.

A point in a sub-zone is also in its parent. The lookup is cheap, and it only runs when the player moves into a new square or leaves a volume, so a world with hundreds of zones costs nothing to be in.

## What changes for regions

Today's **region** is an area that *watches* things. A zone *names* and *sets* things. The two words are too close, so the plan is to give them different names:

| Today | Planned | What it is |
|---|---|---|
| **Region** | **Trigger area** | An invisible volume that events and conditions ask about: "is someone in there?". Everything it does today it will keep doing |
| *(new)* | **Zone** and **Sub-zone** | A named area of the map, with a look, weather, sound and facts |

Why *Zone* and not *Region* or *Area*: *Region* is the word the toolkit already uses for the watching area, and *Area* is already a Godot node (Area3D). *Zone* and *sub-zone* are what players and designers of RPGs already say.

The rename of the regions is only the **name**. A trigger area is saved as a region is today: **nothing in an existing project has to be redone**, and the events, conditions and quests that use regions keep working. The editor, the menus and this documentation change their words when the zones are built.

## The tool

Part of the [World Builder](/planned/world-builder):

- A **zone palette**: make zones and sub-zones (the tree), give each a colour.
- The **grid overlay** on the terrain, with a size you can change, a **fill** tool and a **brush** with a size and a soft or hard edge.
- **Volumes** placed like other nodes, with their priority.
- A **zone map view**: the world seen from above in the colours of its zones, to see holes (ground with no zone) and overlaps (two volumes with the same priority).
- The **zone editor** (Database): the fields of a zone: name, parent, the configs, weather table, tracks, level range, faction, safe zone, banner text and sound.

## What is there today

- The [world configs](/basic/world/world-configs) and the **default weather** of a world, which a zone would override.
- The *Set Weather*, *Set Environment*, *Set Sky*, *Set Sun* and *Set Music Track* [event actions](/basic/events-and-quests/event-actions), which already change the look of a world while it is played.
- [Regions](/basic/world/regions) with an **Area Name**, and the *Player in region* triggers and conditions: a quest "Reach the old mill" works today with a region.

A project can get most of a zone today with a region, an event with *Player in region* and the actions above. What it cannot do is blend at the border, have a world's layers by height, or show a banner of its own.

## Still to decide

- The names: *Zone / Sub-zone* with *Trigger area*, or another pair.
- How **deep** zones go: zone and sub-zone only, or any depth.
- Whether the zone map needs **layers** (two zones at different heights on the same square) or volumes are enough. The plan says volumes are enough.
- Where the zone map is **stored**: in the world's data, or in a file beside the scene.
- Whether the **weather** of a zone replaces the world's, or mixes with a global weather.
- Whether **NPCs** can be told to stay in a zone (a wolf that does not leave Elderwood).
