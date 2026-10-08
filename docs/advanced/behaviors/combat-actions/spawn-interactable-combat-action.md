<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnInteractableCombatAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Spawns an interactable during combat at a specific position

## Properties

| | | |
|---|---|---|
| `int` | [interactable_id](#prop-interactable-id) | `0` |
| `String` | [display_name](#prop-display-name) | `""` |
| `Vector3` | [spawn_position](#prop-spawn-position) | `Vector3.ZERO` |
| `bool` | [use_entity_position](#prop-use-entity-position) | `false  # Use entity's position instead of spawn_position` |
| `Vector3` | [position_offset](#prop-position-offset) | `Vector3.ZERO  # Offset from the chosen position` |
| `float` | [position_variance](#prop-position-variance) | `0.0` |
| `Vector3` | [spawn_rotation](#prop-spawn-rotation) | `Vector3.ZERO  # Euler angles in degrees` |
| `bool` | [use_entity_rotation](#prop-use-entity-rotation) | `false  # Use entity's rotation instead of spawn_rotation` |
| `Vector3` | [rotation_offset](#prop-rotation-offset) | `Vector3.ZERO  # Additional rotation offset in degrees` |
| `float` | [rotation_variance](#prop-rotation-variance) | `0.0` |
| `bool` | [face_target](#prop-face-target) | `false` |
| `bool` | [set_as_summoner](#prop-set-as-summoner) | `true` |
| `bool` | [copy_target_for_traps](#prop-copy-target-for-traps) | `true` |

## Property descriptions

*Interactable Selection*

### int interactable_id = 0 {#prop-interactable-id}

Choose spawn method: true for category/scene, false for type

### String display_name = "" {#prop-display-name}

Display name for the spawned interactable (optional)

*Positioning*

### Vector3 spawn_position = Vector3.ZERO {#prop-spawn-position}

*No description yet.*

### bool use_entity_position = false  # Use entity's position instead of spawn_position {#prop-use-entity-position}

*No description yet.*

### Vector3 position_offset = Vector3.ZERO  # Offset from the chosen position {#prop-position-offset}

*No description yet.*

### float position_variance = 0.0 {#prop-position-variance}

Add random position variance (radius in meters)

*Rotation*

### Vector3 spawn_rotation = Vector3.ZERO  # Euler angles in degrees {#prop-spawn-rotation}

*No description yet.*

### bool use_entity_rotation = false  # Use entity's rotation instead of spawn_rotation {#prop-use-entity-rotation}

*No description yet.*

### Vector3 rotation_offset = Vector3.ZERO  # Additional rotation offset in degrees {#prop-rotation-offset}

*No description yet.*

### float rotation_variance = 0.0 {#prop-rotation-variance}

Add random rotation variance (degrees)

### bool face_target = false {#prop-face-target}

Face towards entity's target (overrides other rotation settings for applicable interactables)

*Behavior*

### bool set_as_summoner = true {#prop-set-as-summoner}

Set the spawning entity as the summoner of the interactable

### bool copy_target_for_traps = true {#prop-copy-target-for-traps}

For traps: should they target the entity's current target?

