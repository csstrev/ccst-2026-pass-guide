export const examDomains = [
  {
    title: "Calibration (Loop Checking)",
    icon: "🔧",
    weight: "38.3% — Largest Domain",
    items: [
      "Calibrate transmitters: pressure, temperature, level, flow, analytical",
      "Calibrate control valves and actuators (positioners, I/P converters)",
      "Verify and adjust 4-20 mA signal loops end-to-end",
      "Perform 5-point calibration: 0%, 25%, 50%, 75%, 100%",
      "Calculate % span, zero/span errors, linearity errors",
      "Use HART communicator for smart instrument configuration",
      "Document As-Found / As-Left calibration data",
      "Understand traceability to NIST standards",
    ],
  },
  {
    title: "Maintenance & Troubleshooting",
    icon: "🛠️",
    weight: "36.7% — Second Largest",
    items: [
      "Read and interpret P&IDs, loop diagrams, wiring diagrams",
      "Troubleshoot 4-20 mA loops using multimeter techniques",
      "Diagnose control valve issues: stiction, dead band, hysteresis",
      "Perform preventive and predictive maintenance procedures",
      "Troubleshoot fieldbus and HART communication failures",
      "Identify grounding and shielding problems in signal cables",
      "Understand redundancy: 1oo2, 2oo3 voting systems",
      "Work with Safety Instrumented Systems (SIS) and SIL ratings",
    ],
  },
  {
    title: "Installation & Project Management",
    icon: "📐",
    weight: "25% — Third Domain",
    items: [
      "Install instruments per ISA standards (ISA-5.1 symbols)",
      "Proper tubing, wiring, conduit, and cable tray installation",
      "Understand NEC/CEC classifications: Class I Div 1/2, Zone 0/1/2",
      "Intrinsic safety barriers: Zener, galvanic isolators",
      "Perform hydrostatic testing and leak detection",
      "Read spec sheets and datasheets for instrument selection",
      "Understand project lifecycle: FAT, SAT, commissioning",
      "Lockout/Tagout (LOTO) and permit-to-work procedures",
    ],
  },
];

export const cheatSheets = {
  signals: [
    { term: "4-20 mA", definition: "Standard analog signal. 4mA = 0%, 20mA = 100%. Live zero allows fault detection." },
    { term: "3-15 PSI", definition: "Pneumatic signal standard. 3 PSI = 0%, 15 PSI = 100%." },
    { term: "HART", definition: "Highway Addressable Remote Transducer. Digital over 4-20mA. FSK: 1200Hz = 1, 2200Hz = 0." },
    { term: "Foundation Fieldbus", definition: "All-digital, multi-drop. Control in the field. H1 = 31.25 kbps." },
    { term: "Profibus PA", definition: "Process automation fieldbus. 31.25 kbps. MBP signaling." },
  ],
  formulas: [
    { term: "% Span", definition: "((PV - LRV) / (URV - LRV)) × 100" },
    { term: "mA Output", definition: "((PV - LRV) / (URV - LRV)) × 16 + 4" },
    { term: "PV from mA", definition: "((mA - 4) / 16) × Span + LRV" },
    { term: "PSI Output", definition: "((PV - LRV) / (URV - LRV)) × 12 + 3" },
    { term: "Thermocouple", definition: "Seebeck effect. mV output. Requires CJC (Cold Junction Compensation)." },
    { term: "RTD (Pt100)", definition: "100Ω at 0°C. α = 0.00385Ω/Ω/°C. Use 3-wire or 4-wire." },
  ],
  controlValves: [
    { term: "Cv (Flow Coefficient)", definition: "GPM of water at 1 PSI ΔP. Cv = Q × √(SG/ΔP)" },
    { term: "Air-to-Open (ATO)", definition: "Fail-Closed. Signal increases → valve opens. Spring return." },
    { term: "Air-to-Close (ATC)", definition: "Fail-Open. Signal increases → valve closes. Spring return." },
    { term: "Equal %", definition: "Equal % change in Cv per unit stem travel. Best for most process control." },
    { term: "Linear", definition: "Direct proportional Cv to stem position. Used for level control." },
    { term: "Split Range", definition: "Multiple valves controlled by one output. e.g., 4-12mA V1, 12-20mA V2." },
  ],
  pid: [
    { term: "P (Proportional)", definition: "Corrects based on error magnitude. Gain = 100/PB%. Causes offset." },
    { term: "I (Integral)", definition: "Eliminates offset/steady-state error. Repeats/min or min/repeat. Can cause overshoot." },
    { term: "D (Derivative)", definition: "Predicts future error. Anticipatory. Sensitive to noise. Rate in minutes." },
    { term: "Direct Acting", definition: "Output increases as PV increases. Used for cooling, exothermic." },
    { term: "Reverse Acting", definition: "Output decreases as PV increases. Used for heating." },
    { term: "Tuning Order", definition: "1) Set I and D to zero 2) Increase P until oscillation 3) Add I 4) Add D if needed" },
  ],
};

