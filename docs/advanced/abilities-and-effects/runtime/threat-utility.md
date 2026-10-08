<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ThreatUtility

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Threat in one place: who gets threat on whom, from damage, from healing and from effects, with the redirects (misdirection) applied. An NPC keeps its threat in its threat table (ThreatTableComponent). Only NPCs have one; threat on anything else is ignored. See docs/systems/ability-mechanics-plan.md, section 6.

## Methods

| | |
|---|---|
| `void` | [add_threat](#method-add-threat)( `source: Variant, victim: Variant, amount: float` ) *static* |
| `void` | [add_threat_to_many](#method-add-threat-to-many)( `source: Variant, victims: Array, amount: float` ) *static* |
| `Array[NPC]` | [get_engaged_enemies](#method-get-engaged-enemies)( `entity: Entity, reference: Entity, combat_manager: CombatManager` ) *static* |
| `void` | [apply_heal_threat](#method-apply-heal-threat)( `result: HealingResult, combat_manager: CombatManager` ) *static* |

## Method descriptions

### void add_threat( source: Variant, victim: Variant, amount: float ) {#method-add-threat}

Threat of `source` on one NPC. The redirect of the source (a misdirection) is applied

### void add_threat_to_many( source: Variant, victims: Array, amount: float ) {#method-add-threat-to-many}

The same amount of threat on several NPCs: one action of the source (a misdirection that lasts N actions counts it once)

### Array[NPC] get_engaged_enemies( entity: Entity, reference: Entity, combat_manager: CombatManager ) {#method-get-engaged-enemies}

The hostile NPCs with a threat table that are fighting with this entity (its encounter), hostile to `reference`

### void apply_heal_threat( result: HealingResult, combat_manager: CombatManager ) {#method-apply-heal-threat}

Healing makes threat on the enemies fighting the healed entity (when the healer is on its side): the effective healing times the project's multiplier (GameplayConfig, Combat, Threat) or the heal effect's own, split between those enemies

