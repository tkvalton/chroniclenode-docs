# Effect types

<Shot name="effects-type-dialog" caption="The effect type dialog, with its categories and search box." />

Every effect has a **type**: the thing it actually does. You choose it with the **Select Effect Type** button in the [Effects](/basic/abilities-and-effects/effects) editor. The dialog groups the types into categories and has a search box. When you pick a type, the editor shows that type's own fields below **Specific Properties**.

The name in the code font is the name the editor shows, as in *Type: DamageEffect*.

::: info Some types cannot be immediate
A type that changes something *for a while* has no **Immediate** time strategy, because it would end before it did anything. This applies to the stat modifier, status, stealth and school lock effects, damage reflect and damage redirection, the projectile types, the summons, *Delayed*, *Gravity*, *Create Item*, *Grant [Reward](/basic/shared-systems/rewards)*, and the ability-changing types that set, grant or change an ability for a time. The editor hides **Immediate** for them.
:::

## Damage and healing

| Type | What it does |
|---|---|
| [**Damage**](/advanced/abilities-and-effects/effects-damage-and-healing/damage-effect) (`DamageEffect`) | Damages the target. The damage goes through the [calculations](/basic/entity-stats/calculations) in *[Entity Stats](/basic/entity-stats/)*, so stats, critical strikes, dodges and armor all apply. It also has *Scales with charge*, [scaling rules](/basic/abilities-and-effects/scaling-and-trigger-rules) and trigger rules |
| [**Heal**](/advanced/abilities-and-effects/effects-damage-and-healing/heal-effect) (`HealEffect`) | Heals the target, through the same calculations. It has scaling rules and trigger rules too |
| [**Damage Reflect**](/advanced/abilities-and-effects/effects-damage-and-healing/damage-reflect-effect) (`DamageReflectEffect`) | Reflects a part of the damage the target takes back at the attacker |
| [**Damage Redirection**](/advanced/abilities-and-effects/effects-damage-and-healing/damage-redirection-effect) (`DamageRedirectionEffect`) | The damage the target would take goes to the caster instead: a guardian or tank ability |
| [**Heal Reflect**](/advanced/abilities-and-effects/effects-damage-and-healing/heal-reflect-effect) (`HealReflectEffect`) | Passes a share of the healing the target receives on to the caster or to the healer: a "Vampiric Embrace", a soul link. The healing counterpart of Damage Reflect |
| [**Heal Absorb**](/advanced/abilities-and-effects/effects-damage-and-healing/heal-absorb-effect) (`HealAbsorbEffect`) | Soaks up the next amount of healing the target receives, so it does not reach its health: a curse on a healer's target. The opposite of a shield |
| [**Equalize Health**](/advanced/abilities-and-effects/effects-damage-and-healing/equalize-health-effect) (`EqualizeHealthEffect`) | Evens out the health of the target and the caster |

## Stats

| Type | What it does |
|---|---|
| [**Stat Modifier**](/advanced/abilities-and-effects/effects-stats/stat-modifier-effect) (`StatModifierEffect`) | Changes a stat on the target, or every stat of a [stat group](/basic/tags-and-groups/stat-groups) at once ("all Primary stats +10 %"). It has scaling rules too: the value can depend on the situation when it is applied |
| [**Set Stat Active State**](/advanced/abilities-and-effects/effects-stats/set-stat-active-state-effect) (`SetStatActiveStateEffect`) | Switches stats on or off: one stat, or a whole group (all Offensive stats off while disarmed). They come back when the effect ends |
| [**Add Health Pool**](/advanced/abilities-and-effects/effects-stats/add-health-pool-effect) (`AddHealthPoolEffect`) | Adds a temporary health pool, such as an absorb shield. With no pool chosen it uses the built-in *Shield* pool, which soaks up damage before health does |
| [**Add Resource Pool**](/advanced/abilities-and-effects/effects-stats/add-resource-pool-effect) (`AddResourcePoolEffect`) | Adds a temporary resource pool, such as bonus mana or rage, removed when the effect ends |
| [**Modify Health Pool**](/advanced/abilities-and-effects/effects-stats/modify-health-pool-effect) (`ModifyHealthPoolEffect`) | Changes the target's health pool: reduce maximum health by 20 %, set health to 1, add a regeneration. For damage and healing use Damage and Heal |
| [**Modify Resource Pool**](/advanced/abilities-and-effects/effects-stats/modify-resource-pool-effect) (`ModifyResourcePoolEffect`) | Changes an existing resource pool: drain mana, reduce maximum energy, raise regeneration, refill on a kill |
| [**Absorb With Pool**](/advanced/abilities-and-effects/effects-stats/absorb-with-pool-effect) (`AbsorbWithPoolEffect`) | While it lasts, a pool the target already has (mana, rage) also takes part of the damage. A mage's mana shield turns the mana bar into a second health bar |

