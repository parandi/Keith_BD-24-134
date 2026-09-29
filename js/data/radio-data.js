// CAMAEL: Emergency Radio & Communications Directory
// Grid-down frequency references, distress transmission scripts, and Morse code dictionary

window.CAMAEL_RADIO = {
  frequencies: [
    {
      channel: "CB Channel 9",
      freq: "27.065 MHz AM",
      service: "Citizens Band (CB)",
      range: "2 to 10 miles",
      purpose: "Designated emergency and highway motorist assistance frequency.",
      notes: "Monitored by highway patrols, truckers, and community volunteer groups."
    },
    {
      channel: "Marine VHF Ch 16",
      freq: "156.800 MHz FM",
      service: "Marine Band",
      range: "Line-of-sight (15-25 miles)",
      purpose: "International maritime distress, safety, and calling channel.",
      notes: "Monitored 24/7 by Coast Guard and all commercial vessels. Strict emergency calling only."
    },
    {
      channel: "Aviation Guard",
      freq: "121.500 MHz AM (Civil) / 243.000 MHz (Military)",
      service: "Aviation Band",
      range: "High altitude (100+ miles)",
      purpose: "Aeronautical emergency distress frequency.",
      notes: "Monitored continuously by military radar and commercial airliners at 35,000 feet."
    },
    {
      channel: "HAM 2-Meter National Calling",
      freq: "146.520 MHz FM Simplex",
      service: "Amateur VHF",
      range: "5 to 30 miles (hundreds of miles via repeaters)",
      purpose: "Primary North American amateur radio calling frequency for emergencies.",
      notes: "FCC regulations allow ANY person (licensed or unlicensed) to transmit on any frequency during life-or-death emergencies."
    },
    {
      channel: "HAM 70-Centimeter Calling",
      freq: "446.000 MHz FM Simplex",
      service: "Amateur UHF",
      range: "3 to 15 miles (better urban/indoor penetration)",
      purpose: "Amateur radio emergency operations and urban communications.",
      notes: "Excellent building and concrete structure penetration."
    },
    {
      channel: "FRS Channel 1",
      freq: "462.5625 MHz FM",
      service: "Family Radio Service",
      range: "0.5 to 2 miles",
      purpose: "Common consumer walkie-talkie emergency hailing channel.",
      notes: "Default channel on most commercial blister-pack walkie-talkies (Motorola, Midland)."
    },
    {
      channel: "NOAA Weather Radio (NWR)",
      freq: "162.400 - 162.550 MHz (7 Channels)",
      service: "National Weather Radio",
      range: "40 miles from transmitter",
      purpose: "24/7 continuous weather warnings, hazard broadcasts, and civil emergency alerts.",
      notes: "Receivable on dedicated emergency crank radios."
    }
  ],

  distressScripts: [
    {
      call: "MAYDAY (3 Times)",
      severity: "IMMEDIATE GRAVE & IMMINENT DANGER TO LIFE",
      script: [
        "'MAYDAY, MAYDAY, MAYDAY.'",
        "'THIS IS [Your Name or Call Sign / Vessel / Group ID] (spoken 3 times).'",
        "'POSITION: [Coordinates or landmark distance & bearing].'",
        "'NATURE OF DISTRESS: [e.g. Sinking, trapped in wildfire, gunshot wound].'",
        "'ASSISTANCE REQUIRED: [Immediate medical evacuation, rescue].'",
        "'PERSONS ON BOARD / IN GROUP: [Total number of survivors].'",
        "'OVER.'"
      ]
    },
    {
      call: "PAN-PAN (3 Times)",
      severity: "URGENT SAFETY SITUATION (Not yet immediate life threat)",
      script: [
        "'PAN-PAN, PAN-PAN, PAN-PAN.'",
        "'ALL STATIONS (spoken 3 times).'",
        "'THIS IS [Call Sign / Group ID].'",
        "'POSITION: [Coordinates].'",
        "'NATURE OF PROBLEM: [e.g. Broken mast, disabled engine, lost in blizzard, 2 days food left].'",
        "'INTENTION: [Requesting towing, monitoring, or standby].'",
        "'OVER.'"
      ]
    }
  ],

  natoAlphabet: {
    A: "Alpha", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo", F: "Foxtrot",
    G: "Golf", H: "Hotel", I: "India", J: "Juliett", K: "Kilo", L: "Lima",
    M: "Mike", N: "November", O: "Oscar", P: "Papa", Q: "Quebec", R: "Romeo",
    S: "Sierra", T: "Tango", U: "Uniform", V: "Victor", W: "Whiskey", X: "X-ray",
    Y: "Yankee", Z: "Zulu"
  },

  morseCode: {
    A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.",
    H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.",
    O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-",
    V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
    "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
    " ": " / "
  }
};
