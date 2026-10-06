// CAMAEL: Gear, Trip Planner & Fallback Substitutes Database
// 100% Offline Static Data Architecture

window.CAMAEL_GEAR = [
  {
    id: "gear_water_purifier",
    name: "Microbiological Hollow-Fiber Filter",
    category: "water",
    essentialRating: "MANDATORY // TIER S",
    biomes: ["Forest & Woodland", "Wetland & Freshwater", "Coastal & Maritime", "Arid & Grassland", "Urban & Industrial Ruins"],
    baseQty: "1 Unit / person",
    summary: "0.1 micron mechanical filtration. Removes 99.9999% of bacteria, protozoa, and microplastics from raw surface sources.",
    substitutes: [
      {
        tier: "Standard Fallback",
        name: "Unscented Household Bleach (NaOCl 6-8.25%)",
        instructions: "Add exactly 2 drops per 1 Liter of clear water (stir and wait 30 minutes). Use 4 drops if cold or cloudy.",
        sourceSection: "compendium",
        sourceId: "item_bleach"
      },
      {
        tier: "Fieldcraft Substitute",
        name: "Layered Bio-Sand & Charcoal Gravity Column",
        instructions: "Crushed charcoal -> fine river sand -> coarse gravel in a perforated container. Eliminates turbidity and organic toxins.",
        sourceSection: "manual",
        sourceId: "guide_bio_filter"
      },
      {
        tier: "Thermal Fallback",
        name: "Rolling Boil (Thermal Sterilization)",
        instructions: "Bring water to a vigorous rolling boil for at least 1 full minute (3 minutes above 2,000m altitude).",
        sourceSection: "recipes",
        sourceId: "rec_ors"
      }
    ]
  },
  {
    id: "gear_fire_starter",
    name: "Ferrocerium Striker Rod (12mm Ferro)",
    category: "fire",
    essentialRating: "MANDATORY // TIER S",
    biomes: ["Forest & Woodland", "Wetland & Freshwater", "Arid & Grassland", "Coastal & Maritime", "Urban & Industrial Ruins"],
    baseQty: "1 Unit / party",
    summary: "Generates showers of 3,000°C sparks in rain, snow, or high wind. Thousands of strikes without fuel or battery dependence.",
    substitutes: [
      {
        tier: "Scavenged Electrical",
        name: "Car Battery / 9V Battery + Steel Wool Short-Circuit",
        instructions: "Bridge positive and negative battery terminals across fine grade 0000 steel wool to spark instant glowing tinder.",
        sourceSection: "compendium",
        sourceId: "item_car_battery"
      },
      {
        tier: "Optical Improvised",
        name: "Eyeglass Lens / Clear Water Plastic Bottle Solar Focus",
        instructions: "Concentrate direct noon sunlight into a fine pinpoint onto char-cloth or dry punk-wood until embers smoke.",
        sourceSection: "manual",
        sourceId: "guide_four_fingers"
      }
    ]
  },
  {
    id: "gear_medical_trauma",
    name: "Tactical Arterial Windlass Tourniquet",
    category: "medical",
    essentialRating: "CRITICAL // TIER S",
    biomes: ["Forest & Woodland", "Wetland & Freshwater", "Urban & Industrial Ruins", "Coastal & Maritime", "Arid & Grassland"],
    baseQty: "2 Units / party",
    summary: "Immediate mechanical occlusion of extremity arterial hemorrhages. The single fastest method to prevent fatal exsanguination in field trauma.",
    substitutes: [
      {
        tier: "Improvised Rigging",
        name: "Spanish Windlass (Stout Stick + Triangle Bandage)",
        instructions: "Wrap 2-inch wide cloth high and tight above the wound. Insert a stout 6-inch stick and twist continuously until bleeding stops. Tie off to secure.",
        sourceSection: "incaseof",
        sourceId: "crisis_cpr"
      }
    ]
  },
  {
    id: "gear_shelter_tarp",
    name: "Ultralight Ripstop Sil-Nylon Tarp (3x3m)",
    category: "shelter",
    essentialRating: "CRITICAL // TIER A",
    biomes: ["Forest & Woodland", "Wetland & Freshwater", "Coastal & Maritime"],
    baseQty: "1 Unit / 2 persons",
    summary: "Lightweight, versatile wind and torrential rain protection. Configurable into A-frame, lean-to, or diamond plow points.",
    substitutes: [
      {
        tier: "Wildcraft Improvised",
        name: "Debris Hutch / Pine Bough Lean-To",
        instructions: "Construct a 45-degree ridge pole framework. Layer at least 2 feet (60cm) of dead leaves, pine needles, and bark for thermal insulation.",
        sourceSection: "compendium",
        sourceId: "item_pine"
      },
      {
        tier: "Scavenged Industrial",
        name: "Heavy-Duty Construction Trash Bags (3 Mil)",
        instructions: "Slice side seams to form a waterproof bivy sheet, or stuff full of dry dry leaves as an insulated sleeping mattress pad.",
        sourceSection: "compendium",
        sourceId: "item_salt"
      }
    ]
  },
  {
    id: "gear_navigation_compass",
    name: "Liquid-Damped Sighting Compass & Topo Map",
    category: "navigation",
    essentialRating: "MANDATORY // TIER S",
    biomes: ["Forest & Woodland", "Arid & Grassland", "Wetland & Freshwater", "Coastal & Maritime"],
    baseQty: "1 Unit / party",
    summary: "Reliable analog magnetic azimuth guidance independent of satellite constellations or electronic battery grids.",
    substitutes: [
      {
        tier: "Analog Celestial",
        name: "Four-Fingers Daylight & Sun Shadow Stick Navigation",
        instructions: "Use hand finger-stacks for remaining daylight; plant a vertical 1m stick and track tip shadow travel (shadow moves West to East).",
        sourceSection: "manual",
        sourceId: "guide_four_fingers"
      },
      {
        tier: "Improvised Magnetic",
        name: "Magnetized Sewing Needle on Floating Leaf",
        instructions: "Stroke sewing needle 30 times in one direction against silk/hair. Float gently on a still water cup surface. Needle points North/South.",
        sourceSection: "compendium",
        sourceId: "item_batteries"
      }
    ]
  },
  {
    id: "gear_comms_radio",
    name: "Dual-Band Handheld VHF/UHF Transceiver",
    category: "comms",
    essentialRating: "TACTICAL // TIER A",
    biomes: ["Urban & Industrial Ruins", "Coastal & Maritime", "Arid & Grassland"],
    baseQty: "1 Unit / party",
    summary: "Line-of-sight voice communications and NOAA weather monitoring. Direct broadcast capability on VHF Ch 16 (156.800 MHz) and GMRS.",
    substitutes: [
      {
        tier: "Optical & Acoustic",
        name: "Optical Strobe Flash & Audio Morse Code Transceiver",
        instructions: "Transmit standard 3-dot 3-dash 3-dot SOS optical or audible bursts to signal ground/air rescue teams.",
        sourceSection: "radio",
        sourceId: "radio_morse"
      }
    ]
  }
];
