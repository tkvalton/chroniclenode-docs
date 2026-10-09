# Game Settings: how they are built

The [Game Settings chapter](/basic/game-settings/) explains the editors. This page covers the resources behind them, how they reach the running game, how the settings editors build themselves, and the camera and controller system in some depth (for writing your own presets).

## The configuration resources

All are plain `Resource` scripts in `data_classes/settings/`, saved in `res://src/data/config_data/`.

| Resource | Class | What it holds |
|---|---|---|
| `gameplay_config.tres` | `GameplayConfig` | The rules of the game (see [Gameplay Config](/basic/game-settings/gameplay-config)) |
| `settings_config.tres` | `SettingsConfig` | The player's options, their defaults, and `player_accessible_settings` |
| `character_creation_config.tres` | `CharacterCreationSettings` | Templates and `CharacterCreationProfile`s |
| `collision_layer_config.tres` | `CollisionLayerConfig` | The mask of each layer |
| `ui_settings_config.tres` | `UISettingsConfig` | Cursors, textures, scene paths of the interface |

### Reaching a configuration

Each class has a **static** `get_config()` that loads its file the first time and keeps it (a runtime cache, not in the editor, where the file is read each time so edits show at once). A project with no file yet gets the defaults of the class (`create_default()`). So code anywhere can write `GameplayConfig.get_config().max_party_size`.

For the combat rules there is a thin layer, `CombatOptions` (`runtime_classes/combat/combat_options.gd`), whose static functions read the config and fall back to a default when there is none (`round_damage()`, `capacity_change_rule()`, `default_npc_growth_profile_id()` ...). Use it in code that also runs in tests without a config.

## The player's settings: two tiers

`SettingsManager` (created by the game host, kept on the `SystemHub`) is a `RefCounted`:

1. `load_settings()` loads the developer defaults, `SettingsConfig.get_config()`.
2. It opens `user://settings.cfg` with `SettingsFile` (a `ConfigFile` subclass) and `read_settings(defaults)` returns a **new** `SettingsConfig` with the player's changes on top.
3. That object becomes `SettingsConfig.active`, the one the whole game reads. `settings_loaded` is emitted and the specialised managers apply it.
4. `save_settings()` writes only the properties that **differ from the defaults** (`SettingsFile.write_settings`). `restore_default_settings()` and `has_unsaved_changes()` complete it.

`SettingsFile` works by **reflection** over the exports of `SettingsConfig`, so a setting you add is saved and loaded without code. The specialised managers (`runtime_classes/settings/`) apply the settings that need work:

| Manager | Applies |
|---|---|
| `DisplaySettingsManager` | Window mode, resolution, scale, FPS, VSync, anti-aliasing, shadows, SSR / SSAO / SSIL / SDFGI / glow / volumetric fog, brightness, contrast, saturation, to the viewport and the `Environment` |
| `AudioSettingsManager` | The volume of the audio buses |
| `KeybindSettingsManager` | The rebound actions (`action_binding_overrides`) |

The in-game options menu (`ui_scenes/menus/settings/settings_menu.gd`) also builds itself from `SettingsConfig` by reflection, showing only the properties ticked in `player_accessible_settings`. It edits `SettingsConfig.active` directly, so changes apply live. **Each instance must be initialised with `initialize_ui(system_hub)`.**

## The configuration editors

`ConfigEditor` (`editor_components/editors/settings/config_editor.gd`) is the base. It makes a `TabContainer` by reflection from the exports of a resource: an `@export_category` becomes a tab, an `@export_group` a heading, each export a control chosen by its type, and the `##` comment above it the tooltip (`_extract_doc_comments` reads the script). Subclasses override a few functions:

