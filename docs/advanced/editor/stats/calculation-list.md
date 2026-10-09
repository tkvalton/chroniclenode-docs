<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CalculationList

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Displays all CalculationModifierStatEffects affecting a calculation type Provides intuitive priority management with drag-and-drop reordering

## Variables

| | | |
|---|---|---|
| `int` | [calculation_type](#var-calculation-type) | `0` |
| `Array[Dictionary]` | [effect_entries](#var-effect-entries) | `[]  # [{effect, stat_def, stat_id, priority, order_index}]` |
| `Array[Dictionary]` | [filtered_entries](#var-filtered-entries) | `[]  # Current filtered/sorted view` |
| `TreeItem` | [tree_root](#var-tree-root) |  |
| `Dictionary` | [priority_groups](#var-priority-groups) | `{}  # [priority: TreeItem]` |
| `String` | [search_filter](#var-search-filter) | `""` |
| `bool` | [show_only_conditional](#var-show-only-conditional) | `false` |
| `bool` | [show_only_damage_type_specific](#var-show-only-damage-type-specific) | `false` |
| `SortMode` | [current_sort_mode](#var-current-sort-mode) | `SortMode.BY_PRIORITY` |

## Methods

| | |
|---|---|
| `void` | [collect_effects](#method-collect-effects)() |
| `void` | [refresh](#method-refresh)() |
| `int` | [get_effect_count](#method-get-effect-count)() |
| `Dictionary` | [get_selected_entry](#method-get-selected-entry)() |

## Signals

### effect_priority_changed( stat_def: StatDefinition, effect: CalculationModifierStatEffect, old_priority: int, new_priority: int ) {#signal-effect-priority-changed}

### effect_selected( stat_def: StatDefinition, effect: CalculationModifierStatEffect ) {#signal-effect-selected}

### effect_double_clicked( stat_def: StatDefinition ) {#signal-effect-double-clicked}

## Enumerations

### enum SortMode {#enum-sortmode}

- **BY_PRIORITY** = `0`
- **BY_STAT_NAME** = `1`
- **BY_EFFECT_TYPE** = `2`

### enum MenuAction {#enum-menuaction}

Context menu IDs

- **SET_PRIORITY** = `0`
- **INCREASE_PRIORITY** = `1`
- **DECREASE_PRIORITY** = `2`
- **RESET_PRIORITY** = `3`
- **MOVE_TO_PRIORITY_GROUP** = `4`
- **EDIT_STAT** = `5`
- **COPY_EFFECT** = `6`
- **VIEW_DEPENDENCIES** = `7`

## Constants

- `const` **CALC_TYPE_DAMAGE_DONE** = `0` - Calculation type enum mapping
- `const` **CALC_TYPE_DAMAGE_TAKEN** = `1`
- `const` **CALC_TYPE_HEALING_DONE** = `2`
- `const` **CALC_TYPE_HEALING_TAKEN** = `3`

## Variable descriptions

### int calculation_type = 0 {#var-calculation-type}

*No description yet.*

### Array[Dictionary] effect_entries = []  # [effect, stat_def, stat_id, priority, order_index] {#var-effect-entries}

Effect data cache

### Array[Dictionary] filtered_entries = []  # Current filtered/sorted view {#var-filtered-entries}

*No description yet.*

### TreeItem tree_root {#var-tree-root}

Tree organization

### Dictionary priority_groups =   # [priority: TreeItem] {#var-priority-groups}

*No description yet.*

### String search_filter = "" {#var-search-filter}

Filter state

### bool show_only_conditional = false {#var-show-only-conditional}

*No description yet.*

### bool show_only_damage_type_specific = false {#var-show-only-damage-type-specific}

*No description yet.*

### SortMode current_sort_mode = SortMode.BY_PRIORITY {#var-current-sort-mode}

*No description yet.*

## Method descriptions

### void collect_effects() {#method-collect-effects}

Collect all effects from database for this calculation type

### void refresh() {#method-refresh}

*No description yet.*

### int get_effect_count() {#method-get-effect-count}

*No description yet.*

### Dictionary get_selected_entry() {#method-get-selected-entry}

*No description yet.*

