
const listMenuAction = tiled.registerAction(
    "ListMenuOptions",
    (action) => {
        tiled.alert(`Available menu options:\n - ${tiled.menus.join("\n - ")}`);
    }
)
listMenuAction.text = 'List TiledExt Menus';
  
tiled.extendMenu("Help", [{ action: `ListMenuOptions` }]);
