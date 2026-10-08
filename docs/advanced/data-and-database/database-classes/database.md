<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Database

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The database of the project: every resource you make in the editor (an ability, an effect, an NPC, a quest ...) is a file, and this class finds, creates, saves and deletes them.

## Description

The database of the project: every resource you make in the editor (an ability, an effect, an NPC, a quest ...) is a file, and this class finds, creates, saves and deletes them.

The resources are grouped in TYPES. REGISTRY says, for each type, the folder under `res://src/data/` where its files live and the class the resources must be. A resource is the file `<id>.tres` in that folder, and everything else refers to it by its id: `Database.get_resource("effect", id)`. Each type is read from disk once, on first use, into a cache (a dictionary id -&gt; resource) that stays for the whole session.

All the resources extend DatabaseResource. The database also makes the few resources every project needs (the Environmental and Player factions, the Health and Shield pools, the core stats, the default environment configs, the default popup). The asset libraries (animations, audio, VFX, meshes, model scenes, icons) are not in this registry: they have their own classes, see DatabaseAnimation, DatabaseAudio, DatabaseVFX, DatabaseMeshes, ModelSceneDatabase and DatabaseIcons.

## Variables

| | | |
|---|---|---|
| `Variant` | [REGISTRY](#var-registry) | `{ ... }` |

## Methods

| | |
|---|---|
| `void` | [ensure_initialized](#method-ensure-initialized)() *static* |
| `PopupData` | [get_popup_data_by_scene_path](#method-get-popup-data-by-scene-path)( `scene_path: String` ) *static* |
| `void` | [register_popup_data](#method-register-popup-data)( `popup: PopupData` ) *static* |
| `TimeConfig` | [get_default_time_config](#method-get-default-time-config)() *static* |
| `SunConfig` | [get_default_sun_config](#method-get-default-sun-config)() *static* |
| `SkyConfig` | [get_default_sky_config](#method-get-default-sky-config)() *static* |
| `EnvironmentConfig` | [get_default_environment_config](#method-get-default-environment-config)() *static* |
| `Dictionary` | [get_cache](#method-get-cache)( `type: String` ) *static* |
| `bool` | [resource_exists](#method-resource-exists)( `type: String, id: int` ) *static* |
| `DatabaseResource` | [create_resource](#method-create-resource)( `type: String, res_name: String, type_override: GDScript = null` ) *static* |
| `bool` | [save_resource](#method-save-resource)( `type: String, res: DatabaseResource` ) *static* |
| `DatabaseResource` | [get_resource](#method-get-resource)( `type: String, id: int` ) *static* |
| `bool` | [delete_resource](#method-delete-resource)( `type: String, id: int` ) *static* |
| `Array[WorldData]` | [get_all_world_data](#method-get-all-world-data)() *static* |
| `WorldData` | [get_world_data_by_scene_path](#method-get-world-data-by-scene-path)( `scene_path: String` ) *static* |
| `int` | [get_next_world_id](#method-get-next-world-id)() *static* |
| `PackedStringArray` | [get_all_world_categories](#method-get-all-world-categories)() *static* |
| `Array[WorldData]` | [get_worlds_by_category](#method-get-worlds-by-category)( `category: String` ) *static* |
| `void` | [register_world_data](#method-register-world-data)( `world_data: WorldData` ) *static* |
| `Dictionary` | [validate_all_worlds](#method-validate-all-worlds)() *static* |
| `void` | [reload_world_cache](#method-reload-world-cache)() *static* |
| `GlobalVariable` | [get_global_variable_by_key](#method-get-global-variable-by-key)( `variable_key: String` ) *static* |
| `Dictionary` | [get_all_global_variables_as_dict](#method-get-all-global-variables-as-dict)() *static* |
| `bool` | [has_global_variable](#method-has-global-variable)( `variable_key: String` ) *static* |
| `Array[Dictionary]` | [get_list_for_ui](#method-get-list-for-ui)( `type: String` ) *static* |
| `Array[Dictionary]` | [get_all_equipment_types_for_ui](#method-get-all-equipment-types-for-ui)() *static* |
| `EquipmentTypeDefinition` | [get_equipment_type_resource](#method-get-equipment-type-resource)( `id: int` ) *static* |
| `bool` | [equipment_type_exists](#method-equipment-type-exists)( `id: int` ) *static* |
| `Array[Dictionary]` | [get_abilities_by_subtype_for_ui](#method-get-abilities-by-subtype-for-ui)( `subtype: String` ) *static* |
| `ToggleGroupsResource` | [get_toggle_groups_resource](#method-get-toggle-groups-resource)() *static* |
| `Array[String]` | [get_all_toggle_groups](#method-get-all-toggle-groups)() *static* |
| `bool` | [add_toggle_group](#method-add-toggle-group)( `group_name: String` ) *static* |
| `bool` | [remove_toggle_group](#method-remove-toggle-group)( `group_name: String` ) *static* |
| `bool` | [rename_toggle_group](#method-rename-toggle-group)( `old_name: String, new_name: String` ) *static* |
| `NPCDefinition` | [create_entity_from_template](#method-create-entity-from-template)( `template_id: int, display_name: String` ) *static* |
| `NPCDefinition` | [clone_entity_as_template](#method-clone-entity-as-template)( `source_id: int` ) *static* |
| `PlayerClassDefinition` | [create_player_class_from_template](#method-create-player-class-from-template)( `template_id: int, display_name: String` ) *static* |
| `PlayerClassDefinition` | [clone_player_class_as_template](#method-clone-player-class-as-template)( `source_id: int` ) *static* |

## Constants

- `String` **TOGGLE_GROUPS_PATH** = `"res://src/data/abilities/toggle_groups/toggle_groups.tres"`
- `int` **ID_ENVIRONMENTAL_FACTION** = `1000001` - Built in DatabaseResources
- `int` **ID_PLAYER_FACTION** = `1000002`
- `int` **ID_HEALTH_POOL** = `1000001`
- `int` **ID_SHIELD_POOL** = `1000002` - The shield pool: a protective pool that absorbs damage before health and is never healed. The default pool of "Add Health Pool"
- `int` **ID_DEFAULT_TIME_CONFIG** = `1000001`
- `int` **ID_DEFAULT_SUN_CONFIG** = `1000001`
- `int` **ID_DEFAULT_SKY_CONFIG** = `1000001`
- `int` **ID_DEFAULT_ENVIRONMENT_CONFIG** = `1000001`
- `int` **ID_DEFAULT_POPUP** = `1000001` - The popup that comes with the toolkit (title, text, icon, button)
- `String` **DEFAULT_POPUP_SCENE** = `"res://addons/chroniclenode/ui_scenes/in_game/popups/default_popup_ui.tscn"`

## Variable descriptions

### REGISTRY {#var-registry}

Every type of resource: the key is the type name used everywhere (`"effect"`, `"npc"` ...), `path` is the folder of its files and `class` the class the resources must be. See the Database types page for the whole table. The type `"enviroment"` is spelled that way in the code.

## Method descriptions

### void ensure_initialized() {#method-ensure-initialized}

Makes the folder of every type in REGISTRY (when missing) and the built-in resources. Runs once; every other function of this class calls it first.

### PopupData get_popup_data_by_scene_path( scene_path: String ) {#method-get-popup-data-by-scene-path}

The popup data made for a scene (null when the scene has none yet)

### void register_popup_data( popup: PopupData ) {#method-register-popup-data}

Put the popup data of a scene in the database (called when the scene is saved in the editor; a data without an id gets one)

### TimeConfig get_default_time_config() {#method-get-default-time-config}

Get default time config

### SunConfig get_default_sun_config() {#method-get-default-sun-config}

Get default sun config

### SkyConfig get_default_sky_config() {#method-get-default-sky-config}

Get default sky config

### EnvironmentConfig get_default_environment_config() {#method-get-default-environment-config}

Get default environment config

### Dictionary get_cache( type: String ) {#method-get-cache}

The cache of a type: a dictionary id -&gt; resource of everything in its folder. Read from disk on the first call, then kept. An unknown type gives an empty dictionary.

### bool resource_exists( type: String, id: int ) {#method-resource-exists}

Check if a specific resource ID exists in a category

### DatabaseResource create_resource( type: String, res_name: String, type_override: GDScript = null ) {#method-create-resource}

Create a database resource.

### bool save_resource( type: String, res: DatabaseResource ) {#method-save-resource}

Writes a resource to `<folder of the type>/<id>.tres`, sets its resource_path and puts it in the cache. Returns false when the resource has no id, the type is unknown or the file cannot be written (an exported game cannot write to res://).

### DatabaseResource get_resource( type: String, id: int ) {#method-get-resource}

The resource of a type with this id, or null. The usual way to follow a reference: `Database.get_resource("effect", child_effect_id)`.

### bool delete_resource( type: String, id: int ) {#method-delete-resource}

Deletes the file of a resource and takes it out of the cache. Other resources that still refer to the id are not changed: they find nothing the next time they look it up.

### Array[WorldData] get_all_world_data() {#method-get-all-world-data}

Get all world data

### WorldData get_world_data_by_scene_path( scene_path: String ) {#method-get-world-data-by-scene-path}

Get world data by scene path

### int get_next_world_id() {#method-get-next-world-id}

Get next available world ID

### PackedStringArray get_all_world_categories() {#method-get-all-world-categories}

Get all unique categories from worlds

### Array[WorldData] get_worlds_by_category( category: String ) {#method-get-worlds-by-category}

Get all worlds in a specific category

### void register_world_data( world_data: WorldData ) {#method-register-world-data}

Register world data (used by WorldScene on save)

### Dictionary validate_all_worlds() {#method-validate-all-worlds}

Validate all worlds and return report

### void reload_world_cache() {#method-reload-world-cache}

Reload world cache (forces re-scan of world directory)

### GlobalVariable get_global_variable_by_key( variable_key: String ) {#method-get-global-variable-by-key}

Get a global variable by its key

### Dictionary get_all_global_variables_as_dict() {#method-get-all-global-variables-as-dict}

Get all global variables as a dictionary {key: value}

### bool has_global_variable( variable_key: String ) {#method-has-global-variable}

Check if a global variable exists

### Array[Dictionary] get_list_for_ui( type: String ) {#method-get-list-for-ui}

The resources of a type as a list of {id, name, description}, sorted by name, for the pickers of the editor.

### Array[Dictionary] get_all_equipment_types_for_ui() {#method-get-all-equipment-types-for-ui}

Get combined list of equipment types AND weapon types for UI Use this when you need both types together (e.g., equipment slots)

### EquipmentTypeDefinition get_equipment_type_resource( id: int ) {#method-get-equipment-type-resource}

Get an equipment type resource by ID, checking both equipment_type and weapon_type Use this when you need to load equipment types but don't know if it's a weapon type

### bool equipment_type_exists( id: int ) {#method-equipment-type-exists}

Check if an equipment type resource exists (checks both equipment_type and weapon_type)

### Array[Dictionary] get_abilities_by_subtype_for_ui( subtype: String ) {#method-get-abilities-by-subtype-for-ui}

Get list of abilities filtered by subtype for UI (Active or Passive) subtype: "ActiveAbility" or "PassiveAbility"

### ToggleGroupsResource get_toggle_groups_resource() {#method-get-toggle-groups-resource}

Get or create toggle groups resource (read-only)

### Array[String] get_all_toggle_groups() {#method-get-all-toggle-groups}

Get all toggle groups (read-only)

### bool add_toggle_group( group_name: String ) {#method-add-toggle-group}

Adds a toggle group (a name that toggle abilities share, such as "auras" or "combat_stances") and saves the list. False when it exists already.

### bool remove_toggle_group( group_name: String ) {#method-remove-toggle-group}

Removes a toggle group and saves the list.

### bool rename_toggle_group( old_name: String, new_name: String ) {#method-rename-toggle-group}

Renames a toggle group and saves the list.

### NPCDefinition create_entity_from_template( template_id: int, display_name: String ) {#method-create-entity-from-template}

Makes a new NPC from the NPC template with this id, named `display_name`, and saves it in "npc". Null when the name is empty, the template does not exist or the file cannot be written.

### NPCDefinition clone_entity_as_template( source_id: int ) {#method-clone-entity-as-template}

Saves a copy of the NPC with this id as a new NPC template (no name, `template = true`) in "npc_template". Null when the NPC does not exist or the file cannot be written.

### PlayerClassDefinition create_player_class_from_template( template_id: int, display_name: String ) {#method-create-player-class-from-template}

Makes a new player class from the player class template with this id, named `display_name`, and saves it in "player_class". Null when the name is empty, the template does not exist or the file cannot be written.

### PlayerClassDefinition clone_player_class_as_template( source_id: int ) {#method-clone-player-class-as-template}

Saves a copy of the player class with this id as a new player class template (no name, `template = true`) in "player_class_template". Null when the class does not exist or the file cannot be written.

