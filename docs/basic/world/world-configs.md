# World Configs

A **world config** sets how a world *looks* and how its *clock* runs. There are four kinds, and each is a resource you can make as many of as you like:

| Config | What it controls |
|---|---|
| **Time** | How long a game day lasts, how fast time runs, what time it is at the start |
| **Sun** | The directional light: its colour, strength and angle through the day |
| **Sky** | The sky shader: colours of day, dusk and night, clouds, stars, the sun and moon discs |
| **Environment** | The Godot `Environment`: tonemap, fog, volumetric fog, ambient light, wind |

**World > World Configs** shows the four side by side. Each has a **Config** drop-down (pick which one to edit), **Create New** (name it, and a new one starts with the default values), and the fields of the selected config. Changes are saved as you make them.

The project starts with one of each, called *Default*. Every world uses them unless the world says otherwise (see [Worlds](/basic/world/worlds#config-overrides)). A good project has the defaults set up for the normal world, and a few extra configs for the places that are different: a cave without sun, a swamp with thick fog, a dream where time runs ten times faster.

## Time

| Field | What it does | Default |
|---|---|---|
| **Day length seconds** | Real seconds for a whole game day. `86400` is real time; `1440` makes a game hour last one real minute; `3600` makes a day last an hour | `86400` |
| **Time multiplier** | Speeds time up or slows it down. `2` is twice as fast, `0` freezes the clock | `1` |
| **Starting time** | The hour of the day (0 to 24) when a new game starts, or when the party enters a world that uses a *different* time config | `8` |

The game clock **keeps running between worlds**. Going through a door does not set the time back to the starting time; only a new game does. A world with its *own* time config moves the time of day to that config's starting time when you arrive (forwards: the game does not run time backwards, because [cooldowns](/basic/keywords#cooldown) and timed worlds count on it), and uses its day length and speed while you are there.

## Sun

The sun is a directional light that follows the clock.

| Field | What it does | Default |
|---|---|---|
| **Day night cycle** | On: the sun moves and changes with the time. Off: a static sun | on |

**With the cycle off (Static Sun):** a fixed **rotation**, **light energy** and **light color**.

**With the cycle on:**

| Group | Fields |
|---|---|
| **Day Night Timing** | The hour the sun **rises** (`6`) and **sets** (`20.5`) |
| **Rotation** | The angle of the sun at noon (`-45`) and at midnight (`45`) |
| **Light Intensity** | The **maximum** energy at noon, the **minimum** at night, the energy at **dawn and dusk** |
| **Light Colors** | The colours of day, dawn, dusk and night light |

**DirectionalLight3D Settings** (always): **Sky mode** (does the sun light the sky, the scene, or both), **Angular distance** (the size of the sun: bigger means softer shadows), **Light indirect energy** and **Light volumetric fog energy**.

## Sky

The sky is a stylised shader that blends between day, dusk and night.

| Group | What it sets |
|---|---|
| **Background** | The background mode (sky or a flat colour), the colour, and a brightness multiplier |
| **Time of Day** | When sunrise and sunset begin, and the seconds a change between them takes |
| **Sky Colors: Day, Night, Dusk** | The top colour, the horizon colour and the colour of the sun's glow, for each |
| **Cloud Settings** | The colour and density of clouds by day, night and dusk; the quality of the clouds (samples, shadow samples); scale, edge smoothness and shadow strength |
| **High Clouds** | The density of a second, higher layer (`0` = none) |
| **Astro** | The tint, scale and brightness of the sun and moon discs |
| **Star Settings** | How many stars show by day, night and twilight |
| **Shooting Star Settings** | How many shooting stars by day and night, and their tint |

Cloud samples cost performance: fewer samples is cheaper and a bit noisier.

## Environment

These are the *artistic* settings of the scene's environment. The costly rendering options (ambient occlusion, global illumination, reflections, glow) belong to the player's graphics settings, not here.

| Group | What it sets |
|---|---|
| **Tonemap** | The algorithm (Filmic by default) and the exposure |
| **Wind** | The direction and strength of the wind, for things that sway |
| **Fog Settings** | On/off, the mode, colour, density, how much it blends with the sky, how much it hides the sky, and sun scatter ("god rays") |
| **Volumetric Fog Settings** | A costlier, more realistic fog: density, colour, emission, light scattering direction, its length, and how much global light and ambient light go into it. Off by default |
| **Ambient Light** | Where ambient light comes from (the sky, a colour, or none), its colour and brightness, and how much the sky contributes |

## See also

- [Worlds](/basic/world/worlds) to choose configs for a world, [Gameplay Config](/basic/game-settings/gameplay-config) for the fog of war.
