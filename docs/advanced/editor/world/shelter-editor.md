<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ShelterEditor

**Inherits:** [ConfigEditorBase](/advanced/editor/world/config-editor-base) < [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The Shelters tab (World &gt; Shelters): the list of the shelter profiles on the left, the settings on the right in a container for each group (Shelter, Sound) and the warnings. A shelter profile says what a kind of shelter does (a wooden cabin, a cave, a tent): how much of the weather it keeps off, its audio profile and a track for each kind of weather. Give it to ShelterVolumes. See docs: World &gt; Shelter.

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `PackedStringArray` | [get_warning_texts](#method-get-warning-texts)() |

## Constants

- `String` **SOUND_FORM** = `"res://addons/chroniclenode/editor_components/editors/world/shelter_weather_s...`

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ConfigEditorBase](/advanced/editor/world/config-editor-base).*

### PackedStringArray get_warning_texts() {#method-get-warning-texts}

The warnings now: what is in the container (for the tests)

