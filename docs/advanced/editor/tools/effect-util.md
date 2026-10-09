<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectUtil

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Methods

| | |
|---|---|
| `String` | [get_effect_display_name](#method-get-effect-display-name)( `effect_type: String` ) *static* |
| `Dictionary` | [get_effect_categories_from_map](#method-get-effect-categories-from-map)() *static* |
| `bool` | [inherits_from](#method-inherits-from)( `effect_type: String, parent_class: String` ) *static* |
| `bool` | [is_composite_type](#method-is-composite-type)( `effect_type: String` ) *static* |
| `Array` | [get_inheritance_chain](#method-get-inheritance-chain)( `effect_type: String` ) *static* |
| `Array` | [get_children_of](#method-get-children-of)( `parent_class: String` ) *static* |
| `Array` | [get_direct_children_of](#method-get-direct-children-of)( `parent_class: String` ) *static* |
| `String` | [get_immediate_parent](#method-get-immediate-parent)( `effect_type: String` ) *static* |
| `bool` | [is_base_class](#method-is-base-class)( `effect_type: String` ) *static* |
| `String` | [get_effect_type](#method-get-effect-type)( `effect: Effect` ) *static* |
| `String` | [get_effect_script_path](#method-get-effect-script-path)( `effect_type: String` ) *static* |
| `bool` | [is_hidden_effect](#method-is-hidden-effect)( `effect_type: String` ) *static* |
| `int` | [count_types_built_on](#method-count-types-built-on)( `base_class: String` ) *static* |
| `Array` | [get_available_effect_types](#method-get-available-effect-types)() *static* |
| `Array` | [get_all_effect_types](#method-get-all-effect-types)() *static* |
| `Array` | [get_effect_types_by_category](#method-get-effect-types-by-category)( `category: String` ) *static* |
| `Array` | [get_effect_categories](#method-get-effect-categories)() *static* |
| `Dictionary` | [scan_effects_directory](#method-scan-effects-directory)() *static* |
| `Dictionary` | [get_all_effect_types_with_custom](#method-get-all-effect-types-with-custom)() *static* |
| `Array` | [get_effect_categories_with_custom](#method-get-effect-categories-with-custom)() *static* |
| `Array` | [get_effect_types_by_category_with_custom](#method-get-effect-types-by-category-with-custom)( `category: String` ) *static* |

## Constants

- `String` **EFFECT_RESOURCES_PATH** = `"res://src/data/effects/"`
- `String` **EFFECT_PROPERTIES_PATH** = `"res://addons/chroniclenode/components/effect_properties/"`
- `String` **EFFECTS_SCRIPTS_PATH** = `"res://addons/chroniclenode/data_classes/effects/"`
- `Dictionary` **EffectScriptMap** = `{`
- `Dictionary` **EffectDisplayNames** = `{` - Names shown in the editor instead of the class name (the class name stays: saved effects refer to the script)
- `Dictionary` **EffectInheritance** = `{`
- `Array` **HiddenEffects** = `[` - Base classes in the root effects folder — not intended for direct use in the editor (CompositeEffect is not one: it lives in the composite folder and can be chosen). Effects in subfolders are considered concrete and will appear in the picker.

## Method descriptions

### String get_effect_display_name( effect_type: String ) {#method-get-effect-display-name}

*No description yet.*

### Dictionary get_effect_categories_from_map() {#method-get-effect-categories-from-map}

Derive effect categories from EffectScriptMap subfolder structure. Returns &#123; category_display_name: [effect_type_strings] &#125;

### bool inherits_from( effect_type: String, parent_class: String ) {#method-inherits-from}

Check if an effect type inherits from a specific parent class

### bool is_composite_type( effect_type: String ) {#method-is-composite-type}

Is this type the composite effect or built on it (does it hold child effects)?

### Array get_inheritance_chain( effect_type: String ) {#method-get-inheritance-chain}

Get all parent classes for an effect type (ordered from immediate parent to base)

### Array get_children_of( parent_class: String ) {#method-get-children-of}

Get all effect types that inherit from a specific parent class

### Array get_direct_children_of( parent_class: String ) {#method-get-direct-children-of}

Get immediate children (direct inheritance only)

### String get_immediate_parent( effect_type: String ) {#method-get-immediate-parent}

Get the immediate parent of an effect type

### bool is_base_class( effect_type: String ) {#method-is-base-class}

Check if effect type is a base class (has children)

### String get_effect_type( effect: Effect ) {#method-get-effect-type}

Get effect type string from effect resource

### String get_effect_script_path( effect_type: String ) {#method-get-effect-script-path}

Get script path for effect type

### bool is_hidden_effect( effect_type: String ) {#method-is-hidden-effect}

Returns true if an effect type is a hidden base class not intended for direct use

### int count_types_built_on( base_class: String ) {#method-count-types-built-on}

How many effect types of the picker are built on `base_class` (they extend it, directly or through other types)

### Array get_available_effect_types() {#method-get-available-effect-types}

Get available effect types (sorted), excluding hidden base classes

### Array get_all_effect_types() {#method-get-all-effect-types}

Get all effect types including hidden base classes

### Array get_effect_types_by_category( category: String ) {#method-get-effect-types-by-category}

Get effect types for a named category

### Array get_effect_categories() {#method-get-effect-categories}

Get all category display names (sorted)

### Dictionary scan_effects_directory() {#method-scan-effects-directory}

Scans subfolders for effect scripts not present in EffectScriptMap. Returns &#123; category_display_name: [effect_type_strings] &#125; for custom effects only.

### Dictionary get_all_effect_types_with_custom() {#method-get-all-effect-types-with-custom}

Get all effect types including any custom effects found by directory scan, merged into their respective categories. Returns &#123; category: [effect_types] &#125;.

### Array get_effect_categories_with_custom() {#method-get-effect-categories-with-custom}

Get all category names including any categories from custom effects

### Array get_effect_types_by_category_with_custom( category: String ) {#method-get-effect-types-by-category-with-custom}

Get effect types for a category, including custom effects

