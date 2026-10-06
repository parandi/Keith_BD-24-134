// CAMAEL: Scavenger's Compendium & Master Taxonomy Database
// Full Information Architecture: Multi-Biome Tagging, Tool Sourcing, and Risk Mitigation Routing

window.CAMAEL_ITEMS = [
  // =========================================================================
  // TIER S: PRICELESS SURVIVAL & TRADE COMMODITIES
  // =========================================================================
  {
    id: "item_salt",
    name: "Pure Table / Sea Salt (NaCl)",
    symbol: "NaCl",
    category: "materials",
    tier: "S",
    edibility: "Essential Mineral",
    barterValue: "Tier S (Priceless)",
    biomes: ["Coastal & Maritime", "Urban & Industrial Ruins", "Arid & Grassland"],
    toolsRequired: [
      {
        tool: "Airtight Glass/Plastic Dry Container",
        acquisition: "Abandoned kitchens, convenience stores, pharmacy supply closets"
      }
    ],
    safetyRating: "Safe & Nourishing",
    timeFrame: "Immediate (< 1 min)",
    domains: ["Water & Hydration", "Trauma & Medicine", "Food & Caloric Energy", "Barter & Currency"],
    description: "The most indispensable biological mineral on Earth. Regulates cellular osmolarity, nerve conduction, muscle contraction, and food preservation. Salting meat or fish dehydrates bacteria, preserving protein for months without refrigeration.",
    survivalUsage: "Core electrolyte in the WHO ORS formulation. Essential for tanning animal hides and pickling wild forage. Historically used as literal monetary currency ('salary').",
    riskMitigation: {
      risk: "Hypernatremia & dehydration: Ingesting pure salt without sufficient fresh water forces cellular fluid depletion and causes renal failure.",
      solution: "Never consume dry salt during water scarcity. Dissolve in exact WHO clinical ratios with water and sugar.",
      solutionAction: {
        section: "recipes",
        targetId: "rec_ors",
        buttonText: "Go to WHO/UNICEF ORS Formula &rarr;"
      }
    }
  },
  {
    id: "item_antibiotics",
    name: "Broad-Spectrum Antibiotics (Amoxicillin / Doxycycline / Cipro)",
    symbol: "Rx",
    category: "materials",
    tier: "S",
    edibility: "Pharmaceutical Oral Tablet",
    barterValue: "Tier S (Priceless)",
    biomes: ["Urban & Industrial Ruins"],
    toolsRequired: [
      {
        tool: "Blister Pack / Desiccant Moisture Barrier",
        acquisition: "Pharmacies, veterinary clinics, hospital emergency caches"
      }
    ],
    safetyRating: "Safe & Nourishing",
    timeFrame: "Urgent (1–15 mins)",
    domains: ["Trauma & Medicine", "Barter & Currency"],
    description: "The definitive barrier against systemic sepsis, infected lacerations, tooth abscesses, bacterial dysentery, and secondary respiratory collapse.",
    survivalUsage: "Store bone-dry below 25°C. Solid dry pill tablets in intact packaging often maintain 80%+ active therapeutic efficacy years past manufacturer expiration dates.",
    riskMitigation: {
      risk: "Allergic anaphylaxis & gut microbiome depletion causing deadly antibiotic-associated diarrhea.",
      solution: "Confirm penicillin allergy status before administration. Pair with clean boiled broths and rehydration salts.",
      solutionAction: {
        section: "incaseof",
        targetId: "crisis_cpr",
        buttonText: "View Anaphylaxis / Emergency Trauma &rarr;"
      }
    }
  },
  {
    id: "item_bleach",
    name: "Household Bleach (Unscented 6–8.25% Sodium Hypochlorite)",
    symbol: "NaOCl",
    category: "materials",
    tier: "S",
    edibility: "TOXIC undiluted / Lifesaving Purifier",
    barterValue: "Tier S (Priceless)",
    biomes: ["Urban & Industrial Ruins"],
    toolsRequired: [
      {
        tool: "Liquid Dropper / Syringe (1mL - 5mL)",
        acquisition: "Pharmacy first aid aisles, chemistry labs, ink refill kits"
      },
      {
        tool: "Food-Grade Water Jug / Canteen",
        acquisition: "Supermarkets, camping stores, residential pantries"
      }
    ],
    safetyRating: "Conditional / Prepared Only",
    timeFrame: "Urgent (1–15 mins)",
    domains: ["Water & Hydration", "Trauma & Medicine", "Barter & Currency"],
    description: "Cold chemical water purification powerhouse. A single 1-gallon jug of unscented household bleach can disinfect over 3,800 Liters of contaminated raw water.",
    survivalUsage: "DOSAGE MATRIX: Exactly 2 drops per 1 Liter of clear water (stir and wait 30 minutes). 4 drops per 1 Liter if water is turbid, cold, or cloudy (wait 60 minutes).",
    riskMitigation: {
      risk: "Severe caustic chemical burns to esophagus, gastric lining, and eyes if ingested undiluted or if scented industrial surfactants are used.",
      solution: "Never use scented bleach. If cloudy, pre-filter water through sand/charcoal column before adding bleach.",
      solutionAction: {
        section: "manual",
        targetId: "guide_bio_filter",
        buttonText: "Go to Bio-Sand Water Filter Column &rarr;"
      }
    }
  },

  // =========================================================================
  // TIER A: HIGH WILD & INDUSTRIAL HARVESTS
  // =========================================================================
  {
    id: "item_cattail",
    name: "Common Cattail (Typha latifolia)",
    symbol: "🌿",
    category: "flora",
    tier: "A",
    edibility: "100% Edible (Roots, Shoots, Pollen)",
    barterValue: "Tier A (High Wild Resource)",
    biomes: ["Wetland & Freshwater"],
    toolsRequired: [
      {
        tool: "Digging Stick or Trench Trowel",
        acquisition: "Hardwood branches carved in field, gardening centers, hardware stores"
      },
      {
        tool: "Rinsing Basin / Mesh Cloth",
        acquisition: "Fabric scrap, mosquito netting, plastic buckets"
      }
    ],
    safetyRating: "Safe & Nourishing",
    timeFrame: "Standard (1–4 hours)",
    domains: ["Food & Caloric Energy", "Shelter & Protection", "Fire & Heat"],
    description: "The undisputed 'Supermarket of the Swamp'. Spring shoots are eaten raw like cucumbers; summer yellow pollen serves as nutritious flour extender; rhizomes provide pure carbohydrate starch; seeddown makes thermal coat insulation.",
    survivalUsage: "Starch extraction: crush peeled rhizomes in water basin, settle starch sediment, decant top liquid, and bake cakes on flat campfire stones.",
    riskMitigation: {
      risk: "Swamp water pathogens & toxic lookalike: Yellow Iris (Iris pseudacorus) rhizomes cause violent emesis. Industrial wetlands also concentrate heavy metals.",
      solution: "Verify leaf cross-section (cattail is flat on one side, curved/D-shaped at base; iris leaves are flat and sword-shaped). Always harvest from moving clean headwaters.",
      solutionAction: {
        section: "recipes",
        targetId: "rec_cattail_cakes",
        buttonText: "Go to Cattail Ash Cakes Recipe &rarr;"
      }
    }
  },
  {
    id: "item_pine",
    name: "Eastern White Pine (Pinus strobus)",
    symbol: "🌲",
    category: "flora",
    tier: "A",
    edibility: "Needles (Tea) & Inner Bark Edible",
    barterValue: "Tier A (High Utility)",
    biomes: ["Forest / Woodland"],
    toolsRequired: [
      {
        tool: "Bushcraft Knife / Sheath Blade",
        acquisition: "Outdoor outfitters, hunting supplies, tackle boxes"
      },
      {
        tool: "Boiling Pot / Tin Can",
        acquisition: "Camp mess kits, scavenged canned food tins"
      }
    ],
    safetyRating: "Safe & Nourishing",
    timeFrame: "Urgent (1–15 mins)",
    domains: ["Trauma & Medicine", "Fire & Heat", "Shelter & Protection"],
    description: "Premier survival tree. Fresh green needles contain 4-5 times more Vitamin C by weight than fresh lemons, preventing scurvy in winter. Pitch/resin acts as waterproof glue, antiseptic wound salve, and instant torch accelerant.",
    survivalUsage: "Pitch Glue Formula: Melt pine resin over coals, mix with 1/3 finely powdered hardwood charcoal. Cools into rock-hard waterproof epoxy for sealing arrowheads, knives, and leaky boots.",
    riskMitigation: {
      risk: "Boiling needles directly destroys heat-sensitive ascorbic acid (Vitamin C). Ingesting Ponderosa Pine or Yew needles causes toxic abortifacient and cardiovascular poisoning.",
      solution: "Steep needles in boiled water after removing from flame (infusion, not decoction). Confirm 5-needle fascicles for White Pine.",
      solutionAction: {
        section: "recipes",
        targetId: "rec_pine_needle_tea",
        buttonText: "Go to Pine Needle Vitamin C Infusion &rarr;"
      }
    }
  },
  {
    id: "item_willow",
    name: "White Willow (Salix alba)",
    symbol: "🍃",
    category: "flora",
    tier: "A",
    edibility: "Inner Cambium Bark (Medicinal)",
    barterValue: "Tier A (High Medicinal)",
    biomes: ["Wetland & Freshwater", "Forest / Woodland"],
    toolsRequired: [
      {
        tool: "Fixed-Blade Knife / Scraper",
        acquisition: "Hardware toolboxes, kitchen knife blocks"
      },
      {
        tool: "Simmering Pot",
        acquisition: "Campgrounds, residential kitchens"
      }
    ],
    safetyRating: "Conditional / Prepared Only",
    timeFrame: "Urgent (1–15 mins)",
    domains: ["Trauma & Medicine", "Shelter & Protection"],
    description: "Nature's original pharmacy. The green inner cambium bark is rich in salicin, metabolizing into salicylic acid (aspirin) in the human liver. Potent antipyretic (fever reducer) and analgesic.",
    survivalUsage: "Flexible 1st-year green branches are the #1 wilderness material for weaving fish traps, cordage lashings, snowshoe frames, and friction fire drill sets.",
    riskMitigation: {
      risk: "Gastric ulceration and internal bleeding if overdosed, or administered to individuals with acute aspirin allergies.",
      solution: "Simmer inner bark gently for 15 minutes, strain out woody fibers, and limit intake to 1 cup every 6 hours.",
      solutionAction: {
        section: "recipes",
        targetId: "rec_willow_bark_tea",
        buttonText: "Go to Willow Bark Decoction Guide &rarr;"
      }
    }
  },
  {
    id: "item_yarrow",
    name: "Common Yarrow (Achillea millefolium)",
    symbol: "🌼",
    category: "flora",
    tier: "A",
    edibility: "Medicinal Hemostatic Herb",
    barterValue: "Tier A (Battlefield Hemostatic)",
    biomes: ["Arid & Grassland", "Forest / Woodland", "Urban & Industrial Ruins"],
    toolsRequired: [
      {
        tool: "Mortar / Flat Grinding Stone",
        acquisition: "Smooth river cobblestones, field rocks"
      }
    ],
    safetyRating: "Safe & Nourishing",
    timeFrame: "Immediate (< 1 min)",
    domains: ["Trauma & Medicine"],
    description: "Known since Trojan antiquity as 'Soldier's Woundwort'. Fresh leaves contain achilleine and tannins, acting as an instantaneous coagulant to arrest severe arterial and venous hemorrhage.",
    survivalUsage: "Chewing leaves relieves dental pulp toothache. Direct poultice packs stop deep bleeding lacerations when commercial gauze is exhausted.",
    riskMitigation: {
      risk: "Deadly lookalike alert: Poison Hemlock (Conium maculatum) features similar umbrella flowers but causes fatal paralysis.",
      solution: "Inspect stem: Yarrow has a fibrous, grooved, hairy stem. Poison Hemlock has completely hairless, smooth stems covered in purple blotches.",
      solutionAction: {
        section: "compendium",
        targetId: "item_hemlock",
        buttonText: "Compare with Poison Hemlock Identification &rarr;"
      }
    }
  },
  {
    id: "item_batteries",
    name: "Alkaline & Lithium Batteries (AA / AAA / 18650)",
    symbol: "🔋",
    category: "materials",
    tier: "A",
    edibility: "DEADLY TOXIC Chemical",
    barterValue: "Tier A (High Trade)",
    biomes: ["Urban & Industrial Ruins"],
    toolsRequired: [
      {
        tool: "Steel Wool (0000 grade) or Gum Foil Wrapper",
        acquisition: "Hardware cleaning supplies, woodworking shops, convenience store candy racks"
      },
      {
        tool: "Dry Cotton Tinder Bundle",
        acquisition: "Pockets, first-aid gauze, dry cattail down"
      }
    ],
    safetyRating: "Moderate Hazard",
    timeFrame: "Immediate (< 1 min)",
    domains: ["Fire & Heat", "Comms & Direction", "Barter & Currency"],
    description: "Primary energy cells powering headlamps, emergency two-way transceivers, and radiation dosimeters. Invaluable tactical barter currency in prolonged grid-down scenarios.",
    survivalUsage: "Instant Fire Ignition: Short-circuiting positive and negative battery terminals across fine steel wool generates instantaneous 700°C incandescence, igniting dry tinder immediately in howling rain.",
    riskMitigation: {
      risk: "Lithium thermal runaway explosion and toxic potassium hydroxide alkali chemical burns if pierced or shorted indefinitely.",
      solution: "Disconnect battery circuit the millisecond tinder ignites. Discard bulging or corroded cells into dry sand.",
      solutionAction: {
        section: "manual",
        targetId: "guide_dakota_fire",
        buttonText: "Go to Tactical Firecraft Guide &rarr;"
      }
    }
  },
  {
    id: "item_car_battery",
    name: "12V Lead-Acid Vehicle Battery",
    symbol: "⚡",
    category: "materials",
    tier: "A",
    edibility: "EXTREMELY HAZARDOUS / Sulfuric Acid",
    barterValue: "Tier A (Power Generation)",
    biomes: ["Urban & Industrial Ruins", "Coastal & Maritime"],
    toolsRequired: [
      {
        tool: "12V DC to 120V AC Power Inverter",
        acquisition: "Work vans, hardware stores, camper trailers"
      },
      {
        tool: "Heavy Gauge Jumper Cables",
        acquisition: "Vehicle trunks, auto repair shops, roadside emergency kits"
      }
    ],
    safetyRating: "Moderate Hazard",
    timeFrame: "Standard (1–4 hours)",
    domains: ["Comms & Direction", "Shelter & Protection", "Barter & Currency"],
    description: "Bulk electrical storage unit capable of powering basecamp perimeter LED tripwires, HAM radio base stations, and recharging portable flashlights for months.",
    survivalUsage: "Rechargeable via scavenged solar panels, automotive alternators, or stream hydro-wheels.",
    riskMitigation: {
      risk: "Corrosive sulfuric acid splash blindings, and explosive hydrogen gas ignition during high-amperage charging.",
      solution: "Charge only in well-ventilated outdoor open air. Keep open flames and sparks at least 5 meters away.",
      solutionAction: {
        section: "incaseof",
        targetId: "crisis_cpr",
        buttonText: "View Acid Burn & Trauma Protocol &rarr;"
      }
    }
  },

  // =========================================================================
  // TIER B: NUTRITIONAL SECURITY & SHELTER
  // =========================================================================
  {
    id: "item_oak_acorns",
    name: "Oak Acorns (Quercus species)",
    symbol: "🌰",
    category: "flora",
    tier: "B",
    edibility: "Edible AFTER Leaching Tannins",
    barterValue: "Tier B (Dense Carbohydrate & Fat)",
    biomes: ["Forest / Woodland", "Arid & Grassland"],
    toolsRequired: [
      {
        tool: "Mortar & Pestle / Flat Stone Anvil",
        acquisition: "Riverbeds, building stone foundations"
      },
      {
        tool: "Permeable Cloth / Cotton Bandana",
        acquisition: "Bandanas, pillowcases, clean t-shirt fabric"
      }
    ],
    safetyRating: "Conditional / Prepared Only",
    timeFrame: "Standard (1–4 hours)",
    domains: ["Food & Caloric Energy"],
    description: "Massive annual autumn wild calorie drop. Acorn nutmeat provides up to 50% complex carbohydrates and 30% clean vegetable fats by weight.",
    survivalUsage: "Grind dried nutmeat into coarse meal, soak repeatedly in cool running water or sequential boils until bitter astringency is 100% gone, then bake into flatbreads.",
    riskMitigation: {
      risk: "High concentrations of tannic acid irritate gastric mucosa, bind iron, and induce acute kidney and liver lesions if consumed raw.",
      solution: "Never eat raw acorns. Test a tiny crumb with your tongue—if any astringent puckering remains, continue water leaching.",
      solutionAction: {
        section: "recipes",
        targetId: "rec_acorn_mash",
        buttonText: "Go to Leached Acorn Porridge Recipe &rarr;"
      }
    }
  },
  {
    id: "item_stinging_nettle",
    name: "Stinging Nettle (Urtica dioica)",
    symbol: "🌱",
    category: "flora",
    tier: "B",
    edibility: "Edible When Cooked; Cordage Fiber",
    barterValue: "Tier B (Food & Strong Cordage)",
    biomes: ["Forest / Woodland", "Wetland & Freshwater"],
    toolsRequired: [
      {
        tool: "Heavy Work Gloves or Bandana Wraps",
        acquisition: "Hardware stores, construction sites, garden sheds"
      },
      {
        tool: "Boiling Vessel",
        acquisition: "Campsites, abandoned kitchens"
      }
    ],
    safetyRating: "Conditional / Prepared Only",
    timeFrame: "Urgent (1–15 mins)",
    domains: ["Food & Caloric Energy", "Shelter & Protection"],
    description: "Nutritional powerhouse containing up to 25% dry-weight protein, calcium, iron, and magnesium. The outer stalk fibers produce the highest tensile-strength natural cordage in the wild.",
    survivalUsage: "Boiling or complete drying instantly destroys stinging hairs, converting leaves into rich food. Retting dried stems yields rot-resistant bowstrings and fishing lines.",
    riskMitigation: {
      risk: "Hollow silica hypodermic hairs inject painful formic acid and histamine, causing burning wheals and dermatitis.",
      solution: "Boil for minimum 2 minutes or dry in direct sun for 24 hours. Crush raw plantain leaves and rub on skin to neutralize stings.",
      solutionAction: {
        section: "manual",
        targetId: "guide_knots",
        buttonText: "Go to Cordage & Knots Guide &rarr;"
      }
    }
  },
  {
    id: "item_copper_pipe",
    name: "Scrap Copper Tubing & Wire",
    symbol: "Cu",
    category: "materials",
    tier: "B",
    edibility: "Non-Edible Metallic Scavenge",
    barterValue: "Tier B (Crafting & Stills)",
    biomes: ["Urban & Industrial Ruins"],
    toolsRequired: [
      {
        tool: "Hacksaw / Pipe Cutter / Wire Cutters",
        acquisition: "Plumbing vans, construction job sites, home garages"
      }
    ],
    safetyRating: "Moderate Hazard",
    timeFrame: "Standard (1–4 hours)",
    domains: ["Water & Hydration", "Comms & Direction", "Shelter & Protection"],
    description: "Exceptional thermal and electrical conductor. Unrivaled for fashioning counter-flow water distillation cooling coils, solar water heaters, or high-gain radio dipole antennas.",
    survivalUsage: "Condensation coil: A coiled copper line immersed in cold stream water condenses boiled steam into 100% pure distilled drinking water from contaminated seawater or chemical swamp runoff.",
    riskMitigation: {
      risk: "Sharp jagged metal burrs and green copper carbonate patina toxicity.",
      solution: "Deburr edges with a file or flat stone; clean interior with sand and vinegar/salt solution before water contact.",
      solutionAction: {
        section: "manual",
        targetId: "guide_bio_filter",
        buttonText: "Go to Clean Water Procurement Guide &rarr;"
      }
    }
  },

  // =========================================================================
  // DEADLY TOXIC HAZARDS (Critical Identification Alerts)
  // =========================================================================
  {
    id: "item_hemlock",
    name: "Poison Hemlock (Conium maculatum)",
    symbol: "☠️",
    category: "toxic",
    tier: "DANGER",
    edibility: "FATAL POISON (Do NOT Touch or Ingest)",
    barterValue: "Zero / Extreme Hazard",
    biomes: ["Wetland & Freshwater", "Arid & Grassland", "Urban & Industrial Ruins"],
    toolsRequired: [
      {
        tool: "Zero (Avoid All Contact)",
        acquisition: "Field Hazard"
      }
    ],
    safetyRating: "Lethal / Fatal Hazard",
    timeFrame: "Immediate (< 1 min)",
    domains: ["Trauma & Medicine"],
    description: "The historical execution plant of Socrates. Contains coniine and pyridine alkaloids. Induces ascending muscular flaccidity, peripheral paralysis, and asphyxiation within 2 to 3 hours while the victim remains fully conscious.",
    survivalUsage: "ZERO SURVIVAL VALUE. Extreme tactical hazard. Frequently misidentified by novice scavengers as wild carrot, wild parsley, or yarrow.",
    riskMitigation: {
      risk: "Fatal respiratory paralysis. No pharmaceutical antidote exists.",
      solution: "If ingested, IMMEDIATELY induce emesis and administer activated hardwood charcoal slurry to bind alkaloids. Administer artificial rescue breathing.",
      solutionAction: {
        section: "recipes",
        targetId: "rec_charcoal_slurry",
        buttonText: "Go to Emergency Charcoal Slurry &rarr;"
      }
    }
  },
  {
    id: "item_death_cap",
    name: "Death Cap Mushroom (Amanita phalloides)",
    symbol: "🍄☠️",
    category: "toxic",
    tier: "DANGER",
    edibility: "DEADLY TOXIC (Single Cap Kills an Adult)",
    barterValue: "Zero / Extreme Hazard",
    biomes: ["Forest / Woodland"],
    toolsRequired: [
      {
        tool: "Zero (Do Not Harvest)",
        acquisition: "Field Hazard"
      }
    ],
    safetyRating: "Lethal / Fatal Hazard",
    timeFrame: "Immediate (< 1 min)",
    domains: ["Trauma & Medicine"],
    description: "Responsible for over 90% of worldwide fatal mushroom poisonings. Amatoxins are thermostable—boiling, frying, drying, or freezing DOES NOT neutralize the poison. Tastes sweet and pleasant, luring victims into consuming lethal doses.",
    survivalUsage: "IDENTIFICATION: Pale yellow-olive cap, pure white gills under cap, floppy white stem ring (annulus), and cupped white sack (volva) buried at root base.",
    riskMitigation: {
      risk: "Irreversible acute hepatic and renal cellular necrosis. 6 to 24 hour symptom delay gives a false sense of security.",
      solution: "Administer activated charcoal slurry immediately within the first 2 hours of ingestion before intestinal absorption.",
      solutionAction: {
        section: "recipes",
        targetId: "rec_charcoal_slurry",
        buttonText: "Go to Emergency Charcoal Slurry &rarr;"
      }
    }
  },
  {
    id: "item_nightshade",
    name: "Deadly Nightshade / Belladonna (Atropa belladonna)",
    symbol: "☠️",
    category: "toxic",
    tier: "DANGER",
    edibility: "DEADLY TOXIC (Atropine & Scopolamine)",
    barterValue: "Zero / Dangerous",
    biomes: ["Forest / Woodland", "Urban & Industrial Ruins"],
    toolsRequired: [
      {
        tool: "Zero (Avoid Ingestion)",
        acquisition: "Field Hazard"
      }
    ],
    safetyRating: "Lethal / Fatal Hazard",
    timeFrame: "Immediate (< 1 min)",
    domains: ["Trauma & Medicine"],
    description: "Contains tropane alkaloids (atropine, hyoscyamine, scopolamine). Ingesting as few as 2 to 4 sweet black berries is fatal to children; 10 to 20 fatal to adults. Induces tachycardia, dilated pupils, delirium, and respiratory failure.",
    survivalUsage: "IDENTIFICATION: Shiny solitary jet-black berries seated inside a distinct green 5-pointed star-shaped calyx cup.",
    riskMitigation: {
      risk: "Severe anticholinergic toxidrome (blind as a bat, mad as a hatter, red as a beet, hot as a hare, dry as a bone).",
      solution: "Induce vomiting if conscious, administer charcoal slurry, and sponge with cool water to prevent fatal fever spike.",
      solutionAction: {
        section: "recipes",
        targetId: "rec_charcoal_slurry",
        buttonText: "Go to Emergency Charcoal Slurry &rarr;"
      }
    }
  }
];

