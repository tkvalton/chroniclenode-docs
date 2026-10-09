<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ListCatalog

**Inherits:** `ConfirmationDialog`

## Variables

| | | |
|---|---|---|
| `Array[Dictionary]` | [all_objects](#var-all-objects) | `[]` |
| `String` | [current_filter](#var-current-filter) | `""` |
| `String` | [current_search](#var-current-search) | `""` |

## Methods

| | |
|---|---|
| `void` | [load_objects](#method-load-objects)( `object_type: String` ) |
| `void` | [open_for_active_ability_selection](#method-open-for-active-ability-selection)() |
| `void` | [open_for_passive_ability_selection](#method-open-for-passive-ability-selection)() |
| `void` | [open_for](#method-open-for)( `object_type: String, dialog_title: String = ""` ) |
| `void` | [open_for_abilities](#method-open-for-abilities)() |
| `void` | [open_for_items_compatible_with_slot](#method-open-for-items-compatible-with-slot)( `slot_def: EquipmentSlotDefinition` ) |

## Signals

### selection_made( object_path: String, object_id: int, object_type: String ) {#signal-selection-made}

## Enumerations

### enum ObjectType {#enum-objecttype}

- **ALL** = `0`
- **ABILITIES** = `1`
- **ACTIVE_ABILITIES** = `2`
- **PASSIVE_ABILITIES** = `3`
- **EFFECTS** = `4`
- **SKELETONS** = `5`
- **INTERACTABLE_MODELS** = `6`
- **ENTITIES** = `7`
- **TEMPLATES** = `8`
- **PLAYER_CLASSES** = `9`
- **CHARACTERS** = `10`
- **PLAYER_CLASS_TEMPLATES** = `11`
- **SKILL_TREES** = `12`
- **ITEMS** = `13`
- **EQUIPMENT** = `14`
- **WEAPONS** = `15`
- **CONSUMABLES** = `16`
- **MATERIALS** = `17`
- **QUEST_ITEMS** = `18`
- **LOOT_TABLES** = `19`
- **COMBAT_SCRIPTS** = `20`
- **BEHAVIOR_SCRIPTS** = `21`
- **CONVERSATIONS** = `22`
- **CRAFT_RECIPES** = `23`
- **CRAFT_SCHOOLS** = `24`
- **VENDORS** = `25`
- **FACTIONS** = `26`
- **STATS** = `27`
- **DAMAGE_TYPES** = `28`
- **SCHOOL_TYPES** = `29`
- **POOLS** = `30`
- **IMMUNITIES** = `31`
- **STATUS_EFFECTS** = `32`
- **ARMOR_CLASSES** = `33`
- **WEAPON_CLASSES** = `34`
- **EQUIPMENT_TYPES** = `35`
- **WEAPON_TYPES** = `36`
- **EQUIPMENT_SLOTS** = `37`
- **QUALITIES** = `38`
- **SET_BONUSES** = `39`
- **SOCKETS** = `40`
- **REGIONS** = `41`
- **QUESTS** = `42`
- **QUESTLINES** = `43`
- **EVENTS** = `44`
- **WORLDS** = `45`
- **ENVIRONMENTS** = `46`
- **SKY_CONFIGS** = `47`
- **SUN_CONFIGS** = `48`
- **TIME_CONFIGS** = `49`
- **GLOBAL_VARIABLES** = `50`
- **SKILL_POOLS** = `51`
- **INTERACTABLES** = `52`
- **UNIQUE_ENTITIES** = `53`
- **UNIQUE_INTERACTABLES** = `54`
- **UNIQUE_REGIONS** = `55`
- **UNIQUE_ENCOUNTERS** = `56`

## Variable descriptions

### Array[Dictionary] all_objects = [] {#var-all-objects}

*No description yet.*

### String current_filter = "" {#var-current-filter}

*No description yet.*

### String current_search = "" {#var-current-search}

*No description yet.*

## Method descriptions

### void load_objects( object_type: String ) {#method-load-objects}

*No description yet.*

### void open_for_active_ability_selection() {#method-open-for-active-ability-selection}

*No description yet.*

### void open_for_passive_ability_selection() {#method-open-for-passive-ability-selection}

*No description yet.*

### void open_for( object_type: String, dialog_title: String = "" ) {#method-open-for}

Opens the catalog for one kind of resource ("ability", "effect", "weapon_class" ...): the kinds load_objects knows

### void open_for_abilities() {#method-open-for-abilities}

*No description yet.*

### void open_for_items_compatible_with_slot( slot_def: EquipmentSlotDefinition ) {#method-open-for-items-compatible-with-slot}

*No description yet.*

