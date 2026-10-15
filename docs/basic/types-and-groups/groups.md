# Groups

<Shot name="groups-editor" caption="The Groups editor (Types & Groups > Groups)." />

**Groups** label effects, abilities and items so they can share a rule: a [cooldown](/basic/keywords#cooldown) that potions share, a limit of one food buff, ammo that fits any bow. You make them in this editor and use them in the **Groups** field of the Effects, Abilities and Items editors.

Groups are one of ChronicleNode's shared systems, and the full page is [Groups](/basic/shared-systems/groups): the four jobs (exclusive effects, shared cooldown, matching, enchant slots), the scopes and all the fields.

They are not [stat groups](/basic/entity-stats/stat-groups), which are the sections of the character sheet.

## What the editor holds

| Part | What it is |
|---|---|
| **Name**, **Description**, **Icon**, **Color** | What the lists and tooltips show |
| **Exclusive effects** | **Max active**, **Scope**, **When full**, **Persists through death**: how many effects of the group can be on at once |
| **Shared cooldown** | **Shares cooldown** and **Shared cooldown duration**: using one member puts the others on cooldown |

A group does nothing until something is **in** it. Putting something in a group is done on the other side: the **Groups** field of an effect, an ability or an item.

## Example: potions that share a cooldown

1. In **Types & Groups > Groups** click **Add** and name the group `Potion`.
2. Turn on **Shares cooldown** and set **Shared cooldown duration** to `30`.
3. In **Items > Items** open a health potion and a mana potion, and add the group `Potion` to the **Groups** of each.
4. In play, drinking either potion puts both on a 30 second cooldown.

## Example: one food buff at a time

1. Make a group `Well Fed` with **Max active** `1`, **Scope** *Target* and **When full** *Replace*.
2. Put the effect of every food in the group, in the **Groups** field of the effect.
3. A character who eats a second meal loses the first buff: the new one replaces the oldest.

## Common mistakes

| What happens | Why |
|---|---|
| The group does nothing | Nothing is in it: the **Groups** field of the effects, abilities or items must name it |
| The potions do not share a cooldown | **Shares cooldown** is off, or one of the potions was not put in the group |
| Two food buffs stay on | **Max active** is `0` (no limit: the group is only a label) or the **Scope** is not the one you meant |
| A limit applies to the wrong thing | Read the [scopes](/basic/shared-systems/groups#exclusive-effects): *Target*, *Originator on target*, *Originator* and *Item* count different things |
