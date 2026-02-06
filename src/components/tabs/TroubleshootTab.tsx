import { Wrench } from "lucide-react";
import TroubleshootCard from "@/components/TroubleshootCard";
import ToolRefCard from "@/components/ToolRefCard";
import { troubleshootingGuides, toolsReference } from "@/data/ccstData";

const TroubleshootTab = () => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-1.5 mb-1">
      <Wrench className="w-3 h-3 text-primary" />
      <h2 className="text-xs font-mono font-bold text-foreground">
        Troubleshooting Guides
      </h2>
    </div>

    {troubleshootingGuides.map((guide, i) => (
      <TroubleshootCard
        key={guide.category}
        category={guide.category}
        icon={guide.icon}
        scenarios={guide.scenarios}
        index={i}
      />
    ))}

    {/* Tools reference */}
    <h3 className="text-2xs font-mono font-bold text-foreground mt-3 mb-1">
      🧰 Tools & Equipment Reference
    </h3>
    {toolsReference.map((group, i) => (
      <ToolRefCard key={group.category} category={group.category} tools={group.tools} index={i} />
    ))}
  </div>
);

export default TroubleshootTab;
