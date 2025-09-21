import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import trophyIcon from "@/assets/trophy.webp";
const StatsSection = () => {
  const stats = [{
    targetValue: 500,
    unit: "mil",
    label: "Alimentos já registrados"
  }, {
    targetValue: 2000,
    unit: "kg",
    label: "Perdidos"
  }, {
    targetValue: 10,
    unit: "mil",
    label: "Pessoas utilizam diariamente"
  }];
  const CountingNumber = ({
    targetValue,
    unit
  }: {
    targetValue: number;
    unit: string;
  }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = targetValue / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(stepValue * currentStep), targetValue);
        setCount(newValue);
        if (currentStep >= steps) {
          clearInterval(timer);
          setCount(targetValue);
        }
      }, stepDuration);
      return () => clearInterval(timer);
    }, [targetValue]);
    return (
      <span className="text-4xl font-bold text-primary">
        {count}
        <span className="text-xl ml-1">{unit}</span>
      </span>
    );
  };

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 bg-card border-primary/20">
              <div className="flex flex-col items-center space-y-4">
                <img src={trophyIcon} alt="Trophy" className="w-12 h-12" />
                <CountingNumber targetValue={stat.targetValue} unit={stat.unit} />
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;