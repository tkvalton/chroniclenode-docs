<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ZoneMap

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The zones of a world as a picture from above, the same area the map image of the world covers: one byte for each cell, the number of the zone there (0 = no zone). It is made from the three things that say where a zone is (the same order ZoneLookup uses): the **default zone** of the world fills everything, the zones **painted on the terrain** (cells of 4 m) go over it, and the **zone volumes** go over those (the highest priority last, so it wins). Nothing is saved: it is made again from the world whenever the map opens, so a zone painted a minute ago is on the map. The world map panel draws it over the picture of the map (highlights, outlines, the dark outside a zone) and asks it which zone is under the mouse, where a zone is and how big it is. See docs: World &gt; World map.

## Variables

| | | |
|---|---|---|
| `Rect2` | [rect](#var-rect) | `Rect2()` |
| `Vector2i` | [cells](#var-cells) | `Vector2i(MIN_CELLS, MIN_CELLS)` |
| `Array[int]` | [ids](#var-ids) | `[]` |
| `int` | [default_zone](#var-default-zone) | `0` |

## Methods

| | |
|---|---|
| `ZoneMap` | [build](#method-build)( `zone_ids: Array[int], default_zone: int, map_rect: Rect2, terrain: Object, volumes: Array` ) *static* |
| `ImageTexture` | [texture](#method-texture)() |
| `Image` | [get_image](#method-get-image)() |
| `int` | [zone_at_world](#method-zone-at-world)( `x: float, z: float` ) |
| `int` | [zone_at_uv](#method-zone-at-uv)( `uv: Vector2` ) |
| `Vector2` | [uv_of_world](#method-uv-of-world)( `x: float, z: float` ) |
| `Vector2` | [world_of_uv](#method-world-of-uv)( `uv: Vector2` ) |
| `Rect2` | [uv_rect_of](#method-uv-rect-of)( `world_rect: Rect2` ) |
| `Array[int]` | [zones_present](#method-zones-present)() |
| `int` | [cell_count](#method-cell-count)( `zone_id: int` ) |
| `Rect2` | [bounds_of](#method-bounds-of)( `zone_id: int, with_children: bool = true` ) |
| `Vector2` | [centre_of](#method-centre-of)( `zone_id: int, with_children: bool = true` ) |
| `Array[int]` | [family_of](#method-family-of)( `zone_id: int` ) |

## Constants

- `int` **MAX_CELLS** = `2048` - The most cells a side of the picture has
- `int` **MIN_CELLS** = `16`
- `float` **TERRAIN_CELL** = `4.0` - The side of a cell of the terrain's zone layer (metres)

## Variable descriptions

### Rect2 rect = Rect2() {#var-rect}

The area of the world (x, z in metres) the picture covers

### Vector2i cells = Vector2i(MIN_CELLS, MIN_CELLS) {#var-cells}

Cells along each side

### Array[int] ids = [] {#var-ids}

The zones the picture can hold: `ids[i]` is the zone with the number i + 1

### int default_zone = 0 {#var-default-zone}

The default zone of the world (0 = none): it is everywhere nothing else is, so the map gives it no name

## Method descriptions

### ZoneMap build( zone_ids: Array[int], default_zone: int, map_rect: Rect2, terrain: Object, volumes: Array ) {#method-build}

Makes the picture. `zone_ids` are the zones of the world (the picture holds them, and any other zone it finds painted), `default_zone` the default zone of the world (0 = none), `map_rect` the area of the world it covers, `terrain` a ChronicleTerrain (or null), `volumes` the ZoneVolumes of the world.

### ImageTexture texture() {#method-texture}

The picture as a texture (one byte a cell, nearest filter is what you want)

### Image get_image() {#method-get-image}

The picture

### int zone_at_world( x: float, z: float ) {#method-zone-at-world}

The zone at a place of the world (0 = none, or outside the picture)

### int zone_at_uv( uv: Vector2 ) {#method-zone-at-uv}

The zone at a place of the picture (uv from 0 to 1 over the area it covers)

### Vector2 uv_of_world( x: float, z: float ) {#method-uv-of-world}

Where a place of the world is on the picture (0 to 1 each way; outside is below 0 or above 1)

### Vector2 world_of_uv( uv: Vector2 ) {#method-world-of-uv}

The place of the world (x, z) that a place of the picture is

### Rect2 uv_rect_of( world_rect: Rect2 ) {#method-uv-rect-of}

A rectangle of the world as a rectangle of the picture (uv)

### Array[int] zones_present() {#method-zones-present}

The zones that have at least one cell

### int cell_count( zone_id: int ) {#method-cell-count}

How many cells a zone has (of its own, not of its sub-zones)

### Rect2 bounds_of( zone_id: int, with_children: bool = true ) {#method-bounds-of}

The box (world metres) round the cells of a zone and, with `with_children`, of its sub-zones. An empty rectangle when it has none

### Vector2 centre_of( zone_id: int, with_children: bool = true ) {#method-centre-of}

The middle of the cells of a zone (and its sub-zones): where its name goes. The average of its cells, moved to the nearest cell it has when that falls outside it (a ring)

### Array[int] family_of( zone_id: int ) {#method-family-of}

The numbers of the zone and its sub-zones (the zones a highlight of the zone covers)

