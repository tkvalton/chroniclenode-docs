# Zones

A **zone** is a **named place of the map**: *Elderwood*, *The Sunken Caves*, *Port Haven*. The player does not think in scenes, they think in places. A zone gives a place a name, a colour and a banner that shows when the party walks in, and the game can ask which zone the party is in: an [event](/basic/events-and-quests/events) can fire when the party enters it, a [quest](/basic/events-and-quests/quests) can say *Reach Elderwood*, and any text can say *You are in `<zone>`*.

A zone can have a **parent**: *The Old Mill* is a **sub-zone** of *Elderwood*. A party in the Old Mill is also in Elderwood.

::: info Not to be mixed up with trigger areas
A [trigger area](/basic/world/trigger-areas) (formerly called a region) is an invisible area that events *watch*. A zone is a named place of the map. A zone can be as small as a house, a trigger area as big as a field: they are two different tools.
:::

## Making zones

Zones belong to a **world**. Open the **Worlds** editor (Database > World > Worlds), choose the world and open its **Zones** section. **Add zone** makes a zone of this world, **Add sub-zone** makes one inside the zone chosen in the list, **Delete** takes one away (its sub-zones become part of its parent). The list shows the zones in tree order; choose one and fill in:

| Field | What it does | Default |
|---|---|---|
| **Name** | The name on the banner and in texts (`<zone>`) | New zone |
| **Description** | Free text for you (and your own map or journal) | empty |
| **Color** | The colour of the zone on the terrain editor's overlay, in the zone bar and on the shape of a zone volume | green |
| **Part of** | The parent zone. The menu lists the other zones in tree order. A zone cannot be part of its own part | none (a zone of its own) |
| **Banner** | Show the name when the party enters | on |
| **Banner line** | The small line under the name (*Home of the old mill*). Empty = only the name | empty |

Above the list, **Default zone** is the zone of the whole map (see below). The name and the banner line are translated when you [localize](/basic/game-settings/localization) your game.

## Where a zone is

There are three ways to say *where*, and they work together. For any place, the game takes the first that applies:

1. **A zone volume** that contains the place: the highest priority wins, the smaller volume on a tie.
2. **The zone painted on the terrain** at that place.
3. **The default zone of the world**.
4. Otherwise: no zone.

### Painting zones on the terrain

In the 3D viewport, turn on the **Terrain** tool. The zone tools are the last group of its toolbar. Choosing one opens the **zone bar** under the viewport with the zones **of the world of the open scene** as coloured squares (a sub-zone shows an arrow before its name); click one to paint with it, or type in the filter. **Refresh** looks again for zones you made since in the Worlds editor.

| Tool | What it does |
|---|---|
| **Paint zone** | Paints the chosen zone with a round brush (the **Radius** of the bar). Zones live in cells of **4 m**, so the brush is as fine as that |
| **Fill zone** | Fills whole **squares of the grid**: the **Square** number snaps to **4, 16, 64 or 256 m**. One click fills the square under the mouse, dragging fills a row of squares. Squares line up, so a continent is laid out in a few clicks. With the *Square* shape in the Cursor bar the ring on the ground shows the square |
| **Erase zone** | Takes the zone off the ground: what is under it shows again (a volume's zone, the default zone, or none) |

**Ctrl** held when the stroke starts does the opposite (Paint erases, Erase paints). One stroke is one **Undo**. Painting only works on tiles that exist.

The **Zones** button of the view bar (a cube) shows the zones on the ground, each in its colour, with a white line where one zone meets another. Choosing a zone tool turns it on. The zones are saved with the tile like the rest of the terrain.

::: tip Lay it out big first
Fill the continent with 256 m or 64 m squares, then paint the borders that need to be exact with the round brush at 4 m cells.
:::

A tile can hold up to **255 different zones**. That is a lot: a tile is 256 m across. The editor refuses a 256th rather than lose one.

### Zone volumes

For a cave **under** a hill, a building, a tower with its own floors or a floating island, paint cannot say it (paint is one layer on the ground). Place a **zone volume**: the **Volumes** button of the [placement tools](/basic/world/add-object), **Zone volume**. It comes with a box shape you resize with the gizmo, or you replace it with a sphere, cylinder or capsule.

| Field | What it does |
|---|---|
| **Zone Id** | The zone the party is in while inside. Pick it from the list of zones (the shape is drawn in the zone's colour in the editor) |
| **Zone Priority** | Where volumes overlap, the highest wins. A volume always wins over the painted zone and the default zone |

A volume needs no physics and costs nothing while the party is far away.

### The default zone of the world

In the **Zones** section of the world, choose the **Default zone**: the zone of the whole map, wherever nothing else says otherwise. A forest world is *Elderwood*, and only the exceptions need painting.

## What the party sees and what the game can ask

The game looks at the player in control a few times a second. When the zone changes:

- The **banner** shows: the zone's name large, and a small line under it. When the party arrives in a sub-zone from outside, the zone's name is large and the sub-zone's name the small line (*Elderwood*, *The Old Mill*). Walking between a zone and its own sub-zone does not show the parent's banner again, and neither does walking back across a border within half a minute.
- **Events** can react (below).

A zone with **Banner** off is silent. The banner is a simple piece of interface (a name that fades in and out at the top of the screen); replace it with your own: see [how zones are built](/advanced/world/zones).

### Events, conditions, quests, texts

| Where | What |
|---|---|
| Trigger **Zone Entered Or Left** | Fires when the party enters, leaves or both. It counts a zone as entered when the party arrives in it **or in one of its sub-zones**, and not when it walks between the two |
| Condition **Party Is In Zone** | True while the party is in the zone or a sub-zone of it (or false, when you ask for absence) |
| **Quest objective** | The trigger is the objective *Reach Elderwood*: an objective that starts while the party is already there is done at once |
| `<zone>` and `<sub zone>` | [Text tokens](/basic/shared-systems/text-tokens): `<zone>` is the top zone ("Elderwood"), `<sub zone>` the innermost ("The Old Mill", or the zone again when there is no sub-zone) |

"Kill 5 wolves in `<zone>`" says *Kill 5 wolves in Elderwood* wherever the player reads it.

## Good to know

- **Zones are tied to their world.** An event, a condition or a zone volume can name a zone of any world; the zone bar of the terrain tool shows only the zones of its own world.
- **Deleting a zone** is safe: the painted cells and the volumes that name it simply count as no zone, and its sub-zones become zones of their own.
- **A loop of parents** (A in B in A) is cut where it closes; the Zones editor never offers a parent that would close one.
- Zones are an **overlay of meaning**, not of looks: they do not change the sky, the fog, the music or the weather by themselves. A zone's own look, weather and music are [planned](/planned/zones).

## See also

- [Placing objects](/basic/world/add-object) (the zone volume)
- [Trigger areas](/basic/world/trigger-areas) (the invisible areas events watch)
- [Terrain](/basic/world/terrain) and [Painting](/basic/world/terrain-painting)
- [Event triggers](/basic/events-and-quests/event-triggers), [Conditions](/basic/shared-systems/conditions), [Text tokens](/basic/shared-systems/text-tokens)
- [Zones: how they are built](/advanced/world/zones)
