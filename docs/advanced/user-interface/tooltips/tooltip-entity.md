<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TooltipEntity

**Inherits:** [TooltipBase](/advanced/user-interface/tooltips/tooltip-base) < `MarginContainer`

The tooltip of an entity or an object (an NPC, a pet, a party member, a chest ...): its name, its entity tags, its type, its level, its faction and the standing of the player with it, its description and the quest objectives that are about it. The interface asks for it when the pointer goes over the body or the nameplate of the target (the signal entity_tooltip_requested travels up like the others).

## Description

**Every part is optional.** The tooltip looks for each node by its unique name and fills it only if the node is in the scene: add the nodes you want to your own copy of the scene, leave out the ones you do not want, nothing else is needed. The names: %EntityNameLabel, %TagsLabel, %EntityTypeLabel, %LevelLabel, %FactionLabel, %StandingLabel, %DescriptionLabel (Labels), %TagArt (a TextureRect), %ObjectivesContainer (any Control, hidden when no objective is about the target) and %ObjectivesLabel (a Label). A part with nothing to show is hidden.

Entity tags can change it: the name takes the color of a tag that asks for it (UITagDefinition.tint_name), the tag names are listed in their color (show_in_tooltip) and the art of a tag (tooltip_art) is shown in %TagArt.

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [hub](#var-hub) |  |

## Methods

| | |
|---|---|
| `void` | [set_systems_refs](#method-set-systems-refs)( `system_hub: GameHost.SystemHub` ) |
| `void` | [set_tooltip_data](#method-set-tooltip-data)( `target: Variant` ) |

## Variable descriptions

### GameHost.SystemHub hub {#var-hub}

The hub of the game systems (the event manager, where the quests are, is read from it when it is needed: it can be made after the tooltips)

## Method descriptions

### void set_systems_refs( system_hub: GameHost.SystemHub ) {#method-set-systems-refs}

Gives the tooltip the hub of the game systems.

### void set_tooltip_data( target: Variant ) {#method-set-tooltip-data}

Shows the tooltip of an entity or an object.

