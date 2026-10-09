# Encounters

An **encounter** is a group of NPCs that fights as one: a wolf pack, a bandit camp, a boss and its guards. Without an encounter every NPC acts alone and only fights when it sees an enemy itself. With one, the group joins the fight together, keeps its formation, shares tactics, and **reacts** to what happens ("when half of us are dead, call for help").

## Placing one

1. **Add Object > Add Encounter** puts an Encounter node in the *Entities* container and selects it.
2. **Drag NPCs onto it** in the scene tree, so they are its children. Every NPC child is a member of the group. (Place the NPCs with Add NPC first, or add them and then drag.)
3. Move the Encounter node where the group should be. The members keep their own positions relative to it.
4. Set it up in the [Unique Object panel](/basic/world/unique-object-tool).

The members are counted when the world loads. An NPC that joins later (reinforcements, a bystander) is a *dynamic participant* and is handled like a member while the fight lasts.

## Basic properties

| Field | What it does | Default |
|---|---|---|
| **Is active** | Whether the encounter is on. An event or quest can switch it off or on; an inactive encounter hides its members and stops them | on |
| **Encounter name** | A name for you and the debug tools | *Unnamed Encounter* |
| **Auto join combat** | When one member enters combat, all the others are forced into it too | on |
| **Auto join radius** | The members farther than this from the encounter's centre (meters) do not join | `25` |
| **Respawn delay** | Not used yet: the field is saved but nothing reads it. A group comes back through the **Respawn timer** of its NPCs (see [the Unique Object tool](/basic/world/unique-object-tool)) | `0` |

## Formation and spacing

| Field | What it does | Default |
|---|---|---|
| **Formation type** | **None**: each acts alone. **Circle target**: surround the target. **Line**: a line facing the enemy. **Scatter**: spread out against area attacks. **Defensive cluster**: close together. **Flanking wings**: split into two groups | None |
| **Min spacing distance** | How far apart the members try to stay (meters) | `3` |
| **Spacing check interval** | How often the group checks and corrects it (seconds) | `2` |
| **Enforce spacing** | Keep the spacing during the fight | on |

## Group behavior

| Field | What it does | Default |
|---|---|---|
| **Group behavior** | **Passive**: only defends. **Cautious**: takes turns attacking, keeps its distance. **Balanced**: the normal fight. **Aggressive**: everyone attacks together. **Berserker**: ignores formation and spacing | Balanced |
| **Max simultaneous attackers** | At most this many attack at once (`0` = the group behavior decides: Cautious about a third of the group, Balanced half, Aggressive and Berserker all) | `0` |
| **Attack rotation delay** | Seconds between turns when the group takes turns (Cautious) | `1.5` |

A Berserker group does not enforce spacing, whatever *Enforce spacing* says.

## Reactions

A **reaction** is a group-level "when this happens, do this". The list is in the **Reaction System** section; **Add Reaction** opens its editor.

| Field | What it does | Default |
|---|---|---|
| **Name** | For you | |
| **Trigger event** | What starts it (below) | Damage taken |
| **One time** | Happens once per fight | off |
| **Cooldown** | Seconds before it can happen again | `0` |
| **Time (seconds)** | For *Time passed*: the interval | `10` |
| **Health threshold (%)** | For *Group health below percent*: the average health of the group | `50` |
| **Conditions** | All must be true for it to happen | none |
| **Actions** | What it does, each with a priority, a [cooldown](/basic/keywords#cooldown) and conditions of its own | none |

**Trigger events:** a member takes damage, a member deals damage, a member dies, an enemy dies, anyone dies, a member gains or loses an effect, a member uses an ability, an enemy gains or loses an effect, an enemy uses an ability, time passes (every N seconds in combat), the group's combined health falls below a percentage.

### Actions

| Action | What it does |
|---|---|
| **Call reinforcements** | Spawns an NPC (by definition) at a position: how many, all at once or one every N seconds, a maximum in total, and whether they join the encounter at once |
| **Group formation** | Puts the group into a formation: its type, radius (`0` = by group size), whether to keep it, a speed change while moving into it |
| **Modify group behavior** | Changes the group behavior (and max attackers), for a time or for good, optionally going back to the original afterwards |
| **Force group target** | Makes every member target the same enemy: nearest, farthest, lowest or highest health, current target, or random; optionally changing targets they already have |
| **Spawn effect** | Creates a [world effect](/basic/abilities-and-effects/effects) (a fire patch, a shockwave) at the encounter centre or a position |
| **Trigger event** | Starts an [event](/basic/events-and-quests/events), so a fight can open a door, play a message or advance a quest |
| **Activate quest** | Starts a [quest](/basic/events-and-quests/quests) |

### Conditions

The encounter conditions are checked on a reaction or on one action. Each can look at *this* encounter, the one in the fight, the nearest, or one by id.

| Condition | True when |
|---|---|
| **Combat duration** | The fight has lasted more (or less) than N seconds |
| **Distance from position** | The group is near a point |
| **Encounter active state** | The encounter is on (or off) |
| **Encounter combat state** | It is in the fight state you choose (out of combat, in combat, defeated) |
| **Encounter entity count** | The number alive or dead compares with a count |
| **Group health percentage** | The group's average health compares with a percentage |
| **Group members alive** | The number of members alive compares with a count |
| **Players in area** | At least N player characters are within a radius |

## Example: a bandit camp

A camp of four bandits and a leader, as an encounter:

- Auto join combat on, radius 25: when you meet one, you meet all of them.
- Group behavior **Cautious**, max attackers `2`: they take turns, and the camp feels dangerous but fair.
- Reaction **Leader's call** on *Group health below percent* 50, one time: *Call reinforcements* (two archers), then *Modify group behavior* to Aggressive.
- Reaction **Camp cleared** on *Ally died*, condition *Group members alive* is 0: *Trigger event* "Bandit camp cleared", which advances a quest.

## States

An encounter is **out of combat**, **in combat** or **defeated** (the fight ended and every original member is dead). Its members are NPCs like any other: whether a dead member stays dead, or comes back after a time, is the **Respawn timer** of that NPC, and whether it is dead when you return to the world follows the world's [persistence](/basic/world/worlds#persistence).

## See also

- [NPCs](/basic/entities/npcs), [Combat Scripts](/basic/behaviors/combat-scripts) for how a single NPC fights.
- [How encounters are built](/advanced/world/encounters).
