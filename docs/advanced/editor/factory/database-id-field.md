<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseIdField

**Inherits:** [ConfigField](/advanced/editor/factory/config-field) < [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

An int property that is the id of a resource of the project (an effect, an ability ...), picked by name from a drop-down of everything of that kind, with an entry for none (0). An id of something that was deleted stays chosen and reads "Missing id". Set the **Database type** (`effect`) in the inspector.

## Properties

| | | |
|---|---|---|
| `String` | [database_type](#prop-database-type) | `"effect"` |
| `String` | [none_text](#prop-none-text) | `"(none)"` |

## Property descriptions

### String database_type = "effect" {#prop-database-type}

The database type the ids belong to (the key of Database.REGISTRY: effect, ability, item ...)

### String none_text = "(none)" {#prop-none-text}

*No description yet.*

