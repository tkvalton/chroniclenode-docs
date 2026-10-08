<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseAnimation

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The animation library of the project, read from the folders under `res://src/data/animations/`.

## Description

The first folder level is an ENTITY TYPE (humanoid, monster ...). Inside it are the animation PACKAGES that ANIMATION_PACKAGES lists (ability animations, core, social, status effects), each with categories and subcategories. An entity type can name a parent package in its `animation_map.tres` (made automatically), and the animations it does not have are taken from its parent. The folders are scanned once on first use; call refresh_database after adding files.

## Methods

| | |
|---|---|
| `void` | [ensure_directories](#method-ensure-directories)() *static* |
| `void` | [ensure_initialized](#method-ensure-initialized)() *static* |
| `void` | [initialize](#method-initialize)() *static* |
| `void` | [refresh_database](#method-refresh-database)() *static* |
| `String` | [get_parent_package](#method-get-parent-package)( `entity_type: String` ) *static* |
| `bool` | [inherits_from](#method-inherits-from)( `entity_type: String, potential_parent: String` ) *static* |
| `Array[String]` | [get_inheritance_chain](#method-get-inheritance-chain)( `entity_type: String` ) *static* |
| `AnimationCoreMap` | [get_animation_map](#method-get-animation-map)( `entity_type: String` ) *static* |
| `AnimationLibrary` | [build_library_for_entity](#method-build-library-for-entity)( `entity_type: String` ) *static* |
| `Array` | [get_entity_types](#method-get-entity-types)() *static* |
| `Array` | [get_package_categories](#method-get-package-categories)( `entity_type: String, package: String` ) *static* |
| `Array` | [get_category_subcategories](#method-get-category-subcategories)( `entity_type: String, package: String, category: String, inherit_from_parent: bool = true` ) *static* |
| `Array` | [get_animations](#method-get-animations)( `entity_type: String, package: String, category: String, subcategory: String` ) *static* |
| `Array` | [get_flat_category_animations](#method-get-flat-category-animations)( `entity_type: String, package: String, category: String, inherit_from_parent: bool = true` ) *static* |
| `bool` | [is_flat_category](#method-is-flat-category)( `package: String, category: String` ) *static* |
| `Array` | [get_available_status_effects](#method-get-available-status-effects)() *static* |
| `Array` | [get_entities_with_package](#method-get-entities-with-package)( `package: String` ) *static* |
| `Array` | [get_organized_ability_animations](#method-get-organized-ability-animations)( `entity_type: String, package: String, category: String, subcategory: String` ) *static* |
| `Array` | [get_available_animations](#method-get-available-animations)( `entity_type: String, package: String, category: String, subcategory: String` ) *static* |
| `String` | [get_category_display_name](#method-get-category-display-name)( `package: String, category: String` ) *static* |

## Constants

- `String` **ANIMATIONS_RESOURCES_PATH** = `"res://src/data/animations/"`
- `Dictionary` **ANIMATION_PACKAGES** = `{`

## Method descriptions

### void ensure_directories() {#method-ensure-directories}

Ensure all required directories exist

### void ensure_initialized() {#method-ensure-initialized}

Makes the animations folder (when missing) and scans the animations once.

### void initialize() {#method-initialize}

Initialize the animation database by scanning all entity types

### void refresh_database() {#method-refresh-database}

Force refresh of the entire database (useful for development)

### String get_parent_package( entity_type: String ) {#method-get-parent-package}

Get the parent package for an entity type (cached)

### bool inherits_from( entity_type: String, potential_parent: String ) {#method-inherits-from}

Check if entity_type inherits from potential_parent (directly or indirectly)

### Array[String] get_inheritance_chain( entity_type: String ) {#method-get-inheritance-chain}

Get the full inheritance chain for an entity type

### AnimationCoreMap get_animation_map( entity_type: String ) {#method-get-animation-map}

Get animation map for a specific entity type

### AnimationLibrary build_library_for_entity( entity_type: String ) {#method-build-library-for-entity}

Build an AnimationLibrary for a specific entity (includes parent animations)

### Array get_entity_types() {#method-get-entity-types}

Get all available entity types

### Array get_package_categories( entity_type: String, package: String ) {#method-get-package-categories}

Get available categories within a package for an entity

### Array get_category_subcategories( entity_type: String, package: String, category: String, inherit_from_parent: bool = true ) {#method-get-category-subcategories}

Get available subcategories within a category for an entity package Includes parent package subcategories if inherit_from_parent is true

### Array get_animations( entity_type: String, package: String, category: String, subcategory: String ) {#method-get-animations}

Get animations for a specific path with parent fallback

### Array get_flat_category_animations( entity_type: String, package: String, category: String, inherit_from_parent: bool = true ) {#method-get-flat-category-animations}

Get animations from a flat category (returns array directly, not subcategories) Used for categories like casting, spell_cast, special_attack, aim, reload

### bool is_flat_category( package: String, category: String ) {#method-is-flat-category}

Check if a category uses flat structure (array) vs categorized (dictionary with subcategories)

### Array get_available_status_effects() {#method-get-available-status-effects}

Get all available status effects from all entities

### Array get_entities_with_package( package: String ) {#method-get-entities-with-package}

Get entities that have a specific package

### Array get_organized_ability_animations( entity_type: String, package: String, category: String, subcategory: String ) {#method-get-organized-ability-animations}

Get organized ability animations with parent fallback

### Array get_available_animations( entity_type: String, package: String, category: String, subcategory: String ) {#method-get-available-animations}

Get available animations for a specific entity, package, category, and subcategory Returns animations in the correct sequence based on category type Includes parent package fallback

### String get_category_display_name( package: String, category: String ) {#method-get-category-display-name}

Get display name for a category (converts internal names to user-friendly names)