// Universal Edibility Test (UET) Protocol Steps (Military Field Manual FM 21-76)
window.CAMAEL_UET = [
  {
    step: 1,
    title: "Part Separation",
    desc: "Divide plant into component parts: roots, stems, leaves, flowers, seeds. Test only ONE single part at a time. Many plants (like potatoes) have edible roots but deadly toxic leaves."
  },
  {
    step: 2,
    title: "Smell & Olfactory Test",
    desc: "Crush a sample of the chosen part and smell it. Discard immediately if it smells strongly of bitter almonds (cyanide indicator) or peach pit aroma."
  },
  {
    step: 3,
    title: "Fast / Clear System",
    desc: "Fast from all food for 8 hours prior to testing. Drink only purified water. This ensures any adverse physical reaction is attributable only to the test plant."
  },
  {
    step: 4,
    title: "Skin Contact Test (15 Minutes)",
    desc: "Rub the crushed plant part vigorously on a sensitive skin area (inner wrist or elbow crease). Wait 15 minutes. If itching, burning, redness, or hives appear, reject the plant."
  },
  {
    step: 5,
    title: "Lip Contact Test (3 Minutes)",
    desc: "If skin shows zero reaction, touch a small piece of the prepared plant part to the outer edge of your lips. Wait 3 minutes. Discard if burning, tingling, or numbness occurs."
  },
  {
    step: 6,
    title: "Tongue Test (15 Minutes)",
    desc: "Place a small piece on the tip of your tongue for 15 minutes. Do NOT chew or swallow. Watch for burning, soapiness, or metallic bitterness."
  },
  {
    step: 7,
    title: "Chew & Hold Test (15 Minutes)",
    desc: "Chew a small piece thoroughly and hold it in your mouth for 15 minutes without swallowing. If any irritation occurs, spit it out immediately and rinse mouth with clean water."
  },
  {
    step: 8,
    title: "Swallow Test & 8-Hour Fast",
    desc: "Swallow the single small piece. Wait 8 continuous hours. If nausea, abdominal cramps, diarrhea, or vomiting occur, induce vomiting and drink charcoal slurry. If zero symptoms appear after 8 hours, test a 1/4 cup portion."
  }
];
