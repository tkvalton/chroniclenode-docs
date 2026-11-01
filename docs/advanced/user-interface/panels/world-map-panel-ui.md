<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldMapPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The world map window: the picture of the world with its zones laid over it. Move the mouse over the map and the zone under it lights up with its name; click it and the map zooms into that zone (darkening the world around it) with its own sub-zones to hover and click in turn; **Back** goes up one zone, and the list on the left opens any zone of the world. A marker shows where the party is. The map picture is the one of the world (WorldData.map_image, made in the editor with Generate Map Preview, covering WorldData.map_rect); the zones are worked out from the world (ZoneMap): painted on the terrain, zone volumes and the default zone. It opens like any panel: its panel name is `world_map`. See docs: World &gt; World map.

## Properties

| | | |
|---|---|---|
| `float` | [zoom_seconds](#prop-zoom-seconds) | `0.35` |
| `float` | [zoom_margin](#prop-zoom-margin) | `1.35` |
| `float` | [minimum_view](#prop-minimum-view) | `0.06` |

## Variables

| | | |
|---|---|---|
| `ZoneMap` | [zone_map](#var-zone-map) | `null` |
| `int` | [open_zone_id](#var-open-zone-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [refresh](#method-refresh)() |
| `void` | [show_world](#method-show-world)( `world: WorldData, rect: Rect2, terrain: Object, volumes: Array` ) |
| `void` | [open_zone](#method-open-zone)( `zone_id: int` ) |
| `void` | [back](#method-back)() |

## Property descriptions

### float zoom_seconds = 0.35 {#prop-zoom-seconds}

The seconds the map takes to zoom into a zone and back out

### float zoom_margin = 1.35 {#prop-zoom-margin}

How much room is left round a zone when the map zooms into it (1.35 = a third more than the zone's box)

### float minimum_view = 0.06 {#prop-minimum-view}

The smallest part of the map a zoom shows (0.05 = a twentieth of its width): a house is not zoomed into until it is a blur

## Variable descriptions

### ZoneMap zone_map = null {#var-zone-map}

The zones laid over the map

### int open_zone_id = 0 {#var-open-zone-id}

The zone that is open (0 = the whole world)

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the window up with the hub of the game systems.

### void refresh() {#method-refresh}

Makes the map from the world that is loaded

### void show_world( world: WorldData, rect: Rect2, terrain: Object, volumes: Array ) {#method-show-world}

Shows the map of a world: its picture, the area it covers, and where its zones are (the terrain painted with them and its zone volumes)

### void open_zone( zone_id: int ) {#method-open-zone}

Opens the map of a zone: the map zooms into it and the world around it goes dark. 0 goes back to the whole world

### void back() {#method-back}

Goes up one zone (to the zone it is a part of, or to the whole world)

