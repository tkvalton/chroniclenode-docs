# Behaviors: how they are built

The [Behaviors chapter](/basic/behaviors/) explains the editors. Everything here is a resource: scripts, schedules, tasks, actions and reactions have no id of their own and are saved inside the script that holds them; a script, a faction and a conversation are database resources that an NPC points to by id.

| Resource | Database type | Held by |
|---|---|---|
| [`FactionDefinition`](/advanced/behaviors/factions/faction-definition) | `faction` | `NPCDefinition.faction`, `UniqueEntityData.faction_id` |
| [`ModularBehaviorScript`](/advanced/behaviors/behavior-scripts/modular-behavior-script) | `behavior_script` | NPC and class definitions, unique data |
| [`ModularCombatScript`](/advanced/behaviors/combat-scripts/modular-combat-script) | `combat_script` | NPC and class definitions, unique data |
| [`Conversation`](/advanced/behaviors/conversations/conversation) | `conversation` | `ConversationInteraction.conversation_id` |

## Factions

`FactionDefinition` holds `reputation_levels` (sorted by `min_reputation`), `faction_relationships` (faction id -> a standing name, "Hostile", "Friendly" or "Neutral") and, at runtime, `runtime_reputation` (faction id -> a number). The built-in ids are `Database.ID_ENVIRONMENTAL_FACTION` (1000001) and the Player faction (1000002).

| Method | Rule |
|---|---|
| `is_hostile_to(id)` | Never for the Environmental faction or for itself. Else the standing level (from the reputation) if it says Hostile, else the listed relationship |
| `is_friendly_to(id)` | Always for itself. Never for Environmental. Else the standing level, else the listed relationship ("friendly" or "allied") |
| `is_neutral_to(id)` | Always for Environmental, never for itself, else "not hostile and not friendly" |
| `can_target_as_enemy(id)` | Always for Environmental, never for itself, else hostile **or not friendly** |

`add_reputation`, `set_reputation` and `get_standing_level` change and read the numbers. `standing_changed(faction_id, old_name, new_name)` is emitted when a rank changes. `ReputationLevel.relationship` is `HOSTILE`, `NEUTRAL` or `FRIENDLY`.

## The behavior script

`ModularBehaviorScript` holds `schedules` (priority order), `schedule_reactions` and the fallback (`FallbackBehaviorType`: `WANDER`, `MOVE_TO_SPAWN`, `IDLE_AT_CURRENT`, `FOLLOW_NEAREST_ALLY`). The state component copies the script for each entity, so NPCs that share one do not share state.

Each processing step (every `behavior_interval` seconds, set by the level of detail):

1. Choose the schedule: the first whose `activation_conditions` hold and whose cooldown is over (or the fallback).
2. Run it: an `OrderedSchedule` runs its tasks in sequence (looping, optionally shuffled); a `PrioritySchedule` re-evaluates every `priority_evaluation_interval` and may interrupt the current task when another has `interruption_priority_threshold` more priority.
3. A `BehaviorTask` goes through `TaskState`: `INACTIVE`, `STARTING`, `RUNNING`, `COMPLETING`, `COMPLETED`, `INTERRUPTED`, `FAILED`. When it fails, the schedule's `FailureHandling` decides (`SKIP_TO_NEXT`, `RETRY_TASK`, `RESTART_SCHEDULE`, `ABORT_SCHEDULE`).

Tasks and schedules talk through signals; movement tasks set up the navigation signals **before** they start to move. When a path fails, `PathFailureStrategy` picks the recovery. Reactions (`BehaviorReaction`) listen to the world (player nearby, time of day, quests, events, items) and switch, pause, resume or reset the schedule, or trigger a task.

To add a task, extend `BehaviorTask` in a script in `data_classes/entity/behavior_states/tasks/types/`: the add dialog scans that folder.

## The combat state machine

The action state is one of `ModularCombatScript.ActionStateName`: `INACTIVE`, `TARGET_SEARCH`, `CHASING`, `ATTACKING`, `INCAPACITATED`, `DEAD`, `FOLLOWING`, `PLAYER_COMMAND`, `DISORIENTED`, `FLEE`. The state classes are in `runtime_classes/entity/components/states/action_states/`.

