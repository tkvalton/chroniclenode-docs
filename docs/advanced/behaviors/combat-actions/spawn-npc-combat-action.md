<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnNPCCombatAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Spawns an NPC during combat at a specific position

## Properties

| | | |
|---|---|---|
| `int` | [entity_id](#prop-entity-id) | `0` |
| `Vector3` | [spawn_position](#prop-spawn-position) | `Vector3.ZERO` |
| `bool` | [use_entity_position](#prop-use-entity-position) | `false` |
| `Vector3` | [position_offset](#prop-position-offset) | `Vector3.ZERO` |
| `bool` | [copy_target](#prop-copy-target) | `true` |

## Property descriptions

### int entity_id = 0 {#prop-entity-id}

The NPC to spawn.

### Vector3 spawn_position = Vector3.ZERO {#prop-spawn-position}

Where the NPC appears.

### bool use_entity_position = false {#prop-use-entity-position}

Use entity's position instead of spawn_position

### Vector3 position_offset = Vector3.ZERO {#prop-position-offset}

Offset from the chosen position

### bool copy_target = true {#prop-copy-target}

Should spawned NPC target the same entity

