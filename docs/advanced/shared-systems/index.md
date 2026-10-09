# Shared systems: how they are built

The [shared systems](/basic/shared-systems/) are the tools many editors use. In code they have one thing in common: each is a small family of `Resource` classes that live **inside** other resources, not in the [Database](/advanced/data-and-database/). A requirement is a field of an ability, a reward a field of a quest.
They have no id and no file of their own, and they are saved with their owner.

| System | Base class | A type implements | Stored as |
|---|---|---|---|
| [Requirements](/advanced/shared-systems/requirements) | [`Requirement`](/advanced/shared-systems/requirements/requirement) | `check(entity)` | `Array[Requirement]` |
| [Conditions](/advanced/shared-systems/conditions) | [`Condition`](/advanced/shared-systems/condition-bases/condition) ([`EntityCondition`](/advanced/shared-systems/condition-bases/entity-condition), [`EncounterCondition`](/advanced/shared-systems/condition-bases/encounter-condition)) | `evaluate(argument)` (`evaluate_entity`, `evaluate_encounter`) | `Array[Condition]` |
| [Rewards](/advanced/shared-systems/rewards) | [`Reward`](/advanced/shared-systems/rewards/reward) | `apply_to_player(player)` | `Array[Reward]` |
| [Groups](/advanced/shared-systems/groups) | [`GroupDefinition`](/advanced/shared-systems/groups/group-definition) | (a database resource; the others store its id) | `Array[int]` of group ids |
| [Text tokens](/advanced/shared-systems/text-tokens) | [`TextTokens`](/advanced/shared-systems/text-tokens/text-tokens) (static) | a resolver callable, to add a token | Plain text with `<tokens>` |
| [Formulas](/advanced/shared-systems/formulas) | [`CalculationFormula`](/advanced/shared-systems/formulas/calculation-formula), [`DiminishingReturns`](/advanced/shared-systems/diminishing-returns/diminishing-returns) | `evaluate(points)`, `apply(points)` | One resource in a slot |

Groups are the exception that proves the rule: a group has an id and a file because many things point at the same one.

## How a type gets into an editor

Each family is found by **scanning a folder**, so a new type is a new script with no registration:

| System | Folder that is scanned | Who scans it |
|---|---|---|
| Requirements | `res://addons/chroniclenode/data_classes/requirements/types/` and your own `res://src/requirements/` | The add dialog ([`UnifiedResourceDialog`](/advanced/editor/dialogs/unified-resource-dialog)) |
| Rewards | `res://addons/chroniclenode/data_classes/rewards/types/` and your own `res://src/rewards/` | The same dialog |
| Conditions | `.../data_classes/conditions/general/`, `entity/`, `encounter/` and your own `res://src/conditions/` (the **Project** category) | The add-condition dialog ([`ConditionalEditDialog`](/advanced/editor/dialogs/conditional-edit-dialog)) |
| Conditions on stat effects | the entity conditions folder, `res://src/conditions/` and `res://src/stat_conditions/` | [`StatClassScanner`](/advanced/editor/stats/stat-class-scanner) |
| Formulas | the formulas folder and `res://src/stat_formulas/` | `StatClassScanner` |
| Diminishing returns | the folder and `res://src/stat_diminishing_returns/` | `StatClassScanner` |

The name in a list is made from the file name. Every family has an addon folder (the types ChronicleNode ships) and a **project** folder (yours). Put your own types in the project folder: an update of the addon replaces its folders but never `res://src/`. A script placed in the addon folder is found too, but it is lost when the addon is updated. A project folder that does not exist yet is simply skipped.

## The classes

Every class has a page, written from the comments in its script. The page of each system lists its classes in a table. The menu on the left groups them the same way.
