<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponProfileEditor

**Inherits:** [ConfigEditorBase](/advanced/editor/world/config-editor-base) < [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The Weapon Profiles tab (Entity Assets &gt; Weapon Profiles): the list of the profiles on the left, the settings on the right in a container for each group (Profile, Folders, Animation packs, Used by, Old tags, Warnings). A Weapon Animation Profile is one way of fighting that your game has animations for (One Hand, Bow, Rifle ...). It is defined once, here, and every animation pack gets its folders. A weapon class or an NPC picks a profile. See docs: Entity Assets &gt; Weapon Profiles.

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `PackedStringArray` | [get_warning_texts](#method-get-warning-texts)() |
| `Array` | [get_old_tag_users](#method-get-old-tag-users)() |
| `int` | [count_legacy_files](#method-count-legacy-files)() |

## Constants

- `Color` **COLOR_GOOD** = `Color(0.55, 0.8, 0.55)`
- `Color` **COLOR_WARN** = `Color(0.95, 0.75, 0.35)`
- `Color` **COLOR_DIM** = `Color(0.7, 0.7, 0.7)`

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ConfigEditorBase](/advanced/editor/world/config-editor-base).*

### PackedStringArray get_warning_texts() {#method-get-warning-texts}

The warnings now (for the tests)

### Array get_old_tag_users() {#method-get-old-tag-users}

The weapon classes and NPCs with an old tag and no profile: [&#123;resource, tag&#125;]

### int count_legacy_files() {#method-count-legacy-files}

How many old animation files there are to move

