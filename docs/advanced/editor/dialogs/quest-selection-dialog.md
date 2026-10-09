<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestSelectionDialog

**Inherits:** [Window](https://docs.godotengine.org/en/stable/classes/class_window.html)

Dialog for selecting quests to add to questline steps

## Variables

| | | |
|---|---|---|
| `int` | [current_step_number](#var-current-step-number) | `0` |
| `Array[Dictionary]` | [all_quests](#var-all-quests) | `[]` |
| `Array[Dictionary]` | [filtered_quests](#var-filtered-quests) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup_for_step](#method-setup-for-step)( `step_number: int` ) |
| `void` | [popup_centered](#method-popup-centered)( `min_size_override: Vector2i = Vector2i()` ) |
| `void` | [refresh_quest_list](#method-refresh-quest-list)() |
| `void` | [set_search_filter](#method-set-search-filter)( `filter_text: String` ) |
| `int` | [get_quest_count](#method-get-quest-count)() |
| `int` | [get_filtered_quest_count](#method-get-filtered-quest-count)() |

## Signals

### selection_made( quest_id: int, step_number: int ) {#signal-selection-made}

### create_new_quest_requested() {#signal-create-new-quest-requested}

## Variable descriptions

### int current_step_number = 0 {#var-current-step-number}

*No description yet.*

### Array[Dictionary] all_quests = [] {#var-all-quests}

*No description yet.*

### Array[Dictionary] filtered_quests = [] {#var-filtered-quests}

*No description yet.*

## Method descriptions

### void setup_for_step( step_number: int ) {#method-setup-for-step}

*No description yet.*

### void popup_centered( min_size_override: Vector2i = Vector2i() ) {#method-popup-centered}

*No description yet.*

### void refresh_quest_list() {#method-refresh-quest-list}

*No description yet.*

### void set_search_filter( filter_text: String ) {#method-set-search-filter}

*No description yet.*

### int get_quest_count() {#method-get-quest-count}

*No description yet.*

### int get_filtered_quest_count() {#method-get-filtered-quest-count}

*No description yet.*

