# World

A **world** is one place the party can be: a town, a forest, a dungeon. In ChronicleNode a world is two things that belong together:

- a **scene** (`.tscn`) where you build the place in the 3D viewport: terrain, buildings, lights, and the things that live there;
- a **world record** (`WorldData`) in the database, which says what the world is called, how it sounds and looks, and what it remembers when the party leaves.

Everything the party meets in a world is placed in the scene and stored as a **unique**: this particular wolf at this spot, this chest by that door, this area by the bridge, this ambush on the road. The definitions (what a wolf *is*) live in [Entities](/basic/entities/); a unique says *where* it stands and what is different about it.

| Page | What it covers |
|---|---|
| [Worlds](/basic/world/worlds) | The Worlds editor: make a world, name it, give it music, weather, a loading screen and persistence |
| [World Configs](/basic/world/world-configs) | Time, Sun, Sky and Environment: how the clock runs, the light, the sky and the fog |
| [Uniques](/basic/world/uniques) | The list of everything placed in every world |
| [Add Object](/basic/world/add-object) | The button in the 3D viewport that places an NPC, an interactable, a region or an encounter |
| [The Unique Object tool](/basic/world/unique-object-tool) | The bottom panel that edits the thing you selected in the viewport |
| [Regions](/basic/world/regions) | Areas of the map that [quests](/basic/events-and-quests/quests) and events can watch |
| [Encounters](/basic/world/encounters) | A group of NPCs that fights as one, with formations and reactions |

## How to build a world

1. **Worlds > Settings > Create New Map.** Give it a name and a category. The scene opens in the 3D viewport with a *PartySpawn* marker: that is where the party appears when nothing says otherwise.
2. **Build the place.** Terrain, models, lights: ordinary Godot work. Set the scene's *Terrain provider* if you use Terrain3D (footsteps and surface effects ask it what the ground is).
3. **Place the inhabitants** with **Add Object**: NPCs, interactables, regions, encounters. Each one becomes a unique in the database as soon as it is in the scene.
4. **Change what is different** about a placed object in the **Unique Object** panel: a stronger level 12 wolf, a locked chest, a guard with another patrol.
5. **Set up the world** in the Worlds editor: music, weather, the light override, persistence.
6. **Test it** with *Play Test World*, which starts the game in this world without the main menu.
7. **Connect it to the rest of the game** with a [rabbit hole](/basic/entities/interactables) (a door or portal) or an [event](/basic/events-and-quests/events) that moves the party.

## What the game does with a world

When the party enters a world the game:

1. unloads the world it was in, and *remembers* it if its [persistence](/basic/world/worlds#persistence) says so;
2. loads the scene and registers every NPC, interactable, region and encounter in it;
3. puts back what the world remembers (dead NPCs, opened chests), if it remembers anything;
4. places the party: at the exit of the rabbit hole it came through, or at an exact position, or at the *PartySpawn* marker;
5. applies the world's time, sun, sky and environment, starts its default weather and music.

NPCs that are far from the party do less thinking (the level of detail system), so a large world with many NPCs stays fast.

## See also

- [How the world is built](/advanced/world/) for the code behind all of this.
- [Gameplay Config](/basic/game-settings/gameplay-config) for the rules that apply everywhere (NPC level scaling, fog of war, save rules).
