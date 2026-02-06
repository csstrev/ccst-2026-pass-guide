import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import TopicCard from "@/components/TopicCard";
import { examDomains } from "@/data/ccstData";

const DomainsTab = () => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-1.5 mb-1">
      <BookOpen className="w-3 h-3 text-primary" />
      <h2 className="text-xs font-mono font-bold text-foreground">
        Exam Domains & Topics
      </h2>
    </div>
    {examDomains.map((domain, i) => (
      <TopicCard
        key={domain.title}
        title={domain.title}
        icon={domain.icon}
        weight={domain.weight}
        items={domain.items}
        index={i}
      />
    ))}

    <div className="bg-card border border-border rounded p-2 mt-2">
      <h3 className="text-2xs font-mono font-bold text-foreground mb-1.5">
        Weight Distribution
      </h3>
      <div className="space-y-1">
        {[
          { name: "Calibration", pct: 38.3, color: "bg-primary" },
          { name: "Maintenance", pct: 36.7, color: "bg-secondary" },
          { name: "Installation", pct: 25, color: "bg-accent" },
        ].map((d) => (
          <div key={d.name}>
            <div className="flex justify-between text-2xs font-mono mb-0.5">
              <span className="text-muted-foreground">{d.name}</span>
              <span className="text-foreground font-semibold">{d.pct}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${d.pct}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`h-full ${d.color} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DomainsTab;
