import { Award } from "lucide-react";
import TipCard from "@/components/TipCard";
import MnemonicCard from "@/components/MnemonicCard";
import { passingTips, mnemonics } from "@/data/ccstData";

const TipsTab = () => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-1.5 mb-1">
      <Award className="w-3 h-3 text-primary" />
      <h2 className="text-xs font-mono font-bold text-foreground">
        How to Pass the CCST Exam
      </h2>
    </div>

    {/* Priority box */}
    <div className="bg-primary/10 border border-primary/30 rounded p-2 mb-1">
      <h3 className="text-2xs font-mono font-bold text-primary mb-1">
        ⚡ #1 PRIORITY RULE
      </h3>
      <p className="text-2xs text-foreground leading-tight">
        Calibration (38.3%) + Maintenance (36.7%) = <strong className="text-primary">75% of the exam</strong>. 
        Master these two domains first. Everything else is secondary.
      </p>
    </div>

    {/* Study plan */}
    <div className="bg-card border border-border rounded p-2">
      <h3 className="text-2xs font-mono font-bold text-secondary mb-1.5">
        📅 Recommended Study Plan
      </h3>
      <div className="space-y-1">
        {[
          { week: "Week 1-2", focus: "Calibration fundamentals, 4-20mA conversions, 5-point cal" },
          { week: "Week 3-4", focus: "Maintenance: P&IDs, troubleshooting, loop diagrams" },
          { week: "Week 5", focus: "Installation, hazardous areas, NEC classifications" },
          { week: "Week 6", focus: "Control valves, PID tuning, HART/Fieldbus" },
          { week: "Week 7-8", focus: "Practice exams, weak areas review, formula drills" },
        ].map((w, i) => (
          <div key={i} className="flex gap-2 text-2xs">
            <span className="text-accent font-mono font-semibold whitespace-nowrap min-w-[52px]">
              {w.week}
            </span>
            <span className="text-muted-foreground">{w.focus}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Mnemonics */}
    <h3 className="text-2xs font-mono font-bold text-foreground mt-2 mb-1">
      🧠 Memory Aids & Mnemonics
    </h3>
    {mnemonics.map((m, i) => (
      <MnemonicCard key={i} mnemonic={m.mnemonic} meaning={m.meaning} index={i} />
    ))}

    {/* All tips */}
    <h3 className="text-2xs font-mono font-bold text-foreground mt-2 mb-1">
      🎯 All Passing Tips ({passingTips.length})
    </h3>
    {passingTips.map((tip, i) => (
      <TipCard key={i} tip={tip} index={i} />
    ))}
  </div>
);

export default TipsTab;
