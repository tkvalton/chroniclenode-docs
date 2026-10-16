# Planned features

These pages describe parts of ChronicleNode that are **not built yet**. They are here so you can see where the toolkit is going and plan your game around it. They say what is intended, what the toolkit already has that the feature will build on, and what is still undecided.

::: warning Not available yet
Nothing on these pages can be used today. A page can change before its feature ships. When a feature is built, its page moves into the [Basic guide](/basic/) and the [Advanced section](/advanced/).
:::

| Feature | What it is | What exists today |
|---|---|---|
| [Flying](/planned/flying) | Entities that can fly because of what they are, an ability or an effect | Flying in a [weightless movement volume](/basic/world/movement-volumes), and the claims that anything can add |
| [The World Builder](/planned/world-builder) | A terrain tool, better placement of uniques, water placement and visual wiring between interactables | The [Add Object](/basic/world/add-object) and [Unique Object](/basic/world/unique-object-tool) tools |
| [Localization](/planned/localization) | Playing in more than one language: your text stays in one language and the translations live in a table (CSV), found by stable keys, with coverage, a table editor and a test language | Lists of text for each language in conversations and quests; the text tokens |
| [Chat box and combat log](/planned/chat-box) | The combat log becomes a chat box with tabs: level ups, skill ups, loot, experience, quests, and emotes | A [combat log](/basic/user-interface/hud) in the HUD and short [messages](/basic/user-interface/messages-and-popups) that fade |
| [Entity tooltip](/planned/entity-tooltip) | A tooltip for an NPC, a pet or an object: name, level, faction and standing, what it offers | Five [tooltips](/basic/user-interface/tooltips) (none for an entity) and the [nameplates](/basic/user-interface/nameplates) |
| [Which windows can be open together](/planned/panel-stacking) | Windows with a layer (exclusive, standard, persistent) and a limit, and windows opened by name | One window at a time, fixed in the code |
| [Zones](/planned/zones) | Named areas of the map, with sub-zones: a banner on enter, their own look, weather and sound, painted, in chunks or as volumes (caves, floating islands). Regions become *trigger areas* | [World configs](/basic/world/world-configs), default weather, [regions](/basic/world/regions) with a name |
| [Spawners](/planned/spawners) | Areas (a volume, or painted terrain) where NPCs and gathering nodes appear by themselves: what, how many, how often | The spawn event actions, respawn timers on NPCs and encounters, nodes that fill up again |
| [The NPC behaviour tool](/planned/npc-behaviour-tool) | See and edit what an NPC does in the 3D view: its patrol paths and its behaviour | [Behavior scripts](/basic/behaviors/behavior-scripts) with a list of waypoints |
