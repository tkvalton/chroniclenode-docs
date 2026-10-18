<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalizationGenerator

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Makes and updates the tables from the data: it walks the database, collects every text that is translated (see LocalizedFields) with its key, and writes the source texts into the table of each collection. The translations already in a table are kept; a translation whose source text changed is marked "needs review". The Localization tab of the editor calls it. The tests call `collect_all` without saving.

## Methods

| | |
|---|---|
| `Dictionary` | [collect_all](#method-collect-all)( `config: LocalizationConfig = null` ) *static* |
| `Dictionary` | [collect_toolkit](#method-collect-toolkit)( `config: LocalizationConfig` ) *static* |
| `void` | [collect_resource](#method-collect-resource)( `type: String, resource: DatabaseResource, config: LocalizationConfig, rows: Dictionary` ) *static* |
| `Dictionary` | [update_tables](#method-update-tables)( `save: bool = true, config: LocalizationConfig = null` ) *static* |
| `void` | [save_config](#method-save-config)( `config: LocalizationConfig` ) *static* |
| `void` | [save_table](#method-save-table)( `table: LocalizationTable` ) *static* |

## Method descriptions

### Dictionary collect_all( config: LocalizationConfig = null ) {#method-collect-all}

Walks all the database types and returns what has text: collection (type) -&gt; &#123; key -&gt; source text &#125;. The texts are the stored ones.

### Dictionary collect_toolkit( config: LocalizationConfig ) {#method-collect-toolkit}

The words of the interface: every text of a scene (Label, Button ... text, tooltips) and every `Localization.t("...")` or `tr("...")` in the scripts, in the toolkit and in the folders of the game (`LocalizationConfig.interface_folders`). The English text is the key and its own source: word -&gt; word. Placeholders and test text are left out.

### void collect_resource( type: String, resource: DatabaseResource, config: LocalizationConfig, rows: Dictionary ) {#method-collect-resource}

Adds the texts of one resource (and its parts) to `rows`: key -&gt; text. Empty texts are not rows.

### Dictionary update_tables( save: bool = true, config: LocalizationConfig = null ) {#method-update-tables}

Updates the tables of the collections from the data and returns a report: collection -&gt; &#123; added, changed, removed &#125;. With `save` the table files and the config are written; without it the tables are only put in use (the tests).

### void save_config( config: LocalizationConfig ) {#method-save-config}

Saves the config (the editor, after the languages changed).

### void save_table( table: LocalizationTable ) {#method-save-table}

Saves one table (the editor, after a translation changed).

