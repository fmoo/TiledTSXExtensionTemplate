// Some sample helper functions. Feel free to delete these.

// Recursively retrieves all non-LayerGroup layers in a map
export function iterLeafLayers(map: TileMap): Layer[] {
  function iterForLayer(layer: Layer): Layer[] {
    const layers: Layer[] = [];
    if (layer.isGroupLayer) {
      const groupLayer = layer as GroupLayer;
      for (const subLayer of groupLayer.layers) {
        layers.push(...iterForLayer(subLayer));
      }
    } else {
      layers.push(layer);
    }
    return layers;
  }

  if (map.layers.length === 0) {
    return [];
  }
  const result = [];
  for (const layer of map.layers) {
    result.push(...iterForLayer(layer));
  }
  return result;
}

// Recursively retrieves all TileLayers in a map
export function iterTileLayers(map: TileMap): TileLayer[] {
  const tileLayers: TileLayer[] = [];
  for (const layer of iterLeafLayers(map)) {
    if (layer.isTileLayer) {
      tileLayers.push(layer as TileLayer);
    }
  }
  return tileLayers;
}