| Override | For |
|---|---|
| `_get_resource_type()`, `_get_resource_path()` | Which class, where it is saved |
| `_get_header_text()`, `_get_setting_descriptions()` | The line at the top; tooltips that do not come from comments |
| `_should_skip_property(name)` | Properties handled by a custom control |
| `_get_additional_buttons()`, `_create_additional_tabs()` | Extra buttons (Validate, Clear User Settings) and tabs (Keybinds, Templates, Profiles) |
| `_create_control_for_type(prop_info, instance)` | A custom control for one property (the Gameplay Config does this for the controller pickers, the experience table, the level gap, the kill experience and the growth profile) |

The script's own category must be skipped when building tabs: use `PropertyCategoryUtil.is_script_category` (the base does; a hand-written builder that forgets it shows a stray tab named after the script).

**To add a setting:** add an `@export` (with a `##` comment) to the right group of `GameplayConfig` or `SettingsConfig`, and read it from code. The editor shows it, the file stores it. For a custom control, override `_create_control_for_type`.

## Collision layers

`CollisionLayerUtility` (`runtime_classes/utility/collision_layer_utility.gd`) has the `CollisionLayer` enum (1 to 13), the `HitMode` enum for projectiles, and the **default masks**. `CollisionLayerConfig.layer_collision_masks` (layer -> bitmask) holds the project's masks; it fills itself with the defaults when empty. `layer_collides_with`, `add_layer_to_mask` and `remove_layer_from_mask` are the helpers. Code that sets up a body asks the utility for the layer and mask (`CollisionLayerUtility.initialize()` at start-up loads the config), so a change in the editor applies to entities made after it.

## Character creation

`CharacterCreationSettings` has `available_templates: Array[CharacterDefinition]` and `skeleton_profiles: Array[CharacterCreationProfile]`; `validate()` returns `{type, message, severity}` rows. A profile (`character_creation_profile.gd`) holds the body-type scenes, voice and animation options, `active_facial_features: Array[GeneralSkeleton.FacialFeature]`, `blend_shape_map`, the three colour palettes and `allowed_player_classes`. The creator builds a `CustomCharacterDefinition` (a `CharacterDefinition` that remembers its `profile_id` and a **customization snapshot**: body type, colours, blend shape values, voice, animation, class). Saving writes the snapshot, loading calls `SaveLoadUtil._recreate_custom_character_definition`, which finds the profile by id and calls `apply_customization_snapshot`, which `CustomSkeleton.apply_customization` then applies to the materials. See [Save and load](/advanced/save-and-load).

## Camera, controller and input

