<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ZoneDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A **zone**: a named place of the map ("Elderwood", "The Sunken Caves", "Port Haven"). A zone has a name, a colour and a line for the banner shown when the party enters it. A zone can have a **parent** (a sub-zone: "Elderwood &gt; The Old Mill"): the party in the sub-zone is also in the zone above it.

## Description

Where a zone is, is not stored here: it is painted on the terrain (the zone layer of the Terrain tool), or given by a ZoneVolume placed in the world (a cave under a hill), or it is the default zone of the world (WorldData.default_zone_id). ZoneLookup answers "which zone is this point in" and ZoneTracker watches where the party is. See docs: World &gt; Zones.

## Properties

| | | |
|---|---|---|
| `int` | [parent_zone_id](#prop-parent-zone-id) | `0` |
| `Color` | [color](#prop-color) | `Color(0.35, 0.7, 0.4)` |
| `float` | [wetness_scale](#prop-wetness-scale) | `1.0` |
| `float` | [snow_scale](#prop-snow-scale) | `1.0` |
| `int` | [sky_config_id](#prop-sky-config-id) | `0` |
| `int` | [environment_config_id](#prop-environment-config-id) | `0` |
| `float` | [look_blend_seconds](#prop-look-blend-seconds) | `3.0` |
| `bool` | [look_replaces_event](#prop-look-replaces-event) | `false` |
| `bool` | [show_banner](#prop-show-banner) | `true` |
| `String` | [banner_subtitle](#prop-banner-subtitle) | `"":` |

## Property descriptions

### int parent_zone_id = 0 {#prop-parent-zone-id}

The zone this one is a part of (0 = none: a zone of its own). A sub-zone is also in its parent: an event for the parent fires for a party in the sub-zone, and the banner of the parent is not shown again when the party walks from the parent into its own sub-zone

### Color color = Color(0.35, 0.7, 0.4) {#prop-color}

The colour of the zone on the overlay of the terrain editor, the zone map and the palette

### float wetness_scale = 1.0 {#prop-wetness-scale}

How much of the rain reaches the ground in this zone (0 = none: a cave, under a roof; 1 = as the weather says; up to 2 = more). While the party is in the zone the ground dries or wets towards this. See docs: World &gt; Ground weather

### float snow_scale = 1.0 {#prop-snow-scale}

How much of the snow lies on the ground in this zone (0 = none, 1 = as the weather says, up to 2 = more: a mountain top)

### int sky_config_id = 0 {#prop-sky-config-id}

The sky of this zone: the id of a Sky config (0 = the zone has none of its own: it takes the sky of the zone it is a part of, then the sky of the world). The party sees it blended in over the seconds below

### int environment_config_id = 0 {#prop-environment-config-id}

The environment of this zone (fog, ambient light, the sun's light, the colour grade ...): the id of an Environment config (0 = none of its own: the parent zone's, then the world's)

### float look_blend_seconds = 3.0 {#prop-look-blend-seconds}

Seconds the look of this zone takes to come when the party walks into it (and to go when it walks out into a place with none)

### bool look_replaces_event = false {#prop-look-replaces-event}

An event that sets a sky or an environment wins over the zones. Tick this and the look of this zone replaces such an event look when the party walks in

### bool show_banner = true {#prop-show-banner}

Show the banner (the name, and the line under it) when the party enters the zone

### String banner_subtitle = "": {#prop-banner-subtitle}

The line under the name on the banner ("Home of the old mill"). Empty = only the name. Reading it gives the translation when the game is played in another language (see Localization)

