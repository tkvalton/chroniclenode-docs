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
| `bool` | [show_banner](#prop-show-banner) | `true` |
| `String` | [banner_subtitle](#prop-banner-subtitle) | `"":` |

## Property descriptions

### int parent_zone_id = 0 {#prop-parent-zone-id}

The zone this one is a part of (0 = none: a zone of its own). A sub-zone is also in its parent: an event for the parent fires for a party in the sub-zone, and the banner of the parent is not shown again when the party walks from the parent into its own sub-zone

### Color color = Color(0.35, 0.7, 0.4) {#prop-color}

The colour of the zone on the overlay of the terrain editor, the zone map and the palette

### bool show_banner = true {#prop-show-banner}

Show the banner (the name, and the line under it) when the party enters the zone

### String banner_subtitle = "": {#prop-banner-subtitle}

The line under the name on the banner ("Home of the old mill"). Empty = only the name. Reading it gives the translation when the game is played in another language (see Localization)

