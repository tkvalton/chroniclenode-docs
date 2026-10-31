# World Configs

A **world config** sets how a world *looks* and how its *clock* runs. There are five kinds, and each is a resource you can make as many of as you like. **Each has a tab of its own in the World group of the editor** and a page here:

| Tab | Config | What it controls |
|---|---|---|
| **World > Time** | [Time](/basic/world/time-config) | How long a game day lasts, how fast time runs, what time it is at the start |
| **World > Sun** | [Sun](/basic/world/sun-config) | The **path** of the sun: where it stands and when it rises and sets, one per world |
| **World > Sky** | [Sky](/basic/world/sky-config) | The sky shader: colours of day, dusk and night, clouds, stars, the sun and moon discs |
| **World > Environment** | [Environment](/basic/world/environment-config) | The **mood** of a place: how bright and what colour the sun is, tonemap, fog, ambient light, wind, glow, the camera and the colour grade |
| **World > Weather** | [Weather](/basic/world/weather) | What falls, the wind of the weather, what it does to the ground (wet, tinted, covered with snow, sand or ash) and how it darkens the sky, thickens the fog and dims the sun |

## The tabs

The Time, Sun, Sky and Environment tabs look the same. Each is one container titled with the kind of config (**Sun Configuration**); in it a **Config** drop-down (pick which one to edit), **Create New** (name it, and a new one starts with the default values), and **a container for each group of settings**, titled with the name of the group (the Sun has **Day Night Cycle**, **Static Sun**, **Day Night Timing** and **Sun Direction**). A group can be folded; the tab remembers which are. Settings that do not apply are hidden: a sun with a day night cycle has no **Static Sun** container. Changes are saved as you make them.

The [Weather tab](/basic/world/weather#the-weather-tab) is larger: a list of weathers, a live preview and warnings.

The project starts with one of each, called *Default* (the weather is called *Clear*). Every world uses them unless the world says otherwise (see [Worlds](/basic/world/worlds#config-overrides)). A good project has the defaults set up for the normal world, and a few extra configs for the places that are different: a cave without sun, a swamp with thick fog, a dream where time runs ten times faster, a storm.

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

How the clock runs: the day length, the speed and the starting time. See [Time config](/basic/world/time-config).

## Sun

The path of the sun: the hours it rises and sets and the direction it crosses the sky (or a sun that stays where it is). How the sun *looks* is part of the environment. See [Sun config](/basic/world/sun-config).

## Sky

The sky shader and its driver: colours, clouds, stars, the sun and moon discs. See [Sky config](/basic/world/sky-config).

## Environment

The mood: tonemap, fog, ambient light, wind, the look of the sun, glow, the camera and the colour grade. See [Environment config](/basic/world/environment-config).

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
- [Weather](/basic/world/weather) for what falls from the sky.
