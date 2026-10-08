<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AmmoCost

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What an ability spends besides its resource cost: ammo or reagents (ActiveAbilityDefinition.ammo_source). Checks that the user has them, takes them when the ability is used, gives them back when the use is cancelled, and reports the ammo effects of the item that was spent (a poison arrow). Only players and companions pay: an NPC does not need arrows. See docs/systems/ability-mechanics-plan.md, section 5.

## Methods

| | |
|---|---|
| `bool` | [is_required](#method-is-required)( `definition: AbilityDefinition` ) *static* |
| `Dictionary` | [check](#method-check)( `ability: AbilityInstance` ) *static* |
| `Array[Effect]` | [pay](#method-pay)( `ability: AbilityInstance` ) *static* |
| `void` | [refund](#method-refund)( `ability: AbilityInstance` ) *static* |
| `ItemInstance` | [get_equipped_ammo](#method-get-equipped-ammo)( `user: Entity` ) *static* |
| `int` | [get_weapon_ammo_group](#method-get-weapon-ammo-group)( `user: Entity` ) *static* |
| `int` | [count_available](#method-count-available)( `ability: AbilityInstance` ) *static* |

## Method descriptions

### bool is_required( definition: AbilityDefinition ) {#method-is-required}

Does this ability spend ammo or a reagent at all?

### Dictionary check( ability: AbilityInstance ) {#method-check}

Can the user pay? {"ok": bool, "message": String}: the message is what to tell the player ("Out of ammo!")

### Array[Effect] pay( ability: AbilityInstance ) {#method-pay}

Takes what the ability costs (call after `check`). Returns the ammo effects of what was spent; what was taken is kept on the ability for `refund`

### void refund( ability: AbilityInstance ) {#method-refund}

Gives back what the last use took (the cast was cancelled, the use failed)

### ItemInstance get_equipped_ammo( user: Entity ) {#method-get-equipped-ammo}

The ammo equipped by the user (null if none): an equipped ItemDefinitionAmmo

### int get_weapon_ammo_group( user: Entity ) {#method-get-weapon-ammo-group}

The ammo group the weapon in hand shoots (0 = any ammo): the group of the first equipped ranged weapon's class

### int count_available( ability: AbilityInstance ) {#method-count-available}

How many pieces the user can still spend with this ability (for the HUD): -1 when it does not spend any

