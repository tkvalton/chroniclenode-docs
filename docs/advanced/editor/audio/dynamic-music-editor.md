<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DynamicMusicEditor

**Inherits:** [ConfigEditorBase](/advanced/editor/world/config-editor-base) < [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The Dynamic Music tab (Audio &gt; Dynamic Music): the list of the musics on the left, the settings on the right in a container for each group (Music, Parts, States, Transitions, Stingers) and the warnings. A Dynamic Music is music that changes with the game: parts with a tempo (and layers), states the game asks for, the rules for changing from one state to another, and stingers. A world, a zone, a weather or an encounter plays one through a sound source. See docs: Audio &gt; Dynamic Music.

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `PackedStringArray` | [get_warning_texts](#method-get-warning-texts)() |

## Constants

- `String` **FORMS** = `"res://addons/chroniclenode/editor_components/editors/audio/"`

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ConfigEditorBase](/advanced/editor/world/config-editor-base).*

### PackedStringArray get_warning_texts() {#method-get-warning-texts}

The warnings now: what is in the container (for the tests)

