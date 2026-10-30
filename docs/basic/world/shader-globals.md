# Shader globals

Godot has a place for numbers and pictures that **every shader** can read: **Project Settings > Globals > Shader Globals**. The toolkit uses it to give your own shaders the state of the world: how wet the ground is, which way the wind blows, where the water is. Write a shader that reads them and it follows the weather, the wind and the water by itself.

The plugin **adds all of them to your project** every time the editor starts (new ones that a newer version of the toolkit brings too), so a shader that uses one compiles at once, even in a scene with no terrain. A game made by hand without them adds the missing ones when it starts. You do not set them yourself: they are written while the game runs.

## The list

| Global | Type | What it is | Written by |
|---|---|---|---|
| `terrain_wetness` | float | How wet the ground is: 0 dry, 1 soaked | The [ground weather](/basic/world/ground-weather) |
| `terrain_snow` | float | How much snow lies on the ground: 0 none, 1 covered | The ground weather |
| `terrain_tint` | vec4 | rgb = the colour the ground is tinted with, a = how much of it shows | The ground weather (the tint of the [world config](/basic/world/worlds)) |
| `world_wind` | vec4 | x, y = the direction the wind blows towards on the ground (x, z) as a unit vector, z = how strong (0 still, 1 a breeze, 2 a storm), w = how fast the gusts go | The wind (below) |
| `world_time` | float | The hour of the day, 0 to 24 (12 for a sun that stays where it is) | The sky of the world (every game minute) |
| `world_day_factor` | float | How much of the day it is: 0 at night, 1 in daylight, between at sunrise and sunset (the hours of the Sun config) | The sky of the world |
| `world_cloud_cover` | float | How cloudy the sky is: 0 clear, 1 overcast (the cloud density of the sky shown) | The sky of the world |
| `foliage_pushers` | sampler2D | 8 x 1 float texture: each texel (x, y, z, radius) of a body that pushes plants aside (radius 0 = nobody) | The bodies near the camera |
| `water_map` | sampler2D | The picture of the water for the wet shore and the caustics of the terrain | [Movement volumes](/basic/world/movement-volumes#the-shore-and-the-bed-wet-ground-and-caustics) with shore effects |
| `water_map_rect` | vec4 | x, z = the corner of the water picture in the world, z = the size of a texel in metres, w = how far the shore reaches | The same |

## Using one

```glsl
shader_type spatial;

global uniform float terrain_wetness;
global uniform vec4 world_wind;

void vertex() {
    // lean with the wind: world_wind.xy is the direction it blows towards, .z how strong it is
    VERTEX.xz += world_wind.xy * world_wind.z * 0.05 * VERTEX.y;
}

void fragment() {
    // wet things are darker and shinier
    ALBEDO = vec3(0.6) * (1.0 - 0.4 * terrain_wetness);
    ROUGHNESS = mix(0.9, 0.2, terrain_wetness);
}
```

A plant that sways with the wind of the world can use the ready-made shaders instead: see [Foliage tools](/basic/world/terrain-foliage#foliage-shaders-wind-walking-through-and-light).

## The wind

There is **one wind**. The **Wind** group of the [Environment config](/basic/world/world-configs#environment) is the wind of the world: a direction on the ground and how strong it is (0 still, 1 a breeze, 2 a storm; a new config blows a breeze of 0.35). A **weather** that has its own wind (a storm) takes its place while the weather lasts, and the wind of the world comes back when the weather has gone. All of it ends up in the one global `world_wind`. From a script: `FoliageWind.set_wind(direction_degrees, strength)`, `FoliageWind.set_base_wind(direction, strength)` and `FoliageWind.set_weather_wind(direction, intensity)`.

## Your own globals

Add them in Project Settings as usual. The toolkit never removes a global it does not know.

## Good to know

- **Names.** Every global is lower case words joined by underscores, the thing first: `terrain_wetness`, `world_wind`, `water_map`, `water_map_rect`.
- **Older projects.** Earlier versions of the toolkit added `WindDirection`, `WindIntensity` and `GaleStrength`, and the wind picture was called `foliage_wind` and the water picture `water_height_map`. The wind is one vector now (`world_wind`, the direction is its x and y, the strength its z). The plugin takes the three old numbers out of your project when the editor starts; if a shader of yours read them, read `world_wind` instead. `foliage_wind` and `water_height_map` are called `world_wind` and `water_map` now: change the name in a shader of yours that used them.
- If you **delete** one of the toolkit's globals in Project Settings, the plugin puts it back the next time the editor starts.
- A picture global (`foliage_pushers`, `water_map`) is only an empty picture in the project; the game fills it in when the terrain or the weather starts. In the editor the plugin fills them in when it starts.
