<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkyConfigEditor

**Inherits:** [ConfigEditorBase](/advanced/editor/world/config-editor-base) < [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The Sky tab (World &gt; Sky): the list of the sky configs on the left, the settings on the right in a container for each group. With a flat background colour only the colour shows; a sky driver that does not use the clouds, the astro and the stars hides those containers. See docs: World &gt; Sky config.

## Constants

- `Array[String]` **SKY_GROUPS** = `["TimeOfDayGroup", "SkyColorsDayGroup", "SkyColorsNightGroup", "SkyColorsDusk...` - The containers that only make sense when the background is the sky
- `Array[String]` **STYLIZED_GROUPS** = `["CloudSettingsGroup", "HighCloudsGroup", "AstroGroup", "StarSettingsGroup", ...` - The containers of the stylized sky (the toolkit's own driver, or one that says it uses them)

