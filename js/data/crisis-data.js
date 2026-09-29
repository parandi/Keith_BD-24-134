// CAMAEL: "In Case Of..." Crisis Playbooks & Emergency Protocols
// Immediate-action checklists prioritized by First 60 Seconds -> 1 Hour -> 24 Hours

window.CAMAEL_CRISIS = [
  {
    id: "crisis_cpr",
    title: "In Case of: Cardiac Arrest / Unresponsive Victim",
    category: "medical",
    urgency: "IMMEDIATE (0-4 Minutes)",
    icon: "🫀",
    summary: "Brain death begins within 4 to 6 minutes of cardiac arrest. Immediate, relentless high-quality chest compressions at 100-120 BPM maintain cerebral perfusion.",
    first60s: [
      "Check responsiveness: Shake shoulders firmly and shout: 'Are you okay?!'",
      "Check breathing and carotid pulse for no more than 10 seconds. If gasping or absent, ACT IMMEDIATELY.",
      "Place victim flat on their back on a HARD surface (ground/floor, never a mattress).",
      "Kneel beside victim's chest. Interlock fingers, placing heel of hand directly on the center of the chest (lower half of sternum).",
      "Lock elbows straight, position shoulders directly over hands, and start CPR METRONOME (110 BPM)."
    ],
    nextHour: [
      "Compress hard and fast: 2 to 2.4 inches (5 to 6 cm) deep.",
      "Allow COMPLETE chest recoil between compressions without lifting hands off chest.",
      "If trained: 30 compressions followed by 2 rescue breaths (1 second each, watch chest rise).",
      "If untrained or in infection hazard: PUSH HARD AND FAST CONTINUOUSLY (Hands-Only CPR).",
      "Rotate compressor every 2 minutes to prevent rescuer fatigue and degradation of compression depth."
    ],
    extendedRules: "Do NOT stop compressions for more than 10 seconds. Continue until victim shows definite signs of life, an automated external defibrillator (AED) arrives, or you are physically exhausted."
  },
  {
    id: "crisis_nuclear",
    title: "In Case of: Nuclear Detonation & Fallout",
    category: "disaster",
    urgency: "CRITICAL (Immediate flash & shockwave)",
    icon: "☢️",
    summary: "Survivable if you evade the immediate thermal pulse and shelter from radioactive fallout during the rapid initial decay window governed by the 7-10 Rule.",
    first60s: [
      "FLASH SEEN: Turn completely away from the detonation flash immediately. Close eyes tightly and cover face with hands (prevents retinal flash blindness).",
      "DROP TO GROUND: Lie flat face-down behind any available solid barrier, curb, or ditch. Keep mouth slightly open and thumbs in ears (equalizes blast overpressure to prevent ruptured eardrums and lungs).",
      "WAIT FOR BLAST SHOCKWAVE: The blast wave travels at approx. 1 mile every 5 seconds. Expect two waves (outward blast + inward vacuum return). Wait at least 2 full minutes after flash before moving."
    ],
    nextHour: [
      "SHELTER IMMEDIATELY: You have approx. 15 to 20 minutes before radioactive fallout begins raining down from the mushroom cloud.",
      "BEST SHELTERS: Subterranean concrete basements, subway tunnels, underground parking garages, or interior rooms of multi-story brick/concrete buildings.",
      "SEAL AIRWAY: Cover nose and mouth with wet bandana or N95 mask to prevent inhaling radioactive alpha/beta fallout dust particles.",
      "SHIELDING FORMULA: 1 inch of lead = 2.4 inches of concrete = 3.6 inches of packed dirt/earth = 7.2 inches of water for 50% gamma radiation reduction."
    ],
    extendedRules: "THE 7-10 RULE: Radioactive fallout decays extremely rapidly. For every 7-fold increase in time post-detonation, radiation decreases by a factor of 10. (1 hr = 100 R/hr -> 7 hrs = 10 R/hr -> 49 hrs (~2 days) = 1 R/hr). Remain inside for a minimum of 48 to 72 hours before attempting short, covered egress."
  },
  {
    id: "crisis_thunderstorm",
    title: "In Case of: Severe Thunderstorm & Lightning",
    category: "weather",
    urgency: "HIGH (Incoming squall)",
    icon: "⛈️",
    summary: "Lightning carries up to 300 million volts and 30,000 amperes. Ground current and side flashes kill far more victims than direct strikes.",
    first60s: [
      "THE 30/30 RULE: Count seconds between lightning flash and thunder. If 30 seconds or less, lightning is within 6 miles (10 km)—you are in direct strike danger.",
      "GET DOWN FROM HEIGHTS: Immediately descend ridgelines, hilltops, peaks, and open plateaus.",
      "AVOID ISOLATED TREES: Never take shelter beneath a tall, solitary tree (acts as a primary lightning rod).",
      "DROP METAL OBJECTS: Drop trekking poles, metal frame backpacks, fishing rods, and step 10 meters away."
    ],
    nextHour: [
      "SHELTER LOCATION: Best shelter is a fully enclosed vehicle or a deep uniform stand of shorter trees in a low ravine (avoid dry creek beds that can flash flood).",
      "LIGHTNING CROUCH (If caught in the open with hair standing on end):",
      "- Squat low on the balls of your feet with heels touching together.",
      "- Tuck head between knees with hands over ears.",
      "- Minimizes your height and ensures ground current enters one foot and exits the other without traversing your heart."
    ],
    extendedRules: "Wait at least 30 minutes after the last clap of thunder before leaving shelter or resuming movement."
  },
  {
    id: "crisis_wildfire",
    title: "In Case of: Wildfire & Forest Burnover",
    category: "disaster",
    urgency: "EXTREME (Rapid front movement)",
    icon: "🔥",
    summary: "Wildfires travel faster uphill than downhill due to radiant preheating. Smoke inhalation, heat exhaustion, and oxygen depletion kill long before flames touch victims.",
    first60s: [
      "ASSESS WIND DIRECTION: Never attempt to outrun a wildfire uphill or downwind. Move perpendicular (flank) to the fire spread.",
      "SEEK NATURAL FIREBREAKS: Move toward wide paved highways, bare rock outcroppings, plowed fields, or already-burned ground ('the black').",
      "COVER AIRWAY: Wet cloth does NOT stop toxic gases (carbon monoxide)—breathe through dry cloth close to ground level where air is coolest and cleanest."
    ],
    nextHour: [
      "BURNOVER PROTOCOL (Trapped by incoming flame front):",
      "- Clear a 4x4 meter clearing down to bare mineral soil (remove all dry pine needles, brush, and grass).",
      "- Lie face down in a depression or scrape out a shallow trench.",
      "- Cover entire body with wool blanket, canvas tarp, or dirt/soil.",
      "- Protect airway by pressing mouth tightly to the dirt floor and breathing slowly."
    ],
    extendedRules: "The flame front typically passes in 2 to 5 minutes. Remain face down until the roaring sound subsides, then move into the cool blackened zone."
  },
  {
    id: "crisis_flood",
    title: "In Case of: Flash Flood & Swiftwater",
    category: "weather",
    urgency: "RAPID (Rising water)",
    icon: "🌊",
    summary: "Just 6 inches (15 cm) of fast-moving water can knock an adult off their feet. 12 inches (30 cm) will float a small car; 24 inches will sweep away SUVs and trucks.",
    first60s: [
      "TURN AROUND, DON'T DROWN: Never attempt to walk, wade, or drive through flooded roads or low water crossings.",
      "ABANDON VEHICLE: If vehicle stalls in rising water, unbuckle seatbelt, roll down windows immediately while electronics still work, and climb onto the roof.",
      "MOVE TO HIGH GROUND: Immediately move up hillsides or climb to upper stories of reinforced masonry buildings."
    ],
    nextHour: [
      "SWIFTWATER DEFENSIVE SWIMMING (If swept into current):",
      "- Turn onto your back with feet pointing DOWNSTREAM.",
      "- Keep toes pointed up out of the water to avoid foot entrapment between submerged rocks/branches.",
      "- Use arms to back-paddle diagonally across the current toward the riverbank.",
      "- If swept toward a strainer (fallen tree), swim aggressively OVER it, not under."
    ],
    extendedRules: "Assume all flood water is biologically and chemically contaminated with raw sewage, industrial oils, and downed powerlines. Boil all water before drinking."
  },
  {
    id: "crisis_cold",
    title: "In Case of: Blizzard & Extreme Hypothermia",
    category: "weather",
    urgency: "PROGRESSIVE (Hours to frostbite)",
    icon: "❄️",
    summary: "Cold kills through exposure, wet clothing, and wind chill. Prevention of heat loss is 10 times easier than rewarming a hypothermic survivor.",
    first60s: [
      "STOP SWEATING: Strip outer layers before heavy exertion. Sweat soaks clothing and conducts heat away from the body 25 times faster than dry air.",
      "GET OUT OF THE WIND: Wind chill strips heat exponentially. Construct a snow cave, debris hut, or shelter behind boulders immediately.",
      "INSULATE FROM THE GROUND: Never sit or sleep directly on snow, ice, or bare rock. Place dry pine boughs, leaves, or pack foam under your body."
    ],
    nextHour: [
      "HYPOTHERMIA TRIAGE:",
      "- Mild (Violent shivering, slurred speech): Dry clothing, warm sugary fluids, gentle movement.",
      "- Severe (Shivering STOPS, confusion, paradoxically undressing, apathy): Core emergency. Do NOT rub frostbitten limbs. Rewarm core (armpits, groin, neck) with body heat.",
      "CARBON MONOXIDE WARNING: If melting snow inside an enclosed tent or snow cave, ensure continuous ventilation hole at roof peak."
    ],
    extendedRules: "Never consume alcohol in freezing environments—it dilates peripheral blood vessels, giving a false sensation of warmth while rapidly dumping core body heat."
  },
  {
    id: "crisis_snakebite",
    title: "In Case of: Venomous Snakebite",
    category: "medical",
    urgency: "HIGH (Cytotoxic / Neurotoxic)",
    icon: "🐍",
    summary: "Modern medical evidence shows that cutting, sucking, or applying tourniquets causes severe tissue necrosis and amputations. Calmness and immobilization save lives.",
    first60s: [
      "MOVE AWAY: Step at least 2 meters back from the snake. Do NOT try to capture or kill it.",
      "STAY CALM & IMMOBILE: Panic and elevated heart rate accelerate venom circulation through the lymphatic system.",
      "REMOVE CONSTRICTIONS: Immediately strip rings, watches, bracelets, and tight boots before rapid limb swelling begins."
    ],
    nextHour: [
      "SPLINT & IMMOBILIZE: Splint the affected limb to prevent muscle flexion (muscle contraction pumps lymphatic venom).",
      "KEEP BELOW HEART LEVEL: Position the bitten area at or slightly below heart level.",
      "WHAT NEVER TO DO:",
      "- Do NOT cut the fang puncture wounds.",
      "- Do NOT try to suck out venom with mouth or vacuum kits.",
      "- Do NOT apply an arterial tourniquet (causes tissue death).",
      "- Do NOT apply ice or electric shock."
    ],
    extendedRules: "Mark the leading edge of swelling on the skin with a pen every 15 minutes noting the timestamp. Over 25% of venomous bites are 'dry bites' (no venom injected)."
  }
];