## Status and control

| Type | What it does |
|---|---|
| [**Status**](/advanced/abilities-and-effects/effects-status-and-control/status-effect) (`StatusEffect`) | Puts a status condition on the target: stun, root, silence, disarm, cripple. The condition itself is a *[Status Effect](/basic/abilities-and-effects/status-effects)* you define in *Entity Stats*, with its own [diminishing returns](/basic/keywords#diminishing-returns) and [immunity](/basic/tags-and-groups/immunities) |
| [**Interrupt**](/advanced/abilities-and-effects/effects-status-and-control/interrupt-effect) (`InterruptEffect`) | Interrupts the target's current cast or channel |
| [**School Lock**](/advanced/abilities-and-effects/effects-status-and-control/school-lock-effect) (`SchoolLockEffect`) | Locks all of one school's abilities on the target: a counterspell, a school-specific silence |
| [**Ability Reflect**](/advanced/abilities-and-effects/effects-status-and-control/ability-reflect-effect) (`AbilityReflectEffect`) | A ward that sends abilities aimed at its holder back at their caster |
| [**Immunity**](/advanced/abilities-and-effects/effects-status-and-control/immunity-effect) (`ImmunityEffect`) | Gives or removes an immunity to some kinds of effect or damage |
| [**Clear**](/advanced/abilities-and-effects/effects-status-and-control/clear-effect) (`ClearEffect`) | Removes other effects from the target, by school or by effect |
| [**Stealth**](/advanced/abilities-and-effects/effects-status-and-control/stealth-effect) (`StealthEffect`) | Makes the target stealthy or invisible |
| [**Reveal**](/advanced/abilities-and-effects/effects-status-and-control/reveal-effect) (`RevealEffect`) | Reveals the target and keeps it from hiding while the effect lasts. It is not an area: make it a child of an Area effect (with **Gain On Enter** and **Remove On Exit**) to reveal everything inside a shape, or use it alone on one target, like a hunter's mark |
| [**Taunt**](/advanced/abilities-and-effects/effects-status-and-control/taunt-effect) (`TauntEffect`) | Forces the target to attack the caster for the duration (give it a duration). See [threat](/basic/keywords#threat) |
| [**Threat**](/advanced/abilities-and-effects/effects-status-and-control/threat-effect) (`ThreatEffect`) | Adds, reduces, clears or redirects threat (misdirection). See [threat](/basic/keywords#threat) |
| [**Resurrect**](/advanced/abilities-and-effects/effects-status-and-control/resurrect-effect) (`ResurrectEffect`) | Brings a dead entity back to life with a share of its maximum health |
| [**Charm**](/advanced/abilities-and-effects/effects-status-and-control/charm-effect) (`CharmEffect`) | Changes the target's [faction](/basic/behaviors/factions) to the caster's for a while. This type is still being finished |

## Ability

These effects change abilities themselves.

| Type | What it does |
|---|---|
| [**Ability**](/advanced/abilities-and-effects/effects-ability/ability-effect) (`AbilityEffect`) | Adds or removes abilities from the target's abilities |
| [**Basic Attack Swap**](/advanced/abilities-and-effects/effects-ability/basic-attack-swap-effect) (`BasicAttackSwapEffect`) | Replaces the target's basic attack with another |
| [**Ability Cast Modifier**](/advanced/abilities-and-effects/effects-ability/ability-cast-modifier-effect) (`AbilityCastModifierEffect`) | Changes the cast or channel time of one ability while the effect lasts: the next spell is instant |
| [**Ability Cooldown**](/advanced/abilities-and-effects/effects-ability/ability-cooldown-effect) (`AbilityCooldownEffect`) | Changes an ability's [cooldown](/basic/keywords#cooldown), shortens a running one, or resets it |
| [**Ability Resource**](/advanced/abilities-and-effects/effects-ability/ability-resource-effect) (`AbilityResourceEffect`) | Changes the cost and the resource gain of an ability: half the mana cost, free, more rage |
| [**Ability Range**](/advanced/abilities-and-effects/effects-ability/ability-range-effect) (`AbilityRangeEffect`) | Changes the range of an ability: longer for a sniper shot, shorter as a debuff |
| [**Ability Effects Modifier**](/advanced/abilities-and-effects/effects-ability/ability-effects-modifier-effect) (`AbilityEffectsModifierEffect`) | Adds or removes effects from an ability's passive or on-use effects while it lasts |
| [**Ability Morph**](/advanced/abilities-and-effects/effects-ability/ability-morph-effect) (`AbilityMorphEffect`) | Temporarily turns an ability into another one, in the same slot |
| [**Set Ability Active**](/advanced/abilities-and-effects/effects-ability/set-ability-active-effect) (`SetAbilityActiveEffect`) | Makes an ability ready for the duration: a temporary unlock or power grant |
| [**Repeat Ability**](/advanced/abilities-and-effects/effects-ability/repeat-ability-effect) (`RepeatAbilityEffect`) | Applies an ability's on-use effects again to the same target, a number of times with a delay. The repeats are free |

## Composite

A composite effect holds other effects and decides when they are applied.

| Type | What it does |
|---|---|
| [**Composite**](/advanced/abilities-and-effects/effects-composite/composite-effect) (`CompositeEffect`) | Holds other effects and applies them together as one effect. Use it to keep a complex buff or debuff in one piece: for example a buff that heals and raises stats, and is removed as one. Only the effects you mark as an [aura](/basic/keywords#aura) are shown on the interface, so you decide which effect of the chain the player sees. Its logic is the base of **40** other effect types: the conditional, delayed, chain and consume effects, projectiles, area effects, movement and procs |
| [**Delayed**](/advanced/abilities-and-effects/effects-composite/delayed-effect) (`DelayedEffect`) | Applies its [child effects](/basic/abilities-and-effects/child-effects-and-auras) after a delay. It can also apply them when it is cancelled, like a trap |
| [**Chain**](/advanced/abilities-and-effects/effects-composite/chain-effect) (`ChainEffect`) | Applies its child effects in a chain from target to target |
| [**Consume**](/advanced/abilities-and-effects/effects-composite/consume-effect) (`ConsumeEffect`) | Consumes another effect and applies child effects based on the [stacks](/basic/keywords#stacks) it consumed: a finisher that spends combo points |

## Conditional

A conditional effect applies its child effects only when a condition is true. The condition is checked once, when the effect is applied. Every conditional effect also has an **Else effects** list: the effects applied when the condition is *not* true, so "if the target is undead apply A, otherwise apply B" is one effect and not two.

| Type | What it does |
|---|---|
| [**Condition Conditional**](/advanced/abilities-and-effects/effects-conditional/condition-conditional-effect) (`ConditionConditionalEffect`) | Depends on a list of *Conditions*, all of them or any one, checked on the target or on the user. Any check of the Conditions system works here: a tag, a class, a level, an item, a variable, whether the entity is standing still or moving (**Movement State**). Use it for the checks the other three do not have |
| [**Health Conditional**](/advanced/abilities-and-effects/effects-conditional/health-conditional-effect) (`HealthConditionalEffect`) | Depends on the health percentage of the target or the caster |
| [**Distance Conditional**](/advanced/abilities-and-effects/effects-conditional/distance-conditional-effect) (`DistanceConditionalEffect`) | Depends on the distance between the caster and the target |
| [**Effect Conditional**](/advanced/abilities-and-effects/effects-conditional/effect-conditional-effect) (`EffectConditionalEffect`) | Depends on whether an entity has an effect, lacks it, or has an exact number of its stacks |
| [**Random Chance Conditional**](/advanced/abilities-and-effects/effects-conditional/random-chance-conditional-effect) (`RandomChanceConditionalEffect`) | Applies on a percentage chance, with optional modes that smooth out long streaks of bad luck |

## Projectiles and shots

A projectile effect launches something that flies, and applies its child effects when it arrives. The child effects are where the damage, healing or status goes.

| Type | What it does |
|---|---|
| [**Direct Projectile**](/advanced/abilities-and-effects/effects-projectiles-and-shots/direct-projectile-effect) (`DirectProjectileEffect`) | Flies in a straight line |
| [**Homing Projectile**](/advanced/abilities-and-effects/effects-projectiles-and-shots/homing-projectile-effect) (`HomingProjectileEffect`) | Follows its target, optionally along a curve |
| [**Physics Projectile**](/advanced/abilities-and-effects/effects-projectiles-and-shots/physics-projectile-effect) (`PhysicsProjectileEffect`) | Flies on a ballistic arc |
| [**Chain Projectile**](/advanced/abilities-and-effects/effects-projectiles-and-shots/chain-projectile-effect) (`ChainProjectileEffect`) | Bounces between several targets |
| [**Boomerang Projectile**](/advanced/abilities-and-effects/effects-projectiles-and-shots/boomerang-projectile-effect) (`BoomerangProjectileEffect`) | Travels to the target and returns to the caster |
| [**Hitscan**](/advanced/abilities-and-effects/effects-projectiles-and-shots/hitscan-effect) (`HitscanEffect`) | Not a projectile: an instant line from the muzzle towards the target or the aimed point, up to a maximum range. Its child effects apply to the first entity the line meets, or to several with **Pierce Count**. Walls stop it unless told not to. Nothing can be dodged |

The direct, physics and chain types choose what makes them apply: a **collision** with something, reaching their **destination**, or a **timer**. The boomerang only uses a collision. A projectile's **Charge Scales Speed** makes a drawn shot fly faster. See [Aiming](/basic/abilities-and-effects/aiming).

## Area effects

An area effect applies its child effects to everything inside a shape.

| Type | What it does |
|---|---|
| [**Area**](/advanced/abilities-and-effects/effects-area/area-effect) (`AreaEffect`) | Applies to everything in a custom-defined shape |
| [**Weapon Collision**](/advanced/abilities-and-effects/effects-area/weapon-collision-effect) (`WeaponCollisionEffect`) | For melee attacks: uses the collision shape of the weapon the user holds, and applies its effects on a body collision |
| [**Minimum Application**](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect) (`MinimumApplicationAreaEffect`) | Guarantees a minimum number of applications, and can cap the total. With fewer targets than the minimum, it wraps around to hit the same ones again. **Maximum applications** limits how many times the child effects are applied over the whole life of the effect, repeat hits included |
| [**Area Randomize Target**](/advanced/abilities-and-effects/effects-area/area-randomize-target-effect) (`AreaRandomizeTargetEffect`) | Spreads its applications over random targets and points in the area, optionally over time |
| **Equalize Damage / Healing / Health** ([`EqualizeDamageAreaEffect`](/advanced/abilities-and-effects/effects-area/equalize-damage-area-effect), [`EqualizeHealingAreaEffect`](/advanced/abilities-and-effects/effects-area/equalize-healing-area-effect), [`AreaEqualizeHealthEffect`](/advanced/abilities-and-effects/effects-area/area-equalize-health-effect)) | Shares damage, healing or health out evenly among all the targets in the area |

Every area effect shares the same settings (who it affects, how many targets, how it follows the caster). They are described on the class pages of the Advanced section, starting with [Collision effect](/advanced/abilities-and-effects/effects-base/collision-effect) and [Area effect](/advanced/abilities-and-effects/effects-area/area-effect).

## Movement

Movement effects move an entity. The *Directional* types push it in a direction. The *Point* types take it to a place.

| Type | What it does |
|---|---|
| [**Dash**](/advanced/abilities-and-effects/effects-movement/dash-effect) (`DashEffect`) | Moves a set distance, instantly or smoothly: a blink step, a gap closer |
| [**Impulse**](/advanced/abilities-and-effects/effects-movement/impulse-effect) (`ImpulseEffect`) | A burst of speed that dies away: a dodge roll, a knockback |
| [**Constant Move**](/advanced/abilities-and-effects/effects-movement/constant-move-effect) (`ConstantMoveEffect`) | Moves at constant speed for a duration: sustained flight, a charge |
| [**Accelerated Move**](/advanced/abilities-and-effects/effects-movement/accelerated-move-effect) (`AcceleratedMoveEffect`) | Moves with acceleration and a custom curve: a wind-up charge |
| [**Push**](/advanced/abilities-and-effects/effects-movement/push-effect) (`PushEffect`) | A shove away from the caster: an explosion knockback |
| [**Pull**](/advanced/abilities-and-effects/effects-movement/pull-effect) (`PullEffect`) | A pull towards the caster: a grappling hook |
| [**Charge To Point**](/advanced/abilities-and-effects/effects-movement/charge-to-point-effect) (`ChargeToPointEffect`) | A straight ground charge to a position or entity, colliding along the way |
| [**Jump To Point**](/advanced/abilities-and-effects/effects-movement/jump-to-point-effect) (`JumpToPointEffect`) | An arc jump to a point |
| [**Teleport To Point**](/advanced/abilities-and-effects/effects-movement/teleport-to-point-effect) (`TeleportToPointEffect`) | An instant teleport |
| [**Swap**](/advanced/abilities-and-effects/effects-movement/swap-effect) (`SwapEffect`) | Two entities exchange positions. Child effects can apply to either on arrival |
| [**Orbit**](/advanced/abilities-and-effects/effects-movement/orbit-effect) (`OrbitEffect`) | Circles around a target entity or position: a whirlwind |
| [**Gravity**](/advanced/abilities-and-effects/effects-movement/gravity-effect) (`GravityEffect`) | Changes the gravity on the target: low, high, anti or zero gravity |

## Pets and summons

| Type | What it does |
|---|---|
| [**Summon Pet**](/advanced/abilities-and-effects/effects-pets-and-summons/summon-pet-effect) (`SummonPetEffect`) | Summons a pet or companion for the user |
| [**Pet Command Ability**](/advanced/abilities-and-effects/effects-pets-and-summons/pet-command-ability-effect) (`PetCommandAbilityEffect`) | Commands a pet to use a chosen ability |
| [**Summon Interactable**](/advanced/abilities-and-effects/effects-pets-and-summons/summon-interactable-effect) (`SummonInteractableEffect`) | Summons an object, such as a turret or a totem, for the user |

## Proc effects

A proc effect waits for something to happen to its holder, and then applies its child effects, with a chance.

| Type | What it triggers on |
|---|---|
| [**Combat Proc**](/advanced/abilities-and-effects/effects-procs/combat-proc-effect) (`CombatProcEffect`) | The hits its holder deals or receives, filtered by the [trigger tags](/basic/tags-and-groups/trigger-tags) that fired: critical strike, dodge, block |
| [**Ability Proc**](/advanced/abilities-and-effects/effects-procs/ability-proc-effect) (`AbilityProcEffect`) | The use of abilities |
| [**Death Proc**](/advanced/abilities-and-effects/effects-procs/death-proc-effect) (`DeathProcEffect`) | Death events |
| [**Combat State Proc**](/advanced/abilities-and-effects/effects-procs/combat-state-proc-effect) (`CombatStateProcEffect`) | The holder entering or leaving combat |
| [**Status Proc**](/advanced/abilities-and-effects/effects-procs/status-proc-effect) (`StatusProcEffect`) | A status (stun, root, silence ...) landing on the holder or ending, for any status, some base types or chosen definitions. Can apply its effects to whoever inflicted the status |
| [**Effect Event Proc**](/advanced/abilities-and-effects/effects-procs/effect-event-proc-effect) (`EffectEventProcEffect`) | Effects being gained, updated or lost |
| [**Health Threshold Proc**](/advanced/abilities-and-effects/effects-procs/health-threshold-proc-effect) (`HealthThresholdProcEffect`) | Health crossing a percentage, the caster's own or their target's |
| [**Resource Threshold Proc**](/advanced/abilities-and-effects/effects-procs/resource-threshold-proc-effect) (`ResourceThresholdProcEffect`) | A pool crossing a value. It fires on the crossing, not on every tick |

## Item

| Type | What it does |
|---|---|
| [**Create Item**](/advanced/abilities-and-effects/effects-item/create-item-effect) (`CreateItemEffect`) | Creates items and puts them in the target's inventory, or drops them in the world |
| [**Enchant Equipment**](/advanced/abilities-and-effects/effects-item/enchant-equipment-effect) (`EnchantEquipmentEffect`) | Puts an enchant on the equipment in a slot, like an enchant scroll |

## Utility

| Type | What it does |
|---|---|
| [**Grant Reward**](/advanced/abilities-and-effects/effects-utility/grant-reward-effect) (`GrantRewardEffect`) | Gives the target a *Reward*: abilities, items, currency, effects. Can take it back when the effect ends |
| [**Access Entity Inventory**](/advanced/abilities-and-effects/effects-utility/access-entity-inventory-effect) (`AccessEntityInventoryEffect`) | Opens the inventory of the target, like looting it |
| [**Unlock Interactable**](/advanced/abilities-and-effects/effects-utility/effect-unlock-interactable) (`EffectUnlockInteractable`) | Tries to unlock a locked object, with a base chance that a stat of the caster can raise |

## See also

- [Effects](/basic/abilities-and-effects/effects)
- [Abilities & Effects overview](/basic/abilities-and-effects/)
