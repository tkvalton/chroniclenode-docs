# Trainers, tiers and professions: how they are built

The [Trainers](/basic/behaviors/trainers), [Skill tiers and specializations](/basic/shared-systems/skill-tiers-and-specializations) and [Craft Schools](/basic/items/craft-schools) chapters explain the options. This page explains the code.

## The pieces

| Class | What it is |
|---|---|
| [`TrainerDefinition`](/advanced/items/trainers/trainer-definition) | A [`DatabaseResource`](/advanced/data-and-database/database-classes/database-resource) (type `trainer`, `res://src/data/trainers/`): `lessons`, `greeting`, the standing (`faction_id`, `reputation_prices`, `refuses_below`). `get_price_multiplier(hub)`, `refuses(hub)` |
| [`TrainerLesson`](/advanced/items/trainers/trainer-lesson) | One thing sold. `get_steps`, `get_offer`, `build_rewards`, `learn` |
| [`LessonCost`](/advanced/items/trainers/lesson-cost) | Money, items and skill points: `get_blocker`, `pay`, `refund`, `describe`, all scaled by a multiplier and rounded up |
| [`ReputationPrice`](/advanced/items/trainers/reputation-price) | A row of a price table by reputation. `multiplier_for(rows, reputation)` |
| [`TrainerInteraction`](/advanced/entities/interactions/trainer-interaction) | The interaction: opens the panel, `get_offers(player)`, `learn(lesson, player)`, signal `lesson_learned`. Closes when the player walks away |
| [`TrainerPanelUI`](/advanced/user-interface/interaction-panels/trainer-panel-ui) | The list of lessons, built in code. [`InGameUI.open_trainer_panel`](/advanced/user-interface/scenes/in-game-ui) makes it with the other windows. A game can replace it: the interaction gives it everything |
| [`SkillTier`](/advanced/items/skills/skill-tier), [`SkillSpecialization`](/advanced/items/skills/skill-specialization) | The tiers and the specializations of a skill (the lists are `tiers` and `specializations` of [`ProficiencyDefinition`](/advanced/entity-stats/definitions/proficiency-definition) and [`CraftSchoolDefinition`](/advanced/items/crafting/craft-school-definition)) |

## A lesson

`TrainerLesson.get_steps(player)` answers `{current, ceiling, blocker}` for what the lesson teaches: the step the character is at (a rank, a level, a tier index, 0 or 1), the highest the lesson sells, and why it cannot go on now (the ability is missing, the tier before is not reached, the level is at the cap).

`get_offer(player, trainer, hub)` makes everything the panel shows:

1. A lesson with `current >= ceiling` is **known** (not a *rewards* lesson, which is repeatable).
2. A `blocker`, then the implicit requirements (`get_implicit_requirements`: the requirements of the tier or the specialization), then the `requirements` of the lesson, make it **locked** with the message of the first that fails. `visible` is false when it is locked and `hide_until_requirements_met` is on.
3. Otherwise it is **available**. The price multiplier is `price_formula(to_step)` (or the number of steps for levels) × `price_multiplier` × the standing multiplier of the trainer; `LessonCost.get_blocker` says whether the character can pay (`affordable`).

`learn` builds the **ordinary rewards** ([`AbilityReward`](/advanced/shared-systems/rewards/ability-reward), [`AbilityRankReward`](/advanced/shared-systems/rewards/ability-rank-reward), [`ProficiencyReward`](/advanced/shared-systems/rewards/proficiency-reward), [`ProfessionReward`](/advanced/shared-systems/rewards/profession-reward), [`CraftingSkillPointReward`](/advanced/shared-systems/rewards/crafting-skill-point-reward), [`SkillTierReward`](/advanced/shared-systems/rewards/skill-tier-reward), [`SpecializationReward`](/advanced/shared-systems/rewards/specialization-reward), [`CraftingRecipeReward`](/advanced/shared-systems/rewards/crafting-recipe-reward), or the rewards of the lesson), takes the cost (`LessonCost.pay`, all or nothing) and gives them with [`Player.grant_reward(reward, true)`](/advanced/entities/runtime/player). If one fails the earlier ones are unapplied and the cost is refunded. Because the abilities are given **for good**, they are `PERSISTENT` and saved with the character (see [ability ranks](/advanced/abilities-and-effects/ranks)).

## Who pays

`LessonCost` takes money and items from `player.components.inventory()` and skill points from the pools of the player. With a [shared party inventory](/basic/entities/shared-inventory) that inventory *is* the shared one, so no trainer code knows about sharing.

### The shared inventory

[`PartyManager._setup_sharing`](/advanced/entities/runtime/party-manager) makes the shared bag ([`InventoryComponent`](/advanced/items/runtime/inventory-component) with `is_shared = true`, the size of `shared_bag_slots`) or the shared purse (a hidden inventory used only for money) from [`GameplayConfig.inventory_sharing`](/advanced/game-settings/config/gameplay-config). When a player's components are made, [`EntityComponentRegistry._create_inventory_data`](/advanced/entities/runtime/entity-component-registry) asks `PartyManager.make_member_inventory(own)`: with a shared bag every member's `components.inventory()` is **the same object**; with a shared purse each member keeps their own bag, and `InventoryComponent.attach_wallet(wallet)` makes its currency functions (`get_currency_amount`, `set_currency_amount`, `get_all_currencies`, `clear_all_currency`) work on the purse (its signals are forwarded). Money a member had before is moved into the purse. Because the object is shared, [`Entity._speaks_for_the_bag()`](/advanced/entities/runtime/entity) lets only the member that is `is_current_player` report `entity_item_received` and `entity_item_removed`. A save of each member holds the same bag; loading it again is the same bag, so nothing is counted twice. `Entity.initialize_entity` does not resize a shared bag from the carry weight. `PartyManager.reset_shared_inventory` runs on a new game.

