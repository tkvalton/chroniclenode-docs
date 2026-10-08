# Using an ability

How an active ability is carried out over time is its **use strategy**. You choose it in the **Abilities** editor, under the ability's general properties, with the **Strategy Type** drop-down. There are four:

| Strategy | What happens |
|---|---|
| [Instant](#instant) | Everything happens at once |
| [Cast](#cast) | The user spends a cast time first, and the effects apply when it ends |
| [Channel](#channel) | The user keeps going for a while and the effects apply during it |
| [Toggle](#toggle) | Using the ability switches it on or off |

When you pick a strategy the editor shows that strategy's settings. Changing the strategy keeps the presentation settings below and starts the others from their defaults.

## The same for every strategy

These settings are shared by all four, under the heading of the base use strategy.

| Field | What it does |
|---|---|
| **On Cast Animation** | The animation played when the ability completes |
| **Voice Cast SFX** | The voice line played when it completes |
| **On Cast SFX** | The sound played when it completes |
| **Cast VFX** | The visual effect shown when it completes |
| **Ability Telegraph** | A visual that shows the ability's area or target *before* it happens, so the player can see where it lands |

## What happens when an ability is used

1. The ability is checked: it must be active and off [cooldown](/basic/keywords#cooldown), its user alive, not silenced or incapacitated (unless the strategy is immune), off the [global cooldown](/basic/keywords#global-cooldown) if it is on it, and its [requirements](/basic/abilities-and-effects/abilities#requirements) met.
2. The target is checked by the [targeting strategy](/basic/abilities-and-effects/abilities#targeting-and-use-style). If the target is not valid, the game tries to pick one automatically.
3. The **cost is paid**, before anything else can go wrong.
4. The use strategy runs: it completes at once, waits out the cast, ticks through the channel or switches the toggle.
5. When it completes, the on-use effects apply (after the **On-use application delay**), the cooldown starts, any resource gain is given, and the global cooldown starts if the ability is on it.

### Cancelling and interrupting

An ability can stop before it completes in two different ways:

- **Cancelled** by its user, or because the target was lost: the **cost is given back** and no cooldown starts, if the strategy has a start-up to lose (a cast or a channel).
- **Interrupted** by an effect such as a stun or an interrupt: the **cost is kept** and the cooldown starts.

## Instant

The ability completes the moment it is used. It has no settings of its own beyond the shared presentation.

## Cast

<Shot name="use-cast-settings" caption="The settings of the Cast strategy." />

The ability takes a cast time. The effects apply when the cast finishes.

| Field | What it does | Default |
|---|---|---|
| **Cast Duration** | Seconds of casting before the effects apply | `2` |
| **Immobile During Cast** | The caster cannot move while casting | on |
| **Movement Speed While Casting** | When the caster *can* move: their speed as a share of normal (`1` is unchanged, `0.4` is 40 %) | `1` |
| **Interruptable Cast** | Damage and interrupt effects can stop the cast | on |
| **Interrupt Shield Level** | How many interrupt attempts are blocked before the cast can be interrupted | `0` |
| **Immune To Silence** | The ability can be cast while the caster is silenced | off |
| **Speed Source** | Which stat makes the cast faster: **Cast Speed** (spells), **Attack Speed** (the aim and draw time of a weapon attack) or **None** (a fixed duration). A speed of 2 halves the cast time | Cast Speed |
| **Casting Animation**, **Casting SFX**, **Casting VFX** | The animation, sounds and visual effect shown *while* casting | none |

### Draw and release

For a bow or a charged shot, the cast can end with the shot held at full draw until the player lets go.

| Field | What it does | Default |
|---|---|---|
| **Release To Fire** | After the cast time, the shot waits at full draw until the key is released. This applies to the player in control. An NPC or a companion lets go at full draw | off |
| **Min Hold** | Releasing sooner than this many seconds (at normal speed) cancels the shot and gives back its cost | `0` |
| **Max Hold** | While waiting at full draw, let go by itself after this many seconds. `0` means hold as long as the player wants | `0` |

## Channel

<Shot name="use-channel-settings" caption="The settings of the Channel strategy." />

The ability keeps going for its **Channel Duration**, and its effects apply during that time, until it ends or is interrupted.

| Field | What it does | Default |
|---|---|---|
| **Channel Duration** | Seconds the channel lasts | `2` |
| **Channel Mode** | **Tick Channel** applies the effects again on every tick. **Active Channel** applies them once at the start and removes them when the channel ends | Tick Channel |
| **Channel Tick Rate** | Seconds between ticks (Tick Channel only) | `1` |
| **Cooldown Starts** | The cooldown starts **At Start** of the channel or **At End** of it. The ability cannot be used again during the channel either way | At Start |
| **Immobile During Cast** | The caster cannot move while channelling | on |
| **Movement Speed While Casting** | When the caster can move: their speed as a share of normal | `1` |
| **Interruptable Cast** | Damage and interrupt effects can stop the channel | on |
| **Interrupt Shield Level** | How many interrupt attempts are blocked first | `0` |
| **Immune To Silence** | The ability can be channelled while silenced | off |
| **Casting Animation**, **Casting SFX**, **Casting VFX** | Shown while channelling | none |

## Toggle

<Shot name="use-toggle-settings" caption="The settings of the Toggle strategy, with resource drain." />

A toggle ability switches on when used and off when used again: a stance, an aura, a mode.

| Field | What it does | Default |
|---|---|---|
| **Cost Timing** | When the cost is paid: **On Activate**, **On Deactivate**, or **Both** (on every switch) | On Activate |
| **Cooldown Timing** | When the cooldown starts: On Activate, On Deactivate or Both. A toggle can always be switched *off* during a cooldown, but not switched on again until it ends | On Deactivate |
| **Min Active Duration** | Seconds it must stay on before it can be switched off | `0` |
| **Max Active Duration** | Seconds it can stay on before it switches off by itself. `-1` means no limit | `-1` |
| **Active Icon** | The icon shown while it is on, in place of the ability's icon | none |

### Resource drain

A toggle can use up a resource for as long as it is on.

| Field | What it does | Default |
|---|---|---|
| **Has Resource Drain** | The toggle drains a pool while it is on | off |
| **Drain Pool Type** | A **Resource Pool** or the **Health Pool** | Resource Pool |
| **Drain Pool Id** | Which pool to drain | none |
| **Drain Per Second** | How much it drains each second | `5` |
| **Auto Deactivate On Empty** | Switch off when the pool runs out | on |
| **Deactivate Threshold Percent** | Switch off when the pool falls below this percentage (0 to 100) | `0` |

### Toggle groups

Toggles can be put in a group so only one is on at a time, like stances.

| Field | What it does | Default |
|---|---|---|
| **Toggle Group** | The name of the group. Toggles with the same name belong together | empty |
| **Deactivate Group Members** | Switching this toggle on switches the others in its group off | on |

## See also

- [Abilities](/basic/abilities-and-effects/abilities)
- [Abilities & Effects overview](/basic/abilities-and-effects/)
