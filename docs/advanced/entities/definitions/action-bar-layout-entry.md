<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActionBarLayoutEntry

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One planned slot of the action bar of a player class: the ability that belongs on a slot, and whether the player may change that slot. The ability does not have to be known yet: the slot waits for it, and the ability goes there the moment it is learned (a level, a quest, a trainer, a skill tree).

## Properties

| | | |
|---|---|---|
| `int` | [slot_number](#prop-slot-number) | `1` |
| `int` | [ability_id](#prop-ability-id) | `0` |
| `bool` | [locked](#prop-locked) | `false` |

## Methods

| | |
|---|---|
| `String` | [describe](#method-describe)() |

## Property descriptions

### int slot_number = 1 {#prop-slot-number}

The slot (1 is the first)

### int ability_id = 0 {#prop-ability-id}

The ability that belongs on the slot. 0 = the slot stays empty (with the lock, a slot the player cannot use)

### bool locked = false {#prop-locked}

The player cannot put anything on this slot or take anything off it. A locked slot keeps its plan: if its ability is forgotten and learned again it goes back

## Method descriptions

### String describe() {#method-describe}

*No description yet.*