export const keyFormulas = [
  {
    category: "Signal Conversion",
    formulas: [
      { name: "mA from % Signal", formula: "mA = (% / 100) × 16 + 4", note: "e.g., 50% = 12 mA" },
      { name: "% from mA", formula: "% = ((mA - 4) / 16) × 100", note: "e.g., 8 mA = 25%" },
      { name: "PSI from % Signal", formula: "PSI = (% / 100) × 12 + 3", note: "e.g., 50% = 9 PSI" },
      { name: "PV from mA", formula: "PV = ((mA - 4) / 16) × Span + LRV" },
    ],
  },
  {
    category: "Orifice Plate & Flow",
    formulas: [
      { name: "Flow (DP)", formula: "Q = k × √ΔP", note: "Square root relationship" },
      { name: "Beta Ratio", formula: "β = d / D", note: "d=bore, D=pipe. Typical: 0.2-0.7" },
      { name: "Cv", formula: "Cv = Q × √(SG / ΔP)", note: "Q in GPM, ΔP in PSI" },
    ],
  },
  {
    category: "Temperature",
    formulas: [
      { name: "°F to °C", formula: "°C = (°F - 32) × 5/9" },
      { name: "°C to °F", formula: "°F = (°C × 9/5) + 32" },
      { name: "RTD Resistance", formula: "R = R₀(1 + αΔT)", note: "Pt100: R₀=100Ω, α=0.00385" },
    ],
  },
  {
    category: "Electrical",
    formulas: [
      { name: "Ohm's Law", formula: "V = I × R", note: "V=volts, I=amps, R=ohms" },
      { name: "Loop Resistance", formula: "R_load = (V_supply - V_min) / 0.020", note: "Max load at 20mA" },
      { name: "Power", formula: "P = V × I = I²R = V²/R" },
    ],
  },
];

export const passingTips = [
  "Focus 75% of study time on Calibration and Maintenance — they make up 75% of the exam.",
  "Memorize the 4-20 mA to % conversion cold: every 1.6 mA = 10% of span.",
  "Know the difference between ATO/ATC (Air-to-Open/Close) and fail-safe positions.",
  "Practice 5-point calibration worksheets until they're second nature.",
  "Understand P&ID symbols per ISA-5.1 — expect 5-8 questions on reading diagrams.",
  "Know your thermocouple types: J (Iron-Constantan), K (Chromel-Alumel), T, E, S, R.",
  "RTD vs Thermocouple: RTD = more accurate, slower. TC = wider range, faster, cheaper.",
  "Understand SIL levels: SIL 1 (RRF 10-100), SIL 2 (100-1000), SIL 3 (1000-10000).",
  "Know hazardous area classifications: Class/Division vs Zone systems.",
  "HART communicator operations: read PV, set range, trim sensor, perform loop test.",
  "Control valve diagnostics: check for stiction, dead band > 2%, excessive hysteresis.",
  "PID tuning: P reduces error, I eliminates offset, D reduces overshoot. Tune in P→I→D order.",
  "Exam is 110 multiple choice questions in 3 hours. Budget ~1.5 min per question.",
  "Passing score is typically around 70% — you can miss about 33 questions.",
  "Use process of elimination: remove 2 obviously wrong answers, then decide between remaining.",
  "ISA offers a CCST study guide — it mirrors the exam blueprint closely.",
  "Don't overthink trick questions. The simplest, most standard answer is usually correct.",
  "Review your As-Found/As-Left documentation format — it shows up in scenario questions.",
];

export const quickReference = {
  tcTypes: [
    { term: "Type J", definition: "Iron/Constantan. -210 to 760°C. Not for oxidizing atmospheres." },
    { term: "Type K", definition: "Chromel/Alumel. -200 to 1260°C. Most common, general purpose." },
    { term: "Type T", definition: "Copper/Constantan. -200 to 370°C. Best for cryogenics." },
    { term: "Type E", definition: "Chromel/Constantan. -200 to 900°C. Highest mV output." },
    { term: "Type S/R", definition: "Platinum/Rhodium. 0 to 1480°C. High temp, expensive." },
  ],
  hazardousAreas: [
    { term: "Class I", definition: "Flammable gases or vapors (most common in process industry)" },
    { term: "Class II", definition: "Combustible dust" },
    { term: "Class III", definition: "Ignitable fibers/flyings" },
    { term: "Division 1", definition: "Hazard present under NORMAL conditions" },
    { term: "Division 2", definition: "Hazard present only under ABNORMAL conditions" },
    { term: "Zone 0", definition: "Continuous hazard (equivalent to Div 1+)" },
    { term: "Zone 1", definition: "Likely in normal operation (≈ Div 1)" },
    { term: "Zone 2", definition: "Not likely, only abnormal (≈ Div 2)" },
  ],
};
