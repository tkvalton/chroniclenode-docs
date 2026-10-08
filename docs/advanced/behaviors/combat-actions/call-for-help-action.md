<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CallForHelpAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Properties

| | | |
|---|---|---|
| `SearchScope` | [search_scope](#prop-search-scope) | `SearchScope.ANY_ENTITY` |
| `float` | [call_range](#prop-call-range) | `15.0` |
| `int` | [help_shout_effect_id](#prop-help-shout-effect-id) | `0` |

## Enumerations

### enum SearchScope {#enum-searchscope}

- **ANY_ENTITY** = `0` - Search all entities in range (original behavior)
- **ENCOUNTER_ONLY** = `1` - Only search within current encounter
- **ENCOUNTER_PREFERRED** = `2` - Prefer encounter entities, fallback to any if encounter empty

## Property descriptions

### SearchScope search_scope = SearchScope.ANY_ENTITY {#prop-search-scope}

Where to search for allies

### float call_range = 15.0 {#prop-call-range}

Range to search for allies

### int help_shout_effect_id = 0 {#prop-help-shout-effect-id}

Optional effect to apply when calling for help

