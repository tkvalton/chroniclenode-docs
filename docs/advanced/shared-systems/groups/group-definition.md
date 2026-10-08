<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GroupDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A group is a tag that effects, abilities and items can be in (several at once). The group decides how its members interact:

## Description

A group is a tag that effects, abilities and items can be in (several at once). The group decides how its members interact:

- **Exclusive effects**: only `max_active` effects of the group can be active at the same time within the group's scope. A paladin's Seals

(one per paladin), Blessings (one per paladin on each target), Well Fed (one per target), Battle and Guardian Elixir (one each). An effect in several groups needs a free slot in each of them, so a Flask that is in both elixir groups replaces either elixir.

- **Shared cooldown**: using any ability or consumable of the group puts all the others of the group on cooldown (potions, trinkets).
- **Matching**: items and abilities can name a group instead of one id (any arrow, any reagent), and an effect that ends after N uses counts the abilities of a group.
- **Enchant slots**: with the scope *per item* the group is a slot on one item (permanent enchant, temporary coating).

See docs/systems/ability-mechanics-plan.md.

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `int` | [max_active](#prop-max-active) | `1` |
| `Scope` | [scope](#prop-scope) | `Scope.TARGET` |
| `WhenFull` | [when_full](#prop-when-full) | `WhenFull.REPLACE` |
| `bool` | [persists_through_death](#prop-persists-through-death) | `false` |
| `bool` | [shares_cooldown](#prop-shares-cooldown) | `false` |
| `float` | [shared_cooldown_duration](#prop-shared-cooldown-duration) | `0.0` |

## Methods

| | |
|---|---|
| `bool` | [is_exclusive](#method-is-exclusive)() |
| `String` | [get_scope_name](#method-get-scope-name)() |

## Enumerations

### enum Scope {#enum-scope}

- **TARGET** = `0` - one per target, whoever applied it (Well Fed, elixirs)
- **ORIGINATOR_ON_TARGET** = `1` - each source has its own on each target (a paladin's blessing on a friend: two paladins' blessings stack)
- **ORIGINATOR** = `2` - one per source, wherever it is (Seals; "at most 3 totems")
- **ITEM** = `3` - one per item (enchants)

### enum WhenFull {#enum-whenfull}

- **REPLACE** = `0` - the oldest member goes and the new one takes its place (default)
- **REFUSE** = `1` - the new one is rejected, the current ones stay

## Property descriptions

### Color color = Color.WHITE {#prop-color}

The tint of the group in the editor

*Exclusive Effects*

### int max_active = 1 {#prop-max-active}

How many effects of the group can be active at once within the scope (0 = no limit: the group is only a tag for effects)

### Scope scope = Scope.TARGET {#prop-scope}

What the limit of max_active is counted per: the target, each source on each target, each source, or each item

### WhenFull when_full = WhenFull.REPLACE {#prop-when-full}

What happens when a new member arrives and the group is full: the oldest member is replaced, or the new one is refused

### bool persists_through_death = false {#prop-persists-through-death}

Does an effect of this group stay on its target when the target dies? (Flasks do, most combat buffs do not)

*Shared Cooldown*

### bool shares_cooldown = false {#prop-shares-cooldown}

Does using a member put the other abilities and consumables of the group on cooldown?

### float shared_cooldown_duration = 0.0 {#prop-shared-cooldown-duration}

Length of the shared cooldown in seconds (0 = the cooldown of the member that was used)

## Method descriptions

### bool is_exclusive() {#method-is-exclusive}

*No description yet.*

### String get_scope_name() {#method-get-scope-name}

*No description yet.*

