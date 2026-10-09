<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ExperiencePerLevelEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Editor for experience_per_level Dictionary in GameplayConfig Displays a list of levels with their XP requirements and allows editing

## Variables

| | | |
|---|---|---|
| `HBoxContainer` | [header_row](#var-header-row) |  |
| `Label` | [header_label](#var-header-label) |  |
| `Button` | [reset_button](#var-reset-button) |  |
| `ItemList` | [experience_list](#var-experience-list) |  |
| `Button` | [edit_button](#var-edit-button) |  |
| `Label` | [info_label](#var-info-label) |  |
| `Dictionary` | [current_experience_dict](#var-current-experience-dict) | `{}` |
| `int` | [max_level](#var-max-level) | `50` |
| `GameplayConfig` | [gameplay_config](#var-gameplay-config) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `config: GameplayConfig` ) |
| `void` | [load_experience_data](#method-load-experience-data)( `experience_dict: Dictionary, p_max_level: int` ) |
| `Dictionary` | [get_experience_data](#method-get-experience-data)() |

## Signals

### experience_changed( new_dictionary: Dictionary ) {#signal-experience-changed}

## Variable descriptions

### HBoxContainer header_row {#var-header-row}

*No description yet.*

### Label header_label {#var-header-label}

*No description yet.*

### Button reset_button {#var-reset-button}

*No description yet.*

### ItemList experience_list {#var-experience-list}

*No description yet.*

### Button edit_button {#var-edit-button}

*No description yet.*

### Label info_label {#var-info-label}

*No description yet.*

### Dictionary current_experience_dict =  {#var-current-experience-dict}

&#123;level: xp_required&#125;

### int max_level = 50 {#var-max-level}

*No description yet.*

### GameplayConfig gameplay_config {#var-gameplay-config}

Reference to the config for default formula

## Method descriptions

### void setup( config: GameplayConfig ) {#method-setup}

*No description yet.*

### void load_experience_data( experience_dict: Dictionary, p_max_level: int ) {#method-load-experience-data}

*No description yet.*

### Dictionary get_experience_data() {#method-get-experience-data}

*No description yet.*

