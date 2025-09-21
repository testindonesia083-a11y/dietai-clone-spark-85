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
    return <div className="text-6xl lg:text-7xl font-bold gradient-text mb-2">
        +{count}
        <span className="text-2xl lg:text-3xl ml-1">{unit}</span>
      </div>;
  };
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img src={trophyIcon} alt="Trophy" className="w-16 h-16" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Resultados <span className="gradient-text">comprovados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milhares de pessoas já transformaram suas vidas com nosso app
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 border-border hover:border-primary/50 transition-all duration-300">
              <CountingNumber targetValue={stat.targetValue} unit={stat.unit} />
              <p className="text-lg text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;