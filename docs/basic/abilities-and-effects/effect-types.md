# Effect types

<Shot name="effects-type-dialog" caption="The effect type dialog, with its categories and search box." />

Every effect has a **type**: the thing it actually does. You choose it with the **Select Effect Type** button in the [Effects](/basic/abilities-and-effects/effects) editor. The dialog groups the types into categories and has a search box. When you pick a type, the editor shows that type's own fields below **Specific Properties**.

The name in the code font is the name the editor shows, as in *Type: DamageEffect*.

::: info Some types cannot be immediate
A type that changes something *for a while* has no **Immediate** time strategy, because it would end before it did anything. This applies to the stat modifier, status, stealth and school lock effects, thorns and damage redirection, the projectile types, the summons, *Delayed*, *Gravity*, *Create Item*, *Grant Reward*, and the ability-changing types that set, grant or change an ability for a time. The editor hides **Immediate** for them.
:::

## Damage and healing

| Type | What it does |
|---|---|
| **Damage** (`DamageEffect`) | Damages the target. The damage goes through the calculations in *Entity Stats*, so stats, critical strikes, dodges and armor all apply. It also has *Scales with charge*, scaling rules and trigger rules |
| **Heal** (`HealEffect`) | Heals the target, through the same calculations. It has scaling rules and trigger rules too |
| **Thorns** (`ThornsEffect`) | Reflects a part of the damage the target takes back at the attacker |
| **Damage Redirection** (`DamageRedirectionEffect`) | The damage the target would take goes to the caster instead: a guardian or tank ability |
| **Equalize Health** (`EqualizeHealthEffect`) | Evens out the health of the target and the caster |

## Stats

| Type | What it does |
|---|---|
| **Stat Modifier** (`StatModifierEffect`) | Changes a stat on the target, or every stat of a stat group at once ("all Primary stats +10 %"). It has scaling rules too: the value can depend on the situation when it is applied |
| **Set Stat Active State** (`SetStatActiveStateEffect`) | Switches stats on or off: one stat, or a whole group (all Offensive stats off while disarmed). They come back when the effect ends |
| **Add Health Pool** (`AddHealthPoolEffect`) | Adds a temporary health pool, such as an absorb shield. With no pool chosen it uses the built-in *Shield* pool, which soaks up damage before health does |
| **Add Resource Pool** (`AddResourcePoolEffect`) | Adds a temporary resource pool, such as bonus mana or rage, removed when the effect ends |
| **Modify Health Pool** (`ModifyHealthPoolEffect`) | Changes the target's health pool: reduce maximum health by 20 %, set health to 1, add a regeneration. For damage and healing use Damage and Heal |
| **Modify Resource Pool** (`ModifyResourcePoolEffect`) | Changes an existing resource pool: drain mana, reduce maximum energy, raise regeneration, refill on a kill |
| **Absorb With Pool** (`AbsorbWithPoolEffect`) | While it lasts, a pool the target already has (mana, rage) also takes part of the damage. A mage's mana shield turns the mana bar into a second health bar |

## Status and control

