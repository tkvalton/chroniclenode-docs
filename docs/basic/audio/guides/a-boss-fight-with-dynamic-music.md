# 5. A boss fight with dynamic music

::: info Status
Written from the fields of the editors and the reference pages. Not yet checked step by step in the editor, and the music has not been listened to in a game.
:::

In this guide a boss fight has music that changes as the fight goes on: a tense opening, a full fight, and a second phase that is faster, with drums that come in as the fight gets worse and a hit sound when the boss appears.

**Time:** about 40 minutes.

**Before you start:** a boss [encounter](/basic/world/encounters) with a [combat script](/basic/behaviors/combat-scripts) that has two **phases** (the second at half health), and these **Ogg** files imported ([Import your audio](/basic/audio/guides/import-your-audio)). Know the **tempo** of each (your music software shows it):

| File | What it is | Tempo |
|---|---|---|
| `boss_a.ogg` | The fight, phase one | 120 bpm |
| `boss_a_drums.ogg` | The drums of the same piece, **the same length** | 120 bpm |
| `boss_b.ogg` | The fight, phase two (faster) | 150 bpm |
| `boss_hit.ogg` | A short hit | |

## Part 1: the parts

1. Open **Audio > Dynamic Music**. Press **New**, name it `Dragon fight`.
2. In **Parts** press **Add a part**. Name it `Phase 1`. Press **...** next to **File** and choose `boss_a.ogg`. Set **Tempo** to `120` and **Beats per bar** to `4`. Leave **Loop** on.
3. In that part press **Add a layer**. Name it `Drums`, choose `boss_a_drums.ogg`, and set **Plays from intensity** to `0.5`. The drums play only when the intensity is half or more.
4. Add a second part `Phase 2` with `boss_b.ogg`, **Tempo** `150`.
5. Look at **Warnings**: a part with no file or a WAV is listed here.

**You should see** two parts. The tempo is what the transitions use, so enter it exactly.

## Part 2: the states

6. In **States** press **Add a state** three times: `Opening` plays *Phase 1* (**Intensity** `0`), `Rising` plays *Phase 1* (**Intensity** `0.8`) and `Enraged` plays *Phase 2* (**Intensity** `1`).
7. In **Music** set **Start state** to *Opening*.

**You should see** that *Opening* and *Rising* play the same part: the difference is the intensity, so *Rising* has the drums.

## Part 3: the transitions

8. In **Transitions** the **Default transition** is "at the next bar, cross fade of 2 beats": good for *Opening* to *Rising*.
9. Press **Add a rule**: **To state** *Enraged*, **The old part leaves** *At the next bar*, **The new part starts** *From the start* (the tempo is different, so never "same position"), **Fade** *Cross fade*, **Fade length** `4` beats.

**You should see** a rule titled "any -> Enraged". The most specific rule that fits a change is used.

## Part 4: a stinger

10. In **Stingers** press **Add a stinger**: name `Roar`, **Sound** `boss_hit.ogg`, **Lower the music by** `8` dB.

## Hear it before you use it

15. In the **Preview** container press **Play**, press **Rising** and **Enraged** to hear the changes, drag the **Intensity** to `0.6` to hear the drums come in, and press **Roar**. Fix the tempo or the rules until it sounds right, then press **Stop** and **Play** again after each change.

## Part 5: the encounter plays it

11. Select the boss encounter in the [Unique Object panel](/basic/world/unique-object-tool). Set its **Combat music** to **Dynamic**, choose *Dragon fight*, and the start state *Opening*.

**You should see** the music start in the *Opening* state when the fight begins and end with the fight. The party's combat state does not switch it: this music is the encounter's, so the boss drives it.

## Part 6: the phases drive it

12. Open the boss's [combat script](/basic/behaviors/combat-scripts). In the **first phase**'s **On enter actions** add **Play Stinger** with **Stinger name** `Roar` (the Dynamic Music is the one that plays).
13. In the **second phase**'s **On enter actions** add **Set Music State** with **State name** `Enraged`, and **Play Stinger** `Roar` again.
14. Somewhere in the first phase (when health is below 80 %, using a condition on the action) add **Set Music State** `Rising`. The drums come in.

**You should see** (hear), fighting the boss: the opening music, the drums coming in when it is hurt, and at half health the roar, the lowered music, and the fast part taking over on the next bar.

## If it does not sound right

- **Changes land off the beat**: the **Tempo** of the part is wrong. The transitions wait for "the next bar" by it.
- **The drums are late or drift**: the stem is not exactly the length of the part.
- **Nothing plays**: open **Warnings**; a WAV file or a part with no file will not play.
- **The roar is quiet or drowns**: set the stinger's **Volume** and how much it lowers the music.

## What next

[Music that follows the story](/basic/audio/guides/music-that-follows-the-story). The reference: [Dynamic Music](/basic/audio/dynamic-music).