Three cooperating systems: a **controller** (`ControllerLogic`, the player's intent), a **camera** (`CameraLogic`, the framing) and the **`InputManager`** (the single owner of raw gameplay input).

### Strategy-as-resource

Both are `Resource` presets chosen in the `GameplayConfig` (`camera_logic`, `player_controller_logic`) and used through thin host nodes owned by the `PartyManager`: `CameraController` (a `Node3D` with the camera socket) and `PlayerController`. The hosts take a **copy** of the preset at the start so runtime state (angles, gesture flags, lock state) never leaks into the shared `.tres` or the next game. Presets are `@tool` scripts so the editor lists them.

The controller runs before the camera each frame (child order under the party manager), so the camera reads the body the controller has just turned.

### The input pipeline

`GameHost._input` handles only the pause key. Everything else goes to `InputManager`, which runs in two phases: `_input` for **releases** and focus loss (never swallowed by the UI, so a gesture can always end), `_unhandled_input` for presses, motion and the rest (only if no `Control` took them). So `Control.mouse_filter` decides whether a click reaches the world: `STOP` on panels and buttons, `IGNORE` or `PASS` on HUD roots, containers and overlays. A full-screen root `Control` left at the default `STOP` swallows every world click (`log_input_routing` in the Gameplay Config prints who ate a click).

Gameplay input runs only when the game state is `MAIN_GAME` and nothing pauses it. It does **not** stop for an open window panel: the player can walk with the inventory open.

| What | Delivered as | To |
|---|---|---|
| Keys, input actions, clicks, motion | the raw event (`handle_input_event`) | the controller |
| Mouse look | `on_look_state` / `handle_look(kind, delta_radians)` | the controller first (it turns the body), then the camera |
| A click that was not a drag | `on_click_completed` | the controller |
| Wheel notches | `handle_zoom(steps)` | the camera |

**Gestures.** `LookGestureTracker` (a pure class, unit tested) turns presses, motion and releases into `STARTED`, `DELTA`, `ENDED` and `CLICK`. A preset claims gestures by returning `LookBinding`s (`button`, `kind`, `requires_drag`) from `get_look_bindings()`. The kinds are `CHARACTER_LOOK` (the controller turns the body, the camera applies pitch), `FREE_LOOK` (orbit without turning the body), `VIEW_ROTATE` (middle-drag for top-down views) and `CLICK_ONLY` (report a click on release unless it was dragged). The two sides' claims are **merged**: the same button and kind from both is the normal shared case; a button the controller lists in `get_exclusive_buttons()` is its own; two different kinds on one button, the controller wins. While a look gesture is active only `InputManager` touches `Input.mouse_mode` (it captures the cursor and warps it back to where it was pressed); pointer picking during that time uses the frozen press position (`MouseUtility.get_pointer_position()`, never `get_viewport().get_mouse_position()`).

### Who owns what

| Quantity | Owner |
|---|---|
| Body yaw | The `Entity` facing API, driven by the controller for players and by navigation for NPCs. The camera only reads it |
| Camera yaw and pitch | The camera logic. The controller reads `get_view_yaw()` |
| Gestures and cursor capture | `InputManager` |
| Sensitivity and invert | The player's `SettingsConfig`, applied once in `InputManager` (radians to both) and scaled by the preset's `look_sensitivity_scale` |

The two control schemes are chosen on the controller by `get_movement_basis()` (`CHARACTER` or `CAMERA`); the camera asks the controller, so they always agree.

### The entity facing API

Players and NPCs share `Entity`, so facing is private state with methods: `turn_by(delta_yaw)` (the only integrator of mouse-look yaw), `request_facing_yaw(yaw, speed)` (every automatic turn: navigation, abilities, behavior tasks, movement effects), `apply_facing_yaw`, `begin_direct_facing(block_auto_face)` / `end_direct_facing()` (the mouse-look **lease**), `is_auto_facing_blocked()`, `is_turning()`, `get_target_facing_yaw()` and `stop_turning()`. Never write `rotation.y` directly.

### Writing a preset

**A camera** (`extends CameraLogic`, `@tool`, saved in `src/data/controller_logic/camera/`): override `setup`, `process_camera(delta)`, `set_target`, `cleanup`, `get_type_display_name` and `validate`. For input return `true` from `uses_input_manager()`, declare gestures in `get_look_bindings()` and implement `handle_look`, `on_look_state` and `handle_zoom`; never poll buttons or set the mouse mode. Honour the controller's basis with `_controller_moves_relative_to_camera()`. Expose `get_view_yaw()` if your yaw is not the socket's. Scale per-frame constants with `FacingMath.frame_scale`, `smoothing_weight` and `decay_factor` for frame-rate independence. Bind the target's lock with `bind_lock_source(player)` in `set_target` and undo it in `cleanup`.

**A controller** (`extends ControllerLogic`, `@tool`, saved in `src/data/controller_logic/player/`): handle actions in `handle_input_event` (ignore mouse motion), declare gestures in `get_look_bindings()` and owned buttons in `get_exclusive_buttons()`, turn the player only through the facing API, return your scheme from `get_movement_basis()`, and `can_handle_direct_movement()` true if you move the player with WASD (so a free camera does not also pan).

The editor lists any script in `data_classes/controller_logic/camera/` and `.../player/` that extends `CameraLogic` or `ControllerLogic` (`ControllerLogicEditor` scans the two folders).

## See also

- [Definitions and instances](/advanced/definitions-and-instances), [Game host](/advanced/game-host), [Save and load](/advanced/save-and-load).
