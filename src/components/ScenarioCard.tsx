import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

interface ScenarioCardProps {
  category: string;
  icon: string;
  scenarios: { question: string; answer: string; concept: string }[];
  index: number;
}

const ScenarioCard = ({ category, icon, scenarios, index }: ScenarioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card border border-border rounded overflow-hidden"
    >
      <div className="bg-muted px-2 py-1 flex items-center gap-1.5">
        <span className="text-xs">{icon}</span>
        <h3 className="text-2xs font-mono font-bold text-primary uppercase tracking-wider">
          {category}
        </h3>
      </div>
      <div className="p-2 space-y-2">
        {scenarios.map((s, i) => (
          <div key={i} className="border-b border-border last:border-0 pb-2 last:pb-0">
            <div className="flex items-start gap-1 mb-1">
              <HelpCircle className="w-2.5 h-2.5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-2xs font-semibold text-foreground">{s.question}</span>
            </div>
            <div className="bg-muted rounded px-1.5 py-1 mb-0.5">
              <p className="text-2xs text-accent font-mono">{s.answer}</p>
            </div>
            <span className="text-2xs text-muted-foreground italic">💡 {s.concept}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScenarioCard;
