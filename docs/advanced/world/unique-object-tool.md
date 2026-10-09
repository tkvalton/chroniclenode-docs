# The Unique Object tool: how it is built

The panel is a [`UniqueObjectInspector`](/advanced/world/editor-tools/unique-object-inspector), added to the editor's **bottom panel** by `plugin.gd` (`_setup_unique_object_inspector`, `add_control_to_bottom_panel(..., "Unique Object")`).

## Showing and hiding

`plugin.gd` listens to the editor's selection (`_on_selection_changed`). With one selected node that `_is_unique_object_node` (an [`NPC`](/advanced/entities/runtime/npc), an [`InteractableObject`](/advanced/entities/runtime/interactable-object), a [`Region`](/advanced/world/runtime/region) or an [`Encounter`](/advanced/world/runtime/encounter), tested by class and by the file name of the script), it calls `unique_object_inspector.load_node(node)` and brings the panel to the front. Any other selection calls `clear_inspector()`. A `Region` keeps its record in `region_data` and has one setting, so it gets a small panel of its own (`_populate_region`): the area name, written through the node's `area_name` (which saves the record), and the world and position.

`load_node(node)` reads the node's `unique_data`, keeps it, and builds the controls ("No unique data available for this node" if there is none).

## Building the controls from the data

The inspector **reflects** the resource: it walks `get_property_list()` of the unique data and builds one control per exported property, so a field you add to a unique data class shows up by itself.

| Part of the property list | In the panel |
|---|---|
| `@export_group` | A button in the header and a section |
| `@export_subgroup` | A column inside the section |
| `int`, `float`, `bool`, `String`, `enum`, `Vector3` | A spin box, a check box, a line edit, a drop-down, three spin boxes |
| A property named `*_id` that [`PropertySelectorRegistry`](/advanced/editor/tools/property-selector-registry) knows (`faction_id`, `loot_table_override`...) | A database picker |
| [`Interaction`](/advanced/entities/interactions/interaction) | The interaction editor |
| [`StatsData`](/advanced/entity-stats/stats-and-pools/stats-data) (`stats_override`) | A tick box: ticking calls `set_stats_override_from_definition` (a copy of the definition's stats) and shows a [`StatsDataEditor`](/advanced/editor/entities/stats-data-editor) for it; unticking sets the override to `null` |
| `Dictionary` (`inventory_override`) | The inventory editor |
| `Array[EncounterReaction]` | The reaction editor ([`EncounterReactionsEditor`](/advanced/world/editor-tools/encounter-reactions-editor)) |
| Other resources, arrays and dictionaries | A "not set" / "[n items]" row |

Some properties are never shown (`EXCLUDED_PROPERTIES`): the identity fields (`id`, `display_name`, `icon`, `description`), the ones the node setup manages (`definition_id`, `map_id`) and the ones that come from the transform (`world_position`, `world_rotation`, the facing directions).

Every change goes through `_on_property_changed(name, value)`, which writes to the unique data and saves it with [`Database.save_resource`](/advanced/data-and-database/database-classes/database).

## The "empty means the definition" convention

An override field has a value that means "no override" (`0`, `-1`, empty string, `Vector3.ZERO`). The **definition-aware getters** apply it: [`UniqueEntityData.get_effective_level(definition)`](/advanced/world/world-data/unique-entity-data), `get_effective_faction`, `get_effective_behavior_script`, `get_effective_stats` and the like, and [`UniqueInteractableData.get_effective_cooldown_duration`](/advanced/world/world-data/unique-interactable-data)... Game code asks the getter, never the field. Add a field the same way: an export with a "none" default, and a `get_effective_*` that falls back to the definition.

## Extending

- A new override of NPCs: add the `@export` to `UniqueEntityData` in a group or subgroup, a `get_effective_*`, and use the getter where the NPC is built ([`Entity`](/advanced/entities/runtime/entity)/`NPC` initialization).
- A new field type: add a branch to `_create_property_control`.

## See also

- [World: how it is built](/advanced/world/), [Definitions and instances](/advanced/definitions-and-instances).
