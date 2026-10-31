# Environment config

The **Environment** tab (**World > Environment**) sets the **mood** of a place: how bright and what colour the sun is, the tonemap, fog, ambient light, wind, glow, the camera and the colour grade. These are the *artistic* settings of the scene's environment. The costly rendering options (ambient occlusion, global illumination, reflections, glow) belong to the player's graphics settings, not here. It is one of the five [world configs](/basic/world/world-configs), and the one a [zone](/basic/world/zones#a-look-for-each-zone) or an event usually changes. A [weather](/basic/world/weather#the-sky-and-the-light) lays its fog, light and sun changes on top of it.

## The tab

The tab is one container, **Environment Configuration**, with the **Config** drop-down and **Create New**, and a container for each group. Settings that do not apply are hidden: the fog fields when fog is off, the sun fields when there is no sun, the camera fields of what is switched off.

| Container | What it sets |
|---|---|
| **Tonemap** | The algorithm (Filmic by default), the exposure, and **Tonemap white** (the brightness shown as pure white: higher = a flatter, less burnt picture) |
| **Sky** | **Sky rotation degrees**: turns the whole sky (clouds, stars, colours) around. The sun is not moved: its direction is in the [Sun config](/basic/world/sun-config) |
| **Wind** | The wind of the world: the direction it blows towards on the ground and how strong it is (0 still, 1 a breeze, 2 a storm; a new config has 0.35). Plants sway with it and your own shaders read it: see [Shader globals](/basic/world/shader-globals#the-wind). A weather with its own wind takes its place while it lasts |
| **Fog Settings** | On/off, the mode, colour, density, how much it blends with the sky, how much it hides the sky (**Sky affect**: `1` hides the sky completely, the default is `0.2`), a low-lying mist (**Height**, **Height density**), and sun scatter ("god rays") |
| **Volumetric Fog Settings** | A costlier, more realistic fog: density, colour, emission, light scattering direction, its length, and how much global light and ambient light go into it. Off by default. The **config decides whether the world has volumetric fog**; the player's *Volumetric fog* video setting only turns it off or chooses how smooth it is (it never turns it on in a world that has none) |
| **Ambient Light** | Where ambient light comes from (the sky, a colour, or none), its colour and brightness, and how much the sky contributes |
| **Sun Light** | **Sun enabled** (untick it for an inside, a cave or a dungeon: no sunlight and no sun shadows at all; you light the place with light nodes and ambient light), and how bright the sun is: its **maximum** energy at noon, **minimum** at night and at **dawn and dusk** |
| **Sun Light Colors** | The colour of the sun at day, dawn, dusk and night |
| **Sun Light Properties** | **Sky mode** (does the sun light the sky, the scene or both), **Angular distance** (the size of the sun: bigger means softer shadows), **Indirect energy** and **Volumetric fog energy**. The *path* of the sun (when and where) is the [Sun config](/basic/world/sun-config) |
| **Static Sun Light** | The energy and colour of a sun that stays where it is (a Sun config with the day night cycle off) |
| **Glow and Occlusion** | **Glow amount** and **SSAO amount**: how much of the effect *this world* has (`1` normal, `0` none, up to `4`). The player's Glow and Ambient occlusion settings stay the **switch and the quality**: with `0` a world has none even when the player turned it on, and with `2` it glows twice as much for the player who has it on. A neon city wants more glow, a desert almost none |
| **Camera** | The camera of the world: **Exposure**, **Auto exposure** (the camera adapts to dark and bright places; speed and scale), and **depth of field** (**far** blur from a distance, **near** blur, and the amount). Off by default: depth of field and auto exposure change the whole feel of a game, so a developer opts in. The player has a **Depth of field** setting that turns the world's blur off |
| **Colour Grade** | The colours of this world: **Brightness**, **Contrast**, **Saturation**, a **Tint** and its amount, and a **LUT** (below). All of it is baked into **one colour lookup table** that the renderer applies while it tonemaps, so a grade costs nothing. The player's own Brightness, Contrast and Saturation are applied first and the grade after them |
| **By the Hour** | Settings that follow the time of day, each a line whose left end is 0:00 and right end 24:00: **Fog color by hour** and **Ambient color by hour** (a *Gradient*: dark blue at night, warm at dusk), **Tint by hour** for the grade, and **Fog density by hour**, **Ambient energy by hour** and **Exposure by hour** (a *Curve*: the number the setting is multiplied with; open the curve and raise its **Max Value** above `1` to go above the setting). Empty = all day as the setting says. They follow the clock of the game (the Debugger follows its time slider). A sun that stays where it is keeps its day |

::: tip A sky you cannot see
The **Fog** of a new Environment config has **Sky affect** at `0.2`, so the sky stays visible and the fog is mostly down by the horizon. At `1` fog fully hides the sky and it shows as one flat colour, whatever the hour. For a mist that lies low (in valleys, on the ground) use **Height** and **Height density**: everything under Height gets foggier the lower it is, at any distance. `0.02` is a light haze, `0.1` is thick. Height is a world height in metres, so it suits flat or gently rolling maps; it is off by default (Height density `0`).
:::

## The colour grade and the LUT

A **LUT** (colour lookup table) is a small picture that says what each colour becomes: any look a colourist can make (a sepia flashback, teal and orange, a cold dungeon) in one file.

1. Open `addons/chroniclenode/assets/color_grading/neutral_lut_16.png` (a strip of 16 squares of 16 by 16: every colour comes out as it went in).
2. Put a screenshot of your game in an image editor (Krita, GIMP, Photoshop), put the neutral strip next to it in the same image, and grade the whole image (curves, colour balance, hue and saturation).
3. Cut the strip out again and save it as a picture. It must still be a strip of N squares of N by N (256 x 16 for 16 squares).
4. Give it to **Colour Grade > Grade lut** of the Environment config. **Grade lut strength** (`0` to `1`) mixes it with the original.

The grade of the numbers is applied after the LUT. When a world has no grade at all there is no table and no cost. Free LUT packs for other engines work as they are if they are saved as a horizontal strip.

## Colour blindness

The player's **Colour-blind mode** (Protanopia, Deuteranopia, Tritanopia, with a strength) is baked into the **same** table: one lookup, no extra cost. It corrects the colours **of the world**. The interface colours are the [Accessibility settings](/basic/game-settings/settings#ui). In the Environment Debugger bar, **Colour blindness** shows the world **as a person with that condition sees it**, so you can check that what matters (enemies, loot, water, danger) can still be told apart; it is only for you, the game shows what the player chose.

## See also

- [World configs](/basic/world/world-configs#changing-a-look-over-time): how an environment changes over time, and how to see it in the editor.
- [Camera effects](/basic/world/camera-effects) for exposure, depth of field and the colour grade of a world.
