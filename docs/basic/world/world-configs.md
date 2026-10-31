# World Configs

A **world config** sets how a world *looks* and how its *clock* runs. There are five kinds, and each is a resource you can make as many of as you like:

| Config | What it controls |
|---|---|
| **Time** | How long a game day lasts, how fast time runs, what time it is at the start |
| **Sun** | The **path** of the sun: where it stands and when it rises and sets, one per world |
| **Sky** | The sky shader: colours of day, dusk and night, clouds, stars, the sun and moon discs |
| **Environment** | The **mood** of a place: how bright and what colour the sun is, tonemap, fog, ambient light, wind, glow, the camera and the colour grade |
| **Weather** | What falls, the wind of the weather and what it does to the ground (wet, tinted, covered with snow, sand or ash): see [Weather](/basic/world/weather) |

**World > World Configs** shows the five side by side. Each has a **Config** drop-down (pick which one to edit), **Create New** (name it, and a new one starts with the default values), and the fields of the selected config. Changes are saved as you make them.

The project starts with one of each, called *Default*. Every world uses them unless the world says otherwise (see [Worlds](/basic/world/worlds#config-overrides)). A good project has the defaults set up for the normal world, and a few extra configs for the places that are different: a cave without sun, a swamp with thick fog, a dream where time runs ten times faster.

## See it in the editor

A world scene has no sun, sky or environment of its own: they belong to the game, so the 3D viewport shows Godot's own light, not what the game shows. The **Environment** button in the 3D toolbar (next to *Test World*, shown while a world scene is open) puts the sun, the sky and the environment of the world into the viewport, **made by the same code as the game**. They are temporary: nothing is added to your scene and nothing is saved with it. Press the button again, or **Close**, and Godot's own light is back.

A bar opens at the top of the viewport:

| Control | What it does |
|---|---|
| **Look at** | Shown when the world has zones: **The world**, or one of its [zones](/basic/world/zones#a-look-for-each-zone). A zone shows the sky and environment it has (its own, or the ones it takes from the zone above and the world). The sun path is always the world's |
| **Sun**, **Sky**, **Env** | Which config to look at. The first one shown is the world's own (its override, else the default), marked *(world)* in the list. Choose another to try it |
| **Time** | The hour of the day: the sun, the sky colours, the stars and the light follow it. **Play** lets the day go by (the speed is in hours of the game per second) |
| **Default video settings** | Shows it with the video settings of the project (the defaults you set in Game Settings): reflections, ambient occlusion, indirect light, glow, volumetric fog quality, brightness, contrast and saturation. Off: none of those |
| **Use for this world** | Makes the shown Sun, Sky and Environment the configs of this world (a config that is the default is stored as *no override*) and saves the world. With a zone chosen in **Look at** it reads **Use for this zone** and gives the zone the shown Sky and Environment (one that is the same as the zone would take anyway is stored as none) |
| **Colour blindness** | Shows the world as a person with that kind of colour blindness sees it (normal vision, no red, no green, no blue), to check that things can be told apart. Only a view for you: the game uses the player's own setting |
| **World's own** | Goes back to the configs the world has now |
| **World Configs** | Opens the editor of the configs. The preview **follows every change you make there** (each change is saved and the viewport shows it when you come back to it). **Refresh** only reads the lists again, for a config you just made |

The shadow size setting is not part of the preview: the shadow atlas belongs to the editor's own viewports.

::: tip A sky you cannot see
The **Fog** of a new Environment config has **Sky affect** at `0.2`, so the sky stays visible and the fog is mostly down by the horizon. At `1` fog fully hides the sky and it shows as one flat colour, whatever the hour. For a mist that lies low (in valleys, on the ground) use **Height** and **Height density**: everything under Height gets foggier the lower it is, at any distance. `0.02` is a light haze, `0.1` is thick. Height is a world height in metres, so it suits flat or gently rolling maps; it is off by default (Height density `0`).
:::

## Time

| Field | What it does | Default |
|---|---|---|
| **Day length seconds** | Real seconds for a whole game day. `86400` is real time; `1440` makes a game hour last one real minute; `3600` makes a day last an hour | `86400` |
| **Time multiplier** | Speeds time up or slows it down. `2` is twice as fast, `0` freezes the clock | `1` |
| **Starting time** | The hour of the day (0 to 24) when a new game starts, or when the party enters a world that uses a *different* time config | `8` |

The game clock **keeps running between worlds**. Going through a door does not set the time back to the starting time; only a new game does. A world with its *own* time config moves the time of day to that config's starting time when you arrive (forwards: the game does not run time backwards, because [cooldowns](/basic/keywords#cooldown) and timed worlds count on it), and uses its day length and speed while you are there.

## Sun

The sun config is the **path** of the sun: where it is in the sky and when. A planet has one sun that rises and sets the same way in every valley, so this is one config per world. **How the sun looks** (how bright, what colour, how soft its shadows are) is the mood of a place and lives in the [Environment config](#environment) (the **Sun Light** groups), so a zone or an event that changes the environment can dim or warm the sun **without moving it**.

| Field | What it does | Default |
|---|---|---|
| **Day night cycle** | On: the sun moves with the time. Off: a sun that stays where it is | on |
| **Static rotation** | With the cycle off: the height of the sun, `0` on the horizon, `-90` straight overhead | `-45` |
| **Sun rise hour**, **Sun set hour** | With the cycle on: the hour the sun rises and sets | `6`, `20.5` |
| **Sun heading** | The direction of the path, in degrees (also for a static sun). `90` (the default): the sun rises in the east (+X), is overhead at midday and sets in the west (-X), the way the maps are laid out. `0` is the old path: rising to the south (+Z), setting to the north (-Z). `180` and `270` are the opposite ones | `90` |

At night the same light runs the same arc: it is the moon.

## Sky

The sky is a stylised shader that blends between day, dusk and night, **shown by a sky driver**: leave the **Driver** empty for the stylized sky, or give a panorama driver (a picture for the day and one for the night), a procedural sky, or a driver of your own for your own shader: see [Your own sky](/basic/world/your-own-sky).

| Group | What it sets |
|---|---|
| **Sky Driver** | What shows the sky (empty = the stylized sky): see [Your own sky](/basic/world/your-own-sky) |
| **Background** | The background mode (sky or a flat colour), the colour, and a brightness multiplier |
| **Time of Day** | The seconds a change between day, dusk and night takes. The sky changes at the hours the **Sun config** says the sun rises and sets (half an hour before to half an hour after): the sky has no hours of its own |
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
| **Tonemap** | The algorithm (Filmic by default), the exposure, and **Tonemap white** (the brightness shown as pure white: higher = a flatter, less burnt picture) |
| **Sky** | **Sky rotation degrees**: turns the whole sky (clouds, stars, colours) around. The sun is not moved: its direction is in the Sun config |
| **Wind** | The wind of the world: the direction it blows towards on the ground and how strong it is (0 still, 1 a breeze, 2 a storm; a new config has 0.35). Plants sway with it and your own shaders read it: see [Shader globals](/basic/world/shader-globals#the-wind). A weather with its own wind takes its place while it lasts |
| **Fog Settings** | On/off, the mode, colour, density, how much it blends with the sky, how much it hides the sky (**Sky affect**: `1` hides the sky completely, the default is `0.2`), a low-lying mist (**Height**, **Height density**), and sun scatter ("god rays") |
| **Volumetric Fog Settings** | A costlier, more realistic fog: density, colour, emission, light scattering direction, its length, and how much global light and ambient light go into it. Off by default. The **config decides whether the world has volumetric fog**; the player's *Volumetric fog* video setting only turns it off or chooses how smooth it is (it never turns it on in a world that has none) |
| **Sun Light** | **Sun enabled** (untick it for an inside, a cave or a dungeon: no sunlight and no sun shadows at all; you light the place with light nodes and ambient light), and how the sun **looks** here: its **maximum** energy at noon, **minimum** at night and at **dawn and dusk**; its **colours** at day, dawn, dusk and night; **Sky mode** (does the sun light the sky, the scene or both), **Angular distance** (the size of the sun: bigger means softer shadows), **Indirect energy** and **Volumetric fog energy**; and the **Static Sun Light** (energy and colour of a sun that stays where it is). The *path* (when and where) is the Sun config |
| **Ambient Light** | Where ambient light comes from (the sky, a colour, or none), its colour and brightness, and how much the sky contributes |
| **Glow and Occlusion** | **Glow amount** and **SSAO amount**: how much of the effect *this world* has (`1` normal, `0` none, up to `4`). The player's Glow and Ambient occlusion settings stay the **switch and the quality**: with `0` a world has none even when the player turned it on, and with `2` it glows twice as much for the player who has it on. A neon city wants more glow, a desert almost none |
| **Camera** | The camera of the world: **Exposure**, **Auto exposure** (the camera adapts to dark and bright places; speed and scale), and **depth of field** (**far** blur from a distance, **near** blur, and the amount). Off by default: depth of field and auto exposure change the whole feel of a game, so a developer opts in. The player has a **Depth of field** setting that turns the world's blur off |
| **Colour Grade** | The colours of this world: **Brightness**, **Contrast**, **Saturation**, a **Tint** and its amount, and a **LUT** (below). All of it is baked into **one colour lookup table** that the renderer applies while it tonemaps, so a grade costs nothing. The player's own Brightness, Contrast and Saturation are applied first and the grade after them |
| **By the Hour** | Settings that follow the time of day, each a line whose left end is 0:00 and right end 24:00: **Fog color by hour** and **Ambient color by hour** (a *Gradient*: dark blue at night, warm at dusk), **Tint by hour** for the grade, and **Fog density by hour**, **Ambient energy by hour** and **Exposure by hour** (a *Curve*: the number the setting is multiplied with; open the curve and raise its **Max Value** above `1` to go above the setting). Empty = all day as the setting says. They follow the clock of the game (the Debugger follows its time slider). A sun that stays where it is keeps its day |

### The colour grade and the LUT

A **LUT** (colour lookup table) is a small picture that says what each colour becomes: any look a colourist can make (a sepia flashback, teal and orange, a cold dungeon) in one file.

1. Open `addons/chroniclenode/assets/color_grading/neutral_lut_16.png` (a strip of 16 squares of 16 by 16: every colour comes out as it went in).
2. Put a screenshot of your game in an image editor (Krita, GIMP, Photoshop), put the neutral strip next to it in the same image, and grade the whole image (curves, colour balance, hue and saturation).
3. Cut the strip out again and save it as a picture. It must still be a strip of N squares of N by N (256 x 16 for 16 squares).
4. Give it to **Colour Grade > Grade lut** of the Environment config. **Grade lut strength** (`0` to `1`) mixes it with the original.

The grade of the numbers is applied after the LUT. When a world has no grade at all there is no table and no cost. Free LUT packs for other engines work as they are if they are saved as a horizontal strip.

### Colour blindness

The player's **Colour-blind mode** (Protanopia, Deuteranopia, Tritanopia, with a strength) is baked into the **same** table: one lookup, no extra cost. It corrects the colours **of the world**. The interface colours are the [Accessibility settings](/basic/game-settings/settings#ui). In the Environment Debugger bar, **Colour blindness** shows the world **as a person with that condition sees it**, so you can check that what matters (enemies, loot, water, danger) can still be told apart; it is only for you, the game shows what the player chose.

## Changing a look over time

The **Set Environment Config** and **Set Sky Config** event actions have **Blend seconds**. With `0` the look changes at once, as it always did; with a time the new look **slides in**: walking into a swamp, a quest that turns the valley to winter, a spell that darkens the sky. The blend starts from the look that is **shown now**, even if another change is half way, so there is never a jump.

| What | How it changes |
|---|---|
| Numbers (fog density, brightness, exposure, glow amount, the colour grade numbers, wind), colours, directions | Slide from one to the other |
| Switches and lists of choices (fog on or off, the fog mode, the tonemapper) | Change at the **halfway point** |
| The **sun** | A look with a sun going to a look with none (or the other way) **fades** the sun through zero instead of switching it: it dims out, then is gone |
| The **LUT** of the colour grade | **Crossfades** between the two LUTs (or fades in from none) |
| The **sky** | Colours, clouds and stars slide. A change between a sky shader and a flat background colour switches at the halfway point: to blend smoothly give both looks a sky with the colours you want |
| The clock, the **path** of the sun, the music | Do not blend (a different path is a different world) |

The change ends exactly on the config you chose.

**How long it holds.** A look an event set holds until another event, the **Clear Environment Look** action, or the next world. **Hold seconds** on the Set actions ends it by itself after that long (the zone's look, or the world's, comes back over the blend seconds); `0` = until cleared. **Clear Environment Look** ends the sky, the environment, or both, over its own blend seconds. [Zones](/basic/world/zones#a-look-for-each-zone) use the same blend when the party walks into one.

## See also

- [Worlds](/basic/world/worlds) to choose configs for a world, [Gameplay Config](/basic/game-settings/gameplay-config) for the fog of war.
