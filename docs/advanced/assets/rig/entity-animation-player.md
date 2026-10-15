<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityAnimationPlayer

**Inherits:** [AnimationPlayer](https://docs.godotengine.org/en/stable/classes/class_animationplayer.html)

EntityAnimationPlayer A specialized AnimationPlayer for game entities with robust animation state management.

## Variables

| | | |
|---|---|---|
| `bool` | [animations_blocked](#var-animations-blocked) | `false` |
| `bool` | [animations_death_blocked](#var-animations-death-blocked) | `false` |
| `String` | [current_stance_tag](#var-current-stance-tag) | `""  # Animation name from WeaponClassDefinition.stance_tag` |
| `bool` | [current_combat_mode](#var-current-combat-mode) | `false` |
| `Dictionary` | [fallback_chains](#var-fallback-chains) | `{ ... }` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [setup_animations](#method-setup-animations)( `system_hub: GameHost.SystemHub, entity_data: EntityDefinition` ) |
| `void` | [setup_animation_tree](#method-setup-animation-tree)( `tree_resource_path: String = DEFAULT_TREE_PATH` ) |
| `void` | [play_movement](#method-play-movement)( `movement_data: MovementData` ) |
| `void` | [play_turning_animation](#method-play-turning-animation)( `turn_direction: float, is_crouched: bool = false, is_swimming: bool = false` ) |
| `void` | [set_turn_direction](#method-set-turn-direction)( `turn_direction: float` ) |
| `void` | [stop_turning_animation](#method-stop-turning-animation)() |
| `void` | [play_casting_animation](#method-play-casting-animation)( `ability_selection: AnimationSelectionAbility, weapon_type: String = ""` ) |
| `void` | [play_ability_animation](#method-play-ability-animation)( `ability_selection: AnimationSelectionAbility, weapon_type: String = ""` ) |
| `void` | [stop_casting_animation](#method-stop-casting-animation)() |
| `void` | [stop_ability_animation](#method-stop-ability-animation)() |
| `void` | [cancel_casting_animation](#method-cancel-casting-animation)() |
| `void` | [stop_upper_body_animation](#method-stop-upper-body-animation)() |
| `void` | [play_social_animation](#method-play-social-animation)( `social_selection: AnimationSelectionSocial, context: String = ""` ) |
| `void` | [play_jump_animation](#method-play-jump-animation)() |
| `void` | [play_falling_animation](#method-play-falling-animation)() |
| `void` | [play_land_animation](#method-play-land-animation)( `impact_level: int` ) |
| `void` | [play_combat_animation](#method-play-combat-animation)( `animation_type: String, weapon_type: String = ""` ) |
| `bool` | [play_status_effect_start_animation](#method-play-status-effect-start-animation)( `status_name: String, speed: float = 1.0` ) |
| `bool` | [play_status_effect_loop_animation](#method-play-status-effect-loop-animation)( `status_name: String, speed: float = 1.0` ) |
| `bool` | [play_status_effect_end_animation](#method-play-status-effect-end-animation)( `status_name: String, speed: float = 1.0` ) |
| `void` | [stop_status_effect_animation](#method-stop-status-effect-animation)() |
| `bool` | [has_status_effect_animation](#method-has-status-effect-animation)( `status_name: String, phase: String` ) |
| `float` | [get_status_effect_animation_duration](#method-get-status-effect-animation-duration)( `status_name: String, phase: String` ) |
| `void` | [play_block_animation](#method-play-block-animation)( `weapon_type: String = ""` ) |
| `void` | [play_dodge_animation](#method-play-dodge-animation)( `weapon_type: String = ""` ) |
| `void` | [play_hit_animation](#method-play-hit-animation)( `weapon_type: String = ""` ) |
| `void` | [play_equipment_animation](#method-play-equipment-animation)( `action: String, weapon_type: String` ) |
| `void` | [play_sheathe_animation](#method-play-sheathe-animation)( `weapon_type: String` ) |
| `void` | [play_unsheathe_animation](#method-play-unsheathe-animation)( `weapon_type: String` ) |
| `void` | [play_death_animation](#method-play-death-animation)() |
| `void` | [reset_from_death](#method-reset-from-death)() |
| `void` | [set_stance_tag](#method-set-stance-tag)( `stance_tag: String` ) |
| `void` | [enter_combat_mode](#method-enter-combat-mode)() |
| `void` | [exit_combat_mode](#method-exit-combat-mode)() |
| `void` | [play_interaction_animation](#method-play-interaction-animation)( `interaction_type: String` ) |
| `void` | [cleanup_timers](#method-cleanup-timers)() |
| `bool` | [is_animation_almost_complete](#method-is-animation-almost-complete)() |

## Signals

### animation_motion_sound_trigger( message: String ) {#signal-animation-motion-sound-trigger}

Signal emitted when an animation should trigger a sound effect

## Enumerations

### enum AnimationName {#enum-animationname}

Every animation slot the player knows (idle, walk, run, turn, jump, fall, swim, combat, death ...). Each slot is mapped to a real animation of the model by the animation map.

- **NONE** = `0`
- **IDLE_STANDING** = `1`
- **IDLE_CROUCH** = `2`
- **IDLE_SWIM** = `3`
- **WALK_F** = `4`
- **WALK_B** = `5`
- **WALK_L** = `6`
- **WALK_R** = `7`
- **WALK_FL** = `8`
- **WALK_FR** = `9`
- **WALK_BL** = `10`
- **WALK_BR** = `11`
- **CROUCH_WALK_F** = `12`
- **CROUCH_WALK_B** = `13`
- **CROUCH_WALK_L** = `14`
- **CROUCH_WALK_R** = `15`
- **CROUCH_WALK_FL** = `16`
- **CROUCH_WALK_FR** = `17`
- **CROUCH_WALK_BL** = `18`
- **CROUCH_WALK_BR** = `19`
- **RUN_F** = `20`
- **RUN_B** = `21`
- **RUN_L** = `22`
- **RUN_R** = `23`
- **RUN_FL** = `24`
- **RUN_FR** = `25`
- **RUN_BL** = `26`
- **RUN_BR** = `27`
- **SPRINT_F** = `28`
- **SPRINT_B** = `29`
- **SPRINT_L** = `30`
- **SPRINT_R** = `31`
- **SPRINT_FL** = `32`
- **SPRINT_FR** = `33`
- **SPRINT_BL** = `34`
- **SPRINT_BR** = `35`
- **STRAFE_L** = `36`
- **STRAFE_R** = `37`
- **STRAFE_LF** = `38`
- **STRAFE_LB** = `39`
- **STRAFE_RF** = `40`
- **STRAFE_RB** = `41`
- **TURN_STANDING_90_L** = `42`
- **TURN_STANDING_90_R** = `43`
- **TURN_STANDING_180_L** = `44`
- **TURN_STANDING_180_R** = `45`
- **TURN_CROUCH_90_L** = `46`
- **TURN_CROUCH_90_R** = `47`
- **TURN_CROUCH_180_L** = `48`
- **TURN_CROUCH_180_R** = `49`
- **JUMP_IDLE** = `50`
- **JUMP_RUNNING** = `51`
- **FALL_START** = `52`
- **FALL_LOOP** = `53`
- **LAND_SOFT** = `54`
- **LAND_MEDIUM** = `55`
- **LAND_HARD** = `56`
- **SWIM_F** = `57`
- **SWIM_B** = `58`
- **SWIM_L** = `59`
- **SWIM_R** = `60`
- **SWIM_FL** = `61`
- **SWIM_FR** = `62`
- **SWIM_BL** = `63`
- **SWIM_BR** = `64`
- **COMBAT_IDLE_UNARMED** = `65`
- **COMBAT_IDLE_SHIELD** = `66`
- **COMBAT_IDLE_DUAL_WIELD** = `67`
- **COMBAT_IDLE_OFF_HAND** = `68`
- **COMBAT_IDLE_ONE_HAND** = `69`
- **COMBAT_IDLE_TWO_HAND** = `70`
- **COMBAT_IDLE_RANGED_WEAPON** = `71`
- **COMBAT_IDLE_BOW** = `72`
- **COMBAT_IDLE_POLEARM** = `73`
- **BLOCK_UNARMED** = `74`
- **BLOCK_SHIELD** = `75`
- **BLOCK_DUAL_WIELD** = `76`
- **BLOCK_OFF_HAND** = `77`
- **BLOCK_ONE_HAND** = `78`
- **BLOCK_TWO_HAND** = `79`
- **BLOCK_RANGED_WEAPON** = `80`
- **BLOCK_BOW** = `81`
- **BLOCK_POLEARM** = `82`
- **BLOCK_CASTING** = `83`
- **DODGE** = `84`
- **HIT** = `85`
- **SHEATHE_ONE_HAND** = `86`
- **SHEATHE_TWO_HAND** = `87`
- **SHEATHE_DUAL_WIELD** = `88`
- **SHEATHE_OFF_HAND** = `89`
- **SHEATHE_BOW** = `90`
- **SHEATHE_RANGED_WEAPON** = `91`
- **SHEATHE_POLEARM** = `92`
- **UNSHEATHE_ONE_HAND** = `93`
- **UNSHEATHE_TWO_HAND** = `94`
- **UNSHEATHE_DUAL_WIELD** = `95`
- **UNSHEATHE_OFF_HAND** = `96`
- **UNSHEATHE_BOW** = `97`
- **UNSHEATHE_RANGED_WEAPON** = `98`
- **UNSHEATHE_POLEARM** = `99`
- **DEATH_DEFAULT** = `100`
- **DEATH_SWIM** = `101`
- **LOOT** = `102`
- **SHORT_INTERACT** = `103`
- **LOOP_INTERACT** = `104`
- **PUSH** = `105`
- **PULL** = `106`
- **CLIMB** = `107`

## Constants

- `String` **DEFAULT_TREE_PATH** = `"res://addons/chroniclenode/runtime_classes/entity/components/rig/animation_m...` - Constants
- `float` **MOVEMENT_BLEND_DURATION** = `0.5` - How many seconds a movement animation takes to blend into the next.
- `float` **BLEND_FADE_IN_TIME** = `0.5` - How many seconds an action animation takes to fade in.
- `float` **BLEND_FADE_OUT_TIME** = `0.5` - How many seconds an action animation takes to fade out.
- `String` **MOVING_STATE_MACHINE** = `"MovingStateMachine"` - Animation Tree Node Names
- `String` **MOVING_STATE_TIME_SCALE** = `"MovingStateTimeScale"` - The name of the speed parameter of the moving state in the animation tree.
- `String` **TURNING_BLEND** = `"TurningBlend"` - The name of the blend parameter of the turn in the animation tree.
- `String` **TURN_BLEND_SPACE** = `"TurnBlendSpace"` - The name of the blend space of the turn in the animation tree.
- `String` **FULL_BODY_CASTING** = `"FullBodyCasting"` - The name of the full body casting node in the animation tree.
- `String` **FULL_BODY_ACTION** = `"FullBodyAction"` - The name of the full body action node in the animation tree.
- `String` **FULL_BODY_ONE_SHOT** = `"FullBodyOneshot"` - The name of the full body one shot node in the animation tree.
- `String` **FULL_BODY_TIME_SCALE** = `"FullBodyTimeScale"` - The name of the full body speed parameter in the animation tree.
- `String` **FULL_BODY_BLEND** = `"FullBodyBlend"` - The name of the full body blend parameter in the animation tree.
- `String` **UPPER_BODY_CASTING** = `"UpperBodyCasting"` - The name of the upper body casting node in the animation tree.
- `String` **UPPER_BODY_ACTION** = `"UpperBodyAction"` - The name of the upper body action node in the animation tree.
- `String` **UPPER_BODY_ONE_SHOT** = `"UpperBodyOneshot"` - The name of the upper body one shot node in the animation tree.
- `String` **UPPER_BODY_TIME_SCALE** = `"UpperBodyTimeScale"` - The name of the upper body speed parameter in the animation tree.
- `String` **UPPER_BODY_BLEND** = `"UpperBodyBlend"` - The name of the upper body blend parameter in the animation tree.
- `String` **STANDING_LOCOMOTION** = `"StandingLocomotion"` - The name of the standing locomotion blend space in the animation tree.
- `String` **SWIMMING_LOCOMOTION** = `"SwimmingLocomotion"` - The name of the swimming locomotion blend space in the animation tree.
- `String` **CROUCHING_LOCOMOTION** = `"CrouchingLocomotion"` - The name of the crouching locomotion blend space in the animation tree.
- `String` **DEATH_ANIMATION** = `"DeathAnimation"` - The name of the death animation node in the animation tree.
- `String` **DEATH_BLEND** = `"DeathBlend"` - The name of the death blend parameter in the animation tree.
- `String` **JUMP** = `"Jump"` - Movement State Machine States
- `String` **FALL_START** = `"FallStart"` - The name of the fall start node in the animation tree.
- `String` **FALL_LOOP** = `"FallLoop"` - The name of the fall loop node in the animation tree.
- `String` **LAND_SOFT** = `"LandSoft"` - The name of the soft landing node in the animation tree.
- `String` **LAND_MEDIUM** = `"LandMedium"` - The name of the medium landing node in the animation tree.
- `String` **LAND_HARD** = `"LandHard"` - The name of the hard landing node in the animation tree.
- `String` **DEFAULT_UNARMED_STANCE** = `"combat_idle"` - Default stance animation when unarmed
- `Array[float]` **TURN_POSITIONS** = `[-1.0, -0.5, 0.0, 0.5, 1.0]` - Turn blend space layout, by blend POSITION (not point index - the order of points inside the tree resource is not guaranteed, and it did not match the order assumed here before):   -1.0 = turn 180 left, -0.5 = turn 90 left, 0.0 = idle (center), 0.5 = turn 90 right, 1.0 = turn 180 right

## Variable descriptions

### bool animations_blocked = false {#var-animations-blocked}

State Management

### bool animations_death_blocked = false {#var-animations-death-blocked}

True once the entity died: no animation but the death one plays.

### String current_stance_tag = ""  # Animation name from WeaponClassDefinition.stance_tag {#var-current-stance-tag}

The stance of the weapon in hand (the stance tag of its weapon class), which picks the animations.

### bool current_combat_mode = false {#var-current-combat-mode}

True while the entity is in its combat stance.

### Dictionary fallback_chains {#var-fallback-chains}

Smart fallback mapping for missing animations

### ChronoManager chrono_manager {#var-chrono-manager}

ChronoManager ref

## Method descriptions

### void setup_animations( system_hub: GameHost.SystemHub, entity_data: EntityDefinition ) {#method-setup-animations}

Builds the player for an entity: reads the animation map of its definition.

### void setup_animation_tree( tree_resource_path: String = DEFAULT_TREE_PATH ) {#method-setup-animation-tree}

Sets up the animation tree from a tree resource (the default one if none is given). Needs setup_animations first.

### void play_movement( movement_data: MovementData ) {#method-play-movement}

Plays the movement animation for the movement data (direction, speed, stance).

### void play_turning_animation( turn_direction: float, is_crouched: bool = false, is_swimming: bool = false ) {#method-play-turning-animation}

Plays a turn in place, to the left or right (a negative direction is left).

### void set_turn_direction( turn_direction: float ) {#method-set-turn-direction}

Updates only the turn direction of a turn that is already playing. Does not touch the clips, the loop setup or the fade, so it is safe to call while turning.

### void stop_turning_animation() {#method-stop-turning-animation}

Stops the turn animation.

### void play_casting_animation( ability_selection: AnimationSelectionAbility, weapon_type: String = "" ) {#method-play-casting-animation}

Plays the casting animation of an ability (for the weapon type in hand).

### void play_ability_animation( ability_selection: AnimationSelectionAbility, weapon_type: String = "" ) {#method-play-ability-animation}

Plays the animation of an ability (for the weapon type in hand).

### void stop_casting_animation() {#method-stop-casting-animation}

Ends the casting animation.

### void stop_ability_animation() {#method-stop-ability-animation}

Ends the ability animation.

### void cancel_casting_animation() {#method-cancel-casting-animation}

Cuts the casting animation short (the cast was interrupted).

### void stop_upper_body_animation() {#method-stop-upper-body-animation}

Stops what the upper body plays.

### void play_social_animation( social_selection: AnimationSelectionSocial, context: String = "" ) {#method-play-social-animation}

Play a social animation using AnimationSelectionSocial

### void play_jump_animation() {#method-play-jump-animation}

Plays the jump.

### void play_falling_animation() {#method-play-falling-animation}

Plays the fall.

### void play_land_animation( impact_level: int ) {#method-play-land-animation}

Plays the landing, softer or harder by the impact level.

### void play_combat_animation( animation_type: String, weapon_type: String = "" ) {#method-play-combat-animation}

Plays a combat animation by its type (attack, hit, dodge ...) for the weapon type in hand.

### bool play_status_effect_start_animation( status_name: String, speed: float = 1.0 ) {#method-play-status-effect-start-animation}

Play status effect start animation using AnimationTree

### bool play_status_effect_loop_animation( status_name: String, speed: float = 1.0 ) {#method-play-status-effect-loop-animation}

Play status effect loop animation (continuous until effect ends)

### bool play_status_effect_end_animation( status_name: String, speed: float = 1.0 ) {#method-play-status-effect-end-animation}

Play status effect end animation

### void stop_status_effect_animation() {#method-stop-status-effect-animation}

Stop status effect animations and return to normal state

### bool has_status_effect_animation( status_name: String, phase: String ) {#method-has-status-effect-animation}

Check if a status effect animation phase exists

### float get_status_effect_animation_duration( status_name: String, phase: String ) {#method-get-status-effect-animation-duration}

Get the duration of a status effect animation phase

### void play_block_animation( weapon_type: String = "" ) {#method-play-block-animation}

Simple wrapper functions for backwards compatibility

### void play_dodge_animation( weapon_type: String = "" ) {#method-play-dodge-animation}

Plays the dodge animation.

### void play_hit_animation( weapon_type: String = "" ) {#method-play-hit-animation}

Plays the animation of being hit.

### void play_equipment_animation( action: String, weapon_type: String ) {#method-play-equipment-animation}

For sheathe/unsheathe (simpler since they're single animations, not arrays)

### void play_sheathe_animation( weapon_type: String ) {#method-play-sheathe-animation}

Plays putting the weapon away.

### void play_unsheathe_animation( weapon_type: String ) {#method-play-unsheathe-animation}

Plays drawing the weapon.

### void play_death_animation() {#method-play-death-animation}

Plays the death animation and blocks the others.

### void reset_from_death() {#method-reset-from-death}

Lets the animations play again after a resurrection.

### void set_stance_tag( stance_tag: String ) {#method-set-stance-tag}

Set the combat stance animation tag from WeaponClassDefinition.stance_tag Called by Entity when equipment changes

### void enter_combat_mode() {#method-enter-combat-mode}

Switches the idle and movement animations to the combat ones.

### void exit_combat_mode() {#method-exit-combat-mode}

Switches back to the normal idle and movement animations.

### void play_interaction_animation( interaction_type: String ) {#method-play-interaction-animation}

Plays the animation of an interaction (open, use, pick up ...).

### void cleanup_timers() {#method-cleanup-timers}

Stops the tweens and timers of the player.

### bool is_animation_almost_complete() {#method-is-animation-almost-complete}

Is the animation playing now almost at its end?

