# Sky config

The **Sky** tab (**World > Sky**) sets the sky: a stylised shader that blends between day, dusk and night, **shown by a sky driver**. Leave the **Driver** empty for the stylized sky of the toolkit, or give a panorama driver (a picture for the day and one for the night), a procedural sky, or a driver of your own for your own shader: see [Your own sky](/basic/world/your-own-sky). It is one of the five [world configs](/basic/world/world-configs). A [weather](/basic/world/weather#the-sky-and-the-light) can darken, tint and cloud over the sky it shows.

## The tab

The tab is one container, **Sky Configuration**, with the **Config** drop-down and **Create New**, and a container for each group. The tab shows the containers that apply: with the background set to a flat colour only the colour is shown; a driver that does not use the clouds, the astro and the stars hides those containers.

| Container | What it sets |
|---|---|
| **Sky Driver** | What shows the sky (empty = the stylized sky): see [Your own sky](/basic/world/your-own-sky) |
| **Background** | The background mode (sky or a flat colour), the colour, and a brightness multiplier |
| **Time of Day** | The seconds a change between day, dusk and night takes. The sky changes at the hours the [Sun config](/basic/world/sun-config) says the sun rises and sets (half an hour before to half an hour after): the sky has no hours of its own |
| **Sky Colors - Day**, **Sky Colors - Night**, **Sky Colors - Dusk** | The top colour, the horizon colour and the colour of the sun's glow, for each |
| **Cloud Settings** | The colour and density of clouds by day, night and dusk; the quality of the clouds (samples, shadow samples); scale, edge smoothness and shadow strength |
| **High Clouds** | The density of a second, higher layer (`0` = none) |
| **Astro** | The tint, scale and brightness of the sun and moon discs |
| **Star Settings** | How many stars show by day, night and twilight |
| **Shooting Star Settings** | How many shooting stars by day and night, and their tint |

Cloud samples cost performance: fewer samples is cheaper and a bit noisier.

The colours of the day, dusk and night are used by every driver. The groups that only the stylized sky uses (clouds, astro, stars) are hidden for a driver that does not use them.

## See also

- [Your own sky](/basic/world/your-own-sky): drivers, panoramas and your own shader.
- [Sun config](/basic/world/sun-config): the hours the sky changes at.
- [World configs](/basic/world/world-configs#changing-a-look-over-time): how a sky changes over time, and how to see it in the editor.
