import { motion } from "framer-motion";

interface CheatSheetCardProps {
  title: string;
  items: { term: string; definition: string }[];
  color: "primary" | "secondary" | "accent";
  index: number;
}

const CheatSheetCard = ({ title, items, color, index }: CheatSheetCardProps) => {
  const borderColors = {
    primary: "border-l-primary",
    secondary: "border-l-secondary",
    accent: "border-l-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`bg-card border border-border rounded ${borderColors[color]} border-l-2 p-2`}
    >
      <h3 className="text-xs font-mono font-bold text-foreground mb-1.5">{title}</h3>
      <div className="space-y-1">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-2xs font-mono font-semibold text-primary">{item.term}</span>
            <span className="text-2xs text-muted-foreground leading-tight">{item.definition}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CheatSheetCard;
