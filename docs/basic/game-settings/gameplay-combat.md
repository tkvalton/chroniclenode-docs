# Gameplay Config: Combat

The **Combat** category of the [Gameplay Config](/basic/game-settings/gameplay-config). The rules of misses are on [Hit Rules](/basic/game-settings/hit-rules).

| Field | What it does | Default |
|---|---|---|
| **Combat style** | Real-time or turn-based (turn-based is not built yet) | Real-time |

### Death & Revival

| Field | What it does | Default |
|---|---|---|
| **Death behavior** | Game over, respawn at a checkpoint, or permadeath | Respawn at checkpoint |
| **Death gold penalty** | The share of gold lost on death (0 to 1) | `0.1` |
| **Death experience penalty** | The share of experience lost on death (0 to 1) | `0` |
| **Death item loss** | What happens to the **items in the bag** of a player who dies: **Keep** them, **Drop** them on the ground around the body ([Dropped items](/basic/items/dropped-items#where-items-come-from)), or **Destroy** them | Keep |
| **Death equipment loss** | The same for the **equipment the player wears**: Keep, Drop (taken off and dropped around the body) or Destroy | Keep |
| **Death item loss chance** | The share of the stacks in the bag and of the pieces of equipment that are lost (`1` = all of them, `0.25` = about a quarter). Key items are never lost | `1` |

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
| **Level up capacity rule** | The same, for a maximum that grows on a level-up of a **player character**. An NPC that changes level always keeps its percentage | Add the gain |