| State | Key facts |
|---|---|
| `InactiveState` | Idle; leashing: exits combat if the target is too far; goes to combat when a target is set |
| `TargetSearchState` | NPCs choose by the threat table, players and pets by proximity (nearest enemy, cached); uses the encounter's enemies so leaving combat is clean |
| `ChasingState` | Line-of-sight aware navigation; computes the attack range from the abilities; repositions when stuck |
| `AttackingState` | Updates every 0.5 s; handles transitions and the facing of the target; the **attack logic** of the script uses abilities |
| `FollowingState` | Follows an entity or a position at a distance, walking or running; the formation system for pets |
| `FleeState`, `DisorientedState`, `IncapacitatedState` | Entered by crowd control effects, left when the effect ends (`EffectsComponent`) |
| `PlayerCommandState` | Navigates to a commanded point and returns |
| `DeadState` | Death visuals and physics; revival goes through `resurrect()` |

The `uses_*` flags of the script say which states it enters. `refresh_control_state` gives a party member the state of its role.

### Attack logic

`AttackStateLogic` is the base: the `AttackingState` asks it to act. `SimpleAttackLogic` builds a `UseAbilityAction` for each active ability by itself and cycles; `PriorityAttackLogic` evaluates its `actions` by `priority` and runs the first whose conditions hold and that is off cooldown; `TimelineAttackLogic` runs `timeline_actions` at `action_times`; `TacticalAttackLogic` chooses by distance (`melee_actions`, `ranged_actions`, `repositioning_actions`); `CompanionAttackLogic` is the party member AI. A `PhaseSystem` swaps the logic per `BossPhase`; a `PhaseTransition` combines `EntityCondition`s with AND or OR.

A `CombatAction` has `priority`, `conditions`, `action_cooldown` and `interrupt_casting`, and implements an execute step; `ComboAction` holds a sequence of actions. A `CombatReaction` listens to one `TriggerEvent` on the entity (or, for ally and enemy deaths, on the encounter) and runs its `reaction_actions`.

## Conversations

A `Conversation` stores its `conversation_chats`, `conversation_responses` and `conversation_dice_rolls` in flat arrays and connects them **by id**, plus `start_entries` (dictionaries `{chat_id, requirements}` in priority order), the editor `conversation_layout`, and the quests it offers and takes in.

All runtime state is in `ConversationInstance`: the active chat, the response states (`ConversationActionSetResponseState` changes an `active` flag at runtime), the quest it is handing in or offering, and a `starting_chat_override` set by `ConversationActionSetStartingChat`. `_evaluate_start_entries` uses the override first, then the first entry whose requirements hold, then the first chat. `ConversationDiceRoll.evaluate_roll(stat_value)` returns the roll, the modifier, the total and the result; the instance goes to `pass_chat_id` or `fail_chat_id`. A `ConversationActionNewInteraction` ends the conversation and starts the interaction it holds.

Texts, voice lines and display names are arrays with one entry per language.

## The classes

### Factions

<!-- classes:behaviors/factions -->
| Class | What it is |
|---|---|
| [FactionDefinition](/advanced/behaviors/factions/faction-definition) | Enhanced faction definition with reputation levels and relationships |
| [ReputationLevel](/advanced/behaviors/factions/reputation-level) | Individual reputation level within a faction's reputation system |
<!-- /classes -->

### Behavior scripts, schedules and tasks

<!-- classes:behaviors/behavior-scripts -->
| Class | What it is |
|---|---|
| [BehaviorReaction](/advanced/behaviors/behavior-scripts/behavior-reaction) | BehaviorReaction represents an event-driven response that can switch behavior schedules. |
| [ModularBehaviorScript](/advanced/behaviors/behavior-scripts/modular-behavior-script) | ModularBehaviorScript coordinates behavior schedules and reactions for entities. |
| [OrderedSchedule](/advanced/behaviors/behavior-scripts/ordered-schedule) | OrderedSchedule executes tasks in a defined sequence using clean signal-based communication. |
| [PrioritySchedule](/advanced/behaviors/behavior-scripts/priority-schedule) | PrioritySchedule executes tasks based on priority and conditions using clean signal-based communication. |
| [TaskSchedule](/advanced/behaviors/behavior-scripts/task-schedule) | Enhanced TaskSchedule with comprehensive signal-based task management. |
| [WanderSchedule](/advanced/behaviors/behavior-scripts/wander-schedule) | WanderSchedule is a pre-configured OrderedSchedule with a single WanderTask. |
<!-- /classes -->

