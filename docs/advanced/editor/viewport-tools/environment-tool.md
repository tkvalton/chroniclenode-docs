<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EnvironmentTool

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The Environment button of the 3D toolbar, shown while a world scene is open: it puts the sun, the sky and the environment of the world into the scene as temporary nodes (EnvironmentPreview: not saved, gone when the button is pressed again) so that the viewport shows what the game shows, with a bar (EnvironmentBar) to try other configs, the hour of the day and the video settings of the project, and to make what is shown the configs of the world.

## Variables

| | | |
|---|---|---|
| `EditorPlugin` | [plugin](#var-plugin) |  |
| `bool` | [is_active](#var-is-active) | `false` |
| `Node` | [world_scene](#var-world-scene) | `null` |
| `Button` | [button](#var-button) | `null` |
| `EnvironmentPreview` | [preview](#var-preview) | `null` |
| `EnvironmentBar` | [bar](#var-bar) | `null` |

## Methods

| | |
|---|---|
| `void` | [activate](#method-activate)() |
| `void` | [deactivate](#method-deactivate)() |
| `bool` | [is_showing](#method-is-showing)() |
| `void` | [start](#method-start)() |
| `void` | [stop](#method-stop)() |
| `Dictionary` | [world_configs](#method-world-configs)() |
| `bool` | [use_for_world](#method-use-for-world)( `sun: SunConfig, sky: SkyConfig, environment: EnvironmentConfig` ) |

## Variable descriptions

### EditorPlugin plugin {#var-plugin}

*No description yet.*

### bool is_active = false {#var-is-active}

*No description yet.*

### Node world_scene = null {#var-world-scene}

*No description yet.*

### Button button = null {#var-button}

*No description yet.*

### EnvironmentPreview preview = null {#var-preview}

*No description yet.*

### EnvironmentBar bar = null {#var-bar}

*No description yet.*

## Method descriptions

### void activate() {#method-activate}

*No description yet.*

### void deactivate() {#method-deactivate}

*No description yet.*

### bool is_showing() {#method-is-showing}

*No description yet.*

### void start() {#method-start}

Puts the preview into the scene and the bar over the viewport

### void stop() {#method-stop}

Takes the preview and the bar away

### Dictionary world_configs() {#method-world-configs}

The configs the open world has by itself: its overrides, else the defaults of the project. &#123;"time", "sun", "sky", "environment"&#125;

### bool use_for_world( sun: SunConfig, sky: SkyConfig, environment: EnvironmentConfig ) {#method-use-for-world}

Makes the shown configs the ones of the world (the default one is no override). The world data is saved

