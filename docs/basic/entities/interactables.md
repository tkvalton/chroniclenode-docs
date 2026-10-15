# Interactables

<Shot name="interactables-editor" caption="The Interactables editor (Entities > Interactables)." />

An **interactable** is an object of the world that the player can use or hurt: a door, a chest, a lever, a ladder, a sign, a trap, a crafting station, a barrel you can smash. The editor makes the **definition**; you place the object in a world with the [Uniques](/basic/world/uniques) tool, where a placed object can override some of the settings.

An interactable has **one interaction**: the thing that happens when it is used. The model, the lock, the targeting and the stats are the same for every kind.

## Template

An interactable can **follow a [template](/basic/entities/templates)** for its stats, pools, immunities and growth: all the *Wooden Crate*s share one template. The **Template** section at the top of the editor chooses it and lists what this object changed on top of it. A template hides the model, sounds, effects, interactions and loot.

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
| **Interaction** | What the object does: pick one of the [interaction types](/basic/entities/interaction-types) | none |

## Using an object

These fields work for **every** kind of object, whatever its interaction does: a door that needs a skill, a chest that takes time to pick, a node that is gathered from. They are in the **Using it** section of the editor.

| Field | What it does | Default |
|---|---|---|
| **Requirements** | What a user needs to use the object: any [requirement](/basic/shared-systems/requirements) (a profession level, a tool in the hands, a quest, a class). **All** must be met. Empty = anyone | none |
| **Message when not met** | What the user is told when they are not. Empty = the reasons the requirements give ("Needs Mining 25 (you have 12)") | empty |
| **Hide the prompt until they are met** | The "interact" prompt of the object is not shown to a user who cannot use it. Off: the prompt is shown, and using the object says why not | off |
| **Time to use (seconds)** | How long using the object takes. The user's **cast bar** shows it and the use happens when it ends. `0` = at once | `0` |
| **Cast bar text** | The text of the bar. Empty = "Using" and the name of the object | empty |
| **Moving interrupts** | Walking away (more than three quarters of a metre) cancels the use | on |
| **Taking damage interrupts** | Being hurt cancels the use | on |
| **User animation** | The animation the user plays while the object is used: a [social animation](/basic/assets/animations) of the **actions** kind (kneel, mine, pick). It stops when the use ends | none |
| **Object animation** | The animation of the object's own model that plays when the use starts | none |

What happens when a user tries:

1. The object is **locked**? Its key opens it (see *Locked by item*).
2. The **requirements** are checked. Not met: nothing happens, the user is told (the message above), and the object's `interaction_refused` signal fires.
3. The interaction says whether it **can** start (a gathering node with nothing left, or a bag with no room, says why).
4. With a **time to use**, the cast bar runs. Moving, taking damage (when the box is on), casting an ability or dying cancels it: nothing happens, and the bar flashes. Using the object again while somebody is using it does nothing.
5. When the time is up the requirements and the interaction are checked **again** (the user may have changed), and the interaction happens.

The cast bar is the one that shows ability casts, so an interface that has a cast bar shows this one too.

## Targeting and stats

By default an object is scenery. These switches make it a thing that can be attacked.

| Field | What it does | Default |
|---|---|---|
| **Targetable directly** | Single-target [abilities](/basic/abilities-and-effects/abilities) can pick it: a spell on a barrel, a heal on a destructible wall | off |
| **Targetable by AoE** | Area abilities hit it: a fireball breaks the crates | off |
| **Object has stats** | Turns on automatically when either switch above is on. The object gets a **stats data** (the same section as a [class](/basic/entities/player-classes#stats)): a health pool, defenses, [immunities](/basic/abilities-and-effects/immunities) | off |
| **Damage threshold** | The share of health under which the object counts as **damaged** (`0.7` = below 70 % health). It plays the *damaged* sound once, and a door reads it: *Can open when damaged* off keeps a damaged door shut | `0.7` |

When the master pool of an object empties, it is **destroyed**: it plays its `destroyed` animation (if the scene has one), its destroyed sound and its destruction VFX, stops being a target, and refuses to be used.

## Loot

Under the interaction. Any interactable can have [loot rules](/basic/items/loot-rules), not only containers: each is a [loot table](/basic/items/loot-tables) with a trigger. **On Initialize**: the object holds it from the start. **On First Access**: it is rolled the first time the object is opened (a chest), at the item level you choose. **On Destroyed**: it is rolled when the object is destroyed (it needs an object that [can be targeted](#targeting-and-stats), so it has health). What a destroyed object leaves is lootable like a corpse: a destroyed chest can still be opened, and a plain crate with no interaction becomes openable like a container. See [Loot Rules](/basic/items/loot-rules).

A [placed object](/basic/world/uniques) can replace the rules of its definition.

## Sound and visuals

| Field | When it plays |
|---|---|
| **Interaction SFX** | The object is used (after the interaction starts) |
| **Hit sound** | The object takes damage (when it has stats) |
| **Damaged sound** | Once, when the object first falls under the **damage threshold** (it is still standing) |
| **Destroyed sound** | The object is destroyed |
| **Destruction VFX** | A [visual effect](/basic/assets/vfx) that plays on the object when it is destroyed |

The sounds play on the audio component of the object, from the object, so they are heard from where it stands. The interactions have sounds of their own too (the door and container sounds below).

## See also

- [Interaction types](/basic/entities/interaction-types) (every kind of interaction and its fields), [Uniques](/basic/world/uniques) (placing objects and overriding), [Events](/basic/events-and-quests/events), [Items](/basic/items/items), [Vendors](/basic/items/vendors)
- [Entities: how they are built](/advanced/entities/) (Advanced)
