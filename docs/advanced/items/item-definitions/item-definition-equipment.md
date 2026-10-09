<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionEquipment

**Inherits:** [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ItemDefinitionAmmo](/advanced/items/item-definitions/item-definition-ammo), [ItemDefinitionEquipmentWeapon](/advanced/items/item-definitions/item-definition-equipment-weapon)

Equipment items that can be worn by characters to provide stat bonuses and visual changes

## Properties

| | | |
|---|---|---|
| `Dictionary` | [stat_bonuses](#prop-stat-bonuses) | `{}` |
| `int` | [equipment_type](#prop-equipment-type) |  |
| `int` | [armor_class](#prop-armor-class) |  |
| `Dictionary` | [modular_mesh_data](#prop-modular-mesh-data) | `{}` |
| `Array[int]` | [equipment_effects](#prop-equipment-effects) | `[]` |
| `int` | [on_use_ability_id](#prop-on-use-ability-id) | `0` |
| `Array[int]` | [socket_definitions](#prop-socket-definitions) | `[]` |
| `int` | [full_sockets_effect](#prop-full-sockets-effect) | `0` |
| `int` | [set_bonus_definition](#prop-set-bonus-definition) | `0` |

## Methods

| | |
|---|---|
| `Array[int]` | [get_socket_definitions](#method-get-socket-definitions)() |
| `int` | [get_socket_count](#method-get-socket-count)() |
| `bool` | [has_sockets](#method-has-sockets)() |
| `SocketDefinition` | [get_socket_definition](#method-get-socket-definition)( `index: int` ) |
| `void` | [add_socket](#method-add-socket)( `socket_def: SocketDefinition` ) |
| `bool` | [remove_socket](#method-remove-socket)( `socket_def: SocketDefinition` ) |
| `bool` | [remove_socket_at_index](#method-remove-socket-at-index)( `index: int` ) |
| `void` | [clear_sockets](#method-clear-sockets)() |
| `Effect` | [get_full_sockets_effect](#method-get-full-sockets-effect)() |
| `void` | [set_full_sockets_effect](#method-set-full-sockets-effect)( `effect: Effect` ) |
| `bool` | [has_full_socket_bonus](#method-has-full-socket-bonus)() |
| `Dictionary` | [create_mesh_assignment](#method-create-mesh-assignment)( `mesh_path: String, material_overrides: Array[Material] = [], scale: float = 1.0` ) |
| `Array[String]` | [get_defined_tags](#method-get-defined-tags)() |
| `void` | [set_body_part_mesh](#method-set-body-part-mesh)( `tag: String, body_part: GeneralSkeleton.BodySlot, mesh_path: String, material_overrides: Array[Material] = [], scale: float = 1.0` ) |
| `void` | [set_attachment_mesh](#method-set-attachment-mesh)( `tag: String, attachment_point: GeneralSkeleton.AttachmentSlot, mesh_path: String, material_overrides: Array[Material] = [], scale: float = 1.0` ) |
| `Dictionary` | [get_body_part_mesh_assignment](#method-get-body-part-mesh-assignment)( `tag: String, body_part: GeneralSkeleton.BodySlot` ) |
| `Dictionary` | [get_attachment_mesh_assignment](#method-get-attachment-mesh-assignment)( `tag: String, attachment_point: GeneralSkeleton.AttachmentSlot` ) |
| `Array[GeneralSkeleton.BodySlot]` | [get_assigned_body_parts](#method-get-assigned-body-parts)( `tag: String` ) |
| `Array[GeneralSkeleton.AttachmentSlot]` | [get_assigned_attachment_points](#method-get-assigned-attachment-points)( `tag: String` ) |
| `bool` | [has_body_part_mesh](#method-has-body-part-mesh)( `tag: String, body_part: GeneralSkeleton.BodySlot` ) |
| `bool` | [has_attachment_mesh](#method-has-attachment-mesh)( `tag: String, attachment_point: GeneralSkeleton.AttachmentSlot` ) |
| `bool` | [has_mesh_assignments](#method-has-mesh-assignments)() |
| `bool` | [has_mesh_assignments_for_tag](#method-has-mesh-assignments-for-tag)( `tag: String` ) |
| `int` | [get_total_mesh_count](#method-get-total-mesh-count)() |
| `int` | [get_mesh_count_for_tag](#method-get-mesh-count-for-tag)( `tag: String` ) |
| `EquipmentTypeDefinition` | [get_equipment_type](#method-get-equipment-type)() |
| `ArmorClassDefinition` | [get_armor_class](#method-get-armor-class)() |
| `bool` | [is_weapon](#method-is-weapon)() |
| `bool` | [affects_body_part](#method-affects-body-part)( `body_part: GeneralSkeleton.BodySlot` ) |
| `bool` | [uses_attachment_point](#method-uses-attachment-point)( `attachment_point: GeneralSkeleton.AttachmentSlot` ) |
| `Dictionary` | [get_affected_mesh_slots](#method-get-affected-mesh-slots)() |
| `void` | [clear_all_mesh_assignments](#method-clear-all-mesh-assignments)() |
| `void` | [clear_mesh_assignments_for_tag](#method-clear-mesh-assignments-for-tag)( `tag: String` ) |
| `void` | [clear_body_part_mesh](#method-clear-body-part-mesh)( `tag: String, body_part: GeneralSkeleton.BodySlot` ) |
| `void` | [clear_attachment_mesh](#method-clear-attachment-mesh)( `tag: String, attachment_point: GeneralSkeleton.AttachmentSlot` ) |
| `bool` | [can_use](#method-can-use)( `user: Entity, item_instance: ItemInstance = null` ) |
| `bool` | [execute_use](#method-execute-use)( `user: Entity, item_instance: ItemInstance` ) |
| `String` | [get_use_action_name](#method-get-use-action-name)( `item_instance: ItemInstance` ) |
| `Array[Effect]` | [get_equipment_effects](#method-get-equipment-effects)() |
| `Dictionary` | [get_effective_stat_bonuses](#method-get-effective-stat-bonuses)( `item_instance: ItemInstance` ) |
| `Array[Effect]` | [get_effective_equipment_effects](#method-get-effective-equipment-effects)( `item_instance: ItemInstance` ) |
| `bool` | [belongs_to_set](#method-belongs-to-set)() |
| `SetBonusDefinition` | [get_set_bonus_definition](#method-get-set-bonus-definition)() |
| `void` | [set_set_bonus_definition](#method-set-set-bonus-definition)( `set_def: SetBonusDefinition` ) |
| `String` | [get_set_name](#method-get-set-name)() |
| `bool` | [is_set_bonus_active_for_entity](#method-is-set-bonus-active-for-entity)( `entity: Entity, piece_count: int` ) |
| `String` | [get_set_bonus_description](#method-get-set-bonus-description)( `entity: Entity = null` ) |
| `Array[ItemDefinitionEquipment]` | [get_set_siblings](#method-get-set-siblings)() |
| `Dictionary` | [get_set_completion_with_this_item](#method-get-set-completion-with-this-item)( `entity: Entity` ) |
| `Array[int]` | [would_complete_set_bonus](#method-would-complete-set-bonus)( `entity: Entity` ) |
| `Array[int]` | [would_break_set_bonus](#method-would-break-set-bonus)( `entity: Entity` ) |

## Property descriptions

*Stat Modifications*

### Dictionary stat_bonuses =  {#prop-stat-bonuses}

Unified stat bonuses - Dictionary mapping stat_id (int) to bonus value (float) Example: &#123;1: 10.0, 5: 5.5&#125; means stat ID 1 gets +10, stat ID 5 gets +5.5

*Equipment Properties*

### int equipment_type {#prop-equipment-type}

Equipment type and mesh slot compatibility

### int armor_class {#prop-armor-class}

Armor classification: "Plate", "Leather", "Cloth"

*Visual Properties - Modular Mesh Data*

### Dictionary modular_mesh_data =  {#prop-modular-mesh-data}

Nested mesh data structure keyed by modular equipment type tag Structure: modular_mesh_data[tag_string] = &#123; "body_part_meshes": &#123;&#125;, "attachment_meshes": &#123;&#125; &#125;

*Effects and Abilities*

### Array[int] equipment_effects = [] {#prop-equipment-effects}

Effects granted while equipped

### int on_use_ability_id = 0 {#prop-on-use-ability-id}

Optional ability that can be activated when equipped

*Socket System*

### Array[int] socket_definitions = [] {#prop-socket-definitions}

Available sockets for this equipment

### int full_sockets_effect = 0 {#prop-full-sockets-effect}

Bonus effect when all sockets are filled

*Set Bonus*

### int set_bonus_definition = 0 {#prop-set-bonus-definition}

Set this equipment belongs to

## Method descriptions

### Array[int] get_socket_definitions() {#method-get-socket-definitions}

Get socket definitions for this equipment

### int get_socket_count() {#method-get-socket-count}

Get total number of sockets

### bool has_sockets() {#method-has-sockets}

Check if this equipment has sockets

### SocketDefinition get_socket_definition( index: int ) {#method-get-socket-definition}

Get socket definition by index

### void add_socket( socket_def: SocketDefinition ) {#method-add-socket}

Add a socket definition

### bool remove_socket( socket_def: SocketDefinition ) {#method-remove-socket}

Remove a socket definition

### bool remove_socket_at_index( index: int ) {#method-remove-socket-at-index}

Remove socket by index

### void clear_sockets() {#method-clear-sockets}

Clear all sockets

### Effect get_full_sockets_effect() {#method-get-full-sockets-effect}

Get full sockets effect

### void set_full_sockets_effect( effect: Effect ) {#method-set-full-sockets-effect}

Set full sockets effect

### bool has_full_socket_bonus() {#method-has-full-socket-bonus}

Check if this equipment has a full socket bonus

### Dictionary create_mesh_assignment( mesh_path: String, material_overrides: Array[Material] = [], scale: float = 1.0 ) {#method-create-mesh-assignment}

*No description yet.*

### Array[String] get_defined_tags() {#method-get-defined-tags}

Get all tags that have mesh data defined

### void set_body_part_mesh( tag: String, body_part: GeneralSkeleton.BodySlot, mesh_path: String, material_overrides: Array[Material] = [], scale: float = 1.0 ) {#method-set-body-part-mesh}

Set body part mesh for a specific tag

### void set_attachment_mesh( tag: String, attachment_point: GeneralSkeleton.AttachmentSlot, mesh_path: String, material_overrides: Array[Material] = [], scale: float = 1.0 ) {#method-set-attachment-mesh}

Set attachment mesh for a specific tag

### Dictionary get_body_part_mesh_assignment( tag: String, body_part: GeneralSkeleton.BodySlot ) {#method-get-body-part-mesh-assignment}

Get body part mesh assignment for a specific tag

### Dictionary get_attachment_mesh_assignment( tag: String, attachment_point: GeneralSkeleton.AttachmentSlot ) {#method-get-attachment-mesh-assignment}

Get attachment mesh assignment for a specific tag

### Array[GeneralSkeleton.BodySlot] get_assigned_body_parts( tag: String ) {#method-get-assigned-body-parts}

Get all assigned body parts for a specific tag

### Array[GeneralSkeleton.AttachmentSlot] get_assigned_attachment_points( tag: String ) {#method-get-assigned-attachment-points}

Get all assigned attachment points for a specific tag

### bool has_body_part_mesh( tag: String, body_part: GeneralSkeleton.BodySlot ) {#method-has-body-part-mesh}

Check if a body part mesh is assigned for a specific tag

### bool has_attachment_mesh( tag: String, attachment_point: GeneralSkeleton.AttachmentSlot ) {#method-has-attachment-mesh}

Check if an attachment mesh is assigned for a specific tag

### bool has_mesh_assignments() {#method-has-mesh-assignments}

Check if any mesh assignments exist (across all tags)

### bool has_mesh_assignments_for_tag( tag: String ) {#method-has-mesh-assignments-for-tag}

Check if any mesh assignments exist for a specific tag

### int get_total_mesh_count() {#method-get-total-mesh-count}

Get total mesh count across all tags

### int get_mesh_count_for_tag( tag: String ) {#method-get-mesh-count-for-tag}

Get mesh count for a specific tag

### EquipmentTypeDefinition get_equipment_type() {#method-get-equipment-type}

*No description yet.*

### ArmorClassDefinition get_armor_class() {#method-get-armor-class}

*No description yet.*

### bool is_weapon() {#method-is-weapon}

*No description yet.*

### bool affects_body_part( body_part: GeneralSkeleton.BodySlot ) {#method-affects-body-part}

*No description yet.*

### bool uses_attachment_point( attachment_point: GeneralSkeleton.AttachmentSlot ) {#method-uses-attachment-point}

*No description yet.*

### Dictionary get_affected_mesh_slots() {#method-get-affected-mesh-slots}

*No description yet.*

### void clear_all_mesh_assignments() {#method-clear-all-mesh-assignments}

Clear all mesh assignments across all tags

### void clear_mesh_assignments_for_tag( tag: String ) {#method-clear-mesh-assignments-for-tag}

Clear all mesh assignments for a specific tag

### void clear_body_part_mesh( tag: String, body_part: GeneralSkeleton.BodySlot ) {#method-clear-body-part-mesh}

Clear body part mesh for a specific tag

### void clear_attachment_mesh( tag: String, attachment_point: GeneralSkeleton.AttachmentSlot ) {#method-clear-attachment-mesh}

Clear attachment mesh for a specific tag

### bool can_use( user: Entity, item_instance: ItemInstance = null ) {#method-can-use}

Check if equipment can be used (equipped)

### bool execute_use( user: Entity, item_instance: ItemInstance ) {#method-execute-use}

Execute equipment usage - either equip or use on-use ability

### String get_use_action_name( item_instance: ItemInstance ) {#method-get-use-action-name}

Get display name for equipment action based on current state

### Array[Effect] get_equipment_effects() {#method-get-equipment-effects}

*No description yet.*

### Dictionary get_effective_stat_bonuses( item_instance: ItemInstance ) {#method-get-effective-stat-bonuses}

Get effective stat bonuses including instance modifications and socket bonuses

### Array[Effect] get_effective_equipment_effects( item_instance: ItemInstance ) {#method-get-effective-equipment-effects}

Get effective equipment effects including instance modifications

### bool belongs_to_set() {#method-belongs-to-set}

Check if this equipment belongs to a set

### SetBonusDefinition get_set_bonus_definition() {#method-get-set-bonus-definition}

Get the set bonus definition

### void set_set_bonus_definition( set_def: SetBonusDefinition ) {#method-set-set-bonus-definition}

Set the set bonus definition with bidirectional linking

### String get_set_name() {#method-get-set-name}

Get set name for display

### bool is_set_bonus_active_for_entity( entity: Entity, piece_count: int ) {#method-is-set-bonus-active-for-entity}

Check if entity has set bonus active at specific piece count

### String get_set_bonus_description( entity: Entity = null ) {#method-get-set-bonus-description}

Get set bonus description for this equipment

### Array[ItemDefinitionEquipment] get_set_siblings() {#method-get-set-siblings}

Get all other items in the same set (excluding this item)

### Dictionary get_set_completion_with_this_item( entity: Entity ) {#method-get-set-completion-with-this-item}

Get set completion info when this item would be equipped by an entity

### Array[int] would_complete_set_bonus( entity: Entity ) {#method-would-complete-set-bonus}

Check if equipping this item would complete a set bonus threshold

### Array[int] would_break_set_bonus( entity: Entity ) {#method-would-break-set-bonus}

Check if unequipping this item would break a set bonus threshold

