import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface TroubleshootCardProps {
  category: string;
  icon: string;
  scenarios: { symptom: string; cause: string; fix: string }[];
  index: number;
}

const TroubleshootCard = ({ category, icon, scenarios, index }: TroubleshootCardProps) => {
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
            <div className="flex items-start gap-1 mb-0.5">
              <AlertTriangle className="w-2.5 h-2.5 text-destructive flex-shrink-0 mt-0.5" />
              <span className="text-2xs font-semibold text-foreground">{s.symptom}</span>
            </div>
            <div className="ml-3.5 space-y-0.5">
              <p className="text-2xs text-muted-foreground">
                <span className="text-secondary font-semibold">Cause:</span> {s.cause}
              </p>
              <p className="text-2xs text-muted-foreground">
                <span className="text-accent font-semibold">Fix:</span> {s.fix}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TroubleshootCard;
