<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PoolStatsEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Pool Stats Editor for managing pool definitions with damage type absorption

## Variables

| | | |
|---|---|---|
| `PoolDefinition:` | [current_pool_stat](#var-current-pool-stat) |  |
| `Array` | [available_damage_types](#var-available-damage-types) | `[]  # Array of {id: int, name: String}` |
| `GrowthEditor` | [growth_editor](#var-growth-editor) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `PoolDefinition` | [get_current_pool_stat](#method-get-current-pool-stat)() |
| `void` | [set_available_damage_types](#method-set-available-damage-types)( `damage_types: Array[String]` ) |

## Variable descriptions

### PoolDefinition: current_pool_stat {#var-current-pool-stat}

========== CUSTOM PROPERTIES ==========

### Array available_damage_types = []  # Array of id: int, name: String {#var-available-damage-types}

Available damage types for selection

### GrowthEditor growth_editor {#var-growth-editor}

The Level Growth section: how the pool's maximum grows with the entity's level

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### PoolDefinition get_current_pool_stat() {#method-get-current-pool-stat}

*No description yet.*

### void set_available_damage_types( damage_types: Array[String] ) {#method-set-available-damage-types}

*No description yet.*

