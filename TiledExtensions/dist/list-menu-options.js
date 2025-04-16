// src/list-menu-options.ts
var listMenuAction = tiled.registerAction(
  "ListMenuOptions",
  (action) => {
    tiled.alert(`Available menu options:
 - ${tiled.menus.join("\n - ")}`);
  }
);
listMenuAction.text = "List TiledExt Menus";
tiled.extendMenu("Help", [{ action: `ListMenuOptions` }]);