<!-- classes:behaviors/tasks -->
| Class | What it is |
|---|---|
| [BehaviorTask](/advanced/behaviors/tasks/behavior-task) | Enhanced BehaviorTask base class with comprehensive features and robust integration. |
| [ConsumeItemTask](/advanced/behaviors/tasks/consume-item-task) | Consume consumable items from the entity's inventory |
| [CreateItemTask](/advanced/behaviors/tasks/create-item-task) | Emit signals for item creation instead of directly creating items Allows external systems to handle item creation logic (inventory, drops, rewards, etc.) Focuses on single item creation with configurable quantity |
| [EquipItemTask](/advanced/behaviors/tasks/equip-item-task) | Equip or unequip equipment items from the entity's inventory |
| [FollowEntityTask](/advanced/behaviors/tasks/follow-entity-task) | Follow an entity by unique ID with proper validation and error handling. |
| [IdleTask](/advanced/behaviors/tasks/idle-task) | Modern IdleTask focused purely on positioning and waiting behavior. |
| [InteractWithObjectTask](/advanced/behaviors/tasks/interact-with-object-task) | Make entity interact with a specific interactable object by unique ID Enhanced with proper signal-based movement handling |
| [MoveToPointTask](/advanced/behaviors/tasks/move-to-point-task) | Complete MoveToPointTask with all Phase 1-3 enhancements. |
| [OpenContainerTask](/advanced/behaviors/tasks/open-container-task) | Open a specific container and optionally take/deposit items Enhanced with proper signal-based movement handling |
| [PatrolTask](/advanced/behaviors/tasks/patrol-task) | Modern PatrolTask for entities that follow patrol routes. |
| [PerformAnimationTask](/advanced/behaviors/tasks/perform-animation-task) | Simple PerformAnimationTask using AnimationSelection resources |
| [SetMetadataTask](/advanced/behaviors/tasks/set-metadata-task) | Set, modify, or manipulate entity metadata with flexible operations |
| [UseAbilityAtPointTask](/advanced/behaviors/tasks/use-ability-at-point-task) | UseAbilityAtPointTask uses a specific ability at a target point. |
| [UseAbilityTask](/advanced/behaviors/tasks/use-ability-task) | UseAbilityTask uses a specific ability on the current target. |
| [UseLadderTask](/advanced/behaviors/tasks/use-ladder-task) | Climb a ladder (any entity can use) Enhanced with proper signal-based movement handling |
| [UseRabbitHoleTask](/advanced/behaviors/tasks/use-rabbit-hole-task) | Use rabbit hole for teleportation Enhanced with proper signal-based movement handling |
| [WanderTask](/advanced/behaviors/tasks/wander-task) | WanderTask provides simple wandering behavior around a central point. |
<!-- /classes -->

### Combat scripts and actions

<!-- classes:behaviors/combat-scripts -->
| Class | What it is |
|---|---|
| [AttackStateLogic](/advanced/behaviors/combat-scripts/attack-state-logic) | AttackStateLogic is the base class for defining what an entity does in the ATTACKING state. |
| [BossPhase](/advanced/behaviors/combat-scripts/boss-phase) | BossPhase represents a single phase in a boss encounter. |
| [CombatReaction](/advanced/behaviors/combat-scripts/combat-reaction) | CombatReaction represents an event-driven response that can trigger in any combat state. |
| [CompanionAttackLogic](/advanced/behaviors/combat-scripts/companion-attack-logic) | CompanionAttackLogic is what a party member does in the ATTACKING state while the player is not controlling it. |
| [ModularCombatScript](/advanced/behaviors/combat-scripts/modular-combat-script) | Modular combat script system that defines how an entity behaves in combat. |
| [PhaseSystem](/advanced/behaviors/combat-scripts/phase-system) | PhaseSystem manages phase transitions for boss encounters. |
| [PhaseTransition](/advanced/behaviors/combat-scripts/phase-transition) | Defines transition conditions for a boss phase using existing EntityCondition system |
| [PriorityAttackLogic](/advanced/behaviors/combat-scripts/priority-attack-logic) | PriorityAttackLogic evaluates a list of actions in priority order and executes the first valid one. |
| [SimpleAttackLogic](/advanced/behaviors/combat-scripts/simple-attack-logic) | SimpleAttackLogic automatically creates priority-based actions from the entity's active abilities. |
| [TacticalAttackLogic](/advanced/behaviors/combat-scripts/tactical-attack-logic) | TacticalAttackLogic implements dynamic decision-making for action RPG style combat. |
| [TimelineAttackLogic](/advanced/behaviors/combat-scripts/timeline-attack-logic) | TimelineAttackLogic follows a scripted sequence of actions at specific times. |
<!-- /classes -->

