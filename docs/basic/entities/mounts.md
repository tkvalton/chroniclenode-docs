# Mounts and vehicles

A **mount** is something a character rides. ChronicleNode has three ways to build one, from the simplest to the most involved. They are **basic versions** that work out of the box and that you can build on.

| | What it is | Made with | The mount has |
|---|---|---|---|
| **1. A mount that is a model** | A horse appears under the rider and the rider goes faster. Nobody steers a creature: the rider moves as before | The **Mount** [effect](#a-mount-that-is-a-model-the-mount-effect) | A model and a speed |
| **2. A creature you ride** | A real NPC (a horse, a wolf, a griffin): the player gets on it and the keys steer **it**. It keeps its health and stats | The **Mount** [interaction](#a-creature-you-ride-the-mount-interaction) on an NPC | Health, stats, an AI that waits while it is ridden |
| **3. A vehicle** | A cart, a tank, a boat: steered with a throttle and a turning rate instead of walking | The **Vehicle** [interaction](#a-vehicle-the-vehicle-interaction) on an NPC | The same as a creature, with vehicle steering |

All three can be **land, flying or swimming**, and a **boat** floats on the water. An **enemy** tank or horse needs no rider: it is a normal NPC with its own AI. Only the player is steered by the keys; an NPC that rides is something you start from a script ([Advanced](/advanced/entities/mounts#npcs-that-ride)).

## How movement works

Every mount has a **Movement**:

| Movement | What it does |
|---|---|
| **Ground** | Walks. A speed multiplier makes it faster (or slower) |
| **Swim** | Swims, even on dry land: jump goes up, crouch goes down, W goes where the camera looks. See [movement volumes](/basic/world/movement-volumes) |
| **Fly** | Flies: nothing pulls it down. The same controls as swimming |
| **Boat** | Floats on the surface of the water of a [movement volume](/basic/world/movement-volumes) and cannot dive or fly. On the ground it is on the ground (a beached boat) |

## The seat

The rider sits on the **seat** of the mount. The character rig already has the points:

- A model that **can be ridden** (the mount) has **Has mount seat** on its skeleton and a `MountSeatRemote` where the rider sits.
- A model that **can ride** has **Can ride mount** and a `RiderMarker`: the point of the rider that is put on the seat (usually the hips). Without a marker the feet are put on the seat.

A mount whose model has **no seat** uses the **Seat offset** (where the rider sits above the origin of the mount; `0, 1, 0` by default). So a quick vehicle can be a plain mesh.

## A mount that is a model: the Mount effect

The **Mount** effect (Effects > Movement) puts the target on a mount **for as long as the effect lasts**. Give it a *Persistent* time strategy for a mount the player calls and dismisses, or a *Temporary* one for a mount that lasts a minute. Put it in an [ability](/basic/abilities-and-effects/abilities) (a *Summon Mount* spell), an item that is used, or an [event](/basic/events-and-quests/event-actions) (**Grant Effect to Player**).

| Field | What it does | Default |
|---|---|---|
| **Entity id** | The creature whose **model** is the mount (an NPC of the Database). Its stats and AI are not used | none |
| **Movement** | Ground, Swim, Fly or Boat (above) | Ground |
| **Speed multiplier** | The speed of the rider times this while it is mounted | `1.5` |
| **Vertical speed** | How fast the rider goes up and down on a swimming or flying mount | `4` |
| **Seat offset** | Where the rider sits when the model has no seat | `0, 1, 0` |
| **Pose name** | The pose of the rider: the name of a status animation folder; its `_loop` animation plays while the effect lasts (a *riding* pose). Empty = none | empty |
| **Dismount on damage** | The rider gets off when it is hurt | off |
| **Mount idle / move animation** | If the mount model has an AnimationPlayer: the animations played when it stands still and when it moves | `idle`, `run` |

What happens: the model of the creature is added under the rider, the model of the rider is lifted onto the seat, the pose plays, and the rider moves faster. The rider keeps its own movement, collisions and controls. When the effect ends, runs out, or the rider **gets off with the dismount key** or dies, the model goes and the rider is back as it was.

## A creature you ride: the Mount interaction

Add the **Mount** interaction (Entity interactions) to an [NPC](/basic/entities/npcs). Walk up to it and use it (the interact key): the player gets on.

- The creature is a normal NPC (or a summoned pet): it keeps its **health, stats and faction**. Its behavior and combat AI **wait** while it is ridden.
- The **keys steer the creature**: W, A, S and D move it relative to the camera and it turns to face where it goes. The camera, the targeting and the abilities stay with the rider.
- The rider is **carried**: it does not collide or move by itself.
- The rider gets off with the **dismount key** (X by default), or when the mount or the rider **dies**, or when the rider is hurt (if you ask). It lands beside the mount.
- Its speed is the **movement speed** of the creature times *Speed multiplier*.

The fields are those of the effect, without the creature (the mount is the NPC the interaction is on), plus the steering:

| Field | What it does | Default |
|---|---|---|
| **Drive** | **Walk** (relative to the camera, like a horse) or **Vehicle** (throttle and steering, below) | Walk |
| **Custom drive logic path** | A script of your own that steers the mount ([Advanced](/advanced/entities/mounts#your-own-steering)). Empty = the Drive above | empty |

## A vehicle: the Vehicle interaction

The **Vehicle** interaction is the Mount interaction with the **Vehicle** drive: for a cart, a tank, a boat, a sled. The keys work like a vehicle:

| Key | What it does |
|---|---|
| **W** | Speeds up to the top speed, with the **acceleration**. With no key it slows down by itself |
| **S** | Brakes while it moves forward, then reverses (up to the **reverse speed share** of the top speed) |
| **A / D** | Turns. The turn is faster the faster the vehicle goes; a vehicle that does not move does not spin on the spot |

| Field | What it does | Default |
|---|---|---|
| **Acceleration** | How fast it speeds up (units per second, each second) | `6` |
| **Braking** | How fast it slows down | `10` |
| **Turn rate degrees** | How fast it turns at full speed | `90` |
| **Reverse speed share** | Top speed in reverse, as a share of the forward top speed | `0.4` |

Make a **boat** with *Movement: Boat* and the vehicle steering; give the world a [movement volume](/basic/world/movement-volumes) for the water. A **tank** that fights is a normal NPC with its own abilities; the player who drives it uses the keys of the vehicle.

## The dismount key

The key is the input action **dismount** (X by default), made by the project setup. A project that was set up before this existed gets it the next time the setup runs; or add the action in *Project Settings > Input*. It is not in the settings menu of the player yet.

## What the basic versions do not do

These are left for you to build on (the [Advanced](/advanced/entities/mounts) page says where):

- **Passengers.** A vehicle has one seat: the driver.
- **Abilities of the vehicle.** The driver uses their own abilities; a cannon is not on their action bar.
- **A mount that fights while it is ridden.** Its AI waits.
- **NPC riders.** An NPC can ride (from a script), but nothing sends one to a mount.
- **Saving a ride on a creature.** It is not saved: the player is on the ground next to the mount when a game is loaded. The Mount effect is a normal effect: the game applies it again when a save is loaded.
- **Water currents, mount stamina, and mount-only animations** for the rider (it uses the pose you name).
