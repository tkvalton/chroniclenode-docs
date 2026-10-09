<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioSettingsManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Methods

| | |
|---|---|
| `void` | [apply_settings](#method-apply-settings)( `settings: SettingsConfig` ) |
| `void` | [restore_defaults](#method-restore-defaults)( `settings: SettingsConfig` ) |
| `float` | [get_master_volume](#method-get-master-volume)( `settings: SettingsConfig` ) |
| `void` | [set_master_volume](#method-set-master-volume)( `settings: SettingsConfig, value: float` ) |
| `float` | [get_music_volume](#method-get-music-volume)( `settings: SettingsConfig` ) |
| `void` | [set_music_volume](#method-set-music-volume)( `settings: SettingsConfig, value: float` ) |
| `float` | [get_sfx_volume](#method-get-sfx-volume)( `settings: SettingsConfig` ) |
| `void` | [set_sfx_volume](#method-set-sfx-volume)( `settings: SettingsConfig, value: float` ) |
| `float` | [get_ambiance_volume](#method-get-ambiance-volume)( `settings: SettingsConfig` ) |
| `void` | [set_ambiance_volume](#method-set-ambiance-volume)( `settings: SettingsConfig, value: float` ) |
| `float` | [get_voice_volume](#method-get-voice-volume)( `settings: SettingsConfig` ) |
| `void` | [set_voice_volume](#method-set-voice-volume)( `settings: SettingsConfig, value: float` ) |
| `float` | [get_ui_volume](#method-get-ui-volume)( `settings: SettingsConfig` ) |
| `void` | [set_ui_volume](#method-set-ui-volume)( `settings: SettingsConfig, value: float` ) |

## Signals

### master_volume_changed( newVolume: float ) {#signal-master-volume-changed}

Signal, emitted when the master volume has changed

### music_volume_changed( newVolume: float ) {#signal-music-volume-changed}

Signal, emitted when the music volume has changed

### sfx_volume_changed( newVolume: float ) {#signal-sfx-volume-changed}

Signal, emitted when the sound effects volume has changed

### ambiance_volume_changed( newVolume: float ) {#signal-ambiance-volume-changed}

Signal, emitted when the ambiance volume has changed

### voice_volume_changed( newVolume: float ) {#signal-voice-volume-changed}

Signal, emitted when the sound effects volume has changed

### ui_volume_changed( newVolume: float ) {#signal-ui-volume-changed}

Signal, emitted when the ambiance volume has changed

## Constants

- `const` **MASTER_VOLUME_LABEL** = `"Master"` - Label for master volume
- `const` **MUSIC_VOLUME_LABEL** = `"Music"` - Label for music volume
- `const` **SFX_VOLUME_LABEL** = `"SFX"` - Label for sound effects volume
- `const` **AMBIANCE_VOLUME_LABEL** = `"Ambiance"` - Label for ambiance volume
- `const` **VOICE_VOLUME_LABEL** = `"Voice"` - Label for voice volume
- `const` **UI_VOLUME_LABEL** = `"UI"` - Label for voice volume

## Method descriptions

### void apply_settings( settings: SettingsConfig ) {#method-apply-settings}

Applies settings to the audio system

### void restore_defaults( settings: SettingsConfig ) {#method-restore-defaults}

Restore default audio settings

### float get_master_volume( settings: SettingsConfig ) {#method-get-master-volume}

Gets the master volume

### void set_master_volume( settings: SettingsConfig, value: float ) {#method-set-master-volume}

Sets the master volume

### float get_music_volume( settings: SettingsConfig ) {#method-get-music-volume}

Gets the music volume

### void set_music_volume( settings: SettingsConfig, value: float ) {#method-set-music-volume}

Sets the music volume

### float get_sfx_volume( settings: SettingsConfig ) {#method-get-sfx-volume}

Gets the SFX volume

### void set_sfx_volume( settings: SettingsConfig, value: float ) {#method-set-sfx-volume}

Sets the SFX volume

### float get_ambiance_volume( settings: SettingsConfig ) {#method-get-ambiance-volume}

Gets the ambiance volume

### void set_ambiance_volume( settings: SettingsConfig, value: float ) {#method-set-ambiance-volume}

Sets the ambiance volume

### float get_voice_volume( settings: SettingsConfig ) {#method-get-voice-volume}

Gets the SFX volume

### void set_voice_volume( settings: SettingsConfig, value: float ) {#method-set-voice-volume}

Sets the SFX volume

### float get_ui_volume( settings: SettingsConfig ) {#method-get-ui-volume}

Gets the ambiance volume

### void set_ui_volume( settings: SettingsConfig, value: float ) {#method-set-ui-volume}

Sets the ui volume

