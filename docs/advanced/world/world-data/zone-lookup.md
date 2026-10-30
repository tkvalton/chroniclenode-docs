<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ZoneLookup

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What is known about the zones from the database alone: who is whose parent, the chain of a zone, its full name. The parents are read from ZoneDefinition.parent_zone_id; a loop of parents (A inside B inside A) is cut where it closes, so a mistake in the data never hangs the game.

## Methods

| | |
|---|---|
| `ZoneDefinition` | [get_zone](#method-get-zone)( `zone_id: int` ) *static* |
| `Array[int]` | [get_chain](#method-get-chain)( `zone_id: int` ) *static* |
| `ZoneDefinition` | [get_look_owner](#method-get-look-owner)( `zone_id: int, kind: String` ) *static* |
| `int` | [get_look_id](#method-get-look-id)( `zone_id: int, kind: String` ) *static* |
| `bool` | [is_inside](#method-is-inside)( `zone_id: int, ancestor_id: int` ) *static* |
| `int` | [get_top](#method-get-top)( `zone_id: int` ) *static* |
| `String` | [get_full_name](#method-get-full-name)( `zone_id: int, separator: String = " > "` ) *static* |
| `Array[ZoneDefinition]` | [get_children](#method-get-children)( `zone_id: int, only_ids: Variant = null` ) *static* |
| `Array[Dictionary]` | [get_tree_list](#method-get-tree-list)( `only_ids: Variant = null` ) *static* |

## Constants

- `String` **LOOK_SKY** = `"sky"` - The two looks a zone can have
- `String` **LOOK_ENVIRONMENT** = `"environment"`
- `int` **MAX_DEPTH** = `16` - The longest chain of parents that is followed

## Method descriptions

### ZoneDefinition get_zone( zone_id: int ) {#method-get-zone}

*No description yet.*

### Array[int] get_chain( zone_id: int ) {#method-get-chain}

The zone, then its parent, then the parent of that, up to the top: [zone id, parent id, ...]. Empty for 0 or an unknown zone.

### ZoneDefinition get_look_owner( zone_id: int, kind: String ) {#method-get-look-owner}

The zone that gives the look of a place: the zone itself if it has a config of that kind, else its parent, up to the top. Null when none of them has one (the world's look shows). `kind` is LOOK_SKY or LOOK_ENVIRONMENT; the two kinds are looked for one by one.

### int get_look_id( zone_id: int, kind: String ) {#method-get-look-id}

The id of the config a place's look comes from (0 = the world's)

### bool is_inside( zone_id: int, ancestor_id: int ) {#method-is-inside}

Is `zone_id` the zone `ancestor_id` or a part of it (a sub-zone, or a sub-zone of a sub-zone)?

### int get_top( zone_id: int ) {#method-get-top}

The zone above this one that has no parent (the zone itself when it has none).

### String get_full_name( zone_id: int, separator: String = " &gt; " ) {#method-get-full-name}

The name of the zone with its parents: "Elderwood &gt; The Old Mill".

### Array[ZoneDefinition] get_children( zone_id: int, only_ids: Variant = null ) {#method-get-children}

The zones whose parent is this one (0 = the zones with no parent), sorted by name. `only_ids` (null = every zone) limits it to a list of zones, for example the zones of one world: a zone whose parent is not in the list counts as having none.

### Array[Dictionary] get_tree_list( only_ids: Variant = null ) {#method-get-tree-list}

Every zone (or the zones of `only_ids`) as a flat list in tree order (a zone, then its sub-zones indented one more level): [&#123;"id", "depth", "zone"&#125;]. A parent that does not exist counts as no parent.

