<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldMapMaker

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What is worked out and written when the pictures of a world's map are made (the buttons Generate Map Preview, Generate Zone Maps and Generate Reference Sheet of the WorldScene): which area each zone's picture covers and how high the camera goes, where the files go and what they are called, and the reference sheet a person who draws a stylized map traces. The camera and the rendering are the WorldScene's; this class has no nodes, so the plan can be checked without a renderer. See docs: World &gt; World map.

## Methods

| | |
|---|---|
| `String` | [folder_of](#method-folder-of)( `world_id: int` ) *static* |
| `String` | [slug](#method-slug)( `text: String` ) *static* |
| `String` | [zone_file_name](#method-zone-file-name)( `zone: ZoneDefinition` ) *static* |
| `Rect2` | [square_around](#method-square-around)( `box: Rect2, inside: Rect2 = Rect2()` ) *static* |
| `Array[Dictionary]` | [plan_zone_maps](#method-plan-zone-maps)( `world: WorldData, world_rect: Rect2, terrain: Object, volumes: Array, terrain_top: float` ) *static* |
| `String` | [save_png](#method-save-png)( `image: Image, world_id: int, file_name: String` ) *static* |
| `Image` | [reference_sheet](#method-reference-sheet)( `base: Image, world_rect: Rect2, zone_map: ZoneMap, side: int` ) *static* |
| `String` | [reference_text](#method-reference-text)( `world: WorldData, world_rect: Rect2, side: int, zone_map: ZoneMap` ) *static* |

## Constants

- `String` **FOLDER** = `"res://src/data/worlds/maps/"` - The folder the pictures of every world go in: one folder for each world (by its id), next to the other data of the worlds
- `float` **MARGIN** = `1.25` - How much room is left round a zone in its picture (1.25 = a quarter more than its box)
- `float` **MIN_SIDE** = `64.0` - The smallest side of a zone picture (metres): a house is not a blur
- `float` **GRID** = `4.0` - The grid a picture's corner sits on (the cell of the zones)
- `float` **OUTDOOR_DEPTH** = `2000.0` - How deep (metres) the camera sees for a zone seen from above the whole world
- `float` **SHEET_LINE** = `100.0` - A line of the reference sheet every this many metres, and a stronger one every this many
- `float` **SHEET_STRONG_LINE** = `500.0`

## Method descriptions

### String folder_of( world_id: int ) {#method-folder-of}

The folder of a world's pictures

### String slug( text: String ) {#method-slug}

A name safe for a file: lower case words joined by underscores

### String zone_file_name( zone: ZoneDefinition ) {#method-zone-file-name}

The file of a zone's picture: its name then its number ("elderwood_9961001.png"). The number is what makes it the zone's, so two zones with one name do not share a file

### Rect2 square_around( box: Rect2, inside: Rect2 = Rect2() ) {#method-square-around}

The square (a corner on the grid) round a box of the world with the room round it, at least MIN_SIDE; moved inside `inside` when it can be

### Array[Dictionary] plan_zone_maps( world: WorldData, world_rect: Rect2, terrain: Object, volumes: Array, terrain_top: float ) {#method-plan-zone-maps}

What to take a picture of: one dictionary for each zone of the world that has ground (the default zone is everywhere, its picture is the map of the world, so it is left out): &#123;zone_id, name, rect (the square of the world), top_y (where the camera is), depth (how far down it sees), interior&#125;. A zone that is only a zone volume (a cave under a hill, a building) is an **interior**: the camera is at the top of the volume so the hill above is not in the picture; every other zone is seen from above the whole world.

### String save_png( image: Image, world_id: int, file_name: String ) {#method-save-png}

Writes a picture as a PNG file in the folder of the world (made if it is not there). Returns the path, or "" when it could not be written

### Image reference_sheet( base: Image, world_rect: Rect2, zone_map: ZoneMap, side: int ) {#method-reference-sheet}

The reference sheet of the world map for someone who draws their own: the picture (or a flat colour) darkened, a line every 100 m (a stronger one every 500 m), the borders of the zones in their colours. A drawing that keeps this size and framing fits the world exactly: the corner of the picture is the corner of `world_rect`, a pixel is `world_rect.size.x / width` metres.

### String reference_text( world: WorldData, world_rect: Rect2, side: int, zone_map: ZoneMap ) {#method-reference-text}

The numbers an artist needs, as text: the area, the size and the scale, the grid, and where each zone is in the picture

