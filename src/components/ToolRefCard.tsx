import { motion } from "framer-motion";

interface ToolRefCardProps {
  category: string;
  tools: { name: string; use: string }[];
  index: number;
}

const ToolRefCard = ({ category, tools, index }: ToolRefCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card border border-border rounded overflow-hidden"
    >
      <div className="bg-muted px-2 py-1">
        <h3 className="text-2xs font-mono font-bold text-primary uppercase tracking-wider">
          {category}
        </h3>
      </div>
      <div className="p-2 space-y-1.5">
        {tools.map((t, i) => (
          <div key={i} className="border-b border-border last:border-0 pb-1.5 last:pb-0">
            <span className="text-2xs font-semibold text-secondary">{t.name}</span>
            <p className="text-2xs text-muted-foreground leading-tight mt-0.5">{t.use}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ToolRefCard;
