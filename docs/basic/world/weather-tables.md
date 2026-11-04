# Weather tables

A **weather table** is a list of weathers that take turns. Instead of one weather that stays until an event changes it, a place can have a table: the game picks one line by its **weight**, lets it last for a while, and then picks again. A rainy coast that is also clear and foggy now and then is one table.

The weather of a place comes from one of these, in this order (the first that applies wins):

1. an event that set the weather for the **zone** the party is in ([Set Weather](#events) with the scope *Current zone*);
2. an event that set the weather for the **world**;
3. the **zone** the party is in: its own weather or table, or the zone above it, if it has none;
4. the **world**: its table, or its default weather.

## The Weather Tables tab

**World > Weather Tables** is the editor of the tables: the list on the left (with a filter box and **New**; right-click for **Duplicate**, **Delete** and **Copy Path**), the settings on the right in containers.

| Container | What it holds |
|---|---|
| **Details** | The name, the id and a note |
| **Weathers** | The lines of the table (a list: **Add a weather** adds one, the buttons of a line move or remove it) |
| **Warnings** | What is probably a mistake: a table with no line or no weight, a line whose weather was deleted, a weather with warnings of its own |

Each line has:

| Field | What it does | Default |
|---|---|---|
| **Weather** | A weather of the project ([World > Weather](/basic/world/weather)). Empty: a **clear sky** | clear sky |
| **Weight** | How likely the line is compared with the others. A line of 3 comes up three times as often as a line of 1. 0 = never | 1 |
| **Shortest time** | The shortest time the weather lasts when it is picked, in minutes of play | 5 |
| **Longest time** | The longest time, in minutes of play. The time is picked between the two | 15 |

When the time of a line is up, the table picks again; it may pick the same weather again. The time counts **minutes of play**: it stops while the game is paused. The change into the next weather is a fade, over the **Fade seconds** of the weather that comes (or of the one that goes, when the next is a clear sky).

::: tip A clear sky in the table
A line with no weather is a clear sky. Give it a big weight and a long time and the place is mostly dry, with a storm now and then.
:::

## Where a table is used

- **A world.** In [World > Worlds](/basic/world/worlds#default-weather) the **Weather** section has a drop-down of tables under the drop-down of weathers. A world with a table uses it instead of the one default weather.
- **A zone.** In [World > Worlds > Zones](/basic/world/zones#weather-for-each-zone) the zone's **Weather** can be *A table of weathers*. The zone uses its table instead of the world's.

The table picks **once for a place** and keeps it while the party is in it or away for a moment: walking out of a rainy zone and back in does not change the weather. When the time is up, the next look at the place picks again, even if the party was away. A table that has picked is not saved: **a world that is entered picks again**.

## Events

The [Set Weather](/basic/events-and-quests/event-actions) action has a **Scope**:

| Scope | What it does |
|---|---|
| **World** (the default) | The weather is the same everywhere in the world until it is released |
| **Current zone** | The weather is set for the zone the party is in now, and for the zones in it. The other zones keep their weather. Outside the zones it is set for the world |

An event always wins over the weather and the tables of the zones and the world: the weather an event set stays until a **Release Weather** action takes it away (or the party leaves the world). An event for a zone is more particular than an event for the world, so it wins over it in that zone. **Release Weather** has a scope too: the weather set for the world, the one set for the current zone, or everything. After it the weather goes back to what the zones and the world say.

To do something only in a zone, use the condition [**Party is in zone**](/basic/world/zones#events-conditions-quests-texts) in an *If*: "if the party is in the Elderwood, set the weather to a storm for the current zone".

## Good to know

- A table needs the weathers to exist; deleting a weather leaves its line with a warning and a clear sky.
- The weather that comes from a zone has the intensity of the weather itself (events can change it with [Set Weather Intensity](/basic/events-and-quests/event-actions), which works on whatever weather is on).
- The weather is **seen where the camera is**. A storm in the next valley is not seen from a clear zone: the weather of a zone is the weather of the camera while the party is in it.
- The ground follows the weather of the zone the party is in, at the usual rates: after a rainy zone the ground dries slowly in a clear one. A zone's *Rain reaches* and *Snow reaches* still scale it.
