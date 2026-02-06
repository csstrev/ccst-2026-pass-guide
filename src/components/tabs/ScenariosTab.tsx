import { AlertTriangle } from "lucide-react";
import ScenarioCard from "@/components/ScenarioCard";
import { examTraps, commonScenarios } from "@/data/ccstData";
import { motion } from "framer-motion";

const ScenariosTab = () => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-1.5 mb-1">
      <AlertTriangle className="w-3 h-3 text-primary" />
      <h2 className="text-xs font-mono font-bold text-foreground">
        Exam Scenarios & Traps
      </h2>
    </div>

    {/* Exam traps */}
    <div className="bg-destructive/10 border border-destructive/30 rounded p-2 mb-1">
      <h3 className="text-2xs font-mono font-bold text-destructive mb-1">
        ⚠️ COMMON EXAM TRAPS — Don't Fall For These!
      </h3>
      <p className="text-2xs text-foreground leading-tight">
        These are the most frequently missed questions. Understanding WHY the wrong answer seems right is key.
      </p>
    </div>

    <div className="space-y-1.5">
      {examTraps.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
          className="bg-card border border-border rounded p-2"
        >
          <span className="text-2xs font-mono font-bold text-destructive block">
            ❌ {t.trap}
          </span>
          <p className="text-2xs text-muted-foreground leading-tight mt-0.5">
            ✅ {t.explanation}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Practice scenarios */}
    <h3 className="text-2xs font-mono font-bold text-foreground mt-3 mb-1">
      📝 Practice Scenarios
    </h3>
    {commonScenarios.map((group, i) => (
      <ScenarioCard
        key={group.category}
        category={group.category}
        icon={group.icon}
        scenarios={group.scenarios}
        index={i}
      />
    ))}
  </div>
);

export default ScenariosTab;
