<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProjectSetupUtility

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Utility for setting up project-wide settings like global shader parameters, audio buses, and input actions

## Methods

| | |
|---|---|
| `void` | [setup_main_scene](#method-setup-main-scene)() *static* |
| `void` | [setup_global_shader_parameters](#method-setup-global-shader-parameters)() *static* |
| `void` | [setup_audio_buses](#method-setup-audio-buses)() *static* |
| `void` | [setup_default_configs](#method-setup-default-configs)() *static* |
| `void` | [setup_input_actions](#method-setup-input-actions)() *static* |
| `void` | [setup_all](#method-setup-all)() *static* |

## Method descriptions

### void setup_main_scene() {#method-setup-main-scene}

Setup the main game scene

### void setup_global_shader_parameters() {#method-setup-global-shader-parameters}

Setup all global shader parameters needed for the project

### void setup_audio_buses() {#method-setup-audio-buses}

Setup all required audio buses: create the missing ones and save them into the project's bus layout (they would be gone at the next start otherwise)

### void setup_default_configs() {#method-setup-default-configs}

The settings files of the game (src/data/config_data/): a new project gets the toolkit's defaults, to edit in the Game Settings editors. A file that exists is never touched.

### void setup_input_actions() {#method-setup-input-actions}

Setup input actions/keybinds

### void setup_all() {#method-setup-all}

Run all setup functions

