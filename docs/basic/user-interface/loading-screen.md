# Loading Screen

The **loading screen** covers the game while a scene loads: when the game starts, when the player presses Play, Continue or Load, and when they walk through a door to another map. It shows a background, a progress bar, a percentage and the name of the step that is running.

| | |
|---|---|
| **Set in** | [UI Settings](/basic/game-settings/ui-settings#ui-scene-paths) > *Ui scene loading screen* |
| **Root class** | [`LoadingScreen`](/advanced/user-interface/scenes/loading-screen) |
| **Template** | `ui_scenes/loading_screen/loading_screen_template.tscn` |
| **Made** | Once, when the game starts. It is hidden until a load begins |

## What the scene must contain

The script finds its parts by **unique name** (the `%Name` of a node in the scene tree). Keep these four, in any layout you like:

| Unique name | Node | What it shows |
|---|---|---|
| `BackgroundTexture` | `TextureRect` | The picture behind the loading bar |
| `LoadingBar` | `ProgressBar` | The overall progress, 0 to 100 |
| `PercentageLabel` | `Label` | The same as a number: `64%` |
| `StepLabel` | `Label` | What is being done now: `UI Setup`, `Spawning entities` ... |

Everything else (frames, a logo, tips, an animation) is yours. To change the background, set the texture of `BackgroundTexture`; there is nothing else to configure.

## How it is driven

The game tells the loading screen how many **steps** a load has, and each step reports when it is done. The bar moves smoothly to the next share (100 divided by the number of steps), and the **step name** is shown as the step completes. A step that loads a scene also reports its progress from 0 to 1 while it runs.

| Load | Steps |
|---|---|
| A new game, Continue or Load | Every system that is set up: the world, the party, the interface, the audio ... |
| A map change (a door, a teleport) | A shorter list of six steps |

You never have to call this yourself. If you make your own loading screen, keep the class and the four names and the game does the rest. When the load is finished the screen holds for a moment, fades, and emits `loading_finished`.

## The splash screen

Before the main menu the game plays a **splash screen**: the sequence of logos (the engine, then your company) as an animation, with the *pause menu* key to skip it. It is a scene of its own (`ui_scenes/splash_screen/splash_screen_template.tscn`, a [`SplashScreen`](/advanced/user-interface/scenes/splash-screen)) that is part of the game's **host scene**, not one of the scenes in UI Settings. Change it by editing the animation named `Splash` of that scene. While the splash plays the main menu is loaded behind it.

## See also

- [Main Menu](/basic/user-interface/main-menu)
- [How the loading is done](/advanced/managers/game-host/transition-manager) (the transition manager)