## Professions: the manager

[`CraftingManager`](/advanced/items/crafting/crafting-manager) keeps `_sets`: owner key → the array of [`CraftSchoolInstance`](/advanced/items/crafting/craft-school-instance)s. The key is `0` (`PARTY_KEY`) while `GameplayConfig.professions_scope` is `PARTY`, and `Entity.get_unique_id()` of the player when it is `CHARACTER`; a character's set is made on first use. Every lookup takes an optional `owner` (`get_craft_school_instance_by_id(id, owner)`, `knows_recipe(recipe, owner)`, `start_craft(player, ...)`); the rewards, requirements, the crafting station, the crafting panel and the trainer pass the player. Saves hold `{"scope", "school_instances" (the party set), "characters": {unique id: set}}`; a save with no `characters` is read as a party save, and a school added to the database since the save gets a new instance.

`CraftSchoolInstance` has `current_tier`, `chosen_specializations`, `is_unlocked` (the profession is learned: `learn_school`, `forget_school`, signal `learned_changed`), `get_level_cap()`, `set_tier`, the specialization functions, and the craft effects (`get_craft_speed_factor`, `get_extra_output`, `get_material_save_chance`, `get_skill_gain_bonus`). `rng` is a `RandomNumberGenerator` that a test can seed.

### How a craft raises the skill

`_on_craft_completed` makes the item, applies the bonuses (`_apply_craft_bonuses`: extra output, the materials back) and then `_gain_skill_from_craft(job)`:

- `factor = recipe.get_skill_up_factor(level)`: 1 for a recipe with no `skill_up_until`, 0 from that level, else the `skill_up_curve` at the position in the range (a straight fall when there is none), held between 0 and 1.
- **Points** mode: `skill_points_per_craft × factor × (1 + bonus)` plus what was left of the last craft; the whole part goes to `add_experience`.
- **Skill-ups** mode: with a chance of `factor × (1 + bonus)` (up to 1) `change_skill_level(1)` and the signal `skill_up`; nothing at the cap of the tier or the highest level.

`CraftSchoolDefinition.get_skill_point_cost_for_level(level)` uses `level_cost_formula(level - 1)` when it has one, else the straight price. [`CraftingRecipeDefinition.get_skill_band(level)`](/advanced/items/crafting/crafting-recipe-definition) gives the colour band (`SkillBand`) for the interface.

## Tiers and specializations in the trackers

[`ProficiencyTracker`](/advanced/entity-stats/runtime/proficiency-tracker) keeps `_tiers` and `_specs` (proficiency id → tier, chosen ids). `get_level_cap` is `SkillTier.cap_for(tiers, tier, max_level)`; `add_experience`, `set_level` and `add_levels` stop there, `set_tier` brings the level down to a lower cap. The stat bonuses of the chosen specializations are put on the character as the **difference** to what is there (`_sync_spec_bonuses`), and again after a load. Saves: `{"level", "experience", "tier", "specializations"}` per proficiency. The choosing rules are in `SkillSpecialization.choose_blocker` (shared by both trackers).

## The new rewards and requirements

`SkillTierReward`, `SpecializationReward` and `ProfessionReward` return tracking data that lets them be taken back (`unapply_from_player`). [`RequirementSkillTier`](/advanced/shared-systems/requirements/requirement-skill-tier), [`RequirementProfession`](/advanced/shared-systems/requirements/requirement-profession), [`RequirementSpecialization`](/advanced/shared-systems/requirements/requirement-specialization), [`RequirementKnowsAbility`](/advanced/shared-systems/requirements/requirement-knows-ability) and [`RequirementKnowsRecipe`](/advanced/shared-systems/requirements/requirement-knows-recipe) are asked with the player. They show up in the dialogs of the editors by themselves (the dialogs list the folders of the types).

## Extending

- A new **kind of lesson**: add it to `TrainerLesson.Teaches`, answer it in `get_steps`, and build its reward in `build_rewards`; the editor lists the kinds in [`TrainerEditor.TEACHES_NAMES`](/advanced/editor/items/trainer-editor) and builds its fields in `_fill_lesson`.
- A new **price part** (a reputation, a key): extend `LessonCost`, or use the *rewards* lesson with requirements.
- Your **own panel**: replace `TrainerPanelUI` in `InGameUI.setup_window_interfaces`, or listen to [`UIManager.open_trainer_interface`](/advanced/managers/game-host/ui-manager); use `TrainerInteraction.get_offers(player)` and `learn(lesson, player)`.

## Pitfalls

- A lesson of *any rewards* has no memory: the trainer cannot tell it was bought. Give it a requirement the reward changes.
- A trainer's lessons are numbered by their place in the list only in the editor; nothing is saved about them.
- The rewards of a **specialization** are given once and are not taken back when it is changed.
- Changing `professions_scope` or `inventory_sharing` on an existing save is not supported.
