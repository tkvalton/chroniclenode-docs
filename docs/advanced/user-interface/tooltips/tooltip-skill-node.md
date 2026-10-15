<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TooltipSkillNode

**Inherits:** [TooltipBase](/advanced/user-interface/tooltips/tooltip-base) < `MarginContainer`

Tooltip display for skill nodes showing name, description, and rewards Handles different node types: basic, ranked, and choice nodes Integrates full tooltips for complex rewards (abilities, items, effects)

## Methods

| | |
|---|---|
| `void` | [set_systems_refs](#method-set-systems-refs)( `system_hub: GameHost.SystemHub` ) |
| `void` | [skill_node_tooltip_show](#method-skill-node-tooltip-show)( `skill_node: SkillNode` ) |
| `void` | [skill_node_tooltip_hide](#method-skill-node-tooltip-hide)( `_value: bool` ) |
| `void` | [choice_tooltip_show](#method-choice-tooltip-show)( `choice_node: ChoiceSkillNode, choice_index: int` ) |
| `void` | [choice_tooltip_hide](#method-choice-tooltip-hide)( `_value: bool` ) |
| `void` | [set_skill_node](#method-set-skill-node)( `node: SkillNode, _context: String = "", choice_index: int = -1` ) |

## Method descriptions

### void set_systems_refs( system_hub: GameHost.SystemHub ) {#method-set-systems-refs}

Gives the tooltip the hub of the game systems.

### void skill_node_tooltip_show( skill_node: SkillNode ) {#method-skill-node-tooltip-show}

Shows the tooltip of a skill node.

### void skill_node_tooltip_hide( _value: bool ) {#method-skill-node-tooltip-hide}

Hides the tooltip of a skill node.

### void choice_tooltip_show( choice_node: ChoiceSkillNode, choice_index: int ) {#method-choice-tooltip-show}

Shows the tooltip of one choice of a choice node.

### void choice_tooltip_hide( _value: bool ) {#method-choice-tooltip-hide}

Hides the tooltip of a choice.

### void set_skill_node( node: SkillNode, _context: String = "", choice_index: int = -1 ) {#method-set-skill-node}

Main entry point - sets up the tooltip for a given skill node If choice_index is provided (for ChoiceSkillNode), only shows that choice's rewards

