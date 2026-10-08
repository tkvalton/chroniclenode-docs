<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetBonusDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Clean set bonus system with ID-based lazy loading to prevent circular dependencies

## Properties

| | | |
|---|---|---|
| `Dictionary` | [set_bonus_effects](#prop-set-bonus-effects) | `{}` |
| `Array[int]` | [set_item_ids](#prop-set-item-ids) | `[]` |

## Methods

| | |
|---|---|
| `Dictionary` | [get_set_bonus_effects](#method-get-set-bonus-effects)() |
| `Effect` | [get_effect_for_piece_count](#method-get-effect-for-piece-count)( `piece_count: int` ) |
| `bool` | [has_bonus_at_count](#method-has-bonus-at-count)( `piece_count: int` ) |
| `Array[int]` | [get_bonus_piece_counts](#method-get-bonus-piece-counts)() |
| `void` | [set_bonus_effect](#method-set-bonus-effect)( `piece_count: int, effect: Effect` ) |
| `void` | [set_bonus_effect_id](#method-set-bonus-effect-id)( `piece_count: int, effect_id: int` ) |
| `bool` | [remove_bonus_effect](#method-remove-bonus-effect)( `piece_count: int` ) |
| `void` | [clear_bonus_effects](#method-clear-bonus-effects)() |
| `int` | [get_max_bonus_count](#method-get-max-bonus-count)() |
| `Array[ItemDefinitionEquipment]` | [get_set_items](#method-get-set-items)() |
| `void` | [add_set_item](#method-add-set-item)( `equipment: ItemDefinitionEquipment, auto_link: bool = true` ) |
| `bool` | [remove_set_item](#method-remove-set-item)( `equipment: ItemDefinitionEquipment, auto_unlink: bool = true` ) |
| `bool` | [contains_item](#method-contains-item)( `equipment: ItemDefinitionEquipment` ) |
| `int` | [get_set_size](#method-get-set-size)() |
| `void` | [clear_set_items](#method-clear-set-items)( `auto_unlink: bool = true` ) |
| `int` | [count_equipped_set_pieces](#method-count-equipped-set-pieces)( `entity: Entity` ) |
| `Array[Effect]` | [get_active_set_bonus_effects](#method-get-active-set-bonus-effects)( `entity: Entity` ) |
| `bool` | [has_set_bonus_active](#method-has-set-bonus-active)( `entity: Entity, piece_count: int` ) |
| `Dictionary` | [get_set_completion_info](#method-get-set-completion-info)( `entity: Entity` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [validate_and_fix_relationships](#method-validate-and-fix-relationships)( `auto_fix: bool = false` ) |

## Property descriptions

*Set Bonuses*

### Dictionary set_bonus_effects =  {#prop-set-bonus-effects}

Dictionary mapping piece count to effect IDs: {2: 12345, 4: 67890, 6: 54321}

*Set Composition*

### Array[int] set_item_ids = [] {#prop-set-item-ids}

Equipment piece IDs that are part of this set (prevents circular loading)

## Method descriptions

### Dictionary get_set_bonus_effects() {#method-get-set-bonus-effects}

Get set bonus effects dictionary (returns IDs)

### Effect get_effect_for_piece_count( piece_count: int ) {#method-get-effect-for-piece-count}

Get effect for specific piece count (lazy loaded from ID)

### bool has_bonus_at_count( piece_count: int ) {#method-has-bonus-at-count}

Check if there's a bonus at this piece count

### Array[int] get_bonus_piece_counts() {#method-get-bonus-piece-counts}

Get all piece counts that have bonuses

### void set_bonus_effect( piece_count: int, effect: Effect ) {#method-set-bonus-effect}

Set bonus effect for specific piece count (stores ID)

### void set_bonus_effect_id( piece_count: int, effect_id: int ) {#method-set-bonus-effect-id}

Set bonus effect by ID directly

### bool remove_bonus_effect( piece_count: int ) {#method-remove-bonus-effect}

Remove bonus effect for specific piece count

### void clear_bonus_effects() {#method-clear-bonus-effects}

Clear all bonus effects

### int get_max_bonus_count() {#method-get-max-bonus-count}

Get maximum piece count with bonus

### Array[ItemDefinitionEquipment] get_set_items() {#method-get-set-items}

Get all equipment definitions that are part of this set (lazy loaded)

### void add_set_item( equipment: ItemDefinitionEquipment, auto_link: bool = true ) {#method-add-set-item}

Add an equipment piece to the set with bidirectional linking

### bool remove_set_item( equipment: ItemDefinitionEquipment, auto_unlink: bool = true ) {#method-remove-set-item}

Remove an equipment piece from the set with bidirectional unlinking

### bool contains_item( equipment: ItemDefinitionEquipment ) {#method-contains-item}

Check if an equipment piece is part of this set

### int get_set_size() {#method-get-set-size}

Get the total number of items in this set

### void clear_set_items( auto_unlink: bool = true ) {#method-clear-set-items}

Clear all items from the set with bidirectional unlinking

### int count_equipped_set_pieces( entity: Entity ) {#method-count-equipped-set-pieces}

Count how many pieces of this set an entity has equipped

### Array[Effect] get_active_set_bonus_effects( entity: Entity ) {#method-get-active-set-bonus-effects}

Get all active set bonus effects for an entity

### bool has_set_bonus_active( entity: Entity, piece_count: int ) {#method-has-set-bonus-active}

Check if entity has specific set bonus active

### Dictionary get_set_completion_info( entity: Entity ) {#method-get-set-completion-info}

Get set completion info for an entity

### Array[Dictionary] validate() {#method-validate}

Validate set configuration

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] validate_and_fix_relationships( auto_fix: bool = false ) {#method-validate-and-fix-relationships}

Validate and optionally fix relationship consistency

