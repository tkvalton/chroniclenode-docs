# Interaction types

The **interaction** of an [interactable](/basic/entities/interactables) is the thing that happens when it is used. Pick one in the editor: every kind below has its own fields.

Each type has a section of its own in the editor. There are three families:

| Family | Works on | Types |
|---|---|---|
| **Object interactions** | Interactable objects | Door, Container, Switch, Light, Ladder, Rabbit Hole, Trap, Readable, Gather |
| **Common interactions** | Objects *and* NPCs | Speak, Conversation, Vendor, Crafting, Grant Quest, Show UI Panel |
| **Entity interactions** | NPCs and other entities | Loot, Join Party |

### Gather

A **gathering node**: an ore vein, an herb, a tree to chop, a fishing spot. Using it gives the user what the node's loot rules of the trigger **On Gathered** roll, **straight to the bag**. It uses everything from [Using an object](/basic/entities/interactables#using-an-object): a profession level as a requirement, a time to gather with a cast bar, the animation of the gatherer.

| Field | What it does | Default |
|---|---|---|
| **Charges** | How many times the node can be gathered from before it is used up. A mining node of `3` is gone after three gathers | `1` |
| **Loot mode** | **To the bag**: what a gather rolls goes straight to the gatherer's bag. **Window**: it goes into the inventory of the node and a loot window opens, like a chest (see below). **On the ground**: it lies around the node as [dropped items](/basic/items/dropped-items), and a full bag does not stop the gather | To the bag |
| **Auto close distance** | Window: the window closes when the gatherer walks this far (`2` to `20`) | `4` |
| **When depleted** | **Stays**: the node stays where it is, cannot be used, and plays its depleted animation. **Disappears**: it cannot be seen, hit or used | Stays |
| **Respawn seconds** | Game seconds until a used-up node is full again. `0` = never (until an event brings it back) | `0` |
| **Profession** (*Craft school*) | The [profession](/basic/items/craft-schools) a gather raises (Mining, Herbalism). `0` = none | none |
| **Skill points** | What one gather gives (Points mode), or the weight of the chance of a skill-up (Skill-ups mode) | `1` |
| **Skill up from / until** | The skill range the node teaches in, with a **curve** inside it, exactly as a [recipe](/basic/items/craft-recipes#what-a-recipe-teaches) does. From the *until* level the node teaches nothing (grey). `0` = it never stops | `1`, `0` |
| **Full / Gather / Depleted animation** | Animations of the object's model: when it is full (and comes back), at every gather, when it is used up | none |

**Where the loot comes from.** Add a [loot rule](/basic/items/loot-rules) to the object with the trigger **On Gathered**. Each gather rolls it again, so a node with a table of three herbs gives one of them each time. A rule can give currency too.

**Loot window.** With **Loot mode: Window** the node keeps what it rolled in an inventory of its own (no slot limit) and opens it like a [container](#container). What the gatherer does not take **stays**:

- Using the node again **opens the same window** with the same loot. It takes **no time**, uses **no charge** and gives **no skill**: nothing new is rolled until the node is empty.
- When the window is emptied the next gather rolls again (a charge, skill), and takes its time as usual.
- A node with no charges left is **not used up while loot is still waiting**: it is used up when the last loot is taken.
- What is waiting in the node is saved. A node that comes back after being used up is full and empty of loot.
- There is no "bag is full" check: the gatherer takes what fits.

**No room (to the bag).** The loot goes into the gatherer's bag or not at all. A gatherer whose bag has **no room at all** is told "Your bag is full" **before** the time starts. A bag with some room but not enough for the whole roll fails when the time is up: nothing is given, **the charge is not used**, and the node stays as it was. A [quest item that is kept aside](/basic/items/quest-items#quest-items-kept-aside) and a [currency](/basic/items/currency) take no room.

**Profession and skill.** Gate a node with the **Requirements** of the object: *Needs Mining 25*. The node teaches the profession only while the gatherer's skill is inside the node's range; a copper vein at skill 300 gives nothing to learn.

**Quests.** The **Player Gathered** [trigger](/basic/events-and-quests/event-triggers) counts gathers (of any node, or of one kind) for an objective: *Gather 8 Moonpetal*, with a tally.

**Saving.** The charges left, whether the node is used up and how long until it returns are saved.

A used-up node can be brought back by an event or later by a [spawner](/planned/spawners); today it comes back on its own when it has a respawn time.

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
| **Inventory** | An older setting: [items](/basic/items/items) and [currency](/basic/items/currency) in it from the start. It keeps working (as a [loot rule](/basic/items/loot-rules) on Initialize); new containers use loot rules | empty |
| **Max slots** | How many slots it has | `20` |
| **Inventory style** | Own rules for this container: no limit, a weight limit ... Off = the **container inventory style** of the [Gameplay Config](/basic/game-settings/gameplay-config#inventory-styles). See [Inventories](/basic/shared-systems/inventories#inventory-styles) | off |
| **Loot table** | An older setting: a [loot table](/basic/items/loot-tables) rolled into the container when it is created. Use a [loot rule](/basic/items/loot-rules) instead: it can roll when the chest is **first opened**, at the level of the one who opens it | none |
| **Auto close**, **Auto close distance** | The container closes when the player walks this many metres away (`2` to `10`) | on, `4` |
| **Animations**, **Sounds** | Closed, locked, open; open, close, locked | |

A container can be locked with the object's key. Using the key opens the lock and the chest in one go.

A destroyed container that still holds something stays **lootable**, like a corpse; a broken lock does not hold. See [Loot](/basic/entities/interactables#loot).

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
