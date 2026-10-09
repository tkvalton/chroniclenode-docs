<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SettingsConfig

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Class representing the game settings

## Properties

| | | |
|---|---|---|
| `bool` | [language](#prop-language) | `false` |
| `bool` | [subtitles_enabled](#prop-subtitles-enabled) | `false` |
| `bool` | [auto_save](#prop-auto-save) | `false` |
| `float` | [auto_save_frequency](#prop-auto-save-frequency) | `300` |
| `CrouchMode` | [crouch_mode](#prop-crouch-mode) | `CrouchMode.HOLD` |
| `float` | [mouse_sensitivity](#prop-mouse-sensitivity) | `0.22` |
| `float` | [mouse_x_axis_sensitivity](#prop-mouse-x-axis-sensitivity) | `1.0` |
| `float` | [mouse_y_axis_sensitivity](#prop-mouse-y-axis-sensitivity) | `1.0` |
| `bool` | [invert_mouse_x_axis](#prop-invert-mouse-x-axis) | `false` |
| `bool` | [invert_mouse_y_axis](#prop-invert-mouse-y-axis) | `false` |
| `float` | [ui_scale](#prop-ui-scale) | `1.0:` |
| `float` | [text_size](#prop-text-size) | `1.0:` |
| `bool` | [nameplate_in_combat_only](#prop-nameplate-in-combat-only) | `false:` |
| `bool` | [friendly_nameplates](#prop-friendly-nameplates) | `true:` |
| `AurasOptions` | [friendly_nameplates_auras](#prop-friendly-nameplates-auras) | `AurasOptions.BUFFS_AND_DEBUFFS:` |
| `HealthDisplayOption` | [friendly_nameplates_health_text](#prop-friendly-nameplates-health-text) | `HealthDisplayOption.CURRENT_MAX:` |
| `bool` | [friendly_nameplates_resource_bar](#prop-friendly-nameplates-resource-bar) | `false:` |
| `bool` | [friendly_nameplates_cast_bar](#prop-friendly-nameplates-cast-bar) | `true:` |
| `bool` | [class_colour_nameplates](#prop-class-colour-nameplates) | `true:` |
| `bool` | [enemy_nameplates](#prop-enemy-nameplates) | `true:` |
| `AurasOptions` | [enemy_nameplates_auras](#prop-enemy-nameplates-auras) | `AurasOptions.BUFFS_AND_DEBUFFS:` |
| `HealthDisplayOption` | [enemy_nameplates_health_text](#prop-enemy-nameplates-health-text) | `HealthDisplayOption.CURRENT_MAX:` |
| `bool` | [enemy_nameplates_resource_bar](#prop-enemy-nameplates-resource-bar) | `true:` |
| `bool` | [enemy_nameplates_cast_bar](#prop-enemy-nameplates-cast-bar) | `true:` |
| `bool` | [pet_nameplates](#prop-pet-nameplates) | `true:` |
| `float` | [nameplate_max_distance](#prop-nameplate-max-distance) | `80.0:` |
| `HealthDisplayOption` | [party_frames_health_text](#prop-party-frames-health-text) | `HealthDisplayOption.CURRENT_MAX:` |
| `bool` | [party_frames_resource_bar](#prop-party-frames-resource-bar) | `true:` |
| `AurasOptions` | [party_frames_display_debuffs](#prop-party-frames-display-debuffs) | `AurasOptions.BUFFS_AND_DEBUFFS:` |
| `bool` | [party_frames_class_colour](#prop-party-frames-class-colour) | `true:` |
| `bool` | [action_bar_button_cooldown_text](#prop-action-bar-button-cooldown-text) | `true:` |
| `bool` | [action_bar_button_gcd_text](#prop-action-bar-button-gcd-text) | `true:` |
| `bool` | [action_bar_button_left_click_use](#prop-action-bar-button-left-click-use) | `false:` |
| `HealthDisplayOption` | [action_bar_health_text](#prop-action-bar-health-text) | `HealthDisplayOption.CURRENT_MAX:` |
| `HealthDisplayOption` | [action_bar_resource_text](#prop-action-bar-resource-text) | `HealthDisplayOption.CURRENT_MAX:` |
| `bool` | [action_bar_cast_bar](#prop-action-bar-cast-bar) | `true:` |
| `Color` | [player_color](#prop-player-color) | `Color(0.2, 0.6, 1.0):  # Blue` |
| `Color` | [friendly_color](#prop-friendly-color) | `Color(0.2, 1.0, 0.3):  # Green` |
| `Color` | [hostile_color](#prop-hostile-color) | `Color(1.0, 0.2, 0.2):  # Red` |
| `Color` | [neutral_color](#prop-neutral-color) | `Color(1.0, 1.0, 0.5):  # Yellow` |
| `Color` | [pet_color](#prop-pet-color) | `Color(0.4, 0.8, 1.0):  # Light Blue` |
| `Color` | [cast_bar_interruptible_color](#prop-cast-bar-interruptible-color) | `Color(0.425, 0.781, 0.808):  # Cyan` |
| `Color` | [cast_bar_uninterruptible_color](#prop-cast-bar-uninterruptible-color) | `Color(0.699, 0.699, 0.699):  # Gray` |
| `Color` | [action_bar_cast_bar_color](#prop-action-bar-cast-bar-color) | `Color(1.0, 0.843, 0.0):  # Gold` |
| `Color` | [action_bar_health_color](#prop-action-bar-health-color) | `Color(0.2, 0.8, 0.3):` |
| `WindowModeOption` | [window_mode](#prop-window-mode) | `WindowModeOption.FULLSCREEN` |
| `ResolutionOption` | [resolution](#prop-resolution) | `ResolutionOption._1920_X_1080` |
| `float` | [resolution_scale_factor](#prop-resolution-scale-factor) | `1.0` |
| `int` | [max_fps](#prop-max-fps) | `60` |
| `VsyncOption` | [vsync_mode](#prop-vsync-mode) | `VsyncOption.VSYNC_ENABLED` |
| `MSAAOption` | [msaa](#prop-msaa) | `MSAAOption.MSAA_DISABLED` |
| `PostProcessAAOption` | [post_process_aa](#prop-post-process-aa) | `PostProcessAAOption.TAA` |
| `ShadowSizeOption` | [shadow_size](#prop-shadow-size) | `ShadowSizeOption.MEDIUM` |
| `ShadowQualityOption` | [shadow_quality](#prop-shadow-quality) | `ShadowQualityOption.MEDIUM` |
| `MeshLodOption` | [mesh_lod](#prop-mesh-lod) | `MeshLodOption.HIGH` |
| `ResolutionScalingOption` | [resolution_scaling_mode](#prop-resolution-scaling-mode) | `ResolutionScalingOption.BILINEAR` |
| `float` | [fsr_sharpness](#prop-fsr-sharpness) | `1.0` |
| `SSROption` | [SSR](#prop-ssr) | `SSROption.DISABLED` |
| `SSAOOption` | [SSAO](#prop-ssao) | `SSAOOption.DISABLED` |
| `SSILOption` | [SSIL](#prop-ssil) | `SSILOption.LOW` |
| `SDFGIOption` | [sdfgi](#prop-sdfgi) | `SDFGIOption.LOW` |
| `GlowOption` | [glow](#prop-glow) | `GlowOption.LOW` |
| `VolumetricFogOption` | [volumetric_fog](#prop-volumetric-fog) | `VolumetricFogOption.LOW` |
| `float` | [brightness](#prop-brightness) | `1.0` |
| `float` | [contrast](#prop-contrast) | `1.0` |
| `float` | [saturation](#prop-saturation) | `1.0` |
| `float` | [master_volume](#prop-master-volume) | `1.0` |
| `float` | [music_volume](#prop-music-volume) | `1` |
| `float` | [sfx_volume](#prop-sfx-volume) | `1` |
| `float` | [ambiance_volume](#prop-ambiance-volume) | `1` |
| `float` | [voice_volume](#prop-voice-volume) | `1` |
| `float` | [ui_volume](#prop-ui-volume) | `1` |
| `Dictionary` | [action_binding_overrides](#prop-action-binding-overrides) | `{}` |
| `Dictionary` | [player_accessible_settings](#prop-player-accessible-settings) | `{}` |

## Variables

| | | |
|---|---|---|
| `SettingsConfig` | [active](#var-active) | `null` |

## Methods

| | |
|---|---|
| `SettingsConfig` | [get_config](#method-get-config)() *static* |
| `SettingsConfig` | [get_active](#method-get-active)() *static* |

## Signals

### ui_setting_changed() {#signal-ui-setting-changed}

## Enumerations

### enum WindowModeOption {#enum-windowmodeoption}

Enumeration of valid window mode options for the game's settings

- **FULLSCREEN** = `0`
- **WINDOWED** = `1`
- **BORDERLESS_WINDOW** = `2`
- **BORDERLESS_FULLSCREEN** = `3`

### enum ResolutionOption {#enum-resolutionoption}

Enumeration of valid resolution options for the game's settings

- **_1152_X_648** = `0`
- **_1280_X_720** = `1`
- **_1366_X_768** = `2`
- **_1440_X_900** = `3`
- **_1600_X_900** = `4`
- **_1920_X_1080** = `5`
- **_2560_X_1080** = `6`
- **_2560_X_1440** = `7`
- **_3440_X_1440** = `8`
- **_3840_X_2160** = `9`

### enum ResolutionScalingOption {#enum-resolutionscalingoption}

Enumeration of valid resolution scaling options for the game's settings

- **BILINEAR** = `0`
- **FSR_1_0** = `1`
- **FSR_2_2** = `2`

### enum VsyncOption {#enum-vsyncoption}

Enumeration of valid vsync options for the game's settings

- **VSYNC_DISABLED** = `0`
- **VSYNC_ADAPTIVE** = `1`
- **VSYNC_ENABLED** = `2`

### enum MSAAOption {#enum-msaaoption}

Enumeration of valid msaa options for the game's settings

- **MSAA_DISABLED** = `0`
- **MSAA_2X** = `1`
- **MSAA_4X** = `2`
- **MSAA_8X** = `3`

### enum PostProcessAAOption {#enum-postprocessaaoption}

Enumeration of valid post-process anti-aliasing options for the game's settings

- **DISABLED** = `0`
- **FXAA** = `1`
- **TAA** = `2`

### enum ShadowSizeOption {#enum-shadowsizeoption}

Enumeration of valid shadow size options for the game's settings

- **OFF** = `0`
- **MINIMUM** = `1`
- **VERY_LOW** = `2`
- **LOW** = `3`
- **MEDIUM** = `4`
- **HIGH** = `5`
- **ULTRA** = `6`

### enum ShadowQualityOption {#enum-shadowqualityoption}

Enumeration of valid shadow quality options for the game's settings

- **VERY_LOW** = `0`
- **LOW** = `1`
- **MEDIUM** = `2`
- **HIGH** = `3`
- **VERY_HIGH** = `4`
- **ULTRA** = `5`

### enum MeshLodOption {#enum-meshlodoption}

Enumeration of valid mesh lod options for the game's settings

- **VERY_LOW** = `0`
- **LOW** = `1`
- **MEDIUM** = `2`
- **HIGH** = `3`
- **ULTRA** = `4`

### enum SSROption {#enum-ssroption}

Enumeration of valid Screen-Space Reflections options for the game's settings

- **DISABLED** = `0`
- **LOW** = `1`
- **MEDIUM** = `2`
- **HIGH** = `3`

### enum SSAOOption {#enum-ssaooption}

Enumeration of valid Screen Space Ambient Occlusion options for the game's settings

- **DISABLED** = `0`
- **VERY_LOW** = `1`
- **LOW** = `2`
- **MEDIUM** = `3`
- **HIGH** = `4`

### enum SSILOption {#enum-ssiloption}

Enumeration of valid Screen-space indirect lighting options for the game's settings

- **DISABLED** = `0`
- **VERY_LOW** = `1`
- **LOW** = `2`
- **MEDIUM** = `3`
- **HIGH** = `4`

### enum SDFGIOption {#enum-sdfgioption}

Enumeration of valid Signed distance field global illumination options for the game's settings

- **DISABLED** = `0`
- **LOW** = `1`
- **HIGH** = `2`

### enum GlowOption {#enum-glowoption}

Enumeration of valid glow options for the game's settings

- **DISABLED** = `0`
- **LOW** = `1`
- **HIGH** = `2`

### enum VolumetricFogOption {#enum-volumetricfogoption}

Enumeration of valid volumetric fog options for the game's settings

- **DISABLED** = `0`
- **LOW** = `1`
- **HIGH** = `2`

### enum AurasOptions {#enum-aurasoptions}

Enumeration of valid nameplate aura display options for the game's settings

- **DISABLED** = `0`
- **BUFFS_ONLY** = `1`
- **DEBUFFS_ONLY** = `2`
- **BUFFS_AND_DEBUFFS** = `3`

### enum HealthDisplayOption {#enum-healthdisplayoption}

Enumeration of valid nameplate aura display options for the game's settings

- **DISABLED** = `0`
- **CURRENT** = `1`
- **CURRENT_MAX** = `2`
- **PERCENTAGE** = `3`
- **CURRENT_PERCENTAGE** = `4`

### enum CrouchMode {#enum-crouchmode}

Enumeration of crouch control modes

- **TOGGLE** = `0`

## Constants

- `const` **CONFIG_PATH** = `"res://src/data/config_data/settings_config.tres"`
- `Dictionary` **RESOLUTIONS** = `{` - Dictionary of resolutions for the game's settings
- `Dictionary` **WINDOW_MODES** = `{` - Dictionary of window modes for the game's settings
- `Dictionary` **RESOLUTION_SCALING_MODE** = `{` - Dictionary of resolutions scaling modes for the game's settings
- `Dictionary` **VSYNC_MODE** = `{` - Dictionary of VSync modes for the game's settings
- `Dictionary` **MSAA_MODE** = `{` - Dictionary of MSAA modes for the game's settings
- `Dictionary` **POST_PROCESS_AA_MODE** = `{` - Dictionary of post-process AA modes for the game's settings
- `Dictionary` **SHADOW_SIZE** = `{` - Dictionary of shadow size for the game's settings
- `Dictionary` **SHADOW_QUALITY** = `{` - Dictionary of shadow quality for the game's settings
- `Dictionary` **MESH_LOD** = `{` - Dictionary of mesh lod setting for the game's settings
- `Dictionary` **SSR_MODE** = `{` - Dictionary of SSR mode for the game's settings
- `Dictionary` **SSAO_MODE** = `{` - Dictionary of SSAO mode for the game's settings
- `Dictionary` **SSILM_MODE** = `{` - Dictionary of SSILM mode for the game's settings
- `Dictionary` **SDFGI_MODE** = `{` - Dictionary of SDFGI mode for the game's settings
- `Dictionary` **GLOW_MODE** = `{` - Dictionary of glow setting for the game's settings
- `Dictionary` **VOLUMETRIC_FOG_MODE** = `{` - Dictionary of shadow size for the game's settings
- `Dictionary` **AURAS_MODE** = `{` - Dictionary of nameplate aura display options for the game's settings
- `Dictionary` **HEALTH_DISPLAY** = `{` - Dictionary of nameplate aura display options for the game's settings
- `Dictionary` **CROUCH_MODE** = `{` - Dictionary of crouch mode options for the game's settings
- `Dictionary` **PROPERTY_ENUM_MAP** = `{` - Central mapping: property name -&gt; enum dictionary Add your enum properties here to make them work in runtime menus automatically
- `Dictionary` **SETTING_DESCRIPTIONS** = `{` - Dictionary of setting descriptions for tooltips and help text Add descriptions for your settings here - they'll show up in both editor and runtime

## Property descriptions

*Gameplay*

### bool language = false {#prop-language}

TODO

### bool subtitles_enabled = false {#prop-subtitles-enabled}

Are subtitles currently enabled?

### bool auto_save = false {#prop-auto-save}

Allow autosaves

### float auto_save_frequency = 300 {#prop-auto-save-frequency}

Frequency of autosaves

### CrouchMode crouch_mode = CrouchMode.HOLD {#prop-crouch-mode}

Crouch control mode

### float mouse_sensitivity = 0.22 {#prop-mouse-sensitivity}

Mouse Controls How fast the camera / character turns with the mouse. This is the one slider most games show. (minimum 0.01: at 0 the camera would not turn at all and the player could lock themselves out)

### float mouse_x_axis_sensitivity = 1.0 {#prop-mouse-x-axis-sensitivity}

Fine-tuning relative to mouse_sensitivity: 1.0 = same as the master, 0.5 = half as fast. Tick these as player-accessible only if players should be able to set horizontal and vertical apart.

### float mouse_y_axis_sensitivity = 1.0 {#prop-mouse-y-axis-sensitivity}

*No description yet.*

### bool invert_mouse_x_axis = false {#prop-invert-mouse-x-axis}

*No description yet.*

### bool invert_mouse_y_axis = false {#prop-invert-mouse-y-axis}

*No description yet.*

*UI*

### float ui_scale = 1.0: {#prop-ui-scale}

Adjust scale of in game HUD &amp; Panels

### float text_size = 1.0: {#prop-text-size}

Adjust text size

*Nameplates*

### bool nameplate_in_combat_only = false: {#prop-nameplate-in-combat-only}

If nameplates show only during combat

### bool friendly_nameplates = true: {#prop-friendly-nameplates}

Are friendly nameplates currently enabled?

### AurasOptions friendly_nameplates_auras = AurasOptions.BUFFS_AND_DEBUFFS: {#prop-friendly-nameplates-auras}

Friendly nameplates aura setting

### HealthDisplayOption friendly_nameplates_health_text = HealthDisplayOption.CURRENT_MAX: {#prop-friendly-nameplates-health-text}

Are friendly nameplates health text currently enabled?

### bool friendly_nameplates_resource_bar = false: {#prop-friendly-nameplates-resource-bar}

Are friendly nameplates resource bars currently enabled?

### bool friendly_nameplates_cast_bar = true: {#prop-friendly-nameplates-cast-bar}

Are friendly nameplates cast bars currently enabled?

### bool class_colour_nameplates = true: {#prop-class-colour-nameplates}

Are class color nameplates currently enabled?

### bool enemy_nameplates = true: {#prop-enemy-nameplates}

Are enemy nameplates currently enabled?

### AurasOptions enemy_nameplates_auras = AurasOptions.BUFFS_AND_DEBUFFS: {#prop-enemy-nameplates-auras}

Enemy nameplates aura setting

### HealthDisplayOption enemy_nameplates_health_text = HealthDisplayOption.CURRENT_MAX: {#prop-enemy-nameplates-health-text}

Are enemy nameplates health text currently enabled?

### bool enemy_nameplates_resource_bar = true: {#prop-enemy-nameplates-resource-bar}

Are enemy nameplates resource bars currently enabled?

### bool enemy_nameplates_cast_bar = true: {#prop-enemy-nameplates-cast-bar}

Are enemy nameplates cast bars currently enabled?

### bool pet_nameplates = true: {#prop-pet-nameplates}

Are pet nameplates currently enabled?

### float nameplate_max_distance = 80.0: {#prop-nameplate-max-distance}

Maximum distance to show nameplates (0 = unlimited)

*Party Frames*

### HealthDisplayOption party_frames_health_text = HealthDisplayOption.CURRENT_MAX: {#prop-party-frames-health-text}

Is party frame health text currently enabled?

### bool party_frames_resource_bar = true: {#prop-party-frames-resource-bar}

Are party frame resource bars currently enabled?

### AurasOptions party_frames_display_debuffs = AurasOptions.BUFFS_AND_DEBUFFS: {#prop-party-frames-display-debuffs}

Are party frame debuffs currently displayed?

### bool party_frames_class_colour = true: {#prop-party-frames-class-colour}

Use class colors for party frame health bars

*Action Bar*

### bool action_bar_button_cooldown_text = true: {#prop-action-bar-button-cooldown-text}

Button cooldown text

### bool action_bar_button_gcd_text = true: {#prop-action-bar-button-gcd-text}

Button GCD text

### bool action_bar_button_left_click_use = false: {#prop-action-bar-button-left-click-use}

Mouse Click Left use

### HealthDisplayOption action_bar_health_text = HealthDisplayOption.CURRENT_MAX: {#prop-action-bar-health-text}

Health bar text display mode

### HealthDisplayOption action_bar_resource_text = HealthDisplayOption.CURRENT_MAX: {#prop-action-bar-resource-text}

Resource bar text display mode

### bool action_bar_cast_bar = true: {#prop-action-bar-cast-bar}

Action bar cast bar visibility

*Accessibility*

### Color player_color = Color(0.2, 0.6, 1.0):  # Blue {#prop-player-color}

System-wide entity colors

### Color friendly_color = Color(0.2, 1.0, 0.3):  # Green {#prop-friendly-color}

*No description yet.*

### Color hostile_color = Color(1.0, 0.2, 0.2):  # Red {#prop-hostile-color}

*No description yet.*

### Color neutral_color = Color(1.0, 1.0, 0.5):  # Yellow {#prop-neutral-color}

*No description yet.*

### Color pet_color = Color(0.4, 0.8, 1.0):  # Light Blue {#prop-pet-color}

*No description yet.*

### Color cast_bar_interruptible_color = Color(0.425, 0.781, 0.808):  # Cyan {#prop-cast-bar-interruptible-color}

Cast bar colors

### Color cast_bar_uninterruptible_color = Color(0.699, 0.699, 0.699):  # Gray {#prop-cast-bar-uninterruptible-color}

*No description yet.*

### Color action_bar_cast_bar_color = Color(1.0, 0.843, 0.0):  # Gold {#prop-action-bar-cast-bar-color}

*No description yet.*

### Color action_bar_health_color = Color(0.2, 0.8, 0.3): {#prop-action-bar-health-color}

Action bar health bar color

*Display*

### WindowModeOption window_mode = WindowModeOption.FULLSCREEN {#prop-window-mode}

The currently selected window mode option

### ResolutionOption resolution = ResolutionOption._1920_X_1080 {#prop-resolution}

The currently selected resolution option

### float resolution_scale_factor = 1.0 {#prop-resolution-scale-factor}

The current value for resolution scale factor

### int max_fps = 60 {#prop-max-fps}

The current maximum number of frames per second that can be rendered # 0 = no limit

### VsyncOption vsync_mode = VsyncOption.VSYNC_ENABLED {#prop-vsync-mode}

The currently selected vsync option

*Anti-Aliasing*

### MSAAOption msaa = MSAAOption.MSAA_DISABLED {#prop-msaa}

The currently selected multi-sample anti-aliasing mode

### PostProcessAAOption post_process_aa = PostProcessAAOption.TAA {#prop-post-process-aa}

The currently selected post-process anti-aliasing option

*Quality*

### ShadowSizeOption shadow_size = ShadowSizeOption.MEDIUM {#prop-shadow-size}

The currently selected shadow size

### ShadowQualityOption shadow_quality = ShadowQualityOption.MEDIUM {#prop-shadow-quality}

The currently selected shadow quality

### MeshLodOption mesh_lod = MeshLodOption.HIGH {#prop-mesh-lod}

The currently selected mesh lod mode

*Advanced Graphics*

### ResolutionScalingOption resolution_scaling_mode = ResolutionScalingOption.BILINEAR {#prop-resolution-scaling-mode}

The currenly selected resolution scaling mode

### float fsr_sharpness = 1.0 {#prop-fsr-sharpness}

The current value for fsr sharpness

### SSROption SSR = SSROption.DISABLED {#prop-ssr}

The currently selected shadow size

### SSAOOption SSAO = SSAOOption.DISABLED {#prop-ssao}

The currently selected shadow quality

### SSILOption SSIL = SSILOption.LOW {#prop-ssil}

The currently selected mesh lod mode

### SDFGIOption sdfgi = SDFGIOption.LOW {#prop-sdfgi}

The currently selected shadow size

### GlowOption glow = GlowOption.LOW {#prop-glow}

The currently selected shadow quality

### VolumetricFogOption volumetric_fog = VolumetricFogOption.LOW {#prop-volumetric-fog}

The currently selected mesh lod mode

*Adjustments*

### float brightness = 1.0 {#prop-brightness}

The current value for fsr sharpness

### float contrast = 1.0 {#prop-contrast}

The current value for fsr sharpness

### float saturation = 1.0 {#prop-saturation}

The current value for fsr sharpness

*Audio*

### float master_volume = 1.0 {#prop-master-volume}

The current master volume

### float music_volume = 1 {#prop-music-volume}

The current music volume

### float sfx_volume = 1 {#prop-sfx-volume}

The current sound effects volume

### float ambiance_volume = 1 {#prop-ambiance-volume}

The current ambiance volume

### float voice_volume = 1 {#prop-voice-volume}

The current voice volume

### float ui_volume = 1 {#prop-ui-volume}

The current ui volume

### Dictionary action_binding_overrides =  {#prop-action-binding-overrides}

Dictionary of action binding overrides, set by the player

### Dictionary player_accessible_settings =  {#prop-player-accessible-settings}

Dictionary tracking which settings are accessible to players in the in-game settings menu Key: setting property name (String), Value: enabled (bool) This is configured in the Game Settings editor and used at runtime to determine which settings should be displayed to players

## Variable descriptions

### SettingsConfig active = null {#var-active}

Static reference to the currently active settings (runtime instance) This is set by SettingsManager and always reflects player modifications Use SettingsConfig.active or get_active() to access runtime settings Use SettingsConfig.get_config() to access developer defaults from settings.tres

## Method descriptions

### SettingsConfig get_config() {#method-get-config}

*No description yet.*

### SettingsConfig get_active() {#method-get-active}

Gets the currently active runtime settings (with player modifications) Returns developer defaults as fallback if active settings not yet initialized

