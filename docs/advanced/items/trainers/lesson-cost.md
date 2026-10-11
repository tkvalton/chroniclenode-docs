<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LessonCost

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

What a lesson of a trainer costs: any mix of money, items and skill points. The learner pays: money and items come out of the bag of the character who learns (the shared bag when the party shares it), skill points out of the skill pools of that character.

## Description

A cost is all or nothing: a character who cannot pay all of it pays nothing. A price multiplier (from a formula of the lesson, from the standing with the trainer) scales every amount, rounded up. See docs/systems/skill-trainers.md, section 3.2.

## Properties

| | | |
|---|---|---|
| `Dictionary` | [currencies](#prop-currencies) | `{}` |
| `Dictionary` | [items](#prop-items) | `{}` |
| `Dictionary` | [skill_points](#prop-skill-points) | `{}` |

## Methods

| | |
|---|---|
| `bool` | [is_free](#method-is-free)() |
| `int` | [scaled](#method-scaled)( `amount: int, multiplier: float` ) *static* |
| `String` | [get_blocker](#method-get-blocker)( `player: Player, multiplier: float = 1.0` ) |
| `bool` | [pay](#method-pay)( `player: Player, multiplier: float = 1.0` ) |
| `void` | [refund](#method-refund)( `player: Player, multiplier: float = 1.0` ) |
| `String` | [describe](#method-describe)( `multiplier: float = 1.0` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### Dictionary currencies =  {#prop-currencies}

Money: currency id -&gt; amount

### Dictionary items =  {#prop-items}

Items that are taken from the bag: item id -&gt; how many

### Dictionary skill_points =  {#prop-skill-points}

Skill points that are spent: skill pool id -&gt; points

## Method descriptions

### bool is_free() {#method-is-free}

*No description yet.*

### int scaled( amount: int, multiplier: float ) {#method-scaled}

An amount after the price multiplier, rounded up (never below 1 for an amount above 0)

### String get_blocker( player: Player, multiplier: float = 1.0 ) {#method-get-blocker}

Why the character cannot pay ("" = they can)

### bool pay( player: Player, multiplier: float = 1.0 ) {#method-pay}

Takes the whole cost from the character. False (and nothing is taken) when they cannot pay

### void refund( player: Player, multiplier: float = 1.0 ) {#method-refund}

Gives back what pay took (a lesson that could not be given)

### String describe( multiplier: float = 1.0 ) {#method-describe}

The cost as text: "5 Gold, 2 Iron Ore, 1 Training point". "Free" when there is none

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

