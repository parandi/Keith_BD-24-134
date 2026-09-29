// CAMAEL: Offline World Vector Cartography Dataset
// High-performance vector outlines for global landmasses & tactical survival waypoints
// Coordinates are [Longitude, Latitude] (-180 to 180, -90 to 90)

window.CAMAEL_GEO = {
  continents: [
    {
      name: "North America",
      labelPos: [-100, 48],
      polygon: [
        [-168, 65], [-160, 71], [-140, 70], [-130, 70], [-125, 75], [-115, 74],
        [-100, 70], [-80, 73], [-70, 62], [-65, 60], [-55, 52], [-60, 44],
        [-70, 42], [-75, 35], [-80, 25], [-82, 23], [-90, 21], [-97, 26],
        [-105, 20], [-90, 16], [-83, 9], [-77, 8], [-85, 12], [-95, 16],
        [-105, 22], [-110, 30], [-117, 33], [-124, 40], [-125, 50], [-135, 57],
        [-150, 60], [-165, 60], [-168, 65]
      ]
    },
    {
      name: "South America",
      labelPos: [-58, -15],
      polygon: [
        [-77, 8], [-72, 12], [-60, 10], [-50, 0], [-35, -5], [-35, -10],
        [-40, -22], [-50, -30], [-58, -35], [-65, -45], [-68, -55], [-75, -50],
        [-75, -40], [-71, -30], [-70, -18], [-80, -5], [-80, 2], [-77, 8]
      ]
    },
    {
      name: "Eurasia",
      labelPos: [85, 55],
      polygon: [
        [-10, 36], [-5, 43], [0, 46], [2, 51], [8, 55], [12, 58], [25, 71],
        [40, 68], [60, 70], [80, 73], [105, 78], [130, 72], [170, 67],
        [180, 65], [170, 60], [160, 52], [140, 50], [130, 42], [122, 38],
        [120, 32], [110, 20], [105, 10], [100, 2], [98, 10], [90, 22],
        [80, 13], [70, 23], [60, 25], [50, 30], [35, 30], [28, 41],
        [15, 40], [5, 36], [-10, 36]
      ]
    },
    {
      name: "Africa",
      labelPos: [20, 5],
      polygon: [
        [-6, 36], [10, 37], [25, 32], [32, 31], [43, 12], [51, 12], [42, -5],
        [35, -20], [30, -32], [20, -35], [15, -28], [12, -15], [9, 4],
        [0, 6], [-15, 12], [-17, 15], [-12, 28], [-6, 36]
      ]
    },
    {
      name: "Australia",
      labelPos: [134, -25],
      polygon: [
        [114, -22], [115, -34], [130, -32], [138, -35], [148, -38], [152, -28],
        [145, -15], [136, -12], [129, -15], [122, -17], [114, -22]
      ]
    },
    {
      name: "Greenland",
      labelPos: [-40, 72],
      polygon: [
        [-45, 60], [-35, 66], [-20, 70], [-20, 80], [-40, 83], [-60, 78],
        [-55, 70], [-50, 65], [-45, 60]
      ]
    },
    {
      name: "Antarctica",
      labelPos: [0, -78],
      polygon: [
        [-180, -68], [-140, -70], [-100, -72], [-65, -64], [-55, -63],
        [-30, -72], [0, -70], [40, -68], [80, -66], [120, -66], [160, -68],
        [180, -68], [180, -88], [-180, -88], [-180, -68]
      ]
    },
    {
      name: "United Kingdom & Ireland",
      labelPos: [-4, 54],
      polygon: [
        [-10, 51], [-6, 55], [-3, 58], [-1, 52], [1, 51], [-5, 50], [-10, 51]
      ]
    },
    {
      name: "Japan",
      labelPos: [138, 37],
      polygon: [
        [130, 32], [133, 34], [140, 36], [145, 44], [142, 45], [138, 38], [130, 32]
      ]
    },
    {
      name: "Madagascar",
      labelPos: [47, -19],
      polygon: [
        [43, -12], [50, -14], [48, -25], [44, -25], [43, -12]
      ]
    }
  ],

  // Strategic Survival Reference Locations (Pre-loaded Tactical Waypoints)
  defaultWaypoints: [
    {
      id: "wp_svalbard",
      name: "Svalbard Global Seed Vault",
      type: "cache",
      lat: 78.23,
      lon: 15.49,
      desc: "Deep permafrost seed preservation bunker. Maximum geologic stability.",
      notes: "Sub-zero storage, reinforced blast doors, extreme northern survival environment."
    },
    {
      id: "wp_cheyenne",
      name: "Cheyenne Mountain Bunker (NORAD)",
      type: "shelter",
      lat: 38.74,
      lon: -104.84,
      desc: "Granite bunker designed to withstand multi-megaton nuclear explosions and EMP pulses.",
      notes: "Spring-mounted shock absorption, self-contained water reservoir and air filtration."
    },
    {
      id: "wp_baikal",
      name: "Lake Baikal Freshwater Zone",
      type: "water",
      lat: 53.55,
      lon: 108.27,
      desc: "World's largest unfrozen freshwater reservoir by volume (20% of Earth's surface fresh water).",
      notes: "Extremely pure water, deep aquatic ecosystem, remote mountain protection."
    },
    {
      id: "wp_alps_water",
      name: "Alpine Glacial Melt Springs",
      type: "water",
      lat: 46.50,
      lon: 8.50,
      desc: "High-altitude glacial headwaters feeding major European river systems.",
      notes: "Gravity-fed clean water, defensible mountain passes, natural caves."
    },
    {
      id: "wp_chornobyl",
      name: "Chernobyl Exclusion Zone",
      type: "danger",
      lat: 51.27,
      lon: 30.22,
      desc: "Long-term radiological exclusion territory.",
      notes: "Severe soil caesium-137 contamination, wild pack predators, unstable industrial ruins."
    },
    {
      id: "wp_appalachian",
      name: "Appalachian Mountain Foraging Belt",
      type: "forage",
      lat: 36.50,
      lon: -82.00,
      desc: "Ancient temperate forest biome with abundant wild edibles, natural springs, and caves.",
      notes: "High concentration of cattails, ramps (wild leeks), medicinal plants, and clean streams."
    }
  ]
};
