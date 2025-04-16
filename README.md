# Tiled TSX (TypeScript) Extension Template

This repository contains a skeleton of a development project that uses tiled and tiled extensions written in Typescript.

# Creating a New Extension

To create a new extension, simply add the entry point as a `.ts` file to `TiledExtensions/src/`.

# Building Your Extensions

You should be in the `TiledExtensions` subdirectory to build your extensions

1. (first time only) Run `npm install .`
2. Run `npm build` to build once
3. OR Run `npm watch` for continuous building


# Additional Information

A .tiled-project file has been included as an example, but you may configure your own project through the
`Project > Project Properties...` settings in Tiled, or by updating the "build" and "watch" commands in
`package.json` to point to wherever your project's extensions can be found.

The Extension JS project is configured in the `TiledExtensions` subdirectory, with its own `package.json`.
If you want to reuse this file, please update to your project's name, description, author, repository, license, etc as
appropriate before using it in your own projects.

The `package.json` is configured to glob all `.ts` files in the `src` subdirectory as
separate entry points for separate extensions.  Helper functions can be imported from the `lib/` subdirectory, which
has included a few random methods that you may feel free to reuse or remove.

The JS project outputs the bundled `.js` to `TiledExtensions/dist`, which is configured as the extension location
in the provided `.tiled-project` at the project root.

An example extension called `list-menu-options.ts` has been included that adds an menu item to the
`Help` menu called, `List TiledExt Menus`.  Selecting this menu item, shows an alert modal that lists
the valid extendable menu names (from `tiled.menus`) for extending Tiled's menu system in other extensions.