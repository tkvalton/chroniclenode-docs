<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatEventRecorder

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Builds the **combat events** of the game, once each, and sends them to the two places that want them: the **combat session** (the record of the fight) and the **message manager** (lines in the combat channels). It listens to the results the combat manager announces (damage, healing) and to the signals of the entities that are watched (effects gained and lost, deaths, casts, interruptions). How much it records is GameplayConfig.combat_log_detail; what happens to a fight's record when it ends is combat_log_keep.

## Description

Who sees a line: the channels are about **who** the line is about.

- Combat (Personal): the character the player controls is the actor or the target
- Combat (Party): a member of the party, or a pet of one, is the actor or the target (a personal line is also a party line)
- Combat (Friendly): the party's side of the fight: the party and the allies that fight beside it (a party line is also a friendly line)
- Combat (Hostile): an enemy that is in the same fight as a party member is the actor or the target

An entity that is in no fight with the party, and is not in the party, is not logged.

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `CombatManager` | [combat](#var-combat) |  |
| `Array[Dictionary]` | [finished_fights](#var-finished-fights) | `[]` |

## Methods

| | |
|---|---|
| `void` | [watch](#method-watch)( `entity: Entity` ) |
| `int` | [detail](#method-detail)() |
| `void` | [on_damage](#method-on-damage)( `result: DamageResult` ) |
| `void` | [on_healing](#method-on-healing)( `result: HealingResult` ) |
| `void` | [record_ai](#method-record-ai)( `entity: Entity, text: String` ) |
| `void` | [record](#method-record)( `event: CombatEvent, actor: Variant, target: Variant` ) |
| `PackedStringArray` | [channels_for](#method-channels-for)( `actor: Variant, target: Variant` ) |
| `String` | [side_of](#method-side-of)( `unit: Variant` ) |
| `void` | [session_ended](#method-session-ended)( `session: CombatSession, reason: String` ) |
| `String` | [export_fight](#method-export-fight)( `record: Dictionary, format: String = "json"` ) |
| `Dictionary` | [summarize](#method-summarize)( `session: CombatSession` ) |

## Constants

- `String` **PERSONAL** = `"combat_personal"`
- `String` **PARTY** = `"combat_party"`
- `String` **FRIENDLY** = `"combat_friendly"`
- `String` **HOSTILE** = `"combat_hostile"`

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

### CombatManager combat {#var-combat}

*No description yet.*

### Array[Dictionary] finished_fights = [] {#var-finished-fights}

The fights that ended and were kept (combat_log_keep): &#123;"id", "start", "duration", "reason", "summary", "events": [CombatEvent dictionaries]&#125;

## Method descriptions

### void watch( entity: Entity ) {#method-watch}

Starts listening to the signals of an entity (once)

### int detail() {#method-detail}

How much is recorded now

### void on_damage( result: DamageResult ) {#method-on-damage}

*No description yet.*

### void on_healing( result: HealingResult ) {#method-on-healing}

*No description yet.*

### void record_ai( entity: Entity, text: String ) {#method-record-ai}

What the AI of an entity decided (a behavior task started, a combat action chosen). Debug only

### void record( event: CombatEvent, actor: Variant, target: Variant ) {#method-record}

Decides who sees the event, keeps it in the record of the fight and posts it in the chat

### PackedStringArray channels_for( actor: Variant, target: Variant ) {#method-channels-for}

The channels an event belongs to, the first the most specific. Empty = nobody of the party's fight is in it

### String side_of( unit: Variant ) {#method-side-of}

Whose side an entity is on in the fight of the party: "party" (a member or a pet of one), "friendly" (an ally in a fight with the party), "hostile" (an enemy in a fight with the party) or "" (not in it)

### void session_ended( session: CombatSession, reason: String ) {#method-session-ended}

A fight ended: a summary line in the chat, and the record kept or thrown away (GameplayConfig.combat_log_keep)

### String export_fight( record: Dictionary, format: String = "json" ) {#method-export-fight}

Writes a kept fight to a file in the user folder (user://combat_logs/). `format` is "json" (the whole record) or "csv" (one row for each event, for a spreadsheet). Returns the path, "" when it failed

### Dictionary summarize( session: CombatSession ) {#method-summarize}

The totals of a fight: what the party's side dealt, took and healed, and the number of events

