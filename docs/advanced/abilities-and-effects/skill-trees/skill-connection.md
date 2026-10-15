<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillConnection

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Visual and logical links between skill nodes

## Properties

| | | |
|---|---|---|
| `int` | [from_node_id](#prop-from-node-id) |  |
| `int` | [to_node_id](#prop-to-node-id) |  |
| `ConnectionType` | [connection_type](#prop-connection-type) | `ConnectionType.PREREQUISITE` |
| `Color` | [line_color](#prop-line-color) | `Color.WHITE` |
| `float` | [line_width](#prop-line-width) | `2.0` |
| `bool` | [is_curved](#prop-is-curved) | `false` |
| `float` | [curve_strength](#prop-curve-strength) | `0.5` |

## Methods

| | |
|---|---|
| `bool` | [is_logical_connection](#method-is-logical-connection)() |
| `bool` | [is_prerequisite_connection](#method-is-prerequisite-connection)() |
| `bool` | [is_mutual_exclusion](#method-is-mutual-exclusion)() |
| `bool` | [is_blocking_connection](#method-is-blocking-connection)() |
| `bool` | [affects_node](#method-affects-node)( `id: int` ) |
| `int` | [get_other_node_id](#method-get-other-node-id)( `id: int` ) |
| `String` | [get_connection_direction](#method-get-connection-direction)() |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |

## Enumerations

### enum ConnectionType {#enum-connectiontype}

The options of connection type: prerequisite, visual only, mutual exclusive.

- **PREREQUISITE** = `0`
- **VISUAL_ONLY** = `1`

## Property descriptions

### int from_node_id {#prop-from-node-id}

========== CONNECTION PROPERTIES ==========

### int to_node_id {#prop-to-node-id}

The node the connection goes to.

### ConnectionType connection_type = ConnectionType.PREREQUISITE {#prop-connection-type}

What the connection means (a prerequisite, or a mutual exclusion).

### Color line_color = Color.WHITE {#prop-line-color}

========== VISUAL STYLING ==========

### float line_width = 2.0 {#prop-line-width}

The width of the line in the tree window.

### bool is_curved = false {#prop-is-curved}

True when the line is drawn as a curve.

### float curve_strength = 0.5 {#prop-curve-strength}

How much curve if is_curved is true

## Method descriptions

### bool is_logical_connection() {#method-is-logical-connection}

========== CONNECTION LOGIC ==========

### bool is_prerequisite_connection() {#method-is-prerequisite-connection}

Is the connection a prerequisite?

### bool is_mutual_exclusion() {#method-is-mutual-exclusion}

Is the connection a mutual exclusion (both ways)?

### bool is_blocking_connection() {#method-is-blocking-connection}

Does the connection keep two nodes from being taken together?

### bool affects_node( id: int ) {#method-affects-node}

Is this node one of the two ends of the connection?

### int get_other_node_id( id: int ) {#method-get-other-node-id}

The node at the other end of the connection (-1 when this node is not one of them).

### String get_connection_direction() {#method-get-connection-direction}

A text about the direction of the connection.

### String get_summary() {#method-get-summary}

========== UTILITY METHODS ==========

### Array[Dictionary] validate() {#method-validate}

Checks the settings. Gives the problems found (empty when it is fine).

### bool is_valid() {#method-is-valid}

Is it free of errors?

