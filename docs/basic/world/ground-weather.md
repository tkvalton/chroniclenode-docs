# Ground weather

The ground of a [terrain](/basic/world/terrain) **follows the weather**: rain makes it darker and shinier, snow whitens it, and both take **time** to come and to go. Each [terrain texture](/basic/assets/terrain-textures#weather) says how it reacts (a sand road darkens a lot when wet, a swept road takes no snow); this page says **when** the ground is wet or snowy and how fast.

## How it works

1. The **weather** of the world (the one chosen in the Worlds editor, or the one an event started) says where the ground is going: soaked, covered with snow, or dry.
2. The ground goes there **over time**, at the speeds of the world: it gets wet in seconds and dries in minutes, the snow builds and melts more slowly.
3. The **zone** the party is in can change what reaches the ground: a cave is dry, a mountain top gets more snow.
4. The shader of the terrain draws the wetness and the snow on every texture that reacts to them.

### What a weather asks of the ground

A weather (the VFX of the Weather section of the Worlds editor) has a **Ground** group:

| Field | What it does | Default |
|---|---|---|
| **Ground auto** | The weather is understood by its **name**: *rain* wets the ground (0.85), *storm* soaks it (1), *drizzle* and *mist* half (0.5), *snow* and *blizzard* cover it with snow (0.9 and 1) and wet it a little, *sleet* does both. Any other name does nothing | on |
| **Ground wetness** | How wet this weather makes the ground in the end (0 dry, 1 soaked), when *Ground auto* is off | 0 |
| **Ground snow** | How much snow it leaves (0 none, 1 covered), when *Ground auto* is off | 0 |

### How fast: the Ground weather section of a world

In **Worlds > Ground weather** (seconds of play):

| Field | What it does | Default |
|---|---|---|
| **Gets wet in** | Seconds the ground takes to get soaked | 20 |
| **Dries in** | Seconds it takes to dry when the rain stops | 240 |
| **Snow covers in** | Seconds the snow takes to cover the ground | 120 |
| **Snow melts in** | Seconds the snow takes to melt | 300 |
| **Season tint** and **Tint strength** | A colour the ground of this world is multiplied by (autumn orange, a withered grey) and how much of it shows. This is the **season** of the world: 0 = the ground as painted | none |

A world the party arrives in starts with the ground where its weather is taking it (it has been raining for a while); the weather itself is not saved, so after loading a game the ground is again at what the weather of the world asks.

### Zones that shelter

A [zone](/basic/world/zones) has **Rain reaches** and **Snow reaches** (0 to 2): the part of the weather that reaches the ground while the party is in the zone. `0` is a cave or a covered place: the ground dries while the party is in it. `2` is a place that gets more (a mountain top for snow). The ground is **one for the whole terrain**: it follows the zone the party stands in, and the shown ground changes with it.

## Events and conditions

| What | Kind | What it does |
|---|---|---|
| **Set Ground Weather** | action | *Set* puts the ground at a wetness and a snow level now or over some seconds, and it then follows the weather again. *Hold* keeps it there until a *Release* (a quest turns the valley to winter and keeps it so). *Release* lets the weather decide again. It can also change the **tint** (a season turns) |
| **Ground Weather** | condition | How wet the ground is or how much snow lies on it, compared with a number: "the snow is at least half" |

A script can do the same: `WeatherSystem.ground` (a `TerrainWeatherDriver`) has `set_levels`, `hold_levels` and `release_levels`, and `TerrainWeather.set_tint(color, strength)`.

## Marks on the ground

Feet, spells and vehicles can leave **marks** on the ground: footprints, scorch marks, craters, stains and tyre tracks. A mark is a flat picture projected on the terrain (and on the floors and slopes it lies on), it fades out after some seconds, and the oldest are used again when there are too many, so they cost very little.

### Footprints

Only an entity that has a **Footprint** picture (in its [NPC](/basic/entities/npcs) or [playable character](/basic/entities/playable-character) settings) leaves footprints: the picture is the shape (a boot, a paw, a hoof), so a ghost or a floating creature simply has none. Where the footprint shows, and in what colour and for how long, is up to the ground, in this order:

1. **A body of the world** (a StaticBody3D: a wooden floor, a stone bridge) with the meta `footprints` (true or false) decides for itself. The metas `footprint_color` (a Color) and `footprint_fade` (seconds) set how it looks. This wins over the terrain under it.
2. **Snow on the ground** (the weather) on a texture that takes snow leaves pale footprints that last a long time. The weather forces this, whatever the texture says.
3. **A terrain texture with Leaves footprints on** ([Footprints](/basic/assets/terrain-textures#footprints)) leaves them in its own colour for its own time. Sand, mud and soft earth.
4. **Soft ground in heavy rain** (a texture that darkens a lot when wet) leaves dark footprints that fill up fast.

Nothing else leaves footprints: grass, rock and stone stay clean. The feet take turns (left, right), the toes point the way the entity faces, and the size comes from the size of the entity. Use a white shape: the ground tints it. Footprints are drawn only near the camera.

The switch, the limit and the distance are in the [Gameplay Config](/basic/game-settings/gameplay-config#ground-marks).

### Other marks: the Ground Mark effect

The [**Ground Mark** effect](/basic/abilities-and-effects/effect-types#utility) puts a mark where the target stands (or where an area effect lands): a **scorch** under a fireball, a **crater** under a slam, a **stain** (blood, slime, oil), a **footprint**, a **tyre track**, or **your own picture**. You choose its size, colour, how long it lasts and whether it is turned at random.

A script can put one anywhere: `weather_system.marks.add_mark(kind, position, normal, yaw, size, color, fade_seconds)` on the `GroundMarkManager` of the world (kinds: `GroundMarkTextures.Kind.FOOTPRINT`, `TRACK`, `SCORCH`, `CRATER`, `BLOB`). Tyre tracks have no hook on mounts yet: a script that calls `add_mark` with the `TRACK` kind makes them.

## Not built

- **Permanent change**: a burned forest, a plague, winter replacing summer in one place by a quest (alternate layer data of a tile, kept as a difference in the save). The **season tint** and *Hold* are the cheap version of this: they change how the whole ground looks, not what lies where.
- **Local weather** other than by zone: one ground for the whole terrain, whatever is far away.

## See also

- [Terrain textures](/basic/assets/terrain-textures#weather) for how each texture reacts, [Zones](/basic/world/zones), [Worlds](/basic/world/worlds), [Event actions](/basic/events-and-quests/event-actions).
- [How the ground weather is built](/advanced/world/ground-weather).
