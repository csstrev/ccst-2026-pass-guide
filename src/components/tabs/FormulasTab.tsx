import FormulaCard from "@/components/FormulaCard";
import { keyFormulas } from "@/data/ccstData";

const FormulasTab = () => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-1.5 mb-1">
      <span className="text-xs">📐</span>
      <h2 className="text-xs font-mono font-bold text-foreground">
        Essential Formulas
      </h2>
    </div>
    {keyFormulas.map((group, i) => (
      <FormulaCard key={group.category} category={group.category} formulas={group.formulas} index={i} />
    ))}

    {/* Quick conversion table */}
    <div className="bg-card border border-border rounded overflow-hidden mt-2">
      <div className="bg-muted px-2 py-1">
        <h3 className="text-2xs font-mono font-bold text-primary uppercase tracking-wider">
          4-20 mA Quick Table
        </h3>
      </div>
      <div className="p-1.5">
        <div className="grid grid-cols-5 gap-px text-2xs font-mono">
          <div className="bg-muted p-1 text-center text-primary font-bold">%</div>
          <div className="bg-muted p-1 text-center text-primary font-bold">mA</div>
          <div className="bg-muted p-1 text-center text-primary font-bold">PSI</div>
          <div className="bg-muted p-1 text-center text-primary font-bold">Signal</div>
          <div className="bg-muted p-1 text-center text-primary font-bold">Valve</div>
          {[
            ["0%", "4.0", "3.0", "LRV", "Closed*"],
            ["25%", "8.0", "6.0", "—", "25%"],
            ["50%", "12.0", "9.0", "Mid", "50%"],
            ["75%", "16.0", "12.0", "—", "75%"],
            ["100%", "20.0", "15.0", "URV", "Open*"],
          ].map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`p-1 text-center ${i % 2 === 0 ? "bg-card" : "bg-muted/50"} ${j === 0 ? "text-secondary font-semibold" : "text-foreground"}`}
              >
                {cell}
              </div>
            ))
          )}
        </div>
        <p className="text-2xs text-muted-foreground mt-1 italic">
          * ATO (Air-to-Open). For ATC, reverse valve column.
        </p>
      </div>
    </div>

    {/* RTD Resistance Table */}
    <div className="bg-card border border-border rounded overflow-hidden mt-2">
      <div className="bg-muted px-2 py-1">
        <h3 className="text-2xs font-mono font-bold text-primary uppercase tracking-wider">
          Pt100 RTD Quick Table
        </h3>
      </div>
      <div className="p-1.5">
        <div className="grid grid-cols-4 gap-px text-2xs font-mono">
          <div className="bg-muted p-1 text-center text-primary font-bold">°C</div>
          <div className="bg-muted p-1 text-center text-primary font-bold">Ω</div>
          <div className="bg-muted p-1 text-center text-primary font-bold">°C</div>
          <div className="bg-muted p-1 text-center text-primary font-bold">Ω</div>
          {[
            ["-50", "80.31", "150", "157.33"],
            ["0", "100.00", "200", "175.86"],
            ["50", "119.40", "250", "194.10"],
            ["100", "138.51", "300", "212.05"],
          ].map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`rtd-${i}-${j}`}
                className={`p-1 text-center ${i % 2 === 0 ? "bg-card" : "bg-muted/50"} ${j === 0 || j === 2 ? "text-secondary font-semibold" : "text-foreground"}`}
              >
                {cell}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </div>
);

export default FormulasTab;
