// Written by scripts/scan-classes.mjs from the addon: the classes of the User Interface system.
export const groups = [
  {
    "text": "Scenes",
    "slug": "scenes",
    "classes": [
      {
        "name": "CharacterCreationUI",
        "base": "CurrentUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\character_creation_menu\\character_creation_ui.gd",
        "file": "ui_scenes/menus/character_creation_menu/character_creation_ui.gd"
      },
      {
        "name": "CurrentUI",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\current_ui.gd",
        "file": "ui_scenes/current_ui.gd"
      },
      {
        "name": "InGameUI",
        "base": "CurrentUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\in_game_ui.gd",
        "file": "ui_scenes/in_game/in_game_ui.gd"
      },
      {
        "name": "LoadingScreen",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\loading_screen\\loading_screen.gd",
        "file": "ui_scenes/loading_screen/loading_screen.gd"
      },
      {
        "name": "MainMenu",
        "base": "CurrentUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\main\\main_menu.gd",
        "file": "ui_scenes/menus/main/main_menu.gd"
      },
      {
        "name": "SplashScreen",
        "base": "CanvasLayer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\splash_screen\\splash_screen.gd",
        "file": "ui_scenes/splash_screen/splash_screen.gd"
      }
    ]
  },
  {
    "text": "Nameplates",
    "slug": "nameplates",
    "classes": [
      {
        "name": "FloatingText",
        "base": "Label",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\components\\nameplates\\floating_text.gd",
        "file": "ui_scenes/in_game/HUD/components/nameplates/floating_text.gd"
      },
      {
        "name": "Nameplate",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\components\\nameplates\\nameplate.gd",
        "file": "ui_scenes/in_game/HUD/components/nameplates/nameplate.gd"
      },
      {
        "name": "NameplateManager",
        "base": "CanvasLayer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\nameplates_manager.gd",
        "file": "ui_scenes/in_game/nameplates_manager.gd"
      },
      {
        "name": "PoolBarUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\components\\nameplates\\pool_bar_ui.gd",
        "file": "ui_scenes/in_game/HUD/components/nameplates/pool_bar_ui.gd"
      }
    ]
  },
  {
    "text": "HUD",
    "slug": "hud",
    "classes": [
      {
        "name": "ActionBarButton",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\action_bar\\buttons\\action_bar_button.gd",
        "file": "ui_scenes/in_game/HUD/action_bar/buttons/action_bar_button.gd"
      },
      {
        "name": "ActionBarUI",
        "base": "HUDUIElement",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\action_bar\\action_bar_ui.gd",
        "file": "ui_scenes/in_game/HUD/action_bar/action_bar_ui.gd"
      },
      {
        "name": "Aura",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\components\\auras\\aura.gd",
        "file": "ui_scenes/in_game/HUD/components/auras/aura.gd"
      },
      {
        "name": "CastBar",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\components\\cast_bar\\cast_bar.gd",
        "file": "ui_scenes/in_game/HUD/components/cast_bar/cast_bar.gd"
      },
      {
        "name": "CombatLog",
        "base": "HUDUIElement",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\combat_log\\combat_log.gd",
        "file": "ui_scenes/in_game/HUD/combat_log/combat_log.gd"
      },
      {
        "name": "DamageMeterUI",
        "base": "HUDUIElement",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\damage_meter_ui\\damage_meter_ui.gd",
        "file": "ui_scenes/in_game/HUD/damage_meter_ui/damage_meter_ui.gd"
      },
      {
        "name": "DamaterBarUI",
        "base": "HUDUIElement",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\damage_meter_ui\\damage_bar_ui.gd",
        "file": "ui_scenes/in_game/HUD/damage_meter_ui/damage_bar_ui.gd"
      },
      {
        "name": "ExperienceBar",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\action_bar\\buttons\\experiance_bar.gd",
        "file": "ui_scenes/in_game/HUD/action_bar/buttons/experiance_bar.gd"
      },
      {
        "name": "HUDUIElement",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\hud_ui_element.gd",
        "file": "ui_scenes/in_game/HUD/hud_ui_element.gd"
      },
      {
        "name": "MiniMap",
        "base": "HUDUIElement",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\mini_map\\mini_map_ui.gd",
        "file": "ui_scenes/in_game/HUD/mini_map/mini_map_ui.gd"
      },
      {
        "name": "MiniMenuButton",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\menu_bar\\mini_menu_button_ui.gd",
        "file": "ui_scenes/in_game/HUD/menu_bar/mini_menu_button_ui.gd"
      },
      {
        "name": "MiniMenuUI",
        "base": "HUDUIElement",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\menu_bar\\mini_menu_ui.gd",
        "file": "ui_scenes/in_game/HUD/menu_bar/mini_menu_ui.gd"
      },
      {
        "name": "PartyFrame",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\party_frames\\party_frame_ui.gd",
        "file": "ui_scenes/in_game/HUD/party_frames/party_frame_ui.gd"
      },
      {
        "name": "PartyFramesUI",
        "base": "HUDUIElement",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\party_frames\\party_frames_ui.gd",
        "file": "ui_scenes/in_game/HUD/party_frames/party_frames_ui.gd"
      },
      {
        "name": "QuestTrackerQuestUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\quest_tracker\\quest_tracker_quest_ui.gd",
        "file": "ui_scenes/in_game/HUD/quest_tracker/quest_tracker_quest_ui.gd"
      },
      {
        "name": "QuestTrackerQuestUIObjectiveLabel",
        "base": "HBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\quest_tracker\\quest_tracker_objective_label_ui.gd",
        "file": "ui_scenes/in_game/HUD/quest_tracker/quest_tracker_objective_label_ui.gd"
      },
      {
        "name": "QuestTrackerUI",
        "base": "HUDUIElement",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\quest_tracker\\quest_tracker_ui.gd",
        "file": "ui_scenes/in_game/HUD/quest_tracker/quest_tracker_ui.gd"
      },
      {
        "name": "UnitFrame",
        "base": "HUDUIElement",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\HUD\\unit_frames\\unit_frame.gd",
        "file": "ui_scenes/in_game/HUD/unit_frames/unit_frame.gd"
      }
    ]
  },
  {
    "text": "Interaction panels",
    "slug": "interaction-panels",
    "classes": [
      {
        "name": "AnimatedTextLabel",
        "base": "RichTextLabel",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\converstaion_panel\\animated_text_label.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/converstaion_panel/animated_text_label.gd"
      },
      {
        "name": "ConversationPanelUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\converstaion_panel\\conversation_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/converstaion_panel/conversation_panel_ui.gd"
      },
      {
        "name": "CraftingPanelUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\crafting_panel\\crafting_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/crafting_panel/crafting_panel_ui.gd"
      },
      {
        "name": "CraftMaterialIconUI",
        "base": "HBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\crafting_panel\\craft_material_icon_ui.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/crafting_panel/craft_material_icon_ui.gd"
      },
      {
        "name": "DiceRollPanel",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\converstaion_panel\\dice_roll_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/converstaion_panel/dice_roll_panel_ui.gd"
      },
      {
        "name": "ReadablePanelUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\readable_panel\\readable_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/readable_panel/readable_panel_ui.gd"
      },
      {
        "name": "ResponseButton",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\converstaion_panel\\response_button.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/converstaion_panel/response_button.gd"
      },
      {
        "name": "SocketPanelUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\socket_window\\socket_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/socket_window/socket_panel_ui.gd"
      },
      {
        "name": "SocketSlotUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\socket_window\\socket_slot_ui.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/socket_window/socket_slot_ui.gd"
      },
      {
        "name": "TrainerPanelUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\trainer_panel\\trainer_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/trainer_panel/trainer_panel_ui.gd"
      },
      {
        "name": "VendorPanelUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\vendor_panel\\vendor_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/vendor_panel/vendor_panel_ui.gd"
      },
      {
        "name": "VendorSlotUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\interaction_panels\\vendor_panel\\vendor_slot_ui.gd",
        "file": "ui_scenes/in_game/panels/interaction_panels/vendor_panel/vendor_slot_ui.gd"
      }
    ]
  },
  {
    "text": "UI panels",
    "slug": "panels",
    "classes": [
      {
        "name": "AbilityPanelUI",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\spellbook\\ability_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/spellbook/ability_panel_ui.gd"
      },
      {
        "name": "ActiveEffectsDisplayUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\character\\active_effects_display_ui.gd",
        "file": "ui_scenes/in_game/panels/character/active_effects_display_ui.gd"
      },
      {
        "name": "CharacterBackdropScene",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\character\\character_preview_scene\\character_backdrop.gd",
        "file": "ui_scenes/in_game/panels/character/character_preview_scene/character_backdrop.gd"
      },
      {
        "name": "CharacterPanelUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\character\\character_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/character/character_panel_ui.gd"
      },
      {
        "name": "CharacterPreviewManager",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\character\\character_preview_scene\\charater_preview_manager.gd",
        "file": "ui_scenes/in_game/panels/character/character_preview_scene/charater_preview_manager.gd"
      },
      {
        "name": "CharacterSheetStat",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\character\\character_sheet_stat.gd",
        "file": "ui_scenes/in_game/panels/character/character_sheet_stat.gd"
      },
      {
        "name": "CharacterStatsDisplayUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\character\\character_stats_display_ui.gd",
        "file": "ui_scenes/in_game/panels/character/character_stats_display_ui.gd"
      },
      {
        "name": "ChoiceButtonUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\spellbook\\skill_tree\\choice_button.gd",
        "file": "ui_scenes/in_game/panels/spellbook/skill_tree/choice_button.gd"
      },
      {
        "name": "ChoiceSelectionPopup",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\spellbook\\skill_tree\\choice_selection_popup.gd",
        "file": "ui_scenes/in_game/panels/spellbook/skill_tree/choice_selection_popup.gd"
      },
      {
        "name": "CurrencyDisplay",
        "base": "HBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\inventory\\currency_display.gd",
        "file": "ui_scenes/in_game/panels/inventory/currency_display.gd"
      },
      {
        "name": "EquipmentInventoryUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\character\\equipment_inventory_ui.gd",
        "file": "ui_scenes/in_game/panels/character/equipment_inventory_ui.gd"
      },
      {
        "name": "InventoryUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\inventory\\inventory_ui.gd",
        "file": "ui_scenes/in_game/panels/inventory/inventory_ui.gd"
      },
      {
        "name": "ItemSlotUI",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\inventory\\item_slot_ui.gd",
        "file": "ui_scenes/in_game/panels/inventory/item_slot_ui.gd"
      },
      {
        "name": "PanelUI",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\panel_ui.gd",
        "file": "ui_scenes/in_game/panels/panel_ui.gd"
      },
      {
        "name": "QuestLogButtonUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\quest_log\\quest_log_button_ui.gd",
        "file": "ui_scenes/in_game/panels/quest_log/quest_log_button_ui.gd"
      },
      {
        "name": "QuestLogPanelUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\quest_log\\quest_log_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/quest_log/quest_log_panel_ui.gd"
      },
      {
        "name": "QuestLogQuestObjectiveLabel",
        "base": "HBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\quest_log\\quest_log_objective_label_ui.gd",
        "file": "ui_scenes/in_game/panels/quest_log/quest_log_objective_label_ui.gd"
      },
      {
        "name": "SkillNodeUIVisual",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\spellbook\\skill_tree\\skill_node_ui.gd",
        "file": "ui_scenes/in_game/panels/spellbook/skill_tree/skill_node_ui.gd"
      },
      {
        "name": "SkillTreePanelUI",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\spellbook\\skill_tree\\skill_tree_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/spellbook/skill_tree/skill_tree_panel_ui.gd"
      },
      {
        "name": "SpellBookAbilityUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\spellbook\\spell_book_ability_ui.gd",
        "file": "ui_scenes/in_game/panels/spellbook/spell_book_ability_ui.gd"
      },
      {
        "name": "SpellBookPanelUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\spellbook\\spell_book_panel_ui.gd",
        "file": "ui_scenes/in_game/panels/spellbook/spell_book_panel_ui.gd"
      },
      {
        "name": "TitleUI",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\panels\\shared_panel_components\\title_ui.gd",
        "file": "ui_scenes/in_game/panels/shared_panel_components/title_ui.gd"
      }
    ]
  },
  {
    "text": "Tooltips",
    "slug": "tooltips",
    "classes": [
      {
        "name": "TooltipAbility",
        "base": "TooltipBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\tooltips\\abilites\\tooltip_ability.gd",
        "file": "ui_scenes/in_game/tooltips/abilites/tooltip_ability.gd"
      },
      {
        "name": "TooltipBase",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\tooltips\\tooltip.gd",
        "file": "ui_scenes/in_game/tooltips/tooltip.gd"
      },
      {
        "name": "TooltipDescription",
        "base": "TooltipBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\tooltips\\tooltip_description.gd",
        "file": "ui_scenes/in_game/tooltips/tooltip_description.gd"
      },
      {
        "name": "TooltipEffect",
        "base": "TooltipBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\tooltips\\tooltip_effect.gd",
        "file": "ui_scenes/in_game/tooltips/tooltip_effect.gd"
      },
      {
        "name": "TooltipItem",
        "base": "TooltipBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\tooltips\\items\\tooltip_item.gd",
        "file": "ui_scenes/in_game/tooltips/items/tooltip_item.gd"
      },
      {
        "name": "TooltipManager",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\tooltips\\tooltip_popup_manager.gd",
        "file": "ui_scenes/in_game/tooltips/tooltip_popup_manager.gd"
      },
      {
        "name": "TooltipSkillNode",
        "base": "TooltipBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\tooltips\\tooltip_skill_node.gd",
        "file": "ui_scenes/in_game/tooltips/tooltip_skill_node.gd"
      }
    ]
  },
  {
    "text": "In game: menus, dragging, messages",
    "slug": "in-game",
    "classes": [
      {
        "name": "DebugMenu",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\debug\\debug_ui.gd",
        "file": "ui_scenes/in_game/debug/debug_ui.gd"
      },
      {
        "name": "DefaultPopupUI",
        "base": "PopupUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\popups\\default_popup_ui.gd",
        "file": "ui_scenes/in_game/popups/default_popup_ui.gd"
      },
      {
        "name": "DragController",
        "base": "Node",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\drag_controller.gd",
        "file": "ui_scenes/in_game/drag_controller.gd"
      },
      {
        "name": "DraggedContent",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\dragged_content.gd",
        "file": "ui_scenes/in_game/dragged_content.gd"
      },
      {
        "name": "GameOverPanelUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\game_over\\game_over_ui.gd",
        "file": "ui_scenes/in_game/game_over/game_over_ui.gd"
      },
      {
        "name": "InGameMenu",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\esc_menu\\in_game_menu.gd",
        "file": "ui_scenes/in_game/esc_menu/in_game_menu.gd"
      },
      {
        "name": "MessagesManager",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\message_manager.gd",
        "file": "ui_scenes/in_game/message_manager.gd"
      },
      {
        "name": "PopupUI",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\in_game\\popups\\popup_ui.gd",
        "file": "ui_scenes/in_game/popups/popup_ui.gd"
      }
    ]
  },
  {
    "text": "Menus",
    "slug": "menus",
    "classes": [
      {
        "name": "ArrowSelectionButton",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\character_creation_menu\\buttons\\arrow_selection_button.gd",
        "file": "ui_scenes/menus/character_creation_menu/buttons/arrow_selection_button.gd"
      },
      {
        "name": "ButtonSubMenu",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\settings\\settings_buttons\\button_sub_menu.gd",
        "file": "ui_scenes/menus/settings/settings_buttons/button_sub_menu.gd"
      },
      {
        "name": "CharacterCreation3DScene",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\character_creation_menu\\character_creation_3d_scene.gd",
        "file": "ui_scenes/menus/character_creation_menu/character_creation_3d_scene.gd"
      },
      {
        "name": "CharacterCreationInfoBox",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\character_creation_menu\\companion_info_box.gd",
        "file": "ui_scenes/menus/character_creation_menu/companion_info_box.gd"
      },
      {
        "name": "ClassSelectionButton",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\character_creation_menu\\buttons\\class_selection_button.gd",
        "file": "ui_scenes/menus/character_creation_menu/buttons/class_selection_button.gd"
      },
      {
        "name": "ColorButton",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\character_creation_menu\\buttons\\color_button.gd",
        "file": "ui_scenes/menus/character_creation_menu/buttons/color_button.gd"
      },
      {
        "name": "Credits",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\main\\credits.gd",
        "file": "ui_scenes/menus/main/credits.gd"
      },
      {
        "name": "CustomSlider",
        "base": "HBoxContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\character_creation_menu\\buttons\\custom_slider.gd",
        "file": "ui_scenes/menus/character_creation_menu/buttons/custom_slider.gd"
      },
      {
        "name": "SaveFileButton",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\save_load\\save_file_button.gd",
        "file": "ui_scenes/menus/save_load/save_file_button.gd"
      },
      {
        "name": "SaveLoadMenu",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\save_load\\load_game_menu.gd",
        "file": "ui_scenes/menus/save_load/load_game_menu.gd"
      },
      {
        "name": "SettingsCheckBox",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\settings\\settings_buttons\\settings_button_check_box.gd",
        "file": "ui_scenes/menus/settings/settings_buttons/settings_button_check_box.gd"
      },
      {
        "name": "SettingsColorButton",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\settings\\settings_buttons\\settings_button_color_picker.gd",
        "file": "ui_scenes/menus/settings/settings_buttons/settings_button_color_picker.gd"
      },
      {
        "name": "SettingsDragBar",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\settings\\settings_buttons\\settings_button_drag_bar.gd",
        "file": "ui_scenes/menus/settings/settings_buttons/settings_button_drag_bar.gd"
      },
      {
        "name": "SettingsKeybindButton",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\settings\\settings_buttons\\settings_button_hotkey_rebind.gd",
        "file": "ui_scenes/menus/settings/settings_buttons/settings_button_hotkey_rebind.gd"
      },
      {
        "name": "SettingsMenuUI",
        "base": "PanelUI",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\settings\\settings_menu.gd",
        "file": "ui_scenes/menus/settings/settings_menu.gd"
      },
      {
        "name": "SettingsOptionButton",
        "base": "Control",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\settings\\settings_buttons\\settings_button_option_box.gd",
        "file": "ui_scenes/menus/settings/settings_buttons/settings_button_option_box.gd"
      },
      {
        "name": "TemplateButton",
        "base": "MarginContainer",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\ui_scenes\\menus\\character_creation_menu\\buttons\\template_button.gd",
        "file": "ui_scenes/menus/character_creation_menu/buttons/template_button.gd"
      }
    ]
  }
]
