var APP_DATA = {
  "scenes": [
    {
      "id": "0-cocina",
      "name": "cocina",
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
        "yaw": 0.4148557529281618,
        "pitch": 0.03721450931085535,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.5048590446019245,
          "pitch": 0.4255455315747838,
          "rotation": 0,
          "target": "3-bao"
        },
        {
          "yaw": -2.436667190894317,
          "pitch": 0.2759873185050967,
          "rotation": 0,
          "target": "1-estar"
        },
        {
          "yaw": 2.348109077767174,
          "pitch": 0.750253708488211,
          "rotation": 0,
          "target": "2-dormitorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-estar",
      "name": "estar",
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
          "yaw": 0.5017751373619532,
          "pitch": 0.32652477094151067,
          "rotation": 0,
          "target": "2-dormitorio"
        },
        {
          "yaw": 0.06297568693070232,
          "pitch": 0.18758834762558685,
          "rotation": 0,
          "target": "0-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dormitorio",
      "name": "dormitorio",
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
          "yaw": 2.6593050451006786,
          "pitch": 0.36383875986742886,
          "rotation": 0,
          "target": "1-estar"
        },
        {
          "yaw": 2.367744387371901,
          "pitch": 0.4687484700380473,
          "rotation": 0,
          "target": "3-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao",
      "name": "baño",
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
          "yaw": 0.31083076254608244,
          "pitch": 0.3678221847817831,
          "rotation": 0,
          "target": "0-cocina"
        },
        {
          "yaw": 0.07909763728483377,
          "pitch": 0.4389965116971304,
          "rotation": 0,
          "target": "1-estar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
