# Flying: what is planned

::: tip Flying is built
Flying is an **effect**: see [Flying](/basic/world/flying). This page lists what it does **not** do yet.
:::

The flight of the demo is **floating** (movement in 3D like a swimmer's, with no gravity). Everything below is left for later, each as its own small step.

## Planned

- **A ceiling.** A highest height above the ground a flyer can reach, so it cannot leave the world.
- **Places where flying is not allowed** (a dungeon, a city, a quest area): a volume or a zone that ends the flight of whoever enters.
- **A flight resource.** Flying that costs stamina or mana and ends when it runs out. For now give the Flight effect a duration, or use a periodic effect that drains a stat and a Land effect when it is empty.
- **NPCs that find their way in the air.** A flying NPC goes straight at its goal. Planned: holding a height above the ground (a bat over a field), avoiding trees, cliffs and walls, perching on a point and taking off again.
- **A toggle key and take-off and landing states** for players who want flight to feel like a mount.
- **Fall damage** for every fall, flyers included (it does not exist yet).
- **Melee, targeting and area shapes** reviewed for entities above and below each other.

## See also

- [Flying](/basic/world/flying)
- [Movement volumes](/basic/world/movement-volumes)
