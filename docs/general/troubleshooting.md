# Troubleshooting

The things that most often look broken and are not, or that have one clear cause. Each entry says what you see, why, and where to fix it.

## The editor and the project

### The first open of the template project is very slow

Godot imports the art, audio and models the first time it opens the project. It shows a progress bar and only does this once. See [Using the template project](/general/template).

### A setting changes nothing

Some settings are stored but nothing reads them yet: the *Language* setting, *Subtitles enabled*, *Auto save* and its frequency, the items weight and durability switches, and a few visuals. The page of each setting says **not used yet** where this is so: [Settings](/basic/game-settings/settings), [Gameplay Config](/basic/game-settings/gameplay-config) and [Localization](/basic/game-settings/localization).

### The editor shows "ID n (Not Found)"

The thing with that id does not exist (any more): an icon whose file was renamed or deleted, or a stat, ability or item that was deleted. Everything that points at an id keeps the number. Put the file or the resource back, or choose another one. For icons see [Icons](/basic/assets/icons).

### The mesh or the audio library looks wrong

**Assets > Meshes > Settings > Validate Database** checks the whole mesh library and lists errors (red) and warnings (yellow). The other libraries have a **Refresh** that reads the folders again. See [Meshes](/basic/assets/meshes).

### The interface scene is reported in red

**Game Settings > UI Settings** reads your interface scenes and tells you what is wrong: a root of the wrong class (the scene is the wrong one, or its script is missing from the root), a path to a scene that does not exist, a panel in `UIPanels` that is not a panel, or two panels with the same key number. Fix the line in red, then press **Refresh**. See [UI Settings](/basic/game-settings/ui-settings#warnings).

## Quests

### A quest never completes

A quest finishes when its objectives are done *and* three more things hold:

- **Hand-in**: a quest with *Requires hand in* waits at "ready to hand in" until an NPC takes it in. The quest editor shows an orange warning while no [conversation](/basic/behaviors/conversations) has the quest in its hand-in list. Add it to one.
- **Hand-in cost**: the quest waits until the player can pay all of it (money and items). The player is told what is missing, and nothing is taken until all of it can be.
- **Rewards that need room**: an item reward with a full bag also makes the quest wait. It completes by itself as soon as there is room.

See [Quests](/basic/events-and-quests/quests).

## Entities and stats

### An NPC never grows with its level

Growth comes from the first layer that has an answer: the NPC's own override, its growth profile, the profile's parents, the project's default profile, then the stat or pool itself. A stat with no growth formula shows a yellow *no growth* note in its editor. An NPC that follows a [template](/basic/entities/templates) has the growth of the template, and its Stats section shows it without letting you change it. See [Growth profiles](/basic/entity-stats/growth-profiles).

Weapon Damage only grows for an NPC that has some: an NPC with weapon damage `0` stays at `0`.

### Changing a template did not change an NPC

An NPC follows its template when it is brought up to date: saving the template does it for every NPC that follows it, and opening an NPC does it for that one. Check the Template section of the NPC:

- It says which template it follows, or **Follows no template**.
- A stat set to **Always this value** never follows.
- A yellow warning means the template took away something the NPC had changed: the NPC kept it.
- What the NPC changed on top of the template stays, so the value is the template's *plus* the NPC's own difference.

See [Templates](/basic/entities/templates).

### A placed NPC does not have the change I made to its definition

A placed NPC with a **stats override** follows its definition from the first time the override is opened in the 3D viewport; an override made before that starts following then. An NPC *without* an override always uses the definition. See [Uniques](/basic/world/uniques).

### A hit accuracy effect does nothing

It only matters while the hit system is on. If your game has no misses ([Gameplay Config > Hit Rules](/basic/game-settings/gameplay-config#hit-rules)), leave the accuracy effect out.

## The interface

### A panel does not open when I press its key

Open **UI Settings** and look at the list of UI panels: a panel needs a **panel name** *and* a **panel keybind** (1 to 20). A key number set on two panels only opens the first one. The key itself is the action `panel_keybind_N` in the Input Map; the list shows *no key set* when it has none. See [UI Panels](/basic/user-interface/ui-panels).

### The Show UI Panel interaction does nothing

It has no effect yet. It belongs to the work that lets a panel added to `InteractionPanels` be found by name. See [Interaction panels](/basic/user-interface/interaction-panels).

### A popup is missing from the list

The list shows every scene built on a PopupUI that is saved in the project. A popup whose scene is missing, or whose root is not a PopupUI, is shown in red. **Remove** only takes it out of the list; saving the scene puts it back. See [Popups](/basic/events-and-quests/popups).

## Still stuck?

Press the **?** button of a tab of the editor: it opens the page of that editor. The [editor tour](/general/editor-tour) shows where everything is.
