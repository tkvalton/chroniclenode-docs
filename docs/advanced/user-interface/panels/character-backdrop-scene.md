<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterBackdropScene

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

This class represents the 3D scene setup for displaying character previews in the UI. It handles camera positioning, lighting, and the preview rigs.

## Variables

| | | |
|---|---|---|
| `Array[CharacterPreviewManager]` | [companion_previews](#var-companion-previews) |  |
| `Array[Camera3D]` | [cameras](#var-cameras) |  |

## Methods

| | |
|---|---|
| `Array[Camera3D]` | [setup_character_backdrops](#method-setup-character-backdrops)( `system_hub: GameHost.SystemHub` ) |

## Variable descriptions

### Array[CharacterPreviewManager] companion_previews {#var-companion-previews}

----------------------------------------- Properties -----------------------------------------

### Array[Camera3D] cameras {#var-cameras}

The cameras of the preview.

## Method descriptions

### Array[Camera3D] setup_character_backdrops( system_hub: GameHost.SystemHub ) {#method-setup-character-backdrops}

Sets up character previews for all active player slots Returns: Array of cameras that can be used with subviewports

