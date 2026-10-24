# Zones: still to come

::: info Zones are built
The zones themselves are in the toolkit: the database type, sub-zones, painting and filling on the terrain, zone volumes, the default zone of a world, the banner, the trigger, the condition, the quest objective and the text tokens. See [Zones](/basic/world/zones). This page is only what is **not** built yet, and the names on it can still change.
:::

## A zone with its own look, weather and sound

| It will give | What it will do |
|---|---|
| **Its own look** | A zone can choose an [Environment, Sun, Sky and Time config](/basic/world/world-configs) different from the world's: a cave without sun, a swamp with thick fog. The change **blends** over a few seconds at the border, it does not jump |
| **Its own weather** | A default weather for the zone (or none), and a table of weather with chances, so the swamp is foggy and the mountain snows. See [Worlds](/basic/world/worlds#default-weather) for the weather the world has today |
| **Its own sound** | Music and ambience for the zone, using the same tracks the world uses today |
| **Facts for the game** | A suggested **level range**, who holds it (a [faction](/basic/behaviors/factions)), whether it is a **safe zone** |

A sub-zone will **inherit** from its parent and only set what it wants to change.

## Discovered zones and saving

The zones the player has **discovered** (for a map that fills in) and the zone the party is in, saved with the game. Until then the zone is worked out again from where the party stands when a game is loaded.

## A zone map

A view of the world **from above** in the colours of its zones, to see holes (ground with no zone) and volumes that overlap with the same priority. Today the zone overlay on the ground in the 3D viewport shows the painted zones.

## Still to decide

- Whether the **weather** of a zone replaces the world's, or mixes with a global weather.
- Whether **NPCs** can be told to stay in a zone (a wolf that does not leave Elderwood).
- Whether zones should also be given a **chat line** ("You have entered Elderwood") on a channel of the message manager, besides the banner.
