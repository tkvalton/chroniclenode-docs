<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementVolume

**Inherits:** [SpaceVolume](/advanced/world/runtime/space-volume) < [Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)

A space that changes how whoever is in it moves: water to swim in, a room with no gravity, a cloud to fly through, a pool of lava that hurts. Put it in a world scene (Add Object &gt; Add Movement Volume), give its CollisionShape3D the shape of the space, and choose what it does.

## Description

- **Movement.** Inside it an entity moves in 3D: swimming (the swim animations) or flying (nothing pulls it down), with its own speed, vertical speed and what it does when nobody steers (stay, float to the surface, sink). The player swims up with jump and down with crouch, and moves where the camera looks.
- **Shallow water.** A volume with a surface (water) lets entities WADE while the water is shallower than the wade depth: they walk, slower. Deeper, they swim. The top of the shape is the surface; the water you see is a mesh of your own placed there.
- **Breath.** A volume can make whoever is under the surface hold its breath (the duration is a setting of the Gameplay Config) and drown when it runs out.
- **Effects.** Effects (damage over time for lava, a slow, a buff) that are on whoever is inside, and come off when it leaves.
- **The camera.** When the camera itself is inside, the screen is tinted and fogged (an underwater look), and the sound changes with an AudioProfile (muffled under water).

The presets fill the fields for the usual cases: Water, Weightless and Lava.

## Properties

| | | |
|---|---|---|
| `Preset` | [preset](#prop-preset) | `Preset.CUSTOM:` |
| `MovementClaim.Mode` | [mode](#prop-mode) | `MovementClaim.Mode.SWIM` |
| `Affects` | [affects](#prop-affects) | `Affects.EVERYONE` |
| `float` | [speed_multiplier](#prop-speed-multiplier) | `0.7` |
| `float` | [vertical_speed](#prop-vertical-speed) | `3.0` |
| `MovementClaim.IdleBuoyancy` | [idle_buoyancy](#prop-idle-buoyancy) | `MovementClaim.IdleBuoyancy.FLOAT_UP` |
| `bool` | [follows_camera_pitch](#prop-follows-camera-pitch) | `true` |
| `bool` | [has_surface](#prop-has-surface) | `true` |
| `float` | [wade_depth](#prop-wade-depth) | `1.0` |
| `float` | [wade_speed_multiplier](#prop-wade-speed-multiplier) | `0.8` |
| `bool` | [allows_surface_leap](#prop-allows-surface-leap) | `true` |
| `Submerged` | [holds_breath_when](#prop-holds-breath-when) | `Submerged.HEAD_UNDER_SURFACE` |
| `float` | [head_height](#prop-head-height) | `1.6` |
| `Array[int]` | [effects_inside](#prop-effects-inside) | `[]` |
| `bool` | [camera_effect_enabled](#prop-camera-effect-enabled) | `true` |
| `Color` | [camera_tint](#prop-camera-tint) | `Color(0.1, 0.35, 0.45, 0.3)` |
| `Color` | [camera_fog_color](#prop-camera-fog-color) | `Color(0.08, 0.28, 0.38)` |
| `float` | [camera_fog_density](#prop-camera-fog-density) | `0.05` |
| `AudioProfile` | [audio_profile](#prop-audio-profile) | `null` |

## Methods

| | |
|---|---|
| `float` | [depth_of](#method-depth-of)( `entity: Entity` ) |

## Enumerations

### enum Preset {#enum-preset}

The usual volumes. Picking one fills the fields below (what you set afterwards is yours)

- **CUSTOM** = `0`
- **WATER** = `1`
- **WEIGHTLESS** = `2`
- **LAVA** = `3`

### enum Affects {#enum-affects}

Who the volume works on

- **EVERYONE** = `0`
- **PLAYERS** = `1`
- **NPCS** = `2`

### enum Submerged {#enum-submerged}

When an entity inside holds its breath

- **NEVER** = `0`
- **HEAD_UNDER_SURFACE** = `1`
- **ALWAYS_INSIDE** = `2`

## Constants

- `float` **EFFECT_CHECK_INTERVAL** = `0.5` - How often (seconds) the entities inside are looked at again for the effects they should have
- `float` **RECONCILE_INTERVAL** = `1.0` - How often (seconds) the bodies inside are counted again, in case the engine missed one entering

## Property descriptions

### Preset preset = Preset.CUSTOM: {#prop-preset}

*No description yet.*

*Movement*

### MovementClaim.Mode mode = MovementClaim.Mode.SWIM {#prop-mode}

How the entities move inside: swimming, flying, or Ground (they walk: the volume only slows them or applies effects, like lava)

### Affects affects = Affects.EVERYONE {#prop-affects}

Who the volume works on

### float speed_multiplier = 0.7 {#prop-speed-multiplier}

The speed inside compared with outside (0.7 = 70 %)

### float vertical_speed = 3.0 {#prop-vertical-speed}

How fast an entity goes up and down (units per second)

### MovementClaim.IdleBuoyancy idle_buoyancy = MovementClaim.IdleBuoyancy.FLOAT_UP {#prop-idle-buoyancy}

What an entity does when nobody steers it: stay where it is, rise to the surface, or sink

### bool follows_camera_pitch = true {#prop-follows-camera-pitch}

Moving forward goes where the camera looks, up and down included (a camera that looks around freely; the top-down cameras never do)

*Surface and shallow water*

### bool has_surface = true {#prop-has-surface}

The top of the shape is a surface (water): an entity cannot swim up through it and floats just below it. Off for a volume with no top (a weightless room, the sky)

### float wade_depth = 1.0 {#prop-wade-depth}

Where the water is shallower than this an entity wades (walks, slower); deeper it swims. 0 = it swims as soon as it is in. Needs a surface

### float wade_speed_multiplier = 0.8 {#prop-wade-speed-multiplier}

The speed while wading compared with outside the water

### bool allows_surface_leap = true {#prop-allows-surface-leap}

An entity swimming up to the surface can leap out of the water with jump

*Breath*

### Submerged holds_breath_when = Submerged.HEAD_UNDER_SURFACE {#prop-holds-breath-when}

When an entity inside holds its breath: never, when its head is under the surface, or always when inside (a room with no air). The duration is in the Gameplay Config &gt; Breath

### float head_height = 1.6 {#prop-head-height}

How high above its feet the head of an entity is (to know when it is under the surface)

*Effects while inside*

### Array[int] effects_inside = [] {#prop-effects-inside}

Effects that are on every entity inside while it is inside (a damage over time for lava, a slow). They are put back when they end, and taken off when the entity leaves

*Camera and sound*

### bool camera_effect_enabled = true {#prop-camera-effect-enabled}

When the camera is inside the volume the screen gets the look below (the camera, not the character: a swimmer with its head above the surface sees clearly)

### Color camera_tint = Color(0.1, 0.35, 0.45, 0.3) {#prop-camera-tint}

The color laid over the screen (the alpha is how strong)

### Color camera_fog_color = Color(0.08, 0.28, 0.38) {#prop-camera-fog-color}

The color of the fog inside

### float camera_fog_density = 0.05 {#prop-camera-fog-density}

How thick the fog is (0 = none)

### AudioProfile audio_profile = null {#prop-audio-profile}

How the sound changes while the camera is inside (muffled under water; echo in a cave). Empty = the sound does not change. The camera, not the character, decides

## Method descriptions

### float depth_of( entity: Entity ) {#method-depth-of}

How deep an entity stands below the surface (its feet)

