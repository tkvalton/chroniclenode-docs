# Keywords

Small mechanics that come up in many places, each explained in a few lines. When another page uses one of these words, it links here.

Bigger mechanics that many systems share, such as requirements and groups, have their own pages in [Shared systems](/basic/shared-systems/).

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

- **Damage** makes threat, in proportion to the damage dealt. A damage effect has an *aggro multiplier* to make an attack louder or quieter.
- **Healing** makes threat too. The healer's threat is a share of the healing done, split between the enemies fighting the healed entity. The share is *Heal Threat Multiplier* in the Gameplay Config.
- **Taunt** and **Threat** effects change it directly: add threat, reduce it, clear it, put someone at the top of the list, or send it to someone else (*misdirection*). See [Effect types](/basic/abilities-and-effects/effect-types#threat).
