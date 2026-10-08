# Shared systems: how they are built

The [shared systems](/basic/shared-systems/) are the tools many editors use. In code they have one thing in common: each is a small family of `Resource` classes that live **inside** other resources, not in the [Database](/advanced/data-and-database/). A requirement is a field of an ability, a reward a field of a quest.
They have no id and no file of their own, and they are saved with their owner.

| System | Base class | A type implements | Stored as |
|---|---|---|---|
| [Requirements](/advanced/shared-systems/requirements) | `Requirement` | `check(entity)` | `Array[Requirement]` |
| [Conditions](/advanced/shared-systems/conditions) | `Condition` (`EntityCondition`, `EncounterCondition`) | `evaluate(argument)` (`evaluate_entity`, `evaluate_encounter`) | `Array[Condition]` |
| [Rewards](/advanced/shared-systems/rewards) | `Reward` | `apply_to_player(player)` | `Array[Reward]` |
| [Groups](/advanced/shared-systems/groups) | `GroupDefinition` | (a database resource; the others store its id) | `Array[int]` of group ids |
| [Text tokens](/advanced/shared-systems/text-tokens) | `TextTokens` (static) | a resolver callable, to add a token | Plain text with `<tokens>` |
| [Formulas](/advanced/shared-systems/formulas) | `CalculationFormula`, `DiminishingReturns` | `evaluate(points)`, `apply(points)` | One resource in a slot |

Groups are the exception that proves the rule: a group has an id and a file because many things point at the same one.

## How a type gets into an editor

Each family is found by **scanning a folder**, so a new type is a new script with no registration:

| System | Folder that is scanned | Who scans it |
|---|---|---|
| Requirements | `res://addons/chroniclenode/data_classes/requirements/types/` | The add dialog (`UnifiedResourceDialog`) |
| Rewards | `res://addons/chroniclenode/data_classes/rewards/types/` | The same dialog |
| Conditions | `.../data_classes/conditions/general/`, `entity/`, `encounter/` | The add-condition dialog (`ConditionalEditDialog`) |
| Conditions on stat effects | the entity conditions folder and `res://src/stat_conditions/` | `StatClassScanner` |
| Formulas | the formulas folder and `res://src/stat_formulas/` | `StatClassScanner` |
| Diminishing returns | the folder and `res://src/stat_diminishing_returns/` | `StatClassScanner` |

The name in a list is made from the file name. Only the formula, diminishing returns and stat condition families have a folder in the **project**; for the others a new script has to sit in the addon folder to be listed.

## The classes

Every class has a page, written from the comments in its script. The page of each system lists its classes in a table. The menu on the left groups them the same way.
