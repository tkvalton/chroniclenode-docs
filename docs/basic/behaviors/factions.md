# Factions

<Shot name="factions-editor" caption="The Factions editor (Behaviors > Factions)." />

A **faction** is a side. Every NPC belongs to one (or to none), the party belongs to the **Player** faction, and the factions decide who fights whom: who attacks on sight, who defends their friends, who ignores everyone. A faction also tracks **reputation**: how much another faction likes it, which can change who is an enemy.

## The built-in factions

| Faction | What it is |
|---|---|
| **Player** | The party. Always on the same side as itself |
| **Environmental** | Nature and scenery: traps, hazards, destructible objects. It is **neutral to everyone** and is never an enemy, but it can always be targeted |

The demo adds **Friendly** (allied with the Player, hostile to Hostile) and **Hostile** (hostile to the Player and to Friendly). Make as many as your world has.

## Fields

| Field | What it does |
|---|---|
| **Name**, **Description**, **Icon**, **Color** | The name and color in the editor and in nameplates |
| **Faction standings** (*Add Reputation Level*) | The ranks of reputation, see below |
| **Faction relationships** (*Refresh List*) | A line for every other faction: how this faction treats it by default |

## Relationships

For every other faction, this faction has a default relationship: **Hostile**, **Neutral** or **Friendly** (a name that is not one of these, such as *Allied*, counts as friendly). The relationship is read **from the point of view of this faction**: Hostile may be hostile to the Player and the Player may still be neutral to Hostile if you set it that way. Normally you set both sides.

How two factions are compared:

| Question | Answer |
|---|---|
| Is a faction hostile to **itself**? | Never. Members of the same faction are friends |
| Is anything hostile to **Environmental**? | Never. Environmental is neutral to all |
| Otherwise | The **reputation** standing decides if there is one (below), else the relationship listed in the editor |
| Can it **target** the other as an enemy? | When it is hostile to it **or not friendly** to it. A neutral can be attacked |

What the relationships do in play:

| Relationship | Effect |
|---|---|
| **Hostile** | An NPC attacks on sight when the other is within its sight range (it **pulls**). An area effect that "hits enemies" hits it |
| **Neutral** | No one attacks first. A neutral NPC that is attacked fights back, and is neutral again when the fight ends. Area effects that "hit neutrals" decide for themselves |
| **Friendly** | They help each other. A friendly NPC will not be damaged by "enemies only" effects, and heals and buffs can target it |

An NPC with **no faction** acts as a neutral creature.

## Reputation

Reputation is a number a faction keeps **for each other faction**. The party gains and loses it with [rewards](/basic/shared-systems/rewards) (a [quest](/basic/events-and-quests/quests) that makes the Thieves' Guild like you more) and your own scripts.

The **Faction standings** are the ranks along the number:

| Field of a standing | What it does |
|---|---|
| **Level name** | Revered, Honored, Neutral, Unfriendly, Hostile |
| **Min reputation** | The standing begins at this number. The levels are sorted by it. A standing lasts until the next one begins |
| **Description**, **Color**, **Icon** | For the reputation window |
| **Relationship** | Hostile, Neutral or Friendly: what this standing means for the fight |

When the standing a reputation puts you in has a relationship, **it wins over the default relationship**: raise your reputation with the Hostile faction enough, and its guards stop attacking you. A change of standing raises a signal the interface can show.

The Environmental faction keeps no reputation.

### The rewards and the requirement

| Where | What it does |
|---|---|
| **Faction Reputation** [reward](/basic/shared-systems/rewards) | Adds (or, with a negative number, takes away) reputation with a faction |
| **Faction Standing** reward | Sets the reputation to the start of a standing by its name |
| **Faction** [requirement](/basic/shared-systems/requirements) | Needs a minimum reputation or a named standing with a faction: "Honored with the Guild" |

## Where a faction is chosen

- **NPC**: the *Faction* field of the [NPC definition](/basic/entities/npcs), and the override of a placed NPC.
- **Summoned things**: a pet or a summoned object takes the faction of its summoner.
- **Abilities and effects** ask the faction relationship when they decide who counts as an enemy, an ally or a neutral.
- **Encounters** and **traps** with a relationship filter use it too.

## See also

- [NPCs](/basic/entities/npcs), [Combat Scripts](/basic/behaviors/combat-scripts), [Targeting](/basic/abilities-and-effects/targeting)
- [Behaviors: how they are built](/advanced/behaviors/) (Advanced)
