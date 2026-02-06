import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TopicCardProps {
  title: string;
  icon: string;
  weight: string;
  items: string[];
  index: number;
}

const TopicCard = ({ title, icon, weight, items, index }: TopicCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border border-border rounded bg-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 text-left"
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-sm">{icon}</span>
          <div className="min-w-0">
            <h3 className="text-xs font-mono font-semibold text-foreground truncate">
              {title}
            </h3>
            <span className="text-2xs text-primary font-mono">{weight}</span>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="w-3 h-3 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="w-3 h-3 text-muted-foreground flex-shrink-0" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-2 border-t border-border">
              <ul className="space-y-1 mt-1.5">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-2xs text-muted-foreground">
                    <span className="text-secondary mt-0.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TopicCard;
