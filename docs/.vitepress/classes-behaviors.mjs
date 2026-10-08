// Written by scripts/scan-classes.mjs from the addon: the classes of the Behaviors system.
export const groups = [
  {
    "text": "Factions",
    "slug": "factions",
    "classes": [
      {
        "name": "FactionDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\factions\\faction_definition.gd",
        "file": "data_classes/factions/faction_definition.gd"
      },
      {
        "name": "ReputationLevel",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\factions\\reputation_level.gd",
        "file": "data_classes/factions/reputation_level.gd"
      }
    ]
  },
  {
    "text": "Behavior scripts",
    "slug": "behavior-scripts",
    "classes": [
      {
        "name": "BehaviorReaction",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\behavior_reaction.gd",
        "file": "data_classes/entity/behavior_states/behavior_reaction.gd"
      },
      {
        "name": "ModularBehaviorScript",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\modular_behavior_script.gd",
        "file": "data_classes/entity/behavior_states/modular_behavior_script.gd"
      },
      {
        "name": "OrderedSchedule",
        "base": "TaskSchedule",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\schedules\\ordered_schedule.gd",
        "file": "data_classes/entity/behavior_states/schedules/ordered_schedule.gd"
      },
      {
        "name": "PrioritySchedule",
        "base": "TaskSchedule",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\schedules\\priority_schedule.gd",
        "file": "data_classes/entity/behavior_states/schedules/priority_schedule.gd"
      },
      {
        "name": "TaskSchedule",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\schedules\\task_schedule.gd",
        "file": "data_classes/entity/behavior_states/schedules/task_schedule.gd"
      },
      {
        "name": "WanderSchedule",
        "base": "OrderedSchedule",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\schedules\\wander_schedule.gd",
        "file": "data_classes/entity/behavior_states/schedules/wander_schedule.gd"
      }
    ]
  },
  {
    "text": "Behavior tasks",
    "slug": "tasks",
    "classes": [
      {
        "name": "BehaviorTask",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\behavior_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/behavior_task.gd"
      },
      {
        "name": "ConsumeItemTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\consume_item_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/consume_item_task.gd"
      },
      {
        "name": "CreateItemTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\create_item_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/create_item_task.gd"
      },
      {
        "name": "EquipItemTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\equip_item_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/equip_item_task.gd"
      },
      {
        "name": "FollowEntityTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\follow_entity_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/follow_entity_task.gd"
      },
      {
        "name": "IdleTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\idle_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/idle_task.gd"
      },
      {
        "name": "InteractWithObjectTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\interact_with_object_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/interact_with_object_task.gd"
      },
      {
        "name": "MoveToPointTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\move_to_point_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/move_to_point_task.gd"
      },
      {
        "name": "OpenContainerTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\open_container_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/open_container_task.gd"
      },
      {
        "name": "PatrolTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\patrol_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/patrol_task.gd"
      },
      {
        "name": "PerformAnimationTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\perform_animation_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/perform_animation_task.gd"
      },
      {
        "name": "SetMetadataTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\set_metadata_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/set_metadata_task.gd"
      },
      {
        "name": "UseAbilityAtPointTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\use_ability_at_point_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/use_ability_at_point_task.gd"
      },
      {
        "name": "UseAbilityTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\use_ability_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/use_ability_task.gd"
      },
      {
        "name": "UseLadderTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\use_ladder_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/use_ladder_task.gd"
      },
      {
        "name": "UseRabbitHoleTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\use_rabbit_hole_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/use_rabbit_hole_task.gd"
      },
      {
        "name": "WanderTask",
        "base": "BehaviorTask",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\tasks\\types\\wander_task.gd",
        "file": "data_classes/entity/behavior_states/tasks/types/wander_task.gd"
      }
    ]
  },
  {
    "text": "Combat scripts",
    "slug": "combat-scripts",
    "classes": [
      {
        "name": "AttackStateLogic",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\attack_state_logic\\attack_state_logic.gd",
        "file": "data_classes/entity/behavior_states/attack_state_logic/attack_state_logic.gd"
      },
      {
        "name": "BossPhase",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\phase_system\\boss_phase.gd",
        "file": "data_classes/entity/behavior_states/phase_system/boss_phase.gd"
      },
      {
        "name": "CombatReaction",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_reaction.gd",
        "file": "data_classes/entity/behavior_states/combat_reaction.gd"
      },
      {
        "name": "CompanionAttackLogic",
        "base": "AttackStateLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\attack_state_logic\\companion_attack_logic.gd",
        "file": "data_classes/entity/behavior_states/attack_state_logic/companion_attack_logic.gd"
      },
      {
        "name": "ModularCombatScript",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\modular_combat_script.gd",
        "file": "data_classes/entity/behavior_states/modular_combat_script.gd"
      },
      {
        "name": "PhaseSystem",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\phase_system\\phase_system.gd",
        "file": "data_classes/entity/behavior_states/phase_system/phase_system.gd"
      },
      {
        "name": "PhaseTransition",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\phase_system\\phase_transition.gd",
        "file": "data_classes/entity/behavior_states/phase_system/phase_transition.gd"
      },
      {
        "name": "PriorityAttackLogic",
        "base": "AttackStateLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\attack_state_logic\\priority_attack_logic.gd",
        "file": "data_classes/entity/behavior_states/attack_state_logic/priority_attack_logic.gd"
      },
      {
        "name": "SimpleAttackLogic",
        "base": "AttackStateLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\attack_state_logic\\simple_attack_logic.gd",
        "file": "data_classes/entity/behavior_states/attack_state_logic/simple_attack_logic.gd"
      },
      {
        "name": "TacticalAttackLogic",
        "base": "AttackStateLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\attack_state_logic\\tactical_attack_logic.gd",
        "file": "data_classes/entity/behavior_states/attack_state_logic/tactical_attack_logic.gd"
      },
      {
        "name": "TimelineAttackLogic",
        "base": "AttackStateLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\attack_state_logic\\timeline_attack_logic.gd",
        "file": "data_classes/entity/behavior_states/attack_state_logic/timeline_attack_logic.gd"
      }
    ]
  },
  {
    "text": "Combat actions",
    "slug": "combat-actions",
    "classes": [
      {
        "name": "ActivateQuestCombatAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\activate_quest_combat_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/activate_quest_combat_action.gd"
      },
      {
        "name": "CallForHelpAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\call_for_help_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/call_for_help_action.gd"
      },
      {
        "name": "ClearTargetAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\clear_target_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/clear_target_action.gd"
      },
      {
        "name": "CombatAction",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\combat_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/combat_action.gd"
      },
      {
        "name": "ComboAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\combo_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/combo_action.gd"
      },
      {
        "name": "DelayAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\delay_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/delay_action.gd"
      },
      {
        "name": "FaceTargetAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\face_target_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/face_target_action.gd"
      },
      {
        "name": "KeepDistanceAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\keep_distance_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/keep_distance_action.gd"
      },
      {
        "name": "MoveToAllyPositionAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\move_to_ally_position_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/move_to_ally_position_action.gd"
      },
      {
        "name": "MoveToPointAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\move_to_point_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/move_to_point_action.gd"
      },
      {
        "name": "RetreatAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\retreat_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/retreat_action.gd"
      },
      {
        "name": "SpawnInteractableCombatAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\spawn_interactable_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/spawn_interactable_action.gd"
      },
      {
        "name": "SpawnNPCCombatAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\spawn_npc_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/spawn_npc_action.gd"
      },
      {
        "name": "SpawnWorldEffectCombatAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\spawn_world_effect_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/spawn_world_effect_action.gd"
      },
      {
        "name": "StrafeAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\strafe_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/strafe_action.gd"
      },
      {
        "name": "SwitchToAllyAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\switch_to_ally_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/switch_to_ally_action.gd"
      },
      {
        "name": "SwitchToEnemyAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\switch_to_enemy_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/switch_to_enemy_action.gd"
      },
      {
        "name": "SwitchToHighestThreatAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\switch_to_highest_threat_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/switch_to_highest_threat_action.gd"
      },
      {
        "name": "TriggerEventCombatAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\trigger_event_combat_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/trigger_event_combat_action.gd"
      },
      {
        "name": "UseAbilityAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\use_ability_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/use_ability_action.gd"
      },
      {
        "name": "UseAbilityAtPointAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\use_ability_at_point_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/use_ability_at_point_action.gd"
      },
      {
        "name": "WaitForConditionAction",
        "base": "CombatAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\behavior_states\\combat_actions\\types\\wait_for_condition_action.gd",
        "file": "data_classes/entity/behavior_states/combat_actions/types/wait_for_condition_action.gd"
      }
    ]
  },
  {
    "text": "Conversations",
    "slug": "conversations",
    "classes": [
      {
        "name": "Conversation",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation.gd",
        "file": "data_classes/conversation/conversation.gd"
      },
      {
        "name": "ConversationAction",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_action\\conversation_action.gd",
        "file": "data_classes/conversation/conversation_action/conversation_action.gd"
      },
      {
        "name": "ConversationActionEndChat",
        "base": "ConversationAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_action\\conversation_end_chat.gd",
        "file": "data_classes/conversation/conversation_action/conversation_end_chat.gd"
      },
      {
        "name": "ConversationActionGrantReward",
        "base": "ConversationAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_action\\conversation_grant_reward.gd",
        "file": "data_classes/conversation/conversation_action/conversation_grant_reward.gd"
      },
      {
        "name": "ConversationActionNewInteraction",
        "base": "ConversationAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_action\\conversation_trigger_new_interaction.gd",
        "file": "data_classes/conversation/conversation_action/conversation_trigger_new_interaction.gd"
      },
      {
        "name": "ConversationActionProceedToChat",
        "base": "ConversationAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_action\\conversation_proceed_to_chat.gd",
        "file": "data_classes/conversation/conversation_action/conversation_proceed_to_chat.gd"
      },
      {
        "name": "ConversationActionProceedToDiceRoll",
        "base": "ConversationAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_action\\conversation_action_porceed_to_dice_roll.gd",
        "file": "data_classes/conversation/conversation_action/conversation_action_porceed_to_dice_roll.gd"
      },
      {
        "name": "ConversationActionSetResponseState",
        "base": "ConversationAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_action\\conversation_set_response_state.gd",
        "file": "data_classes/conversation/conversation_action/conversation_set_response_state.gd"
      },
      {
        "name": "ConversationActionSetStartingChat",
        "base": "ConversationAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_action\\conversation_action_set_starting_chat.gd",
        "file": "data_classes/conversation/conversation_action/conversation_action_set_starting_chat.gd"
      },
      {
        "name": "ConversationChat",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_chat.gd",
        "file": "data_classes/conversation/conversation_chat.gd"
      },
      {
        "name": "ConversationDiceRoll",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_dice_roll.gd",
        "file": "data_classes/conversation/conversation_dice_roll.gd"
      },
      {
        "name": "ConversationInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\conversation\\conversation_instance.gd",
        "file": "runtime_classes/conversation/conversation_instance.gd"
      },
      {
        "name": "ConversationResponse",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\conversation\\conversation_response.gd",
        "file": "data_classes/conversation/conversation_response.gd"
      }
    ]
  },
  {
    "text": "States (runtime)",
    "slug": "states",
    "classes": [
      {
        "name": "ActionState",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\action_state.gd",
        "file": "runtime_classes/entity/components/states/action_states/action_state.gd"
      },
      {
        "name": "AttackingState",
        "base": "ActionState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\state_attacking.gd",
        "file": "runtime_classes/entity/components/states/action_states/state_attacking.gd"
      },
      {
        "name": "ChasingState",
        "base": "ActionState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\state_chasing.gd",
        "file": "runtime_classes/entity/components/states/action_states/state_chasing.gd"
      },
      {
        "name": "ClimbingState",
        "base": "MovementState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\movement_states\\state_climbing.gd",
        "file": "runtime_classes/entity/components/states/movement_states/state_climbing.gd"
      },
      {
        "name": "DeadState",
        "base": "ActionState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\state_dead.gd",
        "file": "runtime_classes/entity/components/states/action_states/state_dead.gd"
      },
      {
        "name": "DirectionalMovementState",
        "base": "MovementState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\movement_states\\state_directional_movement.gd",
        "file": "runtime_classes/entity/components/states/movement_states/state_directional_movement.gd"
      },
      {
        "name": "DisorientedState",
        "base": "ActionState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\state_disoriented.gd",
        "file": "runtime_classes/entity/components/states/action_states/state_disoriented.gd"
      },
      {
        "name": "EntityStateComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\entity_state_component.gd",
        "file": "runtime_classes/entity/components/states/entity_state_component.gd"
      },
      {
        "name": "FallingState",
        "base": "MovementState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\movement_states\\state_falling.gd",
        "file": "runtime_classes/entity/components/states/movement_states/state_falling.gd"
      },
      {
        "name": "FleeState",
        "base": "ActionState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\state_flee.gd",
        "file": "runtime_classes/entity/components/states/action_states/state_flee.gd"
      },
      {
        "name": "FollowingState",
        "base": "ActionState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\state_following.gd",
        "file": "runtime_classes/entity/components/states/action_states/state_following.gd"
      },
      {
        "name": "IdleState",
        "base": "MovementState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\movement_states\\state_idle.gd",
        "file": "runtime_classes/entity/components/states/movement_states/state_idle.gd"
      },
      {
        "name": "IdleTurningState",
        "base": "MovementState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\movement_states\\state_idle_turning.gd",
        "file": "runtime_classes/entity/components/states/movement_states/state_idle_turning.gd"
      },
      {
        "name": "InactiveState",
        "base": "ActionState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\state_inactive.gd",
        "file": "runtime_classes/entity/components/states/action_states/state_inactive.gd"
      },
      {
        "name": "IncapacitatedState",
        "base": "ActionState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\state_incapacitated.gd",
        "file": "runtime_classes/entity/components/states/action_states/state_incapacitated.gd"
      },
      {
        "name": "MovementData",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\movement_data.gd",
        "file": "runtime_classes/entity/components/states/movement_data.gd"
      },
      {
        "name": "MovementState",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\movement_states\\state_movement.gd",
        "file": "runtime_classes/entity/components/states/movement_states/state_movement.gd"
      },
      {
        "name": "MovementStateComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\movement_state_manager.gd",
        "file": "runtime_classes/entity/components/states/movement_state_manager.gd"
      },
      {
        "name": "MovingState",
        "base": "MovementState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\movement_states\\state_moving.gd",
        "file": "runtime_classes/entity/components/states/movement_states/state_moving.gd"
      },
      {
        "name": "NavigationController",
        "base": "NavigationAgent3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\navigation_controller.gd",
        "file": "runtime_classes/entity/components/states/navigation_controller.gd"
      },
      {
        "name": "PlayerCommandState",
        "base": "ActionState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\state_player_command.gd",
        "file": "runtime_classes/entity/components/states/action_states/state_player_command.gd"
      },
      {
        "name": "TargetSearchState",
        "base": "ActionState",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\states\\action_states\\state_target_search.gd",
        "file": "runtime_classes/entity/components/states/action_states/state_target_search.gd"
      }
    ]
  }
]
