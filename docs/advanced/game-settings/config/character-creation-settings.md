<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterCreationSettings

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

CharacterCreationSettings - Main configuration for the character creation system Defines available templates, profiles (rulesets), color palettes, and class restrictions

## Properties

| | | |
|---|---|---|
| `Array[CharacterDefinition]` | [available_templates](#prop-available-templates) | `[]` |
| `Array[CharacterCreationProfile]` | [skeleton_profiles](#prop-skeleton-profiles) | `[]` |

## Methods

| | |
|---|---|
| `CharacterDefinition` | [get_template](#method-get-template)( `index: int` ) |
| `int` | [get_template_count](#method-get-template-count)() |
| `bool` | [has_template](#method-has-template)( `character_id: int` ) |
| `Array[CharacterDefinition]` | [get_templates_for_class](#method-get-templates-for-class)( `class_id: int` ) |
| `CharacterCreationProfile` | [get_profile_by_id](#method-get-profile-by-id)( `id: String` ) |
| `CharacterCreationProfile` | [get_profile](#method-get-profile)( `index: int` ) |
| `int` | [get_profile_count](#method-get-profile-count)() |
| `Array[String]` | [get_all_profile_ids](#method-get-all-profile-ids)() |
| `bool` | [has_profile](#method-has-profile)( `id: String` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |
| `CharacterCreationSettings` | [get_config](#method-get-config)() *static* |

## Constants

- `const` **CONFIG_PATH** = `"res://src/data/config_data/character_creation_config.tres"`
- `Dictionary` **SETTING_DESCRIPTIONS** = `{`

## Property descriptions

### Array[CharacterDefinition] available_templates = [] {#prop-available-templates}

Pre-made character templates that appear in the character selection list These are CharacterDefinitions that players can choose as starting points

### Array[CharacterCreationProfile] skeleton_profiles = [] {#prop-skeleton-profiles}

Character creation profiles that define body types, facial features, and blend shapes Each profile represents a character archetype (e.g., "Human", "Elf", "Dwarf")

## Method descriptions

### CharacterDefinition get_template( index: int ) {#method-get-template}

Get a template by index

### int get_template_count() {#method-get-template-count}

Get template count

### bool has_template( character_id: int ) {#method-has-template}

Check if a specific template exists

### Array[CharacterDefinition] get_templates_for_class( class_id: int ) {#method-get-templates-for-class}

Get templates for a specific class

### CharacterCreationProfile get_profile_by_id( id: String ) {#method-get-profile-by-id}

Get profile by its unique ID

### CharacterCreationProfile get_profile( index: int ) {#method-get-profile}

Get profile by index

### int get_profile_count() {#method-get-profile-count}

Get profile count

### Array[String] get_all_profile_ids() {#method-get-all-profile-ids}

Get all profile IDs

### bool has_profile( id: String ) {#method-has-profile}

Check if a profile ID exists

### Array[Dictionary] validate() {#method-validate}

Validate the entire configuration

### bool is_valid() {#method-is-valid}

Check if configuration is valid

### CharacterCreationSettings get_config() {#method-get-config}

*No description yet.*

