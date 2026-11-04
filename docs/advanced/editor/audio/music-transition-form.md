<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MusicTransitionForm

**Inherits:** [MusicChoiceForm](/advanced/editor/audio/music-choice-form) < [ConfigForm](/advanced/editor/world/config-form) < [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The form of one transition rule of a Dynamic Music (a MusicTransition): which states it is for, when the old part leaves, where the new one starts, the fade and an optional bridge part. The default transition uses the same form without the two states. A built scene (music_transition_form.tscn).

## Variables

| | | |
|---|---|---|
| `bool` | [is_default](#var-is-default) | `false` |

## Variable descriptions

### bool is_default = false {#var-is-default}

The form of the default transition: it is for any change, so it has no states to choose

