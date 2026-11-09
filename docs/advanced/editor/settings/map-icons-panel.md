<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MapIconsPanel

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Under the UI settings: the map icon catalog (MapIconCatalog). One section for each group of icons, one row for each icon: its picture (with a preview on a ground colour, so a white glyph can be seen), its name, the colour laid on it, whether the faction of whoever it marks decides the colour instead, where it is shown (mini map, world map), and a button to put a toolkit icon back as it comes (or take your own away). Every change is saved to the catalog file at once. Add your own icons with an id of your choice: anything on the map can point at them.

## Methods

| | |
|---|---|
| `void` | [refresh](#method-refresh)() |

## Constants

- `Color` **PREVIEW_GROUND** = `Color(0.32, 0.4, 0.3)` - The ground the previews sit on (the colours of a map)

## Method descriptions

### void refresh() {#method-refresh}

*No description yet.*