<!-- classes:behaviors/combat-actions -->
| Class | What it is |
|---|---|
| [ActivateQuestCombatAction](/advanced/behaviors/combat-actions/activate-quest-combat-action) | Activates a specific quest during combat |
| [CallForHelpAction](/advanced/behaviors/combat-actions/call-for-help-action) |  |
| [ClearTargetAction](/advanced/behaviors/combat-actions/clear-target-action) | Clears the current target |
| [CombatAction](/advanced/behaviors/combat-actions/combat-action) | CombatAction is the base class for all combat actions. |
| [ComboAction](/advanced/behaviors/combat-actions/combo-action) | ComboAction executes a sequence of combat actions in order. |
| [DelayAction](/advanced/behaviors/combat-actions/delay-action) | DelayAction waits for a specified duration before completing. |
| [FaceTargetAction](/advanced/behaviors/combat-actions/face-target-action) | FaceTargetAction turns the entity to face their target without moving. |
| [KeepDistanceAction](/advanced/behaviors/combat-actions/keep-distance-action) | Maintains a specific distance from target by moving closer or farther as needed. |
| [MoveToAllyPositionAction](/advanced/behaviors/combat-actions/move-to-ally-position-action) | Moves to a specific ally's position based on criteria |
| [MoveToPointAction](/advanced/behaviors/combat-actions/move-to-point-action) | MoveToPointAction commands the entity to move to a specific world position. |
| [RetreatAction](/advanced/behaviors/combat-actions/retreat-action) | RetreatAction moves the entity away from their target by a specified distance. |
| [SpawnInteractableCombatAction](/advanced/behaviors/combat-actions/spawn-interactable-combat-action) | Spawns an interactable during combat at a specific position |
| [SpawnNPCCombatAction](/advanced/behaviors/combat-actions/spawn-npc-combat-action) | Spawns an NPC during combat at a specific position |
| [SpawnWorldEffectCombatAction](/advanced/behaviors/combat-actions/spawn-world-effect-combat-action) | Spawns a world effect at a specific position during combat |
| [StrafeAction](/advanced/behaviors/combat-actions/strafe-action) | StrafeAction circles around the target while maintaining facing direction. |
| [SwitchToAllyAction](/advanced/behaviors/combat-actions/switch-to-ally-action) | Switches target to ally based on various criteria |
| [SwitchToEnemyAction](/advanced/behaviors/combat-actions/switch-to-enemy-action) | Switches target to enemy based on various criteria |
| [SwitchToHighestThreatAction](/advanced/behaviors/combat-actions/switch-to-highest-threat-action) | Switches target to the player with highest threat (threat level) Useful for returning to primary target after using abilities on secondary targets |
| [TriggerEventCombatAction](/advanced/behaviors/combat-actions/trigger-event-combat-action) | Triggers a specific event in the event system during combat |
| [UseAbilityAction](/advanced/behaviors/combat-actions/use-ability-action) | UseAbilityAction uses a specific ability on the current target. |
| [UseAbilityAtPointAction](/advanced/behaviors/combat-actions/use-ability-at-point-action) | UseAbilityAtPointAction uses a specific ability at a target point. |
| [WaitForConditionAction](/advanced/behaviors/combat-actions/wait-for-condition-action) | WaitForConditionAction pauses execution until a specific condition is met. |
<!-- /classes -->

### Conversations

