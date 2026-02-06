import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface MnemonicCardProps {
  mnemonic: string;
  meaning: string;
  index: number;
}

const MnemonicCard = ({ mnemonic, meaning, index }: MnemonicCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="bg-card border border-border rounded p-2"
    >
      <div className="flex items-start gap-1.5">
        <Lightbulb className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-2xs font-mono font-bold text-secondary block">{mnemonic}</span>
          <p className="text-2xs text-muted-foreground leading-tight mt-0.5">{meaning}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MnemonicCard;
