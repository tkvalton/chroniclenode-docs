<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnTablesEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The Spawn Tables editor (the SpawnTableDefinition database, World &gt; Spawn Tables): a name, a description and the lines of the table. A line says what can appear (an NPC, an interactable, a dropped item, some money, a loot table roll, another table, or nothing), how likely it is next to the others (its weight, with the chance it gives in percent), and for NPCs how many appear together, at what level and whether they fight as one; for items and money how many. **Roll 100 times** shows what the table gives. See docs: World &gt; Spawn Tables.

## Variables

| | | |
|---|---|---|
| `SpawnTableDefinition:` | [current_table](#var-current-table) |  |
| `FoldableContainer` | [entries_section](#var-entries-section) |  |
| `VBoxContainer` | [entries_box](#var-entries-box) |  |
| `Label` | [problems_label](#var-problems-label) |  |
| `Label` | [roll_label](#var-roll-label) |  |
| `Array[Label]` | [chance_labels](#var-chance-labels) | `[]` |

## Variable descriptions

### SpawnTableDefinition: current_table {#var-current-table}

*No description yet.*

### FoldableContainer entries_section {#var-entries-section}

*No description yet.*

### VBoxContainer entries_box {#var-entries-box}

*No description yet.*

### Label problems_label {#var-problems-label}

*No description yet.*

### Label roll_label {#var-roll-label}

*No description yet.*

### Array[Label] chance_labels = [] {#var-chance-labels}

*No description yet.*

