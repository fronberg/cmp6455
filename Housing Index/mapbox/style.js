
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "EsriLightGray_0": {
            "type": "raster",
            "tiles": ["http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"],
            "tileSize": 256
        },
        "Economy_1": {
            "type": "geojson",
            "data": json_Economy_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_EsriLightGray_0_0",
            "type": "raster",
            "source": "EsriLightGray_0"
        },
        {
            "id": "lyr_Economy_1_0",
            "type": "fill",
            "source": "Economy_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'Economy'], 0.0], ['<=', ['get', 'Economy'], 0.2]], 0.439216, ['all', ['>', ['get', 'Economy'], 0.2], ['<=', ['get', 'Economy'], 0.4]], 0.439216, ['all', ['>', ['get', 'Economy'], 0.4], ['<=', ['get', 'Economy'], 0.6]], 0.439216, ['all', ['>', ['get', 'Economy'], 0.6], ['<=', ['get', 'Economy'], 0.8]], 0.439216, ['all', ['>', ['get', 'Economy'], 0.8], ['<=', ['get', 'Economy'], 1.0]], 0.439216, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'Economy'], 0.0], ['<=', ['get', 'Economy'], 0.2]], '#00441b', ['all', ['>', ['get', 'Economy'], 0.2], ['<=', ['get', 'Economy'], 0.4]], '#368a18', ['all', ['>', ['get', 'Economy'], 0.4], ['<=', ['get', 'Economy'], 0.6]], '#52b824', ['all', ['>', ['get', 'Economy'], 0.6], ['<=', ['get', 'Economy'], 0.8]], '#42e325', ['all', ['>', ['get', 'Economy'], 0.8], ['<=', ['get', 'Economy'], 1.0]], '#78ff3e', '#ffffff']}
        }
],
}