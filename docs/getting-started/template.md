# Using the template project

The template project is a complete Godot project with ChronicleNode already installed and a small demo game built with it. There is nothing to configure.

## Open it

1. Download the template project and unpack it somewhere on your computer.
2. Start **Godot 4.7**. In the Project Manager choose **Import**, browse to the unpacked folder, and select its `project.godot` file.
3. Open the project.

::: info The first open is slow
The first time Godot opens the project it imports the art, audio and models. This takes a few minutes, and Godot shows a progress bar. It only happens once.
:::

The ChronicleNode plugin is already enabled in the template, so you do not need to do anything in Project Settings.

## Play the demo

Press **Play** (**F5**). The project's main scene is the ChronicleNode game root, so the game starts at its **main menu**. From there you can start a new game, load a saved game, change the settings, or quit. Starting a new game puts you in the **demo world**.

### The demo world

The demo world is a full world built to show and test as many features of the toolkit as possible. In it you find:

- **Target dummies** to try abilities and see damage, healing and effects on;
- **Interactables**: objects you can open, use and trigger;
- **Vendors** to buy from and sell to;
- **NPCs to talk to**, with conversations that offer and complete quests;
- **NPCs to fight**, including enemies that attack back;
- **Quests** to accept, play through and hand in.

Take your time in it. Everything you meet there is built in the editor, so each thing is also an example of how to make it yourself.

### Default controls

The demo uses a third-person camera with the mouse and keyboard:

| Action | Control |
|---|---|
| Move | **W A S D** |
| Turn the character (the camera follows) | Hold the **right mouse button** and drag |
| Orbit the camera | Hold the **left mouse button** and drag |
| Zoom | **Mouse wheel** |
| Select or target | **Left click** |
| Attack or interact | **Right click** |

Mouse sensitivity and inversion are in the in-game options, under *Gameplay*. Both the camera and the controls are presets that you can change or replace: see *Game Settings* in the [editor tour](/getting-started/editor-tour).

## Open the editor

Look at the row of tabs at the top of Godot, next to **2D**, **3D**, **Script** and **AssetLib**. The **Database** tab is where you author the game. Click it.

Everything you just played is in there: the character classes, their abilities, the items, the quests and conversations, the world, and the settings that decide how the game plays. The [editor tour](/getting-started/editor-tour) explains how it is organised.

::: tip Try a small change
Open **Abilities & Effects**, pick an ability, change a number such as its damage or cooldown, and play again. Changes in the editor are saved to the project's data files straight away.
:::

## Where the content lives

All the content you author is saved as resource files under `res://src/data/`, with one folder per kind of content (abilities, items, quests and so on). The demo's art, audio and models are in `res://assets/`. The ChronicleNode addon itself is in `res://addons/`, and you normally never edit it.

## Making your own game from the template

You can keep the demo content, delete the parts you do not want, or empty the project and build your own. Either way you do not touch the addon: your game is the content in `src/data/` and the settings in `src/data/config_data/`.

## Next

- [The editor at a glance](/getting-started/editor-tour)
- The [Guide](/guide/)
