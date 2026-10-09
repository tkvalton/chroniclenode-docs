<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Quest

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Main quest resource that handles objectives, rewards, and quest state

## Properties

| | | |
|---|---|---|
| `int` | [level](#prop-level) | `0` |
| `FailureBehavior` | [on_fail](#prop-on-fail) | `FailureBehavior.USE_DEFAULT` |
| `AbandonRule` | [abandonable](#prop-abandonable) | `AbandonRule.USE_DEFAULT` |
| `Array[EventAction]` | [on_abandon_actions](#prop-on-abandon-actions) | `[]` |
| `Array[QuestObjective]` | [objectives](#prop-objectives) | `[]` |
| `Array[Reward]` | [rewards](#prop-rewards) | `[]` |
| `Array[Requirement]` | [requirements](#prop-requirements) | `[]` |
| `bool` | [requires_hand_in](#prop-requires-hand-in) | `false` |
| `Array[String]` | [turn_in_text](#prop-turn-in-text) | `[]` |
| `bool` | [is_repeatable](#prop-is-repeatable) | `false` |
| `int` | [repeat_limit](#prop-repeat-limit) | `0` |
| `CooldownType` | [cooldown_type](#prop-cooldown-type) | `CooldownType.NONE` |
| `float` | [cooldown_duration_hours](#prop-cooldown-duration-hours) | `24.0` |
| `int` | [cooldown_reset_hour](#prop-cooldown-reset-hour) | `6` |
| `Array[EventAction]` | [on_start_actions](#prop-on-start-actions) | `[]` |
| `Array[EventAction]` | [on_complete_actions](#prop-on-complete-actions) | `[]` |

## Variables

| | | |
|---|---|---|
| `QuestState` | [state](#var-state) | `QuestState.INACTIVE` |
| `int` | [completion_count](#var-completion-count) | `0` |
| `float` | [cooldown_start_time](#var-cooldown-start-time) | `0.0` |
| `float` | [cooldown_end_time](#var-cooldown-end-time) | `0.0` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [set_system_hub](#method-set-system-hub)( `p_system_hub: GameHost.SystemHub` ) |
| `bool` | [can_start](#method-can-start)() |
| `bool` | [activate](#method-activate)() |
| `bool` | [complete](#method-complete)() |
| `void` | [fail](#method-fail)() |
| `FailureBehavior` | [get_failure_behavior](#method-get-failure-behavior)() |
| `bool` | [is_abandonable](#method-is-abandonable)() |
| `bool` | [abandon](#method-abandon)() |
| `void` | [reset_to_initial_state](#method-reset-to-initial-state)() |
| `void` | [reset](#method-reset)() |
| `void` | [connect_objectives](#method-connect-objectives)() |
| `void` | [on_objective_state_changed](#method-on-objective-state-changed)( `objective: QuestObjective` ) |
| `void` | [update_objectives](#method-update-objectives)() |
| `bool` | [complete_objective](#method-complete-objective)( `objective_id: int` ) |
| `bool` | [fail_objective](#method-fail-objective)( `objective_id: int` ) |
| `bool` | [is_ready_to_hand_in](#method-is-ready-to-hand-in)() |
| `String` | [get_turn_in_text](#method-get-turn-in-text)( `language_index: int = 0` ) |
| `bool` | [can_repeat](#method-can-repeat)() |
| `bool` | [can_accept](#method-can-accept)( `entity: Entity = null` ) |
| `Array[Requirement]` | [get_failed_requirements](#method-get-failed-requirements)( `entity: Entity = null` ) |
| `Array[String]` | [get_requirement_failure_messages](#method-get-requirement-failure-messages)( `entity: Entity = null` ) |
| `String` | [get_requirements_summary](#method-get-requirements-summary)() |
| `bool` | [has_requirements](#method-has-requirements)() |
| `int` | [get_requirement_count](#method-get-requirement-count)() |
| `bool` | [has_reached_repeat_limit](#method-has-reached-repeat-limit)() |
| `int` | [get_remaining_repeats](#method-get-remaining-repeats)() |
| `bool` | [is_on_cooldown](#method-is-on-cooldown)() |
| `float` | [get_remaining_cooldown_hours](#method-get-remaining-cooldown-hours)() |
| `void` | [add_reward](#method-add-reward)( `reward: Reward` ) |
| `bool` | [remove_reward](#method-remove-reward)( `reward: Reward` ) |
| `void` | [clear_rewards](#method-clear-rewards)() |
| `String` | [get_rewards_summary](#method-get-rewards-summary)() |
| `bool` | [has_rewards](#method-has-rewards)() |
| `int` | [get_reward_count](#method-get-reward-count)() |
| `GameplayConfig.QuestLevelDifficulty` | [get_level_difficulty](#method-get-level-difficulty)( `player_level: int` ) |
| `String` | [get_level_text](#method-get-level-text)() |
| `String` | [get_display_title](#method-get-display-title)( `player: Entity = null` ) |
| `String` | [get_display_description](#method-get-display-description)( `player: Entity = null` ) |
| `bool` | [is_completed](#method-is-completed)() |
| `bool` | [is_failed](#method-is-failed)() |
| `bool` | [is_active](#method-is-active)() |
| `bool` | [is_inactive](#method-is-inactive)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |
| `Dictionary` | [save_quest_data](#method-save-quest-data)() |
| `void` | [load_quest_data](#method-load-quest-data)( `data: Dictionary` ) |
| `Dictionary` | [get_summary](#method-get-summary)() |

## Signals

### quest_state_changed( quest: Quest ) {#signal-quest-state-changed}

Emitted when quest state changes

### objective_completed( quest: Quest, objective: QuestObjective ) {#signal-objective-completed}

Emitted when an objective is completed

### quest_abandoned( quest: Quest ) {#signal-quest-abandoned}

Emitted when the player gives the quest up (it is not a failure: nothing that waits for a quest to fail is told)

### reward_applied( quest: Quest, reward: Reward ) {#signal-reward-applied}

Emitted when a reward is applied

### reward_blocked( quest: Quest, reason: String ) {#signal-reward-blocked}

Emitted when a quest could not complete because its rewards do not fit (the player was warned)

### quest_cooldown_ended( quest: Quest ) {#signal-quest-cooldown-ended}

Emitted when quest cooldown ends and can be repeated

## Enumerations

### enum QuestState {#enum-queststate}

- **INACTIVE** = `0`
- **ACTIVE** = `1`
- **READY_TO_HAND_IN** = `2`
- **COMPLETED** = `3`
- **FAILED** = `4`
- **ON_COOLDOWN** = `5`

### enum FailureBehavior {#enum-failurebehavior}

What happens when the quest fails

- **USE_DEFAULT** = `0` - What the gameplay settings say (default_quest_failure)
- **FINAL** = `1` - The quest is over: it cannot be taken again
- **RETRY** = `2` - The quest can be taken again (it starts from the beginning)
- **GAME_OVER** = `3` - Failing the quest ends the game

### enum AbandonRule {#enum-abandonrule}

Can the player give the quest up?

- **USE_DEFAULT** = `0` - What the gameplay settings say (allow_quest_abandon)
- **YES** = `1`
- **NO** = `2`

### enum CooldownType {#enum-cooldowntype}

- **NONE** = `0` - No cooldown, can repeat immediately
- **DURATION** = `1` - Cooldown based on game time duration
- **CLOCK** = `2` - Cooldown resets at specific time of day

## Property descriptions

### int level = 0 {#prop-level}

The level of player this quest is meant for (0 = the quest has no level). It is only shown to the player: what is needed to start the quest is a requirement

### FailureBehavior on_fail = FailureBehavior.USE_DEFAULT {#prop-on-fail}

What happens when the quest fails

### AbandonRule abandonable = AbandonRule.USE_DEFAULT {#prop-abandonable}

Can the player give this quest up? (the quest goes back to the start and can be taken again)

### Array[EventAction] on_abandon_actions = [] {#prop-on-abandon-actions}

Executed when the player gives the quest up (to take back what the quest gave: a quest item, a spawned guard)

### Array[QuestObjective] objectives = [] {#prop-objectives}

List of objectives that must be completed

### Array[Reward] rewards = [] {#prop-rewards}

Rewards granted to the player when quest is completed

### Array[Requirement] requirements = [] {#prop-requirements}

Requirements the player must meet to accept this quest

### bool requires_hand_in = false {#prop-requires-hand-in}

If true, quest requires manual hand-in after objectives are complete

### Array[String] turn_in_text = [] {#prop-turn-in-text}

Text displayed by NPC when handing in quest, Array to hold each language

### bool is_repeatable = false {#prop-is-repeatable}

If true, quest can be repeated after completion

### int repeat_limit = 0 {#prop-repeat-limit}

Maximum times this quest can be completed (0 = unlimited)

### CooldownType cooldown_type = CooldownType.NONE {#prop-cooldown-type}

Type of cooldown between repeats

### float cooldown_duration_hours = 24.0 {#prop-cooldown-duration-hours}

Duration cooldown in game hours (only used if cooldown_type == DURATION)

### int cooldown_reset_hour = 6 {#prop-cooldown-reset-hour}

Hour of day when quest resets (0-23, only used if cooldown_type == CLOCK)

### Array[EventAction] on_start_actions = [] {#prop-on-start-actions}

Triggers executed when quest is activated (for world-state changes)

### Array[EventAction] on_complete_actions = [] {#prop-on-complete-actions}

Triggers executed when quest is completed (for world-state changes)

## Variable descriptions

### QuestState state = QuestState.INACTIVE {#var-state}

Current state of the quest

### int completion_count = 0 {#var-completion-count}

Number of times this quest has been completed

### float cooldown_start_time = 0.0 {#var-cooldown-start-time}

Game time when cooldown started (for duration cooldown)

### float cooldown_end_time = 0.0 {#var-cooldown-end-time}

The running game clock (total game hours, which never wraps) at which the cooldown ends

### ChronoManager chrono_manager {#var-chrono-manager}

System Refs

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

## Method descriptions

### void set_system_hub( p_system_hub: GameHost.SystemHub ) {#method-set-system-hub}

*No description yet.*

### bool can_start() {#method-can-start}

Can the quest be started now? It must be waiting (not running, not handed in, not on a cooldown); a quest that was done once is only taken again when it is repeatable and has repeats left; a failed one only when failing does not end it for good (see get_failure_behavior)

### bool activate() {#method-activate}

Activates the quest and its objectives. False when it cannot start (see can_start)

### bool complete() {#method-complete}

Marks the quest as completed and grants rewards. False when it did not complete: with no room for an item reward the player is warned and the quest waits (it completes by itself when the room is there, a hand-in quest when it is handed in again)

### void fail() {#method-fail}

Marks the quest as failed

### FailureBehavior get_failure_behavior() {#method-get-failure-behavior}

What failing this quest means: the quest's own setting, or the default of the gameplay settings (FINAL, RETRY or GAME_OVER)

### bool is_abandonable() {#method-is-abandonable}

Can the player give this quest up? (the quest's own setting, or the default of the gameplay settings)

### bool abandon() {#method-abandon}

The player gives the quest up: it goes back to the start (nothing is kept: not the progress, not a count of completions) and can be taken again. It is not a failure. False when the quest is not running or cannot be given up

### void reset_to_initial_state() {#method-reset-to-initial-state}

Everything as in a new game: not started, never completed, no cooldown

### void reset() {#method-reset}

Reset quest to inactive state (used for repeatable quests)

### void connect_objectives() {#method-connect-objectives}

Connects signals for all objectives

### void on_objective_state_changed( objective: QuestObjective ) {#method-on-objective-state-changed}

Handler for objective state changes

### void update_objectives() {#method-update-objectives}

Checks if all objectives are completed to update quest state

### bool complete_objective( objective_id: int ) {#method-complete-objective}

Completes a specific objective by its number (1 is the first). False when the quest is not running or has no such objective that is still open

### bool fail_objective( objective_id: int ) {#method-fail-objective}

Fails a specific objective by ID

### bool is_ready_to_hand_in() {#method-is-ready-to-hand-in}

Returns true if quest is ready to hand in

### String get_turn_in_text( language_index: int = 0 ) {#method-get-turn-in-text}

Get the turn in text for a specific language index

### bool can_repeat() {#method-can-repeat}

Check if quest can be repeated

### bool can_accept( entity: Entity = null ) {#method-can-accept}

Check if an entity meets all requirements to accept this quest

### Array[Requirement] get_failed_requirements( entity: Entity = null ) {#method-get-failed-requirements}

Get all failed requirements for an entity

### Array[String] get_requirement_failure_messages( entity: Entity = null ) {#method-get-requirement-failure-messages}

Get failure messages for all unmet requirements

### String get_requirements_summary() {#method-get-requirements-summary}

Get a summary of all requirements

### bool has_requirements() {#method-has-requirements}

Check if quest has requirements

### int get_requirement_count() {#method-get-requirement-count}

Get requirement count

### bool has_reached_repeat_limit() {#method-has-reached-repeat-limit}

Check if quest has reached its repeat limit

### int get_remaining_repeats() {#method-get-remaining-repeats}

Get remaining repeats (0 = unlimited, -1 = none left)

### bool is_on_cooldown() {#method-is-on-cooldown}

Check if quest is on cooldown

### float get_remaining_cooldown_hours() {#method-get-remaining-cooldown-hours}

Get remaining cooldown time in game hours (for duration cooldown)

### void add_reward( reward: Reward ) {#method-add-reward}

Add a reward to this quest

### bool remove_reward( reward: Reward ) {#method-remove-reward}

Remove a reward from this quest

### void clear_rewards() {#method-clear-rewards}

Clear all rewards

### String get_rewards_summary() {#method-get-rewards-summary}

Get a summary of all rewards

### bool has_rewards() {#method-has-rewards}

Check if quest has rewards

### int get_reward_count() {#method-get-reward-count}

Get reward count

### GameplayConfig.QuestLevelDifficulty get_level_difficulty( player_level: int ) {#method-get-level-difficulty}

How hard the quest is for a player of this level (NORMAL for a quest without a level)

### String get_level_text() {#method-get-level-text}

The level as the player reads it ("[Lv 12]"), empty for a quest without a level or when the settings hide quest levels

### String get_display_title( player: Entity = null ) {#method-get-display-title}

The name of the quest as the HUD shows it: its name with the words &lt;like this&gt; filled in, and its level in front

### String get_display_description( player: Entity = null ) {#method-get-display-description}

The description of the quest with the words &lt;like this&gt; filled in

### bool is_completed() {#method-is-completed}

Returns true if quest is completed

### bool is_failed() {#method-is-failed}

Returns true if quest is failed

### bool is_active() {#method-is-active}

Returns true if quest is active

### bool is_inactive() {#method-is-inactive}

Returns true if quest is inactive

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*

### Dictionary save_quest_data() {#method-save-quest-data}

Creates a dictionary with essential quest state for saving

### void load_quest_data( data: Dictionary ) {#method-load-quest-data}

Loads quest state from saved data

### Dictionary get_summary() {#method-get-summary}

*No description yet.*

