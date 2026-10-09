<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PropertyCategoryUtil

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Helpers for code that builds UI (editor tabs, in-game menu tabs) from Object.get_property_list().

## Description

The property list starts with built-in categories ("RefCounted", "Resource") and a category for the script itself, whose name is the script's FILE name ("settings_config.gd"), not its class name. Neither is something a developer wrote with @export_category, so no tab should be made for them. Matching on a lowercased class name (settingsconfig_gd) or a hand-written list does not work for multi-word class names, which is how a stray "settings_config_gd" tab appeared.

## Methods

| | |
|---|---|
| `bool` | [is_script_category](#method-is-script-category)( `category_name: String, script: Script` ) *static* |

## Method descriptions

### bool is_script_category( category_name: String, script: Script ) {#method-is-script-category}

True for categories that are NOT developer-declared: built-in types and the script's own category

