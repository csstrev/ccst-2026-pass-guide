import { useState } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import TabNav from "@/components/TabNav";
import DomainsTab from "@/components/tabs/DomainsTab";
import CheatSheetTab from "@/components/tabs/CheatSheetTab";
import FormulasTab from "@/components/tabs/FormulasTab";
import TipsTab from "@/components/tabs/TipsTab";
import TroubleshootTab from "@/components/tabs/TroubleshootTab";
import ScenariosTab from "@/components/tabs/ScenariosTab";

const tabs = [
  { id: "domains", label: "Domains", icon: "📋" },
  { id: "cheatsheet", label: "Cheat Sheet", icon: "⚡" },
  { id: "formulas", label: "Formulas", icon: "📐" },
  { id: "troubleshoot", label: "Diagnose", icon: "🔍" },
  { id: "scenarios", label: "Traps", icon: "⚠️" },
  { id: "tips", label: "Tips", icon: "🎯" },
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
        {activeTab === "domains" && <DomainsTab />}
        {activeTab === "cheatsheet" && <CheatSheetTab />}
        {activeTab === "formulas" && <FormulasTab />}
        {activeTab === "troubleshoot" && <TroubleshootTab />}
        {activeTab === "scenarios" && <ScenariosTab />}
        {activeTab === "tips" && <TipsTab />}
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
