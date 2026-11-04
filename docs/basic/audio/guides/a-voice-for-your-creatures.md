# 7. A voice for your creatures

::: info Status
Written from the fields of the editors and the reference pages. Not yet checked step by step in the editor, and the voices have not been listened to in a game.
:::

In this guide an orc gets a voice: you make the kind of creature and the voice, import the sounds of its calls, check what is missing, give an NPC the voice and an ability a shout.

**Time:** about 25 minutes.

**Before you start:** a few sound files: grunts for being hit, a death cry, a dodge sound, a shout. Short WAV or Ogg files will do ([Choosing file types](/basic/audio/guides/choosing-file-types)). The template project has a finished voice to look at: **humanoid / Mage_Pack**.

## Part 1: the voice

1. Open **Audio > Entity Voices**. In the tools menu choose **Create a kind of creature...** and type `orc`.
2. Press **New voice...** and type `Orc_Grunt`.

**You should see** *Orc* in the list with *Orc_Grunt* as its voice and a tree of the calls, all with 0 files. The **What this voice lacks** list on the right says that **Hit** and **Death** have no sound.

## Part 2: the calls

3. In the tree select **Hit (hit)** and press **Import files...**. Pick two or three grunts. They are copied into `orc/Orc_Grunt/hit/`.
4. Select **Death (death)** and import the death cry.
5. Select **Dodge (dodge)** and import the dodge sound.

**You should see** the files counted in the tree, *has files* in the status of each, and the warnings turn to *Every required call has a sound*. Select a call and press **Play** (or double-click a file) to listen. **Hit, heavy** now says *uses hit*: a voice without a heavy hit uses the light one.

## Part 3: check it

6. Open the tools menu and choose **Check all the voices**.

**You should see** a line for each voice. *Orc_Grunt* says every required call has a sound; a voice that lacks Hit or Death is named with what it lacks.

## Part 4: an NPC with the voice

7. Open **Entities > NPCs**, select an orc NPC. In its **Voice audio** choose the kind *orc* and the voice *Orc_Grunt*.
8. Run the world and hit the orc.

**You should see** (hear) a grunt when it is hit (never more than one a second), the death cry when it dies, and the dodge sound when an avoid trigger called *dodge* saves it. Back in the tab, **Used by** lists the NPC.

## Part 5: a shout for an ability

9. Add a folder for it: select the voice and press **Add a call...**, type `shout`, then **Import files...** a shout.
10. Open an [ability](/basic/abilities-and-effects/abilities), its use strategy, and set the **Voice Cast SFX**. In the window choose a kind and a voice to browse, and pick *shout* in the list.

**You should see** the orc shout when it uses the ability, in its own voice. A creature with another voice that has a `shout` folder shouts its own shout; one without plays nothing.

## What next

The reference: [Entity Voices](/basic/audio/entity-voices). The rest of the audio: [Guides](/basic/audio/guides/).
