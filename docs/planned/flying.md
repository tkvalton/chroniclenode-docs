# Flying

::: warning Not built yet
This page describes a planned feature. Today entities walk, fall and climb.
:::

**Flying** is very close to [swimming](/planned/water-and-swimming), with one difference: it is **not tied to an area**. It is something a player or an NPC **can do**: a dragon that flies, a wizard who levitates, a bird.

## What it will do

- A **flying movement state** next to walking, falling and climbing: the entity moves in the air with its own speed, turning and animations, and does not fall.
- It is switched **on or off**, by whatever allows it: a trait of the entity, an [ability](/basic/abilities-and-effects/abilities) or [effect](/basic/abilities-and-effects/effects) that grants flight for a while, or a [mount](/planned/mounts).
- It works for the **player** and for **NPCs**, so a flying enemy can be built with the same tools as a walking one.

## Still to decide

- How an entity takes off and lands.
- Whether flying costs a resource (stamina, mana) and what happens when it runs out in the air.
- How NPCs **find their way** in the air, since the navigation of a world only covers its walkable ground.
- How melee, targeting and camera work for entities above and below each other.
- Whether there is a ceiling and whether a world can forbid flying (a dungeon, a city).
