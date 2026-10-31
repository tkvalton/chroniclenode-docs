# Weather

A **weather** is a resource of the project, like a sky or an environment: it says what falls from the sky, how the wind blows and what the weather does to the **ground**. Rain, snow, a sandstorm, a rain of embers, a magic frost and a fog that turns the ground green are all the same thing with other numbers. You make as many as you like in **World > World Configs > Weather**.

::: tip Weather comes in steps
This page is what exists now: the weather as a resource, its wind, the **ground** (wet, tinted, covered with snow, sand, ash or anything else) and the **sky, fog and light**. What is still to come, in the order we build it: a screen look for the camera, buildings that keep the rain out, sounds and music for weather, and effects the weather gives to those who stand in it.
:::

## Making a weather

Open **World > World Configs** and find **Weather Configuration**. Pick one in the **Config** list or **Create New** (name it). The project starts with one called **Clear**: nothing falls and the ground stays as it is.

| Group | Field | What it does | Default |
|---|---|---|---|
| **Look** | **Weather vfx name** | The particles that fall around the camera: the name of a *Weather* effect of the [VFX library](/basic/assets/vfx) (Rain, Snow ...). Empty = nothing falls, a weather that only changes the ground, the sky or the fog | empty |
| | **Fade seconds** | How long the sky, the fog, the light and the wind take to change into this weather, and back to the look of the world when it ends | 10 |
| **Wind** | **Uses own wind** | Does this weather blow a wind of its own? Off = the wind of the [environment](/basic/world/world-configs#environment) goes on. The next two fields show only when it is on | off |
| | **Wind direction**, **Wind intensity** | Where the wind blows (on the ground) and how strongly: the plants bend by it, and it takes the place of the wind of the environment while the weather lasts. It blows whether or not particles fall | east, 0.5 |
| **Ground Wetness** | **Ground wetness** | How wet the weather makes the ground in the end: 0 dry, 1 soaked | 0 |
| | **Wet tint**, **Wet tint amount** | A colour wet ground is multiplied with, and how much of it shows when it is soaked: a blue-grey for rain, dark red for a rain of blood, green for acid. 0 = the ground only gets darker and shinier as its textures say | none |
| **Ground Cover** | **Cover amount** | How much of the ground the weather covers in the end: 0 none, 1 covered | 0 |
| | **Cover color** | The colour of the cover: white for snow, tan for sand, grey for ash | snow white |
| | **Cover sticks on** | **Flat ground** (snow: the slopes stay bare), **Most ground** (sand, ash: gentle slopes get it too) or **Everywhere** (a thick dust, a magic frost: even steep ground) | flat ground |
| | **Cover roughness** | How shiny the cover is: 0 a mirror, 1 matte (wet snow and ice shine more than dust) | 0.6 |

The tint and the cover fields show only when the weather wets the ground or covers it.

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

::: tip A sky of your own
The sky modifiers act on the parameters of the stylized sky of the toolkit. A panorama or procedural sky, or a [sky of your own](/basic/world/world-configs), keeps its colours; fog, ambient light and the sun still follow the weather there.
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

## The weathers that come with the toolkit

Five weathers are made for the five [weather effects](/basic/assets/vfx#the-weather-effects-that-come-with-the-toolkit): **Rain**, **Thunderstorm**, **Wind and leaves**, **Snow** and **Blizzard**. Each has its particles, wind, ground (wet, or covered with snow), a darker sky, a dimmer sun and thicker fog already set. Change them or make your own from one.

## Using a weather

- **The weather of a world**: **Worlds > Weather**, the list *Default weather*. It starts when the party enters the world. **Clear** is no weather.
- **An event changes it**: the [Set Weather](/basic/events-and-quests/event-actions) action takes a weather and a transition time. The default weather of the world is not changed by it: the next visit starts with the default again.
- **Old worlds**: a world that had a weather chosen in the old way (a weather effect picked by hand) gets a weather made from it the first time you open it in the Worlds editor. The numbers the old rules gave from the name (rain wets 0.85, a blizzard covers 1) become the values, and you can change them.

## What is next to know

- The sky and the fog follow the weather through the same layer the zones and events use, so **Set Environment Config** and **Set Sky Config** events still work during a storm.
- The terrain shader reads the look of the weather from [shader globals](/basic/world/shader-globals) (`terrain_cover_color`, `terrain_cover_stick`, `terrain_wet_tint`), so your own ground shader can too.
- A [zone](/basic/world/zones) can still keep the weather off the ground (a cave) or give it more: *Rain reaches* and *Snow reaches* scale the wetness and the **cover** whatever it is made of.
