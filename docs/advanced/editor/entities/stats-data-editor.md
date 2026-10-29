<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatsDataEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The editor of a StatsData: the pools (as cards), the stats (a table of the ones that are set, with what the template or the definition says, how they grow and what they are at a level), the core stats, the immunities and, folded away, the level growth. It is the Stats page of the NPC, interactable and player class editors and of the Unique Object panel. It is built in code and takes the place of the older scene editors. Compared with a reference (the template an entity follows, or the definition of a placed one) a value that differs is amber.

## Variables

| | | |
|---|---|---|
| `StatsData` | [current_stats_data](#var-current-stats-data) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Resource` | [template_holder](#var-template-holder) |  |
| `bool` | [is_entity_mode](#var-is-entity-mode) | `true` |
| `StatsData` | [compare_stats](#var-compare-stats) | `null` |
| `String` | [compare_word_override](#var-compare-word-override) | `""` |
| `int` | [preview_level](#var-preview-level) | `10` |
| `OptionButton` | [stat_group_filter_option_button](#var-stat-group-filter-option-button) |  |
| `bool` | [preview_on](#var-preview-on) | `false` |

## Methods

| | |
|---|---|
| `void` | [set_entity_mode](#method-set-entity-mode)( `enabled: bool` ) |
| `void` | [load_stats_data](#method-load-stats-data)( `stats_data: StatsData` ) |
| `void` | [set_template_holder](#method-set-template-holder)( `holder: Resource` ) |
| `void` | [set_compare_stats](#method-set-compare-stats)( `stats: StatsData, word: String = "definition"` ) |
| `void` | [setup_managers](#method-setup-managers)( `_resource_manager: Variant = null, _dialog_manager: Variant = null` ) |

## Signals

### stats_configuration_changed() {#signal-stats-configuration-changed}

### show_info_dialog( title: String, message: String ) {#signal-show-info-dialog}

### show_error_dialog( message: String ) {#signal-show-error-dialog}

## Constants

- `int` **FILTER_SET** = `-3` - The choices of the stat filter: the stats that are set, all of them, one stat group (its id), or the ones in no group
- `int` **FILTER_ALL** = `0`
- `int` **FILTER_NO_GROUP** = `-2`
- `Color` **OVERRIDE_COLOR** = `Color(0.82, 0.6, 0.23, 1.0)`
- `Color` **GROWTH_COLOR** = `Color(0.47, 0.72, 0.64, 1.0)`
- `Color` **DIM** = `Color(1.0, 1.0, 1.0, 0.55)`
- `Array[int]` **CORE_STAT_IDS** = `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` - The core stats are edited under "Combat basics", not in the table (their ids)
- `Array` **CORE_ROWS** = `[` - What "Combat basics" edits: label, the StatsData property or the core stat id, tooltip
- `Dictionary` **CORE_IDS** = `{"movement_speed_base": 1, "attack_speed_base": 2, "global_cooldown_duration_...` - The core stats whose value is read with get_core_value (the id), the others are properties of the StatsData

## Variable descriptions

### StatsData current_stats_data {#var-current-stats-data}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Resource template_holder {#var-template-holder}

The NPC or interactable these stats are of, when it can follow a template (or a placed one that follows its definition)

### bool is_entity_mode = true {#var-is-entity-mode}

Entities have core stats and growth; the stats of an interactable only have pools, stats and immunities

### StatsData compare_stats = null {#var-compare-stats}

What the values are compared with when it is not the template of template_holder (the Unique Object panel gives the definition of an NPC that has no stats of its own yet)

### String compare_word_override = "" {#var-compare-word-override}

*No description yet.*

### int preview_level = 10 {#var-preview-level}

*No description yet.*

### OptionButton stat_group_filter_option_button {#var-stat-group-filter-option-button}

*No description yet.*

### bool preview_on = false {#var-preview-on}

Is the preview on? Then the table has the Growth and At level columns and the pool cards say what they are at the level

## Method descriptions

### void set_entity_mode( enabled: bool ) {#method-set-entity-mode}

Whether this editor is for entities (true) or interactables (false)

### void load_stats_data( stats_data: StatsData ) {#method-load-stats-data}

Loads the StatsData for editing

### void set_template_holder( holder: Resource ) {#method-set-template-holder}

Tells the editor whose stats these are, so that it can show what differs from the template the entity follows. Call before load_stats_data (null: no template)

### void set_compare_stats( stats: StatsData, word: String = "definition" ) {#method-set-compare-stats}

Compares the values with these stats instead of the template of the holder (a placed NPC compares with its definition before it has stats of its own)

### void setup_managers( _resource_manager: Variant = null, _dialog_manager: Variant = null ) {#method-setup-managers}

Kept for the editors that call it (they have nothing to hand over)

