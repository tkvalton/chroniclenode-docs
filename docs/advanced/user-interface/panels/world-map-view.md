<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldMapView

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The map itself, for the world map window: the picture of the world with the zones laid over it (the shader world_map.gdshader reads the ZoneMap), the names of the zones, the marker of the party, and the mouse: the zone under the mouse lights up (`zone_hovered`), a click on it (`zone_clicked`) is for the window to open its map. `view_uv` is the part of the map that is shown (the whole of it, or the window of a zone). The map is drawn as a square of the shape of the area it covers, in the middle of this control. Everything it needs is given with `set_map`.

## Variables

| | | |
|---|---|---|
| `ZoneMap` | [zone_map](#var-zone-map) | `null` |
| `Texture2D` | [map_texture](#var-map-texture) | `null` |
| `Rect2` | [view_uv](#var-view-uv) | `Rect2(0.0, 0.0, 1.0, 1.0):` |
| `int` | [focus_zone](#var-focus-zone) | `0:` |
| `int` | [hover_zone](#var-hover-zone) | `0` |
| `bool` | [show_names](#var-show-names) | `true` |
| `Variant` | [party_position](#var-party-position) | `null` |
| `Vector2` | [party_facing](#var-party-facing) | `Vector2(0.0, -1.0)` |

## Methods

| | |
|---|---|
| `void` | [set_map](#method-set-map)( `p_zone_map: ZoneMap, p_texture: Texture2D` ) |
| `Rect2` | [get_map_rect](#method-get-map-rect)() |
| `Vector2` | [uv_at](#method-uv-at)( `local_position: Vector2` ) |
| `Vector2` | [local_of_world](#method-local-of-world)( `x: float, z: float` ) |
| `void` | [refresh_party](#method-refresh-party)() |
| `int` | [target_zone_at](#method-target-zone-at)( `local_position: Vector2` ) |

## Signals

### zone_hovered( zone_id: int ) {#signal-zone-hovered}

### zone_clicked( zone_id: int ) {#signal-zone-clicked}

## Constants

- `Shader` **SHADER** = `preload("res://addons/chroniclenode/assets/shaders/world_map.gdshader")`

## Variable descriptions

### ZoneMap zone_map = null {#var-zone-map}

The zones laid over the picture, and the area of the world they (and the picture) cover

### Texture2D map_texture = null {#var-map-texture}

The picture of the world (null = a flat colour)

### Rect2 view_uv = Rect2(0.0, 0.0, 1.0, 1.0): {#var-view-uv}

The part of the map that is shown, from 0 to 1 over the whole map (a square, as the map is)

### int focus_zone = 0: {#var-focus-zone}

The zone that is open (0 = the whole world is shown): everything outside it is darker

### int hover_zone = 0 {#var-hover-zone}

The zone the mouse is over, as the window treats it: the zone that lights up and that a click opens

### bool show_names = true {#var-show-names}

Draw the names of the zones

### Variant party_position = null {#var-party-position}

Where the party is (x, y, z in the world), or null; and the way it faces (a direction on the ground: x, z)

### Vector2 party_facing = Vector2(0.0, -1.0) {#var-party-facing}

*No description yet.*

## Method descriptions

### void set_map( p_zone_map: ZoneMap, p_texture: Texture2D ) {#method-set-map}

Gives the map its zones, its picture and the area it shows. The whole map is shown, no zone is open

### Rect2 get_map_rect() {#method-get-map-rect}

The square of the control the map is drawn in

### Vector2 uv_at( local_position: Vector2 ) {#method-uv-at}

The place of the whole map (uv from 0 to 1) that a place of this control shows (outside the map is below 0 or above 1)

### Vector2 local_of_world( x: float, z: float ) {#method-local-of-world}

Where a place of the world is in this control (it can be outside the control)

### void refresh_party() {#method-refresh-party}

Draws the marker of the party again (it moved)

### int target_zone_at( local_position: Vector2 ) {#method-target-zone-at}

Which zone the mouse means, for a zone found at a place: in the world view the top zone of the place (its sub-zones come when it is opened); inside a zone the sub-zone of it that holds the place (or the zone itself on its own ground); 0 outside of everything

