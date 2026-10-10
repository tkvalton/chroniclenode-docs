# Mounts

::: warning Not built yet
This page describes a planned feature. Today an entity cannot ride another.
:::

A **mount** is something an entity rides. There are two ways to build it, and the toolkit may offer both.

## Two ways

| | What it is | Good for |
|---|---|---|
| **A speed buff** | The mount is a **movement speed** bonus. The rider sits on the mount, using the **seat** that the character rig already has, and moves with its own movement at the new speed | A horse that is mostly faster: simple, and the controls are the ones the player already knows |
| **Movement of its own** | The mount has **new movement logic** that simulates it: a different turning, acceleration and braking | A horse that feels like a horse, and also a **vehicle**: a cart, a boat, a wagon |

The second way can **include flying and swimming**: a mount that [flies](/planned/flying) or crosses [water](/planned/water-and-swimming), so a griffin and a boat are built with the same pieces.

## What is there today

The character **rig** has the points a mount needs: a **mount seat** on a body that can be ridden, and a **rider marker** on a body that can ride. They are only a place for the rider to attach; nothing uses them yet.

## Still to decide

- How a mount is **defined** (an entity, an item, or a type of its own), how the player gets one and how it is summoned and dismissed.
- What the rider can do while riding: which [abilities](/basic/abilities-and-effects/abilities) work, and whether the mount has abilities of its own.
- What happens to the rider when the mount dies or is hit.
- Whether a mount is part of the party.
