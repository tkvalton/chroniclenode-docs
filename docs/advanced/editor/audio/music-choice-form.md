<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MusicChoiceForm

**Inherits:** [ConfigForm](/advanced/editor/world/config-form) < [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

**Inherited by:** [MusicPartForm](/advanced/editor/audio/music-part-form), [MusicStateForm](/advanced/editor/audio/music-state-form), [MusicTransitionForm](/advanced/editor/audio/music-transition-form)

The base of the forms of a Dynamic Music whose fields choose a name of the music (the part of a state, the states of a transition): the editor gives the form the music it belongs to, and the pickers offer its parts and states. `refresh_choices()` fills them again after a rename or a new item.

## Variables

| | | |
|---|---|---|
| `DynamicMusic` | [music](#var-music) |  |

## Methods

| | |
|---|---|
| `void` | [load_config](#method-load-config)( `p_config: Resource` ) |
| `void` | [refresh_choices](#method-refresh-choices)() |

## Variable descriptions

### DynamicMusic music {#var-music}

The music the item belongs to (set by the editor before the form loads the item)

## Method descriptions

### void load_config( p_config: Resource ) {#method-load-config}

Opens a resource in the form *(from [ConfigForm](/advanced/editor/world/config-form))*

### void refresh_choices() {#method-refresh-choices}

Fills the pickers from the music

