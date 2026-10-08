<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EquipmentTypeDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [WeaponTypeDefinition](/advanced/equipment-definitions/definitions/weapon-type-definition)

EquipmentTypeDefinition defines a category of equipment and what mesh slots it affects. This is the base class for all equipment categories (helmet, chest, weapon, etc.)

## Properties

| | | |
|---|---|---|
| `Array[GeneralSkeleton.BodySlot]` | [body_parts_affected](#prop-body-parts-affected) | `[]` |
| `Array[GeneralSkeleton.AttachmentSlot]` | [attachment_points_used](#prop-attachment-points-used) | `[]` |

## Methods

| | |
|---|---|
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [affects_body_part](#method-affects-body-part)( `body_part: GeneralSkeleton.BodySlot` ) |
| `bool` | [uses_attachment_point](#method-uses-attachment-point)( `attachment_point: GeneralSkeleton.AttachmentSlot` ) |
| `Array[GeneralSkeleton.BodySlot]` | [get_affected_body_parts](#method-get-affected-body-parts)() |
| `Array[GeneralSkeleton.AttachmentSlot]` | [get_used_attachment_points](#method-get-used-attachment-points)() |
| `bool` | [affects_any_mesh_slots](#method-affects-any-mesh-slots)() |
| `int` | [get_mesh_slot_count](#method-get-mesh-slot-count)() |
| `Array[String]` | [get_meshes_for_body_part](#method-get-meshes-for-body-part)( `body_part: GeneralSkeleton.BodySlot` ) |
| `Array[String]` | [get_meshes_for_attachment_point](#method-get-meshes-for-attachment-point)( `attachment_point: GeneralSkeleton.AttachmentSlot` ) |
| `String` | [get_body_part_display_name](#method-get-body-part-display-name)( `body_part: GeneralSkeleton.BodySlot` ) |
| `String` | [get_attachment_point_display_name](#method-get-attachment-point-display-name)( `attachment_point: GeneralSkeleton.AttachmentSlot` ) |
| `String` | [get_body_parts_display_text](#method-get-body-parts-display-text)() |
| `String` | [get_attachment_points_display_text](#method-get-attachment-points-display-text)() |
| `bool` | [is_weapon_type](#method-is-weapon-type)() |
| `String` | [get_category](#method-get-category)() |
| `bool` | [add_body_part](#method-add-body-part)( `body_part: GeneralSkeleton.BodySlot` ) |
| `bool` | [add_attachment_point](#method-add-attachment-point)( `attachment_point: GeneralSkeleton.AttachmentSlot` ) |
| `bool` | [remove_body_part](#method-remove-body-part)( `body_part: GeneralSkeleton.BodySlot` ) |
| `bool` | [remove_attachment_point](#method-remove-attachment-point)( `attachment_point: GeneralSkeleton.AttachmentSlot` ) |
| `void` | [clear_all_mesh_slots](#method-clear-all-mesh-slots)() |
| `Dictionary` | [get_debug_info](#method-get-debug-info)() |

## Property descriptions

*Mesh Slot Usage*

### Array[GeneralSkeleton.BodySlot] body_parts_affected = [] {#prop-body-parts-affected}

Which body parts this equipment type can replace/hide

### Array[GeneralSkeleton.AttachmentSlot] attachment_points_used = [] {#prop-attachment-points-used}

Which attachment points this equipment type uses for meshes

## Method descriptions

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### bool affects_body_part( body_part: GeneralSkeleton.BodySlot ) {#method-affects-body-part}

Check if this equipment type affects a specific body part

### bool uses_attachment_point( attachment_point: GeneralSkeleton.AttachmentSlot ) {#method-uses-attachment-point}

Check if this equipment type uses a specific attachment point

### Array[GeneralSkeleton.BodySlot] get_affected_body_parts() {#method-get-affected-body-parts}

Get all body parts affected by this equipment type

### Array[GeneralSkeleton.AttachmentSlot] get_used_attachment_points() {#method-get-used-attachment-points}

Get all attachment points used by this equipment type

### bool affects_any_mesh_slots() {#method-affects-any-mesh-slots}

Check if this equipment type affects any mesh slots

### int get_mesh_slot_count() {#method-get-mesh-slot-count}

Get total number of mesh slots affected

### Array[String] get_meshes_for_body_part( body_part: GeneralSkeleton.BodySlot ) {#method-get-meshes-for-body-part}

Get available mesh names for a specific body part affected by this equipment type

### Array[String] get_meshes_for_attachment_point( attachment_point: GeneralSkeleton.AttachmentSlot ) {#method-get-meshes-for-attachment-point}

Get available mesh names for a specific attachment point used by this equipment type

### String get_body_part_display_name( body_part: GeneralSkeleton.BodySlot ) {#method-get-body-part-display-name}

Get formatted display name for a body part enum

### String get_attachment_point_display_name( attachment_point: GeneralSkeleton.AttachmentSlot ) {#method-get-attachment-point-display-name}

Get formatted display name for an attachment point enum

### String get_body_parts_display_text() {#method-get-body-parts-display-text}

Get human-readable list of affected body parts

### String get_attachment_points_display_text() {#method-get-attachment-points-display-text}

Get human-readable list of used attachment points

### bool is_weapon_type() {#method-is-weapon-type}

Check if this is a weapon equipment type (override in WeaponType)

### String get_category() {#method-get-category}

Get equipment type category for organization

### bool add_body_part( body_part: GeneralSkeleton.BodySlot ) {#method-add-body-part}

Add a body part to the affected list (with validation)

### bool add_attachment_point( attachment_point: GeneralSkeleton.AttachmentSlot ) {#method-add-attachment-point}

Add an attachment point to the used list (with validation)

### bool remove_body_part( body_part: GeneralSkeleton.BodySlot ) {#method-remove-body-part}

Remove a body part from the affected list

### bool remove_attachment_point( attachment_point: GeneralSkeleton.AttachmentSlot ) {#method-remove-attachment-point}

Remove an attachment point from the used list

### void clear_all_mesh_slots() {#method-clear-all-mesh-slots}

Clear all mesh slot assignments

### Dictionary get_debug_info() {#method-get-debug-info}

Get a summary of this equipment type for debugging

