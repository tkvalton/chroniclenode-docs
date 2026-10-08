# Abilities

An ability describes something an entity can do, and when and how it can do it. You build abilities in the **Abilities** tab of the **Abilities & Effects** category. For how abilities and effects fit together, read the [overview](/basic/abilities-and-effects/) first.

## The editor

<Shot name="abilities-editor" caption="The Abilities editor with an ability selected." />

On the left is the list of abilities, with a **Filter files** box and the **Add** button. Select an ability to edit it on the right. The fields that you see depend on the **Ability type**: a passive ability has fewer fields than an active one, and each of the other kinds adds its own.

## Basic properties

<Shot name="abilities-basic-properties" caption="Basic properties: name, description and its preview, and icon." />

| Field | What it does |
|---|---|
| **Display name** | The name the player sees |
| **ID** | The number the toolkit gave this ability. Other things refer to the ability by it. You never type it, and it does not change when you rename the ability |
| **Description** | The text of the ability's tooltip. Write `<Effect1>`, `<Effect2>` and so on where you want the text of the ability's effects to appear. `<Effect1>` is the text the [effect type](/basic/abilities-and-effects/effect-types) writes itself ("deals 10 damage"), so it follows the effect's numbers. If you want your own words for an effect, write them in that effect's Description and use `<EffectText1>` instead. The numbers count the on-use effects, then the passive effects, and the [child effects](/basic/abilities-and-effects/child-effects-and-auras) of each. The **Preview** under the field shows the result |
| **Icon** | The picture shown on the action bar and in the spellbook. The **X** button next to it removes the icon |

::: tip The description keeps itself right
Because `<Effect1>` is replaced with the effect's own description, you can change a damage number in the effect and every ability that uses it shows the new number.
:::

## Ability type

The **Ability type** decides what the ability is and which other fields appear:

