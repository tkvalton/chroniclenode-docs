# Growth

**Growth** is what an entity gains from its **level**. A level 20 wolf is a stronger wolf than a level 5 one, and a level 20 warrior has more Strength and more health than a level 5 one, without a second definition. Growth is the number added to a stat or to the maximum of a pool for each level the entity has gained.

Growth belongs to the **entity**, never to the stat or the pool. Strength does not "grow by 2 per level": a *Warrior* grows its Strength by 2 per level, and a *Mage* by 0.5. The stat only says what Strength is.

## How a level becomes a number

1. The entity has a **level** (a player levels up, an NPC is placed at a level or scaled to the player).
2. For each stat and pool the game finds a **growth entry** (below) and puts the **levels gained** (level - 1) into its [formula](/basic/shared-systems/formulas). Level 1 has no growth, and "+2 per level" is a Linear formula of `2`. The entry can add **diminishing returns** (growth that slows after level 40) and a **max growth**.
3. The stat is `(base + growth + bonus) x multiplier`. Growth comes on top of the base value, and gear and buffs come on top of growth. For a pool, the growth is added to the *maximum*.

Growth is worked out from the level every time, and never saved: only the base values are in a save file.

## Where an entry comes from

An entity looks in these places, in this order. **The first that has an entry wins**, even an entry with no formula (that means "this does not grow, on purpose").

| # | Place | Who it is for |
|---|---|---|
| 1 | The entity's **own entry** (*Level growth overrides*, *Add Override*) | One NPC, one class, one placed unique |
| 2 | The entity's **growth profile** | Every entity that chose that profile |
| 3 | The profile's **parent** (*Builds on*), and the parent's parent | The family of a profile |
| 4 | The project's **default profile** ([Gameplay Config](/basic/game-settings/leveling-and-experience#npc-level-scaling)) | Every NPC. A player character has no default profile |

A stat or pool that **no place lists does not grow**. Stats and pools have no growth of their own.

## Growth profiles, templates and the entity

These three are easy to mix up. They answer three different questions, and an entity uses all of them at once.

| | Answers | Holds | Shared by |
|---|---|---|---|
| **[Template](/basic/entities/templates)** | What is this *kind of thing* to begin with? | Base stat values, abilities, loot, tags: the whole starting point | Every entity that follows it, until the entity changes a value |
| **[Growth profile](/basic/entity-stats/growth-profiles)** | How does it get stronger with its level? | Growth entries only | Every entity that chose it |
| **The entity itself** | What is different about *this* one? | Its own values, and its own growth entries | Nobody |

**Elite Warrior** is the *Warrior* template plus the *Elite* profile. The template gives the Strength 10, the sword and the loot. The profile gives "+3 Strength and +14 health per level". Change the Warrior template and every warrior (elite or not) gets the new base values. Change the Elite profile and every elite gets the new growth, whatever it is. Neither one knows about the other.

::: tip A template only suggests a profile
When an NPC follows a template, the template can name a profile it **suggests**. The NPC with *Default* growth uses that one, else the project default, and it can pick another any time. The growth is always the NPC's own choice, so changing a template never silently changes how an NPC levels.
:::

## Seeing it

The **Preview at level** tick box of the stats editor (in the [NPC](/basic/entities/npcs#stats), the [player class](/basic/entities/player-classes#stats) and the [unique object](/basic/world/unique-object-tool) panel) adds a **Growth** and an **At level** column to the stats table, and a level to the pool cards. The **Level growth** fold says which of the places above each entry comes from.

## Growth is not the item budget

[Item budget](/basic/entity-stats/stats#items) is a different idea that only matters for generated items: what a point of a stat *costs* when the item level is turned into points to spend. Growth is about entities levelling; budget is about the gear they wear.

## See also

- [Growth profiles](/basic/entity-stats/growth-profiles): the editor and the demo's profiles.
- [Templates](/basic/entities/templates).
- [Formulas](/basic/shared-systems/formulas): the shape of a growth.
- [Growth, core stats and gain channels](/advanced/entity-stats/growth-and-core-stats): how it is built.
