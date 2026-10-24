<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ZoneTracker

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Watches which **zone** the party is in and tells the game when it changes. It looks at the player in control a few times a second (not every frame: a zone only changes when the party walks into a new 4 m cell or out of a volume), works out the zone at that place (see `resolve_at`), and when it is another zone:

## Description

- `zone_left` for every zone the party is no longer in (the sub-zone first), `zone_entered` for every zone it is newly in (the zone first, then its sub-zone), so an event for the zone *Elderwood* fires

when the party walks into its sub-zone *The Old Mill* from outside, and not when it walks between the two;

- `banner_requested` with the name for the screen, unless the zone has no banner or the party was in it a moment ago (walking back across a border does not show the banner again).

Which zone is a place in: the zone volumes that contain it (highest priority, then the smallest), else the zone painted on the terrain, else the default zone of the world (WorldScene.default_zone_id), else none. The WorldContainer has one (`world_container.zone_tracker`). Event triggers, the condition and the text tokens ask it.

## Variables

| | | |
|---|---|---|
| `int` | [current_zone_id](#var-current-zone-id) | `0` |
| `Array[int]` | [current_chain](#var-current-chain) | `[]` |

## Methods

| | |
|---|---|
| `bool` | [is_in_zone](#method-is-in-zone)( `zone_id: int` ) |
| `int` | [get_top_zone_id](#method-get-top-zone-id)() |
| `void` | [reset](#method-reset)() |
| `void` | [update_at](#method-update-at)( `position: Vector3` ) |
| `void` | [set_zone](#method-set-zone)( `zone_id: int` ) |
| `int` | [resolve_at](#method-resolve-at)( `tree: SceneTree, position: Vector3, default_zone_id: int = 0` ) *static* |

## Signals

### zone_entered( zone_id: int ) {#signal-zone-entered}

The party is newly in a zone (also a parent zone the party walked into by walking into its sub-zone).

### zone_left( zone_id: int ) {#signal-zone-left}

The party is no longer in a zone.

### zone_changed( old_zone_id: int, new_zone_id: int ) {#signal-zone-changed}

The innermost zone changed: the zone it was and the zone it is (0 = none).

### banner_requested( title: String, subtitle: String, zone_id: int ) {#signal-banner-requested}

The banner of a zone is to be shown: the big line, the small line under it, and the zone it is for.

## Constants

- `float` **CHECK_INTERVAL** = `0.2` - Seconds between two looks at where the party is.
- `int` **BANNER_COOLDOWN_MSEC** = `30000` - The banner of a zone is not shown again when the party was in the zone less than this long ago (milliseconds).

## Variable descriptions

### int current_zone_id = 0 {#var-current-zone-id}

The innermost zone the party is in (0 = none).

### Array[int] current_chain = [] {#var-current-chain}

The zone, its parent, the parent of that ...: every zone the party is in.

## Method descriptions

### bool is_in_zone( zone_id: int ) {#method-is-in-zone}

Is the party in this zone (the zone itself or a sub-zone of it)?

### int get_top_zone_id() {#method-get-top-zone-id}

The top zone of the party's zones (the zone with no parent): "Elderwood" in the Old Mill. 0 when in none.

### void reset() {#method-reset}

Forgets where the party was (the world changed): the next look fires `zone_entered` for the zone the party is in.

### void update_at( position: Vector3 ) {#method-update-at}

Looks at a place: works out its zone and, when it is another zone than before, tells the game. (The tracker calls it with the place of the player; a test calls it by hand.)

### void set_zone( zone_id: int ) {#method-set-zone}

Puts the party in a zone (what `update_at` does with the zone of a place).

### int resolve_at( tree: SceneTree, position: Vector3, default_zone_id: int = 0 ) {#method-resolve-at}

The zone at a place of the world: the zone volumes that contain it (highest priority, then the smallest), else the zone painted on the terrain, else `default_zone_id`, else 0.

