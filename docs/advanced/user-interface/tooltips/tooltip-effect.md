<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TooltipEffect

**Inherits:** [TooltipBase](/advanced/user-interface/tooltips/tooltip-base) < `MarginContainer`

The tooltip of an effect on an entity (a buff or a debuff): its name and its description.

## Methods

| | |
|---|---|
| `void` | [set_systems_refs](#method-set-systems-refs)( `system_hub: GameHost.SystemHub` ) |
| `void` | [set_tooltip_data](#method-set-tooltip-data)( `data: EffectInstance` ) |
| `void` | [set_effect](#method-set-effect)( `data: Effect, context: String = ""` ) |
| `String` | [strip_bbcode](#method-strip-bbcode)( `text: String` ) |

## Method descriptions

### void set_systems_refs( system_hub: GameHost.SystemHub ) {#method-set-systems-refs}

*Overrides this function of [TooltipBase](/advanced/user-interface/tooltips/tooltip-base).*

### void set_tooltip_data( data: EffectInstance ) {#method-set-tooltip-data}

*No description yet.*

### void set_effect( data: Effect, context: String = "" ) {#method-set-effect}

Set effect with context support (for embedding in other tooltips)

### String strip_bbcode( text: String ) {#method-strip-bbcode}

*No description yet.*

