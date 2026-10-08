# Combat Scripts

<Shot name="combat-scripts-editor" caption="The Combat Scripts editor (Behaviors > Combat Scripts)." />

A **combat script** says how an entity fights: how it looks for a target, how it closes in, what it does when it is in range, and how it reacts to what happens. You give a script to an [NPC](/basic/entities/npcs), to a placed NPC, or to a [player class](/basic/entities/player-classes#ai-scripts) (for the party members the AI controls).

An NPC with no combat script still fights: it uses a simple one that spams its basic attack and then its abilities in turn.

## The states of a fight

A fighting entity is always in one **state**. The script chooses which states it uses, and what it does in the **Attacking** state; the other states are handled by the game.

| State | What the entity is doing |
|---|---|
| **Inactive** | Not in a fight. It idles, and it goes back here when the target is too far (it **leashes**) |
| **Target search** | It has no target. An NPC picks the enemy with the most [threat](/basic/keywords#threat) (or the nearest, when the project does not use threat). It then searches a while, and gives up |
| **Chasing** | It moves towards the target until it is in range of its attack. It routes around obstacles and finds a spot with line of sight |
| **Attacking** | It is in range and fights. This is where the script's **attack logic** runs |
| **Following** | It follows another entity: a companion behind the player, a pet behind its summoner |
| **Player command** | It does what the player ordered (move to a point) and then returns to what it was doing |
| **Flee** | It runs away from the one who made it afraid, for as long as the effect lasts |
| **Disoriented** | It wanders at random where it stands, for as long as the effect lasts |
| **Incapacitated** | Stunned: no movement and no action, until the effect ends |
| **Dead** | Defeated |

Crowd control [effects](/basic/abilities-and-effects/crowd-control) put an entity in Flee, Disoriented or Incapacitated by themselves.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Auto basic attack** | When the attack logic has nothing to do, use the basic attack | on |
| **Basic attack interval** | Seconds between basic attacks | `0.5` |
| **Uses target search / chasing / attacking / following / player command** | Which states the script uses. Switch off *chasing* for a turret that never moves. Switch on *following* for a pet | search, chasing, attacking |
| **Attack logic type** | **Simple**, **Priority**, **Timeline** or **Tactical**, below | Simple |
| **Attack state logic** | The logic itself, whose fields change with the type | |
| **Phase system** | Optional: boss phases | none |
| **Global reactions** | Reactions that work in any state | none |

## Attack logic

The logic is a small AI. Each kind suits one style of fight.

| Type | For | How it decides |
|---|---|---|
| **Simple** | Most enemies | It makes an action for each active ability by itself and cycles through them. Fields: **Min first delay**, **Max first delay** (a random wait before the first action, `2` to `5` s), **Rest after action** (`3` s) |
| **Priority** | A caster that should use a special ability when something is true | A list of [actions](#combat-actions). Each has a **priority** and **conditions**; the highest-priority action whose conditions hold and that is ready is used. Fields: the **Actions** list, **Min/Max first delay** (`5` to `7` s), **Rest after action** (`0.5` s) |
| **Timeline** | A scripted boss | The actions run at set times: *0 s fireball, 10 s summon adds, 20 s run to the center*. Fields: **Timeline actions**, **Action times** (one for each action), **Loop timeline** (on) |
| **Tactical** | An action-RPG enemy that moves around | It manages its distance and picks actions by range. See below |
| **Companion** | A party member the AI controls | Every 0.6 s it uses the first ready active ability that fits: an enemy ability on the target, an ally ability on the most hurt member below 70 % health. Fields: **Decision interval** (`0.6`), **Heal threshold** (`0.7`). Used by companions by default |

### Tactical logic

| Field | What it does | Default |
|---|---|---|
| **Preferred range**, **Min range**, **Max range** | The distance it likes to keep. Closer than the minimum it backs off, farther than the maximum it closes in | `6`, `3`, `10` |
| **Circle probability** | The chance to circle the target when it is at a good range | `0.3` |
| **Reposition cooldown** | Seconds between thinking about moving | `3` |
| **Retreat after combo**, **Retreat distance** | Back away after a combo | on, `8` |
| **Melee actions**, **Ranged actions**, **Repositioning actions** | Actions used within the preferred range, beyond it, and to move (retreat, strafe, keep distance) |  |

## Combat actions

An action is a thing to do. Every action has:

| Field | What it does | Default |
|---|---|---|
| **Priority** | Higher is checked first in a priority list | `0` |
| **Conditions** | [Conditions](/basic/shared-systems/conditions) that must hold for the action to run: "health below 50 %", "target has no Poison" | none |
| **Action cooldown** | Seconds before the action can run again, independent of the ability's own [cooldown](/basic/keywords#cooldown) | `0` |
| **Interrupt casting** | The action can cut short a cast in progress | off |

The kinds:

| Action | What it does |
|---|---|
| **Use Ability** | Uses an [ability](/basic/abilities-and-effects/abilities) on the current target. The most common action |
| **Use Ability at Point** | Uses a ground-targeted ability at a position |
| **Combo** | Runs a list of actions in order: slash, delay, sweep, delay, smash |
| **Delay** | Waits a number of seconds (inside a combo) |
| **Wait for Condition** | Pauses until a condition is true, with an optional timeout |
| **Face Target** | Turns to the target without moving |
| **Move to Point** | Runs to a fixed world position (the arena center) |
| **Move to Ally Position** | Moves to an ally: the nearest, the most hurt, or by another rule |
| **Retreat** | Moves away from the target by a distance |
| **Keep Distance** | Holds a distance, moving closer or farther, for ranged enemies |
| **Strafe** | Circles the target while still facing it |
| **Switch to Highest Threat** | Goes back to the target the threat table prefers |
| **Switch to Enemy**, **Switch to Ally** | Picks another target by criteria: nearest, lowest health, with or without an effect |
| **Clear Target** | Drops the target and searches again |
| **Call for Help** | Shouts: allies within a range join the fight, and an optional effect plays |
| **Spawn NPC** | Spawns a creature at a position or at the caster (adds, reinforcements) |
| **Spawn Interactable** | Spawns an [interactable](/basic/entities/interactables) (a totem, a trap) |
| **Spawn World Effect** | Spawns a ground effect |
| **Trigger Event** | Triggers an [event](/basic/events-and-quests/events) of the world |
| **Activate Quest** | Starts a [quest](/basic/events-and-quests/quests) |

## Phases (boss fights)

A **phase system** is a list of **phases**. A boss with three phases is the system with three entries, entered one after another as the fight goes on.

| Field of a phase | What it does |
|---|---|
| **Phase name** | For you |
| **Phase attack logic** | The attack logic used while the phase is on |
| **Phase transition** | When the phase ends: a list of [entity conditions](/basic/shared-systems/conditions) (health below 60 %, a time passed, an event) and whether **all** or **any** of them must be true |
| **On enter actions**, **On exit actions** | Actions run when the phase begins and ends: summon adds, shout, become immune |

## Reactions

A **reaction** runs actions when something happens, at any moment of the fight, without waiting for the attack logic.

| Field | What it does | Default |
|---|---|---|
| **Reaction name** | For you | |
| **Trigger event** | **Damage taken**, **Damage dealt**, **Health below percent**, **Ally died**, **Enemy died**, **Target changed**, **Effect gained**, **Effect lost**, **Ability used** (by the target) | Damage taken |
| **Health threshold percent** | For *Health below percent* | `30` |
| **Conditions** | Extra [conditions](/basic/shared-systems/conditions) | none |
| **Reaction actions** | The actions to run | |
| **Reaction cooldown** | Seconds before it can fire again | `0` |

"When an ally dies, call for help" and "below 30 % health, retreat and heal" are reactions.

## Examples

| You want | Build |
|---|---|
| **A wolf** | No script. It chases and bites |
| **A caster that heals itself when low** | **Priority** logic: *Use Ability: Heal* with priority `100` and the condition "health below 40 %", then *Use Ability: Bolt* with priority `10` |
| **A boss with a pattern** | **Timeline** logic, or a **phase system** of three phases, each with its own logic, and an *on enter* action that summons adds |
| **An archer that kites** | **Tactical** logic with a preferred range of `10`, *Keep Distance* and *Retreat* as repositioning actions, *Use Ability: Arrow* as the ranged action |
| **A turret** | A script that does not use *chasing* |
| **A pet that follows** | *Uses following* on |

## See also

- [Behavior Scripts](/basic/behaviors/behavior-scripts) (what it does out of combat), [Factions](/basic/behaviors/factions), [NPCs](/basic/entities/npcs)
- [Behaviors: how they are built](/advanced/behaviors/) (Advanced)
