# Icons

The **icon library** is every small picture of the game: the icons of items, abilities, effects, [quests](/basic/events-and-quests/quests) and the interface. **Assets > Icons** shows them as a grid, by category, and imports new ones.

An icon is an **image file named by its number**: `12.png` is icon 12. The number is its **id**, and it is what the rest of the game stores; the icon pickers show the grid and save the number. A folder is a **category** (`weapons`, `potions`, `abilities`) and only organises the grid: an id is unique across all categories, and the game finds the file in whichever category it is in.

Icons live in `res://src/data/icons/<category>/<id>.png`. The demo has two categories, one for items and one for abilities.

## The editor

| Control | What it does |
|---|---|
| The grid | Every icon of the chosen category, or of all |
| **Category** | A drop-down with each category and its count |
| **Search**, **Refresh** | Filter; read the folders again |
| **Import** | Choose image files and a category. The files are **copied in and numbered**, starting from the first free id, and the list shows the new ids |
| **Settings > Add New Category** | Makes a category folder (`weapons`, `items`) |
| **Settings > Remove Category** | Deletes a category folder. It asks for confirmation and says how many icons go with it |
| The label | The selected icon, its id and its category |
| The count | How many icons are shown |

## Tips

- Import icons **once** and use the ids: renaming or deleting an icon file breaks every item or ability that points to it, and the editor then shows "ID n (Not Found)" for that id.
- Number new icons from the first free id: **Import** does this for you. Do not give two files the same number in different categories.

## See also

- [Items](/basic/items/items), [Abilities](/basic/abilities-and-effects/abilities): both pick an icon from this library.
- [How the icon library is built](/advanced/assets/).
