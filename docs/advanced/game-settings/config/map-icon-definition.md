<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MapIconDefinition

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One icon of the map icon catalog (UI settings &gt; Map icons): a picture with a name that things on the map point at (a quest giver, a blacksmith, an ore node, a town ...). The pictures that come with the toolkit are white glyphs with a dark outline (assets/ui/map_icons, SVG): the game lays a colour on them, so one picture serves every faction and state.

## Properties

| | | |
|---|---|---|
| `StringName` | [id](#prop-id) | `&""` |
| `String` | [display_name](#prop-display-name) | `""` |
| `String` | [category](#prop-category) | `""` |
| `Texture2D` | [texture](#prop-texture) |  |
| `Color` | [tint](#prop-tint) | `Color.WHITE` |
| `bool` | [tinted_by_faction](#prop-tinted-by-faction) | `false` |
| `bool` | [on_minimap](#prop-on-minimap) | `true` |
| `bool` | [on_world_map](#prop-on-world-map) | `true` |

## Property descriptions

### StringName id = &amp;"" {#prop-id}

The name things point at (lower case, no spaces: quest_available, blacksmith, enemy_boss). The id of a toolkit icon cannot be changed, only what it looks like

### String display_name = "" {#prop-display-name}

The name shown in the editor

### String category = "" {#prop-category}

The group it is listed in (Quests, Services, Professions, Gathering, Creatures, Places, Travel, Loot, Player)

### Texture2D texture {#prop-texture}

The picture (SVG or any image). White shapes are tinted, so draw it white with an outline

### Color tint = Color.WHITE {#prop-tint}

The colour laid on the picture (white leaves it as drawn). When the icon is tinted by faction this is only used for what has no faction

### bool tinted_by_faction = false {#prop-tinted-by-faction}

The colour comes from the faction of whoever it marks (friendly, neutral, hostile colours of the settings) instead of the tint above

### bool on_minimap = true {#prop-on-minimap}

Shown on the mini map

### bool on_world_map = true {#prop-on-world-map}

Shown on the world map

