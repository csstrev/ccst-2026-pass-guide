import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, BookOpen, Zap, Award } from "lucide-react";
import TabNav from "@/components/TabNav";
import TopicCard from "@/components/TopicCard";
import CheatSheetCard from "@/components/CheatSheetCard";
import FormulaCard from "@/components/FormulaCard";
import TipCard from "@/components/TipCard";
import {
  examDomains,
  cheatSheets,
  keyFormulas,
  passingTips,
  quickReference,
} from "@/data/ccstData";

const tabs = [
  { id: "domains", label: "Domains", icon: "📋" },
  { id: "cheatsheet", label: "Cheat Sheet", icon: "⚡" },
  { id: "formulas", label: "Formulas", icon: "📐" },
  { id: "tips", label: "Pass Tips", icon: "🎯" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("domains");

  return (
    <div className="min-h-screen bg-background p-1p">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-2"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xs font-mono font-bold text-primary text-glow-amber leading-none">
              CCST 2026
            </h1>
            <p className="text-2xs text-muted-foreground font-mono leading-none mt-0.5">
              Certified Control Systems Technician
            </p>
          </div>
        </div>

        {/* Exam Stats Bar */}
        <div className="flex gap-1 text-2xs font-mono">
          <div className="flex-1 bg-card border border-border rounded px-1.5 py-1 text-center">
            <span className="text-primary font-bold">110</span>
            <span className="text-muted-foreground ml-1">Questions</span>
          </div>
          <div className="flex-1 bg-card border border-border rounded px-1.5 py-1 text-center">
            <span className="text-secondary font-bold">3 hrs</span>
            <span className="text-muted-foreground ml-1">Time</span>
          </div>
          <div className="flex-1 bg-card border border-border rounded px-1.5 py-1 text-center">
            <span className="text-accent font-bold">~70%</span>
            <span className="text-muted-foreground ml-1">Pass</span>
          </div>
        </div>
      </motion.header>

      {/* Tab Navigation */}
      <div className="mb-2">
        <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Content */}
      <motion.main
        key={activeTab}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === "domains" && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 mb-1">
              <BookOpen className="w-3 h-3 text-primary" />
              <h2 className="text-xs font-mono font-bold text-foreground">
                Exam Domains & Topics
              </h2>
            </div>
            {examDomains.map((domain, i) => (
              <TopicCard
                key={domain.title}
                title={domain.title}
                icon={domain.icon}
                weight={domain.weight}
                items={domain.items}
                index={i}
              />
            ))}

            {/* Domain weight visualization */}
            <div className="bg-card border border-border rounded p-2 mt-2">
              <h3 className="text-2xs font-mono font-bold text-foreground mb-1.5">
                Weight Distribution
              </h3>
              <div className="space-y-1">
                {[
                  { name: "Calibration", pct: 38.3, color: "bg-primary" },
                  { name: "Maintenance", pct: 36.7, color: "bg-secondary" },
                  { name: "Installation", pct: 25, color: "bg-accent" },
                ].map((d) => (
                  <div key={d.name}>
                    <div className="flex justify-between text-2xs font-mono mb-0.5">
                      <span className="text-muted-foreground">{d.name}</span>
                      <span className="text-foreground font-semibold">{d.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${d.pct}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`h-full ${d.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "cheatsheet" && (
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 mb-1">
              <Zap className="w-3 h-3 text-primary" />
              <h2 className="text-xs font-mono font-bold text-foreground">
                Quick Reference Cheat Sheet
              </h2>
            </div>

            <CheatSheetCard
              title="📡 Signals & Communication"
              items={cheatSheets.signals}
              color="primary"
              index={0}
            />
            <CheatSheetCard
              title="🔢 Key Formulas"
              items={cheatSheets.formulas}
              color="secondary"
              index={1}
            />
            <CheatSheetCard
              title="🔩 Control Valves"
              items={cheatSheets.controlValves}
              color="accent"
              index={2}
            />
            <CheatSheetCard
              title="🎛️ PID Control"
              items={cheatSheets.pid}
              color="primary"
              index={3}
            />
            <CheatSheetCard
              title="🌡️ Thermocouple Types"
              items={quickReference.tcTypes}
              color="secondary"
              index={4}
            />
            <CheatSheetCard
              title="⚠️ Hazardous Area Classifications"
              items={quickReference.hazardousAreas}
              color="accent"
              index={5}
            />
          </div>
        )}

        {activeTab === "formulas" && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-xs">📐</span>
              <h2 className="text-xs font-mono font-bold text-foreground">
                Essential Formulas
              </h2>
            </div>
            {keyFormulas.map((group, i) => (
              <FormulaCard
                key={group.category}
                category={group.category}
                formulas={group.formulas}
                index={i}
              />
            ))}

            {/* Quick conversion table */}
            <div className="bg-card border border-border rounded overflow-hidden mt-2">
              <div className="bg-muted px-2 py-1">
                <h3 className="text-2xs font-mono font-bold text-primary uppercase tracking-wider">
                  4-20 mA Quick Table
                </h3>
              </div>
              <div className="p-1.5">
                <div className="grid grid-cols-5 gap-px text-2xs font-mono">
                  <div className="bg-muted p-1 text-center text-primary font-bold">%</div>
                  <div className="bg-muted p-1 text-center text-primary font-bold">mA</div>
                  <div className="bg-muted p-1 text-center text-primary font-bold">PSI</div>
                  <div className="bg-muted p-1 text-center text-primary font-bold">Signal</div>
                  <div className="bg-muted p-1 text-center text-primary font-bold">Valve</div>
                  {[
                    ["0%", "4.0", "3.0", "LRV", "Closed*"],
                    ["25%", "8.0", "6.0", "—", "25%"],
                    ["50%", "12.0", "9.0", "Mid", "50%"],
                    ["75%", "16.0", "12.0", "—", "75%"],
                    ["100%", "20.0", "15.0", "URV", "Open*"],
                  ].map((row, i) =>
                    row.map((cell, j) => (
                      <div
                        key={`${i}-${j}`}
                        className={`p-1 text-center ${
                          i % 2 === 0 ? "bg-card" : "bg-muted/50"
                        } ${j === 0 ? "text-secondary font-semibold" : "text-foreground"}`}
                      >
                        {cell}
                      </div>
                    ))
                  )}
                </div>
                <p className="text-2xs text-muted-foreground mt-1 italic">
                  * ATO (Air-to-Open). For ATC, reverse valve column.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tips" && (
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

            {/* All tips */}
            <h3 className="text-2xs font-mono font-bold text-foreground mt-2 mb-1">
              🎯 All Passing Tips
            </h3>
            {passingTips.map((tip, i) => (
              <TipCard key={i} tip={tip} index={i} />
            ))}
          </div>
        )}
      </motion.main>

      {/* Footer */}
      <footer className="mt-4 pb-4 text-center">
        <p className="text-2xs text-muted-foreground font-mono">
          CCST Exam Prep 2026 • ISA Certification
        </p>
        <p className="text-2xs text-muted-foreground/50 font-mono mt-0.5">
          Study guide only — not affiliated with ISA
        </p>
      </footer>
    </div>
  );
};

export default Index;
