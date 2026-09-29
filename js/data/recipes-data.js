// CAMAEL: Survival Recipes & Lifesavers Database
// Comprehensive formulations for emergency sustenance, wild cooking, and vital medical remedies

window.CAMAEL_RECIPES = [
  // =========================================================================
  // LIFESAVERS (Special Emergency Section)
  // =========================================================================
  {
    id: "rec_ors",
    name: "WHO/UNICEF Oral Rehydration Salts (ORS)",
    category: "lifesavers",
    tier: "S",
    prepTime: "2 minutes",
    calories: "120 kcal / L",
    smokeRisk: "None (Cold Prep)",
    shelfLife: "24 hours once mixed",
    ingredients: ["Clean Water", "Sugar", "Salt"],
    summary: "The single most lifesaving medical formula in human history. Treats fatal dehydration from cholera, dysentery, heat exhaustion, and diarrhea.",
    instructions: [
      "1. Measure exactly 1 Liter (approx. 4.2 metric cups) of clean, boiled or purified water into a sterile container.",
      "2. Add exactly 6 level teaspoons of granulated sugar (or clean wild honey: 1.5 tablespoons).",
      "3. Add exactly 1/2 level teaspoon of table salt (sodium chloride).",
      "4. Stir vigorously until completely dissolved. The water should taste no saltier than human tears.",
      "5. Administer in small, frequent sips (one cup after every loose stool or 250ml every hour during heat exhaustion)."
    ],
    survivalNotes: "Do NOT make it overly salty—excess sodium without clean water can cause hypernatremic seizures. The sugar is essential; it triggers the intestinal sodium-glucose cotransporter, forcing water absorption."
  },
  {
    id: "rec_charcoal_slurry",
    name: "Activated Charcoal Poisoning Slurry",
    category: "lifesavers",
    tier: "S",
    prepTime: "5 minutes",
    calories: "0 kcal",
    smokeRisk: "None",
    shelfLife: "Indefinite (dry powder)",
    ingredients: ["Clean Water", "Charcoal"],
    summary: "Emergency universal toxin sponge. Binds to ingested plant poisons, mushroom toxins, and drug overdoses in the stomach before bloodstream absorption.",
    instructions: [
      "1. Grind pure hardwood charcoal (never briquettes with chemical lighter fluid!) into a fine micro-powder.",
      "2. Measure 2 to 3 heaped tablespoons (approx. 25-50g) of charcoal powder.",
      "3. Mix into 250ml of clean drinking water to create a dark slurry.",
      "4. Administer orally as quickly as possible within 1 to 2 hours of toxic ingestion."
    ],
    survivalNotes: "Ineffective against heavy metals, cyanide, alcohol, or corrosive acids/lye. In extreme cases, repeat half-dose every 4 hours. Will cause harmless black stools."
  },
  {
    id: "rec_pine_needle_tea",
    name: "Pine Needle Vitamin C Infusion",
    category: "lifesavers",
    tier: "S",
    prepTime: "10 minutes",
    calories: "5 kcal",
    smokeRisk: "Low (Small Fire)",
    shelfLife: "Consume fresh",
    ingredients: ["Clean Water", "Pine Needles"],
    summary: "Historic Arctic scurvy cure. Contains 4 to 5 times more Vitamin C by weight than fresh orange juice. Boosts immune function and wards off systemic connective tissue collapse.",
    instructions: [
      "1. Harvest fresh, vibrant green needles from White Pine, Scots Pine, or Spruce (AVOID Ponderosa Pine, Yew, and Norfolk Island Pine which are toxic!).",
      "2. Finely chop or crush the needles to break open the outer waxy cuticle.",
      "3. Bring 500ml of clean water to a rolling boil, then remove from heat.",
      "4. Steep the chopped needles in the hot water for 8 to 10 minutes. Do NOT boil the needles directly, as excessive heat destroys Vitamin C.",
      "5. Strain the needles and drink warm. Add honey if available."
    ],
    survivalNotes: "Pregnant women should avoid large amounts of pine needle tea due to potential uterine stimulation."
  },
  {
    id: "rec_willow_bark_tea",
    name: "Willow Bark Salicin Decoction (Wild Aspirin)",
    category: "lifesavers",
    tier: "S",
    prepTime: "20 minutes",
    calories: "0 kcal",
    smokeRisk: "Low",
    shelfLife: "48 hours in cold container",
    ingredients: ["Clean Water", "Willow Bark"],
    summary: "Natural precursor to synthetic aspirin (acetylsalicylic acid). Potent anti-inflammatory, reduces incapacitating fevers, relieves joint/tooth pain.",
    instructions: [
      "1. Strip the outer bark of young willow twigs (Salix species) to expose the green inner cambium layer.",
      "2. Scrape 1 to 2 teaspoons of the inner bark.",
      "3. Place bark in 300ml of water and simmer gently for 15 minutes.",
      "4. Let cool, strain out bark fibers, and drink."
    ],
    survivalNotes: "Takes 20-30 minutes to take effect. Do not administer to anyone with known aspirin allergies, ulcers, or bleeding disorders."
  },
  {
    id: "rec_hardtack",
    name: "Survival Hardtack (Ship's Biscuit)",
    category: "lifesavers",
    tier: "A",
    prepTime: "60 minutes",
    calories: "350 kcal / biscuit",
    smokeRisk: "Medium (Oven/Embers)",
    shelfLife: "25+ Years if kept bone dry",
    ingredients: ["Flour", "Clean Water", "Salt"],
    summary: "The ultimate survival staple ration. With zero fats to turn rancid, completely dried hardtack will last decades without refrigeration.",
    instructions: [
      "1. Mix 2 cups of white or whole wheat flour, 1/2 cup of water, and 1 teaspoon of salt until a dense, non-sticky dough forms.",
      "2. Roll out dough to 1/2 inch (1.2 cm) thickness on a clean surface.",
      "3. Cut into 3x3 inch squares.",
      "4. Punch a grid of 16 small holes completely through each biscuit using a clean nail or skewer (prevents puffing and ensures core drying).",
      "5. Bake slowly near hot coals or flat rocks for 30 minutes on each side until rock-hard and pale.",
      "6. Cool completely before storing in an airtight, moisture-free cache."
    ],
    survivalNotes: "Never bite directly into dry hardtack—you risk breaking teeth. Soak in broth, water, coffee, or stew for 5 minutes before eating."
  },
  {
    id: "rec_pemmican",
    name: "Pemmican (Indigenous Survival Calorie Bar)",
    category: "lifesavers",
    tier: "S",
    prepTime: "4 hours (prep)",
    calories: "700 kcal / 100g",
    smokeRisk: "High (Smoker / Rendering)",
    shelfLife: "5 to 10 Years",
    ingredients: ["Dried Meat", "Animal Fat", "Berries"],
    summary: "Invented by Indigenous North Americans. The highest energy-density survival food on Earth, combining 50% lean dried protein with 50% rendered tallow/fat.",
    instructions: [
      "1. Dehydrate lean meat (venison, beef, rabbit) until brittle like crackers (zero moisture).",
      "2. Pound or grind the dried meat into a fluffy, fibrous powder.",
      "3. Melt and clarify clean animal tallow/suet (render over gentle heat and strain out cracklings).",
      "4. Optional: Add crushed dried berries (blueberries, cranberries) for trace antioxidants.",
      "5. Mix liquid tallow with the powdered meat in a 1:1 weight ratio until a thick paste forms.",
      "6. Press into flat bars or balls and allow to solidify in cool air."
    ],
    survivalNotes: "Two 100g pemmican bars provide an entire day's caloric and fat requirements for a human surviving in freezing wilderness conditions."
  },

  // =========================================================================
  // CAMPFIRE & FIELD RATIONS
  // =========================================================================
  {
    id: "rec_cattail_cakes",
    name: "Cattail Starch Ash Cakes",
    category: "cooking",
    tier: "B",
    prepTime: "25 minutes",
    calories: "280 kcal",
    smokeRisk: "Medium",
    shelfLife: "2 days",
    ingredients: ["Cattail Root", "Clean Water", "Salt"],
    summary: "Cattail rhizomes are the 'supermarket of the swamp'. High in clean, easily digestible starches.",
    instructions: [
      "1. Dig up thick cattail rhizomes from clean, non-polluted wetland mud.",
      "2. Peel off outer spongy skin to reveal white fibrous starch core.",
      "3. Crush and wash the fibers in a bowl of clean water to release the white starch sediment.",
      "4. Pour off excess water, leaving the thick wet starch at the bottom.",
      "5. Mix in a pinch of salt, pat into thin flat cakes, and bake on a hot, flat river stone near campfire coals for 5 minutes per side."
    ],
    survivalNotes: "Rich in complex carbohydrates. Ensure wetland is not near industrial or road chemical runoff."
  },
  {
    id: "rec_dandelion_greens",
    name: "Steamed Dandelion & Wild Onion Greens",
    category: "cooking",
    tier: "B",
    prepTime: "10 minutes",
    calories: "90 kcal",
    smokeRisk: "Low",
    shelfLife: "1 day",
    ingredients: ["Dandelion Greens", "Wild Onion", "Clean Water"],
    summary: "Abundant early-spring survival salad. Packed with iron, potassium, calcium, and prebiotics to restore gut microflora.",
    instructions: [
      "1. Harvest young dandelion leaves (older leaves are extremely bitter).",
      "2. Dig up wild garlic/onion bulbs, washing off all soil.",
      "3. Boil or steam greens in clean water for 3 to 5 minutes to leach out excess bitterness.",
      "4. Toss with diced wild onion bulbs. Drink the steaming water as a nutrient broth."
    ],
    survivalNotes: "Ensure you confirm wild onion has a distinct, strong onion/garlic aroma to avoid toxic lookalike Death Camas (which has NO onion scent)."
  },
  {
    id: "rec_beans_rice",
    name: "Complete Protein Ration (Survival Rice & Beans)",
    category: "cooking",
    tier: "A",
    prepTime: "40 minutes",
    calories: "450 kcal / serving",
    smokeRisk: "Low",
    shelfLife: "2 days cooked",
    ingredients: ["Rice", "Beans", "Clean Water", "Salt"],
    summary: "The quintessential disaster survival meal. Rice and beans combine to form all 9 essential amino acids, creating a complete biological protein.",
    instructions: [
      "1. Soak dry beans overnight or for at least 4 hours to reduce cook time and fuel consumption.",
      "2. Boil beans in 3 parts water until tender (approx. 30 minutes).",
      "3. Add 1 part white rice and salt to the pot.",
      "4. Cover tightly, remove to the cooler edge of campfire coals, and simmer for 15 minutes until liquid is absorbed."
    ],
    survivalNotes: "Crucial survival tip: Never eat raw or undercooked kidney beans—they contain toxic phytohaemagglutinin which requires at least 10 minutes of active boiling to neutralize."
  },
  {
    id: "rec_acorn_mash",
    name: "Leached Acorn Porridge",
    category: "cooking",
    tier: "B",
    prepTime: "2 hours (leaching)",
    calories: "380 kcal",
    smokeRisk: "Low",
    shelfLife: "3 days",
    ingredients: ["Oak Acorns", "Clean Water", "Salt"],
    summary: "Dense source of fats and carbohydrates. Oak acorns sustained prehistoric human civilizations across the Northern Hemisphere for millennia.",
    instructions: [
      "1. Collect sound acorns (reject any with worm exit holes or cracks).",
      "2. Crack and remove outer shells, extracting the nutmeat.",
      "3. Crush nutmeat into coarse meal.",
      "4. COLD/HOT WATER LEACHING: Soak acorn meal in repeated changes of clean water until all bitter, astringent tannins are washed away (taste a tiny crumb—if bitter, keep leaching!).",
      "5. Once sweet/nutty, boil leached meal with water and salt into a thick porridge."
    ],
    survivalNotes: "Tannins are toxic in high doses and cause kidney damage if not thoroughly leached out."
  },
  {
    id: "rec_bone_broth",
    name: "Mineral-Rich Bone Marrow Broth",
    category: "cooking",
    tier: "A",
    prepTime: "3 to 6 hours",
    calories: "220 kcal",
    smokeRisk: "Low (Smoldering Coals)",
    shelfLife: "3 days",
    ingredients: ["Clean Water", "Animal Bones", "Salt", "Wild Onion"],
    summary: "Extracts deep calcium, phosphorus, magnesium, gelatin, and collagen from scavenged animal carcasses.",
    instructions: [
      "1. Crack large animal leg bones open with a clean rock to expose inner nutrient-rich marrow.",
      "2. Place bones, marrow, wild onion, and salt into a lidded pot of clean water.",
      "3. Simmer over low, steady campfire coals for several hours until the liquid turns cloudy and rich.",
      "4. Drink hot to rehydrate, rebuild connective tissue, and soothe inflamed gut lining."
    ],
    survivalNotes: "One of the best convalescent meals for sick, injured, or hypothermic survivors."
  }
];
