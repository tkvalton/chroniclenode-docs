# The World Builder: what is left

::: tip Mostly built
The terrain tool, the placement tools, zones, spawners, water and lava volumes, ground weather and terrain streaming are built: see [World](/basic/world/). This page keeps **what is not built yet**.
:::

## Local events

Today, making a switch open a door takes an [event](/basic/events-and-quests/events). **Local events** will be a lighter way for the common case:

- Connect the **signal** of one [interactable](/basic/entities/interactables) to another: *this switch opens that door*.
- The connection is **drawn in the 3D view** as a line between the two, so you can see how a room works.
- Events stay for what is bigger than one room: quests, conversations, things that happen across the game.

## The ground

| What | Today |
|---|---|
| **Marks**: footprints in snow, tyre tracks, scorch marks | Not built. The ground shows wetness, snow and a tint ([Ground weather](/basic/world/ground-weather)), nothing that a character leaves |
| **Permanent change of a place**: a burned forest, winter replacing summer after a quest | Not built. The tint of a world and *Hold* of the [Set Ground Weather](/basic/world/ground-weather#events-and-conditions) action change the look of all the ground |
| **Local weather**: snow on the mountain, rain in the valley | One weather for the world; a [zone](/basic/world/zones) can shelter the ground from it |
| **A calendar and seasons** | There is no calendar, only the hour of the day |
| **Wind in the grass and brushing through it** | Not built |
| **Navigation over water and lava**, and links for caves and ladders | Not built: the navigation bake ignores them |

## Streaming

[Terrain streaming](/basic/world/terrain-streaming) loads the ground round the party. The **things on the ground** (placed NPCs and objects) are not streamed yet: an NPC on a tile that is not loaded stands still, and nothing simulates where it would have walked.

## Other terrain plugins

[Other plugins](/basic/world/terrain-plugins) work through a provider. The providers of Terrain3D and HTerrain are tested only against small stand-ins, and painted zones, painted spawners, streaming and ground weather need the terrain of the toolkit.
