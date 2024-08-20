var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0021672174993767612,
        "pitch": 0.027872710157017977,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.3664575685110254,
          "pitch": 0.053327680257471144,
          "rotation": 0,
          "target": "1-living--comedor-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0809422553518324,
          "pitch": -0.30909699462815965,
          "title": "Bienvenidos a Emperador I",
          "text": "<p>Presentamos un elegante edificio de ocho pisos con 24 unidades de alta categoría, que combina diseño clásico con comodidades modernas. Ubicado cerca de una popular zona gastronómica, ofrece fácil acceso a restaurantes, bancos y entretenimiento.</p><p>Las unidades, de dos y tres ambientes, destacan por sus pisos de porcelanato simil madera y aberturas con doble vidriado hermético (DVH) para un óptimo aislamiento. La calefacción por losa radiante y los balcones aterrazados con parrilla añaden lujo y confort. Este desarrollo redefine la vida urbana al integrar sofisticación europea con una ubicación céntrica.</p>"
        }
      ]
    },
    {
      "id": "1-living--comedor-",
      "name": "LIVING / COMEDOR ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6410578057993384,
          "pitch": 0.05641643464636559,
          "rotation": 3.141592653589793,
          "target": "0-hall"
        },
        {
          "yaw": -0.3029962812868323,
          "pitch": 0.0992110306805376,
          "rotation": 5.497787143782138,
          "target": "2-parrilla"
        },
        {
          "yaw": 1.6040097231899813,
          "pitch": -0.3034488962325401,
          "rotation": 5.497787143782138,
          "target": "3-habitacin"
        },
        {
          "yaw": -2.65653671895857,
          "pitch": 0.09049262442646722,
          "rotation": 0.7853981633974483,
          "target": "2-parrilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-parrilla",
      "name": "PARRILLA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.9825922399591605,
        "pitch": 0.16057731139537168,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.24675775140856437,
          "pitch": 0.13427301407636705,
          "rotation": 0,
          "target": "1-living--comedor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-habitacin",
      "name": "HABITACIÓN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.961975446560789,
        "pitch": 0.14671777218271487,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.282687522628681,
          "pitch": -0.0018992784336120394,
          "rotation": 3.141592653589793,
          "target": "1-living--comedor-"
        },
        {
          "yaw": -2.9948825663869965,
          "pitch": 0.09264780968405617,
          "rotation": 0,
          "target": "4-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.18409568627583184,
        "pitch": 0.23833648023548548,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.4963296589159052,
          "pitch": 0.526208193157462,
          "rotation": 0,
          "target": "3-habitacin"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "EMPERADOR I- LOFT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
