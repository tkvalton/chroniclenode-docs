# Crowd control

Crowd control stops an entity from doing something for a while: it cannot move, cast, attack or think straight. In ChronicleNode a crowd-control effect is a **Status** effect, and the kind of control comes from a **status effect definition** that you make in **Abilities & Effects > [Status Effects](/basic/abilities-and-effects/status-effects)**.

## The pieces

| Piece | Where | What it is |
|---|---|---|
| **Status effect definition** | *Abilities & Effects > [Status Effects](/basic/abilities-and-effects/status-effects)* | The condition itself: which kind it is, its diminishing returns, its [immunity](/basic/tags-and-groups/immunities) and whether damage breaks it |
| **Status effect** | *Abilities & Effects > Effects*, type **Status** | An effect that puts a status definition on a target, for a duration |
| **Interrupt** | *Effects*, type **Interrupt** | Stops the cast or channel in progress. It applies no lasting status |
| **School lock** | *Effects*, type **School Lock** | Locks all abilities of one school, such as a counterspell |

## The kinds of status

A definition is built on one of eight **base status types** that ChronicleNode ships with: *Incapacitate*, *Root*, *Silence*, *Disarm*, *Cripple*, *Blind*, *Flee* and *Disorient*. They are the kinds of control the code knows how to apply; the definitions you make (a *Stun*, a *Frozen*) each pick one. What each kind does, and how to make definitions of your own, is on the [Status Effects](/basic/abilities-and-effects/status-effects) page, together with diminishing returns, immunity and breaking on damage.

## Making a stun

1. In **Abilities & Effects > Status Effects**, add a definition named *Stun*, with **Base status type** *Incapacitate*. Keep diminishing returns on.
2. In **Abilities & Effects > Effects**, add an effect, choose the type **Status**, choose the *Stun* definition in its fields, and set a **Duration** (say 4 seconds). The time strategy must be one that lasts, such as *Temporary*.
3. Add the effect to an ability's on-use effects, aimed at an enemy.

## Threat

Crowd control sits next to [threat](/basic/keywords#threat), which decides who an enemy attacks. The **Taunt** and **Threat** effects are described under Keywords > [Threat](/basic/keywords#threat).

## See also

- [Effect types](/basic/abilities-and-effects/effect-types)
- [Effects](/basic/abilities-and-effects/effects)
