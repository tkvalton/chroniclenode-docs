# Introduction

**ChronicleNode** is a toolkit for building role-playing games in the Godot engine. It gives you two things:

- a **runtime**: the systems an RPG needs, already working together: stats, abilities and effects, items and inventories, quests and conversations, entities with companion AI, worlds, and the game's menus and HUD;
- an **editor**: a new tab in Godot where you author all the content of the game (classes, abilities, items, quests, worlds, settings) without writing code for the common parts.

Everything you author is saved as ordinary Godot resource files in your project, so it works with version control, the file system dock and the inspector like any other Godot content.

## What you need

- **Godot 4.7** (the Forward Plus renderer).
- A 3D project. ChronicleNode builds 3D role-playing games, with third-person and top-down camera and controller presets.

## Two ways to start

| | Template project | Add the addon to your project |
|---|---|---|
| **What it is** | A ready-made Godot project with the addon enabled and a demo world to play in: target dummies, vendors, NPCs to talk to and fight, interactables and quests | Just the addon folder, which you copy into a project of your own |
| **Setup** | None. Open it and press play | Copy a folder and enable a plugin |
| **You get** | A working game to play, explore and edit | An empty toolkit: you build every part yourself |
| **Best for** | Learning, and building on the demo | Starting a game from scratch, or adding the toolkit to an existing project |
| **Guide** | [Using the template project](/general/template) | [Adding the addon to your project](/general/adding-the-addon) |

Not sure? Start with the template. Play the demo for a few minutes, open the editor tab, and look at how the pieces you just played are built.

## After you are set up

- [The editor at a glance](/general/editor-tour) shows what is in the Database tab and how the editors work.
- The [Basic guide](/basic/) has one chapter for each part of the editor.
