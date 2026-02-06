import { useState } from "react";
import { motion } from "framer-motion";

interface TabNavProps {
  tabs: { id: string; label: string; icon: string }[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNav = ({ tabs, activeTab, onTabChange }: TabNavProps) => {
  return (
    <div className="flex gap-0.5 bg-muted rounded p-0.5 overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative flex items-center gap-1 px-2 py-1.5 rounded text-2xs font-mono font-medium whitespace-nowrap transition-colors ${
            activeTab === tab.id
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{tab.icon}</span>
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabNav;
