<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BBCodeTextEditor

**Inherits:** `AcceptDialog`

Emitted when the user accepts the dialog with the edited text

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `initial_text: String = "", help_text: String = ""` ) |

## Signals

### selection_made( text: String ) {#signal-selection-made}

Emitted when the user accepts the dialog with the edited text

## Method descriptions

### void setup( initial_text: String = "", help_text: String = "" ) {#method-setup}

Setup the dialog with initial text for editing. The help text (what words in the text mean: the &lt;tokens&gt; of quest and conversation text) is the tooltip of the text

