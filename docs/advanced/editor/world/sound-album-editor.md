<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SoundAlbumEditor

**Inherits:** [ConfigEditorBase](/advanced/editor/world/config-editor-base) < [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The Music Albums tab (Audio &gt; Music Albums): the list of the albums on the left, the settings on the right in a container for each group (Details, Album, Tracks) and the warnings. An album is a collection of tracks with the rules for how they play; a world, a zone, a weather or an encounter chooses one through a sound source. See docs: Audio &gt; Music Albums.

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `PackedStringArray` | [get_used_by_texts](#method-get-used-by-texts)() |
| `PackedStringArray` | [get_warning_texts](#method-get-warning-texts)() |

## Constants

- `String` **TRACK_FORM** = `"res://addons/chroniclenode/editor_components/editors/world/album_track_form....`

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ConfigEditorBase](/advanced/editor/world/config-editor-base).*

### PackedStringArray get_used_by_texts() {#method-get-used-by-texts}

The places now: what is in the container (for the tests)

### PackedStringArray get_warning_texts() {#method-get-warning-texts}

The warnings now: what is in the container (for the tests)

