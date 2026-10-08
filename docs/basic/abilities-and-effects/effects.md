# Effects

An effect is one thing that happens: damage, a heal, a change to a stat, a stun, a push, a projectile, a summon. Abilities, items, [quests](/basic/events-and-quests/quests) and events all apply effects. You build them in the **Effects** tab of the **Abilities & Effects** category. For how effects and abilities fit together, read the [overview](/basic/abilities-and-effects/) first.

## The editor

<Shot name="effects-editor" caption="The Effects editor with an effect selected." />

On the left is the list of effects, with a **Filter files** box and the **Add** button. Select an effect to edit it on the right.

The fields at the top are the same for every effect. At the bottom, **Specific Properties** has a **Select Effect Type** button. Choose a type, such as *Damage*, *Heal*, *Stun* or *Projectile*, and the fields of that type appear below. The type decides what the effect actually does. Every type is described in [Effect types](/basic/abilities-and-effects/effect-types).

## Basic properties

| Field | What it does |
|---|---|
| **Display name** | The name the player sees, for example on the buffs bar |
| **ID** | The number the toolkit gave this effect. Other things refer to the effect by it, and it never changes |
| **Description** | The text shown when the player points at the effect on the interface (a buff icon, a nameplate). Leave it empty to show the text the effect type writes itself, for example "deals 10 damage". In it, `<Effect1>`, `<Effect2>` and so on are replaced by the text of the effect's child effects. See [Child effects and auras](/basic/abilities-and-effects/child-effects-and-auras) |
| **Icon** | The icon shown for this effect, for example on the buffs bar. The **X** button removes it |
| **Effect school** | The kind of effect for dispels, purges and [immunities](/basic/tags-and-groups/immunities): magic, poison, curse and so on. You define schools under *Tags & Groups > [School Types](/basic/tags-and-groups/school-types)*. An effect with no school cannot be removed by a dispel |
| **Applies to** | Whether the effect lands on the **Target** or on the **Self** (the caster). A self-effect on an ability aimed at an ally is how a "Misdirection" effect puts something on the caster while the ally is the target |

## How long it lasts

<Shot name="effects-time-strategy" caption="The time strategy, duration and tick rate." />

An effect has a **time strategy**. It decides how long the effect exists and whether it repeats.

| Time strategy | What it does | Example |
|---|---|---|
| **Immediate** | Happens once and is over. It is never added to the target's effect list. It has no duration and no tick rate | A hit, a heal |
| **Persistent** | Applies and stays until something removes it. It has no timer, so no duration | A passive bonus, an aura that lasts |
| **Persistent ticking** | Stays until something removes it, and repeats every **Tick rate** seconds | A constant drain |
| **Temporary** | Lasts for its **Duration**, then ends | A buff, a stun |
| **Temporary ticking** | Lasts for its **Duration** and repeats every **Tick rate** seconds | Poison, regeneration, burning |

| Field | Shown for | What it does |
|---|---|---|
| **Duration** | Temporary, Temporary ticking | Seconds the effect lasts. The shortest is **0.1**: a smaller value is raised to 0.1 |
| **Tick rate** | Persistent ticking, Temporary ticking | Seconds between repeats |

The editor only shows a field for the strategies that use it. **Duration** is not a way to make an effect permanent: a duration of `0` on a temporary effect still ends after 0.1 seconds. An effect that never ends, until something removes it, uses the **Persistent** strategy. An effect that happens once and is gone is **Immediate**.

The first application counts as the first tick. A 10-second poison with a tick rate of 2 hits at once, then every 2 seconds.

An effect ends when its duration runs out, or when something removes it: a dispel, the death of its owner, or the ability that applied it ending.

## Stacking

<Shot name="effects-stacking" caption="The stacking settings." />

When an effect is applied while the same effect is already running on the target, the **stacking** settings decide what happens.

