<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TooltipAbility

**Inherits:** [TooltipBase](/advanced/user-interface/tooltips/tooltip-base) < `MarginContainer`

## Properties

| | | |
|---|---|---|
| `PackedScene` | [ability_tooltip_ability_type](#prop-ability-tooltip-ability-type) |  |
| `PackedScene` | [ability_description](#prop-ability-description) |  |

## Variables

| | | |
|---|---|---|
| `Viewport` | [screensize](#var-screensize) | `get_viewport()` |
| `bool` | [is_showing_instance](#var-is-showing-instance) | `false` |
| `AbilityInstance` | [current_ability_instance](#var-current-ability-instance) | `null` |

## Methods

| | |
|---|---|
| `void` | [set_systems_refs](#method-set-systems-refs)( `system_hub: GameHost.SystemHub` ) |
| `void` | [set_tooltip_data](#method-set-tooltip-data)( `data: Variant` ) |
| `void` | [set_ability](#method-set-ability)( `ability_data: Variant, context: String = ""` ) |
| `void` | [clear_container](#method-clear-container)( `container: Node` ) |

## Property descriptions

### PackedScene ability_tooltip_ability_type {#prop-ability-tooltip-ability-type}

*No description yet.*

### PackedScene ability_description {#prop-ability-description}

*No description yet.*

## Variable descriptions

### Viewport screensize = get_viewport() {#var-screensize}

*No description yet.*

### bool is_showing_instance = false {#var-is-showing-instance}

*No description yet.*

### AbilityInstance current_ability_instance = null {#var-current-ability-instance}

*No description yet.*

## Method descriptions

### void set_systems_refs( system_hub: GameHost.SystemHub ) {#method-set-systems-refs}

*Overrides this function of [TooltipBase](/advanced/user-interface/tooltips/tooltip-base).*

### void set_tooltip_data( data: Variant ) {#method-set-tooltip-data}

*No description yet.*

### void set_ability( ability_data: Variant, context: String = "" ) {#method-set-ability}

Set ability with context support (for embedding in other tooltips)

### void clear_container( container: Node ) {#method-clear-container}

*Overrides this function of [TooltipBase](/advanced/user-interface/tooltips/tooltip-base).*

