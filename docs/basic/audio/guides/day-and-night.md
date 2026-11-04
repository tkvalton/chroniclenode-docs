# 8. Day and night

::: info Status
Written from the fields of the editors and the reference pages. Not yet checked step by step in the editor, and the sound has not been listened to in a game.
:::

In this guide a village has birds by day and crickets at night, its music album has a morning tune and a night tune, and its Dynamic Music goes to its Night state when the sun sets. The sound follows **the sky**: it is night between the sunset and the sunrise of the world's [Sun config](/basic/world/world-configs), so what you hear matches what you see.

**Time:** about 20 minutes.

**Before you start:** two ambient sounds (birds, crickets) and two or three music tracks in the [audio library](/basic/audio/sound-library). The [first music album](/basic/audio/guides/your-first-music-album) guide shows how to make an album.

## Part 1: when is it night?

1. Open **World Configs > Sun** and look at **Day Night Timing**: **Sun rise hour** (6:00 to begin with) and **Sun set hour** (20:30). The sound uses these two numbers: it is **day** from the sunrise to the sunset and **night** the rest of the time.
2. A sun with **Day night cycle** off (a static sun) never sets: the sound is always day.

Change the hours in the Sun config and the sound follows. A world has one Sun config, so one sunrise and one sunset: a zone can change the lighting but not the hours.

## Part 2: an ambience for the night

3. Open your world (or a zone, or a weather) and find its **Ambient sound**. Choose **Track** and pick the birds.
4. Tick **Different at night**. A second source appears inside the first, called **At night**. Choose **Track** and pick the crickets.
5. Run the game and let the clock pass the sunset (or set the starting time in **World Configs > Time** to the evening).

**You should see** (hear) the birds crossfade to the crickets as the sun sets, and back at sunrise. The crossfade is the **Fade** of the source that starts.

::: tip
The night source is a full source: a track, an **album** or (for music) a **Dynamic Music**, with its own loop, pause, volume and fade. The music, the combat music and the ambience of the world, a zone, a weather, an encounter and an event all have **Different at night**.
:::

## Part 3: tracks that belong to the day or the night

6. Open **Audio > Music Albums** and your village album. Each track has **Plays**: **Any time**, **Day only** or **Night only**. Set the morning tune to *Day only*, the night tune to *Night only* and leave a calm tune on *Any time*.
7. The album plays the tracks that fit the time. When the sun sets, the track that plays goes on to its end, and the next one is picked from the ones that fit the night.

**You should see** that by day the album never plays the night tune, and at night never the morning one. An album that has **no** track for the time plays all of them (an album of only night tracks is not silent by day).

## Part 4: a Dynamic Music with a Night state

8. Open **Audio > Dynamic Music** and your music. Add the states **Day** and **Night** (each plays the part you want).
9. Use the music as the music of the village and leave its **start state** empty.

**You should see** the music start in **Day** or **Night** by the time, and go to the other when the sun sets or rises. A fight still goes to **Combat**, and when the fight is over the music goes back to the state of the time. A source that names a **start state**, or an event that asks for a state (Set Music State), is not changed by the sun.

## Good to know

- **The sun is the only clock.** There is no separate day and night hour for sound: change the Sun config and the sound changes with the sky.
- **Dawn and dusk** are not separate: it is day from the sunrise and night from the sunset. The crossfade does the softening (give the night source a long **Fade**).
- **A menu has no sun**: the menu music sources have no **Different at night**.
- **A night source that says nothing** (no track chosen) is ignored: the day source plays all day. A day source that says nothing with a night source that does says nothing by day, so the place below it plays.
- The game looks at the sun **each game minute**, and when a world starts.

## What next

The reference pages: [Music Albums](/basic/audio/music-albums), [Dynamic Music](/basic/audio/dynamic-music), [Sound layers](/basic/world/sound-layers).
