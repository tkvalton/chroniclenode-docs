# 5. A mood for each zone

::: info Status
Written from the editor's fields and the reference pages. Not yet checked step by step in the editor.
:::

In this tutorial a world gets two places with a mood of their own: a **swamp** that is green, foggy and dim, and a **cave inside it** that has no sun at all. The party walks in and out and the look blends.

**Time:** about 15 minutes.

**Before you start:** finish [tutorial 1](/basic/world/tutorials/a-day-in-the-valley). You need a world with some ground and a way to make zones: see [Zones](/basic/world/zones) (the zone layer of the Terrain tool, or a zone volume).

## Part 1: the two moods

1. Open **World > World Configs > Environment**, **Create New**: `Swamp mood`. Make it green and dim: **Fog density** `0.03`, a green-grey **Fog light color**, **Sun max energy** `0.5`, **Grade saturation** `0.8`.
2. Create another: `Cave mood`. Untick **Sun enabled** (a cave has no sun), **Ambient light energy** `0.3`, **Fog density** `0.04`.
3. If you want a different sky for the swamp, make one in the **Sky** tab (`Swamp sky`, greyer colours).

## Part 2: the zones

4. Open **World > Worlds**, choose the world and open its **Zones** section. **Add zone**: `Swamp`. **Add sub-zone** with the swamp selected: `Swamp cave`.
5. Choose `Swamp`. Set **Environment** to `Swamp mood` (and **Sky** to `Swamp sky` if you made one). Leave **Look blends** at `3` seconds.
6. Choose `Swamp cave`. Set **Environment** to `Cave mood` and **Look blends** to `1.5`. Leave **Sky** on the first choice: the cave takes the sky of the zone above, the swamp's.
7. Put the zones on the map as in [Zones](/basic/world/zones#where-a-zone-is): paint the swamp on the terrain and put a zone volume over the cave mouth with the zone `Swamp cave`.

## Part 3: look at them in the editor

8. Open the 3D toolbar's **Environment** button. In the bar, **Look at** lists **The world**, `Swamp` and `Swamp cave`. Choose each: the viewport shows the sky and environment of that place.
9. Not right yet? Change the mood in **World Configs** and look again: the viewport follows what you change. When it is right, nothing else is needed: the zones already have their configs. (**Use for this zone** gives the zone whatever sky and environment you are looking at.)

## Part 4: walk it

10. Click **Test World** and walk into the swamp: the fog thickens and greens over three seconds. Walk into the cave: the sun dims out over a second and a half and is gone, and the world is lit by the ambient light and your lights.
11. Walk out: the look blends back. (Walking into the cave from the swamp does not change the sky: the cave has none of its own.)

## Part 5: an event is king

12. Make an event with the [Set Environment Config](/basic/events-and-quests/event-actions) action (a dark red fog) and give it a **Blend seconds** of `4`. Run it, then walk from zone to zone: the red fog stays. An event look wins over the zones.
13. Open the `Swamp cave` zone and tick **Replaces an event's look**. Run the event again and walk into the cave: the cave's look replaces the event's and the event look is over.

## Going further

| You want | Do this |
|---|---|
| **A whole valley of one mood** | Do not make a zone: give the world its own Environment ([Worlds](/basic/world/worlds#config-overrides)) |
| **A faster or slower change** | **Look blends** of the zone: `0` is at once, a minute is a slow tide |
| **A different path for the sun** | The sun's path is the world's (one sun per world); a different path is a different world |
| **Nothing happens** | Check the zone is the one the party is in (the banner shows it), and that the zone and its parents have an Environment or Sky chosen |
