<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AnimationSelectionAbility

**Inherits:** [AnimationSelection](/advanced/assets/selections-animation/animation-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Enhanced animation selection for abilities with per-library animation mappings Now supports data-driven weapon animation tags from WeaponClassDefinition

## Properties

| | | |
|---|---|---|
| `AbilityCategory` | [category](#prop-category) | `AbilityCategory.CASTING` |
| `Dictionary` | [library_animations](#prop-library-animations) | `{}` |
| `String` | [fallback_animation](#prop-fallback-animation) | `""` |
| `WeaponAnimationMode` | [weapon_mode](#prop-weapon-mode) | `WeaponAnimationMode.AUTO_FROM_EQUIPPED` |
| `String` | [specific_weapon_type](#prop-specific-weapon-type) | `""  # Only used if weapon_mode == SPECIFIC_WEAPON` |
| `HandPreference` | [hand_preference](#prop-hand-preference) | `HandPreference.AUTO` |
| `String` | [reference_library](#prop-reference-library) | `""` |

## Methods

| | |
|---|---|
| `String` | [get_animation_name](#method-get-animation-name)( `context: String = ""` ) |
| `String` | [get_category_name](#method-get-category-name)() |
| `bool` | [is_weapon_category](#method-is-weapon-category)() |
| `String` | [get_category_display_name](#method-get-category-display-name)() |
| `String` | [get_hand_preference_display_name](#method-get-hand-preference-display-name)() |
| `String` | [get_description](#method-get-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `Dictionary` | [get_animation_path_components](#method-get-animation-path-components)() |
| `void` | [set_library_animation](#method-set-library-animation)( `library_name: String, animation_name: String` ) |
| `String` | [get_library_animation](#method-get-library-animation)( `library_name: String` ) |
| `bool` | [has_library_animation](#method-has-library-animation)( `library_name: String` ) |
| `Array[String]` | [get_mapped_libraries](#method-get-mapped-libraries)() |
| `AnimationSelectionAbility` | [create_from_category_string](#method-create-from-category-string)( `category_string: String` ) *static* |
| `AbilityCategory` | [get_category_enum_from_string](#method-get-category-enum-from-string)( `category_string: String` ) *static* |
| `HandPreference` | [get_hand_preference_enum_from_string](#method-get-hand-preference-enum-from-string)( `hand_string: String` ) *static* |
| `Array[String]` | [get_all_category_names](#method-get-all-category-names)() *static* |
| `Array[String]` | [get_all_category_display_names](#method-get-all-category-display-names)() *static* |

## Enumerations

### enum AbilityCategory {#enum-abilitycategory}

- **CASTING** = `0`
- **SPELL_CAST** = `1`
- **WEAPON** = `2`
- **AIM** = `3`
- **RELOAD** = `4`

### enum WeaponAnimationMode {#enum-weaponanimationmode}

- **AUTO_FROM_EQUIPPED** = `0`

### enum HandPreference {#enum-handpreference}

- **AUTO** = `0`
- **LEFT_HAND** = `1`
- **RIGHT_HAND** = `2`
- **RANDOM** = `3`

## Property descriptions

### AbilityCategory category = AbilityCategory.CASTING {#prop-category}

*No description yet.*

### Dictionary library_animations =  {#prop-library-animations}

Per-library animation mappings for non-weapon categories Format: &#123;"LibraryName": "AnimationName", "HumanoidMale": "fire_bolt", "HumanoidFemale": "fire_bolt_f"&#125;

### String fallback_animation = "" {#prop-fallback-animation}

Fallback animation name when library is not found in dictionary

### WeaponAnimationMode weapon_mode = WeaponAnimationMode.AUTO_FROM_EQUIPPED {#prop-weapon-mode}

Weapon-specific properties (only used for WEAPON, AIM, RELOAD categories)

### String specific_weapon_type = ""  # Only used if weapon_mode == SPECIFIC_WEAPON {#prop-specific-weapon-type}

*No description yet.*

### HandPreference hand_preference = HandPreference.AUTO {#prop-hand-preference}

*No description yet.*

### String reference_library = "" {#prop-reference-library}

Reference library used in editor (for previewing/template)

## Method descriptions

### String get_animation_name( context: String = "" ) {#method-get-animation-name}

Get animation name - context is entity_library_name for non-weapon, weapon_tag for weapon categories For weapon categories with AUTO_FROM_EQUIPPED, the weapon_tag comes from UseStrategy.get_weapon_animation_tag() which reads from WeaponClassDefinition.attack_tag (already includes hand suffix like "_r" or "_l")

### String get_category_name() {#method-get-category-name}

Get category name as string that matches database structure

### bool is_weapon_category() {#method-is-weapon-category}

Check if this is a weapon-based category (weapon, aim, reload)

### String get_category_display_name() {#method-get-category-display-name}

Get display name for category (user-friendly)

### String get_hand_preference_display_name() {#method-get-hand-preference-display-name}

Get display name for hand preference (for UI)

### String get_description() {#method-get-description}

Get description for display purposes

### bool is_valid() {#method-is-valid}

Validate that the selection has all required properties set

### Dictionary get_animation_path_components() {#method-get-animation-path-components}

Get appropriate animation path for DatabaseAnimation calls

### void set_library_animation( library_name: String, animation_name: String ) {#method-set-library-animation}

Set animation for a specific library

### String get_library_animation( library_name: String ) {#method-get-library-animation}

Get animation for a specific library (or empty string if not set)

### bool has_library_animation( library_name: String ) {#method-has-library-animation}

Check if a library has an animation mapped

### Array[String] get_mapped_libraries() {#method-get-mapped-libraries}

Get all libraries that have animations mapped

### AnimationSelectionAbility create_from_category_string( category_string: String ) {#method-create-from-category-string}

Static method to create from category string (for dialog)

### AbilityCategory get_category_enum_from_string( category_string: String ) {#method-get-category-enum-from-string}

Get category enum from string (for dialog use)

### HandPreference get_hand_preference_enum_from_string( hand_string: String ) {#method-get-hand-preference-enum-from-string}

Get hand preference enum from string (for dialog use)

### Array[String] get_all_category_names() {#method-get-all-category-names}

Get all category names (for UI population)

### Array[String] get_all_category_display_names() {#method-get-all-category-display-names}

Get all category display names (for UI population)

