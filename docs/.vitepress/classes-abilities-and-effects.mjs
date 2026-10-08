// Written by scripts/scan-classes.mjs from the addon: the classes of the Abilities & Effects system.
export const groups = [
  {
    "text": "Abilities",
    "slug": "abilities",
    "classes": [
      {
        "name": "AbilityDefinition",
        "base": "DatabaseResource",
        "file": "data_classes/abilities/ability_definition.gd"
      },
      {
        "name": "ActiveAbilityDefinition",
        "base": "PassiveAbilityDefinition",
        "file": "data_classes/abilities/active_ability_definition.gd"
      },
      {
        "name": "ChargeStackActiveAbilityDefinition",
        "base": "ActiveAbilityDefinition",
        "file": "data_classes/abilities/charge_stack_active_ability_definition.gd"
      },
      {
        "name": "ComboActiveAbilityDefinition",
        "base": "ActiveAbilityDefinition",
        "file": "data_classes/abilities/combo_active_ability_definition.gd"
      },
      {
        "name": "PassiveAbilityDefinition",
        "base": "AbilityDefinition",
        "file": "data_classes/abilities/passive_ability_definition.gd"
      },
      {
        "name": "PowerUpActiveAbilityDefinition",
        "base": "ActiveAbilityDefinition",
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
        "file": "data_classes/abilities/target_strategy/target_strategy_aimed.gd"
      },
      {
        "name": "AllyTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "file": "data_classes/abilities/target_strategy/target_strategy_ally.gd"
      },
      {
        "name": "AnyEntityTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "file": "data_classes/abilities/target_strategy/target_strategy_any_entity.gd"
      },
      {
        "name": "EnemyTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "file": "data_classes/abilities/target_strategy/target_strategy_enemy.gd"
      },
      {
        "name": "MultiPointTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "file": "data_classes/abilities/target_strategy/target_strategy_multi_point.gd"
      },
      {
        "name": "NoTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "file": "data_classes/abilities/target_strategy/target_strategy_none.gd"
      },
      {
        "name": "PointTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "file": "data_classes/abilities/target_strategy/target_strategy_point.gd"
      },
      {
        "name": "SelfTargetStrategyDefinition",
        "base": "TargetStrategyDefinition",
        "file": "data_classes/abilities/target_strategy/target_strategy_self.gd"
      },
      {
        "name": "TargetStrategyDefinition",
        "base": "Resource",
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
        "file": "data_classes/abilities/use_strategy/use_strategy_cast.gd"
      },
      {
        "name": "ChannelUseStrategyDefinition",
        "base": "UseStrategyDefinition",
        "file": "data_classes/abilities/use_strategy/use_strategy_channel.gd"
      },
      {
        "name": "InstantUseStrategyDefinition",
        "base": "UseStrategyDefinition",
        "file": "data_classes/abilities/use_strategy/use_strategy_instant.gd"
      },
      {
        "name": "ToggleUseStrategyDefinition",
        "base": "UseStrategyDefinition",
        "file": "data_classes/abilities/use_strategy/use_strategy_toggle.gd"
      },
      {
        "name": "UseStrategyDefinition",
        "base": "Resource",
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
        "file": "data_classes/effects/effect_projectile.gd"
      },
      {
        "name": "CollisionEffect",
        "base": "CompositeEffect",
        "file": "data_classes/effects/effect_collision.gd"
      },
      {
        "name": "CombatResultEffect",
        "base": "ScalingEffect",
        "file": "data_classes/effects/effect_combat_result.gd"
      },
      {
        "name": "ConditionalEffect",
        "base": "CompositeEffect",
        "file": "data_classes/effects/effect_conditional.gd"
      },
      {
        "name": "Effect",
        "base": "DatabaseResource",
        "file": "data_classes/effects/effect.gd"
      },
      {
        "name": "EffectScalingRule",
        "base": "Resource",
        "file": "data_classes/effects/effect_scaling_rule.gd"
      },
      {
        "name": "MoveToPointEffect",
        "base": "CompositeEffect",
        "file": "data_classes/effects/effect_move_to_point.gd"
      },
      {
        "name": "ProcEffect",
        "base": "CompositeEffect",
        "file": "data_classes/effects/effect_procedure.gd"
      },
      {
        "name": "ScalingEffect",
        "base": "Effect",
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
        "file": "data_classes/effects/ability/effect_ability_cast_modifier.gd"
      },
      {
        "name": "AbilityCooldownEffect",
        "base": "Effect",
        "file": "data_classes/effects/ability/effect_ability_cooldown.gd"
      },
      {
        "name": "AbilityEffect",
        "base": "Effect",
        "file": "data_classes/effects/ability/effect_ability.gd"
      },
      {
        "name": "AbilityEffectsModifierEffect",
        "base": "Effect",
        "file": "data_classes/effects/ability/effect_ability_effect_modifier.gd"
      },
      {
        "name": "AbilityMorphEffect",
        "base": "Effect",
        "file": "data_classes/effects/ability/effect_ability_morph.gd"
      },
      {
        "name": "AbilityRangeEffect",
        "base": "Effect",
        "file": "data_classes/effects/ability/effect_ability_range.gd"
      },
      {
        "name": "AbilityResourceEffect",
        "base": "Effect",
        "file": "data_classes/effects/ability/effect_ability_resource.gd"
      },
      {
        "name": "BasicAttackSwapEffect",
        "base": "Effect",
        "file": "data_classes/effects/ability/effect_basic_attack_swap.gd"
      },
      {
        "name": "RepeatAbilityEffect",
        "base": "Effect",
        "file": "data_classes/effects/ability/effect_repeat_ability.gd"
      },
      {
        "name": "SetAbilityActiveEffect",
        "base": "Effect",
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
        "file": "data_classes/effects/area_effects/effect_area.gd"
      },
      {
        "name": "AreaEqualizeHealthEffect",
        "base": "EqualizeAreaEffect",
        "file": "data_classes/effects/area_effects/effect_area_equalize_health.gd"
      },
      {
        "name": "AreaRandomizeTargetEffect",
        "base": "MinimumApplicationAreaEffect",
        "file": "data_classes/effects/area_effects/effect_area_randomize_target.gd"
      },
      {
        "name": "EqualizeAreaEffect",
        "base": "MinimumApplicationAreaEffect",
        "file": "data_classes/effects/area_effects/effect_area_equalize.gd"
      },
      {
        "name": "EqualizeDamageAreaEffect",
        "base": "EqualizeAreaEffect",
        "file": "data_classes/effects/area_effects/effect_area_equalize_damage.gd"
      },
      {
        "name": "EqualizeHealingAreaEffect",
        "base": "EqualizeAreaEffect",
        "file": "data_classes/effects/area_effects/effect_area_equalize_healing.gd"
      },
      {
        "name": "MinimumApplicationAreaEffect",
        "base": "AreaEffect",
        "file": "data_classes/effects/area_effects/effect_area_minimum_application.gd"
      },
      {
        "name": "WeaponCollisionEffect",
        "base": "CollisionEffect",
        "file": "data_classes/effects/area_effects/effect_weapon_collision.gd"
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
        "file": "data_classes/effects/composite/effect_chain.gd"
      },
      {
        "name": "CompositeEffect",
        "base": "Effect",
        "file": "data_classes/effects/composite/effect_composite.gd"
      },
      {
        "name": "ConsumeEffect",
        "base": "CompositeEffect",
        "file": "data_classes/effects/composite/effect_consume.gd"
      },
      {
        "name": "DelayedEffect",
        "base": "CompositeEffect",
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
        "file": "data_classes/effects/conditional/effect_conditional_condition.gd"
      },
      {
        "name": "DistanceConditionalEffect",
        "base": "ConditionalEffect",
        "file": "data_classes/effects/conditional/effect_conditional_distance.gd"
      },
      {
        "name": "EffectConditionalEffect",
        "base": "ConditionalEffect",
        "file": "data_classes/effects/conditional/effect_conditional_effect.gd"
      },
      {
        "name": "HealthConditionalEffect",
        "base": "ConditionalEffect",
        "file": "data_classes/effects/conditional/effect_conditional_health.gd"
      },
      {
        "name": "RandomChanceConditionalEffect",
        "base": "ConditionalEffect",
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
        "file": "data_classes/effects/damage_and_healing/effect_damage.gd"
      },
      {
        "name": "DamageRedirectionEffect",
        "base": "Effect",
        "file": "data_classes/effects/damage_and_healing/effect_damage_redirection.gd"
      },
      {
        "name": "EqualizeHealthEffect",
        "base": "Effect",
        "file": "data_classes/effects/damage_and_healing/effect_equalize_health.gd"
      },
      {
        "name": "HealEffect",
        "base": "CombatResultEffect",
        "file": "data_classes/effects/damage_and_healing/effect_heal.gd"
      },
      {
        "name": "ThornsEffect",
        "base": "Effect",
        "file": "data_classes/effects/damage_and_healing/effect_thorns.gd"
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
        "file": "data_classes/effects/item/effect_create_item.gd"
      },
      {
        "name": "EnchantEquipmentEffect",
        "base": "Effect",
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
        "file": "data_classes/effects/movement/effect_movement_accelerated.gd"
      },
      {
        "name": "ChargeToPointEffect",
        "base": "MoveToPointEffect",
        "file": "data_classes/effects/movement/effect_charge_to_point.gd"
      },
      {
        "name": "ConstantMoveEffect",
        "base": "MoveDirectionalEffect",
        "file": "data_classes/effects/movement/effect_movement_constant.gd"
      },
      {
        "name": "DashEffect",
        "base": "MoveDirectionalEffect",
        "file": "data_classes/effects/movement/effect_movement_dash.gd"
      },
      {
        "name": "GravityEffect",
        "base": "Effect",
        "file": "data_classes/effects/movement/effect_gravity.gd"
      },
      {
        "name": "ImpulseEffect",
        "base": "MoveDirectionalEffect",
        "file": "data_classes/effects/movement/effect_movement_impulse.gd"
      },
      {
        "name": "JumpToPointEffect",
        "base": "MoveToPointEffect",
        "file": "data_classes/effects/movement/effect_jump_to_point.gd"
      },
      {
        "name": "MoveDirectionalEffect",
        "base": "CompositeEffect",
        "file": "data_classes/effects/movement/effect_movement_directional.gd"
      },
      {
        "name": "OrbitEffect",
        "base": "MoveToPointEffect",
        "file": "data_classes/effects/movement/effect_orbit.gd"
      },
      {
        "name": "PullEffect",
        "base": "MoveDirectionalEffect",
        "file": "data_classes/effects/movement/effect_movement_pull.gd"
      },
      {
        "name": "PushEffect",
        "base": "MoveDirectionalEffect",
        "file": "data_classes/effects/movement/effect_movement_push.gd"
      },
      {
        "name": "SwapEffect",
        "base": "MoveToPointEffect",
        "file": "data_classes/effects/movement/effect_swap.gd"
      },
      {
        "name": "TeleportToPointEffect",
        "base": "MoveToPointEffect",
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
        "file": "data_classes/effects/pets_and_summons/effect_pet_command_ability.gd"
      },
      {
        "name": "SummonInteractableEffect",
        "base": "Effect",
        "file": "data_classes/effects/pets_and_summons/effect_summon_interactable.gd"
      },
      {
        "name": "SummonPetEffect",
        "base": "Effect",
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
        "file": "data_classes/effects/proc_effects/effect_procedure_ability.gd"
      },
      {
        "name": "CombatProcEffect",
        "base": "ProcEffect",
        "file": "data_classes/effects/proc_effects/effect_procedure_combat.gd"
      },
      {
        "name": "DeathProcEffect",
        "base": "ProcEffect",
        "file": "data_classes/effects/proc_effects/effect_procedure_death.gd"
      },
      {
        "name": "EffectEventProcEffect",
        "base": "ProcEffect",
        "file": "data_classes/effects/proc_effects/effect_procedure_event.gd"
      },
      {
        "name": "HealthThresholdProcEffect",
        "base": "ProcEffect",
        "file": "data_classes/effects/proc_effects/effect_procedure_health_threshold.gd"
      },
      {
        "name": "ResourceThresholdProcEffect",
        "base": "ProcEffect",
        "file": "data_classes/effects/proc_effects/effect_procedure_resource_threshold.gd"
      }
    ]
  },
  {
    "text": "Effects: projectiles",
    "slug": "effects-projectiles",
    "classes": [
      {
        "name": "BoomerangProjectileEffect",
        "base": "BaseProjectileEffect",
        "file": "data_classes/effects/projectiles/effect_projectile_boomerang.gd"
      },
      {
        "name": "ChainProjectileEffect",
        "base": "BaseProjectileEffect",
        "file": "data_classes/effects/projectiles/effect_projectile_chain.gd"
      },
      {
        "name": "DirectProjectileEffect",
        "base": "BaseProjectileEffect",
        "file": "data_classes/effects/projectiles/effect_projectile_direct.gd"
      },
      {
        "name": "HitscanEffect",
        "base": "CompositeEffect",
        "file": "data_classes/effects/projectiles/effect_hitscan.gd"
      },
      {
        "name": "HomingProjectileEffect",
        "base": "BaseProjectileEffect",
        "file": "data_classes/effects/projectiles/effect_projectile_homing.gd"
      },
      {
        "name": "PhysicsProjectileEffect",
        "base": "BaseProjectileEffect",
        "file": "data_classes/effects/projectiles/effect_projectile_physics.gd"
      }
    ]
  },
  {
    "text": "Effects: stats",
    "slug": "effects-stats",
    "classes": [
      {
        "name": "AbsorbWithPoolEffect",
        "base": "Effect",
        "file": "data_classes/effects/stats/effect_absorb_with_pool.gd"
      },
      {
        "name": "AddHealthPoolEffect",
        "base": "Effect",
        "file": "data_classes/effects/stats/effect_add_health_pool.gd"
      },
      {
        "name": "AddResourcePoolEffect",
        "base": "Effect",
        "file": "data_classes/effects/stats/effect_add_resource_pool.gd"
      },
      {
        "name": "ModifyHealthPoolEffect",
        "base": "Effect",
        "file": "data_classes/effects/stats/effect_modify_health_pool.gd"
      },
      {
        "name": "ModifyResourcePoolEffect",
        "base": "Effect",
        "file": "data_classes/effects/stats/effect_modify_resource_pool.gd"
      },
      {
        "name": "SetStatActiveStateEffect",
        "base": "Effect",
        "file": "data_classes/effects/stats/effect_set_stat_active_state.gd"
      },
      {
        "name": "StatModifierEffect",
        "base": "ScalingEffect",
        "file": "data_classes/effects/stats/effect_stat_modifier.gd"
      }
    ]
  },
  {
    "text": "Effects: status and control",
    "slug": "effects-status-and-control",
    "classes": [
      {
        "name": "CharmEffect",
        "base": "Effect",
        "file": "data_classes/effects/status_and_control/effect_charm.gd"
      },
      {
        "name": "ClearEffect",
        "base": "Effect",
        "file": "data_classes/effects/status_and_control/effect_clear.gd"
      },
      {
        "name": "ImmunityEffect",
        "base": "Effect",
        "file": "data_classes/effects/status_and_control/effect_immunity.gd"
      },
      {
        "name": "InterruptEffect",
        "base": "Effect",
        "file": "data_classes/effects/status_and_control/effect_interrupt.gd"
      },
      {
        "name": "ResurrectEffect",
        "base": "Effect",
        "file": "data_classes/effects/status_and_control/effect_resurrect.gd"
      },
      {
        "name": "RevealEffect",
        "base": "AreaEffect",
        "file": "data_classes/effects/status_and_control/effect_reveal.gd"
      },
      {
        "name": "SchoolLockEffect",
        "base": "Effect",
        "file": "data_classes/effects/status_and_control/effect_school_lock.gd"
      },
      {
        "name": "SpellReflectEffect",
        "base": "Effect",
        "file": "data_classes/effects/status_and_control/effect_spell_reflect.gd"
      },
      {
        "name": "StatusEffect",
        "base": "Effect",
        "file": "data_classes/effects/status_and_control/effect_status.gd"
      },
      {
        "name": "StealthEffect",
        "base": "Effect",
        "file": "data_classes/effects/status_and_control/effect_stealth.gd"
      },
      {
        "name": "TauntEffect",
        "base": "Effect",
        "file": "data_classes/effects/status_and_control/effect_taunt.gd"
      },
      {
        "name": "ThreatEffect",
        "base": "Effect",
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
        "file": "data_classes/effects/utility/effect_access_entity_inventory.gd"
      },
      {
        "name": "EffectUnlockInteractable",
        "base": "Effect",
        "file": "data_classes/effects/utility/effect_unlock_interactable.gd"
      },
      {
        "name": "GrantRewardEffect",
        "base": "Effect",
        "file": "data_classes/effects/utility/effect_grant_reward.gd"
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
        "file": "runtime_classes/entity/components/ability_component.gd"
      },
      {
        "name": "AbilityInstance",
        "base": "RefCounted",
        "file": "runtime_classes/entity/abilities/ability_instance.gd"
      },
      {
        "name": "AmmoCost",
        "base": "RefCounted",
        "file": "runtime_classes/entity/abilities/ammo_cost.gd"
      },
      {
        "name": "BaseProjectileInstance",
        "base": "Node3D",
        "file": "runtime_classes/entity/abilities/effects/projectiles/base_projectile_instance.gd"
      },
      {
        "name": "EffectGroupRules",
        "base": "RefCounted",
        "file": "runtime_classes/entity/abilities/effects/effect_group_rules.gd"
      },
      {
        "name": "EffectInstance",
        "base": "RefCounted",
        "file": "runtime_classes/entity/abilities/effects/effect_instance.gd"
      },
      {
        "name": "EffectInstancePool",
        "base": "RefCounted",
        "file": "runtime_classes/combat/effect_instance_pool.gd"
      },
      {
        "name": "EffectsComponent",
        "base": "RefCounted",
        "file": "runtime_classes/entity/components/effects_component.gd"
      },
      {
        "name": "EnvironmentalEffects",
        "base": "Node3D",
        "file": "runtime_classes/entity/abilities/effects/enviromental_effects.gd"
      },
      {
        "name": "NonPhysicalProjectileInstance",
        "base": "BaseProjectileInstance",
        "file": "runtime_classes/entity/abilities/effects/projectiles/non_physical_projectile_instance.gd"
      },
      {
        "name": "PhysicalProjectileInstance",
        "base": "BaseProjectileInstance",
        "file": "runtime_classes/entity/abilities/effects/projectiles/physical_projectile_instance.gd"
      },
      {
        "name": "PropertyModifierSet",
        "base": "RefCounted",
        "file": "runtime_classes/entity/abilities/property_modifier_set.gd"
      },
      {
        "name": "TargetStrategyInstance",
        "base": "RefCounted",
        "file": "runtime_classes/entity/abilities/target_strategy_instance.gd"
      },
      {
        "name": "ThreatUtility",
        "base": "RefCounted",
        "file": "runtime_classes/combat/threat_utility.gd"
      },
      {
        "name": "UseStrategyInstance",
        "base": "RefCounted",
        "file": "runtime_classes/entity/abilities/use_strategy_instance.gd"
      }
    ]
  }
]
