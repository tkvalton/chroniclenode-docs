# The NPC behaviour tool

::: warning Not built yet
This page describes a planned feature. Today an NPC's behaviour is written in the [Behavior Scripts](/basic/behaviors/behavior-scripts) tab as a list of tasks, and the points of a patrol are typed in as positions.
:::

The **NPC behaviour tool** will show **what an NPC does** in the 3D view, the way [local events](/planned/world-builder#local-events) will show how interactables are connected.

## What it will do

- Select an NPC in the world and see its **behaviour** as shapes in the 3D view: where it goes, in what order, and how long it waits.
- **Patrol paths** are drawn as a route you can edit: drag a waypoint, add one, change the pattern (loop, ping-pong, random, once) without typing positions.
- The same tool will show the parts of a behaviour that belong to a place: where an NPC works, where it sleeps, where it sits.

## What is there today

A [behavior script](/basic/behaviors/behavior-scripts) already has a **Patrol** task with a list of waypoints, a pattern, a wait time and a walking rule. The tool will draw and edit what the task already holds; the behaviours themselves do not change.

## Still to decide

- Whether the tool edits the behavior script itself or the placed NPC's own copy of it (a [unique](/basic/world/uniques)).
- How the daily schedule (what happens at what hour of the day) is shown in the 3D view.
