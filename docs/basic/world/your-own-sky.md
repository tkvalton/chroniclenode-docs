# Your own sky

The sky of a world is a **Sky config** (colours of the day, dusk and night, clouds, stars) shown by a **sky driver**. Without a driver you get the **stylized sky** of the toolkit. A driver is how you change what the sky *is*: a panorama picture, Godot's own procedural sky, or a sky shader of your own.

## The drivers that come with the toolkit

Set the **Driver** of the Sky config (in **Sky Driver**; the picker offers *New SkyDriverPanorama* and the others, and *Edit* opens its settings).

| Driver | What the sky is | Settings |
|---|---|---|
| *(none)* | The stylized sky: gradient, clouds with shadows, stars, shooting stars, a sun and a moon disc | The clouds, astro and stars groups of the Sky config |
| **SkyDriverProcedural** | Godot's procedural sky. The top is the *top colour* of the day, dusk or night, the horizon the *bottom colour*, the ground a darker one. Cheap | **Sun angle max**, **Sun curve**, **Energy** |
| **SkyDriverPanorama** | Two pictures (2:1 panoramas, an HDRI): a day one and a night one, crossfaded by the hour, the horizon warmed by the *sun scatter* colour at dawn and dusk. Clouds and stars are in the pictures | **Day panorama**, **Night panorama**, **Energy**, **Dusk warmth** |

The colours of the day, dusk and night of the Sky config are used by every driver. The groups that only the stylized sky uses (clouds, astro, stars) are hidden for a driver that does not use them. In the [Environment Debugger](/basic/world/world-configs#see-it-in-the-editor) the time slider moves the sky of any driver.

**The hours.** The sky changes at the hours the **sun** of the world rises and sets (the [Sun config](/basic/world/world-configs#sun)): half an hour before to half an hour after. The Sky config has no hours of its own.

## What any sky shader gets for free

A sky shader you write (a `shader_type sky;` file) is shown by a driver (below), but even before that:

- **The sun.** `LIGHT0_DIRECTION` in a sky shader is the direction of the sun, `LIGHT0_COLOR` its colour and `LIGHT0_ENERGY` its brightness. Draw your sun disc from them and it follows the sun path and the [Sun Light](/basic/world/world-configs#environment) of the environment (the sun fades when an environment dims it). If you draw your own sun, set the **Sun sky mode** of the environment to *light only*. At night the same light is the moon.
- **Ambient light and reflections.** The ambient light of the environment (when its source is the sky) and the reflections come from the sky: a sky of yours colours the world too.
- **Three global shader parameters**, written by the toolkit:

| Global | What it is |
|---|---|
| `world_time` | The hour of the day, 0 to 24 (12 for a sun that stays where it is) |
| `world_day_factor` | 0 at night, 1 in daylight, between at sunrise and sunset |
| `world_cloud_cover` | How cloudy the sky is, 0 to 1 (the cloud density of the sky shown) |

```glsl
shader_type sky;
global uniform float world_day_factor;
global uniform float world_cloud_cover;

void sky() {
	vec3 day = mix(vec3(0.35, 0.6, 1.0), vec3(0.7, 0.72, 0.75), world_cloud_cover);
	vec3 night = vec3(0.02, 0.02, 0.08);
	COLOR = mix(night, day, world_day_factor);
}
```

(See also [Shader globals](/basic/world/shader-globals).)

## Your own driver

When the shader needs values from the Sky config (colours by the hour, a texture, a setting), write a **driver**: a script that extends `SkyDriver`, and give it to the Sky config like the others.

```gdscript
@tool
class_name MySkyDriver extends SkyDriver

@export var my_shader: Shader
@export var star_texture: Texture2D

func uses_stylized_settings() -> bool:
	return false          # hide the clouds, astro and stars groups of the Sky config

func create_sky() -> Sky:
	var sky := Sky.new()
	var material := ShaderMaterial.new()
	material.shader = my_shader
	sky.sky_material = material
	return sky

func apply_config(sky: Sky, config: SkyConfig) -> void:
	(sky.sky_material as ShaderMaterial).set_shader_parameter("stars", star_texture)

# What the sky has at an hour: parameter name -> value. The game blends colours and numbers over a few
# seconds every game minute; the Debugger calls it when you move the time slider.
func hour_params(config: SkyConfig, hour: float, path: SunConfig) -> Dictionary:
	var calculated := SkyLook.calculate(config, hour, path)        # the colours of the config by the hour
	return {"top": calculated["top_color"], "horizon": calculated["bottom_color"]}
```

| Method | What it is for |
|---|---|
| `create_sky()` | Makes the `Sky` (a new one each time) |
| `apply_config(sky, config)` | Writes what does not change with the hour |
| `hour_params(config, hour, path)` | The parameters for an hour: name to value. `path` is the Sun config of the world |
| `static_params(config)` | The parameters of a sky that does not follow the hour (the sun stays where it is). By default the noon values |
| `cloud_cover(config, hour, path)` | The value of the global `world_cloud_cover` |
| `get_param(sky, name)`, `set_param(sky, name, value)` | How a parameter is read and written (the default works for shader materials; a material of another kind overrides them, as the procedural driver does) |
| `uses_stylized_settings()` | `false` hides the groups of the stylized sky in the Sky config editor |

The game and the Environment Debugger both go through the driver, so your sky shows in the editor with the hour.

## Good to know

- A change between two Sky configs with **different drivers** switches at the halfway point of the [blend](/basic/world/world-configs#changing-a-look-over-time): give both a sky with colours that suit if you want it smooth.
- A sky is a costly thing to draw: the stylized sky uses a half resolution pass for its clouds. Keep your shader cheap, and test it at the lowest video settings.
