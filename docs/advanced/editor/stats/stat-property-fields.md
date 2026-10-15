<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatPropertyFields

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Builders for the editor rows that are shared by the stat effect editor, the growth editor, the effect editor and the trigger tag / entity tag tabs: numbers, switches, enums, database pickers, lists of ids, trigger rules, conditions, and a reflection that shows the exports of any resource.

## Description

Every builder adds its rows to `container` and calls `on_changed` (no arguments) after it changed the resource. `rebuild` is called when the change alters which rows should exist (a picked class, an added rule). See docs/systems/entity-stats.md, section 24.4.

## Variables

| | | |
|---|---|---|
| `DialogManager` | [dialog_manager](#var-dialog-manager) | `null` |

## Methods

| | |
|---|---|
| `SpinBox` | [add_float](#method-add-float)( `container: Container, label_text: String, value: float, on_changed: Callable` ) *static* |
| `SpinBox` | [add_int](#method-add-int)( `container: Container, label_text: String, value: int, on_changed: Callable` ) *static* |
| `CheckBox` | [add_bool](#method-add-bool)( `container: Container, label_text: String, value: bool, on_changed: Callable` ) *static* |
| `LineEdit` | [add_string](#method-add-string)( `container: Container, label_text: String, value: String, on_changed: Callable` ) *static* |
| `OptionButton` | [add_enum](#method-add-enum)( `container: Container, label_text: String, value: int, hint_string: String, on_changed: Callable` ) *static* |
| `void` | [add_curve](#method-add-curve)( `container: Container, label_text: String, resource: Resource, property_name: String, on_changed: Callable` ) *static* |
| `void` | [add_vfx_selection](#method-add-vfx-selection)( `container: Container, label_text: String, current: VFXSelection, on_picked: Callable` ) *static* |
| `void` | [add_sfx_selection](#method-add-sfx-selection)( `container: Container, label_text: String, current: SFXSelection, on_picked: Callable` ) *static* |
| `OptionButton` | [add_database_picker](#method-add-database-picker)( `container: Container, label_text: String, database_type: String, current: Resource, none_text: String, on_changed: Callable` ) *static* |
| `IdMultiSelect` | [add_id_checklist](#method-add-id-checklist)( `container: Container, label_text: String, database_type: String, ids: Array, on_changed: Callable, single: bool = false` ) *static* |
| `void` | [add_id_picker](#method-add-id-picker)( `container: Container, label_text: String, database_type: String, ids: Array, on_changed: Callable` ) *static* |
| `void` | [add_enum_checklist](#method-add-enum-checklist)( `container: Container, label_text: String, hint_names: Array, values: Array, on_changed: Callable` ) *static* |
| `void` | [add_resource_fields](#method-add-resource-fields)( `container: Container, resource: Resource, on_changed: Callable, skipped: Array[String] = [], rebuild: Callable = Callable()` ) *static* |
| `void` | [add_trigger_rules](#method-add-trigger-rules)( `container: Container, rules: Array, on_changed: Callable, rebuild: Callable` ) *static* |
| `void` | [add_conditions](#method-add-conditions)( `container: Container, conditions: Array, on_changed: Callable, rebuild: Callable, help_text: String = ""` ) *static* |
| `void` | [add_scaling_rules](#method-add-scaling-rules)( `container: Container, rules: Array, on_changed: Callable, rebuild: Callable` ) *static* |
| `void` | [add_effect_amount](#method-add-effect-amount)( `container: Container, amount: EffectAmount, on_changed: Callable, rebuild: Callable` ) *static* |
| `StatEffect` | [make_stat_effect](#method-make-stat-effect)( `choice: int` ) *static* |
| `void` | [show_add_stat_effect_dialog](#method-show-add-stat-effect-dialog)( `on_chosen: Callable` ) *static* |

## Constants

- `float` **LABEL_WIDTH** = `170.0`
- `Array[String]` **SKIPPED** = `["script", "resource_local_to_scene", "resource_name", "resource_path"]` - Properties of every resource that are never shown
- `Array[String]` **CATALOG_TYPES** = `["ability", "effect"]` - Databases that are always picked from a catalog (there can be hundreds), and the size from which any other database is
- `int` **CATALOG_FROM_ENTRIES** = `10`
- `String` **ID_MULTI_SELECT_SCENE** = `"res://addons/chroniclenode/editor_components/controls/id_multi_select.tscn"` - The scene of the multi select: the picked entries as tags and a searchable list to add from
- `String` **AMOUNT_KIND_HINT** = `"Stat of the user:0,Weapon damage:1,Target max health:2,Target current health...`
- `Array[String]` **STAT_EFFECT_CHOICES** = `[` - The kinds of stat effect, in the order of the dialog and of make_stat_effect

## Variable descriptions

### DialogManager dialog_manager = null {#var-dialog-manager}

The editors give the catalogs to the builders once, so a long list of ids can be picked from a catalog instead of ticked in a wall of switches

## Method descriptions

### SpinBox add_float( container: Container, label_text: String, value: float, on_changed: Callable ) {#method-add-float}

*No description yet.*

### SpinBox add_int( container: Container, label_text: String, value: int, on_changed: Callable ) {#method-add-int}

*No description yet.*

### CheckBox add_bool( container: Container, label_text: String, value: bool, on_changed: Callable ) {#method-add-bool}

*No description yet.*

### LineEdit add_string( container: Container, label_text: String, value: String, on_changed: Callable ) {#method-add-string}

*No description yet.*

### OptionButton add_enum( container: Container, label_text: String, value: int, hint_string: String, on_changed: Callable ) {#method-add-enum}

An enum: `hint_string` is the property hint of an exported enum ("Name:value,Name:value", values optional)

### void add_curve( container: Container, label_text: String, resource: Resource, property_name: String, on_changed: Callable ) {#method-add-curve}

*No description yet.*

### void add_vfx_selection( container: Container, label_text: String, current: VFXSelection, on_picked: Callable ) {#method-add-vfx-selection}

A picker for a resource of a database type (trigger tag, entity tag ...). The current value is the resource itself (null = `none_text`). Returns the OptionButton A row for a visual effect (a VFXSelection): a button that says what is set and opens the visual effect dialog, and a Clear button. `on_picked` gets the selection (null when cleared)

### void add_sfx_selection( container: Container, label_text: String, current: SFXSelection, on_picked: Callable ) {#method-add-sfx-selection}

A row for a sound (an SFXSelection): a button that says what is set and opens the sound dialog, and a Clear button. `on_picked` gets the selection (null when cleared)

### OptionButton add_database_picker( container: Container, label_text: String, database_type: String, current: Resource, none_text: String, on_changed: Callable ) {#method-add-database-picker}

*No description yet.*

### IdMultiSelect add_id_checklist( container: Container, label_text: String, database_type: String, ids: Array, on_changed: Callable, single: bool = false ) {#method-add-id-checklist}

A list of database ids (Array[int]) picked from a database type: the groups of an ability, the types of an entity, the tags of a condition. The picked entries show as tags with an x and an Add button opens a searchable list, so it reads the same with three entries or three hundred. The array is changed in place. `single` lets it hold one id (an entity has one type). Returns the control

### void add_id_picker( container: Container, label_text: String, database_type: String, ids: Array, on_changed: Callable ) {#method-add-id-picker}

A list of ids picked from the catalog: an Add button that opens the catalog of the database type, and the picked entries with a button to take each away. The list `ids` is changed in place

### void add_enum_checklist( container: Container, label_text: String, hint_names: Array, values: Array, on_changed: Callable ) {#method-add-enum-checklist}

A list of enum values (Array[int]) as one switch per value: the calculations a trigger or tag applies to

### void add_resource_fields( container: Container, resource: Resource, on_changed: Callable, skipped: Array[String] = [], rebuild: Callable = Callable() ) {#method-add-resource-fields}

Shows the exported properties of `resource` as rows. Nested resources of known kinds get their pickers (a trigger tag), arrays of database ids get switches, everything else that is a number, text, switch or enum gets a field. `skipped` are property names to leave out

### void add_trigger_rules( container: Container, rules: Array, on_changed: Callable, rebuild: Callable ) {#method-add-trigger-rules}

The editor of a list of TriggerRule resources (Effect.trigger_rules). `rules` is changed in place

### void add_conditions( container: Container, conditions: Array, on_changed: Callable, rebuild: Callable, help_text: String = "" ) {#method-add-conditions}

The editor of a list of conditions (StatEffect.conditions). `conditions` is changed in place

### void add_scaling_rules( container: Container, rules: Array, on_changed: Callable, rebuild: Callable ) {#method-add-scaling-rules}

The editor of a list of EffectScalingRule resources (Effect.scaling_rules): more damage or healing by what the target is like. `rules` is changed in place

### void add_effect_amount( container: Container, amount: EffectAmount, on_changed: Callable, rebuild: Callable ) {#method-add-effect-amount}

The editor of an EffectAmount (damage, healing and stat modifier effects): the base, the spread and the parts that are read when the effect runs. `amount` is changed in place

### StatEffect make_stat_effect( choice: int ) {#method-make-stat-effect}

A new stat effect of the kind (an index of STAT_EFFECT_CHOICES), or null

### void show_add_stat_effect_dialog( on_chosen: Callable ) {#method-show-add-stat-effect-dialog}

The dialog that asks for the kind of a new stat effect (the Stats editor and the Proficiencies editor use it). on_chosen gets the new effect

