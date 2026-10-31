<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherEditor

**Inherits:** [ConfigEditorBase](/advanced/editor/world/config-editor-base) < [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The Weather tab of the World group: the list of the weathers on the left, the settings in the middle in a container for each group (Look, Wind, Ground Wetness, Ground Cover, Sky and Light, Fog) and the list of Exposed Effects, and on the right a live preview (the weather in a small world, with a slider for the intensity and one for the time of day) and the warnings of the weather. The scene is built by hand (weather_editor.tscn); the effect of the weather is picked from the VFX library in a drop-down. See docs: World &gt; Weather.

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `PackedStringArray` | [get_warning_texts](#method-get-warning-texts)() |

## Constants

- `String` **ENTRY_FORM** = `"res://addons/chroniclenode/editor_components/editors/world/weather_effect_en...`

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ConfigEditorBase](/advanced/editor/world/config-editor-base).*

### PackedStringArray get_warning_texts() {#method-get-warning-texts}

The warnings now: what is in the container (for the tests)

