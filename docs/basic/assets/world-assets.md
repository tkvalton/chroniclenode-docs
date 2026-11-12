# World Assets

The **world assets** are the scenes you collect to dress your worlds: houses, trees, rocks, furniture, props. They live in one folder, `res://src/data/world_assets/`, and the **Assets** button of the [placement tool](/basic/world/add-object#assets) puts them in the world. **Assets > World Assets** is the list of them: what you have, in which category, with a **picture** of each and a **3D preview** you can turn around, and the buttons to add to it.

Like the other asset libraries, it is **files in folders**: there is no record with an id. A **category is a folder** (`world_assets/trees/`, `world_assets/buildings/ruins/`), and a scene put in the folder itself is *Uncategorised*.

## The tab

| Control | What it does |
|---|---|
| **Search** | Filters the list by name (the file name in words: `stone_pillar.tscn` is *Stone pillar*) or by file |
| **Category** | Shows one category or all of them. A category inside another is written `buildings / ruins` |
| **New category** | Makes a folder in `world_assets/`. Use a slash for a category inside another (`buildings/ruins`). The name is made into a folder name (lower case, underscores) |
| **Import...** | Copies scenes and models (`.tscn`, `.scn`, `.glb`, `.gltf`, `.fbx`, `.blend`) from anywhere on your computer into the category that is chosen (into the asset folder itself when it is *All categories*). A file with the name of one that is there gets a number. A scene that uses other files (meshes, textures) needs them in the project too |
| **Refresh** | Reads the folders again. The list also reads them when the tab opens |
| The list | Every scene with its picture and its name; with *All categories* the category is in brackets. The pictures are drawn by the editor the first time and kept in `world_assets/.thumbnails/` |

The **right side** shows the selected scene in 3D, turned the way you drag it (drag to orbit, wheel to zoom, middle or right drag to move, double click to frame; the buttons are *Frame*, *Reset*, *Turn around*, *Grid*, *Floor*, *1.8 m figure* and *Light*; each scene you select starts from the Reset angle), then its name, its category and its file, and two buttons: **Open in Editor** (to change the scene) and **Show in FileSystem**.

## The foliage library is listed too

The scenes and meshes of the [Foliage](/basic/assets/foliage) tab (the trees, bushes and rocks the terrain paints, and the grass and pebbles it scatters) are in the list as two categories of their own, **Foliage (Foliage tab)** and **Ground scatter (Foliage tab)**. You can look at them here with the same preview. They are **made and changed in the Foliage tab** (their numbers, their groups, their materials), so an import never puts a file in them: it goes to the asset folder.

::: tip One scene, two ways to place it
The **Assets** button of the placement tool lists the scenes of `world_assets/` **and the foliage scenes** (category *Foliage*), so either kind can be placed by hand. A foliage scene placed by hand is a normal instance of the scene with all its nodes; the foliage tools of the terrain editor paint the same scene **drawn in bulk** with thousands of others. Choose by what you need: placed by hand to put one tree exactly where you want it, painted to fill a forest.
:::

## Good to know

- **Subfolders are categories**, as deep as you like; short lists (*trees*, *rocks*, *buildings*, *props*) are quicker to use than a deep tree.
- What lands in the world from the placement tool is an **instance of your scene**, linked to the file: change the scene and every one you placed changes with it.
- The preview shows the scene the way it is made. A scene with a script on it runs that script in the preview; if the script prints an error there, the preview still shows the scene.

## See also

- [Add Object](/basic/world/add-object#assets): placing the assets in a world.
- [Foliage](/basic/assets/foliage): the scenes the terrain paints.
- [Model Scenes](/basic/entity-assets/model-scenes): the same 3D preview for the bodies of creatures and objects.
