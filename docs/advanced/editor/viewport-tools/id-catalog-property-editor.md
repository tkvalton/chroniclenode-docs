<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IdCatalogPropertyEditor

**Inherits:** `EditorProperty`

Property editor for a whole number that is the id of a database entry (an item, a currency): a button that shows its name and opens the searchable catalog, and a clear button (sets 0). Used by the inspector plugin for the item and the currency of a dropped item placed in the world.

## Variables

| | | |
|---|---|---|
| `Button` | [select_button](#var-select-button) |  |
| `Button` | [clear_button](#var-clear-button) |  |
| `ListCatalog` | [list_catalog](#var-list-catalog) |  |
| `String` | [catalog_type](#var-catalog-type) | `""` |
| `String` | [database_type](#var-database-type) | `""` |

## Variable descriptions

### Button select_button {#var-select-button}

*No description yet.*

### Button clear_button {#var-clear-button}

*No description yet.*

### ListCatalog list_catalog {#var-list-catalog}

*No description yet.*

### String catalog_type = "" {#var-catalog-type}

The kind of list the catalog opens ("items", "currencies")

### String database_type = "" {#var-database-type}

The database type of the entries ("item", "currency")

