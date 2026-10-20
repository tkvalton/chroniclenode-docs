<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatEvent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

One record of something that happened in a fight: a hit, a heal, an effect gained, a death, a cast. It is **plain data**: it holds ids and numbers (and the names as they were), never objects, so it converts to a dictionary and back. The CombatEventRecorder makes events, the combat session keeps them, and the message manager shows them as lines.

## Variables

| | | |
|---|---|---|
| `int` | [sequence](#var-sequence) | `0` |
| `float` | [game_hours](#var-game-hours) | `0.0` |
| `Kind` | [kind](#var-kind) | `Kind.DAMAGE` |
| `int` | [actor_id](#var-actor-id) | `0` |
| `String` | [actor_name](#var-actor-name) | `""` |
| `int` | [target_id](#var-target-id) | `0` |
| `String` | [target_name](#var-target-name) | `""` |
| `int` | [ability_id](#var-ability-id) | `0` |
| `String` | [ability_name](#var-ability-name) | `""` |
| `int` | [amount](#var-amount) | `0` |
| `int` | [damage_type](#var-damage-type) | `0` |
| `bool` | [crit](#var-crit) | `false` |
| `bool` | [slain](#var-slain) | `false` |
| `String` | [line](#var-line) | `""` |
| `int` | [detail_override](#var-detail-override) | `-1` |
| `PackedStringArray` | [channels](#var-channels) | `PackedStringArray()` |
| `Dictionary` | [details](#var-details) | `{}` |

## Methods

| | |
|---|---|
| `Detail` | [minimum_detail](#method-minimum-detail)() |
| `Dictionary` | [to_dict](#method-to-dict)() |
| `CombatEvent` | [from_dict](#method-from-dict)( `source: Dictionary` ) *static* |
| `String` | [color_of](#method-color-of)( `event_kind: Kind` ) *static* |
| `String` | [personalize](#method-personalize)( `text: String, character_name: String` ) *static* |

## Enumerations

### enum Kind {#enum-kind}

What happened

- **DAMAGE** = `0` - A hit that landed
- **HEALING** = `1` - A heal
- **EFFECT_GAINED** = `2` - A buff or debuff was gained
- **EFFECT_LOST** = `3` - A buff or debuff ended
- **DEATH** = `4` - Something died
- **CAST** = `5` - An ability was used
- **INTERRUPT** = `6` - A cast was interrupted
- **AVOID** = `7` - A hit was missed, dodged or parried, or the target was immune
- **RESOURCE** = `8` - (Detailed) a pool changed
- **COOLDOWN** = `9` - (Detailed) a cooldown started
- **TARGET_CHANGE** = `10` - (Detailed) something took another target
- **MOVEMENT** = `11` - (Debug) an entity moved (sampled)
- **AI_DECISION** = `12` - (Debug) the behavior of an NPC chose something
- **ABILITY_DENIED** = `13` - (Detailed) an ability could not be used: on cooldown, no resource, out of range ...
- **EFFECT_UPDATED** = `14` - (Detailed) a buff or debuff was refreshed or its stacks changed

### enum Detail {#enum-detail}

How much of the fight is recorded (GameplayConfig.combat_log_detail)

- **OFF** = `0` - Nothing
- **CRITICAL** = `1` - Deaths, critical hits and kills
- **NORMAL** = `2` - Damage, healing, avoids, casts, effects gained and lost (the default)
- **DETAILED** = `3` - Everything about the effects, the pools, the cooldowns, the targets
- **DEBUG** = `4` - Movement and the decisions of the AI: for designing and debugging a fight

## Constants

- `Dictionary` **KIND_COLORS** = `{` - The colour of the lines of each kind (the chat box uses it for the combat channels)

## Variable descriptions

### int sequence = 0 {#var-sequence}

The number of the event in the order they happened

### float game_hours = 0.0 {#var-game-hours}

The game time it happened at (ChronoManager.total_game_hours)

### Kind kind = Kind.DAMAGE {#var-kind}

*No description yet.*

### int actor_id = 0 {#var-actor-id}

Who did it (the unique id of the entity; 0 when it has none or nobody did it)

### String actor_name = "" {#var-actor-name}

*No description yet.*

### int target_id = 0 {#var-target-id}

Who it happened to

### String target_name = "" {#var-target-name}

*No description yet.*

### int ability_id = 0 {#var-ability-id}

The ability or effect involved (the id of its definition) and its name

### String ability_name = "" {#var-ability-name}

*No description yet.*

### int amount = 0 {#var-amount}

How much (damage done, healing applied)

### int damage_type = 0 {#var-damage-type}

The id of the damage type (damage only)

### bool crit = false {#var-crit}

*No description yet.*

### bool slain = false {#var-slain}

The hit killed the target

### String line = "" {#var-line}

The line, in the third person ("Mira's [Slash] hit Wolf for 12"), made when the event was recorded

### int detail_override = -1 {#var-detail-override}

When set (a Detail value), the least detail that records this event, whatever its kind says: the same kind is Detailed for the party and Debug for the others

### PackedStringArray channels = PackedStringArray() {#var-channels}

The chat channels the event was shown in (combat_personal, combat_party, combat_friendly, combat_hostile)

### Dictionary details =  {#var-details}

What else the kind has to say: "blocked", "absorbed", "overheal", "outcome", "avoid_kind" ...

## Method descriptions

### Detail minimum_detail() {#method-minimum-detail}

The least detail that records this kind of event. A critical hit or a kill counts as Critical, a plain hit as Normal

### Dictionary to_dict() {#method-to-dict}

The event as a dictionary (a save, a network, an export)

### CombatEvent from_dict( source: Dictionary ) {#method-from-dict}

An event from a dictionary

### String color_of( event_kind: Kind ) {#method-color-of}

The colour of the line of an event of this kind (html, no #)

### String personalize( text: String, character_name: String ) {#method-personalize}

The line from the point of view of a character: its name becomes "you" ("Your [Slash] hit Wolf for 12", "Wolf's [Bite] hit you for 7"). The names of the others stay

