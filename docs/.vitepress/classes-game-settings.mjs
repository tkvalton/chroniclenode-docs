// Written by scripts/scan-classes.mjs from the addon: the classes of the Game Settings system.
export const groups = [
  {
    "text": "Configuration",
    "slug": "config",
    "classes": [
      {
        "name": "CharacterCreationProfile",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\settings\\character_creation_profile.gd",
        "file": "data_classes/settings/character_creation_profile.gd"
      },
      {
        "name": "CharacterCreationSettings",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\settings\\character_creation_settings.gd",
        "file": "data_classes/settings/character_creation_settings.gd"
      },
      {
        "name": "CollisionLayerConfig",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\settings\\collision_layer_config.gd",
        "file": "data_classes/settings/collision_layer_config.gd"
      },
      {
        "name": "EventSettings",
        "base": "Node",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\editor_settings.gd",
        "file": "editor_settings.gd"
      },
      {
        "name": "GameplayConfig",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\settings\\gameplay_config.gd",
        "file": "data_classes/settings/gameplay_config.gd"
      },
      {
        "name": "SettingsConfig",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\settings\\settings_config.gd",
        "file": "data_classes/settings/settings_config.gd"
      },
      {
        "name": "SettingsFile",
        "base": "ConfigFile",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\settings\\settings_file.gd",
        "file": "data_classes/settings/settings_file.gd"
      },
      {
        "name": "UISettingsConfig",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\settings\\ui_settings_config.gd",
        "file": "data_classes/settings/ui_settings_config.gd"
      }
    ]
  },
  {
    "text": "Settings (runtime)",
    "slug": "settings-runtime",
    "classes": [
      {
        "name": "AudioSettingsManager",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\settings\\audio\\audio_settings_manager.gd",
        "file": "runtime_classes/settings/audio/audio_settings_manager.gd"
      },
      {
        "name": "DisplaySettingsManager",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\settings\\display\\display_settings_manager.gd",
        "file": "runtime_classes/settings/display/display_settings_manager.gd"
      },
      {
        "name": "KeybindSettingsManager",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\settings\\action\\keybind_settings_manager.gd",
        "file": "runtime_classes/settings/action/keybind_settings_manager.gd"
      },
      {
        "name": "SettingsManager",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\settings\\settings_manager.gd",
        "file": "runtime_classes/settings/settings_manager.gd"
      }
    ]
  },
  {
    "text": "Camera, controller and input",
    "slug": "camera-and-controller",
    "classes": [
      {
        "name": "AimProvider",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\aim_provider.gd",
        "file": "runtime_classes/entity/aim_provider.gd"
      },
      {
        "name": "CameraAimProvider",
        "base": "AimProvider",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\camera_aim_provider.gd",
        "file": "runtime_classes/entity/camera_aim_provider.gd"
      },
      {
        "name": "CameraController",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\camera\\camera_controller.gd",
        "file": "runtime_classes/player/camera/camera_controller.gd"
      },
      {
        "name": "CameraLogic",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\camera\\camera_logic.gd",
        "file": "runtime_classes/player/camera/camera_logic.gd"
      },
      {
        "name": "ControllerLogic",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\controller\\controller_logic.gd",
        "file": "runtime_classes/player/controller/controller_logic.gd"
      },
      {
        "name": "FacingMath",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\utility\\facing_math.gd",
        "file": "runtime_classes/utility/facing_math.gd"
      },
      {
        "name": "InputManager",
        "base": "Node",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\system_managers\\input_manager.gd",
        "file": "runtime_classes/system_managers/input_manager.gd"
      },
      {
        "name": "LookBinding",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\utility\\look_binding.gd",
        "file": "runtime_classes/utility/look_binding.gd"
      },
      {
        "name": "LookGestureTracker",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\utility\\look_gesture_tracker.gd",
        "file": "runtime_classes/utility/look_gesture_tracker.gd"
      },
      {
        "name": "MouseUtility",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\utility\\mouse_utility.gd",
        "file": "runtime_classes/utility/mouse_utility.gd"
      },
      {
        "name": "PlayerController",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\controller\\player_controller.gd",
        "file": "runtime_classes/player/controller/player_controller.gd"
      },
      {
        "name": "PointAndClickRTSLogic",
        "base": "ControllerLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\controller_logic\\player\\point_and_click_rts_logic.gd",
        "file": "data_classes/controller_logic/player/point_and_click_rts_logic.gd"
      },
      {
        "name": "PointAndClickSingleLogic",
        "base": "ControllerLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\controller_logic\\player\\point_and_click_single_logic.gd",
        "file": "data_classes/controller_logic/player/point_and_click_single_logic.gd"
      },
      {
        "name": "PointMarker",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\controller\\point_marker.gd",
        "file": "runtime_classes/player/controller/point_marker.gd"
      },
      {
        "name": "RadiusMarker",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\controller\\radius_marker.gd",
        "file": "runtime_classes/player/controller/radius_marker.gd"
      },
      {
        "name": "ThirdPersonCameraLogic",
        "base": "CameraLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\controller_logic\\camera\\third_person_camera_logic.gd",
        "file": "data_classes/controller_logic/camera/third_person_camera_logic.gd"
      },
      {
        "name": "TopdownFocusedLogic",
        "base": "CameraLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\controller_logic\\camera\\topdown_focused_camera_logic.gd",
        "file": "data_classes/controller_logic/camera/topdown_focused_camera_logic.gd"
      },
      {
        "name": "TopdownFreeLogic",
        "base": "CameraLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\controller_logic\\camera\\topdown_free_camera_logic.gd",
        "file": "data_classes/controller_logic/camera/topdown_free_camera_logic.gd"
      },
      {
        "name": "WASDWithMouseLogic",
        "base": "ControllerLogic",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\controller_logic\\player\\wasd_with_mouse_controller_logic.gd",
        "file": "data_classes/controller_logic/player/wasd_with_mouse_controller_logic.gd"
      }
    ]
  },
  {
    "text": "Collision",
    "slug": "collision",
    "classes": [
      {
        "name": "CollisionLayerUtility",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\utility\\collision_layer_utility.gd",
        "file": "runtime_classes/utility/collision_layer_utility.gd"
      },
      {
        "name": "LineOfSightUtility",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\utility\\line_of_sight_utility.gd",
        "file": "runtime_classes/utility/line_of_sight_utility.gd"
      },
      {
        "name": "WeaponCollisionUtility",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\utility\\weapon_collision_utility.gd",
        "file": "runtime_classes/utility/weapon_collision_utility.gd"
      }
    ]
  },
  {
    "text": "Helpers",
    "slug": "helpers",
    "classes": [
      {
        "name": "AudioBusUtility",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\utility\\audio_bus_utility.gd",
        "file": "runtime_classes/utility/audio_bus_utility.gd"
      },
      {
        "name": "PropertyCategoryUtil",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\utility\\property_category_util.gd",
        "file": "runtime_classes/utility/property_category_util.gd"
      }
    ]
  }
]
