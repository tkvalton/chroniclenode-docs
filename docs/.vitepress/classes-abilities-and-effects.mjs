// Written by scripts/scan-classes.mjs from the addon: the classes of the Abilities & Effects system.
export const groups = [
  {
    "text": "Abilities",
    "slug": "abilities",
    "classes": [
      {
        "name": "AbilityDefinition",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\ability_definition.gd",
        "file": "data_classes/abilities/ability_definition.gd"
      },
      {
        "name": "AbilityRankProperty",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\ability_rank_property.gd",
        "file": "data_classes/abilities/ability_rank_property.gd"
      },
      {
        "name": "ActiveAbilityDefinition",
        "base": "PassiveAbilityDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\active_ability_definition.gd",
        "file": "data_classes/abilities/active_ability_definition.gd"
      },
      {
        "name": "ChargeStackActiveAbilityDefinition",
        "base": "ActiveAbilityDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\charge_stack_active_ability_definition.gd",
        "file": "data_classes/abilities/charge_stack_active_ability_definition.gd"
      },
      {
        "name": "ComboActiveAbilityDefinition",
        "base": "ActiveAbilityDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\combo_active_ability_definition.gd",
        "file": "data_classes/abilities/combo_active_ability_definition.gd"
      },
      {
        "name": "PassiveAbilityDefinition",
        "base": "AbilityDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\passive_ability_definition.gd",
        "file": "data_classes/abilities/passive_ability_definition.gd"
      },
      {
        "name": "PowerUpActiveAbilityDefinition",
        "base": "ActiveAbilityDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\power_up_active_ability_definition.gd",
        "file": "data_classes/abilities/power_up_active_ability_definition.gd"
      }
    ]
  },
  {
    "text": "Target strategies",
    "slug": "target-strategies",
    "classes": [
      {
        "name": "AimedTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\target_strategy\\target_strategy_aimed.gd",
        "file": "data_classes/abilities/target_strategy/target_strategy_aimed.gd"
      },
      {
        "name": "AllyTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\target_strategy\\target_strategy_ally.gd",
        "file": "data_classes/abilities/target_strategy/target_strategy_ally.gd"
      },
      {
        "name": "AnyEntityTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\target_strategy\\target_strategy_any_entity.gd",
        "file": "data_classes/abilities/target_strategy/target_strategy_any_entity.gd"
      },
      {
        "name": "EnemyTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\target_strategy\\target_strategy_enemy.gd",
        "file": "data_classes/abilities/target_strategy/target_strategy_enemy.gd"
      },
      {
        "name": "MultiPointTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\target_strategy\\target_strategy_multi_point.gd",
        "file": "data_classes/abilities/target_strategy/target_strategy_multi_point.gd"
      },
      {
        "name": "NoTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\target_strategy\\target_strategy_none.gd",
        "file": "data_classes/abilities/target_strategy/target_strategy_none.gd"
      },
      {
        "name": "PointTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\target_strategy\\target_strategy_point.gd",
        "file": "data_classes/abilities/target_strategy/target_strategy_point.gd"
      },
      {
        "name": "SelfTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\target_strategy\\target_strategy_self.gd",
        "file": "data_classes/abilities/target_strategy/target_strategy_self.gd"
      },
      {
        "name": "TargetStrategyDefinition",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\target_strategy\\target_strategy.gd",
        "file": "data_classes/abilities/target_strategy/target_strategy.gd"
      }
    ]
  },
  {
    "text": "Use strategies",
    "slug": "use-strategies",
    "classes": [
      {
        "name": "CastUseStrategyDefinition",
        "base": "UseStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\use_strategy\\use_strategy_cast.gd",
        "file": "data_classes/abilities/use_strategy/use_strategy_cast.gd"
      },
      {
        "name": "ChannelUseStrategyDefinition",
        "base": "UseStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\use_strategy\\use_strategy_channel.gd",
        "file": "data_classes/abilities/use_strategy/use_strategy_channel.gd"
      },
      {
        "name": "InstantUseStrategyDefinition",
        "base": "UseStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\use_strategy\\use_strategy_instant.gd",
        "file": "data_classes/abilities/use_strategy/use_strategy_instant.gd"
      },
      {
        "name": "ToggleUseStrategyDefinition",
        "base": "UseStrategyDefinition",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\use_strategy\\use_strategy_toggle.gd",
        "file": "data_classes/abilities/use_strategy/use_strategy_toggle.gd"
      },
      {
        "name": "UseStrategyDefinition",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\abilities\\use_strategy\\use_strategy.gd",
        "file": "data_classes/abilities/use_strategy/use_strategy.gd"
      }
    ]
  },
  {
    "text": "Effects: base classes",
    "slug": "effects-base",
    "classes": [
      {
        "name": "BaseProjectileEffect",
        "base": "CompositeEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\effect_projectile.gd",
        "file": "data_classes/effects/effect_projectile.gd"
      },
      {
        "name": "CollisionEffect",
        "base": "CompositeEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\effect_collision.gd",
        "file": "data_classes/effects/effect_collision.gd"
      },
      {
        "name": "CombatResultEffect",
        "base": "ScalingEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\effect_combat_result.gd",
        "file": "data_classes/effects/effect_combat_result.gd"
      },
      {
        "name": "ConditionalEffect",
        "base": "CompositeEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\effect_conditional.gd",
        "file": "data_classes/effects/effect_conditional.gd"
      },
      {
        "name": "Effect",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\effect.gd",
        "file": "data_classes/effects/effect.gd"
      },
      {
        "name": "EffectScalingRule",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\effect_scaling_rule.gd",
        "file": "data_classes/effects/effect_scaling_rule.gd"
      },
      {
        "name": "MoveToPointEffect",
        "base": "CompositeEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\effect_move_to_point.gd",
        "file": "data_classes/effects/effect_move_to_point.gd"
      },
      {
        "name": "ProcEffect",
        "base": "CompositeEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\effect_procedure.gd",
        "file": "data_classes/effects/effect_procedure.gd"
      },
      {
        "name": "ScalingEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\effect_scaling.gd",
        "file": "data_classes/effects/effect_scaling.gd"
      }
    ]
  },
  {
    "text": "Effects: ability",
    "slug": "effects-ability",
    "classes": [
      {
        "name": "AbilityCastModifierEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_ability_cast_modifier.gd",
        "file": "data_classes/effects/ability/effect_ability_cast_modifier.gd"
      },
      {
        "name": "AbilityCooldownEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_ability_cooldown.gd",
        "file": "data_classes/effects/ability/effect_ability_cooldown.gd"
      },
      {
        "name": "AbilityEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_ability.gd",
        "file": "data_classes/effects/ability/effect_ability.gd"
      },
      {
        "name": "AbilityEffectsModifierEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_ability_effect_modifier.gd",
        "file": "data_classes/effects/ability/effect_ability_effect_modifier.gd"
      },
      {
        "name": "AbilityMorphEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_ability_morph.gd",
        "file": "data_classes/effects/ability/effect_ability_morph.gd"
      },
      {
        "name": "AbilityRangeEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_ability_range.gd",
        "file": "data_classes/effects/ability/effect_ability_range.gd"
      },
      {
        "name": "AbilityRankEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_ability_rank.gd",
        "file": "data_classes/effects/ability/effect_ability_rank.gd"
      },
      {
        "name": "AbilityResourceEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_ability_resource.gd",
        "file": "data_classes/effects/ability/effect_ability_resource.gd"
      },
      {
        "name": "BasicAttackSwapEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_basic_attack_swap.gd",
        "file": "data_classes/effects/ability/effect_basic_attack_swap.gd"
      },
      {
        "name": "RepeatAbilityEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_repeat_ability.gd",
        "file": "data_classes/effects/ability/effect_repeat_ability.gd"
      },
      {
        "name": "SetAbilityActiveEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\ability\\effect_ability_set_active.gd",
        "file": "data_classes/effects/ability/effect_ability_set_active.gd"
      }
    ]
  },
  {
    "text": "Effects: area",
    "slug": "effects-area",
    "classes": [
      {
        "name": "AreaEffect",
        "base": "CollisionEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\area_effects\\effect_area.gd",
        "file": "data_classes/effects/area_effects/effect_area.gd"
      },
      {
        "name": "AreaEqualizeHealthEffect",
        "base": "EqualizeAreaEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\area_effects\\effect_area_equalize_health.gd",
        "file": "data_classes/effects/area_effects/effect_area_equalize_health.gd"
      },
      {
        "name": "AreaRandomizeTargetEffect",
        "base": "MinimumApplicationAreaEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\area_effects\\effect_area_randomize_target.gd",
        "file": "data_classes/effects/area_effects/effect_area_randomize_target.gd"
      },
      {
        "name": "EqualizeAreaEffect",
        "base": "MinimumApplicationAreaEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\area_effects\\effect_area_equalize.gd",
        "file": "data_classes/effects/area_effects/effect_area_equalize.gd"
      },
      {
        "name": "EqualizeDamageAreaEffect",
        "base": "EqualizeAreaEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\area_effects\\effect_area_equalize_damage.gd",
        "file": "data_classes/effects/area_effects/effect_area_equalize_damage.gd"
      },
      {
        "name": "EqualizeHealingAreaEffect",
        "base": "EqualizeAreaEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\area_effects\\effect_area_equalize_healing.gd",
        "file": "data_classes/effects/area_effects/effect_area_equalize_healing.gd"
      },
      {
        "name": "MinimumApplicationAreaEffect",
        "base": "AreaEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\area_effects\\effect_area_minimum_application.gd",
        "file": "data_classes/effects/area_effects/effect_area_minimum_application.gd"
      },
      {
        "name": "WeaponCollisionEffect",
        "base": "CollisionEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\area_effects\\effect_weapon_collision.gd",
        "file": "data_classes/effects/area_effects/effect_weapon_collision.gd"
      }
    ]
  },
  {
    "text": "Effects: amount",
    "slug": "effects-amount",
    "classes": [
      {
        "name": "AmountSource",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\amount\\amount_source.gd",
        "file": "data_classes/effects/amount/amount_source.gd"
      },
      {
        "name": "EffectAmount",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\amount\\effect_amount.gd",
        "file": "data_classes/effects/amount/effect_amount.gd"
      }
    ]
  },
  {
    "text": "Effects: composite",
    "slug": "effects-composite",
    "classes": [
      {
        "name": "ChainEffect",
        "base": "CompositeEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\composite\\effect_chain.gd",
        "file": "data_classes/effects/composite/effect_chain.gd"
      },
      {
        "name": "CompositeEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\composite\\effect_composite.gd",
        "file": "data_classes/effects/composite/effect_composite.gd"
      },
      {
        "name": "ConsumeEffect",
        "base": "CompositeEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\composite\\effect_consume.gd",
        "file": "data_classes/effects/composite/effect_consume.gd"
      },
      {
        "name": "DelayedEffect",
        "base": "CompositeEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\composite\\effect_delayed.gd",
        "file": "data_classes/effects/composite/effect_delayed.gd"
      }
    ]
  },
  {
    "text": "Effects: conditional",
    "slug": "effects-conditional",
    "classes": [
      {
        "name": "ConditionConditionalEffect",
        "base": "ConditionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\conditional\\effect_conditional_condition.gd",
        "file": "data_classes/effects/conditional/effect_conditional_condition.gd"
      },
      {
        "name": "DistanceConditionalEffect",
        "base": "ConditionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\conditional\\effect_conditional_distance.gd",
        "file": "data_classes/effects/conditional/effect_conditional_distance.gd"
      },
      {
        "name": "EffectConditionalEffect",
        "base": "ConditionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\conditional\\effect_conditional_effect.gd",
        "file": "data_classes/effects/conditional/effect_conditional_effect.gd"
      },
      {
        "name": "HealthConditionalEffect",
        "base": "ConditionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\conditional\\effect_conditional_health.gd",
        "file": "data_classes/effects/conditional/effect_conditional_health.gd"
      },
      {
        "name": "RandomChanceConditionalEffect",
        "base": "ConditionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\conditional\\effect_conditional_random.gd",
        "file": "data_classes/effects/conditional/effect_conditional_random.gd"
      }
    ]
  },
  {
    "text": "Effects: damage and healing",
    "slug": "effects-damage-and-healing",
    "classes": [
      {
        "name": "DamageEffect",
        "base": "CombatResultEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\damage_and_healing\\effect_damage.gd",
        "file": "data_classes/effects/damage_and_healing/effect_damage.gd"
      },
      {
        "name": "DamageRedirectionEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\damage_and_healing\\effect_damage_redirection.gd",
        "file": "data_classes/effects/damage_and_healing/effect_damage_redirection.gd"
      },
      {
        "name": "DamageReflectEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\damage_and_healing\\effect_damage_reflect.gd",
        "file": "data_classes/effects/damage_and_healing/effect_damage_reflect.gd"
      },
      {
        "name": "EqualizeHealthEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\damage_and_healing\\effect_equalize_health.gd",
        "file": "data_classes/effects/damage_and_healing/effect_equalize_health.gd"
      },
      {
        "name": "HealAbsorbEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\damage_and_healing\\effect_heal_absorb.gd",
        "file": "data_classes/effects/damage_and_healing/effect_heal_absorb.gd"
      },
      {
        "name": "HealEffect",
        "base": "CombatResultEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\damage_and_healing\\effect_heal.gd",
        "file": "data_classes/effects/damage_and_healing/effect_heal.gd"
      },
      {
        "name": "HealReflectEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\damage_and_healing\\effect_heal_reflect.gd",
        "file": "data_classes/effects/damage_and_healing/effect_heal_reflect.gd"
      }
    ]
  },
  {
    "text": "Effects: item",
    "slug": "effects-item",
    "classes": [
      {
        "name": "CreateItemEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\item\\effect_create_item.gd",
        "file": "data_classes/effects/item/effect_create_item.gd"
      },
      {
        "name": "EnchantEquipmentEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\item\\effect_enchant_equipment.gd",
        "file": "data_classes/effects/item/effect_enchant_equipment.gd"
      }
    ]
  },
  {
    "text": "Effects: movement",
    "slug": "effects-movement",
    "classes": [
      {
        "name": "AcceleratedMoveEffect",
        "base": "MoveDirectionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_movement_accelerated.gd",
        "file": "data_classes/effects/movement/effect_movement_accelerated.gd"
      },
      {
        "name": "ChargeToPointEffect",
        "base": "MoveToPointEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_charge_to_point.gd",
        "file": "data_classes/effects/movement/effect_charge_to_point.gd"
      },
      {
        "name": "ConstantMoveEffect",
        "base": "MoveDirectionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_movement_constant.gd",
        "file": "data_classes/effects/movement/effect_movement_constant.gd"
      },
      {
        "name": "DashEffect",
        "base": "MoveDirectionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_movement_dash.gd",
        "file": "data_classes/effects/movement/effect_movement_dash.gd"
      },
      {
        "name": "GravityEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_gravity.gd",
        "file": "data_classes/effects/movement/effect_gravity.gd"
      },
      {
        "name": "ImpulseEffect",
        "base": "MoveDirectionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_movement_impulse.gd",
        "file": "data_classes/effects/movement/effect_movement_impulse.gd"
      },
      {
        "name": "JumpToPointEffect",
        "base": "MoveToPointEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_jump_to_point.gd",
        "file": "data_classes/effects/movement/effect_jump_to_point.gd"
      },
      {
        "name": "MoveDirectionalEffect",
        "base": "CompositeEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_movement_directional.gd",
        "file": "data_classes/effects/movement/effect_movement_directional.gd"
      },
      {
        "name": "OrbitEffect",
        "base": "MoveToPointEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_orbit.gd",
        "file": "data_classes/effects/movement/effect_orbit.gd"
      },
      {
        "name": "PullEffect",
        "base": "MoveDirectionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_movement_pull.gd",
        "file": "data_classes/effects/movement/effect_movement_pull.gd"
      },
      {
        "name": "PushEffect",
        "base": "MoveDirectionalEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_movement_push.gd",
        "file": "data_classes/effects/movement/effect_movement_push.gd"
      },
      {
        "name": "SwapEffect",
        "base": "MoveToPointEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_swap.gd",
        "file": "data_classes/effects/movement/effect_swap.gd"
      },
      {
        "name": "TeleportToPointEffect",
        "base": "MoveToPointEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\movement\\effect_teleport_to_point.gd",
        "file": "data_classes/effects/movement/effect_teleport_to_point.gd"
      }
    ]
  },
  {
    "text": "Effects: pets and summons",
    "slug": "effects-pets-and-summons",
    "classes": [
      {
        "name": "PetCommandAbilityEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\pets_and_summons\\effect_pet_command_ability.gd",
        "file": "data_classes/effects/pets_and_summons/effect_pet_command_ability.gd"
      },
      {
        "name": "SummonInteractableEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\pets_and_summons\\effect_summon_interactable.gd",
        "file": "data_classes/effects/pets_and_summons/effect_summon_interactable.gd"
      },
      {
        "name": "SummonPetEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\pets_and_summons\\effect_summon_pet.gd",
        "file": "data_classes/effects/pets_and_summons/effect_summon_pet.gd"
      }
    ]
  },
  {
    "text": "Effects: procs",
    "slug": "effects-procs",
    "classes": [
      {
        "name": "AbilityProcEffect",
        "base": "ProcEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\proc_effects\\effect_procedure_ability.gd",
        "file": "data_classes/effects/proc_effects/effect_procedure_ability.gd"
      },
      {
        "name": "CombatProcEffect",
        "base": "ProcEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\proc_effects\\effect_procedure_combat.gd",
        "file": "data_classes/effects/proc_effects/effect_procedure_combat.gd"
      },
      {
        "name": "CombatStateProcEffect",
        "base": "ProcEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\proc_effects\\effect_procedure_combat_state.gd",
        "file": "data_classes/effects/proc_effects/effect_procedure_combat_state.gd"
      },
      {
        "name": "DeathProcEffect",
        "base": "ProcEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\proc_effects\\effect_procedure_death.gd",
        "file": "data_classes/effects/proc_effects/effect_procedure_death.gd"
      },
      {
        "name": "EffectEventProcEffect",
        "base": "ProcEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\proc_effects\\effect_procedure_event.gd",
        "file": "data_classes/effects/proc_effects/effect_procedure_event.gd"
      },
      {
        "name": "HealthThresholdProcEffect",
        "base": "ProcEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\proc_effects\\effect_procedure_health_threshold.gd",
        "file": "data_classes/effects/proc_effects/effect_procedure_health_threshold.gd"
      },
      {
        "name": "ResourceThresholdProcEffect",
        "base": "ProcEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\proc_effects\\effect_procedure_resource_threshold.gd",
        "file": "data_classes/effects/proc_effects/effect_procedure_resource_threshold.gd"
      },
      {
        "name": "StatusProcEffect",
        "base": "ProcEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\proc_effects\\effect_procedure_status.gd",
        "file": "data_classes/effects/proc_effects/effect_procedure_status.gd"
      }
    ]
  },
  {
    "text": "Effects: projectiles and shots",
    "slug": "effects-projectiles-and-shots",
    "classes": [
      {
        "name": "BoomerangProjectileEffect",
        "base": "BaseProjectileEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\projectiles_and_shots\\effect_projectile_boomerang.gd",
        "file": "data_classes/effects/projectiles_and_shots/effect_projectile_boomerang.gd"
      },
      {
        "name": "ChainProjectileEffect",
        "base": "BaseProjectileEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\projectiles_and_shots\\effect_projectile_chain.gd",
        "file": "data_classes/effects/projectiles_and_shots/effect_projectile_chain.gd"
      },
      {
        "name": "DirectProjectileEffect",
        "base": "BaseProjectileEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\projectiles_and_shots\\effect_projectile_direct.gd",
        "file": "data_classes/effects/projectiles_and_shots/effect_projectile_direct.gd"
      },
      {
        "name": "HitscanEffect",
        "base": "CompositeEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\projectiles_and_shots\\effect_hitscan.gd",
        "file": "data_classes/effects/projectiles_and_shots/effect_hitscan.gd"
      },
      {
        "name": "HomingProjectileEffect",
        "base": "BaseProjectileEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\projectiles_and_shots\\effect_projectile_homing.gd",
        "file": "data_classes/effects/projectiles_and_shots/effect_projectile_homing.gd"
      },
      {
        "name": "PhysicsProjectileEffect",
        "base": "BaseProjectileEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\projectiles_and_shots\\effect_projectile_physics.gd",
        "file": "data_classes/effects/projectiles_and_shots/effect_projectile_physics.gd"
      }
    ]
  },
  {
    "text": "Effects: stats",
    "slug": "effects-stats",
    "classes": [
      {
        "name": "AbilityBoostEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\stats\\effect_ability_boost.gd",
        "file": "data_classes/effects/stats/effect_ability_boost.gd"
      },
      {
        "name": "AbsorbWithPoolEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\stats\\effect_absorb_with_pool.gd",
        "file": "data_classes/effects/stats/effect_absorb_with_pool.gd"
      },
      {
        "name": "AddHealthPoolEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\stats\\effect_add_health_pool.gd",
        "file": "data_classes/effects/stats/effect_add_health_pool.gd"
      },
      {
        "name": "AddResourcePoolEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\stats\\effect_add_resource_pool.gd",
        "file": "data_classes/effects/stats/effect_add_resource_pool.gd"
      },
      {
        "name": "ModifyHealthPoolEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\stats\\effect_modify_health_pool.gd",
        "file": "data_classes/effects/stats/effect_modify_health_pool.gd"
      },
      {
        "name": "ModifyResourcePoolEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\stats\\effect_modify_resource_pool.gd",
        "file": "data_classes/effects/stats/effect_modify_resource_pool.gd"
      },
      {
        "name": "ProficiencyEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\stats\\effect_proficiency.gd",
        "file": "data_classes/effects/stats/effect_proficiency.gd"
      },
      {
        "name": "SetStatActiveStateEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\stats\\effect_set_stat_active_state.gd",
        "file": "data_classes/effects/stats/effect_set_stat_active_state.gd"
      },
      {
        "name": "StatModifierEffect",
        "base": "ScalingEffect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\stats\\effect_stat_modifier.gd",
        "file": "data_classes/effects/stats/effect_stat_modifier.gd"
      }
    ]
  },
  {
    "text": "Effects: status and control",
    "slug": "effects-status-and-control",
    "classes": [
      {
        "name": "AbilityReflectEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_ability_reflect.gd",
        "file": "data_classes/effects/status_and_control/effect_ability_reflect.gd"
      },
      {
        "name": "CharmEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_charm.gd",
        "file": "data_classes/effects/status_and_control/effect_charm.gd"
      },
      {
        "name": "ClearEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_clear.gd",
        "file": "data_classes/effects/status_and_control/effect_clear.gd"
      },
      {
        "name": "ImmunityEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_immunity.gd",
        "file": "data_classes/effects/status_and_control/effect_immunity.gd"
      },
      {
        "name": "InterruptEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_interrupt.gd",
        "file": "data_classes/effects/status_and_control/effect_interrupt.gd"
      },
      {
        "name": "ResurrectEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_resurrect.gd",
        "file": "data_classes/effects/status_and_control/effect_resurrect.gd"
      },
      {
        "name": "RevealEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_reveal.gd",
        "file": "data_classes/effects/status_and_control/effect_reveal.gd"
      },
      {
        "name": "SchoolLockEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_school_lock.gd",
        "file": "data_classes/effects/status_and_control/effect_school_lock.gd"
      },
      {
        "name": "StatusEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_status.gd",
        "file": "data_classes/effects/status_and_control/effect_status.gd"
      },
      {
        "name": "StealthEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_stealth.gd",
        "file": "data_classes/effects/status_and_control/effect_stealth.gd"
      },
      {
        "name": "TauntEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_taunt.gd",
        "file": "data_classes/effects/status_and_control/effect_taunt.gd"
      },
      {
        "name": "ThreatEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\status_and_control\\effect_threat.gd",
        "file": "data_classes/effects/status_and_control/effect_threat.gd"
      }
    ]
  },
  {
    "text": "Effects: utility",
    "slug": "effects-utility",
    "classes": [
      {
        "name": "AccessEntityInventoryEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\utility\\effect_access_entity_inventory.gd",
        "file": "data_classes/effects/utility/effect_access_entity_inventory.gd"
      },
      {
        "name": "EffectUnlockInteractable",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\utility\\effect_unlock_interactable.gd",
        "file": "data_classes/effects/utility/effect_unlock_interactable.gd"
      },
      {
        "name": "GrantRewardEffect",
        "base": "Effect",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\effects\\utility\\effect_grant_reward.gd",
        "file": "data_classes/effects/utility/effect_grant_reward.gd"
      }
    ]
  },
  {
    "text": "Skill trees",
    "slug": "skill-trees",
    "classes": [
      {
        "name": "ChoiceSkillNode",
        "base": "SkillNode",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\skill_tree\\choice_skill_node.gd",
        "file": "data_classes/skill_tree/choice_skill_node.gd"
      },
      {
        "name": "RankedSkillNode",
        "base": "SkillNode",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\skill_tree\\ranked_skill_node.gd",
        "file": "data_classes/skill_tree/ranked_skill_node.gd"
      },
      {
        "name": "SkillConnection",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\skill_tree\\skill_connection.gd",
        "file": "data_classes/skill_tree/skill_connection.gd"
      },
      {
        "name": "SkillNode",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\skill_tree\\skill_node.gd",
        "file": "data_classes/skill_tree/skill_node.gd"
      },
      {
        "name": "SkillPointPool",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\skill_tree\\skill_point_pool.gd",
        "file": "data_classes/skill_tree/skill_point_pool.gd"
      },
      {
        "name": "SkillPointPoolInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\skill_tree\\skill_point_instance.gd",
        "file": "runtime_classes/player/skill_tree/skill_point_instance.gd"
      },
      {
        "name": "SkillTree",
        "base": "DatabaseResource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\data_classes\\skill_tree\\skill_tree.gd",
        "file": "data_classes/skill_tree/skill_tree.gd"
      },
      {
        "name": "SkillTreeInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\player\\skill_tree\\skill_tree_instance.gd",
        "file": "runtime_classes/player/skill_tree/skill_tree_instance.gd"
      }
    ]
  },
  {
    "text": "Runtime",
    "slug": "runtime",
    "classes": [
      {
        "name": "AbilityComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\ability_component.gd",
        "file": "runtime_classes/entity/components/ability_component.gd"
      },
      {
        "name": "AbilityInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\ability_instance.gd",
        "file": "runtime_classes/entity/abilities/ability_instance.gd"
      },
      {
        "name": "AmmoCost",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\ammo_cost.gd",
        "file": "runtime_classes/entity/abilities/ammo_cost.gd"
      },
      {
        "name": "BaseProjectileInstance",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\effects\\projectiles\\base_projectile_instance.gd",
        "file": "runtime_classes/entity/abilities/effects/projectiles/base_projectile_instance.gd"
      },
      {
        "name": "CastRecord",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\effects\\cast_record.gd",
        "file": "runtime_classes/entity/abilities/effects/cast_record.gd"
      },
      {
        "name": "EffectGroupRules",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\effects\\effect_group_rules.gd",
        "file": "runtime_classes/entity/abilities/effects/effect_group_rules.gd"
      },
      {
        "name": "EffectInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\effects\\effect_instance.gd",
        "file": "runtime_classes/entity/abilities/effects/effect_instance.gd"
      },
      {
        "name": "EffectInstancePool",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\combat\\effect_instance_pool.gd",
        "file": "runtime_classes/combat/effect_instance_pool.gd"
      },
      {
        "name": "EffectsComponent",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\effects_component.gd",
        "file": "runtime_classes/entity/components/effects_component.gd"
      },
      {
        "name": "EnvironmentalEffects",
        "base": "Node3D",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\effects\\enviromental_effects.gd",
        "file": "runtime_classes/entity/abilities/effects/enviromental_effects.gd"
      },
      {
        "name": "NonPhysicalProjectileInstance",
        "base": "BaseProjectileInstance",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\effects\\projectiles\\non_physical_projectile_instance.gd",
        "file": "runtime_classes/entity/abilities/effects/projectiles/non_physical_projectile_instance.gd"
      },
      {
        "name": "PhysicalProjectileInstance",
        "base": "BaseProjectileInstance",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\effects\\projectiles\\physical_projectile_instance.gd",
        "file": "runtime_classes/entity/abilities/effects/projectiles/physical_projectile_instance.gd"
      },
      {
        "name": "PropertyModifierSet",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\property_modifier_set.gd",
        "file": "runtime_classes/entity/abilities/property_modifier_set.gd"
      },
      {
        "name": "TargetStrategyInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\target_strategy_instance.gd",
        "file": "runtime_classes/entity/abilities/target_strategy_instance.gd"
      },
      {
        "name": "ThreatTableComponent",
        "base": "Resource",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\components\\threat_table_component.gd",
        "file": "runtime_classes/entity/components/threat_table_component.gd"
      },
      {
        "name": "ThreatUtility",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\combat\\threat_utility.gd",
        "file": "runtime_classes/combat/threat_utility.gd"
      },
      {
        "name": "UseStrategyInstance",
        "base": "RefCounted",
        "path": "C:\\Users\\Rhys\\Documents\\rpg-toolkit\\addons\\chroniclenode\\runtime_classes\\entity\\abilities\\use_strategy_instance.gd",
        "file": "runtime_classes/entity/abilities/use_strategy_instance.gd"
      }
    ]
  }
]
