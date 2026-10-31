<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherGround

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The height of the terrain around the camera as a picture, for the particles of the weather. A GPUParticlesCollisionHeightField3D draws the meshes of the world to find a roof or a floor, but it cannot be trusted to see a terrain that is drawn by its own renderer or by an addon, so the rain asks the terrain itself: this class asks the TerrainService (our terrain, Terrain3D, HTerrain ... whatever the world registered) for a grid of heights around the camera and keeps them in two global shader parameters: weather_ground       a picture of floats, one texel for each cell of the grid (the height; very low where the terrain has no ground) weather_ground_rect  x, z = the corner of the picture in the world, z = its width in metres, w = how many cells a side (a width of 0 = there is no terrain) weather_particles.gdshader reads them: a particle that falls below the ground lands there (a splash, or it is gone). A world with no terrain provider makes no picture (its ground is a mesh or a physics body, which the height field of the effect finds). The picture is made a few rows a frame so it never hitches, and made again when the camera has moved eight metres.

## Methods

| | |
|---|---|
| `void` | [ensure_globals](#method-ensure-globals)() *static* |
| `bool` | [is_active](#method-is-active)() |
| `bool` | [is_building](#method-is-building)() |
| `Vector2` | [get_origin](#method-get-origin)() |
| `bool` | [follow](#method-follow)( `camera_position: Vector3` ) |
| `bool` | [step](#method-step)() |
| `void` | [build_now](#method-build-now)( `camera_position: Vector3` ) |
| `void` | [reset](#method-reset)() |
| `float` | [sample](#method-sample)( `x: float, z: float` ) |

## Constants

- `int` **CELLS** = `96` - The cells of the grid along a side, and its width in metres (a cell is about 0.67 m: the splashes are not finer than that)
- `float` **SIZE** = `64.0`
- `float` **REFRESH_DISTANCE** = `8.0` - How far the camera goes from the middle of the picture before a new one is made (metres)
- `float` **NO_GROUND** = `-100000.0` - The height written where the terrain has no ground (nothing lands there)
- `int` **STEP_BUDGET_USEC** = `2500` - The most time (microseconds) one step of the work takes
- `String` **TEXTURE_GLOBAL** = `"weather_ground"`
- `String` **RECT_GLOBAL** = `"weather_ground_rect"`

## Method descriptions

### void ensure_globals() {#method-ensure-globals}

Makes sure the two globals exist (the weather shaders need them to compile). A project that defines them itself is left alone.

### bool is_active() {#method-is-active}

Is there a picture of the ground that the shaders use?

### bool is_building() {#method-is-building}

Is a picture being made?

### Vector2 get_origin() {#method-get-origin}

The corner of the picture that is shown (the world x, z) and its width: for the tests

### bool follow( camera_position: Vector3 ) {#method-follow}

Looks at where the camera is: starts a new picture when there is none, or the camera has gone far from the middle of the one there is. Returns true while a picture is being made (call `step` until it is done). A world with no terrain provider takes the picture away.

### bool step() {#method-step}

Makes the next rows of the picture, for a few milliseconds; the picture is shown when the last row is done. Returns true while there is more to do.

### void build_now( camera_position: Vector3 ) {#method-build-now}

Makes the whole picture now (a loading screen, the tests)

### void reset() {#method-reset}

Takes the picture away: nothing lands on the terrain (the world has none, or is left)

### float sample( x: float, z: float ) {#method-sample}

The height of the picture at a world position (for the tests): NO_GROUND where it does not reach

