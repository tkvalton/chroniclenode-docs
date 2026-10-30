# Game Settings

The **Game Settings** editor sets the **player's options**: the things a player expects to find in an options menu. For each one you choose two things: the **default value** the game starts with, and whether the **player may change it**.

The options window of the game (in the main menu and the pause menu) is built from this editor. It shows only the options you allowed, in the same tabs and groups you see here. An option you leave unticked still has its default, and the player never sees it.

## The editor

The settings are in tabs. Next to every setting is a **checkbox**: ticked means "the player can change this". Hover a setting for its description.

| Button | What it does |
|---|---|
| **Save All** | Saves the defaults and the list of ticked options |
| **Reset to Defaults** | Puts every setting back to the value it had when the toolkit was installed |
| **Enable All**, **Disable All** | Ticks or unticks every checkbox |
| **Clear User Settings** | Deletes your own `settings.cfg` (see below), so you can test the defaults as a new player would see them |

## Tabs

### Gameplay

| Setting | What it does | Default |
|---|---|---|
| **Text language** | The language of the text of the game: a language of the [Localization](/basic/game-settings/localization) tab. Empty = the language of the computer when the game has it, else the source language. The settings window shows the languages of the game | empty |
| **Voice language** | The language of the spoken voice lines. Empty = the language of the text. A line with no recording in the language plays in the default recording | empty |
| **Subtitles enabled** | Show subtitles: the [Subtitles element](/basic/user-interface/hud) of the HUD shows the subtitle of a voice line while it plays, and hides it at once when this is turned off | off |
| **Auto save** and **Auto save frequency** | Allow autosaves, and the seconds between them (60 to 3600). *Not used yet: nothing reads them. The game autosaves when the player leaves to the menu or quits, whatever these say* | off, 300 |
| **Crouch mode** | **Hold** the key to crouch, or **toggle** | Hold |
| **Mouse sensitivity** | How fast the camera and character turn with the mouse. `0.01` to `1` (it can never be `0`, or the player could lock themselves out). This is the one slider most games show | `0.22` |
| **Mouse X / Y axis sensitivity** | Fine-tuning relative to the master: `1` = the same, `0.5` = half as fast. Tick these only if players should set horizontal and vertical apart | `1` |
| **Invert mouse X / Y axis** | Flip the direction | off |

### UI

| Setting | What it does | Default |
|---|---|---|
| **UI scale** | Size of the HUD and the panels, `0.5` to `1.5` | `1` |
| **Text size** | Size of the text, `0.5` to `1.5` | `1` |
| **Nameplates** | Four kinds of nameplate, each on or off and each with its own **only in combat** choice: **player** characters friendly to you (yourself, your party: off by default), **friendly** NPCs (vendors, quest givers, allies: on, only in combat by default), **enemy** (hostile and neutral NPCs, players against you: on) and **pet**; one more choice puts every kind in combat only (the nameplates of the player's side show while you or they are in combat, an enemy while it is in combat itself); what auras show (none, buffs, debuffs, both); what auras show (none, buffs, debuffs, both); health text (none, current, current and maximum, percent...); resource bar; cast bar; class colours; the maximum distance (`0` = unlimited) | all on, 80 m |
| **Party Frames** | Health text, resource bars, which debuffs show, class colour on the health bar | on |
| **Action Bar** | [Cooldown](/basic/keywords#cooldown) text, [global cooldown](/basic/keywords#global-cooldown) text, left-click to use a button (*not used yet*), health and resource text, cast bar | on |
| **Accessibility** | The colours that stand for **the player**, **friendly**, **hostile**, **neutral** and **pet** entities (for colour-blind players), the colours of the interruptible and uninterruptible **cast bar**, and the action bar's cast bar and health bar | blue, green, red, yellow, light blue |

### Display

| Setting | What it does | Default |
|---|---|---|
| **Window mode** | Fullscreen, windowed, borderless window, borderless fullscreen | Fullscreen |
| **Resolution** | A list from 1152 x 648 up | 1920 x 1080 |
| **Resolution scale** | Renders at a fraction of the resolution, `0.25` to `2` | `1` |
| **Max FPS** | `0` = no limit | `60` |
| **VSync** | Disabled, adaptive, enabled | Enabled |
| **Anti-Aliasing** | MSAA off, 2x, 4x, 8x; post-process off, FXAA or TAA | Off, TAA |
| **Quality** | Shadow size, shadow quality, mesh level of detail | Medium, Medium, High |
| **Advanced Graphics** | Resolution scaling (bilinear, FSR 1.0, FSR 2.2) with FSR sharpness; screen-space reflections, ambient occlusion and indirect lighting; SDFGI; glow; volumetric fog | mostly low or off |
| **Adjustments** | Brightness, contrast and saturation, `0.1` to `2` | `1` |

### Audio

Master, music, sound effects, ambiance, voice and **interface** volume, `0` to `1`, all default `1`. The interface sounds (clicks, windows, notifications) have a channel of their own; see [the audio channels](/basic/world/audio-zones#the-audio-channels).

### Keybinds

The list of the actions of the project, each with a checkbox: tick the ones **players may rebind**. The keys themselves are not set here: define the actions and their default keys in Godot's **Project > Project Settings > Input Map**, and the game uses them. The tab shows the keys each action has now. Every action also has a **name field**: what the player reads in the keybinds menu. The sixty action bar slots and the twenty panel keys are explained on [Action bars and keybinds](/basic/game-settings/action-bars-and-keybinds). Actions starting with `ui_` are not listed.

## The defaults and the player's changes

There are two layers:

1. **Your defaults**, in `settings_config.tres`, with the list of accessible settings.
2. **The player's changes**, saved as a small file on their computer (`user://settings.cfg`) that holds **only what they changed**.

When the game starts it reads your defaults and puts the player's changes on top. Because only changes are saved, **a new default you set later reaches every player who never touched that option**.

::: tip Testing
Your own `settings.cfg` hides edits to a default (you changed it once, so your change wins). Press **Clear User Settings** to see what a new player sees.
:::

## What is applied

Display and audio settings take effect at once while the player changes them (the window mode, resolution, VSync, anti-aliasing, shadows, the volume buses). Mouse settings are read on every look event. The interface settings are read by the nameplates, party frames and action bar when they update.

## See also

- [Controller & Camera](/basic/game-settings/controller-and-camera) for how the sensitivity feeds the camera.
- [How the settings are built](/advanced/game-settings/).
