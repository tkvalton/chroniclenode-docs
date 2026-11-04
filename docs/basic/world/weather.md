# Weather

A **weather** is a resource of the project, like a sky or an environment: it says what falls from the sky, how the wind blows and what the weather does to the **ground**. Rain, snow, a sandstorm, a rain of embers, a magic frost and a fog that turns the ground green are all the same thing with other numbers. You make as many as you like in **World > World Configs > Weather**.

::: tip Everything the weather does
A weather changes **what falls**, the **wind**, the **ground**, the **sky, fog and light**, the **screen** (a tint, dark corners, blur), the **sound** (music and an ambient sound of its own, and the kinds of sound a [shelter](/basic/world/shelter) answers to) and gives **effects** to those who stand in it. A [shelter](/basic/world/shelter) keeps part of it off.
:::

## The Weather tab

**World > Weather** is the editor of the weathers. It has three parts side by side:

| Part | What it is |
|---|---|
| **Weathers** (left) | The list of the weathers of the project, with a filter box. **New** makes one (name it); right-click an entry for **Duplicate** (a quick way to make *Light rain* from *Rain*), **Delete** and **Copy Path**. The built-in **Clear** is always there and cannot be deleted |
| **Settings** (middle) | A container for each group of the settings of the weather: **Details** (name, id and a note), **Look**, **Wind**, **Ground Wetness**, **Ground Cover**, **Sky and Light**, **Fog**, **Screen**, **Sound**, and **Exposed Effects** (a list). Changes are saved as you make them. A group can be folded. Settings that do not apply are hidden (no wet tint on a dry weather, no wind fields without a wind of its own) |
| **Preview** and **Warnings** (right) | See below |

### Preview

The preview shows the weather in a small world of its own (a ground, a hut with a roof, trees, rocks and a pole) with the **default sky, sun and environment** of the project, **made by the same code as the game**. You see its particles, the sky it darkens or tints, the fog it thickens, the sun it dims, the wind it blows (the pole and the particles lean) and a ground that gets wet and covered. Two sliders:

| Control | What it does |
|---|---|
| **Intensity** | Shows the weather at that intensity (0 to 1): a light rain, a downpour. This is a *preview*; the intensity saved with the weather is the **Intensity** field of its **Look** container |
| **Time of day** | The hour: see the storm at noon and at dusk |
| **Fade in** | Starts from a clear sky and brings the weather in over its **Fade seconds**, to see how it arrives |

Nothing in the preview is saved. When you leave the tab the wind goes back to the world's.

### Warnings

The **Warnings** container lists what is probably a mistake, as you edit:

- the weather effect is not in the VFX library (a typo, or a deleted scene): nothing would fall;
- the intensity is 0 (the weather does nothing);
- a wet tint on a weather that leaves the ground dry; black ground cover or a black sky tint;
- a wind of its own with no strength; fog added with a fog multiplier of 0;
- an exposed effect with no effect chosen, or an effect that is not in the project; a **Held** effect that has a duration (it runs out by itself) or a **Refreshed** one that has none (it never runs out);
- a music or ambient track that is not in the project.

It says *No warnings.* when all is well.

### The effect (particles)

