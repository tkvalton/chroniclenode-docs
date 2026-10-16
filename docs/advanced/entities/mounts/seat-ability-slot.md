<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SeatAbilitySlot

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One slot of the action bar that a seat takes over: the ability that is on it while the rider sits. What the rider had on the slot comes back when it gets up.

## Properties

| | | |
|---|---|---|
| `int` | [slot_number](#prop-slot-number) | `1` |
| `int` | [ability_id](#prop-ability-id) | `0` |
| `bool` | [grant_ability](#prop-grant-ability) | `true` |

## Property descriptions

### int slot_number = 1 {#prop-slot-number}

The slot (1 is the first)

### int ability_id = 0 {#prop-ability-id}

The ability that takes the slot (an ability of the Database)

### bool grant_ability = true {#prop-grant-ability}

The rider is given the ability while it sits when it does not know it (the ability goes away when it gets up)

