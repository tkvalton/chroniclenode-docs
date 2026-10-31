# Weather

A **weather** is a resource of the project, like a sky or an environment: it says what falls from the sky, how the wind blows and what the weather does to the **ground**. Rain, snow, a sandstorm, a rain of embers, a magic frost and a fog that turns the ground green are all the same thing with other numbers. You make as many as you like in **World > World Configs > Weather**.

::: tip Weather comes in steps
This page is what exists now: the weather as a resource, the wind, and the **ground** (wet, tinted, covered with snow, sand, ash or anything else). What is still to come, in the order we build it: weather that changes the sky, fog and light, a screen look for the camera, buildings that keep the rain out, sounds and music for weather, and effects the weather gives to those who stand in it.
:::

## Making a weather

Open **World > World Configs** and find **Weather Configuration**. Pick one in the **Config** list or **Create New** (name it). The project starts with one called **Clear**: nothing falls and the ground stays as it is.

| Group | Field | What it does | Default |
|---|---|---|---|
| **Look** | **Weather vfx name** | The particles that fall around the camera: the name of a *Weather* effect of the [VFX library](/basic/assets/vfx) (Rain, Snow ...). Empty = nothing falls, a weather that only changes the ground | empty |
| **Wind** | **Wind direction**, **Wind intensity** | Where the wind blows (on the ground) and how strongly: the plants bend by it, and it takes the place of the wind of the [environment](/basic/world/world-configs#environment) while the weather lasts | east, 0.5 |
| **Ground Wetness** | **Ground wetness** | How wet the weather makes the ground in the end: 0 dry, 1 soaked | 0 |
| | **Wet tint**, **Wet tint amount** | A colour wet ground is multiplied with, and how much of it shows when it is soaked: a blue-grey for rain, dark red for a rain of blood, green for acid. 0 = the ground only gets darker and shinier as its textures say | none |
| **Ground Cover** | **Cover amount** | How much of the ground the weather covers in the end: 0 none, 1 covered | 0 |
| | **Cover color** | The colour of the cover: white for snow, tan for sand, grey for ash | snow white |
| | **Cover sticks on** | **Flat ground** (snow: the slopes stay bare), **Most ground** (sand, ash: gentle slopes get it too) or **Everywhere** (a thick dust, a magic frost: even steep ground) | flat ground |
| | **Cover roughness** | How shiny the cover is: 0 a mirror, 1 matte (wet snow and ice shine more than dust) | 0.6 |

The tint and the cover fields show only when the weather wets the ground or covers it.

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

## Using a weather

- **The weather of a world**: **Worlds > Weather**, the list *Default weather*. It starts when the party enters the world. **Clear** is no weather.
- **An event changes it**: the [Set Weather](/basic/events-and-quests/event-actions) action takes a weather and a transition time. The default weather of the world is not changed by it: the next visit starts with the default again.
- **Old worlds**: a world that had a weather chosen in the old way (a weather effect picked by hand) gets a weather made from it the first time you open it in the Worlds editor. The numbers the old rules gave from the name (rain wets 0.85, a blizzard covers 1) become the values, and you can change them.

## What is next to know

- The terrain shader reads the look of the weather from [shader globals](/basic/world/shader-globals) (`terrain_cover_color`, `terrain_cover_stick`, `terrain_wet_tint`), so your own ground shader can too.
- A [zone](/basic/world/zones) can still keep the weather off the ground (a cave) or give it more: *Rain reaches* and *Snow reaches* scale the wetness and the **cover** whatever it is made of.
