<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalizationLanguage

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A language of the game: its code, the name shown in the language list (in the language itself), and an optional font for the characters it needs.

## Properties

| | | |
|---|---|---|
| `String` | [code](#prop-code) | `""` |
| `String` | [native_name](#prop-native-name) | `""` |
| `Font` | [font](#prop-font) | `null` |
| `bool` | [has_voice](#prop-has-voice) | `false` |

## Property descriptions

### String code = "" {#prop-code}

The language code, the way Godot writes locales: "en", "fr", "pt_BR", "zh_CN"

### String native_name = "" {#prop-native-name}

The name of the language written in that language ("Français"): the player picks it in the settings window

### Font font = null {#prop-font}

The font the interface uses for this language (Chinese, Japanese, Korean, Cyrillic, Arabic, Thai need one that has the characters). Empty = the default font of the theme, which falls back to a system font on desktop

### bool has_voice = false {#prop-has-voice}

Does the game have voice lines in this language (folders `voicelines/<character>/<code>/`)? Only a note for the editor: the audio editor shows the real files

