<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DynamicMusicPreview

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The preview of the Dynamic Music tab: play the music that is open, change its state with a button for each state, move the intensity with a slider and play its stingers, to hear what the parts, layers and transitions do without running the game. It plays through the Music bus with a DynamicMusicPlayer, as the game does. The music is read when Play is pressed: after a change press Stop and Play again. See docs: Audio &gt; Dynamic Music.

## Variables

| | | |
|---|---|---|
| `DynamicMusic` | [music](#var-music) |  |
| `DynamicMusicPlayer` | [player](#var-player) |  |

## Methods

| | |
|---|---|
| `void` | [bind](#method-bind)( `p_music: DynamicMusic` ) |
| `void` | [refresh](#method-refresh)() |

## Variable descriptions

### DynamicMusic music {#var-music}

The music that is open

### DynamicMusicPlayer player {#var-player}

The player that makes the sound (the same class the game uses)

## Method descriptions

### void bind( p_music: DynamicMusic ) {#method-bind}

Opens a music in the preview (it stops what played)

### void refresh() {#method-refresh}

Makes the buttons of the states and the stingers again (after a state or a stinger was added, renamed or removed)

