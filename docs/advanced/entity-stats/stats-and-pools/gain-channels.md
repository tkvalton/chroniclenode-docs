<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GainChannels

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The names of the gain channels the toolkit asks about (`StatsComponent.modify_gain(channel, amount)`), so a stat can change what an entity gets without any system knowing which stat that is. A dev can use any other name from their own code. See docs/systems/entity-stats.md, section 24.2.

## Constants

- `String` **EXPERIENCE** = `"experience"` - Experience points the player receives
- `String` **CURRENCY** = `"currency"` - Currency (gold) received from rewards: gold find
- `String` **LOOT_QUANTITY** = `"loot_quantity"` - The quantity of every item stack of loot a killer gets (a fraction is a chance of one more)
- `String` **LOOT_RARITY** = `"loot_rarity"` - Magic find: a percentage that raises the weight of the rarer-than-average entries of a loot table. Use "add" effects
- `String` **THREAT** = `"threat"` - The threat a hit generates
- `String` **RESOURCE** = `"resource"` - The resource an ability gains for its user (Rage, Combo ...)
- `String` **STATUS_DURATION** = `"status_duration"` - The duration of a status effect put on this entity (tenacity: a percentage decrease shortens stuns)