<!-- classes:behaviors/conversations -->
| Class | What it is |
|---|---|
| [Conversation](/advanced/behaviors/conversations/conversation) | A conversation containing multiple chats and responses Responses are stored in a flat array and referenced by ID |
| [ConversationAction](/advanced/behaviors/conversations/conversation-action) | Base class for all conversation actions Actions are executed when responses are chosen or chats are entered |
| [ConversationActionEndChat](/advanced/behaviors/conversations/conversation-action-end-chat) | Ends the current conversation This signals the conversation system to close the UI and cleanup |
| [ConversationActionGrantReward](/advanced/behaviors/conversations/conversation-action-grant-reward) | Grants a reward to the player Uses the Reward system for implementation |
| [ConversationActionNewInteraction](/advanced/behaviors/conversations/conversation-action-new-interaction) | Ends the conversation and starts a different interaction The interaction is pre-initialized and cached in ConversationInstance |
| [ConversationActionProceedToChat](/advanced/behaviors/conversations/conversation-action-proceed-to-chat) | Proceeds to a different chat in the conversation Sets the active chat and executes that chat's entry actions |
| [ConversationActionProceedToDiceRoll](/advanced/behaviors/conversations/conversation-action-proceed-to-dice-roll) | Action that proceeds to a dice roll / skill check Evaluates the dice roll and proceeds to success or fail chat Uses signals for clean communication with ConversationPanelUI |
| [ConversationActionSetResponseState](/advanced/behaviors/conversations/conversation-action-set-response-state) | Sets the active state of a response in the conversation Used to dynamically enable or disable response options |
| [ConversationActionSetStartingChat](/advanced/behaviors/conversations/conversation-action-set-starting-chat) | Sets which chat the conversation will start from on next interaction Useful for progressing storylines or unlocking new dialogue branches |
| [ConversationChat](/advanced/behaviors/conversations/conversation-chat) | A single chat in a conversation References responses by ID instead of nesting them |
| [ConversationDiceRoll](/advanced/behaviors/conversations/conversation-dice-roll) | Dice roll / skill check node for conversation branching Supports multiple dice types and stat modifier calculations |
| [ConversationInstance](/advanced/behaviors/conversations/conversation-instance) | Runtime instance of a Conversation resource Keeps the underlying resource immutable by tracking all mutable state here |
| [ConversationResponse](/advanced/behaviors/conversations/conversation-response) | A single response option in a conversation Now includes chat_id to track which chat it belongs to |
<!-- /classes -->

### States (runtime)

<!-- classes:behaviors/states -->
| Class | What it is |
|---|---|
| [ActionState](/advanced/behaviors/states/action-state) | ActionState is the base class for all combat action states. |
| [AttackingState](/advanced/behaviors/states/attacking-state) | AttackingState represents the state when an entity is actively attacking a target. |
| [ChasingState](/advanced/behaviors/states/chasing-state) | ChasingState with LOS-aware navigation that repositions when stuck |
| [ClimbingState](/advanced/behaviors/states/climbing-state) | MovementState for when entity is climbing ladders or similar traversal objects Handles path-based movement and climbing animations |
| [DeadState](/advanced/behaviors/states/dead-state) | DeadState represents when an entity has been defeated. |
| [DirectionalMovementState](/advanced/behaviors/states/directional-movement-state) | MovementState for when entity is being moved by MoveDirectionalEffect Handles different movement strategies with blending animations |
| [DisorientedState](/advanced/behaviors/states/disoriented-state) | DisorientedState represents when an entity is disoriented. |
| [EntityStateComponent](/advanced/behaviors/states/entity-state-component) | Consolidated EntityStateComponent that manages all entity state systems. |
| [FallingState](/advanced/behaviors/states/falling-state) |  |
| [FleeState](/advanced/behaviors/states/flee-state) | FleeState represents when an entity is fleeing from another entity. |
| [FollowingState](/advanced/behaviors/states/following-state) | FollowingState represents when an entity is following another entity or position. |
| [IdleState](/advanced/behaviors/states/idle-state) | Simplified IdleState - detects stance changes and uses blending system |
| [IdleTurningState](/advanced/behaviors/states/idle-turning-state) | Turn-in-place animation while the entity turns without moving. |
| [InactiveState](/advanced/behaviors/states/inactive-state) | InactiveState represents when an entity is not actively engaged in combat. |
| [IncapacitatedState](/advanced/behaviors/states/incapacitated-state) | IncapacitatedState represents when an entity is completely stunned/incapacitated. |
| [MovementData](/advanced/behaviors/states/movement-data) | Container for movement information used to select appropriate animations Works with both navigation-driven and input-driven movement |
| [MovementState](/advanced/behaviors/states/movement-state) |  |
| [MovementStateComponent](/advanced/behaviors/states/movement-state-component) |  |
| [MovingState](/advanced/behaviors/states/moving-state) | Simplified MovingState - passes movement data to animation player using blending system |
| [NavigationController](/advanced/behaviors/states/navigation-controller) |  |
| [PlayerCommandState](/advanced/behaviors/states/player-command-state) | PlayerCommandState represents when an entity is executing a player command. |
| [TargetSearchState](/advanced/behaviors/states/target-search-state) | TargetSearchState manages the search for valid targets when entity has none. |
<!-- /classes -->
