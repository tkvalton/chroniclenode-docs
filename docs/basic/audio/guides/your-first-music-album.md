# 4. Your first music album

::: info Status
Written from the fields of the editors and the reference pages. Not yet checked step by step in the editor, and the music has not been listened to in a game.
:::

In this guide a world plays an **album** of music in a shuffled order with pauses between tracks, a swamp zone plays one track of its own, and a fight has combat music.

**Time:** about 20 minutes.

**Before you start:** a world, and four music files imported ([Import your audio](/basic/audio/guides/import-your-audio)): three calm pieces and one fast one for fights.

## Part 1: an album

1. Open **Audio > Music Albums**. Press **New** and name it `Valley music`.
2. In **Album** leave **Kind** on *Music* and set **Order** to *Shuffle*: every track plays once in a new random order before any plays again.
3. Set **Shortest pause** to `5` and **Longest pause** to `20`: a quiet gap between pieces, different each time. Leave **Loop the album** on so it starts again when every track has played.
4. In **Tracks** press **Add a track** three times. In each, press **...**, choose one of your calm pieces and **Select Track**.
5. Look at **Warnings**: it should say *No warnings*.

**You should see** three tracks in the list. The **Weight** of each only matters for the *Weighted* order, where a track of 3 comes up three times as often as one of 1.

## Part 2: the world plays it

6. Open **World > Worlds**, select your world. In **Music and Ambience** set **Music** to **Album** and choose *Valley music*.
7. Run the world.

**You should see** (hear) the first track after the world loads, then a pause, then another, and no track twice before all three have played. The world asked for its tracks to be loaded when it started, so there is no hitch.

## Part 3: a zone with a track of its own

8. Open the [zone](/basic/world/zones) of the swamp. Set its **Music** to **Track**, choose a gloomy file, leave **Loop** on and set **Pause** to `0` to `0`.
9. Walk into the swamp and out again.

**You should see** the swamp's track fade in over the album, and the album come back when you leave. That is a [sound layer](/basic/world/sound-layers) coming and going.

## Part 4: combat music

10. Make a second album, **Kind** *Combat Music*, called `Valley fight`, with your fast piece. A combat album has **Restart each fight**: on, it begins from the first track each fight.
11. Set the world's **Combat music** to that album.

**You should see** the fight music start when the party is in combat and, a few seconds after the last fight, the calm music come back. The seconds are in **Gameplay Config > Audio**.

An **encounter** can have combat music of its own, which beats the zone's and the world's: select the encounter in the [Unique Object panel](/basic/world/unique-object-tool) and set its **Combat music**.

## Part 5: the menus

12. Open **Game Settings > Gameplay Config > Audio**. In **Menu music** set the **Main menu music** to a **Track** (or an album).

**You should see** the music start after the splash screen when you run the game, and give way to the world's music when the game begins.

## What next

[A boss fight with dynamic music](/basic/audio/guides/a-boss-fight-with-dynamic-music), where the fight music changes as the fight goes on. The reference: [Music Albums](/basic/audio/music-albums).
