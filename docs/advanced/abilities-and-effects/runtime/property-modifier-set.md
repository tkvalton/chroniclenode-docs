<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PropertyModifierSet

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The modifiers on the properties of one ability, use strategy or targeting strategy (cooldown, cost, cast time, range ...).

## Methods

| | |
|---|---|
| `void` | [add](#method-add)( `source: Variant, property: String, calculation: int, value: float` ) |
| `void` | [remove_source](#method-remove-source)( `source: Variant, property: String = ""` ) |
| `bool` | [has_property](#method-has-property)( `property: String` ) |
| `bool` | [is_empty](#method-is-empty)() |
| `void` | [clear](#method-clear)() |
| `float` | [resolve](#method-resolve)( `property: String, base: float, extra: Array = []` ) |

## Method descriptions

### void add( source: Variant, property: String, calculation: int, value: float ) {#method-add}

Adds a modifier. `source` is anything that identifies the origin (an effect instance, a stat effect, a string)

### void remove_source( source: Variant, property: String = "" ) {#method-remove-source}

Takes away every modifier a source put on (one property, or all of its properties)

### bool has_property( property: String ) {#method-has-property}

*No description yet.*

### bool is_empty() {#method-is-empty}

*No description yet.*

### void clear() {#method-clear}

*No description yet.*

### float resolve( property: String, base: float, extra: Array = [] ) {#method-resolve}

The base value with every modifier of the property applied. `extra` holds entries of the same shape that are not stored in the set (the ability modifiers of an entity's stats are worked out live from its stats)

