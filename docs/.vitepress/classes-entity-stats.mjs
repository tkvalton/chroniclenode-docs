// Written by scripts/scan-classes.mjs from the addon: the classes of the Entity Stats system.
export const groups = [
  {
    "text": "Stats and pools",
    "slug": "stats-and-pools",
    "classes": [
      {
        "name": "CoreStatDefaults",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\core_stat_defaults.gd",
        "file": "data_classes/stats/core_stat_defaults.gd"
      },
      {
        "name": "GainChannels",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\gain_channels.gd",
        "file": "data_classes/stats/gain_channels.gd"
      },
      {
        "name": "GrowthOverride",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\growth_override.gd",
        "file": "data_classes/stats/growth_override.gd"
      },
      {
        "name": "GrowthProfile",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\growth_profile.gd",
        "file": "data_classes/stats/growth_profile.gd"
      },
      {
        "name": "PoolDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\pool_stat_definition.gd",
        "file": "data_classes/stats/definitions/pool_stat_definition.gd"
      },
      {
        "name": "StatConditionContext",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\stat_condition_context.gd",
        "file": "data_classes/stats/stat_condition_context.gd"
      },
      {
        "name": "StatDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_definition.gd",
        "file": "data_classes/stats/definitions/stat_definition.gd"
      },
      {
        "name": "StatGroupUtility",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\utility\\stat_group_utility.gd",
        "file": "runtime_classes/utility/stat_group_utility.gd"
      },
      {
        "name": "StatsData",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\stats_data.gd",
        "file": "data_classes/stats/stats_data.gd"
      }
    ]
  },
  {
    "text": "Stat effects",
    "slug": "stat-effects",
    "classes": [
      {
        "name": "AbilityModifierStatEffect",
        "base": "StatEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\ability_modifier_stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/ability_modifier_stat_effect.gd"
      },
      {
        "name": "CalculationModifierStatEffect",
        "base": "StatEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\calculation_modifier_stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/calculation_modifier_stat_effect.gd"
      },
      {
        "name": "CalculationTriggerStatEffect",
        "base": "StatEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\calculation_trigger_stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/calculation_trigger_stat_effect.gd"
      },
      {
        "name": "GainModifierStatEffect",
        "base": "StatEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\gain_modifier_stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/gain_modifier_stat_effect.gd"
      },
      {
        "name": "HitChanceStatEffect",
        "base": "StatEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\hit_chance_stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/hit_chance_stat_effect.gd"
      },
      {
        "name": "MultiplierStatEffect",
        "base": "StatEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\multiplier_stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/multiplier_stat_effect.gd"
      },
      {
        "name": "PoolModifierStatEffect",
        "base": "StatEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\pool_modifier_stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/pool_modifier_stat_effect.gd"
      },
      {
        "name": "PoolRestorationStatEffect",
        "base": "StatEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\pool_restoration_stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/pool_restoration_stat_effect.gd"
      },
      {
        "name": "ReactiveDamageStatEffect",
        "base": "StatEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\reactive_damage_stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/reactive_damage_stat_effect.gd"
      },
      {
        "name": "StatEffect",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/stat_effect.gd"
      },
      {
        "name": "TriggerRuleStatEffect",
        "base": "StatEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_effect\\trigger_rule_stat_effect.gd",
        "file": "data_classes/stats/definitions/stat_effect/trigger_rule_stat_effect.gd"
      }
    ]
  },
  {
    "text": "Calculations",
    "slug": "calculations",
    "classes": [
      {
        "name": "CalculationBase",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\calculations\\calculation_base.gd",
        "file": "data_classes/stats/calculations/calculation_base.gd"
      },
      {
        "name": "CalculationPhase",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\calculations\\calculation_phase.gd",
        "file": "data_classes/stats/calculations/calculation_phase.gd"
      },
      {
        "name": "CombatCalculations",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\combat_calculations.gd",
        "file": "data_classes/stats/combat_calculations.gd"
      },
      {
        "name": "DamageDoneCalculation",
        "base": "CalculationBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\calculations\\damage_done_calculation.gd",
        "file": "data_classes/stats/calculations/damage_done_calculation.gd"
      },
      {
        "name": "DamageTakenCalculation",
        "base": "CalculationBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\calculations\\damage_taken_calculation.gd",
        "file": "data_classes/stats/calculations/damage_taken_calculation.gd"
      },
      {
        "name": "HealingDoneCalculation",
        "base": "CalculationBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\calculations\\healing_done_calculation.gd",
        "file": "data_classes/stats/calculations/healing_done_calculation.gd"
      },
      {
        "name": "HealingTakenCalculation",
        "base": "CalculationBase",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\calculations\\healing_taken_calculation.gd",
        "file": "data_classes/stats/calculations/healing_taken_calculation.gd"
      }
    ]
  },
  {
    "text": "Trigger tags and rules",
    "slug": "triggers",
    "classes": [
      {
        "name": "ModifierStep",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\combat\\modifier_step.gd",
        "file": "runtime_classes/combat/modifier_step.gd"
      },
      {
        "name": "TriggerRecord",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\combat\\trigger_record.gd",
        "file": "runtime_classes/combat/trigger_record.gd"
      },
      {
        "name": "TriggerRule",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\trigger_rules\\trigger_rule.gd",
        "file": "data_classes/stats/trigger_rules/trigger_rule.gd"
      },
      {
        "name": "TriggerRuleSet",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\trigger_rules\\trigger_rule_set.gd",
        "file": "data_classes/stats/trigger_rules/trigger_rule_set.gd"
      },
      {
        "name": "TriggerTagDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\trigger_tag_definition.gd",
        "file": "data_classes/stats/definitions/trigger_tag_definition.gd"
      }
    ]
  },
  {
    "text": "Definitions",
    "slug": "definitions",
    "classes": [
      {
        "name": "DamageTypeDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\damage_type_definition.gd",
        "file": "data_classes/stats/definitions/damage_type_definition.gd"
      },
      {
        "name": "EntityTagDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\entity_tag_definition.gd",
        "file": "data_classes/stats/definitions/entity_tag_definition.gd"
      },
      {
        "name": "ImmunityDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\immunity_definition.gd",
        "file": "data_classes/stats/definitions/immunity_definition.gd"
      },
      {
        "name": "ProficiencyDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\proficiency_definition.gd",
        "file": "data_classes/stats/definitions/proficiency_definition.gd"
      },
      {
        "name": "SchoolTypeDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\school_type_definition.gd",
        "file": "data_classes/stats/definitions/school_type_definition.gd"
      },
      {
        "name": "StatGroupDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\stat_group_definition.gd",
        "file": "data_classes/stats/definitions/stat_group_definition.gd"
      },
      {
        "name": "StatusEffectDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\stats\\definitions\\status_effect_definition.gd",
        "file": "data_classes/stats/definitions/status_effect_definition.gd"
      }
    ]
  },
  {
    "text": "The combat pipeline",
    "slug": "combat",
    "classes": [
      {
        "name": "CombatManager",
        "base": "Node",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\combat\\combat_manager.gd",
        "file": "runtime_classes/combat/combat_manager.gd"
      },
      {
        "name": "CombatOptions",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\combat\\combat_options.gd",
        "file": "runtime_classes/combat/combat_options.gd"
      },
      {
        "name": "CombatReactions",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\combat\\combat_reactions.gd",
        "file": "runtime_classes/combat/combat_reactions.gd"
      },
      {
        "name": "DamageResult",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\combat\\damage_result.gd",
        "file": "runtime_classes/combat/damage_result.gd"
      },
      {
        "name": "HealingResult",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\combat\\healing_result.gd",
        "file": "runtime_classes/combat/healing_result.gd"
      },
      {
        "name": "HitRules",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\combat\\hit_rules.gd",
        "file": "runtime_classes/combat/hit_rules.gd"
      }
    ]
  },
  {
    "text": "Runtime",
    "slug": "runtime",
    "classes": [
      {
        "name": "ApplicationTracker",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\stats\\application_tracker.gd",
        "file": "runtime_classes/entity/components/stats/application_tracker.gd"
      },
      {
        "name": "DamageLayer",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\stats\\damage_layer.gd",
        "file": "runtime_classes/entity/components/stats/damage_layer.gd"
      },
      {
        "name": "ImmunityComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\stats\\immunity_component.gd",
        "file": "runtime_classes/entity/components/stats/immunity_component.gd"
      },
      {
        "name": "ImmunityInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\stats\\immunity_instance.gd",
        "file": "runtime_classes/entity/components/stats/immunity_instance.gd"
      },
      {
        "name": "PoolInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\stats\\pool_instance.gd",
        "file": "runtime_classes/entity/components/stats/pool_instance.gd"
      },
      {
        "name": "ProficiencyTracker",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\stats\\proficiency_tracker.gd",
        "file": "runtime_classes/entity/components/stats/proficiency_tracker.gd"
      },
      {
        "name": "StatInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\stats\\stat_instance.gd",
        "file": "runtime_classes/entity/components/stats/stat_instance.gd"
      },
      {
        "name": "StatsComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\stats\\stats_component.gd",
        "file": "runtime_classes/entity/components/stats/stats_component.gd"
      },
      {
        "name": "StatusEffectComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\stats\\status_effect_component.gd",
        "file": "runtime_classes/entity/components/stats/status_effect_component.gd"
      }
    ]
  }
]
