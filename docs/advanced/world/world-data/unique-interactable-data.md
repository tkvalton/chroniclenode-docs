<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UniqueInteractableData

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Properties

| | | |
|---|---|---|
| `String` | [interactable_type](#prop-interactable-type) | `""` |
| `int` | [definition_id](#prop-definition-id) |  |
| `int` | [map_id](#prop-map-id) | `0` |
| `int` | [faction_id](#prop-faction-id) | `0` |
| `int` | [locked_by_item_id](#prop-locked-by-item-id) | `-1` |
| `float` | [interaction_cooldown_override](#prop-interaction-cooldown-override) | `-1.0` |
| `float` | [damaged_threshold](#prop-damaged-threshold) | `0.7` |
| `bool` | [object_targetable_directly](#prop-object-targetable-directly) | `false` |
| `bool` | [object_targetable_by_aoe](#prop-object-targetable-by-aoe) | `false` |
| `StatsData` | [stats_override](#prop-stats-override) |  |
| `Array[LootRule]` | [loot_rules_override](#prop-loot-rules-override) | `[]` |
| `Interaction` | [interaction](#prop-interaction) | `null` |
| `Vector3` | [world_position](#prop-world-position) | `Vector3.ZERO` |
| `Vector3` | [world_rotation](#prop-world-rotation) | `Vector3.ZERO` |

## Methods

| | |
|---|---|
| `int` | [get_effective_locked_state](#method-get-effective-locked-state)( `definition: InteractableDefinition = null` ) |
| `float` | [get_effective_cooldown_duration](#method-get-effective-cooldown-duration)( `definition: InteractableDefinition = null` ) |
| `String` | [get_effective_display_name](#method-get-effective-display-name)( `definition: InteractableDefinition = null` ) |
| `int` | [get_effective_faction](#method-get-effective-faction)() |
| `bool` | [has_loot_rules_override](#method-has-loot-rules-override)() |
| `bool` | [has_interaction](#method-has-interaction)() |
| `bool` | [has_stats_override](#method-has-stats-override)() |
| `StatsData` | [get_effective_stats](#method-get-effective-stats)( `definition: InteractableDefinition = null` ) |
| `void` | [set_stats_override_from_definition](#method-set-stats-override-from-definition)( `definition: InteractableDefinition = null` ) |
| `void` | [clear_stats_override](#method-clear-stats-override)() |
| `bool` | [should_show_stats](#method-should-show-stats)( `definition: InteractableDefinition = null` ) |
| `bool` | [get_effective_targetable_directly](#method-get-effective-targetable-directly)( `definition: InteractableDefinition = null` ) |
| `bool` | [get_effective_targetable_by_aoe](#method-get-effective-targetable-by-aoe)( `definition: InteractableDefinition = null` ) |
| `void` | [update_position_from_node](#method-update-position-from-node)( `interactable_node: Node3D` ) |
| `bool` | [save_to_disk](#method-save-to-disk)() |
| `String` | [get_file_path](#method-get-file-path)() |

## Property descriptions

### String interactable_type = "" {#prop-interactable-type}

*No description yet.*

### int definition_id {#prop-definition-id}

*No description yet.*

### int map_id = 0 {#prop-map-id}

*No description yet.*

*Basic Properties*

### int faction_id = 0 {#prop-faction-id}

Override to be specific faction

### int locked_by_item_id = -1 {#prop-locked-by-item-id}

If &gt; -1, this item ID is required to unlock this object

### float interaction_cooldown_override = -1.0 {#prop-interaction-cooldown-override}

Seconds this object waits after it was used before it can be used again (-1 = the wait of its definition)

*Targeting*

### float damaged_threshold = 0.7 {#prop-damaged-threshold}

Damage threshold at which object becomes "damaged" (0.0-1.0)

### bool object_targetable_directly = false {#prop-object-targetable-directly}

Can this object be targeted directly by single-target abilities?

### bool object_targetable_by_aoe = false {#prop-object-targetable-by-aoe}

Can this object be hit by area-of-effect abilities?

*Stats Override*

### StatsData stats_override {#prop-stats-override}

Stats configuration for objects with combat capabilities Only shown and used if object_targetable_directly or object_targetable_by_aoe is true

*Loot*

### Array[LootRule] loot_rules_override = [] {#prop-loot-rules-override}

Loot rules of this placed object: when it has any they REPLACE the loot rules of its definition (a chest with its own table)

*Interactions*

### Interaction interaction = null {#prop-interaction}

Interactions assigned to this specific interactable instance

### Vector3 world_position = Vector3.ZERO {#prop-world-position}

*No description yet.*

### Vector3 world_rotation = Vector3.ZERO {#prop-world-rotation}

*No description yet.*

## Method descriptions

### int get_effective_locked_state( definition: InteractableDefinition = null ) {#method-get-effective-locked-state}

*No description yet.*

### float get_effective_cooldown_duration( definition: InteractableDefinition = null ) {#method-get-effective-cooldown-duration}

The wait between two uses: the override of this object, else the one of its definition

### String get_effective_display_name( definition: InteractableDefinition = null ) {#method-get-effective-display-name}

*No description yet.*

### int get_effective_faction() {#method-get-effective-faction}

*No description yet.*

### bool has_loot_rules_override() {#method-has-loot-rules-override}

*No description yet.*

### bool has_interaction() {#method-has-interaction}

*No description yet.*

### bool has_stats_override() {#method-has-stats-override}

Check if this instance has stats override

### StatsData get_effective_stats( definition: InteractableDefinition = null ) {#method-get-effective-stats}

Get effective stats - returns override if present, otherwise definition's stats

### void set_stats_override_from_definition( definition: InteractableDefinition = null ) {#method-set-stats-override-from-definition}

Set stats override - duplicates from definition if available, otherwise creates new Call this when enabling stats override to get a proper starting point

### void clear_stats_override() {#method-clear-stats-override}

Clear stats override

### bool should_show_stats( definition: InteractableDefinition = null ) {#method-should-show-stats}

Check if stats should be shown in inspector (based on targeting flags)

### bool get_effective_targetable_directly( definition: InteractableDefinition = null ) {#method-get-effective-targetable-directly}

Get effective targeting flags from either override or definition

### bool get_effective_targetable_by_aoe( definition: InteractableDefinition = null ) {#method-get-effective-targetable-by-aoe}

*No description yet.*

### void update_position_from_node( interactable_node: Node3D ) {#method-update-position-from-node}

*No description yet.*

### bool save_to_disk() {#method-save-to-disk}

Save this unique interactable data to disk

### String get_file_path() {#method-get-file-path}

*No description yet.*

