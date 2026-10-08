# Behaviors

Behaviors are what decide what an entity **does by itself**: who it attacks, how it fights, how it spends the day, and what it says. They turn a definition (a Wolf, a Guard) into something that acts.

| Tab | What it decides |
|---|---|
| [**Factions**](/basic/behaviors/factions) | Sides and reputation: who fights whom, who helps whom, who ignores everyone |
| [**Combat Scripts**](/basic/behaviors/combat-scripts) | How an entity fights: search, chase, attack logic, boss phases, reactions |
| [**Behavior Scripts**](/basic/behaviors/behavior-scripts) | What an entity does when nothing is happening: patrols, daily routines, wandering |
| [**Conversations**](/basic/behaviors/conversations) | What an entity says, what the player can answer, and what comes of it |

## How they meet

```text
NPC definition ── faction ──────────────► Factions       who is an enemy?
              ├─ behavior script ───────► Behavior Scripts   what now? (no enemy)
              ├─ combat script ─────────► Combat Scripts     what now? (enemy)
              └─ interaction (placed) ──► Conversations      what is said when used
```

1. The entity starts in its **behavior script**: it walks its schedule.
2. When a hostile entity comes into its sight range, or something attacks it, it **enters combat** and its **combat script** takes over.
3. When the fight ends it goes back to its behavior.
4. A **conversation** is attached to an entity by an interaction: using the entity opens it.

Everything is made of resources, so the same script can be used by a hundred NPCs, each of which follows it on its own.

## Level of detail

An NPC far from the party thinks less often, and one very far away is paused. Your scripts do not need to know. The distances and rates are the **NPC LOD System** settings of the [Gameplay Config](/basic/game-settings/gameplay-config).

## Companions

The party members the player does not control use the same machinery: a [player class](/basic/entities/player-classes#ai-scripts) can have a combat script and a behavior script. Without one a companion uses the *Companion* attack logic.

## See also

- [Entities](/basic/entities/), [Conditions](/basic/shared-systems/conditions) (used everywhere in scripts), [Events](/basic/events-and-quests/events)
- [Behaviors: how they are built](/advanced/behaviors/) (Advanced)
