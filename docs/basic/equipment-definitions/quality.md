# Quality

<Shot name="quality-editor" caption="The Quality editor (Equipment Definitions > Quality)." />

A **quality** says how rare or good an [item](/basic/items/items) is: Poor, Common, Uncommon, Rare, Epic, Legendary, Artifact. The demo has seven. A quality is a name, a color and a number; the interface uses the color for the border and the name of the item, and the number to sort.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon** | What the editors and tooltips show | |
| **Color** | The color of the item's border and name | white |
| **Quality tier** | A number for sorting and comparing: `1` is the lowest. Qualities are ordered by tier | `1` |

The **preview** in the editor shows how the name will look.

## Using a quality

An item chooses its quality in the **Quality** field of its [basic properties](/basic/items/items#basic-properties). `None` leaves the item without one.

A quality has **no effect on its own**: it does not change the stats of the item. If you want a Rare to be stronger than a Common, make the items stronger. If you want randomly generated loot to have a quality, that is part of the planned loot generation.

## See also

- [Items](/basic/items/items), [Set Bonus](/basic/equipment-definitions/set-bonus)