- **Passive**: always on. Its effects apply while its [requirements](/basic/shared-systems/requirements) hold.
- **Active**: used on demand. Everything under [General properties](#general-properties) below.
- **Power-up**: an active ability whose power depends on how much it is charged.
- **Charge stack**: an active ability that holds several charges.
- **Combo**: an active ability that changes with each use in sequence.

## General properties

<Shot name="abilities-general-properties" caption="General properties of an active ability." />

These fields belong to every kind of active ability.

| Field | What it does | Default |
|---|---|---|
| **Ability school** | The school the ability belongs to (fire, healing, physical and so on). [Immunities](/basic/tags-and-groups/immunities) and dispels use it. You define schools under *Tags & Groups > [School Types](/basic/tags-and-groups/school-types)* | none |
| **On global cooldown** | Using this ability starts the [**global cooldown**](/basic/keywords#global-cooldown), a short pause during which other abilities on it cannot be used | on |
| **Use weapon speed as cooldown** | The [cooldown](/basic/keywords#cooldown) is the equipped weapon's attack speed instead of **Cooldown duration**. Use it for basic attacks | off |
| **Cooldown duration** | Seconds before the ability can be used again. `0` means no cooldown | `0` |
| **On-use application delay** | Seconds to wait after the ability fires before its on-use effects apply. Use it to line up the effect with an animation, for example a swing that visibly lands 0.3 seconds after it starts | `0` |
| **Strip passive on inactive** | For an ability that also has passive effects: remove them when the requirements stop holding (on), or keep them even then (off). Keep them for abilities whose passive effect is what makes the requirement true again | on |

## Pool actions

<Shot name="abilities-pool-actions" caption="Pool actions: what the ability costs and what it gives back." />

An ability can cost a resource, and can give one back.

| Field | What it does |
|---|---|
| **Cost pool type** | What the ability spends: *No Cost*, a *Resource Pool* such as mana or rage, or the *Health Pool* |
| **Cost pool** | Which pool to spend from. You define pools in *[Entity Stats](/basic/entity-stats/) > Pool* |
| **Cost amount** | How much it spends each use |
| **Gain pool type**, **Gain pool**, **Gain amount** | The same three fields for a resource the ability gives back when it completes, such as combo points or rage |

The ability cannot be used if the user cannot pay. The cost is paid when the ability starts.

## Ammo and reagents

<Shot name="abilities-ammo" caption="Ammo and reagents." />

An ability can also use up items or money each time it is used.

| **Ammo source** | What is spent |
|---|---|
| **None** | Nothing |
| **Equipped ammo** | The ammo in the ammo slot, of the kind the equipped weapon shoots. The player chooses which ammo is equipped |
| **Item** | One specific item from the inventory, such as a reagent |
| **Item group** | Any item of a group from the inventory |
| **Currency** | A currency |

**Ammo amount** is how many pieces each use takes. Depending on the source you also pick the item, the item group or the currency.

## Requirements

<Shot name="abilities-requirements" caption="The requirements list, with Add Requirement." />

**Requirements** are conditions that must be true before the ability can be used, or, for a passive ability, for its effects to apply: a weapon type, a level, a stat value, a class. Press **Add Requirement** to add one; right-click one to edit or remove it.

## Groups

**Groups** put the ability in one or more groups (defined in *Tags & Groups > Groups*). Abilities and consumables in a group that shares its cooldown go on cooldown together, which is how potions share a cooldown.

## Targeting and use style

An active ability has a **targeting strategy** (who or what it can be aimed at) and a **use strategy** (how it is carried out over time: instant, cast, channel or toggle). Each has its own settings, such as range, cast time and whether it can be interrupted. The use strategies are described in [Using an ability](/basic/abilities-and-effects/using-an-ability).

## Effects

<Shot name="abilities-effects-trees" caption="The on-use and passive effect trees of an ability." />

An ability lists the effects it applies, in two places:

- **On-use effects** are applied when the ability is used (after the **On-use application delay**). They are the ability's actual result.
- **Passive effects** are applied while the ability is active: for a passive ability while its requirements hold, and for an active ability from the start, until the requirements stop holding (unless **Strip passive on inactive** is off).

Each is a tree you build in the editor: pick an effect for each slot and the tree shows effects that contain other effects. Effects themselves are made in the **Effects** tab.

## Settings that belong to one kind of ability

### Charge stack

<Shot name="abilities-charge-stack" caption="The settings of a charge stack ability." />

| Field | What it does | Default |
|---|---|---|
| **Max charges** | How many charges the ability can hold | `2` |
| **Start with full charges** | Start with every charge available (on), or with one and build up (off) | on |
| **Charge cooldown** | How charges come back: *Shared* regains them one after another, with one timer. *Independent* gives each charge its own timer, so they regain at the same time | Shared |

### Combo

<Shot name="abilities-combo" caption="The settings and steps of a combo ability." />

The first use of a combo ability does what the ability normally does. Each use within the time limit moves it to the next step, and a step can change the effects, the cost, the name and the icon.

| Field | What it does | Default |
|---|---|---|
| **Combo steps** | The extra steps, from the second use onwards. For each one you set its effects, its cost, its icon and its name. A step you leave empty uses the ability's own | none |
| **Combo timeout** | Seconds the player has to use the next step before the combo starts over | `6` |
| **Combo loop** | After the last step, go back to the first | on |
| **Combo cooldown mode** | When the cooldown starts: *on completion* (only after the last step), *on every use* (after each step) or *on timeout or completion* | on completion |

### Power-up

<Shot name="abilities-power-up" caption="The settings and tiers of a power-up ability." />

A power-up ability has **tiers**. The more it is charged, the higher the tier, and each tier has its own effects. What "charged" means depends on the ability's use style:

| Use style | What raises the tier |
|---|---|
| **Instant** | Spending more of the resource: the user pays for the highest tier they can afford |
| **Cast** | A longer cast time |
| **Channel** | Channelling for longer |
| **Toggle** | Staying switched on for longer |

| Field | What it does | Default |
|---|---|---|
| **Tier effects** | The on-use effects of each tier | none |
| **Tier thresholds** | What it takes to reach each tier: resource spent, time channelled, cast time or time toggled on, depending on the use style | none |
| **Max charge resource** | For an instant power-up, the most resource that can be spent charging it | `100` |
| **Progressive channel effects** | For a channel, apply each tier's effects as it is reached (on) or only at the end (off) | on |
| **Channel final burst** | For a channel, apply a final burst for the tier reached when the channel completes | on |
| **Toggle stacking tiers** | For a toggle, a new tier adds its effects on top of the earlier ones (on) or replaces them (off) | off |

## See also

- [Abilities & Effects overview](/basic/abilities-and-effects/)
