# Keywords

Small mechanics that come up in many places, each explained in a few lines. When another page uses one of these words, it links here.

Bigger mechanics that many systems share, such as [requirements](/basic/shared-systems/requirements) and groups, have their own pages in [Shared systems](/basic/shared-systems/).

::: warning Work in progress
This list is growing. Entries are added as the pages that use them are written.
:::

## Global cooldown

A short pause that is shared by abilities. When an ability that is *on the global cooldown* is used, it starts the global cooldown, and until it ends no other ability that is on the global cooldown can be used. Abilities that are *not* on it can still be used.

Its length is the *Global Cooldown* core stat of the entity that used the ability: set it in **Entity Stats > Stats** (2 seconds in the demo), give a class or an NPC its own base value, and let stats such as haste shorten it. You choose per ability with **On global cooldown** in the [Abilities editor](/basic/abilities-and-effects/abilities#general-properties). It is separate from an ability's own [cooldown](#cooldown).

## Cooldown

The time before the *same* ability can be used again. Each ability has its own, set with **Cooldown duration** (or the weapon's attack speed, with **Use weapon speed as cooldown**). Abilities in a group that *shares its cooldown* go on cooldown together. See [Groups](/basic/shared-systems/groups).

## Threat

The number that decides who an enemy attacks. Every hostile non-player character keeps a list of the entities it is fighting and how much *threat* each one has made. It attacks the one with the most.

- **Damage** makes threat, in proportion to the damage dealt. A damage effect has an *threat multiplier* to make an attack louder or quieter.
- **Healing** makes threat too. The healer's threat is a share of the healing done, split between the enemies fighting the healed entity. The share is *Heal Threat Multiplier* in the [Gameplay Config](/basic/game-settings/gameplay-config).
- Any other effect makes none by itself. To make threat with it, put a **Threat** effect beside it in the ability, with the mode **Add**.

The whole system can be switched off in the [Gameplay Config](/basic/game-settings/gameplay-config) with **Use threat system**. Off, enemies attack the nearest of the entities that are fighting them, damage and healing make no threat to compare, and only a **Taunt** still forces a target. Turn it off for a game without tank and healer roles.

Two [effect types](/basic/abilities-and-effects/effect-types) change threat directly:

- **Taunt** ([`TauntEffect`](/advanced/abilities-and-effects/effects-status-and-control/taunt-effect)) makes an NPC attack the caster whatever its threat table says. When it ends, the caster's threat is put at the top so the NPC stays on them. A player or a companion gets the caster selected and locked on until the taunt ends. Give it a duration.
- **Threat** ([`ThreatEffect`](/advanced/abilities-and-effects/effects-status-and-control/threat-effect)) can add or reduce an entity's threat, clear it, or put it at the top. Its **Redirect** mode, with a duration, makes the threat an entity generates go to someone else: **misdirection**. Put the effect on the caster, aimed at the tank, and the caster's threat goes to the tank. **Redirect Percent** decides how much of it goes, from 1 to 100.

## Aura

A running effect that is shown to the player on the buff and debuff bars, the nameplates and the unit frames. It is not a type of effect: any effect becomes an aura when its **Show as buff/debuff** is on. It also decides what a **Clear** effect that removes buffs or debuffs can reach, because only auras can be cleared that way. See [Child effects and auras](/basic/abilities-and-effects/child-effects-and-auras) for choosing which effect of a chain is the aura.

## Stacks

The count of one effect on one target. Applying an effect that is already running can add a *stack* to it instead of starting a second copy, when the effect's stacking rule is **Per originator** or **Global**. More stacks can mean a stronger effect, and the effect holds up to its **Max stacks**. See [Stacking and groups](/basic/abilities-and-effects/stacking-and-groups).

## Originator and target

The *originator* of an effect is the entity that causes it: the caster of the ability, or the owner of the item or the trap. Its *target* is the entity it lands on. Most effects land on the target, and an effect with **Applies to** set to Self lands on the originator. The [scaling rules](/basic/abilities-and-effects/scaling-and-trigger-rules) named *Originator …* (the caster's health, the caster's pool) read the originator.
