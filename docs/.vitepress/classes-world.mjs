// Written by scripts/scan-classes.mjs from the addon: the classes of the World system.
export const groups = [
  {
    "text": "World data",
    "slug": "world-data",
    "classes": [
      {
        "name": "RegionData",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\world\\region_data.gd",
        "file": "data_classes/world/region_data.gd"
      },
      {
        "name": "UniqueEncounterData",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\world\\unique_encounter_data.gd",
        "file": "data_classes/world/unique_encounter_data.gd"
      },
      {
        "name": "UniqueEntityData",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\world\\unique_entity_data.gd",
        "file": "data_classes/world/unique_entity_data.gd"
      },
      {
        "name": "UniqueInteractableData",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\world\\unique_interactable_data.gd",
        "file": "data_classes/world/unique_interactable_data.gd"
      },
      {
        "name": "WorldData",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\world\\world_data.gd",
        "file": "data_classes/world/world_data.gd"
      }
    ]
  },
  {
    "text": "World configs",
    "slug": "world-configs",
    "classes": [
      {
        "name": "EnvironmentConfig",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\world\\configs\\enviroment_config.gd",
        "file": "data_classes/world/configs/enviroment_config.gd"
      },
      {
        "name": "SkyConfig",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\world\\configs\\sky_config.gd",
        "file": "data_classes/world/configs/sky_config.gd"
      },
      {
        "name": "SunConfig",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\world\\configs\\sun_config.gd",
        "file": "data_classes/world/configs/sun_config.gd"
      },
      {
        "name": "TimeConfig",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\world\\configs\\time_config.gd",
        "file": "data_classes/world/configs/time_config.gd"
      }
    ]
  },
  {
    "text": "Encounters",
    "slug": "encounters",
    "classes": [
      {
        "name": "CallReinforcementsAction",
        "base": "EncounterAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\encounters\\actions\\types\\call_reinforcements_action.gd",
        "file": "data_classes/encounters/actions/types/call_reinforcements_action.gd"
      },
      {
        "name": "EncounterAction",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\encounters\\actions\\encounter_action.gd",
        "file": "data_classes/encounters/actions/encounter_action.gd"
      },
      {
        "name": "EncounterQuestActivateAction",
        "base": "EncounterAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\encounters\\actions\\types\\encounter_quest_activate_action.gd",
        "file": "data_classes/encounters/actions/types/encounter_quest_activate_action.gd"
      },
      {
        "name": "EncounterReaction",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\encounters\\encounter_reaction.gd",
        "file": "data_classes/encounters/encounter_reaction.gd"
      },
      {
        "name": "ForceGroupTargetAction",
        "base": "EncounterAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\encounters\\actions\\types\\force_group_target_action.gd",
        "file": "data_classes/encounters/actions/types/force_group_target_action.gd"
      },
      {
        "name": "GroupFormationAction",
        "base": "EncounterAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\encounters\\actions\\types\\group_formation_action.gd",
        "file": "data_classes/encounters/actions/types/group_formation_action.gd"
      },
      {
        "name": "ModifyGroupBehaviorAction",
        "base": "EncounterAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\encounters\\actions\\types\\modify_group_behavior_action.gd",
        "file": "data_classes/encounters/actions/types/modify_group_behavior_action.gd"
      },
      {
        "name": "SpawnEffectAction",
        "base": "EncounterAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\encounters\\actions\\types\\spawn_effect_action.gd",
        "file": "data_classes/encounters/actions/types/spawn_effect_action.gd"
      },
      {
        "name": "TriggerEventAction",
        "base": "EncounterAction",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\encounters\\actions\\types\\trigger_event_action.gd",
        "file": "data_classes/encounters/actions/types/trigger_event_action.gd"
      }
    ]
  },
  {
    "text": "Runtime",
    "slug": "runtime",
    "classes": [
      {
        "name": "Encounter",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\encounter.gd",
        "file": "runtime_classes/world/encounter.gd"
      },
      {
        "name": "FogExplorationData",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\fog\\fog_exloration_data.gd",
        "file": "runtime_classes/world/fog/fog_exloration_data.gd"
      },
      {
        "name": "FogOfWarCompositorEffect",
        "base": "CompositorEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\fog\\fog_of_war_compositor_effect.gd",
        "file": "runtime_classes/world/fog/fog_of_war_compositor_effect.gd"
      },
      {
        "name": "FogOfWarSystem",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\fog\\fog_of_war_system.gd",
        "file": "runtime_classes/world/fog/fog_of_war_system.gd"
      },
      {
        "name": "ObjectRegistry",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\object_registery.gd",
        "file": "runtime_classes/world/object_registery.gd"
      },
      {
        "name": "Region",
        "base": "Area3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\region.gd",
        "file": "runtime_classes/world/region.gd"
      },
      {
        "name": "WeatherSystem",
        "base": "Node",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\weather_system.gd",
        "file": "runtime_classes/world/weather_system.gd"
      },
      {
        "name": "WorldContainer",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\world_container.gd",
        "file": "runtime_classes/world/world_container.gd"
      },
      {
        "name": "WorldScene",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\world_scene.gd",
        "file": "runtime_classes/world/world_scene.gd"
      },
      {
        "name": "WorldSkyEnvironment",
        "base": "WorldEnvironment",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\world_sky_envrioment.gd",
        "file": "runtime_classes/world/world_sky_envrioment.gd"
      },
      {
        "name": "WorldSun",
        "base": "DirectionalLight3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\world\\world_sun.gd",
        "file": "runtime_classes/world/world_sun.gd"
      }
    ]
  },
  {
    "text": "Editor tools",
    "slug": "editor-tools",
    "classes": [
      {
        "name": "AddObjectToolbarManager",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\3d_scene_tools\\add_object_toolbar_manager.gd",
        "file": "editor_components/3d_scene_tools/add_object_toolbar_manager.gd"
      },
      {
        "name": "EncounterReactionsEditor",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\3d_scene_tools\\encounter_reaction_editor.gd",
        "file": "editor_components/3d_scene_tools/encounter_reaction_editor.gd"
      },
      {
        "name": "UniqueObjectInspector",
        "base": "VBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_components\\3d_scene_tools\\unique_object_inspector.gd",
        "file": "editor_components/3d_scene_tools/unique_object_inspector.gd"
      }
    ]
  }
]
