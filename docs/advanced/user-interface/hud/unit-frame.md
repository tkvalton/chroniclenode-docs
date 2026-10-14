<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UnitFrame

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

This class serves as a base for different types of unit frames in the game UI. It handles common functionality such as health and resource display, casting, and aura management for game entities.

## Description

Key features:

- Displays entity name, health, and resource
- Manages cast bar functionality
- Handles aura (buff/debuff) display and management
- Provides signal connections for entity updates

## Variables

| | | |
|---|---|---|
| `Entity` | [unitframe_owner](#var-unitframe-owner) |  |
| `bool` | [currently_casting](#var-currently-casting) | `false` |
| `Array[Aura]` | [active_auras](#var-active-auras) |  |
| `Array[Aura]` | [buff_slots](#var-buff-slots) |  |
| `Array[Aura]` | [debuff_slots](#var-debuff-slots) |  |

## Methods

| | |
|---|---|
| `void` | [set_action_bar](#method-set-action-bar)( `entity: Entity` ) |

## Variable descriptions

### Entity unitframe_owner {#var-unitframe-owner}

The entity that this unit frame represents

### bool currently_casting = false {#var-currently-casting}

Flag to indicate if the entity is currently casting an ability

### Array[Aura] active_auras {#var-active-auras}

List of active auras (buffs/debuffs) on the entity

### Array[Aura] buff_slots {#var-buff-slots}

Slots for displaying buff auras

### Array[Aura] debuff_slots {#var-debuff-slots}

Slots for displaying debuff auras

## Method descriptions

### void set_action_bar( entity: Entity ) {#method-set-action-bar}

Sets up the unit frame for a given entity

