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

Every seat has these fields:

| Field | What it does | Default |
|---|---|---|
| **Display name** | What the seat is called here | the class |
| **Marker name** | The node of the model of the mount where the rider sits (a `Marker3D`, found by its name). Empty: the **first** seat uses the mount seat of the skeleton, the others use the Seat offset | empty |
| **Seat offset** | Where the rider sits compared with the mount when the model has no marker for the seat | `0, 1, 0` |
| **Pose name** | The pose of the rider: the name of a status animation folder; its `_loop` animation plays while the rider sits | empty |
| **Controls movement** | The rider of this seat steers the mount. Only one seat should | the class |
| **Clears other slots** | All the slots the seat does not list are emptied while the rider sits (the seat has the whole bar) | off |

### The action bar of a seat

Each seat has its own list of **action bar slots**: a slot number and an **ability**. While a rider sits, those slots show those abilities and the player **cannot change them**; every other slot stays the player's (or is emptied, with *Clears other slots*). When the rider gets up, the player's own bar comes back. With **Grant** on, the rider is given an ability it does not know for as long as it sits.

So a tank driver sees a **Fire cannon** on slot 1 and **Smoke** on slot 2, a gunner on the cart sees the guns, and a passenger keeps their own spells. The abilities of an **NPC** mount or vehicle come from its NPC definition as for any NPC: only the seats of the player's characters set the bar.

## A mount that is a model: the Mount effect

The **Mount** effect (Effects > Movement) puts the target on a mount **for as long as the effect lasts**. Give it a *Persistent* time strategy for a mount the player calls and dismisses, or a *Temporary* one for a mount that lasts a minute. Put it in an [ability](/basic/abilities-and-effects/abilities) (a *Summon Mount* spell), an item that is used, or an [event](/basic/events-and-quests/event-actions) (**Grant Effect to Player**). It has one field: the **Mount** to use.

What happens: the model of the creature is added under the rider, the model of the rider is lifted onto the **first seat**, the pose of that seat plays, and the rider moves faster, or swims, or flies, or sails. The rider keeps its own movement, collisions and controls. When the effect ends or runs out, or the rider **gets off with the dismount key** or dies, the model goes and the rider is back as it was.

## A creature or a vehicle: the Mount interaction

Add the **Mount** interaction (Entity interactions) to an [NPC](/basic/entities/npcs) and choose its **Mount**. Walk up to the NPC and use it (the interact key): the player sits on the **first free seat**.

- The NPC is a normal NPC (or a summoned pet): it keeps its **health, stats and faction**. Its behavior and combat AI **wait** while it is ridden.
- The rider of a steering seat **steers the NPC** with the keys. The camera, the targeting and the abilities stay with the rider.
- The rider is **carried**: it does not collide or move by itself.
- Other characters sit on the **other seats** (a companion on a cart). The rider gets off with the **dismount key**, or when the mount or the rider **dies**, or when the rider is hurt (if the mount says so), and lands beside the mount. When the driver gets off, the vehicle stops and the passengers stay.
- The speed of the NPC is its **movement speed** stat times the *Speed multiplier* of the mount.

Make a **boat** with *Movement: Boat* and the Vehicle steering; give the world a [movement volume](/basic/world/movement-volumes) for the water. A **tank** that fights is a normal NPC with its own abilities; the player who drives it uses the seat's slots.

## Adding your own seats and steering

The seats and the steering are **classes**, and the editor lists the scripts it finds in their folders:

- `data_classes/mount/seats/` for seats (a script that `extends Seat`)
- `data_classes/mount/drive_logic/` for steering (a script that `extends DriveLogic`)

Save a new script in the folder and it is in the lists of the Mounts editor, with its exported variables shown as fields (a switch for a bool, a number box for a number, a list for an enum ...). A **TurretSeat** that aims a gun, a **HoverDrive** that floats: you write what they do, the editor does the rest. See [Advanced](/advanced/entities/mounts#your-own-seats-and-steering) for the code.

## The dismount key

The key is the input action **dismount** (X by default), made by the project setup. A project that was set up before this existed gets it the next time the setup runs; or add the action in *Project Settings > Input*. It is not in the settings menu of the player yet.

## What the basic versions do not do

These are left for you to build on (the [Advanced](/advanced/entities/mounts) page says where):

- **Abilities cast from the vehicle.** A seat puts abilities on the bar of the rider, and the **rider** casts them.
- **A mount that fights while it is ridden.** Its AI waits.
- **NPC riders.** An NPC can ride (from a script), but nothing sends one to a mount.
- **Saving a ride on a creature.** It is not saved: the player is on the ground next to the mount when a game is loaded. The Mount effect is a normal effect: the game applies it again when a save is loaded.
- **Mount stamina and mount-only animations** for the rider (it uses the pose you name).
