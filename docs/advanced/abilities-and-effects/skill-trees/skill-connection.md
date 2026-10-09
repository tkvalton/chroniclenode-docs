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
| `float` | [curve_strength](#prop-curve-strength) | `0.5  # How much curve if is_curved is true` |

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

- **PREREQUISITE** = `0`
- **VISUAL_ONLY** = `1`

## Property descriptions

### int from_node_id {#prop-from-node-id}

*No description yet.*

### int to_node_id {#prop-to-node-id}

*No description yet.*

### ConnectionType connection_type = ConnectionType.PREREQUISITE {#prop-connection-type}

*No description yet.*

### Color line_color = Color.WHITE {#prop-line-color}

*No description yet.*

### float line_width = 2.0 {#prop-line-width}

*No description yet.*

### bool is_curved = false {#prop-is-curved}

*No description yet.*

### float curve_strength = 0.5  # How much curve if is_curved is true {#prop-curve-strength}

*No description yet.*

## Method descriptions

### bool is_logical_connection() {#method-is-logical-connection}

*No description yet.*

### bool is_prerequisite_connection() {#method-is-prerequisite-connection}

*No description yet.*

### bool is_mutual_exclusion() {#method-is-mutual-exclusion}

*No description yet.*

### bool is_blocking_connection() {#method-is-blocking-connection}

*No description yet.*

### bool affects_node( id: int ) {#method-affects-node}

*No description yet.*

### int get_other_node_id( id: int ) {#method-get-other-node-id}

*No description yet.*

### String get_connection_direction() {#method-get-connection-direction}

*No description yet.*

### String get_summary() {#method-get-summary}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*

