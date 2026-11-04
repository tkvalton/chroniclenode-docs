<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherTableEditor

**Inherits:** [ConfigEditorBase](/advanced/editor/world/config-editor-base) < [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The Weather Tables tab (World Configs &gt; Weather Tables): the list of the tables on the left, the settings on the right in a container for each group (Details, Weathers) and the warnings. A weather table is a list of weathers with a weight and a time; the world (Worlds &gt; Weather) or a zone (Zones &gt; Weather) that uses the table has one weather picked from it, and another when its time is up. See docs: World &gt; Weather tables.

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `PackedStringArray` | [get_warning_texts](#method-get-warning-texts)() |

## Constants

- `String` **LINE_FORM** = `"res://addons/chroniclenode/editor_components/editors/world/weather_table_ent...`

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ConfigEditorBase](/advanced/editor/world/config-editor-base).*

### PackedStringArray get_warning_texts() {#method-get-warning-texts}

The warnings now: what is in the container (for the tests)

