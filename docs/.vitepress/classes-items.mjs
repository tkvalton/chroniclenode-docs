// Written by scripts/scan-classes.mjs from the addon: the classes of the Items system.
export const groups = [
  {
    "text": "Item definitions",
    "slug": "item-definitions",
    "classes": [
      {
        "name": "ItemDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition.gd",
        "file": "data_classes/items/item_definition.gd"
      },
      {
        "name": "ItemDefinitionAmmo",
        "base": "ItemDefinitionEquipment",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition_ammo.gd",
        "file": "data_classes/items/item_definition_ammo.gd"
      },
      {
        "name": "ItemDefinitionConsumable",
        "base": "ItemDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition_consumable.gd",
        "file": "data_classes/items/item_definition_consumable.gd"
      },
      {
        "name": "ItemDefinitionEnchantScroll",
        "base": "ItemDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition_enchant_scroll.gd",
        "file": "data_classes/items/item_definition_enchant_scroll.gd"
      },
      {
        "name": "ItemDefinitionEquipment",
        "base": "ItemDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition_equipment.gd",
        "file": "data_classes/items/item_definition_equipment.gd"
      },
      {
        "name": "ItemDefinitionEquipmentWeapon",
        "base": "ItemDefinitionEquipment",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition_equipment_weapon.gd",
        "file": "data_classes/items/item_definition_equipment_weapon.gd"
      },
      {
        "name": "ItemDefinitionMaterial",
        "base": "ItemDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition_material.gd",
        "file": "data_classes/items/item_definition_material.gd"
      },
      {
        "name": "ItemDefinitionOnUse",
        "base": "ItemDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition_on_use.gd",
        "file": "data_classes/items/item_definition_on_use.gd"
      },
      {
        "name": "ItemDefinitionQuest",
        "base": "ItemDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition_quest.gd",
        "file": "data_classes/items/item_definition_quest.gd"
      },
      {
        "name": "ItemDefinitionReadable",
        "base": "ItemDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition_readable.gd",
        "file": "data_classes/items/item_definition_readable.gd"
      },
      {
        "name": "ItemDefinitionSocketable",
        "base": "ItemDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\item_definition_socketable.gd",
        "file": "data_classes/items/item_definition_socketable.gd"
      },
      {
        "name": "LootEntry",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\loot_entry.gd",
        "file": "data_classes/items/loot_entry.gd"
      },
      {
        "name": "LootTable",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\loot_table.gd",
        "file": "data_classes/items/loot_table.gd"
      }
    ]
  },
  {
    "text": "Currency",
    "slug": "currency",
    "classes": [
      {
        "name": "CurrencyDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\items\\definitions\\currency_definition.gd",
        "file": "data_classes/items/definitions/currency_definition.gd"
      }
    ]
  },
  {
    "text": "Crafting",
    "slug": "crafting",
    "classes": [
      {
        "name": "CraftingJob",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\crafting\\crafting_job.gd",
        "file": "runtime_classes/player/crafting/crafting_job.gd"
      },
      {
        "name": "CraftingManager",
        "base": "Node",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\crafting_manager.gd",
        "file": "runtime_classes/player/crafting_manager.gd"
      },
      {
        "name": "CraftingRecipeDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\crafting\\crafting_recipe_definition.gd",
        "file": "data_classes/crafting/crafting_recipe_definition.gd"
      },
      {
        "name": "CraftSchoolDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\crafting\\craft_school_definition.gd",
        "file": "data_classes/crafting/craft_school_definition.gd"
      },
      {
        "name": "CraftSchoolInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\crafting\\crafting_school_instance.gd",
        "file": "runtime_classes/player/crafting/crafting_school_instance.gd"
      }
    ]
  },
  {
    "text": "Vendors",
    "slug": "vendors",
    "classes": [
      {
        "name": "VendorDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\vendor\\vendor_defintion.gd",
        "file": "data_classes/vendor/vendor_defintion.gd"
      },
      {
        "name": "VendorItemStock",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\vendor\\vendor_item_stock.gd",
        "file": "data_classes/vendor/vendor_item_stock.gd"
      }
    ]
  },
  {
    "text": "Inventory and equipment (runtime)",
    "slug": "runtime",
    "classes": [
      {
        "name": "DroppedItem",
        "base": "RigidBody3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\inventory\\dropped_item.gd",
        "file": "runtime_classes/entity/components/inventory/dropped_item.gd"
      },
      {
        "name": "EquipmentInventoryComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\inventory\\equipment_inventory_component.gd",
        "file": "runtime_classes/entity/components/inventory/equipment_inventory_component.gd"
      },
      {
        "name": "EquipmentSlotInstance",
        "base": "SlotInstance",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\inventory\\equipment_slot_instance.gd",
        "file": "runtime_classes/entity/components/inventory/equipment_slot_instance.gd"
      },
      {
        "name": "InventoryComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\inventory\\inventory_component.gd",
        "file": "runtime_classes/entity/components/inventory/inventory_component.gd"
      },
      {
        "name": "InventorySlotInstance",
        "base": "SlotInstance",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\inventory\\inventory_slot_instance.gd",
        "file": "runtime_classes/entity/components/inventory/inventory_slot_instance.gd"
      },
      {
        "name": "ItemInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\inventory\\item_instance.gd",
        "file": "runtime_classes/entity/components/inventory/item_instance.gd"
      },
      {
        "name": "SlotInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\inventory\\slot_instance.gd",
        "file": "runtime_classes/entity/components/inventory/slot_instance.gd"
      },
      {
        "name": "VendorInventoryComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\inventory\\vendor_inventory_component.gd",
        "file": "runtime_classes/entity/components/inventory/vendor_inventory_component.gd"
      }
    ]
  }
]
