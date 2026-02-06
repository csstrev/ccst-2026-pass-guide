import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface TipCardProps {
  tip: string;
  index: number;
}

const TipCard = ({ tip, index }: TipCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="flex items-start gap-2 bg-card border border-border rounded p-2"
    >
      <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
      <p className="text-2xs text-foreground leading-tight">{tip}</p>
    </motion.div>
  );
};

export default TipCard;
