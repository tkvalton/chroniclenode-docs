<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DeathCurrencyLossEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The editor of the money a player loses on death (Gameplay Config &gt; Combat &gt; Death &amp; Revival): a list of rules, each with a currency (or every currency), how the amount is worked out (a percentage, an amount lost, or the amount that is kept), and whether the money lies on the ground as coins.

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `config: GameplayConfig` ) |

## Signals

### changed() {#signal-changed}

Emitted after a rule changed, was added or was removed

## Method descriptions

### void setup( config: GameplayConfig ) {#method-setup}

Shows the rules of the config; they are changed in place

