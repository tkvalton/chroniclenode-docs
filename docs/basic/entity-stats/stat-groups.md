# Stat Groups

<Shot name="stat-groups-editor" caption="The Stat Groups editor (Entity Stats > Stat Groups)." />

A **stat group** is a section for [stats](/basic/entity-stats/stats): Primary, Secondary, Offensive, Defensive, Utility. A new project starts with these seven:

| Group | What it holds |
|---|---|
| **Core** | The engine's own stats: movement speed, attack speed, cast speed, carry weight ... |
| **Primary** | The main attributes of a character: Strength, Agility, Intellect |
| **Secondary** | Stats that come from the primary ones or from gear: crit, haste |
| **Offensive** | Stats that make an entity hit harder |
| **Defensive** | Stats that make an entity harder to hurt: armor, block, dodge |
| **Utility** | Movement, resource and other stats that are neither |
| **Hidden** | Stats without a row on the character sheet: the weapon stats, internal numbers |

## Fields

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Color**, **Icon** | What the interface shows |
| **Order (low comes first)** | Where the heading of the group comes on the character sheet |
| **Hide its stats from the sheet and tooltips** | A stat in this group has no row on the sheet or in tooltips |

The editor also lists **Stats in this group**. A stat joins a group in the [Stats editor](/basic/entity-stats/stats#stat-groups), not here.

## What a group does

1. **Layout.** The character sheet and item tooltips put the stats under the headings of their groups, in order. A stat in several groups is listed once, under the first of its visible groups. A stat in no group is listed last, under "Other".
2. **Targets.** A **Stat Modifier** effect can name a group instead of one stat. "All Primary stats +10 %" is one effect. It changes the stats of the group that the target has.
3. **Hiding.** A stat in a group that hides its stats has no row at all.

A group changes nothing about how a stat is calculated.

Stat groups are not the same as [Groups](/basic/types-and-groups/groups), which label effects, abilities and items.
