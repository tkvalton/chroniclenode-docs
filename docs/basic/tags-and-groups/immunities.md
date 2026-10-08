# Immunities

<Shot name="immunities-editor" caption="The Immunities editor (Tags & Groups > Immunities)." />

An **immunity** is protection against a group of things: all fire damage, all stuns, all Arcane abilities. The toolkit ships **True Immunity**. Make the ones your game needs, then give them to entities or switch them on with an effect.

## Fields

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Color**, **Icon** | What the interface shows |
| **Immunity type** | What it protects against: **Damage Type**, **Status Effect** or **School Type** |
| **Protection targets** | The specific [damage types](/basic/tags-and-groups/damage-types), [status effects](/basic/abilities-and-effects/status-effects) or [schools](/basic/tags-and-groups/school-types) to protect against. **Add Protection** adds one and clicking an entry removes it |

An immunity needs at least one target. It can also list **exclusions**: things left out of the protection. An item cannot be both a target and an exclusion.

## Giving an immunity

| Way | What it does |
|---|---|
| **Permanent immunities** in the stats data of a class, NPC or destructible | Always on. A fire elemental is immune to *Fire* |
| **Immunity effect** | Switches an immunity on for the length of the effect, or removes it. A "Divine Shield" ability: all damage types, 8 seconds |
| **Diminishing returns** of a status effect | After enough stuns in a row, a temporary immunity to stun starts. See [Status Effects](/basic/abilities-and-effects/status-effects) |

## What an immunity does

| Type | When it applies |
|---|---|
| **Damage Type** | A hit of that type does nothing. The result is *Immune* |
| **Status Effect** | The status effect cannot be applied |
| **School Type** | Effects of that school (the **School** field of an [effect](/basic/abilities-and-effects/effects)) put on the entity by someone else are refused. Its own effects are not |
