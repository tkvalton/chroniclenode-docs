<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SubtitlesUI

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The subtitles of the game: a container with the name of the speaker and the line that is said, at the bottom of the screen. It shows a line when something asks with `show_subtitle()` (a voice line that is played) and hides it when the line is over. Nothing shows while the player has subtitles off (Game Settings &gt; Gameplay &gt; Subtitles enabled). Style it in its scene: the panel, the two labels, their fonts and colors; nothing in the code decides how it looks.

## Properties

| | | |
|---|---|---|
| `bool` | [show_speaker_name](#prop-show-speaker-name) | `true` |
| `float` | [minimum_seconds](#prop-minimum-seconds) | `1.5` |
| `float` | [characters_per_second](#prop-characters-per-second) | `15.0` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `bool` | [are_subtitles_enabled](#method-are-subtitles-enabled)() |
| `bool` | [show_subtitle](#method-show-subtitle)( `text: String, speaker: String = "", duration: float = 0.0` ) |
| `void` | [hide_subtitle](#method-hide-subtitle)() |
| `bool` | [is_showing](#method-is-showing)() |

## Property descriptions

### bool show_speaker_name = true {#prop-show-speaker-name}

Show the name of the speaker above the line (when there is one)

### float minimum_seconds = 1.5 {#prop-minimum-seconds}

The line stays at least this long (seconds), however short it is

### float characters_per_second = 15.0 {#prop-characters-per-second}

When a line has no duration: the seconds it stays are the number of characters divided by this (reading speed)

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### bool are_subtitles_enabled() {#method-are-subtitles-enabled}

Does the player want subtitles?

### bool show_subtitle( text: String, speaker: String = "", duration: float = 0.0 ) {#method-show-subtitle}

Shows a line. `speaker` is the name shown above it (empty = none). `duration` is how long it stays in seconds: 0 means as long as it takes to read (`characters_per_second`, never less than `minimum_seconds`); a line of a voice line passes the length of the sound. Another line replaces the one that shows. Returns false when nothing was shown (subtitles off, or no text).

### void hide_subtitle() {#method-hide-subtitle}

Hides the line that shows.

### bool is_showing() {#method-is-showing}

Is a line showing?

