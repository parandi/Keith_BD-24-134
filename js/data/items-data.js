// CAMAEL: Scavenger's Compendium & Barter Value Index
// Comprehensive encyclopedia of wild flora, fungi, deadly toxins, and scavenged raw materials

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
    edibility: "Essential Nutrient",
    barterValue: "Tier S (Priceless)",
    habitat: "Seacoasts, mineral salt flats, abandoned grocery stores",
    hazard: "Dehydration if consumed without water",
    description: "The most indispensable biological mineral on Earth. Crucial for life, nerve conduction, muscle contraction, and food preservation (salting meat/fish prevents bacterial decay for months).",
    survivalUsage: "Crucial component of WHO ORS formula. Used for tanning hides and preserving game. In historical collapses, salt was literally used as currency ('salary')."
  },
  {
    id: "item_antibiotics",
    name: "Medical Antibiotics (Amoxicillin / Cipro / Doxy)",
    symbol: "Rx",
    category: "materials",
    tier: "S",
    edibility: "Pharmaceutical",
    barterValue: "Tier S (Priceless)",
    habitat: "Pharmacies, veterinary clinics, hospital dispensaries",
    hazard: "Allergic anaphylaxis risk, expiration degradation",
    description: "The difference between life and death from minor scratches, infected teeth, contaminated water pathogens, or secondary pneumonia.",
    survivalUsage: "Keep in dry, dark, airtight containers. Sealed dry pill tablets often retain 80%+ potency years past printed expiration dates if kept cool."
  },
  {
    id: "item_bleach",
    name: "Household Bleach (Unscented 6% Sodium Hypochlorite)",
    symbol: "NaOCl",
    category: "materials",
    tier: "S",
    edibility: "TOXIC undiluted / Lifesaving disinfectant",
    barterValue: "Tier S (Priceless)",
    habitat: "Residential laundry rooms, supermarkets, maintenance closets",
    hazard: "Corrosive chemical burns if undiluted; never mix with ammonia/acids",
    description: "Chemical water purification powerhouse. A single gallon of unscented household bleach can disinfect thousands of liters of contaminated drinking water.",
    survivalUsage: "DOSAGE: 2 drops per 1 liter of clear water (wait 30 min). 4 drops per liter if cloudy/cold (wait 60 min). Scented bleaches contain toxic surfactants—NEVER use scented bleach!"
  },
  {
    id: "item_cattail",
    name: "Common Cattail (Typha latifolia)",
    symbol: "🌿",
    category: "flora",
    tier: "A",
    edibility: "100% Edible (All Parts)",
    barterValue: "Tier A (High Wild Resource)",
    habitat: "Freshwater wetlands, lake margins, roadside ditches",
    hazard: "Bioaccumulates heavy metals in polluted industrial runoff",
    description: "The 'Supermarket of the Wild'. Every part is usable: spring shoots taste like cucumber, pollen heads serve as flour substitute, rhizomes provide dense starch, fluffy seeddown makes emergency insulation.",
    survivalUsage: "Lookalikes: Iris (toxic) has flat leaves; cattail leaves are rounded/D-shaped at the base. Starch from rhizomes can be baked into ash cakes."
  },
  {
    id: "item_pine",
    name: "Eastern White Pine (Pinus strobus)",
    symbol: "🌲",
    category: "flora",
    tier: "A",
    edibility: "Needles & Inner Bark Edible",
    barterValue: "Tier A (High Utility)",
    habitat: "Temperate North American and Eurasian coniferous forests",
    hazard: "Avoid Ponderosa Pine and Yew (which are toxic)",
    description: "High-yield survival tree. Needles contain 4-5x more Vitamin C than oranges. The sweet inner bark (cambium) can be dried and ground into flour. Resin serves as waterproofing sealant and emergency fire starter.",
    survivalUsage: "Resin + powdered charcoal melted together creates 'pitch glue'—a waterproof rock-hard survival epoxy for arrows, knives, and leaky containers."
  },
  {
    id: "item_willow",
    name: "White Willow (Salix alba)",
    symbol: "🍃",
    category: "flora",
    tier: "A",
    edibility: "Inner Bark Medicinal (Salicin)",
    barterValue: "Tier A (High Medicinal)",
    habitat: "Riverbanks, stream margins, wet lowlands",
    hazard: "Aspirin sensitivity warning; do not use with stomach ulcers",
    description: "The natural forest pharmacy. Contains salicin, which the human liver converts into salicylic acid (natural aspirin). Reduces debilitating fevers and alleviates severe pain.",
    survivalUsage: "Flexible young green branches are also the #1 material for weaving fish traps, shelter lashings, and friction fire drill sets."
  },
  {
    id: "item_yarrow",
    name: "Common Yarrow (Achillea millefolium)",
    symbol: "🌼",
    category: "flora",
    tier: "A",
    edibility: "Medicinal / Herbal Tea",
    barterValue: "Tier A (Battlefield Hemostatic)",
    habitat: "Meadows, grasslands, roadsides worldwide",
    hazard: "Lookalike: Poison Hemlock has smooth purple-spotted stems (yarrow has hairy grooved stems)",
    description: "Known since Trojan War antiquity as 'Soldier's Woundwort'. Crushed yarrow leaves applied directly into deep lacerations act as a powerful styptic/coagulant to stop severe bleeding.",
    survivalUsage: "Chewing fresh leaves numbs toothache pain. Infusion treats colds and high fevers."
  },
  {
    id: "item_dandelion",
    name: "Common Dandelion (Taraxacum officinale)",
    symbol: "🌻",
    category: "flora",
    tier: "B",
    edibility: "100% Edible & Non-Toxic",
    barterValue: "Tier B (Nutritional Security)",
    habitat: "Lawns, pastures, fields, disturbed soil globally",
    hazard: "Pesticide contamination in suburban yards",
    description: "Every millimeter of the plant is edible and packed with vitamins A, C, K, potassium, and calcium. Leaves are eaten raw or steamed; roots roasted as coffee substitute.",
    survivalUsage: "Roots stimulate liver detoxification and bile production. Leaves act as a gentle, potassium-sparing diuretic."
  },
  {
    id: "item_stinging_nettle",
    name: "Stinging Nettle (Urtica dioica)",
    symbol: "🌱",
    category: "flora",
    tier: "B",
    edibility: "Edible when cooked; Cordage Fiber",
    barterValue: "Tier B (Food & Strong Cordage)",
    habitat: "Moist soil, woodland edges, riverbanks",
    hazard: "Formic acid stings on contact when raw; wear gloves",
    description: "Higher protein content than almost any leafy green. Cooking or drying instantly destroys the stinging formic acid hairs, turning it into rich, spinach-like food.",
    survivalUsage: "The dried fibrous outer stems produce some of the strongest natural wilderness cordage and fishing line known to survivalists."
  },
  {
    id: "item_oak_acorns",
    name: "Oak Acorns (Quercus species)",
    symbol: "🌰",
    category: "flora",
    tier: "B",
    edibility: "Edible AFTER Leaching Tannins",
    barterValue: "Tier B (Dense Carbohydrate & Fat)",
    habitat: "Deciduous and mixed forests worldwide",
    hazard: "Raw acorns contain high tannic acid which damages kidneys and liver",
    description: "One of nature's highest calorie autumn drops. Rich in clean vegetable fats and carbohydrates.",
    survivalUsage: "Must be crushed and leached through multiple changes of water until bitterness disappears before cooking into cakes or porridge."
  },
  {
    id: "item_batteries",
    name: "Alkaline & Lithium Batteries (AA / AAA / 18650)",
    symbol: "🔋",
    category: "materials",
    tier: "A",
    edibility: "DEADLY TOXIC / Non-edible",
    barterValue: "Tier A (High Trade)",
    habitat: "Abandoned electronics, flashlights, smoke detectors, remotes",
    hazard: "Corrosive acid/alkali leakage, fire hazard if punctured",
    description: "Crucial power source for headlamps, emergency walkie-talkies, and medical devices in grid-down scenarios.",
    survivalUsage: "FIRE STARTING: A single AA battery shorted across fine steel wool or a gum wrapper instantly creates an ember to start an emergency fire."
  },
  {
    id: "item_car_battery",
    name: "12V Lead-Acid Vehicle Battery",
    symbol: "⚡",
    category: "materials",
    tier: "A",
    edibility: "EXTREMELY HAZARDOUS / Sulfuric Acid",
    barterValue: "Tier A (Power Generation)",
    habitat: "Abandoned vehicles, engine bays, marine docks",
    hazard: "Sulfuric acid burns, explosive hydrogen gas during charging",
    description: "Heavy-duty power reserve. Can run 12V inverters, charge critical radios for weeks, or power camp perimeter LED security lights.",
    survivalUsage: "Can be recharged via small solar panels, vehicle alternators, or stream waterwheels."
  },
  {
    id: "item_copper_pipe",
    name: "Scrap Copper Tubing & Wire",
    symbol: "Cu",
    category: "materials",
    tier: "B",
    edibility: "Non-edible",
    barterValue: "Tier B (Crafting & Stills)",
    habitat: "Residential plumbing, HVAC condensers, electrical breaker panels",
    hazard: "Sharp edges",
    description: "High thermal and electrical conductivity. Essential for building water distillation coils, solar thermal heaters, or improvised antennas.",
    survivalUsage: "A coiled copper pipe immersed in cold water allows you to distill pure drinkable water from sea water or contaminated chemical effluent."
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
    habitat: "Roadsides, ditch banks, pastures, damp fields",
    hazard: "Contains coniine; causes progressive muscular paralysis, respiratory failure, and death within 2-3 hours while fully conscious",
    description: "The plant that killed Socrates. Lookalike alert: Easily mistaken for wild carrot (Queen Anne's lace), wild parsley, or yarrow.",
    survivalUsage: "IDENTIFICATION KEY: Smooth, hollow, hairless stem with distinct irregular PURPLE BLOTCHES. Foul mousy smell when crushed. (Wild carrot has hairy stems with NO purple spots)."
  },
  {
    id: "item_death_cap",
    name: "Death Cap Mushroom (Amanita phalloides)",
    symbol: "🍄☠️",
    category: "toxic",
    tier: "DANGER",
    edibility: "DEADLY TOXIC (Single Cap Kills an Adult)",
    barterValue: "Zero / Extreme Hazard",
    hazard: "Amatoxins resist boiling, cooking, drying, or freezing. Causes irreversible liver and kidney necrosis.",
    habitat: "Under oak, chestnut, and beech trees in temperate zones",
    description: "Responsible for the vast majority of fatal mushroom poisonings worldwide. Tastes pleasant, which tricks victims into consuming a lethal dose.",
    survivalUsage: "SYMPTOM DELAY: No symptoms for 6-24 hours! Then violent vomiting and diarrhea, followed by a 'false recovery' period, ending in irreversible liver failure and coma."
  },
  {
    id: "item_nightshade",
    name: "Deadly Nightshade / Belladonna (Atropa belladonna)",
    symbol: "☠️",
    category: "toxic",
    tier: "DANGER",
    edibility: "DEADLY TOXIC (Contains Atropine & Scopolamine)",
    barterValue: "Zero / Dangerous",
    habitat: "Chalky limestone soils, forest clearings, scrubland",
    hazard: "Ingesting as few as 2 to 4 sweet black berries can be fatal to a child; 10 to 20 for an adult",
    description: "Produces shiny, jet-black berries seated in a five-lobed green star calyx. Causes dilated pupils, extreme delirium, tachycardia, and respiratory arrest.",
    survivalUsage: "Avoid any plant with solitary black berries nestled inside a green star-shaped leafy cup."
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
