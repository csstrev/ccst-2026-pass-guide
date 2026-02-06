import { motion } from "framer-motion";

interface FormulaCardProps {
  category: string;
  formulas: { name: string; formula: string; note?: string }[];
  index: number;
}

const FormulaCard = ({ category, formulas, index }: FormulaCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card border border-border rounded overflow-hidden"
    >
      <div className="bg-muted px-2 py-1">
        <h3 className="text-2xs font-mono font-bold text-primary uppercase tracking-wider">
          {category}
        </h3>
      </div>
      <div className="p-2 space-y-1.5">
        {formulas.map((f, i) => (
          <div key={i} className="border-b border-border last:border-0 pb-1.5 last:pb-0">
            <span className="text-2xs font-semibold text-foreground">{f.name}</span>
            <div className="bg-muted rounded px-1.5 py-0.5 mt-0.5">
              <code className="text-2xs text-primary font-mono">{f.formula}</code>
            </div>
            {f.note && (
              <span className="text-2xs text-muted-foreground italic mt-0.5 block">{f.note}</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FormulaCard;
