# Sculpting the terrain

Choose a tool in the **Ground** group of the strip on the left of the 3D viewport and drag over the ground. For how the Terrain mode is laid out, the keys and saving, see [Terrain](/basic/world/terrain).

## The brush

Every ground tool uses the same brush. Its settings are in the bar along the bottom (a slider and a box to type an exact number), and the brush ring shows its reach on the ground.

| Setting | What it does |
|---|---|
| **Radius** | How big the brush is, 1 to 128 m. Shift + wheel, or **[** and **]** |
| **Strength** | How much one dab changes the ground, 0 to 1. Ctrl + wheel |
| **Hardness** | How much of the radius works at full strength before it fades out. 1 is a hard edge, 0 a soft hill. Alt + wheel |

Some tools add a number of their own (a height, a scale). **Ctrl** held when you press the mouse does the opposite of a tool (Raise lowers). **Escape** cancels the stroke you are making and puts everything back. **Every stroke is one undo step** (Ctrl+Z), also across the border of two tiles.

## The tools

| Tool | What it does |
|---|---|
| **Raise** / **Lower** | Push the ground up or down. Keep the mouse still to keep raising |
| **Smooth** | Evens the ground out: each point moves towards the average of the ground around it. A bigger brush smooths wider |
| **Flatten** | Levels the ground to the height where you started the stroke: press on a hilltop and drag to cut a plateau |
| **Set height** | Levels the ground to the **Height** number of the bar |
| **Noise** | Roughens the ground with bumps and dips. **Scale** is how wide the bumps are, **Height** how tall. The noise belongs to the place: going over the same ground twice gives the same bumps |
| **Stamp** | Presses a shape into the ground once per click: the brush shape picture (below), or a smooth hill if you chose Round. A negative **Height** makes a crater |
| **Cut hole** / **Fill hole** | Cut holes in the ground and fill them again |

### Holes

A hole is a square cell of **2 m**. A hole is neither drawn nor solid, so characters fall through it: use holes for caves, wells, pits and dungeon entrances. The brush takes the cells whose middle is within its radius. Turn on the **Holes** button of the top bar to see them (a pink ghost). Ctrl turns Cut hole into Fill hole and back. Put something under the hole (a pit floor) so what falls has somewhere to land.

## The cursor: ring colour and brush shape

The **Cursor** bar at the top of the 3D viewport has the colour, the shape and **Add shape...**.

**The colour button** is the colour of the ring on the ground. Choose one that does not clash with the textures you paint.

**The shape button** opens the shapes to choose from. A shape is the footprint of the brush, for the sculpting tools and the painting tools alike. The first icon, **Round**, is the plain round brush. The others are grey pictures (white where the brush works fully, black where it does not), shown as icons in the list: **Square, Diamond, Hexagon, Triangle, Star, Cross, Ring, Rough, Blob and Scatter** come with the toolkit. A square brush has square corners, a ring brush only works in a ring, a scatter brush leaves a spray of spots. **Hardness** softens the edges of a shape. The ring on the ground stays round and shows the brush's reach.

### Your own shapes

The shapes are the pictures in one folder of your project, **`res://src/data/terrain_brush_shapes/`**. The toolkit fills it the first time the terrain tool opens. To add a shape, drop a grey picture in the folder and open the shape list again, or press **Add shape...** and pick a picture (it is copied into the folder). Delete the pictures you do not want. Any picture works: white is "full", black is "nothing".

## Tips

- **Start big and soft**: a big radius and a low hardness for the hills, then smaller and harder for details.
- **Smooth** at the end takes the harsh look off hand-made hills.
- **Flatten** with a big brush makes the flat ground a town or a camp needs. **Set height** makes flat ground at an exact height (a lake bed, a road).
- Use **Inspect** (key 2) to read the height, slope and surface under the mouse in the box at the bottom right.
