// Written by scripts/scan-classes.mjs from the addon: the classes of the Entities system.
export const groups = [
  {
    "text": "Definitions",
    "slug": "definitions",
    "classes": [
      {
        "name": "CharacterDefinition",
        "base": "EntityDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\character_definition.gd",
        "file": "data_classes/entity/character_definition.gd"
      },
      {
        "name": "CustomCharacterDefinition",
        "base": "CharacterDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\custom_character_definition.gd",
        "file": "data_classes/entity/custom_character_definition.gd"
      },
      {
        "name": "EntityDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\entity_definition.gd",
        "file": "data_classes/entity/entity_definition.gd"
      },
      {
        "name": "InteractableDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\interactable_object_definition.gd",
        "file": "data_classes/entity/interactable_object_definition.gd"
      },
      {
        "name": "NPCDefinition",
        "base": "EntityDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\npc_definition.gd",
        "file": "data_classes/entity/npc_definition.gd"
      },
      {
        "name": "PlayerClassDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\entity\\player_class_definition.gd",
        "file": "data_classes/entity/player_class_definition.gd"
      }
    ]
  },
  {
    "text": "Interactions",
    "slug": "interactions",
    "classes": [
      {
        "name": "ContainerInteraction",
        "base": "InteractableObjectInteraction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\interactable_objects\\container_interaction.gd",
        "file": "data_classes/interactions/interactable_objects/container_interaction.gd"
      },
      {
        "name": "ConversationInteraction",
        "base": "Interaction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\common_interactions\\conversation_interaction.gd",
        "file": "data_classes/interactions/common_interactions/conversation_interaction.gd"
      },
      {
        "name": "CraftingInteraction",
        "base": "Interaction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\common_interactions\\crafting_interaction.gd",
        "file": "data_classes/interactions/common_interactions/crafting_interaction.gd"
      },
      {
        "name": "DoorInteraction",
        "base": "InteractableObjectInteraction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\interactable_objects\\door_interaction.gd",
        "file": "data_classes/interactions/interactable_objects/door_interaction.gd"
      },
      {
        "name": "EntityInteraction",
        "base": "Interaction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\entity_interaction.gd",
        "file": "data_classes/interactions/entity_interaction.gd"
      },
      {
        "name": "GrantQuestInteraction",
        "base": "Interaction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\common_interactions\\grant_quest_interaction.gd",
        "file": "data_classes/interactions/common_interactions/grant_quest_interaction.gd"
      },
      {
        "name": "InteractableObjectInteraction",
        "base": "Interaction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\interactable_object_interaction.gd",
        "file": "data_classes/interactions/interactable_object_interaction.gd"
      },
      {
        "name": "Interaction",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\interaction.gd",
        "file": "data_classes/interactions/interaction.gd"
      },
      {
        "name": "JoinPartyInteraction",
        "base": "EntityInteraction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\entity_interaction\\join_party_interaction.gd",
        "file": "data_classes/interactions/entity_interaction/join_party_interaction.gd"
      },
      {
        "name": "LadderInteraction",
        "base": "InteractableObjectInteraction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\interactable_objects\\ladder_interaction.gd",
        "file": "data_classes/interactions/interactable_objects/ladder_interaction.gd"
      },
      {
        "name": "LightInteraction",
        "base": "SwitchInteraction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\interactable_objects\\light_interaction.gd",
        "file": "data_classes/interactions/interactable_objects/light_interaction.gd"
      },
      {
        "name": "LootInteraction",
        "base": "EntityInteraction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\entity_interaction\\loot_interaction.gd",
        "file": "data_classes/interactions/entity_interaction/loot_interaction.gd"
      },
      {
        "name": "RabbitHoleInteraction",
        "base": "InteractableObjectInteraction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\interactable_objects\\rabbit_hole_interaction.gd",
        "file": "data_classes/interactions/interactable_objects/rabbit_hole_interaction.gd"
      },
      {
        "name": "ReadableInteraction",
        "base": "InteractableObjectInteraction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\interactable_objects\\readable_behavior.gd",
        "file": "data_classes/interactions/interactable_objects/readable_behavior.gd"
      },
      {
        "name": "ShowUIPanelInteraction",
        "base": "Interaction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\common_interactions\\show_ui_panel_interaction.gd",
        "file": "data_classes/interactions/common_interactions/show_ui_panel_interaction.gd"
      },
      {
        "name": "SpeakInteraction",
        "base": "Interaction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\common_interactions\\speak_interaction.gd",
        "file": "data_classes/interactions/common_interactions/speak_interaction.gd"
      },
      {
        "name": "SwitchInteraction",
        "base": "InteractableObjectInteraction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\interactable_objects\\switch_interaction.gd",
        "file": "data_classes/interactions/interactable_objects/switch_interaction.gd"
      },
      {
        "name": "TrapInteraction",
        "base": "InteractableObjectInteraction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\interactable_objects\\trap_interaction.gd",
        "file": "data_classes/interactions/interactable_objects/trap_interaction.gd"
      },
      {
        "name": "VendorInteraction",
        "base": "Interaction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\interactions\\common_interactions\\vendor_interaction.gd",
        "file": "data_classes/interactions/common_interactions/vendor_interaction.gd"
      }
    ]
  },
  {
    "text": "Entities (runtime)",
    "slug": "runtime",
    "classes": [
      {
        "name": "DynamicFollowerSystem",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\dynamic_follower_system.gd",
        "file": "runtime_classes/entity/components/dynamic_follower_system.gd"
      },
      {
        "name": "Entity",
        "base": "CharacterBody3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\entity.gd",
        "file": "runtime_classes/entity/entity.gd"
      },
      {
        "name": "EntityComponentMediator",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\entity_component_mediator.gd",
        "file": "runtime_classes/entity/components/entity_component_mediator.gd"
      },
      {
        "name": "EntityComponentRegistry",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\entity_component_registry.gd",
        "file": "runtime_classes/entity/components/entity_component_registry.gd"
      },
      {
        "name": "FormationSystem",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\formation_system.gd",
        "file": "runtime_classes/player/formation_system.gd"
      },
      {
        "name": "InteractableObject",
        "base": "StaticBody3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\interactable_object.gd",
        "file": "runtime_classes/entity/interactable_object.gd"
      },
      {
        "name": "NPC",
        "base": "Entity",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\npc.gd",
        "file": "runtime_classes/entity/npc.gd"
      },
      {
        "name": "NpcLevels",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\npc_levels.gd",
        "file": "runtime_classes/entity/npc_levels.gd"
      },
      {
        "name": "PartyManager",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\party_manager.gd",
        "file": "runtime_classes/player/party_manager.gd"
      },
      {
        "name": "Pet",
        "base": "Entity",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\pet.gd",
        "file": "runtime_classes/entity/pet.gd"
      },
      {
        "name": "PetManagerComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\pet_manager_component.gd",
        "file": "runtime_classes/entity/components/pet_manager_component.gd"
      },
      {
        "name": "Player",
        "base": "Entity",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\player.gd",
        "file": "runtime_classes/entity/player.gd"
      }
    ]
  }
]
