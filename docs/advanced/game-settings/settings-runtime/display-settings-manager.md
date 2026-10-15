<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DisplaySettingsManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

DisplaySettingsManager handles video and graphics settings in the game. It controls window mode, resolution, graphics quality, and post-processing effects.

## Variables

| | | |
|---|---|---|
| `WorldEnvironment` | [world_environment](#var-world-environment) |  |
| `Viewport` | [viewport](#var-viewport) |  |

## Methods

| | |
|---|---|
| `void` | [apply_settings](#method-apply-settings)( `settings: SettingsConfig` ) |
| `void` | [restore_defaults](#method-restore-defaults)( `settings: SettingsConfig` ) |
| `void` | [apply_world_environment_settings](#method-apply-world-environment-settings)( `settings: SettingsConfig` ) |
| `void` | [set_window_mode](#method-set-window-mode)( `settings: SettingsConfig, window_mode_option: SettingsConfig.WindowModeOption` ) |
| `SettingsConfig.WindowModeOption` | [get_window_mode_option](#method-get-window-mode-option)( `settings: SettingsConfig` ) |
| `void` | [set_resolution](#method-set-resolution)( `settings: SettingsConfig, resolution_option: SettingsConfig.ResolutionOption` ) |
| `SettingsConfig.ResolutionOption` | [get_resolution_option](#method-get-resolution-option)( `settings: SettingsConfig` ) |
| `float` | [get_resolution_scale_factor_value](#method-get-resolution-scale-factor-value)( `settings: SettingsConfig` ) |
| `SettingsConfig.ResolutionScalingOption` | [get_resolution_scaling_mode_option](#method-get-resolution-scaling-mode-option)( `settings: SettingsConfig` ) |
| `float` | [get_fsr_sharpness_value](#method-get-fsr-sharpness-value)( `settings: SettingsConfig` ) |
| `SettingsConfig.VsyncOption` | [get_vsync_option](#method-get-vsync-option)( `settings: SettingsConfig` ) |
| `float` | [get_max_fps_value](#method-get-max-fps-value)( `settings: SettingsConfig` ) |
| `SettingsConfig.MSAAOption` | [get_msaa_option](#method-get-msaa-option)( `settings: SettingsConfig` ) |
| `SettingsConfig.PostProcessAAOption` | [get_post_process_aa_option](#method-get-post-process-aa-option)( `settings: SettingsConfig` ) |
| `SettingsConfig.ShadowSizeOption` | [get_shadow_size_option](#method-get-shadow-size-option)( `settings: SettingsConfig` ) |
| `SettingsConfig.ShadowQualityOption` | [get_shadow_quality_option](#method-get-shadow-quality-option)( `settings: SettingsConfig` ) |
| `SettingsConfig.MeshLodOption` | [get_mesh_lod_option](#method-get-mesh-lod-option)( `settings: SettingsConfig` ) |
| `SettingsConfig.SSROption` | [get_ssr_option](#method-get-ssr-option)( `settings: SettingsConfig` ) |
| `SettingsConfig.SSAOOption` | [get_ssao_option](#method-get-ssao-option)( `settings: SettingsConfig` ) |
| `SettingsConfig.SSILOption` | [get_ssil_option](#method-get-ssil-option)( `settings: SettingsConfig` ) |
| `SettingsConfig.SDFGIOption` | [get_sdfgi_option](#method-get-sdfgi-option)( `settings: SettingsConfig` ) |
| `SettingsConfig.GlowOption` | [get_glow_option](#method-get-glow-option)( `settings: SettingsConfig` ) |
| `SettingsConfig.VolumetricFogOption` | [get_volumetric_fog_option](#method-get-volumetric-fog-option)( `settings: SettingsConfig` ) |
| `float` | [get_brightness_value](#method-get-brightness-value)( `settings: SettingsConfig` ) |
| `float` | [get_contrast_value](#method-get-contrast-value)( `settings: SettingsConfig` ) |
| `float` | [get_saturation_value](#method-get-saturation-value)( `settings: SettingsConfig` ) |
| `void` | [apply_all_settings](#method-apply-all-settings)( `settings: SettingsConfig` ) |

## Signals

### window_mode_changed( window_mode_option: SettingsConfig.WindowModeOption ) {#signal-window-mode-changed}

Signal, emitted when the window mode has changed

### resolution_changed( resolution_option: SettingsConfig.ResolutionOption ) {#signal-resolution-changed}

Signal, emitted when the resolution has changed

## Variable descriptions

### WorldEnvironment world_environment {#var-world-environment}

WorldEnviroment ref

### Viewport viewport {#var-viewport}

The viewport the display settings apply to.

## Method descriptions

### void apply_settings( settings: SettingsConfig ) {#method-apply-settings}

Applies settings to the display system

### void restore_defaults( settings: SettingsConfig ) {#method-restore-defaults}

Restore default display settings

### void apply_world_environment_settings( settings: SettingsConfig ) {#method-apply-world-environment-settings}

Apply settings specifically for the world environment

### void set_window_mode( settings: SettingsConfig, window_mode_option: SettingsConfig.WindowModeOption ) {#method-set-window-mode}

Sets the window mode

### SettingsConfig.WindowModeOption get_window_mode_option( settings: SettingsConfig ) {#method-get-window-mode-option}

Gets the selected window mode option

### void set_resolution( settings: SettingsConfig, resolution_option: SettingsConfig.ResolutionOption ) {#method-set-resolution}

Sets the resolution

### SettingsConfig.ResolutionOption get_resolution_option( settings: SettingsConfig ) {#method-get-resolution-option}

Gets the selected resolution option

### float get_resolution_scale_factor_value( settings: SettingsConfig ) {#method-get-resolution-scale-factor-value}

Gets the resolution scale factor value

### SettingsConfig.ResolutionScalingOption get_resolution_scaling_mode_option( settings: SettingsConfig ) {#method-get-resolution-scaling-mode-option}

Gets the resolution scaling mode option

### float get_fsr_sharpness_value( settings: SettingsConfig ) {#method-get-fsr-sharpness-value}

Gets the FSR sharpness value

### SettingsConfig.VsyncOption get_vsync_option( settings: SettingsConfig ) {#method-get-vsync-option}

Gets the V-Sync option

### float get_max_fps_value( settings: SettingsConfig ) {#method-get-max-fps-value}

Gets the maximum FPS value

### SettingsConfig.MSAAOption get_msaa_option( settings: SettingsConfig ) {#method-get-msaa-option}

Gets the MSAA option

### SettingsConfig.PostProcessAAOption get_post_process_aa_option( settings: SettingsConfig ) {#method-get-post-process-aa-option}

Gets the post-process AA option

### SettingsConfig.ShadowSizeOption get_shadow_size_option( settings: SettingsConfig ) {#method-get-shadow-size-option}

Gets the shadow size option

### SettingsConfig.ShadowQualityOption get_shadow_quality_option( settings: SettingsConfig ) {#method-get-shadow-quality-option}

Gets the shadow quality option

### SettingsConfig.MeshLodOption get_mesh_lod_option( settings: SettingsConfig ) {#method-get-mesh-lod-option}

Gets the mesh LOD option

### SettingsConfig.SSROption get_ssr_option( settings: SettingsConfig ) {#method-get-ssr-option}

Gets the SSR option

### SettingsConfig.SSAOOption get_ssao_option( settings: SettingsConfig ) {#method-get-ssao-option}

Gets the SSAO option

### SettingsConfig.SSILOption get_ssil_option( settings: SettingsConfig ) {#method-get-ssil-option}

Gets the SSIL option

### SettingsConfig.SDFGIOption get_sdfgi_option( settings: SettingsConfig ) {#method-get-sdfgi-option}

Gets the SDFGI option

### SettingsConfig.GlowOption get_glow_option( settings: SettingsConfig ) {#method-get-glow-option}

Gets the glow option

### SettingsConfig.VolumetricFogOption get_volumetric_fog_option( settings: SettingsConfig ) {#method-get-volumetric-fog-option}

Gets the volumetric fog option

### float get_brightness_value( settings: SettingsConfig ) {#method-get-brightness-value}

Gets the brightness value

### float get_contrast_value( settings: SettingsConfig ) {#method-get-contrast-value}

Gets the contrast value

### float get_saturation_value( settings: SettingsConfig ) {#method-get-saturation-value}

Gets the saturation value

### void apply_all_settings( settings: SettingsConfig ) {#method-apply-all-settings}

Applies all settings from the provided SettingsConfig object

