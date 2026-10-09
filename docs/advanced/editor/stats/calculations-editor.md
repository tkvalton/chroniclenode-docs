<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CalculationsEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Main calculations editor - manages priority ordering for all calculation types

## Variables

| | | |
|---|---|---|
| `CombatCalculations` | [combat_calculations](#var-combat-calculations) |  |
| `Dictionary` | [current_selection](#var-current-selection) | `{}  # {stat_def, effect, list_type}` |
| `Array[CalculationList]` | [all_lists](#var-all-lists) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_combat_calculations: CombatCalculations` ) |
| `void` | [setup_managers](#method-setup-managers)( `_resource_manager: ResourceManager = null` ) |
| `void` | [refresh_all](#method-refresh-all)() |
| `void` | [refresh_current_tab](#method-refresh-current-tab)() |

## Signals

### priority_changed( stat_def: StatDefinition, effect: CalculationModifierStatEffect ) {#signal-priority-changed}

### stat_editor_requested( stat_def: StatDefinition ) {#signal-stat-editor-requested}

## Variable descriptions

### CombatCalculations combat_calculations {#var-combat-calculations}

*No description yet.*

### Dictionary current_selection =   # stat_def, effect, list_type {#var-current-selection}

*No description yet.*

### Array[CalculationList] all_lists = [] {#var-all-lists}

*No description yet.*

## Method descriptions

### void setup( p_combat_calculations: CombatCalculations ) {#method-setup}

*No description yet.*

### void setup_managers( _resource_manager: ResourceManager = null ) {#method-setup-managers}

The game editor hands every editor its managers once; the lists fill from the stat definitions then, and again whenever the tab is shown (the stats are edited in another tab)

### void refresh_all() {#method-refresh-all}

*No description yet.*

### void refresh_current_tab() {#method-refresh-current-tab}

*No description yet.*

