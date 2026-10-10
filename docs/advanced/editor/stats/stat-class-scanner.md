<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatClassScanner

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Finds the classes that can fill a slot of a stat effect: the formulas, the diminishing-returns curves and the conditions. The provided ones live in the addon; a dev adds their own by writing a child class in a PROJECT folder (so updating the addon never overwrites them). The editor lists every class found in both places. See docs/systems/entity-stats.md, sections 18.2 and 24.4.

## Methods

| | |
|---|---|
| `Array[Dictionary]` | [find_formulas](#method-find-formulas)() *static* |
| `Array[Dictionary]` | [find_diminishing_returns](#method-find-diminishing-returns)() *static* |
| `Array[Dictionary]` | [find_conditions](#method-find-conditions)() *static* |
| `Array[Dictionary]` | [find_quality_rules](#method-find-quality-rules)() *static* |
| `Array[Dictionary]` | [scan](#method-scan)( `directories: Array[String], base_path: String` ) *static* |
| `bool` | [extends_script](#method-extends-script)( `script: Script, base_path: String` ) *static* |
| `String` | [label_of](#method-label-of)( `script: Script, file_name: String` ) *static* |

## Constants

- `Array[String]` **FORMULA_DIRS** = `[` - Where formulas are looked for: the addon's, then the project's own
- `String` **FORMULA_BASE** = `"res://addons/chroniclenode/data_classes/stats/formulas/calculation_formula.gd"`
- `Array[String]` **RETURNS_DIRS** = `[`
- `String` **RETURNS_BASE** = `"res://addons/chroniclenode/data_classes/stats/diminishing_returns/diminishin...`
- `Array[String]` **CONDITION_DIRS** = `[` - Conditions that make sense on a stat effect: the ones about an entity (its health, level, tags, effects ...)
- `String` **CONDITION_BASE** = `"res://addons/chroniclenode/data_classes/conditions/entity_condition.gd"`
- `Array[String]` **QUALITY_RULE_DIRS** = `[` - Custom rules of a quality (a class that extends QualityRule): the project's own folder
- `String` **QUALITY_RULE_BASE** = `"res://addons/chroniclenode/data_classes/items/definitions/quality_rule.gd"`

## Method descriptions

### Array[Dictionary] find_formulas() {#method-find-formulas}

Every formula class found, as &#123;label, script, path&#125;

### Array[Dictionary] find_diminishing_returns() {#method-find-diminishing-returns}

*No description yet.*

### Array[Dictionary] find_conditions() {#method-find-conditions}

*No description yet.*

### Array[Dictionary] find_quality_rules() {#method-find-quality-rules}

*No description yet.*

### Array[Dictionary] scan( directories: Array[String], base_path: String ) {#method-scan}

The scripts in `directories` that extend the script at `base_path` (but are not it), as &#123;label, script, path&#125;, sorted by label. A script that does not compile is skipped (a dev's work in progress must not break the editor)

### bool extends_script( script: Script, base_path: String ) {#method-extends-script}

Does `script` extend the script at `base_path` somewhere up its chain?

### String label_of( script: Script, file_name: String ) {#method-label-of}

The name shown in a picker: the class's own label when it has one (get_label), else the file name made readable

