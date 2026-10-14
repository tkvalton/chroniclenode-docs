<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterPreviewManager

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

Manages a 3D character preview for UI panels Creates a synchronized copy of the entity's skeleton that mirrors visual changes

## Variables

| | | |
|---|---|---|
| `Entity` | [target_entity](#var-target-entity) |  |
| `GeneralSkeleton` | [preview_skeleton](#var-preview-skeleton) |  |
| `AnimationPlayer` | [preview_animation_player](#var-preview-animation-player) |  |
| `bool` | [is_initialized](#var-is-initialized) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup_preview](#method-setup-preview)( `entity: Entity, player_slot: int` ) |
| `void` | [cleanup](#method-cleanup)() |

## Variable descriptions

### Entity target_entity {#var-target-entity}

Reference to the entity being previewed

### GeneralSkeleton preview_skeleton {#var-preview-skeleton}

The preview skeleton instance (GeneralSkeleton or ModularSkeleton)

### AnimationPlayer preview_animation_player {#var-preview-animation-player}

Animation player for the preview

### bool is_initialized = false {#var-is-initialized}

Track if this preview has been initialized

## Method descriptions

### void setup_preview( entity: Entity, player_slot: int ) {#method-setup-preview}

Initialize the preview with a target entity

### void cleanup() {#method-cleanup}

Disconnect signals and cleanup

