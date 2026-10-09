<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestLine

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A sequence of quests organized into steps that form a complete storyline or mission chain

## Properties

| | | |
|---|---|---|
| `Dictionary` | [quest_steps](#prop-quest-steps) | `{}` |
| `Array[Reward]` | [completion_rewards](#prop-completion-rewards) | `[]` |
| `Array[EventAction]` | [on_start_actions](#prop-on-start-actions) | `[]` |
| `Array[EventAction]` | [on_complete_actions](#prop-on-complete-actions) | `[]` |

## Variables

| | | |
|---|---|---|
| `int` | [current_step](#var-current-step) | `0` |
| `QuestLineState` | [state](#var-state) | `QuestLineState.INACTIVE` |

## Methods

| | |
|---|---|
| `void` | [activate](#method-activate)() |
| `void` | [complete](#method-complete)() |
| `void` | [reset_to_initial_state](#method-reset-to-initial-state)() |
| `void` | [fail](#method-fail)() |
| `void` | [activate_step](#method-activate-step)( `step_number: int` ) |
| `void` | [update_current_step](#method-update-current-step)() |
| `int` | [get_next_step](#method-get-next-step)( `current: int` ) |
| `void` | [on_quest_state_changed](#method-on-quest-state-changed)( `quest: Quest` ) |
| `void` | [add_completion_reward](#method-add-completion-reward)( `reward: Reward` ) |
| `bool` | [remove_completion_reward](#method-remove-completion-reward)( `reward: Reward` ) |
| `void` | [clear_completion_rewards](#method-clear-completion-rewards)() |
| `String` | [get_completion_rewards_summary](#method-get-completion-rewards-summary)() |
| `bool` | [has_completion_rewards](#method-has-completion-rewards)() |
| `int` | [get_completion_reward_count](#method-get-completion-reward-count)() |
| `bool` | [is_completed](#method-is-completed)() |
| `bool` | [is_failed](#method-is-failed)() |
| `bool` | [is_active](#method-is-active)() |
| `bool` | [is_inactive](#method-is-inactive)() |
| `Array` | [get_quest_ids_for_step](#method-get-quest-ids-for-step)( `step_number: int` ) |
| `Array[Quest]` | [get_quests_for_step](#method-get-quests-for-step)( `step_number: int` ) |
| `int` | [get_current_step](#method-get-current-step)() |
| `Array` | [get_all_steps](#method-get-all-steps)() |
| `int` | [get_max_step](#method-get-max-step)() |
| `bool` | [has_step](#method-has-step)( `step_number: int` ) |
| `void` | [add_quest_to_step](#method-add-quest-to-step)( `quest_id: int, step_number: int` ) |
| `bool` | [remove_quest_from_step](#method-remove-quest-from-step)( `quest_id: int, step_number: int` ) |
| `bool` | [move_quest_between_steps](#method-move-quest-between-steps)( `quest_id: int, from_step: int, to_step: int` ) |
| `int` | [get_step_for_quest](#method-get-step-for-quest)( `quest_id: int` ) |
| `bool` | [contains_quest](#method-contains-quest)( `quest_id: int` ) |
| `int` | [get_total_quest_count](#method-get-total-quest-count)() |
| `int` | [create_new_step](#method-create-new-step)() |
| `bool` | [rename_step](#method-rename-step)( `old_step: int, new_step: int` ) |
| `bool` | [delete_step](#method-delete-step)( `step_number: int` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |
| `Dictionary` | [save_questline_data](#method-save-questline-data)() |
| `void` | [load_questline_data](#method-load-questline-data)( `data: Dictionary` ) |
| `Dictionary` | [get_summary](#method-get-summary)() |

## Signals

### questline_state_changed( questline: QuestLine ) {#signal-questline-state-changed}

Emitted when questline state changes

### quest_completed( questline: QuestLine, quest: Quest ) {#signal-quest-completed}

Emitted when a quest in this questline is completed

### step_completed( questline: QuestLine, step: int ) {#signal-step-completed}

Emitted when all quests in a step are completed

### reward_applied( questline: QuestLine, reward: Reward ) {#signal-reward-applied}

Emitted when a reward is applied

### quest_activation_requested( questline: QuestLine, quest_id: int ) {#signal-quest-activation-requested}

Emitted when questline needs a quest activated (handled by EventManager)

## Enumerations

### enum QuestLineState {#enum-questlinestate}

- **INACTIVE** = `0`
- **ACTIVE** = `1`
- **COMPLETED** = `2`
- **FAILED** = `3`

## Property descriptions

### Dictionary quest_steps =  {#prop-quest-steps}

Dictionary organizing quests by step number - step_number: Array[quest_id]

### Array[Reward] completion_rewards = [] {#prop-completion-rewards}

Rewards granted when the entire questline is completed (bonus rewards)

### Array[EventAction] on_start_actions = [] {#prop-on-start-actions}

Triggers executed when questline is activated (for world-state changes)

### Array[EventAction] on_complete_actions = [] {#prop-on-complete-actions}

Triggers executed when questline is completed (for world-state changes)

## Variable descriptions

### int current_step = 0 {#var-current-step}

Current active step in the questline

### QuestLineState state = QuestLineState.INACTIVE {#var-state}

Current state of the questline

## Method descriptions

### void activate() {#method-activate}

Activates the questline and its first step

### void complete() {#method-complete}

Marks the questline as completed and grants rewards

### void reset_to_initial_state() {#method-reset-to-initial-state}

Everything as in a new game: not started, at the first step, hearing no quest

### void fail() {#method-fail}

Marks the questline as failed

### void activate_step( step_number: int ) {#method-activate-step}

Activates all quests in the specified step

### void update_current_step() {#method-update-current-step}

Checks if all quests in the current step are completed to advance to next step

### int get_next_step( current: int ) {#method-get-next-step}

Get the next step after the given step

### void on_quest_state_changed( quest: Quest ) {#method-on-quest-state-changed}

Called when a quest's state changes (to be connected by EventManager)

### void add_completion_reward( reward: Reward ) {#method-add-completion-reward}

Add a reward to this questline's completion rewards

### bool remove_completion_reward( reward: Reward ) {#method-remove-completion-reward}

Remove a reward from this questline's completion rewards

### void clear_completion_rewards() {#method-clear-completion-rewards}

Clear all completion rewards

### String get_completion_rewards_summary() {#method-get-completion-rewards-summary}

Get a summary of all completion rewards

### bool has_completion_rewards() {#method-has-completion-rewards}

Check if questline has completion rewards

### int get_completion_reward_count() {#method-get-completion-reward-count}

Get completion reward count

### bool is_completed() {#method-is-completed}

Returns true if questline is completed

### bool is_failed() {#method-is-failed}

Returns true if questline is failed

### bool is_active() {#method-is-active}

Returns true if questline is active

### bool is_inactive() {#method-is-inactive}

Returns true if questline is inactive

### Array get_quest_ids_for_step( step_number: int ) {#method-get-quest-ids-for-step}

Get all quest IDs for a specific step

### Array[Quest] get_quests_for_step( step_number: int ) {#method-get-quests-for-step}

Get all quest objects for a specific step

### int get_current_step() {#method-get-current-step}

Get the current active step

### Array get_all_steps() {#method-get-all-steps}

Get all step numbers in this questline

### int get_max_step() {#method-get-max-step}

Get the highest step number in the questline

### bool has_step( step_number: int ) {#method-has-step}

Check if a step exists in this questline

### void add_quest_to_step( quest_id: int, step_number: int ) {#method-add-quest-to-step}

Add a quest to a specific step

### bool remove_quest_from_step( quest_id: int, step_number: int ) {#method-remove-quest-from-step}

Remove a quest from a specific step

### bool move_quest_between_steps( quest_id: int, from_step: int, to_step: int ) {#method-move-quest-between-steps}

Move a quest from one step to another

### int get_step_for_quest( quest_id: int ) {#method-get-step-for-quest}

Get which step contains a specific quest

### bool contains_quest( quest_id: int ) {#method-contains-quest}

Check if a quest is in this questline

### int get_total_quest_count() {#method-get-total-quest-count}

Get total number of quests in the questline

### int create_new_step() {#method-create-new-step}

Create a new step with the next available number

### bool rename_step( old_step: int, new_step: int ) {#method-rename-step}

Rename a step (change its number)

### bool delete_step( step_number: int ) {#method-delete-step}

Delete a step and all its quests

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*

### Dictionary save_questline_data() {#method-save-questline-data}

Save questline state to a dictionary

### void load_questline_data( data: Dictionary ) {#method-load-questline-data}

Load questline state from saved data

### Dictionary get_summary() {#method-get-summary}

*No description yet.*

