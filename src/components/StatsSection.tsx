import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import trophyIcon from "@/assets/trophy.webp";

const StatsSection = () => {
  const stats = [
    {
      targetValue: 500,
      unit: "mil",
      label: "Alimentos já registrados",
    },
    {
      targetValue: 2000,
      unit: "kg",
      label: "Perdidos",
    },
    {
      targetValue: 10,
      unit: "mil",
      label: "Pessoas utilizam diariamente",
    },
  ];

  const CountingNumber = ({ targetValue, unit }: { targetValue: number; unit: string }) => {
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
      <div className="text-6xl lg:text-7xl font-bold gradient-text mb-2">
        +{count}
        <span className="text-2xl lg:text-3xl ml-1">{unit}</span>
      </div>
    );
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <img src={trophyIcon} alt="Trophy" className="w-8 h-8 mr-3" />
            <span className="text-lg text-muted-foreground"><span className="font-bold">Veja nossos números</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8"
            >
              <CountingNumber targetValue={stat.targetValue} unit={stat.unit} />
              <p className="text-foreground font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;