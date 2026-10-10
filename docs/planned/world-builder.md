# The World Builder

::: warning Not built yet
This page describes a planned feature, and the largest one planned: a set of tools for building a world inside the editor. Today you build the ground and the scenery with Godot's own tools, and place what lives in the world with the [Add Object](/basic/world/add-object) and [Unique Object](/basic/world/unique-object-tool) tools.
:::

The **World Builder** is a toolkit of its own, made for ChronicleNode. It will open the way to features that need to know the shape of the ground and the water.

## The terrain tool

A tool for making the **terrain** of a world: shaping the ground, painting it, and the rest of what a terrain editor does. It is the biggest part of the work, and several other features sit on top of it.

## Placing uniques

An improved version of the way [uniques](/basic/world/uniques) are placed: NPCs, interactables, [regions](/basic/world/regions) and [encounters](/basic/world/encounters) placed, moved and checked in the 3D view, with the terrain under them.

## Water placement

A tool for placing [water](/planned/water-and-swimming): the sea, lakes and rivers, with their shapes, their depth and the demo shaders that go with them.

## Local events

Today, making a switch open a door takes an [event](/basic/events-and-quests/events). **Local events** will be a lighter way for the common case:

- Connect the **signal** of one [interactable](/basic/entities/interactables) to another: *this switch opens that door*.
- The connection is **drawn in the 3D view** as a line between the two, so you can see how a room works.
- Events stay for what is bigger than one room: quests, conversations, things that happen across the game.

## Where it will live

The tools will be part of the editor, next to the [tools you already have for the 3D viewport](/basic/world/add-object). Dropped items will get a placement tool of their own: see [dropped items](/planned/dropped-items).
