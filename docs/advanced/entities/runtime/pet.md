<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Pet

**Inherits:** [Entity](/advanced/entities/runtime/entity) < [CharacterBody3D](https://docs.godotengine.org/en/stable/classes/class_characterbody3d.html)

## Variables

| | | |
|---|---|---|
| `Entity` | [summoner](#var-summoner) |  |
| `Effect` | [creating_effect](#var-creating-effect) |  |
| `bool` | [follow_stance](#var-follow-stance) | `false` |
| `Timer` | [summon_timer](#var-summon-timer) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_entity](#method-initialize-entity)( `system_hub: GameHost.SystemHub` ) |
| `void` | [summon_timer_timeout](#method-summon-timer-timeout)() |
| `void` | [summon_finished](#method-summon-finished)() |
| `void` | [entity_death](#method-entity-death)( `announce: bool = true` ) |

## Variable descriptions

### Entity summoner {#var-summoner}

The entity that summoned/owns this pet

### Effect creating_effect {#var-creating-effect}

The effect that created this pet

### bool follow_stance = false {#var-follow-stance}

Whether the pet is set to follow its owner

### Timer summon_timer {#var-summon-timer}

Timer for the initial summon animation/effect

## Method descriptions

### void initialize_entity( system_hub: GameHost.SystemHub ) {#method-initialize-entity}

*Overrides this function of [Entity](/advanced/entities/runtime/entity).*

### void summon_timer_timeout() {#method-summon-timer-timeout}

*No description yet.*

### void summon_finished() {#method-summon-finished}

*No description yet.*

### void entity_death( announce: bool = true ) {#method-entity-death}

`announce` false puts a saved corpse back (loading): the entity becomes a corpse but nobody is told it died *(from [Entity](/advanced/entities/runtime/entity))*

