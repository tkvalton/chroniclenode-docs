# Targeting

An active ability has a **targeting strategy**: the rule that decides who or what the ability can be aimed at, how far away, and whether the game can pick the target for you. You choose it in the **Abilities** editor with the **Strategy Type** drop-down of the targeting section. Each strategy shows its own settings below the drop-down.

## The strategies

<Shot name="targeting-strategy-dropdown" caption="Choosing the targeting strategy." />

| Strategy | The ability targets | Typical use |
|---|---|---|
| **Self** | The caster, always | A buff, a self-heal, a transformation |
| **None** | Nothing in particular. It happens around the caster or in the world | An area attack around you, a global effect |
| **Enemy** | A hostile entity, or a destructible object that can be targeted | An attack, a curse |
| **Ally** | A friendly entity, a party member, or (if allowed) yourself | A heal, a blessing |
| **Any Entity** | Any entity or targetable object, friend or foe. It does not check factions | A spell that works on everyone |
| **Point** | A point on the ground | A ground-targeted area spell, a teleport |
| **Multi Point** | Several points, picked one after another | A wall of fire, a line attack |
| **Aimed** | Whatever the user is aiming at, or the point the aim hits | A bow, a gun, a thrown weapon. See [Aiming](/basic/abilities-and-effects/aiming) |

Enemy and Ally use the factions you set up in the **Behaviors** category: a target is an enemy when its faction is hostile to the caster's.

## Settings shared by the strategies

<Shot name="targeting-enemy-settings" caption="The shared settings of the Enemy strategy." />

Every strategy has these. A strategy ignores the ones that make no sense for it (a Self ability needs no range).

### Choosing a target

| Field | What it does | Default |
|---|---|---|
| **Has Auto Target** | The game can pick a target for the ability when none is selected, such as the nearest enemy | on |
| **Requires Targeting Input** | The player must choose the target by hand, and the automatic pick is turned off | off |
| **Can Target Dead** | Dead entities are valid targets. Turn it on for a resurrection | off |
| **Max Range** | The farthest distance from the caster a target can be. `0` means unlimited | `3` |
| **Requires Line Of Sight** | The caster must be able to see the target | on |
| **Target Collision Layer** | Which faction relationship counts as a valid target: **Hostile**, **Neutral** or **Friendly** | Hostile |
| **Target Collision Radius** | A radius around the target point used to find entities. `0` means a single point | `0` |

### The targeting marker

A marker is a picture shown on the ground or on the target while the player is choosing.

| Field | What it does | Default |
|---|---|---|
| **Has Marker** | Show a targeting marker | off |
| **Marker Location** | Where it is placed: at the **Mouse** or on the **User** | Mouse |
| **Marker Texture** | The picture. The choices come from *Ability Target Textures* in the Gameplay Config | none |
| **Marker Is Friendly** | Draws the marker in the style used for friendly targets | off |
| **Marker X**, **Marker Z** | Moves the marker sideways from its location | `0` |
| **Marker Offset** | An extra offset applied to the marker | `0` |

## Settings of one strategy

### Ally

| Field | What it does | Default |
|---|---|---|
| **Can Target Self** | The caster can aim the ability at themselves | on |

### Point

| Field | What it does | Default |
|---|---|---|
| **Fixed Point** | If set, the ability always targets this point, measured from the caster, and the player does not choose. Use it for an effect that always lands, say, two metres in front | not set |

### Multi Point

| Field | What it does | Default |
|---|---|---|
| **Points Expected** | How many points the player picks before the ability goes off | `2` |
| **Fixed Points** | If set, the ability uses these points, measured from the caster, instead of asking the player | none |

## What happens when the target is not valid

Before an ability starts, the targeting strategy checks the target. If it is not valid (wrong faction, dead, out of range, out of sight) and the strategy has **Has Auto Target**, the game tries to pick a valid one. For an out-of-range target it does not pick another, it tells the player. If there is no valid target the ability does not start and the player gets a message, and nothing is spent.

## See also

- [Using an ability](/basic/abilities-and-effects/using-an-ability)
- [Aiming](/basic/abilities-and-effects/aiming)
- [Abilities](/basic/abilities-and-effects/abilities)
