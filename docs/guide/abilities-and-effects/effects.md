# Effects

An effect is one thing that happens: damage, a heal, a change to a stat, a stun, a push, a projectile, a summon. Abilities, items, quests and events all apply effects. You build them in the **Effects** tab of the **Abilities & Effects** category. For how effects and abilities fit together, read the [overview](/guide/abilities-and-effects/) first.

## The editor

On the left is the list of effects, with a **Filter files** box and the **Add** button. Select an effect to edit it on the right.

The fields at the top are the same for every effect. At the bottom, **Specific Properties** has a **Select Effect Type** button. Choose a type, such as *Damage*, *Heal*, *Stun* or *Projectile*, and the fields of that type appear below. The type decides what the effect actually does. Every type is described in [Effect types](/guide/abilities-and-effects/effect-types).

## Basic properties

| Field | What it does |
|---|---|
| **Display name** | The name the player sees, for example on the buffs bar |
| **ID** | The number the toolkit gave this effect. Other things refer to the effect by it, and it never changes |
| **Description** | The text of the effect's tooltip |
| **Color** | The color used for this effect in the interface |
| **Icon** | The icon shown for this effect, for example on the buffs bar. The **X** button removes it |
| **Effect school** | The kind of effect for dispels, purges and immunities: magic, poison, curse and so on. You define schools under *Tags & Groups > School Types*. An effect with no school cannot be removed by a dispel |
| **Applies to** | Whether the effect lands on the **Target** or on the **Self** (the caster). A self-effect on an ability aimed at an ally is how a "Misdirection" effect puts something on the caster while the ally is the target |

## How long it lasts

An effect has a **time strategy**. It decides how long the effect exists and whether it repeats.

| Time strategy | What it does | Example |
|---|---|---|
| **Immediate** | Happens once and is over. It is never added to the target's effect list | A hit, a heal |
| **Persistent** | Applies and stays until something removes it. It has no timer | An aura, a passive bonus |
| **Persistent ticking** | Stays, and repeats every **Tick rate** seconds | A constant drain |
| **Temporary** | Lasts for its **Duration**, then ends | A buff, a stun |
| **Temporary ticking** | Lasts for its **Duration** and repeats every **Tick rate** seconds | Poison, regeneration, burning |

| Field | What it does |
|---|---|
| **Duration** | Seconds the effect lasts. `0` means permanent. The shortest duration is 0.1 seconds |
| **Tick rate** | Seconds between repeats. `0` means it does not repeat |

The first application counts as the first tick. A 10-second poison with a tick rate of 2 hits at once, then every 2 seconds.

An effect ends when its duration runs out, or when something removes it: a dispel, the death of its owner, or the ability that applied it ending.

## Stacking

When an effect is applied while the same effect is already running on the target, the **stacking** settings decide what happens.

| Field | What it does | Default |
|---|---|---|
| **Stacking rule** | **No limits**: every application is a separate copy. **Per originator**: each caster has one copy on the target, and more applications by the same caster add stacks to it. **Global**: one copy on the target whoever applies it, and every application adds stacks to it | No limits |
| **Stacks per application** | How many stacks one application adds | `1` |
| **Max stacks** | The most stacks allowed (for the two rules that stack) | `1` |
| **Refresh on stack** | A new stack restarts the duration | off |
| **Reapply on stack** | A new stack runs the effect's logic again. Use it for instant damage, healing and projectiles. A stat modifier does not need it | off |

::: tip Stacking a damage-over-time effect
For poison that gets stronger with each application, use **Per originator** or **Global** with a **Max stacks** above 1, and turn on **Refresh on stack** so every application restarts the timer.
:::

Removing a stacked effect removes all its stacks, whoever applied them.

## Aura

| Field | What it does |
|---|---|
| **Applies aura** | The effect creates an aura around its target |
| **Aura classification** | Whether the aura is a **Buff** or a **Debuff**, which decides how it is shown and what can dispel it |

## Groups and requirements

| Field | What it does |
|---|---|
| **Groups** | The groups this effect is in (a Seal, a Well Fed, a Battle Elixir). A group can limit how many of its effects can be active at once, so a second Seal replaces the first. You define groups under *Tags & Groups > Groups* |
| **Requirements** | What the entity the effect lands on must meet at that moment: a level range, a class, a weapon. An effect that fails is rejected |

## Limited uses

An effect can end after a number of uses of abilities by the entity it is on. This is how you make a "next spell is instant" or "your next attack deals extra damage" effect. The use that is counted still gets the effect, and it is removed right after.

| Field | What it does |
|---|---|
| **Max uses** | How many uses before the effect ends. `0` means not limited |
| **Uses count** | What counts as a use: any ability, the basic attack, abilities in a group, abilities of a school, or one specific ability |
| **Uses filter** | The group, school or ability, for the last three choices |

## Other settings

| Field | What it does |
|---|---|
| **Trigger rules** | Rules that change how trigger tags (critical strike, dodge, multistrike) behave when this effect is used: always, never, a chance bonus, a magnitude bonus. They apply to the hit or heal this effect causes, whatever the stats say |
| **Scaling rules** | Make damage and healing depend on the target: an execute that hits harder below 20 % health, a bonus against a shielded target. Used by damage and heal effects |
| **Threat on apply** | Threat the effect makes when it is applied (`0` is none). On a hostile NPC it hits, otherwise on every enemy fighting the entity it lands on |

## SFX and VFX

| Field | What it does |
|---|---|
| **SFX** | The sound played when the effect is applied |
| **VFX** | The visual effect shown when the effect is applied. It can be any kind, including a beam, a path or a telegraph |

Click either button to choose from the libraries in the **Assets** category.

## See also

- [Abilities & Effects overview](/guide/abilities-and-effects/)
- [Abilities](/guide/abilities-and-effects/abilities)
