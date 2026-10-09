<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DisplaySettingsManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

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

### resolution_changed( resolution_option: SettingsConfig.ResolutionOption ) {#signal-resolution-changed}

## Variable descriptions

### WorldEnvironment world_environment {#var-world-environment}

WorldEnviroment ref

### Viewport viewport {#var-viewport}

*No description yet.*

## Method descriptions

### void apply_settings( settings: SettingsConfig ) {#method-apply-settings}

Applies settings to the display system

### void restore_defaults( settings: SettingsConfig ) {#method-restore-defaults}

Restore default display settings

### void apply_world_environment_settings( settings: SettingsConfig ) {#method-apply-world-environment-settings}

Apply settings specifically for the world environment

### void set_window_mode( settings: SettingsConfig, window_mode_option: SettingsConfig.WindowModeOption ) {#method-set-window-mode}

*No description yet.*

### SettingsConfig.WindowModeOption get_window_mode_option( settings: SettingsConfig ) {#method-get-window-mode-option}

*No description yet.*

### void set_resolution( settings: SettingsConfig, resolution_option: SettingsConfig.ResolutionOption ) {#method-set-resolution}

Sets the resolution

### SettingsConfig.ResolutionOption get_resolution_option( settings: SettingsConfig ) {#method-get-resolution-option}

*No description yet.*

### float get_resolution_scale_factor_value( settings: SettingsConfig ) {#method-get-resolution-scale-factor-value}

*No description yet.*

### SettingsConfig.ResolutionScalingOption get_resolution_scaling_mode_option( settings: SettingsConfig ) {#method-get-resolution-scaling-mode-option}

*No description yet.*

### float get_fsr_sharpness_value( settings: SettingsConfig ) {#method-get-fsr-sharpness-value}

*No description yet.*

### SettingsConfig.VsyncOption get_vsync_option( settings: SettingsConfig ) {#method-get-vsync-option}

*No description yet.*

### float get_max_fps_value( settings: SettingsConfig ) {#method-get-max-fps-value}

*No description yet.*

### SettingsConfig.MSAAOption get_msaa_option( settings: SettingsConfig ) {#method-get-msaa-option}

*No description yet.*

### SettingsConfig.PostProcessAAOption get_post_process_aa_option( settings: SettingsConfig ) {#method-get-post-process-aa-option}

*No description yet.*

### SettingsConfig.ShadowSizeOption get_shadow_size_option( settings: SettingsConfig ) {#method-get-shadow-size-option}

*No description yet.*

### SettingsConfig.ShadowQualityOption get_shadow_quality_option( settings: SettingsConfig ) {#method-get-shadow-quality-option}

*No description yet.*

### SettingsConfig.MeshLodOption get_mesh_lod_option( settings: SettingsConfig ) {#method-get-mesh-lod-option}

*No description yet.*

### SettingsConfig.SSROption get_ssr_option( settings: SettingsConfig ) {#method-get-ssr-option}

*No description yet.*

### SettingsConfig.SSAOOption get_ssao_option( settings: SettingsConfig ) {#method-get-ssao-option}

*No description yet.*

### SettingsConfig.SSILOption get_ssil_option( settings: SettingsConfig ) {#method-get-ssil-option}

*No description yet.*

### SettingsConfig.SDFGIOption get_sdfgi_option( settings: SettingsConfig ) {#method-get-sdfgi-option}

*No description yet.*

### SettingsConfig.GlowOption get_glow_option( settings: SettingsConfig ) {#method-get-glow-option}

*No description yet.*

### SettingsConfig.VolumetricFogOption get_volumetric_fog_option( settings: SettingsConfig ) {#method-get-volumetric-fog-option}

*No description yet.*

### float get_brightness_value( settings: SettingsConfig ) {#method-get-brightness-value}

*No description yet.*

### float get_contrast_value( settings: SettingsConfig ) {#method-get-contrast-value}

*No description yet.*

### float get_saturation_value( settings: SettingsConfig ) {#method-get-saturation-value}

*No description yet.*

### void apply_all_settings( settings: SettingsConfig ) {#method-apply-all-settings}

*No description yet.*

