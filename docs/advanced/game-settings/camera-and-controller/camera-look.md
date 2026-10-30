<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CameraLook

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

What the player's camera does besides following: the LOOK of the screen (tint, vignette, blur, grey, colour fringes, grain, a push of the field of view) and its SHAKE. Looks come in layers (an effect on the player, an event, a zone, the water the camera is in): each layer has a key, a priority (a higher one is laid over a lower one), a time to fade in and out and a look; the layers are added up into one look that one shader draws over the finished 3D picture, under the interface. The shake is a "trauma": impacts add to it, it dies away, the picture moves by its square (a small shake is small, a big one is wild). The player's video settings scale it all: Camera shake, Screen effects (off / reduced / full) and the field of view offset. One CameraLook belongs to the CameraController; `CameraLook.current` is the one that is on now (effects, events and volumes call it).

## Variables

| | | |
|---|---|---|
| `CameraLook` | [current](#var-current) |  |
| `Camera3D` | [camera](#var-camera) |  |
| `float` | [base_fov](#var-base-fov) | `75.0` |

## Methods

| | |
|---|---|
| `void` | [attach](#method-attach)( `p_camera: Camera3D` ) |
| `void` | [set_layer](#method-set-layer)( `key: Variant, look: ScreenLook, priority: int = 0, fade_in: float = 0.3, essential: bool = false` ) |
| `void` | [clear_layer](#method-clear-layer)( `key: Variant, fade_out: float = 0.3` ) |
| `bool` | [has_layer](#method-has-layer)( `key: Variant` ) |
| `ScreenLook` | [get_combined](#method-get-combined)() |
| `void` | [shake](#method-shake)( `amount: float, duration: float = 0.5, source: Variant = null, radius: float = 0.0` ) |
| `void` | [set_continuous_shake](#method-set-continuous-shake)( `key: Variant, amount: float` ) |
| `void` | [clear_continuous_shake](#method-clear-continuous-shake)( `key: Variant` ) |
| `float` | [get_shake_amount](#method-get-shake-amount)() |
| `Vector3` | [get_shake_offset](#method-get-shake-offset)() |
| `float` | [get_fov](#method-get-fov)() |
| `void` | [process_look](#method-process-look)( `delta: float` ) |

## Constants

- `Shader` **SHADER** = `preload("res://addons/chroniclenode/assets/shaders/screen_look.gdshader")`
- `int` **SCREEN_LAYER** = `-1` - Under the interface (layer 0 and up), over the 3D picture
- `int` **PRIORITY_ZONE** = `10` - Which look is laid over which (a higher priority is laid over a lower one)
- `int` **PRIORITY_EFFECT** = `20`
- `int` **PRIORITY_EVENT** = `50`
- `int` **PRIORITY_WATER** = `100`
- `float` **MIN_FOV** = `30.0`
- `float` **MAX_FOV** = `120.0`
- `float` **SHAKE_OFFSET** = `0.15` - How far a full shake moves the picture sideways and up (metres at the camera) and rolls it (degrees), and how fast the noise moves
- `float` **SHAKE_ROLL** = `3.0`
- `float` **SHAKE_SPEED** = `25.0`

## Variable descriptions

### CameraLook current {#var-current}

The CameraLook that is in the game now (null in the editor and between games)

### Camera3D camera {#var-camera}

The camera that the shake and the field of view move

### float base_fov = 75.0 {#var-base-fov}

The field of view the camera logic set (the player's offset and the kicks come on top)

## Method descriptions

### void attach( p_camera: Camera3D ) {#method-attach}

Points it at the camera (the field of view it finds is the base)

### void set_layer( key: Variant, look: ScreenLook, priority: int = 0, fade_in: float = 0.3, essential: bool = false ) {#method-set-layer}

Puts a look on the screen under a key (the same key again replaces the look of that layer). `fade_in` is the seconds it takes to come to full strength, `essential` keeps it when the player turned the screen effects off

### void clear_layer( key: Variant, fade_out: float = 0.3 ) {#method-clear-layer}

Takes a layer off, fading it out over `fade_out` seconds

### bool has_layer( key: Variant ) {#method-has-layer}

*No description yet.*

### ScreenLook get_combined() {#method-get-combined}

The look on the screen now: the layers added up and filtered by the player's Screen effects setting

### void shake( amount: float, duration: float = 0.5, source: Variant = null, radius: float = 0.0 ) {#method-shake}

Shakes the camera: `amount` 0 to 1, for `duration` seconds (it dies away over them). With a `source` (a position) and a `radius` it is weaker the farther the camera is from the source and gone at the radius

### void set_continuous_shake( key: Variant, amount: float ) {#method-set-continuous-shake}

A shake that lasts until it is cleared (an earthquake, a rumbling mount, turbulence): `amount` 0 to 1 under a key

### void clear_continuous_shake( key: Variant ) {#method-clear-continuous-shake}

*No description yet.*

### float get_shake_amount() {#method-get-shake-amount}

How hard the camera shakes now, 0 to 1, after the player's Camera shake setting (the picture moves by the square of it)

### Vector3 get_shake_offset() {#method-get-shake-offset}

The shake now as (sideways, up, roll in degrees)

### float get_fov() {#method-get-fov}

The field of view the camera has now: the base, the player's offset and the kicks of the looks, kept between 30 and 120 degrees

### void process_look( delta: float ) {#method-process-look}

One step: fades the layers, adds them up, moves the shake on, and shows the result (the frame of the game calls it; so can a test)

