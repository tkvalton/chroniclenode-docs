# 1. Import your audio

::: info Status
Written from the fields of the editors and the reference pages. Not yet checked step by step in the editor, and the music has not been listened to in a game.
:::

In this guide you put sound files into the project so the editors can offer them. You will import a piece of music, a loop of ambience, and a few hit sounds, and see them in the library.

**Time:** about 10 minutes.

**Before you start:** a few sound files on your computer: a music file (Ogg or MP3), a loop of rain or wind, and two or three short hit sounds. Anything will do; if you have none, the template project has some.

## The one rule

**Every sound of the game is a file in the audio library: `src/data/audio/`.** The editors list what the library holds. A sound file lying elsewhere in the project cannot be chosen from a list, so everything starts by getting the file into the library. Inside it, the **folder is the organisation**: a *category* folder (`music/`, `impact/` ...), and inside it, usually, a *type* folder named for the sound.

## Part 1: music

1. Open **Audio > Sound Library**. The tree on the left shows the categories.
2. Select the category **Music**. Press **Import**.
3. The editor asks whether the music is a **loop** or **non-loop** folder. Choose **non-loop** for a piece that is a whole song. (The folder only sorts your files; whether a track repeats is decided where you use it.)
4. In the file window pick your music file. It can be **anywhere on your computer**: it is copied.

**You should see** the file under *Music > non_loop* in the tree. Select it and press **Play** to listen; the time bar shows where you are.

## Part 2: ambience

5. Select **Atmospheric ambience** and press **Import**; choose **loop** and pick your rain or wind file.
6. Select the file and press **Play**.

**You should see** it under *Atmospheric ambience > loop*.

## Part 3: sounds with a name

Sounds of abilities, voices and objects are looked up by **name**: the folder name is what the game uses. A hit sound for an ability is "category *Impact*, type *sword_hit*".

7. Select the category **Impact**. Press **Import**.
8. The editor asks for a **new folder name**. Type `sword_hit` (lower case letters, numbers and underscores) and pick your two or three hit sounds.

**You should see** *Impact > sword_hit* with its files. When an ability asks for an impact sound it picks one of the files **at random**, so several files in a folder give variety for free.

If the folder name you want has a special meaning, **Settings > Add a sound folder...** explains it: it asks what the sound is for, tells you what the name is used for, and lists the folders that exist. For the interface sounds (`click`, `level_up` ...) it offers the names the game already knows.

## Part 4: from the track window

Wherever you choose a track of music or ambience (a zone, an album, a menu), the **track window** has an **Import files...** button. It copies into the **Category** and **Type** shown at the top of the window and selects the new files, so you never have to leave the album to add a track.

9. Open the track window from any music field (for instance the **Music** of a [zone](/basic/world/zones#music-and-ambient-sound)). Press **Import files...**, pick a file, and see it selected in the list.

## If something is not there

- Press **Refresh** in the Sound Library: it reads the folders again (useful after you copied files by hand or from the Godot FileSystem dock).
- A file Godot has not imported yet cannot be previewed for a moment: wait until the editor has finished importing.
- **Settings > Validate Database** lists the files that cannot be read.
- A file that is already in the folder is not copied again; rename the new file.

## What next

[Choosing file types](/basic/audio/guides/choosing-file-types) tells you which format to use for which sound. The reference: [Sound Library](/basic/audio/sound-library).
