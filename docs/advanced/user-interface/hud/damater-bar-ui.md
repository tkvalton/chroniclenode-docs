<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamaterBarUI

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

This class represents a details bar in the UI, typically used to display entity-specific information such as damage or healing amounts.

## Description

Key features:

- Displays an entity's name and total amount
- Shows a progress bar representing the entity's contribution relative to the team
- Updates dynamically with new totals and percentages

## Variables

| | | |
|---|---|---|
| `Entity` | [owner_entity](#var-owner-entity) |  |
| `int` | [total_amount](#var-total-amount) | `0` |

## Methods

| | |
|---|---|
| `void` | [set_details_bar](#method-set-details-bar)( `entity: Entity` ) |
| `void` | [add_total](#method-add-total)( `number: int, team_total: int ,entity: Entity` ) |
| `void` | [adjust_percentage](#method-adjust-percentage)( `percentage: float, team_total: int` ) |

## Variable descriptions

### Entity owner_entity {#var-owner-entity}

The entity this details bar represents

### int total_amount = 0 {#var-total-amount}

The total amount (e.g., damage, healing) for this entity

## Method descriptions

### void set_details_bar( entity: Entity ) {#method-set-details-bar}

Sets up the details bar for a specific entity

### void add_total( number: int, team_total: int ,entity: Entity ) {#method-add-total}

Adds to the total amount for this entity and updates the UI

### void adjust_percentage( percentage: float, team_total: int ) {#method-adjust-percentage}

Adjusts the percentage display and progress bar based on the team total

