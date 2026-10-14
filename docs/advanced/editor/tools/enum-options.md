<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EnumOptions

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Fills the items of an OptionButton from an enum, so a pre-built option button in a scene shows the values of an enum without a list of names to keep up to date.

## Methods

| | |
|---|---|
| `void` | [fill](#method-fill)( `option_button: OptionButton, enum_dictionary: Dictionary` ) *static* |
| `void` | [select_value](#method-select-value)( `option_button: OptionButton, value: int` ) *static* |
| `String` | [words](#method-words)( `enum_name: String` ) *static* |

## Method descriptions

### void fill( option_button: OptionButton, enum_dictionary: Dictionary ) {#method-fill}

The items are the names of the enum, written as words ("PERCENT_INCREASE" becomes "Percent increase"). The id of an item is the value of the enum. Does nothing when the button already has its items

### void select_value( option_button: OptionButton, value: int ) {#method-select-value}

Selects the item of a value

### String words( enum_name: String ) {#method-words}

"PERCENT_INCREASE" -&gt; "Percent increase"

