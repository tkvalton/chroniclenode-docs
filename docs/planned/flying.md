# Flying

::: warning Partly built
**Flying inside a space** is built: a [movement volume](/basic/world/movement-volumes) with the *Weightless* preset lets everyone in it fly (jump goes up, crouch goes down, you move where the camera looks). What is still planned is flying **because of what an entity is or does**, not because of where it is.
:::

Flying is very close to [swimming](/basic/world/movement-volumes): both are **free movement in 3D**, with no gravity. Underneath, anything can ask for it by adding a *movement claim* to an entity ([how it is built](/advanced/world/movement-volumes#claims)). A volume is one asker; the planned ones are:

## What it will do

- A **flight effect and ability**: an [ability](/basic/abilities-and-effects/abilities) or [effect](/basic/abilities-and-effects/effects) that grants flight for a while (a wizard who levitates), or for as long as a toggle is on.
- A **trait of the entity**: a dragon or a bird that flies by definition.
- A **mount** that flies ([mounts](/planned/mounts)).
- Animations of flying of their own. Today flying uses the swim animations.

## What exists today

- The claims on the movement of an entity, and the 3D movement they give (up, down and forward along the camera).
- The weightless volume.
- Flying NPCs get the speed and the animations, but they **path on the flat navigation** of the world.

## Still to decide

- How an entity takes off and lands.
- Whether flying costs a resource (stamina, mana) and what happens when it runs out in the air.
- How NPCs **find their way** in the air, since the navigation of a world only covers its walkable ground.
- How melee, targeting and camera work for entities above and below each other.
- Whether a world can forbid flying (a dungeon, a city).
