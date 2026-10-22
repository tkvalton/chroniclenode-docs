# Gameplay Config

<Shot name="gameplay-config-editor" caption="The Gameplay Config editor (Game Settings > Gameplay Config)." />

The **Gameplay Config** holds the rules of your game that are not about one thing in the database: how combat is resolved, what death costs, how the party works, what is saved. Every field has a tooltip. The editor has five categories; the two big ones have pages of their own, and the others are on this page.

## Categories

| Category | Groups | Where |
|---|---|---|
| **Party Management** | Party and companions, New Game Rules, Controller Logic, Action Bar, Input | [Party Management](/basic/game-settings/gameplay-party) |
| | Leveling, Kill Experience, NPC Level Scaling | [Leveling and experience](/basic/game-settings/leveling-and-experience) |
| **Combat** | Death & Revival, Threat, Damage Results, Pools | [Combat](/basic/game-settings/gameplay-combat) |
| | Hit Rules (what can miss, accuracy and evasion, melee and ranged) | [Hit Rules](/basic/game-settings/hit-rules) |
| **General** | Items & Inventory, Dropped Items, Durability, [Quests](/basic/events-and-quests/quests), Fog of War, Breath, Footsteps, Save/Load Rules | [below](#general) |
| **Visuals** | Rig Markers, Outline Materials, Targeting Visuals, Tactical View Visuals, Target Textures | [below](#visuals) |
| **NPC LOD System** | LOD distance thresholds, update intervals, batch processing | [below](#npc-lod-system) |

::: tip Where to start
Most games change a handful of these: the size of the party and the rules of a new game ([Party Management](/basic/game-settings/gameplay-party)), what death costs ([Combat](/basic/game-settings/gameplay-combat)), and whether attacks can miss ([Hit Rules](/basic/game-settings/hit-rules)). The rest has defaults that work.
:::

## General

### Fog of war

Fog of war hides the parts of the world the party has not seen. Unexplored ground is covered by a **shroud**; ground that was seen but is out of sight is dimmed (**explored**); what is in sight is clear. Entities in the fog are hidden. The fog is drawn by a GPU effect, so it cannot be seen in the editor's headless tests; try it in the game.

| Field | What it does | Default |
|---|---|---|
| **Fog of war enabled** | The whole system on or off | on |
| **Fog layers** | `1` = only the shroud; `2` = shroud and a dimmed "explored" layer | `2` |
| **Fog persist exploration** | What was explored stays explored (kept per world, and saved with the game) | on |
| **Fog shroud color** | The colour of unexplored ground; the alpha is its strength | black |
| **Fog explored color** | The colour of explored ground out of sight | black, 60 % |
| **Fog edge quality** | How smooth the edge of the fog is: sharp, low, medium, high, ultra (costlier) | Medium |
| **Fog edge softness**, **Fog blur radius** | How gradual the edge is, and how blurred | `0.3`, `1` |
| **Fog pixels per unit** | Detail of the fog image, `1` to `6` (more is sharper and uses more memory) | `4` |
| **Fog update interval** | Seconds between updates of the vision circles | `0.1` |
| **Fog entity hide mode** | How an entity in the fog is hidden: **hide the rig** (fast, collision stays), **fade with a shader** (smooth, costlier) or **hide the whole entity** (may change collision) | Hide the rig |
| **Fog fade duration** | Seconds of the fade, for the shader mode | `0.3` |
| **Fog keep collision active** | An entity hidden in the fog still collides | on |
| **Fog hide nameplates**, **Fog hide map markers** | Nameplates and map markers of entities in the fog are hidden too | on |

### Quests

The quest settings are on the [Quests page](/basic/events-and-quests/quests#the-quest-settings): **max active quests** (`20`), **quest markers**, **default quest failure**, **quest game over delay**, **allow quest abandon**, **show quest levels**, the four **quest level gaps**, and **auto track quest objectives**.

### Item generation

How [generated items](/basic/items/item-generation) are made and what level their loot has.

| Field | What it does | Default |
|---|---|---|
| **Item budget formula** | Turns the item level into the **stat budget** of an item of that level, before the slot weight, the multiplier of the item and the budget multiplier of its quality. A [formula](/basic/shared-systems/formulas): *Linear 20* gives 20 at level 1 and 400 at level 20; a curve (hyperbolic, a soft cap) makes the high levels give less and less extra. Below the formula a table shows the budget at a few levels | empty (Linear 20) |
| **Default NPC loot level** | Where the item level of NPC loot comes from when neither the loot table nor the [loot rule](/basic/items/loot-rules#where-the-item-level-comes-from) says: **Holder level** (the NPC's own), Receiver level, Party level or World level | Holder level |
| **Default object loot level** | The same for chests, crates and other objects. An object has no level of its own, so *Holder level* falls back to the party's | Party level |
| **Fallback item level** | The item level used when a source cannot give one (no party yet, a world with no level) | `1` |

### Inventory styles

How the bags of characters, NPCs and containers work: slots or no limit, weight, and what happens above the limit. The fields and what they do are on [Inventories](/basic/shared-systems/inventories#inventory-styles).

| Field | What it does | Default |
|---|---|---|
| **Character inventory style** | The bag of players and companions | Slots from Bag Slots, no weight |
| **Npc inventory style** | The bag of NPCs. An NPC can have its own (the NPC editor, Bag) | the same |
| **Container inventory style** | Chests, bodies and other objects. A container can have its own | the same |

### Items and inventory

| Field | What it does | Default |
|---|---|---|
| **Item weight enabled** | An older switch: it is not read any more. Weight is a rule of the [inventory styles](#inventory-styles) | off |

*Weight is a rule of the [inventory styles](#inventory-styles) and durability has its own group, below. Dropped items have theirs after it.*

### Durability

Equipment that wears out: see [Durability](/basic/items/durability) for how it works. The numbers (how much durability, how fast it wears) are on the [equipment slots](/basic/equipment-definitions/equipment-slot#durability).

| Field | What it does | Default |
|---|---|---|
| **Durability mode** | **Off**, or **On hits**: weapons lose durability when their wearer deals damage, the rest of the equipment when it takes damage | Off |
| **Durability loss per hit** | How much a piece loses in a hit (times the loss multiplier of its slot) | `1` |
| **Durability loss chance** | The chance a piece wears in a hit | `1` |
| **Durability one piece per hit** | Only one random piece wears when its wearer takes damage | off |
| **Durability broken behavior** | A piece at 0: **No effect** (stays on, gives nothing until repaired), **Unequip** (into the bag) or **Destroy** | No effect |
| **Durability repair cost multiplier** | The price of a repair: vendor value × share missing × this | `0.25` |

### Dropped items

Items that lie in the world: see [Dropped items](/basic/items/dropped-items) for how they work.

| Field | What it does | Default |
|---|---|---|
| **Dropped items enabled** | The switch of the feature. Off: nothing lies in the world, and a loot rule that drops on the ground puts the loot in the inventory of the body | on |
| **Visual style** | **Mesh**: the model of the item. **Sprite**: a flat picture of its icon that faces the camera | Mesh |
| **Physics** | **Place on ground**: put under where it is dropped and kept still. **Settle then freeze**: thrown, it falls and bounces, and is frozen once it rests. **Always simulated**: a physics body as long as it lies there | Settle then freeze |
| **Pickup walk over** | Walking over an item takes it (only the character the player controls) | on |
| **Pickup interact** | The interact key takes the nearest item | on |
| **Pickup mouse over** | Clicking an item with the mouse takes it (for games with a visible pointer) | off |
| **Pickup look at** | The interact key takes the item under the crosshair (for mouse-look games) | off |
| **Walk over radius** | How close a character must come to take an item by walking over it | `1.2` |
| **Mouse range** | How far away an item can be and still be taken with the mouse or by looking at it | `5` |
| **Pickup delay** | Seconds after landing before an item can be taken | `1` |
| **Lifetime** | Seconds an item lies before it disappears (`0` = for ever) | `0` |
| **Label mode** | When the name shows above the item: never, when hovered, looked at or the interact target, or always | Hover and target |
| **Scatter radius** | How far from the place several drops are scattered | `1` |
| **Max in world** | The most items in the world at once (`0` = no limit); past it the oldest goes | `0` |
| **Saved to map** | Items dropped while playing are kept in the save and when the player leaves a world and comes back | on |
| **Scene** | The scene a dropped item is made from (empty = the one of the toolkit). Copy `dropped_item.tscn` to change how it looks; see [how they are built](/advanced/items/dropped-items#changing-how-an-item-looks) | the toolkit's |

### Breath

How long an entity can stay under water. A [movement volume](/basic/world/movement-volumes#breath) says *where* an entity must hold its breath; these say *who*, *how long* and *what happens*.

| Field | What it does | Default |
|---|---|---|
| **Breath users** | Who holds their breath: **Nobody** (swimming is free), **Players** or **Everyone** (NPCs too) | Players |
| **Breath duration** | Seconds of breath | `20` |
| **Breath recovery speed** | How fast the breath returns above the surface, compared with how fast it ran out (`4` = four times as fast) | `4` |
| **Drowning effect id** | The [effect](/basic/abilities-and-effects/effects) that is on an entity while it has no breath (a damage over time). It comes off when the breath returns. `0` = nothing happens | `0` |

The player sees the breath in the **breath bar** of the [HUD](/basic/user-interface/hud), which shows while the breath is not full.

### Footsteps

How the footstep, jump and landing sounds of entities are timed. The sounds themselves come from the [audio library](/basic/assets/audio#sounds-of-an-entity) (`motion/<type>/footsteps/<surface>/<movement>/`).

| Field | What it does | Default |
|---|---|---|
| **Footsteps from movement** | The game makes a footstep every stride of ground an entity walks, a jump sound when it leaves the ground and a landing sound when it comes down. It needs nothing in the animations. Turn it off if your animations call for the sounds themselves | on |
| **Footstep stride walk** | Metres between two footsteps while walking or crouching | `0.8` |
| **Footstep stride run** | Metres between two footsteps while running | `1.5` |

If an animation calls for a footstep itself (a *Call Method* track on the walk or run animation calling `_on_animation_walk_footstep_emit` or `_on_animation_run_footstep_emit` on the entity animation player; `_on_animation_jump_start_emit` and `_on_animation_jump_end_emit` for jumps), the game uses those calls and the movement adds none for that kind of sound.

### Developer

| Field | What it does | Default |
|---|---|---|
| **Developer commands** | The developer commands of the [chat box](/basic/game-settings/chat#developer-commands) (`/give`, `/xp`, `/level`, `/money`, `/addtime`, `/settime`, `/quest`). Turn it off for a release | off |

### Save/Load rules

| Field | What it does | Default |
|---|---|---|
| **Allow manual save** | Players can save when they like | on |
| **Allow save during combat** | Saving while the party is in combat | off |
| **Max save slots** | `0` = unlimited | `10` |
| **Save directory** | Where the saves go | `user://saves/` |
| **Save on area transition** | Save automatically when the party changes world | off |

*These five are not used yet: they are stored, but nothing reads them. The game saves into `user://saves/` whatever the setting says, and autosaves when the player leaves to the menu or quits (and not while the party is in combat). See [Save and load](/advanced/save-and-load).*

## Visuals

The pictures and materials the game uses to show targeting, selection and the tactical view. Leave a field empty to use no picture.

| Group | Fields | Used by |
|---|---|---|
| **Rig markers** | **Hitbox outline texture**, **Selection marker texture**, **Target marker texture** | The marks drawn under or around an entity |
| **Outline materials** | **Hover outline material** (the entity under the mouse), **Selection outline material** (the selected entity) | The outline of a highlighted entity |
| **Targeting visuals** | **Max distance circle marker** (the range of an ability), **Attack ribbon material** (the line from the user to the mouse) | Aiming an ability. *The range circle is not used yet* |
| **Tactical view visuals** | **Path material**, **Destination material** | The line and the marker of a click-to-move path. *Not used yet* |
| **Target textures** | **Ability target textures**: the pictures an ability can choose for its targeting marker | The ability's targeting marker |

## NPC LOD system

The **level of detail** system keeps a big world fast: NPCs far from the party think less often. Every second or so the game puts each NPC into one of five levels by its distance from the party.

| Field | What it does | Default |
|---|---|---|
| **NPC LOD enabled** | The system on or off. Off: every NPC thinks every frame | on |
| **LOD distance high / medium / low / minimal** | The distance (metres) where each level starts: up to *high* is full detail; beyond *minimal* an NPC is paused (culled) | 30 / 100 / 250 / 400 |
| **LOD interval high / medium / low / minimal** | Seconds between updates of an NPC at each level | 0.1 / 0.5 / 1 / 2 |
| **LOD optimization interval** | Seconds between runs of the checker | `1` |
| **LOD controllers per batch** | How many NPCs are checked per run, so a world with hundreds of NPCs does not stall | `10` |

A good setting is the one you cannot notice: raise the distances if NPCs seem to freeze when you look back at them, lower them if a big world stutters.

## See also

- [Stat recipes](/basic/entity-stats/stat-recipes), [Calculations](/basic/entity-stats/calculations)
- [Game Settings](/basic/game-settings/)
