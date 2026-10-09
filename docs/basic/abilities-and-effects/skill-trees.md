# Skill Trees

<Shot name="skill-trees-editor" caption="The Skill Trees editor (Abilities & Effects > Skill Trees)." />

A **skill tree** is how a player spends points to get stronger: a web of **nodes**, each of which gives something when it is unlocked (an ability, a stat, a proficiency, an item), joined by **connections** that say what must come first. Talent trees, passive trees, class specializations and crafting trees are all skill trees.

A tree is given to a [player class](/basic/entities/player-classes#skill-trees). A class can have several trees, and every character of the class gets its own copy: what one character unlocks, another does not.

## The three pieces

| Piece | What it is |
|---|---|
| **Skill point pool** | A kind of point: *Talent Points*, *Mastery Points*, *Skill Points*. Players earn points of a pool and spend them on nodes of that pool |
| **Node** | One thing to unlock. It costs points of a pool, and has rewards, a required level and prerequisites |
| **Connection** | A line between two nodes: *prerequisite*, *mutually exclusive* or only *visual* |

## Skill point pools

Open the **Pool Manager** (toolbar) to make the pools of your game. A pool has a **name**, a **color** and an optional **maximum total points** (`-1` = no limit): the most points a player can ever earn in the pool, so a tree has a fixed size.

Points come from [rewards](/basic/shared-systems/rewards). The **Skill Point** reward gives *an amount of points of a pool*, and you put it where points should come from:

| Source | How |
|---|---|
| **Leveling up** | In the [level rewards](/basic/entities/player-classes#level-rewards) of a class: *level 2: 1 Talent Point* |
| **A quest, a boss, an event** | A Skill Point reward in the [quest](/basic/events-and-quests/quests) or the event |
| **A node** | A node can give points of another pool (unlock a node to open the next tree) |

Taking away the reward (a respec) takes the points away again.

## The editor

| Part | What it does |
|---|---|
| **Name, Description, Color, Icon** | What the interface shows |
| **Background**, **Background color**, **Tint** | The picture and the colors behind the tree in the skill window |
| **Global point pool**, **Global can refund** | **Set Global Point Pool** and **Set Global Can Refund** set the same value on every node of the tree in one go |
| **Add Node** | Adds a node |
| **Add Connection** | Joins two nodes (choose the two and the type) |
| **Pool Manager** | The skill point pools |
| **Validate** | Checks the tree (see below) |
| **Auto Layout** | Arranges the nodes for you |
| **Tree structure** | The nodes as a list |
| **Visual editor** | The canvas: drag nodes where you want them, click a node or a line to edit it |
| **Properties** | The properties of the node or connection you selected |

## Nodes

Choose the **node type** when you add a node.

| Type | What it is |
|---|---|
| **Ranked node** | A node that can be taken more than once. *Max ranks* `1` is a plain talent; `5` is "+2 % damage, five ranks". Each rank has its own point cost and its own rewards |
| **Choice node** | A node where the player picks **one of several options** when they unlock it: *Fireball becomes Frostbolt or Firebolt*. One cost, and each option has its own rewards. The player can change the choice later |

Fields of every node:

| Field | What it does | Default |
|---|---|---|
| **Name**, **Description**, **Icon**, **Color** | What the node looks like | |
| **Point pool** | The pool the node costs points from. *None* makes the node free | none |
| **Required level** | The character level needed to unlock it | `1` |
| **Required points in tree** | Points that must already be spent in this tree. The classic "tier" gate: *a node of the second row needs 5 points in the tree* | `0` |
| **Can refund** | The player can take the node back and get the points back | on |
| **Prerequisite and exclusive nodes** | Set with connections (below) |

Fields of a **ranked** node:

| Field | What it does |
|---|---|
| **Max ranks** | How many times it can be taken |
| **Point costs per rank** | The cost of rank 1, rank 2 ... |
| **Rewards** | Select a rank and **Add Reward**: what that rank gives |

Fields of a **choice** node:

| Field | What it does |
|---|---|
| **Point cost** | One cost for the node |
| **Choice options** | **Add Choice** adds an option, **Remove Choice** takes the last one away. Each option has an icon and its own list of rewards |

**Rewards** are ordinary [rewards](/basic/shared-systems/rewards): an *Ability* (a new spell), a *Proficiency*, a *Skill Point* in another pool, an *Item*, a *Crafting Recipe*, an *Equipment Slot Unlock* and so on. A reward that can be undone is taken away again when the node is refunded.

::: tip Give stat bonuses through a passive ability
A passive stat bonus ("+2 % damage") is an [ability](/basic/abilities-and-effects/abilities) with a passive effect. The node gives the ability, and refunding the node takes it away.
:::

## Connections

Select **Add Connection**, choose the two nodes and a type.

| Type | What it does |
|---|---|
| **Prerequisite** | The player needs the *from* node before they can unlock the *to* node. The line points the way |
| **Visual only** | A line for the eye with no rule |
| **Mutually exclusive** | The player can have one of the two, not both (a Fire path and an Ice path) |

A connection can have a line color, a width, and a curve (with a curve strength).

## What the player can unlock

A node can be unlocked when **all** of these hold:

1. It is not already at its maximum rank.
2. The player's **level** is at least its required level.
3. Enough **points are spent in the tree** (its *required points in tree*).
4. Every **prerequisite** (connections and required nodes) is unlocked.
5. No **mutually exclusive** node is unlocked.
6. The player has enough **points in the pool** for the cost.
7. The rewards can be given (a reward that needs room waits, and an unlock whose rewards fail is undone: the points come back).

## Refunds and respecs

- **Refund** takes one rank of a node back (or all its ranks) and returns the points. It is refused when the node has **Can refund** off, or when another unlocked node depends on it (it is a prerequisite of it).
- **Reset the tree** takes everything back and returns all the points.
- A refund also takes the rewards away. A reward that cannot be undone stays, and the skill window can ask the tree which nodes have such rewards (`can_respec_node`) to warn the player.
- **Changing a choice** swaps the rewards of the old option for the new one's without a cost.

## Validate

The **Validate** button reports: a tree without an id or name, a node without a name or with a non-positive level, duplicate node ids, connections that point to a node that is not there, a node that is its own prerequisite, **circular dependencies** (A needs B needs A), and a tree with **no root** (every node has a prerequisite, so nothing could ever be unlocked first).

## Saving

The ranks, the choices, the points earned and spent in each pool, and which rewards were given are saved with the character. The tree itself is data: change a tree in an update and the saves keep working, because the character only remembers the node ids and ranks.

## Examples

| You want | Build |
|---|---|
| **A talent tree, 1 point per level** | A pool *Talent Points*, a Skill Point reward in the class level rewards at every level, ranked nodes of 1 to 5 ranks, *Required points in tree* on each row |
| **A specialization choice at level 10** | A choice node: one option for each specialization, each giving a different set of abilities |
| **Two branches you must choose between** | A *mutually exclusive* connection between the first node of each |
| **A crafting tree** | A pool *Craft Points*, the nodes give [Crafting Recipe](/basic/shared-systems/rewards) rewards |
| **A tree that is a skill list** | Ranked nodes with a [Proficiency](/basic/entity-stats/proficiencies) reward |

## See also

- [Player Classes](/basic/entities/player-classes#skill-trees), [Rewards](/basic/shared-systems/rewards), [Abilities](/basic/abilities-and-effects/abilities)
- [Skill trees: how they are built](/advanced/abilities-and-effects/skill-trees) (Advanced)
