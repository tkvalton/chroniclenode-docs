# 1. A day in the valley

::: info Status
Written from the editor's fields and the reference pages. Not yet checked step by step in the editor.
:::

In this tutorial you give a world a warm morning and a mist in its low ground, and you learn what the three light configs (Sun, Sky, Environment) are each for.

**Time:** about 15 minutes.

**Before you start:** you need a world with some ground, as in the [template project](/general/template).

## Part 1: look at the world as the game shows it

A world scene has no sun, sky or environment of its own, so the 3D viewport shows Godot's plain light. The **Environment Debugger** shows what the game shows.

1. Open the scene of your world (**World > Worlds**, select it, **Open Scene**).
2. In the 3D toolbar click **Environment**. A bar opens at the top of the viewport and the viewport now has the sun, the sky and the fog of the game.
3. Drag the **Time** slider. The sun crosses the sky, the colours of the sky and the light follow. Click **Play** and set the speed to `1` to let a day go by.

## Part 2: the path of the sun

4. Click **World Configs** in the bar and open the **Sun** tab. Click **Create New** and name it `Valley sun`.
5. Change **Sun heading** from `90` to `180` and look at the viewport: the sun now runs north to south. Change **Sun rise hour** to `7`. Put the heading back to `90`.

The **Sun** config is only the **path**: where the sun is and when. A world has one. How the sun *looks* is the Environment's.

## Part 3: a warm morning and a mist

6. Open the **Environment** tab, click **Create New** and name it `Valley mood`.
7. In **Sun Light** set **Sun max energy** to `1.6`. In **Sun Light Colors** make **Sun dawn color** a deep orange and **Sun day color** a warm cream. Drag the time slider to sunrise: the light is orange and the shadows are long.
8. In **Fog Settings** set **Fog density** to `0.003` and the **Fog light color** to a pale blue-grey. Leave **Fog sky affect** at `0.2` so the sky stays visible.
9. Under **Fog Height** type the height of the valley floor plus a few metres (if the floor is at `0`, use `6`) and set **Fog height density** to `0.05`. The ground fills with mist and the hills stay clear. Everything under that height is misty, at any distance.

Each change shows in the viewport as you make it.

## Part 4: use it

10. In the bar choose `Valley sun` in **Sun** and `Valley mood` in **Env**, then click **Use for this world**. The world is saved with them.
11. Click **Test World** and walk around: the morning is warm and the mist lies in the valley.

## Going further

| You want | Do this |
|---|---|
| **A fog that changes colour with the day** | In **By the Hour** of the Environment give **Fog color by hour** a gradient (dark blue at night, warm at dusk): the Debugger's time slider moves it |
| **A sun that does not move** | In the Sun config untick **Day night cycle** and set **Static rotation**. Its brightness is the **Static Sun Light** group of the Environment |
| **Another place with another mood** | Make a second Environment (a swamp, a cave) and give it to that [world](/basic/world/worlds#config-overrides), or to a zone when zones can have one |
