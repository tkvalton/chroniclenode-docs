<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AreaEffect

**Inherits:** [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [MinimumApplicationAreaEffect](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect), [RevealEffect](/advanced/abilities-and-effects/effects-status-and-control/reveal-effect)

AreaEffect for effects that use a custom-defined collision shape

## Properties

| | | |
|---|---|---|
| `Shape3D` | [shape](#prop-shape) |  |
| `bool` | [follow_originator](#prop-follow-originator) | `false` |
| `bool` | [follow_originator_direction](#prop-follow-originator-direction) | `false` |
| `Vector3` | [offset](#prop-offset) | `Vector3(0, 0, 0)` |

## Methods

| | |
|---|---|
| `Array[Entity]` | [get_entities_in_area](#method-get-entities-in-area)( `effect_instance: EffectInstance` ) |
| `Array[Variant]` | [get_all_targets_in_area](#method-get-all-targets-in-area)( `effect_instance: EffectInstance` ) |
| `bool` | [is_following_originator](#method-is-following-originator)( `effect_instance: EffectInstance` ) |
| `Transform3D` | [get_current_transform](#method-get-current-transform)( `effect_instance: EffectInstance` ) |
| `void` | [update_collision_area](#method-update-collision-area)( `effect_instance: EffectInstance` ) |
| `void` | [set_area_shape](#method-set-area-shape)( `new_shape: Shape3D` ) |
| `void` | [set_follow_originator](#method-set-follow-originator)( `follow: bool, follow_direction: bool = false` ) |
| `void` | [set_position_offset](#method-set-position-offset)( `new_offset: Vector3` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

### Shape3D shape {#prop-shape}

The shape defining the area effect

### bool follow_originator = false {#prop-follow-originator}

If the area effect follows the originators transform for its lifecycle

### bool follow_originator_direction = false {#prop-follow-originator-direction}

If the area effect follow the origionator rotation for its lifecycle

### Vector3 offset = Vector3(0, 0, 0) {#prop-offset}

Offset position from target position area should be positioned

## Method descriptions

### Array[Entity] get_entities_in_area( effect_instance: EffectInstance ) {#method-get-entities-in-area}

Get entities currently in the area (updated for new base class)

### Array[Variant] get_all_targets_in_area( effect_instance: EffectInstance ) {#method-get-all-targets-in-area}

Get all targets currently in the area (including InteractableObjects)

### bool is_following_originator( effect_instance: EffectInstance ) {#method-is-following-originator}

Check if effect is following originator

### Transform3D get_current_transform( effect_instance: EffectInstance ) {#method-get-current-transform}

Get current collision transform (useful for debugging)

### void update_collision_area( effect_instance: EffectInstance ) {#method-update-collision-area}

Force update the collision area (useful if originator moves significantly)

### void set_area_shape( new_shape: Shape3D ) {#method-set-area-shape}

Set the area shape

### void set_follow_originator( follow: bool, follow_direction: bool = false ) {#method-set-follow-originator}

Set following behavior

### void set_position_offset( new_offset: Vector3 ) {#method-set-position-offset}

Set position offset

### String get_effect_description() {#method-get-effect-description}

Override description to include shape info

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

