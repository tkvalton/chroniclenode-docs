<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EnvironmentConfigEditor

**Inherits:** [ConfigEditorBase](/advanced/editor/world/config-editor-base) < [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The Environment tab (World &gt; Environment): the list of the environment configs on the left, the settings on the right in a container for each group (Tonemap, Fog, Sun Light, Camera, Colour Grade ...). The fields of what is switched off are hidden: the fog fields when fog is off, the sun fields when there is no sun, the camera fields of what is not used. See docs: World &gt; Environment config.

## Constants

- `Array[String]` **FOG_PROPERTIES** = `["fog_mode", "fog_light_color", "fog_density", "fog_aerial_perspective", "fog...`
- `Array[String]` **VOLUMETRIC_FOG_PROPERTIES** = `["volumetric_fog_density", "volumetric_fog_albedo", "volumetric_fog_emission"...`
- `Array[String]` **SUN_PROPERTIES** = `["sun_max_energy", "sun_min_energy", "sun_dawn_dusk_energy", "sun_day_color",...`

