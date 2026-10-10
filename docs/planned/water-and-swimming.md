# Water and swimming

::: warning Not built yet
This page describes a planned feature. Today there is no water in the toolkit: nothing puts an entity into swim movement.
:::

**Water** will be an **area** in a world. An entity that enters the area changes to **swim movement**: it moves with the swim animations, at the speed of swimming, and leaves it when it gets out. It applies to the player, companions and NPCs alike.

## What it will do

- **A water area** that you place in a world, with a shape you choose. Anything that enters it starts swimming; anything that leaves it goes back to walking.
- **Swim movement**: a movement state of its own next to walking, falling and climbing, with its own speed and its own animations.
- **Demo water shaders**: a ready-made surface shader for **water**, a **sea**, a **lake** and a **river**, to use as they are or as a start for your own.

## What is there today

- Every entity has a **swimming flag** that the animation system reads.
- The animation core package has the **swim animations** to play: idle in water and swimming in eight directions.
- Nothing sets the flag, and there is no water area and no swim movement.

## Still to decide

- What changes for abilities and combat while swimming: which abilities can be used, whether an entity in water can attack.
- Whether there is **breath**, and what happens when it runs out.
- The difference between swimming on the surface and being under water, and how deep a body can sink.
- Whether rivers have a **current** that pushes whoever is in them.
- How an entity enters the water (jumping or falling in) and what its footsteps sound like.
- How NPCs that cannot swim treat water: they should path around it.

It will be placed with the [water placement tool](/planned/world-builder#water-placement) of the World Builder.
