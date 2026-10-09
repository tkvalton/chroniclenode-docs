<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LineOfSightUtility

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Centralized line of sight checking for abilities and AI detection

## Variables

| | | |
|---|---|---|
| `int` | [LOS_COLLISION_MASK](#var-los-collision-mask) | `CollisionLayerUtility._get_mask([` |

## Methods

| | |
|---|---|
| `bool` | [has_line_of_sight](#method-has-line-of-sight)( `from_pos: Vector3, to_pos: Vector3, world: World3D, exclude_objects: Array = []` ) *static* |
| `bool` | [has_entity_line_of_sight](#method-has-entity-line-of-sight)( `from_entity: Variant, to_entity: Variant` ) *static* |

## Variable descriptions

### int LOS_COLLISION_MASK = CollisionLayerUtility._get_mask([ {#var-los-collision-mask}

*No description yet.*

## Method descriptions

### bool has_line_of_sight( from_pos: Vector3, to_pos: Vector3, world: World3D, exclude_objects: Array = [] ) {#method-has-line-of-sight}

Check if there's a clear line of sight between two positions

### bool has_entity_line_of_sight( from_entity: Variant, to_entity: Variant ) {#method-has-entity-line-of-sight}

Check LOS between entities

