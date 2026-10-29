<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementVolume

**Inherits:** [SpaceVolume](/advanced/world/runtime/space-volume) < [Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)

A space that changes how whoever is in it moves: water to swim in, a room with no gravity, a cloud to fly through, a pool of lava that hurts. Put it in a world scene (the Volumes button of the 3D toolbar), give its CollisionShape3D the shape of the space, and choose what it does.

## Description

- **Movement.** Inside it an entity moves in 3D: swimming (the swim animations) or flying (nothing pulls it down), with its own speed, vertical speed and what it does when nobody steers (stay, float to the surface, sink). The player swims up with jump and down with crouch, and moves where the camera looks.
- **Shallow water.** A volume with a surface (water) lets entities WADE while the water is shallower than the wade depth: they walk, slower. Deeper, they swim. The top of the shape is the surface; the water you see is a mesh of your own placed there.
- **Breath.** A volume can make whoever is under the surface hold its breath (the duration is a setting of the Gameplay Config) and drown when it runs out.
- **Effects.** Effects (damage over time for lava, a slow, a buff) that are on whoever is inside, and come off when it leaves.
- **The camera.** When the camera itself is inside, the screen is tinted and fogged (an underwater look), and the sound changes with an AudioProfile (muffled under water).

The presets fill the fields for the usual cases: Water, Weightless, Lava and River (the Unique Object panel has a menu of them, and *Save as preset* for your own).

- **Flow.** A volume can carry whoever is in it, like a river or a wind: a direction (the way the volume points: turn it) and a speed. It is added to how they move: a strong current sweeps them away, a weak one can be swum against.
- **The look.** A volume draws nothing by itself. Give it a **look** and it draws the top, the bottom or all six faces of its box shape with a material of yours (a shader, or a texture): the water, the lava,

a cloud. The Water and Lava presets come with a shader of the toolkit.

## Properties

