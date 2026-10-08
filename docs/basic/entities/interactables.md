# Interactables

<Shot name="interactables-editor" caption="The Interactables editor (Entities > Interactables)." />

An **interactable** is an object of the world that the player can use or hurt: a door, a chest, a lever, a ladder, a sign, a trap, a crafting station, a barrel you can smash. The editor makes the **definition**; you place the object in a world with the [Uniques](/basic/world/uniques) tool, where a placed object can override some of the settings.

An interactable has **one interaction**: the thing that happens when it is used. The model, the lock, the targeting and the stats are the same for every kind.

## Basic properties

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Icon**, **Color** | The name the prompt shows and the editor lists |

## Visual properties

| Field | What it does | Default |
|---|---|---|
| **Object model scene** | The scene of the object: the model, its collision and its animations. **Select Model** opens the catalog | none |
| **Model scene scale** | Size of the scene, with **Uniform scale** | `1, 1, 1` |

The animations the scene has (open, close, locked, destroyed) are offered in the dropdowns of the interaction.

## Interaction

| Field | What it does | Default |
|---|---|---|
| **Locked by item** | An [item](/basic/items/items) that unlocks the object. A player who has it in the bag opens the lock by using the object. Empty = not locked | none |
| **Consume key on unlock** | The key is used up when it unlocks the object. Off: the key stays | off |
| **Interaction cooldown** | Seconds the object waits after being used before it can be used again. `0` = no wait | `0.5` |
| **Interaction** | What the object does: pick one of the [interaction types](#interaction-types) | none |

## Targeting and stats

By default an object is scenery. These switches make it a thing that can be attacked.

| Field | What it does | Default |
|---|---|---|
| **Targetable directly** | Single-target [abilities](/basic/abilities-and-effects/abilities) can pick it: a spell on a barrel, a heal on a destructible wall | off |
| **Targetable by AoE** | Area abilities hit it: a fireball breaks the crates | off |
| **Object has stats** | Turns on automatically when either switch above is on. The object gets a **stats data** (the same section as a [class](/basic/entities/player-classes#stats)): a health pool, defenses, [immunities](/basic/abilities-and-effects/immunities) | off |
| **Damage threshold** | The share of health under which the object counts as **damaged** (`0.7` = below 70 % health). A door reads it: *Can open when damaged* off keeps a damaged door shut | `0.7` |

When the master pool of an object empties, it is **destroyed**: it plays its `destroyed` animation (if the scene has one), stops being a target, and refuses to be used.

## Sound and visuals

| Field | Status |
|---|---|
| **Interaction SFX**, **Hit sound**, **Damaged sound**, **Destroyed sound**, **Destruction VFX** | Stored with the definition for your game's use. The toolkit does not play them by itself yet. The interactions have sounds of their own (the door and container sounds below) |

## Interaction types

Each type has a section of its own in the editor. There are three families:

| Family | Works on | Types |
|---|---|---|
| **Object interactions** | Interactable objects | Door, Container, Switch, Light, Ladder, Rabbit Hole, Trap, Readable |
| **Common interactions** | Objects *and* NPCs | Speak, Conversation, Vendor, Crafting, Grant Quest, Show UI Panel |
| **Entity interactions** | NPCs and other entities | Loot, Join Party |

### Door

| Field | What it does | Default |
|---|---|---|
| **Is open** | The door starts open | off |
| **Can open when damaged** | A damaged door can still be opened | on |
| **Auto close**, **Auto close delay** | The door closes by itself after this many seconds | off, `5` |
| **Animations** | The animations of opening, closing and being locked. Choose them from the scene's animations | open, close, locked |
| **Sounds** | Open, close, locked, creak | none |

A closed door blocks the way; an open door does not. A locked door shows its locked animation and plays its locked sound until the key is used.

### Container

A chest, a crate, a corpse-less loot pile.

| Field | What it does | Default |
|---|---|---|
| **Inventory** | The [items](/basic/items/items) and [currency](/basic/items/currency) in it | empty |
| **Max slots** | How many slots it has | `20` |
| **Loot table** | A [loot table](/basic/items/loot-tables) rolled into the container when it is created | none |
| **Auto close**, **Auto close distance** | The container closes when the player walks this many metres away (`2` to `10`) | on, `4` |
| **Animations**, **Sounds** | Closed, locked, open; open, close, locked | |

A container can be locked with the object's key. Using the key opens the lock and the chest in one go.

### Switch and Light

| Field | What it does | Default |
|---|---|---|
| **Current state**, **Starts on** | ON, OFF, BROKEN or [COOLDOWN](/basic/keywords#cooldown), and whether it starts on | off |
| **Cooldown enabled**, **Cooldown duration** | The switch cannot be used again for this long | off, `2` |
| **Animations**, **Sounds** | On, off, broken, locked | |

A switch raises signals your [events](/basic/events-and-quests/events) can react to: a lever that opens a gate.

A **Light** is a switch that lights something: **Light type** (Omni or Spot), color, energy, shadows, the range and attenuation of each type, the spot angle, and an optional VFX while it is on. A coloured light is saved with its color.

### Ladder

| Field | What it does | Default |
|---|---|---|
| **Climb speed** | Metres per second | `3` |
| **Allow multiple climbers** | More than one entity on the ladder at once | off |

The scene of a ladder needs a path with a start marker and an end marker. While climbing, the controls of the climber are locked.

### Rabbit hole

A teleporter between two places in the same world, like a staircase or a tunnel. Both ends are rabbit holes.

| Field | What it does | Default |
|---|---|---|
| **Destination rabbit hole** | The other end | none |
| **Arrival position**, **Arrival rotation** | Where and how the traveler appears, relative to the destination | zero |
| **Animations** | Idle, disabled, broken | |

### Trap

| Field | What it does | Default |
|---|---|---|
| **Trap effect** | The [effect](/basic/abilities-and-effects/effects) applied to whoever sets it off | none |
| **Trigger mode** | **Proximity** (something walks in), **Interaction** (it is used) or **Event call** (only an [event](/basic/events-and-quests/events) triggers it) | Proximity |
| **Reusability** | **One time**, **Cooldown** (with *Cooldown duration*) or **Unlimited** | One time |
| **Visible when armed** | The trap can be seen | on |
| **Trigger on players / NPCs / pets** | Who sets it off | players and NPCs |
| **Use relationship filter**, **Trigger relationship** | Also ask the [faction](/basic/behaviors/factions): only whoever is hostile to the trap sets it off. A trap that was *summoned* always asks, and only hurts the enemies of its summoner | off |
| **Fixed target position**, **Use fixed target** | Apply the effect at a fixed point instead of on the one who set it off | off |
| **Detection shape**, **Detection offset**, **Trigger delay** | The shape that notices entities, where it sits, and a delay after noticing | |
| **Repeat timer** (*enabled*, *interval*, *count*) | The trap goes off again on a timer, a number of times (`-1` = for ever) | off |
| **Lifetime** (*enabled*, *duration*, *cancel persistent effects*) | The trap expires after a time and ends the lasting effects it applied | off |
| **Trigger sound** | | |

### Readable

| Field | What it does |
|---|---|
| **Readable title** | The heading of the panel |
| **Pages** | The text of each page. BBCode works |
| **Background texture** | An image behind the text |

A sign, a book on a lectern, a note on a corpse. Using it opens the reading panel. (An *item* can be a readable too: see [Items](/basic/items/items#readable).)

### Speak

| Field | What it does | Default |
|---|---|---|
| **Text** | A line that floats over the object or NPC when it is used | |
| **Font**, **Text size**, **Outline size**, **Text color** | How it looks | |
| **Text duration** | Seconds the line stays. A longer voice line makes it stay longer | `5` |
| **Voice line**, **Animation** | A sound and a social animation that go with it | none |

### Conversation

| Field | What it does |
|---|---|
| **Conversation** | The [conversation](/basic/behaviors/conversations) that opens when the object or NPC is used |

### Vendor

| Field | What it does |
|---|---|
| **Vendor** | The [vendor](/basic/items/vendors) whose shop opens |
| **Shop open sound**, **Shop animation** | Played when it opens |

The shop closes if the customer walks away.

### Crafting

| Field | What it does | Default |
|---|---|---|
| **Craft school** | The [craft school](/basic/items/craft-schools) whose recipes this station offers | none |
| **Requires personal materials** | The crafter needs the materials in their own bag | on |
| **Open sound**, **Animation** | Played when it opens | |

### Grant quest

| Field | What it does | Default |
|---|---|---|
| **Quest** | The [quest](/basic/events-and-quests/quests) given when the object is used | none |
| **Disable after grant** | The interaction is switched off once it has given the quest | on |
| **Hide if quest started** | The prompt is hidden when the quest is already active or done | on |
| **Custom interaction name** | The text of the prompt. Empty uses the quest's name | |

### Show UI panel

Opens a panel of your own interface. It has no fields; the object only raises the request.

### Entity interactions

| Type | What it does |
|---|---|
| **Loot** | Opens the loot window of a dead NPC. The game installs it by itself on a corpse that has something to loot, and takes it away when the corpse is empty or the NPC is resurrected |
| **Join party** | Recruits a [playable character](/basic/entities/playable-character) into the party (or the reserve when the party is full). Field: **Character definition** |

## See also

- [Uniques](/basic/world/uniques) (placing objects and overriding), [Events](/basic/events-and-quests/events), [Items](/basic/items/items), [Vendors](/basic/items/vendors)
- [Entities: how they are built](/advanced/entities/) (Advanced)
