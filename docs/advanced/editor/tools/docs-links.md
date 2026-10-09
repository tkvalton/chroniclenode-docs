<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DocsLinks

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Where the online documentation is, and which page belongs to which tab of the Database editor.

## Description

Pages are named by their path on the site. A tab that has no page of its own yet opens the basic guide. When a page is written, add its tab here. The paths never change once published (see the documentation plan), so links in released versions keep working.

## Methods

| | |
|---|---|
| `String` | [url_for_view](#method-url-for-view)( `view_name: String` ) *static* |
| `String` | [home_url](#method-home-url)() *static* |
| `void` | [open_view](#method-open-view)( `view_name: String` ) *static* |
| `void` | [open_home](#method-open-home)() *static* |

## Constants

- `String` **BASE_URL** = `"https://docs.chroniclenode.com"`
- `String` **DEFAULT_PAGE** = `"/basic/"` - Opened for a tab with no page of its own (every tab of the editor has one: the list is made by `npm run links` in the documentation repository)
- `Dictionary` **PAGES** = `{` - Tab (the view names of MainToolbar) -&gt; page

## Method descriptions

### String url_for_view( view_name: String ) {#method-url-for-view}

The address of the page for a tab (the basic guide when the tab has none)

### String home_url() {#method-home-url}

The address of the front page of the documentation

### void open_view( view_name: String ) {#method-open-view}

Opens the page for a tab in the browser

### void open_home() {#method-open-home}

*No description yet.*

