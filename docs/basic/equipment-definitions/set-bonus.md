# Set Bonus

<Shot name="set-bonus-editor" caption="The Set Bonus editor (Equipment Definitions > Set Bonus)." />

A **set** is a group of equipment pieces that is better worn together: Dragonscale Helm, Chest and Boots. Each **bonus** of the set is an [effect](/basic/abilities-and-effects/effects) that switches on when the wearer has a number of the pieces on.

## Fields

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Icon**, **Color** | The name of the set, shown in tooltips |
| **Set bonuses** (*Add Bonus*) | A **piece count** and an **effect**. At that many worn pieces the effect is applied; below it the effect is removed |
| **Set items** | The equipment pieces of the set |

## Bonuses

Each bonus is a number of pieces and an effect:

| Pieces | Effect |
|---|---|
| 2 | +10 armor |
| 4 | +5 % critical strike |
| 6 | A proc that explodes on a critical hit |

The bonuses **stack**: with six pieces the 2, 4 and 6 bonuses are all on. Taking one piece off removes exactly the bonuses that need more pieces than are left, and nothing else. Every worn piece that names the set counts as one.

The effect of a bonus can be anything an [effect](/basic/abilities-and-effects/effects) can be: a [stat modifier](/basic/abilities-and-effects/effect-types), an [Ability Boost](/basic/abilities-and-effects/effect-amount#boosting-some-abilities), a proc, a [Proficiency Effect](/basic/entity-stats/proficiencies#the-proficiency-effect) that raises a skill.

## Putting items in a set

The link goes both ways. Set the **Set bonus** field of an [equipment item](/basic/items/items#equipment) and the item is in the set's list. The set editor checks the two sides and offers to repair a link that is only on one side.

The editor's checks report: a set with no name, no bonus or no pieces, a piece count that is not a positive number, a bonus whose effect does not exist, an item that does not exist or is in the set twice, and a bonus that needs more pieces than the set has.

## See also

- [Items](/basic/items/items#equipment), [Effects](/basic/abilities-and-effects/effects), [Quality](/basic/equipment-definitions/quality)
