<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AnimationSelectionSocial

**Inherits:** [AnimationSelection](/advanced/assets/selections-animation/animation-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Animation selection for social/behavior animations - supports three different structures

## Properties

| | | |
|---|---|---|
| `SocialCategory` | [category](#prop-category) | `SocialCategory.EMOTE` |
| `String` | [subcategory](#prop-subcategory) | `""  # e.g., "wave", "dance", "sit"` |
| `String` | [reference_library](#prop-reference-library) | `""  # What entity library was used` |

## Methods

| | |
|---|---|
| `String` | [get_animation_name](#method-get-animation-name)( `context: String = ""` ) |
| `String` | [get_category_name](#method-get-category-name)() |
| `String` | [get_description](#method-get-description)() |

## Enumerations

### enum SocialCategory {#enum-socialcategory}

- **EMOTE** = `0`
- **RANDOM** = `1`

## Property descriptions

### SocialCategory category = SocialCategory.EMOTE {#prop-category}

*No description yet.*

### String subcategory = ""  # e.g., "wave", "dance", "sit" {#prop-subcategory}

*No description yet.*

### String reference_library = ""  # What entity library was used {#prop-reference-library}

*No description yet.*

## Method descriptions

### String get_animation_name( context: String = "" ) {#method-get-animation-name}

Get social animation name

### String get_category_name() {#method-get-category-name}

Get category name as string

### String get_description() {#method-get-description}

Get description for display purposes

