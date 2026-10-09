<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AimProvider

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

**Inherited by:** [CameraAimProvider](/advanced/game-settings/camera-and-controller/camera-aim-provider)

Where an entity is aiming. An aimed ability asks `Entity.get_aim()` and never knows what drives it: the controller of the player in control gives its entity a CameraAimProvider (the crosshair or the mouse pointer); everything else (NPCs, companions) uses this one, which aims at the entity's target. A game with another way of aiming (a gamepad stick, a lock-on camera) writes its own subclass and assigns it to `Entity.aim_provider`.

## Description

The answer is a Dictionary: &#123;"valid": bool, "origin": Vector3 (the muzzle), "direction": Vector3 (muzzle to point), "point": Vector3 (what the aim hits, or the point at max range), "entity": Variant (the entity or interactable the aim hits, null if none)&#125;

## Methods

| | |
|---|---|
| `Dictionary` | [get_aim](#method-get-aim)( `entity: Entity, max_range: float` ) |
| `Vector3` | [get_muzzle](#method-get-muzzle)( `entity: Entity` ) |
| `Dictionary` | [resolve_ray](#method-resolve-ray)( `entity: Entity, ray_origin: Vector3, ray_direction: Vector3, max_range: float` ) |

## Constants

- `float` **DEFAULT_EYE_HEIGHT** = `1.5` - Height of the muzzle above the feet when the entity has no head attachment

## Method descriptions

### Dictionary get_aim( entity: Entity, max_range: float ) {#method-get-aim}

*No description yet.*

### Vector3 get_muzzle( entity: Entity ) {#method-get-muzzle}

The origin of a shot: the head (or the eye height above the feet)

### Dictionary resolve_ray( entity: Entity, ray_origin: Vector3, ray_direction: Vector3, max_range: float ) {#method-resolve-ray}

An aim along a ray (a camera ray): what the ray hits first, or the point at `max_range` along it. The entity itself is skipped. The direction of the shot is from the muzzle to that point, so a camera that looks past the shoulder still shoots where it looks