| Field | What it does | Default |
|---|---|---|
| **Stacking rule** | How a new application meets one that is already on the target. See the table below | Separate copies |
| **Stacks per application** | How many [stacks](/basic/keywords#stacks) one application adds | `1` |
| **Max stacks** | The most stacks allowed (for the two rules that stack) | `1` |
| **Refresh on stack** | A new stack restarts the duration | off |
| **Reapply on stack** | A new stack runs the effect's logic again. Use it for instant damage, healing and projectiles. A stat modifier does not need it | off |

| Stacking rule | What happens when the effect is applied again | Same caster applies it twice | Two casters apply it |
|---|---|---|---|
| **Separate copies** | Nothing is combined. Every application is a new, separate copy with its own timer. **Max stacks** and the other stack fields do not apply | Two copies, both running | Two copies |
| **Per originator** | A caster who already has the effect on the target adds a stack to *their* copy (up to **Max stacks**). Another caster gets their own copy | One copy with two stacks | Two copies, one each |
| **Global** | The target has one copy, whoever applied it. Every application adds a stack to it (up to **Max stacks**) | One copy with two stacks | One copy with two stacks |

The difference between **Separate copies** and **Per originator** is what happens when the *same* caster applies the effect again. With *Separate copies* they get a second, independent copy: the effect simply happens twice, and each copy ends on its own. With *Per [originator](/basic/keywords#originator-and-target)* they get a stronger single copy, with a limit.

::: tip Stacking a damage-over-time effect
For poison that gets stronger with each application, use **Per originator** or **Global** with a **Max stacks** above 1, and turn on **Refresh on stack** so every application restarts the timer.
:::

Removing a stacked effect removes all its stacks, whoever applied them.

## Buff and debuff display

An effect that is shown to the player this way is called an [aura](/basic/keywords#aura).

| Field | What it does |
|---|---|
| **Show as buff/debuff** | Shows the effect on the interface as a buff or a debuff: on the buff and debuff bars, nameplates and unit frames. It is a flag for the interface. It is also what a *Clear* effect that removes buffs or debuffs looks at: only effects marked as auras can be cleared that way |
| **Buff or debuff** | Whether it is shown as a **Buff** (helpful) or a **Debuff** (harmful). It decides the border color on the interface and which kind of Clear effect removes it |

## Groups and requirements

| Field | What it does |
|---|---|
| **Groups** | The [groups](/basic/shared-systems/groups) this effect is in (a Seal, a Well Fed, a Battle Elixir). A group can limit how many of its effects can be active at once, so a second Seal replaces the first. You define groups under *Tags & Groups > Groups* |
| **Requirements** | What the entity the effect lands on must meet at that moment: a level range, a class, a weapon. An effect that fails is rejected |

## Limited uses

An effect can end after a number of uses of abilities by the entity it is on. This is how you make a "next spell is instant" or "your next attack deals extra damage" effect. The use that is counted still gets the effect, and it is removed right after.

| Field | What it does |
|---|---|
| **Max uses** | How many uses before the effect ends. `0` means not limited |
| **Uses count** | What counts as a use: any ability, the basic attack, abilities in a group, abilities of a school, or one specific ability |
| **Uses filter** | The group, school or ability, for the last three choices |

## Settings of the damage and heal effects

**Damage** and **Heal** effects also have **Scaling rules** and **Trigger rules**. They change how much a hit or heal does and how critical strikes, dodges and multistrikes behave for it. See [Scaling and trigger rules](/basic/abilities-and-effects/scaling-and-trigger-rules). Other effect types do not have them.

## SFX and VFX

| Field | What it does |
|---|---|
| **SFX** | The sound played when the effect is applied |
| **VFX** | The visual effect shown when the effect is applied. It can be any kind, including a beam, a path or a telegraph |

Click either button to choose from the libraries in the **Assets** category.

## See also

- [Abilities & Effects overview](/basic/abilities-and-effects/)
- [Abilities](/basic/abilities-and-effects/abilities)
