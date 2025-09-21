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
  return;
};
export default StatsSection;