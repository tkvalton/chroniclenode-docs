<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractableDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Core data definition for interactable objects. This is the "NPCDefinition" equivalent for interactables.

## Properties

| | | |
|---|---|---|
| `PackedScene :` | [model_scene](#prop-model-scene) |  |
| `Array[String]` | [available_animations](#prop-available-animations) | `[]` |
| `Vector3` | [model_scale](#prop-model-scale) | `Vector3.ONE` |
| `bool` | [object_targetable_directly](#prop-object-targetable-directly) | `false` |
| `bool` | [object_targetable_by_aoe](#prop-object-targetable-by-aoe) | `false` |
| `bool` | [object_has_stats](#prop-object-has-stats) | `false :` |
| `StatsData` | [stats_data](#prop-stats-data) |  |
| `float` | [damaged_threshold](#prop-damaged-threshold) | `0.7` |
| `int` | [locked_by_item_id](#prop-locked-by-item-id) | `-1` |
| `bool` | [consume_key_on_unlock](#prop-consume-key-on-unlock) | `false` |
| `Array[int]` | [ui_tags](#prop-ui-tags) | `[]` |
| `float` | [interaction_cooldown_duration](#prop-interaction-cooldown-duration) | `0.5` |
| `Array[Requirement]` | [use_requirements](#prop-use-requirements) | `[]` |
| `String` | [use_requirement_message](#prop-use-requirement-message) | `"":` |
| `bool` | [hide_prompt_until_requirements_met](#prop-hide-prompt-until-requirements-met) | `false` |
| `float` | [use_time](#prop-use-time) | `0.0` |
| `String` | [use_time_label](#prop-use-time-label) | `"":` |
| `bool` | [interrupt_on_move](#prop-interrupt-on-move) | `true` |
| `bool` | [interrupt_on_damage](#prop-interrupt-on-damage) | `true` |
| `AnimationSelectionSocial` | [user_animation](#prop-user-animation) |  |
| `String` | [object_use_animation](#prop-object-use-animation) | `""` |
| `Interaction` | [interaction](#prop-interaction) | `null` |
| `Array[LootRule]` | [loot_rules](#prop-loot-rules) | `[]` |
| `SFXSelection` | [interaction_sfx](#prop-interaction-sfx) |  |
| `SFXSelection` | [hit_sound](#prop-hit-sound) |  |
| `SFXSelection` | [damaged_sound](#prop-damaged-sound) |  |
| `SFXSelection` | [destroyed_sound](#prop-destroyed-sound) |  |
| `VFXSelection` | [destruction_vfx](#prop-destruction-vfx) |  |
| `int` | [template_id](#prop-template-id) | `0` |
| `TemplateBaseline` | [template_baseline](#prop-template-baseline) |  |
| `Array[int]` | [template_fixed_stats](#prop-template-fixed-stats) | `[]` |
| `bool` | [template](#prop-template) | `false` |

## Methods

| | |
|---|---|
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_display_name](#method-get-display-name)() |
| `bool` | [is_destructible](#method-is-destructible)() |
| `bool` | [is_targetable](#method-is-targetable)() |
| `bool` | [is_directly_targetable](#method-is-directly-targetable)() |
| `bool` | [is_aoe_targetable](#method-is-aoe-targetable)() |
| `bool` | [is_locked](#method-is-locked)() |
| `bool` | [has_animation](#method-has-animation)( `anim_name: String` ) |
| `Array[String]` | [get_available_animations](#method-get-available-animations)() |
| `void` | [set_targeting_config](#method-set-targeting-config)( `directly_targetable: bool, aoe_targetable: bool` ) |
| `void` | [make_fully_targetable](#method-make-fully-targetable)() |
| `void` | [make_aoe_targetable_only](#method-make-aoe-targetable-only)() |
| `void` | [make_non_targetable](#method-make-non-targetable)() |
| `bool` | [is_template](#method-is-template)() |

## Property descriptions

*Visuals &amp; Physics*

### PackedScene : model_scene {#prop-model-scene}

InteractableScene containing model, collision, and animations

### Array[String] available_animations = [] {#prop-available-animations}

Available animations (auto-populated from InteractableScene)

### Vector3 model_scale = Vector3.ONE {#prop-model-scale}

Scale multiplier applied to the instantiated scene

*Targeting*

### bool object_targetable_directly = false {#prop-object-targetable-directly}

Can this object be targeted directly by single-target abilities? Examples: Single-target damage spells, heals on destructible objects

### bool object_targetable_by_aoe = false {#prop-object-targetable-by-aoe}

Can this object be hit by area-of-effect abilities? Examples: Fireball explosions, cleave attacks hitting nearby objects

### bool object_has_stats = false : {#prop-object-has-stats}

Does this object have combat stats (health, defense, etc.)? AUTO-CALCULATED: True if either targeting flag is true When true, creates StatsComponent + EffectsComponent at runtime

*Combat Stats*

### StatsData stats_data {#prop-stats-data}

Stats configuration for objects with combat capabilities Only used if object_has_stats is true

### float damaged_threshold = 0.7 {#prop-damaged-threshold}

Damage threshold at which object becomes "damaged" (0.0-1.0)

*Lock System*

### int locked_by_item_id = -1 {#prop-locked-by-item-id}

If &gt; -1, this item ID is required to unlock this object

### bool consume_key_on_unlock = false {#prop-consume-key-on-unlock}

The key is used up when it unlocks the object (off: the key stays in the bag)

*Entity Tags*

### Array[int] ui_tags = [] {#prop-ui-tags}

The entity tags of this kind of object (UITagDefinition ids): labels with no effect on the object that the interface reads to show it differently (a nameplate, a map icon). A placed object can add tags and take some away (UniqueInteractableData)

*Interaction*

### float interaction_cooldown_duration = 0.5 {#prop-interaction-cooldown-duration}

Seconds an object waits after it was used before it can be used again (0 = no wait)

*Using it*

### Array[Requirement] use_requirements = [] {#prop-use-requirements}

What a user needs to use the object (a profession level, a tool, a quest). Empty = anyone. Works for every kind of interaction: a locked-by-skill chest, a gathering node

### String use_requirement_message = "": {#prop-use-requirement-message}

What the user is told when the requirements are not met. Empty = the reasons the requirements give

### bool hide_prompt_until_requirements_met = false {#prop-hide-prompt-until-requirements-met}

The "interact" prompt of the object is not shown to a user who does not meet the requirements (off: the prompt is shown and using the object tells the user why not)

### float use_time = 0.0 {#prop-use-time}

Seconds that using the object takes. 0 = at once. While it lasts the user's cast bar shows it, and the use is done when it ends

### String use_time_label = "": {#prop-use-time-label}

The text of the cast bar. Empty = "Using &lt;name of the object&gt;"

### bool interrupt_on_move = true {#prop-interrupt-on-move}

Moving cancels the use

### bool interrupt_on_damage = true {#prop-interrupt-on-damage}

Taking damage cancels the use

### AnimationSelectionSocial user_animation {#prop-user-animation}

The animation the user plays while the object is used (a social animation, from the "actions" category: kneel, mine, pick)

### String object_use_animation = "" {#prop-object-use-animation}

The animation the object plays when its use starts (one of the animations of its model)

*Behaviors*

### Interaction interaction = null {#prop-interaction}

The interaction of this object (what happens when it is used) Examples: ContainerInteraction, DoorInteraction, TrapInteraction An object has one interaction (several on one object is a possible future option)

*Loot*

### Array[LootRule] loot_rules = [] {#prop-loot-rules}

What this object hands out and when: each rule is a loot table with a trigger (when the object is set up, the first time it is opened, when it is destroyed) and a source for the item level of what drops (see LootRule). A destroyed object that has loot stays lootable, like a corpse. A placed object can replace the rules

*Audio*

### SFXSelection interaction_sfx {#prop-interaction-sfx}

Sound when object is interacted with (generic interaction)

### SFXSelection hit_sound {#prop-hit-sound}

Sound when object takes damage (if object_has_stats)

### SFXSelection damaged_sound {#prop-damaged-sound}

Sound when object becomes damaged (if object_has_stats)

### SFXSelection destroyed_sound {#prop-destroyed-sound}

Sound when object is destroyed (if object_has_stats)

*VFX*

### VFXSelection destruction_vfx {#prop-destruction-vfx}

VFX to play when destroyed (if object_has_stats)

*Template*

### int template_id = 0 {#prop-template-id}

The template this one follows (an id of the npc_template / interactable_template database type), 0 = none. An entity that follows a template has the changes of the template added when they are made (see EntityTemplates). Its growth is the growth of the template

### TemplateBaseline template_baseline {#prop-template-baseline}

What the template was when this entity last looked at it (the difference to the template now is what is added)

### Array[int] template_fixed_stats = [] {#prop-template-fixed-stats}

Stats whose base value does not follow the template (they have the value set here whatever the template does)

### bool template = false {#prop-template}

Is this a template (a definition that others follow)?

## Method descriptions

### bool is_valid() {#method-is-valid}

Validates that required configuration is present

### String get_display_name() {#method-get-display-name}

Get display name with ID prefix

### bool is_destructible() {#method-is-destructible}

Check if this object is destructible (has combat stats)

### bool is_targetable() {#method-is-targetable}

Check if this object can be targeted by abilities

### bool is_directly_targetable() {#method-is-directly-targetable}

Check if this object can be targeted by single-target abilities

### bool is_aoe_targetable() {#method-is-aoe-targetable}

Check if this object can be hit by AoE abilities

### bool is_locked() {#method-is-locked}

Check if this object is locked

### bool has_animation( anim_name: String ) {#method-has-animation}

Check if an animation is available

### Array[String] get_available_animations() {#method-get-available-animations}

Get all available animation names

### void set_targeting_config( directly_targetable: bool, aoe_targetable: bool ) {#method-set-targeting-config}

Set targeting configuration and auto-update stats flag

### void make_fully_targetable() {#method-make-fully-targetable}

Configure as fully targetable destructible

### void make_aoe_targetable_only() {#method-make-aoe-targetable-only}

Configure as AoE-only targetable (common for environmental objects)

### void make_non_targetable() {#method-make-non-targetable}

Configure as non-targetable (pure interaction objects)

### bool is_template() {#method-is-template}

Is this definition a template?