| | | |
|---|---|---|
| `String` | [preset_name](#prop-preset-name) | `""` |
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
| `float` | [swim_depth](#prop-swim-depth) | `1.35` |
| `bool` | [allows_surface_leap](#prop-allows-surface-leap) | `true` |
| `Submerged` | [holds_breath_when](#prop-holds-breath-when) | `Submerged.HEAD_UNDER_SURFACE` |
| `float` | [head_height](#prop-head-height) | `1.6` |
| `Array[int]` | [effects_inside](#prop-effects-inside) | `[]` |
| `float` | [flow_strength](#prop-flow-strength) | `0.0:` |
| `Vector3` | [flow_direction](#prop-flow-direction) | `Vector3(0.0, 0.0, -1.0):` |
| `bool` | [flow_pushes_walkers](#prop-flow-pushes-walkers) | `false` |
| `VolumeLook.Faces` | [look_faces](#prop-look-faces) | `VolumeLook.Faces.NONE:` |
| `Material` | [look_material](#prop-look-material) | `null:` |
| `bool` | [look_follows_flow](#prop-look-follows-flow) | `true:` |
| `Texture2D` | [look_texture](#prop-look-texture) | `null:` |
| `Color` | [look_tint](#prop-look-tint) | `Color(0.2, 0.5, 0.7, 0.6):` |
| `bool` | [look_double_sided](#prop-look-double-sided) | `true:` |
| `int` | [look_grid](#prop-look-grid) | `24:` |
| `bool` | [reflection_probe](#prop-reflection-probe) | `false:` |
| `bool` | [reflection_probe_updates](#prop-reflection-probe-updates) | `false:` |
| `float` | [reflection_probe_height](#prop-reflection-probe-height) | `4.0:` |
| `float` | [reflection_probe_range](#prop-reflection-probe-range) | `20.0:` |
| `bool` | [camera_effect_enabled](#prop-camera-effect-enabled) | `true` |
| `Color` | [camera_tint](#prop-camera-tint) | `Color(0.1, 0.35, 0.45, 0.3)` |
| `Color` | [camera_fog_color](#prop-camera-fog-color) | `Color(0.08, 0.28, 0.38)` |
| `float` | [camera_fog_density](#prop-camera-fog-density) | `0.05` |
| `AudioProfile` | [audio_profile](#prop-audio-profile) | `null` |
| `String` | [footstep_surface](#prop-footstep-surface) | `""` |
| `String` | [footstep_swim](#prop-footstep-swim) | `""` |

## Methods

| | |
|---|---|
| `void` | [apply_preset](#method-apply-preset)() |
| `ReflectionProbe` | [get_reflection_probe](#method-get-reflection-probe)() |
| `ArrayMesh` | [get_look_mesh](#method-get-look-mesh)() |
| `Vector3` | [get_flow_velocity](#method-get-flow-velocity)() |
| `Vector3` | [get_flow_at](#method-get-flow-at)( `_world_point: Vector3` ) |
| `float` | [get_surface_y_at](#method-get-surface-y-at)( `_world_point: Vector3` ) |
| `float` | [depth_of](#method-depth-of)( `entity: Entity` ) |
| `float` | [horizontal_distance](#method-horizontal-distance)( `world_point: Vector3` ) |

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
- `int` **LOOK_LAYER** = `1 << 19` - The layer of the look when the volume has a reflection probe (layer 20): the probe leaves it out, so the water does not mirror itself. Cameras see all layers

## Property descriptions

### String preset_name = "" {#prop-preset-name}

The name of the preset this volume was made from (the menu of the Unique Object panel; empty = none). It only says where the numbers came from: they are this volume's own now

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

### float swim_depth = 1.35 {#prop-swim-depth}

How deep a swimmer sits in the water: the distance from the surface down to its feet while it floats, in metres. About the height of a person's shoulders, so that the body is in the water and the head is out. Swimming up stops a little higher than this. 0 = worked out from the wade depth (80 %)

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

*Flow*

### float flow_strength = 0.0: {#prop-flow-strength}

How fast the water or the air carries whoever is in it, in metres per second (0 = it is still). A river, a current, a wind

### Vector3 flow_direction = Vector3(0.0, 0.0, -1.0): {#prop-flow-direction}

The way it carries them, in the space of the volume: turn the volume to point it (the default is the front of the volume, -Z)

### bool flow_pushes_walkers = false {#prop-flow-pushes-walkers}

Carries entities that walk through it (shallow water) too, and not only the ones that swim or fly

*Look*

### VolumeLook.Faces look_faces = VolumeLook.Faces.NONE: {#prop-look-faces}

What the volume draws: nothing, the top face (water), the bottom, or all six faces (a box of fog). It is made from a BOX shape; other shapes draw nothing

### Material look_material = null: {#prop-look-material}

The material of the look: any material, a ShaderMaterial included. Empty = a plain material with the texture and the tint below

### bool look_follows_flow = true: {#prop-look-follows-flow}

When the shader of the material has a flow direction and a flow speed (the river shader), they are the flow of this volume, set for you. Turn it off to set them yourself in the parameters below

### Texture2D look_texture = null: {#prop-look-texture}

A texture for the plain material (used when there is no material above)

### Color look_tint = Color(0.2, 0.5, 0.7, 0.6): {#prop-look-tint}

The tint of the plain material (the alpha makes it see-through)

### bool look_double_sided = true: {#prop-look-double-sided}

Every face is made twice, looking both ways, so the surface is seen from under it too

### int look_grid = 24: {#prop-look-grid}

How many cells the top and the bottom are cut in along the long side: a shader that moves the surface (waves) needs the vertices. 0 = worked out from the size of the volume (about half a metre a cell, up to 128), which water wants

*Reflections*

### bool reflection_probe = false: {#prop-reflection-probe}

Gives the water a reflection probe: a picture of what is around it (trees, rocks, buildings, not only the sky), taken from above the water, that the water mirrors. For a box shape. The probe is only as exact as one picture from one point: good for a pond or a lake, rough for a long river (use several volumes). It also changes the reflections of what stands inside its box

### bool reflection_probe_updates = false: {#prop-reflection-probe-updates}

Take the picture again every frame, so that what moves shows in the water (it costs more). Off: once, when the volume is made

### float reflection_probe_height = 4.0: {#prop-reflection-probe-height}

How high above the water the picture is taken, in metres

### float reflection_probe_range = 20.0: {#prop-reflection-probe-range}

How far around the volume the probe sees and reaches, in metres

*Camera*

### bool camera_effect_enabled = true {#prop-camera-effect-enabled}

When the camera is inside the volume the screen gets the look below (the camera, not the character: a swimmer with its head above the surface sees clearly)

### Color camera_tint = Color(0.1, 0.35, 0.45, 0.3) {#prop-camera-tint}

The color laid over the screen (the alpha is how strong)

### Color camera_fog_color = Color(0.08, 0.28, 0.38) {#prop-camera-fog-color}

The color of the fog inside

### float camera_fog_density = 0.05 {#prop-camera-fog-density}

How thick the fog is (0 = none)

*Sound*

### AudioProfile audio_profile = null {#prop-audio-profile}

How the sound changes while the camera is inside (muffled under water; echo in a cave). Empty = the sound does not change. The camera, not the character, decides

### String footstep_surface = "" {#prop-footstep-surface}

What the footsteps of whoever is in the volume sound like while they WALK or WADE: the kind of ground (the words of the folders of your footstep sounds: "water", "mud", "snow"). It wins over the terrain and the surface type of the floor. Empty = the ground under them decides

### String footstep_swim = "" {#prop-footstep-swim}

What the sounds of whoever SWIMS in the volume are: the kind of ground ("water_deep"). A swimmer makes the "swim" sounds of it, and the "jump" sounds when it jumps into the water (and does not land: it is in the volume) or leaps out of it. Empty = the footstep surface above is used, and "water" when that is empty too

## Method descriptions

### void apply_preset() {#method-apply-preset}

Fills the fields from the preset (picking a preset in the inspector does this; code that makes a volume calls it).

### ReflectionProbe get_reflection_probe() {#method-get-reflection-probe}

The probe of the volume (null when it has none)

### ArrayMesh get_look_mesh() {#method-get-look-mesh}

The mesh of the look (null when there is none).

### Vector3 get_flow_velocity() {#method-get-flow-velocity}

The push of the flow in the world: the direction of the volume turned the way the volume is turned, at the strength of the flow. Zero when it does not flow.

### Vector3 get_flow_at( _world_point: Vector3 ) {#method-get-flow-at}

The push of the flow at a point of the world. Everywhere the same for a box; a river runs along its course, so it differs from place to place (RiverVolume)

### float get_surface_y_at( _world_point: Vector3 ) {#method-get-surface-y-at}

The height of the water surface at a point of the world (the top of the box; a river is higher or lower from place to place)

### float depth_of( entity: Entity ) {#method-depth-of}

How deep an entity stands below the surface (its feet)

### float horizontal_distance( world_point: Vector3 ) {#method-horizontal-distance}

How far a point of the world is from the water of this volume, seen from above (0 over it): the box of its first box shape, else far away. Where the end of a river can join it

