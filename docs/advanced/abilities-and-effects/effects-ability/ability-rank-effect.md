<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityRankEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Adds ranks to abilities while the effect lasts: "+1 to all fire spells" on a staff, "+2 to Fireball" from an aura, "+1 to every ability" from a buff.

## Description

The ranks are added to the rank the ability was trained to and go away with the effect. They can go over the highest rank the ability can be trained to (that is what gear that raises skills is for). The numbers of the ability and the amounts of its effects follow the rank. See AbilityInstance.get_rank.

## Properties

| | | |
|---|---|---|
| `bool` | [all_abilities](#prop-all-abilities) | `false` |
| `Array[int]` | [ability_ids](#prop-ability-ids) | `[]` |
| `Array[int]` | [group_ids](#prop-group-ids) | `[]` |
| `Array[int]` | [school_ids](#prop-school-ids) | `[]` |
| `int` | [bonus_ranks](#prop-bonus-ranks) | `1` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

*Abilities*

### bool all_abilities = false {#prop-all-abilities}

Every ability of the target gets the ranks

### Array[int] ability_ids = [] {#prop-ability-ids}

These abilities get the ranks

### Array[int] group_ids = [] {#prop-group-ids}

Abilities in these groups get the ranks (Groups, for abilities)

### Array[int] school_ids = [] {#prop-school-ids}

Abilities of these schools get the ranks (Fire, Frost ...)

*Ranks*

### int bonus_ranks = 1 {#prop-bonus-ranks}

The ranks added (2 = rank 1 plays as rank 3). A negative number takes ranks away (a curse)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

