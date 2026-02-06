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
      "Bench calibration vs. field calibration differences",
      "Calibration tolerance and acceptance criteria (±0.25% typical)",
      "Deadweight tester operation for pressure calibration",
      "RTD and thermocouple simulator usage",
      "Multi-variable transmitter calibration procedures",
      "Understand turndown ratio and rangeability",
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
      "Signal noise troubleshooting: EMI, RFI, ground loops",
      "Use of oscilloscope for signal analysis",
      "Vibration monitoring for rotating equipment",
      "Root cause analysis (RCA) methodology",
      "Mean Time Between Failure (MTBF) and Mean Time To Repair (MTTR)",
      "Instrument air quality: ISO 8573 standards",
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
      "Instrument mounting: flush, extended diaphragm, remote seal",
      "Impulse line installation: slope, heat tracing, seal pots",
      "Cable sizing, voltage drop calculations for long runs",
      "DCS/PLC I/O card types: AI, AO, DI, DO configuration",
      "Loop power supply sizing and load calculations",
      "MOC (Management of Change) procedures",
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
    { term: "Modbus RTU", definition: "Serial protocol. RS-485 wiring. Master/Slave. CRC error checking." },
    { term: "Modbus TCP", definition: "Modbus over Ethernet/IP. Port 502. Client/Server model." },
    { term: "WirelessHART", definition: "IEEE 802.15.4 based. 2.4 GHz. Mesh network. IEC 62591." },
    { term: "ISA-100.11a", definition: "Industrial wireless standard. 2.4 GHz. Star/mesh topology." },
  ],
  formulas: [
    { term: "% Span", definition: "((PV - LRV) / (URV - LRV)) × 100" },
    { term: "mA Output", definition: "((PV - LRV) / (URV - LRV)) × 16 + 4" },
    { term: "PV from mA", definition: "((mA - 4) / 16) × Span + LRV" },
    { term: "PSI Output", definition: "((PV - LRV) / (URV - LRV)) × 12 + 3" },
    { term: "Thermocouple", definition: "Seebeck effect. mV output. Requires CJC (Cold Junction Compensation)." },
    { term: "RTD (Pt100)", definition: "100Ω at 0°C. α = 0.00385Ω/Ω/°C. Use 3-wire or 4-wire." },
    { term: "Error %", definition: "Error % = ((Actual - Expected) / Span) × 100" },
    { term: "Repeatability", definition: "Max difference between readings at same point, same direction." },
  ],
  controlValves: [
    { term: "Cv (Flow Coefficient)", definition: "GPM of water at 1 PSI ΔP. Cv = Q × √(SG/ΔP)" },
    { term: "Air-to-Open (ATO)", definition: "Fail-Closed. Signal increases → valve opens. Spring return." },
    { term: "Air-to-Close (ATC)", definition: "Fail-Open. Signal increases → valve closes. Spring return." },
    { term: "Equal %", definition: "Equal % change in Cv per unit stem travel. Best for most process control." },
    { term: "Linear", definition: "Direct proportional Cv to stem position. Used for level control." },
    { term: "Split Range", definition: "Multiple valves controlled by one output. e.g., 4-12mA V1, 12-20mA V2." },
    { term: "Positioner", definition: "Compares valve position to signal. Overcomes friction. I/P + feedback." },
    { term: "Stroking Time", definition: "Time for valve to travel full stroke. Test with step input signal." },
  ],
  pid: [
    { term: "P (Proportional)", definition: "Corrects based on error magnitude. Gain = 100/PB%. Causes offset." },
    { term: "I (Integral)", definition: "Eliminates offset/steady-state error. Repeats/min or min/repeat. Can cause overshoot." },
    { term: "D (Derivative)", definition: "Predicts future error. Anticipatory. Sensitive to noise. Rate in minutes." },
    { term: "Direct Acting", definition: "Output increases as PV increases. Used for cooling, exothermic." },
    { term: "Reverse Acting", definition: "Output decreases as PV increases. Used for heating." },
    { term: "Tuning Order", definition: "1) Set I and D to zero 2) Increase P until oscillation 3) Add I 4) Add D if needed" },
    { term: "Cascade Control", definition: "Two controllers: primary (master) sets SP for secondary (slave). Faster response." },
    { term: "Feedforward", definition: "Measures disturbance directly. Acts before error occurs. Combined with feedback." },
    { term: "Ratio Control", definition: "Maintains fixed ratio between two flows. Wild flow + controlled flow." },
  ],
  measurement: [
    { term: "DP Level", definition: "Level = ΔP / (ρ × g). Requires wet/dry leg compensation. Suppression/elevation." },
    { term: "Radar Level", definition: "Non-contact. FMCW or pulse. Not affected by vapor. Good for solids." },
    { term: "Ultrasonic Level", definition: "Non-contact. Speed of sound. Affected by foam, vapor, temperature." },
    { term: "Magnetic Flow", definition: "Faraday's law. Conductive fluids only. No pressure drop. Liner selection critical." },
    { term: "Coriolis Flow", definition: "Mass flow direct. Measures density too. High accuracy. Expensive." },
    { term: "Vortex Flow", definition: "Von Kármán effect. Min Reynolds number required. Gas, liquid, steam." },
    { term: "pH Measurement", definition: "0-14 scale. 7 = neutral. Glass electrode + reference. Nernst equation." },
    { term: "Dissolved Oxygen", definition: "Galvanic or polarographic sensor. Membrane-based. ppm or % saturation." },
  ],
  safetyystems: [
    { term: "SIL 1", definition: "Risk Reduction Factor 10-100. PFD: 0.1 to 0.01. Basic safety." },
    { term: "SIL 2", definition: "RRF 100-1,000. PFD: 0.01 to 0.001. Most process industry." },
    { term: "SIL 3", definition: "RRF 1,000-10,000. PFD: 0.001 to 0.0001. High integrity." },
    { term: "SIF", definition: "Safety Instrumented Function. Sensor + logic solver + final element." },
    { term: "Proof Test", definition: "Periodic test to detect dangerous undetected failures. Interval affects PFD." },
    { term: "1oo1", definition: "One out of one. Single channel. No redundancy. Lowest integrity." },
    { term: "1oo2", definition: "One out of two. Either channel trips. More spurious trips, fewer dangerous failures." },
    { term: "2oo3", definition: "Two out of three. Voting. Best balance of safety and availability." },
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
      { name: "mA from PV", formula: "mA = ((PV - LRV) / Span) × 16 + 4" },
    ],
  },
  {
    category: "Orifice Plate & Flow",
    formulas: [
      { name: "Flow (DP)", formula: "Q = k × √ΔP", note: "Square root relationship" },
      { name: "Beta Ratio", formula: "β = d / D", note: "d=bore, D=pipe. Typical: 0.2-0.7" },
      { name: "Cv", formula: "Cv = Q × √(SG / ΔP)", note: "Q in GPM, ΔP in PSI" },
      { name: "Reynolds Number", formula: "Re = (ρ × v × D) / μ", note: "Turbulent > 4000, Laminar < 2100" },
    ],
  },
  {
    category: "Temperature",
    formulas: [
      { name: "°F to °C", formula: "°C = (°F - 32) × 5/9" },
      { name: "°C to °F", formula: "°F = (°C × 9/5) + 32" },
      { name: "RTD Resistance", formula: "R = R₀(1 + αΔT)", note: "Pt100: R₀=100Ω, α=0.00385" },
      { name: "°C to Kelvin", formula: "K = °C + 273.15", note: "Absolute temperature scale" },
      { name: "°F to Rankine", formula: "°R = °F + 459.67", note: "Absolute Fahrenheit scale" },
    ],
  },
  {
    category: "Electrical",
    formulas: [
      { name: "Ohm's Law", formula: "V = I × R", note: "V=volts, I=amps, R=ohms" },
      { name: "Loop Resistance", formula: "R_load = (V_supply - V_min) / 0.020", note: "Max load at 20mA" },
      { name: "Power", formula: "P = V × I = I²R = V²/R" },
      { name: "Wheatstone Bridge", formula: "R_unknown = R3 × (R2/R1)", note: "Used in RTD circuits" },
      { name: "Wire Resistance", formula: "R = ρL/A", note: "ρ=resistivity, L=length, A=area" },
    ],
  },
  {
    category: "Pressure & Level",
    formulas: [
      { name: "Hydrostatic Pressure", formula: "P = ρ × g × h", note: "ρ=density, g=9.81, h=height" },
      { name: "DP Level (wet leg)", formula: "Level = (DP + suppression) / (ρ × g)" },
      { name: "Absolute Pressure", formula: "P_abs = P_gauge + P_atm", note: "P_atm ≈ 14.7 PSIA" },
      { name: "Specific Gravity", formula: "SG = ρ_fluid / ρ_water", note: "Water = 1.0 at 4°C" },
    ],
  },
  {
    category: "Calibration Error",
    formulas: [
      { name: "Zero Error", formula: "Zero Error = Reading_0% - LRV", note: "Check at 0% input" },
      { name: "Span Error", formula: "Span Error = Reading_100% - URV", note: "Check at 100% input" },
      { name: "Linearity Error", formula: "Max deviation from ideal straight line" },
      { name: "% Error", formula: "% Error = (Error / Span) × 100", note: "Must be within tolerance" },
      { name: "Hysteresis", formula: "Max |Up_reading - Down_reading|", note: "Same test point, opposite direction" },
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
  "Know the difference between 2-wire, 3-wire, and 4-wire RTD configurations and when to use each.",
  "Understand the square root relationship between DP and flow — Q = k√ΔP is heavily tested.",
  "Remember: 250Ω resistor converts 4-20mA to 1-5V for HART communication.",
  "Study ISA tag numbering: First letter = measured variable, subsequent = function (e.g., FIC = Flow Indicating Controller).",
  "Know your valve trim types: equal %, linear, quick-opening — and when each is used.",
  "Understand cascade control: primary controller output = secondary controller setpoint.",
  "Grounding rule: shield grounded at ONE end only (usually control room end) to prevent ground loops.",
  "For pressure transmitters: know the difference between gauge, absolute, and differential.",
  "Understand the purpose of seal pots, condensate pots, and diaphragm seals in impulse lines.",
  "Know NEC/CEC: Class I = gases, Class II = dust, Class III = fibers. Division 1 = normal, Division 2 = abnormal.",
  "Smart transmitter trim types: sensor trim (adjusts to actual input) vs. output trim (adjusts mA output).",
  "LOTO procedure order: notify → shut down → isolate → lock/tag → verify zero energy → work.",
  "Orifice plate orientation: bevel faces downstream, handle/tab points upstream. Drain hole at bottom for gas.",
  "Control loop modes: Manual, Auto, Cascade, Remote. Know when each is used and how to transfer between them.",
  "Bernoulli's principle: fluid velocity increases → pressure decreases. Basis for DP flow measurement.",
  "Know the 3 types of orifice plate taps: flange taps (most common), corner taps, and D-D/2 taps.",
  "Understand bubbler/dip tube level measurement: constant air flow, measures back-pressure = level.",
  "Capacitance level probes: measure dielectric change. Good for interface detection in two liquids.",
  "Nuclear/radiometric level: gamma source + detector. Non-contact through vessel walls. Licensed source.",
  "Understand PLC scan cycle: Input scan → Program execution → Output scan → Housekeeping. Typical 10-50ms.",
  "DCS vs SCADA: DCS = continuous control, plant-wide. SCADA = remote monitoring, wide geographic area.",
  "Know common failure modes: fail-open, fail-closed, fail-last, fail-safe. Choose based on process risk.",
  "Understand the difference between accuracy, precision, repeatability, and reproducibility.",
  "Rangeability = URV/LRV. Turndown ratio = max measurable / min measurable. Higher = more flexible.",
  "For analytical instruments: know pH, conductivity, turbidity, dissolved O₂ calibration procedures.",
  "Understand loop diagrams vs P&IDs: loop diagrams show wiring detail, P&IDs show process connections.",
  "Cable types: twisted pair (signal), coax (high freq), fiber optic (long distance, no EMI). Know when to use each.",
  "Pressure element types: Bourdon tube (C, spiral, helical), bellows, diaphragm. Know applications.",
  "Understand warm-up time requirements for analytical instruments (pH: 15-30 min, analyzers: 1-4 hrs).",
];

export const quickReference = {
  tcTypes: [
    { term: "Type J", definition: "Iron/Constantan. -210 to 760°C. Not for oxidizing atmospheres." },
    { term: "Type K", definition: "Chromel/Alumel. -200 to 1260°C. Most common, general purpose." },
    { term: "Type T", definition: "Copper/Constantan. -200 to 370°C. Best for cryogenics." },
    { term: "Type E", definition: "Chromel/Constantan. -200 to 900°C. Highest mV output." },
    { term: "Type S/R", definition: "Platinum/Rhodium. 0 to 1480°C. High temp, expensive." },
    { term: "Type N", definition: "Nicrosil/Nisil. -270 to 1300°C. Better stability than K at high temp." },
    { term: "Type B", definition: "Platinum-Rhodium. 0 to 1820°C. Highest temp range. No CJC needed at room temp." },
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
    { term: "Intrinsic Safety", definition: "Limits energy in hazardous area. Zener barrier or galvanic isolator." },
    { term: "Explosion Proof", definition: "Contains explosion within enclosure. Heavy, sealed fittings required." },
    { term: "Purging/Pressurization", definition: "Type X, Y, Z. Keeps hazardous gas out with clean air/inert gas." },
  ],
  isaSymbols: [
    { term: "First Letter", definition: "Measured variable: F=Flow, L=Level, P=Pressure, T=Temp, A=Analytical" },
    { term: "Modifiers", definition: "D=Differential, F=Ratio, Q=Totalize, J=Scan, K=Time Rate of Change" },
    { term: "Function Letters", definition: "I=Indicate, R=Record, C=Control, T=Transmit, V=Valve, E=Element, S=Switch" },
    { term: "Circle (bubble)", definition: "Field-mounted instrument (no line). Board-mounted (single line). DCS/shared (dashed)." },
    { term: "FIC 101", definition: "Flow Indicating Controller, loop 101. F=Flow, I=Indicate, C=Control." },
    { term: "Line Types", definition: "Solid = process. Dashed = signal. Double = pneumatic. Triple line with dots = software/data." },
  ],
  commonAcronyms: [
    { term: "PV / SP / OP", definition: "Process Variable / Set Point / Output. The 3 key controller parameters." },
    { term: "LRV / URV", definition: "Lower Range Value / Upper Range Value. Defines transmitter calibration range." },
    { term: "FAT / SAT", definition: "Factory Acceptance Test / Site Acceptance Test. Pre-install and post-install verification." },
    { term: "DCS vs PLC", definition: "DCS = continuous process, distributed. PLC = discrete/batch, centralized logic." },
    { term: "SIS / SIF / SIL", definition: "Safety Instrumented System / Function / Level. IEC 61511 standard." },
    { term: "MOC", definition: "Management of Change. Required procedure before modifying any safety-critical system." },
    { term: "MTBF / MTTR", definition: "Mean Time Between Failure / Mean Time To Repair. Key reliability metrics." },
    { term: "RRF / PFD", definition: "Risk Reduction Factor / Probability of Failure on Demand. PFD = 1/RRF." },
  ],
  wiring: [
    { term: "2-Wire Transmitter", definition: "Power and signal on same pair. 4-20mA loop-powered. Most common." },
    { term: "3-Wire Transmitter", definition: "Separate power (+, -, signal). Used when more power needed." },
    { term: "4-Wire Transmitter", definition: "Separate power supply. Signal output independent. Higher power devices." },
    { term: "3-Wire RTD", definition: "Compensates for lead resistance. Two wires on one side, one on other." },
    { term: "4-Wire RTD", definition: "Best accuracy. Eliminates all lead resistance error. Lab/precision use." },
    { term: "Thermowell", definition: "Protective tube for TC/RTD. Protects from pressure, flow, corrosion." },
    { term: "Extension Wire", definition: "Same alloy as TC. For extending TC to junction box. Must match type." },
  ],
};

export const troubleshootingGuides = [
  {
    category: "4-20 mA Loop Problems",
    icon: "🔌",
    scenarios: [
      { symptom: "Reading 0 mA (no signal)", cause: "Open circuit — broken wire, loose terminal, blown fuse", fix: "Check continuity with multimeter. Inspect terminals, junction boxes, fuses." },
      { symptom: "Reading < 4 mA", cause: "Partial open, high resistance connection, or transmitter fault", fix: "Measure mA at transmitter output. Check for corroded terminals, water ingress." },
      { symptom: "Reading stuck at 4 mA", cause: "Transmitter in fault mode, or input below LRV", fix: "Check PV at transmitter. Verify range (LRV/URV). Check for blocked impulse lines." },
      { symptom: "Reading stuck at 20 mA", cause: "Input above URV, or transmitter saturation", fix: "Verify process value. Check for overpressure. Recalibrate if needed." },
      { symptom: "Reading > 20 mA", cause: "Short circuit or transmitter failure", fix: "Disconnect load. Measure transmitter output directly. Replace if faulty." },
      { symptom: "Erratic/noisy signal", cause: "EMI, ground loop, loose connection, or bad shielding", fix: "Check shield grounding (one end only). Separate signal cables from power. Tighten connections." },
      { symptom: "Slow response", cause: "Damping too high, blocked impulse line, or sensor degradation", fix: "Reduce damping setting. Clean/blow down impulse lines. Check sensor condition." },
    ],
  },
  {
    category: "Control Valve Issues",
    icon: "🔩",
    scenarios: [
      { symptom: "Valve doesn't move", cause: "No air supply, failed I/P converter, or mechanical seizure", fix: "Check air supply pressure (typically 20 PSI). Test I/P output. Check for packing too tight." },
      { symptom: "Valve oscillates/hunts", cause: "Oversized valve, positioner gain too high, or friction", fix: "Check Cv sizing. Reduce positioner gain. Lubricate or repack valve." },
      { symptom: "Valve sticks (stiction)", cause: "Packing too tight, corrosion, process buildup", fix: "Adjust packing torque. Clean valve trim. Consider PTFE packing." },
      { symptom: "Valve leaks through", cause: "Damaged seat/plug, erosion, or cavitation damage", fix: "Inspect seat and plug. Replace trim. Check for cavitation (noise, vibration)." },
      { symptom: "Slow stroking time", cause: "Low air supply, tubing restriction, or volume booster needed", fix: "Check air supply. Inspect tubing for kinks. Add volume booster for large actuators." },
      { symptom: "Positioner won't calibrate", cause: "Feedback linkage broken, I/P failure, or board fault", fix: "Check feedback arm connection. Verify I/P output. Auto-calibrate or replace." },
    ],
  },
  {
    category: "Temperature Measurement",
    icon: "🌡️",
    scenarios: [
      { symptom: "TC reads ambient temp", cause: "Open TC circuit — broken wire or bad connection", fix: "Check continuity. TC open circuit defaults to CJC (ambient) temperature." },
      { symptom: "TC reads too high", cause: "Wrong TC type configured, or reversed polarity", fix: "Verify TC type matches transmitter config. Check wire color codes and polarity." },
      { symptom: "TC reads erratic", cause: "Intermittent connection, EMI, or moisture in junction", fix: "Inspect connections. Check for water in thermowell. Re-route away from motors/VFDs." },
      { symptom: "RTD reads too high", cause: "Lead wire resistance (2-wire), or partial short", fix: "Upgrade to 3-wire or 4-wire. Measure lead resistance. Check insulation." },
      { symptom: "RTD reads 0 or negative", cause: "Short circuit in RTD element", fix: "Measure resistance at RTD. Should be ~100Ω at 0°C (Pt100). Replace if shorted." },
      { symptom: "Slow response time", cause: "Thermowell too thick, air gap, or wrong insertion depth", fix: "Use thermal compound in thermowell. Verify insertion depth (min 10× element diameter)." },
    ],
  },
  {
    category: "Pressure Transmitter",
    icon: "📊",
    scenarios: [
      { symptom: "Reading always zero", cause: "Blocked impulse line, closed isolation valve, or failed sensor", fix: "Check isolation valves open. Blow down impulse lines. Verify at transmitter." },
      { symptom: "Reading drifts slowly", cause: "Seal leak, diaphragm creep, or temperature effect", fix: "Check for fill fluid leaks. Verify zero at atmospheric. Apply temperature compensation." },
      { symptom: "DP reads wrong level", cause: "Wrong SG, reference leg problem, or incorrect suppression", fix: "Verify specific gravity. Check wet/dry leg condition. Recalculate suppression/elevation." },
      { symptom: "Reading fluctuates with process", cause: "Pulsation from pump, inadequate snubber, or line vibration", fix: "Add pulsation dampener/snubber. Use longer impulse lines. Add dampening in transmitter." },
    ],
  },
  {
    category: "Communication Failures",
    icon: "📡",
    scenarios: [
      { symptom: "HART no communication", cause: "No 250Ω resistor, wrong polarity, or device address conflict", fix: "Verify 250Ω load resistor in loop. Check HART device address (0 for point-to-point). Check polarity." },
      { symptom: "Fieldbus segment down", cause: "Terminator missing, wrong polarity, or trunk cable fault", fix: "Verify terminators at both ends. Check polarity on all devices. Test cable with segment checker." },
      { symptom: "Modbus timeout errors", cause: "Wrong baud rate, parity mismatch, or address conflict", fix: "Verify all devices match: baud rate, parity, stop bits. Check for duplicate addresses." },
      { symptom: "Wireless signal drops", cause: "Interference, obstruction, or low battery", fix: "Check signal strength. Remove obstructions. Replace batteries. Add repeater if needed." },
    ],
  },
];

export const toolsReference = [
  {
    category: "Calibration Tools",
    tools: [
      { name: "Deadweight Tester", use: "Primary pressure standard. Precise piston-cylinder. Accuracy: ±0.015% to ±0.1%." },
      { name: "Pressure Hand Pump", use: "Generates pneumatic/hydraulic pressure for field calibration. Not a standard." },
      { name: "Decade Resistance Box", use: "Simulates RTD resistance values for calibration. 0.01Ω resolution typical." },
      { name: "mA Calibrator (Fluke 787)", use: "Sources, simulates, and measures 4-20mA. Also measures voltage and resistance." },
      { name: "TC/RTD Simulator", use: "Generates precise mV (TC) or Ω (RTD) values for transmitter calibration." },
      { name: "HART Communicator", use: "Configures smart transmitters. Read PV, set range, trim, loop test, diagnostics." },
      { name: "Documenting Calibrator", use: "Records As-Found/As-Left data automatically. Traceability to NIST." },
    ],
  },
  {
    category: "Troubleshooting Tools",
    tools: [
      { name: "Digital Multimeter", use: "Measure V, I, Ω. For 4-20mA: measure across 250Ω resistor or use mA clamp." },
      { name: "Clamp-on mA Meter", use: "Measures loop current without breaking the circuit. Non-intrusive." },
      { name: "Loop Calibrator", use: "Sources and measures 4-20mA simultaneously. Can power 2-wire transmitters." },
      { name: "Megohmmeter (Megger)", use: "Tests cable insulation resistance. Apply 250V/500V/1000V. Good > 1MΩ." },
      { name: "Oscilloscope", use: "View signal waveform. Diagnose noise, frequency issues. Essential for fieldbus." },
      { name: "Vibration Analyzer", use: "Measures bearing condition, imbalance, misalignment on rotating equipment." },
      { name: "Infrared Thermometer", use: "Non-contact temperature. Check for hot spots, verify process temp externally." },
      { name: "Thermal Imaging Camera", use: "Detect heat patterns. Find loose connections, overloaded circuits, insulation failures." },
    ],
  },
  {
    category: "Installation Tools",
    tools: [
      { name: "Tubing Bender", use: "Bend SS or copper tubing without kinking. Min bend radius = 3× tube OD." },
      { name: "Tube Cutter", use: "Clean square cut on instrument tubing. Deburr after cutting." },
      { name: "Torque Wrench", use: "Proper fitting tightening. Over-torque = leak or crack. Under-torque = leak." },
      { name: "Swaging Tool", use: "For compression fittings (Swagelok). Proper gap inspection after swaging." },
      { name: "Cable Tester", use: "Verify cable continuity, shorts, crosses. TDR for locating cable faults." },
      { name: "Level/Plumb/Square", use: "Proper instrument mounting orientation. Critical for DP transmitters." },
    ],
  },
];

export const examTraps = [
  { trap: "Confusing ATO with ATC", explanation: "ATO (Air-to-Open) = Fail-CLOSED. ATC (Air-to-Close) = Fail-OPEN. Think: what happens when air FAILS — that's the fail position." },
  { trap: "Mixing up Direct/Reverse acting controller", explanation: "Direct: output ↑ when PV ↑ (cooling). Reverse: output ↓ when PV ↑ (heating). Think: does the valve need to OPEN or CLOSE when temperature rises?" },
  { trap: "RTD lead wire error", explanation: "2-wire RTD adds lead resistance to reading (reads HIGH). 3-wire compensates. 4-wire eliminates. Exam loves asking which reads higher." },
  { trap: "Square root extraction for DP flow", explanation: "DP is proportional to flow SQUARED. Must extract square root. If DP doubles, flow increases by √2 (1.414×), NOT 2×." },
  { trap: "Gauge vs Absolute pressure", explanation: "Gauge = relative to atmosphere. Absolute = gauge + atmospheric (14.7 PSI). Vacuum is negative gauge but positive absolute." },
  { trap: "TC cold junction compensation", explanation: "CJC compensates for the reference junction temperature. Without CJC, reading will be LOW by the ambient temperature amount. RTDs don't need CJC." },
  { trap: "ISA first letter vs subsequent", explanation: "First letter = measured variable (F=Flow). Subsequent = function (I=Indicate, C=Control). FIC = Flow Indicating Controller, NOT 'First Instrument Controller'." },
  { trap: "Zener barrier vs Galvanic isolator", explanation: "Zener: simpler, cheaper, requires IS ground. Galvanic: no IS ground needed, provides isolation, better for HART. Exam asks about grounding requirement." },
  { trap: "Division 1 vs Division 2 equipment", explanation: "Div 1 equipment CAN be used in Div 2. Div 2 equipment CANNOT be used in Div 1. More stringent rating always works in less stringent area." },
  { trap: "Proportional band vs Gain", explanation: "PB% = 100/Gain. Wide PB = low gain = less aggressive. Narrow PB = high gain = more aggressive. 200% PB = Gain of 0.5." },
  { trap: "Integral windup", explanation: "When output saturates (0% or 100%) but error persists, integral accumulates endlessly. Anti-windup resets integral when output is saturated." },
  { trap: "Valve Cv at partial open", explanation: "Cv rating is at 100% open. At 50% stem travel: Equal% valve ≈ 10-15% of max Cv, Linear valve ≈ 50% of max Cv." },
  { trap: "Sensor trim vs Output trim", explanation: "Sensor trim: adjusts to actual process input (needs reference standard). Output trim: adjusts mA output only (needs mA meter). Different purposes!" },
  { trap: "HART multidrop mode", explanation: "In multidrop (address 1-15), 4-20mA analog signal is DISABLED (fixed at 4mA). Communication is digital only. Point-to-point = address 0." },
  { trap: "Hydrostatic test pressure", explanation: "Typically 1.5× design pressure. NEVER test with compressed gas (stored energy = explosion risk). Use water (incompressible)." },
];

export const commonScenarios = [
  {
    category: "Calibration Scenarios",
    icon: "🔧",
    scenarios: [
      {
        question: "A pressure transmitter reads 12.8 mA. Range is 0-200 PSI. What is the PV?",
        answer: "PV = ((12.8 - 4) / 16) × 200 + 0 = (8.8/16) × 200 = 0.55 × 200 = 110 PSI",
        concept: "PV from mA formula"
      },
      {
        question: "During 5-point cal, As-Found at 50% shows 11.85 mA instead of 12.0 mA. Error?",
        answer: "Error = (11.85 - 12.0) / 16 × 100 = -0.15/16 × 100 = -0.9375% of span",
        concept: "% error calculation"
      },
      {
        question: "RTD reads 138.5Ω. What temperature? (Pt100, α=0.00385)",
        answer: "R = R₀(1 + αΔT) → 138.5 = 100(1 + 0.00385×T) → T = (0.385)/0.00385 = 100°C",
        concept: "RTD resistance to temperature"
      },
      {
        question: "Flow transmitter with 0-100 GPM range. DP = 25% of max. What is flow?",
        answer: "Flow = √(0.25) × 100 = 0.5 × 100 = 50 GPM (square root relationship)",
        concept: "DP to flow conversion"
      },
      {
        question: "A thermocouple reads 15.2 mV. Ambient is 25°C (0.5 mV). What is the actual mV?",
        answer: "Actual mV = measured + CJC = 15.2 + 0.5 = 15.7 mV (then convert via TC table)",
        concept: "Cold junction compensation"
      },
    ],
  },
  {
    category: "Troubleshooting Scenarios",
    icon: "🛠️",
    scenarios: [
      {
        question: "Operator reports level reading 100% but tank is half full. DP transmitter with wet leg.",
        answer: "Wet leg may have lost fill fluid, reducing reference pressure. Low reference = high reading. Refill wet leg and recalibrate.",
        concept: "Wet leg reference problem"
      },
      {
        question: "Control valve oscillates between 40-60% when controller output is steady at 50%.",
        answer: "Likely positioner issue: gain too high, or excessive friction causing stick-slip. Reduce positioner gain or repack valve.",
        concept: "Valve oscillation diagnosis"
      },
      {
        question: "4-20 mA signal at transmitter shows 16 mA but DCS reads 15.2 mA.",
        answer: "Voltage drop across corroded connection. Measure voltage at each junction point. Clean and tighten terminals.",
        concept: "Signal loss in loop wiring"
      },
      {
        question: "pH reading is unstable and drifts. Last calibration was 6 months ago.",
        answer: "pH glass electrode has limited life (1-2 years). Reference junction may be fouled. Clean electrode, recalibrate with fresh buffers, replace if needed.",
        concept: "Analytical instrument maintenance"
      },
    ],
  },
  {
    category: "Safety & Installation Scenarios",
    icon: "⚠️",
    scenarios: [
      {
        question: "You need to install a transmitter in a Class I, Div 1 area. What protection methods?",
        answer: "Explosion-proof (XP) housing, or intrinsic safety (IS) with proper barriers. IS preferred for low power instruments. XP for higher power.",
        concept: "Hazardous area protection"
      },
      {
        question: "SIS proof test reveals 1 of 2 sensors failed (1oo2 configuration). What action?",
        answer: "Repair/replace failed sensor ASAP. System still functional (1 good sensor). Document failure. Calculate impact on PFD. Review proof test interval.",
        concept: "SIS maintenance"
      },
      {
        question: "During commissioning, a control valve with air-to-open action needs to fail closed on air loss.",
        answer: "ATO is correct — on air failure, spring returns valve to closed position. Verify by disconnecting air supply and confirming valve closes fully.",
        concept: "Fail-safe verification"
      },
    ],
  },
];

export const mnemonics = [
  { mnemonic: "\"LIVE ZERO\"", meaning: "4 mA = 0% signal. If you read 0 mA, something is WRONG (broken wire). This is why 4-20mA uses a live zero." },
  { mnemonic: "\"ATO = FClose\"", meaning: "Air-To-Open = Fail-Closed. When you lose air, the spring CLOSES the valve. Air pushes it open." },
  { mnemonic: "\"PID = Present-Integral-Derivative\"", meaning: "P = present error, I = past error (integral/sum), D = future error (rate of change/prediction)." },
  { mnemonic: "\"1.6 mA = 10%\"", meaning: "Quick conversion: every 1.6 mA step = 10% of span. 4→5.6→7.2→8.8→10.4→12→13.6→15.2→16.8→18.4→20 mA." },
  { mnemonic: "\"KFC\" for TC wire colors", meaning: "K=Yellow, F(J)=Black(white), C(T)=Blue. Or remember: K=Ketchup&Mustard (red/yellow)." },
  { mnemonic: "\"SIL = Safety Integrity Level\"", meaning: "SIL 1=10×, SIL 2=100×, SIL 3=1000× risk reduction. Each level is 10× better. Think powers of 10." },
  { mnemonic: "\"LOTO = Life Over Task Omission\"", meaning: "Lock Out Tag Out saves lives. Steps: Notify→Shutdown→Isolate→Lock/Tag→Verify→Work." },
  { mnemonic: "\"3 H's of valve problems\"", meaning: "Hysteresis (direction-dependent), Hunting (oscillation), and Hard-to-move (stiction). The 3 most common valve issues." },
  { mnemonic: "\"SMART = Sensor, Memory, And Remote Transmitter\"", meaning: "Smart transmitters have microprocessor, memory, and digital communication capability." },
  { mnemonic: "\"URV > LRV, always\"", meaning: "Upper Range Value is always larger than Lower Range Value. Span = URV - LRV. Simple but often confused." },
  { mnemonic: "\"250Ω for HART\"", meaning: "HART requires 250Ω minimum load resistance for communication. Usually at the DCS/PLC end of the loop." },
  { mnemonic: "\"Shield = ONE end only\"", meaning: "Ground cable shield at control room end ONLY. Both ends grounded = ground loop = noise." },
];
