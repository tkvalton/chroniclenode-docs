// Written by scripts/scan-classes.mjs from the addon: the classes of the Editor system.
export const groups = [
  {
    "text": "Editor base",
    "slug": "base",
    "classes": [
      {
        "name": "EditorFileList",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\editor_files_list.gd",
        "file": "editor_components/editors/editor_files_list.gd"
      },
      {
        "name": "GameEditorMainView",
        "base": "PanelContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\main\\game_editor_main.gd",
        "file": "editor_components/main/game_editor_main.gd"
      },
      {
        "name": "MainToolbar",
        "base": "HBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\main\\main_toolbar.gd",
        "file": "editor_components/main/main_toolbar.gd"
      },
      {
        "name": "ResourceEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\resource_editor.gd",
        "file": "editor_components/editors/resource_editor.gd"
      }
    ]
  },
  {
    "text": "Ability and effect editors",
    "slug": "abilities",
    "classes": [
      {
        "name": "AbilityEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\ability_editor.gd",
        "file": "editor_components/editors/abilities/ability_editor.gd"
      },
      {
        "name": "AbilityRankFields",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\ability_rank_fields.gd",
        "file": "editor_components/editors/abilities/ability_rank_fields.gd"
      },
      {
        "name": "ComboStepsEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\ability_properties\\combo_steps_editor.gd",
        "file": "editor_components/editors/abilities/ability_properties/combo_steps_editor.gd"
      },
      {
        "name": "CompositeEffectProperties",
        "base": "EffectPropertiesBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\effect_properties\\composite_effect_properties.gd",
        "file": "editor_components/editors/abilities/effect_properties/composite_effect_properties.gd"
      },
      {
        "name": "ConnectionCreationDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\skill_tree\\connection_creation_dialog.gd",
        "file": "editor_components/editors/abilities/skill_tree/connection_creation_dialog.gd"
      },
      {
        "name": "EffectDynamicPropertyPanel",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\effect_properties\\effect_dynamic_property_panel.gd",
        "file": "editor_components/editors/abilities/effect_properties/effect_dynamic_property_panel.gd"
      },
      {
        "name": "EffectEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\effect_editor.gd",
        "file": "editor_components/editors/abilities/effect_editor.gd"
      },
      {
        "name": "EffectPropertiesBase",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\effect_properties\\effect_properties.gd",
        "file": "editor_components/editors/abilities/effect_properties/effect_properties.gd"
      },
      {
        "name": "EffectsTreeEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\effect_tree\\effects_tree_editor.gd",
        "file": "editor_components/editors/abilities/effect_tree/effects_tree_editor.gd"
      },
      {
        "name": "SkillConnectionPropertiesEditor",
        "base": "ScrollContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\skill_tree\\skill_connection_properties_editor.gd",
        "file": "editor_components/editors/abilities/skill_tree/skill_connection_properties_editor.gd"
      },
      {
        "name": "SkillNodeManager",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\skill_tree\\skill_node_manager.gd",
        "file": "editor_components/editors/abilities/skill_tree/skill_node_manager.gd"
      },
      {
        "name": "SkillNodePropertiesEditor",
        "base": "ScrollContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\skill_tree\\skill_node_properties_editor.gd",
        "file": "editor_components/editors/abilities/skill_tree/skill_node_properties_editor.gd"
      },
      {
        "name": "SkillNodeVisual",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\skill_tree\\skill_node_editor_visual.gd",
        "file": "editor_components/editors/abilities/skill_tree/skill_node_editor_visual.gd"
      },
      {
        "name": "SkillPointPoolsManagerDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\skill_tree\\skill_point_pools_manager_dialog.gd",
        "file": "editor_components/editors/abilities/skill_tree/skill_point_pools_manager_dialog.gd"
      },
      {
        "name": "SkillTreeCanvas",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\skill_tree\\skill_tree_canvas.gd",
        "file": "editor_components/editors/abilities/skill_tree/skill_tree_canvas.gd"
      },
      {
        "name": "SkillTreeEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\skill_tree_editor.gd",
        "file": "editor_components/editors/abilities/skill_tree_editor.gd"
      },
      {
        "name": "TargetStrategyDynamicPanel",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\ability_properties\\target_strategy_properties.gd",
        "file": "editor_components/editors/abilities/ability_properties/target_strategy_properties.gd"
      },
      {
        "name": "TierEffectsEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\ability_properties\\tier_effects_editor.gd",
        "file": "editor_components/editors/abilities/ability_properties/tier_effects_editor.gd"
      },
      {
        "name": "ToggleGroupsResource",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\ability_properties\\toggle_groups_resource.gd",
        "file": "editor_components/editors/abilities/ability_properties/toggle_groups_resource.gd"
      },
      {
        "name": "UseStrategyDynamicPanel",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\abilities\\ability_properties\\use_strategy_properties.gd",
        "file": "editor_components/editors/abilities/ability_properties/use_strategy_properties.gd"
      }
    ]
  },
  {
    "text": "Asset editors",
    "slug": "assets",
    "classes": [
      {
        "name": "AlbumDatabaseEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\assets\\album_database_editor.gd",
        "file": "editor_components/editors/assets/album_database_editor.gd"
      },
      {
        "name": "AnimationDatabaseEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\assets\\animation_database_editor.gd",
        "file": "editor_components/editors/assets/animation_database_editor.gd"
      },
      {
        "name": "AnimationFolderContextMenu",
        "base": "PopupMenu",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\assets\\animation\\animation_folder_context_menu.gd",
        "file": "editor_components/editors/assets/animation/animation_folder_context_menu.gd"
      },
      {
        "name": "AnimationPackageTree",
        "base": "Tree",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\assets\\animation\\animation_package_tree_manager.gd",
        "file": "editor_components/editors/assets/animation/animation_package_tree_manager.gd"
      },
      {
        "name": "AudioDatabaseEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\assets\\audio_database_editor.gd",
        "file": "editor_components/editors/assets/audio_database_editor.gd"
      },
      {
        "name": "CorePackageEditor",
        "base": "ScrollContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\assets\\animation\\core_package_editor.gd",
        "file": "editor_components/editors/assets/animation/core_package_editor.gd"
      },
      {
        "name": "IconDatabaseEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\assets\\icon_database_editor.gd",
        "file": "editor_components/editors/assets/icon_database_editor.gd"
      },
      {
        "name": "MeshDatabaseEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\assets\\mesh_database_editor.gd",
        "file": "editor_components/editors/assets/mesh_database_editor.gd"
      },
      {
        "name": "ModelSceneDatabaseEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\assets\\model_scene_database_editor.gd",
        "file": "editor_components/editors/assets/model_scene_database_editor.gd"
      },
      {
        "name": "VFXDatabaseEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\assets\\vfx_database_editor.gd",
        "file": "editor_components/editors/assets/vfx_database_editor.gd"
      }
    ]
  },
  {
    "text": "Behavior editors",
    "slug": "behavior",
    "classes": [
      {
        "name": "BaseAttackLogicEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\behavior_trees\\attack_logic_editor.gd",
        "file": "editor_components/editors/behavior/behavior_trees/attack_logic_editor.gd"
      },
      {
        "name": "CombatPhaseEditor",
        "base": "PanelContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\combat_phase_editor.gd",
        "file": "editor_components/editors/behavior/combat_phase_editor.gd"
      },
      {
        "name": "CombatReactionEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\behavior_trees\\combat_reaction_editor.gd",
        "file": "editor_components/editors/behavior/behavior_trees/combat_reaction_editor.gd"
      },
      {
        "name": "ConversationChatGraphNode",
        "base": "GraphNode",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\conversations\\conversation_chat_graph_node.gd",
        "file": "editor_components/editors/behavior/conversations/conversation_chat_graph_node.gd"
      },
      {
        "name": "ConversationDiceRollGraphNode",
        "base": "GraphNode",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\conversations\\conversation_dice_roll_graph_node.gd",
        "file": "editor_components/editors/behavior/conversations/conversation_dice_roll_graph_node.gd"
      },
      {
        "name": "ConversationEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\conversation_editor.gd",
        "file": "editor_components/editors/behavior/conversation_editor.gd"
      },
      {
        "name": "ConversationGraphEditor",
        "base": "GraphEdit",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\conversations\\conversation_graph_editor.gd",
        "file": "editor_components/editors/behavior/conversations/conversation_graph_editor.gd"
      },
      {
        "name": "ConversationResponseGraphNode",
        "base": "GraphNode",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\conversations\\conversation_response_graph_node.gd",
        "file": "editor_components/editors/behavior/conversations/conversation_response_graph_node.gd"
      },
      {
        "name": "ConversationStartGraphNode",
        "base": "GraphNode",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\conversations\\conversation_start_graph_node.gd",
        "file": "editor_components/editors/behavior/conversations/conversation_start_graph_node.gd"
      },
      {
        "name": "FactionEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\faction_editor.gd",
        "file": "editor_components/editors/behavior/faction_editor.gd"
      },
      {
        "name": "ModularBehaviorScriptEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\modular_behavior_script_editor.gd",
        "file": "editor_components/editors/behavior/modular_behavior_script_editor.gd"
      },
      {
        "name": "ModularCombatScriptEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\modualr_combat_script_editor.gd",
        "file": "editor_components/editors/behavior/modualr_combat_script_editor.gd"
      },
      {
        "name": "PriorityAttackLogicEditor",
        "base": "BaseAttackLogicEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\behavior_trees\\priority_attack_logic_editor.gd",
        "file": "editor_components/editors/behavior/behavior_trees/priority_attack_logic_editor.gd"
      },
      {
        "name": "ReactionsTree",
        "base": "Tree",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\behavior_trees\\schedule_reactions_tree.gd",
        "file": "editor_components/editors/behavior/behavior_trees/schedule_reactions_tree.gd"
      },
      {
        "name": "RequirementGraphNode",
        "base": "GraphNode",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\conversations\\requirement_graph_node.gd",
        "file": "editor_components/editors/behavior/conversations/requirement_graph_node.gd"
      },
      {
        "name": "SchedulesTree",
        "base": "Tree",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\behavior_trees\\schedule_tree.gd",
        "file": "editor_components/editors/behavior/behavior_trees/schedule_tree.gd"
      },
      {
        "name": "TacticalAttackLogicEditor",
        "base": "BaseAttackLogicEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\behavior_trees\\tactical_attack_logic_editor.gd",
        "file": "editor_components/editors/behavior/behavior_trees/tactical_attack_logic_editor.gd"
      },
      {
        "name": "TasksTree",
        "base": "Tree",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\behavior_trees\\tasks_tree.gd",
        "file": "editor_components/editors/behavior/behavior_trees/tasks_tree.gd"
      },
      {
        "name": "TimelineAttackLogicEditor",
        "base": "BaseAttackLogicEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\behavior\\behavior_trees\\timeline_attack_logic_editor.gd",
        "file": "editor_components/editors/behavior/behavior_trees/timeline_attack_logic_editor.gd"
      }
    ]
  },
  {
    "text": "Entity editors",
    "slug": "entities",
    "classes": [
      {
        "name": "CharacterEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\entities\\character_editor.gd",
        "file": "editor_components/editors/entities/character_editor.gd"
      },
      {
        "name": "EntityAbilitiesEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\entities\\property_editors\\abilities_component_editor.gd",
        "file": "editor_components/editors/entities/property_editors/abilities_component_editor.gd"
      },
      {
        "name": "InteractableDefinitionEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\entities\\interactable_editor.gd",
        "file": "editor_components/editors/entities/interactable_editor.gd"
      },
      {
        "name": "InteractionEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\interactions\\interactions_editor.gd",
        "file": "editor_components/editors/interactions/interactions_editor.gd"
      },
      {
        "name": "NpcEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\entities\\npc_editor.gd",
        "file": "editor_components/editors/entities/npc_editor.gd"
      },
      {
        "name": "PlayerClassEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\entities\\player_class_editor.gd",
        "file": "editor_components/editors/entities/player_class_editor.gd"
      },
      {
        "name": "PlayerClassLevelRewardEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\entities\\property_editors\\level_reward_editor.gd",
        "file": "editor_components/editors/entities/property_editors/level_reward_editor.gd"
      },
      {
        "name": "StarterEquipmentEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\entities\\property_editors\\starter_equipment_editor.gd",
        "file": "editor_components/editors/entities/property_editors/starter_equipment_editor.gd"
      },
      {
        "name": "StatsDataEditor",
        "base": "BoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\entities\\property_editors\\stats_data_editor.gd",
        "file": "editor_components/editors/entities/property_editors/stats_data_editor.gd"
      }
    ]
  },
  {
    "text": "Equipment definition editors",
    "slug": "equipment-definitions",
    "classes": [
      {
        "name": "ArmorClassDefinitionEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\equipment_definitions\\armor_class_editor.gd",
        "file": "editor_components/editors/equipment_definitions/armor_class_editor.gd"
      },
      {
        "name": "EquipmentSlotDefinitionEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\equipment_definitions\\equipment_slot_editor.gd",
        "file": "editor_components/editors/equipment_definitions/equipment_slot_editor.gd"
      },
      {
        "name": "EquipmentTypeDefinitionEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\equipment_definitions\\equipment_type_editor.gd",
        "file": "editor_components/editors/equipment_definitions/equipment_type_editor.gd"
      },
      {
        "name": "QualityEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\equipment_definitions\\quality_editor.gd",
        "file": "editor_components/editors/equipment_definitions/quality_editor.gd"
      },
      {
        "name": "QualityGenerationFields",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\equipment_definitions\\quality_generation_fields.gd",
        "file": "editor_components/editors/equipment_definitions/quality_generation_fields.gd"
      },
      {
        "name": "SetBonusDefinitionEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\equipment_definitions\\set_bonus_editor.gd",
        "file": "editor_components/editors/equipment_definitions/set_bonus_editor.gd"
      },
      {
        "name": "SocketDefinitionEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\equipment_definitions\\socket_editor.gd",
        "file": "editor_components/editors/equipment_definitions/socket_editor.gd"
      },
      {
        "name": "WeaponClassDefinitionEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\equipment_definitions\\weapon_class_editor.gd",
        "file": "editor_components/editors/equipment_definitions/weapon_class_editor.gd"
      },
      {
        "name": "WeaponTypeProperties",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\equipment_definitions\\weapon_type_properties.gd",
        "file": "editor_components/editors/equipment_definitions/weapon_type_properties.gd"
      }
    ]
  },
  {
    "text": "Event and quest editors",
    "slug": "events",
    "classes": [
      {
        "name": "EventEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\events\\events_editor.gd",
        "file": "editor_components/editors/events/events_editor.gd"
      },
      {
        "name": "EventTreeBuilder",
        "base": "TreeBuilder",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\events\\tree_builders\\event_tree_builder.gd",
        "file": "editor_components/editors/events/tree_builders/event_tree_builder.gd"
      },
      {
        "name": "GlobalVariablesEditor",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\events\\global_variables_editor.gd",
        "file": "editor_components/editors/events/global_variables_editor.gd"
      },
      {
        "name": "PopupEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\events\\popup_editor.gd",
        "file": "editor_components/editors/events/popup_editor.gd"
      },
      {
        "name": "QuestEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\events\\quests_editor.gd",
        "file": "editor_components/editors/events/quests_editor.gd"
      },
      {
        "name": "QuestLineEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\events\\questline_editor.gd",
        "file": "editor_components/editors/events/questline_editor.gd"
      },
      {
        "name": "QuestLineTreeBuilder",
        "base": "TreeBuilder",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\events\\tree_builders\\questline_tree_builder.gd",
        "file": "editor_components/editors/events/tree_builders/questline_tree_builder.gd"
      },
      {
        "name": "QuestTreeBuilder",
        "base": "TreeBuilder",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\events\\tree_builders\\quest_tree_builder.gd",
        "file": "editor_components/editors/events/tree_builders/quest_tree_builder.gd"
      },
      {
        "name": "TreeBuilder",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\events\\tree_builders\\tree_builder.gd",
        "file": "editor_components/editors/events/tree_builders/tree_builder.gd"
      },
      {
        "name": "TreeBuilderUtils",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\events\\tree_builders\\tree_builder_utility.gd",
        "file": "editor_components/editors/events/tree_builders/tree_builder_utility.gd"
      }
    ]
  },
  {
    "text": "Item editors",
    "slug": "items",
    "classes": [
      {
        "name": "AffixesEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\affixes_editor.gd",
        "file": "editor_components/editors/items/affixes_editor.gd"
      },
      {
        "name": "CraftingRecipeEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\crafting_recipe_editor.gd",
        "file": "editor_components/editors/items/crafting_recipe_editor.gd"
      },
      {
        "name": "CraftSchoolEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\craft_school_editor.gd",
        "file": "editor_components/editors/items/craft_school_editor.gd"
      },
      {
        "name": "CurrencyDefinitionEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\currency_definition_editor.gd",
        "file": "editor_components/editors/items/currency_definition_editor.gd"
      },
      {
        "name": "EquipmentGenerationFields",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\equipment_generation_fields.gd",
        "file": "editor_components/editors/items/item_properties/equipment_generation_fields.gd"
      },
      {
        "name": "ItemConsumableEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\item_consumable_editor.gd",
        "file": "editor_components/editors/items/item_properties/item_consumable_editor.gd"
      },
      {
        "name": "ItemEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_editor.gd",
        "file": "editor_components/editors/items/item_editor.gd"
      },
      {
        "name": "ItemEnchantScrollEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\item_enchant_scroll_editor.gd",
        "file": "editor_components/editors/items/item_properties/item_enchant_scroll_editor.gd"
      },
      {
        "name": "ItemEquipmentEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\item_equipment_editor.gd",
        "file": "editor_components/editors/items/item_properties/item_equipment_editor.gd"
      },
      {
        "name": "ItemEquipmentMeshEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\item_equipment_mesh_editor.gd",
        "file": "editor_components/editors/items/item_properties/item_equipment_mesh_editor.gd"
      },
      {
        "name": "ItemMaterialEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\item_material_editor.gd",
        "file": "editor_components/editors/items/item_properties/item_material_editor.gd"
      },
      {
        "name": "ItemOnUseEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\item_on_use_editor.gd",
        "file": "editor_components/editors/items/item_properties/item_on_use_editor.gd"
      },
      {
        "name": "ItemQuestEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\item_quest_editor.gd",
        "file": "editor_components/editors/items/item_properties/item_quest_editor.gd"
      },
      {
        "name": "ItemReadableEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\item_readable_editor.gd",
        "file": "editor_components/editors/items/item_properties/item_readable_editor.gd"
      },
      {
        "name": "ItemSocketableEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\item_socketable_editor.gd",
        "file": "editor_components/editors/items/item_properties/item_socketable_editor.gd"
      },
      {
        "name": "ItemWeaponEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\item_properties\\item_weapon_editor.gd",
        "file": "editor_components/editors/items/item_properties/item_weapon_editor.gd"
      },
      {
        "name": "LootLevelSourceFields",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\loot_level_source_fields.gd",
        "file": "editor_components/editors/items/loot_level_source_fields.gd"
      },
      {
        "name": "LootRulesFields",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\loot_rules_fields.gd",
        "file": "editor_components/editors/items/loot_rules_fields.gd"
      },
      {
        "name": "LootTableEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\loot_table_editor.gd",
        "file": "editor_components/editors/items/loot_table_editor.gd"
      },
      {
        "name": "LootTableInlineFields",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\loot_table_inline_fields.gd",
        "file": "editor_components/editors/items/loot_table_inline_fields.gd"
      },
      {
        "name": "VendorEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\items\\vendor_editor.gd",
        "file": "editor_components/editors/items/vendor_editor.gd"
      }
    ]
  },
  {
    "text": "Settings editors",
    "slug": "settings",
    "classes": [
      {
        "name": "CharacterCreationConfigEditor",
        "base": "ConfigEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\character_creation_config_editor.gd",
        "file": "editor_components/editors/settings/character_creation_config_editor.gd"
      },
      {
        "name": "CollisionLayerEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\collision_layer_editor.gd",
        "file": "editor_components/editors/settings/collision_layer_editor.gd"
      },
      {
        "name": "ConfigEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\config_editor.gd",
        "file": "editor_components/editors/settings/config_editor.gd"
      },
      {
        "name": "ControllerLogicEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\controller_logic_editor.gd",
        "file": "editor_components/editors/settings/controller_logic_editor.gd"
      },
      {
        "name": "GameplayConfigEditor",
        "base": "ConfigEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\gameplay_config_editor.gd",
        "file": "editor_components/editors/settings/gameplay_config_editor.gd"
      },
      {
        "name": "ItemBudgetEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\item_budget_editor.gd",
        "file": "editor_components/editors/settings/item_budget_editor.gd"
      },
      {
        "name": "KillExperienceEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\kill_experience_editor.gd",
        "file": "editor_components/editors/settings/kill_experience_editor.gd"
      },
      {
        "name": "KillFalloffEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\kill_falloff_editor.gd",
        "file": "editor_components/editors/settings/kill_falloff_editor.gd"
      },
      {
        "name": "LevelGapEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\level_gap_editor.gd",
        "file": "editor_components/editors/settings/level_gap_editor.gd"
      },
      {
        "name": "LocalizationEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\localization_editor.gd",
        "file": "editor_components/editors/settings/localization_editor.gd"
      },
      {
        "name": "SettingsEditor",
        "base": "ConfigEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\settings_editor.gd",
        "file": "editor_components/editors/settings/settings_editor.gd"
      },
      {
        "name": "UISettingsEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\settings\\ui_settings_editor.gd",
        "file": "editor_components/editors/settings/ui_settings_editor.gd"
      }
    ]
  },
  {
    "text": "Stat editors",
    "slug": "stats",
    "classes": [
      {
        "name": "CalculationList",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\stats_properties\\calculation_list.gd",
        "file": "editor_components/editors/stats/stats_properties/calculation_list.gd"
      },
      {
        "name": "CalculationsEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\calculations_editor.gd",
        "file": "editor_components/editors/stats/calculations_editor.gd"
      },
      {
        "name": "DamageTypesEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\damage_types_editor.gd",
        "file": "editor_components/editors/stats/damage_types_editor.gd"
      },
      {
        "name": "EntityTagsEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\entity_tags_editor.gd",
        "file": "editor_components/editors/stats/entity_tags_editor.gd"
      },
      {
        "name": "FormulaGraph",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\stats_properties\\formula_graph.gd",
        "file": "editor_components/editors/stats/stats_properties/formula_graph.gd"
      },
      {
        "name": "GroupsEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\groups_editor.gd",
        "file": "editor_components/editors/stats/groups_editor.gd"
      },
      {
        "name": "GrowthEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\stats_properties\\growth_editor.gd",
        "file": "editor_components/editors/stats/stats_properties/growth_editor.gd"
      },
      {
        "name": "GrowthOverridesEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\stats_properties\\growth_overrides_editor.gd",
        "file": "editor_components/editors/stats/stats_properties/growth_overrides_editor.gd"
      },
      {
        "name": "GrowthProfilePicker",
        "base": "OptionButton",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\stats_properties\\growth_profile_picker.gd",
        "file": "editor_components/editors/stats/stats_properties/growth_profile_picker.gd"
      },
      {
        "name": "GrowthProfilesEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\growth_profiles_editor.gd",
        "file": "editor_components/editors/stats/growth_profiles_editor.gd"
      },
      {
        "name": "ImmunityDefinitionsEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\immunity_editor.gd",
        "file": "editor_components/editors/stats/immunity_editor.gd"
      },
      {
        "name": "PoolStatsEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\pool_stats_editor.gd",
        "file": "editor_components/editors/stats/pool_stats_editor.gd"
      },
      {
        "name": "ProficienciesEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\proficiencies_editor.gd",
        "file": "editor_components/editors/stats/proficiencies_editor.gd"
      },
      {
        "name": "SchoolTypesEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\school_types_editor.gd",
        "file": "editor_components/editors/stats/school_types_editor.gd"
      },
      {
        "name": "StatClassScanner",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\stats_properties\\stat_class_scanner.gd",
        "file": "editor_components/editors/stats/stats_properties/stat_class_scanner.gd"
      },
      {
        "name": "StatEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\stat_editor.gd",
        "file": "editor_components/editors/stats/stat_editor.gd"
      },
      {
        "name": "StatEffectPropertyEditor",
        "base": "PanelContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\stats_properties\\stat_effect_property_editor.gd",
        "file": "editor_components/editors/stats/stats_properties/stat_effect_property_editor.gd"
      },
      {
        "name": "StatGroupsEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\stat_groups_editor.gd",
        "file": "editor_components/editors/stats/stat_groups_editor.gd"
      },
      {
        "name": "StatPropertyFields",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\stats_properties\\stat_property_fields.gd",
        "file": "editor_components/editors/stats/stats_properties/stat_property_fields.gd"
      },
      {
        "name": "StatusEffectsEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\status_effects_editor.gd",
        "file": "editor_components/editors/stats/status_effects_editor.gd"
      },
      {
        "name": "TriggerTagsEditor",
        "base": "ResourceEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\stats\\trigger_tags_editor.gd",
        "file": "editor_components/editors/stats/trigger_tags_editor.gd"
      }
    ]
  },
  {
    "text": "World editors",
    "slug": "world",
    "classes": [
      {
        "name": "BaseConfigEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\world\\config_editors\\base_config_editor.gd",
        "file": "editor_components/editors/world/config_editors/base_config_editor.gd"
      },
      {
        "name": "EnvironmentConfigEditor",
        "base": "BaseConfigEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\world\\config_editors\\environment_config_editor.gd",
        "file": "editor_components/editors/world/config_editors/environment_config_editor.gd"
      },
      {
        "name": "SkyConfigEditor",
        "base": "BaseConfigEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\world\\config_editors\\sky_config_editor.gd",
        "file": "editor_components/editors/world/config_editors/sky_config_editor.gd"
      },
      {
        "name": "SunConfigEditor",
        "base": "BaseConfigEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\world\\config_editors\\sun_config_editor.gd",
        "file": "editor_components/editors/world/config_editors/sun_config_editor.gd"
      },
      {
        "name": "TimeConfigEditor",
        "base": "BaseConfigEditor",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\world\\config_editors\\time_config_editor.gd",
        "file": "editor_components/editors/world/config_editors/time_config_editor.gd"
      },
      {
        "name": "UniquesDatabaseEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\world\\uniques_database_editor.gd",
        "file": "editor_components/editors/world/uniques_database_editor.gd"
      },
      {
        "name": "WorldConfigEditor",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\world\\world_config_editor.gd",
        "file": "editor_components/editors/world/world_config_editor.gd"
      },
      {
        "name": "WorldDatabaseEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\editors\\world\\world_database_editor.gd",
        "file": "editor_components/editors/world/world_database_editor.gd"
      }
    ]
  },
  {
    "text": "Viewport tools",
    "slug": "viewport-tools",
    "classes": [
      {
        "name": "EntityDataPropertyEditor",
        "base": "EditorProperty",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\inspector_plugins\\entity_data_property_editor.gd",
        "file": "editor_components/inspector_plugins/entity_data_property_editor.gd"
      },
      {
        "name": "ModularEquipmentTypeTagPropertyEditor",
        "base": "EditorProperty",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\inspector_plugins\\modular_equipment_type_tag_property_editor.gd",
        "file": "editor_components/inspector_plugins/modular_equipment_type_tag_property_editor.gd"
      },
      {
        "name": "SFXSelectionPropertyEditor",
        "base": "EditorProperty",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\inspector_plugins\\sfx_selection_property_editor.gd",
        "file": "editor_components/inspector_plugins/sfx_selection_property_editor.gd"
      },
      {
        "name": "UniqueObjectInspectorPlugin",
        "base": "EditorInspectorPlugin",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\inspector_plugins\\unique_object_inspector_plugin.gd",
        "file": "editor_components/inspector_plugins/unique_object_inspector_plugin.gd"
      }
    ]
  },
  {
    "text": "Catalogs",
    "slug": "catalogs",
    "classes": [
      {
        "name": "GridCatalog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\catalogs\\grid_catalog.gd",
        "file": "editor_components/catalogs/grid_catalog.gd"
      },
      {
        "name": "IconCatalog",
        "base": "GridCatalog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\catalogs\\icon_catalog.gd",
        "file": "editor_components/catalogs/icon_catalog.gd"
      },
      {
        "name": "IconWidget",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\catalogs\\icon_widget.gd",
        "file": "editor_components/catalogs/icon_widget.gd"
      },
      {
        "name": "ListCatalog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\catalogs\\list_catalog.gd",
        "file": "editor_components/catalogs/list_catalog.gd"
      },
      {
        "name": "MeshCatalog",
        "base": "GridCatalog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\catalogs\\mesh_catalog.gd",
        "file": "editor_components/catalogs/mesh_catalog.gd"
      },
      {
        "name": "ObjectWidget",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\catalogs\\object_widget.gd",
        "file": "editor_components/catalogs/object_widget.gd"
      }
    ]
  },
  {
    "text": "Dialogs",
    "slug": "dialogs",
    "classes": [
      {
        "name": "AnimationSelectionDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\animation_dialogs\\animation_selection_dialog.gd",
        "file": "editor_components/dialogs/animation_dialogs/animation_selection_dialog.gd"
      },
      {
        "name": "ArrayParameterPopup",
        "base": "ParameterPopupBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\parameters_popups\\parameter_array_popup.gd",
        "file": "editor_components/dialogs/parameters_popups/parameter_array_popup.gd"
      },
      {
        "name": "BBCodeTextEditor",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\bbcode_text_editor\\bbcode_text_editor.gd",
        "file": "editor_components/dialogs/bbcode_text_editor/bbcode_text_editor.gd"
      },
      {
        "name": "BoolParameterPopup",
        "base": "ParameterPopupBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\parameters_popups\\parameter_bool_popup.gd",
        "file": "editor_components/dialogs/parameters_popups/parameter_bool_popup.gd"
      },
      {
        "name": "ConditionalEditDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\conditional_edit_dialog.gd",
        "file": "editor_components/dialogs/conditional_edit_dialog.gd"
      },
      {
        "name": "CreateEntityDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\create_resource_dialogs\\create_entity_dialog.gd",
        "file": "editor_components/dialogs/create_resource_dialogs/create_entity_dialog.gd"
      },
      {
        "name": "CreateResourceDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\create_resource_dialogs\\create_resource_dialog.gd",
        "file": "editor_components/dialogs/create_resource_dialogs/create_resource_dialog.gd"
      },
      {
        "name": "CurrencySelectionDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\currency_selection_dialog.gd",
        "file": "editor_components/dialogs/currency_selection_dialog.gd"
      },
      {
        "name": "EffectTypeSelectionDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\create_resource_dialogs\\effect_type_selection_dialog.gd",
        "file": "editor_components/dialogs/create_resource_dialogs/effect_type_selection_dialog.gd"
      },
      {
        "name": "EncounterActionEditDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\encounter_action_edit_dialog.gd",
        "file": "editor_components/dialogs/encounter_action_edit_dialog.gd"
      },
      {
        "name": "EncounterConditionEditDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\encounter_condition_edit_dialog.gd",
        "file": "editor_components/dialogs/encounter_condition_edit_dialog.gd"
      },
      {
        "name": "EncounterReactionEditDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\encounter_reaction_edit_dialog.gd",
        "file": "editor_components/dialogs/encounter_reaction_edit_dialog.gd"
      },
      {
        "name": "EventTypeSelectionDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\event_dialogs\\event_type_selection_dialog.gd",
        "file": "editor_components/dialogs/event_dialogs/event_type_selection_dialog.gd"
      },
      {
        "name": "EventTypeSelector",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\event_dialogs\\event_type_selector.gd",
        "file": "editor_components/dialogs/event_dialogs/event_type_selector.gd"
      },
      {
        "name": "FloatParameterPopup",
        "base": "ParameterPopupBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\parameters_popups\\parameter_float_popup.gd",
        "file": "editor_components/dialogs/parameters_popups/parameter_float_popup.gd"
      },
      {
        "name": "InteractionSelectionDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\interaction_selection_dialog.gd",
        "file": "editor_components/dialogs/interaction_selection_dialog.gd"
      },
      {
        "name": "IntParameterPopup",
        "base": "ParameterPopupBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\parameters_popups\\parameter_int_popup.gd",
        "file": "editor_components/dialogs/parameters_popups/parameter_int_popup.gd"
      },
      {
        "name": "LootEntryConfigDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\loot_entry_dialog\\loot_entry_config_dialog.gd",
        "file": "editor_components/dialogs/loot_entry_dialog/loot_entry_config_dialog.gd"
      },
      {
        "name": "OptionsParameterPopup",
        "base": "ParameterPopupBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\parameters_popups\\parameter_options_popup.gd",
        "file": "editor_components/dialogs/parameters_popups/parameter_options_popup.gd"
      },
      {
        "name": "ParameterPopupBase",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\parameters_popups\\parameter_popup_base.gd",
        "file": "editor_components/dialogs/parameters_popups/parameter_popup_base.gd"
      },
      {
        "name": "QuestObjectiveConfigurationPopup",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\event_dialogs\\quest_objective_selection_popup.gd",
        "file": "editor_components/dialogs/event_dialogs/quest_objective_selection_popup.gd"
      },
      {
        "name": "QuestSelectionDialog",
        "base": "Window",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\event_dialogs\\quest_selection_popup.gd",
        "file": "editor_components/dialogs/event_dialogs/quest_selection_popup.gd"
      },
      {
        "name": "ReputationLevelDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\reputation_level_dialog.gd",
        "file": "editor_components/dialogs/reputation_level_dialog.gd"
      },
      {
        "name": "ResponseStatePopup",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\response_state_dialog.gd",
        "file": "editor_components/dialogs/response_state_dialog.gd"
      },
      {
        "name": "ScheduleEditDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\schedule_edit_dialog.gd",
        "file": "editor_components/dialogs/schedule_edit_dialog.gd"
      },
      {
        "name": "SetBonusSelectionDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\set_bonus_selection_dialog.gd",
        "file": "editor_components/dialogs/set_bonus_selection_dialog.gd"
      },
      {
        "name": "SFXSelectionDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\sfx_dialogs\\sfx_selection_dialog.gd",
        "file": "editor_components/dialogs/sfx_dialogs/sfx_selection_dialog.gd"
      },
      {
        "name": "ShapeConfigDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\shape_dialogs\\shape_config_dialog.gd",
        "file": "editor_components/dialogs/shape_dialogs/shape_config_dialog.gd"
      },
      {
        "name": "SocketSelectionDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\socket_selection_dialog.gd",
        "file": "editor_components/dialogs/socket_selection_dialog.gd"
      },
      {
        "name": "StringParameterPopup",
        "base": "ParameterPopupBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\parameters_popups\\parameter_string_popup.gd",
        "file": "editor_components/dialogs/parameters_popups/parameter_string_popup.gd"
      },
      {
        "name": "TrackSelectionDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\audio_dialogs\\track_selection_dialog.gd",
        "file": "editor_components/dialogs/audio_dialogs/track_selection_dialog.gd"
      },
      {
        "name": "UnifiedResourceDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\unified_resource_dialog.gd",
        "file": "editor_components/dialogs/unified_resource_dialog.gd"
      },
      {
        "name": "VariablePopup",
        "base": "Window",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\event_dialogs\\variable_popup.gd",
        "file": "editor_components/dialogs/event_dialogs/variable_popup.gd"
      },
      {
        "name": "Vector2ParameterPopup",
        "base": "ParameterPopupBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\parameters_popups\\parameter_vector2_popup.gd",
        "file": "editor_components/dialogs/parameters_popups/parameter_vector2_popup.gd"
      },
      {
        "name": "Vector3ParameterPopup",
        "base": "ParameterPopupBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\parameters_popups\\parameter_vector3_popup.gd",
        "file": "editor_components/dialogs/parameters_popups/parameter_vector3_popup.gd"
      },
      {
        "name": "VendorItemSlotDialog",
        "base": "AcceptDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\vendor_item_slot_dialog.gd",
        "file": "editor_components/dialogs/vendor_item_slot_dialog.gd"
      },
      {
        "name": "VFXSelectionBeamProperties",
        "base": "VFXSelectionPropertyPanel",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\vfx_dialogs\\vfx_selection_beam_property_panel.gd",
        "file": "editor_components/dialogs/vfx_dialogs/vfx_selection_beam_property_panel.gd"
      },
      {
        "name": "VFXSelectionDialog",
        "base": "ConfirmationDialog",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\vfx_dialogs\\vfx_selection_dialog.gd",
        "file": "editor_components/dialogs/vfx_dialogs/vfx_selection_dialog.gd"
      },
      {
        "name": "VFXSelectionLoopProperties",
        "base": "VFXSelectionPropertyPanel",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\vfx_dialogs\\vfx_selection_loop_property_panel.gd",
        "file": "editor_components/dialogs/vfx_dialogs/vfx_selection_loop_property_panel.gd"
      },
      {
        "name": "VFXSelectionMaterialProperties",
        "base": "VFXSelectionPropertyPanel",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\vfx_dialogs\\vfx_selection_material_property_panel.gd",
        "file": "editor_components/dialogs/vfx_dialogs/vfx_selection_material_property_panel.gd"
      },
      {
        "name": "VFXSelectionOneShotProperties",
        "base": "VFXSelectionPropertyPanel",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\vfx_dialogs\\vfx_selection_one_shot_property_panel.gd",
        "file": "editor_components/dialogs/vfx_dialogs/vfx_selection_one_shot_property_panel.gd"
      },
      {
        "name": "VFXSelectionPathProperties",
        "base": "VFXSelectionPropertyPanel",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\vfx_dialogs\\vfx_selection_path_property_panel.gd",
        "file": "editor_components/dialogs/vfx_dialogs/vfx_selection_path_property_panel.gd"
      },
      {
        "name": "VFXSelectionPropertyPanel",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\vfx_dialogs\\vfx_selection_property_panel.gd",
        "file": "editor_components/dialogs/vfx_dialogs/vfx_selection_property_panel.gd"
      },
      {
        "name": "VFXSelectionTelegraphProperties",
        "base": "VFXSelectionPropertyPanel",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\vfx_dialogs\\vfx_selection_telegraph_property_panel.gd",
        "file": "editor_components/dialogs/vfx_dialogs/vfx_selection_telegraph_property_panel.gd"
      },
      {
        "name": "VFXSelectionTransformationProperties",
        "base": "VFXSelectionPropertyPanel",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\dialogs\\vfx_dialogs\\vfx_selection_transformation_property_panel.gd",
        "file": "editor_components/dialogs/vfx_dialogs/vfx_selection_transformation_property_panel.gd"
      }
    ]
  },
  {
    "text": "Property controls",
    "slug": "factory",
    "classes": [
      {
        "name": "BBCodeTextControl",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\factory\\bbcode_text_control.gd",
        "file": "editor_components/factory/bbcode_text_control.gd"
      },
      {
        "name": "CurveEditorControl",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\curve_editor\\curve_editor_control.gd",
        "file": "editor_components/curve_editor/curve_editor_control.gd"
      },
      {
        "name": "DatabaseArrayControl",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\factory\\database_array_control.gd",
        "file": "editor_components/factory/database_array_control.gd"
      },
      {
        "name": "DatabaseOptionButton",
        "base": "OptionButton",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\factory\\database_option_button.gd",
        "file": "editor_components/factory/database_option_button.gd"
      },
      {
        "name": "DatabaseResourceButton",
        "base": "HBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\factory\\database_resource_button.gd",
        "file": "editor_components/factory/database_resource_button.gd"
      },
      {
        "name": "DynamicDictionaryEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\factory\\dynamic_dictionary_editor.gd",
        "file": "editor_components/factory/dynamic_dictionary_editor.gd"
      },
      {
        "name": "ExperiencePerLevelEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\factory\\experiance_per_level_editor.gd",
        "file": "editor_components/factory/experiance_per_level_editor.gd"
      },
      {
        "name": "PropertyFactory",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\factory\\property_factory.gd",
        "file": "editor_components/factory/property_factory.gd"
      },
      {
        "name": "PropertyUIFactory",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\factory\\property_control_node_factory.gd",
        "file": "editor_components/factory/property_control_node_factory.gd"
      },
      {
        "name": "Vector2Control",
        "base": "HBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\factory\\vector_2_control.gd",
        "file": "editor_components/factory/vector_2_control.gd"
      },
      {
        "name": "Vector3Control",
        "base": "HBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\factory\\vector_3_control.gd",
        "file": "editor_components/factory/vector_3_control.gd"
      }
    ]
  },
  {
    "text": "Managers and utilities",
    "slug": "tools",
    "classes": [
      {
        "name": "AnimationPropertyMapper",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\utility\\animation_property_mapper.gd",
        "file": "editor_components/utility/animation_property_mapper.gd"
      },
      {
        "name": "DialogManager",
        "base": "Node",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\managers\\dialog_manager.gd",
        "file": "editor_components/managers/dialog_manager.gd"
      },
      {
        "name": "DocsLinks",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\utility\\docs_links.gd",
        "file": "editor_components/utility/docs_links.gd"
      },
      {
        "name": "EditorThemeManager",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\managers\\ui_theme_manager.gd",
        "file": "editor_components/managers/ui_theme_manager.gd"
      },
      {
        "name": "EffectUtil",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\utility\\effects_editor_util.gd",
        "file": "editor_components/utility/effects_editor_util.gd"
      },
      {
        "name": "EventTypeManager",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\managers\\event_type_manager.gd",
        "file": "editor_components/managers/event_type_manager.gd"
      },
      {
        "name": "InteractableSceneCreator",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\utility\\interactable_scene_creator.gd",
        "file": "editor_components/utility/interactable_scene_creator.gd"
      },
      {
        "name": "ProjectSetupUtility",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\utility\\project_setup_utility.gd",
        "file": "editor_components/utility/project_setup_utility.gd"
      },
      {
        "name": "PropertySelectorRegistry",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\utility\\property_selector_registry.gd",
        "file": "editor_components/utility/property_selector_registry.gd"
      },
      {
        "name": "ResourceManager",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\managers\\resource_manager.gd",
        "file": "editor_components/managers/resource_manager.gd"
      },
      {
        "name": "RPGShapeUtility",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\utility\\rpg_shape_utils.gd",
        "file": "editor_components/utility/rpg_shape_utils.gd"
      },
      {
        "name": "SkeletonSceneConverter",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\utility\\skeleton_scene_converter.gd",
        "file": "editor_components/utility/skeleton_scene_converter.gd"
      },
      {
        "name": "WorldSceneValidator",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\utility\\world_scene_validator.gd",
        "file": "editor_components/utility/world_scene_validator.gd"
      }
    ]
  }
]
