# Adding the addon to your project

This page adds ChronicleNode to a Godot project of your own. It shows the steps, what enabling the plugin does to your project, and what you see the first time you run it.

::: info Before you start
You need **Godot 4.7** and a 3D project. If you only want to try the toolkit, the [template project](/getting-started/template) needs no setup.
:::

## 1. Copy the addon

Copy the `chroniclenode` folder from the download into the `addons` folder of your project, so that you end up with:

```
your_project/
  addons/
    chroniclenode/
      plugin.cfg
      plugin.gd
      ...
  project.godot
```

If your project has no `addons` folder yet, create it. Go back to the Godot editor and wait for it to finish importing.

## 2. Enable the plugin

1. Open **Project > Project Settings**.
2. Choose the **Plugins** tab.
3. Tick **Enable** next to the ChronicleNode plugin.

::: tip Restart the editor
Close and reopen the project after enabling. Godot only shows new input actions and global shader parameters in Project Settings after a restart.
:::

## What enabling the plugin does

Enabling the plugin prepares your project so the toolkit can run. It never overwrites an input action or a settings file that already exists.

| What | Details |
|---|---|
| **Sets the main scene** | The project's main scene becomes the ChronicleNode game root, so pressing play starts the toolkit's game (main menu, new game, load). If your project already had a main scene, it is replaced. Set it back in Project Settings if you need to: disabling the plugin does not change it back |
| **Adds input actions** | Movement (**W A S D**), the mouse actions (primary, secondary, zoom, rotate), interact, jump, crouch, chat, the panel keys (quest log, spellbook, map, character), pause, and thirty action bar slots (**1** to **0**, with **Shift** and **Ctrl**). An action that already has the same name keeps your keys |
| **Adds audio buses** | `Music`, `SFX`, `Voice`, `Ambiance` and `UI`, saved in the project's audio bus layout so the game's volume settings work |
| **Adds shader globals** | `WindDirection`, `WindIntensity` and `GaleStrength`, used by the toolkit's wind effects |
| **Creates the data folders** | A `res://src/data/` folder with one subfolder for each kind of content: abilities, effects, items, quests, worlds and so on. They start empty |
| **Creates the settings files** | Five files in `res://src/data/config_data/` with the default settings: *Settings*, *Gameplay Config*, *UI Settings*, *Character Creation* and *Collision Layers*. You edit them in the **Game Settings** editors |
| **Adds the editor tab** | A **Database** tab next to **2D**, **3D**, **Script** and **AssetLib** |

It does not create any content: there are no classes, abilities, items, quests or worlds until you make them.

## 3. Open the editor

Click the **Database** tab. The editor opens on the **World** category, with nothing in it yet. Use the drop-down at the top left to move between the categories. The [editor tour](/getting-started/editor-tour) explains them.

## What happens when you press Play

Press **Play** (**F5**) right away and the game starts, then stops with a message like this in Godot's *Output* panel:

```
No starting map found (id 5754345). Create a world in the editor (World > Worlds) and
set it as the Starting Map in Game Settings > Gameplay Config.
```

This is expected. The toolkit starts every new game in a *starting map*, and a new project does not have a world yet. Once you have created a world and chosen it as the starting map, the game starts at its main menu.

## Next

1. [The editor at a glance](/getting-started/editor-tour) shows how the editors are organised.
2. The [Guide](/guide/) has a chapter for each part of the editor, including the world editor and the Game Settings you need to choose a starting map.

## Turning the plugin off

Disabling the plugin removes the **Database** tab. It leaves what it added (the main scene, input actions, audio buses and your `src/data/` content) in place, so it never breaks a project. Remove those by hand if you no longer want them.