The **Weather effect** of the **Look** container is a **drop-down of the Weather effects of the [VFX library](/basic/assets/vfx#the-weather-effects-that-come-with-the-toolkit)** (the scenes in `src/data/vfx/weather/`), with *(no particles)* for a weather that only changes the ground or the sky. The library is read again each time you open the tab, so a scene you just made shows up. A name that is no longer in the library stays chosen and reads *Missing: name*, so nothing is lost by opening the weather.

### Exposed effects

The **Exposed Effects** container is a **list**: each entry is an effect of the project, **how** the weather gives it (**Held**: given while the entity is in the weather and taken away when it is not; **Refreshed**: applied again every *interval* seconds, so its duration keeps renewing and it runs out by itself after the weather) and **who** gets it (the **party**, or **every entity**). **Add an exposed effect** adds an entry; each has **Move up**, **Move down** and **Remove**.

The game looks at who is out in the weather **twice a second**. An entity is **exposed** when it is alive and **not under a [shelter](/basic/world/shelter) that stops effects**. The weather must be on (an intensity above 0).

| Mode | While exposed | When sheltered, or the weather ends or changes into one without the effect |
|---|---|---|
| **Held** | Given **once** and kept (a burn while the embers fall). It is never given twice, and one the entity already has from somewhere else is left alone | Taken away at once |
| **Refreshed** | Given again every *interval* seconds: an effect the entity has **gets its duration renewed** (no second stack); one it does not have is given | Nothing renews it: it **runs out by itself** after its duration |

Give a **Refreshed** effect a duration (a Wet debuff of a minute) and a **Held** effect none (a burn lasts as long as you stand in the embers): the warnings tell you when it is the other way. An effect that ended by itself while held is not given again until the entity has left the weather and come back. It works for the effects of the project like any other (stat changes, damage over time ...).

The effects come from the environment, not from a character, so a kill by a burn has no killer. Each effect instance remembers the weather it came from.

## Making a weather

Open **World > Weather**, pick a weather in the list or press **New** (name it). The project starts with one called **Clear**: nothing falls and the ground stays as it is.

| Group | Field | What it does | Default |
|---|---|---|---|
| **Look** | **Weather effect** | The particles that fall around the camera: the name of a *Weather* effect of the [VFX library](/basic/assets/vfx) (Rain, Snow ...). Empty = nothing falls, a weather that only changes the ground, the sky or the fog | empty |
| | **Intensity** | How strong the weather is, 0 to 1: see [Intensity](#intensity) | 1 |
| | **Fade seconds** | How long the sky, the fog, the light and the wind take to change into this weather, and back to the look of the world when it ends | 10 |
| **Wind** | **Uses own wind** | Does this weather blow a wind of its own? Off = the wind of the [environment](/basic/world/environment-config) goes on. The next two fields show only when it is on | off |
| | **Wind direction**, **Wind intensity** | Where the wind blows (on the ground) and how strongly: the plants bend by it, and it takes the place of the wind of the environment while the weather lasts. It blows whether or not particles fall | east, 0.5 |
| **Ground Wetness** | **Ground wetness** | How wet the weather makes the ground in the end: 0 dry, 1 soaked | 0 |
| | **Wet tint**, **Wet tint amount** | A colour wet ground is multiplied with, and how much of it shows when it is soaked: a blue-grey for rain, dark red for a rain of blood, green for acid. 0 = the ground only gets darker and shinier as its textures say | none |
| **Ground Cover** | **Cover amount** | How much of the ground the weather covers in the end: 0 none, 1 covered | 0 |
| | **Cover color** | The colour of the cover: white for snow, tan for sand, grey for ash | snow white |
| | **Cover sticks on** | **Flat ground** (snow: the slopes stay bare), **Most ground** (sand, ash: gentle slopes get it too) or **Everywhere** (a thick dust, a magic frost: even steep ground) | flat ground |
| | **Cover roughness** | How shiny the cover is: 0 a mirror, 1 matte (wet snow and ice shine more than dust) | 0.6 |

The tint and the cover fields show only when the weather wets the ground or covers it.

### The screen

The **Screen** container gives the weather a **look for the camera**, laid over the picture like the screen look of a [zone](/basic/world/zones) or an event: a grey-blue wash and dark corners for a storm, blur for a blizzard. It is a layer of the [camera look](/basic/world/camera-effects) between a zone's (under) and an effect's or an event's (over), so a zone's mood and the weather add up and a poison effect still wins. It comes in over the **Fade seconds** of the weather, scaled by the **intensity**.

| Field | What it does | Default |
|---|---|---|
| **Screen tint** | The colour laid over the picture; its alpha is how strong (0 = none) | none |
| **Screen vignette**, **Screen vignette color** | How dark the corners are (0 to 1), and their colour | 0, black |
| **Screen blur** | How blurred the whole picture is (0 to 1) | 0 |
| **Screen desaturate** | How much colour goes (1 = black and white) | 0 |
| **Screen aberration** | Colour fringes towards the edges (0 to 1) | 0 |
| **Screen grain** | Film grain (0 to 1) | 0 |

A [shelter](/basic/world/shelter) weakens the whole look for the camera by its amount: inside a full shelter the weather shows nothing on the screen. The preview of the tab shows the screen look too. The player's own screen effects setting (Reduced, Off) still applies to it.

### Sound

The **Sound** container is about what the weather *sounds* like. It has four settings:

| Field | What it does | Default |
|---|---|---|
| **Kinds of sound** | The kinds of sound this weather makes, in order, separated by commas: `rain`; for sleet `rain, snow`. A [shelter](/basic/world/shelter#the-sound-for-each-kind-of-weather) has a track for a kind of weather (the rain on its roof) and plays the track of the **first** kind it has a line for | empty |
| **Music**, **Music volume** | The music of the weather: tracks of the [audio library](/basic/assets/audio): the **+** button opens the track window (music, with a preview) and adds the tracks you choose; a file outside the library can be typed, separated by semicolons; the **x** empties the list. Empty = the music of the zone and the world goes on | empty, 0 dB |
| **Ambient sound**, **Ambient volume** | The ambient sound of the weather (the rain itself, the wind). It is **quieter in a light weather**: half the intensity is 6 dB quieter | empty, 0 dB |

The tracks are the *weather layer* of the [sound layers](/basic/world/sound-layers): over the zone's sound, under a shelter's and an event's. They crossfade in over the fade seconds of the weather.
### The sky and the light

A weather does not bring a sky of its own: it is **laid on top of the look that is shown** (the sky and environment of the world, the zone or an event), so a storm over the swamp is the swamp made darker, and when the party walks into a cave zone the cave look comes with the storm still on it. Every field starts at the value that changes nothing.

| Group | Field | What it does | Default (no change) |
|---|---|---|---|
| **Sky and Light** | **More clouds** | The clouds of the sky come this far towards a full overcast (0 = the sky as it is, 1 = overcast). The stars and the glow of the sun are hidden by them. Only for a sky with clouds of its own (the stylized sky) | 0 |
| | **Sky darken** | How much darker the sky is: 0 as it is, 1 black | 0 |
| | **Sky tint amount**, **Sky tint** | How much of the sky colour is replaced by the colour: a green sky of acid rain, a yellow one of a sandstorm | 0 |
| | **Sun brightness** | How bright the sun is while the weather lasts (1 as it is, 0 no sunlight and no shadows) | 1 |
| | **Ambient brightness** | How bright the ambient light is (1 as it is, above 1 for a magic glow) | 1 |
| **Fog** | **Fog thicker** | The fog of the look is this many times as thick (4 = a thick fog) | 1 |
| | **Fog added** | Fog the weather adds even where the look has none, so a clear valley fills with mist (0.01 light, 0.05 thick) | 0 |
| | **Fog color amount**, **Fog color** | How much of the colour of the fog is replaced by the colour | 0 |

The weather **fades in** over its *Fade seconds*, starting from what is shown (even in the middle of another change) and it **fades out** the same way when another weather or a clear one takes over. A [Set Weather](/basic/events-and-quests/event-actions) event with a *transition time* uses that time instead. The clouds and the hour of the day still work under the weather: the sky goes on turning to dusk and night with the weather on it.

::: tip Every sky takes the weather
How a sky takes the weather is up to its **sky driver**, because only the driver knows what the parameters of its sky are called. The **stylized sky** takes all of it (colours, clouds, stars, the glow of the sun). The **procedural sky** and the **panorama sky** take the **tint and the darkening** (the clouds, stars and glow are the stylized sky's). A [sky of your own](/basic/world/your-own-sky) has three ways: write `apply_weather` in your driver to say which of its parameters the weather changes (`WeatherLook.apply_sky_colours` does the colours for you), read the globals `weather_sky` and `weather_sky_tint` in your sky shader (see [shader globals](/basic/world/shader-globals)), or do nothing and keep your sky as it is. The fog, the ambient light and the sun follow the weather with every sky.
:::

### Snow, sand and ash are the same thing

There is no snow built into the ground any more: the ground has a **cover**, and the weather says what it is made of.

| Weather | Cover amount | Cover color | Sticks on | Roughness |
|---|---|---|---|---|
| Snow | 0.9 | white | Flat ground | 0.6 |
| Sandstorm | 0.8 | tan | Most ground | 0.9 |
| Ash fall | 0.7 | dark grey | Most ground | 1 |
| Frost from a spell | 0.5 | pale blue | Everywhere | 0.3 |

Each [terrain texture](/basic/assets/terrain-textures#weather) still says **how much of the cover sticks to it** (the **Cover** field of the texture, once called *Snow cover*): a swept road or a roof takes none, whatever the weather covers the world with.

The ground goes to the amount the weather asks **over time**, at the speeds of the world (see [Ground weather](/basic/world/ground-weather)). When the weather changes and the new one covers the ground too, the cover takes the **new look** at once; when it covers nothing, what is left keeps its colour while it melts or dries.

## Intensity

A weather has an **Intensity** (0 to 1) and it scales **everything** the weather does:

- the **particles**: how many fall. Each layer of the [effect](/basic/assets/vfx#intensity) comes in over its own part of the range, so a Thunderstorm at 0.3 is thin rain and at 1 it has spray, murk and wind streaks too;
- the **ground**: how wet and how covered it ends up (a Rain of wetness 0.8 at intensity 0.5 wets the ground to 0.4);
- the **sky, fog and sun**: every change is that far from the look towards the weather (at 0.5 a storm darkens the sky half as much);
- the **wind**: its strength.

So **Light rain** is the Rain weather at 0.3, with no second weather to keep in step. The **Set Weather** event has its own **Intensity** (times the weather's), and the **Set Weather Intensity** event changes it **while the weather lasts**: the rain thins or comes down harder over the seconds you give, and the ground, the sky, the fog, the sun, the wind, the screen and the ambient sound all ease to the new level. A storm that builds up over a quest is that action again and again with a higher number. From a script: `WeatherSystem.set_intensity(scale, seconds)`.

## The weathers that come with the toolkit

Five weathers are made for the five [weather effects](/basic/assets/vfx#the-weather-effects-that-come-with-the-toolkit): **Rain**, **Thunderstorm**, **Wind and leaves**, **Snow** and **Blizzard**. Each has its particles, wind, ground (wet, or covered with snow), a darker sky, a dimmer sun, thicker fog, a look for the screen and its kinds of sound (`rain`, `rain, wind`, `wind`, `snow`, `snow, wind`) already set. They come with no tracks of their own: add your rain recording in the **Sound** container. Change them or make your own from one.

## Weather in places

The weather of a world is not always one weather. A [zone](/basic/world/zones#weather-for-each-zone) can have a weather of its own (snow on the mountain, a clear sky in the desert), and a world or a zone can have a [weather table](/basic/world/weather-tables) that picks a weather by weight and changes it when its time is up. The [Set Weather](/basic/events-and-quests/event-actions) action can set the weather for the whole world or only for the zone the party is in, and **Release Weather** gives it back to the zones and the world.

## Using a weather

- **The weather of a world**: **Worlds > Weather**, the list *Default weather*. It starts when the party enters the world. **Clear** is no weather.
- **A shelter keeps it off**: a [shelter volume](/basic/world/shelter) weakens it on the screen, plays the sound of the inside and stops its exposed effects.
- **An event changes it**: the [Set Weather](/basic/events-and-quests/event-actions) action takes a weather and a transition time. The default weather of the world is not changed by it: the next visit starts with the default again.
- **Old worlds**: a world that had a weather chosen in the old way (a weather effect picked by hand) gets a weather made from it the first time you open it in the Worlds editor. The numbers the old rules gave from the name (rain wets 0.85, a blizzard covers 1) become the values, and you can change them.

## What is next to know

- The sky and the fog follow the weather through the same layer the zones and events use, so **Set Environment Config** and **Set Sky Config** events still work during a storm.
- The terrain shader reads the look of the weather from [shader globals](/basic/world/shader-globals) (`terrain_cover_color`, `terrain_cover_stick`, `terrain_wet_tint`), so your own ground shader can too.
- A [zone](/basic/world/zones) can still keep the weather off the ground (a cave) or give it more: *Rain reaches* and *Snow reaches* scale the wetness and the **cover** whatever it is made of.
