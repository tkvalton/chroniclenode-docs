<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ThreatEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Changes threat: adds, reduces or clears the threat an entity has on hostile NPCs, puts it at the top of their lists, or (REDIRECT, with a duration) makes the threat an entity generates go to someone else for a while: misdirection. For ADD / REDUCE / CLEAR / SET_TO_TOP choose whose threat changes (the originator or the target) and on which enemies (the target NPC, or every enemy fighting that entity). For REDIRECT the entity the effect is on (set "applies to" to the originator for a misdirection the caster puts on himself) gives its threat to the other one of the originator and the target. See docs/systems/ability-mechanics-plan.md, section 6.

## Properties

| | | |
|---|---|---|
| `Mode` | [mode](#prop-mode) | `Mode.ADD` |
| `float` | [value](#prop-value) | `100.0` |
| `Whose` | [whose_threat](#prop-whose-threat) | `Whose.ORIGINATOR` |
| `OnEnemies` | [on_enemies](#prop-on-enemies) | `OnEnemies.ALL_ENGAGED` |
| `int` | [redirect_uses](#prop-redirect-uses) | `0` |
| `float` | [redirect_percent](#prop-redirect-percent) | `100.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Enumerations

### enum Mode {#enum-mode}

- **ADD** = `0` - adds `value` threat
- **REDUCE** = `1` - takes `value` threat away (never below 0)
- **CLEAR** = `2` - takes all of the threat away (a vanish, a feign)
- **SET_TO_TOP** = `3` - puts the threat `value` above the highest one on that NPC
- **REDIRECT** = `4` - the threat the affected entity generates goes to the other party while the effect lasts (needs a duration)

### enum Whose {#enum-whose}

- **ORIGINATOR** = `0`
- **TARGET** = `1`

### enum OnEnemies {#enum-onenemies}

- **TARGET_NPC** = `0`
- **ALL_ENGAGED** = `1`

## Property descriptions

*Threat*

### Mode mode = Mode.ADD {#prop-mode}

*No description yet.*

### float value = 100.0 {#prop-value}

The amount (ADD, REDUCE) or the margin above the highest threat (SET_TO_TOP)

### Whose whose_threat = Whose.ORIGINATOR {#prop-whose-threat}

Whose threat changes (not for REDIRECT)

### OnEnemies on_enemies = OnEnemies.ALL_ENGAGED {#prop-on-enemies}

On which NPCs: the target of the effect, or every enemy fighting the entity whose threat changes (not for REDIRECT)

### int redirect_uses = 0 {#prop-redirect-uses}

REDIRECT: how many threat-making actions are redirected (0 = all of them while the effect lasts)

### float redirect_percent = 100.0 {#prop-redirect-percent}

REDIRECT: the share of the threat that goes to the other party, in percent (100 = all of it, a classic misdirection; 10 = a tenth of it goes, the rest stays)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

### bool is_one_off_application() {#method-is-one-off-application}

Changing threat happens once; a redirect is a lasting state

