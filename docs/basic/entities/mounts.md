# Mounts and vehicles

A **mount** is something a character rides: a horse, a griffin, a cart, a tank, a boat. In ChronicleNode a mount is a **Mount** of the Database (Entities > Mounts): it says how the mount moves, how the player steers it, and where riders **sit**. They are **basic versions** that work out of the box and that you build on: the steering and the seats are classes you can extend, and the editor finds the ones you add.

There are three ways to put a rider on a mount:

| | What it is | Made with | The mount has |
|---|---|---|---|
| **1. A mount that is a model** | A horse appears under the rider and the rider goes faster. Nobody steers a creature: the rider moves as before | The **Mount** [effect](#a-mount-that-is-a-model-the-mount-effect) | A model and a speed |
| **2. A creature you ride** | A real NPC (a horse, a wolf, a griffin): the player gets on it and the keys steer **it**. It keeps its health and stats | The **Mount** [interaction](#a-creature-or-a-vehicle-the-mount-interaction) on an NPC | Health, stats, an AI that waits while it is ridden |
| **3. A vehicle** | A cart, a tank, a boat: the same, steered with a throttle and a turning rate, and it can have **several seats** | The same **Mount** interaction, with the Vehicle steering and seats | The same as a creature |

All three can be **land, flying or swimming**, and a **boat** floats on the water. An **enemy** tank or horse needs no rider: it is a normal NPC with its own AI. Only the player is steered by the keys; an NPC that rides is something you start from a script ([Advanced](/advanced/entities/mounts#npcs-that-ride)).

## The Mounts editor

**Entities > Mounts** makes a mount. Every mount has these sections:

### Mount

| Field | What it does | Default |
|---|---|---|
| **Creature of the model** | For the Mount effect: the NPC whose **model** is the mount. Its stats and AI are not used. A mount that is an NPC of the world has its own model | none |
| **Movement** | **Ground** (walks), **Swim** (jump up, crouch down, W goes where the camera looks: see [movement volumes](/basic/world/movement-volumes)), **Fly** (the same, nothing pulls it down) or **Boat** (floats on the water of a movement volume, cannot dive or fly; on the ground it is on the ground) | Ground |
| **Speed multiplier** | The speed of the rider (a mount that is only a model) or of the mount (an NPC) times this | `1.5` |
| **Vertical speed** | How fast the mount goes up and down when it swims or flies | `4` |
| **A rider gets off when hurt** | Damage throws the rider | off |
| **Can be hijacked** | A vehicle that is **hostile** to a character can be boarded and taken over by it ([hijacking](#hijacking-a-vehicle)). Off: a hostile vehicle cannot be boarded. This is the value a vehicle starts with; an event or an effect changes it for one vehicle | off |
| **Idle / Move animation** | If the model of the mount has an AnimationPlayer: the animations played when it stands still and when it moves | `idle`, `run` |

### Steering

The **logic** that turns the keys into movement. The list is every class in `data_classes/mount/drive_logic/`:

| Logic | What it does |
|---|---|
| **Walk** (default) | The keys move the mount relative to the camera (W goes away from the camera) and it turns to face where it goes. A horse, a wolf, a griffin |
| **Vehicle** | **W** speeds up (acceleration), with no key it slows down, **S** brakes then reverses, **A** and **D** turn, faster the faster the vehicle goes (it cannot spin on the spot). A cart, a tank, a boat. Its numbers: acceleration, braking, turn rate and reverse speed |

Pick one and its numbers appear below. A logic you write yourself appears in the list with its numbers ([extending](#adding-your-own-seats-and-steering)).

### Seats

The places for riders. The list starts empty, which means **one Driver seat**. **Add seat** adds a seat of a class from `data_classes/mount/seats/`:

| Seat | What it does |
|---|---|
| **Driver seat** | The rider **steers** the mount: its keys go to the steering. Its action bar slots are the abilities of the driver (the cannon of a tank) |
| **Passenger seat** | The rider is carried and does not steer. It keeps its own action bar, unless the seat takes slots over |
| **Turret seat** | A gunner: a turret node of the model follows where the rider aims (the camera for a player, the target for an AI). Its action bar slots are the guns. Fields: the turret and barrel node names, how far it turns, how far the barrel tilts, how fast it turns |

Every seat has these fields:

| Field | What it does | Default |
|---|---|---|
| **Display name** | What the seat is called here | the class |
| **Marker name** | The node of the model of the mount where the rider sits (a `Marker3D`, found by its name). Empty: the **first** seat uses the mount seat of the skeleton, the others use the Seat offset | empty |
| **Seat offset** | Where the rider sits compared with the mount when the model has no marker for the seat | `0, 1, 0` |
| **Pose name** | The pose of the rider: the name of a status animation folder; its `_loop` animation plays while the rider sits | empty |
| **Controls movement** | The rider of this seat steers the mount. Only one seat should | the class |
| **Clears other slots** | All the slots the seat does not list are emptied while the rider sits (the seat has the whole bar) | off |
| **AI** | What acts for the seat when the rider is not the player, or when nobody sits: [see below](#ai-for-a-seat) | none |
| **Ai runs when empty** | The AI of the seat acts when **nobody sits** in it (a tank crewed by AI) | off |

### The action bar of a seat

Each seat has its own list of **action bar slots**: a slot number and an **ability**. While a rider sits, those slots show those abilities and the player **cannot change them**; every other slot stays the player's (or is emptied, with *Clears other slots*). When the rider gets up, the player's own bar comes back. With **Grant** on, the rider is given an ability it does not know for as long as it sits.

So a tank driver sees a **Fire cannon** on slot 1 and **Smoke** on slot 2, a gunner on the cart sees the guns, and a passenger keeps their own spells. The abilities of an **NPC** mount or vehicle come from its NPC definition as for any NPC: only the seats of the player's characters set the bar.

## AI for a seat

A seat can have an **AI**: a class from `data_classes/mount/seat_ai/`. It decides the **move input** of the seat, the same x and y that the keys give, and a driver seat sends that to the steering of the mount, so an AI tank turns like a tank that a player drives. Who acts for a seat is decided every moment:

| Who sits | Who acts for the seat |
|---|---|
| The character the **player controls** | The player: the keys (a driver steers, a gunner aims with the camera). The AI of the seat waits |
| **Another rider**: a companion, an NPC | The AI of the seat, if it has one. With no AI the rider is only carried |
| **Nobody**, and *Ai runs when empty* is on | The AI of the seat: a **crew** (below) |

So with your party in a vehicle, you take the driver seat and a companion takes the turret: the companion's seat has an AI, so it aims and fires by itself. Press **Tab** to play the companion and the turret is **yours**, with the camera; the character you left on the driver seat is driven by the AI of that seat (if it has one). The seats are the same either way.

The AI classes that come with the toolkit:

| AI | What it does | Numbers |
|---|---|---|
| **Driver AI** | Drives where the behavior of the one who decides goes: the NPC's own movement orders (or the companion's, following its leader) become throttle and steering. It turns first if the heading is far off and slows down near the end of the path | slow distance, steering gain, turn-first angle |
| **Turret AI** | Aims the turret at the **target** (of the rider, or of the mount when nobody sits) and fires the abilities of the seat when the turret points at it and the target is in range | fire range, aim tolerance, fire interval |

The **abilities** of an AI seat are the ones in its action bar slots. They are cast by the **rider** (a rider is given them while it sits, like a player), or by the **vehicle itself** when nobody sits: so a crewed tank needs the cannon in the **abilities of its NPC definition**, and its damage comes from the stats of the NPC.

### A vehicle crewed by AI

An **enemy tank** is a normal NPC: place it with a **Mount** interaction whose Mount has seats with an AI and **Ai runs when empty** on. The vehicle then comes with its own crew, and **no NPC needs to sit in it**:

- The NPC keeps its brain (behavior and combat scripts) that picks the target and where to go. The seats do the rest: the **driver seat** drives there, the **turret seat** aims at the target and fires.
- While **a player rides** the vehicle (even a companion that the player brought), the crew steps back; when they get off it returns. A vehicle that is destroyed has no crew.
- Mounted archers need no seats: an NPC with a bow ability and a horse model already moves and shoots.

## A mount that is a model: the Mount effect

The **Mount** effect (Effects > Movement) puts the target on a mount **for as long as the effect lasts**. Give it a *Persistent* time strategy for a mount the player calls and dismisses, or a *Temporary* one for a mount that lasts a minute. Put it in an [ability](/basic/abilities-and-effects/abilities) (a *Summon Mount* spell), an item that is used, or an [event](/basic/events-and-quests/event-actions) (**Grant Effect to Player**). It has one field: the **Mount** to use.

What happens: the model of the creature is added under the rider, the model of the rider is lifted onto the **first seat**, the pose of that seat plays, and the rider moves faster, or swims, or flies, or sails. The rider keeps its own movement, collisions and controls. When the effect ends or runs out, or the rider **gets off with the interact key** or dies, the model goes and the rider is back as it was.

## A creature or a vehicle: the Mount interaction

Add the **Mount** interaction (Entity interactions) to an [NPC](/basic/entities/npcs) and choose its **Mount**. Walk up to the NPC and use it (the interact key): the player sits on the **first free seat**.

- The NPC is a normal NPC (or a summoned pet): it keeps its **health, stats and faction**. Its behavior and combat AI **wait** while it is ridden.
- The rider of a steering seat **steers the NPC** with the keys. The camera, the targeting and the abilities stay with the rider.
- The rider is **carried**: it does not collide or move by itself.
- Other characters sit on the **other seats** (a companion on a cart). The rider gets off with the **interact key**, or when the mount or the rider **dies**, or when the rider is hurt (if the mount says so), and lands beside the mount. When the driver gets off the vehicle stops and the passengers stay.
- The speed of the NPC is its **movement speed** stat times the *Speed multiplier* of the mount.

Make a **boat** with *Movement: Boat* and the Vehicle steering; give the world a [movement volume](/basic/world/movement-volumes) for the water. A **tank** that fights is a normal NPC with its own abilities; the player who drives it uses the seat's slots.

## Adding your own seats and steering

The seats and the steering are **classes**, and the editor lists the scripts it finds in their folders:

- `data_classes/mount/seats/` for seats (a script that `extends Seat`)
- `data_classes/mount/drive_logic/` for steering (a script that `extends DriveLogic`)

Save a new script in the folder and it is in the lists of the Mounts editor, with its exported variables shown as fields (a switch for a bool, a number box for a number, a list for an enum ...). A **TurretSeat** that aims a gun, a **HoverDrive** that floats: you write what they do, the editor does the rest. See [Advanced](/advanced/entities/mounts#your-own-seats-and-steering) for the code.

## Getting on and off: the interact key

There is no key of its own. The **interact key** (E by default, the one you rebind in the settings with the movement keys) **gets on** (using the NPC) and **gets off**: pressed on a mount or a vehicle it takes the rider down and does nothing else, so talking to someone from the saddle is something you get off for. The action bar slots stay for abilities; the movement and interact keys are separate actions of the Input Map.

## Hijacking a vehicle

A vehicle is **commanded by the rider of its first seat** (seat 1). While that rider sits, the vehicle is of **its faction**; when it gets up, the vehicle goes back to the faction it had. A rider of another seat changes nothing.

A vehicle that is **hostile** to a character (its faction and the character's are enemies) cannot be boarded by it, unless it is **hijackable**. Every vehicle has that as a yes or no of its own:

| | |
|---|---|
| **Starting value** | The *Can be hijacked* switch of its Mount (off by default) |
| **A story changes it** | The event action **Set Vehicle Hijackable** (a placed NPC, on or off), for example after a quest step |
| **A moment changes it** | The effect **Hijackable** (Effects > Movement): the vehicle is hijackable, or not, while the effect lasts, and as it was after |

So an enemy tank is closed to the player until something opens it; then the player climbs in, the crew steps back, and the tank fights for the player. Nothing else about the tank changes. A friendly or neutral vehicle needs no permission.

## Event actions for mounts

| Action | What it does |
|---|---|
| **Mount Entity** | Puts a placed NPC on a placed vehicle or mount: the seat you give (1 is the first) or the first that is free. An NPC cannot take a hostile vehicle that is not hijackable unless *Force* is on. If the seat has an AI, the AI acts for the NPC |
| **Dismount Entity** | Gets a placed NPC off what it rides |
| **Set Vehicle Hijackable** | Opens or closes a vehicle to hijacking |

## Saving and loading

Rides are saved with the characters. **When a game is loaded, everybody sits where they were**: the players, the companions and the NPCs that were riding something are put back on the same seat of the same mount, **as they were**: nothing is announced, no checks are made, the vehicle keeps its faction and no animation plays but the pose the rider was holding. A seat keeps what it needs (a turret points where it did; an ability a seat gave its rider is given again). What the vehicle was doing (its speed) starts again from rest.

The mount has to be found again by its id, so a mount must be a **placed NPC** (or a character of the party). A mount that was spawned during play has no id of the world: its rider is left standing at the place it was saved, which is the seat. The Mount effect is saved like every effect and applies itself again on a load.

## What the basic versions do not do

These are left for you to build on (the [Advanced](/advanced/entities/mounts) page says where):

- **A mount that fights while it is ridden.** Its own behavior waits while anybody rides it; the AI of the seats is what acts.
- **NPCs that choose to ride.** An NPC rides when an event or a script puts it on a mount; nothing makes one walk to a mount by itself.
- **A hijack that stays.** The vehicle goes back to its faction when the rider of the first seat gets up.
- **Saving a mount that was spawned during play** (it has no id to be found by).
- **Mount stamina and mount-only animations** for the rider (it uses the pose you name).
