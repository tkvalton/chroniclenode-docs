<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Effect

**Inherits:** `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AbilityCastModifierEffect](/advanced/abilities-and-effects/effects-ability/ability-cast-modifier-effect), [AbilityCooldownEffect](/advanced/abilities-and-effects/effects-ability/ability-cooldown-effect), [AbilityEffect](/advanced/abilities-and-effects/effects-ability/ability-effect), [AbilityEffectsModifierEffect](/advanced/abilities-and-effects/effects-ability/ability-effects-modifier-effect), [AbilityMorphEffect](/advanced/abilities-and-effects/effects-ability/ability-morph-effect), [AbilityRangeEffect](/advanced/abilities-and-effects/effects-ability/ability-range-effect), [AbilityReflectEffect](/advanced/abilities-and-effects/effects-status-and-control/ability-reflect-effect), [AbilityResourceEffect](/advanced/abilities-and-effects/effects-ability/ability-resource-effect), [AbsorbWithPoolEffect](/advanced/abilities-and-effects/effects-stats/absorb-with-pool-effect), [AccessEntityInventoryEffect](/advanced/abilities-and-effects/effects-utility/access-entity-inventory-effect), [AddHealthPoolEffect](/advanced/abilities-and-effects/effects-stats/add-health-pool-effect), [AddResourcePoolEffect](/advanced/abilities-and-effects/effects-stats/add-resource-pool-effect), [BasicAttackSwapEffect](/advanced/abilities-and-effects/effects-ability/basic-attack-swap-effect), [CharmEffect](/advanced/abilities-and-effects/effects-status-and-control/charm-effect), [ClearEffect](/advanced/abilities-and-effects/effects-status-and-control/clear-effect), [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect), [CreateItemEffect](/advanced/abilities-and-effects/effects-item/create-item-effect), [DamageRedirectionEffect](/advanced/abilities-and-effects/effects-damage-and-healing/damage-redirection-effect), [DamageReflectEffect](/advanced/abilities-and-effects/effects-damage-and-healing/damage-reflect-effect), [EffectUnlockInteractable](/advanced/abilities-and-effects/effects-utility/effect-unlock-interactable), [EnchantEquipmentEffect](/advanced/abilities-and-effects/effects-item/enchant-equipment-effect), [EqualizeHealthEffect](/advanced/abilities-and-effects/effects-damage-and-healing/equalize-health-effect), [GrantRewardEffect](/advanced/abilities-and-effects/effects-utility/grant-reward-effect), [GravityEffect](/advanced/abilities-and-effects/effects-movement/gravity-effect), [ImmunityEffect](/advanced/abilities-and-effects/effects-status-and-control/immunity-effect), [InterruptEffect](/advanced/abilities-and-effects/effects-status-and-control/interrupt-effect), [ModifyHealthPoolEffect](/advanced/abilities-and-effects/effects-stats/modify-health-pool-effect), [ModifyResourcePoolEffect](/advanced/abilities-and-effects/effects-stats/modify-resource-pool-effect), [PetCommandAbilityEffect](/advanced/abilities-and-effects/effects-pets-and-summons/pet-command-ability-effect), [RepeatAbilityEffect](/advanced/abilities-and-effects/effects-ability/repeat-ability-effect), [ResurrectEffect](/advanced/abilities-and-effects/effects-status-and-control/resurrect-effect), [ScalingEffect](/advanced/abilities-and-effects/effects-base/scaling-effect), [SchoolLockEffect](/advanced/abilities-and-effects/effects-status-and-control/school-lock-effect), [SetAbilityActiveEffect](/advanced/abilities-and-effects/effects-ability/set-ability-active-effect), [SetStatActiveStateEffect](/advanced/abilities-and-effects/effects-stats/set-stat-active-state-effect), [StatusEffect](/advanced/abilities-and-effects/effects-status-and-control/status-effect), [StealthEffect](/advanced/abilities-and-effects/effects-status-and-control/stealth-effect), [SummonInteractableEffect](/advanced/abilities-and-effects/effects-pets-and-summons/summon-interactable-effect), [SummonPetEffect](/advanced/abilities-and-effects/effects-pets-and-summons/summon-pet-effect), [TauntEffect](/advanced/abilities-and-effects/effects-status-and-control/taunt-effect), [ThreatEffect](/advanced/abilities-and-effects/effects-status-and-control/threat-effect)

Effect is a base class for all effects in the game.

## Description

Effect is a base class for all effects in the game. It provides a framework for creating, managing, and applying various effects to entities or targets within the game world.

The class handles effect initialization, application, stacking, and removal. It supports various features such as:

- Aura application and management
- Visual and audio feedback (VFX and SFX)
- Time-based strategies for effect duration and timing
- Stack count management

Child classes of Effect implement a wide variety of specific effects. These child classes should override the _specific_effect_logic() method to implement their unique behavior. This allows for a flexible and extensible effect system that can handle diverse game mechanics.

The Effect class also manages its lifecycle, including initialization, application, refreshing/stacking, and cleanup of resources when the effect ends or is removed.

## Properties

| | | |
|---|---|---|
| `int` | [effect_school](#prop-effect-school) | `0` |
| `AppliedTo` | [applies_to](#prop-applies-to) | `AppliedTo.TARGET` |
| `TimeStrategy` | [time_strategy](#prop-time-strategy) | `TimeStrategy.ImmediateTimeStrategy` |
| `float` | [duration](#prop-duration) | `0.0` |
| `float` | [tick_rate](#prop-tick-rate) | `0.0` |
| `StackingRule` | [stacking_rule](#prop-stacking-rule) | `StackingRule.NO_LIMITS` |
| `bool` | [refresh](#prop-refresh) | `false` |
| `bool` | [reapply_on_stack](#prop-reapply-on-stack) | `false` |
| `int` | [stack_amount](#prop-stack-amount) | `1` |
| `int` | [max_stacks](#prop-max-stacks) | `1` |
| `bool` | [applies_aura](#prop-applies-aura) | `false` |
| `AuraType` | [aura_classification](#prop-aura-classification) |  |
| `Array[int]` | [groups](#prop-groups) | `[]` |
| `Array[Requirement]` | [requirements](#prop-requirements) | `[]` |
| `int` | [max_uses](#prop-max-uses) | `0` |
| `UseCount` | [uses_count](#prop-uses-count) | `UseCount.ANY_ABILITY` |
| `int` | [uses_filter_id](#prop-uses-filter-id) | `0` |
| `SFXSelection` | [sfx_on_applied](#prop-sfx-on-applied) | `null` |
| `VFXSelection` | [vfx_on_applied](#prop-vfx-on-applied) | `null` |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `_effect_instance: EffectInstance` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `_effect_instance: EffectInstance` ) |
| `void` | [restore_after_load](#method-restore-after-load)( `effect_instance: EffectInstance` ) |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |
| `void` | [on_stack_reapply](#method-on-stack-reapply)( `_effect_instance: EffectInstance, _old_stack_count: int, _new_stack_count: int` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `void` | [apply_effect_vfx](#method-apply-effect-vfx)( `instance: EffectInstance` ) |
| `void` | [cleanup_effect_vfx](#method-cleanup-effect-vfx)( `instance: EffectInstance` ) |
| `String` | [get_duration_description](#method-get-duration-description)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `Array[Effect]` | [get_child_effect_definitions](#method-get-child-effect-definitions)() |
| `String` | [get_tooltip_text](#method-get-tooltip-text)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [has_vfx](#method-has-vfx)() |
| `Dictionary` | [check_requirements](#method-check-requirements)( `entity: Variant` ) |
| `Array[GroupDefinition]` | [get_group_definitions](#method-get-group-definitions)() |
| `float` | [get_charge_multiplier](#method-get-charge-multiplier)( `effect_instance: EffectInstance, scales_with_charge: bool, minimum: float` ) |
| `bool` | [counts_as_use](#method-counts-as-use)( `ability: AbilityInstance, abilities: AbilityComponent` ) |

## Enumerations

### enum AppliedTo {#enum-appliedto}

- **TARGET** = `0`
- **SELF** = `1`

### enum TimeStrategy {#enum-timestrategy}

- **ImmediateTimeStrategy** = `0`
- **PersistentTimeStrategy** = `1`
- **PersistentTickingTimeStrategy** = `2`
- **TemporaryTimeStrategy** = `3`
- **TemporaryTickingTimeStrategy** = `4`

### enum AuraType {#enum-auratype}

- **BUFF** = `0`
- **DEBUFF** = `1`

### enum UseCount {#enum-usecount}

- **ANY_ABILITY** = `0` - every ability the entity uses
- **BASIC_ATTACK** = `1` - its basic attack
- **ABILITIES_IN_GROUP** = `2` - abilities that are in a group (uses_filter_id)
- **ABILITIES_OF_SCHOOL** = `3` - abilities of a school (uses_filter_id)
- **SPECIFIC_ABILITY** = `4` - one ability (uses_filter_id)

### enum StackingRule {#enum-stackingrule}

- **NO_LIMITS** = `0`
- **PER_ORIGINATOR** = `1`
- **GLOBAL** = `2`

## Property descriptions

### int effect_school = 0 {#prop-effect-school}

The type of effect for Aura's, each is a different school for dispels/purges. None cannot be removed

### AppliedTo applies_to = AppliedTo.TARGET {#prop-applies-to}

Wether the effect should apply to the target or the user

### TimeStrategy time_strategy = TimeStrategy.ImmediateTimeStrategy {#prop-time-strategy}

The time strategy that controls how this effect behaves over time

### float duration = 0.0 {#prop-duration}

Time the effect lasts

### float tick_rate = 0.0 {#prop-tick-rate}

Timer for when effect are applied on tick

*Stack Settings*

### StackingRule stacking_rule = StackingRule.NO_LIMITS {#prop-stacking-rule}

The stacking logic

### bool refresh = false {#prop-refresh}

Effect duration resets on new stack gain

### bool reapply_on_stack = false {#prop-reapply-on-stack}

Re-execute effect logic when stacks are added. Use for instant damage/healing/projectiles. Stat modifiers need custom on_stack_reapply() logic.

### int stack_amount = 1 {#prop-stack-amount}

Stacks applied per application

### int max_stacks = 1 {#prop-max-stacks}

Maximum stacks allowed (respects stacking_rule)

*Aura Settings*

### bool applies_aura = false {#prop-applies-aura}

Show this effect on the interface as a buff or debuff (buff and debuff bars, nameplates, unit frames). Also what a ClearEffect that removes buffs or debuffs looks at

### AuraType aura_classification {#prop-aura-classification}

Whether it is shown as a buff or a debuff

*Groups &amp; Requirements*

### Array[int] groups = [] {#prop-groups}

Groups this effect is in (Seal, Well Fed, Battle Elixir ...). A group can limit how many of its effects are active at once: see GroupDefinition

### Array[Requirement] requirements = [] {#prop-requirements}

What the entity the effect applies to must meet when the effect is applied (a level range, a class, a weapon ...). An effect that fails is rejected

### int max_uses = 0 {#prop-max-uses}

The effect ends after this many uses of abilities by the entity it is on (0 = not limited): "your next spell is instant", "your next attack deals extra damage"

### UseCount uses_count = UseCount.ANY_ABILITY {#prop-uses-count}

Which uses count towards `max_uses`

### int uses_filter_id = 0 {#prop-uses-filter-id}

The group, school or ability the uses are counted for (see `uses_count`)

*SFX &amp; VFX*

### SFXSelection sfx_on_applied = null {#prop-sfx-on-applied}

SFX on effect application

### VFXSelection vfx_on_applied = null {#prop-vfx-on-applied}

Can be any VFX type including beam, path, telegraph, etc.

## Method descriptions

### void process_before_start( _effect_instance: EffectInstance ) {#method-process-before-start}

Performs final processing before starting the effect (should be overridden in child classes)

### void specific_effect_logic( _effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes)

### void restore_after_load( effect_instance: EffectInstance ) {#method-restore-after-load}

What a loaded effect does instead of `specific_effect_logic` when it starts again after a load. The default applies the effect again in full (right for everything that is a lasting state: a stat modifier, a status, a ward, a lock). Effects that did something once when they were first applied (a hit, a heal, a launch, a summon) return true from `is_one_off_application` and do nothing: only what lasts (their ticks, their duration) comes back

### bool is_one_off_application() {#method-is-one-off-application}

True for effects whose application happens once and must not be repeated when a save is loaded

### void on_stack_reapply( _effect_instance: EffectInstance, _old_stack_count: int, _new_stack_count: int ) {#method-on-stack-reapply}

Virtual method for custom stack reapply logic Called when an existing effect gains additional stacks and reapply_on_stack is true (override in child classes if needed)

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup)

### void apply_effect_vfx( instance: EffectInstance ) {#method-apply-effect-vfx}

Apply VFX

### void cleanup_effect_vfx( instance: EffectInstance ) {#method-cleanup-effect-vfx}

Stop any VFX spawned by this effect

### String get_duration_description() {#method-get-duration-description}

Helper method to get duration description from TimeStrategy

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes)

### Array[Effect] get_child_effect_definitions() {#method-get-child-effect-definitions}

The effects inside this one, flattened depth first (its children, then theirs): what the placeholders of its Description count. A plain effect has none

### String get_tooltip_text() {#method-get-tooltip-text}

The text of the aura tooltip. The Description written for the effect when there is one (its &lt;Effect1&gt; placeholders count the child effects), otherwise the text the effect type writes itself. Ability tooltips keep using the type's text unless the ability says &lt;EffectText1&gt;: see EffectTextUtil

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool has_vfx() {#method-has-vfx}

Check if effect has VFX configured

### Dictionary check_requirements( entity: Variant ) {#method-check-requirements}

Does the entity the effect applies to meet every requirement of this effect? (`failed_message` is the reason of the first one it fails)

### Array[GroupDefinition] get_group_definitions() {#method-get-group-definitions}

The groups of this effect that exist in the database

### float get_charge_multiplier( effect_instance: EffectInstance, scales_with_charge: bool, minimum: float ) {#method-get-charge-multiplier}

The factor a drawn shot's charge puts on a value: 1 for a fully drawn shot (or an effect that does not scale), `minimum` for one released at once

### bool counts_as_use( ability: AbilityInstance, abilities: AbilityComponent ) {#method-counts-as-use}

Does this use of an ability count towards `max_uses`?

