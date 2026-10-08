# Gameplay Config

<Shot name="gameplay-config-editor" caption="The Gameplay Config editor (Game Settings > Gameplay Config)." />

The **Gameplay Config** holds the rules of your game that are not about one thing in the database: how combat is resolved, what death costs, how the party works, what is saved. Every field has a tooltip. This page describes the **Combat** category in full, because the other chapters point to it, and lists the others.

## Categories

| Category | Groups |
|---|---|
| **General** | Items & Inventory, [Quests](/basic/events-and-quests/quests), Fog of War, Save/Load Rules |
| **Visuals** | Rig Markers, Outline Materials, Targeting Visuals, Tactical View Visuals, Target Textures |
| **Party Management** | New Game Rules, Leveling, Controller Logic, Input |
| **Combat** | Death & Revival, Threat, Damage Results, Pools, **Hit Rules** |
| **NPC LOD System** | LOD distance thresholds, update intervals, batch processing |

## Combat

| Field | What it does | Default |
|---|---|---|
| **Combat style** | Real-time or turn-based (turn-based is not built yet) | Real-time |

### Death & Revival

| Field | What it does | Default |
|---|---|---|
| **Death behavior** | Game over, respawn at a checkpoint, or permadeath | Respawn at checkpoint |
| **Death gold penalty** | The share of gold lost on death (0 to 1) | `0.1` |
| **Death experience penalty** | The share of experience lost on death (0 to 1) | `0` |
| **Drop items on death** | The player drops the items of the inventory | off |

### Threat

| Field | What it does | Default |
|---|---|---|
| **Use threat system** | On: enemies attack whoever has made the most [threat](/basic/keywords#threat). Off: they attack the nearest of the entities fighting them (a Taunt still forces a target). Turn it off for a game with no tank and healer roles | on |
| **Heal threat multiplier** | Healing makes threat on the enemies fighting the healed entity: this share of the healing done | `0.5` |
| **Damage threat multiplier** | A multiplier on the threat a hit makes (damage effects have their own on top) | `1` |

### Damage Results

| Field | What it does | Default |
|---|---|---|
| **Threat basis** | Which number of a hit makes threat: the raw number, after the attacker's modifiers, after the defender's modifiers (shields included), or only what reached health | After the defender's modifiers |
| **Leech basis**, **Reflect basis** | The same choice for life leech and for damage reflection | Health only |
| **Max reflect chain** | How many reactions deep a hit may be and still be reflected. `1`: a reflection is never reflected again | `1` |
| **Zero damage counts as a hit** | A hit that armor or block reduced to 0 still triggers on-hit effects and shows "0" | on |
| **Minimum damage** | The smallest damage a landed hit can end with. `0` = armor can reduce a hit to nothing | `0` |
| **Round damage** | Round the final damage to whole numbers | off |

### Pools

| Field | What it does | Default |
|---|---|---|
| **Capacity change rule** | What happens to the current value of a [pool](/basic/entity-stats/pool) when its maximum changes from equipment, buffs or stats: keep the percentage, add the gain, keep the current value, or fill it | Keep the percentage |
| **Level up capacity rule** | The same, for a maximum that grows on a level-up | Add the gain |

### Hit Rules

These rules decide whether an attack can **miss**. A miss ends the attack before it reaches the target: nothing is damaged and the attacker sees "Miss". They do not touch dodges, parries and blocks, which are rolled by the stats of the target.

| Field | What it does | Default |
|---|---|---|
| **Misses enabled** | Off: no miss is ever rolled and the hit chance stats do nothing. Use it for a game where every attack that is not dodged lands | on |
| **Base miss chance** | Every attack misses with this chance (percent) before the stats are asked. A flat miss chance for everyone, with no stat | `0` |
| **Guaranteed hit chance** | This share of the attacks (percent) always hit, whatever the stats say: a floor under the chance to hit, so a target is never untouchable | `0` |

Hit chance itself, and what raises or lowers it, is made of [stats](/basic/entity-stats/stat-recipes#hit-chance). If your game has no misses you do not need to build those stats: leave **Misses enabled** on and make no hit chance stat, or turn it off to be sure. The other mechanics (expertise, defense and the like) are just stats; a game that does not want them does not make them.

| You want | Settings |
|---|---|
| **No misses at all** | **Misses enabled** off |
| **A flat 5 % miss chance for everyone** | **Base miss chance** `5` |
| **Hit chance by stats, but never worse than 1 hit in 20** | A hit chance stat, **Guaranteed hit chance** `5` |

## See also

- [Stat recipes](/basic/entity-stats/stat-recipes), [Calculations](/basic/entity-stats/calculations)
- [Game Settings](/basic/game-settings/)
