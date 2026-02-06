import { Zap } from "lucide-react";
import CheatSheetCard from "@/components/CheatSheetCard";
import { cheatSheets, quickReference } from "@/data/ccstData";

const CheatSheetTab = () => (
  <div className="space-y-2">
    <div className="flex items-center gap-1.5 mb-1">
      <Zap className="w-3 h-3 text-primary" />
      <h2 className="text-xs font-mono font-bold text-foreground">
        Quick Reference Cheat Sheet
      </h2>
    </div>

    <CheatSheetCard title="📡 Signals & Communication" items={cheatSheets.signals} color="primary" index={0} />
    <CheatSheetCard title="🔢 Key Formulas" items={cheatSheets.formulas} color="secondary" index={1} />
    <CheatSheetCard title="🔩 Control Valves" items={cheatSheets.controlValves} color="accent" index={2} />
    <CheatSheetCard title="🎛️ PID Control" items={cheatSheets.pid} color="primary" index={3} />
    <CheatSheetCard title="🌡️ Thermocouple Types" items={quickReference.tcTypes} color="secondary" index={4} />
    <CheatSheetCard title="⚠️ Hazardous Area Classifications" items={quickReference.hazardousAreas} color="accent" index={5} />
    <CheatSheetCard title="📏 Measurement Types" items={cheatSheets.measurement} color="primary" index={6} />
    <CheatSheetCard title="🛡️ Safety Systems (SIS/SIL)" items={cheatSheets.safetyystems} color="secondary" index={7} />
    <CheatSheetCard title="📝 ISA-5.1 Symbols & Tags" items={quickReference.isaSymbols} color="accent" index={8} />
    <CheatSheetCard title="🔤 Common Acronyms" items={quickReference.commonAcronyms} color="primary" index={9} />
    <CheatSheetCard title="🔌 Wiring & Connections" items={quickReference.wiring} color="secondary" index={10} />
  </div>
);

export default CheatSheetTab;
