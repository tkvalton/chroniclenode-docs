<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ArmorClassBonus

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One bonus of an armor class, in the way of a set bonus: the effects its wearer gets once enough of the pieces they wear are of the class. With 1 piece the effects come with the first piece; with 3 the character needs three pieces of the class (plate boots, plate gloves, a plate helm).

## Properties

| | | |
|---|---|---|
| `int` | [pieces_required](#prop-pieces-required) | `1` |
| `Array[int]` | [effects](#prop-effects) | `[]` |

## Methods

| | |
|---|---|
| `String` | [get_description](#method-get-description)() |

## Property descriptions

### int pieces_required = 1 {#prop-pieces-required}

How many of the worn pieces must be of the armor class (1 or more)

### Array[int] effects = [] {#prop-effects}

The effects (Effect ids) the wearer has while enough pieces are worn. Taking a piece off takes them away again

## Method descriptions

### String get_description() {#method-get-description}

*No description yet.*

