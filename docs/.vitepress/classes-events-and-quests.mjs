// Written by scripts/scan-classes.mjs from the addon: the classes of the Events & Quests system.
export const groups = [
  {
    "text": "Events, quests and variables",
    "slug": "events",
    "classes": [
      {
        "name": "Event",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event.gd",
        "file": "data_classes/events/event.gd"
      },
      {
        "name": "GlobalVariable",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\variables\\global_variable.gd",
        "file": "data_classes/variables/global_variable.gd"
      },
      {
        "name": "LocalVariables",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\variables\\local_variables.gd",
        "file": "data_classes/variables/local_variables.gd"
      },
      {
        "name": "Quest",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\quest.gd",
        "file": "data_classes/events/quest.gd"
      },
      {
        "name": "QuestLine",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\quest_line.gd",
        "file": "data_classes/events/quest_line.gd"
      },
      {
        "name": "QuestObjective",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\quest_objective.gd",
        "file": "data_classes/events/event_triggers/quest_objective.gd"
      }
    ]
  },
  {
    "text": "Trigger and action base classes",
    "slug": "bases",
    "classes": [
      {
        "name": "EventAction",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\event_action.gd",
        "file": "data_classes/events/event_actions/event_action.gd"
      },
      {
        "name": "EventTrigger",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\event_trigger.gd",
        "file": "data_classes/events/event_triggers/event_trigger.gd"
      },
      {
        "name": "PlayerEventAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\player_event_action.gd",
        "file": "data_classes/events/event_actions/player_event_action.gd"
      },
      {
        "name": "PlayerEventTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player_event_trigger.gd",
        "file": "data_classes/events/event_triggers/player_event_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: encounter",
    "slug": "triggers-encounter",
    "classes": [
      {
        "name": "EncounterCombatStateChangeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\encounter\\encounter_combat_state_change_trigger.gd",
        "file": "data_classes/events/event_triggers/encounter/encounter_combat_state_change_trigger.gd"
      },
      {
        "name": "PackActiveStateChangeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\encounter\\encounter_active_state_change_trigger.gd",
        "file": "data_classes/events/event_triggers/encounter/encounter_active_state_change_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: entity",
    "slug": "triggers-entity",
    "classes": [
      {
        "name": "EntityAbilityCastTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_ability_cast_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_ability_cast_trigger.gd"
      },
      {
        "name": "EntityBasicAttackCastTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_basic_attack_cast_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_basic_attack_cast_trigger.gd"
      },
      {
        "name": "EntityCastingTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_casting_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_casting_trigger.gd"
      },
      {
        "name": "EntityCombatStateChangeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_combat_state_changed_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_combat_state_changed_trigger.gd"
      },
      {
        "name": "EntityDamageDealtTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_damage_dealt_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_damage_dealt_trigger.gd"
      },
      {
        "name": "EntityDamageIncomingTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_damage_incoming_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_damage_incoming_trigger.gd"
      },
      {
        "name": "EntityDamageMitigatedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_damage_mitigated_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_damage_mitigated_trigger.gd"
      },
      {
        "name": "EntityDamageTakenTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_damage_taken_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_damage_taken_trigger.gd"
      },
      {
        "name": "EntityDeathGroupTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_death_group_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_death_group_trigger.gd"
      },
      {
        "name": "EntityDeathTypeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_death_type_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_death_type_trigger.gd"
      },
      {
        "name": "EntityDeathUniqueTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_death_unique_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_death_unique_trigger.gd"
      },
      {
        "name": "EntityEffectTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_effect_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_effect_trigger.gd"
      },
      {
        "name": "EntityHealCastTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_heal_cast_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_heal_cast_trigger.gd"
      },
      {
        "name": "EntityHealingReceivedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_healing_recived_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_healing_recived_trigger.gd"
      },
      {
        "name": "EntityHealthChangedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_health_changed_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_health_changed_trigger.gd"
      },
      {
        "name": "EntityInteractTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_interact_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_interact_trigger.gd"
      },
      {
        "name": "EntityInterruptedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_interrupted_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_interrupted_trigger.gd"
      },
      {
        "name": "EntityPetGainedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_pet_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_pet_trigger.gd"
      },
      {
        "name": "EntityResourceChangedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_resource_changed_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_resource_changed_trigger.gd"
      },
      {
        "name": "EntitySpecialDefensiveEffectTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_special_defensive_effect_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_special_defensive_effect_trigger.gd"
      },
      {
        "name": "EntitySpecialHealingReceivedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_special_healing_received_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_special_healing_received_trigger.gd"
      },
      {
        "name": "EntitySpecialOffensiveEffectTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_special_offensive_effect_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_special_offensive_effect_trigger.gd"
      },
      {
        "name": "EntitySpecificAbilityCastTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_specific_ability_cast_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_specific_ability_cast_trigger.gd"
      },
      {
        "name": "EntityStatChangedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_stat_changed_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_stat_changed_trigger.gd"
      },
      {
        "name": "EntityTargetChangedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\entity\\entity_target_changed_trigger.gd",
        "file": "data_classes/events/event_triggers/entity/entity_target_changed_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: faction",
    "slug": "triggers-faction",
    "classes": [
      {
        "name": "FactionStandingChangedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\faction\\faction_standing_changed_trigger.gd",
        "file": "data_classes/events/event_triggers/faction/faction_standing_changed_trigger.gd"
      },
      {
        "name": "PlayerStandingChangedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\faction\\player_standing_changed_trigger.gd",
        "file": "data_classes/events/event_triggers/faction/player_standing_changed_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: input",
    "slug": "triggers-input",
    "classes": [
      {
        "name": "PlayerInputTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\input\\player_input_trigger.gd",
        "file": "data_classes/events/event_triggers/input/player_input_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: interactable object",
    "slug": "triggers-interactable-object",
    "classes": [
      {
        "name": "ObjectContainerStateChangeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\interactable_object\\object_container_state_change_trigger.gd",
        "file": "data_classes/events/event_triggers/interactable_object/object_container_state_change_trigger.gd"
      },
      {
        "name": "ObjectDestructibleDamagedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\interactable_object\\object_destructible_damaged_trigger.gd",
        "file": "data_classes/events/event_triggers/interactable_object/object_destructible_damaged_trigger.gd"
      },
      {
        "name": "ObjectDestructibleDestroyedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\interactable_object\\object_destructible_destroyed_trigger.gd",
        "file": "data_classes/events/event_triggers/interactable_object/object_destructible_destroyed_trigger.gd"
      },
      {
        "name": "ObjectDoorStateChangeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\interactable_object\\object_door_state_change_trigger.gd",
        "file": "data_classes/events/event_triggers/interactable_object/object_door_state_change_trigger.gd"
      },
      {
        "name": "ObjectInteractTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\interactable_object\\object_interact_trigger.gd",
        "file": "data_classes/events/event_triggers/interactable_object/object_interact_trigger.gd"
      },
      {
        "name": "ObjectLadderClimbTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\interactable_object\\object_ladder_climb_trigger.gd",
        "file": "data_classes/events/event_triggers/interactable_object/object_ladder_climb_trigger.gd"
      },
      {
        "name": "ObjectLockedStateChangeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\interactable_object\\object_locked_state_changed_trigger.gd",
        "file": "data_classes/events/event_triggers/interactable_object/object_locked_state_changed_trigger.gd"
      },
      {
        "name": "ObjectSwitchStateChangeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\interactable_object\\object_switch_state_changed_trigger.gd",
        "file": "data_classes/events/event_triggers/interactable_object/object_switch_state_changed_trigger.gd"
      },
      {
        "name": "ObjectTeleportationTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\interactable_object\\object_teleportation_trigger.gd",
        "file": "data_classes/events/event_triggers/interactable_object/object_teleportation_trigger.gd"
      },
      {
        "name": "ObjectTrapTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\interactable_object\\object_trap_trigger.gd",
        "file": "data_classes/events/event_triggers/interactable_object/object_trap_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: item",
    "slug": "triggers-item",
    "classes": [
      {
        "name": "PlayerEquipmentChangeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\item\\player_equipment_change_trigger.gd",
        "file": "data_classes/events/event_triggers/item/player_equipment_change_trigger.gd"
      },
      {
        "name": "PlayerHasXItemsTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\item\\player_has_x_item_trigger.gd",
        "file": "data_classes/events/event_triggers/item/player_has_x_item_trigger.gd"
      },
      {
        "name": "PlayerItemConsumedTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\item\\player_item_consumed_trigger.gd",
        "file": "data_classes/events/event_triggers/item/player_item_consumed_trigger.gd"
      },
      {
        "name": "PlayerItemReceivedTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\item\\player_item_received_trigger.gd",
        "file": "data_classes/events/event_triggers/item/player_item_received_trigger.gd"
      },
      {
        "name": "PlayerItemUsedTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\item\\player_item_used_trigger.gd",
        "file": "data_classes/events/event_triggers/item/player_item_used_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: party",
    "slug": "triggers-party",
    "classes": [
      {
        "name": "PlayerAddedToPartyTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\party\\player_joins_party_trigger.gd",
        "file": "data_classes/events/event_triggers/party/player_joins_party_trigger.gd"
      },
      {
        "name": "PlayerRemovedFromPartyTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\party\\player_leaves_party_trigger.gd",
        "file": "data_classes/events/event_triggers/party/player_leaves_party_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: player",
    "slug": "triggers-player",
    "classes": [
      {
        "name": "PlayerAbilityCastTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_ability_cast_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_ability_cast_trigger.gd"
      },
      {
        "name": "PlayerBasicAttackCastTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_basic_attack_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_basic_attack_trigger.gd"
      },
      {
        "name": "PlayerBecameCurrentTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_becomes_current_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_becomes_current_trigger.gd"
      },
      {
        "name": "PlayerCombatStateChangedTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_combat_state_change_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_combat_state_change_trigger.gd"
      },
      {
        "name": "PlayerDamageDealtTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_damage_dealt_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_damage_dealt_trigger.gd"
      },
      {
        "name": "PlayerDamageTakenTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_damage_taken_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_damage_taken_trigger.gd"
      },
      {
        "name": "PlayerDeathTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_death_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_death_trigger.gd"
      },
      {
        "name": "PlayerEffectTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_effect_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_effect_trigger.gd"
      },
      {
        "name": "PlayerExperienceGainedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_experiance_gained_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_experiance_gained_trigger.gd"
      },
      {
        "name": "PlayerHealCastTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_heal_cast_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_heal_cast_trigger.gd"
      },
      {
        "name": "PlayerHealingReceivedTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_healing_received_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_healing_received_trigger.gd"
      },
      {
        "name": "PlayerHealthChangedTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_health_changed_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_health_changed_trigger.gd"
      },
      {
        "name": "PlayerLevelUpTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_level_up_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_level_up_trigger.gd"
      },
      {
        "name": "PlayerResourceChangedTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_resource_changed.gd",
        "file": "data_classes/events/event_triggers/player/player_resource_changed.gd"
      },
      {
        "name": "PlayerSpecialDefensiveEffectTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_special_defensive_effect_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_special_defensive_effect_trigger.gd"
      },
      {
        "name": "PlayerSpecialHealingReceivedTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_special_healing_received_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_special_healing_received_trigger.gd"
      },
      {
        "name": "PlayerSpecialOffensiveEffectTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_special_offensive_effect_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_special_offensive_effect_trigger.gd"
      },
      {
        "name": "PlayerSpecificAbilityCastTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_specific_ability_cast_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_specific_ability_cast_trigger.gd"
      },
      {
        "name": "PlayerStatChangedTrigger",
        "base": "PlayerEventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\player\\player_stat_change_trigger.gd",
        "file": "data_classes/events/event_triggers/player/player_stat_change_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: quest",
    "slug": "triggers-quest",
    "classes": [
      {
        "name": "QuestStateChangeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\quest\\quest_state_change_trigger.gd",
        "file": "data_classes/events/event_triggers/quest/quest_state_change_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: region",
    "slug": "triggers-region",
    "classes": [
      {
        "name": "RegionDetectionAnyEntityTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\region\\region_detection_any_entity_trigger.gd",
        "file": "data_classes/events/event_triggers/region/region_detection_any_entity_trigger.gd"
      },
      {
        "name": "RegionDetectionFactionTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\region\\region_detection_entity_faction_trigger.gd",
        "file": "data_classes/events/event_triggers/region/region_detection_entity_faction_trigger.gd"
      },
      {
        "name": "RegionDetectionPlayerTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\region\\region_detection_player_entity_trigger.gd",
        "file": "data_classes/events/event_triggers/region/region_detection_player_entity_trigger.gd"
      },
      {
        "name": "RegionDetectionUniqueEntityTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\region\\region_detection_unique_entity_trigger.gd",
        "file": "data_classes/events/event_triggers/region/region_detection_unique_entity_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: time",
    "slug": "triggers-time",
    "classes": [
      {
        "name": "GameStartTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\time\\game_start_trigger.gd",
        "file": "data_classes/events/event_triggers/time/game_start_trigger.gd"
      },
      {
        "name": "GameTimeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\time\\game_time_trigger.gd",
        "file": "data_classes/events/event_triggers/time/game_time_trigger.gd"
      },
      {
        "name": "TimerTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\time\\timer_trigger.gd",
        "file": "data_classes/events/event_triggers/time/timer_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: user interface",
    "slug": "triggers-user-interface",
    "classes": [
      {
        "name": "PopupClosedTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\user_interface\\popup_closed_trigger.gd",
        "file": "data_classes/events/event_triggers/user_interface/popup_closed_trigger.gd"
      }
    ]
  },
  {
    "text": "Triggers: variable",
    "slug": "triggers-variable",
    "classes": [
      {
        "name": "GlobalVariableTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\variable\\global_variable_trigger.gd",
        "file": "data_classes/events/event_triggers/variable/global_variable_trigger.gd"
      },
      {
        "name": "LocalVariableChangeTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\variable\\local_variable_change_trigger.gd",
        "file": "data_classes/events/event_triggers/variable/local_variable_change_trigger.gd"
      },
      {
        "name": "LocalVariableReachTrigger",
        "base": "EventTrigger",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_triggers\\variable\\local_variable_reach_trigger.gd",
        "file": "data_classes/events/event_triggers/variable/local_variable_reach_trigger.gd"
      }
    ]
  },
  {
    "text": "Actions: audio",
    "slug": "actions-audio",
    "classes": [
      {
        "name": "PlaySFXAtPositionAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\audio\\play_sfx_at_position_action.gd",
        "file": "data_classes/events/event_actions/audio/play_sfx_at_position_action.gd"
      },
      {
        "name": "PlaySFXGlobalAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\audio\\play_sfx_global_action.gd",
        "file": "data_classes/events/event_actions/audio/play_sfx_global_action.gd"
      },
      {
        "name": "SetAmbientTrackAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\audio\\set_ambient_track_action.gd",
        "file": "data_classes/events/event_actions/audio/set_ambient_track_action.gd"
      },
      {
        "name": "SetMusicTrackAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\audio\\set_music_track_action.gd",
        "file": "data_classes/events/event_actions/audio/set_music_track_action.gd"
      }
    ]
  },
  {
    "text": "Actions: encounter",
    "slug": "actions-encounter",
    "classes": [
      {
        "name": "ChangeEncounterBehaviorAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\encounter\\change_encounter_behavior_action.gd",
        "file": "data_classes/events/event_actions/encounter/change_encounter_behavior_action.gd"
      },
      {
        "name": "ForceEncounterCombatAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\encounter\\force_encounter_combat_action.gd",
        "file": "data_classes/events/event_actions/encounter/force_encounter_combat_action.gd"
      },
      {
        "name": "KillAllEncounterEntitiesAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\encounter\\encounter_kill_all_entities_action.gd",
        "file": "data_classes/events/event_actions/encounter/encounter_kill_all_entities_action.gd"
      },
      {
        "name": "SetPackActiveStateAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\encounter\\encounter_set_active_state_action.gd",
        "file": "data_classes/events/event_actions/encounter/encounter_set_active_state_action.gd"
      }
    ]
  },
  {
    "text": "Actions: entity",
    "slug": "actions-entity",
    "classes": [
      {
        "name": "GrantEffectToEntityAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\entity\\grant_effect_to_entity_action.gd",
        "file": "data_classes/events/event_actions/entity/grant_effect_to_entity_action.gd"
      },
      {
        "name": "KillEntityAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\entity\\kill_entity_action.gd",
        "file": "data_classes/events/event_actions/entity/kill_entity_action.gd"
      },
      {
        "name": "RemoveAllEffectsFromEntityAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\entity\\remove_all_effects_from_entity_action.gd",
        "file": "data_classes/events/event_actions/entity/remove_all_effects_from_entity_action.gd"
      },
      {
        "name": "RemoveEffectFromEntityAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\entity\\remove_effect_from_entity_action.gd",
        "file": "data_classes/events/event_actions/entity/remove_effect_from_entity_action.gd"
      },
      {
        "name": "SetEntityActiveStateAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\entity\\set_entity_active_action.gd",
        "file": "data_classes/events/event_actions/entity/set_entity_active_action.gd"
      },
      {
        "name": "SetEntityBehaviorScriptAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\entity\\set_entity_behavior_action.gd",
        "file": "data_classes/events/event_actions/entity/set_entity_behavior_action.gd"
      },
      {
        "name": "SetEntityCombatScriptAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\entity\\set_entity_combat_script_action.gd",
        "file": "data_classes/events/event_actions/entity/set_entity_combat_script_action.gd"
      },
      {
        "name": "SetEntityFactionAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\entity\\set_entity_faction.gd",
        "file": "data_classes/events/event_actions/entity/set_entity_faction.gd"
      },
      {
        "name": "SetEntityPositionAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\entity\\set_entity_position_action.gd",
        "file": "data_classes/events/event_actions/entity/set_entity_position_action.gd"
      },
      {
        "name": "SpawnEntityAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\entity\\spawn_entity_action.gd",
        "file": "data_classes/events/event_actions/entity/spawn_entity_action.gd"
      }
    ]
  },
  {
    "text": "Actions: environment",
    "slug": "actions-environment",
    "classes": [
      {
        "name": "CreateVFXAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\enviromental\\create_vfx_action.gd",
        "file": "data_classes/events/event_actions/enviromental/create_vfx_action.gd"
      },
      {
        "name": "SetEnvironmentConfigAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\enviromental\\set_enviroment_config_action.gd",
        "file": "data_classes/events/event_actions/enviromental/set_enviroment_config_action.gd"
      },
      {
        "name": "SetSkyConfigAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\enviromental\\set_sky_config_action.gd",
        "file": "data_classes/events/event_actions/enviromental/set_sky_config_action.gd"
      },
      {
        "name": "SetSunConfigAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\enviromental\\set_sun_config_action.gd",
        "file": "data_classes/events/event_actions/enviromental/set_sun_config_action.gd"
      },
      {
        "name": "SetTimeConfigAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\enviromental\\set_time_config_action.gd",
        "file": "data_classes/events/event_actions/enviromental/set_time_config_action.gd"
      },
      {
        "name": "SetWeatherAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\enviromental\\set_weather_action.gd",
        "file": "data_classes/events/event_actions/enviromental/set_weather_action.gd"
      },
      {
        "name": "SpawnWorldEffectAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\enviromental\\spawn_enviromental_effect_action.gd",
        "file": "data_classes/events/event_actions/enviromental/spawn_enviromental_effect_action.gd"
      }
    ]
  },
  {
    "text": "Actions: general",
    "slug": "actions-general",
    "classes": [
      {
        "name": "AwaitAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\general\\await_action.gd",
        "file": "data_classes/events/event_actions/general/await_action.gd"
      },
      {
        "name": "ChangeWorldAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\general\\change_map_action.gd",
        "file": "data_classes/events/event_actions/general/change_map_action.gd"
      },
      {
        "name": "CinematicAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\general\\cinematic_action.gd",
        "file": "data_classes/events/event_actions/general/cinematic_action.gd"
      },
      {
        "name": "CutsceneAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\general\\cutscene_action.gd",
        "file": "data_classes/events/event_actions/general/cutscene_action.gd"
      },
      {
        "name": "ForceGameOverAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\general\\force_game_over_action.gd",
        "file": "data_classes/events/event_actions/general/force_game_over_action.gd"
      },
      {
        "name": "GrantRewardAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\general\\grant_reward_action.gd",
        "file": "data_classes/events/event_actions/general/grant_reward_action.gd"
      },
      {
        "name": "IfAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\general\\if_action.gd",
        "file": "data_classes/events/event_actions/general/if_action.gd"
      },
      {
        "name": "ManipulateCameraAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\general\\camera_manipulate_action.gd",
        "file": "data_classes/events/event_actions/general/camera_manipulate_action.gd"
      },
      {
        "name": "SwitchAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\general\\switch_action.gd",
        "file": "data_classes/events/event_actions/general/switch_action.gd"
      }
    ]
  },
  {
    "text": "Actions: interactable objects",
    "slug": "actions-interactable-objects",
    "classes": [
      {
        "name": "AddItemsToInteractableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\add_items_to_container_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/add_items_to_container_action.gd"
      },
      {
        "name": "ClearContainerAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\clear_container_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/clear_container_action.gd"
      },
      {
        "name": "ControlDoorAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\control_door_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/control_door_action.gd"
      },
      {
        "name": "DamageInteractableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\destructable_damage_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/destructable_damage_action.gd"
      },
      {
        "name": "DestroyInteractableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\destructable_destroy_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/destructable_destroy_action.gd"
      },
      {
        "name": "ForceTeleportEntityAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\force_teleport_entity_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/force_teleport_entity_action.gd"
      },
      {
        "name": "GrantEffectToInteractableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\grant_effect_to_interactable_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/grant_effect_to_interactable_action.gd"
      },
      {
        "name": "LockObjectAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\lock_interactable_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/lock_interactable_action.gd"
      },
      {
        "name": "RemoveAllEffectsFromInteractableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\remove_all_effects_from_interactable_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/remove_all_effects_from_interactable_action.gd"
      },
      {
        "name": "RemoveEffectFromInteractableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\remove_effect_from_interactable_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/remove_effect_from_interactable_action.gd"
      },
      {
        "name": "RemoveItemsFromContainerAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\remove_items_from_container_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/remove_items_from_container_action.gd"
      },
      {
        "name": "RepairInteractableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\destructable_repair_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/destructable_repair_action.gd"
      },
      {
        "name": "SetInteractablePositionAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\set_interactable_position.gd",
        "file": "data_classes/events/event_actions/interactable_objects/set_interactable_position.gd"
      },
      {
        "name": "SetRabbitHoleDestinationAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\set_rabbit_hole_destination_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/set_rabbit_hole_destination_action.gd"
      },
      {
        "name": "SetRabbitHoleStateAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\set_rabbit_hole_state_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/set_rabbit_hole_state_action.gd"
      },
      {
        "name": "SetSwitchStateAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\set_switch_state_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/set_switch_state_action.gd"
      },
      {
        "name": "SetTrapStateAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\set_trap_state_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/set_trap_state_action.gd"
      },
      {
        "name": "SpawnInteractableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\spawn_interactable_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/spawn_interactable_action.gd"
      },
      {
        "name": "ToggleSwitchAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactable_objects\\toggle_switch_action.gd",
        "file": "data_classes/events/event_actions/interactable_objects/toggle_switch_action.gd"
      }
    ]
  },
  {
    "text": "Actions: interactions",
    "slug": "actions-interactions",
    "classes": [
      {
        "name": "SetConversationResponseStateAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactions\\set_conversation_response_state_action.gd",
        "file": "data_classes/events/event_actions/interactions/set_conversation_response_state_action.gd"
      },
      {
        "name": "SetConversationStartingChatAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactions\\set_conversation_starting_chat_action.gd",
        "file": "data_classes/events/event_actions/interactions/set_conversation_starting_chat_action.gd"
      },
      {
        "name": "SetPrimaryInteractionAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactions\\set_primary_interaction_action.gd",
        "file": "data_classes/events/event_actions/interactions/set_primary_interaction_action.gd"
      },
      {
        "name": "SetResponsesByTagAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\interactions\\set_response_by_tag_action.gd",
        "file": "data_classes/events/event_actions/interactions/set_response_by_tag_action.gd"
      }
    ]
  },
  {
    "text": "Actions: party",
    "slug": "actions-party",
    "classes": [
      {
        "name": "AddPlayerToPartyAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\party\\add_player_to_party_action.gd",
        "file": "data_classes/events/event_actions/party/add_player_to_party_action.gd"
      },
      {
        "name": "ChangePartySizeAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\party\\change_party_size.gd",
        "file": "data_classes/events/event_actions/party/change_party_size.gd"
      },
      {
        "name": "RemovePlayerFromPartyAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\party\\remove_player_from_party_action.gd",
        "file": "data_classes/events/event_actions/party/remove_player_from_party_action.gd"
      }
    ]
  },
  {
    "text": "Actions: player",
    "slug": "actions-player",
    "classes": [
      {
        "name": "GrantEffectToPlayerAction",
        "base": "PlayerEventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\player\\grant_effect_to_player_action.gd",
        "file": "data_classes/events/event_actions/player/grant_effect_to_player_action.gd"
      },
      {
        "name": "KillPlayerAction",
        "base": "PlayerEventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\player\\kill_player_action.gd",
        "file": "data_classes/events/event_actions/player/kill_player_action.gd"
      },
      {
        "name": "RemoveAllEffectsFromPlayerAction",
        "base": "PlayerEventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\player\\remove_all_effects_from_player_action.gd",
        "file": "data_classes/events/event_actions/player/remove_all_effects_from_player_action.gd"
      },
      {
        "name": "RemoveEffectFromPlayerAction",
        "base": "PlayerEventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\player\\remove_effect_from_player_action.gd",
        "file": "data_classes/events/event_actions/player/remove_effect_from_player_action.gd"
      },
      {
        "name": "SetPlayerCombatScriptAction",
        "base": "PlayerEventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\player\\set_player_combat_script_action.gd",
        "file": "data_classes/events/event_actions/player/set_player_combat_script_action.gd"
      },
      {
        "name": "SetPlayerPositionAction",
        "base": "PlayerEventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\player\\set_player_position.gd",
        "file": "data_classes/events/event_actions/player/set_player_position.gd"
      }
    ]
  },
  {
    "text": "Actions: quest",
    "slug": "actions-quest",
    "classes": [
      {
        "name": "AbandonQuestAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\quest\\abandon_quest_action.gd",
        "file": "data_classes/events/event_actions/quest/abandon_quest_action.gd"
      },
      {
        "name": "ActivateQuestAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\quest\\activate_quest_action.gd",
        "file": "data_classes/events/event_actions/quest/activate_quest_action.gd"
      },
      {
        "name": "ActivateQuestLineAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\quest\\activate_quest_line_action.gd",
        "file": "data_classes/events/event_actions/quest/activate_quest_line_action.gd"
      },
      {
        "name": "CompleteQuestAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\quest\\complete_quest_action.gd",
        "file": "data_classes/events/event_actions/quest/complete_quest_action.gd"
      },
      {
        "name": "CompleteQuestObjectiveAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\quest\\complete_quest_objective_action.gd",
        "file": "data_classes/events/event_actions/quest/complete_quest_objective_action.gd"
      },
      {
        "name": "FailQuestAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\quest\\fail_quest_action.gd",
        "file": "data_classes/events/event_actions/quest/fail_quest_action.gd"
      },
      {
        "name": "FailQuestObjectiveAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\quest\\fail_quest_objective_action.gd",
        "file": "data_classes/events/event_actions/quest/fail_quest_objective_action.gd"
      }
    ]
  },
  {
    "text": "Actions: time",
    "slug": "actions-time",
    "classes": [
      {
        "name": "AdvanceTimeAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\time\\time_advance_time_action.gd",
        "file": "data_classes/events/event_actions/time/time_advance_time_action.gd"
      },
      {
        "name": "SetTimeOfDayAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\time\\time_set_time_of_day_action.gd",
        "file": "data_classes/events/event_actions/time/time_set_time_of_day_action.gd"
      }
    ]
  },
  {
    "text": "Actions: user interface",
    "slug": "actions-user-interface",
    "classes": [
      {
        "name": "PopupAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\user_interface\\popup_action.gd",
        "file": "data_classes/events/event_actions/user_interface/popup_action.gd"
      }
    ]
  },
  {
    "text": "Actions: variable",
    "slug": "actions-variable",
    "classes": [
      {
        "name": "ManipulateLocalFloatVariableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\variable\\local_variable_manipulate_float_action.gd",
        "file": "data_classes/events/event_actions/variable/local_variable_manipulate_float_action.gd"
      },
      {
        "name": "ManipulateLocalIntVariableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\variable\\local_variable_manipulate_int_action.gd",
        "file": "data_classes/events/event_actions/variable/local_variable_manipulate_int_action.gd"
      },
      {
        "name": "ManipulateLocalStringVariableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\variable\\local_variable_manipulate_string_action.gd",
        "file": "data_classes/events/event_actions/variable/local_variable_manipulate_string_action.gd"
      },
      {
        "name": "ModifyGlobalVariableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\variable\\global_variable_modify_action.gd",
        "file": "data_classes/events/event_actions/variable/global_variable_modify_action.gd"
      },
      {
        "name": "SetGlobalVariableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\variable\\global_variable_set_action.gd",
        "file": "data_classes/events/event_actions/variable/global_variable_set_action.gd"
      },
      {
        "name": "SetLocalBoolVariableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\variable\\local_variable_set_bool_action.gd",
        "file": "data_classes/events/event_actions/variable/local_variable_set_bool_action.gd"
      },
      {
        "name": "SetLocalFloatVariableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\variable\\local_variable_set_float_action.gd",
        "file": "data_classes/events/event_actions/variable/local_variable_set_float_action.gd"
      },
      {
        "name": "SetLocalIntVariableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\variable\\local_variable_set_int_action.gd",
        "file": "data_classes/events/event_actions/variable/local_variable_set_int_action.gd"
      },
      {
        "name": "SetLocalStringVariableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\variable\\local_variable_set_string_action.gd",
        "file": "data_classes/events/event_actions/variable/local_variable_set_string_action.gd"
      },
      {
        "name": "ToggleLocalVariableAction",
        "base": "EventAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\events\\event_actions\\variable\\local_variable_toggle_bool_action.gd",
        "file": "data_classes/events/event_actions/variable/local_variable_toggle_bool_action.gd"
      }
    ]
  },
  {
    "text": "Popups",
    "slug": "popups",
    "classes": [
      {
        "name": "PopupData",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\popups\\popup_data.gd",
        "file": "data_classes/popups/popup_data.gd"
      },
      {
        "name": "PopupManager",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\system_managers\\popup_manager.gd",
        "file": "runtime_classes/system_managers/popup_manager.gd"
      }
    ]
  },
  {
    "text": "Runtime",
    "slug": "runtime",
    "classes": [
      {
        "name": "EventManager",
        "base": "Node",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\system_managers\\event_manager.gd",
        "file": "runtime_classes/system_managers/event_manager.gd"
      }
    ]
  }
]
