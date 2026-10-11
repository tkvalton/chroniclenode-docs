<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillFields

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Builders of the editor rows for the parts of skills and trainers that several editors share: lists of requirements and rewards, the tiers of a proficiency or a profession, their specializations, and the cost of a lesson. Every builder adds its rows to `container` and calls `on_changed` after it changed a resource; `rebuild` is called when the change alters which rows should exist. See docs/systems/skill-trainers.md, section 4.

## Methods

| | |
|---|---|
| `void` | [add_resource_list](#method-add-resource-list)( `container: Container, label_text: String, category: String, items: Array, on_changed: Callable, rebuild: Callable` ) *static* |
| `void` | [add_tiers](#method-add-tiers)( `container: Container, tiers: Array[SkillTier], on_changed: Callable, rebuild: Callable` ) *static* |
| `void` | [add_specializations](#method-add-specializations)( `container: Container, specs: Array[SkillSpecialization], is_profession: bool, on_changed: Callable, rebuild: Callable` ) *static* |
| `void` | [add_resource_ids](#method-add-resource-ids)( `container: Container, label_text: String, database_type: String, ids: Array, on_changed: Callable` ) *static* |
| `void` | [add_stat_points](#method-add-stat-points)( `container: Container, label_text: String, bonuses: Dictionary, on_changed: Callable, rebuild: Callable` ) *static* |
| `void` | [add_cost](#method-add-cost)( `container: Container, cost: LessonCost, on_changed: Callable, rebuild: Callable, with_skill_points: bool = true` ) *static* |

## Method descriptions

### void add_resource_list( container: Container, label_text: String, category: String, items: Array, on_changed: Callable, rebuild: Callable ) {#method-add-resource-list}

A list of requirements ("requirement") or rewards ("reward"): each with Edit and a button to take it away, and an Add button. `items` is changed in place

### void add_tiers( container: Container, tiers: Array[SkillTier], on_changed: Callable, rebuild: Callable ) {#method-add-tiers}

The tiers of a proficiency or a profession: a name, the level cap and a line about it for each, and the requirements of training it

### void add_specializations( container: Container, specs: Array[SkillSpecialization], is_profession: bool, on_changed: Callable, rebuild: Callable ) {#method-add-specializations}

The specializations of a proficiency (`is_profession` false) or of a profession: what each gives, and what it takes to choose it

### void add_resource_ids( container: Container, label_text: String, database_type: String, ids: Array, on_changed: Callable ) {#method-add-resource-ids}

A list of ids picked from the catalog of a database type

### void add_stat_points( container: Container, label_text: String, bonuses: Dictionary, on_changed: Callable, rebuild: Callable ) {#method-add-stat-points}

A map of stat id -&gt; points: a row for each with the points, a stat picker to add

### void add_cost( container: Container, cost: LessonCost, on_changed: Callable, rebuild: Callable, with_skill_points: bool = true ) {#method-add-cost}

The cost of a lesson: money, items and skill points (any mix). `cost` is changed in place

