<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BuildSizeEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The Build Size tab of the Assets: scans the project and shows what it weighs and where it could weigh less (BuildSizeReport): by kind and folder, the largest files, duplicates, oversize textures, sounds with a smaller import setting, and the files nothing uses. Changes nothing in the project except the *always include* list (a project setting). The report can be saved as Markdown.

## Constants

- `String` **REPORT_PATH** = `"res://build_size_report.md"`