| Type | What it does |
|---|---|
| **Status** (`StatusEffect`) | Puts a status condition on the target: stun, root, silence, disarm, cripple. The condition itself is a *Status Effect* you define in *Entity Stats*, with its own diminishing returns and immunity |
| **Interrupt** (`InterruptEffect`) | Interrupts the target's current cast or channel |
| **School Lock** (`SchoolLockEffect`) | Locks all of one school's abilities on the target: a counterspell, a school-specific silence |
| **Spell Reflect** (`SpellReflectEffect`) | A ward that sends abilities aimed at its holder back at their caster |
| **Immunity** (`ImmunityEffect`) | Gives or removes an immunity to some kinds of effect or damage |
| **Clear** (`ClearEffect`) | Removes other effects from the target, by school or by effect |
| **Stealth** (`StealthEffect`) | Makes the target stealthy or invisible |
| **Reveal** (`RevealEffect`) | An area that reveals stealthed targets and stops new stealth inside it |
| **Taunt** (`TauntEffect`) | Forces the target to attack the caster for the duration (give it a duration). See [threat](#threat) |
| **Threat** (`ThreatEffect`) | Adds, reduces, clears or redirects threat. See [threat](#threat) |
| **Resurrect** (`ResurrectEffect`) | Brings a dead entity back to life with a share of its maximum health |
| **Charm** (`CharmEffect`) | Changes the target's faction to the caster's for a while. This type is still being finished |

### Threat

**Taunt** makes an NPC attack the caster whatever its threat table says. When it ends, the caster's threat is put at the top so the NPC stays on them. A player or companion gets the caster selected and locked on until the taunt ends.

**Threat** can add or reduce an entity's threat, clear it, or put it at the top. Its **Redirect** mode, with a duration, makes the threat an entity generates go to someone else: **misdirection**. Put the effect on the caster, aimed at the tank, and the caster's threat goes to the tank. **Redirect Percent** decides how much of it goes, from 1 to 100.

Healing also makes threat. To make threat with any other effect, put a **Threat** effect beside it in the ability, with the mode **Add**.

## Ability

These effects change abilities themselves.

| Type | What it does |
|---|---|
| **Ability** (`AbilityEffect`) | Adds or removes abilities from the target's abilities |
| **Basic Attack Swap** (`BasicAttackSwapEffect`) | Replaces the target's basic attack with another |
| **Ability Cast Modifier** (`AbilityCastModifierEffect`) | Changes the cast or channel time of one ability while the effect lasts: the next spell is instant |
| **Ability Cooldown** (`AbilityCooldownEffect`) | Changes an ability's cooldown, shortens a running one, or resets it |
| **Ability Resource** (`AbilityResourceEffect`) | Changes the cost and the resource gain of an ability: half the mana cost, free, more rage |
| **Ability Range** (`AbilityRangeEffect`) | Changes the range of an ability: longer for a sniper shot, shorter as a debuff |
| **Ability Effects Modifier** (`AbilityEffectsModifierEffect`) | Adds or removes effects from an ability's passive or on-use effects while it lasts |
| **Ability Morph** (`AbilityMorphEffect`) | Temporarily turns an ability into another one, in the same slot |
| **Set Ability Active** (`SetAbilityActiveEffect`) | Makes an ability ready for the duration: a temporary unlock or power grant |
| **Repeat Ability** (`RepeatAbilityEffect`) | Applies an ability's on-use effects again to the same target, a number of times with a delay. The repeats are free |

## Composite

A composite effect holds other effects and decides when they are applied.

| Type | What it does |
|---|---|
| **Composite** (`CompositeEffect`) | Holds other effects and applies them together as one effect. Use it to keep a complex buff or debuff in one piece: for example a buff that heals and raises stats, and is removed as one. Only the effects you mark as an [aura](/basic/abilities-and-effects/effects#aura) are shown on the interface, so you decide which effect of the chain the player sees. Its logic is the base of **40** other effect types: the conditional, delayed, chain and consume effects, projectiles, area effects, movement and procs |
| **Delayed** (`DelayedEffect`) | Applies its child effects after a delay. It can also apply them when it is cancelled, like a trap |
| **Chain** (`ChainEffect`) | Applies its child effects in a chain from target to target |
| **Consume** (`ConsumeEffect`) | Consumes another effect and applies child effects based on the stacks it consumed: a finisher that spends combo points |

## Conditional

A conditional effect applies its child effects only when a condition is true.

| Type | What it does |
|---|---|
| **Health Conditional** (`HealthConditionalEffect`) | Depends on the health percentage of the target or the caster |
| **Distance Conditional** (`DistanceConditionalEffect`) | Depends on the distance between the caster and the target |
| **Effect Conditional** (`EffectConditionalEffect`) | Depends on whether an entity has an effect, lacks it, or has an exact number of its stacks |
| **Random Chance Conditional** (`RandomChanceConditionalEffect`) | Applies on a percentage chance, with optional modes that smooth out long streaks of bad luck |

## Projectiles

A projectile effect launches something that flies, and applies its child effects when it arrives. The child effects are where the damage, healing or status goes.

| Type | What it does |
|---|---|
| **Direct Projectile** (`DirectProjectileEffect`) | Flies in a straight line |
| **Homing Projectile** (`HomingProjectileEffect`) | Follows its target, optionally along a curve |
| **Physics Projectile** (`PhysicsProjectileEffect`) | Flies on a ballistic arc |
| **Chain Projectile** (`ChainProjectileEffect`) | Bounces between several targets |
| **Boomerang Projectile** (`BoomerangProjectileEffect`) | Travels to the target and returns to the caster |
| **Hitscan** (`HitscanEffect`) | Not a projectile: an instant line from the muzzle towards the target or the aimed point, up to a maximum range. Its child effects apply to the first entity the line meets, or to several with **Pierce Count**. Walls stop it unless told not to. Nothing can be dodged |

The direct, physics and chain types choose what makes them apply: a **collision** with something, reaching their **destination**, or a **timer**. The boomerang only uses a collision. A projectile's **Charge Scales Speed** makes a drawn shot fly faster. See [Aiming](/basic/abilities-and-effects/aiming).

## Area effects

An area effect applies its child effects to everything inside a shape.

| Type | What it does |
|---|---|
| **Area** (`AreaEffect`) | Applies to everything in a custom-defined shape |
| **Weapon Collision** (`WeaponCollisionEffect`) | For melee attacks: uses the collision shape of the weapon the user holds, and applies its effects on a body collision |
| **Minimum Application** (`MinimumApplicationAreaEffect`) | Guarantees a minimum number of applications. With fewer targets than the minimum, it wraps around to hit the same ones again |
| **Area Randomize Target** (`AreaRandomizeTargetEffect`) | Spreads its applications over random targets and points in the area, optionally over time |
| **Equalize Damage / Healing / Health** (`EqualizeDamageAreaEffect`, `EqualizeHealingAreaEffect`, `AreaEqualizeHealthEffect`) | Shares damage, healing or health out evenly among all the targets in the area |

## Movement

Movement effects move an entity. The *Directional* types push it in a direction. The *Point* types take it to a place.

| Type | What it does |
|---|---|
| **Dash** (`DashEffect`) | Moves a set distance, instantly or smoothly: a blink step, a gap closer |
| **Impulse** (`ImpulseEffect`) | A burst of speed that dies away: a dodge roll, a knockback |
| **Constant Move** (`ConstantMoveEffect`) | Moves at constant speed for a duration: sustained flight, a charge |
| **Accelerated Move** (`AcceleratedMoveEffect`) | Moves with acceleration and a custom curve: a wind-up charge |
| **Push** (`PushEffect`) | A shove away from the caster: an explosion knockback |
| **Pull** (`PullEffect`) | A pull towards the caster: a grappling hook |
| **Charge To Point** (`ChargeToPointEffect`) | A straight ground charge to a position or entity, colliding along the way |
| **Jump To Point** (`JumpToPointEffect`) | An arc jump to a point |
| **Teleport To Point** (`TeleportToPointEffect`) | An instant teleport |
| **Swap** (`SwapEffect`) | Two entities exchange positions. Child effects can apply to either on arrival |
| **Orbit** (`OrbitEffect`) | Circles around a target entity or position: a whirlwind |
| **Gravity** (`GravityEffect`) | Changes the gravity on the target: low, high, anti or zero gravity |

## Pets and summons

| Type | What it does |
|---|---|
| **Summon Pet** (`SummonPetEffect`) | Summons a pet or companion for the user |
| **Pet Command Ability** (`PetCommandAbilityEffect`) | Commands a pet to use a chosen ability |
| **Summon Interactable** (`SummonInteractableEffect`) | Summons an object, such as a turret or a totem, for the user |

## Proc effects

A proc effect waits for something to happen to its holder, and then applies its child effects, with a chance.

| Type | What it triggers on |
|---|---|
| **Combat Proc** (`CombatProcEffect`) | The hits its holder deals or receives, filtered by the trigger tags that fired: critical strike, dodge, block |
| **Ability Proc** (`AbilityProcEffect`) | The use of abilities |
| **Death Proc** (`DeathProcEffect`) | Death events |
| **Effect Event Proc** (`EffectEventProcEffect`) | Effects being gained, updated or lost |
| **Health Threshold Proc** (`HealthThresholdProcEffect`) | Health crossing a percentage, the caster's own or their target's |
| **Resource Threshold Proc** (`ResourceThresholdProcEffect`) | A pool crossing a value. It fires on the crossing, not on every tick |

## Item

| Type | What it does |
|---|---|
| **Create Item** (`CreateItemEffect`) | Creates items and puts them in the target's inventory, or drops them in the world |
| **Enchant Equipment** (`EnchantEquipmentEffect`) | Puts an enchant on the equipment in a slot, like an enchant scroll |

## Utility

| Type | What it does |
|---|---|
| **Grant Reward** (`GrantRewardEffect`) | Gives the target a *Reward*: abilities, items, currency, effects. Can take it back when the effect ends |
| **Access Entity Inventory** (`AccessEntityInventoryEffect`) | Opens the inventory of the target, like looting it |
| **Unlock Interactable** (`EffectUnlockInteractable`) | Tries to unlock a locked object, with a base chance that a stat of the caster can raise |

## See also

- [Effects](/basic/abilities-and-effects/effects)
- [Abilities & Effects overview](/basic/abilities-and-effects/)
